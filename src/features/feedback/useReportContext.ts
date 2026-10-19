import * as Sentry from '@sentry/react';
import { useLocation } from 'react-router';
import { useAuth } from '@/features/auth/api';
import { useTheme } from '@/features/theme/ThemeContext';
import type { ReportContext } from './report';

/** Collects the non-identifying diagnostics that go with every report. */
export function useReportContext(error?: unknown): ReportContext {
  const { pathname } = useLocation();
  const { resolvedTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  return {
    path: pathname,
    release: import.meta.env.VITE_RELEASE ?? '',
    userAgent: typeof navigator === 'undefined' ? 'unknown' : navigator.userAgent,
    viewport:
      typeof window === 'undefined'
        ? { width: 0, height: 0 }
        : { width: window.innerWidth, height: window.innerHeight },
    theme: resolvedTheme,
    signedIn: isAuthenticated,
    at: new Date().toISOString(),
    errorId: error === undefined ? undefined : Sentry.lastEventId() || undefined,
    errorMessage: error instanceof Error ? `${error.name}: ${error.message}` : undefined,
  };
}
