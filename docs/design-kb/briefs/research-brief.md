# Research brief (Phase 1)

You are one of about 32 research agents building the evidence base for the Learn to Fly (LTF)
Design Knowledge Base, a cited reference book that will govern every future LTF design decision.
LTF teaches complete beginners to fly the Cessna 172 in Microsoft Flight Simulator 2024 through
lessons, interactive widgets and in-sim challenges (React web app). You own ONE lane, named in
your task message and described in `docs/design-kb/briefs/lanes.md`. Read that row first.

**There is no time limit.** Take as long as the work needs. Work that is under the thresholds
below, or that contains unverified material, will be sent back to you.

## What you deliver

Two files in `docs/design-kb/research/<lane-id>/` (create the folder). Touch nothing else in the
repository. Do not run git. Do not edit product code.

### 1. `sources.json`

A JSON array of **at least 13 sources, aim for 15 to 18**. Each object:

```json
{
  "key": "tinker1963legibility",
  "type": "book",
  "authors": [{"family": "Tinker", "given": "Miles A."}],
  "year": 1963,
  "title": "Legibility of Print",
  "container_title": "",
  "volume": "", "issue": "", "pages": "",
  "publisher": "Iowa State University Press", "publisher_place": "Ames",
  "edition": "", "editors": [],
  "doi": "", "isbn": "", "url": "",
  "verified_via": "websearch",
  "verified_evidence": "Library catalog record lib.ecu.edu/catalog-preview/catalog/21524 lists Tinker, Miles A., Legibility of print, Ames: Iowa State University Press, 1963",
  "kind": "book-length research summary",
  "lane": "02-legibility-reading"
}
```

- `key`: first author's family name + year + first significant title word, lowercase ASCII letters
  and digits only (`fitts1954information`, `w3c2023wcag`). For an organization use a short name.
- `type`: one of `book`, `chapter`, `article-journal`, `paper-conference`, `report`, `thesis`,
  `standard`, `webpage`. Organizations as authors: `{"literal": "World Wide Web Consortium"}`.
- `year` is the year of the edition or version you are describing. For an old work read in a later
  edition or translation, describe the edition you can confirm and put the original year in
  `original_year`.
- `verified_via`: `crossref`, `openlibrary` or `websearch`. `verified_evidence`: what you queried
  and what came back that matches (a DOI record, an Open Library work key, a catalog or publisher
  URL). Every source must be confirmed **in this session**. Memory is not confirmation.
- **Never invent a DOI, ISBN, page range, volume, publisher or URL.** If you cannot confirm a
  field, leave it as an empty string. If you cannot confirm that a source exists, drop it.
- A DOI goes in only if Crossref (or the publisher page) returned it for this exact work.

### 2. `notes.md`

One `## ` section per source, headed exactly `## <key>` followed by a line with the short
reference. **400 to 800 words per source, and at least 8,000 words for the lane.** Each section
has these four `### ` subsections:

- `### Core claims`: what the work argues or found.
- `### Specifics`: method, sample, measures, numbers, named techniques, definitions, the actual
  rules or principles it states. This is the part writers need most. Be concrete.
- `### Replication and criticism`: has it replicated, been extended, qualified, or overturned?
  Who disagrees and why? How strong is the evidence (experiment, meta-analysis, expert opinion)?
- `### Implications for LTF`: concrete, specific consequences for a flight-training web app:
  lesson pages, quizzes, challenge briefings, a full-screen "fly mode" used next to the sim,
  dashboards and progress, instrument widgets, checklists, light and dark themes, a beginner
  audience.

End each section with a line `Confirmed this session: ...` listing what you actually read
(abstract, publisher page, full text, review, catalog record) and the URLs or queries used.

## Evidence rules (these matter more than length)

1. **No figure and no quotation unless you confirmed it this session** from the source itself, its
   abstract, the publisher's description, or a reliable secondary account you fetched. Put the
   confirming URL next to it in parentheses or in the `Confirmed this session` line. If you recall
   a number but cannot confirm it, describe the finding qualitatively ("reading slowed markedly at
   the longest line length") or leave it out. Never reconstruct a quotation from memory.
2. Say what kind of evidence each source is. Distinguish experiments, meta-analyses, standards,
   craft treatises and opinion. Craft authority is welcome; label it as such.
3. **Debunked and contested claims.** Do not present advice known to be wrong as good. Do include
   the papers that debunk popular claims in your lane (for example the word-shape "bouma" story,
   learning styles, the "7 plus or minus 2 menu items" misuse, "users never scroll", the original
   size of the choice-overload effect). Note failed replications and shrinking effect sizes.
4. Admissible sources: peer-reviewed papers, canonical books, standards, technical reports from
   recognized bodies, and essays by people with established reputations. Range: 1776 to today,
   and try to cover the span your lane allows (old foundations and recent work). Not admissible:
   anonymous blogs, content marketing, vendor listicles, AI-generated material, pop psychology.
   Research-based industry reports from groups with a track record (for example Nielsen Norman
   Group, Baymard, WebAIM, GOV.UK) are fine when they report their method.
5. **Aviation.** Never state an aircraft number, limit, speed, or flight procedure as fact. You
   may describe what a human-factors source says about display or checklist design.
6. US English. No em-dashes anywhere (use commas, parentheses or full stops).

## How to verify

- Crossref: `curl -s "https://api.crossref.org/works?query.bibliographic=<title+author+year>&rows=3"`
  or `https://api.crossref.org/works/<doi>`. Check title, authors, year, journal, volume, pages.
- Open Library: `curl -s "https://openlibrary.org/search.json?q=<title+author>&limit=3"`.
- Web search: use the WebSearch tool (if it is not loaded, call ToolSearch with
  `select:WebSearch`; do the same for `WebFetch` if you need to read a page and it is available).
  Use it for content, numbers, criticism and replication status, not only for existence.
- Do not put any personal details or email address in requests.
- If search and both citation hosts stop working entirely, stop, save what you have, and say so
  in your hand-back. Do not fall back to writing from memory.

## Before you hand back

Run `python3 docs/design-kb/build/check_lane.py <lane-id>` and fix everything it reports. Then
reply with a short hand-back only: source count, total words, how many sources were verified by
each route, anything you could not confirm and dropped, and any lead from `lanes.md` that turned
out to be wrong (misattributed, non-existent, or debunked).
