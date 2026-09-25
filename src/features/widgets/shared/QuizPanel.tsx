import { CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/Button';

export interface WidgetQuestion {
  id: string;
  prompt: string;
  explanation: string;
}

/**
 * Quiz-mode panel shared by widgets: shows a target, checks the widget's current value and
 * moves through the questions. Results go to `onAnswer` (step 6.17).
 */
export function QuizPanel<Q extends WidgetQuestion>({
  questions,
  check,
  onAnswer,
}: {
  questions: Q[];
  /** Returns whether the widget's current state answers the question, and a readable answer. */
  check: (question: Q) => { correct: boolean; answer: string };
  onAnswer?: (event: { questionId: string; correct: boolean; answer: string }) => void;
}) {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<{ correct: boolean } | null>(null);
  const [score, setScore] = useState(0);
  const done = index >= questions.length;
  const question = questions[index];

  if (done) {
    return (
      <div role="status" className="rounded-control bg-surface-2 p-4">
        <p className="font-semibold">
          Quiz complete: {score} of {questions.length} correct.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-2"
          onClick={() => {
            setIndex(0);
            setScore(0);
            setResult(null);
          }}
        >
          Try again
        </Button>
      </div>
    );
  }
  if (!question) return null;

  return (
    <div className="rounded-control border border-primary bg-primary-soft p-4">
      <p className="text-sm font-semibold text-primary">
        Question {index + 1} of {questions.length}
      </p>
      <p className="mt-1 font-medium">{question.prompt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {!result?.correct && (
          <Button
            size="sm"
            onClick={() => {
              const { correct, answer } = check(question);
              if (!result) onAnswer?.({ questionId: question.id, correct, answer });
              if (correct && !result) setScore((s) => s + 1);
              setResult({ correct });
            }}
          >
            Check
          </Button>
        )}
        {result && (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              setIndex((i) => i + 1);
              setResult(null);
            }}
          >
            {index + 1 < questions.length ? 'Next question' : 'Finish'}
          </Button>
        )}
      </div>
      <div aria-live="polite">
        {result && (
          <p className="mt-3 flex items-start gap-2">
            {result.correct ? (
              <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-success" />
            ) : (
              <XCircle aria-hidden className="mt-0.5 size-5 shrink-0 text-danger" />
            )}
            <span>
              <strong>{result.correct ? 'Correct. ' : 'Not quite — try again. '}</strong>
              {result.correct && question.explanation}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
