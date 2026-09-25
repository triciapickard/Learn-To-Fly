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
- Phase 6 (part 3): W4 Angle of Attack & Lift (NACA 2412 section, streamlines with
  trailing-edge separation, lift curve, flaps, stall warning) and W5 Pitch & Power Trainer
  (attitude indicator, airspeed tape, vertical speed, trim and stick force, scenarios) with
  a provisional `performanceModel` table (Decision D-18) and table-shape validation.
- Phase 6 (part 4): W2 G1000 PFD Explorer (original PFD drawing in its bezel, region
  cards, tour, GPS navigation mode with a Direct-To walkthrough, click-the-display quiz),
  W7 Traffic Pattern Animator (left/right traffic, wind and crab, configuration, radio
  calls, go-around) and W12 Wind Triangle (draggable wind vector, WCA, headings,
  groundspeed and time en route); wind-triangle maths in `shared/aviation/wind.ts`.
- Phase 6 (part 5): W9 VOR/CDI Simulator (map, VOR indicator and HSI, reverse sensing,
  fly mode with wind drift; VOR maths in `shared/aviation/vor.ts`), W10 Sectional Legend
  Explorer (original chart redraw with hotspot JSON, find-it quiz), W11 Airspace
  Cross-section (side and plan views, requirements, Mode C veil) with
  `content/airspace-profile.yaml` served at `GET /api/v1/airspace-profiles/:slug`, and the
  live W7 demo on the landing page. Decisions D-19 and D-20.
- Phase 7: challenges end to end — `shared/scoring.ts` (rounding half up, best-attempt
  ordering) with boundary tests; `AttemptCreateSchema`; `challengeAttempts` and
  `challengeProgress` models; `POST /challenges/:slug/attempts` (server-side scoring,
  rubric-version check), `GET /me/challenges/:slug/attempts`, `GET /me/attempts`
  (paginated) and `GET /me/progress` (challenges); challenges list with URL filters;
  challenge page with Brief (setup table, copy buttons), Fly (step checklist, timer, random
  events with beep and flash, wake lock), Debrief (rubric, reflections, planning, live score
  preview, sessionStorage draft that survives log-in) and History tabs; result view; fly
  mode (dark, large type); account attempts page; Playwright E2E setup and CI job.
- Phase 8: progress and dashboard — `shared/progress.ts` (module/course completion,
  "next up" and "continue") with tests; `lessonProgress` model; `PUT
/me/lessons/:slug/progress` (idempotent completion, resume point),
  `POST /me/lessons/:slug/quiz-answers` (checked server-side), `GET /me/progress` with
  lessons and modules, `GET /me/dashboard` in one call; last activity on lessons; progress
  rings and status icons on /learn and module pages; optimistic "Mark complete", debounced
  resume point and "pick up where you left off"; dashboard with continue, progress, next up,
  recent attempts, stats, "all caught up" and the course-complete "Skyhawk Pilot (Sim)"
  badge; E2E flows 2 and 3.
- Phase 9 · Module 0 content (drafts, D-21): L0.1 Welcome, L0.2 Setting up MSFS 2024 for
  training, L0.3 Your first flight, and challenge C0.1 First flight over Livermore.
- Phase 9 · Module 1 content (drafts): L1.1 The airframe and flight controls, L1.2 The
  cockpit: G1000 PFD and MFD, L1.3 Engine, fuel and electrical systems, and challenge C1.1
  Cockpit scavenger hunt (L1.4 now links it).
