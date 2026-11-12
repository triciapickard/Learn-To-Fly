---
name: ship
description: Take the current Learn to Fly change from working tree to an open pull request - run every check, run /ltf-review, fix blockers, sync the plan, commit, push and open a PR with the template filled in.
argument-hint: '[short task description or plan step, e.g. "12.14 onboarding sim screen"]'
disable-model-invocation: true
---

# Ship

Turn the current change into a ready-to-review PR. Keep going through the steps without
asking unless a step below says to stop (AGENTS.md "Preferences").

## 1. Branch and scope

- On `main`? Create a branch first: `claude/<kebab-task-name>`.
- Read the Status line in `v1.md` (and `v2.md` for v2 work) and find the plan step this
  change belongs to. Use the argument if given.
- One task, one PR (v1.md "Document maintenance rules"). If the working tree mixes
  unrelated changes, **stop and ask** which ones go in this PR. Never discard changes.

## 2. Run the checks

Run in one batch and keep the output short (`2>&1 | tail -30` each):

```sh
npm run lint
npm run format:check
npm run knip                           # if package.json has it
npm run spell                          # if package.json has it
npm run typecheck
npm test
npm run content:validate -- --strict   # if content/ changed
npm run build && npm run size          # if src/, package.json or vite.config.ts changed
npm run e2e                            # if pages, routes or the API changed
```

Fix what fails (`npm run lint:fix`, `npm run format`, then the real errors) and rerun the
failing check. If a failure isn't caused by this change (it fails on `main` too), don't fix
it here: note it under "Testing done".

## 3. Review

Run the `ltf-review` skill on the branch. Fix every blocker. Fix should-fix items that are
clearly right; mention the ones that need the owner's call in your reply. If
content facts changed, also run `review-lesson` on those files and put its sim verification
list in the PR. Rerun the checks from step 2 that the fixes touched.

## 4. Sync the plan

- Tick the plan steps this PR completes (`- [ ]` → `- [x]`); never delete steps.
- Add a Decision Log entry if the change departs from the plan (v1.md Section 5).
- Update the Status line if a phase starts or ends.
- Add a `CHANGELOG.md` line for user-facing changes.

## 5. Commit and push

- Stage only this task's files by name (no `git add -A`). Never stage `.env` or anything
  matching `.gitignore`.
- One commit with a plain message: what changed and why, in the imperative ("Add the
  onboarding sim screen"). End it with the attribution lines Claude Code provides.
- Don't use `--no-verify`; if the pre-commit hook fails, fix the cause and commit again.
- `git push -u origin <branch>`. Never force-push.

## 6. Open the PR

Fill `.github/pull_request_template.md` and open it with
`gh pr create --base main --title "<title>" --body-file <file in the scratchpad>`:

- **Summary:** what and why, in two to four sentences.
- **Plan reference:** phase and step ids.
- **Screenshots / GIFs:** for UI changes, light and dark, mobile and desktop. If you
  couldn't capture them, say so in that section.
- **Testing done:** the commands from step 2 and their results.
- **Checklist:** tick only what was actually done.

End the body with the attribution line Claude Code provides. Don't merge, and don't
request reviewers unless asked. Reply with the PR link, the check results and anything
still open.
