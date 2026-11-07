---
name: ltf-review
description: Review a Learn to Fly change against the project's own rules (v1.md and v2.md) - folder layering, server security, client conventions, aviation maths, content style and plan sync - and report verified findings. Use before opening a PR, when asked to review LTF changes, or when /ship runs.
argument-hint: '[PR number | branch | path] (default: this branch vs main, plus uncommitted changes)'
---

# LTF review

Review a change the way the project owner would: against v1.md and v2.md, not general taste.
The built-in `/code-review` hunts general bugs and `/security-review` covers general security.
This skill checks the things only Learn to Fly knows, and still reports any real bug it
finds on the way.

**Read-only.** Never edit files during the review. If the arguments include `--fix`, apply
the blocker and should-fix findings after the report, then rerun the checks from step 4.

## 1. Find the change

- No argument: `git diff main...HEAD` plus `git diff HEAD` (uncommitted) and untracked files
  from `git status --porcelain`.
- A PR number: `gh pr diff <n>` and `gh pr view <n> --json title,body,files`.
- A branch: `git diff main...<branch>`. A path: the changes under that path.

List the changed files. If there are none, say so and stop.

## 2. Load the plan context

Read the **Status** line and "How to use this document" in `v1.md` (and `v2.md` when the
change touches v2 work, such as `content/lessons/m9-*` and above, or v2 features). If the PR
body or branch names a plan step ("Phase 12 · 12.11"), read that step and its acceptance
criteria (AC): the change must meet every AC it claims.

## 3. Pick the checklists

Read only the reference files the diff needs:

| Changed paths                                                           | Read                    |
| ----------------------------------------------------------------------- | ----------------------- |
| `server/**`                                                             | `references/server.md`  |
| `src/**`, `index.html`, `vite.config.ts`, `public/**`                   | `references/client.md`  |
| `shared/**`                                                             | `references/shared.md`  |
| `content/**`, user-visible strings in `src/pages/**`, `src/features/**` | `references/content.md` |
| `e2e/**`, `**/*.test.ts(x)`, `server/tests/**`                          | `references/tests.md`   |
| Always                                                                  | `references/plan.md`    |

Every change to `server/`, `src/` or `shared/` also reads `references/tests.md`, because
missing tests are the most common gap.

## 4. Run the mechanical checks

Run what the diff touches, in one batch, and keep the output short (`2>&1 | tail -40`):

- Any `.ts`/`.tsx`: `npm run lint` and `npm run typecheck`, plus `npm run knip` when
  package.json has that script (unused files, exports and dependencies).
- `server/`, `shared/`, `src/`, `scripts/`: `npx vitest run --changed main` (falls back to
  `npm test` if that finds nothing).
- `content/`: `npm run content:validate -- --strict`, plus `npm run spell` when package.json
  has that script.
- A new dependency or `package.json` change: `npm audit --omit=dev --audit-level=high`.

A failing check is one finding (blocker) that quotes the first error. Don't re-report
individual lint or type errors as separate findings: the tools already list them.

## 5. Review

For each changed hunk, read the surrounding function and its callers, not only the diff
lines. Check it against the loaded checklists. Each checklist item has an id (`S4`, `C2`,
`T1`…) to cite.

Before reporting a finding, verify it:

- Point to the exact line, and to the rule or behaviour it breaks.
- For a bug, give the concrete input or state that triggers it. If you can't name one,
  drop it or mark it **unsure**.
- Check the code doesn't already handle it elsewhere (middleware in `server/src/app.ts`,
  a shared schema, a wrapper component).
- Code that follows an existing pattern in the repo is not a finding, even if you'd write
  it differently.

Content files go to the `review-lesson` skill's rules (see `references/content.md`). Don't
duplicate a full lesson review here: report the mechanical content issues and say
"run `/review-lesson <slug>` for the aviation pass" when facts or procedures changed.

## 6. Report

```
## LTF review: <branch or PR> (<n> files)

**Verdict:** ready to open | fix blockers first | needs discussion

### Blockers
- `path/to/file.ts:42` [S2] What breaks, and the input that breaks it. **Fix:** one line.

### Should fix
- …

### Nits (max 5)
- …

### Checks run
lint ✅ · typecheck ✅ · tests ✅ (12 files) · content:validate ⏭ not touched

### Not reviewed
Anything skipped and why (generated files, lockfile, large assets).
```

- **Blocker:** wrong behaviour, a security or data-loss risk, a failing check, an aviation
  fact that changed without a source, or an AC the change claims but doesn't meet.
- **Should fix:** a broken project rule, a missing test, or a maintainability problem the
  owner would ask about.
- **Nit:** style the tools don't catch. Five at most; drop the rest.
- Empty sections say "None". Don't pad the report, and don't praise the code.
