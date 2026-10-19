import { Search, X } from 'lucide-react';
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Badge } from '@/components/Badge';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { cn } from '@/lib/cn';
import {
  commonLookups,
  KIND_LABELS,
  KIND_SECTIONS,
  searchReference,
  type ReferenceEntry,
} from './search';

const resultClasses =
  'flex min-h-16 items-center gap-4 px-5 py-2.5 text-ink no-underline hover:bg-surface-sunken focus-visible:bg-accent-tint focus-visible:outline-none';

/** Where a result goes: an internal route, or an external resource in a new tab. */
function ResultLink({
  entry,
  onKeyDown,
  children,
}: {
  entry: ReferenceEntry;
  onKeyDown: (event: KeyboardEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}) {
  if (entry.href) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className={resultClasses}
        aria-label={`${entry.title} (opens in a new tab)`}
        onKeyDown={onKeyDown}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={entry.to ?? '/reference'} unstyled className={resultClasses} onKeyDown={onKeyDown}>
      {children}
    </Link>
  );
}

function isTyping(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

/**
 * The hub's front door (Section 20.8, step 10.1 redesign): one box that searches speeds,
 * checklists, airports, glossary terms and resources together. Results are plain links, so
 * Enter opens the first one, the arrow keys walk the list and Escape clears it. "/" focuses
 * the box from anywhere on the page.
 */
export function ReferenceSearch({
  index,
  loading,
  className,
}: {
  index: ReferenceEntry[];
  /** Some sources are still loading, so a miss may still become a hit. */
  loading?: boolean;
  className?: string;
}) {
  const id = useId();
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState('');
  const results = searchReference(index, query);
  const first = results[0];

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTyping(event.target)) return;
      event.preventDefault();
      input.current?.focus();
      input.current?.select();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const clear = () => {
    setQuery('');
    input.current?.focus();
  };

  const open = (entry: ReferenceEntry) => {
    if (entry.href) window.open(entry.href, '_blank', 'noopener,noreferrer');
    else void navigate(entry.to ?? '/reference');
  };

  const links = () => Array.from(list.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);

  const onInputKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && first) {
      event.preventDefault();
      open(first);
    } else if (event.key === 'ArrowDown' && results.length) {
      event.preventDefault();
      links()[0]?.focus();
    } else if (event.key === 'Escape' && query) {
      event.preventDefault();
      clear();
    }
  };

  const onResultKey = (event: KeyboardEvent<HTMLAnchorElement>) => {
    const items = links();
    const at = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (at < 0) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      items[Math.min(at + 1, items.length - 1)]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (at === 0) input.current?.focus();
      else items[at - 1]?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      clear();
    }
  };

  const common = query ? [] : commonLookups(index);

  return (
    <div className={cn('mx-auto flex w-full max-w-3xl flex-col gap-4', className)}>
      <form
        role="search"
        className="relative"
        onSubmit={(event) => {
          event.preventDefault();
          if (first) open(first);
        }}
      >
        <label htmlFor={id} className="sr-only">
          Search the reference
        </label>
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-5 size-[22px] -translate-y-1/2 text-ink-2"
          strokeWidth={1.75}
        />
        <Input
          ref={input}
          id={id}
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Speeds, terms, checklists, airports"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onInputKey}
          className="h-16 rounded-lg pr-28 pl-14 text-xl shadow-2"
        />
        {query ? (
          <button
            type="button"
            onClick={clear}
            className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-md text-ink-2 hover:bg-surface-sunken hover:text-ink"
            aria-label="Clear search"
          >
            <X aria-hidden className="size-5" strokeWidth={1.75} />
          </button>
        ) : (
          <kbd
            aria-hidden
            className="absolute top-1/2 right-4 hidden h-7 -translate-y-1/2 items-center rounded-sm border border-line bg-surface-sunken px-2.5 font-mono text-sm text-ink-2 sm:flex"
          >
            / to focus
          </kbd>
        )}
      </form>

      {query && (
        <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-2">
          <p aria-live="polite" className="eyebrow px-5 pt-3 pb-1.5 text-ink-2">
            {results.length
              ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query}”`
              : loading
                ? 'Still loading the reference…'
                : `Nothing matches “${query}”`}
          </p>
          {results.length > 0 && (
            <ul ref={list} aria-label="Search results">
              {results.map((entry) => (
                <li key={entry.id} className="border-t border-line">
                  <ResultLink entry={entry} onKeyDown={onResultKey}>
                    <Badge variant="outline" className="w-[72px] shrink-0 justify-center">
                      {KIND_LABELS[entry.kind]}
                    </Badge>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="font-semibold">{entry.title}</span>
                      <span className="truncate text-sm leading-5 text-ink-2">{entry.detail}</span>
                    </span>
                    {entry.readout ? (
                      <span className="readout text-xl whitespace-nowrap">
                        {entry.readout}{' '}
                        <span className="font-sans text-sm font-normal text-ink-2">KIAS</span>
                      </span>
                    ) : (
                      <span className="text-sm leading-5 whitespace-nowrap text-ink-2">
                        {KIND_SECTIONS[entry.kind]}
                      </span>
                    )}
                  </ResultLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {common.length > 0 && (
        <nav
          aria-label="Common lookups"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="mr-1 text-sm leading-5 text-ink-2">Most looked up</span>
          {common.map((entry) => (
            <Link
              key={entry.id}
              to={entry.to ?? '/reference'}
              unstyled
              className={cn(
                'flex h-9 items-center rounded-pill border border-line bg-surface px-3.5 text-sm font-medium text-ink hover:border-line-strong',
                entry.id === 'checklist:engine-failure-in-flight' && 'bg-warn-tint text-warn',
              )}
            >
              {entry.title}
              {entry.readout && (
                <>
                  {' '}
                  <span className="ml-1 font-mono">{entry.readout}</span>
                </>
              )}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
