import { DIAL } from '@/features/widgets/airspeed-indicator/model';
import { polar } from '@/features/widgets/shared/geometry';
import { valueToDialAngle } from '@/features/widgets/shared/svg';
import type { Point } from './motion';

/**
 * The app shots of the public beta launch video (A1–A6 in the script's shot list). Every time
 * is in seconds of the finished film, so each click lands on a bar line of the score (2/4 at
 * crotchet = 60: bar n starts at (n − 1) × 2 s). Change a time here and the shot follows.
 */

/** An element in the framed page, found by CSS selector and, optionally, its visible text. */
export interface Target {
  selector: string;
  text?: string;
  /** Which match to use when several fit (0 = first). */
  nth?: number;
  /** Where on the element the cursor lands, as a fraction of its box (default: centre). */
  fx?: number;
  fy?: number;
}

export type Action =
  /** Move onto the target and click so the press lands exactly at `at`. */
  | { kind: 'click'; at: number; target: Target }
  /** Move onto the target, arriving at `at`. */
  | { kind: 'hover'; at: number; target: Target }
  /** Scroll the page so the target sits `offset` px below the top, starting at `at`. */
  | { kind: 'scroll'; at: number; target: Target; offset: number; duration: number }
  /**
   * Press on the target at `at` and drag through `points` (worked out from the target's box,
   * in the page's coordinates), pausing briefly on each.
   */
  | { kind: 'drag'; at: number; target: Target; points: (box: DOMRect) => Point[] };

export interface Shot {
  id: string;
  /** Code in the script's shot list. */
  code: string;
  title: string;
  scene: number;
  /** Film time the shot is cut in and out (seconds). */
  start: number;
  end: number;
  /** Route loaded in the browser window. */
  path: string;
  theme: 'light' | 'dark';
  /** Browser zoom, below 1 to fit more of the page in the window (default 1). */
  zoom?: number;
  /** Wait for this before the shot can play. */
  ready: Target;
  /** Scroll here before playing, so the shot opens on the right part of the page. */
  openAt?: { target: Target; offset: number };
  /** Where the cursor rests when the shot opens, as a fraction of the page view. */
  cursor: Point;
  actions: Action[];
}

/** Points around the airspeed dial for the given speeds, in page coordinates. */
function dialPoints(box: DOMRect, speeds: number[]): Point[] {
  const scale = box.width / 260; // the dial's viewBox is 260 × 260, centred on (130, 130)
  return speeds.map((kias) => {
    const angle = valueToDialAngle(kias, DIAL.min, DIAL.max, DIAL.startAngle, DIAL.endAngle);
    const p = polar(130, 130, 82, angle);
    return { x: box.left + p.x * scale, y: box.top + p.y * scale };
  });
}

const L01 = '/learn/m0-getting-started/l0-1-welcome-how-learn-to-fly-works';
const L02 = '/learn/m0-getting-started/l0-2-setting-up-msfs-2024-for-training';
const L11 = '/learn/m1-meet-the-skyhawk/l1-1-the-airframe-and-flight-controls';
const L12 = '/learn/m1-meet-the-skyhawk/l1-2-the-cockpit-g1000-pfd-and-mfd';
const L14 = '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists';

/** L0.2's "Sim vs reality" callout about Auto-Rudder. */
const SIM_CALLOUT = 'main aside[aria-label="Sim vs reality"]';

const step = (n: number): Target => ({
  selector: 'section[aria-labelledby="fly-steps-heading"] li input[type="checkbox"]',
  nth: n - 1,
});

