import { normalize360, windTriangle } from '@shared/aviation/wind';

/**
 * W7 model (Section 16.8). The pattern is built in a runway frame — u along the landing
 * direction, v to its right, both in drawing units — then turned to the runway's true
 * heading for display (north up).
 */

export type Pt = { x: number; y: number };
export type Side = 'left' | 'right';
export type LegId =
  | 'entry'
  | 'downwind'
  | 'base'
  | 'final'
  | 'touch-and-go'
  | 'departure'
  | 'crosswind'
  | 'go-around';

export interface Sample {
  /** Runway frame: u along the landing direction, v to its right. */
  u: number;
  v: number;
  leg: LegId;
  /** Direction of travel relative to the landing direction, degrees clockwise. */
  bearing: number;
}

/** Pattern dimensions in drawing units (roughly 25 ft each). */
export const DIM = {
  runwayLength: 200,
  touchdown: 40,
  liftoff: 120,
  downwindOffset: 150,
  crosswindAt: 320,
  baseAt: -160,
  corner: 34,
  entryLength: 150,
  midfield: 100,
  goAroundAt: -50,
  sideStep: 45,
};

const sideSign = (side: Side) => (side === 'left' ? -1 : 1);

/** Samples a polyline with rounded corners; each point is tagged with the leg it belongs to. */
export function roundedPath(
  corners: { u: number; v: number; leg: LegId }[],
  radius: number,
  step = 3,
): Sample[] {
  const out: Sample[] = [];
  const bearingOf = (a: { u: number; v: number }, b: { u: number; v: number }) =>
    (Math.atan2(b.v - a.v, b.u - a.u) * 180) / Math.PI;
  const pushLine = (a: { u: number; v: number }, b: { u: number; v: number }, leg: LegId) => {
    const len = Math.hypot(b.u - a.u, b.v - a.v);
    const n = Math.max(1, Math.round(len / step));
    const bearing = bearingOf(a, b);
    for (let i = 0; i < n; i++) {
      out.push({ u: a.u + ((b.u - a.u) * i) / n, v: a.v + ((b.v - a.v) * i) / n, leg, bearing });
    }
  };
  let start = { u: corners[0]!.u, v: corners[0]!.v };
  for (let i = 1; i < corners.length; i++) {
    const p = corners[i]!;
    const next = corners[i + 1];
    const leg = corners[i - 1]!.leg;
    if (!next) {
      pushLine(start, p, leg);
      out.push({ u: p.u, v: p.v, leg, bearing: bearingOf(start, p) });
      break;
    }
    const inLen = Math.hypot(p.u - start.u, p.v - start.v);
    const outLen = Math.hypot(next.u - p.u, next.v - p.v);
    const r = Math.min(radius, inLen / 2, outLen / 2);
    const din = { u: (p.u - start.u) / inLen, v: (p.v - start.v) / inLen };
    const dout = { u: (next.u - p.u) / outLen, v: (next.v - p.v) / outLen };
    const a = { u: p.u - din.u * r, v: p.v - din.v * r };
    const b = { u: p.u + dout.u * r, v: p.v + dout.v * r };
    pushLine(start, a, leg);
    // Quadratic Bézier through the corner: the first half belongs to this leg, the second
    // to the next one.
    const n = Math.max(4, Math.round((r * 1.6) / step));
    for (let k = 0; k < n; k++) {
      const t = k / n;
      const u = (1 - t) ** 2 * a.u + 2 * (1 - t) * t * p.u + t ** 2 * b.u;
      const v = (1 - t) ** 2 * a.v + 2 * (1 - t) * t * p.v + t ** 2 * b.v;
      const du = 2 * (1 - t) * (p.u - a.u) + 2 * t * (b.u - p.u);
      const dv = 2 * (1 - t) * (p.v - a.v) + 2 * t * (b.v - p.v);
      out.push({ u, v, leg: t < 0.5 ? leg : p.leg, bearing: (Math.atan2(dv, du) * 180) / Math.PI });
    }
    start = b;
  }
  return out;
}

export interface PatternGeometry {
  /** The 45° entry onto downwind. Played once. */
  intro: Sample[];
  /** Downwind → base → final → touch-and-go → departure → crosswind → downwind. Loops. */
  lap: Sample[];
  /** From short final: side-step away from the pattern, climb out, crosswind, downwind. */
  goAround: Sample[];
}

