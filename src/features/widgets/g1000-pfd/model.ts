import { rateOfTurn } from '@shared/aviation/turns';
import type { WidgetQuestion } from '../shared/QuizPanel';

/**
 * W2 G1000 PFD explorer (Section 16.4). An original, simplified drawing of a G1000 NXi
 * PFD in its bezel. Everything is laid out in one 720 × 500 viewBox: the screen sits at
 * SCREEN.x/y and the bezel knobs and keys around it.
 */

export const VIEW = { width: 720, height: 500 };
export const SCREEN = { x: 70, y: 18, width: 580, height: 440 };

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** A rectangle in screen coordinates, converted to viewBox coordinates. */
const onScreen = (x: number, y: number, width: number, height: number): Rect => ({
  x: SCREEN.x + x,
  y: SCREEN.y + y,
  width,
  height,
});

export type RegionId =
  | 'nav-box'
  | 'nav-status'
  | 'com-box'
  | 'attitude'
  | 'slip-skid'
  | 'airspeed'
  | 'altitude'
  | 'baro'
  | 'vsi'
  | 'hsi'
  | 'turn-rate'
  | 'wind'
  | 'xpdr'
  | 'softkeys'
  | 'hdg-knob'
  | 'crs-baro-knob'
  | 'direct-to'
  | 'fpl'
  | 'fms'
  | 'ent'
  | 'clr'
  | 'cdi'
  | 'nrst';

export interface Region {
  id: RegionId;
  name: string;
  shows: string;
  classic: string;
  tip: string;
  rect: Rect;
}

/** Softkey slots along the bottom of the screen (G1000 NXi PFD top level). */
export const SOFTKEYS = [
  '',
  'Map/HSI',
  'PFD Opt',
  'OBS',
  'CDI',
  'ADF/DME',
  'XPDR',
  'Ident',
  'Tmr/Ref',
  'Nrst',
  '',
  'Alerts',
];
const SOFTKEY_WIDTH = SCREEN.width / SOFTKEYS.length;
export const SOFTKEY_BUTTON = { y: 466, height: 22, inset: 6 };

export function softkeyRect(index: number): Rect {
  return {
    x: SCREEN.x + index * SOFTKEY_WIDTH + 2,
    y: SCREEN.y + 420,
    width: SOFTKEY_WIDTH - 4,
    height: SOFTKEY_BUTTON.y + SOFTKEY_BUTTON.height + 3 - (SCREEN.y + 420),
  };
}
export const softkeyCenter = (index: number) => SCREEN.x + (index + 0.5) * SOFTKEY_WIDTH;

/** Bezel knobs and keys, in viewBox coordinates. */
export const BEZEL = {
  left: [
    { id: 'nav-vol', label: 'NAV VOL', y: 50, r: 12 },
    { id: 'nav', label: 'NAV', y: 116, r: 20 },
    { id: 'hdg', label: 'HDG', y: 196, r: 20 },
    { id: 'alt', label: 'ALT', y: 420, r: 20 },
  ],
  right: [
    { id: 'com-vol', label: 'COM VOL', y: 50, r: 12 },
    { id: 'com', label: 'COM', y: 116, r: 20 },
    { id: 'crs-baro', label: 'CRS/BARO', y: 196, r: 20 },
    { id: 'range', label: 'RANGE', y: 262, r: 14 },
    { id: 'fms', label: 'FMS', y: 420, r: 24 },
  ],
  keys: [
    { id: 'direct-to', label: 'D→', x: 657, y: 300 },
    { id: 'menu', label: 'MENU', x: 689, y: 300 },
    { id: 'fpl', label: 'FPL', x: 657, y: 328 },
    { id: 'proc', label: 'PROC', x: 689, y: 328 },
    { id: 'clr', label: 'CLR', x: 657, y: 356 },
    { id: 'ent', label: 'ENT', x: 689, y: 356 },
  ],
  keySize: { width: 28, height: 22 },
  leftX: 35,
  rightX: 685,
};

