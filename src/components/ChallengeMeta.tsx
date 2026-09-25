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
import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Badge } from './Badge';

/** Difficulty 1–5 shown as dots with a text alternative (Section 15.1). */
export function DifficultyDots({ value, className }: { value: number; className?: string }) {
  const clamped = Math.min(5, Math.max(1, Math.round(value)));
  return (
    <span
      role="img"
      aria-label={`Difficulty ${clamped} of 5`}
      className={cn('inline-flex items-center gap-1', className)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className={cn(
            'size-2.5 rounded-full border border-primary',
            i < clamped ? 'bg-primary' : 'bg-transparent',
          )}
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
const tierStars: Record<Tier, number> = { gold: 3, silver: 2, bronze: 1, none: 0 };

/** Tier badge with text and stars — never colour alone. */
export function TierBadge({ tier, className }: { tier: Tier; className?: string }) {
  return (
    <Badge variant={tier === 'none' ? 'neutral' : tier} className={className}>
      {Array.from({ length: tierStars[tier] }, (_, i) => (
        <Star key={i} aria-hidden className="size-3 fill-current" />
      ))}
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

export const challengeTypeMeta: Record<ChallengeType, { label: string; icon: LucideIcon }> = {
  setup: { label: 'Setup', icon: Settings2 },
  procedure: { label: 'Procedure', icon: ClipboardList },
  manoeuvre: { label: 'Manoeuvre', icon: Repeat2 },
  pattern: { label: 'Pattern', icon: Route },
  landing: { label: 'Landing', icon: PlaneLanding },
  emergency: { label: 'Emergency', icon: TriangleAlert },
  navigation: { label: 'Navigation', icon: Compass },
  communication: { label: 'Radio', icon: Radio },
  capstone: { label: 'Capstone', icon: Award },
};

/** Challenge type icon with its label (visible or screen-reader only). */
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
    <span className={cn('inline-flex items-center gap-1.5 text-sm text-muted', className)}>
      <Icon aria-hidden className="size-4" />
      <span className={showLabel ? undefined : 'sr-only'}>{label}</span>
    </span>
  );
}
