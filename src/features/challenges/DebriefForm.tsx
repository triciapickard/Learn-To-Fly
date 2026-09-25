import { LogIn, Send } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { Button } from '@/components/Button';
import { Callout } from '@/components/Callout';
import { TierBadge } from '@/components/ChallengeMeta';
import { Checkbox } from '@/components/Checkbox';
import { FormField } from '@/components/FormField';
import { Input } from '@/components/Input';
import { Link } from '@/components/Link';
import { RadioGroup, type RadioOption } from '@/components/RadioGroup';
import { Textarea } from '@/components/Textarea';
import { useAuth } from '@/features/auth/api';
import { ApiError } from '@/lib/apiClient';
import {
  NOTES_MAX,
  REFLECTION_MAX,
  type AttemptCreateInput,
  type AttemptCreateResponse,
  type ChallengeDetail,
} from '@shared/schemas/api';
import type { Criterion } from '@shared/schemas/content';
import { scoreAttempt, type CriterionResultValue } from '@shared/scoring';
import { useSubmitAttempt } from './api';
import {
  emptyDebrief,
  loadDebrief,
  loadFlight,
  saveDebrief,
  saveFlight,
  type DebriefDraft,
} from './storage';

export function criterionOptions(c: Criterion): RadioOption[] {
  if (c.kind === 'binary') {
    return [
      { value: 'met', label: 'Met' },
      { value: 'not_met', label: 'Not met' },
    ];
  }
  return [
    { value: 'gold', label: 'Gold', description: c.tiers?.gold },
    { value: 'silver', label: 'Silver', description: c.tiers?.silver },
    { value: 'bronze', label: 'Bronze', description: c.tiers?.bronze },
    { value: 'not_met', label: 'Not met', description: 'None of the above' },
  ];
}

/** The draft as an API request body (scores are never sent: the server computes them). */
export function toAttemptInput(
  challenge: ChallengeDetail,
  draft: DebriefDraft,
  flight = loadFlight(challenge.slug),
): AttemptCreateInput {
  return {
    challengeVersion: challenge.version,
    criteriaResults: challenge.criteria
      .filter((c) => draft.results[c.id])
      .map((c) => ({ criterionId: c.id, result: draft.results[c.id]! })),
    notes: draft.notes,
    reflections: challenge.debriefQuestions
      .filter((q) => draft.reflections[q.id]?.trim())
      .map((q) => ({ questionId: q.id, answer: draft.reflections[q.id]! })),
    paused: draft.paused,
    startedAt: flight.startedAt,
    checklistTicks: Object.entries(flight.ticks).map(([itemId, at]) => ({ itemId, at })),
    randomEventsFired: flight.randomEventsFired,
    planning: Object.fromEntries(
      challenge.planningFields
        .filter((f) => draft.planning[f.id]?.trim())
        .map((f) => {
          const raw = draft.planning[f.id]!.trim();
          return [f.id, f.type === 'number' && Number.isFinite(Number(raw)) ? Number(raw) : raw];
        }),
    ),
  };
}

/**
 * The debrief (Section 20.6): the rubric, notes, reflections and planning fields, with a
 * live score preview. Drafts survive a refresh and a detour through log-in (US-11).
 */
