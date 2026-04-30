export type WotRegion = 'eu' | 'com' | 'asia';

export type TankClass = 'lightTank' | 'mediumTank' | 'heavyTank' | 'tankDestroyer' | 'spg';

export type SearchPlayerResult = {
  accountId: number;
  nickname: string;
};

export type PlayerSummary = {
  accountId: number;
  nickname: string;
  battles: number;
  wins: number;
  losses: number;
  survivedBattles: number;
  frags: number;
  damageDealt: number;
  winRate: number;
  averageDamage: number;
  survivalRate: number;
  fragPerDeath: number;
};

export type TankRow = {
  tankId: number;
  name: string;
  nation: string;
  tier: number;
  type: TankClass;
  battles: number;
  wins: number;
  averageDamage: number;
  averageFrags: number;
  markOfMastery: number;
};

export type PlayerProfileResponse = {
  player: PlayerSummary;
  tanks: TankRow[];
};

export type MapGuideStep = {
  early: string;
  mid: string;
  late: string;
  danger: string;
};

export type MapGuide = {
  description: string;
  classes: Partial<Record<TankClass, MapGuideStep>>;
};

export type AppConfig = {
  mode: 'mock' | 'live';
  applicationId: string;
  defaultRegion: WotRegion;
  preferredNickname: string;
};

export type PublicAppConfig = Omit<AppConfig, 'applicationId'> & {
  hasApplicationId: boolean;
};


export type CustomGuide = {
  id: string;
  map: string;
  tankClass: TankClass;
  tank: string;
  safeRoute: string;
  aggressiveRoute: string;
  avoid: string;
  note: string;
  createdAt: string;
};
