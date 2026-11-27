# Lane 01: classical typography and book typography

Confidence note: web search confirmed the bibliographic details of Bringhurst, Warde and Hochuli. Every other source is written from memory of canonical, widely cited works; their existence and core arguments are certain, but page-level details are not. All quotations were removed (none is web-confirmed); everything is paraphrase. Numbers appear only where they are well established craft conventions, and are called approximate where the books give ranges. Part of this lane's value is that its rules come from craft judgment, not experiments, so each section says where lane 02 (reading research) should be consulted before treating a rule as evidence.

## Bringhurst1992

**Core claims.** Bringhurst treats typography as the craft of giving language a durable visual form, and argues that good practice rests on rhythm, proportion, harmony and counterpoint rather than fashion. The typographer serves the text and the reader. The book is a set of numbered rules (such as 2.1.2) grouped in eight chapters: the nature of typography; rhythm and proportion; harmony and counterpoint; structural forms and devices; a tour of the specimen books (type classification and history); mixing type; signs and symbols; and shaping the page. A recurring analogy is music: a page needs a steady underlying pulse (the leading and the measure), with variations (italic, small caps, size changes) that stay in key with it.

**Specifics.**
- Measure: about 66 characters per line (letters and spaces counted) is his single-column ideal; roughly 45 to 75 is acceptable, and roughly 40 to 50 suits multi-column pages. Too short a line breaks the rhythm with constant returns; too long a line makes the eye lose its place when it travels back to the next line.
- Leading: a typical working figure is about 120% of the type size (10 pt on 12 pt), adjusted upward for long lines, large x-heights, sans-serif faces and dark, heavy faces, and downward for short lines and light faces.
- Word space: in justified text approximately a quarter of an em (a range of about a fifth to a third); less in display sizes. Letterspace capitals and small caps by a few percent (roughly 5 to 10); do not letterspace lowercase running text.
- Scale: he presents the traditional run of type sizes (6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 36, 48, 60, 72) and modular scales built on musical ratios; use a few related steps and avoid sizes that differ too little to read as intentional.
- Marks and numerals: real quotation marks and apostrophes (not the straight typewriter marks); a hyphen, an en dash (ranges, and a spaced form for parenthesis) and an em dash are different characters; true small caps drawn for the face, never shrunken capitals; old-style (text) figures in running text, lining figures with capitals, and tabular figures where columns must align; true italics rather than slanted romans; ligatures where letters collide; hanging punctuation at the margin.
- Hyphenation and breaks: avoid long runs of consecutive hyphenated lines (about three is the practical limit), avoid leaving fragments of one or two letters, and avoid widows and orphans.
- Pages: discusses the proportions of page and text block (the 2:3 page, root-two, golden section), and treats margins and text block as one composition.

**Criticism and status.** The rules are craft norms refined over centuries, not experimental findings. Reading research (lane 02) finds readers fairly tolerant of a wide range of measure and leading, so many details are about polish and trust rather than speed. Some conventions are publisher preferences (spacing around dashes, one space after a period). The proportion chapter should not be read as evidence that golden-ratio pages are preferred; that claim does not survive empirical tests (lane 04). The fourth edition carries versions 4.0 to 4.2 across printings.

**Use for LTF.**
1. Set lesson prose by character count, with a width in `ch` units near 66 and a clamp between roughly 45 and 75.
2. Use real quotation marks, dashes and minus signs; ranges such as 60 to 70 KIAS get an en dash.
3. Use tabular lining figures in instrument readouts and V-speed tables; text figures only in running prose.
4. Define a type scale as tokens and forbid off-scale sizes.
5. Set captions and unit labels (KIAS, MSL, AGL) in tracked small caps instead of bold.
6. Use proper hyphenation and balanced wrapping to avoid widows in lesson text.

## Tschichold1928

**Core claims.** Die neue Typographie is a handbook for designers working in the machine age. It argues that typography is a tool of communication whose form must come from its function, with clarity as the first aim. Design should serve the content in an objective way, not the personal taste or ornament of the typographer. It rejects the symmetrical, centered, ornamented layouts of the nineteenth and early twentieth centuries in favor of asymmetry, contrast, and a plain sans-serif. It grows from his 1925 special issue on elementary typography in Typographische Mitteilungen and reflects the circles of the Bauhaus, De Stijl, Constructivism and the photographers and designers around Lissitzky, Moholy-Nagy and Bayer.

