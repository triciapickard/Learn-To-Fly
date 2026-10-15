import { X } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/Badge';
import { ExternalLink, Link } from '@/components/Link';
import { APP_VERSION, LIVE_MODULES, RELEASE_LABEL, RELEASE_STAGE } from '@/lib/release';
import { GITHUB_URL } from './navigation';

const STORAGE_KEY = 'ltf-beta-notice-dismissed';

/** True when the reader dismissed the notice for this version; a new version shows it again. */
function wasDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === APP_VERSION;
  } catch {
    return false;
  }
}

function remember() {
  try {
    localStorage.setItem(STORAGE_KEY, APP_VERSION);
  } catch {
    // Private windows and blocked storage: the notice simply shows again next time.
  }
}

/**
 * The early-beta notice above the header (v1.md D-26): which modules are live, where the
 * rest are, and where to report problems. Dismissible per version; it never covers content.
 */
export function BetaBanner() {
  const [open, setOpen] = useState(() => !wasDismissed());
  if (!open) return null;
  const dismiss = () => {
    remember();
    setOpen(false);
  };
  return (
    <section
      aria-label="Beta notice"
      className="border-b border-line bg-surface-sunken print:hidden"
    >
      {/* Phones: badge and dismiss on one row, the text below; wider: one row. */}
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-2.5 text-sm leading-5 text-ink-2 sm:flex-nowrap">
        <Badge variant="accent" className="shrink-0">
          {RELEASE_STAGE} {RELEASE_LABEL}
        </Badge>
        <p className="order-3 min-w-0 basis-full sm:order-none sm:flex-1 sm:basis-auto">
          {LIVE_MODULES} are live. More modules arrive as each one is verified in the sim.{' '}
          <Link to="/roadmap" quiet className="whitespace-nowrap">
            What is coming
          </Link>
          {' · '}
          <ExternalLink href={`${GITHUB_URL}/issues`} quiet className="whitespace-nowrap">
            Report a problem
          </ExternalLink>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss the beta notice"
          className="-my-2 -mr-2 ml-auto flex size-9 shrink-0 items-center justify-center rounded-md text-ink-2 hover:bg-surface hover:text-ink sm:ml-0"
        >
          <X aria-hidden className="size-4" strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}
