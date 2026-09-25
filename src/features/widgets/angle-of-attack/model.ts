import type { WidgetQuestion } from '../shared/QuizPanel';

/**
 * W4 model (Section 16.5). Simplified: shapes are realistic, numbers are illustrative.
 * Lift curve CL = 0.1 × (AoA + 2), rounded off near the critical angle, then a smooth
 * decline; flaps shift the curve up and stall the wing slightly earlier.
 */

export const AOA_MIN = -4;
export const AOA_MAX = 22;

const SLOPE = 0.1;
const ZERO_LIFT_AOA = -2;
const FLAP_CL = 0.4;
/** Width (degrees) of the rounded top of the lift curve. */
const ROUNDING = 3;
/** The stall warning sounds this many degrees before the critical angle. */
const WARNING_MARGIN = 3;

export function criticalAoA(flaps: boolean): number {
  return flaps ? 14.5 : 16;
}

export function stallWarningAoA(flaps: boolean): number {
  return criticalAoA(flaps) - WARNING_MARGIN;
}

function linear(aoa: number, flaps: boolean): number {
  return SLOPE * (aoa - ZERO_LIFT_AOA) + (flaps ? FLAP_CL : 0);
}

export function maxLift(flaps: boolean): number {
  return linear(criticalAoA(flaps), flaps) - (SLOPE / (2 * ROUNDING)) * ROUNDING ** 2;
}

/** Lift coefficient at an angle of attack (degrees). */
export function liftCoefficient(aoa: number, flaps: boolean): number {
  const crit = criticalAoA(flaps);
  const bendStart = crit - ROUNDING;
  if (aoa <= bendStart) return linear(aoa, flaps);
  if (aoa <= crit) {
    // A parabola that meets the straight line smoothly and is flat at the critical angle.
    return linear(aoa, flaps) - (SLOPE / (2 * ROUNDING)) * (aoa - bendStart) ** 2;
  }
  return maxLift(flaps) - 0.035 * (aoa - crit) ** 1.6;
}

/**
 * How far forward from the trailing edge the upper-surface flow has separated, as a
 * fraction of the chord (0 = fully attached).
 */
export function separation(aoa: number, flaps: boolean): number {
  const start = criticalAoA(flaps) - 1;
  return Math.min(0.7, Math.max(0, (aoa - start) / 8));
}

export type FlowState = 'attached' | 'separating' | 'stalled';

export function flowState(aoa: number, flaps: boolean): FlowState {
  if (aoa >= criticalAoA(flaps)) return 'stalled';
  return separation(aoa, flaps) > 0 ? 'separating' : 'attached';
}

export function stallWarning(aoa: number, flaps: boolean): boolean {
  return aoa >= stallWarningAoA(flaps);
}

const FLOW_TEXT: Record<FlowState, string> = {
  attached: 'airflow attached',
  separating: 'airflow starting to separate at the trailing edge',
  stalled: 'stalled: the airflow has separated',
};

export function describe(aoa: number, flaps: boolean): string {
  const parts = [
    `Angle of attack ${aoa} degrees`,
    `lift coefficient ${liftCoefficient(aoa, flaps).toFixed(2)}`,
    FLOW_TEXT[flowState(aoa, flaps)],
  ];
  if (stallWarning(aoa, flaps)) parts.push('stall warning sounding');
  return parts.join(', ');
}

/** Points on the lift curve for the graph. */
export function liftCurve(flaps: boolean, step = 0.5): { aoa: number; cl: number }[] {
  const points: { aoa: number; cl: number }[] = [];
  for (let aoa = AOA_MIN; aoa <= AOA_MAX + 1e-9; aoa += step) {
    points.push({ aoa, cl: liftCoefficient(aoa, flaps) });
  }
  return points;
}

export type Pt = { x: number; y: number };

/**
 * NACA four-digit section (the Skyhawk's wing is a NACA 2412). Returns upper and lower
 * surfaces from leading to trailing edge in chord units, y up.
 */
export function naca4(m = 0.02, p = 0.4, t = 0.12, n = 40): { upper: Pt[]; lower: Pt[] } {
  const upper: Pt[] = [];
  const lower: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    // Cosine spacing packs points near the leading edge.
    const x = (1 - Math.cos((i / n) * Math.PI)) / 2;
    const yt =
      5 *
      t *
      (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x ** 2 + 0.2843 * x ** 3 - 0.1036 * x ** 4);
    const yc =
      x < p
        ? (m / p ** 2) * (2 * p * x - x ** 2)
        : (m / (1 - p) ** 2) * (1 - 2 * p + 2 * p * x - x ** 2);
    const dyc = x < p ? ((2 * m) / p ** 2) * (p - x) : ((2 * m) / (1 - p) ** 2) * (p - x);
    const theta = Math.atan(dyc);
    upper.push({ x: x - yt * Math.sin(theta), y: yc + yt * Math.cos(theta) });
    lower.push({ x: x + yt * Math.sin(theta), y: yc - yt * Math.cos(theta) });
  }
  return { upper, lower };
}

/** Deflects the part of the section behind the hinge (a plain flap), in chord units. */
export function withFlap(points: Pt[], deflectionDeg: number, hinge = 0.75): Pt[] {
  if (deflectionDeg === 0) return points;
  const a = (deflectionDeg * Math.PI) / 180;
  const hy = 0;
  return points.map((pt) => {
    if (pt.x <= hinge) return pt;
    const dx = pt.x - hinge;
    const dy = pt.y - hy;
    return {
      x: hinge + dx * Math.cos(a) + dy * Math.sin(a),
      y: hy - dx * Math.sin(a) + dy * Math.cos(a),
    };
  });
}

export interface AoaQuestion extends WidgetQuestion {
  check: (aoa: number, flaps: boolean) => boolean;
}

export const QUESTIONS: AoaQuestion[] = [
  {
    id: 'w4-critical',
    prompt: 'Set the angle of attack where the wing stalls (flaps up).',
    explanation:
      'The critical angle of attack, about 16° here. Past it the airflow separates from the upper surface and lift falls away — at any airspeed.',
    check: (aoa, flaps) => !flaps && Math.abs(aoa - criticalAoA(false)) <= 1,
  },
  {
    id: 'w4-warning',
    prompt: 'Find the lowest angle of attack where the stall warning sounds (flaps up).',
    explanation:
      'The warning comes on a few degrees before the critical angle, giving you time to lower the nose.',
    check: (aoa, flaps) =>
      !flaps && aoa >= stallWarningAoA(false) && aoa < stallWarningAoA(false) + 1,
  },
  {
    id: 'w4-flaps',
    prompt: 'Lower the flaps and set the new critical angle of attack.',
    explanation:
      'Flaps raise the whole lift curve, so there is more lift at every angle, but the wing stalls a little earlier: about 14.5° here.',
    check: (aoa, flaps) => flaps && Math.abs(aoa - criticalAoA(true)) <= 1,
  },
];
