#!/usr/bin/env python3
"""Build the Design Knowledge Base PDF.

    pip install typst pypandoc_binary pymupdf
    python3 docs/design-kb/build/build.py            # the book
    python3 docs/design-kb/build/build.py --sample   # the pipeline test fixture
"""
import glob, os, re, subprocess, sys, time
import pypandoc, typst

HERE = os.path.dirname(os.path.abspath(__file__))
KB = os.path.dirname(HERE)
sample = '--sample' in sys.argv
src_dir = os.path.join(HERE, 'sample') if sample else os.path.join(KB, 'book')
bib = os.path.join(src_dir, 'references.json') if sample else os.path.join(KB, 'bibliography', 'references.json')
out_dir = os.path.join(HERE, 'out'); os.makedirs(out_dir, exist_ok=True)
typ_path = os.path.join(out_dir, 'sample.typ' if sample else 'book.typ')
pdf_path = os.path.join(out_dir, 'sample.pdf') if sample else os.path.join(KB, 'Learn-to-Fly-Design-Knowledge-Base.pdf')

files = sorted(glob.glob(os.path.join(src_dir, '*.md')))
t = time.time()
cmd = [pypandoc.get_pandoc_path(), '--from=markdown+smart-implicit_figures', '--to=typst', '--wrap=none',
       '--citeproc', f'--bibliography={bib}', '--metadata=link-citations:true', '--metadata=nocite:@*',
       f'--lua-filter={os.path.join(HERE, "kb.lua")}', f'--template={os.path.join(HERE, "template.typ")}',
       '-o', typ_path, *files]
r = subprocess.run(cmd, capture_output=True, text=True)
sys.stderr.write(r.stderr)
if r.returncode: sys.exit(r.returncode)
print(f'pandoc {time.time()-t:.1f}s'); t = time.time()
typst.compile(typ_path, output=pdf_path, root=HERE, font_paths=[os.path.join(HERE, 'fonts')])
print(f'typst {time.time()-t:.1f}s -> {pdf_path}')
words = sum(len(re.findall(r"\b[\w'’-]+\b", open(f, encoding='utf-8').read())) for f in files)
import pymupdf
print(f'pages: {len(pymupdf.open(pdf_path))}')
print(f'source words: {words}')
