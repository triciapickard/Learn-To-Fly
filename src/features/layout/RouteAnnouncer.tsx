import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

/**
 * On client-side navigation, moves focus to the page's h1 and announces the new title
 * (Section 22.1). Skips the first load so browsers keep their normal behaviour.
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
    const heading = document.querySelector<HTMLElement>('main h1');
    const target = heading ?? document.getElementById('main');
    if (target) {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
    // Let the page set its title first.
    const id = setTimeout(() => setMessage(document.title), 50);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}
