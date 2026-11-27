#!/usr/bin/env python3
"""Merge all research lanes into one de-duplicated bibliography with stable citation keys.

Writes bibliography/references.json (CSL JSON), bibliography/sources-merged.json (full records with
verification data) and bibliography/keys-by-lane.md. Where two lanes describe the same work under
different keys, the first lane's key wins and the other lane's files are rewritten to use it.
--recheck re-queries Crossref for every DOI and Open Library for books without one."""
import json, os, re, sys, time, unicodedata, urllib.parse, urllib.request, difflib
KB = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
R = os.path.join(KB, 'research'); B = os.path.join(KB, 'bibliography'); os.makedirs(B, exist_ok=True)
def norm(s):
    s = unicodedata.normalize('NFKD', str(s or '')).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', ' ', s).strip()
def fam(s):
    a = (s.get('authors') or [{}])[0]
    return norm(a.get('family') or a.get('literal') or '').split(' ')[-1] if a else ''
def title_key(t): return ' '.join(norm(re.split(r'[:.?]', t or '')[0]).split()[:8])
def same(a, b):
    da, db = norm(a.get('doi')).replace(' ', ''), norm(b.get('doi')).replace(' ', '')
    if da and db: return da == db
    if fam(a) != fam(b): return False
    ta, tb = norm(a['title']), norm(b['title'])
    r = difflib.SequenceMatcher(None, ta, tb).ratio()
    short = title_key(a['title']) == title_key(b['title']) and len(title_key(a['title'])) > 8
    if a.get('type') != b.get('type') and not {a.get('type'), b.get('type')} <= {'book', 'report', 'webpage', 'standard'}: return False
    if a.get('type') in ('article-journal', 'paper-conference', 'chapter'):
        return r > 0.93 and str(a.get('year')) == str(b.get('year'))
    return r > 0.93 or short   # books: editions of one work collapse to one entry
merged, rename = [], {}
for lane in sorted(os.listdir(R)):
    p = os.path.join(R, lane, 'sources.json')
    if not os.path.exists(p): continue
    for s in json.load(open(p, encoding='utf-8')):
        s['lane'] = lane
        hit = next((m for m in merged if same(m, s)), None)
        if hit:
            hit['lanes'].append(lane)
            for f in ('doi', 'isbn', 'url', 'pages', 'volume', 'issue', 'publisher', 'publisher_place', 'container_title'):
                if not hit.get(f) and s.get(f): hit[f] = s[f]
            if s['key'] != hit['key']: rename[(lane, s['key'])] = hit['key']
        else:
            if any(m['key'] == s['key'] for m in merged):
                new = s['key'] + 'b'
                while any(m['key'] == new for m in merged): new += 'b'
                rename[(lane, s['key'])] = new; s['key'] = new
            s['lanes'] = [lane]; merged.append(s)
for (lane, old), new in rename.items():
    for fn in ('sources.json', 'notes.md'):
        p = os.path.join(R, lane, fn); t = open(p, encoding='utf-8').read()
        t2 = re.sub(r'(?<![a-z0-9])' + re.escape(old) + r'(?![a-z0-9])', new, t)
        if t2 != t: open(p, 'w', encoding='utf-8').write(t2)
    print(f'renamed {lane}: {old} -> {new}')
def get(url):
    for i in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'design-kb-bibliography-check/1.0'})
            return json.load(urllib.request.urlopen(req, timeout=30))
        except urllib.error.HTTPError as e:
            if e.code == 404: return None
            time.sleep(2 + 3 * i)
        except Exception: time.sleep(2 + 3 * i)
    return 'error'
