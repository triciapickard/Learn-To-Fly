import { describe as group, expect, it } from 'vitest';
import {
  describe,
  eteText,
  heading,
  parseInputs,
  results,
  toward,
  vectors,
  wcaText,
  windFromTip,
  type WindInputs,
} from './model';

const example: WindInputs = { tc: 90, tas: 100, wd: 360, ws: 20, variation: 13, distance: 49 };

group('W12 wind triangle model', () => {
  it('parses and validates the fields', () => {
    const ok = parseInputs({
      tc: '090',
      tas: '100',
      wd: '360',
      ws: '20',
      variation: '13',
      distance: '49',
    });
    expect(ok.inputs).toEqual(example);
    const bad = parseInputs({
      tc: '400',
      tas: '',
      wd: 'x',
      ws: '20',
      variation: '0',
      distance: '10',
    });
    expect(bad.inputs).toBeNull();
    expect(bad.errors).toEqual({
      tc: 'Enter 0 to 360.',
      tas: 'Enter a number.',
      wd: 'Enter a number.',
    });
  });

  it('gives WCA, TH, MH, GS and ETE (plan Appendix G.1 example)', () => {
    const r = results(example)!;
    expect(wcaText(r.wca)).toBe('12° left');
    expect(heading(r.th)).toBe('078°');
    // 78.46° true, 13° east variation → 65.46° magnetic.
    expect(heading(r.mh)).toBe('065°');
    expect(Math.round(r.gs)).toBe(98);
    expect(eteText(r.ete)).toBe('30 min');
    expect(describe(example, r)).toBe(
      'Wind from 360° at 20 knots. Correct 12° left: true heading 078°, magnetic heading 065°, groundspeed 98 knots, time en route 30 min.',
    );
  });

  it('reports when there is no solution', () => {
    const strong = { ...example, tas: 40, ws: 60 };
    expect(results(strong)).toBeNull();
    expect(describe(strong, null)).toMatch(/too strong to hold course 090°/);
  });

  it('formats headings, corrections and times', () => {
    expect(heading(360)).toBe('360°');
    expect(heading(0.2)).toBe('360°');
    expect(heading(5.4)).toBe('005°');
    expect(wcaText(0.3)).toBe('0°');
    expect(wcaText(7.6)).toBe('8° right');
    expect(eteText(95)).toBe('1 h 35 min');
    expect(eteText(Infinity)).toBe('—');
  });

  it('draws ground = air + wind, and reads the wind back from a dragged tip', () => {
    const origin = { x: 160, y: 160 };
    const r = results(example)!;
    const v = vectors(example, r, origin, 1);
    // Wind from 360 blows south: the tip is below the origin.
    expect(v.wind.x).toBeCloseTo(160, 6);
    expect(v.wind.y).toBeCloseTo(180, 6);
    // The air vector from the wind tip to the ground tip is TAS long on the true heading.
    expect(Math.hypot(v.ground!.x - v.wind.x, v.ground!.y - v.wind.y)).toBeCloseTo(100, 6);
    expect(windFromTip(origin, v.wind, 1)).toEqual({ wd: 360, ws: 20 });
    expect(windFromTip(origin, toward(origin, 90, 15), 1)).toEqual({ wd: 270, ws: 15 });
  });
});
