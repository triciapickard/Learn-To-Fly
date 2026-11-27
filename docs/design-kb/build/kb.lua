-- Learn to Fly Design Knowledge Base: Pandoc filter (runs after citeproc).
-- Numbers Parts, chapters and sections; turns rule/myth/ltf divs into Typst blocks; builds the
-- table of contents, the per-Part source lists and the index of rules.

local function roman(n)
  local t = { {1000,'M'},{900,'CM'},{500,'D'},{400,'CD'},{100,'C'},{90,'XC'},{50,'L'},{40,'XL'},{10,'X'},{9,'IX'},{5,'V'},{4,'IV'},{1,'I'} }
  local s = ''
  for _, p in ipairs(t) do while n >= p[1] do s = s .. p[2]; n = n - p[1] end end
  return s
end
local function trim(s) return (s:gsub('^%s+', ''):gsub('%s+$', '')) end
local function typ(inlines) return trim(pandoc.write(pandoc.Pandoc({ pandoc.Plain(inlines) }), 'typst')) end
local function typb(blocks) return trim(pandoc.write(pandoc.Pandoc(blocks), 'typst')) end
local function raw(s) return pandoc.RawBlock('typst', s) end
local function q(s) return '"' .. s:gsub('\\', '\\\\'):gsub('"', '\\"') .. '"' end
local function warn(s) io.stderr:write('[kb] ' .. s .. '\n') end

