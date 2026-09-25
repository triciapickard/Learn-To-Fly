import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';
import { server } from './server';

// jsdom has no matchMedia; default to "light, no reduced motion".
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

// Radix primitives use ResizeObserver and pointer capture, which jsdom lacks.
globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
Element.prototype.hasPointerCapture ??= () => false;
Element.prototype.releasePointerCapture ??= () => undefined;
Element.prototype.scrollIntoView ??= () => undefined;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Components must not log warnings or errors (step 3.18): fail the test if they do.
beforeEach(() => {
  for (const method of ['error', 'warn'] as const) {
    vi.spyOn(console, method).mockImplementation((...args: unknown[]) => {
      throw new Error(`console.${method} called: ${args.map(String).join(' ')}`);
    });
  }
});
afterEach(() => {
  vi.restoreAllMocks();
  server.resetHandlers();
  cleanup();
  localStorage.clear();
  sessionStorage.clear();
});
afterAll(() => server.close());
