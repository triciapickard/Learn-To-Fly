import { describe, expect, it } from 'vitest';
import {
  crab,
  DIM,
  LEG_ORDER,
  LEGS,
  legMidpoints,
  nextLegStart,
  patternGeometry,
  roundedPath,
  runwayHeading,
  toScreen,
  trackOf,
} from './model';

const legsIn = (samples: { leg: string }[]) =>
  samples.map((s) => s.leg).filter((leg, i, all) => leg !== all[i - 1]);

describe('W7 traffic pattern model', () => {
  it('flies the legs in order and loops seamlessly', () => {
    const { intro, lap, goAround } = patternGeometry('left');
    expect(legsIn(intro)).toEqual(['entry', 'downwind']);
    expect(legsIn(lap)).toEqual([
      'downwind',
      'base',
      'final',
      'touch-and-go',
      'departure',
      'crosswind',
      'downwind',
    ]);
    expect(legsIn(goAround)).toEqual(['go-around', 'crosswind', 'downwind']);
    // No jumps: consecutive samples are close together, including where paths meet.
    const gap = (a: { u: number; v: number }, b: { u: number; v: number }) =>
      Math.hypot(a.u - b.u, a.v - b.v);
    for (const path of [intro, lap, goAround]) {
      for (let i = 1; i < path.length; i++) expect(gap(path[i - 1]!, path[i]!)).toBeLessThan(6);
    }
    expect(gap(intro.at(-1)!, lap[0]!)).toBeLessThan(6);
    expect(gap(lap.at(-1)!, lap[0]!)).toBeLessThan(6);
    expect(gap(goAround.at(-1)!, lap[0]!)).toBeLessThan(6);
  });

  it('puts left traffic on the left and turns left; right traffic mirrors it', () => {
    const left = patternGeometry('left');
    const downwind = left.lap.filter((s) => s.leg === 'downwind');
    expect(downwind.every((s) => s.v < 0)).toBe(true);
    // Downwind flies opposite to landing; the 45° entry joins at 45°.
    expect(Math.abs(downwind[5]!.bearing)).toBeCloseTo(180, 0);
    expect(Math.abs(left.intro[2]!.bearing)).toBeCloseTo(135, 0);
    const right = patternGeometry('right');
    expect(right.lap.filter((s) => s.leg === 'downwind').every((s) => s.v > 0)).toBe(true);
    // Go-around side-steps to the side away from the pattern.
    const climbOut = left.goAround.find((s) => s.leg === 'go-around' && s.u > 150)!;
    expect(climbOut.v).toBeCloseTo(DIM.sideStep, 0);
  });

  it('turns the runway frame to the true heading, north up', () => {
    const origin = { x: 100, y: 100 };
    // Landing on runway 36: moving along u goes up the screen; v (right) goes east.
    expect(toScreen({ u: 10, v: 0 }, 360, origin, 1)).toEqual({ x: 100, y: 90 });
    const east = toScreen({ u: 0, v: 10 }, 360, origin, 1);
    expect(east.x).toBeCloseTo(110, 9);
    expect(east.y).toBeCloseTo(100, 9);
    expect(runwayHeading('26')).toBe(260);
    expect(runwayHeading('xx')).toBe(260);
    expect(trackOf({ u: 0, v: 0, leg: 'downwind', bearing: 180 }, 260)).toBe(80);
  });

  it('crabs into the wind and changes groundspeed', () => {
    const downwind = { u: 0, v: -150, leg: 'downwind' as const, bearing: 180 };
    // Runway 26, downwind track 080; wind from 170 (from the right of the track) at 15 kt.
    const c = crab(downwind, 260, { direction: 170, speed: 15 });
    expect(c.heading).toBeGreaterThan(80);
    expect(crab(downwind, 260, { direction: 0, speed: 0 })).toEqual({ heading: 80, gs: 88 });
    // A headwind on final slows the groundspeed.
    const final = { u: 0, v: 0, leg: 'final' as const, bearing: 0 };
    expect(crab(final, 260, { direction: 260, speed: 15 }).gs).toBeCloseTo(51, 0);
  });

  it('steps between legs and finds label points', () => {
    const { lap } = patternGeometry('left');
    const baseStart = nextLegStart(lap, 0);
    expect(lap[baseStart]!.leg).toBe('base');
    expect(nextLegStart(lap, lap.length - 1)).toBe(0);
    const mids = legMidpoints(lap);
    expect(mids.get('final')!.v).toBeCloseTo(0, 6);
  });

  it('describes each leg with configuration and radio calls', () => {
    expect(LEG_ORDER).toHaveLength(7);
    const place = { airport: 'Tracy', runway: '26', side: 'left' as const };
    expect(LEGS.entry.call!(place)).toBe(
      'Tracy traffic, Skyhawk 123, entering left downwind runway 26 on the 45, Tracy.',
    );
    expect(LEGS['go-around'].call!(place)).toBe(
      'Tracy traffic, Skyhawk 123, going around runway 26, Tracy.',
    );
    expect(LEGS.downwind.config).toMatch(/Abeam the touchdown point/);
  });

  it('rounds corners without losing the endpoints', () => {
    const path = roundedPath(
      [
        { u: 0, v: 0, leg: 'departure' },
        { u: 100, v: 0, leg: 'crosswind' },
        { u: 100, v: 100, leg: 'downwind' },
      ],
      20,
    );
    expect(path[0]).toMatchObject({ u: 0, v: 0, leg: 'departure' });
    expect(path.at(-1)).toMatchObject({ u: 100, v: 100 });
    // No point reaches the sharp corner.
    expect(path.some((p) => p.u > 99 && p.v < 1)).toBe(false);
  });
});
