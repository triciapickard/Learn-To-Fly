import { describe as group, expect, it } from 'vitest';
import {
  describe,
  forceText,
  QUESTIONS,
  range,
  SCENARIOS,
  steadyState,
  stickForce,
  vsText,
  warnings,
  type PerformanceTable,
} from './model';

const table: PerformanceTable = {
  pitchDeg: [0, 10],
  rpm: [2000, 2400],
  ias: [
    [100, 120],
    [60, 80],
  ],
  vs: [
    [-200, 200],
    [200, 800],
  ],
};

group('W5 pitch and power model', () => {
  it('returns table values at the grid points', () => {
    expect(steadyState(table, 0, 2000)).toEqual({ ias: 100, vs: -200 });
    expect(steadyState(table, 10, 2400)).toEqual({ ias: 80, vs: 800 });
  });

  it('interpolates bilinearly between them', () => {
    expect(steadyState(table, 5, 2200)).toEqual({ ias: 90, vs: 250 });
    expect(steadyState(table, 0, 2100)).toEqual({ ias: 105, vs: -100 });
  });

  it('clamps outside the table', () => {
    expect(steadyState(table, -5, 1500)).toEqual({ ias: 100, vs: -200 });
    expect(steadyState(table, 20, 3000)).toEqual({ ias: 80, vs: 800 });
    expect(range(table)).toEqual({ pitch: [0, 10], rpm: [2000, 2400] });
  });

  it('needs a pull below the trimmed speed and a push above it', () => {
    expect(stickForce(80, 100)).toBeGreaterThan(0);
    expect(stickForce(120, 100)).toBeLessThan(0);
    expect(stickForce(100, 100)).toBe(0);
    expect(stickForce(0, 100)).toBe(1);
    expect(forceText(0)).toBe('Trimmed: no force needed');
    expect(forceText(0.5)).toBe('Moderate back pressure (pull)');
    expect(forceText(-0.9)).toBe('Strong forward pressure (push)');
  });

  it('describes vertical speed, warnings and the state', () => {
    expect(vsText(20)).toBe('level');
    expect(vsText(1234)).toBe('climbing 1,230 feet per minute');
    expect(vsText(-500)).toBe('descending 500 feet per minute');
    expect(warnings(52, 48, 163)).toEqual({ stall: true, overspeed: false });
    expect(warnings(165, 48, 163)).toEqual({ stall: false, overspeed: true });
    expect(describe(-3, 2200, { ias: 114.4, vs: -451 })).toBe(
      'pitch 3 degrees down, 2,200 RPM: 114 knots, descending 450 feet per minute',
    );
    expect(describe(0, 2300, { ias: 102, vs: 0 })).toMatch(/^pitch level/);
  });

  it('checks quiz answers', () => {
    const [descent, cruise, vy] = QUESTIONS;
    expect(descent!.check({ ias: 92, vs: -540 })).toBe(true);
    expect(descent!.check({ ias: 92, vs: -300 })).toBe(false);
    expect(cruise!.check({ ias: 103, vs: 60 })).toBe(true);
    expect(vy!.check({ ias: 75, vs: 660 })).toBe(true);
    expect(vy!.check({ ias: 80, vs: 660 })).toBe(false);
    expect(SCENARIOS.map((s) => s.id)).toEqual([
      'cruise',
      'vy-climb',
      'cruise-descent',
      'slow-flight',
    ]);
  });
});