**Specifics.**
- Asymmetry: text blocks are set flush left and ragged right on a visible structure; balance comes from unequal masses (large against small, dark against light), not from mirrored centering. Centered layout is seen as a leftover of an older, hierarchical habit.
- Contrast: the main tool. Size, weight, form, direction and color (black, a single accent color) are placed against one another. Rules, bars and large type shapes organize the page.
- Letterforms: grotesque (sans-serif) types are called the type of the age, because their forms are plain and without historical ornament; he regarded earlier serifed faces as tied to the past. Experiments with lowercase-only setting relate to Bayer's universal alphabet and are treated as an argument rather than a rule for text.
- Photography and the machine: photographs and photomontage are said to replace illustration; the typewriter is accepted as a design tool.
- Standardization: the book promotes standard paper formats (the A series, ratio 1 to root two) and standardized business stationery, in line with the German standards movement of the period (DIN).
- Application chapters treat posters, advertising, business forms, the book and the newspaper, with examples.

**Criticism and status.** The book was extremely influential on grids, information design and Swiss typography. Tschichold himself repudiated its absolutism in the 1930s and 1940s, describing its demand for one right way as dogmatic and politically tinged, and he went on to classical, centered book design; his work for Penguin Books from 1947 to 1949 produced a written set of composition rules and a systematic series design. Historians (Kinross) place the book inside a longer rationalizing tradition rather than as a rupture. Its text on type contains judgments of taste that are not evidence.

**Use for LTF.**
1. Asymmetric, flush-left layouts with strong size and weight contrast suit procedures, instruments and checklists.
2. A small, fixed set of styles and a visible structure (rules, bars) gives identity without decoration.
3. Use one accent color as a structural signal rather than many.
4. Do not copy the sans-only absolutism: reading prose may take a serif.
5. A standard page format across all lessons (like standard stationery) makes the app feel designed as a system.

## Tschichold1975

**Core claims.** This collection of essays presents the mature Tschichold. After his break with the 1928 doctrine he argues that the classical book, with its harmonious proportions and its restraint, is the best solution to the problem of reading long texts, and that perfect proportion is neither accident nor taste but the outcome of rules rediscovered. The essays cover page construction, margins, paper and book formats, type for books, the historical sources of good book design, and the ethical weight of craftsmanship. The title's "morality" means honesty to material and reader, not moralizing.

**Specifics.**
- The canon of page construction: for a page of 2 to 3 proportions, the text block repeats the page proportion, and the margins stand in the ratio 2:3:4:6 (inner, top, outer, bottom). Put another way, divide the page into nine units each way; the inner margin is one unit, the top one unit, the outer two and the bottom two, and the text block's height equals the page width. A diagonal construction on the double page spread (often credited to Van de Graaf and also found in Villard de Honnecourt's drawings) locates the text block. He reports finding the proportions in many medieval manuscripts and early printed books.
- Margin logic: the inner margins of a spread join into one gutter-wide space, so each inner margin is the smallest; the bottom margin is largest because the eye and the hand need it and because the block must seem to rest on it.
- Typography details: even word space, no letterspacing of lowercase, small caps and text figures used correctly, and attention to the color of the page. He designed Sabon (1964), a Garamond-based text face made to be identical across hand-set, Monotype and Linotype composition.
- Paper formats and book formats are tied to the economy of printing: choose a format from a sheet without waste.

**Criticism and status.** The canon is a design heuristic. Whether medieval scribes used it consistently is disputed by historians of the book; no experiment shows that readers prefer it. As a rule for relating margins to a text block it is still useful, and it demonstrates the value of one derived system over arbitrary values.

**Use for LTF.**
1. Derive lesson-page margins from a ratio instead of picking pixels, and make the bottom and outer margins the largest.
2. Treat margin and gutter values as tokens tied to the scale.
3. On wide screens keep the text block narrower than the viewport and let the rest be quiet space.
4. Use text figures and small caps inside prose for a literary tone and tabular figures in data.
5. Use the "honesty to material" idea as a review test: no effect that pretends to be something else (fake paper textures, fake instrument bezels).

## Morison1930

**Core claims.** Morison defines typography as the craft of arranging printing types so as to help the reader understand the author. It is mainly utilitarian; beauty is a by-product of fitness. Any arrangement that comes between the author and the reader is bad. Because readers learn the shape of text by habit, good text typography is conservative and changes slowly; the typographer's first duty is to avoid novelty that distracts. The 1930 essay in The Fleuron was reissued as a book by Cambridge University Press in 1936.

**Specifics.**
- Text: use a roman face of established form for continuous reading, with consistent word spacing, no letterspacing of lowercase, and uniform leading, so that the whole page has one texture.
- Display: capitals, bold and big sizes are for headings, used sparingly and in proportion; the title page is arranged by importance of its lines.
- The typographer should read the text first and understand its structure, so that the arrangement reveals it: chapter openings, subheadings, notes and tables each get a consistent treatment.
- Applied practice: as typographic adviser to The Times he supervised the redesign of the paper in 1932 and the face Times New Roman (1931, drawn with Victor Lardent), whose strong serifs, relatively tight fit and compact forms suit newsprint, small sizes and narrow columns.
- As adviser to Monotype he directed the revival of historical faces (Bembo, Baskerville, Plantin, Perpetua among them).

