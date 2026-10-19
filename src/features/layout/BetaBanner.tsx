import { FlaskConical, X } from 'lucide-react';
import { useState } from 'react';
import { ExternalLink, Link } from '@/components/Link';
import { BUG_REPORT_URL } from './navigation';

export const BETA_BANNER_STORAGE_KEY = 'ltf-beta-banner';

/**
 * Bump this when the notice changes enough that readers who dismissed the old one should see
 * it again. Dismissal is stored per browser (v1 Section 31.7: dismissed banners live in
 * localStorage) and only counts for the version it was dismissed at.
 */
export const BETA_BANNER_VERSION = '2026-10';

export function isBetaBannerDismissed(): boolean {
  try {
    return localStorage.getItem(BETA_BANNER_STORAGE_KEY) === BETA_BANNER_VERSION;
  } catch {
    return false;
  }
}

export function dismissBetaBanner(): void {
  try {
    localStorage.setItem(BETA_BANNER_STORAGE_KEY, BETA_BANNER_VERSION);
  } catch {
    // Storage can be unavailable (private mode); the banner still hides for this visit.
  }
}

/**
 * Site-wide public beta notice, shown above the header on every page until the reader
 * dismisses it. Caution tint with the icon in the status color; copy stays ink and the type
 * is announced as text, not only by color (Section 35.2).
 */
export function BetaBanner() {
  const [dismissed, setDismissed] = useState(isBetaBannerDismissed);
  if (dismissed) return null;

  const dismiss = () => {
    dismissBetaBanner();
    setDismissed(true);
  };
  const reportLabel = 'Report a problem';
  const report = BUG_REPORT_URL.startsWith('/') ? (
    <Link to={BUG_REPORT_URL} className="whitespace-nowrap">
      {reportLabel}
    </Link>
  ) : (
    <ExternalLink href={BUG_REPORT_URL} className="whitespace-nowrap">
      {reportLabel}
    </ExternalLink>
  );

  return (
    <div
      role="region"
      aria-label="Public beta notice"
      className="border-b border-line bg-caution-tint print:hidden"
    >
      <div className="mx-auto flex max-w-page items-start gap-3 px-4 py-2.5 text-sm leading-5">
        <FlaskConical
          aria-hidden
          className="mt-0.5 size-5 shrink-0 text-caution"
          strokeWidth={1.75}
        />
        <p className="flex-1 text-ink">
          <strong className="font-semibold">Learn to Fly is in public beta.</strong> Lessons and
          challenges are still being checked in the sim, so you may hit rough edges or content that
          changes. {report}
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss beta notice"
          className="-my-2 -mr-2 flex size-11 shrink-0 items-center justify-center rounded-md text-ink-2 transition-colors duration-150 hover:bg-surface-sunken hover:text-ink"
        >
          <X aria-hidden className="size-5" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
