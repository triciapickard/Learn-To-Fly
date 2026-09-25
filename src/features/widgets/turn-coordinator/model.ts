import {
  rateOfTurn,
  STANDARD_RATE,
  standardRateBank,
  standardRateBankRuleOfThumb,
} from '@shared/aviation/turns';
import type { WidgetQuestion } from '../shared/QuizPanel';

/**
 * W6 model (Section 16.7). Simplified: the rudder that keeps a turn coordinated grows with the
 * bank, and any difference between that and the rudder applied moves the ball and yaws the
 * nose away from the flight path. Turn rate comes from Appendix G.5.
 */

export const MAX_BANK = 45;
/** Pedal deflection (fraction of full) that coordinates a 45° bank in this model. */
const RUDDER_AT_MAX_BANK = 0.5;
/** Rudder mismatch below which the ball counts as centred. */
const COORDINATED_TOLERANCE = 0.05;

export type Coordination = 'coordinated' | 'slip' | 'skid';
export type Side = 'left' | 'right';

export interface TurnState {
  bank: number;
  /** Pedal input −1 (full left) … 1 (full right). */
  rudder: number;
  tas: number;
  /** Applied rudder minus the rudder that would coordinate this bank. */
  mismatch: number;
  /** Ball (and trapezoid) displacement −1 (left) … 1 (right). */
  ball: number;
  coordination: Coordination;
  /** Turn rate in °/s, positive to the right. */
  rate: number;
  /** Tilt of the turn coordinator's miniature airplane, degrees (standard rate = 20°). */
  tcTilt: number;
  /** Nose yaw relative to the flight path, degrees (positive = right). */
  yaw: number;
  /** "Coordinated", "Slipping — add right rudder", … */
  advice: string;
}

export function coordinatedRudder(bank: number): number {
  return (bank / MAX_BANK) * RUDDER_AT_MAX_BANK;
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function turnState(bank: number, rudder: number, tas: number): TurnState {
  const b = clamp(bank, -MAX_BANK, MAX_BANK);
  const r = clamp(rudder, -1, 1);
  const mismatch = r - coordinatedRudder(b);
  const ball = clamp(-mismatch * 2, -1, 1);
  let coordination: Coordination = 'coordinated';
  if (Math.abs(mismatch) >= COORDINATED_TOLERANCE) {
    // Ball to the inside of the turn = slip; to the outside, or yawing with wings level = skid.
    const turn = Math.sign(b);
    coordination = turn !== 0 && Math.sign(mismatch) !== turn ? 'slip' : 'skid';
  }
  // Excess rudder yaws the airplane round faster (a simplified extra 2°/s at full mismatch).
  const rate = rateOfTurn(b, tas) + mismatch * 2;
  const ballSide: Side = ball > 0 ? 'right' : 'left';
  const otherSide: Side = ball > 0 ? 'left' : 'right';
  const advice =
    coordination === 'coordinated'
      ? 'Coordinated'
      : coordination === 'slip'
        ? `Slipping — add ${ballSide} rudder`
        : `Skidding — too much ${otherSide} rudder; ease it off`;
  return {
    bank: b,
    rudder: r,
    tas,
    mismatch,
    ball,
    coordination,
    rate,
    tcTilt: clamp((rate / STANDARD_RATE) * 20, -40, 40),
    yaw: mismatch * 15,
    advice,
  };
}

export function sideOf(value: number): Side | 'level' {
  if (Math.round(value) === 0) return 'level';
  return value > 0 ? 'right' : 'left';
}

export function bankText(bank: number): string {
  const side = sideOf(bank);
  return side === 'level' ? 'wings level' : `${Math.abs(Math.round(bank))} degrees ${side} bank`;
}

export function rudderText(rudder: number): string {
  const pct = Math.round(Math.abs(rudder) * 100);
  return pct === 0 ? 'rudder neutral' : `${pct} percent ${rudder > 0 ? 'right' : 'left'} rudder`;
}

export function rateText(rate: number): string {
  const r = Math.abs(rate);
  if (r < 0.05) return 'not turning';
  const standard = Math.abs(r - STANDARD_RATE) <= 0.3 ? ' (standard rate)' : '';
  return `turning ${rate > 0 ? 'right' : 'left'} at ${r.toFixed(1)} degrees per second${standard}`;
}

/** Screen-reader summary of the whole state. */
export function describe(state: TurnState): string {
  return `${state.advice}. ${bankText(state.bank)}, ${rudderText(state.rudder)}, ${rateText(state.rate)}.`;
}

export function standardRate(tas: number): { exact: number; ruleOfThumb: number } {
  return { exact: standardRateBank(tas), ruleOfThumb: standardRateBankRuleOfThumb(tas) };
}

export interface TurnQuestion extends WidgetQuestion {
  check: (state: TurnState) => boolean;
}

export function quizQuestions(tas: number): TurnQuestion[] {
  const { exact, ruleOfThumb } = standardRate(tas);
  return [
    {
      id: 'w6-coordinated-right',
      prompt: 'Set up a coordinated turn to the right with about 20° of bank.',
      explanation:
        'Bank with the ailerons and add enough right rudder to keep the ball centered: aileron and rudder together.',
      check: (s) => s.bank >= 17 && s.bank <= 23 && s.coordination === 'coordinated',
    },
    {
      id: 'w6-slip-left',
      prompt: 'Show a slip in a left turn.',
      explanation:
        'Too little left rudder for the bank: the ball falls to the inside (left) of the turn. Step on the ball — add left rudder — to fix it.',
      check: (s) => s.bank <= -5 && s.coordination === 'slip',
    },
    {
      id: 'w6-standard-rate-left',
      prompt: 'Fly a coordinated standard-rate turn to the left (the airplane on the L mark).',
      explanation: `Standard rate is 3° per second. At ${tas} KTAS it needs about ${Math.round(exact)}° of bank; the rule of thumb TAS ÷ 10 + 7 gives ${Math.round(ruleOfThumb)}°.`,
      check: (s) => s.coordination === 'coordinated' && s.rate <= -2.7 && s.rate >= -3.3,
    },
  ];
}
