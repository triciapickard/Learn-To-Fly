import { Outlet, ScrollRestoration } from 'react-router';
import { RouteAnnouncer } from '@/features/layout/RouteAnnouncer';

/** Minimal, large-type layout for a second screen. No header or footer (Section 20.7). */
export default function FlyModeLayout() {
  return (
    <div className="min-h-dvh text-xl">
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-6 focus:outline-none">
        <Outlet />
      </main>
      <RouteAnnouncer />
      <ScrollRestoration />
    </div>
  );
}
