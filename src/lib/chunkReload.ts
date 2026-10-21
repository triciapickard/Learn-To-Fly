/**
 * Recovery from stale or failed lazy chunk loads (Sentry JAVASCRIPT-REACT-3).
 *
 * After a deploy the old hashed assets disappear, so a tab still running the previous
 * index.html fails to import the next route chunk. A single full-page reload fetches the
 * new index.html and fixes it. A sessionStorage timestamp stops this ever looping.
 */

const STORAGE_KEY = 'ltf:chunk-reload-at';
/** Do not reload again within this window, so a genuinely broken chunk cannot loop. */
export const CHUNK_RELOAD_WINDOW_MS = 60_000;

const CHUNK_ERROR_PATTERNS = [
  /failed to fetch dynamically imported module/i, // Chrome, Safari
  /error loading dynamically imported module/i, // Firefox
  /importing a module script failed/i, // Safari
  /unable to preload css/i, // Vite CSS preload
];

/** True for the errors browsers throw when a dynamic import cannot be fetched. */
export function isChunkLoadError(error: unknown): boolean {
  const message =
    error instanceof Error ? error.message : typeof error === 'string' ? error : undefined;
  return message !== undefined && CHUNK_ERROR_PATTERNS.some((p) => p.test(message));
}

/**
 * Reloads the page once per guard window. Returns true if a reload was started, false if
 * one already happened recently (or storage is unavailable, where reloading could loop).
 */
export function reloadOnce(
  now: number = Date.now(),
  reload: () => void = () => window.location.reload(),
  storage?: Pick<Storage, 'getItem' | 'setItem'>,
): boolean {
  try {
    const store = storage ?? window.sessionStorage;
    const last = Number(store.getItem(STORAGE_KEY));
    if (Number.isFinite(last) && last > 0 && now - last < CHUNK_RELOAD_WINDOW_MS) return false;
    store.setItem(STORAGE_KEY, String(now));
  } catch {
    return false;
  }
  reload();
  return true;
}

/** Reloads once if `error` is a chunk-load failure. Returns true if a reload started. */
export function recoverFromChunkError(
  error: unknown,
  reload?: () => void,
  storage?: Pick<Storage, 'getItem' | 'setItem'>,
  now?: number,
): boolean {
  return isChunkLoadError(error) && reloadOnce(now, reload, storage);
}

/** Handles Vite's `vite:preloadError` (fired when a chunk's preload fails). */
export function installChunkReloadHandler(): void {
  window.addEventListener('vite:preloadError', (event) => {
    if (reloadOnce()) event.preventDefault();
  });
}
