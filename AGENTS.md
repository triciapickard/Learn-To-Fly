# Learn to Fly

Learn to Fly teaches a complete beginner to fly the Cessna 172 Skyhawk in Microsoft Flight
Simulator 2024, through lessons, interactive visual explanations and in-sim challenges.
TypeScript everywhere: React 19 + Vite + Tailwind 4 + TanStack Query + React Router 8 on the
client, Express 5 + Mongoose on the server, Zod schemas shared by both, Node 24.

The plans are the spec: [`v1.md`](./v1.md) (current work) and [`v2.md`](./v2.md) (next).

## Commands

| Task                                 | Command                                                          |
| ------------------------------------ | ---------------------------------------------------------------- |
| Run locally (needs MongoDB and .env) | `npm run dev` (client :5173, API :3000)                          |
| Typecheck client, server and scripts | `npm run typecheck`                                              |
| Lint / fix                           | `npm run lint` / `npm run lint:fix`                              |
| Format check / fix                   | `npm run format:check` / `npm run format`                        |
| Unit and API tests (or one file)     | `npm test` (or `npx vitest run <path>`)                          |
| End-to-end tests (builds the client) | `npm run e2e`                                                    |
| Validate content                     | `npm run content:validate -- --strict`                           |
| After changing any `published:` flag | `npm run content:warnings` (commit what it regenerates)          |
| Load content into MongoDB            | `npm run content:seed`                                           |
| Unused code, spelling, bundle budget | `npm run knip`, `npm run spell`, `npm run build && npm run size` |

## Definition of done

A change is done when the checks CI runs pass for what it touches: lint, format:check,
knip, spell, typecheck, `npm test`, `content:validate -- --strict` for content, build and
size for client changes, and `e2e` for pages, routes or the API. Behaviour changes come with
tests. Then the plan is synced (see Rules).

## Where to look

Before changing code, read the **Status** lines at the top of `v1.md` (and `v2.md` for v2
work) and any decision in its Section 5 that touches your task: decisions override older
sections. Then read only what the task needs:

| Task                         | Plan sections (v1.md)          | Checklist                                                              |
| ---------------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| Server, API, auth, data      | 24, 27, 29, 30, 32, 34, 35     | `.claude/skills/ltf-review/references/server.md`                       |
| Client pages and components  | 19–23, 31, 33                  | `.claude/skills/ltf-review/references/client.md`                       |
| `shared/` and aviation maths | 15.2, 25, 35.2, Appendix G     | `.claude/skills/ltf-review/references/shared.md`                       |
| Lessons, challenges, copy    | 12–18, 28, 54, Appendices C, D | `.claude/skills/ltf-review/references/content.md`, `content/README.md` |
| Widgets                      | 16                             | `client.md` and `shared.md`                                            |
| Tests                        | 35                             | `.claude/skills/ltf-review/references/tests.md`                        |
| Tooling, CI, env, deploy     | 36, 37, 38, Appendices E, F    |                                                                        |

v2 work uses the matching v2.md sections (its Section 5 lists the v1 decisions that came
later). The full folder tree is v1.md Section 25.

## Rules

- **Aviation facts need a source.** Never change a number, limit, procedure, radio call,
  checklist wording or quiz answer without one (v1.md Section 54.1 lists the order). If you
  can't confirm a fact, mark it ⚠ Verify in the plan or with a `verify` callout in content,
  and say so. Don't guess.
- **Tokens, not literals.** V-speeds and aircraft numbers in content use `{{vspeed.*}}` and
  `{{aircraft.*}}` tokens from `content/aircraft.yaml`.
- **`content/` is the source of truth.** MongoDB is filled from it by `content:seed`; never
  edit content in the database. Slugs and IDs never change once published.
- **Publishing.** `published: true` needs no `verify` callouts, a `lastVerifiedAt` and a
  `simVersion`. Only fully verified modules are shown (v1.md D-32).
- **Server layering.** Routes wire paths, controllers translate, services decide and never
  import Express. Every input goes through `validate()` with a Zod schema from
  `@shared/schemas/`; handlers read `req.validated`. Errors are thrown as `HttpError`.
- **`shared/` is pure.** No Node modules, DOM, React or imports from `src/`, `server/` or
  `scripts/`. Import aliases: `@/` (src), `@shared/`, `@server/`.
- **Client.** Colours and spacing come from `src/styles/tokens.css` through Tailwind, never
  raw hex. Both light and dark themes must work. Server state goes through TanStack Query
  hooks in `src/features/<feature>/api.ts`.
- **Copy.** US English, second person ("you"), no em-dashes in anything a learner reads
  (use commas, parentheses or full stops; an en dash in a range like "60–70 KIAS" is
  fine). Knots, feet, nautical miles, inHg; every altitude says MSL or AGL.
- **Secrets.** Never edit `.env`. A new env variable goes in `server/src/config/env.ts`,
  `.env.example`, `render.yaml` (if production needs it) and v1.md Appendix E.
- **Plan sync.** Tick a `- [ ]` step in the PR that completes it and never delete steps. A
  change that departs from the plan adds a Decision Log entry (the next free ID is at the
  top of v1.md Section 5) and updates the section it affects. Update the Status line when a
  phase starts or ends. User-facing changes get a `CHANGELOG.md` line.

## Git and pull requests

- Branch from `main` as `claude/<kebab-task-name>`. One PR per plan step or small group of
  related steps (v1.md Section 39.4).
- Commit messages are one plain imperative sentence: "Add the onboarding sim screen".
- Never force-push and never use `--no-verify`. If the pre-commit hook fails, fix the cause.
- Fill `.github/pull_request_template.md`. The owner merges on GitHub (merge commit); don't
  merge yourself.

## Preferences

When a step doesn't need my input, keep going. Put status notes in the
same message as your next action.
Stop and ask only when you can't continue without me, or before anything
destructive: deleting data, force-pushing, or changing anything outside
this repository.
End replies with what matters, briefly. Don't add "What I changed / What I couldn't do /
What I need from you" sections (v1.md D-31).

## Repo map

`src/` React client · `server/src/` Express API · `shared/` code used by both and by the
scripts · `content/` lessons and challenges (Markdown and YAML) · `scripts/` content
pipeline and checks · `e2e/` Playwright · `docs/verification/` in-sim verification records
· `.claude/` Claude Code skills and hooks. Full tree: v1.md Section 25.
