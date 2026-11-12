# Plan and PR checklist (every review)

Sources: v1.md "How to use this document" and "Document maintenance rules";
`.github/pull_request_template.md`.

- **P1 One task, one PR.** The change does one plan step or one task. Unrelated edits
  (drive-by refactors, formatting churn in other files) are flagged so they can move to
  their own PR.
- **P2 Plan steps are ticked.** A change that completes a `- [ ]` step in v1.md or v2.md
  ticks it in the same PR. Completed steps are never deleted.
- **P3 Decisions are logged.** A change that departs from the plan (a different library,
  layout, rule or scope) adds or updates an entry in the Decision Log (v1.md Section 5,
  v2.md Section 5) **and** the section it affects. The next free id is at the top of
  v1.md Section 5 (v2 decisions use `D2-`).
- **P4 The Status line is current.** Finishing or starting a phase updates the Status line
  at the top of v1.md or v2.md.
- **P5 Docs follow the code.** New scripts, env vars, content directives or folders update
  `README.md`, `content/README.md`, the v1.md Section 25 tree, or the AGENTS.md repo map
  (top-level folders only) as needed. User-facing changes get a `CHANGELOG.md` line.
- **P6 The PR body is complete** (when reviewing a PR): Summary, Plan reference, Screenshots
  for UI changes (light and dark, mobile and desktop), Testing done and the checklist.
