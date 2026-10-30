import { describe, expect, it } from 'vitest';
import indexHtml from '../index.html?raw';

// Regression: JAVASCRIPT-REACT-4 / JAVASCRIPT-REACT-5. Browser auto-translation (e.g. Chrome
// for zh-TW visitors) wraps React-owned text nodes in <font>, so React's commit phase throws
// NotFoundError on insertBefore/removeChild. The shell must opt out of translation.
describe('index.html translation opt-out', () => {
  it('sets translate="no" on the <html> element', () => {
    expect(indexHtml).toMatch(/<html\b[^>]*\btranslate="no"/);
  });

  it('includes the Google notranslate meta tag', () => {
    expect(indexHtml).toMatch(/<meta\s+name="google"\s+content="notranslate"\s*\/?>/);
  });
});
