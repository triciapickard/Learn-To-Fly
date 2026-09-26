import type { GlossaryTermDto } from '@shared/schemas/api';

/** Lowercase, strip accents and punctuation, collapse spaces: "V-speeds" → "v speeds". */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Client-side glossary search (step 10.5): terms whose name or an alias contains the query
 * come first, then terms whose definition mentions it. An empty query returns every term.
 */
export function searchGlossary(terms: GlossaryTermDto[], query: string): GlossaryTermDto[] {
  const q = normalize(query);
  if (!q) return terms;
  const byName: GlossaryTermDto[] = [];
  const byDefinition: GlossaryTermDto[] = [];
  for (const t of terms) {
    if ([t.term, ...t.aliases].some((name) => normalize(name).includes(q))) byName.push(t);
    else if (normalize(t.definition).includes(q)) byDefinition.push(t);
  }
  return [...byName, ...byDefinition];
}

/** The A–Z heading a term files under; numbers and symbols go under "#". */
export function letterOf(term: string): string {
  const first = normalize(term).charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

export const LETTERS = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

/** Terms sorted alphabetically and grouped by letter, in A–Z order. */
export function groupByLetter(terms: GlossaryTermDto[]): [string, GlossaryTermDto[]][] {
  const groups = new Map<string, GlossaryTermDto[]>();
  const sorted = [...terms].sort((a, b) =>
    a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }),
  );
  for (const t of sorted) {
    const letter = letterOf(t.term);
    groups.set(letter, [...(groups.get(letter) ?? []), t]);
  }
  return LETTERS.filter((l) => groups.has(l)).map((l) => [l, groups.get(l)!]);
}
