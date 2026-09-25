import { useEffect } from 'react';
import { APP_NAME } from '@shared/constants';

export function formatPageTitle(title?: string): string {
  return title
    ? `${title} · ${APP_NAME}`
    : `${APP_NAME} — Learn to fly the Cessna 172 in MSFS 2024`;
}

/** Sets a unique document title: "Page title · Learn-To-Fly" (Section 22.1). */
export function usePageTitle(title?: string): void {
  useEffect(() => {
    document.title = formatPageTitle(title);
  }, [title]);
}
