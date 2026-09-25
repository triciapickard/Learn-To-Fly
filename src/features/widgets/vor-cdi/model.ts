import {
  cdi,
  distanceNm,
  isReverseSensing,
  radialOf,
  type CdiReading,
  type Point,
} from '@shared/aviation/vor';
import { normalize360 } from '@shared/aviation/wind';
import type { WidgetQuestion } from '../shared/QuizPanel';

/** Map radius in nautical miles, and how many pixels one mile takes. */
export const MAP_NM = 25;
export const PX_PER_NM = 7;
export const TAS = 100;
/** Simulated seconds per real second in Fly mode. */
export const TIME_SCALE = 30;

export interface VorState {
  aircraft: Point;
  heading: number;
  obs: number;
}

export const EXPLORE_START: VorState = { aircraft: { x: -8, y: 6 }, heading: 90, obs: 90 };
export const QUIZ_START: VorState = {
  aircraft: { x: 12 * Math.sin(Math.PI / 4), y: 12 * Math.cos(Math.PI / 4) },
  heading: 40,
  obs: 0,
};

export const three = (deg: number) => {
  const d = Math.round(normalize360(deg)) % 360;
  return String(d === 0 ? 360 : d).padStart(3, '0');
};

export interface Reading extends CdiReading {
  radial: number;
  distance: number;
  reverse: boolean;
}

export function read(state: VorState): Reading {
  const radial = radialOf(state.aircraft);
  const distance = distanceNm(state.aircraft);
  return {
    ...cdi(radial, state.obs, distance),
    radial,
    distance,
    reverse: isReverseSensing(state.heading, state.obs),
  };
}

/** "centered", "2 dots right", "full scale left". Each dot is 2°. */
export function needleText(r: CdiReading): string {
  if (r.flag === 'OFF') return 'no signal (OFF flag)';
  if (Math.abs(r.offsetDeg) < 1) return 'centered';
  const side = r.offsetDeg > 0 ? 'right' : 'left';
  if (Math.abs(r.needle) >= 1) return `full scale ${side}`;
  const dots = Math.round(Math.abs(r.offsetDeg) / 2);
  return `${dots} dot${dots === 1 ? '' : 's'} ${side}`;
}

export function describe(state: VorState, r: Reading): string {
  const where = `On the ${three(r.radial)} radial, ${r.distance.toFixed(1)} nautical miles from the station, heading ${three(state.heading)}.`;
  const indicator =
    r.flag === 'OFF'
      ? 'Over the station: the flag shows OFF.'
      : `OBS ${three(state.obs)}: ${r.flag} flag, needle ${needleText(r)}.`;
  const reverse =
    r.reverse && r.flag !== 'OFF'
      ? ' Reverse sensing: your heading opposes the course, so the needle works backwards.'
      : '';
  return `${where} ${indicator}${reverse}`;
}

/** Point at a radial and distance from the station. */
export function pointAt(radial: number, distance: number): Point {
  const a = (radial * Math.PI) / 180;
  return { x: distance * Math.sin(a), y: distance * Math.cos(a) };
}

export function clampToMap(p: Point): Point {
  const d = Math.hypot(p.x, p.y);
  if (d <= MAP_NM) return p;
  return { x: (p.x / d) * MAP_NM, y: (p.y / d) * MAP_NM };
}

export interface VorQuestion extends WidgetQuestion {
  check: (state: VorState, r: Reading) => boolean;
}

const centered = (r: Reading) => r.flag !== 'OFF' && Math.abs(r.offsetDeg) <= 2;

export const QUESTIONS: VorQuestion[] = [
  {
    id: 'w9-which-radial',
    prompt: 'Which radial are you on? Turn the OBS until the needle centers with a FROM flag.',
    explanation:
      'With a FROM flag and the needle centered, the OBS shows the radial you are on: the bearing from the station to you.',
    check: (_s, r) => r.flag === 'FROM' && centered(r),
  },
  {
    id: 'w9-center-to',
    prompt: 'Turn the OBS to center the needle with a TO flag.',
    explanation:
      'With a TO flag the OBS shows the course that takes you to the station: the reciprocal of your radial.',
    check: (_s, r) => r.flag === 'TO' && centered(r),
  },
  {
    id: 'w9-intercept-090',
    prompt:
      'You are north of the 090 radial. Set a heading that intercepts it outbound at an angle of 30° to 45°.',
    explanation:
      'Outbound on the 090 radial means a track of 090. From the north side, turn right to 120°–135°: 30° to 45° more than the course.',
    check: (s, r) => r.radial > 0 && r.radial < 90 && inRange(s.heading, 120, 135),
  },
  {
    id: 'w9-no-reverse',
    prompt:
      'Center the needle with an OBS setting that gives normal sensing on your current heading.',
    explanation:
      'Normal sensing needs the OBS within 90° of your heading. Then the needle points toward the course.',
    check: (_s, r) => centered(r) && !r.reverse,
  },
];

function inRange(heading: number, from: number, to: number) {
  const h = normalize360(heading);
  return h >= from && h <= to;
}

export function answerText(state: VorState, r: Reading): string {
  return `OBS ${three(state.obs)}, ${r.flag}, needle ${needleText(r)}, heading ${three(state.heading)}, radial ${three(r.radial)}`;
}
