import { Check, OctagonAlert, TriangleAlert, type LucideIcon } from 'lucide-react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type BadgeVariant =
  'neutral' | 'accent' | 'go' | 'caution' | 'warn' | 'outline' | 'gold' | 'silver' | 'bronze';

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-surface-sunken text-ink-2',
  accent: 'bg-accent-tint text-accent',
  go: 'bg-go-tint text-go',
  caution: 'bg-caution-tint text-caution',
  warn: 'bg-warn-tint text-warn',
  outline: 'border-line-strong bg-transparent text-ink',
  gold: 'text-tier-gold',
  silver: 'text-tier-silver',
  bronze: 'text-tier-bronze',
};

/** Status badges carry their 12px icon so color is never the only cue. */
const statusIcons: Partial<Record<BadgeVariant, LucideIcon>> = {
  go: Check,
  caution: TriangleAlert,
  warn: OctagonAlert,
};

const TIERS: ReadonlySet<BadgeVariant> = new Set(['gold', 'silver', 'bronze']);

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Set false to drop the automatic status icon (when the text already carries one). */
  icon?: boolean;
  /** Render as a tier pill (28px, uppercase, 1px ring and an 8px dot in the tier color). */
  tier?: boolean;
}

/** Small label, 24px tall. Every colored badge carries a word, never color alone. */
export function Badge({
  variant = 'neutral',
  icon = true,
  tier = TIERS.has(variant),
  className,
  children,
  ...props
}: BadgeProps) {
  const Icon = icon ? statusIcons[variant] : undefined;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 border border-transparent text-xs font-semibold whitespace-nowrap',
        tier
          ? 'h-7 rounded-pill border-current bg-transparent px-2.5 tracking-[0.08em] uppercase'
          : 'h-6 rounded-sm px-2 tracking-[0.02em]',
        variants[variant],
        className,
      )}
      {...props}
    >
      {tier && <span aria-hidden className="size-2 shrink-0 rounded-pill bg-current" />}
      {Icon && <Icon aria-hidden className="size-3 shrink-0" strokeWidth={2.25} />}
      {children}
    </span>
  );
}
