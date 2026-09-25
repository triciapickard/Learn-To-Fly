/**
 * Load factor and stall speed in a level, coordinated turn (plan Appendix G.6). Angles in
 * degrees, speeds in knots.
 */

/** Load factor n = 1 ÷ cos(bank), in G. */
export function loadFactor(bankDeg: number): number {
  const bank = Math.abs(bankDeg);
  if (bank >= 90) return Infinity;
  return 1 / Math.cos((bank * Math.PI) / 180);
}

/** Stall speed in the turn: Vs × √n. */
export function stallSpeedInTurn(vs: number, bankDeg: number): number {
  return vs * Math.sqrt(loadFactor(bankDeg));
}

/** The bank angle at which the load factor reaches `n` (n ≥ 1). */
export function bankForLoadFactor(n: number): number {
  if (n <= 1) return 0;
  return (Math.acos(1 / n) * 180) / Math.PI;
}