const keyRect = (id: string): Rect => {
  const key = BEZEL.keys.find((k) => k.id === id)!;
  return { x: key.x - 2, y: key.y - 2, width: 32, height: 26 };
};
const knobRect = (side: 'left' | 'right', id: string): Rect => {
  const knob = BEZEL[side].find((k) => k.id === id)!;
  const cx = side === 'left' ? BEZEL.leftX : BEZEL.rightX;
  return { x: cx - 30, y: knob.y - knob.r - 6, width: 60, height: knob.r * 2 + 26 };
};

/** Parts of the display, in tour order (the L1.2 outline). */
export const PFD_REGIONS: Region[] = [
  {
    id: 'attitude',
    name: 'Attitude indicator',
    shows:
      'Pitch and bank. The yellow symbol is your airplane; blue is sky and brown is ground. The ladder marks pitch in degrees and the arc at the top marks bank.',
    classic: 'Attitude indicator (artificial horizon).',
    tip: 'This is the center of your scan. Set the attitude here first, then check the other instruments.',
    rect: onScreen(130, 44, 316, 186),
  },
  {
    id: 'airspeed',
    name: 'Airspeed tape',
    shows:
      'Indicated airspeed in knots, with colored bands: white for the flap range, green for normal operations, yellow for caution (smooth air only) and red at the never-exceed speed. True airspeed (TAS) is below the tape.',
    classic: 'Airspeed indicator.',
    tip: 'The bands match the arcs on the classic airspeed indicator.',
    rect: onScreen(12, 58, 104, 244),
  },
  {
    id: 'altitude',
    name: 'Altitude tape',
    shows:
      'Altitude in feet above sea level. The cyan number above the tape is the selected altitude, a reminder you set with the ALT knob.',
    classic: 'Altimeter.',
    tip: 'The altitude is only correct if the altimeter setting below the tape is right.',
    rect: onScreen(444, 40, 104, 242),
  },
  {
    id: 'baro',
    name: 'Altimeter setting (BARO)',
    shows:
      'The altimeter setting in inches of mercury, in the box below the altitude tape. Set it with the BARO knob (the small inner CRS/BARO knob).',
    classic: 'The Kollsman window on the altimeter.',
    tip: 'Set it from the airport weather (ATIS or AWOS) before takeoff, and update it when a controller gives you a new one.',
    rect: onScreen(444, 282, 104, 22),
  },
  {
    id: 'vsi',
    name: 'Vertical speed indicator',
    shows:
      'How fast you are climbing or descending, in feet per minute. The marks are at 1,000 and 2,000 fpm up and down.',
    classic: 'Vertical speed indicator (VSI).',
    tip: 'Vertical speed lags behind attitude changes. Change the attitude, then wait for the VSI to settle.',
    rect: onScreen(548, 66, 32, 208),
  },
  {
    id: 'hsi',
    name: 'Horizontal situation indicator (HSI)',
    shows:
      'Heading on a rotating compass card, the heading bug (cyan) and the course needle. The boxes beside it show the selected heading (HDG) and course (CRS).',
    classic: 'Heading indicator, combined with the VOR course deviation indicator.',
    tip: 'Magenta needle means GPS, green means VOR or localizer. The CDI softkey switches between them.',
    rect: onScreen(146, 256, 294, 150),
  },
  {
    id: 'turn-rate',
    name: 'Turn rate indicator',
    shows:
      'A magenta trend line on the arc at the top of the HSI shows where your heading will be in 6 seconds. The outer marks are standard rate: 3° per second.',
    classic: "The turn coordinator's miniature airplane.",
    tip: 'Hold the trend line on a standard-rate mark and a full circle takes 2 minutes.',
    rect: onScreen(226, 222, 128, 38),
  },
  {
    id: 'slip-skid',
    name: 'Slip/skid indicator',
    shows:
      'The small bar under the roll pointer. It slides sideways when the airplane slips or skids.',
    classic: "The turn coordinator's ball (inclinometer).",
    tip: 'Step on the bar: press the rudder on the side it has slid toward, just like stepping on the ball.',
    rect: onScreen(268, 46, 44, 32),
  },
  {
    id: 'nav-box',
    name: 'NAV frequencies',
    shows:
      'The NAV1 and NAV2 radios, each with an active and a standby frequency. The cyan box marks the frequency the NAV knob tunes.',
    classic: 'The NAV side of the NAV/COM radios in the radio stack.',
    tip: 'Tune the standby frequency, then press the swap (↔) key to make it active.',
    rect: onScreen(0, 0, 150, 40),
  },
  {
    id: 'nav-status',
    name: 'Navigation status bar',
    shows:
      'The active leg or Direct-To waypoint, the distance to it (DIS) and the desired track (DTK).',
    classic: 'None: this comes from the GPS.',
    tip: 'Check it after every Direct-To or flight plan change to confirm where the GPS is taking you.',
    rect: onScreen(150, 0, 280, 40),
  },
  {
    id: 'com-box',
    name: 'COM frequencies',
    shows:
      'The COM1 and COM2 radios you talk and listen on, each with an active and a standby frequency.',
    classic: 'The COM side of the NAV/COM radios in the radio stack.',
    tip: 'The active frequency you transmit on is shown in green.',
    rect: onScreen(430, 0, 150, 40),
  },
  {
    id: 'wind',
    name: 'Wind box',
    shows:
      "The wind's direction and speed, with an arrow showing which way it blows compared with your heading.",
    classic: 'None: the G1000 calculates it from GPS and air data.',
    tip: 'Turn it on under PFD Opt → Wind. It shows NO WIND DATA until the airplane is moving fast enough to work the wind out.',
    rect: onScreen(12, 328, 96, 48),
  },
  {
    id: 'xpdr',
    name: 'Transponder',
    shows:
      'The transponder code and mode (ALT reports your altitude to ATC), next to the local time.',
    classic: 'A separate transponder box in the radio stack.',
    tip: 'In the US, VFR flights not talking to ATC squawk 1200.',
    rect: onScreen(370, 402, 210, 18),
  },
  {
    id: 'softkeys',
    name: 'Softkeys',
    shows:
      'Twelve keys under the screen. Their labels are on the screen just above them, and they change with the page you are on.',
    classic: 'None: a classic panel has a separate switch or knob for each job.',
    tip: 'If you get lost in a softkey menu, press the Back softkey until the top-level labels return.',
    rect: { x: SCREEN.x, y: SCREEN.y + 420, width: SCREEN.width, height: 52 },
  },
  {
    id: 'hdg-knob',
    name: 'HDG knob',
    shows:
      'Moves the cyan heading bug on the HSI. Press it to sync the bug to your current heading.',
    classic: 'The heading bug knob on the heading indicator.',
    tip: 'Set the bug to the heading you want, even when you hand-fly. It is a useful reminder.',
    rect: knobRect('left', 'hdg'),
  },
  {
    id: 'crs-baro-knob',
    name: 'CRS/BARO knob',
    shows:
      'The large outer knob sets the altimeter setting (BARO). The small inner knob sets the course (CRS) on the HSI.',
    classic: 'The Kollsman knob on the altimeter and the OBS knob on the VOR indicator.',
    tip: 'Press the knob to center the course needle on the station you are tuned to.',
    rect: knobRect('right', 'crs-baro'),
  },
];

