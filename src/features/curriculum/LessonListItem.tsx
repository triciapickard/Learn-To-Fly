import { BookOpen, ChevronRight, Clock } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { DifficultyDots, TypeIcon } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import { DraftBadge } from '@/features/content/DraftBadge';
import { cn } from '@/lib/cn';
import type { ChallengeSummary, LessonSummary } from '@shared/schemas/api';

const rowClasses =
  'group flex min-h-11 items-center gap-3 rounded-control px-3 py-2 text-text hover:bg-surface-2';

export function LessonRow({ lesson, status }: { lesson: LessonSummary; status?: React.ReactNode }) {
  return (
    <Link unstyled to={`/learn/${lesson.moduleSlug}/${lesson.slug}`} className={rowClasses}>
      {status ?? <BookOpen aria-hidden className="size-5 shrink-0 text-muted" />}
      <span className="w-10 shrink-0 font-mono text-sm text-muted">{lesson.code}</span>
      <span className="flex-1 font-medium group-hover:underline">{lesson.title}</span>
      <span className="hidden items-center gap-2 sm:flex">
        {lesson.priority === 'P1' && <Badge variant="bonus">Bonus</Badge>}
        {lesson.draft && <DraftBadge />}
        {lesson.estimatedMinutes && (
          <span className="flex items-center gap-1 text-sm text-muted">
            <Clock aria-hidden className="size-4" />
            {lesson.estimatedMinutes} min
          </span>
        )}
      </span>
      <ChevronRight aria-hidden className="size-4 shrink-0 text-muted" />
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
      <span className="w-10 shrink-0 font-mono text-sm text-muted">{challenge.code}</span>
      <span className="flex-1 font-medium group-hover:underline">{challenge.title}</span>
      <span className="hidden items-center gap-2 sm:flex">
        {challenge.priority === 'P1' && <Badge variant="bonus">Bonus</Badge>}
        {challenge.draft && <DraftBadge />}
        <DifficultyDots value={challenge.difficulty} />
      </span>
      <ChevronRight aria-hidden className="size-4 shrink-0 text-muted" />
    </Link>
  );
}
