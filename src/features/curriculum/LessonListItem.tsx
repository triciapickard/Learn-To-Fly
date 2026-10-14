import { BookOpen, ChevronRight, Clock } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { DifficultyDots, TypeIcon } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import { DraftBadge } from '@/features/content/DraftBadge';
import { cn } from '@/lib/cn';
import type { ChallengeSummary, LessonSummary } from '@shared/schemas/api';

/**
 * Hover tints the row in the accent and darkens the title, so the row reads clearly against
 * both a plain surface and the tinted current-module card (which passes hover:bg-surface).
 */
const rowClasses =
  'group/row flex min-h-11 items-center gap-3 rounded-md px-3 py-2 text-ink hover:bg-accent-tint hover:text-accent-strong';

export function LessonRow({
  lesson,
  status,
  className,
}: {
  lesson: LessonSummary;
  status?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      unstyled
      to={`/learn/${lesson.moduleSlug}/${lesson.slug}`}
      className={cn(rowClasses, className)}
    >
      {status ?? <BookOpen aria-hidden className="size-5 shrink-0 text-ink-2" />}
      <span className="w-10 shrink-0 font-mono text-sm text-ink-2">{lesson.code}</span>
      <span className="flex-1 font-medium group-hover/row:underline">{lesson.title}</span>
      <span className="hidden items-center gap-2 sm:flex">
        {lesson.priority === 'P1' && <Badge variant="outline">Bonus</Badge>}
        {lesson.draft && <DraftBadge />}
        {lesson.estimatedMinutes && (
          <span className="flex items-center gap-1 text-sm text-ink-2">
            <Clock aria-hidden className="size-4" />
            {lesson.estimatedMinutes} min
          </span>
        )}
      </span>
      <ChevronRight aria-hidden className="size-4 shrink-0 text-ink-2" />
    </Link>
  );
}

export function ChallengeRow({
  challenge,
  status,
  className,
}: {
  challenge: ChallengeSummary;
  status?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link unstyled to={`/challenges/${challenge.slug}`} className={cn(rowClasses, className)}>
      {status ?? <TypeIcon type={challenge.type} showLabel={false} className="shrink-0" />}
      <span className="w-10 shrink-0 font-mono text-sm text-ink-2">{challenge.code}</span>
      <span className="flex-1 font-medium group-hover/row:underline">{challenge.title}</span>
      <span className="hidden items-center gap-2 sm:flex">
        {challenge.priority === 'P1' && <Badge variant="outline">Bonus</Badge>}
        {challenge.draft && <DraftBadge />}
        <DifficultyDots value={challenge.difficulty} />
      </span>
      <ChevronRight aria-hidden className="size-4 shrink-0 text-ink-2" />
    </Link>
  );
}
