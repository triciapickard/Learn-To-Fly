# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/) (plan.md Appendix F.4).

## [Unreleased]

### Added

- Phase 1: repository and tooling — Vite + React + TypeScript client, Express 5 +
  TypeScript server, `shared/` folder, Tailwind CSS v4, ESLint, Prettier, Husky +
  lint-staged, Vitest (client and node projects), GitHub Actions CI, Dependabot, PR
  template.
- Phase 2: backend foundation — Zod-validated environment, MongoDB connection with retry
  and health ping, request IDs, pino logging with redaction, helmet (report-only CSP),
  JSON-only mutating routes with a 100 kb limit, compression, rate limits, Zod
  `validate` middleware, `HttpError` + single error shape, graceful shutdown, production
  static serving with SPA fallback, `toJSON` model plugin, mongodb-memory-server tests.
- Phase 3: frontend foundation — design tokens (light/dark, AA contrast), theme provider
  with no-flash pre-paint script, React Router 7 routes for every page (lazy), layouts
  with skip link and focus management, TanStack Query + API client + MSW, 30 core
  components with tests, `/dev/components` showcase, landing page, About, Disclaimer,
  Privacy, Terms and Roadmap pages, logo, favicons and Open Graph image.
