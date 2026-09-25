import { describe as suite, expect, it } from 'vitest';
import { clampToMap, describe, needleText, pointAt, QUESTIONS, QUIZ_START, read } from './model';

suite('W9 VOR/CDI model', () => {
  it('reads radial, flag and needle from the aircraft position', () => {
    const r = read({ aircraft: pointAt(80, 10), heading: 90, obs: 90 });
    expect(Math.round(r.radial)).toBe(80);
    expect(r.flag).toBe('FROM');
    expect(needleText(r)).toBe('full scale right');
    expect(read({ aircraft: pointAt(86, 10), heading: 90, obs: 90 })).toMatchObject({
      flag: 'FROM',
    });
    expect(needleText(read({ aircraft: pointAt(86, 10), heading: 90, obs: 90 }))).toBe(
      '2 dots right',
    );
    expect(needleText(read({ aircraft: pointAt(90, 10), heading: 90, obs: 90 }))).toBe('centered');
  });

  it('describes reverse sensing and the cone of confusion', () => {
    const reverse = { aircraft: pointAt(90, 10), heading: 270, obs: 90 };
    expect(describe(reverse, read(reverse))).toContain('Reverse sensing');
    const over = { aircraft: { x: 0.1, y: 0 }, heading: 90, obs: 90 };
    expect(describe(over, read(over))).toContain('OFF');
  });

  it('keeps the airplane on the map', () => {
    const p = clampToMap({ x: 60, y: 80 });
    expect(Math.hypot(p.x, p.y)).toBeCloseTo(25);
  });

  it('checks the quiz answers geometrically', () => {
    const [whichRadial, centerTo, intercept, noReverse] = QUESTIONS;
    const on045 = { ...QUIZ_START, obs: 45 };
    expect(whichRadial!.check(on045, read(on045))).toBe(true);
    const to = { ...QUIZ_START, obs: 225 };
    expect(centerTo!.check(to, read(to))).toBe(true);
    expect(whichRadial!.check(to, read(to))).toBe(false);
    const turn = { ...QUIZ_START, heading: 130 };
    expect(intercept!.check(turn, read(turn))).toBe(true);
    const wrongWay = { ...QUIZ_START, heading: 60 };
    expect(intercept!.check(wrongWay, read(wrongWay))).toBe(false);
    // Heading 040 with OBS 225 (TO) centres the needle but senses backwards.
    expect(noReverse!.check(to, read(to))).toBe(false);
    expect(noReverse!.check(on045, read(on045))).toBe(true);
  });
});
