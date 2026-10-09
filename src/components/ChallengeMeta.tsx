import {
  Award,
  ClipboardList,
  Compass,
  PlaneLanding,
  Radio,
  Repeat2,
  Route,
  Settings2,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { Badge } from './Badge';

/** Difficulty 1–5 as five 8px discs in line-strong, filled ink per level, with a text alternative. */
export function DifficultyDots({ value, className }: { value: number; className?: string }) {
  const clamped = Math.min(5, Math.max(1, Math.round(value)));
  return (
    <span
      role="img"
      aria-label={`Difficulty ${clamped} of 5`}
      className={cn('inline-flex items-center gap-[3px]', className)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className={cn('size-2 rounded-pill', i < clamped ? 'bg-ink' : 'bg-line-strong')}
        />
      ))}
    </span>
  );
}

export type Tier = 'gold' | 'silver' | 'bronze' | 'none';

const tierLabels: Record<Tier, string> = {
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  none: 'Not passed',
};

/** Tier pill: a ring and dot in the tier color, always with the word. */
export function TierBadge({
  tier,
  className,
  pop,
}: {
  tier: Tier;
  className?: string;
  /** Animate on arrival (the 400ms pop at the end of a challenge; respects reduced motion). */
  pop?: boolean;
}) {
  return (
    <Badge
      tier
      variant={tier === 'none' ? 'neutral' : tier}
      className={cn(
        tier === 'none' && 'text-ink-3',
        pop && 'motion-safe:animate-tier-pop',
        className,
      )}
    >
      {tierLabels[tier]}
    </Badge>
  );
}

export const CHALLENGE_TYPES = [
  'setup',
  'procedure',
  'manoeuvre',
  'pattern',
  'landing',
  'emergency',
  'navigation',
  'communication',
  'capstone',
] as const;
export type ChallengeType = (typeof CHALLENGE_TYPES)[number];

/** Until the custom challenge-type set exists, the closest Lucide glyph stands in. */
export const challengeTypeMeta: Record<ChallengeType, { label: string; icon: LucideIcon }> = {
  setup: { label: 'Setup', icon: Settings2 },
  procedure: { label: 'Procedure', icon: ClipboardList },
  manoeuvre: { label: 'Maneuver', icon: Repeat2 },
  pattern: { label: 'Pattern', icon: Route },
  landing: { label: 'Landing', icon: PlaneLanding },
  emergency: { label: 'Emergency', icon: TriangleAlert },
  navigation: { label: 'Navigation', icon: Compass },
  communication: { label: 'Radio', icon: Radio },
  capstone: { label: 'Capstone', icon: Award },
};

/** Challenge type icon (16px) with its label (visible or screen-reader only). */
export function TypeIcon({
  type,
  showLabel = true,
  className,
}: {
  type: ChallengeType;
  showLabel?: boolean;
  className?: string;
}) {
  const { label, icon: Icon } = challengeTypeMeta[type];
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 text-sm leading-5 text-ink-2', className)}
    >
      <Icon aria-hidden className="size-4" strokeWidth={1.75} />
      <span className={showLabel ? undefined : 'sr-only'}>{label}</span>
    </span>
  );
}

/** One row of challenge metadata in body-sm ink-2, items separated by space-4, wrapping on phones. */
export function ChallengeMeta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-2 text-sm leading-5 text-ink-2',
        className,
      )}
    >
      {children}
    </div>
  );
}
