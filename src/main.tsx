import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { config as zodConfig } from 'zod/v4/core';
import App from './App';
import { createRouter } from './router';
import './styles/index.css';

// Zod probes `new Function` to decide whether to JIT; under our CSP (no 'unsafe-eval') that
// probe is reported as a violation even though Zod catches it (step 11.11).
zodConfig({ jitless: true });

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found');

const router = createRouter();

/** Resolves once the router has loaded the current route's lazy code. */
function routerReady(): Promise<void> {
  if (router.state.initialized) return Promise.resolve();
  return new Promise((resolve) => {
    const unsubscribe = router.subscribe((state) => {
      if (!state.initialized) return;
      unsubscribe();
      resolve();
    });
  });
}

// A prerendered page (the landing page, step 11.9) is hydrated once its route code has
// loaded, so React adopts the existing markup instead of replacing it or flashing a loading
// screen. Every other page renders from scratch.
const app = (
  <StrictMode>
    <App router={router} />
  </StrictMode>
);
if (rootElement.hasChildNodes()) void routerReady().then(() => hydrateRoot(rootElement, app));
else createRoot(rootElement).render(app);
