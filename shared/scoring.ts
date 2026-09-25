/**
 * Challenge scoring (plan.md Section 15.2). The client uses it for the live preview in the
 * debrief form; the server recomputes every attempt with it and never trusts the client.
 */

export const TIERS = ['gold', 'silver', 'bronze', 'none'] as const;
export type Tier = (typeof TIERS)[number];

export const CRITERION_RESULTS = ['gold', 'silver', 'bronze', 'not_met', 'met'] as const;
export type CriterionResultValue = (typeof CRITERION_RESULTS)[number];

/** The parts of a rubric criterion scoring needs. */
export interface ScoringCriterion {
  id: string;
  kind: 'tiered' | 'binary';
  required: boolean;
  weight: number;
}

export interface CriterionResult {
  criterionId: string;
  result: CriterionResultValue;
}

export const RESULT_POINTS: Record<CriterionResultValue, number> = {
  gold: 3,
  silver: 2,
  bronze: 1,
  not_met: 0,
  met: 3,
};

const ALLOWED: Record<ScoringCriterion['kind'], CriterionResultValue[]> = {
  tiered: ['gold', 'silver', 'bronze', 'not_met'],
  binary: ['met', 'not_met'],
};

export interface ScoringIssue {
  criterionId: string;
  code: 'unknown' | 'duplicate' | 'missing_required' | 'invalid_result';
  message: string;
}

/** Checks results against the rubric. An empty list means they can be scored. */
export function validateResults(
  criteria: ScoringCriterion[],
  results: CriterionResult[],
): ScoringIssue[] {
  const byId = new Map(criteria.map((c) => [c.id, c]));
  const seen = new Set<string>();
  const issues: ScoringIssue[] = [];
  for (const { criterionId, result } of results) {
    const criterion = byId.get(criterionId);
    if (!criterion) {
      issues.push({
        criterionId,
        code: 'unknown',
        message: `"${criterionId}" is not a criterion of this challenge.`,
      });
      continue;
    }
    if (seen.has(criterionId)) {
      issues.push({
        criterionId,
        code: 'duplicate',
        message: `"${criterionId}" is answered twice.`,
      });
    }
    seen.add(criterionId);
    if (!ALLOWED[criterion.kind].includes(result)) {
      issues.push({
        criterionId,
        code: 'invalid_result',
        message: `"${result}" is not a valid result for a ${criterion.kind} criterion.`,
      });
    }
  }
  for (const c of criteria) {
    if (c.required && !seen.has(c.id)) {
      issues.push({
        criterionId: c.id,
        code: 'missing_required',
        message: `"${c.id}" is required.`,
      });
    }
  }
  return issues;
}

export class ScoringError extends Error {
  constructor(readonly issues: ScoringIssue[]) {
    super(issues.map((i) => i.message).join(' '));
    this.name = 'ScoringError';
  }
}

export interface CriterionScore {
  criterionId: string;
  /** The answer, or `not_met` for an optional criterion left blank. */
  result: CriterionResultValue;
  points: number;
  weighted: number;
  /** At least Bronze, or Met. */
  met: boolean;
  required: boolean;
}

export interface Score {
  points: number;
  maxPoints: number;
  /** Rounded half up: 89.5 → 90. */
  percentage: number;
  passed: boolean;
  tier: Tier;
  criteria: CriterionScore[];
}

/**
 * Scores an attempt. Optional criteria that were not answered count as Not met. Throws a
 * `ScoringError` if the results don't fit the rubric.
 */
export function scoreAttempt(criteria: ScoringCriterion[], results: CriterionResult[]): Score {
  const issues = validateResults(criteria, results);
  if (issues.length) throw new ScoringError(issues);
  const answers = new Map(results.map((r) => [r.criterionId, r.result]));
  const scored = criteria.map((c): CriterionScore => {
    const result = answers.get(c.id) ?? 'not_met';
    const points = RESULT_POINTS[result];
    return {
      criterionId: c.id,
      result,
      points,
      weighted: points * c.weight,
      met: points >= 1,
      required: c.required,
    };
  });
  const points = scored.reduce((sum, c) => sum + c.weighted, 0);
  const maxPoints = criteria.reduce((sum, c) => sum + 3 * c.weight, 0);
  // Integer arithmetic so an exact .5 always rounds up (no floating-point surprises).
  const percentage = maxPoints === 0 ? 0 : Math.floor((200 * points + maxPoints) / (2 * maxPoints));
  const required = scored.filter((c) => c.required);
  const passed = required.every((c) => c.met);
  const requiredSilver = required.every((c) => c.points >= 2);
  const tier: Tier = !passed
    ? 'none'
    : percentage >= 90 && requiredSilver
      ? 'gold'
      : percentage >= 70
        ? 'silver'
        : 'bronze';
  return { points, maxPoints, percentage, passed, tier, criteria: scored };
}

export const TIER_RANK: Record<Tier, number> = { none: 0, bronze: 1, silver: 2, gold: 3 };

export interface RankedResult {
  tier: Tier;
  percentage: number;
  submittedAt: Date | string;
}

/**
 * Orders attempts best first: highest tier, then highest percentage, then most recent
 * (Section 15.2). Returns a negative number when `a` is better than `b`.
 */
export function compareAttempts(a: RankedResult, b: RankedResult): number {
  return (
    TIER_RANK[b.tier] - TIER_RANK[a.tier] ||
    b.percentage - a.percentage ||
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}

/** True when `candidate` should replace `best` as the challenge's best attempt. */
export function isBetterAttempt(candidate: RankedResult, best: RankedResult | null): boolean {
  return best === null || compareAttempts(candidate, best) < 0;
}
