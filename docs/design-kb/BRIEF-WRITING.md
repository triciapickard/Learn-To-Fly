# Writing brief (Phase 2): one Part of the Learn to Fly Design Knowledge Base

KB = /tmp/claude-0/-home-user-Learn-To-Fly/28206487-101c-52e2-9164-5f164cd67949/scratchpad/kb

## The book
Learn to Fly (LTF) is a web app that teaches a complete beginner to fly the Cessna 172 in Microsoft Flight
Simulator 2024: lessons, interactive instrument widgets, in-sim challenges, checklists, a "fly mode" used in
glances beside the simulator, a progress dashboard. React + Tailwind; "Day" and "Night" themes; today it uses
near-neutral greys, one teal accent ("the horizon line"), Instrument Sans and JetBrains Mono. The owner's verdict:
it looks sloppy and generic, interchangeable with thousands of sites, with no identity.

The Knowledge Base is a 3000-page cited reference book in 26 Parts. It will be the source of truth for every
future LTF design question. About 30 research agents collected 450+ vetted sources (1776-2026) with detailed
notes. You are writing ONE Part. Readers are the owner and future AI agents who will look things up, so every
page must be specific, accurate, cited and usable. It is a reference, not an essay collection: but it must
explain the reasoning well enough that a reader can handle cases the rules do not cover.

## Your inputs
- `KB/PARTS.tsv`: all 26 Parts (number, rule prefix, title, research lanes, minimum words) for cross-references.
- `KB/research/<lane>/notes.md` and `sources.json` for the lane(s) assigned to your Part: read these in full
  first. They are the knowledge you must compile. Nothing important in them may be lost.
- `KB/bib-index.tsv`: every citable key in the whole book (key, authors, year, short title, lane). You may cite
  any key in it. Read notes from other lanes when a chapter needs them (grep for the key).
- Your own knowledge of these sources, and WebSearch/WebFetch (load via ToolSearch if needed; curl is blocked)
  to verify specifics and fill gaps.
- The LTF repository at /home/user/Learn-To-Fly (read-only for you: do NOT edit anything in it). Look at
  `src/styles/tokens.css`, `src/components`, `src/pages`, `v1.md` Section 21 when you write LTF applications, so
  they refer to the real product.

## Accuracy rules (non-negotiable)
- Every factual or empirical claim carries a citation. Numbers, thresholds, effect sizes, sample sizes, dates and
  quotations must come from the research notes or be confirmed by you with a web search this session. If you
  cannot confirm a specific, state the finding qualitatively. Never invent a statistic, quotation, page number or
  source. Quotations: under 25 words, rare, only when confirmed.
- Report replication status and serious criticism honestly. Popular claims that do not hold up go in a `.myth`
  block with the debunking source.
- Distinguish clearly between (a) what a source found or said, (b) what practitioners generally infer from it,
  and (c) your own recommendation for LTF. Recommendations are labelled as such.
- A new source not in bib-index.tsv may be cited only if you verify it by search and add it to
  `KB/parts/<NN>/extra-sources.json` (same schema as the research sources.json, including `key`). Same quality
  bar: recognized authorities only; no anonymous blogs, no content marketing.

## Finding the right level of compression (do this before writing the Part)
Take one source-dense topic from your notes and draft the same ~section three ways in
`KB/parts/<NN>/_trial.md`: (1) terse reference style, (2) medium, (3) full explanatory. Check each against the
notes: what did the terse one lose that a designer would need? what in the full one is padding? Choose the
density that keeps every finding, number, caveat and practical detail while cutting restatement, throat-clearing
and generic advice. Write two or three sentences on your choice in `KB/parts/<NN>/_compression.md`, then write
the whole Part at that density. Padding is a defect; so is losing a detail that changes a design decision.
The minimum word count for your Part is in PARTS.tsv. It is a floor that the material comfortably supports when
each source is explained properly (method, findings, limits, design consequences, LTF application). Reach it with
substance: more sources, more worked examples, more precise guidance. Never by repetition.

## Structure of a Part
- 10 to 16 chapters, each its own file `KB/parts/<NN>/chMM-short-slug.md` (MM = 01, 02, ...), each 2,500-4,500
  words. Plan the chapter list first in `KB/parts/<NN>/_outline.md` so the Part covers its lanes completely,
  in a teachable order, with no overlap between chapters.
