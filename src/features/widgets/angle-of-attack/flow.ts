import { naca4, separation, withFlap, type Pt } from './model';

/**
 * Screen geometry for the W4 airfoil panel: the rotated NACA 2412 section and illustrative
 * streamlines. Screen y grows downwards; the relative wind blows from the left.
 */

export const LAYOUT = { chord: 190, pivot: { x: 128, y: 104 }, width: 360 };
const FLAP_DEFLECTION = 25;
const SECTION = naca4();

/** Chord-unit point → screen, pitched nose-up by `aoa` about the quarter chord. */
export function toScreen(p: Pt, aoa: number): Pt {
  const a = (aoa * Math.PI) / 180;
  const px = (p.x - 0.25) * LAYOUT.chord;
  const py = -p.y * LAYOUT.chord;
  return {
    x: LAYOUT.pivot.x + px * Math.cos(a) - py * Math.sin(a),
    y: LAYOUT.pivot.y + px * Math.sin(a) + py * Math.cos(a),
  };
}

export function section(flaps: boolean) {
  const deflection = flaps ? FLAP_DEFLECTION : 0;
  return {
    upper: withFlap(SECTION.upper, deflection),
    lower: withFlap(SECTION.lower, deflection),
  };
}

export function outlinePath(aoa: number, flaps: boolean): string {
  const { upper, lower } = section(flaps);
  const pts = [...upper, ...[...lower].reverse()].map((p) => toScreen(p, aoa));
  return `M ${pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')} Z`;
}

/** The surface point nearest a chord fraction. */
function at(points: Pt[], fraction: number): Pt {
  let best = points[0]!;
  for (const p of points) if (Math.abs(p.x - fraction) < Math.abs(best.x - fraction)) best = p;
  return best;
}

/** Lines further from the wing follow its shape less closely (blend towards the chord line). */
const FOLLOW = [0, 0.45, 0.75];

function follow(surface: Pt[], s: number, aoa: number, line: number): Pt {
  const onSurface = toScreen(at(surface, s), aoa);
  const onChord = toScreen({ x: s, y: 0 }, aoa);
  const k = FOLLOW[line] ?? 0;
  return {
    x: onSurface.x * (1 - k) + onChord.x * k,
    y: onSurface.y * (1 - k) + onChord.y * k,
  };
}

export interface Streamline {
  side: 'upper' | 'lower';
  points: Pt[];
  /** True for the line that has broken away from the surface. */
  separated: boolean;
}

export interface Eddy {
  x: number;
  y: number;
  r: number;
}

const UPPER_OFFSETS = [9, 24, 42];
const LOWER_OFFSETS = [10, 26, 44];
const STATIONS = [0.03, 0.12, 0.3, 0.5, 0.7, 0.88, 1];

export function streamlines(aoa: number, flaps: boolean): { lines: Streamline[]; eddies: Eddy[] } {
  const { upper, lower } = section(flaps);
  const le = toScreen({ x: 0, y: 0 }, aoa);
  const te = toScreen(at(upper, 1), aoa);
  const sep = separation(aoa, flaps);
  // Flow rises ahead of a lifting wing (upwash) and leaves it downwards (downwash).
  const upwash = 0.5 * (LAYOUT.pivot.y - le.y);
  const downwash = 26 * Math.sin((Math.max(0, aoa + 2) * Math.PI) / 180) + (flaps ? 8 : 0);
  const lines: Streamline[] = [];
  const eddies: Eddy[] = [];

  // Every upper line breaks away where the flow separates, keeping its spacing.
  const breakAway = sep > 0 ? 1 - sep : 1;
  UPPER_OFFSETS.forEach((d, i) => {
    const pts: Pt[] = [
      { x: 0, y: le.y - d + upwash },
      { x: le.x - 28, y: le.y - d + upwash * 0.6 },
    ];
    for (const s of STATIONS) {
      if (s > breakAway) break;
      const p = follow(upper, s, aoa, i);
      pts.push({ x: p.x, y: p.y - d });
    }
    const last = pts[pts.length - 1]!;
    if (breakAway < 1) {
      pts.push({ x: last.x + 50, y: last.y - 6 }, { x: LAYOUT.width, y: last.y - 10 });
    } else {
      pts.push(
        { x: te.x + 40, y: te.y - d * 0.9 + downwash * 0.6 },
        { x: LAYOUT.width, y: te.y - d + downwash },
      );
    }
    lines.push({ side: 'upper', points: pts, separated: breakAway < 1 });
  });

  LOWER_OFFSETS.forEach((d) => {
    const pts: Pt[] = [
      { x: 0, y: le.y + d + upwash },
      { x: le.x - 28, y: le.y + d + upwash * 0.8 },
    ];
    for (const s of STATIONS) {
      const p = follow(lower, s, aoa, LOWER_OFFSETS.indexOf(d));
      pts.push({ x: p.x, y: p.y + d });
    }
    pts.push(
      { x: te.x + 40, y: te.y + d * 0.9 + downwash * 0.7 },
      { x: LAYOUT.width, y: te.y + d + downwash },
    );
    lines.push({ side: 'lower', points: pts, separated: false });
  });

  if (sep > 0) {
    // Eddies fill the separated region over the rear of the wing and trail behind it.
    const count = Math.max(2, Math.round(sep * 8));
    for (let k = 0; k < count; k++) {
      const s = 1 - sep + ((k + 0.5) / count) * (sep + 0.35);
      const base =
        s <= 1 ? toScreen(at(upper, s), aoa) : { x: te.x + (s - 1) * LAYOUT.chord, y: te.y };
      const r = 4 + sep * 9;
      eddies.push({ x: base.x, y: base.y - r - 2 - (k % 2) * 4, r });
    }
  }
  return { lines, eddies };
}
