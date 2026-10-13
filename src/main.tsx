// Sentry must initialise before anything else loads.
import './instrument';
import '@fontsource-variable/instrument-sans';
import '@fontsource-variable/jetbrains-mono';
import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { z } from 'zod';
import App from './App';
import './styles/index.css';

// Zod probes `new Function` to decide whether to JIT; under our CSP (no 'unsafe-eval') that
// probe is reported as a violation even though Zod catches it (step 11.11).
z.config({ jitless: true });

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found');

// React 19 error hooks report render errors to Sentry (a no-op when Sentry is off). Setting
// them replaces React's own console logging, so log here too.
const logAndReport = Sentry.reactErrorHandler((error, errorInfo) => {
  console.error(error, errorInfo.componentStack);
});

createRoot(rootElement, {
  onUncaughtError: logAndReport,
  onCaughtError: logAndReport,
  onRecoverableError: logAndReport,
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
