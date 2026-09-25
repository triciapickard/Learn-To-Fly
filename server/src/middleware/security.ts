import helmet from 'helmet';

export interface SecurityOptions {
  /** Hashes of index.html's inline scripts (see utils/csp.ts). */
  scriptHashes?: string[];
  /** Adds upgrade-insecure-requests; off locally, where the app runs over plain HTTP. */
  isProduction?: boolean;
}

/**
 * Security headers, with the final, enforced CSP (Section 32.1, step 11.11). Fonts are
 * self-hosted, so no Google Fonts origins. Styles keep 'unsafe-inline' for the style
 * attributes React and Radix set on elements.
 */
export function securityHeaders({ scriptHashes = [], isProduction = false }: SecurityOptions = {}) {
  return helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", ...scriptHashes],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https://i.ytimg.com'],
        frameSrc: ['https://www.youtube-nocookie.com'],
        connectSrc: ["'self'"],
        manifestSrc: ["'self'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        objectSrc: ["'none'"],
        ...(isProduction ? { upgradeInsecureRequests: [] } : {}),
      },
    },
    strictTransportSecurity: isProduction
      ? { maxAge: 63_072_000, includeSubDomains: true, preload: false }
      : false,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  });
}
