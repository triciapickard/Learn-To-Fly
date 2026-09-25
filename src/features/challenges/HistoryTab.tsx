import { History } from 'lucide-react';
import { Button } from '@/components/Button';
import { TierBadge } from '@/components/ChallengeMeta';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { EmptyState, ErrorState } from '@/components/States';
import { excerpt, formatDateTime } from '@/lib/format';
import type { AttemptDto, ChallengeDetail } from '@shared/schemas/api';
import { useChallengeAttempts } from './api';
import { criterionFeedback } from './ResultView';

const RESULT_TEXT = {
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  met: 'Met',
  not_met: 'Not met',
} as const;

export function AttemptDetails({
  challenge,
  attempt,
}: {
  challenge: ChallengeDetail;
  attempt: AttemptDto;
}) {
  const questions = new Map(challenge.debriefQuestions.map((q) => [q.id, q.prompt]));
  return (
    <div className="flex flex-col gap-3 pt-3">
      <p className="text-sm text-muted">
        {attempt.points} of {attempt.maxPoints} points · rubric version {attempt.challengeVersion}
        {attempt.paused && ' · paused during the flight'}
      </p>
      <ul className="flex flex-col gap-1">
        {criterionFeedback(challenge, attempt).map(({ criterion, result }) => (
          <li key={criterion.id}>
            <span className="font-semibold">{RESULT_TEXT[result]}:</span> {criterion.label}
          </li>
        ))}
      </ul>
      {attempt.reflections.length > 0 && (
        <dl className="flex flex-col gap-2">
          {attempt.reflections.map((r) => (
            <div key={r.questionId}>
              <dt className="font-semibold">{questions.get(r.questionId) ?? r.questionId}</dt>
              <dd className="whitespace-pre-line">{r.answer}</dd>
            </div>
          ))}
        </dl>
      )}
      {attempt.notes && (
        <div>
          <p className="font-semibold">Notes</p>
          <p className="whitespace-pre-line">{attempt.notes}</p>
        </div>
      )}
    </div>
  );
}

/** Attempt history (US-12): newest first, each one expandable. */
export function HistoryTab({ challenge }: { challenge: ChallengeDetail }) {
  const query = useChallengeAttempts(challenge.slug);
  if (query.isPending) {
    return (
      <LoadingRegion label="Loading your attempts" className="flex flex-col gap-2">
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
      </LoadingRegion>
    );
  }
  if (query.isError) return <ErrorState onRetry={() => void query.refetch()} />;
  const attempts = query.data.pages.flatMap((p) => p.attempts);
  if (!attempts.length) {
    return (
      <EmptyState
        icon={History}
        title="No attempts yet"
        message="Fly the challenge and submit a debrief to see your results here."
      />
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <h2 className="sr-only">Your attempts</h2>
      <ul className="flex flex-col gap-2">
        {attempts.map((a) => (
          <li key={a.id}>
            <details className="group rounded-card border border-border bg-surface px-4 py-2">
              <summary className="flex min-h-11 cursor-pointer flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-medium">{formatDateTime(a.submittedAt)}</span>
                <TierBadge tier={a.tier} />
                <span className="font-mono font-semibold">{a.percentage}%</span>
                {a.notes && <span className="text-sm text-muted">{excerpt(a.notes, 60)}</span>}
              </summary>
              <AttemptDetails challenge={challenge} attempt={a} />
            </details>
          </li>
        ))}
      </ul>
      {query.hasNextPage && (
        <div>
          <Button
            variant="secondary"
            onClick={() => void query.fetchNextPage()}
            disabled={query.isFetchingNextPage}
          >
            {query.isFetchingNextPage ? 'Loading…' : 'Show older attempts'}
          </Button>
        </div>
      )}
    </div>
  );
}
