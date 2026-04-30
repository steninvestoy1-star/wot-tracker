import type { TankRow } from '@/lib/types';
import { tankTypeLabel } from '@/lib/utils';

type Props = {
  tanks: TankRow[];
  selectedTankId: number | null;
  onSelect: (tankId: number) => void;
};

export function TankTable({ tanks, selectedTankId, onSelect }: Props) {
  return (
    <div className="card section-pad">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div>
          <h2>Tankide statistika</h2>
          <p className="muted">Vali tank, millele tahad kaardisoovitust.</p>
        </div>
        <div className="pill">{tanks.length} tanki</div>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Tank</th>
              <th>Type</th>
              <th>Tier</th>
              <th>Battles</th>
              <th>WR</th>
              <th>Avg Dmg</th>
              <th>Pick</th>
            </tr>
          </thead>
          <tbody>
            {tanks.map((tank) => {
              const selected = selectedTankId === tank.tankId;
              const winRate = tank.battles ? ((tank.wins / tank.battles) * 100).toFixed(1) : '0.0';

              return (
                <tr key={tank.tankId} className={selected ? 'selected' : undefined}>
                  <td>
                    <div style={{ fontWeight: 700 }}>{tank.name}</div>
                    <div className="muted small">{tank.nation}</div>
                  </td>
                  <td>{tankTypeLabel(tank.type)}</td>
                  <td>{tank.tier}</td>
                  <td>{tank.battles}</td>
                  <td>{winRate}%</td>
                  <td>{tank.averageDamage}</td>
                  <td>
                    <button className="button secondary" onClick={() => onSelect(tank.tankId)}>
                      Vali
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
