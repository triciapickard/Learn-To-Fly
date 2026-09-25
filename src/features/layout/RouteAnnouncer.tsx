import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

const WAIT_FOR_HEADING_MS = 8000;

function focusElement(el: HTMLElement) {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

/**
 * On client-side navigation, moves focus to the page's h1 and announces the new title
 * (Section 22.1). Pages that load data show a skeleton first, so focus goes to <main>
 * and then to the h1 as soon as it renders (unless the user has moved focus). Skips the
 * first load so browsers keep their normal behaviour.
 */
export function RouteAnnouncer() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState('');
  // Compare with the previous path (not a "first render" flag) so StrictMode's double
  // effect run on mount doesn't steal focus from the skip link.
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    const main = document.getElementById('main');
    const announce = () => setTimeout(() => setMessage(document.title), 50);
    const heading = document.querySelector<HTMLElement>('main h1');
    if (heading) {
      focusElement(heading);
      const id = announce();
      return () => clearTimeout(id);
    }
    if (main) focusElement(main);
    if (!main || typeof MutationObserver === 'undefined') return;

    let announceTimer: ReturnType<typeof setTimeout> | undefined;
    const observer = new MutationObserver(() => {
      const h1 = main.querySelector<HTMLElement>('h1');
      if (!h1) return;
      observer.disconnect();
      if (document.activeElement === main || document.activeElement === document.body)
        focusElement(h1);
      announceTimer = announce();
    });
    observer.observe(main, { childList: true, subtree: true });
    const giveUp = setTimeout(() => observer.disconnect(), WAIT_FOR_HEADING_MS);
    return () => {
      observer.disconnect();
      clearTimeout(giveUp);
      clearTimeout(announceTimer);
    };
  }, [pathname]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}
