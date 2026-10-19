import { describe, expect, it } from 'vitest';
import {
  minimumJerk,
  moveDuration,
  planMove,
  planStroke,
  restingDrift,
  seededRandom,
} from './motion';

describe('seededRandom', () => {
  it('repeats the same sequence for the same seed', () => {
    const a = seededRandom(7);
    const b = seededRandom(7);
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });

  it('stays in [0, 1)', () => {
    const r = seededRandom(1);
    for (let i = 0; i < 1000; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('minimumJerk', () => {
  it('starts and ends at rest and is fastest in the middle', () => {
    expect(minimumJerk(0)).toBe(0);
    expect(minimumJerk(1)).toBe(1);
    const early = minimumJerk(0.1) - minimumJerk(0);
    const middle = minimumJerk(0.55) - minimumJerk(0.45);
    expect(middle).toBeGreaterThan(early);
  });
});

describe('moveDuration', () => {
  it('grows with distance but not in proportion', () => {
    expect(moveDuration(800)).toBeGreaterThan(moveDuration(100));
    expect(moveDuration(800)).toBeLessThan(moveDuration(100) * 8);
    expect(moveDuration(0)).toBeGreaterThanOrEqual(0.32);
    expect(moveDuration(100000)).toBeLessThanOrEqual(1.1);
  });
});

describe('planMove', () => {
  const from = { x: 100, y: 500 };
  const to = { x: 900, y: 200 };

  it('starts at the start and lands exactly on the target', () => {
    const move = planMove(from, to, 3);
    expect(move.at(0)).toEqual(from);
    const end = move.at(move.duration);
    expect(end.x).toBeCloseTo(to.x, 6);
    expect(end.y).toBeCloseTo(to.y, 6);
  });

  it('curves off the straight line and overshoots before settling', () => {
    const move = planMove(from, to, 3);
    const mid = move.at(move.duration * 0.4);
    // Distance from the straight line between from and to.
    const off =
      Math.abs((to.y - from.y) * mid.x - (to.x - from.x) * mid.y + to.x * from.y - to.y * from.x) /
      Math.hypot(to.x - from.x, to.y - from.y);
    expect(off).toBeGreaterThan(5);

    const nearEnd = move.at(move.duration * 0.82);
    const along = (nearEnd.x - from.x) * (to.x - from.x) + (nearEnd.y - from.y) * (to.y - from.y);
    expect(along / Math.hypot(to.x - from.x, to.y - from.y) ** 2).toBeGreaterThan(1);
  });

  it('is the same path for the same seed and a different one for another', () => {
    const t = 0.3;
    expect(planMove(from, to, 5).at(t)).toEqual(planMove(from, to, 5).at(t));
    expect(planMove(from, to, 5).at(t)).not.toEqual(planMove(from, to, 6).at(t));
  });
});

describe('planStroke', () => {
  it('passes through every waypoint and ends on the last', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
    ];
    const stroke = planStroke(points, 1, 0.2);
    const end = stroke.at(stroke.duration);
    expect(end.x).toBeCloseTo(100, 6);
    expect(end.y).toBeCloseTo(100, 6);
    expect(stroke.at(stroke.duration + 5)).toEqual(points[2]);
  });
});

describe('restingDrift', () => {
  it('wanders by no more than a couple of pixels', () => {
    for (let s = 0; s < 20; s += 0.37) {
      const p = restingDrift(s, 9);
      expect(Math.abs(p.x)).toBeLessThan(2);
      expect(Math.abs(p.y)).toBeLessThan(2);
    }
  });
});