/** Controls used for GPS navigation (L6.5). */
export const NAV_REGIONS: Region[] = [
  {
    id: 'direct-to',
    name: 'D→ (Direct-To) key',
    shows: 'Opens the Direct-To window, to fly straight from where you are to one waypoint.',
    classic: 'None: a classic panel has no GPS.',
    tip: 'Direct-To is the fastest way to head for an airport in an emergency or a diversion.',
    rect: keyRect('direct-to'),
  },
  {
    id: 'fms',
    name: 'FMS knobs',
    shows:
      'Two knobs in one. The large outer knob moves the cursor between fields; the small inner knob changes the letter or number in the field. Press the knob to show or hide the cursor.',
    classic: 'None.',
    tip: 'Small knob to change, large knob to move.',
    rect: knobRect('right', 'fms'),
  },
  {
    id: 'ent',
    name: 'ENT key',
    shows: 'Accepts what you entered or the highlighted choice.',
    classic: 'None.',
    tip: 'Many entries need ENT twice: once to accept the waypoint and once to activate it.',
    rect: keyRect('ent'),
  },
  {
    id: 'clr',
    name: 'CLR key',
    shows: 'Cancels an entry, closes a window or goes back a step.',
    classic: 'None.',
    tip: 'Holding CLR on the MFD takes you back to the map page.',
    rect: keyRect('clr'),
  },
  {
    id: 'fpl',
    name: 'FPL key',
    shows:
      'Opens the active flight plan. Add, delete and reorder waypoints with the FMS knobs, and activate a leg.',
    classic: 'None.',
    tip: 'Use it for 2 to 4 waypoints; use Direct-To when you only need one.',
    rect: keyRect('fpl'),
  },
  {
    id: 'cdi',
    name: 'CDI softkey',
    shows:
      'Chooses what drives the course needle on the HSI: GPS (magenta), then VOR1 and VOR2 (green).',
    classic: 'Changing which VOR indicator you look at.',
    tip: 'After any Direct-To or flight plan change, check the needle is magenta if you want to follow the GPS.',
    rect: softkeyRect(SOFTKEYS.indexOf('CDI')),
  },
  {
    id: 'nrst',
    name: 'NRST softkey',
    shows:
      'Lists the nearest airports with bearing and distance. Pick one and press D→ to go straight there.',
    classic: 'None.',
    tip: 'In an emergency, NRST then D→ then ENT, ENT gets you a course to the closest runway.',
    rect: softkeyRect(SOFTKEYS.indexOf('Nrst')),
  },
];

