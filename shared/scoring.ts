/**
 * Challenge scoring (Section 15.2). Placeholder until Phase 7 implements the full
 * algorithm with exhaustive tests.
 */
export type Tier = 'gold' | 'silver' | 'bronze' | 'none';

export function scoreAttempt(): { tier: Tier; percentage: number } {
  return { tier: 'none', percentage: 0 };
}
