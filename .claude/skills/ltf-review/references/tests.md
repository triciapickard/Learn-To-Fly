# Tests checklist

Sources: v1.md Section 35; v2.md Section 34.

- **T1 Behaviour changes come with tests.** A fix has a test that fails without it. A new
  route, service, hook, widget model or shared function has tests in the matching place:
  `server/tests/*.test.ts` (Supertest + mongodb-memory-server), `shared/**/*.test.ts`,
  `src/**/*.test.tsx` (Vitest + Testing Library + MSW), `e2e/*.spec.ts` (Playwright).
- **T2 Server routes test the four paths** (Section 35.1): the happy path, a validation
  failure (400), no session (401), and another user's data (ownership). Mutating routes
  also test a missing CSRF token (403).
- **T3 Tests check behaviour, not implementation.** Client tests query by role and label
  (`getByRole`, `getByLabelText`), not class names or test ids, and use `user-event`. No
  snapshot of a whole component tree.
- **T4 No real network or clock.** Client tests use the MSW handlers in `src/test/`;
  time-dependent code uses fake timers or an injected clock.
- **T5 New pages get an axe scan.** A new route is added to `e2e/a11y.spec.ts` (no serious
  or critical violations, Section 22.2), and to a keyboard flow if it has new controls.
- **T6 No skipped or focused tests.** No `.only`, no `.skip` without a linked reason.
- **T7 Coverage floors hold.** `shared/` ≥ 90%, `server/` ≥ 80% (Section 35.4).
