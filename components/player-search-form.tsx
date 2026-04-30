'use client';

import type { WotRegion } from '@/lib/types';

type Props = {
  nickname: string;
  region: WotRegion;
  mapName: string;
  mapNames: string[];
  loading: boolean;
  hasPreferredNickname: boolean;
  onNicknameChange: (value: string) => void;
  onRegionChange: (value: WotRegion) => void;
  onMapChange: (value: string) => void;
  onSubmit: () => void;
  onUsePreferred: () => void;
};

export function PlayerSearchForm(props: Props) {
  return (
    <div className="card section-pad hero">
      <div className="header">
        <div>
          <div className="badge">Desktop Edition</div>
          <h1 className="title" style={{ marginTop: 14 }}>Statistika jälgija + kaardisoovitus</h1>
          <p className="muted subtitle">
            Otsi mängija, vaata tema põhinumbreid, vali tank ja saa kiire soovitus, kuhu selle masinaga
            valitud kaardil liikuda.
          </p>
        </div>

        <div className="controls">
          <input
            className="input"
            value={props.nickname}
            onChange={(event) => props.onNicknameChange(event.target.value)}
            placeholder="Mängija nimi"
          />
          <select className="select" value={props.region} onChange={(event) => props.onRegionChange(event.target.value as WotRegion)}>
            <option value="eu">EU</option>
            <option value="com">NA</option>
            <option value="asia">ASIA</option>
          </select>
          <select className="select" value={props.mapName} onChange={(event) => props.onMapChange(event.target.value)}>
            {props.mapNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button className="button" onClick={props.onSubmit} disabled={props.loading}>
            {props.loading ? 'Laen...' : 'Otsi'}
          </button>
        </div>
      </div>

      {props.hasPreferredNickname ? (
        <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
          <button className="button secondary" style={{ width: 'auto' }} onClick={props.onUsePreferred}>
            Kasuta minu kontot
          </button>
        </div>
      ) : null}
    </div>
  );
}
