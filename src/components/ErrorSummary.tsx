import { OctagonAlert } from 'lucide-react';
import { useEffect, useRef } from 'react';

export interface SummaryError {
  /** The id of the field, used for the jump link. Omit for form-level errors. */
  fieldId?: string;
  message: string;
}

/**
 * Error summary shown above a form after a failed submit. Receives focus so screen reader
 * and keyboard users land on it (Section 20.11, 22.1). Warn-tint fill, warn icon and title.
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
      className="grid grid-cols-[20px_1fr] gap-3 rounded-md bg-warn-tint px-5 py-4"
    >
      <OctagonAlert aria-hidden className="mt-[3px] size-5 text-warn" strokeWidth={1.75} />
      <div>
        <h2 id="error-summary-title" className="font-semibold text-warn">
          {title}
        </h2>
        <ul className="mt-1 flex list-disc flex-col gap-1 pl-5 text-ink">
          {errors.map((error) => (
            <li key={`${error.fieldId ?? 'form'}-${error.message}`}>
              {error.fieldId ? (
                <a
                  href={`#${error.fieldId}`}
                  className="rounded-[2px] font-medium text-warn underline decoration-[1.5px] underline-offset-[3px]"
                >
                  {error.message}
                </a>
              ) : (
                <span>{error.message}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
