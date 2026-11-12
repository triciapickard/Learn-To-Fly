# Content checklist (`content/**` and user-visible strings)

Sources: v1.md Sections 18, 54; v2.md Section 19; `content/README.md`.

This is the quick pass for `/ltf-review`. When an aviation fact, number, procedure, radio
call or sim instruction changed, also run `/review-lesson` on that lesson or challenge for
the full accuracy pass.

## Mechanical (most are caught by `content:validate`, so check its output first)

- **K1 Tokens, not literals.** V-speeds and aircraft numbers use `{{vspeed.*}}` or
  `{{aircraft.*}}` tokens from `aircraft.yaml` where one exists.
- **K2 Units and formats** (Section 18.2–18.3): KIAS by default; every altitude says MSL or
  AGL; thousands separators ("3,500 ft"); en dash in ranges ("60–70 KIAS"); headings as
  three digits ("heading 090"); frequencies with a decimal ("118.6").
- **K3 Structure** (Section 18.5): no `#` in the body; `##` sections (they are the step
  navigation); `###` sparingly; about 250 words at most before a visual, widget, table or
  question.
- **K4 Directives are valid.** Callout types from Section 18.4 (plus v2's `decision`,
  `memory`, `real-world`); widget names from `shared/widgets.ts`; quiz ids unique, every
  question has an explanation after `---`.
- **K5 Publishing is consistent** (D-17, D-32). `published: true` only with no `verify`
  callouts, a `lastVerifiedAt` and a `simVersion`. A change to `published` comes with the
  output of `npm run content:warnings` (warnings and generated READMEs) in the same PR.
- **K6 Slugs never change** after launch, and a new lesson or challenge is listed in
  `modules.yaml`.
- **K7 Images** live in `src/assets/lessons/<module>/`, are WebP, have alt text of at
  least 10 characters, and follow the naming rule in Section 18.6.

## Judgement

- **K8 Facts changed without a source.** Any changed number, limit, procedure, frequency
  or menu path in a **published** lesson or challenge is a blocker unless the PR says what
  it was checked against (Section 54.1 order: the sim, the in-sim checklist, the POH, FAA
  publications, current charts, Garmin docs).
- **K9 Voice** (Section 18.1): friendly instructor, "you", short sentences, US English,
  grade 8–10. Run `/unslop` on copy that reads like AI text instead of listing every
  phrase here.
- **K10 No em-dashes in site copy** (owner preference). Use commas, parentheses or full stops.
  En dashes in numeric ranges stay.
- **K11 Legal wording** (Section 18.8): never reproduce POH or Garmin text; FAA quotes cite
  the handbook and chapter; v2 IFR content carries "Not for navigation" and the d-TPP
  cycle (v2.md Section 19.3).
