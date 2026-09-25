import type { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';
import type { Logger } from 'pino';
import { ZodError } from 'zod';
import {
  ERROR_CODES,
  type ApiErrorBody,
  type ErrorCode,
  type ErrorDetail,
} from '@shared/errors.js';
import { HttpError } from '../utils/HttpError.js';

interface NormalisedError {
  status: number;
  code: ErrorCode;
  message: string;
  details?: ErrorDetail[];
}

function normalise(err: unknown, isProduction: boolean): NormalisedError {
  if (err instanceof HttpError) {
    return { status: err.status, code: err.code, message: err.message, details: err.details };
  }
  if (err instanceof ZodError) {
    return {
      status: 400,
      code: 'VALIDATION_ERROR',
      message: 'Some fields are invalid.',
      details: err.issues.map((issue) => ({
        path: issue.path.map(String).join('.'),
        message: issue.message,
      })),
    };
  }
  if (err instanceof mongoose.Error.CastError) {
    return { status: 404, code: 'NOT_FOUND', message: 'Not found.' };
  }
  if (err instanceof mongoose.Error.ValidationError) {
    return {
      status: 400,
      code: 'VALIDATION_ERROR',
      message: 'Some fields are invalid.',
      details: Object.values(err.errors).map((e) => ({ path: e.path, message: e.message })),
    };
  }
  if (typeof err === 'object' && err !== null) {
    const e = err as { code?: unknown; type?: unknown; status?: unknown };
    if (e.code === 11000) {
      return { status: 409, code: 'CONFLICT', message: 'That record already exists.' };
    }
    // body-parser errors
    if (e.type === 'entity.parse.failed') {
      return {
        status: 400,
        code: 'VALIDATION_ERROR',
        message: 'The request body is not valid JSON.',
      };
    }
    if (e.type === 'entity.too.large') {
      return { status: 413, code: 'PAYLOAD_TOO_LARGE', message: 'The request body is too large.' };
    }
    // Other http-errors style errors (e.g. serve-static 404s) carry a 4xx status.
    if (typeof e.status === 'number' && e.status >= 400 && e.status < 500) {
      const code = (Object.entries(ERROR_CODES).find(([, status]) => status === e.status)?.[0] ??
        'VALIDATION_ERROR') as ErrorCode;
      const message = code === 'NOT_FOUND' ? 'Not found.' : 'The request could not be processed.';
      return { status: e.status, code, message };
    }
  }
  return {
    status: 500,
    code: 'INTERNAL',
    message: isProduction
      ? 'Something went wrong on our side. Please try again.'
      : err instanceof Error
        ? err.message
        : String(err),
  };
}

/** Converts every error into the single API error shape (Section 29 and 34.1). */
export function errorHandler(logger: Logger, isProduction: boolean): ErrorRequestHandler {
  return (err, req, res, next) => {
    if (res.headersSent) return next(err);
    const normalised = normalise(err, isProduction);
    if (normalised.status >= 500) {
      logger.error({ err, requestId: req.id }, 'Unhandled error');
    }
    const body: ApiErrorBody & { error: { stack?: string } } = {
      error: {
        code: normalised.code,
        message: normalised.message,
        ...(normalised.details ? { details: normalised.details } : {}),
        requestId: String(req.id),
      },
    };
    if (!isProduction && normalised.status >= 500 && err instanceof Error) {
      body.error.stack = err.stack;
    }
    res.status(normalised.status).json(body);
  };
}
