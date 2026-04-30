'use client';

import { useEffect, useState } from 'react';
import type { PublicAppConfig, WotRegion } from '@/lib/types';

type Props = {
  onConfigured: (config: PublicAppConfig) => void;
};

export function SetupWizard({ onConfigured }: Props) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [mode, setMode] = useState<'mock' | 'live'>('mock');
  const [applicationId, setApplicationId] = useState('');
  const [defaultRegion, setDefaultRegion] = useState<WotRegion>('eu');
  const [preferredNickname, setPreferredNickname] = useState('');
  const [hasApplicationId, setHasApplicationId] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    void load();
  }, []);

  async function load(): Promise<void> {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/app-config');
      const config = (await response.json()) as PublicAppConfig;

      setMode(config.mode);
      setDefaultRegion(config.defaultRegion);
      setPreferredNickname(config.preferredNickname);
      setHasApplicationId(config.hasApplicationId);
      onConfigured(config);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Config load failed');
    } finally {
      setLoading(false);
    }
  }

  async function save(): Promise<void> {
    setSaving(true);
    setMessage('');

    try {
      const payload: Record<string, string> = {
        mode,
        defaultRegion,
        preferredNickname,
      };

      if (applicationId.trim().length > 0) {
        payload.applicationId = applicationId.trim();
      }

      const response = await fetch('/api/app-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as PublicAppConfig & { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Config save failed');
      }

      setHasApplicationId(result.hasApplicationId);
      setApplicationId('');
      onConfigured(result);
      setMessage('Seaded salvestatud.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Config save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="card section-pad" style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
        <div>
          <div className="badge">Setup Wizard</div>
          <h2 style={{ marginTop: 14 }}>Seo oma konto kiiremini</h2>
          <p className="muted subtitle">
            Salvesta režiim, WoT API võti, vaikimisi region ja oma nickname. Pärast seda saad otsida ühe klikiga.
          </p>
        </div>
        <div className="pill">{loading ? 'Laen seadeid…' : mode === 'live' ? 'Live mode' : 'Mock mode'}</div>
      </div>

      <div className="controls" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        <select className="select" value={mode} onChange={(event) => setMode(event.target.value as 'mock' | 'live')}>
          <option value="mock">Mock data</option>
          <option value="live">Live WoT API</option>
        </select>

        <select className="select" value={defaultRegion} onChange={(event) => setDefaultRegion(event.target.value as WotRegion)}>
          <option value="eu">EU</option>
          <option value="com">NA</option>
          <option value="asia">ASIA</option>
        </select>

        <input
          className="input"
          value={preferredNickname}
          onChange={(event) => setPreferredNickname(event.target.value)}
          placeholder="Sinu WoT nickname"
        />

        <button className="button" disabled={saving || loading} onClick={save}>
          {saving ? 'Salvestan...' : 'Salvesta'}
        </button>
      </div>

      <input
        className="input"
        value={applicationId}
        onChange={(event) => setApplicationId(event.target.value)}
        placeholder={hasApplicationId ? 'API võti on juba salvestatud. Sisesta uus ainult siis, kui tahad seda muuta.' : 'Wargaming API application_id'}
      />

      {mode === 'live' ? (
        <div className="advisor-block">
          <div className="advisor-title">Live mode</div>
          <div className="muted">
            Live statistika jaoks pead salvestama Wargaming API võtme. Kui võti on juba salvestatud, võid selle välja tühjaks jätta.
          </div>
        </div>
      ) : (
        <div className="advisor-block">
          <div className="advisor-title">Mock mode</div>
          <div className="muted">
            Mock mode sobib UI testimiseks. Päris statistika jaoks lülita live mode sisse ja lisa API võti.
          </div>
        </div>
      )}

      {message ? <div className="card section-pad small">{message}</div> : null}
    </div>
  );
}
