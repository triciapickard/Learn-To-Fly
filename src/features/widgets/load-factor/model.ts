import { bankForLoadFactor, loadFactor, stallSpeedInTurn } from '@shared/aviation/loadFactor';
import type { WidgetQuestion } from '../shared/QuizPanel';

/** W14 model (Section 16.15): level, coordinated turn; numbers from Appendix G.6. */

export const MAX_BANK = 80;
/** C172S normal-category limit load, flaps up. */
export const LIMIT_LOAD = 3.8;

export interface TurnLoad {
  bank: number;
  /** Load factor in G. */
  n: number;
  /** Stall speed in the turn, KIAS. */
  stall: number;
  /** Stall speed increase over wings level, as a fraction (0.19 = +19%). */
  stallIncrease: number;
  /** Extra lift the wings must make, as a fraction of weight: the back pressure you add. */
  extraLift: number;
  /** Horizontal lift component as a fraction of weight: what turns the airplane. */
  horizontal: number;
  overLimit: boolean;
}

export function turnLoad(bank: number, vs1: number): TurnLoad {
  const b = Math.min(MAX_BANK, Math.max(0, bank));
  const n = loadFactor(b);
  const stall = stallSpeedInTurn(vs1, b);
  return {
    bank: b,
    n,
    stall,
    stallIncrease: stall / vs1 - 1,
    extraLift: n - 1,
    horizontal: Math.tan((b * Math.PI) / 180),
    overLimit: n > LIMIT_LOAD,
  };
}

export const formatG = (n: number) => `${n.toFixed(2)} G`;
export const pct = (fraction: number) => `${Math.round(fraction * 100)}%`;

/** Screen-reader text for the current bank. */
export function describe(load: TurnLoad): string {
  const parts = [
    `${load.bank} degrees of bank`,
    `load factor ${load.n.toFixed(2)} G`,
    `stall speed ${Math.round(load.stall)} knots`,
  ];
  if (load.overLimit) parts.push('over the 3.8 G limit load');
  return parts.join(', ');
}

/** Points for the load factor vs bank graph, in (bank, n). */
export function curve(step = 2): { bank: number; n: number }[] {
  const points: { bank: number; n: number }[] = [];
  for (let bank = 0; bank <= MAX_BANK; bank += step) points.push({ bank, n: loadFactor(bank) });
  return points;
}

export interface LoadQuestion extends WidgetQuestion {
  min: number;
  max: number;
}

export function quizQuestions(vs1: number): LoadQuestion[] {
  const at45 = Math.round(stallSpeedInTurn(vs1, 45));
  const limitBank = Math.ceil(bankForLoadFactor(LIMIT_LOAD));
  return [
    {
      id: 'w14-2g',
      prompt: 'Set the bank angle at which the load factor doubles to 2 G.',
      explanation:
        'At 60° of bank, n = 1 ÷ cos 60° = 2 G: the wings must lift twice the weight of the airplane.',
      min: 59,
      max: 61,
    },
    {
      id: 'w14-steep-turn',
      prompt: 'Set the bank angle for a steep turn (challenge C5.4).',
      explanation: `Steep turns use 45° of bank: 1.41 G, and the stall speed rises by about 19%, from ${vs1} to ${at45} KIAS.`,
      min: 44,
      max: 46,
    },
    {
      id: 'w14-limit',
      prompt: `Find the smallest whole-degree bank angle at which a level turn exceeds the ${LIMIT_LOAD} G limit load.`,
      explanation: `At ${limitBank}° the load factor is ${loadFactor(limitBank).toFixed(2)} G, past the ${LIMIT_LOAD} G the airframe is certified for. Steep bank angles pile on G very quickly.`,
      min: limitBank,
      max: limitBank,
    },
  ];
}

export function isCorrect(bank: number, question: LoadQuestion): boolean {
  return bank >= question.min && bank <= question.max;
}
