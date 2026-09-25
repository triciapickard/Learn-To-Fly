import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type BadgeVariant =
  | 'neutral'
  | 'info'
  | 'complete'
  | 'in-progress'
  | 'warning'
  | 'danger'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'bonus';

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-surface-2 text-muted border-border',
  info: 'bg-primary-soft text-primary border-primary/30',
  complete: 'bg-success-soft text-success border-success/30',
  'in-progress': 'bg-cyan-soft text-cyan border-cyan/30',
  warning: 'bg-warning-soft text-warning border-warning/30',
  danger: 'bg-danger-soft text-danger border-danger/30',
  gold: 'bg-surface text-gold border-gold',
  silver: 'bg-surface text-silver border-silver',
  bronze: 'bg-surface text-bronze border-bronze',
  bonus: 'bg-magenta-soft text-magenta border-magenta/30',
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

/** Small status label. Always carries text, never colour alone (Section 22.1). */
export function Badge({ variant = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