/**
 * All three paths meet at one point on the downwind straight (`join`), so the entry flows
 * into the lap, the lap loops seamlessly and a go-around rejoins it.
 */
export function patternGeometry(side: Side): PatternGeometry {
  const s = sideSign(side);
  const D = DIM;
  const dw = D.downwindOffset * s;
  const join = { u: D.midfield - 40, v: dw };
  const intro = roundedPath(
    [
      { u: D.midfield + D.entryLength * 0.7, v: dw + D.entryLength * 0.7 * s, leg: 'entry' },
      { u: D.midfield, v: dw, leg: 'downwind' },
      { ...join, leg: 'downwind' },
    ],
    D.corner,
  );
  const lap = roundedPath(
    [
      { ...join, leg: 'downwind' },
      { u: D.baseAt, v: dw, leg: 'base' },
      { u: D.baseAt, v: 0, leg: 'final' },
      { u: D.touchdown, v: 0, leg: 'touch-and-go' },
      { u: D.liftoff, v: 0, leg: 'departure' },
      { u: D.crosswindAt, v: 0, leg: 'crosswind' },
      { u: D.crosswindAt, v: dw, leg: 'downwind' },
      { ...join, leg: 'downwind' },
    ],
    D.corner,
  );
  const goAround = roundedPath(
    [
      { u: D.goAroundAt, v: 0, leg: 'go-around' },
      { u: D.goAroundAt + 70, v: -D.sideStep * s, leg: 'go-around' },
      { u: D.crosswindAt, v: -D.sideStep * s, leg: 'crosswind' },
      { u: D.crosswindAt, v: dw, leg: 'downwind' },
      { ...join, leg: 'downwind' },
    ],
    D.corner,
  );
  return { intro, lap, goAround };
}

/** Runway frame → screen (north up), given the landing heading and a centre point. */
export function toScreen(
  p: { u: number; v: number },
  headingDeg: number,
  origin: Pt,
  scale: number,
): Pt {
  const h = (headingDeg * Math.PI) / 180;
  const U = { x: Math.sin(h), y: -Math.cos(h) };
  const V = { x: Math.cos(h), y: Math.sin(h) };
  return {
    x: origin.x + (p.u * U.x + p.v * V.x) * scale,
    y: origin.y + (p.u * U.y + p.v * V.y) * scale,
  };
}

/** True track of a sample. */
export function trackOf(sample: Sample, runwayHeading: number): number {
  return normalize360(runwayHeading + sample.bearing);
}

export interface LegInfo {
  id: LegId;
  name: string;
  /** True airspeed used for wind correction and animation speed. */
  tas: number;
  config: string;
  /** Short label for the diagram. */
  short: string;
  call?: (a: { airport: string; runway: string; side: Side }) => string;
}

const who = 'Skyhawk 123';

