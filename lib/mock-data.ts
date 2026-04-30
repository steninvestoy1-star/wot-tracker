import type { PlayerProfileResponse, SearchPlayerResult, WotRegion } from '@/lib/types';

const MOCK_PLAYERS: Record<string, SearchPlayerResult> = {
  kajakas: { accountId: 100000001, nickname: 'kajakas' },
  skill4ltu: { accountId: 100000002, nickname: 'skill4ltu' },
};

const MOCK_PROFILES: Record<number, PlayerProfileResponse> = {
  100000001: {
    player: {
      accountId: 100000001,
      nickname: 'kajakas',
      battles: 12458,
      wins: 6551,
      losses: 5530,
      survivedBattles: 3520,
      frags: 15420,
      damageDealt: 19250000,
      winRate: 52.6,
      averageDamage: 1545,
      survivalRate: 28.3,
      fragPerDeath: 1.72,
    },
    tanks: [
      { tankId: 1, name: 'T-100 LT', nation: 'ussr', tier: 10, type: 'lightTank', battles: 522, wins: 289, averageDamage: 1820, averageFrags: 1.21, markOfMastery: 3 },
      { tankId: 2, name: 'Object 140', nation: 'ussr', tier: 10, type: 'mediumTank', battles: 438, wins: 241, averageDamage: 2310, averageFrags: 1.03, markOfMastery: 2 },
      { tankId: 3, name: 'Super Conqueror', nation: 'uk', tier: 10, type: 'heavyTank', battles: 390, wins: 216, averageDamage: 2470, averageFrags: 0.99, markOfMastery: 1 },
      { tankId: 4, name: 'Strv 103B', nation: 'sweden', tier: 10, type: 'tankDestroyer', battles: 281, wins: 146, averageDamage: 2540, averageFrags: 0.95, markOfMastery: 2 }
    ],
  }
};

export function mockSearchPlayer(_region: WotRegion, nickname: string): SearchPlayerResult | null {
  return MOCK_PLAYERS[nickname.trim().toLowerCase()] ?? null;
}

export function mockProfile(accountId: number): PlayerProfileResponse | null {
  return MOCK_PROFILES[accountId] ?? null;
}
