'use client';

import { useEffect, useMemo, useState } from 'react';
import { PlayerSearchForm } from '@/components/player-search-form';
import { SummaryCards } from '@/components/summary-cards';
import { TankTable } from '@/components/tank-table';
import { MapAdvisor } from '@/components/map-advisor';
import { SetupWizard } from '@/components/setup-wizard';
import { MAP_GUIDES } from '@/lib/map-guides';
import type { PlayerProfileResponse, PublicAppConfig, SearchPlayerResult, WotRegion } from '@/lib/types';

export default function HomePage() {
  const [nickname, setNickname] = useState('');
  const [region, setRegion] = useState<WotRegion>('eu');
  const [selectedMap, setSelectedMap] = useState('Mines');
  const [profile, setProfile] = useState<PlayerProfileResponse | null>(null);
  const [selectedTankId, setSelectedTankId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [config, setConfig] = useState<PublicAppConfig | null>(null);

  useEffect(() => {
    if (config?.preferredNickname && !nickname) {
      setNickname(config.preferredNickname);
    }

    if (config?.defaultRegion) {
      setRegion(config.defaultRegion);
    }
  }, [config, nickname]);

  const selectedTank = useMemo(() => {
    if (!profile || selectedTankId === null) return null;
    return profile.tanks.find((tank) => tank.tankId === selectedTankId) ?? null;
  }, [profile, selectedTankId]);

  async function handleSearch(name = nickname, searchRegion = region): Promise<void> {
    setLoading(true);
    setError('');

    try {
      const searchResponse = await fetch(
        `/api/wot/player-search?nickname=${encodeURIComponent(name)}&region=${encodeURIComponent(searchRegion)}`,
      );

      if (!searchResponse.ok) {
        const searchError = (await searchResponse.json()) as { error?: string };
        throw new Error(searchError.error ?? 'Player search failed');
      }

      const player = (await searchResponse.json()) as SearchPlayerResult;

      const profileResponse = await fetch(
        `/api/wot/player-profile?accountId=${player.accountId}&region=${encodeURIComponent(searchRegion)}`,
      );

      if (!profileResponse.ok) {
        const profileError = (await profileResponse.json()) as { error?: string };
        throw new Error(profileError.error ?? 'Profile fetch failed');
      }

      const profileJson = (await profileResponse.json()) as PlayerProfileResponse;
      setProfile(profileJson);
      setSelectedTankId(profileJson.tanks[0]?.tankId ?? null);
    } catch (requestError) {
      setProfile(null);
      setSelectedTankId(null);
      setError(requestError instanceof Error ? requestError.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  function handleConfigured(nextConfig: PublicAppConfig): void {
    setConfig(nextConfig);
    setRegion(nextConfig.defaultRegion);
    if (nextConfig.preferredNickname) {
      setNickname(nextConfig.preferredNickname);
    }
  }

  function usePreferredAccount(): void {
    if (!config?.preferredNickname) return;
    setNickname(config.preferredNickname);
    setRegion(config.defaultRegion);
    void handleSearch(config.preferredNickname, config.defaultRegion);
  }

  return (
    <main className="container" style={{ display: 'grid', gap: 20 }}>
      <SetupWizard onConfigured={handleConfigured} />

      <PlayerSearchForm
        nickname={nickname}
        region={region}
        mapName={selectedMap}
        mapNames={Object.keys(MAP_GUIDES)}
        loading={loading}
        hasPreferredNickname={Boolean(config?.preferredNickname)}
        onNicknameChange={setNickname}
        onRegionChange={setRegion}
        onMapChange={setSelectedMap}
        onSubmit={() => void handleSearch()}
        onUsePreferred={usePreferredAccount}
      />

      {error ? (
        <div className="card section-pad error">
          {error}
        </div>
      ) : null}

      {profile ? (
        <>
          <SummaryCards player={profile.player} />
          <div className="grid grid-main">
            <TankTable tanks={profile.tanks} selectedTankId={selectedTankId} onSelect={setSelectedTankId} />
            <MapAdvisor mapName={selectedMap} tank={selectedTank} tanks={profile.tanks} onTankSelect={setSelectedTankId} />
          </div>
        </>
      ) : (
        <div className="card section-pad empty">
          <div className="badge" style={{ marginBottom: 14 }}>Valmis kasutamiseks</div>
          <h2>Otsi mängija</h2>
          <p className="muted subtitle" style={{ margin: '0 auto' }}>
            Salvesta kõigepealt setup wizardis oma nickname ja vajadusel WoT API võti. Seejärel vajuta <strong>Otsi</strong> või <strong>Kasuta minu kontot</strong>.
          </p>
        </div>
      )}
    </main>
  );
}
