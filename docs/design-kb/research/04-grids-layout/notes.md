# Lane 04: Grids and layout, research notes

Evidence labels used below: craft treatise (a practitioner's codified method), standard (a normative technical document), experiment, expert opinion, secondary account. Where I could read only a catalog record, a review or an excerpt, the note says so and keeps its claims to what that material supports.

## mullerbrockmann1981grid

Müller-Brockmann, Josef (1981). *Grid Systems in Graphic Design / Raster Systeme für die visuelle Gestaltung*. Niederteufen: Arthur Niggli (English and German, 176 pages).

### Core claims

The book is the canonical statement of the modernist typographic grid as a working method. Its central argument, visible in the part of the text reprinted in a design-theory reader, is that a grid is both a practical device and an ethic. Müller-Brockmann writes that using a grid shows the designer "conceives his work in terms that are constructive and oriented to the future," and that design work should have "the clearly intelligible, objective, functional, and aesthetic quality of mathematical thinking." He adds that "working with the grid system means submitting to laws of universal validity." In an Eye magazine profile he is paraphrased as treating the grid as "an organisational system that makes it easier to read the message," and as saying subjective interpretation falsifies the message.

### Specifics

Publisher and catalog descriptions agree on the scope: the book covers grid systems from 8 to 32 fields, plus a three-dimensional grid for exhibition and object design, and is billed as "a guidebook from the profession for the profession." The format is large (21 by 30 cm) and bilingual. A review summarized by a web search says the book works from a page format and a type size to column widths, gutters, baseline grids and margins, and a scanned copy's contents list includes sections on leading and margin proportions. I could not read the arithmetic itself, so I do not restate formulas.

The reader excerpt gives one worked caption from the book: the "musica viva" concert poster "is built up on a grid 4.5 fields wide and 4 fields deep," its format given as 128 by 90.5 cm, with the two words arranged in a cross, the letters of "musica" "set at irregular intervals so that a rhythm is produced," and the small program lines aligned to the letters. This shows the grid used as a rhythm generator, not a cage. The same excerpt lists what using a grid "implies": the will to systematize, to clarify, to concentrate on essentials, to cultivate objectivity instead of subjectivity, to rationalize creative and technical production, and to integrate color, form and material.

Terminology used by the Swiss tradition and by later writers: a field (module) is one cell of the grid; the typographic area is the part of the page inside the margins; the baseline grid is the vertical rhythm set by the leading of the text. The Eye profile also records that he credited the grid to town planning and saw his contribution as applying it to graphic design, and that he rejected playful, illegible typography because text exists to communicate content.

### Replication and criticism

This is a craft treatise, not an experiment, so nothing here has "replicated." Its authority is historical and practical: Wikipedia's account of the grid says the book "helped spread grid use first in Europe and later in North America," and that by the mid-1970s the grid was standard in design education. The principal criticism is of the dogma, not the technique. The same account notes that in the early 1980s some designers rejected the grid's dogmatic use, and later books (see Samara in this lane) teach breaking the grid after building it. The universalist claim ("laws of universal validity") is also contested: the reasoning is an argument from design ethics and professional taste, and the book offers no user-testing evidence that gridded pages are read faster or understood better. Treat the usability benefits as plausible craft knowledge about consistency and alignment, and verify against empirical work such as the whitespace studies elsewhere in this lane.

### Implications for LTF

1. Build every LTF page on a small number of named grids (lesson, quiz, challenge briefing, dashboard, fly mode) and give each a fixed field count, so pages feel related. Müller-Brockmann's point is consistency of placement, which suits a lesson series that learners will see dozens of times.
2. Derive vertical spacing from the body text leading, so type, figures and widgets sit on a shared rhythm. In CSS this means spacing tokens that are multiples of the base line height.
3. Use the grid to give widgets (airspeed indicator, checklist cards) stable positions across lessons. Learners build spatial memory of where the next-step control lives.
4. His objectivity stance fits a safety-adjacent product: clarity before decoration. But do not adopt the claim of universal validity uncritically; test grids with beginners on small phones and next to the sim.
5. The 4.5-field poster shows that fractional or asymmetric occupancy is legitimate. A fly-mode panel need not fill every field.

Confirmed this session: Open Library search and editions list (work OL3106695W: Niggli, Niederteufen, 1981, 176 pages; Hastings House, New York); publisher and retailer descriptions at slanted.de/?p=792761 and doyoureadme.de (8 to 32 fields, three-dimensional grid, 176 pages, 21 by 30 cm, ISBN 978-3-7212-0145-1 per slanted.de); Eye magazine "Reputations: Josef Müller-Brockmann" (quotes above); Wikipedia "Grid (graphic design)"; text excerpt of the 1981 "Grid and Design Philosophy" passage and the musica viva caption in the reader *Graphic Design Theory* (openlab.citytech.cuny.edu Gerstner_DesigningProgrammes.pdf). I did not read the full book.

## gerstner2007designing

Gerstner, Karl (2007). *Designing Programmes* (originally *Programme entwerfen*, 1964). Baden: Lars Müller Publishers.

### Core claims

Gerstner argues that design should proceed from explicit rules, not from feeling: "instead of solutions for problems, programmes for solutions." A grid is one kind of programme, a system that accepts unknown future content. The publisher describes the book as four essays plus an introduction, with the facsimile edition subtitled "Programme as Typeface, Typography, Picture, Method," and as a model for design in the early computer era.

### Specifics

The reader excerpt I read gives two passages. In "Programme as Logic," Gerstner says "to describe the problem is part of the solution," that creative decisions should be made "by intellectual criteria" and that "the creative process is to be reduced to an act of selection." His tool is the morphological box, borrowed from the scientist Fritz Zwicky (1953): parameters on the left, components on the right, and each design is a chain of components. He applies it to wordmarks, and admits the box is rough, with a "something else" component for leftovers.

In "Programme as Grid" he defines the typographic grid as "a proportional regulator for composition, tables, pictures," and "a formal programme to accommodate x unknown items." The design problem is "to find the balance, the maximum of conformity to a rule with the maximum of freedom," or "the maximum of constants with the greatest possible variability." His worked example is the "mobile grid" for the periodical *Capital*. The basic unit is 10 points, "the size of the basic typeface including the lead." The text and picture area is divided at once into one to six columns, across 58 units, with two units between columns. The arithmetic checks: 2 x 28 + 2; 3 x 18 + 2 x 2; 4 x 13 + 3 x 2; 5 x 10 + 4 x 2; 6 x 8 + 5 x 2, all equal 58. He notes that the grid "looks complicated to anyone not knowing the key." He also distinguishes squared paper (an arithmetic grid, not a programme) from Le Corbusier's geometric module, and quotes Einstein's remark on the Modulor, "a scale of proportions that makes the bad difficult and the good easy."

Biographical details (Wikipedia, citing Hollis): the book was *Programme entwerfen* in 1964, an English edition with four essays and an introduction followed in 1968, and a revised edition in 2007; the 1973 MoMA exhibition "designing programs/programming designs" was based on it.

### Replication and criticism

A craft and method treatise, not empirical. The strongest critique is Gerstner's own: he admits the inadequacy of the box is his and that it generates solutions by "blind concatenation" of components, which can produce thousands of options with no guarantee of quality. A wider criticism is that systematic design can yield uniformity; he answers by maximizing variability inside constants. Later generative and design-token practice can be read as vindicating the approach, but no user study supports it. Treat it as a design-process argument.

### Implications for LTF

1. The LTF design system is a programme in Gerstner's sense. Document the constants (spacing unit, column counts, type scale) and the variables (lesson content) so new lessons slot in.
2. Choose a base unit whose multiples yield clean splits. Gerstner chose 58 units because it divides into 2 to 6 columns with two-unit gutters; choose an LTF unit (for example a 4 or 8 px step) with the same check, and test that two, three and four card layouts all divide without remainders.
3. Use a morphological box for widget variants: parameters such as data source, display style (dial, tape, digital), size and theme, so instrument widgets are generated from combinations instead of drawn one by one.
4. Keep a "something else" slot in components, because content (a callout, a verify note) will not always fit the planned categories.
5. Expect the programme to look complicated to newcomers; document the key for contributors.

Confirmed this session: publisher page lars-mueller-publishers.com/designing-programmes-0 (four essays, 1964, redesigned 2007); Open Library editions of OL3554793W (Lars Müller, Baden, 2007, 128 pages, ISBN 9783037780930); Wikipedia "Karl Gerstner" (editions, MoMA 1973); excerpt of "Programme as Logic" and "Programme as Grid" in the reader *Graphic Design Theory* (openlab.citytech.cuny.edu Gerstner_DesigningProgrammes.pdf), where I checked the 58-unit arithmetic. I did not read the full book.

## lecorbusier1954modulor

Le Corbusier (1954). *The Modulor: A Harmonious Measure to the Human Scale Universally Applicable to Architecture and Mechanics*. London: Faber and Faber (French original *Le Modulor*, 1948; followed by *Modulor 2*, 1955).

### Core claims

Le Corbusier proposed a system of measures tied to the human body that would make "the bad difficult and the good easy" (the phrase is attributed to Einstein in reviews of the book and in Gerstner's text). It was meant to standardize building dimensions and to bridge the imperial and metric systems, while giving designs harmonic proportion. He says it confers no talent: "Modulor does not confer talent, still less genius," and that "your eyes are your judges."

### Specifics

According to Ostwald's review of the 2000 facsimile, the Modulor was developed between 1943 and 1955. It rests on a six-foot (1.828 m) male figure with an arm raised, after the French male was judged too short and the female body was rejected. The first geometry used a 2.20 m figure inscribed in overlapping squares; the mathematician Taton pointed out in 1948 that the "squares" were not equal-sided, and Elisa Maillard then proposed an alternative that Le Corbusier simplified. The result is two series of measures, red and blue. Ostwald lists the red series as based on a navel height of 1.130 m and the blue series on 2.260 m, the height of the upraised fingertips. Wikipedia's article, which marks some of its claims as needing citations, gives the earlier values of 1.08 m and 2.16 m and says the golden section was added to the representation after a February 1945 consultation. Both series are divided by the golden ratio, with a spiral between them; the Unité d'Habitation in Marseille used it for plan, sections, brise-soleil and apartments.

Gerstner, writing in 1964, drew a useful contrast: squared paper is an arithmetic grid; Le Corbusier's module is geometric and "primarily a programme," a set of proportions that governs the whole composition.

### Replication and criticism

This is a craft system, and the criticism is considerable. Ostwald calls the volumes "a maddening and enthralling description," and lists faults: inconsistent geometric descriptions, little grasp of actual human proportions, an erratic index, circuitous prose, and a section that uses inaccurate measurements taken on a trip to Turkey some 40 years earlier to find the Modulor in famous ruins. A search summary of Maurice Craig's 1954 review in The Spectator says it treats the book skeptically and quotes Le Corbusier's own admission that he could reject a mathematically orthodox result because it is not beautiful. That admission matters: the system is a guide and the eye decides, so it is not a testable law. More broadly, claims that golden-ratio proportions are inherently pleasing are weak (see Markowsky 1992 and Höge 1995 in this lane); a human-scaled module is better defended as an anthropometric convenience than as an aesthetic law.

### Implications for LTF

1. Take the useful part: a limited, human-scaled set of sizes that every component draws from, so layouts agree without effort. LTF should define a short spacing and type scale and ban off-scale values, which is the real benefit of the Modulor idea.
2. Do not justify scale choices by golden-ratio mysticism. State plainly that the LTF ratio was chosen for legibility steps on small screens, and verify by testing.
3. Two interleaved series (red and blue) are a precedent for a two-strand scale (see Brown 2011), giving more usable steps without more decisions.
4. Anthropometrics: a "human scale" for LTF is thumb reach and reading distance. Fly mode next to the sim is read from arm's length, so the human scale there is larger than on a phone.
5. The warning that the system "confers no talent" supports keeping a human review step in design QA.

Confirmed this session: Open Library work OL15210192W (Faber and Faber, London, 1954, 243 pages; MIT Press edition ISBN 9780262620062); Ostwald's review in the Nexus Network Journal vol. 3 no. 1 (emis.univie.ac.at/journals/NNJ/reviews_v3n1-Ostwald.html, mirror at maths.tcd.ie); Wikipedia "Modulor"; web-search summary of the Spectator review (archive.spectator.co.uk, 18 June 1954; page text itself did not load); Gerstner excerpt (above). I did not read the book.

## tschichold1991form

Tschichold, Jan (1991). *The Form of the Book: Essays on the Morality of Good Design*, translated by Hajo Hadeler, edited with an introduction by Robert Bringhurst. Point Roberts, WA: Hartley & Marks (German selection first published by Birkhäuser, 1975).

### Core claims

Tschichold, once the radical author of *Die neue Typographie* (1928), argues in these late essays for tradition, harmony, proportion and restraint in book design. A review describes the benchmark he sets as "comfortable legibility," which he calls the "absolute benchmark for all typography." The book also documents his claim that earlier eras had solved page construction and that designers should recover the rules: in the words attributed to him by a Wikipedia article on page canons, "methods and rules upon which it is impossible to improve have been developed for centuries."

### Specifics

Catalog and review sources agree on the shape of the book: a collection of short essays on the book as a whole, covering format and size, cover and title page, typeface, margins, paragraphs, section headings, footnotes, index and colophon, with firm positions such as why paragraphs must be indented. One review says the essays contain "quite mathematical minutiae" about the page and type area; I did not find the margin figures in the book itself.

The page-construction material is best known through a canon often credited to him. Wikipedia's article on the canons of page construction reports: Tschichold determined a medieval manuscript framework in 1953 with a 2:3 page, margins in the ratio 1:1:2:3, and a type area proportioned by the golden section. He also popularized the Van de Graaf construction, which works for any page ratio, places the type area so that the margins are 1/9 and 2/9 of the page size (inner margin half the outer), and, in his version, gives the type area the same proportions as the page, with its height equal to the page width. The summaries I fetched were not fully consistent about which margin gets which fraction. These are secondary accounts of a construction, and the numbers should be rechecked against the book before they are published as "Tschichold's rules."

### Replication and criticism

Craft authority, not experiment. The historical premise is contested: the same article notes that John Man argued the Gutenberg Bible's ratio was close to 2:3 rather than golden, and that Richard Hendel and Christopher Burke's accounts suggest modern designers treat the rules flexibly. The idea that golden-section proportions are the most pleasing page is not supported by preference experiments (see Höge 1995), and a 2:3 page is not a screen shape. Tschichold's own career is a caution: he rejected his earlier modernist asymmetry for classical symmetry, so even his authority is a position within a debate. Reviews also dispute his dating: one gives the essays as 1949 to 1974, another 1937 to 1975.

### Implications for LTF

1. Treat the book's real lesson as proportion by relationship: margins, type area and measure are set together. On the web the equivalent is container width, side padding and a line length of comfortable length, expressed in `ch` or `rem` so text never outgrows its measure.
2. Generous, deliberate outer margins improve the reading frame on long lesson pages. On phones, keep a minimum gutter (16 px is a safe default) and let the margins grow from there on larger screens.
3. Use the Van de Graaf idea as a way to derive the lesson column from the viewport instead of picking numbers by eye. It is a derivation, not a law, so test it.
4. His benchmark of comfortable legibility should outrank decorative proportion rules in any conflict. Fly mode, read at a glance from a distance, should favor legibility over harmony.
5. Do not claim the golden section for LTF pages in copy or documentation.

Confirmed this session: Open Library work OL1220114W (Hartley & Marks, Point Roberts, 1991, 180 pages); web-search summary of catalog records (Hajo Hadeler translator, Bringhurst editor, Birkhäuser 1975 German original, date and page-count discrepancies between catalogs); review at mantex.co.uk/?p=3481 (contents, "comfortable legibility" benchmark); aworkinglibrary.com/reading/form-of-the-book; Wikipedia "Canons of page construction" (ratios and sources above). I did not read the book.

## vignelli2010canon

Vignelli, Massimo (2010). *The Vignelli Canon*. Baden: Lars Müller Publishers (112 pages; a free PDF of the book is hosted by the RIT Vignelli Center, and I read that copy).

### Core claims

Vignelli presents his working guidelines as "those set by ourselves for ourselves," and says the book is "not the intention ... to stifle creativity or to reduce it to a bunch of rules" but to pass on knowledge, since "creativity needs the support of knowledge." Part One covers intangibles (semantics, syntactics, pragmatics, discipline, appropriateness, ambiguity, design is one, visual power, intellectual elegance, timelessness, responsibility, equity). Part Two covers tangibles: paper sizes, grids, type, white space and scale. His central layout claim is that the grid gives consistency and an orderly look, and projects "intellectual elegance."

### Specifics

I read the full text of the free PDF. On grids he writes that "the smaller the module of the grid the least helpful it could be," and that "an empty page is a page with an infinitesimal small grid," while a coarse grid is "very restricting." Procedure: set outside margins, "small enough to provide a certain tension between the edges of the page and the content," divide the page into columns (he lists two to six) and then top to bottom into modules ("four, six, eight, or more"). His letterhead example sets 10 mm margins and three columns, leaves the first column blank, and runs the text in the other two; a second example uses five columns (margin, three text columns, margin). For books, "the content determines the container," the grid should follow the proportion of most pictures to minimize cropping, the space between columns and modules should be "rather tight, ideally the size of a line of type," and type and image modules should share one leading so they land on the same lines.

His type rules are numbers a designer can test: sizes by column width ("8 on 9, 9 on 10, 10 on 11 pt for columns up to 70 mm," "12 on 13, 14 on 16 for columns up to 140 mm," "16 on 18, 18 on 20, for larger columns"), no more than two type sizes on a page, headings about double the body ("10 pt text and 20 pt headings"), heads and subheads set in one size and differentiated by bold. He shows an exhibition built from only four typefaces (Garamond, Bodoni, Century Expanded, Helvetica). On white space: "in typography the white space is more important than the black of the type," "it is really the white that makes the black sing," and "in a world where everybody screams, silence is noticeable." Size steps should be modular ("from single to double, from one to three, or four or more, but not an odd size in between").

### Replication and criticism

This is craft opinion from a famous practitioner, with no experiments. It also contains checkable errors. He says the international A series "is based on a golden rectangle, the divine proportion," yet the sizes he lists himself (A4 at 210 by 297 mm) give a ratio of about 1.414, not 1.618. Treat his claims about proportion as taste. His preference for restraint (one or two sizes, a handful of typefaces) is consistent with modern advice on hierarchy but is a single designer's rule and was shaped by print. His dismissal of ornament and expressive type is a stance, not a finding.

### Implications for LTF

1. Adopt the "tight gutter" idea selectively: gaps between cards should be consistent and related to the line height, so a row of widgets looks like one system.
2. Limit LTF to two type sizes per content block (body and one heading size), with weight as the differentiator. This is a testable hierarchy rule for lesson pages and quiz cards.
3. A grid should be neither too fine (no help) nor too coarse (too restrictive). Start with a simple column grid (4 columns on phone, 12 on desktop, to be confirmed in design) and add modules only when a real layout needs them.
4. White space as "silence" suits a beginner audience facing unfamiliar jargon: separate the instruction from the explanation.
5. Do not reuse his A-series claim or his American-paper jibe in copy.

Confirmed this session: Open Library work OL16963936W (Lars Müller, 2010, 112 pages, ISBN 9783037782255) and publisher page lars-mueller-publishers.com/vignelli-canon (2010, 112 pages, 142 illustrations); full text of the RIT-hosted PDF (rit.edu/vignellicenter ... The Vignelli Canon.pdf), extracted with pdftotext and read for every quotation above, including the paper-size table and ratio check.

## elam2001geometry

Elam, Kimberly (2001). *Geometry of Design: Studies in Proportion and Composition*. New York: Princeton Architectural Press (second revised edition 2011).

### Core claims

Elam argues that many well-regarded designs, from posters and furniture to buildings, contain a hidden geometric skeleton, and that designers can learn composition by tracing it. The book is a visual analysis, not an experiment: each chapter takes a proportioning system and overlays its lines on twentieth-century design examples.

### Specifics

Publisher-derived descriptions say the book is the first title in the Design Briefs series and examines twentieth-century design, architecture and illustration examples (the Barcelona chair and the Braun handblender are named) to expose their geometry, covering classic systems such as the golden section and root rectangles and lesser-known ones such as the Fibonacci series. Roy Behrens's review in Leonardo Digital Reviews (reprinted from Ballast Quarterly Review, Winter 2002-03) records the 2001 edition as 108 pages, with ISBN 1-56898-249-6; other catalogs give 96 or 107 pages, so page counts differ by record. The book includes translucent vellum overlays with red line diagrams that the reader lays over each subject, and the review praises its clear organization. Behrens situates it in a long tradition of "proportional harmony" (his phrase), and says tests beginning with Gustav Fechner in 1876 point to the golden section, roughly 5 by 8. He lists natural and built examples that proponents cite: the chambered nautilus, sunflowers, the Great Pyramid, the Parthenon, Notre Dame and buildings by Le Corbusier. Elam's own examples include posters, furniture, a coffee maker and the 1997 Volkswagen Beetle.

### Replication and criticism

Behrens gives the book high marks ("probably the best introduction to the subject"; "technical to some extent, not overly so") and raises no substantial objection. That favorable reading leaves the empirical question open, and the evidence on that question is mixed or negative. Fechner's famous rectangle experiments are not a clean demonstration: Höge (1995) found that varying the instructions given to subjects changed the proportions they chose, and under both a production task and a choice task found no preference for the golden section. Markowsky (1992) catalogued weak or wrong claims about the Parthenon, the Great Pyramid and paintings. An overlay can always be fitted to an object after the fact; fitting is not evidence that the designer used the system or that viewers prefer it. Both papers are in this lane. The method is useful as a way to see and to practice, but is weak as proof.

### Implications for LTF

1. Use geometry as an analytic aid for LTF's own screens: overlay the layout grid on screenshots in design review to check alignment, repeated proportions and consistent margins.
2. Adopt a small set of aspect ratios for media (for example 16:9 for sim screenshots and 4:3 for instrument panels) and keep them consistent across lessons, instead of mixing ratios by chance.
3. Instrument widgets benefit from simple, symmetric geometry (circles, concentric scales), which gives a stable visual base. But the geometry should serve reading the value, not decoration.
4. Do not tell learners or readers that LTF layouts follow the golden section, and do not use it as a reason for a layout choice. State the practical reason.
5. Proportion exercises could be a pleasant background in design documentation, but should not take priority over tests with learners.

Confirmed this session: Behrens's review at leonardo.info/reviews_archive/mar2003/GEOMETRY_behrens.html (2001, 108 pages, ISBN 1-56898-249-6, quotes above); Open Library work OL4783463W (Princeton Architectural Press, October 2001); web-search summary of library records (Design Briefs series, 2011 second edition, root rectangles, Fibonacci series); Crossref records for Höge (10.2190/uhtq-cfvd-cau2-wy1c) and Markowsky (10.1080/07468342.1992.11973428). I did not read the book.

## samara2023making

Samara, Timothy (2023). *Making and Breaking the Grid: A Graphic Design Layout Workshop*, third edition. Rockport Publishers (first edition 2002; second edition 2017).

### Core claims

Samara's thesis is that designers should learn to build grids properly and then learn when and how to depart from them. The title states the method: making comes first, breaking second. The book is a contemporary teaching text that places the Swiss grid tradition in a wider, more flexible practice, now including interactive and interface work.

### Specifics

The publisher's description for the third edition (June 2023, 256 pages, 9.25 by 11 in) says the book explains the history and basics of grids, including column, compound and modular grids, and shows how to build and use them. It then covers breaking the grid through named techniques: splitting, shifting, working on an axis and intuitive design. It has "hundreds of full-color layout diagrams" and case studies of designers' processes. The third edition adds a cross-cultural reexamination of grid history including alternative layout approaches, expanded coverage of grid use in interactive and UX/UI work, and greater representation of work by women and BIPOC designers. A retail-level summary of the 2017 second edition (240 pages) describes sections on building a grid, using a grid, exhibits of grid-based projects, breaking the grid, and a historical survey of non-structural design techniques. Open Library lists the first edition as Rockport, Gloucester, MA, 2002, and the third edition, 2023. The author is a New York designer and teacher (School of Visual Arts and NYU, per the publisher), formerly senior art director at Ruder Finn.

Terms the book popularized in teaching: column grid (one or more vertical columns), modular grid (columns crossed by rows, producing modules), compound grid (overlaid grids). The publisher page does not give measurements; I did not read the text, so the specific construction rules are not restated here.

### Replication and criticism

A textbook of practice, not an experiment. Its evidence is the portfolio of case studies and the author's teaching. It is also a reaction to the grid's own history: the early-1980s backlash against dogmatic grid use is documented in the Wikipedia article on grids, which also notes that the Macintosh encouraged experimentation and that the grid became "a useful tool rather than a required starting point." Samara's work is part of that reconciliation. Criticism that applies: any claim that broken grids communicate better than regular ones is unproven; and "breaking the grid" in a product interface can harm usability if navigation positions become unpredictable, so the concept needs different limits on screens than on posters. The decision to add inclusive and cross-cultural history in 2023 is an editorial choice; no data on whether it improves outcomes.

### Implications for LTF

1. Treat the LTF layout system as "make, then break": define columns and modules first, and allow a small number of named exceptions (a hero lesson opener, a full-bleed sim screenshot) so exceptions look intentional.
2. Use the named breaking techniques (shift, split, axis) as a vocabulary in design reviews, so that a break is a stated decision with a reason.
3. Keep navigation, progress indicators and controls inside the grid; break only content presentation. Learners need predictable positions for the controls they use repeatedly.
4. A compound grid is the usual answer for dashboards that mix charts, checklists and text: nest a finer grid inside one module.
5. Fly mode may break the grid more than lessons (for example, a single huge number), but should do so consistently.

Confirmed this session: Quarto publisher page quarto.com/books/9780760381939 (third edition details above); Open Library work OL5703561W (first edition) and OL29310895W (third edition, ISBN 9780760381939); web-search summary of retailer and library records for the 2017 second edition (240 pages); Wikipedia "Grid (graphic design)". I did not read the book.

## ruder1967typography

Ruder, Emil (1967). *Typography: A Manual of Design* (German *Typographie: Ein Gestaltungslehrbuch*). Teufen: Arthur Niggli (German, English, French; 274 pages).

### Core claims

Ruder, who taught typography at the Basel School of Design, condensed his teaching into a heavily illustrated manual. His position, as summarized in a Wikipedia biography based on Hollis, is that the primary purpose of typography is communication, though this does not exclude aesthetic effect, and that contrast is one of its methods. He favored sans-serif type and a grid for asymmetrical layouts, and the book became a basic text for design programs in Europe and North America.

### Specifics

The Niggli listing gives the book as 274 pages at 22.5 by 23.5 cm in three languages, with "carefully placed type samples," and ISBN 978-3-7212-0043-0. A dealer description says it covers problems of texture, weight, color, legibility, spacing and leading across 19 chapters, with illustrations that include studies by Ruder and by students in the typography course at the Basel school. Open Library also lists a 1981 English edition from Hastings House of 220 pages, so page counts vary with edition. The Wikipedia account records that Ruder wrote a four-part series for Typografische Monatsblätter in 1957 to 1959 titled "Wesentliches" (Fundamentals), with parts called "The Plane," "The Line," "The Word" and "Rhythm," which gives the structure of his thinking: a page is a plane divided by lines and words organized rhythmically. He taught with Armin Hofmann from 1947, and their courses had waiting lists by the mid-1960s. He co-founded the International Center for the Typographic Arts in New York in 1962.

I could not confirm his specific statements on whitespace, counters or grid proportions from the material I fetched, and the chapter list is thin. Notes on those topics should be taken from the book itself.

### Replication and criticism

A craft manual, with the authority of a teaching program. No empirical test. A historical criticism, which the Wikipedia article on grids reflects, is that the Swiss school was reproduced in a rigid corporate manner by the 1970s and then challenged in the 1980s. The general reading research (see the line spacing study by Ling and van Schaik in this lane) neither confirms nor refutes the manual's specific typographic rules; left-aligned text did outperform justified text in one experiment on visual search of web pages, which gives some support to his preferred alignment, though that study's participants preferred justified text.

### Implications for LTF

1. Ruder's priority, communication first, is the right ordering for lessons whose purpose is to teach a procedure. Decoration and "brand" typography come second.
2. Use contrast as the main hierarchy tool: size, weight, case and spacing, applied in a few steps instead of many.
3. Flush-left, ragged-right text is the default for all LTF body copy. Do not justify text, which creates uneven word spacing at narrow widths.
4. His idea of rhythm in a page suggests a vertical rhythm in lessons: repeated spacing between steps, consistent heading spacing, a predictable place for the "what to do in the sim" box.
5. Use a single sans-serif family for interface and a restrained choice for long reading, with the tests of legibility from the typography lanes taking precedence over any single master's taste.

Confirmed this session: Open Library work OL4926591W (Niggli, Teufen, 1967; Tiranti, London, 1967, 273 pages; Hastings House, 1981, 220 pages); Niggli listing at slanted.de/?p=792946 (274 pages, 22.5 by 23.5 cm, ISBN 978-3-7212-0043-0); dealer listing modernism101.com; Wikipedia "Emil Ruder"; Teesside University repository record for Ling and van Schaik (2007). I did not read the book.

## williams2014nondesigners

Williams, Robin (2014). *The Non-Designer's Design Book*, fourth edition. Berkeley, CA: Peachpit Press (first edition 1994; copyright year on this edition 2015).

### Core claims

Williams argues that beginners can produce competent layouts by applying four visual principles, which she abbreviates as "C.R.A.P.": contrast, repetition, alignment and proximity. A publisher listing summarizes her aim as boiling design down to "four easy-to-master principles" for non-designers. The book's subtitle in the first edition, listed in Open Library, is "design and typographic principles for the visual novice."

### Specifics

The fourth edition's table of contents, from the Pearson catalog page, runs: Introduction; Proximity; Alignment; Repetition; Contrast; Review of the Four Design Principles; Design with Color; Extra Tips and Tricks; The Essentials of Typography; Type (and Life); Categories of Type; Type Contrasts; Does it Make Sense?; Answers and Suggestions; Typefaces in this Book. Note the order: proximity comes first, and the acronym's order differs from the teaching order. Pearson says the revision adds a chapter on designing with type, more quizzes and exercises, updated projects and new visual and typographic examples. The listing describes the prose as humorous and jargon-free, interspersed with exercises, quizzes and illustrations; the print edition (ISBN 9780133966152) was published 20 November 2014 and the book is aimed at beginners.

The four principles in the form teachers commonly state them, which I take from the book's chapter headings and from the general design literature and not from text I read here: proximity groups related items and separates unrelated ones; alignment gives every element a visual connection to another; repetition reuses colors, shapes, spacing and fonts to unify a piece; contrast makes different things clearly different, so that the reader sees hierarchy at a glance. I could not read the chapter text this session, so I do not attribute specific rules or quotations to it.

### Replication and criticism

This is a popular craft guide, with no experiments. Its principles overlap with Gestalt grouping laws (proximity, similarity) that are supported by perception research in the Gestalt lane, so the underlying claims are plausible, but the book does not present data. Weaknesses are those of any four-rule scheme: it is easy to apply mechanically, it does not address information architecture or interaction, and "contrast" and "repetition" can pull against each other when overused. It was written for print and desktop publishing and was updated for color and type, not for responsive layouts. It is useful as a vocabulary for non-designers and engineers reviewing a layout.

### Implications for LTF

1. Use CRAP as the review checklist for any new LTF screen written by someone who is not a designer, such as a content author laying out a lesson.
2. Proximity: in a checklist or quiz, put the prompt closer to its answers than to the previous item, and use the spacing scale to encode relatedness (tight inside a group, looser between groups).
3. Alignment: align labels, values and units on shared edges in instrument panels and tables, so a learner scans down one edge.
4. Repetition: repeat one card pattern for every step in a procedure so that learners recognize the structure.
5. Contrast: reserve the strongest contrast (weight and color) for the one thing a learner should do next, and avoid using it on many elements at once; check in light and dark themes.
6. The beginner audience of the book mirrors LTF's: borrow its practice of short quizzes to test layout understanding in the design documentation.

Confirmed this session: Pearson catalog page pearson.com/en-us/subject-catalog/p/non-designer-s-design-book-the/P200000000691 (fourth edition, 20 November 2014, copyright 2015, table of contents, print ISBN 9780133966152); web-search summary of Pearson, Peachpit and O'Reilly listings (four principles, new chapter, audience); Open Library work OL3502196W (Peachpit Press, Berkeley, 1994, 144 pages). I did not read the book text.

## marcotte2009fluid

Marcotte, Ethan (2009). "Fluid Grids." *A List Apart*, issue 279, 3 March 2009. https://alistapart.com/article/fluidgrids/

### Core claims

Marcotte argues that a layout built in fixed pixels assumes a minimum screen size and so excludes some users, and that a grid can instead keep its proportions while the window changes if every measurement is expressed as a proportion of its container. He presents this as a conversion routine that lets designers keep working from a pixel-accurate comp.

### Specifics

The core formula, in his words, is "target ÷ context = result": the target is the desired size in pixels, the context is the size of the containing element, and the result is a percentage or em value. He applies it to type too. With the body at 100% (usually 16 px), a 24 px heading becomes 24 ÷ 16 = 1.5em, and a 14 px list becomes 14 ÷ 16 = 0.875em.

His worked example is a 988 px comp made of seven 124 px columns with 20 px gutters. The page maximum width is 988 ÷ 16 = 61.75em. A 700 px title offset by 144 px becomes a width of 70.85% and a left margin of 14.575%; an 844 px entry becomes 85.425%; a 124 px marginal column becomes 12.551%. For nested elements the context changes to the parent: inside the 844 px entry, the main copy is 700 ÷ 844 = 82.938% and the meta column 124 ÷ 844 = 14.692%. He states "we need to redefine our context."

Caveats he lists: browsers round sub-pixel widths differently, and Internet Explorer rounds them up, which can break a layout, so he suggests reducing a target by one pixel in an IE-specific stylesheet (for example 123 ÷ 988 = 12.449%); images and Flash are not fully solved and he admits that "other, better workarounds are still out there."

### Replication and criticism

An early expert essay, with a technique rather than an experiment, and its value has been shown by adoption: it is the first of the three ingredients in his 2010 article on responsive design (see marcotte2010responsive). The technique has largely been superseded by native layout features. CSS Grid with `fr` units and `minmax()`, flexbox and `clamp()` allow fluid tracks without manual division, and the specification (see atkins2025css) handles gutters as gap properties instead of subtracted percentages. Readers commented that nested percentage grids become hard to maintain; those comments are on the article, not claims in it. The rounding bug he describes belongs to old browsers.

### Implications for LTF

1. Do not hand-calculate percentages. Use CSS Grid tracks (`repeat`, `fr`, `minmax`) so LTF layouts are fluid by default, but keep Marcotte's reasoning: the proportion between columns is the design, and the pixel value is just one rendering.
2. His rule of expressing type in relative units (em or rem) is still sound and helps users who change browser text size. Learners using LTF next to a simulator may enlarge text; layouts should survive this.
3. Keep the "context" in mind for nested components: a widget placed in a column should size itself from the column (container queries or grid tracks), not from the viewport.
4. Design comps at one or two widths, but verify at intermediate widths, since a fluid grid exposes every width.
5. Set a maximum width for reading text. Marcotte used a max-width in ems; the same logic applies to the lesson column.

Confirmed this session: the full article at alistapart.com/article/fluidgrids/ via fetch (issue 279, 3 March 2009; formula, 988 px example and caveats above); the Wikipedia article on graphic design grids, which cites it.
## marcotte2010responsive

Marcotte, Ethan (2010). "Responsive Web Design." *A List Apart*, issue 306, 25 May 2010 (page updated 2019). https://alistapart.com/article/responsive-web-design/ (expanded as the book *Responsive Web Design*, A Book Apart, 2011).

### Core claims

Marcotte proposes that sites should adapt to the many devices and screen sizes used to view them instead of being split into device-specific designs or separate mobile sites. He compares this to "responsive architecture," where physical spaces react to the people in them. He names three technical ingredients: "Fluid grids, flexible images, and media queries are the three technical ingredients for responsive web design." He sums up the shift this way: "Rather than quarantining our content into disparate, device-specific experiences, we can use media queries to progressively enhance our work within different viewing contexts."

### Specifics

Fluid grids are layouts in relative units, using the conversion from his 2009 article (target ÷ context = result). In this article the annotations show it: a 197 px figure in a 633 px column is 197 ÷ 633 = 31.121642969984202211%, a 21 px margin is 3.317535545023696682%, a 306 px figure in the narrow layout is 48.341232227488151658%, and an 88 px figure in a six-across row is 13.902053712480252764%. Flexible images scale within their containers so they neither overflow narrow layouts nor become oversized. Media queries are CSS rules that apply only when a device meets given conditions; he calls them "conditional comments for the rest of us."

His examples: a linked stylesheet `media="screen and (max-device-width: 480px)"`, chained features with `and` (adding a resolution of 163 dpi), the `@media` rule inside a stylesheet (for example removing floats from `.column`) and the `@import` form. The sample magazine page uses these breakpoints: below 600 px, major blocks are linearized (floats removed, stacked vertically); below 400 px, images go from three columns to two; above 1300 px, images move to a single six-item row. The article notes that older desktop browsers and Internet Explorer lacked native media query support, recommends a flexible grid as the fallback, and points to JavaScript polyfills.

### Replication and criticism

An expert essay that became a movement; the evidence is adoption. Its device-specific condition (`max-device-width`) was later replaced in practice by viewport-based conditions, and content-based breakpoints are now preferred over device-based ones (this is my reading of current practice, not stated in the article). The tooling it leaned on, floats and polyfills, is obsolete. The criticism that applies today is that breakpoint-driven design still produces discrete layouts. Intrinsic approaches (grid with `auto-fit` and `minmax()`, container queries) respond to available space continuously, which the CSS Grid specification supports.

### Implications for LTF

1. All LTF pages are responsive by default and mobile-first: learners will read lessons on a phone and use a tablet or second monitor next to the sim.
2. Choose breakpoints from the content (when a widget or table no longer fits), and keep few of them. Test the full range of widths.
3. Images, sim screenshots and instrument widgets must scale within their containers without overflowing; give every figure a defined aspect ratio so layout does not shift while images load.
4. Fly mode is a distinct context: consider treating it as a separate responsive layout (wide, glanceable, low scroll) selected by user intent, not only by width.
5. Progressive enhancement: the core lesson text and checklist must work without the interactive widget code.

Confirmed this session: the full article at alistapart.com/article/responsive-web-design/ via fetch (author, date, quotations, conversion examples, media queries and breakpoints above); Open Library work OL15692545W for the 2011 A Book Apart book.

## atkins2025css

Atkins Jr., Tab; Etemad, Elika J.; Atanassov, Rossen; Brufau, Oriol (eds.) (2025). *CSS Grid Layout Module Level 1*. W3C Candidate Recommendation Draft, 26 March 2025 (as served when fetched). https://www.w3.org/TR/css-grid-1/ (Level 2, adding subgrid, at https://www.w3.org/TR/css-grid-2/)

### Core claims

The module defines, in its own abstract words, "a two-dimensional grid-based layout system, optimized for user interface design." Items are placed into fixed or flexible slots in a predefined grid. The specification positions grid against flexbox: flexbox is single-axis oriented and "focuses on space distribution within an axis," in a bottom-up approach, while grid "enforces 2-dimensional alignment, uses a top-down approach to layout, allows explicit overlapping of items."

### Specifics

Vocabulary (as defined in the draft): a grid container (`display: grid` or `inline-grid`) "establishes an independent grid formatting context for its contents"; grid lines divide the grid and can be referenced by number or author-defined name; a track is "a generic term for a grid column or grid row"; a cell is the intersection of one row and one column; a grid area is the space for one or more items and can be named with `grid-template-areas`. The `fr` unit is "a fraction of the leftover space in the grid container." `minmax(min, max)` sets a track's size range. Inside `repeat()`, `auto-fill` creates as many tracks as fit and keeps empty ones, while `auto-fit` collapses empty repeated tracks to 0 px. Items can be placed by line number, name or area, or auto-placed into empty cells.

Track sizing is an algorithm of five steps: initialize sizes, resolve intrinsic sizes, maximize tracks, expand flexible tracks, and expand stretched auto tracks. Each track has a base size and a growth limit. Intrinsic keywords (`min-content`, `max-content`, `auto`, `fit-content()`) let content size tracks. Gutters (`gap`) are treated as extra empty fixed tracks during sizing, appear only between tracks, and never before the first or after the last. Alignment is controlled per item (`justify-self`, `align-self`) and for the whole grid (`justify-content`, `align-content`). `grid-auto-flow: dense` lets auto-placement fill earlier holes, "which can reorder items visually." Level 2 adds subgrid so that nested grids "participate in the sizing of their parent grids," and a subgridded axis adopts the parent's lines so content aligns with the surrounding grid.

The specification warns, in its section on placement versus source order, that placement properties can rearrange content visually but are "not a substitute for correct source ordering," that "grid placement only affects the visual presentation," and "with great power comes great responsibility." Source order matters for speech, sequential keyboard navigation and non-CSS user agents.

### Replication and criticism

A standard, and the strongest kind of authority here for what the platform does. It is a draft that "may change at any time," and the date above is the one served when I fetched it. Browser support is a separate question, and the spec's status says nothing about it. The main practical criticisms are not of the standard itself: the specification itself warns that grid placement can make visual order diverge from source order, and that `dense` packing "can reorder items visually."

### Implications for LTF

1. Implement all LTF layouts with Grid for two-dimensional regions (page shell, dashboards, checklists beside a sim image) and flexbox for one-dimensional rows (button groups, nav). The specification's own guidance supports this split.
2. Use `repeat(auto-fit, minmax(min, 1fr))` for card sets (lessons, challenges) so the number of columns adapts to space without breakpoints, and set a sensible minimum card width.
3. Use named grid areas for the fixed page templates (lesson, quiz, fly mode), so the template is readable in code and mirrors the design grids.
4. Use subgrid so that cards in a row align their headings, bodies and actions across cards. Check browser support before relying on it, and give a fallback.
5. Never use visual reordering to change reading order. The DOM order must be the order a screen reader user and a keyboard user meet, which matters for checklists where order is procedure.
6. Use `gap` tokens from the spacing scale, and let `min-content`/`max-content` sizing handle text, instead of fixed heights.

Confirmed this session: fetched the specification text at w3.org/TR/css-grid-1/ (status line, abstract, introduction, concepts, track sizing, gutters, alignment, section 8.2) and the Level 2 abstract at w3.org/TR/css-grid-2/ (subgrid). I did not read the whole document (the page is over 300,000 characters).

## brown2011more

Brown, Tim (2011). "More Meaningful Typography." *A List Apart*, issue 327. https://alistapart.com/article/more-meaningful-typography/

### Core claims

A modular scale is a series of numbers linked by a fixed ratio, and Brown argues that sizes drawn from a meaningful ratio, such as the golden ratio, give more visual harmony than arbitrary or easily divided numbers. He quotes Robert Bringhurst: "A modular scale, like a musical scale, is a prearranged set of harmonious proportions." He is also frank about limits: "Modular scales are a tool, they’re not magic," and "Math is no substitute for an experienced designer's eye, but it can provide both hints and constraints for decision making."

### Specifics

The golden ratio 1:1.618 gives, going up from 10: 10 x 1.618 = 16.180; 16.180 x 1.618 = 26.179; 26.179 x 1.618 = 42.358; and going down: 10 ÷ 1.618 = 6.180; 6.180 ÷ 1.618 = 3.819; 3.819 ÷ 1.618 = 2.360. A double-stranded scale combines two starting numbers (his example is 10@1:1.618 with 20@1:1.618), producing two interleaved strands that tend to fill each other's gaps and so give more measurement options.

His worked page starts from content: the base number is 18 px, the size at which he judged his Minion body text crispest; the ratio is 1.618, chosen for its link to Renaissance typography and the humanist design of the typeface; and an "important number" of 190 px for the h2 heading. The scale then supplies other values: a main column width of 497.406 px (found by trial and error), an h1 font size of 29.124 px, a group width of 845.479 px, and a sidebar width of 274 px derived from a 190 px-tall image. He also records departures: a 15 px sidebar font size that he improvised, a 20 px margin set by optical alignment, and what he calls comment math for values got by adding or subtracting scale numbers (such as an intro size of 21.178 px and line height of 1.394, versus body line height of 1.54 "tuned by eye"). The method works from content outward and pairs with grids and responsive design: scale numbers can set column widths or be converted to percentages. The scale only holds while the chosen fonts load, so he recommends baseline fonts first, then the preferred fonts with scale-based values.

### Replication and criticism

Expert craft, with no experiment. The article contains no outside critique (comments are closed). Its caveats are the author's own: measurements depend on specific typefaces, tuning needs "lots of trial and error," and he improvises where the scale gives an awkward result. The deeper critique is that a ratio scale is a convenience for consistency; no study I found shows that golden-ratio steps are read better than steps from other ratios, and the evidence on golden-ratio aesthetics is negative (see Höge 1995 and Markowsky 1992 in this lane). The practical value is the discipline of choosing from a short list, not the particular ratio. Variable fonts and fluid type (clamp-based) have since added continuous sizing within a scale.

### Implications for LTF

1. Define the LTF type and spacing scale as a modular scale with a stated base (body text size chosen first for legibility) and a ratio chosen for step visibility on small screens. A gentler ratio (such as 1.2 or 1.25) may give tighter steps than the golden ratio; choose by testing, not by authority.
2. Use a two-strand scale if more steps are needed than one strand offers, for example one strand for type and one for spacing that share a base.
3. Express the scale as design tokens (CSS custom properties) so every component draws from the same list, and lint for off-scale values.
4. Record departures from the scale in comments, as Brown does, so reviewers know whether an off-scale value is a bug or a decision.
5. Allow a larger scale for fly mode: its base text must be legible at arm's length, so a separate base is needed, not a scaled-up lesson layout.
6. Keep headings to few sizes on lesson pages so hierarchy is visible without too many steps.

Confirmed this session: fetched the full article at alistapart.com/article/more-meaningful-typography (issue 327, 3 May 2011 on the page; a web search listing gave 21 April 2011, so I give the year only); quotations and calculations above taken from that fetch. I checked the arithmetic of the six ratio steps by hand.

## chaparro2004reading

Chaparro, Barbara S.; Baker, J. Ryan; Shaikh, A. Dawn; Hull, Spring; Brady, Laurie (2004). "Reading Online Text: A Comparison of Four White Space Layouts." *Usability News* (Software Usability Research Laboratory, Wichita State University), volume 6, July 2004.

### Core claims

Whitespace is often defended as a design virtue, but there is little experimental evidence on what it does for reading online. This study varied two kinds of whitespace in online text, the margins around the text and the leading (space between lines), and measured reading performance and preference. From the abstract as reported by the Embry-Riddle research portfolio: margins improved reading speed and comprehension compared with a no-margin version, readers generally preferred text with margins, and leading did not measurably change reading performance but did shape preference.

### Specifics

Design: four conditions created by manipulating margins surrounding the text and the leading. Measures: reading performance (speed and comprehension) and subjective preference. The authors are from Wichita State University, and the paper appeared in an online usability bulletin that is listed as peer-reviewed in the portfolio record. The page I could read gave only the abstract. I could not retrieve the full text because the host (psychology.wichita.edu) was not reachable from this session, so I cannot report the sample size, the particular margin widths or leading values, the passages used, the statistics or the effect sizes. Any later use of this study should open the original and add those.

A 2005 follow-up by Chaparro, Shaikh and Baker (*Usability News* 7, "Reading online text with a poor layout: is performance worse?") compared text with and without an enhanced layout (headers, indentation, figure placement). Its abstract reports that reading speed and comprehension were not affected by layout, though participants were more satisfied with the enhanced layout and found it less fatiguing to read. Together the two studies show that structural spacing around a text block can matter for comprehension, while finer layout polish affects mainly satisfaction.

### Replication and criticism

Evidence strength is modest: a small-lab usability experiment published in a trade bulletin, with details I could not check. Related findings point in different directions. Bernard, Chaparro and Thomasson (2000, same group) framed their question against a view attributed to Jared Spool's team that sites with more whitespace did worse at helping users find information (Spool et al., 1998), and a web-search summary of the body text of the McMullin et al. paper (not the abstract, which I read separately) describes Bernard et al. as finding no difference in search time but a preference for enough whitespace to separate information units. I could not confirm that second-hand description against the original. McMullin and colleagues (2002, see this lane) found better comprehension for text surrounded by whitespace than for text surrounded by meaningless information. The picture is therefore consistent on comprehension and preference and inconsistent on speed and search. Whitespace is not a single variable: margins, leading and group separation behave differently, and "more" is not always better. The classic craft claim (whitespace directs attention and gives the eye a rest) is supported in part.

### Implications for LTF

1. Give lesson text real margins. On phones, keep a side gutter of at least 16 px, and on larger screens limit the text column so that margins grow with the viewport.
2. Do not rely on leading changes alone to improve comprehension. Choose line height for legibility and consistency (see typography lanes) and treat it as a preference setting.
3. Whitespace should separate groups (instruction, rationale, quiz) more than it separates every line; this fits Gestalt proximity and keeps pages short.
4. Test density choices with learners in LTF's own context: reading a lesson with the sim open on another screen or window is a different task from reading a standalone web page.
5. Do not cite these studies as proof that "more whitespace is always better." The evidence supports margins and grouping, not unlimited emptiness, and the dashboard and fly-mode views may need denser layouts.

Confirmed this session: Embry-Riddle portfolio records for the 2004 study (portfolio.erau.edu/en/publications/reading-online-text-a-comparison-of-four-white-space-layouts/; authors, Usability News volume 6, July 2004, abstract) and for the 2005 follow-up (.../reading-online-text-with-a-poor-layout-is-performance-worse/); the record for Bernard, Chaparro and Thomasson (2000); web-search summaries of works.bepress.com/barbara-chaparro/115 and 116. The full texts were not readable.

## mcmullin2002effects

McMullin, Jess; Varnhagen, Connie K.; Heng, Pheng; Apedoe, Xornam (2002). "Effects of Surrounding Information and Line Length on Text Comprehension from the Web." *Canadian Journal of Learning and Technology*, 28(1), Winter 2002. doi:10.21432/t27607

### Core claims

The paper tests two page features that web developers can change easily, line length and the amount of whitespace surrounding text, and asks whether they affect comprehension of web text. Its abstract states that "Comprehension was affected by whitespace" and that participants were not affected by line length. The authors conclude that reading from the web is not the same as reading print, with implications for instructional web design.

### Specifics

Participants were undergraduate university students who read text on the web and answered comprehension questions. The two manipulated variables were line length and the surroundings of the text. The whitespace comparison is between text surrounded by whitespace and text surrounded by "meaningless information" (clutter that is not part of the message). The result was better comprehension when the information was surrounded by whitespace than when it was surrounded by meaningless information. The abstract page I could read does not give the number of participants, the line lengths tested, the comprehension scores or the statistics, so I do not report them. The journal is open access from the University of Alberta Libraries (DOI above), but I read only the article's abstract page this session.

The study sits within a small group of early web-reading experiments, alongside the Wichita State usability studies on margins and leading (see chaparro2004reading), and adds an interpretation: whitespace may help not because empty space is pleasant but because it removes competing material from the vicinity of the text. That reading is mine; the abstract supports only the comparison.

### Replication and criticism

A single experiment on a student sample, using comprehension questions on web text. The line-length null result is a limitation: it applies to the range tested, which I could not confirm, and a null result with a small sample does not show that line length never matters. Other lab work in this lane reaches different conclusions about related layout variables (for example, left-aligned text and wider line spacing helped visual search in Ling and van Schaik, 2007). Its tested comparison, whitespace versus meaningless surrounding information, is closer to a clutter manipulation than to a pure whitespace manipulation, so it is relevant to Rosenholtz-style clutter work as well. Readers should not generalize from undergraduate comprehension tasks to learners practicing a procedure.

### Implications for LTF

1. The most defensible reading is about clutter near the text: keep sidebars, ads-like promotional blocks, badges and unrelated widgets away from the paragraph a learner is reading. LTF has no ads, but progress banners, streak counters and "next lesson" prompts could play the same role if placed beside body text.
2. In the lesson template, put persistent chrome (progress, navigation) at the edges and keep the reading column clear.
3. Comprehension questions after a lesson (LTF quizzes) are an honest test of the layout. When trialing layout variants, use the same quiz items for each variant, as this study did with comprehension questions, instead of judging by preference.
4. Do not infer from the null result that line length is unimportant; use the typography lanes for measure guidance, and test LTF's own column width.
5. Fly mode content competes with the sim for attention; keep surrounding information minimal there.

Confirmed this session: Crossref record 10.21432/t27607 (authors, 28(1), 15 February 2002, University of Alberta Libraries); the journal's abstract page cjlt.ca/index.php/cjlt/article/view/26584 (undergraduates, whitespace effect, no line-length effect, conclusion). I did not read the full text.

## ling2007influence

Ling, Jonathan; van Schaik, Paul (2007). "The influence of line spacing and text alignment on visual search of web pages." *Displays*, 28(2), 60-67. doi:10.1016/j.displa.2007.04.003

### Core claims

The study asks how text presentation affects online behavior and preferences, with the goal of producing design guidelines for web pages. According to the abstract in the Teesside University repository, varying the presentation significantly affected task performance. Greater line spacing improved accuracy and reduced reaction times. Left-aligned text performed better than justified text, although participants preferred justified text. The authors discuss implications and offer web design recommendations.

### Specifics

The task is visual search of web pages, a scanning task, not continuous reading. The independent variables are line spacing and text alignment (left-aligned versus justified); the dependent measures are accuracy, reaction time and preference. I read only the abstract and the bibliographic record (volume 28, issue 2, pages 60-67, published April 2007, Elsevier, 20 Scopus citations at the time of the record). I could not retrieve the full text from this session, so I do not report the participant count, the spacing values (such as single or double spacing), the pages used or the statistics. A web-search summary of a second mirror says double spacing produced the faster, more accurate search, but I treat that as unverified until the paper is read.

The same authors published a related experiment in 2006 (*International Journal of Human-Computer Studies* 64(5), 395-404) on font type and line length. Its abstract on the Teesside portal says that font choice had little effect, that longer lines helped scanning in the visual search task, and that shorter lines produced better subjective ratings in both experiments. This is a useful pair: it shows the typical pattern in this literature, where performance and preference disagree.

### Replication and criticism

Experimental evidence, but of a narrow task. Visual search for a target on a page is not comprehension of a lesson, so extrapolation to reading is weak. The mismatch between measured performance (left-aligned better) and stated preference (justified liked) is an important result in itself: users' preferences are not a reliable guide to what helps them. I know of no large replication; the finding about justified text agrees with widely repeated craft advice against justification on narrow web columns, which is a separate line of evidence (uneven word spacing). The line-spacing effect appears to conflict with the Wichita State finding that leading did not affect reading performance (see chaparro2004reading), but the tasks differ (search versus reading) and I could not compare the stimuli, so I would not call it a contradiction.

### Implications for LTF

1. Default to left-aligned, ragged-right text everywhere in LTF. Do not offer justified text as an option unless user testing says otherwise.
2. Use generous line spacing in lists the learner scans (checklists, step lists, tables of V-speeds as a display pattern, with numbers coming from tokens), where visual search is the dominant task. Dense lists penalize accuracy.
3. Treat user preference with caution in design research: if learners say they like a layout, check the performance measure (time to find a step, errors) too. Build a small A/B or task test into the challenge flow where feasible.
4. For fly mode, which is scanned quickly while attention is on the sim, line spacing and left alignment matter more than for lessons.
5. Keep the settings simple; offering "text spacing" and alignment preferences is an accessibility feature, but the default should be the performance-favored one.

Confirmed this session: Crossref record 10.1016/j.displa.2007.04.003 (authors, Displays 28(2), 60-67, April 2007, Elsevier); Teesside University repository page research.tees.ac.uk/en/publications/the-influence-of-line-spacing-and-text-alignment-on-visual-search/ (abstract summary, citations); the Teesside page for the 2006 line-length paper; web-search summaries (dblp record, Bohrium mirror). The full text was not read.

## rosenholtz2007measuring

Rosenholtz, Ruth; Li, Yuanzhen; Nakano, Lisa (2007). "Measuring visual clutter." *Journal of Vision*, 7(2), article 17, 1-22. doi:10.1167/7.2.17

### Core claims

Visual clutter is a major factor in how hard it is to find something in a display, yet it has had no agreed measure. The paper proposes and tests computable clutter measures, and frames clutter as a stand-in for set size (the number of items competing for attention) in natural scenes, where items are not countable. Two measures, Feature Congestion and Subband Entropy, are the authors' own; the third, Edge Density, is borrowed from earlier work by Mack and Oliva.

### Specifics

Feature Congestion (a new version of an earlier measure by Rosenholtz, Li, Mansfield and Jin, 2005) extracts color, luminance and orientation features, computes their local variability, and combines them into a single value; a later paper describes the method as treating the volume of an ellipsoid built from that local variance as the clutter estimate. Subband Entropy grew from the observation that JPEG compressed file size was highly correlated with Feature Congestion: clutter relates to how much visual information a display contains. Edge Density is the proportion of edges in an image (the later paper describes it as the ratio of edges to image size, computed with Canny edge detection). The authors report that color variability matters for clutter: it is captured by Feature Congestion but not by Edge Density or Subband Entropy. MIT distributed MATLAB code for the first two measures and said Edge Density is only two lines of code.

I read the paper's abstract-level record and secondary descriptions, not the full results section, so I cannot report the experiment details (the stimuli, the number of observers, the search tasks) or the correlations for the 2007 paper. A later paper (Yu, Samaras and Zelinsky, 2014, Journal of Vision 14(7):4) attributes earlier numbers to the 2005 study: on map stimuli, Feature Congestion correlated with search times at r = 0.75 versus 0.83 for edge density, and for targets defined by contrast threshold it reached r = 0.93 versus 0.83 for edge density.

### Replication and criticism

Experimental work with computational models, and generalization is its central challenge. The same 2014 paper reports that Henderson et al. (2009) found Feature Congestion no better than Edge Density at predicting clutter's effect on search, that Neider and Zelinsky (2011) found edge density at least as good, and that in the 2014 comparison on 90 real-world scenes Feature Congestion ranked below edge density and the superpixel-based methods, with the authors suggesting weak generalization from map stimuli to realistic scenes. That 2014 study found its proto-object model correlated with a median human ranking at rho = 0.814, with mean agreement between human observers of rho = 0.692. In other words, clutter is a real, partly measurable construct, but no single computational index is settled, and human judgments of clutter themselves agree only moderately. The measures were validated on photographs, maps and visualizations, not on user interface screens or instrument panels.

### Implications for LTF

1. Treat density as a measurable design variable. LTF can run a cheap edge-density check (a screenshot analysis in CI or design review) to flag screens that become far more cluttered than their siblings, with a human review of anything flagged. Do not set a numerical pass or fail threshold from this paper, which gives none for UI.
2. Color variability is part of clutter: many saturated hues in one view (for example multiple colored badges and charts) raise it. This supports a restrained palette and using color only for status.
3. Clutter slows search, so for lesson pages the task of finding "what do I do next" should have few competing items. For the instrument widgets, avoid decorative tick marks and textures that add edges without information.
4. Dashboards and progress views will always carry more items than lessons; group them (grids and cards) so that clusters, not single items, are what the eye must search.
5. A flight-simulator context already supplies a very cluttered visual field, so fly mode should be uncluttered by contrast.

Confirmed this session: Crossref record 10.1167/7.2.17 (authors, 7(2), article 17, 16 August 2007); MIT DSpace record dspace.mit.edu/handle/1721.1/37593 (software for the two measures; Journal of Vision 2007); web-search summaries of the paper (the three measures, color variability, set-size framing); Yu, Samaras and Zelinsky (2014), PMC4528410, for comparison numbers and later criticism. The paper's full text (jov.arvojournals.org) returned a 403 error.

## tufte1983visual

Tufte, Edward R. (1983). *The Visual Display of Quantitative Information*. Cheshire, CT: Graphics Press (second edition 2001).

### Core claims

Tufte argues that graphics should show data with integrity and efficiency, and offers measures to judge a display: the data-ink ratio, data density and the lie factor. His maxim, as listed in secondary summaries, is "above all else show data." The key density claim for layout is that a page or screen can usually carry far more information than designers dare to put on it, if the information is well organized.

### Specifics

The author's site describes the book as the classic on statistical graphics, charts and tables, with about 250 illustrations and 197 pages; the second edition (2001) adds color reproductions of William Playfair's graphics and corrections from 17 printings of the first. Definitions and figures below come from secondary summaries (a University of Washington course outline of 1998, an IEEE Spectrum article and academic chapters) and should be checked against the book before being quoted as Tufte's words.

- Data-ink ratio = data-ink divided by total ink used to print the graphic, equivalently 1.0 minus the proportion of the graphic that can be erased without loss of data. Data-ink is described as "the non-erasable core of a graphic."
- Chartjunk: non-data ink or redundant data ink, described in a summary as "ink that does not tell the viewer anything new."
- Data density = number of entries in the data matrix divided by the area of the graphic. The course outline says most scientific journals reach about 50 to 200 numbers per square inch and that an astronomical graph reaches about 110,000, the maximum known. The outline is old and the figures are illustrations, not benchmarks.
- Small multiples: sets of thumbnail-sized graphics on one page showing aspects of one phenomenon, using the same measures and scale.
- Lie factor = size of the effect shown in the graphic divided by size of the effect in the data; area and volume encodings exaggerate differences.

### Replication and criticism

Tufte's principles are expert opinion supported by examples, and the empirical record is mixed. Bateman, Mandryk, Gutwin, Genest, McDine and Brooks (CHI 2010, doi:10.1145/1753326.1753716) tested embellished charts against plain ones. From the abstract as reported by a web search, embellished charts were described about as accurately as plain ones, and recall after two to three weeks was significantly better for embellished charts, though the authors caution against recommending all charts adopt this style and found that background images made interpretation harder. A commentary by Stephen Few says the long-term recall group had 10 participants. A 2023 preprint (doi:10.31219/osf.io/dferj) reports a replication attempt, but I did not read its results. Parsons and Shukla (2020, arXiv 2009.02634) interviewed 20 data visualization practitioners and found pluralistic views of chartjunk, with personal and situational factors shaping its use. Data-ink minimalism is therefore a useful default for analytical charts, not a law for all audiences, and is least secure for teaching, where memorability and engagement matter.

### Implications for LTF

1. Instrument widgets are graphics in Tufte's sense: erase decoration that carries no information (chrome, bevels, drop shadows), keep tick marks and numerals that do. But a round gauge is also a learned convention that beginners must recognize, so fidelity to the real instrument may beat data-ink purity.
2. Use small multiples for comparing variants: for example, several airspeed indicator states in a row with identical scales when teaching what a reading means.
3. Density is context-dependent: a lesson can be sparse, a dashboard of progress can be dense, and fly mode must be sparse because attention is on the sim. Define a density budget per page type.
4. The lie factor is an integrity check: progress bars and charts in LTF should scale area and length linearly with the data.
5. Do not remove all non-data elements from teaching charts. The embellishment studies suggest some illustration may aid recall, and LTF should test this itself before adopting or banning it.

Confirmed this session: Open Library work OL2824012W (Graphics Press, Cheshire, CT, 1983, 197 pages, ISBN 9780961392147; second edition 2001); author's page edwardtufte.com/book/the-visual-display-of-quantitative-information/; web-search summaries of definitions; the 1998 UW course outline staff.washington.edu/larryg/Classes/R560/zz-tufte.html (formulas, density numbers); Crossref record for Bateman et al. (2010) and the arXiv abstract for Parsons and Shukla. I did not read the book.

## markowsky1992misconceptions

Markowsky, George (1992). "Misconceptions about the Golden Ratio." *The College Mathematics Journal*, 23(1), 2-19. doi:10.1080/07468342.1992.11973428

### Core claims

Markowsky examines claims that the golden ratio (about 1.618) appears in ancient architecture, famous paintings, modern buildings and the human body, and that people prefer golden rectangles. He concludes that many of the claims are unsupported, rest on selective measurement, or come from errors of history. The paper is the standard citation for scepticism about golden-ratio claims in art and design, and was later drawn on by Mario Livio (2002).

### Specifics

I could not read the paper itself (the archive copy was blocked), so the content below is from secondary accounts, including a critical review by a golden-ratio enthusiast (Gary Meisner), whose description of Markowsky should be read with that bias in mind.

- Naming: the term "golden ratio" dates only to the 1800s; older names include "extreme and mean ratio" and "divine proportion."
- Great Pyramid: his measurements give a hypotenuse-to-height ratio of about 1.6195, within about 0.09% of the golden ratio, yet he rejects the link because the ancient text that describes the pyramid is ambiguous.
- Parthenon: he argues that parts of the building fall outside the golden rectangle usually drawn around it, and that source measurements differ because of different reference points. One of his calculations divides a width of 101 ft 3.75 in (a figure Meisner's account attributes to Tractenberg and Hyman, spelled as I read it) by an apex height of 59 ft (attributed to Rossiter), giving 1.717, not 1.618.
- Painters: he finds the claims for Leonardo da Vinci and others weak and doesn't measure major works.
- Buildings: height divided by width of the United Nations Secretariat Building gives about 1.76 (and 1.90 to 1.92 with other heights).
- Preference experiments: Meisner reports that Fechner's 1860s test with 10 rectangles found about 76% chose ratios near 0.618, and that Markowsky repeated it with 48 rectangles and found people prefer a range of proportions but not the golden one specifically.
- Human body: his own family measurements gave a navel-height ratio averaging 1.63 (about 0.7% from the golden ratio), which he dismissed as within measurement uncertainty.
- Framework: he treats measurements within about plus or minus 2% of the ratio (about 1.58 to 1.66) as the range to consider, arguing that infinitely many numbers lie near it.

### Replication and criticism

Mathematical and historical analysis, not an experiment. The critique from the other side (Meisner) argues that Markowsky measured the Parthenon from the wrong base, ignored other golden relationships and was too strict. Both sides use measurement tolerance as the key judgment, which is exactly why such claims are unfalsifiable by casual overlays. The balanced popular treatment (Livio, 2002) agrees with Markowsky that many claims are overstated. The experimental side is covered by Höge (1995) in this lane, who found no golden-section preference when instructions were varied.

### Implications for LTF

1. Do not use the golden ratio as a justification in LTF design documents, lesson copy or marketing. Any layout ratio should be justified by function (legibility, screen fit) or by a test.
2. If a golden-ratio scale is used for convenience (see Brown 2011), say so in terms of convenience.
3. When a contributor claims a proportion is "known to be most beautiful," ask for a test. The design KB should record that such claims are contested.
4. For aviation content, the ratio has no role; geometry claims about airfoils or instruments need engineering sources, not aesthetic ones.
5. This paper is a model of the evidence discipline LTF needs: check the measurements, state the tolerance, and report that a pattern fits only within a stated range.

Confirmed this session: Crossref record 10.1080/07468342.1992.11973428 (author, The College Mathematics Journal 23(1), 2-19, January 1992); web-search summaries including goldennumber.net's review of the paper (Meisner, a partisan source), which gave the numbers above. The paper's own text was not read, so every number is attributed to those accounts.

## hoge1995fechner

Höge, Holger (1995). "Fechner's Experimental Aesthetics and the Golden Section Hypothesis Today." *Empirical Studies of the Arts*, 13(2), 131-148. doi:10.2190/uhtq-cfvd-cau2-wy1c

### Core claims

Gustav Fechner began experimental aesthetics ("aesthetics from below") in the 1860s with the golden section hypothesis: that the golden rectangle is the most pleasing proportion. Höge revisits the hypothesis with two experiments and finds that, whatever criteria subjects were given, there was no preference for the golden section.

### Specifics

From the abstract as reported by a search of the Scilit record: the golden section hypothesis fit Fechner's psychophysical approach. Berlyne had cautioned that small changes in instructions or experimental setup might shift the proportions people prefer. Höge therefore varied the verbal criteria given to subjects. One experiment used Fechner's method of production, in which subjects drew rectangles; the other used the method of choice, in which subjects sorted rectangles. Different criteria produced different proportions in the drawn and sorted material, but under both conditions no preference for the golden section was found. The abstract summary I could read does not give the number of subjects, the criteria used (for example "most pleasing" versus other wordings) or the proportions chosen, and I did not read the full paper.

Related context: Roy Behrens's review of Elam (2003) says tests beginning with Fechner in 1876 point to the golden section; Meisner's account of Markowsky reports that Fechner's 1860s choice test found about 76% choosing near 0.618 among 10 rectangles. These statements are the claim that Höge's experiments qualify.

### Replication and criticism

Experiments on subjects, with a method-focused conclusion: the preferred shape depends on what people are asked. The result matches Markowsky's (1992) report of a wider-range preference, as described by Meisner. Limits: the paper tests rectangles in isolation, with no context, which is both a strength (control) and a weakness (real designs have content), and it tests samples whose characteristics I could not confirm. A defender of the golden section can argue that the rectangle test lacks context; an opponent can argue that the hypothesis predicted a robust preference and did not get one. The fair reading is that the claim of a universal, robust preference is not supported.

### Implications for LTF

1. Do not choose card, image or panel aspect ratios by appeal to the golden rectangle. Choose them by content (a sim screenshot is 16:9; a gauge is square or circular).
2. Instruction wording changes outcomes, so in LTF's own preference tests keep wording neutral and consistent ("which is easier to read?" differs from "which is nicer?") and prefer performance tasks.
3. Where a test is cheap, test: A/B two layouts with the same learners and task, as this literature recommends, instead of using authority.
4. The design KB should classify golden-section aesthetics as "contested, weak evidence" and record this paper as the source.
5. In user research, be aware that a preference result can be an artifact of the criterion in the question; the same warning applies to Likert items on LTF surveys.

Confirmed this session: Crossref record 10.2190/uhtq-cfvd-cau2-wy1c (author Höge, Empirical Studies of the Arts 13(2), 131-148, July 1995, SAGE); abstract summary via the Scilit record scilit.com/publications/34b0ab391d492eed024b386a428f4257 (two experiments, criteria varied, no golden section preference). The full text was not read.

## fessenden2018scrolling

Fessenden, Therese (2018). "Scrolling and Attention." Nielsen Norman Group, 15 April 2018. https://www.nngroup.com/articles/scrolling-and-attention/

### Core claims

Users do scroll, but attention remains concentrated at the top of the page, and content closer to the top is more likely to be read. The article updates an earlier 2010 eyetracking study with new data. It answers two opposed myths: that "users never scroll" (they do, and more than before) and that the fold no longer matters (it does).

### Specifics

Method as reported: the x,y coordinates of over 130,000 eye fixations from 120 participants, taken from a larger eyetracking study across thousands of sites, on a 1920 by 1080 screen, compared with a 2010 study on 1024 by 768 monitors. Tasks covered news, e-commerce, blogs, FAQs, encyclopedic pages and search engine results pages. The article does not state the number of pages.

Findings: 57% of viewing time was above the fold, down from 80% in 2010. 74% of viewing time fell within the first two screenfuls (up to 2160 px); the second screenful received about 17%, and the remaining 26% was spread thinly across the rest. On general pages over 42% of viewing time fell in the top 20% of the page and over 65% in the top 40%; on search results pages 47% fell in the top 20% and over 75% in the top 40%. Above the fold, over 65% of viewing time was in the top half of the viewport (over 75% on search results pages). A sharp drop in attention after the fold appeared in both 2010 and 2018. By 2018, 81% of viewing time fell within the first three screenfuls, versus 80% in the first screenful in 2010. Recommendations: reserve the top of the page for high-priority content and key calls to action, add signifiers (such as cut-off text) to avoid false floors, and test the ideal page length with real users.

### Replication and criticism

A large observational eyetracking dataset reported by a research group with a track record, but not peer-reviewed, and the article lists its own caveats. It could not separate the effects of bigger screens from those of design trends. The 74% figure ignores maximum page length, so it may reflect short pages or users giving up. The gaze plot is representative only; actual patterns depend on design and the user's goal. Search results pages likely reflect users focusing on top results. The comparison with 2010 uses different screen sizes. The findings concern casual browsing of public sites; they do not describe students working through a lesson they have committed to, whose scrolling behavior is likely different. Such behavior is a known gap, and the article does not address it.

### Implications for LTF

1. Do not assume learners will not scroll, and do not assume they will see content far below the first screens. Put the objective, the next action and any safety-relevant step near the top, and use signifiers (a visible partial next section) so scrolling is invited.
2. Long lessons should be structured as short sections, each with its own heading and a clear summary near its start, so that the top-heavy attention pattern applies to each section.
3. Quizzes and challenge briefings should place the question and primary action within the first screenful on a phone, which means a smaller viewport than the 1920 by 1080 used in this study.
4. For fly mode, assume no scrolling at all: everything essential must fit in one view next to the sim.
5. The data suggests that content below the third screenful is rarely seen by casual visitors, but LTF learners are committed; test LTF's own scroll depth through analytics, and treat these numbers as priors, not targets.

Confirmed this session: full article text fetched from nngroup.com/articles/scrolling-and-attention/ (author Therese Fessenden, 15 April 2018; method, percentages, conclusions, caveats above). It is the source of the figures; I did not see the underlying dataset.

## nielsen2006f

Nielsen, Jakob (2006). "F-Shaped Pattern For Reading Web Content (original study)." Nielsen Norman Group, 16 April 2006. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/

### Core claims

An eyetracking study found that users' dominant way of reading web pages resembles the letter F ("F for fast"). People do not read word by word, and what they see falls off with distance from the top and left of the page. The article draws conclusions for placing content and writing headings.

### Specifics

Method: eyetracking with 232 users viewing thousands of web pages, with a fairly consistent pattern across sites and tasks. The F has three parts: a horizontal movement across the upper part of the content (top bar); then a move down and a second horizontal movement, usually shorter (lower bar); then a vertical scan down the left side, sometimes slow and systematic and sometimes fast and spotty (the stem). Recommendations: assume users will not read word by word, especially during initial research; put the most important information in the first two paragraphs, since users will likely read more of the first paragraph than the second; start subheads, paragraphs and bullet points with information-carrying words, because the left edge is noticed most and the third word on a line is read much less often than the first two. The page notes that a later eyetracking study, 11 years on, confirmed the findings.

### Replication and criticism

An observational study from an applied research group, reported on the web and not peer-reviewed in the article form. The article itself qualifies the finding: the F is a rough, general shape, not a uniform pattern. Some users read a third horizontal section (an E) or only one (an inverted L). The distance between the bars varies: a product image lowered the second bar on an e-commerce page, and a longer second headline lengthened it on a search results page. Users typically read less of the second horizontal area than the first. The study gives no figures for the number of pages beyond "thousands," and the heat maps are illustrative. The pattern describes uncommitted scanning of text-heavy pages; it should not be generalized to every task. A risk in applying it is to treat the F as a template to design to; the article's own recommendations point instead at structuring text with front-loaded words and clear headings.

### Implications for LTF

1. Left-align text and put the key word first in headings, step labels, and bullets: "Check fuel quantity" scans better than "Now you should make sure to check the fuel quantity," where the information-carrying words come after filler. (This is a copy example only, not a procedure.)
2. Structure lessons with clear, information-carrying subheads and short paragraphs so that scanning picks up the right items, since many learners will skim before they commit.
3. A checklist's left edge is the scan line: put the action word or item name at the left, and the value or response at a consistent right-hand position.
4. Do not design layouts to fit an F. Write and structure content so that a learner who follows the F still gets the point, and use the data as a description of poor-case behavior.
5. In fly mode, where reading time is brief, apply the same principle: lead with the most important word and place the primary value at the top left.

Confirmed this session: full article text fetched from nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/ (author Jakob Nielsen, published 16 April 2006; 232 users; three components, recommendations and caveats above). I did not read the 2017 follow-up.

