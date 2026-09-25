import { CheckCircle2, Circle, CircleDashed } from 'lucide-react';
import { TierBadge } from '@/components/ChallengeMeta';
import type { ChallengeProgressDto, LessonProgressDto } from '@shared/schemas/api';

/** Lesson status icon with a text alternative (never colour alone). */
export function LessonStatusIcon({ progress }: { progress?: LessonProgressDto }) {
  if (progress?.status === 'completed') {
    return (
      <span className="inline-flex shrink-0">
        <CheckCircle2 aria-hidden className="size-5 text-success" />
        <span className="sr-only">Completed:</span>
      </span>
    );
  }
  if (progress) {
    return (
      <span className="inline-flex shrink-0">
        <CircleDashed aria-hidden className="size-5 text-primary" />
        <span className="sr-only">In progress:</span>
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0">
      <Circle aria-hidden className="size-5 text-border-strong" />
      <span className="sr-only">Not started:</span>
    </span>
  );
}

/** Challenge status: best tier once attempted, else an empty circle. */
export function ChallengeStatusIcon({ progress }: { progress?: ChallengeProgressDto }) {
  if (progress) return <TierBadge tier={progress.bestTier} className="shrink-0" />;
  return (
    <span className="inline-flex shrink-0">
      <Circle aria-hidden className="size-5 text-border-strong" />
      <span className="sr-only">Not attempted:</span>
    </span>
  );
}
