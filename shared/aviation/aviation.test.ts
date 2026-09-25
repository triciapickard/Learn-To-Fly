import { describe, expect, it } from 'vitest';
import { bankForLoadFactor, loadFactor, stallSpeedInTurn } from './loadFactor.js';
import {
  rateOfTurn,
  rolloutLead,
  standardRateBank,
  standardRateBankRuleOfThumb,
  turnRadiusFt,
} from './turns.js';

describe('load factor (Appendix G.6)', () => {
  it.each([
    [0, 1.0, 48],
    [30, 1.15, 52],
    [45, 1.41, 57],
    [60, 2.0, 68],
    [75, 3.86, 94],
  ])('bank %i° → n %f, Vs1 48 becomes %i', (bank, n, vs) => {
    expect(loadFactor(bank)).toBeCloseTo(n, 2);
    expect(Math.round(stallSpeedInTurn(48, bank))).toBe(vs);
  });

  it('matches the Section 42 reference case', () => {
    expect(loadFactor(60)).toBeCloseTo(2.0, 6);
    expect(stallSpeedInTurn(48, 60)).toBeCloseTo(67.9, 1);
  });

  it('is symmetric and inverts', () => {
    expect(loadFactor(-45)).toBeCloseTo(loadFactor(45), 9);
    expect(loadFactor(90)).toBe(Infinity);
    expect(bankForLoadFactor(2)).toBeCloseTo(60, 6);
    expect(bankForLoadFactor(3.8)).toBeCloseTo(74.74, 2);
    expect(bankForLoadFactor(0.5)).toBe(0);
  });
});

describe('turns (Appendix G.5)', () => {
  it('computes the rate of turn', () => {
    // Standard rate at 100 kt needs about 15.4° of bank.
    expect(rateOfTurn(15.4, 100)).toBeCloseTo(3, 1);
    expect(rateOfTurn(0, 100)).toBe(0);
    expect(rateOfTurn(-20, 100)).toBeLessThan(0);
    expect(rateOfTurn(20, 0)).toBe(0);
  });

  it('gives the standard-rate bank, exact and by rule of thumb', () => {
    expect(standardRateBank(100)).toBeCloseTo(15.4, 1);
    expect(rateOfTurn(standardRateBank(120), 120)).toBeCloseTo(3, 9);
    // Lesson L2.4: at ~100 kt the rule of thumb gives ≈ 17°.
    expect(standardRateBankRuleOfThumb(100)).toBe(17);
  });

  it('computes the turn radius and rollout lead', () => {
    // 100 kt at 30° bank: 10,000 ÷ (11.26 × 0.577) ≈ 1,538 ft.
    expect(turnRadiusFt(100, 30)).toBeCloseTo(1538, -1);
    expect(turnRadiusFt(100, 0)).toBe(Infinity);
    expect(rolloutLead(30)).toBe(15);
    expect(rolloutLead(-20)).toBe(10);
  });
});
