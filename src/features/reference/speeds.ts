import type { AircraftDto } from '@shared/schemas/api';

type VSpeed = AircraftDto['vspeeds'][string];

/** "74" for a single value, "60–70" for a range. */
export const kiasText = (v: VSpeed) =>
  v.kias !== undefined ? String(v.kias) : `${v.min}–${v.max}`;

export interface ArcFlag {
  key: string;
  /** Short name, "Vy". */
  name: string;
  meaning: string;
  kias: number;
  /** Position along the scale as a fraction 0–1. */
  at: number;
  /** Flags alternate rows so neighbouring labels never overlap. */
  row: 0 | 1;
  tone: 'target' | 'limit' | 'plain';
}

export interface ArcSegment {
  id: 'white' | 'green' | 'yellow';
  from: number;
  to: number;
  /** Start and width as fractions of the scale. */
  start: number;
  width: number;
}

export interface ArcsModel {
  min: number;
  max: number;
  segments: ArcSegment[];
  redline: { kias: number; at: number };
  ticks: { kias: number; at: number }[];
  flags: ArcFlag[];
}

const FLAG_KEYS = ['vso', 'vs1', 'vr', 'vx', 'vg', 'vy', 'vfe', 'va', 'vfe10', 'vno', 'vne'];
const TARGETS = new Set(['vr', 'vy']);

/**
 * The airspeed arcs flattened into a horizontal band (hub kneeboard, Section 20.8). The
 * scale runs from 10 knots below the white arc to the next round number past the red line,
 * so every arc and flag has room on either side.
 */
export function arcsModel(aircraft: AircraftDto): ArcsModel {
  const { arcs, vspeeds } = aircraft;
  const min = Math.max(0, Math.floor(arcs.white[0] / 10) * 10 - 10);
  const max = Math.ceil((arcs.redline + 1) / 10) * 10;
  const at = (kias: number) => (kias - min) / (max - min);

  const segment = (id: ArcSegment['id'], [from, to]: [number, number]): ArcSegment => ({
    id,
    from,
    to,
    start: at(from),
    width: at(to) - at(from),
  });

  const ticks: ArcsModel['ticks'] = [];
  for (let k = min + 10; k <= max; k += 10) ticks.push({ kias: k, at: at(k) });

  const flags = FLAG_KEYS.flatMap((key) => {
    const v = vspeeds[key];
    if (!v || v.kias === undefined) return [];
    return [
      {
        key,
        name: speedShortName(v.label),
        meaning: v.meaning,
        kias: v.kias,
        at: at(v.kias),
        row: 0 as const,
        tone: TARGETS.has(key)
          ? ('target' as const)
          : key === 'vne'
            ? ('limit' as const)
            : ('plain' as const),
      },
    ];
  })
    .sort((a, b) => a.kias - b.kias)
    .map((f, i) => ({ ...f, row: (i % 2) as 0 | 1 }));

  return {
    min,
    max,
    segments: [
      segment('white', arcs.white),
      segment('green', arcs.green),
      segment('yellow', arcs.yellow),
    ],
    redline: { kias: arcs.redline, at: at(arcs.redline) },
    ticks,
    flags,
  };
}

/** "V_Y" → "Vy", "V_FE (10°)" → "Vfe (10°)". */
export function speedShortName(label: string): string {
  return label.replace(
    /^V_([A-Z0-9]+)(.*)$/,
    (_m, sub: string, rest: string) => `V${sub.toLowerCase()}${rest}`,
  );
}
