import { average, percent, safeNumber } from '@/lib/utils';
import { mockProfile, mockSearchPlayer } from '@/lib/mock-data';
import { getEffectiveConfig } from '@/lib/app-config';
import type { PlayerProfileResponse, SearchPlayerResult, TankClass, TankRow, WotRegion } from '@/lib/types';

const BASE_URLS: Record<WotRegion, string> = {
  eu: 'https://api.worldoftanks.eu/wot',
  com: 'https://api.worldoftanks.com/wot',
  asia: 'https://api.worldoftanks.asia/wot',
};

type WgApiResponse<T> = {
  status: 'ok' | 'error';
  error?: {
    code: number;
    message: string;
    field: string;
    value: string;
  };
  data: T;
};

async function shouldUseMockData(): Promise<boolean> {
  const config = await getEffectiveConfig();
  return config.mode !== 'live';
}

async function getApplicationId(): Promise<string> {
  const config = await getEffectiveConfig();

  if (!config.applicationId) {
    throw new Error('Missing Wargaming API key. Open Setup Wizard and save your application_id.');
  }

  return config.applicationId;
}

function getBaseUrl(region: WotRegion): string {
  return BASE_URLS[region] ?? BASE_URLS.eu;
}

async function wargamingGet<T>(region: WotRegion, path: string, params: Record<string, string>): Promise<T> {
  const url = new URL(`${getBaseUrl(region)}${path}`);
  url.searchParams.set('application_id', await getApplicationId());

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), {
    method: 'GET',
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Wargaming API HTTP error: ${response.status}`);
  }

  const json = (await response.json()) as WgApiResponse<T>;

  if (json.status !== 'ok') {
    throw new Error(json.error?.message ?? 'Unknown Wargaming API error');
  }

  return json.data;
}

export async function searchPlayerByNickname(region: WotRegion, nickname: string): Promise<SearchPlayerResult | null> {
  if (await shouldUseMockData()) {
    return mockSearchPlayer(region, nickname);
  }

  const data = await wargamingGet<Array<{ account_id: number; nickname: string }>>(region, '/account/list/', {
    search: nickname,
    limit: '1',
  });

  const first = data[0];
  if (!first) return null;

  return {
    accountId: first.account_id,
    nickname: first.nickname,
  };
}

export async function getPlayerProfile(region: WotRegion, accountId: number): Promise<PlayerProfileResponse> {
  if (await shouldUseMockData()) {
    const profile = mockProfile(accountId);
    if (!profile) throw new Error('Mock player profile was not found.');
    return profile;
  }

  const [accountInfoData, accountTanksData, vehiclesData] = await Promise.all([
    wargamingGet<Record<string, { nickname: string; statistics?: { all?: Record<string, number> } }>>(region, '/account/info/', {
      account_id: String(accountId),
      fields: 'nickname,statistics.all',
    }),
    wargamingGet<Record<string, Array<{ tank_id: number; mark_of_mastery?: number; statistics?: Record<string, number> }>>>(
      region,
      '/account/tanks/',
      {
        account_id: String(accountId),
        fields: 'tank_id,mark_of_mastery,statistics',
      },
    ),
    wargamingGet<Record<string, { tank_id: number; name: string; nation: string; tier: number; type: TankClass }>>(
      region,
      '/encyclopedia/vehicles/',
      {
        fields: 'tank_id,name,nation,tier,type',
      },
    ),
  ]);

  const accountInfo = accountInfoData[String(accountId)];
  if (!accountInfo) {
    throw new Error('Player account info was not found.');
  }

  const allStats = accountInfo.statistics?.all ?? {};
  const battles = safeNumber(allStats.battles);
  const wins = safeNumber(allStats.wins);
  const losses = safeNumber(allStats.losses);
  const survivedBattles = safeNumber(allStats.survived_battles);
  const frags = safeNumber(allStats.frags);
  const damageDealt = safeNumber(allStats.damage_dealt);

  const tanksRaw = accountTanksData[String(accountId)] ?? [];

  const tanks: TankRow[] = tanksRaw
    .map((tank) => {
      const vehicle = vehiclesData[String(tank.tank_id)];
      if (!vehicle) return null;

      const tankStats = tank.statistics ?? {};
      const tankBattles = safeNumber(tankStats.battles);
      const tankWins = safeNumber(tankStats.wins);
      const tankDamage = safeNumber(tankStats.damage_dealt);
      const tankFrags = safeNumber(tankStats.frags);

      return {
        tankId: vehicle.tank_id,
        name: vehicle.name,
        nation: vehicle.nation,
        tier: vehicle.tier,
        type: vehicle.type,
        battles: tankBattles,
        wins: tankWins,
        averageDamage: average(tankDamage, tankBattles),
        averageFrags: Number((tankBattles ? tankFrags / tankBattles : 0).toFixed(2)),
        markOfMastery: safeNumber(tank.mark_of_mastery),
      };
    })
    .filter((tank): tank is TankRow => tank !== null)
    .sort((a, b) => b.battles - a.battles);

  return {
    player: {
      accountId,
      nickname: accountInfo.nickname,
      battles,
      wins,
      losses,
      survivedBattles,
      frags,
      damageDealt,
      winRate: percent(wins, battles),
      averageDamage: average(damageDealt, battles),
      survivalRate: percent(survivedBattles, battles),
      fragPerDeath: Number((frags / Math.max(1, battles - survivedBattles)).toFixed(2)),
    },
    tanks,
  };
}
