import { MongoStore } from 'connect-mongo';
import session, { type Store } from 'express-session';
import mongoose from 'mongoose';
import type { Env } from './env.js';

export const SESSIONS_COLLECTION = 'sessions';
/** Server-side idle timeout for browser-session ("not remembered") logins. */
export const IDLE_TIMEOUT_SECONDS = 24 * 60 * 60;
export const REMEMBER_ME_MS = 30 * 24 * 60 * 60 * 1000;

/** Session store in MongoDB. Sessions are stored as objects so they can be queried by user. */
export function createSessionStore(): Store {
  // Resolve the client once Mongoose is connected, so the app can be built before connecting.
  const clientPromise = new Promise<ReturnType<typeof mongoose.connection.getClient>>((resolve) => {
    if (mongoose.connection.readyState === mongoose.ConnectionStates.connected) {
      resolve(mongoose.connection.getClient());
    } else {
      mongoose.connection.once('open', () => resolve(mongoose.connection.getClient()));
    }
  });
  return MongoStore.create({
    clientPromise,
    collectionName: SESSIONS_COLLECTION,
    ttl: IDLE_TIMEOUT_SECONDS,
    stringify: false,
    autoRemove: 'native',
  });
}

/**
 * Cookies are `Secure` in production, except when the site is explicitly served from
 * `http://localhost` (a local production build, e.g. the demo backup in Section 58.3).
 */
export function useSecureCookies(env: Pick<Env, 'NODE_ENV' | 'PUBLIC_SITE_URL'>): boolean {
  if (env.NODE_ENV !== 'production') return false;
  if (!env.PUBLIC_SITE_URL) return true;
  const url = new URL(env.PUBLIC_SITE_URL);
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  return !(url.protocol === 'http:' && local);
}

/** express-session configured per Section 30.1. */
export function sessionMiddleware(env: Env, store: Store = createSessionStore()) {
  return session({
    name: env.SESSION_NAME,
    secret: env.SESSION_SECRET,
    store,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      secure: useSecureCookies(env),
      sameSite: 'lax',
      path: '/',
    },
  });
}
