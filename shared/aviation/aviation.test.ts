import { describe, expect, it } from 'vitest';
import { bankForLoadFactor, loadFactor, stallSpeedInTurn } from './loadFactor.js';
import {
  rateOfTurn,
  rolloutLead,
  standardRateBank,
  standardRateBankRuleOfThumb,
  turnRadiusFt,
} from './turns.js';
import {
  fuelGallons,
  normalize180,
  timeMinutes,
  trueToMagnetic,
  windComponents,
  windTriangle,
} from './wind.js';

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

describe('wind triangle (Appendix G.1)', () => {
  // Reference cases: the plan's worked example, then cases checked by adding the air and
  // wind vectors by hand (the ground vector must come out on the true course).
  it.each([
    // tc, tas, wd, ws → wca, th, gs
    [90, 100, 360, 20, -11.5, 78.5, 98.0],
    [360, 120, 270, 30, -14.5, 345.5, 116.2],
    [180, 100, 180, 20, 0, 180, 80],
    [90, 110, 270, 15, 0, 90, 125],
    [45, 100, 90, 25, 10.2, 55.2, 80.7],
  ])('TC %i TAS %i wind %i/%i → WCA %f, TH %f, GS %f', (tc, tas, wd, ws, wca, th, gs) => {
    const s = windTriangle(tc, tas, wd, ws)!;
    expect(s.wca).toBeCloseTo(wca, 1);
    expect(s.th).toBeCloseTo(th, 1);
    expect(s.gs).toBeCloseTo(gs, 1);
    // Air vector + wind vector = ground vector along the true course.
    const air = [Math.sin((s.th * Math.PI) / 180) * tas, Math.cos((s.th * Math.PI) / 180) * tas];
    const toward = ((wd + 180) * Math.PI) / 180;
    const ground = [air[0]! + Math.sin(toward) * ws, air[1]! + Math.cos(toward) * ws];
    expect(Math.hypot(ground[0]!, ground[1]!)).toBeCloseTo(s.gs, 6);
    expect(normalize180((Math.atan2(ground[0]!, ground[1]!) * 180) / Math.PI - tc)).toBeCloseTo(
      0,
      6,
    );
  });

  it('has no solution when the wind is stronger than the airspeed across the course', () => {
    expect(windTriangle(90, 20, 360, 30)).toBeNull();
    expect(windTriangle(90, 20, 90, 30)).toBeNull();
    expect(windTriangle(90, 0, 90, 10)).toBeNull();
  });
});

describe('magnetic, components, time and fuel (Appendix G.2–G.4)', () => {
  it('converts true to magnetic: east is least, west is best', () => {
    expect(trueToMagnetic(85, 13)).toBe(72);
    expect(trueToMagnetic(350, -15)).toBe(5);
  });

  it('splits wind into crosswind and headwind', () => {
    // Runway 25 (250°), wind 200/10 → crosswind ≈ 7.7 kt from the left, headwind ≈ 6.4 kt.
    const c = windComponents(250, 200, 10);
    expect(c.crosswind).toBeCloseTo(-7.66, 2);
    expect(c.headwind).toBeCloseTo(6.43, 2);
    expect(windComponents(270, 90, 10).headwind).toBeCloseTo(-10, 9);
  });

  it('computes time and fuel', () => {
    expect(timeMinutes(50, 100)).toBe(30);
    expect(timeMinutes(10, 0)).toBe(Infinity);
    expect(fuelGallons(8.5, 30)).toBe(4.25);
  });
});
