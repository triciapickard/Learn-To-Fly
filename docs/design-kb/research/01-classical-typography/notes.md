# Lane 01: classical typography and book typography

Confidence note: bibliographic details of Bringhurst, Warde and Hochuli were confirmed by web search this session; the rest are from memory (marked "memory" in sources.json). Figures below are given as the books commonly report them; where I am unsure I say "approximately". The follow-up web verification could not be run (the shared web search budget was exhausted), so every source other than Bringhurst, Warde and Hochuli remains unverified by search; details were kept only where confidently known, and unconfirmed quotations and figures were removed. No quotation in this file is verbatim-confirmed.

## Bringhurst1992

**Core claims.** Typography is the craft of giving language a durable, readable visual form, and good practice rests on rhythm, proportion, harmony and counterpoint rather than on rules of fashion. The book is organized as numbered rules (for example 2.1.2) under eight chapters: Typography is; Rhythm and Proportion; Harmony and Counterpoint; Structural Forms and Devices; Prowling the Specimen Books; Mixing Type; Stuff and Nonsense (signs, symbols, ornament); Shaping the Page. His stance is that the typographer serves the text and the reader, and that type, like music, needs a consistent underlying pulse.

**Specifics.**
- Measure: a line of about 66 characters (letters and spaces) is the ideal for a single-column page; 45 to 75 is acceptable; 40 to 50 for multi-column work. Very short lines and very long lines both tire the reader.
- Leading: basic leading around 120% of the type size is a starting point (for example 10 pt on 12 pt) to be adjusted for typeface, line length and x-height; long lines and large x-heights need more.
- Word space: in justified text roughly a quarter em (range one fifth to one third); tighten in large sizes, loosen with long lines. Letterspace capitals and small caps by roughly 5 to 10%; never letterspace lowercase running text (blackletter being a historical exception).
- Scale: use a modular scale and the traditional point-size run (6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 36, 48, 60, 72). Choose a few related sizes, not many close ones.
- Details: real typographic quotation marks and apostrophes; hyphen, en dash (ranges, spaced for parenthetical use) and em dash are different marks; true small caps (never shrunken capitals); text (old-style) figures in running text, lining figures in tables and with capitals; tabular figures for columns; real italics; ligatures; hanging punctuation in the margin; avoid more than about three consecutive hyphenated lines; avoid single-letter or two-letter hyphenation fragments; avoid widows and orphans.
- Pages: discusses page proportions (2:3, root-two, golden section and others) and the harmony between text block and margins.

**Criticism and status.** These are craft norms. Empirical reading research (lane 02) finds readers tolerate a wide range of line length and spacing, so many details matter for polish and trust more than for speed. Some rules (spaced en dash, single space after a period) are conventions that vary by publisher. The golden-ratio material is not evidence of preference (see lane 04).

**Use for LTF.**
1. Set lesson body at 45 to 75 characters per line (about 66 target); cap prose width with `ch` units, never px.
2. Use real quotes, dashes, text figures in prose, tabular lining figures in instrument readouts and V-speed tables.
3. Pick a small modular scale from design tokens and refuse in-between sizes.
4. Line height about 1.4 to 1.5 on screen for body (screen adjustment of the 120% print figure; see lane 03) with more for long lines.
5. Small caps or tracked caps for labels such as "KIAS" and "MSL" instead of bold shouting.
6. Hyphenation and `text-wrap: pretty` to avoid widows in lesson text.

## Tschichold1928

**Core claims.** The new typography must be functional, clear and of its time. Tschichold argued that design should express the content in an objective way, drop symmetrical centered layouts and ornament, adopt sans-serif ("grotesque") type as the only type of the age, use asymmetrical balance, strong contrast of size, weight and form, white space as an active element, and photography rather than illustration. The book came out of his 1925 "Elementare Typographie" issue of Typographische Mitteilungen.

