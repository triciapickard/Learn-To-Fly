import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
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

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
