/**
 * Turn performance (plan Appendix G.5). Angles in degrees, speeds in knots. These assume a
 * level, coordinated turn.
 */

const toRad = (deg: number) => (deg * Math.PI) / 180;
const toDeg = (rad: number) => (rad * 180) / Math.PI;

/** The standard rate of turn: 3° per second, a full circle in two minutes. */
export const STANDARD_RATE = 3;

/** Rate of turn in degrees per second: 1,091 × tan(bank) ÷ TAS. */
export function rateOfTurn(bankDeg: number, tasKt: number): number {
  if (tasKt <= 0) return 0;
  return (1091 * Math.tan(toRad(bankDeg))) / tasKt;
}

/** The bank angle that gives a standard-rate turn at this TAS (exact, from the formula above). */
export function standardRateBank(tasKt: number): number {
  return toDeg(Math.atan((STANDARD_RATE * tasKt) / 1091));
}

/** Rule of thumb for standard-rate bank: TAS ÷ 10 + 7. */
export function standardRateBankRuleOfThumb(tasKt: number): number {
  return tasKt / 10 + 7;
}

/** Turn radius in feet: TAS² ÷ (11.26 × tan(bank)). Infinite when wings are level. */
export function turnRadiusFt(tasKt: number, bankDeg: number): number {
  const t = Math.tan(toRad(Math.abs(bankDeg)));
  return t === 0 ? Infinity : (tasKt * tasKt) / (11.26 * t);
}

/** Start the rollout about half the bank angle before the target heading. */
export function rolloutLead(bankDeg: number): number {
  return Math.abs(bankDeg) / 2;
}
