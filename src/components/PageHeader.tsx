import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

/**
 * Every app page opens with a PageHeader: Breadcrumbs, an overline eyebrow, the title in
 * display-md (the page's only h1), an optional meta row and up to two actions. A 1px line
 * rule closes the header with space-6 above and space-12 below.
 */
export function PageHeader({
  title,
  description,
  eyebrow,
  crumbs,
  meta,
  actions,
  children,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  /** Names the thing's identifier ("Challenge C3.4", "Module 2"). */
  eyebrow?: ReactNode;
  crumbs?: Crumb[];
  /** A ChallengeMeta row or similar, under the title. */
  meta?: ReactNode;
  /** Up to two buttons, one primary. Full width on phones. */
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-12 flex flex-col gap-3 border-b border-line pb-6', className)}>
      {crumbs && <Breadcrumbs items={crumbs} />}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-col gap-1.5">
          {eyebrow && <p className="overline text-ink-2">{eyebrow}</p>}
          <h1 className="display-md">{title}</h1>
          {description && <div className="max-w-measure text-ink-2">{description}</div>}
          {meta}
        </div>
        {actions && (
          <div className="flex shrink-0 flex-wrap gap-2 [&>*]:flex-1 sm:[&>*]:flex-none">
            {actions}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

/** Standard page width (1200px) and padding; 16px side gutter on phones. */
export function PageContainer({
  children,
  className,
  narrow,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 py-8 sm:py-12',
        narrow ? 'max-w-3xl' : 'max-w-page',
        className,
      )}
    >
      {children}
    </div>
  );
}