if '--recheck' in sys.argv:
    prev = {}
    pp = os.path.join(B, 'sources-merged.json')
    if os.path.exists(pp): prev = {s['key']: s.get('recheck') for s in json.load(open(pp, encoding='utf-8'))}
    for i, s in enumerate(merged):
        if prev.get(s['key']) and prev[s['key']].get('result') in ('match', 'found'): s['recheck'] = prev[s['key']]; continue
        if s.get('doi'):
            d = get('https://api.crossref.org/works/' + urllib.parse.quote(s['doi'].strip()))
            if d == 'error': s['recheck'] = dict(via='crossref', result='error')
            elif not d: s['recheck'] = dict(via='crossref', result='doi-not-found')
            else:
                m = d['message']; t = (m.get('title') or [''])[0]
                r = difflib.SequenceMatcher(None, norm(t), norm(s['title'])).ratio()
                cont = norm(s['title']) in norm(t) or norm(t) in norm(s['title'])
                s['recheck'] = dict(via='crossref', result='match' if (r > 0.6 or cont) else 'title-mismatch', crossref_title=t)
        elif s.get('type') in ('book', 'chapter'):
            t = s['title'] if s['type'] == 'book' else (s.get('container_title') or s['title'])
            a = (s.get('authors') or [{}])[0]; a = a.get('family') or a.get('literal') or ''
            d = get('https://openlibrary.org/search.json?limit=5&fields=title,author_name,first_publish_year&title=' + urllib.parse.quote(re.split(r'[:(]', t)[0]) + ('&author=' + urllib.parse.quote(a) if s['type'] == 'book' and 'literal' not in (s.get('authors') or [{}])[0] else ''))
            if d == 'error' or d is None: s['recheck'] = dict(via='openlibrary', result='error')
            else:
                ok = any(difflib.SequenceMatcher(None, norm(x.get('title')), norm(re.split(r'[:(]', t)[0])).ratio() > 0.75 for x in d.get('docs', []))
                s['recheck'] = dict(via='openlibrary', result='found' if ok else 'not-found')
        else: s['recheck'] = dict(via='none', result='agent-only')
        if i % 25 == 0: print('recheck', i, len(merged), flush=True)
        time.sleep(0.15)
merged.sort(key=lambda s: s['key'])
json.dump(merged, open(os.path.join(B, 'sources-merged.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
def names(l): return [({'literal': a['literal']} if a.get('literal') else {'family': a.get('family', ''), 'given': a.get('given', '')}) for a in (l or [])]
csl = []
for s in merged:
    e = {'id': s['key'], 'type': s['type'] if s['type'] != 'standard' else 'report', 'title': s['title'], 'author': names(s.get('authors'))}
    try: e['issued'] = {'date-parts': [[int(str(s['year'])[:4])]]}
    except Exception: pass
    for a, b in (('container_title', 'container-title'), ('volume', 'volume'), ('issue', 'issue'), ('pages', 'page'), ('publisher', 'publisher'), ('publisher_place', 'publisher-place'), ('edition', 'edition'), ('doi', 'DOI'), ('isbn', 'ISBN')):
        if s.get(a): e[b] = str(s[a])
    if s.get('url') and not s.get('doi'): e['URL'] = s['url']
    if s.get('editors'): e['editor'] = names(s['editors'])
    if s.get('original_year'):
        try: e['original-date'] = {'date-parts': [[int(str(s['original_year'])[:4])]]}
        except Exception: pass
    csl.append(e)
json.dump(csl, open(os.path.join(B, 'references.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
with open(os.path.join(B, 'keys-by-lane.md'), 'w', encoding='utf-8') as f:
    f.write('# Citation keys by lane\n\nCite as `[@key]`. Notes for each key are in `research/<lane>/notes.md`.\n')
    for lane in sorted({l for s in merged for l in s['lanes']}):
        f.write(f'\n## {lane}\n\n')
        for s in merged:
            if lane in s['lanes']:
                a = (s.get('authors') or [{}])[0]; a = a.get('family') or a.get('literal') or '?'
                f.write(f'- `{s["key"]}`: {a}{" et al." if len(s.get("authors") or []) > 1 else ""} ({s.get("year")}), {s["title"]}' + (f' (notes also in {", ".join(x for x in s["lanes"] if x != lane)})' if len(s['lanes']) > 1 else '') + '\n')
raw = sum(len(json.load(open(os.path.join(R, l, 'sources.json'), encoding='utf-8'))) for l in os.listdir(R) if os.path.exists(os.path.join(R, l, 'sources.json')))
years = [int(str(s.get('original_year') or s['year'])[:4]) for s in merged if str(s.get('original_year') or s.get('year', ''))[:4].isdigit()]
print(f'raw {raw} -> unique {len(merged)}; years {min(years) if years else "-"} to {max(years) if years else "-"}')
if '--recheck' in sys.argv:
    from collections import Counter
    print(Counter((s['recheck']['via'], s['recheck']['result']) for s in merged))
    for s in merged:
        if s['recheck']['result'] in ('doi-not-found', 'title-mismatch', 'not-found'): print('  CHECK', s['key'], s['lanes'][0], s['recheck'], '|', s['title'][:70])
