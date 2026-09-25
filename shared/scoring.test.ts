import { describe, expect, it } from 'vitest';
import {
  compareAttempts,
  isBetterAttempt,
  scoreAttempt,
  ScoringError,
  validateResults,
  type CriterionResult,
  type ScoringCriterion,
} from './scoring.js';

const tiered = (id: string, weight: number, required = false): ScoringCriterion => ({
  id,
  kind: 'tiered',
  weight,
  required,
});
const binary = (id: string, weight: number, required = false): ScoringCriterion => ({
  id,
  kind: 'binary',
  weight,
  required,
});
const r = (criterionId: string, result: CriterionResult['result']): CriterionResult => ({
  criterionId,
  result,
});

/** `n` weight-1 tiered criteria; only the first is required. */
const many = (n: number, weight = 1) =>
  Array.from({ length: n }, (_, i) => tiered(`c${i}`, weight, i === 0));

describe('scoreAttempt (Section 15.2)', () => {
  it('scores the Section 29.7 example: 37/42 = 88% → silver', () => {
    const c43 = [
      binary('stabilised', 3, true),
      tiered('final-speed', 3, true),
      tiered('touchdown-point', 3, true),
      tiered('centreline', 2, true),
      tiered('no-bounce', 2, true),
      binary('rollout', 1),
    ];
    const score = scoreAttempt(c43, [
      r('stabilised', 'met'),
      r('final-speed', 'silver'),
      r('touchdown-point', 'gold'),
      r('centreline', 'gold'),
      r('no-bounce', 'silver'),
      r('rollout', 'met'),
    ]);
    expect(score).toMatchObject({
      points: 37,
      maxPoints: 42,
      percentage: 88,
      passed: true,
      tier: 'silver',
    });
  });

  it('all gold → gold, 100%', () => {
    const score = scoreAttempt(
      [tiered('a', 3, true), tiered('b', 2), binary('c', 1)],
      [r('a', 'gold'), r('b', 'gold'), r('c', 'met')],
    );
    expect(score).toMatchObject({ points: 18, maxPoints: 18, percentage: 100, tier: 'gold' });
  });

  it('a required criterion not met → not passed, tier none, whatever the percentage', () => {
    const criteria = [tiered('a', 1, true), tiered('b', 3), tiered('c', 3)];
    const score = scoreAttempt(criteria, [r('a', 'not_met'), r('b', 'gold'), r('c', 'gold')]);
    expect(score.percentage).toBe(86);
    expect(score).toMatchObject({ passed: false, tier: 'none' });
  });

  it('exactly 90% with a required Bronze → silver, not gold', () => {
    // Bronze 1 + silver 2 + 8 × gold 3 = 27 / 30.
    const results = many(10).map((c, i) =>
      r(c.id, i === 0 ? 'bronze' : i === 1 ? 'silver' : 'gold'),
    );
    const score = scoreAttempt(many(10), results);
    expect(score.percentage).toBe(90);
    expect(score.tier).toBe('silver');
  });

  it('rounds half up: 89.5% → 90% → gold when every required criterion is Silver or better', () => {
    // An exact .5 needs weights summing to a multiple of 200: 66 × weight 3 + 1 × weight 2
    // (max 600). 21 silvers lose 63 points: 537 / 600 = 89.5%.
    const criteria = [...many(66, 3), tiered('last', 2)];
    const results = criteria.map((c, i) => r(c.id, i >= 1 && i <= 21 ? 'silver' : 'gold'));
    const score = scoreAttempt(criteria, results);
    expect(score.points / score.maxPoints).toBe(0.895);
    expect(score.percentage).toBe(90);
    expect(score.tier).toBe('gold');
    // One more silver: 534 / 600 = 89% → silver.
    results[22] = r('c22', 'silver');
    const lower = scoreAttempt(criteria, results);
    expect(lower.percentage).toBe(89);
    expect(lower.tier).toBe('silver');
  });

  it('exactly 70% → silver; 69% → bronze', () => {
    // 100 weight-1 criteria (max 300): 70 golds = 210 → 70%, 69 golds = 207 → 69%.
    const criteria = many(100);
    const golds = (n: number) => criteria.map((c, i) => r(c.id, i < n ? 'gold' : 'not_met'));
    expect(scoreAttempt(criteria, golds(70))).toMatchObject({ percentage: 70, tier: 'silver' });
    expect(scoreAttempt(criteria, golds(69))).toMatchObject({ percentage: 69, tier: 'bronze' });
  });

  it('counts a binary "met" as 3 points and "not_met" as 0', () => {
    const criteria = [binary('a', 2, true), binary('b', 1)];
    expect(scoreAttempt(criteria, [r('a', 'met'), r('b', 'not_met')])).toMatchObject({
      points: 6,
      maxPoints: 9,
      percentage: 67,
      tier: 'bronze',
    });
  });

  it('counts an unanswered optional criterion as not met', () => {
    const score = scoreAttempt([tiered('a', 1, true), tiered('b', 1)], [r('a', 'gold')]);
    expect(score.criteria[1]).toMatchObject({ criterionId: 'b', result: 'not_met', points: 0 });
    expect(score.percentage).toBe(50);
  });

  it('marks each criterion met or not, for the result feedback', () => {
    const score = scoreAttempt(
      [tiered('a', 2, true), binary('b', 1)],
      [r('a', 'bronze'), r('b', 'not_met')],
    );
    expect(score.criteria.map((c) => [c.criterionId, c.met, c.weighted])).toEqual([
      ['a', true, 2],
      ['b', false, 0],
    ]);
  });
});

