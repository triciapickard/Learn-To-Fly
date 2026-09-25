import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Page title block. Every page has exactly one h1 (Section 22.1). */
export function PageHeader({
  title,
  description,
  eyebrow,
  children,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-8 flex flex-col gap-3', className)}>
      {eyebrow && <div className="text-sm font-semibold text-primary">{eyebrow}</div>}
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {description && <div className="max-w-3xl text-lg text-muted">{description}</div>}
      {children}
    </div>
  );
}

/** Standard page width and padding. */
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
        narrow ? 'max-w-3xl' : 'max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
