import { describe, expect, it } from 'vitest';
import {
  applyAttitude,
  axes,
  buildAirframe,
  project,
  toCamera,
  toScreen,
  type Vec3,
} from './airframe';
import {
  answerText,
  attitude,
  deflections,
  describeControl,
  NEUTRAL,
  QUESTIONS,
  step,
  surfaceInfo,
} from './model';

describe('W1 control model', () => {
  it('deflects the ailerons in opposite directions', () => {
    const right = deflections({ ...NEUTRAL, roll: 1 });
    expect(right.rightAileron).toBe(-20); // trailing edge up
    expect(right.leftAileron).toBe(15); // trailing edge down
    const left = deflections({ ...NEUTRAL, roll: -0.5 });
    expect(left.leftAileron).toBe(-10);
    expect(left.rightAileron).toBe(7.5);
  });

  it('raises the elevator when the yoke is pulled, and moves the rudder with the pedals', () => {
    expect(deflections({ ...NEUTRAL, pitch: 1 }).elevator).toBe(-28);
    expect(deflections({ ...NEUTRAL, pitch: -1 }).elevator).toBe(23);
    expect(deflections({ ...NEUTRAL, yaw: 1 }).rudder).toBe(17);
    expect(deflections({ ...NEUTRAL, flaps: 20 }).flaps).toBe(20);
    expect(deflections({ ...NEUTRAL, trim: 1 }).trimTab).toBe(20);
  });

  it('maps inputs to a clamped attitude', () => {
    expect(attitude({ ...NEUTRAL, roll: 1, pitch: -1, yaw: 0.5 })).toEqual({
      roll: 30,
      pitch: -12,
      yaw: 6,
    });
    expect(attitude({ ...NEUTRAL, roll: 3 }).roll).toBe(30);
  });

  it('steps and clamps controls', () => {
    const once = step(NEUTRAL, 'roll', 0.5);
    expect(once.roll).toBe(0.5);
    expect(step(step(once, 'roll', 0.5), 'roll', 0.5).roll).toBe(1);
    expect(step(NEUTRAL, 'pitch', -0.25).pitch).toBe(-0.25);
  });

  it('describes which surface moved and which way', () => {
    expect(describeControl('roll', { ...NEUTRAL, roll: 1 })).toBe(
      'Yoke full right: right aileron up, left aileron down. The airplane rolls right.',
    );
    expect(describeControl('pitch', { ...NEUTRAL, pitch: 0.5 })).toBe(
      'Yoke back: elevator up. The tail goes down and the nose pitches up.',
    );
    expect(describeControl('pitch', { ...NEUTRAL, pitch: -0.25 })).toMatch(
      /^Yoke a little forward: elevator down/,
    );
    expect(describeControl('yaw', { ...NEUTRAL, yaw: -0.5 })).toBe(
      'Left pedal: rudder left. The nose yaws left.',
    );
    expect(describeControl('yaw', { ...NEUTRAL, yaw: 1 })).toMatch(/^Full right pedal/);
    expect(describeControl('flaps', { ...NEUTRAL, flaps: 10 })).toBe('Flaps 10°: both flaps down.');
    expect(describeControl('trim', { ...NEUTRAL, trim: 0.5 })).toMatch(/trim tab moves down/);
    expect(describeControl('roll', NEUTRAL)).toMatch(/^Yoke centered/);
  });

  it('checks quiz answers', () => {
    const byId = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
    expect(byId['w1-roll-right']!.check({ ...NEUTRAL, roll: 0.5 }, null)).toBe(true);
    expect(byId['w1-roll-right']!.check({ ...NEUTRAL, roll: -0.5 }, null)).toBe(false);
    expect(byId['w1-right-pedal']!.check(NEUTRAL, 'rudder')).toBe(true);
    expect(byId['w1-right-pedal']!.check(NEUTRAL, 'elevator')).toBe(false);
    expect(byId['w1-pitch-down']!.check({ ...NEUTRAL, pitch: -1 }, null)).toBe(true);
    expect(byId['w1-full-flaps']!.check({ ...NEUTRAL, flaps: 30 }, null)).toBe(true);
    expect(answerText(byId['w1-trim']!, NEUTRAL, 'trim-tab')).toBe('Elevator trim tab');
    expect(answerText(byId['w1-trim']!, NEUTRAL, null)).toBe('nothing selected');
    expect(surfaceInfo('rudder').axis).toBe('Vertical axis (yaw)');
  });
});

describe('W1 airframe geometry', () => {
  const near = (a: Vec3, b: Vec3) => a.forEach((v, i) => expect(v).toBeCloseTo(b[i]!, 6));

  it('rolls right wing down, pitches nose up and yaws nose right', () => {
    // Right wing tip, relative to the CG at (2, 0, 1).
    near(applyAttitude([2, 10, 1], { roll: 90, pitch: 0, yaw: 0 }), [2, 0, -9]);
    near(applyAttitude([12, 0, 1], { roll: 0, pitch: 90, yaw: 0 }), [2, 0, 11]);
    near(applyAttitude([12, 0, 1], { roll: 0, pitch: 0, yaw: 90 }), [2, 10, 1]);
  });

  it('views from behind, left and above', () => {
    // The left wing tip is nearer the camera than the right one, the tail nearer than the nose.
    expect(toCamera([2, -18, 2.6])[2]).toBeLessThan(toCamera([2, 18, 2.6])[2]);
    expect(toCamera([-16, 0, 1])[2]).toBeLessThan(toCamera([12, 0, 1])[2]);
    // Higher points are higher on screen.
    expect(toScreen([0, 0, 5]).y).toBeLessThan(toScreen([0, 0, 0]).y);
  });

  it('moves the surfaces with the controls', () => {
    const neutral = buildAirframe(deflections(NEUTRAL));
    const rolled = buildAirframe(deflections({ ...NEUTRAL, roll: 1 }));
    const trailingZ = (polys: typeof neutral, part: string) =>
      Math.min(...polys.filter((p) => p.part === part).map((p) => p.points[2]![2]));
    expect(trailingZ(rolled, 'aileron-right')).toBeGreaterThan(trailingZ(neutral, 'aileron-right'));
    expect(trailingZ(rolled, 'aileron-left')).toBeLessThan(trailingZ(neutral, 'aileron-left'));
    const yawed = buildAirframe(deflections({ ...NEUTRAL, yaw: 1 }));
    const rudderTeY = yawed.find((p) => p.part === 'rudder')!.points[2]![1];
    expect(rudderTeY).toBeGreaterThan(0);
    for (const part of ['flap-left', 'elevator', 'trim-tab', 'prop', 'windshield']) {
      expect(neutral.some((p) => p.part === part)).toBe(true);
    }
  });

  it('projects and sorts far to near, with shading in range', () => {
    const polys = project(buildAirframe(deflections(NEUTRAL)), { roll: 0, pitch: 0, yaw: 0 });
    for (let i = 1; i < polys.length; i++) {
      expect(polys[i]!.depth).toBeLessThanOrEqual(polys[i - 1]!.depth);
    }
    for (const p of polys) {
      expect(p.light).toBeGreaterThanOrEqual(0.55);
      expect(p.light).toBeLessThanOrEqual(1);
      expect(p.points).toMatch(/^[\d.,\s-]+$/);
    }
  });

  it('draws the three axes through the CG', () => {
    const lines = axes({ roll: 0, pitch: 0, yaw: 0 });
    expect(lines.map((l) => l.id)).toEqual(['roll', 'pitch', 'yaw']);
    const yaw = lines[2]!;
    expect(yaw.to.y).toBeLessThan(yaw.from.y);
  });
});
