import type {
  AircraftDto,
  AirportDto,
  ChecklistDto,
  GlossaryTermDto,
  ResourceDto,
} from '@shared/schemas/api';
import { normalize } from './glossary';
import { kiasText, speedShortName } from './speeds';

export type ReferenceKind = 'speed' | 'checklist' | 'airport' | 'term' | 'resource';

export const KIND_LABELS: Record<ReferenceKind, string> = {
  speed: 'Speed',
  checklist: 'Checklist',
  airport: 'Airport',
  term: 'Term',
  resource: 'Link',
};

export const KIND_SECTIONS: Record<ReferenceKind, string> = {
  speed: 'V-speeds',
  checklist: 'Checklists',
  airport: 'Airports',
  term: 'Glossary',
  resource: 'Resources',
};

export interface ReferenceEntry {
  /** `${kind}:${slug}`, stable across renders. */
  id: string;
  kind: ReferenceKind;
  title: string;
  /** One line under the title: a meaning, a definition or a summary. */
  detail: string;
  /** Internal route, or an external URL for resources. */
  to?: string;
  href?: string;
  /** A number shown in readout on the right (a speed in KIAS). */
  readout?: string;
  /** Normalised text that counts as a name match: title, aliases, codes. */
  names: string[];
  /** Normalised text that counts as a weaker, body match. */
  body: string;
}

export interface ReferenceSources {
  aircraft?: AircraftDto;
  checklists?: ChecklistDto[];
  airports?: AirportDto[];
  terms?: GlossaryTermDto[];
  resources?: ResourceDto[];
}

/**
 * One flat list of everything the Reference section knows about (step 10.1 redesign). Each
 * source is optional, so the index grows as queries resolve and search works on whatever has
 * loaded so far.
 */
export function buildReferenceIndex(sources: ReferenceSources): ReferenceEntry[] {
  const entries: ReferenceEntry[] = [];

  for (const [key, v] of Object.entries(sources.aircraft?.vspeeds ?? {})) {
    const name = speedShortName(v.label);
    entries.push({
      id: `speed:${key}`,
      kind: 'speed',
      title: name,
      detail: v.meaning,
      to: '/reference/speeds',
      readout: kiasText(v),
      names: [name, key, v.label].map(normalize),
      body: normalize([v.meaning, v.notes ?? ''].join(' ')),
    });
  }

  for (const c of sources.checklists ?? []) {
    const emergency = c.phase.toLowerCase() === 'emergency';
    entries.push({
      id: `checklist:${c.slug}`,
      kind: 'checklist',
      title: c.title,
      detail: `${emergency ? 'Emergency' : c.phase}, ${c.items.length} items. ${c.items
        .slice(0, 3)
        .map((i) => `${i.item} ${i.action}`)
        .join(', ')}`,
      to: `/reference/checklists/${c.slug}`,
      names: [c.title, c.phase].map(normalize),
      body: normalize(c.items.map((i) => `${i.item} ${i.action}`).join(' ')),
    });
  }

  for (const a of sources.airports ?? []) {
    entries.push({
      id: `airport:${a.icao}`,
      kind: 'airport',
      title: `${a.icao} ${a.name}`,
      detail: `${a.city}. ${a.towered ? 'Towered' : 'Non-towered'}, Class ${a.airspaceClass}. Runways ${a.runways
        .map((r) => r.designator)
        .join(', ')}`,
      to: `/reference/airports/${a.icao}`,
      names: [a.icao, a.name, a.city].map(normalize),
      body: normalize(a.runways.map((r) => r.designator).join(' ')),
    });
  }

  for (const t of sources.terms ?? []) {
    entries.push({
      id: `term:${t.slug}`,
      kind: 'term',
      title: t.term,
      detail: t.definition,
      to: `/reference/glossary#${t.slug}`,
      names: [t.term, ...t.aliases].map(normalize),
      body: normalize(t.definition),
    });
  }

  for (const r of sources.resources ?? []) {
    const entry: ReferenceEntry = {
      id: `resource:${r.slug}`,
      kind: 'resource',
      title: r.title,
      detail: `${r.publisher}${r.free ? ', free' : ''}. ${r.description}`,
      names: [r.title, r.publisher, ...r.topics].map(normalize),
      body: normalize(r.description),
    };
    if (r.url) entry.href = r.url;
    else entry.to = `/reference/resources?type=${r.type}`;
    entries.push(entry);
  }

  return entries;
}

/**
 * Entries whose name contains the query come first (in index order, so speeds before
 * terms), then entries that only mention it. An empty query returns nothing: the hub shows
 * its sections instead.
 */
export function searchReference(
  index: ReferenceEntry[],
  query: string,
  limit = 8,
): ReferenceEntry[] {
  const q = normalize(query);
  if (!q) return [];
  const byName: ReferenceEntry[] = [];
  const byBody: ReferenceEntry[] = [];
  for (const e of index) {
    if (e.names.some((n) => n.includes(q))) byName.push(e);
    else if (e.body.includes(q)) byBody.push(e);
  }
  return [...byName, ...byBody].slice(0, limit);
}

/** The lookups a learner reaches for most, shown as chips when the box is empty. */
export const COMMON_LOOKUPS = [
  'speed:vy',
  'checklist:before-landing',
  'term:pattern-altitude',
  'airport:KLVK',
  'term:ctaf',
  'checklist:engine-failure-in-flight',
] as const;

export function commonLookups(index: ReferenceEntry[]): ReferenceEntry[] {
  const byId = new Map(index.map((e) => [e.id, e]));
  return COMMON_LOOKUPS.flatMap((id) => byId.get(id) ?? []);
}
