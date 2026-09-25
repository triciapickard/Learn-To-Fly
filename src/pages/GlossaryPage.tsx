import { Search, SearchX } from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useLocation } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { EmptyState } from '@/components/States';
import { useGlossary } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { groupByLetter, LETTERS, searchGlossary } from '@/features/reference/glossary';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';
import type { GlossaryTermDto } from '@shared/schemas/api';

/** Scrolls to and focuses a term, and puts its slug in the URL for sharing. */
function showTerm(slug: string): boolean {
  const el = document.getElementById(slug);
  if (!el) return false;
  el.scrollIntoView({ block: 'start' });
  el.focus({ preventScroll: true });
  window.history.replaceState(window.history.state, '', `#${slug}`);
  return true;
}

/** Glossary (step 10.5, Section 20.8): client-side search, A–Z jump links, `#slug` deep links. */
export default function GlossaryPage() {
  usePageTitle('Glossary');
  const { data, isPending, error, refetch } = useGlossary();
  const { hash } = useLocation();
  const [query, setQuery] = useState('');
  // The term to scroll to once it is on the page: a deep link (`#vy`) waits for the data,
  // and a related-term link waits for the search to clear.
  const pending = useRef<string | null>(hash ? decodeURIComponent(hash.slice(1)) : null);

  useEffect(() => {
    if (data && pending.current && showTerm(pending.current)) pending.current = null;
  });

  const openRelated = (event: MouseEvent, slug: string) => {
    event.preventDefault();
    if (!query) {
      showTerm(slug);
      return;
    }
    pending.current = slug;
    setQuery('');
  };

  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading the glossary">
      {() => {
        const terms = data!.terms;
        const bySlug = new Map(terms.map((t) => [t.slug, t]));
        const shown = searchGlossary(terms, query);
        const groups = query ? null : groupByLetter(shown);
        const present = new Set(groups?.map(([letter]) => letter));
        const renderTerm = (t: GlossaryTermDto) => (
          <article
            key={t.slug}
            id={t.slug}
            tabIndex={-1}
            aria-labelledby={`${t.slug}-term`}
            className="scroll-mt-24 rounded-card border border-border bg-surface p-4 md:scroll-mt-40 target:border-primary target:ring-2 target:ring-primary/40"
          >
            <h3 id={`${t.slug}-term`} className="text-xl font-semibold">
              {t.term}
            </h3>
            {t.aliases.length > 0 && (
              <p className="text-sm text-muted">Also: {t.aliases.join(', ')}</p>
            )}
            <p className="mt-2 max-w-prose">{t.definition}</p>
            {(t.related.length > 0 || t.lessons.length > 0) && (
              <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                {t.related.length > 0 && (
                  <div>
                    <dt className="font-semibold text-muted">Related</dt>
                    <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      {t.related.flatMap((slug) => {
                        const r = bySlug.get(slug);
                        return r
                          ? [
                              <a
                                key={slug}
                                href={`#${slug}`}
                                onClick={(e) => openRelated(e, slug)}
                                className="font-medium text-primary underline underline-offset-2"
                              >
                                {r.term}
                              </a>,
                            ]
                          : [];
                      })}
                    </dd>
                  </div>
                )}
                {t.lessons.length > 0 && (
                  <div>
                    <dt className="font-semibold text-muted">Used in</dt>
                    <dd className="mt-1 flex flex-col gap-1">
                      {t.lessons.map((l) => (
                        <Link key={l.slug} to={l.href}>
                          {l.code} {l.title}
                        </Link>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            )}
          </article>
        );

        return (
          <PageContainer narrow>
            <Breadcrumbs
              items={[{ label: 'Reference', to: '/reference' }, { label: 'Glossary' }]}
            />
            <PageHeader
              className="mt-4"
              title="Glossary"
              description="Plain-English definitions of the terms used in the lessons."
            />
            <form
              role="search"
              aria-label="Search the glossary"
              onSubmit={(e) => e.preventDefault()}
            >
              <FormField label="Search terms" hint="Searches names, abbreviations and definitions.">
                <div className="relative">
                  <Search
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted"
                  />
                  <Input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10"
                    autoComplete="off"
                  />
                </div>
              </FormField>
            </form>
            <p role="status" className="mt-3 text-sm text-muted">
              {query
                ? `${plural(shown.length, 'term')} match “${query}”`
                : `${plural(terms.length, 'term')}`}
            </p>

            {groups && (
              <nav
                aria-label="Jump to letter"
                className="z-10 -mx-4 mt-4 bg-bg/95 px-4 py-2 backdrop-blur md:sticky md:top-16"
              >
                <ul className="flex flex-wrap gap-1">
                  {LETTERS.filter((l) => l !== '#' || present.has('#')).map((letter) => (
                    <li key={letter}>
                      {present.has(letter) ? (
                        <a
                          href={`#letter-${letter === '#' ? 'num' : letter}`}
                          className="flex size-9 items-center justify-center rounded-control font-mono font-semibold text-primary hover:bg-primary-soft"
                        >
                          {letter}
                        </a>
                      ) : (
                        <span
                          className="flex size-9 items-center justify-center font-mono text-muted/60"
                          aria-hidden
                        >
                          {letter}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="mt-6 flex flex-col gap-8">
              {shown.length === 0 && (
                <EmptyState
                  icon={SearchX}
                  title="No terms match"
                  message="Try a shorter word or an abbreviation, such as “Vy” or “CTAF”."
                  action={
                    <Button variant="secondary" onClick={() => setQuery('')}>
                      Clear search
                    </Button>
                  }
                />
              )}
              {groups
                ? groups.map(([letter, list]) => (
                    <section
                      key={letter}
                      id={`letter-${letter === '#' ? 'num' : letter}`}
                      aria-labelledby={`letter-${letter === '#' ? 'num' : letter}-heading`}
                      className="scroll-mt-24 md:scroll-mt-36"
                    >
                      <h2
                        id={`letter-${letter === '#' ? 'num' : letter}-heading`}
                        className="mb-3 font-mono text-2xl font-bold text-primary"
                      >
                        {letter === '#' ? '0–9' : letter}
                      </h2>
                      <div className="flex flex-col gap-3">{list.map(renderTerm)}</div>
                    </section>
                  ))
                : shown.length > 0 && (
                    <section aria-labelledby="results-heading">
                      <h2 id="results-heading" className="sr-only">
                        Search results
                      </h2>
                      <div className="flex flex-col gap-3">{shown.map(renderTerm)}</div>
                    </section>
                  )}
            </div>
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
