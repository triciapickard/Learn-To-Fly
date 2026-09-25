import type { AirspaceProfileDto } from '@shared/schemas/api';
import type { AirspaceVolume } from '@shared/schemas/content';
import type { WidgetQuestion } from '../shared/QuizPanel';

export type AirspaceClass = 'B' | 'C' | 'D' | 'E' | 'G';
const PRIORITY: AirspaceClass[] = ['B', 'C', 'D', 'E'];

export const feet = (ft: number) => `${Math.round(ft).toLocaleString('en-US')} ft`;

/** Terrain height (ft MSL) along the line, interpolated between the profile's points. */
export function terrainAt(profile: AirspaceProfileDto, x: number): number {
  const t = profile.terrain;
  if (x <= t[0]![0]) return t[0]![1];
  for (let i = 1; i < t.length; i++) {
    const [x1, y1] = t[i]!;
    if (x <= x1) {
      const [x0, y0] = t[i - 1]!;
      return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
    }
  }
  return t[t.length - 1]![1];
}

/** The floor of a volume at a point along the line, in ft MSL. */
export function floorAt(profile: AirspaceProfileDto, v: AirspaceVolume, x: number): number {
  return v.floorRef === 'AGL' ? terrainAt(profile, x) + v.floorFt : v.floorFt;
}

export function covers(v: AirspaceVolume, x: number, lengthNm: number): boolean {
  return x >= v.fromNm && (x < v.toNm || (x === lengthNm && v.toNm === lengthNm));
}

export interface Position {
  cls: AirspaceClass;
  volume: AirspaceVolume | null;
}

/** The airspace at a point: the most restrictive class whose volume contains it. */
export function classAt(profile: AirspaceProfileDto, x: number, altitude: number): Position {
  const inside = profile.volumes.filter(
    (v) =>
      covers(v, x, profile.lengthNm) &&
      altitude >= floorAt(profile, v, x) &&
      altitude <= v.ceilingFt,
  );
  for (const cls of PRIORITY) {
    const volume = inside.find((v) => v.class === cls);
    if (volume) return { cls, volume };
  }
  return { cls: 'G', volume: null };
}

export function floorText(v: AirspaceVolume): string {
  if (v.floorRef === 'AGL') return `${feet(v.floorFt)} above the ground`;
  return v.floorFt === 0 ? 'the surface' : `${feet(v.floorFt)} MSL`;
}

export function inModeCVeil(profile: AirspaceProfileDto, x: number): boolean {
  const veil = profile.modeCVeil;
  if (!veil) return false;
  const center = profile.points.find((p) => p.id === veil.center);
  return !!center && Math.abs(x - center.x) <= veil.radiusNm;
}

/** "over Oakland Intl" within 2 nm of an airport, else "26.0 nm along the line". */
export function placeText(profile: AirspaceProfileDto, x: number): string {
  const near = profile.points
    .map((p) => ({ p, d: Math.abs(p.x - x) }))
    .sort((a, b) => a.d - b.d)[0];
  if (near && near.d <= 2) return `over ${near.p.name}`;
  return `${x.toFixed(1)} nm along the line`;
}

export function volumeSummary(v: AirspaceVolume): string {
  return `${v.name}: from ${floorText(v)} up to ${feet(v.ceilingFt)} MSL.`;
}

export function describe(profile: AirspaceProfileDto, x: number, altitude: number): string {
  const { cls, volume } = classAt(profile, x, altitude);
  const agl = altitude - terrainAt(profile, x);
  const where = `${feet(altitude)} MSL (${feet(Math.max(0, agl))} above the ground), ${placeText(profile, x)}.`;
  const inClass = volume
    ? `You are in Class ${cls}. ${volumeSummary(volume)}`
    : 'You are in Class G.';
  const veil = inModeCVeil(profile, x)
    ? ' Inside the Mode C veil: a transponder with altitude reporting and ADS-B Out are required.'
    : '';
  return `${where} ${inClass} Requirement: ${profile.requirements[cls].entry}${veil}`;
}

export interface AirspaceQuestion extends WidgetQuestion {
  check: (profile: AirspaceProfileDto, x: number, altitude: number) => boolean;
}

export const QUESTIONS: AirspaceQuestion[] = [
  {
    id: 'w11-class-g',
    prompt: 'Put the airplane in Class G airspace.',
    explanation:
      'Class G is the uncontrolled airspace close to the ground, below the Class E floor (here 700 ft above the ground) and outside the surface areas.',
    check: (p, x, alt) => classAt(p, x, alt).cls === 'G',
  },
  {
    id: 'w11-clearance',
    prompt: 'Find a spot where you would need an ATC clearance to enter.',
    explanation: 'Only Class B needs a clearance: "cleared into the Class Bravo".',
    check: (p, x, alt) => classAt(p, x, alt).cls === 'B',
  },
  {
    id: 'w11-tower',
    prompt: 'Find a spot where you must talk to a control tower before entering.',
    explanation:
      'Class D surrounds an airport with a working tower: establish two-way radio contact before you enter.',
    check: (p, x, alt) => classAt(p, x, alt).cls === 'D',
  },
  {
    id: 'w11-under-shelf',
    prompt:
      'Fly under a Class B shelf without entering Class B, at least 1,000 ft above the ground.',
    explanation:
      'Below a shelf’s floor you need no clearance. You are still inside the Mode C veil, so you need a transponder with altitude reporting and ADS-B Out.',
    check: (p, x, alt) =>
      p.volumes.some((v) => v.class === 'B' && v.floorFt > 0 && covers(v, x, p.lengthNm)) &&
      classAt(p, x, alt).cls !== 'B' &&
      alt - terrainAt(p, x) >= 1000,
  },
  {
    id: 'w11-class-e',
    prompt: 'Put the airplane in Class E airspace.',
    explanation:
      'Class E is controlled airspace with no entry requirement for VFR flights. Here it starts 700 ft above the ground.',
    check: (p, x, alt) => classAt(p, x, alt).cls === 'E',
  },
];

/** Plan view: one ring per Class B floor, and a circle for each Class C and D. */
export function planRings(profile: AirspaceProfileDto) {
  const center = (id?: string) => profile.points.find((p) => p.id === id);
  const rings: { key: string; cls: AirspaceClass; cx: number; r: number; label: string }[] = [];
  const byFloor = new Map<number, { cx: number; r: number }>();
  for (const v of profile.volumes) {
    const c = center(v.center);
    if (!c) continue;
    const r = Math.max(Math.abs(v.fromNm - c.x), Math.abs(v.toNm - c.x));
    if (v.class === 'B') {
      const prev = byFloor.get(v.floorFt);
      byFloor.set(v.floorFt, { cx: c.x, r: Math.max(prev?.r ?? 0, r) });
    } else if (v.class === 'C' || v.class === 'D') {
      rings.push({
        key: v.id,
        cls: v.class,
        cx: (v.fromNm + v.toNm) / 2,
        r: (v.toNm - v.fromNm) / 2,
        label: `${v.class} ${Math.round(v.ceilingFt / 100)}`,
      });
    }
  }
  const b = [...byFloor.entries()]
    .sort((a, z) => z[1].r - a[1].r)
    .map(([floor, ring]) => ({
      key: `b-${floor}`,
      cls: 'B' as const,
      ...ring,
      label: floor === 0 ? 'SFC' : String(Math.round(floor / 100)),
    }));
  return [...b, ...rings];
}
