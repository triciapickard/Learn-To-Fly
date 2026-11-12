@AGENTS.md

## Claude Code

- Hooks in `.claude/settings.json` lint and format each file you edit, validate content
  edits, typecheck changed TypeScript before you finish, and refuse edits to `.env` files,
  force-pushes and `--no-verify`. Fix what they report; don't work around them.
- Before opening a PR, run `/ship`. It runs the checks and `/ltf-review`, then opens the PR.
  To review without shipping, run `/ltf-review` on its own.
- When a lesson or challenge's facts change, run `/review-lesson <slug>` and put its sim
  verification list in the PR.
- For learner-facing copy that reads like AI text, run `/unslop`.