**Criticism and status.** The idea of the neutral page has been challenged (Kinross, Butterick on Warde): even conventional typography carries cultural meaning. Morison's conservatism also discouraged modernist experiment, though he engaged with it in print. The utilitarian test remains a practical review tool.

**Use for LTF.**
1. Make the default reading style conventional and consistent, and keep novelty to identity moments such as the logo and hero screens.
2. Choose faces tuned for small sizes and difficult rendering (the way Times was tuned for newsprint): robust serifs, generous x-height, forgiving spacing.
3. Review each decoration with the test: does this stand between the learner and the lesson?
4. Give every recurring element (callout, checklist, table) exactly one treatment across the app.
5. Read the content structure first and let the layout expose it, as lesson steps and decision points.

## Warde1930

**Core claims.** Beatrice Warde's essay, delivered as a talk in 1930 under the title Printing Should Be Invisible, builds on the image of two wine goblets: one of gold, richly wrought and opaque, the other of clear crystal. Someone who values the wine wants the crystal, because it shows the wine; the reader likewise wants the author's thought, not the printing. Typography is therefore a service whose best result is transparency. The typographer needs humility, must not use ornament to display personal taste, and should rely on the reader's trained habits: unusual forms make the reader notice the vessel instead of the contents. She also separates the typographer of continuous text, whose work should go unnoticed, from the typographer of advertising, whose job is to attract and persuade; she wrote advertising for Monotype herself, so the distinction is also a statement about her own two kinds of work. The essay reached print in 1932 under the pseudonym Paul Beaujon and was collected in a 1955 book (London, with a Cleveland edition in 1956) of sixteen essays.

**Specifics.**
- The argument works by analogy and by an appeal to the reader's habits, not by evidence. She contrasts the layouts of the experimental typographer with the plain page of the traditional book.
- She asks for a disciplined, skilled typographer who knows the conventions deeply enough to follow them quietly, and who can tell a legitimate need (a table, a title page) from a mannerism.
- She stresses that the reader should not be made to stop and decode the layout, and that good text design is invisible only because it is well made; "invisible" means unobtrusive, not easy or accidental.
- Related essays in the collection discuss the history of types, the printer's role and the relation of the machine to the craft.

**Criticism and status.** Matthew Butterick's essay Drowning the Crystal Goblet and other critics argue that every typographic choice carries tone, so no page is neutral, and that readers do notice type. Kinross argues the metaphor hides the social and technical conditions that shape the page. The empirical side is mixed: readers read familiar forms faster and more comfortably (lane 02), which supports a version of the claim, while a page with a distinct voice can help identity and memory (lane 21). The dates of first delivery and publication vary in sources and the 1955 text differs from the 1930 delivery.

**Use for LTF.**
1. Make two explicit modes: transparent reading and working surfaces (lesson text, checklists, fly mode) and expressive brand moments (home, logo, achievements). Never blend them in one block.
2. In fly mode, used beside the sim under workload, apply the crystal goblet strictly: no decoration, no motion, nothing to decode.
3. Add a review question to every design review: would a learner notice this, and is that what we want at this moment?
4. Put the identity into places where the learner is not reading under load, such as headers, section openings, transitions and certificates.
5. Treat invisibility as a result of craft, not an excuse for defaults: a generic template is also a visible choice.

## Gill1931

**Core claims.** Gill's essay is a polemic with practical content. Typography is the making of things to be read, and the industrial division of labor has separated the designer from the work. Letters are things, not pictures: they should be made as simply and honestly as the means allow. He argues for composition with even word spaces, for cutting printing down to its necessary parts, and for a printer who understands the whole business. The book discusses the difference between lettering (drawn for a particular place) and type (drawn for composition), the uses of a plain sans-serif, the problem of fitting machine setting to human reading, and the social cost of mass production.

**Specifics.**
- The book was itself set unjustified, with uniform word spaces and ragged-right lines, to show that stretched and squeezed spaces are worse than an uneven right edge. He regarded the justified line as a convention that costs the page its rhythm.
- His own typefaces demonstrate the ideas: Gill Sans (late 1920s) is a humanist sans built on the proportions of Roman capitals and on his teacher Edward Johnston's railway lettering; Perpetua is a serif with cut-letter origins.
- He argues that the spacing of letters should be judged by the area of white between them, not by the measured distance, a principle shared with Johnston and standard in type design.
- Mechanical composition is accepted, provided the maker considers the reader first.