export function DebriefForm({
  challenge,
  returnTo,
  onSubmitted,
}: {
  challenge: ChallengeDetail;
  returnTo: string;
  onSubmitted: (result: AttemptCreateResponse) => void;
}) {
  const { isAuthenticated } = useAuth();
  const submit = useSubmitAttempt(challenge.slug);
  const [draft, setDraft] = useState<DebriefDraft>(() =>
    loadDebrief(challenge.slug, challenge.version),
  );
  const statusId = useId();

  const change = (patch: Partial<DebriefDraft>) => {
    const next = { ...draft, ...patch };
    setDraft(next);
    saveDebrief(challenge.slug, next);
  };

  const missing = challenge.criteria.filter((c) => c.required && !draft.results[c.id]);
  const preview = useMemo(() => {
    const results = challenge.criteria.map((c) => ({
      criterionId: c.id,
      result: draft.results[c.id] ?? ('not_met' as CriterionResultValue),
    }));
    return scoreAttempt(challenge.criteria, results);
  }, [challenge.criteria, draft.results]);
  const answered = Object.keys(draft.results).length;

  const error = submit.error instanceof ApiError ? submit.error : null;
  const rubricChanged = error?.code === 'VALIDATION_ERROR' && /updated/.test(error.message);

  return (
    <form
      noValidate
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (missing.length || !isAuthenticated) return;
        submit.mutate(toAttemptInput(challenge, draft), {
          onSuccess: (result) => {
            saveDebrief(challenge.slug, null);
            saveFlight(challenge.slug, null);
            setDraft(emptyDebrief(challenge.version));
            onSubmitted(result);
          },
        });
      }}
    >
      <Callout type="note" title="Be honest with yourself">
        Scores are self-assessed: the only person you can cheat is yourself. If you can, check your
        flight with the sim&apos;s replay before you answer.
      </Callout>

      <fieldset className="flex flex-col gap-6">
        <legend className="mb-2 text-2xl font-bold">How did it go?</legend>
        {challenge.criteria.map((c) => (
          <RadioGroup
            key={c.id}
            label={
              <>
                {c.label}
                <span className="font-normal text-muted"> · weight ×{c.weight}</span>
              </>
            }
            required={c.required}
            orientation={c.kind === 'binary' ? 'horizontal' : 'vertical'}
            options={criterionOptions(c)}
            value={draft.results[c.id] ?? ''}
            onValueChange={(value) =>
              change({ results: { ...draft.results, [c.id]: value as CriterionResultValue } })
            }
          />
        ))}
      </fieldset>

      {challenge.planningFields.length > 0 && (
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-2 text-xl font-bold">Your planning</legend>
          {challenge.planningFields.map((f) => (
            <FormField key={f.id} label={f.label}>
              <Input
                inputMode={f.type === 'number' ? 'decimal' : undefined}
                value={draft.planning[f.id] ?? ''}
                maxLength={200}
                onChange={(e) =>
                  change({ planning: { ...draft.planning, [f.id]: e.target.value } })
                }
              />
            </FormField>
          ))}
        </fieldset>
      )}

      {challenge.debriefQuestions.length > 0 && (
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-2 text-xl font-bold">Reflect</legend>
          {challenge.debriefQuestions.map((q) => (
            <FormField
              key={q.id}
              label={q.prompt}
              hint={`Optional, up to ${REFLECTION_MAX.toLocaleString('en-US')} characters.`}
            >
              <Textarea
                rows={3}
                maxLength={REFLECTION_MAX}
                value={draft.reflections[q.id] ?? ''}
                onChange={(e) =>
                  change({ reflections: { ...draft.reflections, [q.id]: e.target.value } })
                }
              />
            </FormField>
          ))}
        </fieldset>
      )}

      <FormField
        label="Notes"
        hint={`${draft.notes.length.toLocaleString('en-US')} of ${NOTES_MAX.toLocaleString('en-US')} characters. Only you can see them.`}
      >
        <Textarea
          rows={4}
          maxLength={NOTES_MAX}
          value={draft.notes}
          onChange={(e) => change({ notes: e.target.value })}
        />
      </FormField>

      <Checkbox
        label="I paused the sim during the challenge"
        checked={draft.paused}
        onChange={(e) => change({ paused: e.target.checked })}
      />

      <section
        aria-labelledby={`${statusId}-preview`}
        className="rounded-card border border-border bg-surface-2 p-4"
      >
        <h2 id={`${statusId}-preview`} className="font-semibold">
          Score preview
        </h2>
        <div role="status" className="mt-2 flex flex-wrap items-center gap-3">
          <TierBadge tier={preview.tier} />
          <span className="font-mono text-2xl font-bold">{preview.percentage}%</span>
          <span className="text-muted">
            {preview.points} of {preview.maxPoints} points
            {answered < challenge.criteria.length && ' (unanswered criteria count as Not met)'}
          </span>
        </div>
      </section>

      {error && (
        <Callout type="safety" title={rubricChanged ? 'This challenge was updated' : 'Not saved'}>
          <p>
            {rubricChanged
              ? 'Refresh the page to load the new rubric, then answer again.'
              : error.message}
          </p>
          {rubricChanged && (
            <Button variant="secondary" className="mt-2" onClick={() => window.location.reload()}>
              Refresh
            </Button>
          )}
        </Callout>
      )}

      {isAuthenticated ? (
        <div className="flex flex-col gap-2">
          <div>
            <Button
              type="submit"
              size="lg"
              disabled={missing.length > 0 || submit.isPending}
              aria-describedby={missing.length ? statusId : undefined}
            >
              <Send aria-hidden className="size-5" />
              {submit.isPending ? 'Saving…' : 'Submit debrief'}
            </Button>
          </div>
          {missing.length > 0 && (
            <p id={statusId} className="text-sm text-muted">
              Answer the required criteria to submit: {missing.map((c) => c.label).join('; ')}.
            </p>
          )}
        </div>
      ) : (
        <Callout type="tip" title="Log in to save your result">
          <p>Your answers are kept on this device while you log in or sign up.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button asChild>
              <Link unstyled to={`/login?returnTo=${encodeURIComponent(returnTo)}`}>
                <LogIn aria-hidden className="size-4" /> Log in
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link unstyled to={`/signup?returnTo=${encodeURIComponent(returnTo)}`}>
                Sign up free
              </Link>
            </Button>
          </div>
        </Callout>
      )}
    </form>
  );
}
