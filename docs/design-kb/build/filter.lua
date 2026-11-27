local kinds = {rule=true, myth=true, ltf=true, detail=true}
local function esc(s) return (s:gsub('\\','\\\\'):gsub('"','\\"')) end
function Div(el)
  for _, c in ipairs(el.classes) do
    if kinds[c] then
      local open
      if c == 'rule' then
        open = string.format('#kb-rule(id: "%s", grade: "%s")[', esc(el.attributes.id or el.identifier or ''), esc(el.attributes.grade or ''))
      else
        open = '#kb-' .. c .. '['
      end
      local out = {pandoc.RawBlock('typst', open)}
      for _, b in ipairs(el.content) do out[#out+1] = b end
      out[#out+1] = pandoc.RawBlock('typst', ']')
      return out
    end
  end
  if el.identifier == 'refs' then
    local out = {pandoc.RawBlock('typst', '#kb-refs[')}
    for _, b in ipairs(el.content) do out[#out+1] = b end
    out[#out+1] = pandoc.RawBlock('typst', ']')
    return out
  end
  if el.classes:includes('csl-entry') then
    local out = {}
    for _, b in ipairs(el.content) do out[#out+1] = b end
    return out
  end
end
function Header(el) el.identifier = ''; return el end
function Image(el) return {} end
function Cite(el) return el.content end
function RawInline(el) if el.format ~= 'typst' then return {} end end
function RawBlock(el) if el.format ~= 'typst' then return {} end end
