import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type CardState = 'default' | 'done' | 'current' | 'locked';

const states: Record<CardState, string> = {
  default: 'border-line',
  done: 'border-line',
  /** The single card the learner should act on next: accent-tint fill, accent-line edge. */
  current: 'border-accent-line bg-accent-tint shadow-none',
  locked: 'border-line text-ink-3',
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  state?: CardState;
  /** The whole card is a link: the border rises to line-strong on hover. */
  interactive?: boolean;
}

/**
 * A surface panel with a 1px line border, radius-lg and shadow-1. In Night the shadow token
 * is a 1px line ring, so a card separates from canvas by being one step lighter. State is
 * carried by the badge, the eyebrow and the fill, never a colored left border.
 */
export function Card({ state = 'default', interactive, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border bg-surface shadow-1',
        states[state],
        interactive && 'transition-colors duration-150 hover:border-line-strong',
        className,
      )}
      {...props}
    />
  );
}

/** Eyebrow in overline on the left, an optional badge or icon on the right. */
export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-start justify-between gap-3 px-5 pt-5 sm:px-6 sm:pt-6', className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-5 py-3 first:pt-5 last:pb-5 sm:px-6 sm:first:pt-6 sm:last:pb-6', className)}
      {...props}
    />
  );
}

/** Separated from the body by a 1px line rule. */
export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mx-5 mt-auto flex flex-wrap items-center gap-2 border-t border-line pt-3 pb-5 sm:mx-6 sm:pb-6',
        className,
      )}
      {...props}
    />
  );
}
