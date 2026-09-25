import type { WidgetQuestion } from '../shared/QuizPanel';

/**
 * W5 model (Section 16.6): steady-state airspeed and vertical speed for a pitch attitude and
 * power setting, by bilinear interpolation over `aircraft.yaml` → `performanceModel`.
 */

export interface PerformanceTable {
  pitchDeg: number[];
  rpm: number[];
  ias: number[][];
  vs: number[][];
}

/** Index of the cell containing `value` and how far across it (0–1), clamped to the axis. */
function locate(axis: number[], value: number): { i: number; t: number } {
  const last = axis.length - 1;
  if (value <= axis[0]!) return { i: 0, t: 0 };
  if (value >= axis[last]!) return { i: last - 1, t: 1 };
  let i = 0;
  while (value > axis[i + 1]!) i++;
  return { i, t: (value - axis[i]!) / (axis[i + 1]! - axis[i]!) };
}

function bilinear(table: number[][], r: { i: number; t: number }, c: { i: number; t: number }) {
  const v00 = table[r.i]![c.i]!;
  const v01 = table[r.i]![c.i + 1]!;
  const v10 = table[r.i + 1]![c.i]!;
  const v11 = table[r.i + 1]![c.i + 1]!;
  const top = v00 + (v01 - v00) * c.t;
  const bottom = v10 + (v11 - v10) * c.t;
  return top + (bottom - top) * r.t;
}

export interface SteadyState {
  ias: number;
  /** Vertical speed, feet per minute. */
  vs: number;
}

export function steadyState(table: PerformanceTable, pitch: number, rpm: number): SteadyState {
  const r = locate(table.pitchDeg, pitch);
  const c = locate(table.rpm, rpm);
  return { ias: bilinear(table.ias, r, c), vs: bilinear(table.vs, r, c) };
}

export function range(table: PerformanceTable) {
  return {
    pitch: [table.pitchDeg[0]!, table.pitchDeg.at(-1)!] as const,
    rpm: [table.rpm[0]!, table.rpm.at(-1)!] as const,
  };
}

/**
 * Stick force while holding an attitude: trim sets an airspeed, so flying slower than the
 * trimmed speed needs a pull and faster needs a push. −1 (full push) … 1 (full pull).
 */
export function stickForce(ias: number, trimmedIas: number): number {
  return Math.max(-1, Math.min(1, (trimmedIas - ias) / 25));
}

export function forceText(force: number): string {
  if (Math.abs(force) < 0.04) return 'Trimmed: no force needed';
  const strength = Math.abs(force) > 0.6 ? 'Strong' : Math.abs(force) > 0.25 ? 'Moderate' : 'Light';
  return `${strength} ${force > 0 ? 'back pressure (pull)' : 'forward pressure (push)'}`;
}

export const roundIas = (ias: number) => Math.round(ias);
/** Vertical speed rounded to 10 fpm, like the G1000 readout. */
export const roundVs = (vs: number) => Math.round(vs / 10) * 10;

export function vsText(vs: number): string {
  const v = roundVs(vs);
  if (Math.abs(v) < 50) return 'level';
  return `${v > 0 ? 'climbing' : 'descending'} ${Math.abs(v).toLocaleString('en-US')} feet per minute`;
}

export interface Warnings {
  stall: boolean;
  overspeed: boolean;
}

/** Stall warning within 5 knots of the clean stall speed; overspeed at the red line. */
export function warnings(ias: number, vs1: number, redline: number): Warnings {
  return { stall: ias <= vs1 + 5, overspeed: ias >= redline };
}

export function describe(pitch: number, rpm: number, state: SteadyState): string {
  const attitude =
    pitch === 0 ? 'pitch level' : `pitch ${Math.abs(pitch)} degrees ${pitch > 0 ? 'up' : 'down'}`;
  return `${attitude}, ${rpm.toLocaleString('en-US')} RPM: ${roundIas(state.ias)} knots, ${vsText(state.vs)}`;
}

export interface Scenario {
  id: string;
  name: string;
  pitch: number;
  rpm: number;
}

/** Section 16.6 scenarios. */
export const SCENARIOS: Scenario[] = [
  { id: 'cruise', name: 'Cruise', pitch: 0, rpm: 2300 },
  { id: 'vy-climb', name: 'Vy climb', pitch: 8, rpm: 2500 },
  { id: 'cruise-descent', name: 'Cruise descent', pitch: -3, rpm: 2200 },
  { id: 'slow-flight', name: 'Slow flight', pitch: 10, rpm: 2000 },
];

export interface PitchPowerQuestion extends WidgetQuestion {
  check: (state: SteadyState) => boolean;
}

export const QUESTIONS: PitchPowerQuestion[] = [
  {
    id: 'w5-descent',
    prompt: 'Set up a 500 fpm descent at 90 knots.',
    explanation:
      'Reduce power to start the descent, then set the pitch attitude that holds 90 knots: power controls the descent rate, pitch the airspeed.',
    check: (s) => Math.abs(s.ias - 90) <= 5 && Math.abs(s.vs + 500) <= 100,
  },
  {
    id: 'w5-cruise',
    prompt: 'Fly level at about 105 knots.',
    explanation:
      'Cruise power (about 2,300 RPM) with the nose on the horizon holds altitude near 105 knots.',
    check: (s) => Math.abs(s.ias - 105) <= 5 && Math.abs(s.vs) <= 100,
  },
  {
    id: 'w5-vy',
    prompt: 'Climb at Vy, 74 knots, at 600 fpm or better.',
    explanation:
      'Full power and about 8° nose up. If the airspeed drifts, adjust the pitch, not the power: pitch for airspeed.',
    check: (s) => Math.abs(s.ias - 74) <= 3 && s.vs >= 600,
  },
];
