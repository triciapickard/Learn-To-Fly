import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { DEFAULT_DESCRIPTION, formatPageTitle, PAGE_META } from '@shared/seo';

export { formatPageTitle };

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/**
 * Sets a unique document title, "Page title · Learn-To-Fly" (Section 22.1), and keeps the
 * description, Open Graph tags and canonical URL in step when navigating (step 11.18).
 */
export function usePageTitle(title?: string, description?: string): void {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = formatPageTitle(title);
    const text = description ?? PAGE_META[pathname]?.description ?? DEFAULT_DESCRIPTION;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', text);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', text);
    const url = `${window.location.origin}${pathname}`;
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, pathname]);
}