function Pandoc(doc)
  local rules, refs, ref_order = {}, {}, {}
  for _, b in ipairs(doc.blocks) do
    if b.t == 'Div' and b.classes:includes('rule') then
      if rules[b.identifier] then warn('DUPLICATE RULE ID ' .. b.identifier) end
      rules[b.identifier] = true
    elseif b.t == 'Div' and b.identifier == 'refs' then
      for i, e in ipairs(b.content) do
        if e.t == 'Div' then
          local key = e.identifier:gsub('^ref%-', '')
          -- let long URLs break after slashes
          e = pandoc.walk_block(e, { Link = function(l)
            return pandoc.walk_inline(l, { Str = function(s) return pandoc.Str((s.text:gsub('([/%.])(.)', '%1\u{200B}%2'):gsub('([/%.])(.)', '%1\u{200B}%2'))) end })
          end })
          refs[key] = typb(e.content); ref_order[key] = i
        end
      end
    end
  end

  local out, toc, index = {}, {}, {}
  local part_n, chap_n, sec_n, numbered = 0, 0, 0, false
  local part, toc_at, index_at = nil, nil, nil

  local handlers = {
    Cite = function(c)
      if part then for _, ci in ipairs(c.citations) do
        if refs[ci.id] then part.cites[ci.id] = true else warn('UNRESOLVED CITATION ' .. ci.id) end
      end end
    end,
    Str = function(s)
      local pre, id, post = s.text:match('^(%p*)(%u%u%u%-%d%d%d)(.*)$')
      if id then
        if rules[id] then return { pandoc.Str(pre), pandoc.Link({ pandoc.Str(id) }, '#' .. id), pandoc.Str(post) } end
        warn('UNRESOLVED RULE REFERENCE ' .. id)
      end
    end,
    Code = function(c)
      if c.text:match('^%u%u%u%-%d%d%d$') and rules[c.text] then return pandoc.Link({ c }, '#' .. c.text) end
    end,
    Link = function(l)
      if l.target:sub(1, 1) == '#' then
        local t = l.target:sub(2)
        if not (rules[t] or refs[(t:gsub('^ref%-', ''))]) then return l.content end
      end
    end,
  }

  local function flush_part()
    if part then
      local keys = {}
      for k in pairs(part.cites) do keys[#keys + 1] = k end
      table.sort(keys, function(a, b) return ref_order[a] < ref_order[b] end)
      if #keys > 0 then
        local buf = { '#ltf-part-sources(' .. #keys .. ')[' }
        for _, k in ipairs(keys) do buf[#buf + 1] = '#bibentry[' .. refs[k] .. ']' end
        buf[#buf + 1] = ']'
        out[#out + 1] = raw(table.concat(buf, '\n'))
      end
    end
    out[#out + 1] = raw('#ltf-part-end()')
    part = nil
  end

  for _, b in ipairs(doc.blocks) do
    if b.t == 'Header' and b.level == 1 then
      flush_part()
      local title = typ(b.content)
      if b.classes:includes('unnumbered') then
        numbered = false
        local lbl = 'back-' .. b.identifier
        out[#out + 1] = raw('#ltf-backmatter([' .. title .. '], ' .. q(lbl) .. ')')
        toc[#toc + 1] = '(kind: "plain", title: [' .. title .. '], label: ' .. q(lbl) .. ')'
      else
        part_n = part_n + 1; numbered = true
        part = { num = roman(part_n), title = title, cites = {} }
        local lbl = 'part-' .. part_n
        if part_n == 1 then out[#out + 1] = raw('#set page(numbering: "1")\n#counter(page).update(1)') end
        out[#out + 1] = raw('#ltf-part(' .. q(part.num) .. ', [' .. title .. '], ' .. q(lbl) .. ')')
        toc[#toc + 1] = '(kind: "part", num: ' .. q(part.num) .. ', title: [' .. title .. '], label: ' .. q(lbl) .. ')'
      end
    elseif b.t == 'Header' and b.level == 2 then
      local title = typ(b.content)
      if b.classes:includes('unnumbered') or not numbered then
        local lbl = 'plain-' .. b.identifier
        sec_n = -1
        out[#out + 1] = raw('#ltf-plain-chapter([' .. title .. '], ' .. q(lbl) .. ')')
        if not b.classes:includes('notoc') then
          toc[#toc + 1] = '(kind: "plain", title: [' .. title .. '], label: ' .. q(lbl) .. ')'
        end
      else
        chap_n = chap_n + 1; sec_n = 0
        local lbl = 'ch-' .. chap_n
        out[#out + 1] = raw('#ltf-chapter(' .. q(tostring(chap_n)) .. ', [' .. title .. '], ' .. q(lbl) .. ')')
        toc[#toc + 1] = '(kind: "chapter", num: ' .. q(tostring(chap_n)) .. ', title: [' .. title .. '], label: ' .. q(lbl) .. ')'
      end
    elseif b.t == 'Header' and b.level == 3 then
      local num = ''
      if sec_n >= 0 and not b.classes:includes('unnumbered') then sec_n = sec_n + 1; num = chap_n .. '.' .. sec_n end
      out[#out + 1] = raw('#ltf-section(' .. q(num) .. ', [' .. typ(pandoc.walk_block(b, handlers).content) .. '])')
    elseif b.t == 'Div' and b.identifier == 'toc' then
      out[#out + 1] = raw('TOC'); toc_at = #out
    elseif b.t == 'Div' and b.identifier == 'rule-index' then
      out[#out + 1] = raw('INDEX'); index_at = #out
    elseif b.t == 'Div' and b.identifier == 'refs' then
      local buf = {}
      for _, e in ipairs(b.content) do
        if e.t == 'Div' then
          local key = e.identifier:gsub('^ref%-', '')
          buf[#buf + 1] = '#bibentry[' .. refs[key] .. '] #label(' .. q('ref-' .. key) .. ')'
        end
      end
      out[#out + 1] = raw(table.concat(buf, '\n'))
    elseif b.t == 'Div' and b.classes:includes('rule') then
      b = pandoc.walk_block(b, handlers)
      local id, grade = b.identifier, b.attributes.grade or '?'
      if not id:match('^%u%u%u%-%d%d%d$') then warn('BAD RULE ID "' .. id .. '"') end
      if not grade:match('^[ABCD]$') then warn('BAD GRADE on ' .. id) end
      local title = pandoc.Inlines({})
      local first = b.content[1]
      if first and (first.t == 'Para' or first.t == 'Plain') and first.content[1] and first.content[1].t == 'Strong' then
        title = first.content[1].content
        first.content:remove(1)
        while first.content[1] and (first.content[1].t == 'Space' or first.content[1].t == 'SoftBreak') do first.content:remove(1) end
        if #first.content == 0 then b.content:remove(1) end
      else
        warn('RULE WITHOUT BOLD TITLE ' .. id)
      end
      local t = typ(title)
      index[#index + 1] = '(id: ' .. q(id) .. ', grade: ' .. q(grade) .. ', title: [' .. t .. '], part: ' .. q(part and part.num or '') .. ', parttitle: [' .. (part and part.title or '') .. '])'
      out[#out + 1] = raw('#ltf-rule(' .. q(id) .. ', ' .. q(grade) .. ', [' .. t .. '])[')
      for _, c in ipairs(b.content) do out[#out + 1] = c end
      out[#out + 1] = raw(']')
    elseif b.t == 'Div' and (b.classes:includes('myth') or b.classes:includes('ltf')) then
      b = pandoc.walk_block(b, handlers)
      out[#out + 1] = raw(b.classes:includes('myth') and '#ltf-myth[' or '#ltf-apply[')
      for _, c in ipairs(b.content) do out[#out + 1] = c end
      out[#out + 1] = raw(']')
    else
      out[#out + 1] = pandoc.walk_block(b, handlers)
    end
  end
  flush_part()
  if toc_at then out[toc_at] = raw('#ltf-toc((\n' .. table.concat(toc, ',\n') .. (#toc > 0 and ',' or '') .. '\n))') end
  if index_at then out[index_at] = raw('#ltf-rule-index((\n' .. table.concat(index, ',\n') .. (#index > 0 and ',' or '') .. '\n))') end
  warn(('parts=%d chapters=%d rules=%d'):format(part_n, chap_n, #index))
  doc.blocks = out
  return doc
end
