import { describe as group, expect, it } from 'vitest';
import {
  bankText,
  coordinatedRudder,
  describe,
  quizQuestions,
  rateText,
  rudderText,
  standardRate,
  turnState,
} from './model';

group('W6 turn coordinator model', () => {
  it('is coordinated when rudder matches bank', () => {
    const s = turnState(30, coordinatedRudder(30), 100);
    expect(s.coordination).toBe('coordinated');
    expect(s.ball).toBeCloseTo(0, 9);
    expect(s.yaw).toBeCloseTo(0, 9);
    expect(s.advice).toBe('Coordinated');
    // 1,091 × tan 30° ÷ 100 ≈ 6.3°/s.
    expect(s.rate).toBeCloseTo(6.3, 1);
    expect(s.tcTilt).toBe(40);
  });

  it('slips with too little rudder: ball inside, "step on the ball"', () => {
    const right = turnState(20, 0, 100);
    expect(right.coordination).toBe('slip');
    expect(right.ball).toBeGreaterThan(0);
    expect(right.yaw).toBeLessThan(0);
    expect(right.advice).toBe('Slipping — add right rudder');

    const left = turnState(-20, 0, 100);
    expect(left.coordination).toBe('slip');
    expect(left.ball).toBeLessThan(0);
    expect(left.advice).toBe('Slipping — add left rudder');
  });

  it('skids with too much rudder: ball outside, nose yawed into the turn', () => {
    const s = turnState(20, 0.9, 100);
    expect(s.coordination).toBe('skid');
    expect(s.ball).toBeLessThan(0);
    expect(s.yaw).toBeGreaterThan(0);
    expect(s.advice).toBe('Skidding — too much right rudder; ease it off');
  });

  it('treats rudder with wings level as a skid, and crossed controls as a slip', () => {
    expect(turnState(0, -0.4, 100)).toMatchObject({
      coordination: 'skid',
      advice: 'Skidding — too much left rudder; ease it off',
    });
    expect(turnState(10, -0.4, 100).coordination).toBe('slip');
  });

  it('clamps inputs and the ball', () => {
    const s = turnState(80, 5, 100);
    expect(s.bank).toBe(45);
    expect(s.rudder).toBe(1);
    expect(s.ball).toBe(-1);
  });

  it('describes the state for screen readers', () => {
    expect(bankText(0.2)).toBe('wings level');
    expect(bankText(-15)).toBe('15 degrees left bank');
    expect(rudderText(0)).toBe('rudder neutral');
    expect(rudderText(0.25)).toBe('25 percent right rudder');
    expect(rateText(0)).toBe('not turning');
    expect(rateText(-3.12)).toBe('turning left at 3.1 degrees per second (standard rate)');
    const s = turnState(20, 0, 100);
    expect(describe(s)).toMatch(/^Slipping — add right rudder\. 20 degrees right bank/);
  });

  it('gives the standard-rate bank', () => {
    const { exact, ruleOfThumb } = standardRate(100);
    expect(exact).toBeCloseTo(15.4, 1);
    expect(ruleOfThumb).toBe(17);
  });

  it('checks quiz answers', () => {
    const [coordinated, slip, standard] = quizQuestions(100);
    expect(coordinated!.check(turnState(20, coordinatedRudder(20), 100))).toBe(true);
    expect(coordinated!.check(turnState(20, 0, 100))).toBe(false);
    expect(slip!.check(turnState(-20, 0, 100))).toBe(true);
    expect(slip!.check(turnState(20, 0, 100))).toBe(false);
    expect(standard!.check(turnState(-15, coordinatedRudder(-15), 100))).toBe(true);
    expect(standard!.check(turnState(-25, coordinatedRudder(-25), 100))).toBe(false);
    expect(standard!.explanation).toContain('about 15° of bank');
  });
});