**Specifics.**
- Principles: asymmetry; contrast (large and small, heavy and light, horizontal and vertical); a small number of sizes and weights; ranged-left text; use of rules and bars to structure; flush layout on standard paper formats (the DIN A series, ratio 1:root-2, standardized from 1922). He proposed standardized business letters (later reflected in DIN 676, 1930).
- Typefaces: favored Akzidenz-Grotesk type and similar grotesques, and described Futura as a promising start. Capitals-only or lowercase-only proposals (after Bayer's Universal alphabet) appear as an experimental discussion.
- Content sections: the history of typography as decline (from his viewpoint), the rules for posters, advertisements, business forms, books, and a catalog of recommended type styles.

**Criticism and status.** From the late 1930s Tschichold repudiated the absolutism of this book, writing that its rules had a totalitarian tinge (1946, "Glaube und Wirklichkeit"). He returned to centered classical layouts for books and, as typographer at Penguin Books (1947 to 1949), produced the Penguin Composition Rules and a standardized series design that remains a model of systematic craft. Historians (Kinross) note the book's influence on grids and information design is greater than its direct rules.

**Use for LTF.**
1. Asymmetric, flush-left, ragged-right layouts with strong size and weight contrast suit instruments and procedural content.
2. A small, fixed set of styles (a "series design") gives identity cheaply, as Penguin proved.
3. Use rules and white space to structure rather than boxes and cards.
4. Do not take the sans-only rule as law: the lesson prose can use a serif.
5. Standard formats imply a disciplined, repeatable page template for every lesson.

## Tschichold1975

**Core claims.** The mature Tschichold argues for the classical book: a harmonious, rule-bound page in which every proportion is deliberate and the reader is never conscious of the design. The collected essays include "Canons of Page Construction" (originally 1953), "Quality in Book Production," "Paper Formats," and essays on illuminated manuscripts, type, and the "morality" of good design.

**Specifics.**
- The canon: for a page of proportion 2:3 (also found in Villard de Honnecourt diagrams and the Van de Graaf canon), margins in the ratio 2:3:4:6 for inner:top:outer:bottom, equivalently one ninth, one ninth, two ninths and two ninths of page width and height respectively. The text block shares the proportions of the page and its height equals the page width. He found the construction in many medieval manuscripts and early printed books and used it in his Penguin pages.
- Margins grow progressively: inner smallest because the spread's inner margins combine, bottom largest for the thumb and visual weight.
- He insists on consistent word spacing, avoiding letterspacing of lowercase, using small caps and old-style figures properly, and on text typefaces such as Sabon (which he designed in 1964 for Linotype, Monotype and Stempel jointly).
- Formats and typefaces should follow paper and printing economy.

**Criticism and status.** The canon is a design heuristic. Scholars question how widely medieval scribes used it, and no experiment shows readers prefer it. As an ideal of margin and text block relationship it is still a useful starting grid.

**Use for LTF.**
1. Make lesson reading pages with generous, unequal margins (more at bottom or sides) rather than full-bleed text.
2. Treat margins as design tokens; use a ratio rather than arbitrary values.
3. Use a consistent system (grid) across lesson pages so the reader never wonders where things are.
4. Use text figures and small caps in prose for a literary, trustworthy tone while keeping tabular figures in data.
5. Borrow the "morality of good design" idea for how the app treats content: honest, restrained.

## Morison1930

**Core claims.** Typography is "the craft of arranging printing types" to help the reader grasp the author's message. It is primarily utilitarian, with aesthetic consequences secondary. The first principle: any arrangement that comes between author and reader is bad. Convention is not tyranny but the accumulated result of readers' habits, so good text typography changes slowly.

**Specifics.**
- Roman lowercase for continuous reading; capitals for headings and display, but sparingly.
- Text should be set to a single, consistent texture: the same type, spacing and leading across the page.
- Letterspacing of lowercase is condemned; word spacing should be even and tight enough to keep the line as a unit; justified composition requires adequate measure.
- Title pages, headings and display should be proportionate to the reader's attention, avoiding mannerism and decoration.
- His work as typographic adviser to The Times produced Times New Roman (1931, drawn with Victor Lardent), a face tuned for small sizes, narrow columns, rough paper and fast presses: higher x-height, sturdy serifs, tight fit.

**Criticism and status.** Later scholars (Kinross, Warde critics) note that "neutral" typography still conveys values, and Morison's conservatism resisted modernism. The utilitarian emphasis remains a useful test, though.

**Use for LTF.**
1. Make the default text style conservative and consistent; reserve novelty for identity moments (headers, logo, hero).
2. Choose a text face optimized for small sizes and rough rendering (low-resolution screens), like Times was for newsprint.
3. The test "does this come between learner and instruction?" for each decoration.
4. Keep display capitals sparse.
5. Hold the same texture across all lessons.

## Warde1930

**Core claims.** Warde's essay compares two goblets, one of gold, ornate and opaque, the other of clear crystal, to say that a wine drinker who wants to see the wine prefers the crystal; so the reader of a book should see the author's thought, not the printing. "Printing demands a humility of mind." Mere typographic display and decorative impulse are the vanity of the printer. Good typography is "invisible" because it works.

**Specifics.**
- Distinguishes the book typographer, whose goal is transparency, from the advertising typographer, whose goal is attention (she was Monotype's publicist and wrote loud advertisements herself).
- Arguments: reading is a learned act where the reader should not be forced to notice letterforms; "mannerisms" should be avoided; modern faces should pursue clarity; she advocates conventional layout so that attention is free.
- Dating: delivered 1930 to the British Typographers' Guild, printed 1932 as by "Paul Beaujon", collected in a book in 1955 (London) and 1956 (Cleveland).

**Criticism and status.** Matthew Butterick's "Drowning the Crystal Goblet" (Practical Typography) argues that the invisibility ideal ignores that typography always carries tone, and that readers do notice. Kinross and others consider the metaphor naive. Still the dominant rhetorical foundation of text typography. Empirical work on legibility does show readers perform best on familiar forms (lane 02).

**Use for LTF.**
1. Two modes: transparent for lesson text and checklists; expressive for brand moments. Do not mix them in one block.
2. In fly mode (used beside the sim) go to crystal: nothing decorative.
3. The goblet test is a review checklist item: "Would a learner notice this?"
4. Separate identity from reading surfaces.
5. Design the identity into the places learners are not reading under load.

## Gill1931

**Core claims.** Typography is the art of making things for use, and the industrial revolution split design from labor. Letters are things, not pictures; the printed page must be built from the reader's needs and the machine's capacities honestly. He argues for hand-and-eye judgment even in machine composition and for a sane, humane relationship to work.

**Specifics.**
- The book is itself set unjustified with uniform word spaces to demonstrate that even spacing yields a better page than stretched justification (a rare practical claim in a polemic).
- Chapters include "Lettering vs. Type," "The Procrustean Bed" (about justification), "Mass production," the line and its spacing, and the economics of printing.
- Design lessons: lettering is generally unconstrained but type must be drawn for composition; letterspacing by area, not by distance; for sans serif a plain, humanist (Johnston-derived) design (Gill Sans, 1927 to 1930).
- Measure and spacing: his famous rule that the spaces between words should be uniform and the lines left ragged.

**Criticism and status.** The social argument is dated. Gill's later documented abusive behavior (Fiona MacCarthy's 1989 biography) complicates how to cite him. The unjustified ragged-right argument has been broadly adopted for screens, where hyphenation and justification are unreliable.

**Use for LTF.**
1. Left-aligned ragged-right text with even word spaces is the safer default on narrow phone columns.
2. Humanist sans (Gill, Johnston lineage) gives a British, aviation-adjacent warmth: Johnston's face is on the London Underground.
3. Honesty-to-use principle for UI: widgets should look like their function.
4. Treat justified text with caution.
5. Consider the humanist sans for headings, serif for body.

## Ruder1967

**Core claims.** Typography is a discipline of contrast and order. Ruder taught that the black of letters and the white of the counters and spaces are equal partners, and that the page's tone ("gray") is a function of type size, weight, spacing and leading. Training in the manual proceeds from the individual letter and its counterform to the line, text block, and page.

**Specifics.**
- The six contrasts (approximately): size, weight, form, direction, texture, and color, used singly and in combination.
- Text should have an even gray; irregular rivers and gaps break it.
- Typefaces: Univers and Akzidenz-Grotesk as main teaching faces; he argued a text face should be quiet and readable, with the typographer restricting variety.
- Layouts based on grids and ranged-left text; study of the white space between lines, words and letters.
- Teaching method: exercises with few elements and strict constraints, as in the Basel school (students later included Wolfgang Weingart).

**Criticism and status.** Swiss typography has been criticized as neutral to the point of anonymity; later designers (Weingart, then postmodernists) revolted. Some of Ruder's rules are style, not evidence.

**Use for LTF.**
1. Use contrast deliberately along a few axes (size, weight, color) to build hierarchy, not decoration.
2. Evaluate "gray" by blurring the page; uneven blocks signal spacing problems.
3. Constrained exercise: design the lesson page with one typeface family and two weights.
4. White space as structure (counter-form) in instrument panels.
5. Teach the team to see the shapes between elements.

## DeVinne1900

**Core claims.** The four-volume The Practice of Typography is a comprehensive American manual of composition. Volumes: Plain Printing Types (1900), Correct Composition (1901), Title-Pages (1901), Modern Methods of Book Composition (1904). He sets out what the competent compositor must know: spacing, justification, punctuation, capitalization, divisions of words, tables, and the shape of the page.

**Specifics.**
- Word spacing: even spacing throughout the line, with thin spaces in equal proportions rather than the "mixed" spacing of the unskilled; avoid rivers.
- Hyphenation: divide by syllables according to dictionary and avoid dividing short words; avoid stacked hyphens.
- Types: discussion of old style (Caslon-like) and modern faces (Bodoni, Didot, and Scotch), and judgments on legibility. He admired the Century type designed for The Century Magazine, a sturdy "modern" face.
- Leading and measure: suitable leading for readability on long measures.
- Title pages: arrangement with a clear hierarchy of lines.

**Criticism and status.** An authoritative practical reference but tied to Victorian practice; the later Chicago Manual of Style inherits many of its rules.

**Use for LTF.**
1. Copy conventions (capitalization, punctuation) deserve a house style guide as stable as a printer's.
2. Tables: the discipline of aligned columns and rules.
3. Title pages: clear hierarchy of lesson title, subtitle and meta.
4. Hyphenation settings should follow syllable rules (use CSS `hyphens: auto` with language set).
5. Historical precedent for sturdy faces at small sizes.

## Updike1922

**Core claims.** Type design evolves by survival: new faces adapt older forms to new technology and taste. Understanding where a face came from guides how to use it. The two volumes cover the Italian, French, Dutch, English and American traditions, from Gutenberg's types to the early twentieth century.

**Specifics.**
- Types discussed with sample settings: Jenson-type romans, Aldine, Garamond, Caslon, Baskerville, Bodoni, Didot, the Scotch modern, Victorian faces.
- Classification by period and national school rather than by abstract features; this feeds the later Vox and BS 2961 systems.
- Use: advises what type suits what purpose and the printer's sensitivity to appropriate style (a Caslon page for English poetry and so on).
- Second edition 1937 adds more on the twentieth century.

**Criticism and status.** Dated in attributions, Anglocentric, and partly superseded by studies of Carter, Morison and others; remains a standard narrative.

**Use for LTF.**
1. A face with a pedigree gives identity credibility; pick one whose history fits aviation (mid-century grotesques, humanist sans).
2. Use a historical classification vocabulary (humanist, transitional, Didone, grotesque) in the design guide.
3. Pair faces from different traditions rather than from similar ones.
4. Avoid fashionable faces that date quickly.
5. Record why each face was chosen.

## Dowding1954

**Core claims.** Good typesetting depends on details of spacing and arrangement that the reader does not consciously see. The book is a manual of rules for word spacing, punctuation, capitals and small caps, paragraphs, lists, line breaks, page breaks and title arrangements.

**Specifics (approximate).**
- Word spaces: optically equal, so the space after letters like "r" or "f" or after round letters may appear larger; compensate. Reduce space around punctuation and letters with open shapes.
- Punctuation: thin spaces before certain marks in British style; the spaced en rule; hang quotations if appropriate.
- Small caps for abbreviations (A.D., a.m.), with letterspacing in capitals.
- Line breaks: avoid ending a page with a hyphenated word, avoid starting a line with a short word fragment, avoid the same word beginning consecutive lines, avoid widow lines at page tops.
- Headings: do not leave heading at the bottom of a page; space above is greater than space below so the heading attaches to what follows.

**Criticism and status.** Specific conventions are British and period; the principle (proximity: heading closer to what follows) is general.

**Use for LTF.**
1. A heading belongs to the text below: more space above than below.
2. Keep headings with their following paragraph (`break-after: avoid`).
3. Optical alignment: align numerals and units in readouts optically.
4. Abbreviations like MSL, AGL in small caps.
5. Keep a punctuation style sheet.

## Hochuli1987

**Core claims.** The small details of letterspacing, wordspacing, linespacing and column structure determine readability and beauty; they depend on each other. The book moves through seven topics, each with annotated examples: letters, letterspacing, words, wordspacing, lines, linespacing, columns.

**Specifics (approximate).**
- Word space should be matched to the letterspacing: tight-fit type needs a narrower word space; wide type, wider.
- Justified text in narrow columns produces holes and rivers, so set narrow columns ragged-right.
- Linespacing grows with line length, x-height and darker typefaces; sans serifs generally need more leading.
- Letterspacing capitals and small caps is necessary; lowercase should not be letterspaced.
- Page: consistent grid and paragraph indent about one em or alternative use of space, but not both.

**Criticism and status.** Compact craft advice; no experiments.

**Use for LTF.**
1. Pair word-space and letter-space settings per font (`letter-spacing` and `word-spacing` tokens).
2. Do not both indent and space paragraphs.
3. Use sans-serif body with generous leading for UI.
4. Narrow columns are ragged-right.
5. Test each font at small sizes in the sim-side layout.

## Kinross1992

**Core claims.** Modern typography is not just a style of the 1920s avant-garde; it is a long process of rationalization starting with the Enlightenment and industrialization (standardization, the printing trades, systematic classification, "the order of the page" in catalogs, newspapers, railway timetables). Tschichold's New Typography is a central moment; after 1945 the Swiss and Dutch work (Ruder, Gerstner, Total Design) continues it. Typography must be understood as a social practice, tied to printers, standards bodies and readers.

**Specifics.**
- Chapters follow nineteenth-century developments, the new typography of the 1920s, and postwar. He documents the role of institutions such as DIN, and the key conflicts such as that between "typographers" and "artists".
- Tschichold's change of view is analyzed as part of the general debate between the modern and the traditional.
- The second edition (2004) adds essays on the changes brought by digital technology.

**Criticism and status.** The interpretation is a scholarly argument; other historians (Meggs, Heller) give more weight to art movements.

**Use for LTF.**
1. The app is part of an industrial, standards-driven tradition (aviation charts, checklists): its typographic identity can honestly draw on that.
2. Use history to justify design choices in a rationale document.
3. Standards (like DIN) as models for a design system.
4. Reader-first viewpoint.
5. Avoid cargo-cult "Swiss style".

## Tracy1986

**Core claims.** Letter design is about spacing, rhythm and the details of form that produce good texture at text sizes. Tracy explains how type designers decide what letters look like, how spacing is fitted, what works for newspapers, and how historical styles were adapted.

**Specifics (approximate).**
- Fitting: sidebearings are set so the white area between letters looks even; round letters need less sidebearing than straight ones; capitals and lowercase differ.
- Rhythm: the vertical stems of lowercase in text create a rhythm that spacing should support.
- Newspaper types: ink gain at small sizes in newsprint leads to open forms, larger x-height, ink traps, and strong serifs.
- The serif and the italic: functional and historical roles; italic as a narrower, sloped companion rather than a slanted roman.
- Text face criteria: "colour" (evenness of tone) matters more than individual letters.

**Criticism and status.** A practitioner account; nothing tested. Digital hinting and variable fonts change production.

**Use for LTF.**
1. Test candidate fonts in paragraphs, not in single words or specimens.
2. Look for a face with a larger x-height and robust forms for low-quality displays, bright light and dim cockpits.
3. Consider ink-gain analogue: light text on dark appears bolder (dark mode), so use slightly lighter weight or looser spacing in Night theme.
4. Use real italics for emphasis.
5. Evaluate "colour" by squinting.

## Noordzij1985

**Core claims.** Letterforms are the result of the writing movement ("the stroke") with a tool; type is shaped by two writing principles: translation (pointed pen) and expansion (broad nib), plus the angle of the tool. Contrast, stress and weight follow from how the stroke is made, and the white within and between letters matters as much as the black.

**Specifics.**
- The "Noordzij cube": a three-dimensional model of letterform variation, commonly described by axes of contrast, weight and angle or stress; used to teach designers how typefaces relate.
- Contrast ranges from low (monoline) to high; its direction depends on the angle of the nib.
- The rhythm of letters comes from the repeated stroke; the shapes of counters must be consistent.
- Teaching tradition at the Royal Academy in The Hague (Gerard Unger, Peter Verheul and others studied under him).

**Criticism and status.** Influential in Dutch type design; some designers argue the model fits written-based forms and not geometric or constructed faces.

**Use for LTF.**
1. A vocabulary for choosing faces: contrast, stress, weight, angle.
2. Pair faces of similar stroke construction (both humanist or both geometric) for a harmonious system.
3. Understand variable-font axes in this light (weight, width, optical size).
4. Counterforms: check small-size clarity of "a", "e", "6", "8".
5. Prefer a face with a consistent logic over a mixed one.

## Smeijers1996

**Core claims.** By cutting punches by hand, Smeijers learned that Renaissance type is shaped by its process: tools, metal, and optical judgment at each size. Type designers today should retain a physical sense of how forms arise. The book has two parts: the sixteenth century (Plantin-Moretus Museum, Antwerp, punches and matrices) and contemporary design.

**Specifics.**
- In metal, each size was cut separately: smaller sizes are wider, sturdier, with looser spacing and heavier detail than scaled-down large sizes. This is the origin of optical sizes.
- Spacing was fixed by the matrix, so the type designer had to judge sidebearings in the cutting.
- Descriptions of how Garamont-type, Granjon and others were cut; how the italic and roman were designed to share a page.
- The argument that digital type design lost craft discipline when designers could scale freely.

**Criticism and status.** Craft-historical argument; some historical claims about specific punchcutters have been refined since.

**Use for LTF.**
1. Use fonts with optical size axes or separate text and display cuts.
2. Small label sizes (instrument captions) need looser spacing and heavier forms.
3. Do not scale one cut across all sizes.
4. Check type at the real pixel sizes in the sim-side layout.
5. Treat font choice as a craft decision, not a default.

## Johnston1906

**Core claims.** Lettering should be learned through the forms made with a broad pen. Johnston's "foundational hand" came from a tenth-century manuscript (British Library Harley 2904). He sets out that good letters should be readable, beautiful and characterful, and that tools and materials shape forms.

**Specifics (approximate).**
- Teaches the pen angle (about 30 degrees to the horizontal for the foundational hand), letter heights measured in pen-widths, proportions of capitals based on Roman inscriptions.
- Spacing: space between letters judged by area, not by measurement.
- In 1916 he designed the sans-serif Johnston typeface for London Underground (original lettering with a circular O and diamond-shaped tittles), a direct ancestor of Gill Sans, wayfinding lettering, and humanist sans design.
- Taught at the Central School in London; influenced Gill and Graily Hewitt.

**Criticism and status.** The book is a practical manual; later calligraphers revised his historical reading.

**Use for LTF.**
1. The humanist sans tradition is a heritage particularly suitable for wayfinding and instruction.
2. The origin of the "readable, beautiful, characterful" triad can guide identity: legibility first, then beauty, then character.
3. Hand-drawn letters can inspire custom headings or lettering for the logo.
4. Pen-based construction suggests natural stroke contrast for handwriting-style annotations.
5. Spacing by area.

## Lane synthesis

**Agreement.** All sources hold that text typography serves the reader first: consistency of texture, even spacing, moderate line length, adequate leading, restraint with display type. They agree on details such as true small caps, proper dashes and quotes, no letterspacing of lowercase, letterspacing capitals, and keeping headings attached to the text that follows. They also agree that type is built from relationships (white as much as black).

**Conflict.** Warde, Morison and Gill (invisible, utilitarian) versus Kinross and Butterick (all typography communicates). Tschichold of 1928 (sans, asymmetry, anti-tradition) versus Tschichold of 1946 onward (classical book). Justified (traditional print) versus ragged (Gill, Ruder, Hochuli, screens). These are craft opinions, not experiments; readers' performance data (lane 02) shows tolerance.

**Ten actionable takeaways.**
1. Cap prose measure near 66 characters (45 to 75).
2. Define a modular type scale and use only its steps.
3. Pair word-space and letter-space to the face; never letterspace lowercase; track capitals about 5 to 10%.
4. Use real typographic marks (quotes, en dash for ranges like 60-70 KIAS, minus sign).
5. Use text figures in prose, tabular lining figures in readouts and tables.
6. Small caps or tracked caps for abbreviations and labels.
7. More space above headings than below; keep headings with following text.
8. Ragged-right on narrow columns; hyphenate with language set when justifying.
9. Use optical-size or separate small-size cuts for captions and instrument labels; open the spacing in dark mode.
10. Define two modes: transparent reading surfaces and expressive identity moments, and keep fly mode transparent.
