import type { PlayerSummary } from '@/lib/types';

type Props = {
  player: PlayerSummary;
};

export function SummaryCards({ player }: Props) {
  const items = [
    { label: 'Battles', value: player.battles },
    { label: 'Win rate', value: `${player.winRate}%` },
    { label: 'Avg damage', value: player.averageDamage },
    { label: 'Survival', value: `${player.survivalRate}%` },
    { label: 'Frag / death', value: player.fragPerDeath },
  ];

  return (
    <div className="grid grid-5">
      {items.map((item) => (
        <div key={item.label} className="card kpi">
          <div className="muted small">{item.label}</div>
          <div className="kpi-value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
