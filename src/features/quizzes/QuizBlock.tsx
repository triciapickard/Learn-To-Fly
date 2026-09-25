import { ArrowDown, ArrowUp, CheckCircle2, CircleHelp, XCircle } from 'lucide-react';
import { useId, useMemo, useState } from 'react';
import { Button } from '@/components/Button';
import { MarkdownContent } from '@/features/lessons/MarkdownContent';
import { cn } from '@/lib/cn';
import { checkQuizAnswer, shuffledOrder, type QuizAnswer } from '@shared/quiz';
import type { QuizBlock as QuizBlockData } from '@shared/schemas/content';
import { getStoredAnswer, storeAnswer } from './quizStore';

export interface QuizAnswerEvent {
  questionId: string;
  answer: QuizAnswer;
  correct: boolean;
}

/** A knowledge check inside a lesson (Section 17). Unlimited retries; low stakes. */
export function QuizBlock({
  quiz,
  onAnswer,
}: {
  quiz: QuizBlockData;
  onAnswer?: (event: QuizAnswerEvent) => void;
}) {
  const id = useId();
  const stored = getStoredAnswer(quiz.id);
  const initialOrder = useMemo(
    () =>
      quiz.quizType === 'order'
        ? shuffledOrder(
            quiz.options.map((o) => o.id),
            quiz.id,
          )
        : [],
    [quiz],
  );
  const [single, setSingle] = useState<string>(
    typeof stored?.lastAnswer === 'string' ? stored.lastAnswer : '',
  );
  const [multi, setMulti] = useState<string[]>(
    Array.isArray(stored?.lastAnswer) && quiz.quizType === 'multi' ? stored.lastAnswer : [],
  );
  const [numeric, setNumeric] = useState<string>(
    typeof stored?.lastAnswer === 'number' ? String(stored.lastAnswer) : '',
  );
  const [order, setOrder] = useState<string[]>(
    Array.isArray(stored?.lastAnswer) && quiz.quizType === 'order'
      ? stored.lastAnswer
      : initialOrder,
  );
  const [result, setResult] = useState<boolean | null>(stored ? stored.correct : null);

  const optionText = (optionId: string) =>
    'options' in quiz ? (quiz.options.find((o) => o.id === optionId)?.text ?? '') : '';

  const currentAnswer = (): QuizAnswer | null => {
    switch (quiz.quizType) {
      case 'single':
        return single || null;
      case 'multi':
        return multi.length ? multi : null;
      case 'numeric':
        return numeric.trim() === '' ? null : Number(numeric);
      case 'order':
        return order;
    }
  };

  const check = () => {
    const answer = currentAnswer();
    if (answer === null) return;
    const correct = checkQuizAnswer(quiz, answer);
    storeAnswer(quiz.id, answer, correct);
    setResult(correct);
    onAnswer?.({ questionId: quiz.id, answer, correct });
  };

  const move = (index: number, delta: number) => {
    const next = [...order];
    const target = index + delta;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target]!, next[index]!];
    setOrder(next);
    setResult(null);
  };

  const legendId = `${id}-legend`;
  const feedbackId = `${id}-feedback`;

  return (
    <section
      aria-labelledby={legendId}
      className="my-8 rounded-card border border-border bg-surface p-5 shadow-1"
    >
      <p className="flex items-center gap-2 text-sm font-semibold text-primary">
        <CircleHelp aria-hidden className="size-4" /> Quick check
      </p>
      <fieldset className="mt-2" aria-describedby={result !== null ? feedbackId : undefined}>
        <legend id={legendId} className="text-lg font-semibold">
          <MarkdownContent markdown={quiz.prompt} className="[&_p]:my-0" />
        </legend>

        {(quiz.quizType === 'single' || quiz.quizType === 'multi') && (
          <div className="mt-3 flex flex-col gap-2">
            {quiz.options.map((option) => {
              const inputId = `${id}-${option.id}`;
              const checked =
                quiz.quizType === 'single' ? single === option.id : multi.includes(option.id);
              return (
                <label
                  key={option.id}
                  htmlFor={inputId}
                  className={cn(
                    'flex min-h-11 cursor-pointer items-center gap-3 rounded-control border px-3 py-2',
                    checked ? 'border-primary bg-primary-soft' : 'border-border hover:bg-surface-2',
                  )}
                >
                  <input
                    id={inputId}
                    type={quiz.quizType === 'single' ? 'radio' : 'checkbox'}
                    name={`${id}-options`}
                    value={option.id}
                    checked={checked}
                    onChange={() => {
                      setResult(null);
                      if (quiz.quizType === 'single') setSingle(option.id);
                      else
                        setMulti((m) =>
                          m.includes(option.id)
                            ? m.filter((x) => x !== option.id)
                            : [...m, option.id],
                        );
                    }}
                    className="size-5 shrink-0 accent-primary"
                  />
                  <MarkdownContent markdown={option.text} inline />
                </label>
              );
            })}
            {quiz.quizType === 'multi' && (
              <p className="text-sm text-muted">Select all that apply.</p>
            )}
          </div>
        )}

        {quiz.quizType === 'numeric' && (
          <div className="mt-3 flex items-center gap-2">
            <label htmlFor={`${id}-number`} className="sr-only">
              Your answer{quiz.unit ? ` in ${quiz.unit}` : ''}
            </label>
            <input
              id={`${id}-number`}
              type="number"
              inputMode="decimal"
              step="any"
              value={numeric}
              onChange={(e) => {
                setNumeric(e.target.value);
                setResult(null);
              }}
              className="min-h-11 w-32 rounded-control border border-border-strong bg-surface px-3 font-mono"
            />
            {quiz.unit && <span className="text-muted">{quiz.unit}</span>}
          </div>
        )}

        {quiz.quizType === 'order' && (
          <ol className="mt-3 flex flex-col gap-2">
            {order.map((optionId, index) => (
              <li
                key={optionId}
                className="flex min-h-11 items-center gap-2 rounded-control border border-border px-3 py-1"
              >
                <span className="w-6 font-mono text-muted">{index + 1}.</span>
                <MarkdownContent markdown={optionText(optionId)} inline className="flex-1" />
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label={`Move "${optionText(optionId)}" up`}
                  disabled={index === 0}
                  onClick={() => move(index, -1)}
                >
                  <ArrowUp aria-hidden className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label={`Move "${optionText(optionId)}" down`}
                  disabled={index === order.length - 1}
                  onClick={() => move(index, 1)}
                >
                  <ArrowDown aria-hidden className="size-4" />
                </Button>
              </li>
            ))}
          </ol>
        )}
      </fieldset>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button onClick={check} disabled={currentAnswer() === null}>
          Check answer
        </Button>
      </div>

      <div id={feedbackId} aria-live="polite">
        {result !== null && (
          <div
            className={cn(
              'mt-4 rounded-control border-l-4 p-3',
              result ? 'border-success bg-success-soft' : 'border-danger bg-danger-soft',
            )}
          >
            <p className="flex items-center gap-2 font-semibold">
              {result ? (
                <CheckCircle2 aria-hidden className="size-5 text-success" />
              ) : (
                <XCircle aria-hidden className="size-5 text-danger" />
              )}
              {result ? 'Correct!' : 'Not quite.'}
            </p>
            <MarkdownContent markdown={quiz.explanation} className="[&_p]:my-1" />
            {!result && (
              <p className="mt-1 text-sm text-muted">Change your answer and check again.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
