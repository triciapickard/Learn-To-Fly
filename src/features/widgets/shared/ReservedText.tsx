import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Text that changes as a widget is used, in a box tall enough for the longest of its
 * `variants` at the current width. Every variant is laid out invisibly in the same grid cell
 * as the text, so the content below does not jump when a longer line appears.
 */
export function ReservedText({
  children,
  variants,
  className,
  'aria-hidden': ariaHidden,
}: {
  children: ReactNode;
  variants: string[];
  className?: string;
  'aria-hidden'?: boolean;
}) {
  return (
    <div className={cn('grid', className)} aria-hidden={ariaHidden}>
      {variants.map((v) => (
        <span key={v} aria-hidden className="invisible [grid-area:1/1]">
          {v}
        </span>
      ))}
      <p className="[grid-area:1/1]">{children}</p>
    </div>
  );
}
