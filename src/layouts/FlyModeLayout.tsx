import { Outlet, ScrollRestoration } from 'react-router';
import { RouteAnnouncer } from '@/features/layout/RouteAnnouncer';
import { useTheme } from '@/features/theme/ThemeContext';

/**
 * Minimal, large-type layout for a second screen. No header or footer, and dark unless
 * the reader chose the light theme (Section 20.7).
 */
export default function FlyModeLayout() {
  const { preference } = useTheme();
  return (
    <div
      data-theme={preference === 'light' ? 'light' : 'dark'}
      className="min-h-dvh bg-bg text-xl text-text"
    >
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-6 focus:outline-none">
        <Outlet />
      </main>
      <RouteAnnouncer />
      <ScrollRestoration />
    </div>
  );
}
