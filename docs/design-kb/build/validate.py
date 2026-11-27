#!/usr/bin/env python3
"""Validate Part files: citations resolve, rule IDs unique and well formed, blocks closed,
word floors met, structure and style rules kept.  Usage: validate.py [part-file ...]"""
import json, os, re, sys
KB = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOK = os.path.join(KB, 'book')
parts = {}
for line in open(os.path.join(KB, 'briefs', 'parts.md'), encoding='utf-8'):
    c = [x.strip() for x in line.strip().strip('|').split('|')]
    if len(c) == 6 and c[1].endswith('.md'):
        parts[c[1]] = dict(title=c[2], prefixes=[p.strip() for p in c[3].split(',')], floor=int(c[5].replace(',', '')))
try: keys = {r['id'] for r in json.load(open(os.path.join(KB, 'bibliography', 'references.json'), encoding='utf-8'))}
except Exception: keys = set()
wc = lambda t: len(re.findall(r"\b[\w'’-]+\b", t))
def check(fn, all_ids):
    probs = []; meta = parts.get(fn)
    path = os.path.join(BOOK, fn)
    if not os.path.exists(path): return ['file missing'], {}
    t = open(path, encoding='utf-8').read(); lines = t.split('\n')
    if meta and lines[0].strip() != '# ' + meta['title']: probs.append(f'line 1 must be "# {meta["title"]}"')
    if len(re.findall(r'^# ', t, re.M)) != 1: probs.append('exactly one "# " heading allowed')
    chapters = re.findall(r'^## +(.+)$', t, re.M)
    if not 8 <= len(chapters) <= 12: probs.append(f'{len(chapters)} chapters (need 8 to 12)')
    if chapters and not chapters[-1].lower().startswith('decision list and review checklist'): probs.append('last chapter must be "Decision list and review checklist"')
    if re.search(r'^#{5,} ', t, re.M): probs.append('heading deeper than ####')
    for ch in re.split(r'^## +', t, flags=re.M)[1:]:
        name = ch.split('\n', 1)[0]
        if 'What this means for Learn to Fly' not in ch and not name.lower().startswith('decision list'): probs.append(f'chapter "{name}" lacks "### What this means for Learn to Fly"')
        if wc(ch) < 900: probs.append(f'chapter "{name}" is only {wc(ch)} words')
    # fenced divs
    depth = 0
    for i, l in enumerate(lines, 1):
        if re.match(r'^:::+\s*\S', l): 
            if depth: probs.append(f'line {i}: block opened inside another block')
            depth += 1
        elif re.match(r'^:::+\s*$', l):
            depth -= 1
            if depth < 0: probs.append(f'line {i}: stray closing :::'); depth = 0
        elif l.startswith(':::') : probs.append(f'line {i}: malformed block fence')
    if depth: probs.append('unclosed ::: block')
    if len(re.findall(r'^```', t, re.M)) % 2: probs.append('unclosed ``` code fence')
    grades = {}
    ids = []
    for m in re.finditer(r'^:::+\s*\{([^}]*)\}\s*$', t, re.M):
        a = m.group(1)
        if '.rule' not in a: probs.append(f'unknown block attributes {{{a}}}'); continue
        i = re.search(r'#([A-Z]{3}-\d{3})\b', a); g = re.search(r'grade="([ABCD])"', a)
        if not i or not g: probs.append(f'bad rule header {{{a}}}'); continue
        ids.append(i.group(1)); grades[g.group(1)] = grades.get(g.group(1), 0) + 1
        nxt = t[m.end():m.end() + 6].lstrip('\n')
        if not nxt.startswith('**'): probs.append(f'{i.group(1)}: rule must start with a bold sentence')
    for m in re.finditer(r'^:::+\s*([a-z][\w-]*)\s*$', t, re.M):
        if m.group(1) not in ('myth', 'ltf'): probs.append(f'unknown block "{m.group(1)}"')
    for i in ids:
        if meta and i[:3] not in meta['prefixes']: probs.append(f'{i}: wrong prefix')
        if i in all_ids and all_ids[i] != fn: probs.append(f'{i}: already used in {all_ids[i]}')
        if ids.count(i) > 1: probs.append(f'{i}: used {ids.count(i)} times')
        all_ids[i] = fn
    if len(ids) < 30: probs.append(f'only {len(ids)} rules')
    own = set(ids)
    body = re.sub(r'`[^`\n]*`', lambda m: m.group(0) if re.fullmatch(r'`[A-Z]{3}-\d{3}`', m.group(0)) else '', t)
    for r in sorted(set(re.findall(r'\b([A-Z]{3}-\d{3})\b', body))):
        if r not in own and not (len(sys.argv) == 1 and r in all_ids) and (meta is None or r[:3] in meta['prefixes'] or len(sys.argv) > 1 and fn != 'part-26-audit-identity.md'):
            probs.append(f'reference to unknown rule {r}')
    cited = set(re.findall(r'@([A-Za-z][A-Za-z0-9_]*)', re.sub(r'`[^`\n]*`', '', t)))
    cited = {c for c in cited if re.search(r'\d{4}', c)}
    for c in sorted(cited - keys): probs.append(f'citation key not in references.json: {c}')
    if len(cited) < 12: probs.append(f'only {len(cited)} distinct sources cited')
    n = wc(t)
    if meta and n < meta['floor']: probs.append(f'{n} words, floor is {meta["floor"]}')
    if '—' in t: probs.append(f'{t.count(chr(0x2014))} em-dashes')
    if re.search(r'(?<![-<!|:])---?(?![->|:])', re.sub(r'^\|.*$|^:?-+.*$', '', t, flags=re.M)): probs.append('"--" or "---" used in prose')
    if re.search(r'\[\^', t): probs.append('footnotes are not allowed')
    if re.search(r'\]\(#', t): probs.append('links to headings are not allowed')
    if re.search(r'<(div|span|br|img|table)\b', t): probs.append('raw HTML')
    paras = [p.strip() for p in re.split(r'\n\s*\n', t) if wc(p) > 40]
    dup = len(paras) - len(set(paras))
    if dup: probs.append(f'{dup} duplicated paragraphs')
    return probs, dict(words=n, chapters=len(chapters), rules=len(ids), grades=grades, cited=len(cited))
if __name__ == '__main__':
    files = sys.argv[1:] or sorted(f for f in os.listdir(BOOK) if f.startswith('part-') and f.endswith('.md'))
    all_ids = {}; bad = 0; total = 0
    if len(sys.argv) == 1:
        for fn in files:
            for i in re.findall(r'^:::+\s*\{[^}]*#([A-Z]{3}-\d{3})', open(os.path.join(BOOK, fn), encoding='utf-8').read(), re.M): all_ids.setdefault(i, fn)
    for fn in files:
        fn = os.path.basename(fn); probs, st = check(fn, all_ids)
        total += st.get('words', 0)
        print(f'{fn}: {st} {"PASS" if not probs else "FAIL"}')
        for p in probs: print('   -', p)
        bad += bool(probs)
    print(f'total words: {total}')
    sys.exit(1 if bad else 0)
