import { ERROR_CODES, type ErrorCode, type ErrorDetail } from '@shared/errors.js';

/** An expected error with an HTTP status and a stable API error code (Section 34.1). */
export class HttpError extends Error {
  public readonly status: number;

  constructor(
    public readonly code: ErrorCode,
    message: string,
    public readonly details?: ErrorDetail[],
    status?: number,
  ) {
    super(message);
    this.name = 'HttpError';
    this.status = status ?? ERROR_CODES[code];
  }

  static badRequest(message: string, details?: ErrorDetail[]) {
    return new HttpError('VALIDATION_ERROR', message, details);
  }
  static unauthenticated(message = 'You need to log in to do that.') {
    return new HttpError('UNAUTHENTICATED', message);
  }
  static forbidden(message = 'You are not allowed to do that.') {
    return new HttpError('FORBIDDEN', message);
  }
  static notFound(message = 'Not found.') {
    return new HttpError('NOT_FOUND', message);
  }
  static conflict(message: string) {
    return new HttpError('CONFLICT', message);
  }
}
