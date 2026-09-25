/**
 * VOR geometry for W9 (plan Section 16.10). Positions are in nautical miles on a flat map
 * with x east and y north, centred on the station; map north is magnetic north.
 */
import { normalize180, normalize360 } from './wind.js';

const deg = (r: number) => (r * 180) / Math.PI;
const rad = (d: number) => (d * Math.PI) / 180;

/** Full-scale CDI deflection: 10° either side of the course (5 dots of 2°). */
export const FULL_SCALE_DEG = 10;
/** Directly over the station the signal is ambiguous (the cone of confusion). */
export const CONE_NM = 0.3;

export interface Point {
  x: number;
  y: number;
}

/** The radial the aircraft is on: the bearing from the station to the aircraft. */
export function radialOf(aircraft: Point, station: Point = { x: 0, y: 0 }): number {
  const dx = aircraft.x - station.x;
  const dy = aircraft.y - station.y;
  return normalize360(deg(Math.atan2(dx, dy)));
}

export function distanceNm(aircraft: Point, station: Point = { x: 0, y: 0 }): number {
  return Math.hypot(aircraft.x - station.x, aircraft.y - station.y);
}

export type VorFlag = 'TO' | 'FROM' | 'OFF';

export interface CdiReading {
  flag: VorFlag;
  /** Degrees off the selected course, before clamping: positive = course is to the right. */
  offsetDeg: number;
  /** Needle deflection from −1 (full left) to +1 (full right). */
  needle: number;
}

/**
 * CDI deflection and TO/FROM flag for a radial and an OBS setting. The indication depends
 * only on position, not heading: that is why flying a heading opposite the course gives
 * reverse sensing.
 */
export function cdi(radial: number, obs: number, distance = Infinity): CdiReading {
  if (distance < CONE_NM) return { flag: 'OFF', offsetDeg: 0, needle: 0 };
  const diff = normalize180(radial - obs);
  const from = Math.abs(diff) < 90;
  // FROM: on a radial clockwise of the course, the course lies to the left.
  // TO: measured against the reciprocal, the sense flips.
  const offsetDeg = from ? -diff : normalize180(radial - obs - 180);
  const needle = Math.max(-1, Math.min(1, offsetDeg / FULL_SCALE_DEG));
  return { flag: from ? 'FROM' : 'TO', offsetDeg, needle };
}

/** True when flying this heading makes the CDI sense backwards (heading opposes the course). */
export function isReverseSensing(heading: number, obs: number): boolean {
  return Math.abs(normalize180(heading - obs)) > 90;
}

/** OBS settings that centre the needle here: [with a FROM flag, with a TO flag]. */
export function centeringObs(radial: number): { from: number; to: number } {
  return { from: normalize360(radial), to: normalize360(radial + 180) };
}

/** Moves a point along a track for a distance (nm). */
export function move(p: Point, trackDeg: number, nm: number): Point {
  return { x: p.x + nm * Math.sin(rad(trackDeg)), y: p.y + nm * Math.cos(rad(trackDeg)) };
}

/**
 * Ground track and groundspeed for a heading, true airspeed and wind (from, knots): the
 * air vector plus the wind vector.
 */
export function drift(
  heading: number,
  tas: number,
  windFrom: number,
  windKt: number,
): { track: number; gs: number } {
  const ax = tas * Math.sin(rad(heading));
  const ay = tas * Math.cos(rad(heading));
  const toward = rad(windFrom + 180);
  const gx = ax + windKt * Math.sin(toward);
  const gy = ay + windKt * Math.cos(toward);
  return { track: normalize360(deg(Math.atan2(gx, gy))), gs: Math.hypot(gx, gy) };
}