/** Configuration from Section 8.5; radio calls from L7.2 (AIM 4-1-9 style). */
export const LEGS: Record<LegId, LegInfo> = {
  entry: {
    id: 'entry',
    name: '45° entry',
    tas: 90,
    short: '90 KIAS, level',
    config: 'Join at pattern altitude (typically 1,000 ft AGL), about 90 KIAS, level.',
    call: ({ airport, runway, side }) =>
      `${airport} traffic, ${who}, entering ${side} downwind runway ${runway} on the 45, ${airport}.`,
  },
  downwind: {
    id: 'downwind',
    name: 'Downwind',
    tas: 88,
    short: '85–90 KIAS, flaps 0 → 10',
    config:
      'Level at pattern altitude, 2,000–2,100 RPM, 85–90 KIAS, flaps 0. Abeam the touchdown point: about 1,500 RPM, flaps 10, slow to 80 KIAS and start down.',
    call: ({ airport, runway, side }) =>
      `${airport} traffic, ${who}, ${side} downwind runway ${runway}, touch-and-go, ${airport}.`,
  },
  base: {
    id: 'base',
    name: 'Base',
    tas: 72,
    short: '70 KIAS, flaps 20',
    config:
      'About 1,500 RPM, flaps 20, 70 KIAS, descending. Turn base when the touchdown point is about 45° behind the wing.',
    call: ({ airport, runway, side }) =>
      `${airport} traffic, ${who}, ${side} base runway ${runway}, ${airport}.`,
  },
  final: {
    id: 'final',
    name: 'Final',
    tas: 66,
    short: '65 KIAS, flaps 30',
    config: 'Flaps 30, 65 KIAS (60 on short final), power as needed to hold the glide path.',
    call: ({ airport, runway }) =>
      `${airport} traffic, ${who}, final runway ${runway}, touch-and-go, ${airport}.`,
  },
  'touch-and-go': {
    id: 'touch-and-go',
    name: 'Touch-and-go',
    tas: 55,
    short: 'Flaps up, full power',
    config: 'After touchdown: flaps up, full power, rotate at 55 KIAS.',
  },
  departure: {
    id: 'departure',
    name: 'Departure (upwind)',
    tas: 74,
    short: 'Vy 74 KIAS, full power',
    config:
      'Full power, flaps 0, climb at Vy, 74 KIAS. Turn crosswind past the end of the runway, within 300 ft of pattern altitude.',
  },
  crosswind: {
    id: 'crosswind',
    name: 'Crosswind',
    tas: 76,
    short: 'Climbing to 1,000 AGL',
    config: 'Keep climbing to pattern altitude, then level off and reduce power for downwind.',
  },
  'go-around': {
    id: 'go-around',
    name: 'Go-around',
    tas: 70,
    short: 'Full power, flaps 20',
    config:
      'Full power, pitch for the climb, flaps 20; once climbing, flaps 10, then 0. Side-step to the side of the runway away from the pattern to keep departing traffic in sight.',
    call: ({ airport, runway }) =>
      `${airport} traffic, ${who}, going around runway ${runway}, ${airport}.`,
  },
};

/** The legs in the order the step list shows them. */
export const LEG_ORDER: LegId[] = [
  'entry',
  'downwind',
  'base',
  'final',
  'touch-and-go',
  'departure',
  'crosswind',
];

export interface Wind {
  direction: number;
  speed: number;
}

/** Heading (crabbed into the wind) and groundspeed for a sample. */
export function crab(
  sample: Sample,
  runwayHeading: number,
  wind: Wind,
): { heading: number; gs: number } {
  const track = trackOf(sample, runwayHeading);
  const tas = LEGS[sample.leg].tas;
  if (sample.leg === 'touch-and-go' || wind.speed === 0) return { heading: track, gs: tas };
  const s = windTriangle(track, tas, wind.direction, wind.speed);
  return s ? { heading: s.th, gs: s.gs } : { heading: track, gs: tas };
}

/** Runway number (e.g. "26") → landing heading in degrees true (simplified: magnetic ≈ true). */
export function runwayHeading(runway: string): number {
  const n = Number.parseInt(runway, 10);
  return Number.isFinite(n) && n >= 1 && n <= 36 ? n * 10 : 260;
}

/** Index of the first sample of the next leg after `index` (wraps). */
export function nextLegStart(samples: Sample[], index: number): number {
  const leg = samples[index]?.leg;
  for (let i = index + 1; i < samples.length; i++) if (samples[i]!.leg !== leg) return i;
  return 0;
}

/**
 * Where each leg's label goes, in the runway frame, and which way to push it: horizontal
 * legs are labelled outside the pattern, the short vertical legs inside it.
 */
export function labelPoints(
  side: Side,
): { leg: LegId; u: number; v: number; push: 'out' | 'in' }[] {
  const s = sideSign(side);
  const dw = DIM.downwindOffset * s;
  return [
    { leg: 'entry', u: DIM.midfield + 60, v: dw + 60 * s, push: 'out' },
    { leg: 'downwind', u: 80, v: dw, push: 'out' },
    { leg: 'base', u: DIM.baseAt, v: dw / 2, push: 'in' },
    { leg: 'final', u: -70, v: 0, push: 'out' },
    { leg: 'departure', u: 230, v: 0, push: 'out' },
    { leg: 'crosswind', u: DIM.crosswindAt, v: dw / 2, push: 'in' },
  ];
}

/** Middle sample of each leg run, for labels and radio call markers. */
export function legMidpoints(samples: Sample[]): Map<LegId, Sample> {
  const runs = new Map<LegId, Sample[]>();
  for (const s of samples) {
    const run = runs.get(s.leg) ?? [];
    run.push(s);
    runs.set(s.leg, run);
  }
  return new Map([...runs].map(([leg, run]) => [leg, run[Math.floor(run.length / 2)]!]));
}