export const ALL_REGIONS = [...PFD_REGIONS, ...NAV_REGIONS];
export const regionById = (id: RegionId): Region => ALL_REGIONS.find((r) => r.id === id)!;

/** What the display shows: changed by the Direct-To walkthrough. */
export interface PfdScreen {
  /** Direct-To window: closed, cursor on the identifier, or cursor on ACTIVATE?. */
  window: 'closed' | 'ident' | 'activate';
  ident: string;
  /** A Direct-To route is active. */
  route: boolean;
  cdi: 'GPS' | 'VOR1';
  heading: number;
  bank: number;
}

export const DESTINATION = { ident: 'KTCY', name: 'TRACY MUNI', dtk: 87, distance: 12.4 };
export const VOR_COURSE = 120;
export const FLIGHT = {
  ias: 105,
  tas: 110,
  altitude: 3500,
  selectedAltitude: 4500,
  vs: 300,
  pitch: 3,
  baro: '29.92',
  windFrom: 310,
  windKt: 12,
  headingBug: 87,
};

/** The explore view: climbing, turning right toward KTCY with GPS on the HSI. */
export const EXPLORE_SCREEN: PfdScreen = {
  window: 'closed',
  ident: '',
  route: true,
  cdi: 'GPS',
  heading: 30,
  bank: 10,
};

export interface DirectToStep {
  id: string;
  title: string;
  instruction: string;
  highlight: RegionId | null;
  screen: PfdScreen;
}

const START: PfdScreen = {
  window: 'closed',
  ident: '',
  route: false,
  cdi: 'VOR1',
  heading: 30,
  bank: 0,
};

