import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

/** Placeholder block shaped like the final content (avoids layout shift). */
export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn('animate-pulse rounded-control bg-surface-2', className)}
      {...props}
    />
  );
}

/** Wraps skeletons so screen readers hear "Loading …" once. */
export function LoadingRegion({
  label = 'Loading',
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div role="status" aria-busy="true" className={className}>
      <span className="sr-only">{label}…</span>
      {children}
    </div>
  );
}
