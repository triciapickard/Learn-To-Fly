#!/usr/bin/env python3
"""Check one research lane (or all) against the research brief thresholds."""
import json, os, re, sys
KB = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TYPES = {'book','chapter','article-journal','paper-conference','report','thesis','standard','webpage'}
def check(lane):
    d = os.path.join(KB, 'research', lane); probs = []
    try: src = json.load(open(os.path.join(d, 'sources.json'), encoding='utf-8'))
    except Exception as e: return [f'sources.json unreadable: {e}'], 0, 0, 0
    try: notes = open(os.path.join(d, 'notes.md'), encoding='utf-8').read()
    except Exception as e: return [f'notes.md unreadable: {e}'], len(src), 0, 0
    if len(src) < 13: probs.append(f'only {len(src)} sources (minimum 13)')
    keys = set(); verified = 0
    for s in src:
        k = s.get('key', '')
        if not re.fullmatch(r'[a-z][a-z0-9]*\d{4}[a-z0-9]+', k): probs.append(f'bad key "{k}"')
        if k in keys: probs.append(f'duplicate key {k}')
        keys.add(k)
        if s.get('type') not in TYPES: probs.append(f'{k}: bad type {s.get("type")}')
        for f in ('authors', 'year', 'title'):
            if not s.get(f): probs.append(f'{k}: missing {f}')
        if s.get('verified_via') in ('crossref', 'openlibrary', 'websearch') and len(s.get('verified_evidence', '')) > 20: verified += 1
        else: probs.append(f'{k}: not verified (verified_via / verified_evidence)')
    sections = dict((m.group(1), m.end()) for m in re.finditer(r'^## +([a-z0-9]+)\s*$', notes, re.M))
    parts = re.split(r'^## +[a-z0-9]+\s*$', notes, flags=re.M)
    heads = re.findall(r'^## +([a-z0-9]+)\s*$', notes, re.M)
    wc = lambda t: len(re.findall(r"\b[\w'’-]+\b", t))
    for h, body in zip(heads, parts[1:]):
        n = wc(body)
        if h not in keys: probs.append(f'notes section {h} has no source entry')
        if n < 400: probs.append(f'{h}: only {n} words (400 to 800)')
        for sub in ('Core claims', 'Specifics', 'Replication and criticism', 'Implications for LTF'):
            if '### ' + sub not in body: probs.append(f'{h}: missing "### {sub}"')
        if 'Confirmed this session' not in body: probs.append(f'{h}: missing "Confirmed this session" line')
    for k in keys - set(heads): probs.append(f'{k}: no notes section')
    total = wc(notes)
    if total < 8000: probs.append(f'notes.md is {total} words (minimum 8000)')
    if '—' in notes: probs.append(f'{notes.count(chr(0x2014))} em-dashes in notes.md')
    return probs, len(src), total, verified
if __name__ == '__main__':
    lanes = sys.argv[1:] or sorted(os.listdir(os.path.join(KB, 'research')))
    bad = 0
    for lane in lanes:
        probs, n, words, ver = check(lane)
        print(f'{lane}: {n} sources, {ver} verified, {words} words, {"PASS" if not probs else "FAIL"}')
        for p in probs: print('   -', p)
        bad += bool(probs)
    sys.exit(1 if bad else 0)
