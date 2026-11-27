# The Learn to Fly Design Knowledge Base

A cited reference book that is the source of truth for LTF design decisions.

- `Learn-to-Fly-Design-Knowledge-Base.pdf`: the book.
- `book/`: the Markdown source, one file per Part.
- `bibliography/`: the merged, de-duplicated bibliography (`references.json`, CSL JSON).
- `research/`: one folder per research lane with `sources.json` and `notes.md`.
- `briefs/`: the research brief, the writing brief, the lanes and the Parts.
- `build/`: the PDF pipeline (Pandoc Markdown with citations to Typst to PDF) and the checks.

Build: `pip install typst pypandoc_binary pymupdf` then `python3 docs/design-kb/build/build.py`.
