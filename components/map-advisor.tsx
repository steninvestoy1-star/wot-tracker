import { MAP_GUIDES } from '@/lib/map-guides';
import type { TankRow } from '@/lib/types';

type Props = {
  mapName: string;
  tank: TankRow | null;
  onTankSelect: (tankId: number) => void;
  tanks: TankRow[];
};

export function MapAdvisor({ mapName, tank, tanks, onTankSelect }: Props) {
  const mapGuide = MAP_GUIDES[mapName];
  const step = tank ? mapGuide?.classes[tank.type] : null;

  return (
    <div className="card section-pad">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
        <div>
          <h2>Kuhu minna selles mängus?</h2>
          <p className="muted">Vali kaart ja tank. Soovitus tuleb tankiklassi põhjal.</p>
        </div>
        <select
          className="select"
          style={{ maxWidth: 280 }}
          value={tank?.tankId ?? ''}
          onChange={(event) => onTankSelect(Number(event.target.value))}
        >
          {tanks.map((item) => (
            <option key={item.tankId} value={item.tankId}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="advisor-grid" style={{ marginTop: 16 }}>
        <div className="advisor-block">
          <div className="advisor-title">Map</div>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>{mapName}</div>
          <div className="muted">{mapGuide?.description ?? 'Selle kaardi kirjeldus puudub.'}</div>
        </div>

        {step ? (
          <>
            <div className="advisor-block">
              <div className="advisor-title">Early game</div>
              <div>{step.early}</div>
            </div>
            <div className="advisor-block">
              <div className="advisor-title">Mid game</div>
              <div>{step.mid}</div>
            </div>
            <div className="advisor-block">
              <div className="advisor-title">Late game</div>
              <div>{step.late}</div>
            </div>
            <div className="advisor-block">
              <div className="advisor-title">Danger</div>
              <div>{step.danger}</div>
            </div>
          </>
        ) : (
          <div className="advisor-block">Selle tankiklassi jaoks pole selles kaardis veel soovitust.</div>
        )}
      </div>
    </div>
  );
}
