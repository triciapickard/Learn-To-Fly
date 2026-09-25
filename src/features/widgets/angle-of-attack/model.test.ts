import { describe as group, expect, it } from 'vitest';
import { outlinePath, streamlines, toScreen } from './flow';
import {
  criticalAoA,
  describe,
  flowState,
  liftCoefficient,
  liftCurve,
  maxLift,
  naca4,
  QUESTIONS,
  separation,
  stallWarning,
  stallWarningAoA,
  withFlap,
} from './model';

group('W4 lift model', () => {
  it('follows CL = 0.1 × (AoA + 2) below the stall', () => {
    expect(liftCoefficient(-2, false)).toBeCloseTo(0, 9);
    expect(liftCoefficient(4, false)).toBeCloseTo(0.6, 9);
    expect(liftCoefficient(10, false)).toBeCloseTo(1.2, 9);
  });

  it('peaks at the critical angle and falls away after it', () => {
    const peak = liftCoefficient(16, false);
    expect(peak).toBeCloseTo(maxLift(false), 9);
    expect(liftCoefficient(15.5, false)).toBeLessThan(peak);
    expect(liftCoefficient(17, false)).toBeLessThan(peak);
    expect(liftCoefficient(22, false)).toBeLessThan(liftCoefficient(18, false));
    // Smooth: no jump where the straight line meets the rounded top.
    expect(Math.abs(liftCoefficient(13.01, false) - liftCoefficient(12.99, false))).toBeLessThan(
      0.01,
    );
  });

  it('flaps raise the curve and lower the critical angle', () => {
    expect(liftCoefficient(8, true)).toBeGreaterThan(liftCoefficient(8, false));
    expect(maxLift(true)).toBeGreaterThan(maxLift(false));
    expect(criticalAoA(true)).toBeLessThan(criticalAoA(false));
  });

  it('models separation, flow state and the stall warning', () => {
    expect(separation(10, false)).toBe(0);
    expect(separation(16, false)).toBeGreaterThan(0);
    expect(separation(40, false)).toBe(0.7);
    expect(flowState(5, false)).toBe('attached');
    expect(flowState(15.5, false)).toBe('separating');
    expect(flowState(16, false)).toBe('stalled');
    expect(stallWarningAoA(false)).toBe(13);
    expect(stallWarning(12.5, false)).toBe(false);
    expect(stallWarning(13, false)).toBe(true);
  });

  it('describes the state', () => {
    expect(describe(4, false)).toBe(
      'Angle of attack 4 degrees, lift coefficient 0.60, airflow attached',
    );
    expect(describe(18, false)).toMatch(
      /stalled: the airflow has separated, stall warning sounding$/,
    );
  });

  it('builds the lift curve and checks quiz answers', () => {
    const curve = liftCurve(false, 1);
    expect(curve[0]).toEqual({ aoa: -4, cl: liftCoefficient(-4, false) });
    expect(curve).toHaveLength(27);
    const [crit, warning, flaps] = QUESTIONS;
    expect(crit!.check(16, false)).toBe(true);
    expect(crit!.check(16, true)).toBe(false);
    expect(warning!.check(13, false)).toBe(true);
    expect(warning!.check(14, false)).toBe(false);
    expect(flaps!.check(14.5, true)).toBe(true);
    expect(flaps!.check(16, false)).toBe(false);
  });
});

group('W4 airfoil geometry', () => {
  it('generates a NACA 2412 section 12% thick with positive camber', () => {
    const { upper, lower } = naca4();
    expect(upper[0]).toEqual({ x: 0, y: 0 });
    expect(upper.at(-1)!.x).toBeCloseTo(1, 2);
    const thickness = Math.max(...upper.map((u, i) => u.y - lower[i]!.y));
    expect(thickness).toBeCloseTo(0.12, 2);
    const camberAt40 = (upper[18]!.y + lower[18]!.y) / 2;
    expect(camberAt40).toBeGreaterThan(0.015);
  });

  it('deflects a plain flap trailing edge down', () => {
    const te = { x: 1, y: 0 };
    expect(withFlap([te], 25)[0]!.y).toBeLessThan(0);
    expect(withFlap([{ x: 0.5, y: 0 }], 25)[0]).toEqual({ x: 0.5, y: 0 });
  });

  it('pitches the section nose up on screen', () => {
    const le = toScreen({ x: 0, y: 0 }, 10);
    const te = toScreen({ x: 1, y: 0 }, 10);
    expect(le.y).toBeLessThan(te.y);
    expect(outlinePath(5, true)).toMatch(/^M [\d.]+ [\d.]+ L .* Z$/);
  });

  it('keeps streamlines attached below the stall and separates them above it', () => {
    const calm = streamlines(5, false);
    expect(calm.lines).toHaveLength(6);
    expect(calm.lines.some((l) => l.separated)).toBe(false);
    expect(calm.eddies).toHaveLength(0);
    const stalled = streamlines(20, false);
    expect(stalled.lines[0]!.separated).toBe(true);
    expect(stalled.eddies.length).toBeGreaterThan(2);
  });
});
