# The Learn to Fly Design Knowledge Base

A cited reference book that is the source of truth for LTF design decisions.

- `Learn-to-Fly-Design-Knowledge-Base.pdf`: the book (6 x 9 in, 26 Parts, 303 chapters, 1,944 graded
  rules, 555 sources).
- `book/`: the Markdown source, one file per Part, plus front and back matter. `book/_density/` holds
  each writer's three-density test.
- `bibliography/`: the merged, de-duplicated bibliography (`references.json`, CSL JSON),
  `sources-merged.json` (full records with each source's verification route and evidence),
  `keys-by-lane.md`, and `recheck-summary.txt`.
- `research/`: one folder per research lane with `sources.json` and `notes.md` (what was read for each
  source, and what could not be confirmed).
- `briefs/`: the research brief, the writing brief, the lanes, the Parts, the product-context dossier,
  the generated rule index and the cross-Part seams memo.
- `build/`: the PDF pipeline (Pandoc Markdown with citations to Typst to PDF) and the checks.

## Verification

Every source was confirmed to exist by a research agent in November 2026: 343 against Crossref, 132
against Open Library, 80 by web search (standards, reports, web documents and works those two services
do not hold). A second, independent pass re-queried Crossref for every DOI (343 of 343 matched on title)
and Open Library for every book or chapter without a DOI (138 found; 4 not matched by the automated
query, of which 3 were then found by hand and 1, the *Design Systems Handbook*, is not in Open Library
and rests on the publisher's page; 1 query failed). The remaining 69 web-verified sources were not
re-checked. Existence is not the same as having been read: each `notes.md` section ends with a
"Confirmed this session" line saying whether the full text, an abstract or a secondary account was read.

## Build and check

    pip install typst pypandoc_binary pymupdf
    python3 docs/design-kb/build/validate.py     # citations, rule IDs, structure, word floors
    python3 docs/design-kb/build/build.py        # writes the PDF
