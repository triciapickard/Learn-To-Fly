import type { Aircraft, VSpeed } from '@shared/schemas/content.js';

export function formatVSpeed(v: VSpeed): string {
  return v.kias !== undefined ? `${v.kias} KIAS` : `${v.min}–${v.max} KIAS`;
}

/** Resolves an aviation token such as `vspeed.vy` → "74 KIAS" (Section 28.4). */
export function resolveToken(aircraft: Aircraft, namespace: string, key: string): string | null {
  if (namespace === 'vspeed') {
    const v = aircraft.vspeeds[key];
    return v ? formatVSpeed(v) : null;
  }
  if (namespace === 'aircraft') return aircraft.specs[key]?.value ?? null;
  return null;
}

export const TOKEN_PATTERN = /\{\{\s*([a-zA-Z]+)\.([a-zA-Z0-9]+)\s*\}\}/g;
export const INTERNAL_LINK_PATTERN = /\[\[([a-z0-9-]+)\]\]/g;
