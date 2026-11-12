import * as Sentry from '@sentry/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ApiError } from './apiClient';
import { createQueryClient, reportQueryError } from './queryClient';

vi.mock('@sentry/react', async (importOriginal) => ({
  ...(await importOriginal<typeof Sentry>()),
  captureException: vi.fn(),
}));

const capture = vi.mocked(Sentry.captureException);

beforeEach(() => capture.mockClear());
afterEach(() => vi.restoreAllMocks());

describe('createQueryClient', () => {
  it('reports failed queries and mutations to Sentry', async () => {
    const client = createQueryClient();
    const serverError = new ApiError(500, 'INTERNAL', 'x', [], undefined, 'GET /modules');
    await client
      .fetchQuery({ queryKey: ['t'], queryFn: () => Promise.reject(serverError), retry: false })
      .catch(() => undefined);
    await client
      .getMutationCache()
      .build(client, { mutationFn: () => Promise.reject(new TypeError('bug')) })
      .execute(undefined)
      .catch(() => undefined);
    expect(capture).toHaveBeenCalledTimes(2);
  });
});

describe('reportQueryError', () => {
  it('reports 5xx responses grouped by endpoint and status, with the request id', () => {
    reportQueryError(
      new ApiError(500, 'INTERNAL', 'Something went wrong.', [], 'req-9', 'GET /lessons/x'),
    );
    expect(capture).toHaveBeenCalledOnce();
    const [report, context] = capture.mock.calls[0]!;
    expect(report).toMatchObject({ name: 'ApiError', message: '500 INTERNAL from GET /lessons/x' });
    expect(context).toMatchObject({
      level: 'error',
      fingerprint: ['api-error', 'GET /lessons/x', '500'],
      tags: { 'api.endpoint': 'GET /lessons/x', 'api.status': 500, requestId: 'req-9' },
    });
  });

  it('skips 4xx responses', () => {
    for (const status of [400, 401, 403, 404, 409, 429]) {
      reportQueryError(new ApiError(status, 'VALIDATION_ERROR', 'x', [], undefined, 'POST /me'));
    }
    expect(capture).not.toHaveBeenCalled();
  });

  it('reports network failures as warnings only while the browser is online', () => {
    const online = vi.spyOn(navigator, 'onLine', 'get');
    const error = new ApiError(0, 'NETWORK_ERROR', 'offline', [], undefined, 'GET /modules');

    online.mockReturnValue(false);
    reportQueryError(error);
    expect(capture).not.toHaveBeenCalled();

    online.mockReturnValue(true);
    reportQueryError(error);
    expect(capture).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ level: 'warning' }),
    );
  });

  it('reports gateway errors without an API body as warnings, not errors', () => {
    // JAVASCRIPT-REACT-7/-8: the Vite dev proxy answers 502 while the API restarts.
    for (const status of [502, 503, 504]) {
      reportQueryError(
        new ApiError(
          status,
          'SERVICE_UNAVAILABLE',
          "Couldn't reach",
          [],
          undefined,
          'GET /auth/me',
        ),
      );
    }
    expect(capture).toHaveBeenCalledTimes(3);
    for (const [, context] of capture.mock.calls) {
      expect(context).toMatchObject({
        level: 'warning',
        tags: { 'api.code': 'SERVICE_UNAVAILABLE' },
      });
    }
  });

  it('still reports a 503 sent by the API itself as an error', () => {
    reportQueryError(new ApiError(503, 'SERVICE_UNAVAILABLE', 'Down', [], 'req-3', 'GET /health'));
    expect(capture).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        level: 'error',
        tags: expect.objectContaining({ requestId: 'req-3' }),
      }),
    );
  });

  it('reports non-API errors as they are, but not aborted requests', () => {
    reportQueryError(new DOMException('aborted', 'AbortError'));
    expect(capture).not.toHaveBeenCalled();

    const bug = new TypeError('cannot read properties of undefined');
    reportQueryError(bug);
    expect(capture).toHaveBeenCalledWith(bug);
  });
});