**Criticism and status.** The social and religious parts of the argument are dated and idiosyncratic. Gill's documented abusive conduct, revealed in Fiona MacCarthy's 1989 biography, has led institutions to reconsider how his work is presented; a design knowledge base should cite his typographic ideas as ideas and note this. The advice on unjustified setting has proved broadly durable and is standard for screens. Accessibility guidance often recommends left-aligned text over justified text for readers with dyslexia or low vision (lane 27), though the evidence for general readers is weak.

**Use for LTF.**
1. Default to left-aligned, ragged-right text with even word spaces; avoid justified text on narrow phone columns.
2. A humanist sans of Johnston and Gill lineage is a plausible choice for headings and signage because it was shaped for public wayfinding.
3. Judge letter and word spacing by the white area, in specimen tests of paragraphs.
4. Make every control look like what it does; resist decorative widgets.
5. Cut the page to its necessary parts; remove elements that do no work.

## Ruder1967

**Core claims.** Emil Ruder, who taught typography at the Basel School of Design, wrote a teaching manual in which typography is a discipline of contrast and order based on the interplay of black and white. The counterforms and spaces between letters, words and lines are as important as the black shapes; the page has a tone (its gray), set by size, weight, spacing and leading; and the typographer's main means is contrast. The book follows his teaching sequence from the single letter to the line, the text block and the composed page.

**Specifics.**
- Contrasts are taught as a repertoire: size, weight, form, direction, texture and color. A strong page uses a few and uses them decisively.
- Text typography: the line, the word space and the interline are balanced so the gray is even; holes, rivers and uneven word spaces are defects; tight, even spacing produces a calm page.
- Typefaces: he worked mainly with grotesques of the Univers and Akzidenz-Grotesk type, in a limited number of sizes and weights, and used serif faces for text where appropriate.
- Layout: ranged-left text, grids, and generous white space handled as active form. The exercises gave students few elements and strict limits, a method that shaped the Basel school and students such as Wolfgang Weingart, who later broke with its rules.
- The study of the form of a single letter, and of the white inside it, was a basis for teaching spacing.

**Criticism and status.** Swiss typography was criticized as impersonal and as an international style with no local voice; later designers reacted against it. Its claims for legibility and neutrality rest on taste and teaching experience, not experiment. Its teaching method, few constraints and repeated exercises, remains sound.

**Use for LTF.**
1. Build hierarchy by choosing a few contrast axes (size, weight, color) and using them with confidence.
2. Check the gray of a text page by blurring or squinting; uneven blotches signal spacing or leading faults.
3. Treat white space between elements as structure and give it names (spacing tokens).
4. Constrain the system: one type family, two or three weights, a handful of sizes.
5. Teach the team to read the shapes between elements, such as the gap between a dial and its label.
6. Beware impersonal neutrality: Swiss discipline needs a distinctive element (a color, a face, a grid motif) to carry identity.

## DeVinne1900

**Core claims.** Theodore Low De Vinne, the leading American printer of his time, produced the four-volume The Practice of Typography: Plain Printing Types (1900), Correct Composition (1901), Title-Pages (1901) and Modern Methods of Book Composition (1904). It is a practical manual that sets out what a good compositor and a good printer must know, supported by history and by comparison of faces. It treats printing as a craft governed by rules that serve readers: clean, even composition, correct spelling and punctuation, sensible division of words and a well-ordered page.

**Specifics.**
- Plain Printing Types discusses the main types of text printing, comparing the old style faces (the Caslon tradition), the modern faces (Bodoni, Didot, Scotch) and the types made for the American trade, with judgments of how legible they are in text and what they suit. He supported sturdy, clear text faces over fashionable thin ones, and the Century face made for The Century Magazine is an example from his own printing house.
- Correct Composition covers spacing, the even distribution of word spaces in a line, the avoidance of rivers, the rules for dividing words at syllables, punctuation and its spacing, capitalization, italics, numerals, tables, notes, headings and poetry. It was widely used as a style reference in American printing offices.
- Title-Pages treats the arrangement of the title page with emphasis on hierarchy: the main words emphasized, the lines of related importance grouped.
- Modern Methods of Book Composition deals with the machine setting of the early twentieth century (Linotype and Monotype) and how to keep craft standards under mechanical production.

**Criticism and status.** The manual belongs to Victorian and Edwardian practice, and some of its rules (for example word division style, spacing after sentences) have been replaced. Its detailed rules on punctuation and capitalization fed into later American style manuals. As a source it shows how a printing house codified consistency.

**Use for LTF.**
1. Write an LTF style sheet for copy: capitalization, punctuation, numerals, units, aviation terms, as stable as a printing house's.
2. Treat tables (V-speeds, weights, limits) as a typographic problem with aligned columns, consistent units and quiet rules.
3. Design the lesson title block (title, subtitle, meta) with the clarity of a good title page.
4. Enable language-aware hyphenation so word division follows syllables.
5. Choose text faces for sturdiness at small sizes and varied screens before fashion.

