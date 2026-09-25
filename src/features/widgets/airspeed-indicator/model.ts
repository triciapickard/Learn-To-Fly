import type { Aircraft, VSpeed } from '@shared/schemas/content';

/** Pure model for W3 Airspeed Indicator (Section 16.3). Values in KIAS. */

export type Arcs = Aircraft['arcs'];

export interface Band {
  id: 'below' | 'white' | 'white-green' | 'green' | 'yellow' | 'redline';
  label: string;
  meaning: string;
}

/** Which colour band an airspeed falls in, and what that allows (Section 8.3). */
export function bandFor(ias: number, arcs: Arcs): Band {
  const [whiteLow, whiteHigh] = arcs.white;
  const [greenLow] = arcs.green;
  const [yellowLow] = arcs.yellow;
  if (ias < whiteLow) {
    return {
      id: 'below',
      label: 'below the arcs',
      meaning: 'Slower than the full-flap stall speed.',
    };
  }
  if (ias >= arcs.redline) {
    return {
      id: 'redline',
      label: 'at or above the red line',
      meaning: 'Never exceed this speed.',
    };
  }
  if (ias >= yellowLow) {
    return {
      id: 'yellow',
      label: 'yellow arc',
      meaning: 'Caution range: smooth air only, gentle control inputs.',
    };
  }
  if (ias < greenLow) {
    return {
      id: 'white',
      label: 'white arc',
      meaning: 'Flap operating range, below the clean stall speed: you need flaps to keep flying.',
    };
  }
  if (ias <= whiteHigh) {
    return {
      id: 'white-green',
      label: 'green arc',
      meaning: 'Normal operating range, inside the white arc: every flap setting is allowed.',
    };
  }
  return {
    id: 'green',
    label: 'green arc',
    meaning: 'Normal operating range. No more than 10° of flaps.',
  };
}

/** "V_Y" → "Vy" for display and speech. */
export function shortName(label: string): string {
  return label.replace(
    /^V_([A-Z0-9]+)(.*)$/,
    (_m, sub: string, rest: string) => `V${sub.toLowerCase()}${rest}`,
  );
}

export interface NamedSpeed {
  key: string;
  name: string;
  meaning: string;
  kias: number;
}

/** The speeds labelled on the widget, in order. */
export function markedSpeeds(vspeeds: Record<string, VSpeed>): NamedSpeed[] {
  const keys = ['vso', 'vs1', 'vr', 'vx', 'vg', 'vy', 'vfe', 'vfe10', 'va', 'vno', 'vne'];
  return keys.flatMap((key) => {
    const v = vspeeds[key];
    return v?.kias !== undefined
      ? [{ key, name: shortName(v.label), meaning: v.meaning, kias: v.kias }]
      : [];
  });
}

/** The marked V-speed exactly at (or within `tolerance` of) an airspeed, if any. */
export function nearestVSpeed(ias: number, speeds: NamedSpeed[], tolerance = 0): NamedSpeed | null {
  let best: NamedSpeed | null = null;
  for (const s of speeds) {
    const d = Math.abs(s.kias - ias);
    if (d <= tolerance && (!best || d < Math.abs(best.kias - ias))) best = s;
  }
  return best;
}

/** Readout and screen-reader text, e.g. "74 KIAS — green arc — Vy, best rate of climb". */
export function describe(
  ias: number,
  arcs: Arcs,
  speeds: NamedSpeed[],
): { readout: string; speech: string } {
  const band = bandFor(ias, arcs);
  const v = nearestVSpeed(ias, speeds);
  const vText = v ? `${v.name}, ${v.meaning.charAt(0).toLowerCase()}${v.meaning.slice(1)}` : '';
  return {
    readout: [`${ias} KIAS`, band.label, vText].filter(Boolean).join(' — '),
    speech: [`${ias} knots`, band.label, vText].filter(Boolean).join(', '),
  };
}

export const DIAL = { min: 20, max: 180, startAngle: -160, endAngle: 160 } as const;

/** Dial angle → airspeed, clamped to the scale. */
export function angleToAirspeed(angle: number): number {
  const a = angle > 180 ? angle - 360 : angle;
  const clamped = Math.min(DIAL.endAngle, Math.max(DIAL.startAngle, a));
  const t = (clamped - DIAL.startAngle) / (DIAL.endAngle - DIAL.startAngle);
  return Math.round(DIAL.min + t * (DIAL.max - DIAL.min));
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  target: number;
  explanation: string;
}

export const QUIZ_TOLERANCE_KT = 2;

/** Quiz-mode questions built from the aircraft data, so numbers never drift. */
export function quizQuestions(vspeeds: Record<string, VSpeed>): QuizQuestion[] {
  const q = (
    id: string,
    key: string,
    prompt: string,
    explain: (kias: number) => string,
  ): QuizQuestion[] => {
    const kias = vspeeds[key]?.kias;
    return kias === undefined ? [] : [{ id, prompt, target: kias, explanation: explain(kias) }];
  };
  return [
    ...q(
      'w3-best-glide',
      'vg',
      'Set the airspeed to best glide speed.',
      (k) => `Best glide (Vg) is ${k} KIAS with the flaps up.`,
    ),
    ...q(
      'w3-vfe',
      'vfe',
      'Set the maximum speed with 30° of flaps.',
      (k) => `The top of the white arc, Vfe, is ${k} KIAS.`,
    ),
    ...q(
      'w3-vy',
      'vy',
      'Set the best rate of climb speed.',
      (k) => `Vy, best rate of climb, is ${k} KIAS.`,
    ),
    ...q(
      'w3-vs1',
      'vs1',
      'Set the stall speed with the flaps up (bottom of the green arc).',
      (k) => `Vs1 is ${k} KIAS, the bottom of the green arc.`,
    ),
    ...q('w3-vne', 'vne', 'Set the never-exceed speed.', (k) => `Vne, the red line, is ${k} KIAS.`),
  ];
}

export function isCorrect(ias: number, question: QuizQuestion): boolean {
  return Math.abs(ias - question.target) <= QUIZ_TOLERANCE_KT;
}
