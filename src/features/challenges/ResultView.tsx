import { CheckCircle2, ChevronRight, History, MinusCircle, RotateCcw, XCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/Button';
import { TierBadge } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import type { AttemptDto, ChallengeDetail, ChallengeSummary } from '@shared/schemas/api';
import type { Criterion } from '@shared/schemas/content';
import { RESULT_POINTS } from '@shared/scoring';

const RESULT_TEXT: Record<AttemptDto['criteriaResults'][number]['result'], string> = {
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  met: 'Met',
  not_met: 'Not met',
};

/** A "review" link to the lesson section behind a criterion, when there is one. */
export function reviewLink(challenge: ChallengeDetail, criterion: Criterion) {
  const link = criterion.reviewLink;
  const lesson = link && challenge.lessons.find((l) => l.slug === link.lesson);
  if (!link || !lesson) return null;
  return { href: `/learn/${lesson.moduleSlug}/${lesson.slug}#${link.section}`, lesson };
}

/** Per-criterion outcome for an attempt: what was answered and whether to review it. */
export function criterionFeedback(challenge: ChallengeDetail, attempt: AttemptDto) {
  const answers = new Map(attempt.criteriaResults.map((r) => [r.criterionId, r.result]));
  return challenge.criteria.map((c) => {
    const result = answers.get(c.id) ?? 'not_met';
    const points = RESULT_POINTS[result];
    return { criterion: c, result, points, review: points < 2 ? reviewLink(challenge, c) : null };
  });
}

/** The result screen after a debrief (Section 20.6). */
export function ResultView({
  challenge,
  attempt,
  best,
  next,
  onFlyAgain,
  onHistory,
}: {
  challenge: ChallengeDetail;
  attempt: AttemptDto;
  best: { tier: AttemptDto['tier']; percentage: number } | null;
  next: ChallengeSummary | null;
  onFlyAgain: () => void;
  onHistory: () => void;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  const message = attempt.passed
    ? attempt.tier === 'gold'
      ? 'Excellent flying. That is a Gold.'
      : 'Passed. Fly it again to push for a higher tier.'
    : 'Not passed yet: a required criterion was not met. Review it and try again.';

  return (
    <section aria-labelledby="result-heading" className="flex flex-col gap-6">
      <div className="rounded-card border border-border bg-surface p-6 text-center">
        <h2
          id="result-heading"
          ref={heading}
          tabIndex={-1}
          className="text-2xl font-bold focus:outline-none"
        >
          Your result
        </h2>
        <div className="mt-4 flex flex-col items-center gap-3">
          <TierBadge
            tier={attempt.tier}
            className="px-4 py-2 text-lg motion-safe:animate-tier-pop"
          />
          <p className="font-mono text-5xl font-bold">{attempt.percentage}%</p>
          <p className="text-muted">
            {attempt.points} of {attempt.maxPoints} points
          </p>
          <p className="text-lg">{message}</p>
          {best && (best.tier !== attempt.tier || best.percentage !== attempt.percentage) && (
            <p className="text-sm text-muted">
              Your best so far: <TierBadge tier={best.tier} /> {best.percentage}%
            </p>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">Criterion by criterion</h3>
        <ul className="mt-3 flex flex-col gap-2">
          {criterionFeedback(challenge, attempt).map(({ criterion, result, points, review }) => {
            const Icon = points >= 2 ? CheckCircle2 : points === 1 ? MinusCircle : XCircle;
            const tone =
              points >= 2 ? 'text-success' : points === 1 ? 'text-warning' : 'text-danger';
            return (
              <li
                key={criterion.id}
                className="flex gap-3 rounded-control border border-border bg-surface p-3"
              >
                <Icon aria-hidden className={`mt-0.5 size-5 shrink-0 ${tone}`} />
                <div>
                  <p>
                    <span className="font-semibold">{RESULT_TEXT[result]}:</span> {criterion.label}
                    {criterion.required && <span className="text-muted"> (required)</span>}
                  </p>
                  {review && (
                    <Link to={review.href} className="text-sm">
                      Review {review.lesson.code} {review.lesson.title}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button onClick={onFlyAgain}>
          <RotateCcw aria-hidden className="size-4" /> Fly again
        </Button>
        {next && (
          <Button asChild variant="secondary">
            <Link unstyled to={`/challenges/${next.slug}`}>
              Next: {next.code} {next.title} <ChevronRight aria-hidden className="size-4" />
            </Link>
          </Button>
        )}
        <Button variant="ghost" onClick={onHistory}>
          <History aria-hidden className="size-4" /> See all attempts
        </Button>
      </div>
    </section>
  );
}
