import type { GlossaryTerm } from '@shared/schemas/content.js';

function escape(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Finds which glossary terms a lesson uses (Section 27.3 `glossaryTerms`). Acronyms and
 * V-speeds (e.g. "AGL", "Vy") match case-sensitively; other terms ignore case.
 */
export function findGlossaryTerms(text: string, terms: GlossaryTerm[]): string[] {
  const found: string[] = [];
  for (const term of terms) {
    const names = [term.term, ...term.aliases].filter((n) => n.trim().length >= 2);
    const matches = names.some((name) => {
      const caseSensitive = /[A-Z].*[A-Z]|^V[a-z0-9]+$/.test(name) && name.length <= 6;
      const re = new RegExp(`(?<![\\w-])${escape(name)}(?![\\w-])`, caseSensitive ? 'u' : 'iu');
      return re.test(text);
    });
    if (matches) found.push(term.slug);
  }
  return found;
}