describe('validateResults', () => {
  const criteria = [tiered('speed', 3, true), binary('checklist', 1, true), tiered('extra', 1)];
  const ok = [r('speed', 'gold'), r('checklist', 'met')];

  it('accepts a complete, valid set', () => {
    expect(validateResults(criteria, ok)).toEqual([]);
  });

  it('rejects an unknown criterion id', () => {
    const issues = validateResults(criteria, [...ok, r('made-up', 'gold')]);
    expect(issues).toEqual([expect.objectContaining({ criterionId: 'made-up', code: 'unknown' })]);
    expect(() => scoreAttempt(criteria, [...ok, r('made-up', 'gold')])).toThrow(ScoringError);
  });

  it('rejects a missing required criterion', () => {
    const issues = validateResults(criteria, [r('speed', 'gold')]);
    expect(issues).toEqual([
      expect.objectContaining({ criterionId: 'checklist', code: 'missing_required' }),
    ]);
  });

  it('rejects results of the wrong kind and duplicates', () => {
    expect(validateResults(criteria, [r('speed', 'met'), r('checklist', 'gold')])).toEqual([
      expect.objectContaining({ criterionId: 'speed', code: 'invalid_result' }),
      expect.objectContaining({ criterionId: 'checklist', code: 'invalid_result' }),
    ]);
    expect(validateResults(criteria, [...ok, r('speed', 'silver')])).toEqual([
      expect.objectContaining({ criterionId: 'speed', code: 'duplicate' }),
    ]);
  });
});

describe('best attempt (tier > percentage > recency)', () => {
  const at = (tier: 'gold' | 'silver' | 'bronze' | 'none', percentage: number, day: number) => ({
    tier,
    percentage,
    submittedAt: new Date(Date.UTC(2026, 8, day)),
  });

  it('orders by tier, then percentage, then most recent', () => {
    const attempts = [
      at('silver', 95, 1),
      at('gold', 90, 2),
      at('silver', 95, 3),
      at('silver', 80, 4),
      at('none', 99, 5),
    ];
    const sorted = [...attempts].sort(compareAttempts);
    expect(sorted.map((a) => [a.tier, a.percentage, a.submittedAt.getUTCDate()])).toEqual([
      ['gold', 90, 2],
      ['silver', 95, 3],
      ['silver', 95, 1],
      ['silver', 80, 4],
      ['none', 99, 5],
    ]);
  });

  it('replaces the best only with a better attempt', () => {
    expect(isBetterAttempt(at('bronze', 50, 1), null)).toBe(true);
    expect(isBetterAttempt(at('silver', 70, 2), at('bronze', 99, 1))).toBe(true);
    expect(isBetterAttempt(at('silver', 70, 2), at('silver', 71, 1))).toBe(false);
    // Same tier and percentage: the newer attempt wins.
    expect(isBetterAttempt(at('silver', 70, 3), at('silver', 70, 2))).toBe(true);
  });
});
