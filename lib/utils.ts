export function percent(part: number, total: number): number {
  if (!total) return 0;
  return Number(((part / total) * 100).toFixed(1));
}

export function average(total: number, count: number): number {
  if (!count) return 0;
  return Math.round(total / count);
}

export function safeNumber(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

export function tankTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    lightTank: 'Light',
    mediumTank: 'Medium',
    heavyTank: 'Heavy',
    tankDestroyer: 'TD',
    spg: 'SPG',
  };

  return labels[type] ?? type;
}