## Updike1922

**Core claims.** D. B. Updike, founder of the Merrymount Press in Boston, wrote a two-volume history of printing types whose subtitle names its thesis: a study in survivals. Type forms do not change by sudden invention; they survive, adapt to new tools and tastes, and are revived. A printer who knows the lineage of a face, the conditions of its making and the purposes it served can choose and use it with judgment. The book is written from the viewpoint of a working printer, aimed at users of type, not only at collectors.

**Specifics.**
- Structure: chapters follow the early roman and italic types of Italy (Jenson, the Aldine press and others), the French sixteenth-century types (Garamond and his contemporaries), the Dutch and Flemish types, the English types (Caslon, Baskerville and the transitional and modern faces), the German and other national traditions, and the nineteenth-century and early twentieth-century types. Each chapter is illustrated by specimen settings from original books.
- Method: he describes the forms of letters, their relation to handwriting and to the tools, and the practical qualities of each face (how it fills a page, how it suits poetry, law, advertising). The emphasis is on use: which face for which job.
- Classification by period and country, rather than abstract features, stands behind the later systems that sort faces into humanist or old style, transitional, modern and so on. The second edition of 1937 extended the book into the twentieth century.
- Updike's own press standards (restrained, historically informed, careful in the choice of face and in the margins) show the doctrine in practice.

**Criticism and status.** The book is a standard narrative but is Anglo-American in viewpoint and some attributions (dates, punchcutters) have been corrected by later scholars such as Harry Carter and Stanley Morison. Its classification is descriptive, not a scientific taxonomy, and has been criticized as unsuited to modern sans and slab designs. As history it is still readable and useful.

**Use for LTF.**
1. Use the historical vocabulary (humanist, transitional, modern, grotesque, geometric) in the design guide to describe the chosen faces and why.
2. Pick faces whose lineage suits the subject: aviation signage and charts belong to a humanist and grotesque tradition.
3. Pair faces from contrasting traditions (for example a humanist sans with a transitional serif) instead of similar ones that nearly match.
4. Avoid faces that carry strong associations with other products or fashion periods.
5. Record, for each face chosen, the job it does, as Updike matches face to purpose.

## Dowding1954

**Core claims.** Finer Points in the Spacing and Arrangement of Type is a short manual of the details a skilled compositor attends to. Its premise is that good setting is the sum of many small decisions about spaces, punctuation, capitals, breaks and arrangement, none of which the reader should consciously notice, and that rules for these should be stated and followed consistently. It has been in print since 1954, revised and reissued by Hartley & Marks in 1995.

**Specifics.**
- Word spacing: the spaces in a line should look equal, which is not the same as being equal in measurement. Letter shapes change the look of a space (a space next to a round letter or between two open letters looks larger than between straight stems), so the compositor adjusts. Even spacing matters more than avoiding hyphenation.
- Punctuation: the book treats the spacing of dashes, colons, semicolons, quotation marks, brackets and the full stop, and the treatment of abbreviations. Its conventions are British house practice of the period, with thinner spaces before some marks than a modern American reader expects.
- Capitals and small caps: capitals are letterspaced; abbreviations and running heads are set in small caps; initials and openings are arranged with optical adjustment.
- Line and page breaks: avoid ending a page with a hyphenated word, avoid repeating a word at the start of consecutive lines, avoid a short word or fragment at the end of a paragraph, avoid a heading at the foot of a page, and avoid single lines of a paragraph stranded at the top or bottom of a page.
- Headings: more space above a heading than below it, so it attaches to the text it introduces.
- Lists, tables, title pages and verse: arrangements that show structure by spacing and indentation.

**Criticism and status.** The details are conventions and some are British; spacing before colons and semicolons has fallen out of use in American English. The principles (optical evenness, proximity of a heading to its text, avoiding bad breaks) are general and still valid on screens.

**Use for LTF.**
1. Headings get more space above than below and must stay with the following paragraph (`break-after: avoid`, `break-inside: avoid` for steps).
2. Align numerals and units in readouts optically, and test spaces next to round and straight letters.
3. Use small caps or tracked caps for abbreviations in running text and labels.
4. Keep a written punctuation and spacing style sheet for all learner copy.
5. Avoid a final single short word on the last line of paragraphs where the layout allows.

## Hochuli1987

**Core claims.** Jost Hochuli's short book looks at the details of text typography in seven parts: letters, letterspacing, words, wordspacing, lines, linespacing and columns. Its argument is that these are interdependent. The fit of letters decides the right word space, the word space and the length of the line decide the right linespacing, and the whole depends on the typeface, so none can be set in isolation. The book was first published by Compugraphic in 1987 and appeared in English from Hyphen Press in a 2008 edition (translated by Charles Whitehouse from the German revision of 2005, 64 pages), with a companion volume on book design by Hochuli and Robin Kinross.

