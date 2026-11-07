# Server checklist (`server/**`)

Sources: v1.md Sections 24, 25, 27, 29, 30, 32, 33.2, 34; v2.md Sections 29, 32, 36.

## Layering (v1.md Section 25)

- **S1 Routes declare, controllers translate, services decide.** `routes/<resource>.routes.ts`
  only wires paths to middleware and controller functions. Controllers read
  `req.validated.*` and `req.user`, call a service and send the response. Services hold the
  business logic and never import `express` or touch `req`/`res`.
- **S2 Models stay behind services.** Controllers and routes don't import Mongoose models
  as values (a `type` import such as `UserDoc` is fine).
- **S3 Errors are `HttpError`** (`server/src/utils/HttpError.ts`), thrown from services and
  turned into the error shape by `middleware/errorHandler.ts`. Express 5 forwards rejected
  async handlers on its own, so no try/catch that only re-sends a 500.

## Input and injection (Section 32)

- **S4 Every input is validated.** A route that reads params, query or body uses
  `validate({ params, query, body })` with a Zod schema from `@shared/schemas/`. Handlers
  read `req.validated.*`, never `req.body`, `req.query` or `req.params` directly.
- **S5 No raw objects in queries.** `sanitizeFilter` and `strictQuery` are on
  (`config/db.ts`), but don't rely on them alone: never spread request data into a filter
  or update. A query that needs an operator built from input (`$lt`, `$in`) carries a
  comment saying why the value is trusted, as in `attempt.service.ts`.
- **S6 The server decides scores and progress.** Challenge tiers, percentages and
  completion are recomputed from `@shared/scoring.ts` and `@shared/progress.ts`. Fields the
  client sends for these are ignored.

## Auth, ownership and exposure (Sections 30, 32)

- **S7 `requireAuth` on every user route.** Ownership comes from the session user only.
  No endpoint takes a `userId` from the client.
- **S8 Responses whitelist fields.** Use the model's `toJSON` transform or an explicit DTO.
  `passwordHash` stays `select: false`; no internal ids, tokens or stack traces leak.
- **S9 User data isn't cached.** Responses with user data set `Cache-Control: no-store`.
  Public content goes through `middleware/contentCache.ts`.
- **S10 The middleware order in `app.ts` holds.** Content routes stay before the session
  (so cacheable responses carry no `Set-Cookie`). New mutating routes are mounted after
  `requireJson`, the body limit, `writeLimit` and `csrfProtection`.
- **S11 Auth events are logged, secrets aren't.** Use `req.log.info({ event: '…' }, '…')`.
  Never log passwords, reset tokens, session ids or full request bodies.

## Data and performance (Sections 27, 33.2; v2.md Section 36)

- **S12 Lists are bounded.** Pagination caps at 50, list endpoints project out `blocks`
  and other large fields, and reads use `.lean()`.
- **S13 New query shapes have an index.** A new filter or sort on a collection adds the
  index in the model (and says so in the PR).
- **S14 Schema changes are migrations.** A renamed or removed field, or a new required
  one, needs a plan for existing documents (v2.md Section 36), not just a schema edit.

## Config (Section 37)

- **S15 New env vars are declared everywhere.** Added to the Zod schema in
  `config/env.ts`, to `.env.example`, to `render.yaml` when production needs it, and to
  `server/tests/env.test.ts` when it has rules.
