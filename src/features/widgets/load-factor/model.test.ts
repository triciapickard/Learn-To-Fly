import { describe as group, expect, it } from 'vitest';
import { curve, describe, formatG, isCorrect, quizQuestions, turnLoad } from './model';

group('W14 load factor model', () => {
  it('computes the load, stall speed and components', () => {
    const load = turnLoad(45, 48);
    expect(load.n).toBeCloseTo(1.414, 3);
    expect(Math.round(load.stall)).toBe(57);
    expect(load.stallIncrease).toBeCloseTo(0.189, 3);
    expect(load.extraLift).toBeCloseTo(0.414, 3);
    expect(load.horizontal).toBeCloseTo(1, 6);
    expect(load.overLimit).toBe(false);
  });

  it('clamps the bank and flags the limit load', () => {
    expect(turnLoad(-10, 48).bank).toBe(0);
    expect(turnLoad(120, 48).bank).toBe(80);
    expect(turnLoad(74, 48).overLimit).toBe(false);
    expect(turnLoad(75, 48).overLimit).toBe(true);
  });

  it('describes the state for screen readers', () => {
    expect(describe(turnLoad(60, 48))).toBe(
      '60 degrees of bank, load factor 2.00 G, stall speed 68 knots',
    );
    expect(describe(turnLoad(76, 48))).toMatch(/over the 3.8 G limit load$/);
    expect(formatG(1.4142)).toBe('1.41 G');
  });

  it('builds the graph curve', () => {
    const points = curve(10);
    expect(points).toHaveLength(9);
    expect(points[0]).toEqual({ bank: 0, n: 1 });
    expect(points[6]?.n).toBeCloseTo(2, 6);
  });

  it('checks quiz answers', () => {
    const [twoG, steep, limit] = quizQuestions(48);
    expect(isCorrect(60, twoG!)).toBe(true);
    expect(isCorrect(62, twoG!)).toBe(false);
    expect(steep!.explanation).toContain('from 48 to 57 KIAS');
    expect(isCorrect(75, limit!)).toBe(true);
    expect(isCorrect(74, limit!)).toBe(false);
    expect(isCorrect(76, limit!)).toBe(false);
  });
});
