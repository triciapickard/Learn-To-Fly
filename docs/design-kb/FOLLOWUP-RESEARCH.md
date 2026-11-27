# Follow-up: finish your lane to the brief

Your lane was handed back before it met the brief. There is NO time limit and no token budget to protect:
take as many tool calls as it needs. Depth and accuracy matter more than speed.

1. Bring every `## <key>` section in notes.md to 400-800 words covering all five headings in the brief (core
   claims; specifics with method, sample, numbers, named techniques; short quotations only if sure; criticism and
   replication status; use for LTF). Edit two or three sources per Edit/Write call so no single call is huge.
2. For every source still marked "memory", or whose DOI/pages/figures you flagged as unconfirmed, run WebSearch
   (and WebFetch if available) and correct sources.json. Remove any DOI, page range or statistic you cannot
   confirm rather than leaving a guess; say "not confirmed" in the notes where a commonly quoted figure could not
   be traced. Drop a source only if you cannot confirm it exists, and replace it so the lane keeps at least 13.
3. Keep `## Lane synthesis` at 300-600 words.
4. Before finishing run `wc -w notes.md` (target: at least 8,000 words) and validate sources.json with python.

Final reply: one line: source count, total words in notes.md, number web-verified.
