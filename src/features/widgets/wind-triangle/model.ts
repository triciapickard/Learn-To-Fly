import {
  normalize360,
  timeMinutes,
  trueToMagnetic,
  windTriangle,
  type WindSolution,
} from '@shared/aviation/wind';

/** W12 model (Section 16.13): inputs, results and the vector diagram geometry. */

export interface WindInputs {
  tc: number;
  tas: number;
  wd: number;
  ws: number;
  /** Magnetic variation in degrees: positive east, negative west. */
  variation: number;
  distance: number;
}

export type FieldName = keyof WindInputs;

export const LIMITS: Record<FieldName, [number, number]> = {
  tc: [0, 360],
  tas: [40, 250],
  wd: [0, 360],
  ws: [0, 80],
  variation: [-30, 30],
  distance: [0, 999],
};

/** Parses the text fields; returns the numbers and an error message for each bad field. */
export function parseInputs(fields: Record<FieldName, string>): {
  inputs: WindInputs | null;
  errors: Partial<Record<FieldName, string>>;
} {
  const errors: Partial<Record<FieldName, string>> = {};
  const values = {} as WindInputs;
  for (const name of Object.keys(LIMITS) as FieldName[]) {
    const raw = fields[name].trim();
    const value = Number(raw);
    const [min, max] = LIMITS[name];
    if (raw === '' || !Number.isFinite(value)) errors[name] = 'Enter a number.';
    else if (value < min || value > max) errors[name] = `Enter ${min} to ${max}.`;
    else values[name] = value;
  }
  return { inputs: Object.keys(errors).length ? null : values, errors };
}

export interface WindResults extends WindSolution {
  mh: number;
  /** Time en route in minutes. */
  ete: number;
}

export function results(inputs: WindInputs): WindResults | null {
  const solution = windTriangle(inputs.tc, inputs.tas, inputs.wd, inputs.ws);
  if (!solution) return null;
  return {
    ...solution,
    mh: trueToMagnetic(solution.th, inputs.variation),
    ete: timeMinutes(inputs.distance, solution.gs),
  };
}

/** Three-digit heading from 001° to 360° (north is 360, as pilots say it), e.g. 078°. */
export function heading(deg: number): string {
  const d = Math.round(normalize360(deg)) % 360;
  return `${String(d === 0 ? 360 : d).padStart(3, '0')}°`;
}

export function wcaText(wca: number): string {
  const r = Math.round(wca);
  return r === 0 ? '0°' : `${Math.abs(r)}° ${r > 0 ? 'right' : 'left'}`;
}

export function eteText(minutes: number): string {
  if (!Number.isFinite(minutes)) return '—';
  const m = Math.round(minutes);
  return m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`;
}

export function describe(inputs: WindInputs, r: WindResults | null): string {
  const wind = `Wind from ${heading(inputs.wd)} at ${inputs.ws} knots`;
  if (!r) return `${wind}: too strong to hold course ${heading(inputs.tc)} at ${inputs.tas} knots.`;
  return `${wind}. Correct ${wcaText(r.wca)}: true heading ${heading(r.th)}, magnetic heading ${heading(r.mh)}, groundspeed ${Math.round(r.gs)} knots, time en route ${eteText(r.ete)}.`;
}

export type Pt = { x: number; y: number };

/** Point at a bearing (0 = north/up, clockwise) and distance from an origin. */
export function toward(origin: Pt, bearing: number, length: number): Pt {
  const a = (bearing * Math.PI) / 180;
  return { x: origin.x + length * Math.sin(a), y: origin.y - length * Math.cos(a) };
}

/**
 * Diagram geometry: wind vector O→W (where the wind blows to), air vector W→G (true heading,
 * TAS), ground vector O→G (true course, GS). Ground = air + wind.
 */
export function vectors(inputs: WindInputs, r: WindResults | null, origin: Pt, scale: number) {
  const wind = toward(origin, inputs.wd + 180, inputs.ws * scale);
  const ground = r ? toward(origin, inputs.tc, r.gs * scale) : null;
  return { origin, wind, ground };
}

/** Wind from a dragged tip position: the tip shows where the wind blows to. */
export function windFromTip(origin: Pt, tip: Pt, scale: number): { wd: number; ws: number } {
  const dx = tip.x - origin.x;
  const dy = origin.y - tip.y;
  const to = (Math.atan2(dx, dy) * 180) / Math.PI;
  const ws = Math.min(LIMITS.ws[1], Math.round(Math.hypot(dx, dy) / scale));
  const wd = Math.round(normalize360(to + 180));
  return { wd: wd === 0 ? 360 : wd, ws };
}