/** Direct-To walkthrough (L6.5). ⚠ Check each step against the MSFS 2024 G1000 NXi. */
export const DIRECT_TO_STEPS: DirectToStep[] = [
  {
    id: 'start',
    title: 'Starting point',
    instruction: `You are flying heading 030° with the HSI on VOR1 (green needle) and no GPS route. You want to fly straight to Tracy Municipal (${DESTINATION.ident}).`,
    highlight: null,
    screen: START,
  },
  {
    id: 'press-dto',
    title: 'Press D→',
    instruction:
      'Press the D→ (Direct-To) key. The Direct-To window opens with the cursor on the identifier field.',
    highlight: 'direct-to',
    screen: { ...START, window: 'ident' },
  },
  {
    id: 'enter-ident',
    title: 'Enter the identifier',
    instruction: `Turn the small (inner) FMS knob to choose the first letter, then turn the large (outer) FMS knob to move to the next space. Repeat until the field reads ${DESTINATION.ident}.`,
    highlight: 'fms',
    screen: { ...START, window: 'ident', ident: DESTINATION.ident },
  },
  {
    id: 'confirm',
    title: 'Press ENT',
    instruction:
      "Press ENT. The window fills in the airport's name, course and distance, and the cursor moves to the ACTIVATE? prompt.",
    highlight: 'ent',
    screen: { ...START, window: 'activate', ident: DESTINATION.ident },
  },
  {
    id: 'activate',
    title: 'Press ENT again',
    instruction: `Press ENT again to activate. The window closes and the navigation status bar shows D→ ${DESTINATION.ident}, the distance and the desired track (DTK).`,
    highlight: 'ent',
    screen: { ...START, route: true },
  },
  {
    id: 'cdi',
    title: 'Switch the CDI to GPS',
    instruction:
      'The HSI still shows VOR1, so the needle is not following the GPS yet. Press the CDI softkey until the HSI shows GPS: the needle turns magenta. Forgetting this step is a common error.',
    highlight: 'cdi',
    screen: { ...START, route: true, cdi: 'GPS' },
  },
  {
    id: 'fly',
    title: 'Turn to the desired track',
    instruction: `Turn until your heading matches the desired track (DTK ${String(DESTINATION.dtk).padStart(3, '0')}°) and keep the magenta needle centered.`,
    highlight: 'hsi',
    screen: { ...START, route: true, cdi: 'GPS', heading: DESTINATION.dtk },
  },
];

/** Degrees the heading will change in 6 seconds: the length of the turn rate trend line. */
export function turnTrend(bank: number, tas: number): number {
  if (bank === 0) return 0;
  return Math.max(-30, Math.min(30, rateOfTurn(bank, tas) * 6));
}

export const threeDigits = (deg: number) => {
  const d = ((Math.round(deg) % 360) + 360) % 360;
  return String(d === 0 ? 360 : d).padStart(3, '0');
};

export interface PfdQuestion extends WidgetQuestion {
  target: RegionId;
}

/** Quiz mode (Section 16.4): find the part of the display. */
export const QUESTIONS: PfdQuestion[] = [
  {
    id: 'find-vsi',
    prompt: 'Click the vertical speed indicator.',
    target: 'vsi',
    explanation:
      'The vertical speed indicator is the narrow scale just right of the altitude tape.',
  },
  {
    id: 'find-baro',
    prompt: 'Where is the altimeter setting? Click it.',
    target: 'baro',
    explanation: 'The altimeter setting (BARO) is in the box below the altitude tape.',
  },
  {
    id: 'find-slip-skid',
    prompt: "Click the part of the PFD that replaces the turn coordinator's ball.",
    target: 'slip-skid',
    explanation:
      'The slip/skid indicator is the small bar under the roll pointer at the top of the attitude indicator.',
  },
  {
    id: 'find-turn-rate',
    prompt: 'Click the turn rate indicator.',
    target: 'turn-rate',
    explanation:
      'The turn rate indicator is the arc at the top of the HSI. The magenta trend line shows the heading 6 seconds from now.',
  },
  {
    id: 'find-airspeed',
    prompt: 'Click the airspeed tape.',
    target: 'airspeed',
    explanation: 'Airspeed is the tape on the left side of the attitude indicator.',
  },
  {
    id: 'find-xpdr',
    prompt: 'Where would you check your transponder code?',
    target: 'xpdr',
    explanation: 'The transponder code and mode are at the bottom right, above the softkeys.',
  },
];

export function answerText(id: RegionId | null): string {
  return id ? regionById(id).name : 'Nothing selected';
}

/** Text alternative listing every region (rule 4). */
export function regionSummary(region: Region): string {
  return `${region.name}: ${region.shows} Classic equivalent: ${region.classic}`;
}
