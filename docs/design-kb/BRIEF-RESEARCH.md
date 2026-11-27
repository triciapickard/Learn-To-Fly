# Research brief (Phase 1): source discovery for the Learn to Fly Design Knowledge Base

## What this is for
Learn to Fly (LTF) is a web app that teaches a complete beginner to fly the Cessna 172 in Microsoft Flight
Simulator 2024: lessons, interactive instrument widgets, in-sim challenges, checklists, a "fly mode" used beside the
simulator, progress dashboards. React + Tailwind, light ("Day") and dark ("Night") themes. Its owner finds the
current design generic and interchangeable with thousands of other sites, with no identity of its own.

We are building a very large, fully cited design knowledge base (a 3000-page book) that will be the source of truth
for every future design decision. You are one of ~32 research agents. Each has ONE lane. Your job: find the best
sources in your lane and extract what they actually say, in enough detail that a writer who never reads the
original could write several accurate, specific book pages from your notes alone.

## Source quality bar (strict)
- Only sources from the last 250 years (1776-2026) by recognized designers, psychologists, researchers, standards
  bodies or institutions: peer-reviewed papers, scholarly or canonical books, book chapters, standards, technical
  reports, and essays/articles by people with an established reputation in the field.
- NO anonymous blog posts, content-marketing listicles, SEO articles, AI-generated material, Medium posts by
  unknowns, or pop-psychology claims without evidence.
- Known-bad or debunked advice must NOT be presented as good advice. But the papers that debunk it ARE valuable
  sources (e.g. learning-styles reviews, golden-ratio myth papers, misuse of "7 plus or minus 2", choice-overload
  meta-analyses, failed replications). Record replication status and serious criticism for every empirical claim.
- Every source must be REAL. Use the WebSearch tool (load it with ToolSearch "select:WebSearch" if it is not
  already loaded; WebFetch too if you have it) to confirm author, year, title, venue and to refresh details.
  `curl` is blocked in this container, so do not try it. Never invent a DOI, URL, page number, statistic or
  quotation. If you cannot confirm a field, leave it empty. If you cannot confirm the source exists, drop it.
- Spread across time where the lane allows: include foundational older works as well as modern research.

## How many
At least 13 sources, aim for 15. Quality over count, but do not return fewer than 13. Other agents cover the
other lanes (list at the bottom), so stay in yours. If a famous source obviously belongs to another lane, skip it.
The "seed" names in your assignment are suggestions, not a required or complete list; replace weak ones with
better ones you find.

## Output: two files in your lane directory (create it)
`<KB>/research/<NN-slug>/sources.json` and `<KB>/research/<NN-slug>/notes.md`
where <KB> = /tmp/claude-0/-home-user-Learn-To-Fly/28206487-101c-52e2-9164-5f164cd67949/scratchpad/kb

### sources.json: a JSON array, one object per source
```json
{
  "key": "Fitts1954",
  "type": "article",
  "authors": [{"family": "Fitts", "given": "Paul M."}],
  "year": 1954,
  "title": "The information capacity of the human motor system in controlling the amplitude of movement",
  "container": "Journal of Experimental Psychology",
  "publisher": "",
  "volume": "47", "issue": "6", "pages": "381-391",
  "edition": "",
  "doi": "10.1037/h0055392",
  "url": "",
  "verified": "web",
  "authority": "One sentence: who the author is and why this source is authoritative.",
  "caveats": "Replication status, known criticism, limits of generalisation. Empty string if none."
}
```
- `key`: first author's surname (ASCII, no spaces) + year of FIRST publication; add a short word if needed to
  disambiguate (`Tufte1983`, `Nielsen1994Heuristics`). Organisations: `W3C2023WCAG22`.
- `type`: one of `book`, `chapter`, `article` (journal), `paper` (conference), `report`, `standard`, `web`
  (essay/article online by a recognized authority), `thesis`.
- `authors`: for organisations use `[{"literal": "World Wide Web Consortium"}]`. For edited books add
  `"editors": [...]` in the same shape.
- `year`: integer, first publication. If you used a later edition put it in `edition` (e.g. "4th ed., 2012").
- `verified`: "web" if you confirmed the bibliographic details by search this session, otherwise "memory".
- The file must be valid JSON (check it with `python3 -c "import json;json.load(open('sources.json'))"`).

