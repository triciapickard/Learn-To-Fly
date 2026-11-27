// Learn to Fly Design Knowledge Base: book design.
// 6 x 9 in trim, Source Serif 4 with optical sizes, JetBrains Mono for tokens and rule IDs.

#let serif = ("Source Serif 4", "Libertinus Serif")
#let serif-caption = ("Source Serif 4 Caption", "Source Serif 4", "Libertinus Serif")
#let serif-subhead = ("Source Serif 4 Subhead", "Source Serif 4", "Libertinus Serif")
#let serif-display = ("Source Serif 4 Display", "Source Serif 4", "Libertinus Serif")
#let mono = ("JetBrains Mono", "DejaVu Sans Mono")
#let accent = rgb("#00757c") // LTF --color-accent, "the horizon line"
#let ink = rgb("#171614") // LTF --color-ink
#let ink2 = rgb("#595856") // LTF --color-ink-2
#let hair = 0.4pt + rgb("#81807e")
#let book-title = "The Learn to Fly Design Knowledge Base"

#let caps(body) = text(tracking: 0.08em, font: serif-caption, upper(body))
#let horizontalrule = align(center, block(above: 1.2em, below: 1.2em, text(fill: ink2)[#sym.ast.op #h(1em) #sym.ast.op #h(1em) #sym.ast.op]))

#let ltf-part-end() = [#metadata("part-end") <part-end>]

// ---------- running heads ----------
#let page-is-blank(p) = {
  let h1s = query(heading.where(level: 1))
  if not h1s.any(h => h.location().page() == p + 1) { return false }
  let ends = query(<part-end>).filter(e => e.location().page() <= p)
  if ends.len() == 0 { return false }
  ends.last().location().page() < p
}

#let running-head = context {
  let p = here().page()
  let h1s = query(heading.where(level: 1))
  let h2s = query(heading.where(level: 2))
  if (h1s + h2s).any(h => h.location().page() == p) { return }
  if page-is-blank(p) { return }
  let num = counter(page).display()
  let part = h1s.filter(h => h.location().page() <= p)
  let part = if part.len() > 0 { part.last() } else { none }
  let chaps = h2s.filter(h => h.location().page() <= p and (part == none or h.location().page() >= part.location().page()))
  let chap = if chaps.len() > 0 { chaps.last() } else { none }
  set text(size: 8pt, font: serif-caption, fill: ink2, number-type: "lining")
  if calc.even(p) {
    let label = if part == none { book-title } else if part.supplement != [] and part.supplement != none and part.supplement != auto {
      [Part #part.supplement #h(0.6em) #part.body]
    } else { part.body }
    [#text(fill: ink, num) #h(1.2em) #caps(label)]
  } else {
    let label = if chap != none {
      if chap.supplement != [] and chap.supplement != none and chap.supplement != auto { [#chap.supplement #h(0.6em) #chap.body] } else { chap.body }
    } else if part != none { part.body } else { book-title }
    align(right)[#caps(label) #h(1.2em) #text(fill: ink, num)]
  }
}

#let running-foot = context {
  let p = here().page()
  let h2s = query(heading.where(level: 2))
  let h1s = query(heading.where(level: 1)).filter(h => h.supplement == [])
  if (h2s + h1s).any(h => h.location().page() == p) {
    align(center, text(size: 8pt, font: serif-caption, number-type: "lining", counter(page).display()))
  }
}

// ---------- headings (numbers are computed by the Lua filter) ----------
#let ltf-part(num, title, lbl) = {
  pagebreak(to: "odd", weak: true)
  [#heading(level: 1, supplement: [#num])[#title] #label(lbl)]
}
#let ltf-backmatter(title, lbl) = {
  pagebreak(to: "odd", weak: true)
  [#heading(level: 1, supplement: [])[#title] #label(lbl)]
}
#let ltf-chapter(num, title, lbl) = {
  pagebreak(weak: true)
  [#heading(level: 2, supplement: [#num])[#title] #label(lbl)]
}
#let ltf-plain-chapter(title, lbl) = {
  pagebreak(weak: true)
  [#heading(level: 2, supplement: [])[#title] #label(lbl)]
}
#let ltf-section(num, title) = heading(level: 3, supplement: [#num])[#title]

// ---------- blocks ----------
#let grade-names = (A: "replicated evidence", B: "some evidence", C: "expert consensus", D: "contested")

#let ltf-rule(id, grade, title, body) = [#block(
  width: 100%, breakable: true, above: 1.5em, below: 1.5em,
  stroke: (top: 0.8pt + accent, bottom: hair), inset: (top: 7pt, bottom: 8pt, x: 0pt),
)[
  #set par(first-line-indent: 0pt, spacing: 0.75em)
  #block(below: 0.55em, sticky: true)[
    #text(font: mono, size: 7.6pt, weight: "medium", fill: accent, id)
    #h(1fr)
    #text(size: 7.6pt, font: serif-caption, fill: ink2)[#caps[Grade #grade] #h(0.3em) #text(style: "italic", grade-names.at(grade, default: ""))]
  ]
  #block(below: 0.6em, sticky: true, text(font: serif-subhead, weight: "semibold", size: 11pt, title))
  #set text(size: 9.7pt)
  #set par(leading: 0.66em)
  #body
] #label(id)]

#let callout(kicker, body) = block(
  width: 100%, breakable: true, above: 1.4em, below: 1.4em,
  stroke: (left: 1.5pt + accent), inset: (left: 11pt, y: 2pt),
)[
  #set par(first-line-indent: 0pt, spacing: 0.75em)
  #set text(size: 9.6pt)
  #set par(leading: 0.62em)
  #block(below: 0.5em, sticky: true, text(size: 7.6pt, fill: accent, weight: "semibold", caps(kicker)))
  #body
]
#let ltf-myth(body) = callout([Does not hold up], body)
#let ltf-apply(body) = callout([What this means for Learn to Fly], body)

