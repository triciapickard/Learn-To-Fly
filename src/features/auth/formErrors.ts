import type { FieldErrors, FieldValues, Path, UseFormSetError } from 'react-hook-form';
import type { SummaryError } from '@/components/ErrorSummary';
import { ApiError } from '@/lib/apiClient';

/** Turns react-hook-form errors into error-summary entries (fields in form order). */
export function summaryFromFieldErrors<T extends FieldValues>(
  errors: FieldErrors<T>,
  order: Path<T>[],
  idPrefix: string,
): SummaryError[] {
  return order.flatMap((name) => {
    const message = errors[name]?.message;
    return typeof message === 'string' ? [{ fieldId: `${idPrefix}-${name}`, message }] : [];
  });
}

/**
 * Maps a server validation error onto form fields (Section 31.6). Returns a form-level
 * message for anything that isn't a known field.
 */
export function applyServerErrors<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
  fields: Path<T>[],
): string | null {
  if (!(error instanceof ApiError)) return 'Something went wrong. Please try again.';
  let mapped = false;
  for (const detail of error.details) {
    if ((fields as string[]).includes(detail.path)) {
      setError(detail.path as Path<T>, { type: 'server', message: detail.message });
      mapped = true;
    }
  }
  return mapped ? null : error.message;
}
