import { Clock } from 'lucide-react';
import { DifficultyDots, TypeIcon } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import { DraftBadge } from '@/features/content/DraftBadge';
import type { ChallengeSummary } from '@shared/schemas/api';

/** One challenge as a compact row: code, linked title, type, difficulty and time. */
export function ChallengeMetaLine({ challenge: c }: { challenge: ChallengeSummary }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-card border border-border bg-surface p-3">
      <TypeIcon type={c.type} />
      <span className="font-mono text-sm text-muted">{c.code}</span>
      <Link to={`/challenges/${c.slug}`} className="font-semibold">
        {c.title}
      </Link>
      <span className="ml-auto flex items-center gap-3 text-sm text-muted">
        <DifficultyDots value={c.difficulty} />
        <span className="inline-flex items-center gap-1">
          <Clock aria-hidden className="size-4" /> {c.estimatedMinutes} min
        </span>
        {c.draft && <DraftBadge />}
      </span>
    </div>
  );
}