- The first chapter orients: what this Part covers, the key ideas, how it connects to other Parts.
- The last chapter is "<Part topic> for Learn to Fly: decisions and checklist": the Part's consequences for LTF
  as concrete decisions, a review checklist, and open questions that need testing.
- Also write `KB/parts/<NN>/_blurb.txt`: a 30-50 word plain-text description of the Part for its title page.

## Chapter format (Pandoc Markdown, strict)
- Line 1: `# Chapter title` (exactly one `#` heading per file; no numbers in titles, numbering is automatic).
- `##` sections and `###` subsections only. No deeper levels. No "Introduction"/"Conclusion" headings.
- A typical chapter: opening paragraphs that state the question and why it matters; sections that present what
  the sources established (who, when, how they know, what they found, limits); the practical details; what does
  not hold up; application to LTF; then a final `## Summary` of 5-10 bullet points.
- Citations use Pandoc syntax with keys from bib-index.tsv: `[@Tinker1963]`, `[@Tinker1963, p. 88]`,
  `[@Legge2011; @Rayner1998]`, or in running text `@Tinker1963 found ...`. No other citation style, no
  bibliography section in the chapter (it is generated).
- Rules: the unit of guidance. Use a fenced div with a unique id `<PREFIX>-NNN` (your prefix is in PARTS.tsv;
  number sequentially through the Part) and an evidence grade:
  ```
  ::: {.rule id="TYP-014" grade="B"}
  **Set body text at a measure of 45 to 75 characters.** One or two sentences of rationale and scope, with
  citations [@Bringhurst1992; @Dyson2001].
  :::
  ```
  Grades: A = replicated experimental evidence or meta-analysis; B = some empirical evidence, limited or mixed;
  C = consensus of recognized expert practitioners without direct experimental support; D = contested, or
  evidence conflicts (say which way you lean and why). Expect 6-15 rules per chapter. A rule must be specific
  enough to check a design against.
- Other blocks (same fenced-div syntax, no attributes besides the class):
  `::: {.myth}` a popular claim that does not hold up, with the source that shows it;
  `::: {.detail}` a small specific detail that makes a disproportionate difference;
  `::: {.ltf}` a concrete application to the real Learn to Fly product (name the page, component or token).
  Start each block with a bold lead sentence.
- Tables: pipe tables only, at most 5 columns, short cells. Use them for comparisons, parameter values and
  checklists. No images, no HTML, no LaTeX, no code fences except for short CSS/token examples (max 12 lines).
- Cross-references to other Parts: write "see Part 9 (Color II)" style; do not invent chapter numbers.
- Style: US English. Plain, precise, direct; no hype, no filler, no rhetorical questions as headings. Do not use
  em-dashes (use commas, parentheses or periods; en dashes in numeric ranges are fine). Second person is fine
  for guidance. Define a technical term the first time a chapter uses it.
- Units: px/rem for screen sizes; ms for time; knots, feet (MSL or AGL), nautical miles for aviation examples.
- Do not state aviation procedures or aircraft numbers as fact (speeds, limits, checklist wording): when an
  example needs one, describe it generically ("the approach speed for the lesson").

## Working method
1. Read your lane notes and sources.json fully. Read bib-index.tsv. Skim the LTF repo files named above.
2. Write `_outline.md` (chapter list, one line of scope each, and which sources each chapter uses; every source
   in your lanes must be used somewhere).
3. Do the compression trial.
4. Write the chapters one file per Write call, in order. After each, run `wc -w` on it.
5. When all are written run `cat KB/parts/<NN>/ch*.md | wc -w`. If the total is under your minimum, add chapters
   or deepen thin ones with real material (use search to add substance), then recount. There is NO time limit and
   no token budget to protect; do not stop early and do not hand back a partial Part.
6. Self-check before finishing: every chapter starts with one `#` heading; every `:::` div is closed; rule ids
   are unique and sequential; every citation key exists in bib-index.tsv or your extra-sources.json (check with
   a small script); no em-dashes (`grep -c "—"` must be 0).

## Final reply
Three lines only: number of chapters, total words, number of rules; plus anything the editor must know
(for example unverifiable claims you had to drop). Everything else is in the files.