**Specifics.**
- Letters: the form of a text letter is chosen for how it works in the mass, and text faces differ in proportion, x-height and contrast; these differences decide how they should be spaced and leaded.
- Letterspacing: lowercase running text is not letterspaced; capitals and small caps are; and fitting differs between faces. Tight-fitting faces need narrower word spaces than loosely fitted ones.
- Wordspacing: the word space is matched to the letter fit, so the line holds together as a chain of words with clear gaps but without holes. Justified text in narrow columns forces wide gaps, so narrow columns are better set ragged-right.
- Lines and linespacing: line length is related to the size and width of the type; the linespacing grows with the line length, with the x-height and with the darkness or width of the face, and sans serifs generally need more space than serifs of the same size.
- Columns: gutter, column width and alignment follow the grid; paragraphs are marked either by indent or by a space, not both.
- The examples in the book are paired as faulty and corrected settings.

**Criticism and status.** It is craft advice with annotated examples, not experimental evidence, and its norms come from print. The principle of interdependence is valuable: it argues against setting a single global letter-spacing or line-height for all text.

**Use for LTF.**
1. Define type tokens per face and per role (body, caption, instrument label), each with its own letter-spacing, word-spacing and line-height.
2. Do not both indent and space paragraphs.
3. Give sans serif UI text more leading than serif lesson text of the same size.
4. Set narrow columns ragged-right, and test the paragraph at phone width in both themes.
5. Review settings as a system: change the face, and re-check spacing, leading and measure together.

## Kinross1992

**Core claims.** Robin Kinross, typographic historian and founder of Hyphen Press, argues that modern typography is not just the avant-garde style of the 1920s but part of a longer process of rationalization that starts with the Enlightenment and industrialization: standardization of sizes and measures, the systematic ordering of printed material (catalogs, timetables, newspapers), the rise of the printing trades and professional bodies, and a concern with the reader's needs. The 1920s New Typography, in this account, is a self-conscious statement of an existing tendency. Typography must be understood as a social practice: the work of printers, institutions and standards bodies, not only individual artists.

**Specifics.**
- The book follows a line from the nineteenth century through the New Typography (Tschichold, the Bauhaus circle and the German standards movement) to the postwar Swiss and Dutch work (Ruder, Gerstner and others), with attention to the reception of Tschichold's later change of mind.
- Key figures and ideas include the debate between artists and trades, the role of the typeface as a system, the step from the individual craftsman to the standardized and shared system, and the importance of printed ephemera as well as books.
- The 2004 second edition adds chapters on the digital change and the position of typography after the personal computer.
- Kinross is a critical historian: he questions the myths of the avant-garde as the sole author of modern design and notes how often the history of design has been told through manifestos rather than practice.

**Criticism and status.** This is an interpretation that other historians (who give more weight to art movements and to the Bauhaus legend) contest. It is, however, the leading scholarly treatment of the subject in English and is widely cited.

**Use for LTF.**
1. The app belongs to a standards-driven, rational tradition (charts, checklists, signage), and its identity can draw on that honestly, rather than imitate generic software styles.
2. Document why each major typographic choice was made, as Kinross reads typography through its reasons.
3. Treat the design system as a standards body: shared measures and sizes, not one-off choices.
4. Avoid cargo-cult Swiss style: borrow the reasoning (grid, hierarchy, restraint) and not just the look.
5. Think about ephemera too: printable checklists, certificates and posters belong to the same system.

## Tracy1986

**Core claims.** Walter Tracy, for many years typographic adviser and designer at Linotype in Britain and designer of newspaper faces, wrote what is still the standard practitioner account of how text types are designed and why they look as they do. The book's theme is that a text typeface is judged in the mass, not as single letters: what counts is the even texture and rhythm that the letters produce together in a line and a paragraph, and the designer works by adjusting the white as much as the black. Spacing and fitting are as important as letter shapes. The book also records the pressures that shaped type: the printing method, the paper, the economics of newspapers, and the habits of readers.

**Specifics.**
- Fitting and sidebearings: the space beside each letter is set so that the area of white between letters looks even; round letters need less side space than straight stems; capitals need different fitting from lowercase. The designer tests by setting words and lines, not by measuring.
- Rhythm: the regular vertical stems of lowercase letters give a text its beat, and the spacing is made to support that beat.
- Color: a text face has a tone (its color) in the mass, a function of stroke weight, width, x-height and fit. Designers compare faces by setting paragraphs and judging evenness, as Ruder teaches.
- Newspaper and small-size design: ink spreads on newsprint and fast presses, so text faces for news are made with open counters, a large x-height, sturdy serifs and sometimes notches or traps where strokes meet. Such faces look coarse when enlarged but work at small sizes. This is the same logic as the optical sizes of Smeijers.
- Italic and roman: the italic is a companion with its own proportion and slope, with its own spacing, not a mechanical oblique.
- History: chapters on the revivals of Renaissance faces and on the decisions made when old faces were adapted to machine composition, including the effect of Monotype and Linotype constraints on widths and spacing.

