import type { CriterionResultValue } from '@shared/scoring';

/**
 * Per-tab drafts in sessionStorage (Section 20.6): the Fly tab's ticks and events, and the
 * debrief form, so a refresh or a detour through log-in loses nothing. Storage can be
 * unavailable (private mode, blocked site data), so every access is guarded.
 */

export interface FlightState {
  startedAt: string | null;
  ticks: Record<string, string>;
  randomEventsFired: { id: string; at: string }[];
}

export interface DebriefDraft {
  version: number;
  results: Record<string, CriterionResultValue>;
  notes: string;
  reflections: Record<string, string>;
  planning: Record<string, string>;
  paused: boolean;
}

const flightKey = (slug: string) => `ltf-flight:${slug}`;
const debriefKey = (slug: string) => `ltf-debrief:${slug}`;

function read<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown): void {
  try {
    if (value === null) window.sessionStorage.removeItem(key);
    else window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked: the form still works, it just won't survive a refresh.
  }
}

export const emptyFlight = (): FlightState => ({
  startedAt: null,
  ticks: {},
  randomEventsFired: [],
});

export const loadFlight = (slug: string) => read<FlightState>(flightKey(slug)) ?? emptyFlight();
export const saveFlight = (slug: string, state: FlightState | null) =>
  write(flightKey(slug), state);

export const emptyDebrief = (version: number): DebriefDraft => ({
  version,
  results: {},
  notes: '',
  reflections: {},
  planning: {},
  paused: false,
});

/** A saved draft, unless it was made for an older version of the rubric. */
export function loadDebrief(slug: string, version: number): DebriefDraft {
  const draft = read<DebriefDraft>(debriefKey(slug));
  return draft && draft.version === version ? draft : emptyDebrief(version);
}
export const saveDebrief = (slug: string, draft: DebriefDraft | null) =>
  write(debriefKey(slug), draft);
