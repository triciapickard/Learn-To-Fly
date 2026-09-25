/**
 * Wind triangle, magnetic conversion, wind components and time/fuel (plan Appendix
 * G.1–G.4). Directions in degrees true unless noted, speeds in knots. Wind direction is
 * where the wind blows FROM.
 */

const rad = (deg: number) => (deg * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

export function normalize360(d: number): number {
  return ((d % 360) + 360) % 360;
}

export function normalize180(d: number): number {
  const n = normalize360(d);
  return n > 180 ? n - 360 : n;
}

export interface WindSolution {
  /** Wind correction angle: positive = correct to the right. */
  wca: number;
  /** True heading. */
  th: number;
  /** Groundspeed. */
  gs: number;
}

/**
 * Heading and groundspeed to hold a true course (G.1). Returns null when the crosswind is
 * stronger than the airspeed, so no heading can hold the course.
 */
export function windTriangle(tc: number, tas: number, wd: number, ws: number): WindSolution | null {
  if (tas <= 0) return null;
  const windAngle = rad(normalize180(wd - tc));
  const cross = (ws * Math.sin(windAngle)) / tas;
  if (Math.abs(cross) > 1) return null;
  const wca = Math.asin(cross);
  const gs = tas * Math.cos(wca) - ws * Math.cos(windAngle);
  if (gs <= 0) return null;
  return { wca: deg(wca), th: normalize360(tc + deg(wca)), gs };
}

/**
 * True to magnetic (G.2): "east is least, west is best". Variation is positive east and
 * negative west.
 */
export function trueToMagnetic(trueDeg: number, variation: number): number {
  return normalize360(trueDeg - variation);
}

export interface WindComponents {
  /** Positive = from the right. */
  crosswind: number;
  /** Negative = tailwind. */
  headwind: number;
}

/** Crosswind and headwind components for a runway or heading (G.3). */
export function windComponents(heading: number, wd: number, ws: number): WindComponents {
  const angle = rad(normalize180(wd - heading));
  return { crosswind: ws * Math.sin(angle), headwind: ws * Math.cos(angle) };
}

/** Time en route in minutes (G.4). */
export function timeMinutes(distanceNm: number, gs: number): number {
  return gs > 0 ? (distanceNm / gs) * 60 : Infinity;
}

/** Fuel burned in gallons (G.4). */
export function fuelGallons(fuelFlowGph: number, minutes: number): number {
  return (fuelFlowGph * minutes) / 60;
}