#let bibentry(body) = block(width: 100%, above: 0.7em, below: 0.7em, {
  set text(size: 8.6pt, font: serif-caption, number-type: "lining")
  par(first-line-indent: 0pt, hanging-indent: 1.3em, justify: false, leading: 0.52em, body)
})

#let ltf-part-sources(count, body) = {
  v(1.6em)
  block(sticky: true, below: 0.9em, stroke: (top: hair), inset: (top: 8pt), width: 100%)[
    #text(font: serif-subhead, weight: "semibold", size: 12pt)[Sources cited in this Part]
    #h(1fr) #text(size: 8pt, font: serif-caption, fill: ink2)[#count works]
  ]
  body
}

// ---------- table of contents and rule index ----------
#let pageno(lbl) = context {
  let loc = locate(label(lbl))
  let n = counter(page).at(loc).first()
  let pn = loc.page-numbering()
  link(loc, if pn == none { str(n) } else { numbering(pn, n) })
}

#let ltf-toc(entries) = {
  set par(first-line-indent: 0pt, justify: false)
  for e in entries {
    if e.kind == "part" {
      block(above: 1.5em, below: 0.7em, sticky: true)[
        #text(size: 7.6pt, fill: accent, weight: "semibold", caps[Part #e.num]) \
        #text(font: serif-subhead, weight: "semibold", size: 11pt, e.title) #h(1fr) #text(number-type: "lining", size: 9.5pt, pageno(e.label))
      ]
    } else if e.kind == "plain" {
      block(above: 0.9em, below: 0.6em)[#text(style: "italic", e.title) #h(1fr) #text(number-type: "lining", size: 9.5pt, pageno(e.label))]
    } else {
      block(above: 0.52em, below: 0.52em)[
        #set text(size: 9.5pt)
        #grid(columns: (1.9em, 1fr, 2.4em), column-gutter: 0.3em,
          text(number-type: "lining", fill: ink2, e.num), e.title, align(right, text(number-type: "lining", pageno(e.label))))
      ]
    }
  }
}

