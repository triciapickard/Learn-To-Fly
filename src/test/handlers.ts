import type { RequestHandler } from 'msw';

/** Default MSW handlers for client tests. Tests add their own with `server.use(...)`. */
export const handlers: RequestHandler[] = [];
