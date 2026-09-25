import { useEffect, useRef } from 'react';

export interface SummaryError {
  /** The id of the field, used for the jump link. Omit for form-level errors. */
  fieldId?: string;
  message: string;
}

/**
 * Error summary shown above a form after a failed submit. Receives focus so screen reader
 * and keyboard users land on it (Section 20.11, 22.1).
 */
export function ErrorSummary({
  errors,
  title = 'There is a problem',
  focusKey,
}: {
  errors: SummaryError[];
  title?: string;
  /** Change this value to move focus to the summary again (e.g. a submit counter). */
  focusKey?: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (errors.length > 0) ref.current?.focus();
  }, [errors.length, focusKey]);
  if (errors.length === 0) return null;
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      aria-labelledby="error-summary-title"
      className="rounded-card border-2 border-danger bg-danger-soft p-4"
    >
      <h2 id="error-summary-title" className="font-semibold">
        {title}
      </h2>
      <ul className="mt-2 flex list-disc flex-col gap-1 pl-5">
        {errors.map((error) => (
          <li key={`${error.fieldId ?? 'form'}-${error.message}`}>
            {error.fieldId ? (
              <a href={`#${error.fieldId}`} className="font-medium text-danger underline">
                {error.message}
              </a>
            ) : (
              <span className="text-danger">{error.message}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
