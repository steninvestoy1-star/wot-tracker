'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CustomGuide, TankClass, TankRow } from '@/lib/types';
import { tankTypeLabel } from '@/lib/utils';

const STORAGE_KEY = 'wot-custom-guides-v1';

type Props = {
  mapName: string;
  mapNames: string[];
  selectedTank: TankRow | null;
};

type FormState = {
  map: string;
  tankClass: TankClass;
  tank: string;
  safeRoute: string;
  aggressiveRoute: string;
  avoid: string;
  note: string;
};

const tankClasses: TankClass[] = ['lightTank', 'mediumTank', 'heavyTank', 'tankDestroyer', 'spg'];

function createEmptyForm(mapName: string, selectedTank: TankRow | null): FormState {
  return {
    map: mapName,
    tankClass: selectedTank?.type ?? 'heavyTank',
    tank: selectedTank?.name ?? '',
    safeRoute: '',
    aggressiveRoute: '',
    avoid: '',
    note: '',
  };
}

function parseGuides(value: string | null): CustomGuide[] {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value) as CustomGuide[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CustomGuideEditor({ mapName, mapNames, selectedTank }: Props) {
  const [guides, setGuides] = useState<CustomGuide[]>([]);
  const [form, setForm] = useState<FormState>(() => createEmptyForm(mapName, selectedTank));
  const [filterMap, setFilterMap] = useState(mapName);
  const [filterClass, setFilterClass] = useState<TankClass>(selectedTank?.type ?? 'heavyTank');
  const [filterTank, setFilterTank] = useState(selectedTank?.name ?? '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setGuides(parseGuides(window.localStorage.getItem(STORAGE_KEY)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(guides));
  }, [guides]);

  useEffect(() => {
    setFilterMap(mapName);
    setForm((current) => ({ ...current, map: mapName }));
  }, [mapName]);

  useEffect(() => {
    if (!selectedTank) return;

    setFilterClass(selectedTank.type);
    setFilterTank(selectedTank.name);
    setForm((current) => ({
      ...current,
      tankClass: selectedTank.type,
      tank: selectedTank.name,
    }));
  }, [selectedTank]);

  const visibleGuides = useMemo(() => {
    return guides.filter((guide) => {
      const mapMatches = guide.map === filterMap;
      const classMatches = guide.tankClass === filterClass;
      const tankMatches = !filterTank.trim() || guide.tank.toLowerCase().includes(filterTank.trim().toLowerCase());
      return mapMatches && classMatches && tankMatches;
    });
  }, [filterClass, filterMap, filterTank, guides]);

  function updateForm<Field extends keyof FormState>(field: Field, value: FormState[Field]): void {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function addGuide(): void {
    setMessage('');

    if (!form.map || !form.tankClass || !form.tank.trim() || !form.safeRoute.trim()) {
      setMessage('Täida vähemalt kaart, klass, tank ja safe route.');
      return;
    }

    const nextGuide: CustomGuide = {
      id: crypto.randomUUID(),
      map: form.map,
      tankClass: form.tankClass,
      tank: form.tank.trim(),
      safeRoute: form.safeRoute.trim(),
      aggressiveRoute: form.aggressiveRoute.trim(),
      avoid: form.avoid.trim(),
      note: form.note.trim(),
      createdAt: new Date().toISOString(),
    };

    setGuides((current) => [nextGuide, ...current]);
    setForm({
      map: form.map,
      tankClass: form.tankClass,
      tank: form.tank,
      safeRoute: '',
      aggressiveRoute: '',
      avoid: '',
      note: '',
    });
    setMessage('Soovitus salvestatud.');
  }

  function deleteGuide(id: string): void {
    setGuides((current) => current.filter((guide) => guide.id !== id));
    setMessage('Soovitus kustutatud.');
  }

  function exportGuides(): void {
    const data = JSON.stringify(guides, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'wot-custom-guides.json';
    link.click();

    window.URL.revokeObjectURL(url);
  }

  async function importGuides(file: File | null): Promise<void> {
    if (!file) return;

    setMessage('');

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as CustomGuide[];

      if (!Array.isArray(parsed)) {
        throw new Error('JSON peab olema list.');
      }

      setGuides(parsed);
      setMessage('Import tehtud.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Import ebaõnnestus.');
    }
  }

  return (
    <div className="card section-pad" style={{ display: 'grid', gap: 18 }}>
      <div className="header">
        <div>
          <div className="badge">Custom Guide Editor</div>
          <h2 style={{ marginTop: 14 }}>Lisa oma route’id ilma koodi muutmata</h2>
          <p className="muted subtitle">
            Salvesta oma kaardi, tankiklassi ja konkreetse tanki soovitused. Need jäävad localStorage’i ja saad neid JSON failina eksportida.
          </p>
        </div>

        <div className="controls">
          <select className="select" value={filterMap} onChange={(event) => setFilterMap(event.target.value)}>
            {mapNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>

          <select className="select" value={filterClass} onChange={(event) => setFilterClass(event.target.value as TankClass)}>
            {tankClasses.map((tankClass) => (
              <option key={tankClass} value={tankClass}>{tankTypeLabel(tankClass)}</option>
            ))}
          </select>

          <input className="input" value={filterTank} onChange={(event) => setFilterTank(event.target.value)} placeholder="Filter: tank" />

          <button className="button secondary" onClick={exportGuides}>Export JSON</button>
        </div>
      </div>

      <div className="grid grid-main">
        <div className="advisor-block">
          <h3>+ Lisa soovitus</h3>

          <div className="stack" style={{ marginTop: 14 }}>
            <div className="controls" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <select className="select" value={form.map} onChange={(event) => updateForm('map', event.target.value)}>
                {mapNames.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>

              <select className="select" value={form.tankClass} onChange={(event) => updateForm('tankClass', event.target.value as TankClass)}>
                {tankClasses.map((tankClass) => (
                  <option key={tankClass} value={tankClass}>{tankTypeLabel(tankClass)}</option>
                ))}
              </select>
            </div>

            <input className="input" value={form.tank} onChange={(event) => updateForm('tank', event.target.value)} placeholder="Tank, nt IS-7" />
            <textarea className="input" style={{ minHeight: 82 }} value={form.safeRoute} onChange={(event) => updateForm('safeRoute', event.target.value)} placeholder="Safe route" />
            <textarea className="input" style={{ minHeight: 82 }} value={form.aggressiveRoute} onChange={(event) => updateForm('aggressiveRoute', event.target.value)} placeholder="Aggressive route" />
            <textarea className="input" style={{ minHeight: 82 }} value={form.avoid} onChange={(event) => updateForm('avoid', event.target.value)} placeholder="Mida vältida" />
            <textarea className="input" style={{ minHeight: 82 }} value={form.note} onChange={(event) => updateForm('note', event.target.value)} placeholder="Oma märkus" />

            <button className="button" onClick={addGuide}>Salvesta soovitus</button>

            <label className="button secondary" style={{ textAlign: 'center' }}>
              Import JSON
              <input
                type="file"
                accept="application/json"
                style={{ display: 'none' }}
                onChange={(event) => void importGuides(event.target.files?.[0] ?? null)}
              />
            </label>

            {message ? <div className="advisor-block small">{message}</div> : null}
          </div>
        </div>

        <div className="advisor-block">
          <h3>Minu custom soovitused</h3>
          <p className="muted small">{visibleGuides.length} nähtaval / {guides.length} kokku</p>

          <div className="stack" style={{ marginTop: 14 }}>
            {visibleGuides.length === 0 ? (
              <div className="advisor-block muted">Selle filtri jaoks pole veel custom soovitusi.</div>
            ) : (
              visibleGuides.map((guide) => (
                <div key={guide.id} className="advisor-block">
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                    <div>
                      <div className="advisor-title">{guide.map} — {guide.tank}</div>
                      <div className="muted small">{tankTypeLabel(guide.tankClass)}</div>
                    </div>
                    <button className="button secondary" style={{ width: 'auto' }} onClick={() => deleteGuide(guide.id)}>Kustuta</button>
                  </div>

                  <div className="advisor-grid" style={{ marginTop: 12 }}>
                    <div className="advisor-block">
                      <div className="advisor-title">Safe route</div>
                      <div>{guide.safeRoute}</div>
                    </div>
                    <div className="advisor-block">
                      <div className="advisor-title">Aggressive route</div>
                      <div>{guide.aggressiveRoute || 'Pole lisatud.'}</div>
                    </div>
                    <div className="advisor-block">
                      <div className="advisor-title">Väldi</div>
                      <div>{guide.avoid || 'Pole lisatud.'}</div>
                    </div>
                    <div className="advisor-block">
                      <div className="advisor-title">Märkus</div>
                      <div>{guide.note || 'Pole lisatud.'}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
