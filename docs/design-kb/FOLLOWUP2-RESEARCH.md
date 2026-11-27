# Follow-up 2: finishing a lane now that web search is exhausted

The session's shared web-search budget is used up and WebFetch cannot reach outside hosts, so nothing more can
be verified online. Do not attempt further searches. Finish the lane from what you reliably know, with honest
confidence labelling. There is no time limit.

1. sources.json: keep `verified: "web"` only where you really confirmed details by search earlier; everything
   else stays `"memory"`. For "memory" entries keep only fields you are confident of (author, year, title,
   publisher or journal are usually safe for canonical works). BLANK any DOI, volume, issue or page range you are
   not sure of. Add a field `"confidence": "high" | "medium"` to every entry: "high" = a canonical, widely cited
   work whose existence and core content you are certain of; "medium" = real but you are less sure of details.
   Remove any entry you would rate lower than medium and replace it with a high-confidence one so the lane keeps
   at least 13 sources.
2. notes.md: bring each `## <key>` section to roughly 400-700 words using what you reliably know of the work:
   its argument and structure, its principles and named techniques, its method, its well-established findings,
   the standard criticisms and replication status, and concrete implications for LTF. This is not padding:
   a writer needs the reasoning and the practical detail, not just a blurb. Precision rules:
   - Keep a number only if it is well established and you are confident of it (for example, a principle count,
     a classic threshold, a widely reproduced result). Otherwise state the finding qualitatively
     ("substantially faster", "roughly a third") or omit it.
   - No verbatim quotations unless web-confirmed earlier. Paraphrase.
   - Where a commonly repeated figure is doubtful or often misquoted, say so: that is valuable.
3. Keep `## Lane synthesis` (300-600 words).
4. Edit two or three sources per Edit/Write call. Finish with `wc -w notes.md` (aim for 7,000+ words) and
   validate sources.json with python.

Final reply: one line: source count, total words, counts of web-verified / high / medium.
