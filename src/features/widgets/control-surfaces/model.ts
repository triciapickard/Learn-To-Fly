import type { WidgetQuestion } from '../shared/QuizPanel';

/**
 * W1 model (Section 16.2). Deflection = control input × maximum deflection (linear); the
 * airplane's attitude follows the controls to a clamped angle. Not a flight model.
 */

export interface ControlInputs {
  /** Yoke left/right, −1 (full left) … 1 (full right). */
  roll: number;
  /** Yoke fore/aft, −1 (full forward, push) … 1 (full back, pull). */
  pitch: number;
  /** Rudder pedals, −1 (full left) … 1 (full right). */
  yaw: number;
  flaps: FlapSetting;
  /** Trim wheel, −1 (full nose down) … 1 (full nose up). */
  trim: number;
}

export const FLAP_SETTINGS = [0, 10, 20, 30] as const;
export type FlapSetting = (typeof FLAP_SETTINGS)[number];

export const NEUTRAL: ControlInputs = { roll: 0, pitch: 0, yaw: 0, flaps: 0, trim: 0 };

/** Illustrative maximum deflections in degrees (drawing only; not quoted as data). */
const MAX = {
  aileronUp: 20,
  aileronDown: 15,
  elevatorUp: 28,
  elevatorDown: 23,
  rudder: 17,
  tab: 20,
};
/** Attitude the drawing moves to at full control input. */
const MAX_ATTITUDE = { roll: 30, pitch: 12, yaw: 12 };

/**
 * Surface deflections in degrees. Horizontal surfaces: positive = trailing edge down.
 * Rudder: positive = trailing edge right. Trim tab: relative to the elevator.
 */
export interface Deflections {
  leftAileron: number;
  rightAileron: number;
  elevator: number;
  rudder: number;
  flaps: number;
  trimTab: number;
}

const clamp = (v: number, min = -1, max = 1) => Math.min(max, Math.max(min, v));

export function deflections(inputs: ControlInputs): Deflections {
  const roll = clamp(inputs.roll);
  const pitch = clamp(inputs.pitch);
  const aileron = (up: boolean, amount: number) =>
    up ? -amount * MAX.aileronUp : amount * MAX.aileronDown;
  return {
    // Yoke right: right aileron up, left aileron down.
    rightAileron: roll >= 0 ? aileron(true, roll) : aileron(false, -roll),
    leftAileron: roll >= 0 ? aileron(false, roll) : aileron(true, -roll),
    // Pull: elevator trailing edge up.
    elevator: pitch >= 0 ? -pitch * MAX.elevatorUp : -pitch * MAX.elevatorDown,
    rudder: clamp(inputs.yaw) * MAX.rudder,
    flaps: inputs.flaps,
    // Nose-up trim: tab trailing edge down, which pushes the elevator up.
    trimTab: clamp(inputs.trim) * MAX.tab,
  };
}

export interface Attitude {
  roll: number;
  pitch: number;
  yaw: number;
}

export function attitude(inputs: ControlInputs): Attitude {
  return {
    roll: clamp(inputs.roll) * MAX_ATTITUDE.roll,
    pitch: clamp(inputs.pitch) * MAX_ATTITUDE.pitch,
    yaw: clamp(inputs.yaw) * MAX_ATTITUDE.yaw,
  };
}

export type ControlAxis = 'roll' | 'pitch' | 'yaw';

