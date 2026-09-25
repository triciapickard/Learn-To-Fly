import { Outlet, ScrollRestoration } from 'react-router';
import { Footer } from '@/features/layout/Footer';
import { Header } from '@/features/layout/Header';
import { RouteAnnouncer } from '@/features/layout/RouteAnnouncer';
import { SkipLink } from '@/features/layout/SkipLink';

/** Header, footer, skip link and `<main id="main">` for most pages (Section 31.2). */
export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <RouteAnnouncer />
      <ScrollRestoration />
    </div>
  );
}