#let ltf-rule-index(entries) = {
  set par(first-line-indent: 0pt, justify: false, leading: 0.5em)
  set text(size: 8.4pt, font: serif-caption)
  let current = none
  for e in entries {
    if e.part != current {
      current = e.part
      block(above: 1.5em, below: 0.7em, sticky: true, text(size: 9.6pt, font: serif-subhead, weight: "semibold")[Part #e.part #h(0.5em) #e.parttitle])
    }
    block(above: 0.62em, below: 0.62em, breakable: false,
      grid(columns: (4.6em, 1fr, 1em, 2.4em), column-gutter: 0.5em,
        link(label(e.id), text(font: mono, size: 7pt, fill: accent, e.id)),
        e.title,
        text(fill: ink2, e.grade),
        align(right, text(number-type: "lining", pageno(e.id)))))
  }
}

#let ltf-title-page(subtitle, edition) = {
  set page(header: none, footer: none)
  set par(first-line-indent: 0pt, justify: false)
  v(1.5in)
  text(size: 8.5pt, fill: accent, weight: "semibold", caps[Learn to Fly])
  v(0.5em)
  line(length: 2.2em, stroke: 0.8pt + accent)
  v(1.1em)
  text(font: serif-display, size: 30pt, weight: "light", hyphenate: false)[#set par(leading: 0.5em); The Design \ Knowledge Base]
  v(1.2em)
  block(width: 82%, text(font: serif-subhead, size: 12pt, style: "italic", fill: ink2, subtitle))
  v(1fr)
  text(size: 8.5pt, font: serif-caption, fill: ink2, edition)
  pagebreak()
}

// ---------- the book ----------
#let book(body) = {
  set document(title: book-title, author: "Learn to Fly")
  set page(
    width: 6in, height: 9in,
    margin: (inside: 0.96in, outside: 0.84in, top: 1in, bottom: 1in),
    header: running-head, header-ascent: 0.32in,
    footer: running-foot, footer-descent: 0.38in,
    numbering: "i",
  )
  set text(font: serif, size: 10.5pt, lang: "en", region: "US", fill: ink, number-type: "old-style", hyphenate: true, costs: (hyphenation: 120%, runt: 150%, widow: 200%, orphan: 200%))
  set par(justify: true, leading: 0.76em, spacing: 0.76em, first-line-indent: 1.25em, linebreaks: "optimized")
  show raw: set text(font: mono, size: 0.88em, number-type: "lining", ligatures: false)
  show link: it => it
  show strong: set text(weight: "semibold")
  set list(indent: 1.25em, body-indent: 0.6em, spacing: 0.6em, marker: ([•], [–]))
  set enum(indent: 1.25em, body-indent: 0.6em, spacing: 0.6em)
  show list: set block(above: 0.9em, below: 0.9em)
  show enum: set block(above: 0.9em, below: 0.9em)
  show list: set par(first-line-indent: 0pt)
  show enum: set par(first-line-indent: 0pt)
  set quote(block: true)
  show quote.where(block: true): it => block(inset: (x: 1.25em), above: 1.1em, below: 1.1em, {
    set text(size: 9.8pt); set par(first-line-indent: 0pt); it.body
  })
  set footnote.entry(separator: line(length: 4em, stroke: hair), gap: 0.5em)
  show footnote.entry: set text(size: 8.2pt, font: serif-caption)
  show footnote.entry: set par(first-line-indent: 0pt, leading: 0.5em)

  // tables
  set table(inset: (x: 4pt, y: 4pt), stroke: (x, y) => (top: if y == 0 { 0.7pt + ink } else if y == 1 { hair } else { 0.25pt + rgb("#dfdedc") }))
  set table.hline(stroke: none)
  show table: it => block(stroke: (bottom: 0.7pt + ink), it)
  show table: set text(size: 8.3pt, font: serif-caption, number-type: "lining", hyphenate: true)
  show table: set par(justify: false, first-line-indent: 0pt, leading: 0.48em)
  show table.cell.where(y: 0): set text(weight: "semibold")
  show figure: set block(breakable: true, above: 1.4em, below: 1.4em)
  show figure.caption: set text(size: 8.4pt, font: serif-caption, fill: ink2)
  set figure(supplement: none, numbering: none)

  // Part opener
  show heading.where(level: 1): it => {
    set par(first-line-indent: 0pt, justify: false)
    if it.supplement == [] {
      v(0.9in)
      block(below: 2.2em, text(font: serif-display, size: 24pt, weight: "regular", hyphenate: false, it.body))
    } else {
      v(1.6in)
      text(size: 8.5pt, fill: accent, weight: "semibold", caps[Part #it.supplement])
      v(0.3em)
      line(length: 2.2em, stroke: 0.8pt + accent)
      v(0.9em)
      block(below: 2.6em, text(font: serif-display, size: 27pt, weight: "light", hyphenate: false, {set par(leading: 0.5em); it.body}))
    }
  }
  // Chapter opener
  show heading.where(level: 2): it => {
    set par(first-line-indent: 0pt, justify: false)
    v(0.72in)
    if it.supplement != [] {
      text(size: 8.5pt, fill: accent, weight: "semibold", number-type: "lining", caps[Chapter #it.supplement])
      v(0.55em)
    }
    block(below: 2.4em, text(font: serif-display, size: 20pt, weight: "regular", hyphenate: false, {set par(leading: 0.5em); it.body}))
  }
  show heading.where(level: 3): it => block(above: 2em, below: 1.05em, sticky: true, {
    set par(first-line-indent: 0pt, justify: false)
    set text(font: serif-subhead, size: 12.2pt, weight: "semibold", hyphenate: false)
    if it.supplement != [] { text(fill: ink2, weight: "regular", number-type: "lining", it.supplement); h(0.7em) }
    it.body
  })
  show heading.where(level: 4): it => block(above: 1.5em, below: 0.8em, sticky: true, {
    set par(first-line-indent: 0pt, justify: false)
    text(font: serif, size: 10.4pt, weight: "semibold", style: "italic", hyphenate: false, it.body)
  })
  show heading.where(level: 5): it => block(above: 1.2em, below: 0.7em, sticky: true, text(size: 8.4pt, weight: "semibold", caps(it.body)))
  body
}
