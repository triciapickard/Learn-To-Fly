import { ChevronRight } from 'lucide-react';
import { Link } from './Link';

export interface Crumb {
  label: string;
  to?: string;
}

/** Breadcrumb trail; the last item is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {last || !item.to ? (
                <span aria-current={last ? 'page' : undefined} className={last ? 'text-text' : ''}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="text-muted">
                  {item.label}
                </Link>
              )}
              {!last && <ChevronRight aria-hidden className="size-4" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
