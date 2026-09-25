import { http, HttpResponse, type RequestHandler } from 'msw';
import type { UserDto } from '@shared/schemas/auth';

export const testUser: UserDto = {
  id: '64b000000000000000000001',
  email: 'sam@example.com',
  displayName: 'Sam Simmer',
  role: 'learner',
  preferences: { theme: 'system', cockpitVariant: 'g1000', controller: 'unknown', showBonus: true },
  createdAt: '2026-09-01T10:00:00.000Z',
};

/** Default MSW handlers: a visitor (not signed in) with a CSRF token. */
export const handlers: RequestHandler[] = [
  http.get('/api/v1/auth/me', () => HttpResponse.json({ user: null })),
  http.get('/api/v1/auth/csrf', () => HttpResponse.json({ csrfToken: 'test-csrf' })),
];

/** Handler that makes the visitor signed in as `user`. */
export const signedIn = (user: UserDto = testUser) =>
  http.get('/api/v1/auth/me', () => HttpResponse.json({ user }));
