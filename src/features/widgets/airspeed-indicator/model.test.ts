import { describe, expect, it } from 'vitest';
import type { VSpeed } from '@shared/schemas/content';
import {
  angleToAirspeed,
  bandFor,
  describe as describeIas,
  isCorrect,
  markedSpeeds,
  nearestVSpeed,
  quizQuestions,
  shortName,
} from './model';

const arcs = { white: [40, 85], green: [48, 129], yellow: [129, 163], redline: 163 } as {
  white: [number, number];
  green: [number, number];
  yellow: [number, number];
  redline: number;
};
const vspeeds: Record<string, VSpeed> = {
  vso: { label: 'V_SO', meaning: 'Stall speed with full flaps', kias: 40 },
  vs1: { label: 'V_S1', meaning: 'Stall speed clean', kias: 48 },
  vr: { label: 'V_R', meaning: 'Rotation speed', kias: 55 },
  vx: { label: 'V_X', meaning: 'Best angle of climb', kias: 62 },
  vg: { label: 'V_G', meaning: 'Best glide', kias: 68 },
  vy: { label: 'V_Y', meaning: 'Best rate of climb', kias: 74 },
  vfe: { label: 'V_FE (10°–30°)', meaning: 'Maximum speed with more than 10° flaps', kias: 85 },
  vno: { label: 'V_NO', meaning: 'Maximum structural cruising speed', kias: 129 },
  vne: { label: 'V_NE', meaning: 'Never exceed speed', kias: 163 },
  approachFlaps30: { label: 'Approach', meaning: 'Range', min: 60, max: 70 },
};
const speeds = markedSpeeds(vspeeds);

describe('bandFor', () => {
  it.each([
    [30, 'below'],
    [40, 'white'],
    [47, 'white'],
    [48, 'white-green'],
    [85, 'white-green'],
    [86, 'green'],
    [128, 'green'],
    [129, 'yellow'],
    [162, 'yellow'],
    [163, 'redline'],
    [180, 'redline'],
  ])('%i KIAS → %s', (ias, id) => {
    expect(bandFor(ias, arcs).id).toBe(id);
  });
});

describe('V-speed naming', () => {
  it('shortens labels', () => {
    expect(shortName('V_Y')).toBe('Vy');
    expect(shortName('V_FE (10°–30°)')).toBe('Vfe (10°–30°)');
    expect(shortName('Cruise climb')).toBe('Cruise climb');
  });

  it('lists only single-value speeds in order', () => {
    expect(speeds.map((s) => s.key)).toEqual([
      'vso',
      'vs1',
      'vr',
      'vx',
      'vg',
      'vy',
      'vfe',
      'vno',
      'vne',
    ]);
  });

  it('finds the marked speed at an airspeed', () => {
    expect(nearestVSpeed(74, speeds)?.name).toBe('Vy');
    expect(nearestVSpeed(73, speeds)).toBeNull();
    expect(nearestVSpeed(73, speeds, 1)?.name).toBe('Vy');
  });
});

describe('describe', () => {
  it('builds the readout and the spoken text', () => {
    expect(describeIas(74, arcs, speeds)).toEqual({
      readout: '74 KIAS — green arc — Vy, best rate of climb',
      speech: '74 knots, green arc, Vy, best rate of climb',
    });
    expect(describeIas(100, arcs, speeds).readout).toBe('100 KIAS — green arc');
  });
});

describe('dial mapping', () => {
  it('maps dial angles to airspeed and clamps', () => {
    expect(angleToAirspeed(-160)).toBe(20);
    expect(angleToAirspeed(0)).toBe(100);
    expect(angleToAirspeed(160)).toBe(180);
    expect(angleToAirspeed(175)).toBe(180);
    expect(angleToAirspeed(190)).toBe(20); // −170°, past the start
  });
});

describe('quiz', () => {
  it('builds questions from the data and checks answers within ±2 kt', () => {
    const questions = quizQuestions(vspeeds);
    expect(questions.map((q) => q.target)).toEqual([68, 85, 74, 48, 163]);
    expect(isCorrect(70, questions[0]!)).toBe(true);
    expect(isCorrect(71, questions[0]!)).toBe(false);
  });
});
