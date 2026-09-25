/** Small geometry helpers shared by widget models and SVG primitives. Angles in degrees. */

export const toRad = (deg: number) => (deg * Math.PI) / 180;
export const toDeg = (rad: number) => (rad * 180) / Math.PI;
export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/** Normalises an angle to 0–360. */
export function normalize360(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

/** Normalises an angle to −180…180. */
export function normalize180(deg: number): number {
  const n = normalize360(deg);
  return n > 180 ? n - 360 : n;
}

/** Point on a circle; 0° is straight up and angles grow clockwise (like a dial). */
export function polar(cx: number, cy: number, r: number, deg: number): { x: number; y: number } {
  return { x: cx + r * Math.sin(toRad(deg)), y: cy - r * Math.cos(toRad(deg)) };
}

/** SVG path for a circular arc between two dial angles (clockwise). */
export function arcPath(
  cx: number,
  cy: number,
  r: number,
  fromDeg: number,
  toDeg_: number,
): string {
  const start = polar(cx, cy, r, fromDeg);
  const end = polar(cx, cy, r, toDeg_);
  const large = normalize360(toDeg_ - fromDeg) > 180 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

/** Dial angle (0° up, clockwise) of a point relative to a centre. */
export function angleOf(cx: number, cy: number, x: number, y: number): number {
  return normalize360(toDeg(Math.atan2(x - cx, cy - y)));
}
