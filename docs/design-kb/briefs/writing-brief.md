# Writing brief (Phase 2)

You are writing one Part of *The Learn to Fly Design Knowledge Base*, a fully cited reference book
that becomes the source of truth for every future design decision on Learn to Fly (LTF). The
owner's complaint is that LTF looks sloppy and generic, interchangeable with thousands of other
sites. The book compiles what actually works (research findings, and the details and practices of
the best designers) and applies it to the real product. Your Part, its file name, rule prefix,
research lanes and word floor are in `docs/design-kb/briefs/parts.md` and your task message.

**There is no time limit.** A Part under its word floor, with unresolved citations, or padded with
repetition will be sent back.

## Read first

1. This brief and `briefs/parts.md`.
2. `briefs/product-context.md`: the real LTF product (pages, components, tokens, fonts, copy).
   Every chapter must apply its material to this product by name. You may also read the code
   under `src/` (read only) to check a detail. Never edit product code.
3. Your lanes' `research/<lane-id>/notes.md` and `sources.json`, in full. These are your evidence.
4. `bibliography/references.json`: the merged bibliography. Citation keys come only from here.
   `bibliography/keys-by-lane.md` lists every key with a one-line reference and its lane, so you
   can cite a source that another lane researched. If you do, read that source's notes first.

## Step 0: the density test (required, and saved)

Before writing the Part, pick one substantial section, and draft it three times from the notes:
terse (about 150 words), medium (about 400), full (about 800 or more). Compare each against the
notes. Choose the density that keeps every finding, number, caveat and practical detail while
cutting restatement and filler. Save the three drafts and a short verdict to
`book/_density/<your part file name>`. Write the whole Part at the chosen density. Reach the word
floor with substance (more findings, more specifics, more application to LTF, more worked
decisions), never with repetition, throat-clearing or summary of what was just said.

## Structure

- One Markdown file: `docs/design-kb/book/<file from parts.md>`. Write it chapter by chapter
  (append as you go) so that no single write is enormous.
- Line 1 is `# <Part title>` exactly as in `parts.md`. Then one or two paragraphs introducing the
  Part (what it covers, how strong its evidence is, how to use it).
- **8 to 12 chapters**, each `## Chapter title` (no numbers; the build numbers them). Sections are
  `###`, subsections `####`. No deeper levels. Do not write "Chapter 3" in headings or prose;
  refer to chapters by title.
- Every chapter ends with a section `### What this means for Learn to Fly` that names actual
  pages, components and tokens (`LessonPage`, `FlyModePage`, `Callout`, `--color-accent`,
  `--container-measure` and so on) and says what to keep, change or build.
- The **last chapter** is `## Decision list and review checklist`: (a) the decisions this Part
  settles for LTF, each tied to rule IDs, and (b) a review checklist a reviewer can run against a
  pull request or a page, as a list of questions with rule IDs.

## Rules

Guidance is written as numbered rules. Use this exact block form, at the top level of the file
(never nested inside a list, quote or another block):

```
::: {.rule #TYP-012 grade="B"}
**Keep lesson prose between 45 and 75 characters per line.** The evidence and reasoning, with
citations [@tinker1963legibility; @bringhurst1992elements]. State the conditions and limits.

*In LTF:* what this means concretely, naming the token or component.
:::
```

- IDs are your prefix plus three digits, numbered in order from 001 (`TYP-001`, `TYP-002`). Each
  ID is used once. Refer to a rule anywhere by its bare ID (`TYP-012`); the build links it.
  You may refer to another Part's rules only by Part title, not by guessed IDs.
- The first sentence is the rule itself, in bold, imperative, specific and testable.
- `grade`: **A** replicated evidence (multiple independent studies or a meta-analysis),
  **B** some evidence (one or a few studies, or indirect evidence), **C** expert consensus (craft
  authority, standards, no direct experiment), **D** contested (evidence conflicts, or failed
  replications). Grade honestly. A standards requirement with no experiment behind it is C.
- Aim for roughly 40 to 90 rules per Part. A rule must earn its place.

Popular claims that do not hold up get this block, with the source that shows it:

```
::: myth
**"People read words by their outline shape."** What is claimed, why it fails, and the evidence
[@larson2004science].
:::
```

A short applied aside can use `::: ltf` ... `:::`. Use it sparingly; the chapter-ending section
carries the application.

## Evidence discipline

- **Every factual claim is cited** with Pandoc citations: `[@key]`, `[@key, 45]`,
  `[@key1; @key2]`, or in-text `@key argues`. Keys must exist in `references.json`.
- **Numbers and quotations come only from the verified notes** (or from a check you make yourself
  this session against Crossref, Open Library or a web search, in which case say so in your
  hand-back). Anything you cannot confirm is stated qualitatively or left out. Never quote from
  memory. Never invent a page number.
- Report replication status and criticism where the notes give it. Do not launder a contested
  finding into a confident rule.
- **Aviation.** Do not state any aircraft number, speed, limit, frequency or flight procedure as
  fact. Refer to them generically ("the approach speed shown in the lesson") or by token
  (`{{vspeed.*}}`). Human-factors findings about displays and checklists are fine.
- Describing the LTF product: say only what `product-context.md` or the code shows.

## Style

- US English. Second person is fine for guidance. Plain, exact, unsentimental prose. No hype.
- **No em-dashes anywhere.** Use commas, parentheses or full stops. An en dash in a numeric range
  (45–75) is fine. Do not write `---` or `--` in prose.
- No footnotes, no images, no raw HTML, no links to headings. Tables: at most 4 columns, short
  cells, Pandoc pipe tables. Code spans for tokens, components and file names.
- Do not address the reader about the book's construction ("in this chapter we will"). Start with
  the substance.

## Before you hand back

Run `python3 docs/design-kb/build/validate.py <your part file name>` and fix everything it
reports. Then reply with a short hand-back: word count, chapter count, rule count by grade, any
claim you had to leave out for lack of confirmation, and any place where your Part may overlap or
conflict with another Part. Do not run git.
