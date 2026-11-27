// Learn to Fly Design Knowledge Base: book template
#let accent = rgb("#00757c")
#let accent-tint = rgb("#e6f5f6")
#let ink = rgb("#171614")
#let ink2 = rgb("#595856")
#let line-c = rgb("#cfcecc")
#let warn = rgb("#b71824")
#let warn-tint = rgb("#fdeeec")
#let caution = rgb("#945a00")
#let sunken = rgb("#f3f2f0")
#let sans = ("Inter", "DejaVu Sans")
#let mono = ("JetBrains Mono", "DejaVu Sans Mono")
#let serif = ("Libertinus Serif",)

#let label-line(body, fill: ink2) = text(font: sans, size: 6.8pt, weight: 600, tracking: 0.9pt, fill: fill, upper(body))

#let grade-names = (A: "replicated evidence", B: "some evidence", C: "expert consensus", D: "contested")
#let kb-rule(id: "", grade: "", body) = block(
  width: 100%, breakable: true, above: 1.1em, below: 1.1em,
  stroke: (left: 2pt + accent), inset: (left: 10pt, right: 0pt, top: 3pt, bottom: 3pt),
)[
  #block(below: 0.55em, sticky: true)[
    #text(font: mono, size: 7.4pt, weight: 600, fill: accent)[#id]
    #if id != "" [#label("rule:" + id)]
    #if grade in grade-names [#h(6pt)#label-line[Grade #grade · #grade-names.at(grade)]]
  ]
  #body
]
#let kb-box(title, color, tint, body) = block(
  width: 100%, breakable: true, above: 1.1em, below: 1.1em,
  fill: tint, radius: 2pt, inset: (x: 10pt, y: 8pt),
)[
  #block(below: 0.55em, sticky: true, label-line(fill: color, title))
  #body
]
#let kb-myth(body) = kb-box("Does not hold up", warn, warn-tint, body)
#let kb-ltf(body) = kb-box("For Learn to Fly", accent, accent-tint, body)
#let kb-detail(body) = kb-box("The detail that matters", caution, rgb("#fff6e0"), body)
#let blockquote(body) = block(inset: (left: 14pt, right: 8pt), above: 1em, below: 1em, text(style: "italic", fill: ink2, body))
#let kb-refs(body) = {
  set par(justify: false, hanging-indent: 14pt, first-line-indent: 0pt, spacing: 0.62em, leading: 0.55em)
  set text(size: 8.6pt)
  body
}
#let part-counter = counter("kb-part")
#let kb-part(title, blurb: none) = {
  pagebreak(to: "odd", weak: true)
  part-counter.step()
  context counter(heading).update((part-counter.get().first(), 0))
  page(header: none, footer: none)[
    #v(1.9in)
    #context label-line(fill: accent)[Part #part-counter.display("1")]
    #v(4pt)
    #heading(level: 1, numbering: none, title)
    #v(10pt)
    #if blurb != none { text(size: 10.5pt, fill: ink2, blurb) }
    #v(22pt)
    #context {
      let me = query(selector(heading.where(level: 1)).before(here())).last()
      let nexts = query(selector(heading.where(level: 1)).after(here()))
      let chs = if nexts.len() > 0 {
        query(selector(heading.where(level: 2)).after(me.location()).before(nexts.first().location()))
      } else { query(selector(heading.where(level: 2)).after(me.location())) }
      set text(font: sans, size: 8.4pt)
      for c in chs {
        block(above: 0.5em, below: 0.5em)[
          #link(c.location())[#c.body] #box(width: 1fr, repeat(text(fill: line-c)[ . ])) #c.location().page()
        ]
      }
    }
  ]
}

#let kb-book(title: "", subtitle: "", edition: "", body) = {
  set document(title: title, author: "Learn to Fly")
  set page(
    width: 6in, height: 9in,
    margin: (inside: 0.85in, outside: 0.7in, top: 0.82in, bottom: 0.85in),
    header: context {
      let p = here().page()
      let parts = query(selector(heading.where(level: 1)).before(here()))
      let chs-here = query(heading.where(level: 2)).filter(h => h.location().page() == p)
      if chs-here.len() > 0 or parts.len() == 0 { return }
      let chs = query(selector(heading.where(level: 2)).before(here()))
      set text(font: sans, size: 7pt, fill: ink2)
      let l = parts.last().body
      let r = if chs.len() > 0 { chs.last().body } else { [] }
      if calc.odd(p) { grid(columns: (1fr, auto), [], r) } else { grid(columns: (auto, 1fr), l, []) }
    },
    footer: context {
      set text(font: sans, size: 7.4pt, fill: ink2)
      let p = counter(page).display()
      if calc.odd(here().page()) { align(right, p) } else { align(left, p) }
    },
  )
  set text(font: serif, size: 10.2pt, fill: ink, lang: "en", region: "us", hyphenate: true, number-type: "old-style")
  set par(justify: true, leading: 0.66em, spacing: 0.95em, linebreaks: "optimized")
  show raw: set text(font: mono, size: 8.2pt)
  show link: it => it
  set list(indent: 4pt, body-indent: 7pt, marker: text(fill: accent)[–])
  set enum(indent: 4pt, body-indent: 7pt)
  set terms(hanging-indent: 12pt)
  show heading: set text(font: sans, fill: ink, number-type: "lining", hyphenate: false)
  show heading: set par(justify: false, leading: 0.5em)
  show heading.where(level: 1): it => block(text(size: 25pt, weight: 700, tracking: -0.4pt, it.body))
  set heading(numbering: (..n) => { let a = n.pos(); if a.len() == 2 { numbering("1.1", ..a) } })
  show heading.where(level: 2): it => {
    pagebreak(weak: true)
    v(0.5in)
    if it.numbering != none { block(below: 6pt, text(font: mono, size: 9pt, weight: 500, fill: accent, counter(heading).display(it.numbering))) }
    block(below: 1.5em, text(size: 19pt, weight: 700, tracking: -0.3pt, it.body))
  }
  show heading.where(level: 3): it => block(above: 1.7em, below: 0.8em, sticky: true, text(size: 11.6pt, weight: 650, it.body))
  show heading.where(level: 4): it => block(above: 1.3em, below: 0.6em, sticky: true, text(size: 9.4pt, weight: 650, fill: ink2, it.body))
  show heading.where(level: 5): it => block(above: 1.1em, below: 0.5em, sticky: true, text(size: 8.6pt, weight: 600, style: "italic", fill: ink2, it.body))
  set table(stroke: (x, y) => (top: if y == 0 { 0.9pt + ink } else if y == 1 { 0.5pt + ink } else { 0.3pt + line-c }, bottom: 0.9pt + ink), inset: (x: 5pt, y: 4.5pt))
  show table: set text(font: sans, size: 7.5pt, number-type: "lining", hyphenate: true)
  show table: set par(justify: false, leading: 0.5em)
  show table.cell.where(y: 0): set text(weight: 650)
  show figure: set block(breakable: true)
  show footnote.entry: set text(size: 8pt)
  body
}
