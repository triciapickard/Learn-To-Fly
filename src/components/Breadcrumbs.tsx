import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Link } from './Link';

export interface Crumb {
  label: string;
  to?: string;
}

/**
 * Breadcrumb trail: quiet links in ink-2 separated by a 14px chevron in ink-3; the current
 * page is ink at weight 500 and not a link. On phones only the parent shows, with a leading
 * chevron ("‹ Module 3").
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const parentIndex = items.length - 2;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm leading-5 text-ink-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          const parent = index === parentIndex;
          return (
            <li
              key={`${item.label}-${index}`}
              className={cn('items-center gap-1.5', parent ? 'flex' : 'hidden sm:flex')}
            >
              {parent && (
                <ChevronLeft
                  aria-hidden
                  className="size-3.5 text-ink-3 sm:hidden"
                  strokeWidth={2}
                />
              )}
              {last || !item.to ? (
                <span
                  aria-current={last ? 'page' : undefined}
                  className={last ? 'font-medium text-ink' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} quiet className="text-ink-2 no-underline hover:underline">
                  {item.label}
                </Link>
              )}
              {!last && (
                <ChevronRight
                  aria-hidden
                  className={cn('size-3.5 text-ink-3', parent && 'hidden sm:block')}
                  strokeWidth={2}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