**Criticism and status.** The book is a craftsman's judgment and covers the metal and phototype period; its production details have been overtaken by digital tools and by variable fonts. Its visual principles (evenness, rhythm, fit, sizes drawn for purpose) remain valid. Some of its legibility opinions have been tested only informally; lane 02 holds the experimental work on letter shapes and spacing.

**Use for LTF.**
1. Choose the text face by setting real paragraphs of lesson text, not by looking at single words or specimen lines.
2. Prefer a face with a generous x-height and robust forms for low-quality displays, sunlight and dim rooms (the sim is often used in a dark room beside a bright screen).
3. Expect light text on a dark ground to look bolder and to need slightly more space and a slightly lighter weight; test in both themes.
4. Use real italics for emphasis and book or lesson titles, and test that the italic is a designed companion of the face.
5. Judge evenness by squinting at the page; check numerals and capitals for fit as well as lowercase.

## Noordzij1985

**Core claims.** Gerrit Noordzij, a Dutch type designer and long-time teacher at the Royal Academy of Art in The Hague, argues in The Stroke (De streek, 1985; English translation by Peter Enneson, 2005) that the forms of letters come from writing: the movement of a tool across a surface leaves a stroke, and type design is the study of how the stroke is made and how it is controlled. Letter shapes are the result of a writing tool and a hand movement, and the white inside and between the letters is the other half of the form. Contrast, stress, slant and weight are consequences of how the stroke is made, not decorative choices.

**Specifics.**
- Two kinds of stroke: translation, where a pointed tool moves and the line has its width from the pressure and speed of the movement, and expansion, where a broad tool of fixed width, held at an angle, makes thick and thin parts by its direction. The humanist and old style serif letters follow expansion with the nib at a fixed angle.
- The contrast (thick against thin), the angle of the stress and the weight are the main variables. Noordzij organized them in a model, often called the Noordzij cube, that arranges typeface styles along axes so that designers can see how related styles differ and what the extremes are.
- Rhythm: letters in a text repeat the same movement, so the shapes of stems, bowls and counters must be coherent; a face made on a consistent writing logic reads as a family.
- The book also considers the relation between writing and reading, and how the reader recognizes words by overall shape and rhythm.
- It argues for teaching type design through writing, which was the practice at The Hague.

**Criticism and status.** The theory is influential in teaching and Dutch type design. Designers of geometric or constructed faces (Futura-like faces, many grotesques) argue that not all letterforms derive from the pen, and the cube is a model, not a complete taxonomy. It is not an empirical theory and has not been tested for effects on reading.

**Use for LTF.**
1. Use the vocabulary of contrast, stress and weight when specifying and reviewing faces.
2. Pair faces with compatible stroke logic (two humanist designs, two geometric designs), because mixed constructions look uneasy together.
3. Read variable-font axes (weight, width, optical size) through this model, and set limits on them as design tokens.
4. Check counterforms at small sizes: the digits 3, 5, 6, 8 and 9 and the letters a, e, g in readouts should stay open.
5. Prefer one face with a clear logic over a collection of unrelated faces.

## Smeijers1996

**Core claims.** Fred Smeijers, a Dutch type designer and punchcutter, studied the punches and matrices of the Plantin-Moretus Museum in Antwerp and cut punches himself. The result is the argument that sixteenth-century type was shaped by its process (steel punches, struck matrices, cast metal, hand-composition) and by the optical judgment of the punchcutter at each size, and that a contemporary designer who understands this process makes better typefaces. The book has two parts: how type was made in the sixteenth century, and what that means for designing type now. It also asks what is lost when digital tools let anyone scale and distort letters without the discipline of the craft.

**Specifics.**
- Each size was cut separately. In small sizes the letters are wider, the spacing looser and the details sturdier than the same face cut large, and the punchcutter judged the result by eye. Digital scaling of one master to all sizes loses this, which is the origin of the modern idea of optical sizes.
- Sidebearings were fixed in the matrix; the designer had to set the spacing when cutting, and compared the white shapes between letters rather than the measured distances.
- The italic and roman were considered together for color and rhythm; the relation of lowercase to capitals and the shape of the counters were adjusted for overall evenness.
- Smeijers describes how a letter is built up from the counter outward: the white form inside the letter is cut first on the counterpunch, and the outer shape follows, hence the title.
- The contemporary section discusses designing for use, testing in text, and the need to check at the intended sizes.