export const SHOTS: Shot[] = [
  {
    id: 'a1',
    code: 'A1',
    title: 'Landing page: start Lesson 0.1',
    scene: 2,
    start: 8,
    end: 14,
    path: '/',
    theme: 'light',
    ready: { selector: `a[href="${L01}"]`, text: 'Start' },
    cursor: { x: 0.56, y: 0.82 },
    actions: [
      { kind: 'hover', at: 10.6, target: { selector: `a[href="${L01}"]`, nth: 0, fx: 0.3 } },
      // The melody enters at 0:12 (bar 7).
      { kind: 'click', at: 12, target: { selector: `a[href="${L01}"]`, text: 'Start' } },
    ],
  },
  {
    id: 'a2',
    code: 'A2',
    title: 'Lesson 0.2 scrolls to the Sim vs reality callout',
    scene: 3,
    start: 14,
    end: 20,
    path: L02,
    theme: 'light',
    ready: { selector: SIM_CALLOUT },
    cursor: { x: 0.8, y: 0.62 },
    actions: [
      { kind: 'scroll', at: 14.2, target: { selector: SIM_CALLOUT }, offset: 260, duration: 1.6 },
      { kind: 'hover', at: 16.6, target: { selector: SIM_CALLOUT, fx: 0.62, fy: 0.55 } },
    ],
  },
  {
    id: 'a3',
    code: 'A3',
    title: 'C0.1 Brief: the goal',
    scene: 4,
    start: 20,
    end: 22,
    path: '/challenges/c0-1-first-flight-over-livermore',
    theme: 'light',
    ready: { selector: '#goal-heading' },
    openAt: { target: { selector: '#goal-heading' }, offset: 180 },
    cursor: { x: 0.7, y: 0.7 },
    actions: [
      {
        kind: 'hover',
        at: 21.4,
        target: { selector: 'section[aria-labelledby="goal-heading"] p', fx: 0.8, fy: 0.9 },
      },
    ],
  },
  {
    id: 'a4a',
    code: 'A4',
    title: 'L1.1 Control surfaces: roll left (dark)',
    scene: 6,
    start: 34,
    end: 38,
    path: L11,
    theme: 'dark',
    // Zoomed out a little so the airplane and the yoke buttons are both in the window.
    zoom: 0.85,
    ready: { selector: 'button', text: 'Roll left' },
    openAt: { target: { selector: '[aria-label^="Airplane seen from behind"]' }, offset: 84 },
    cursor: { x: 0.62, y: 0.86 },
    actions: [
      // On the theme's chords at 0:34 and 0:35 (bar 18).
      { kind: 'click', at: 34, target: { selector: 'button', text: 'Roll left' } },
      { kind: 'click', at: 35, target: { selector: 'button', text: 'Roll left' } },
    ],
  },
  {
    id: 'a4b',
    code: 'A4',
    title: 'L1.2 G1000 PFD: instruments on the high A notes (dark)',
    scene: 6,
    start: 38,
    end: 42,
    path: L12,
    theme: 'dark',
    ready: { selector: 'button', text: 'Attitude indicator' },
    openAt: {
      target: { selector: 'svg[aria-label^="Simplified drawing of a G1000 PFD"]' },
      offset: 84,
    },
    cursor: { x: 0.3, y: 0.86 },
    actions: [
      // Bar 20's high A notes fall on 0:38 and 0:39; the melody returns at 0:40.
      { kind: 'click', at: 38, target: { selector: 'button', text: 'Attitude indicator' } },
      { kind: 'click', at: 39, target: { selector: 'button', text: 'Airspeed tape' } },
      { kind: 'click', at: 40, target: { selector: 'button', text: 'Altitude tape' } },
      {
        kind: 'click',
        at: 41,
        target: { selector: 'button', text: 'Horizontal situation indicator (HSI)' },
      },
    ],
  },
  {
    id: 'a4c',
    code: 'A4',
    title: 'L1.4 Airspeed indicator: sweep the arcs (dark)',
    scene: 6,
    start: 42,
    end: 48,
    path: L14,
    theme: 'dark',
    ready: { selector: 'svg[aria-label^="Round airspeed indicator"]' },
    openAt: { target: { selector: 'svg[aria-label^="Round airspeed indicator"]' }, offset: 260 },
    cursor: { x: 0.62, y: 0.8 },
    actions: [
      {
        kind: 'drag',
        at: 42.6,
        target: { selector: 'svg[aria-label^="Round airspeed indicator"]' },
        // Through the white arc, the green arc and the yellow arc, stopping short of the red line.
        points: (box) => dialPoints(box, [30, 55, 95, 135, 158]),
      },
    ],
  },
  {
    id: 'a5',
    code: 'A5',
    title: 'C1.1 Fly tab: tick the steps',
    scene: 7,
    start: 48,
    end: 56,
    path: '/challenges/c1-1-cockpit-scavenger-hunt?tab=fly',
    theme: 'light',
    ready: step(1),
    openAt: { target: { selector: '#fly-steps-heading' }, offset: 120 },
    cursor: { x: 0.5, y: 0.9 },
    actions: [
      // One tick per beat of the chromatic climb (bars 25–26), then a scroll before bar 27.
      { kind: 'click', at: 48, target: step(1) },
      { kind: 'click', at: 49, target: step(2) },
      { kind: 'click', at: 50, target: step(3) },
      { kind: 'click', at: 51, target: step(4) },
      { kind: 'scroll', at: 51.25, target: step(5), offset: 260, duration: 0.55 },
      { kind: 'click', at: 52, target: step(5) },
      { kind: 'click', at: 53, target: step(6) },
      { kind: 'click', at: 54, target: step(7) },
      { kind: 'click', at: 55, target: step(8) },
    ],
  },
  {
    id: 'a6',
    code: 'A6',
    title: 'Beta banner, then Report a problem',
    scene: 9,
    start: 62,
    end: 68,
    path: L01,
    theme: 'light',
    ready: { selector: '[aria-label="Public beta notice"] a' },
    cursor: { x: 0.55, y: 0.55 },
    actions: [
      { kind: 'hover', at: 63, target: { selector: '[aria-label="Public beta notice"] a' } },
      {
        kind: 'scroll',
        at: 63.7,
        target: { selector: 'footer button', text: 'Report a problem' },
        offset: 640,
        duration: 1.3,
      },
      // Bar 34 starts at 1:06.
      { kind: 'click', at: 66, target: { selector: 'footer button', text: 'Report a problem' } },
    ],
  },
];