### notes.md: one section per source, headed exactly `## <key>`
For each source write 400-800 words of dense, specific notes (not a blurb). Cover:
1. **Core claims**: the thesis and the main principles, stated precisely.
2. **Specifics**: concrete numbers, thresholds, ratios, effect sizes, sample sizes, experimental method,
   named techniques, worked examples, the "small details that make a big difference". Be exact; say "approximately"
   when you are unsure and never fabricate a figure.
3. **Short quotations** (optional, at most two per source, under 25 words each, only if you are confident of the
   wording; give chapter or page if known).
4. **Criticism and status**: has it replicated? who disagreed and why? where does it not apply?
5. **Use for LTF**: 3-6 concrete implications for a learning web app that teaches flying (typography, layout,
   color, interaction, identity, instruction, motivation, whatever fits your lane).
End notes.md with a section `## Lane synthesis` (300-600 words): where the sources agree, where they conflict,
and the 10 most actionable takeaways of the lane.

Write in US English. Do not use em-dashes. Work efficiently: you do not need to read whole books online; combine
what you reliably know with targeted searches to verify and to fill in specifics.

## Your final reply
One line only: number of sources written and the directory path. Everything else goes in the files.

## The lanes (for boundary awareness)
01 classical typography and book typography · 02 legibility and reading research · 03 screen and web typography ·
04 grids, layout, proportion · 05 color science and color theory · 06 color psychology, preference, color
accessibility · 07 Gestalt and visual perception · 08 attention, visual search, eye tracking · 09 HCI foundational
laws and models · 10 usability engineering and heuristics · 11 interaction design and affordances ·
12 information visualization and statistical graphics · 13 information architecture, navigation, wayfinding ·
14 cognitive load and multimedia learning · 15 memory, practice and retention · 16 skill acquisition, motor
learning, simulation and flight training · 17 aviation human factors, cockpit and display design, checklists ·
18 motivation, engagement, gamification, habit · 19 emotion, aesthetics, first impressions, trust ·
20 judgment, decision making, choice architecture, dark patterns · 21 brand identity and distinctiveness ·
22 design philosophy from Arts and Crafts to modernism and after · 23 design systems, standards manuals,
consistency · 24 motion, animation, response time, perceived performance · 25 icons, pictograms, symbols,
semiotics, illustration · 26 writing, plain language, microcopy, content design · 27 accessibility and inclusive
design · 28 forms, input, onboarding, mobile and touch · 29 instructional design and explanation design ·
30 design process, craft, quality, experience design · 31 design research methods and evidence quality ·
32 cartography, chart design, pattern, ornament and editorial design

## Completion gate (read this twice)
There is NO time limit and no token budget to protect. Earlier agents stopped after a few minutes with notes of
150-300 words per source and most sources unverified; their work was sent back. Do not hand back until:
- every source has `verified: "web"` (you searched and confirmed the bibliographic details this session);
- every notes section is 400-800 words, and `wc -w notes.md` shows at least 8,000 words in total;
- no figure in the notes is a guess: confirm by search, or state it qualitatively, or write "not confirmed";
- sources.json parses as JSON.
Write notes.md incrementally (two or three sources per Write/Edit call) so no single call is huge.

## UPDATE: web search is exhausted for this session (overrides anything above that conflicts)
The shared WebSearch budget is used up and WebFetch/curl cannot reach outside hosts. Do NOT attempt searches.
Work from what you reliably know, under these rules:
- Include only sources you are certain exist (canonical, widely cited works). Mark every entry
  `"verified": "memory"` and add `"confidence": "high" | "medium"`; include nothing below medium.
- Fill only bibliographic fields you are confident of; leave DOI, volume, issue and pages BLANK unless certain.
- In notes, keep a number only when it is well established and you are confident of it; otherwise state the
  finding qualitatively. No verbatim quotations: paraphrase. Flag commonly misquoted figures as such.
- The depth requirement stands: 400-700 words per source on argument, principles, named techniques, method,
  findings, criticism, and LTF implications; at least 7,000 words in notes.md; at least 13 sources.
The completion gate's "verified: web" requirement no longer applies; everything else in it does.