**Criticism and status.** It is craft history written by a practitioner and some attributions of historical punchcutting have been refined since; it is not an experimental study. The practical claim that small sizes need different forms from large ones is widely accepted in type design and supported by the existence of optical-size fonts.

**Use for LTF.**
1. Use fonts with an optical size axis, or separate text and display cuts, and select by role.
2. Give small instrument labels and captions looser spacing and sturdier forms than headings; do not scale one cut across all sizes.
3. Test candidate fonts at the real rendered pixel sizes on real devices, not in specimen pages.
4. Make font choice a documented craft decision instead of accepting a framework default.
5. Treat the counter (the white inside letters and numerals) as the design target in small sizes.

## Johnston1906

**Core claims.** Edward Johnston's Writing & Illuminating, & Lettering (1906) is a practical manual that re-established the broad-pen tradition of calligraphy and became the base of modern lettering education. Its principle is that letter forms arise from the tool and the movement of the hand, and that good lettering should be readable, beautiful and characterful, in that order of obligation. He taught through a model hand: the foundational hand, based on a tenth-century English manuscript in the British Library (the Ramsey Psalter, Harley 2904).

**Specifics.**
- Method: a broad-edged pen held at a constant angle (for the foundational hand, a shallow angle to the writing line, roughly thirty degrees) gives the natural thick and thin of the letters; the height of letters is measured in pen widths, and each letter is built from a few strokes in a fixed sequence.
- Proportion: capitals are based on Roman inscriptional proportions, with the wide and narrow letters distinguished; lowercase proportions are based on the round letter o as a unit.
- Spacing: letters are spaced by the areas of white between them, not by equal distances; the line is judged by evenness of color. Word spaces are enough to separate words without breaking the line into pieces.
- Layout: the manual covers manuscript and book layout, margins, ruling, color and the setting out of whole pages and illuminated initials.
- Application: in 1916 Johnston designed a sans-serif alphabet for the London Underground, now known as Johnston, with Roman-proportioned capitals, a circular O and a diamond shaped dot on the i and the full stop, which defined the humanist sans tradition and is the model for Gill Sans, his pupil's face.

**Criticism and status.** The book is a craft manual rather than a theory and has been revised by later calligraphers; its historical readings of manuscripts have been refined. Its main idea, the tool as the source of form, is carried on by Noordzij.

**Use for LTF.**
1. The humanist sans tradition built for public signage in London is a good lineage for an app that teaches people to find their way in a cockpit.
2. Apply the triad as a priority order for identity: readable first, then beautiful, then characterful.
3. Space letters by white area when making custom logotypes or lettered headings.
4. Use Roman-proportioned capitals (wide round letters, narrow E and S) in label systems for good recognition.
5. Consider a hand-lettered or custom-drawn element (logo, section marks) for character, built on the same stroke logic as the text face.

## Lane synthesis

**Where the sources agree.** Across a century of writing (Johnston 1906 to Hochuli 2008, Bringhurst 2012), the craft tradition treats text typography as service to the reader. Texture should be even; spacing is judged by the area of white, not by measured distance; word spaces should look equal; capitals are letterspaced and lowercase is not; headings attach to the text they introduce; type is chosen and spaced for its size and use; and consistency across a whole work matters more than any single flourish. The authors also agree that the letter, the word space and the line are interdependent, so fine-tuning one means reviewing the others.

**Where they conflict.** Warde, Morison and Gill hold that good typography is unobtrusive; Kinross, Butterick and others reply that every layout has a voice and that unobtrusive means conventional. The young Tschichold (1928) demanded sans-serif, asymmetry and no ornament; the older Tschichold (1975) preferred classical, centered, serifed book design. Justification is standard in print, while Gill, Ruder and Hochuli prefer ragged-right for narrow columns, and screens strengthen their case. All of this is craft knowledge, not experiment: reading research (lane 02) shows readers tolerate more variation than the craft implies, so these rules buy polish, trust and comfort more than raw speed.

**Ten actionable takeaways.**
1. Set lesson prose to about 66 characters per line (a range of 45 to 75) using `ch` units.
2. Build a small type scale as tokens and use only its steps.
3. Give each face and role its own letter-spacing, word-spacing and line-height; never one global setting.
4. Use real typographic marks: proper quotes, en dashes for ranges (60 to 70 KIAS), and minus signs.
5. Use tabular lining figures in readouts and tables, text figures in prose.
6. Use small caps or tracked capitals for units and abbreviations; never letterspace lowercase.
7. Put more space above headings than below, and keep headings with the following text.
8. Prefer left-aligned, ragged-right text on narrow columns; justify only with hyphenation and adequate width.
9. Use optical sizes or separate cuts for captions and instrument labels, and test light-on-dark spacing in Night theme.
10. Separate transparent reading surfaces and fly mode from expressive identity moments, and hold one treatment per recurring element across the app.