/** Moves one control by a step (buttons and keyboard), clamped to its range. */
export function step(inputs: ControlInputs, axis: ControlAxis, delta: number): ControlInputs {
  return { ...inputs, [axis]: Math.round(clamp(inputs[axis] + delta) * 100) / 100 };
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const amount = (v: number) =>
  Math.abs(v) >= 0.99 ? 'full ' : Math.abs(v) >= 0.5 ? '' : 'a little ';

/** What moved and which way, for the live region and the visible readout. */
export function describeControl(
  axis: ControlAxis | 'flaps' | 'trim',
  inputs: ControlInputs,
): string {
  switch (axis) {
    case 'roll': {
      const v = inputs.roll;
      if (v === 0) return 'Yoke centered: ailerons neutral, wings level.';
      const side = v > 0 ? 'right' : 'left';
      const other = v > 0 ? 'left' : 'right';
      return `Yoke ${amount(v)}${side}: ${side} aileron up, ${other} aileron down. The airplane rolls ${side}.`;
    }
    case 'pitch': {
      const v = inputs.pitch;
      if (v === 0) return 'Yoke neutral: elevator neutral.';
      return v > 0
        ? `Yoke ${amount(v)}back: elevator up. The tail goes down and the nose pitches up.`
        : `Yoke ${amount(v)}forward: elevator down. The tail goes up and the nose pitches down.`;
    }
    case 'yaw': {
      const v = inputs.yaw;
      if (v === 0) return 'Pedals level: rudder neutral.';
      const side = v > 0 ? 'right' : 'left';
      const pedal = Math.abs(v) >= 0.99 ? `Full ${side} pedal` : `${capitalize(side)} pedal`;
      return `${pedal}: rudder ${side}. The nose yaws ${side}.`;
    }
    case 'flaps':
      return inputs.flaps === 0 ? 'Flaps up.' : `Flaps ${inputs.flaps}°: both flaps down.`;
    case 'trim': {
      const v = inputs.trim;
      if (v === 0) return 'Trim neutral: trim tab in line with the elevator.';
      return v > 0
        ? 'Trim nose up: the trim tab moves down, and the air pushes the elevator up.'
        : 'Trim nose down: the trim tab moves up, and the air pushes the elevator down.';
    }
  }
}

export type SurfaceId = 'ailerons' | 'elevator' | 'rudder' | 'flaps' | 'trim-tab';

export interface SurfaceInfo {
  id: SurfaceId;
  name: string;
  control: string;
  axis: string;
  effect: string;
}

/** From Section 8.8, in our own words. */
export const SURFACES: SurfaceInfo[] = [
  {
    id: 'ailerons',
    name: 'Ailerons',
    control: 'Yoke left and right',
    axis: 'Longitudinal axis (roll)',
    effect:
      'They move in opposite directions: the wing whose aileron goes down makes more lift and rises. This banks the airplane.',
  },
  {
    id: 'elevator',
    name: 'Elevator',
    control: 'Yoke forward and back',
    axis: 'Lateral axis (pitch)',
    effect:
      'Pull back and the elevator rises, pushing the tail down and the nose up. It controls pitch and angle of attack.',
  },
  {
    id: 'rudder',
    name: 'Rudder',
    control: 'Rudder pedals',
    axis: 'Vertical axis (yaw)',
    effect:
      'Yaws the nose left or right and keeps turns coordinated. On the ground the pedals also steer the nose wheel.',
  },
  {
    id: 'flaps',
    name: 'Flaps',
    control: 'Flap switch: 0°, 10°, 20° or 30°',
    axis: 'None',
    effect: 'More lift and more drag at low speed, for steeper approaches and slower landings.',
  },
  {
    id: 'trim-tab',
    name: 'Elevator trim tab',
    control: 'Trim wheel',
    axis: 'Lateral axis (pitch)',
    effect:
      'Relieves control pressure so the airplane holds a pitch attitude without you holding the yoke.',
  },
];

export function surfaceInfo(id: SurfaceId): SurfaceInfo {
  return SURFACES.find((s) => s.id === id)!;
}

export interface ControlQuestion extends WidgetQuestion {
  check: (inputs: ControlInputs, selected: SurfaceId | null) => boolean;
  /** Selecting a surface answers it (rather than moving a control). */
  select?: boolean;
}

export const QUESTIONS: ControlQuestion[] = [
  {
    id: 'w1-roll-right',
    prompt: 'Make the airplane roll right.',
    explanation:
      'Turn the yoke right: the right aileron goes up and the left one down, so the left wing rises and the airplane rolls right.',
    check: (inputs) => inputs.roll >= 0.5,
  },
  {
    id: 'w1-right-pedal',
    prompt: 'Which surface moves when you push the right pedal? Select it.',
    explanation: 'The pedals move the rudder, which yaws the nose around the vertical axis.',
    check: (_inputs, selected) => selected === 'rudder',
    select: true,
  },
  {
    id: 'w1-pitch-down',
    prompt: 'Make the nose pitch down.',
    explanation:
      'Push the yoke forward: the elevator goes down, the tail rises and the nose pitches down.',
    check: (inputs) => inputs.pitch <= -0.5,
  },
  {
    id: 'w1-roll-surface',
    prompt: 'Which surfaces move when you turn the yoke to the left? Select them.',
    explanation: 'The ailerons: the left aileron goes up and the right one goes down.',
    check: (_inputs, selected) => selected === 'ailerons',
    select: true,
  },
  {
    id: 'w1-full-flaps',
    prompt: 'Set full flaps for landing.',
    explanation: 'Full flaps on the Skyhawk is 30°.',
    check: (inputs) => inputs.flaps === 30,
  },
  {
    id: 'w1-trim',
    prompt: 'Which surface relieves the pressure you hold on the yoke? Select it.',
    explanation:
      'The elevator trim tab: set it with the trim wheel so the airplane holds its pitch attitude hands off.',
    check: (_inputs, selected) => selected === 'trim-tab',
    select: true,
  },
];

export function answerText(
  question: ControlQuestion,
  inputs: ControlInputs,
  selected: SurfaceId | null,
) {
  if (question.select) return selected ? surfaceInfo(selected).name : 'nothing selected';
  return `roll ${inputs.roll}, pitch ${inputs.pitch}, yaw ${inputs.yaw}, flaps ${inputs.flaps}`;
}
