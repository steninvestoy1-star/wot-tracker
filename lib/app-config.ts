import { promises as fs } from 'fs';
import path from 'path';
import type { AppConfig, PublicAppConfig, WotRegion } from '@/lib/types';

const CONFIG_PATH = path.join(process.cwd(), '.wot-config.json');

const DEFAULT_CONFIG: AppConfig = {
  mode: process.env.WOT_USE_MOCK_DATA === 'false' ? 'live' : 'mock',
  applicationId: '',
  defaultRegion: (process.env.WOT_DEFAULT_REGION as WotRegion | undefined) ?? 'eu',
  preferredNickname: '',
};

function normalizeRegion(value: string | undefined): WotRegion {
  if (value === 'com' || value === 'asia' || value === 'eu') {
    return value;
  }

  return 'eu';
}

function normalizeMode(value: string | undefined): 'mock' | 'live' {
  return value === 'live' ? 'live' : 'mock';
}

function normalizeConfig(input: Partial<AppConfig> | null | undefined): AppConfig {
  return {
    mode: normalizeMode(input?.mode),
    applicationId: typeof input?.applicationId === 'string' ? input.applicationId.trim() : '',
    defaultRegion: normalizeRegion(input?.defaultRegion),
    preferredNickname: typeof input?.preferredNickname === 'string' ? input.preferredNickname.trim() : '',
  };
}

function getEnvValue(name: string): string | undefined {
  const value = process.env[name];
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export async function readStoredConfig(): Promise<AppConfig> {
  try {
    const raw = await fs.readFile(CONFIG_PATH, 'utf-8');
    const parsed = JSON.parse(raw) as Partial<AppConfig>;
    return normalizeConfig(parsed);
  } catch {
    return DEFAULT_CONFIG;
  }
}

export async function writeStoredConfig(input: Partial<AppConfig>): Promise<AppConfig> {
  const current = await readStoredConfig();

  const merged: AppConfig = {
    mode: input.mode === 'live' || input.mode === 'mock' ? input.mode : current.mode,
    applicationId:
      typeof input.applicationId === 'string' && input.applicationId.trim().length > 0
        ? input.applicationId.trim()
        : current.applicationId,
    defaultRegion:
      input.defaultRegion === 'eu' || input.defaultRegion === 'com' || input.defaultRegion === 'asia'
        ? input.defaultRegion
        : current.defaultRegion,
    preferredNickname:
      typeof input.preferredNickname === 'string' ? input.preferredNickname.trim() : current.preferredNickname,
  };

  const normalized = normalizeConfig(merged);
  await fs.writeFile(CONFIG_PATH, JSON.stringify(normalized, null, 2), 'utf-8');
  return normalized;
}

export async function getEffectiveConfig(): Promise<AppConfig> {
  const stored = await readStoredConfig();
  const envApplicationId = getEnvValue('WOT_APPLICATION_ID');
  const envDefaultRegion = getEnvValue('WOT_DEFAULT_REGION');
  const envUseMock = getEnvValue('WOT_USE_MOCK_DATA');

  return {
    mode: envUseMock === 'false' ? 'live' : stored.mode,
    applicationId: envApplicationId ?? stored.applicationId,
    defaultRegion: normalizeRegion(envDefaultRegion) ?? stored.defaultRegion,
    preferredNickname: stored.preferredNickname,
  };
}

export function toPublicConfig(config: AppConfig): PublicAppConfig {
  return {
    mode: config.mode,
    defaultRegion: config.defaultRegion,
    preferredNickname: config.preferredNickname,
    hasApplicationId: Boolean(config.applicationId),
  };
}
