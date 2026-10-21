import { describe, expect, it, vi } from 'vitest';
import {
  CHUNK_RELOAD_WINDOW_MS,
  isChunkLoadError,
  recoverFromChunkError,
  reloadOnce,
} from './chunkReload';

function memoryStorage() {
  const data = new Map<string, string>();
  return {
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => void data.set(k, v),
  };
}

describe('isChunkLoadError', () => {
  it.each([
    'Failed to fetch dynamically imported module: https://learntoflysim.com/assets/RootLayout-D_Ga2WM_.js',
    'error loading dynamically imported module: /assets/x.js',
    'Importing a module script failed.',
  ])('detects %s', (message) => {
    expect(isChunkLoadError(new TypeError(message))).toBe(true);
  });

  it('ignores unrelated errors', () => {
    expect(isChunkLoadError(new Error('boom'))).toBe(false);
    expect(isChunkLoadError(undefined)).toBe(false);
  });
});

describe('recoverFromChunkError', () => {
  const chunkError = new TypeError('Failed to fetch dynamically imported module: /a.js');

  it('reloads once, then not again within the guard window', () => {
    const reload = vi.fn();
    const storage = memoryStorage();
    expect(recoverFromChunkError(chunkError, reload, storage, 1_000)).toBe(true);
    expect(recoverFromChunkError(chunkError, reload, storage, 1_000 + 5_000)).toBe(false);
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it('reloads again after the guard window has passed', () => {
    const reload = vi.fn();
    const storage = memoryStorage();
    recoverFromChunkError(chunkError, reload, storage, 1_000);
    expect(recoverFromChunkError(chunkError, reload, storage, 1_000 + CHUNK_RELOAD_WINDOW_MS)).toBe(
      true,
    );
    expect(reload).toHaveBeenCalledTimes(2);
  });

  it('does not reload for unrelated errors', () => {
    const reload = vi.fn();
    expect(recoverFromChunkError(new Error('boom'), reload, memoryStorage())).toBe(false);
    expect(reload).not.toHaveBeenCalled();
  });

  it('does not reload when storage throws (cannot guard against loops)', () => {
    const reload = vi.fn();
    const storage = {
      getItem: () => {
        throw new Error('denied');
      },
      setItem: () => undefined,
    };
    expect(reloadOnce(1_000, reload, storage)).toBe(false);
    expect(reload).not.toHaveBeenCalled();
  });
});
