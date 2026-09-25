import { http, HttpResponse } from 'msw';
import { afterEach, describe, expect, it } from 'vitest';
import { server } from '@/test/server';
import { ApiError, api, setCsrfToken } from './apiClient';

afterEach(() => setCsrfToken(null));

describe('apiClient', () => {
  it('returns parsed JSON on success', async () => {
    server.use(http.get('/api/v1/things', () => HttpResponse.json({ ok: true })));
    await expect(api.get('/things')).resolves.toEqual({ ok: true });
  });

  it('builds query strings and skips empty values', async () => {
    let seen = '';
    server.use(
      http.get('/api/v1/things', ({ request }) => {
        seen = new URL(request.url).search;
        return HttpResponse.json([]);
      }),
    );
    await api.get('/things', { query: { module: 'm2', type: '', difficulty: 3 } });
    expect(seen).toBe('?module=m2&difficulty=3');
  });

  it('sends JSON and the CSRF token on mutations', async () => {
    let headers: Headers | undefined;
    let body: unknown;
    server.use(
      http.post('/api/v1/things', async ({ request }) => {
        headers = request.headers;
        body = await request.json();
        return new HttpResponse(null, { status: 204 });
      }),
    );
    setCsrfToken('token-123');
    await expect(api.post('/things', { a: 1 })).resolves.toBeUndefined();
    expect(headers?.get('x-csrf-token')).toBe('token-123');
    expect(headers?.get('content-type')).toBe('application/json');
    expect(body).toEqual({ a: 1 });
  });

  it('throws ApiError with the server error shape', async () => {
    server.use(
      http.post('/api/v1/things', () =>
        HttpResponse.json(
          {
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Some fields are invalid.',
              details: [{ path: 'email', message: 'Invalid email' }],
              requestId: 'req-1',
            },
          },
          { status: 400 },
        ),
      ),
    );
    const error = await api.post('/things', {}).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(ApiError);
    expect(error).toMatchObject({
      status: 400,
      code: 'VALIDATION_ERROR',
      details: [{ path: 'email', message: 'Invalid email' }],
      requestId: 'req-1',
    });
  });

  it('throws a generic ApiError for non-JSON failures', async () => {
    server.use(http.get('/api/v1/things', () => new HttpResponse('oops', { status: 502 })));
    await expect(api.get('/things')).rejects.toMatchObject({ status: 502, code: 'INTERNAL' });
  });

  it('throws NETWORK_ERROR when the request fails', async () => {
    server.use(http.get('/api/v1/things', () => HttpResponse.error()));
    await expect(api.get('/things')).rejects.toMatchObject({ code: 'NETWORK_ERROR' });
  });
});
