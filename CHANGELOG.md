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
- Phase 4: authentication — email/password accounts with argon2id, MongoDB-backed
  sessions (30-day "remember me"), CSRF synchroniser tokens, auth rate limits,
  common-password check, change password (revokes other sessions), profile and
  preference updates, data export and account deletion; sign-up and log-in pages,
  header account menu, protected routes, account page; Render blueprint.
- Phase 5: content pipeline — Zod content schemas, `content/` seed data (aircraft,
  9 modules, presets, 96 resources, 13 airports, 179 glossary terms, 16 checklists),
  reference lesson L1.4 and challenge C2.1 (drafts), Markdown lesson parser with
  directives/tokens/links, validator with cross-reference rules, idempotent seeder with
  content releases and draft previews, public content API with ETag caching, CI content
  job, `content/README.md` authoring guide.
- Phase 6 (part 1): curriculum map and module pages, lesson player (Markdown, callouts,
  images, click-to-load video, quizzes of four types, scroll-spy sections, key-number
  rail, Go deeper, Fly it, previous/next), widget framework, W3 Airspeed Indicator and
  W16 Checklist Runner (Milestone M-B).
- Phase 6 (part 2): W1 Control Surfaces Explorer, W6 Turn Coordinator & Slip Ball, W14
  Bank Angle, Load Factor and Stall Speed; turn and load-factor maths in
  `shared/aviation/` (Appendix G.5–G.6); development-only `/dev/widgets` gallery.
