/**
 * Cursor motion for the launch video reel (`/dev/reel`). Pure maths, no DOM: a seeded random
 * source so every take of a shot moves the same way, and moves that read as a hand on a mouse
 * rather than a tween: a curved path, fast in the middle, a small overshoot that is corrected,
 * and a slow drift while the hand rests.
 */

export interface Point {
  x: number;
  y: number;
}

/** Deterministic random numbers in [0, 1) (mulberry32). Same seed, same sequence. */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

/** Minimum-jerk profile: how a hand moves between two points (slow, fast, slow). */
export function minimumJerk(t: number): number {
  const u = clamp01(t);
  return u * u * u * (10 - 15 * u + 6 * u * u);
}

/** Ease-out for the small corrective move at the end. */
export function easeOutCubic(t: number): number {
  const u = 1 - clamp01(t);
  return 1 - u * u * u;
}

function cubic(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
  };
}

/**
 * How long a hand takes to cover `distance` pixels (Fitts-style: longer moves take longer, but
 * not proportionally). Seconds.
 */
export function moveDuration(distance: number): number {
  return Math.min(1.1, Math.max(0.32, 0.26 + 0.12 * Math.log2(1 + distance / 40)));
}

export interface Move {
  from: Point;
  to: Point;
  duration: number;
  at: (t: number) => Point;
}

/**
 * A human-looking move from `from` to `to`. The main stroke curves to one side and lands a
 * few pixels past the target; the last 18% of the time corrects back onto it.
 */
export function planMove(from: Point, to: Point, seed: number, duration?: number): Move {
  const rand = seededRandom(seed);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.hypot(dx, dy);
  const total = duration ?? moveDuration(distance);
  if (distance < 1) return { from, to, duration: total, at: () => to };

  const ux = dx / distance;
  const uy = dy / distance;
  // Perpendicular, so the stroke bows like a wrist turning rather than a ruler line.
  const px = -uy;
  const py = ux;
  const bend = distance * (0.06 + rand() * 0.12) * (rand() < 0.5 ? -1 : 1);
  const overshoot = Math.min(14, distance * (0.02 + rand() * 0.03));
  const drift = (rand() - 0.5) * Math.min(6, distance * 0.02);
  const landing = {
    x: to.x + ux * overshoot + px * drift,
    y: to.y + uy * overshoot + py * drift,
  };
  const c1 = {
    x: from.x + dx * 0.3 + px * bend,
    y: from.y + dy * 0.3 + py * bend,
  };
  const c2 = {
    x: from.x + dx * 0.75 + px * bend * 0.45,
    y: from.y + dy * 0.75 + py * bend * 0.45,
  };
  const split = 0.82;

  return {
    from,
    to,
    duration: total,
    at: (t: number) => {
      const u = clamp01(t / total);
      if (u <= split) return cubic(from, c1, c2, landing, minimumJerk(u / split));
      const k = easeOutCubic((u - split) / (1 - split));
      return { x: landing.x + (to.x - landing.x) * k, y: landing.y + (to.y - landing.y) * k };
    },
  };
}

/** Slow wander of a resting hand, a pixel or two, so a still cursor never looks frozen. */
export function restingDrift(seconds: number, seed: number): Point {
  const rand = seededRandom(seed);
  const p1 = rand() * Math.PI * 2;
  const p2 = rand() * Math.PI * 2;
  const p3 = rand() * Math.PI * 2;
  const p4 = rand() * Math.PI * 2;
  return {
    x: 1.1 * Math.sin(seconds * 0.9 + p1) + 0.5 * Math.sin(seconds * 2.3 + p2),
    y: 0.9 * Math.sin(seconds * 0.7 + p3) + 0.4 * Math.sin(seconds * 1.7 + p4),
  };
}

/**
 * A drag through several points, as one continuous stroke: each leg is a human move, and the
 * hand pauses briefly (`dwell` seconds) on each waypoint. Returns the position at time t.
 */
export function planStroke(points: Point[], seed: number, dwell = 0.25): Move {
  const legs = points.slice(1).map((p, i) => planMove(points[i]!, p, seed + i + 1));
  const total =
    legs.reduce((sum, leg) => sum + leg.duration + dwell, 0) - (legs.length ? dwell : 0);
  const first = points[0] ?? { x: 0, y: 0 };
  const last = points.at(-1) ?? first;
  return {
    from: first,
    to: last,
    duration: total,
    at: (t: number) => {
      let rest = Math.max(0, t);
      for (const leg of legs) {
        if (rest <= leg.duration) return leg.at(rest);
        rest -= leg.duration;
        if (rest <= dwell) return leg.to;
        rest -= dwell;
      }
      return last;
    },
  };
}
