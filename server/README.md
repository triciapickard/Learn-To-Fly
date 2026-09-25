# Server

Express 5 + TypeScript API. Built by `createApp()` in `src/app.ts` (no `listen`, so tests
drive it with Supertest); `src/index.ts` validates the environment, connects MongoDB,
starts listening and handles graceful shutdown.

## Folder conventions (plan.md step 2.16)

| Folder                                     | Contains                                                              |
| ------------------------------------------ | --------------------------------------------------------------------- |
| `src/config/`                              | `env.ts` (Zod-validated environment), `db.ts` (Mongoose connection)   |
| `src/middleware/`                          | request ID, logger, security headers, rate limits, validation, errors |
| `src/routes/<resource>.routes.ts`          | An Express `Router` per resource: paths + middleware only             |
| `src/controllers/<resource>.controller.ts` | Reads `req.validated`, calls a service, shapes the response           |
| `src/services/<resource>.service.ts`       | Business logic. No `req`/`res`; plain arguments in, data out          |
| `src/models/<Model>.ts`                    | Mongoose schemas. Apply `toJSONPlugin` (`_id` → `id`, no `__v`)       |
| `src/utils/`                               | `HttpError` and small helpers                                         |
| `src/types/`                               | Type augmentation (e.g. `req.validated`)                              |
| `tests/`                                   | Vitest + Supertest + mongodb-memory-server                            |

Request flow: `route → validate(...) → controller → service → model`.

## Errors

Throw `HttpError` (or `HttpError.notFound()`, `.conflict()`, …) for expected failures.
`errorHandler` converts everything into the single API error shape:

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "…", "details": [], "requestId": "…" } }
```

`ZodError` → 400, Mongoose `CastError` → 404, duplicate key → 409, unknown → 500 (message
and stack hidden in production).

## No `asyncHandler` needed (step 2.17)

Express 5 forwards rejected promises from async handlers to the error handler
automatically. Older tutorials wrap every handler in `asyncHandler(...)` or
`express-async-errors`. **Don't**: just write `async (req, res) => { … }` and throw.

## Validation

```ts
router.post('/things/:slug', validate({ params: SlugParams, body: CreateThing }), controller);
```

Parsed values are on `req.validated.{params,query,body}` (and `req.body` is replaced
with the parsed body). Express 5 makes `req.query` read-only, so always read
`req.validated.query`.

## Tests

`tests/globalSetup.ts` starts one in-memory MongoDB per test run. In a test file, call
`useTestDb()` from `tests/setup.ts` to connect to a fresh database, clear collections
after each test and disconnect at the end. `testEnv()` returns a valid environment.
