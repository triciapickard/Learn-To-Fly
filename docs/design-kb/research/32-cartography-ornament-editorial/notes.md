# Lane 32: Cartography, ornament and editorial design

## imhof2007cartographic

Imhof, E. (2007). *Cartographic Relief Presentation* (H. J. Steward, Ed.). Redlands, CA: ESRI Press. Original German 1965; English translation de Gruyter 1982.

### Core claims

Imhof, a professor of cartography at the Swiss Federal Institute of Technology in Zurich from 1925 to 1965, argues that a map must be designed, not merely drafted: the cartographer chooses what to show, how strongly, and in what visual register, so that a very large amount of terrain data reads as something simple and beautiful. A reviewer of the 2007 edition quotes the book's page 359 as saying that only simplicity gives a lasting impression (Youngblood review, Cartographic Perspectives 65, 2010).

A second claim is that colour, line, tone and lettering have to be planned together. Chapter 14, "Interplay of Elements", sets out what the reviewer calls his now classic techniques for keeping layered elements, such as contour lines and text, clear to interpret.

### Specifics

Structure (from the Youngblood review): sixteen chapters. Chapter 1 is a fifteen-page history of relief depiction. Chapter 2 covers topographic foundations, chapter 3 the study of topography (landscape drawing, aerial photographs, field work). Chapter 4 is a theory of colour that reviews the chemical, physiological and psychological theories and ends with specific advice on colour combinations. Chapter 5 states the general problem of relief presentation. Chapter 6 covers spot heights and soundings and includes exacting tables, for example minimum type sizes for spot-height values by map scale. Chapters 7 to 13 cover skeleton lines, contour lines (just under forty pages), shading and shadows (the longest chapter), hachures, rock drawing, topographic symbolization and area colour tinting; chapter 14 is the interplay of elements, 15 reproduction and 16 future developments.

Tufte (1990, in this lane, who cites page 72 of the 1982 English edition) reproduces Imhof's colour rules. The first rule says pure, bright or very strong colours are unbearable when they stand unrelieved over large adjacent areas, but can be used sparingly on or between dull background tones. The third says large background colours should be muted, grayish or neutral so smaller bright areas stand out. The fourth says that if a picture has two or more large enclosed areas of different colours it falls apart, and unity comes from interweaving the colours of one area through the other. Tufte footnotes that this fourth rule is pushed too far toward a general aesthetic theory. Ordnance Survey's cartography guide (docs.os.uk) independently summarizes the same approach: strong saturated colours in small areas, and quiet base colours such as grey and beige that give way to smaller brighter areas.

### Replication and criticism

This is a craft treatise by an acknowledged master, not an experiment. Its rules rest on Imhof's trained judgment and the Swiss national map tradition, and the plates feature the Alps, so some advice is tied to mountain terrain and to print reproduction. The reviewer notes that chapters 15 and 16 (reproduction and future developments) are of least practical use today. Later empirical cartographers (see Robinson, MacEachren, Brewer in this lane) tested parts of the colour and symbol advice with readers and kept the broad principles: restraint with saturation, tonal separation of layers, and simplicity. His rule on relief lighting from the upper left is widely used, but it is a convention about perceiving relief, not a rule for every UI.

### Implications for LTF

Fly mode and chart widgets should follow Imhof's tonal hierarchy: terrain or background in low-saturation neutrals, with saturated colour held for the few things the learner must act on (the active waypoint, the airspace boundary being discussed, a warning). Where a diagram layers text over lines (a traffic pattern with leg labels, say), give the text a clear plane of its own rather than letting lines run through it; Imhof's interplay-of-elements chapter is the craft source. His minimum-size tables are a reminder that label size should be set by scale and viewing distance, which matters for a screen read at arm's length beside a simulator. Light and dark themes should each have their own base tone ladder, not an inverted copy. Do not copy specific print values from the book into LTF tokens; use the principle and check contrast with the colour lanes.

Confirmed this session: Imhof's colour rules as quoted in the Tufte scan (see tufte1990envisioning); Open Library search (works OL17999406W, ESRI Press 2007, ISBN 9781589480261; OL16378666W de Gruyter 1982); Youngblood review in Cartographic Perspectives 65 (2010), read in full from https://cartographicperspectives.org/index.php/journal/article/download/cp65-youngblood/pdf/976; Ordnance Survey colour guide https://docs.os.uk/more-than-maps/geographic-data-visualisation/guide-to-cartography/colour; web search summaries on the editions. I did not read the book itself.

## robinson1952look

Robinson, A. H. (1952). *The Look of Maps: An Examination of Cartographic Design*. University of Wisconsin Press. Reissued by Esri Press, 2010.

### Core claims

Robinson argues that map design should be judged by function and by more objective standards than the taste of the individual draftsman. The book grew out of his doctoral research (Esri ArcUser article on the 2010 reissue) and sits, in Robinson's framing, at the crossroads of art and science. The Esri article describes it as examining three visual components of cartographic technique, lettering, structure and colour, which the article says cover most of the aspects of a map that can be evaluated from a visual point of view. Esri adds that many consider the book to have inspired a shift in cartographic research from simple map production towards communication and design theory.

A distinctive choice: the book contains no maps. Robinson said, according to the Esri article, that showing how to do things would turn it into a textbook, that using real maps as examples of what not to do would be likely to harm cooperation and friendship, and that special-purpose scientific maps should not be judged out of context. The epigraph quoted there, from the geographer William Morris Davis, urges the study of graphic presentation as carefully as verbal presentation.

### Specifics

What I could confirm is the scope and method, not chapter-by-chapter rules. The three components named are lettering, structure (the way the lines, areas and symbols are built into a visual whole) and colour. The book is short: catalogue records list about 124 pages for the Esri reissue (ISBN 9781589482623) and a similar count for earlier printings, with minor differences between records. A 1966 reprint exists. Robinson followed it with *Elements of Cartography*, first published by Wiley in 1953 (Open Library work OL4822995W) which became a standard teaching text. I did not confirm specific measurements or rules from the text in this session, so none are given here.

### Replication and criticism

It is an expert-opinion treatise, deliberately free of experimental data, and its authority is historical: it set the research agenda of looking at maps as visual communication. Later cartographers, including MacEachren in *How Maps Work*, credit that agenda and then replaced opinion with perceptual and cognitive studies, so individual prescriptions in Robinson should be treated as hypotheses rather than findings. A search for critical reviews returned only catalogue and publisher material, so I cannot report named critics.

### Implications for LTF

Robinson's central stance fits the project: judge a visual by whether it works for its purpose, with the reader in mind. For LTF, that means every chart-like diagram (pattern, approach, airspace sketch) should be tested against a stated reading task, such as "find the downwind leg and say which way you turn", rather than approved on looks alone. His three-part split is a handy review checklist for any diagram: is the lettering legible and consistently placed, is the structure (what sits above what) clear, and is colour doing a job rather than decorating. His refusal to show negative examples with real maps is a useful editorial norm for LTF content too: when teaching what goes wrong, prefer constructed examples to ridiculing a real chart or a real pilot's error. Because the evidence base here is craft judgment, treat it as direction and verify specific choices with learner testing.

Confirmed this session: Open Library search (works OL4822994W, OL10558566W, OL18736661W); Esri ArcUser article https://www.esri.com/news/arcuser/1010/lookofmaps.html read in full via WebFetch; web search on the reissue. I did not read the book.

## bertin2010semiology

Bertin, J. (2010). *Semiology of Graphics: Diagrams, Networks, Maps* (W. J. Berg, Trans.). Esri Press. French original 1967 (Gauthier-Villars); first English edition University of Wisconsin Press, 1983.

### Core claims

Bertin proposes a formal grammar for graphics. Any set of information, he argues, consists of an invariant (the common ground that every data point shares) and a number of components (the things that vary). A graphic works only if each component is given a distinct visual variable, so the designer must first count the components and decide how many dimensions the drawing has to carry. In the sample chapter published by Esri, a plain price-over-time series has two components and uses the two dimensions of the plane; comparing two stocks adds a third component and so a third variable (size variation in that example), and comparing two stocks in two cities adds a fourth (texture). The book is the root of the "visual variables" vocabulary now standard in cartography and information visualization (Roth 2015, "Visual Variables", read in full).

A second claim is that graphics have three functions: recording information, communicating it as a simplified message, and processing it (using the drawing to find structure by manipulating it).

### Specifics

The contents list published by Esri shows the structure. Part one, "Semiology of the graphic sign-system", has three sections: analysis of the information; the properties of the graphic system (the plane, with its two dimensions, and the retinal variables); and the rules of the graphic system, including "image theory" (stages in the reading process, definition and construction of an image, limits of an image) and the three functions. A closing section on "general rules of legibility" covers graphic density, angular legibility and retinal legibility. Part two classifies problems into diagrams, networks and maps.

The variables, as summarized by Roth (2015): Bertin originally identified seven. Two are the planar dimensions (location) and the rest are the retinal variables: size, shape, orientation, color hue, color value (lightness) and texture. The "retinal" label reflects that they are seen preattentively, at the level of the eye. Bertin set out levels of organization. Associative variables let all marks sharing a value be perceived as a group; he took location, shape, orientation, hue and texture to be associative, and size and value to be dissociative (one variation dominates). Selective variables let the eye isolate one category and ignore the others; Roth reports he held shape to be the only variable that is not selective. Ordered variables are read as more or less; he took location, size, value and texture to be ordered. Quantitative perception, the ability to estimate how much more, he restricted to location and size. A Stony Brook course slide deck says his theory rested more on intuition than on vision research, though M. Green later found it quite accurate (the slide's claim, not traced further).

### Replication and criticism

Bertin's rules are a theory derived from craft analysis, not experiments. Roth notes the taxonomy of visual variables varies by scholar (a review by Tyner is cited) and was extended: Morrison (1974) added two variables (the list includes arrangement and saturation), and MacEachren (1995) added crispness, resolution and transparency and argued that saturation, crispness, resolution and transparency are also strongly ordered, with texture only marginally ordered. MacEachren's "syntactics" then maps variable to data type: unordered variables (hue, orientation, shape) suit nominal data, ordered ones suit ordinal data, and only location and size suit numbers.

### Implications for LTF

Bertin gives LTF a checklist for any instrument diagram or chart. First, count the components of the information the learner must read, then assign each its own variable and no more than the eye can separate. Use position and length for quantities the learner must compare precisely (airspeed against a limit); use hue only for categories (system on, off, caution) because hue is not ordered. Do not encode two things in one variable. Keep size and value for importance, since they dominate the image and suppress other variables. His note that shape is not selective argues against asking learners to find a particular glyph among many; use hue or value to make a target pop. For dashboards, the three functions are a useful split: progress screens record, lesson diagrams communicate, and a drag-to-reorder or compare widget processes. Fly mode is read in glances, so test each image for a single-glance read.

Confirmed this session: Open Library (work OL4520539W, Sémiologie graphique); Esri contents PDF and sample chapter (https://www.esri.com/content/dam/esrisites/en-us/esri-press/book-pages/toc/semiology-graphics-diagrams-networks-maps.pdf and the sample chapter PDF); Roth (2015) "Visual Variables" PDF from geography.wisc.edu, read in full; Stony Brook slide deck (bertin.pdf). Web search results on the 1983 Wisconsin edition and translator William J. Berg. I did not read the full book.

## monmonier2018how

Monmonier, M. (2018). *How to Lie with Maps* (3rd ed.). Chicago: University of Chicago Press. First edition 1991.

### Core claims

Monmonier's argument is that distortion is unavoidable and that this is why map readers need skepticism. In the introduction of the third edition (publisher's PDF excerpt, read in full), he says it is not only easy to lie with maps but essential: a map has to distort reality to put a three-dimensional world on a flat sheet, its symbols are almost always bigger than the features they represent, and it must offer a selective view to avoid hiding critical information in a fog of detail. He calls the result the cartographic paradox: an accurate map has to tell white lies. Because readers tolerate white lies, it is not hard to slip in serious ones. He writes that a single map is but one of an indefinitely large number of maps that might be produced from the same data, and that the book's purpose is to promote a healthy skepticism, not cynicism.

### Specifics

Contents of the third edition (from the publisher's PDF): Introduction; Elements of the Map (scale, projection, symbolization); Map Generalization: Little White Lies and Lots of Them; Blunders That Mislead; Color: Attraction and Distraction; Maps That Advertise; Development Maps; Maps for Political Propaganda; Maps, Defense, and Disinformation; Large-Scale Mapping, Culture, and the National Interest; Data Maps: A Thicket of Thorny Choices; Image Maps; Prohibitive Cartography; Fast Maps: Animated, Interactive, or Mobile; and an epilogue, with an appendix on latitude and longitude. The introduction sets out the logic of the sequence: general principles first (chapters 2 to 5), then specific map types and how each can be manipulated (chapters 6 to 14), then dual roles of maps and a call to assess an author's motives (chapter 15). He also stresses that lowering technical barriers, with software and online mapping, lets people without cartographic training produce maps that look respectable, with crisp type and uniform symbols, while using an inappropriate projection or misleading symbols.

### Replication and criticism

It is expert essay and example, not experiment. Reviews found by search are mixed on the third edition: a Cartographic Perspectives review (Evan Levine) says it arrives at a fortuitous time but falls short in missed chances to modernize; other readers say the examples are dated. The Maproom blog says the central message will not be obsolete until maps are. The book's rhetorical title is not a how-to for deception. The author's declared goal is critical literacy.

### Implications for LTF

Every aviation diagram is a selective, simplified map and so tells white lies: a traffic pattern drawn as a neat rectangle, a pattern altitude shown at scale. LTF should say so on the page where it matters, with a short "not to scale" or "simplified" label, and should avoid pictures whose exaggeration could be mistaken for real geometry (for example, a glide cone drawn much steeper than reality). When one map could be drawn many ways, a lesson can show two renderings of the same data and name what each hides. Colour is a chapter in his book; choropleth-style heat shading of progress or scores should be built from a documented ramp and honest classes, since the class breaks alone can change the story. For misleading-chart risk in dashboards, the data-map chapter's theme (a thicket of thorny choices) is a prompt to document choices.

Confirmed this session: Open Library (works OL1909721W, OL8350601W, OL28047708W, OL20081418W); University of Chicago Press course-introduction PDF for the third edition (contents and chapter 1 text) https://www.press.uChicago.edu/dam/ucp/books/pdf/course_intro/978-0-226-43592-3_course_intro.pdf, read in full; web search for the Cartographic Perspectives review snippet (I could not open the review text itself).

## maceachren1995how

MacEachren, A. M. (1995). *How Maps Work: Representation, Visualization, and Design*. New York: Guilford Press.

### Core claims

MacEachren replaces craft rules of thumb with a cognitive-semiotic framework. Guilford describes the book as a framework for understanding maps as powerful, abstract and synthetic spatial representations, and as an account of how the many representational choices in mapping affect information processing and knowledge construction. Its premise is that map design should rest on a scientific understanding of how people see and understand maps, so that symbolization choices can be justified by perception and cognition, not taste. It is the work that moved cartographic design from the craft tradition of Imhof and Robinson towards perception research and semiotics.

### Specifics

From the Guilford contents page (513 pages, hardcover June 1995, paperback 2004): chapter 1 argues for a scientific approach to improving map representation and design. Part I, "How Meaning Is Derived from Maps", covers an information-processing view of vision and visual cognition (chapter 2), how maps are seen (3) and how maps are understood (4, with subheadings visual array, visual description, knowledge schemata and cognitive representation). Part II, "How Maps Are Imbued with Meaning", gives a primer on semiotics (5), a functional approach to the semantics and syntactics of map signs (6) and a lexical approach to map pragmatics (7). Part III, "How Maps Are Used", covers geographic visualization ("GVIS") for facilitating visual thinking (8), relationships in space and time (9) and the question of whether we should believe what we see (10).

The most reused technical contribution, per Roth's 2015 encyclopedia entry on visual variables (read in full), is the extension of Bertin's variables and the "syntactics" of matching variable to data type. MacEachren added crispness, resolution and transparency to the set (grouped earlier under "focus" for uncertainty display) and argued that colour saturation, crispness, resolution and transparency are strongly ordered variables while texture is only marginally ordered. His syntactics rates each variable as good, marginal or poor for nominal, ordinal and numerical data: unordered variables such as hue, orientation and shape suit nominal data; ordered but not quantitative variables such as value and saturation suit ordinal data; only location and size suit numbers. Roth also notes, as a result from later work (MacEachren et al. 2012), that crispness was the most effective variable for one uncertainty task, a reminder that these are tested claims.

### Replication and criticism

The book is a synthesis of cognitive science for cartographers, so its strength is as a map of the research more than a source of its own experiments. Publisher-quoted reviews (Environment and Planning B called it required reading for map makers; URISA Journal called it an important book on graphic representation in perception and cognition; a past president of the International Cartographic Association said it should be mandatory reading) are praise, not independent critique, and I could not retrieve a critical scholarly review this session. A web search surfaced a 2001 MacEachren essay in Information Design Journal that addresses critiques of Bertin's graphic variables and extends them to time, sound and touch, which shows the visual-variable scheme was still under revision. Roth observes that the content of visual-variable taxonomies varies considerably by scholar.

### Implications for LTF

This is the most directly transferable theory in the lane. The syntactics rule gives a plain table for any widget: use hue and shape only for categories (which system, which checklist item type), value or saturation for ordered states (normal, caution, warning, shown as increasing intensity), and position or size for numbers. It argues against encoding airspeed margin in hue alone. The ordering claim for saturation supports using increasing saturation to escalate urgency, with the caveat that colour-vision differences need a second cue (position, shape or label) which the accessibility lanes cover. His "information-processing view" chapters are a reminder that fly mode is seen in short glances: a design that depends on conscious search is the wrong tool. For uncertainty, crispness and transparency are available levers: a faded or soft-edged estimate (the glide range under unknown wind, for example) reads as less certain without extra text. Use the semantics and syntactics split in design reviews: separate "what does this sign mean" from "how do signs relate to each other on the page".

Confirmed this session: Open Library (work OL3502929W); Guilford contents and publication page https://guilford.com/books/How-Maps-Work/Alan-MacEachren/9781572300408/contents; web search results quoting Guilford's description and reviews; SERC description https://serc.carleton.edu/resources/1051.html; Roth (2015) PDF from geography.wisc.edu for the extension of variables. I did not read the book.

## brewer1997spectral

Brewer, C. A. (1997). Spectral schemes: Controversial color use on maps. *Cartography and Geographic Information Systems, 24*(4), 203-220. DOI 10.1559/152304097782439231.

### Core claims

Cartographers had long advised against rainbow-like spectral colour schemes for mapping quantitative data, even though such schemes were common in GIS and scientific visualization. Brewer's paper, according to the abstract record at Penn State, reports recent research finding that people prefer spectral schemes and read them accurately when they are designed as multi-hue versions of diverging schemes. She concludes that cartographers should encourage spectral schemes for diverging quantitative data rather than reject them outright.

### Specifics

The abstract states that spectral and diverging schemes can both use light colours to emphasize a midpoint and dark colours for the high and low extremes. The design advice that follows is conditional: spectral-style colours are acceptable for data with a meaningful midpoint, as long as lightness is organized so the ends are dark and the middle is light. To help readers with red-green colour vision deficiency, the abstract says a spectral scheme can skip the yellow-greens. A related Brewer paper found in the same search (Mapping Mortality, with MacEachren, Pickle and Herrmann, 1997) evaluated colour schemes for choropleth maps and is cited as the empirical basis. Brewer also authored the earlier 1996 guidelines for diverging schemes (Crossref: Cartographic Journal 33(2), 79-86) and a 1994 chapter on colour use guidelines in Visualization in Modern Cartography, which I confirmed exist but did not read.

Penn State's course page on choosing colours (courses.ems.psu.edu), which teaches Brewer's approach, presents the wider guidance: sequential schemes for low-to-high data (one hue from light to dark), diverging schemes for data around a midpoint, categorical schemes for unordered groups, and a caution that using a categorical scheme for numeric data makes a map hard to read. It says rainbow schemes are generally to be avoided because they are hard to interpret, can exaggerate small differences and work poorly for colour-blind readers, and cites a study in which doctors read medical images more accurately with sequential schemes than rainbow ones (I did not trace that study).

### Replication and criticism

The controversy is real and is not settled in favour of rainbows. Brewer's position is narrow: spectral schemes are defensible as diverging schemes with controlled lightness. The Penn State course page states the stronger "avoid rainbow schemes" position, giving as reasons that they are hard to interpret and can exaggerate insignificant differences. Treat the 1997 paper as qualified permission for one use case, not a general licence.

### Implications for LTF

If LTF ever needs a colour ramp (a skill heat map, a deviation from target altitude), default to a single-hue sequential ramp for "how much" and a lightness-controlled diverging ramp only where there is a true midpoint, such as above or below glidepath. Do not use a rainbow for ordered data. Whatever ramp is used must also carry value contrast so it survives grayscale, colour-vision differences, and both themes, and legends should be adjacent to the thing coloured.

Confirmed this session: Crossref query (DOI 10.1559/152304097782439231, Cartography and Geographic Information Systems 24(4), 203-220, 1997, Brewer); abstract and record at https://pure.psu.edu/en/publications/spectral-schemes-controversial-color-use-on-maps/; Penn State course page https://courses.ems.psu.edu/maps/l5_p5.html. I did not read the full paper.

## harrower2003colorbrewer

Harrower, M., & Brewer, C. A. (2003). ColorBrewer.org: An online tool for selecting colour schemes for maps. *The Cartographic Journal, 40*(1), 27-37. DOI 10.1179/000870403235002042.

### Core claims

Choosing colour for a thematic map is harder than it looks, and most people who make maps have no training in colour design. ColorBrewer is an online tool that reduces guesswork by recommending ready-made schemes. The Penn State abstract record says it matches schemes to the number of data classes, the type of data (sequential, diverging or qualitative) and the end-use medium (screen, print, projection or photocopy), offers "learn more" tutorials, lets the user test schemes as a map and legend, and exports colours in five colour specification systems.

### Specifics

A web search summary of the paper reports that schemes range from 3 to 12 classes and fall into three categories: sequential, diverging and qualitative. The designers built the sequential and diverging schemes by hand-adjusting value and saturation within a hue (or between hues) and the qualitative schemes by varying hue and value, with the Munsell colour system a substantial influence. The motivating problem in the abstract summary is that thematic mapping is often done by GIS analysts without formal training in colour design. The companion paper, Brewer, Hatchard and Harrower (2003, Cartography and Geographic Information Science 30(1), 5-32, confirmed in Crossref), prints a catalog of the schemes. The tool also filters for schemes that are safe for people with colour-vision deficiency, photocopying and projectors (Penn State course page).

### Replication and criticism

This is a design tool paper, not an experiment. Its schemes were hand-tuned and visually evaluated rather than derived from a formal perceptual model, and the Penn State record lists over a thousand Scopus citations, showing wide uptake (the page's own count; treat as approximate). The principle that matters for LTF is that scheme type should match data type.

### Implications for LTF

Use ColorBrewer-style thinking as the rule for any chart: choose scheme type by data type first, then class count, then medium. Because LTF uses light and dark themes, each theme needs its own checked ramp rather than a flipped one. Qualitative palettes should stay short (a handful of categories), since qualitative schemes lose distinctness as the class count grows. Put the legend next to the data and keep one ramp per meaning across the app.

Confirmed this session: Crossref query (DOI 10.1179/000870403235002042; also 10.1559/152304003100010929 for the catalog paper); record and abstract summary at https://pure.psu.edu/en/publications/colorbrewerorg-an-online-tool-for-selecting-colour-schemes-for-ma/; web search summary of content. I did not read the full paper.

## harley1989deconstructing

Harley, J. B. (1989). Deconstructing the map. *Cartographica, 26*(2), 1-20. DOI 10.3138/e635-7827-1757-9t53.

### Core claims

Harley argues that maps are not neutral windows on the world. The abstract (read in the full text posted by the University of Rome) says the paper draws on postmodern thinking to redefine maps as representations of power. He sets up two sets of rules behind every map: the scientific rules of measurement and drawing, and the rules governing the cultural production of the map, which are tied to values such as ethnicity, politics, religion and social class. He says cartographic discourse keeps a "double silence" about the second set: the map hides social structure beneath abstract, instrumental space, and the technical literature ignores it. The interplay of social and technical rules, he writes, produces the order of a map's features and the hierarchies of its practices.

### Specifics

His method is eclectic. The essay owes most to Foucault (discourse, power-knowledge, silence) and Derrida (the rhetoricity of all texts, reading in the margins for contradictions). Three arguments are developed. First, the "rule of ethnocentricity": societies centre their own territory on their world maps, and the scientific Renaissance gave cartography coordinate systems and scale yet also confirmed a myth of European centrality through projections such as Mercator's. Second, the "rules of the social order" inside map signs. Harley writes that, in European maps, the more powerful a place, the more prominent its sign: "size of symbol, thickness of line, height of lettering, hatching and shading, the addition of color" are the tools by which class and power are engineered into the image. He cites Louis Marin on the 1652 map of Paris, where churches and mansions get pictorial signs and ordinary houses only an identical point. Third, rhetoric: all maps frame a message for an audience and employ the devices of rhetoric, including appeals through "colors, decoration, typography, dedications" and invocation of authority, especially in scientific maps. The steps of making a map (selection, omission, simplification, classification, creation of hierarchies, symbolization) are inherently rhetorical. He also distinguishes external power (exercised on and with maps by patrons and states) from power internal to cartography (what map makers do when they make maps).

### Replication and criticism

This is a theoretical essay, not an empirical test. It was highly influential and widely criticized. Commentators found its use of postmodern theory incomplete; a search result notes that Mignolo's comments in Cartographica 26(3) respond directly. A 2015 special issue of Cartographica, "Deconstructing the Map: 25 Years On" (introduction by Rose-Redwood, with contributions including Edney's "Cartography and Its Discontents" and Krygier's reflections, confirmed in Crossref and search), set out to examine the essay's limits rather than canonize it. One critique reported in search is that Harley left the orthodox definition of a map as an image of the world untouched. A fair reading: the claim that cartographic signs carry social meaning is well supported by historical example, while the stronger claim that all cartographic knowledge is power is a philosophical position.

### Implications for LTF

The rule "the more powerful, the more prominent" can be turned into a design audit. Every size, weight, colour and position decision on an LTF page ranks things; make that ranking deliberate and match it to what a learner needs to do next. If a decorative element (an ornament, a hero image) is more prominent than the safety-critical callout, the page is making a claim the content does not support. Harley's point about silences is a prompt for content design: what a diagram leaves out (wind, terrain, other traffic) should be named on the page. His point that typography and decoration are rhetorical devices supports a rule that LTF's visual character (editorial feel, ornament) should be a conscious trust signal rather than a reflexive style. Avoid giving an aviation chart a borrowed authority through official-looking decoration it has not earned.

Confirmed this session: Crossref query (DOI 10.3138/e635-7827-1757-9t53, Cartographica 26(2), 1-20, 1989; also 10.3138/carto.50.1.01 and 10.3138/carto.50.1.05 for the 2015 issue); full text of the essay read from https://disp.web.uniroma1.it/sites/default/files/Harley%20-%20deconstructing%20the%20map.pdf; web search for reception and the 2015 issue.

## garland1994beck

Garland, K. (1994). *Mr Beck's Underground Map*. Harrow Weald: Capital Transport Publishing.

### Core claims

Garland's book is the first full history of Henry (Harry) C. Beck's London Underground diagram. An Eye magazine review (spring 1995) describes it as a full-length history that draws on Beck's early sketches, mock-ups and correspondence, which Garland inherited. Garland, a graphic designer and friend of Beck from the 1950s until Beck's death in 1974, argues that the diagram's lasting strength came from its construction method: geometric drawing that ignores surface geography (except the river Thames), which gave a simple but comprehensive system and a unifying corporate identity, and which could expand with the network while staying true to its original design.

### Specifics

Dates reported in search results (London Transport Museum and other pages, not checked against primary records): a 1931 presentation drawing; resubmission in 1932 and acceptance; first pocket edition printed in January 1933 in a run of 750,000. Garland donated Beck's 1931 drawing to the London Transport Museum in 1993. The Eye review adds that Beck was dismissed as designer in 1960 in an abrupt and acrimonious break, after wanting indefinite stewardship of the diagram. It describes long captions on the design process and editions. A later research paper by Roberts, Gray and Lesnik (2016, in this lane) summarizes the technique Garland documents as three moves: non-depiction of surface detail irrelevant to journey planning; simplified line trajectories using only horizontal, vertical and 45 degree diagonal lines joined by tightly radiused corners (now called octolinearity); and expansion of the congested centre with compression of the suburbs so station names fit without interrupting the lines.

### Replication and criticism

Garland's book is documentary history and craft appreciation, not research, and it establishes Beck's reputation. Its design claims were later tested. Maxwell Roberts's experiments on Paris and Berlin maps found that octolinearity is not a proven gold standard (see roberts2017preference). A web search also notes that Beck's recognition grew after Garland's book, which prompted a BBC documentary. I did not find, this session, a critical review of Garland's attribution claims beyond the dismissal story told in the Eye review.

### Implications for LTF

Beck is the classic case that a diagram can beat a map when the task is topological: what connects to what and in what order. Many LTF explanations are of this kind: checklist flow, the sequence of a flight, the structure of a procedure. A schematic with consistent angles, even spacing, one weight for lines and clear interchange symbols will help a beginner more than a to-scale picture. But the cost named in the Roberts literature is distortion: if learners will later use a real chart, show the link between schematic and geography once, so the diagram does not replace spatial understanding. The dismissal story is also a governance lesson for a design system: a visual language that must expand over time needs a custodian and rules, or it drifts.

Confirmed this session: Open Library (work OL4801324W, Garland, Mr. Beck's Underground Map, Capital Transport, 1994); Eye review https://eyemagazine.com/review/article/design-for-the-underground (read via WebFetch); web search summary on dates; Roberts et al. 2016 paper text for the three techniques.

## roberts2017preference

Roberts, M. J., Gray, H., & Lesnik, J. (2017). Preference versus performance: Investigating the dissociation between objective measures and subjective ratings of usability for schematic metro maps and intuitive theories of design. *International Journal of Human-Computer Studies, 98*, 109-128. DOI 10.1016/j.ijhcs.2016.06.003.

### Core claims

Three experiments show that how usable people say a metro map is can differ from how well they perform with it. The abstract (read in the author's accepted manuscript) says people's ratings reflect expectations and prejudices about effective design, and that the idea of octolinearity as a gold standard for usability continues to be refuted.

### Specifics

Experiment 1 was within-subjects: 80 subjects (28 male, 52 female, mean age 22.0) planned journeys on an official octolinear Paris Metro map and a curvilinear one, four journeys per map. The curvilinear map gave faster journey planning (63 of 80 subjects had a faster mean time with it); mean planning time was 42.4 seconds for the curvilinear map when it came first and 37.9 seconds when second, against 51.7 and 48.4 seconds for the official map. Yet preference was unrelated to performance: 38 subjects preferred the official map and 34 the curvilinear (8 were undecided), and aggregate ratings of the two did not differ significantly. Experiment 2 had 649 respondents, recruited through map-interest websites, rate nine matched London Underground designs for usability and attractiveness, and showed a clear octolinear bias, with individuals who held an octolinearity theory distinguishable from those holding a simplicity theory. Experiment 3 compared three Berlin maps optimized for simple line trajectories: journey times did not differ, yet usability ratings did.

The paper also lists five design criteria Roberts proposed earlier: simplicity (simple line trajectories), coherence (parallel lines, regular shapes), balance (even density across the map, enlarging the centre), harmony (aesthetic features that may not affect usability) and topographicity (not distorting so much that confidence or journey choices suffer). It cites Guo (2011) as finding inefficient journeys 30 percent of the time in one poorly topographic region.

### Replication and criticism

It replicates and extends Roberts et al. (2013), per the abstract. Its own samples are small to moderate and mostly student or enthusiast, and the task was journey planning, so generalization to every schematic use is uncertain. A companion Berlin study (Roberts, Newton and Canals, Information Design Journal, preprint) found the concentric-circles design performed worse and was rated poorly, yet objective and subjective measures were again dissociated. Roberts also argued in a later Cartographic Journal paper (found in search, not read) that informal expert assessments of schematic map usability are unreliable.

### Implications for LTF

Do not take a preference test as evidence that a diagram works, and do not take expert taste as evidence either. For any new chart or diagram, measure time and errors on a real task, then ask for opinions. A familiar, handsome design can win ratings while slowing people down, and a strange one can be faster. This supports LTF running timed task checks in Phase 1 usability work. It also warns that beginners' ratings of an instrument widget ("this feels clear") need to be paired with whether they read it correctly under the time pressure of fly mode.

Confirmed this session: Crossref (DOI 10.1016/j.ijhcs.2016.06.003: IJHCS 98, 109-128, 2017); author's accepted manuscript https://repository.essex.ac.uk/17237/1/1-s2.0-S1071581916300751-main.pdf, read for the abstract, introduction and experiment 1 results; the Berlin preprint https://repository.essex.ac.uk/26174/1/Roberts_et_al_IDJ_2016.pdf (abstract read).

## jones1856grammar

Jones, O. (1856). *The Grammar of Ornament*. London: Day and Son.

### Core claims

Jones, an architect and designer, argues that ornament can be taught as a language with rules, and that the rules can be learned from the ornament of every period and culture and then applied to new work without copying old results. He frames the book as a response to the poor state of design in his day and ends its principles with a call that no improvement can occur until artists, manufacturers and the public are better educated in art and the existence of general principles is recognized (Proposition 37, read in the 1856 text on the Internet Archive). The Metropolitan Museum's essay on the book (found by search) adds that Jones was reacting to slavish copying of published patterns, and quotes his Proposition 36 (the principles discoverable in the works of the past belong to us; not so the results).

### Specifics

The book prefaces its colour plates with thirty-seven numbered propositions headed "General principles in the arrangement of form and colour, in architecture and the decorative arts, which are advocated throughout this work". I read all of them. Selected rules, paraphrased from the 1856 text: decorative arts arise from, and should attend upon, architecture (1); works should possess fitness, proportion and harmony, the result of which is repose (3); construction should be decorated, but decoration should never be purposely constructed (5); beauty of form comes from lines growing out of one another in gradual undulations, with nothing that could be removed without loss (6); care for the general forms first, subdivide them with general lines, then fill the interstices with ornament that can be subdivided again for closer inspection (7); all ornament should be based on a geometrical construction (8); proportions should be multiples of a simple unit, and the most beautiful ratios are those the eye finds hardest to detect (9); harmony of form is a balance of the straight, the inclined and the curved (10); all lines should flow out of a parent stem (11); junctions of curves should be tangential (12); flowers and natural objects should not be copied but conventionalized (13).

On colour: colour assists the development of form and distinguishes parts (14, 15); primary colours should be used in small quantities on small surfaces, balanced by secondary and tertiary colours on larger masses (16); Proposition 18 gives numerical balance ratios taken from Field's chromatic equivalents (for example 3 yellow, 5 red, 8 blue for the primaries), which are a nineteenth-century theory that I did not check against modern colour science; propositions 24 to 27 apply Chevreul's simultaneous contrast (light tones appear lighter, dark darker, and each colour tinges its neighbour with its complement). Propositions 28 to 33 give boundary rules: colours should never impinge on each other, and ornament on a contrasting ground should be separated by an edging of a lighter colour, of gold, white or black. The book then presents plates in chapters from Ornament of Savage Tribes and Egyptian ornament onward.

### Replication and criticism

This is craft authority from a 19th-century architect, and it is historically specific. Its colour theory relies on Chevreul's contrast principle (the effect Jones describes is now studied as simultaneous contrast) and on Field's ratios, which I could not verify as sound. Its cultural framework, which ranks the ornament of cultures in a progress narrative, reflects Victorian assumptions that modern readers should not adopt. Treat the principles as hypotheses about balance, hierarchy and edge separation, not as laws.

### Implications for LTF

Three transferable ideas. First, hierarchy in decoration: Proposition 7 describes a nested structure of large form, then main lines, then fine detail that rewards close viewing; a lesson page can do the same, with big structure legible at a glance and detail revealed on closer reading. Second, edging rules: the propositions about separating ornament from ground with a light or dark edge map directly to contrast and outline decisions for text on a pattern or gauge marks on a dial, and support giving any patterned background a quiet zone behind text. Third, restraint: ornament that cannot be removed without loss is a high bar; most LTF ornament (section dividers, empty states, a compass-rose motif) should pass the test "does it help orientation or recognition?" and be removed in fly mode. Conventionalized, not photographic, motifs fit an instrument-panel visual language.

Confirmed this session: Open Library (works OL15836693W, OL24521691W); full OCR text of the 1856 edition at https://archive.org/stream/grammarornament00Jone/grammarornament00Jone_djvu.txt, propositions 1 to 37 read; Metropolitan Museum essay summarized in web search results.

## dresser1873principles

Dresser, C. (1873). *Principles of Decorative Design* (4th ed.). London: Cassell, Petter, Galpin & Co.

### Core claims

Dresser, a designer who wrote for manufacturers and working men, wrote the book as an art-education text. The preface (read in the Internet Archive scan) says its object is aiding the art education of those who seek knowledge of ornament as applied to industrial manufactures, that it attempts "simply to instruct", and that it addresses working men; the text began as lessons in the Technical Educator. He argues that ornament is not mere prettiness but a power for good or ill, to be judged by a set of principles: truth, beauty and power, with utility first. An object must first be formed as a work of utility and may then be made as beautiful as you please. An object that is unpleasant to use will in the end be set aside.

### Specifics

The contents list: an introductory chapter (art knowledge, historic styles; truth, beauty, power; humour in ornament), then colour, furniture and further chapters on manufactured goods. On truth, he condemns imitation of one material in another (wood graining, marbling, a carpet pattern imitating another, a jug imitating wicker) as false, and says each material can express beauty truthfully. On beauty, he says a beautiful composition has no part that could be taken away leaving the rest equally good or better, a rule close to Jones's Proposition 6. On expression, he links form to effect: sharp, angular or spiny forms are exciting, bold broad forms give repose, and "breadth" and "largeness" of treatment induce tranquillity; so the ornamentist should ask what effect each form has on the mind. Decoration should suit the room: richness for a dining room, cheerfulness for a drawing room, worth for a library, repose for a bed room; glitter must be used sparingly or it reads as vulgar. He quotes George Wilson on the compatibility of beauty and utility and uses the nautilus shell as an example. He also quotes Owen Jones's formula (Proposition 3 of the previous source) that works of the decorative arts should possess fitness, proportion and harmony, the result of which is repose.

### Replication and criticism

It is a craft treatise by a leading designer, with moral and class overtones that are dated (the "noble" working men, the claim that art can exalt or debase a nation). The claims about the emotional effects of forms (angular excites, broad soothes) are plausible and have echoes in later empirical aesthetics, but Dresser offers no experiments. Scholars read him as bridging Victorian ornament and early modern design: the demand that decoration follow function and material honesty anticipates later functionalism, though his own work was richly decorated.

### Implications for LTF

Dresser's "utility first, then beauty" ordering is the right order for fly mode: first a screen that is correct to use, then character. His statement that glitter excites and large breadth soothes supports a calm base state, with sharp or high-contrast treatment saved for warnings. The room-by-room mood idea suggests a mood map for the product: lesson reading is a library (worth, calm), challenge briefing a workshop (focus), progress a drawing room (cheerful), fly mode a bed room in the sense of repose, since it must not compete with the simulator. His material honesty can be applied to UI: do not draw a bevelled metal bezel in CSS when a flat card is what it is; a skeuomorphic gauge face is acceptable when it is a real instrument depiction, not decoration.

Confirmed this session: Open Library (works OL2972475W, OL13786140W); Internet Archive catalog listing (principlesofdeco00dres, London: Cassell, Petter, & Galpin, 1873) and OCR text https://archive.org/stream/principlesofdeco00dres/principlesofdeco00dres_djvu.txt, with the fourth edition title page, preface and chapter 1 read; Gutenberg search result describing the fourth edition. The year 1873 is the archive and Open Library cataloguing, not printed on the OCR title page I read.

## gombrich1979sense

Gombrich, E. H. (1979). *The Sense of Order: A Study in the Psychology of Decorative Art*. Phaidon.

### Core claims

Gombrich, the art historian of *Art and Illusion*, extends that book's study of pictorial representation to non-pictorial decoration. A Kirkus review summarizes the central argument: decoration arises from an innate human sense of spatial order, balancing economy (quick comprehension, simplicity, predictability) against intellectual enjoyment (variety, complexity, surprise), so it sits between monotony and confusion. Henri Zerner's review in the New York Review of Books (June 1979) reports that Gombrich finds the aims of the decorative artist in three activities: framing (defining and emphasizing the field to be ornamented), filling (the content of that field) and linking (connecting elements into more intricate networks).

### Specifics

The book is divided, per Kirkus, into three parts: theory and practice in decorative art, the psychology of perception, and the psychological history of decorative motifs. The perception part, which Zerner calls the strongest, applies Karl Popper's view of knowledge to seeing: we assume continuity and regularity, and we notice breaks in them, so the sense of order is a prerequisite for perceiving disorder. Gombrich replaces a camera model of vision with an information-processing model. He discusses aesthetic responses to shapes while noting that the questions put to subjects shape the answers, observes that repetition can strip a motif of its representational meaning and that viewers read faces and three-dimensional forms into abstract shapes. A review by Anthony Storr, found via search, adds that excess order can drain meaning, as a kaleidoscope reduces all visual experience to regular pattern. Historically, Gombrich explains continuity in ornament through habit, follows Alois Riegl's history of the palmette, and offers a Darwinian-style account of why motifs such as the acanthus scroll persist, an account he admits cannot be tested (Zerner). He also treats the recurring classical suspicion that rich ornament is morally bad, linking the rise of modernist austerity to Victorian art criticism (Kirkus).

### Replication and criticism

This is a scholarly essay in the psychology of art, not an experimental report, and it leans on perception research of the 1960s and 1970s. Zerner's review is respectful but critical: he finds the arguments so heavily qualified that they become diffuse, thinks Gombrich is unfair to Riegl, says the sharp split between decorative and symbolic art reflects a Western classical tradition rather than a universal one (the Book of Kells being a counter-case), and says Gombrich underestimates how fast patterns acquire social meaning. He also notes Gombrich's visible distaste for modern abstraction. Storr's review (reported in a search summary) criticizes the omission of psychoanalytic work such as Ehrenzweig's. The core claim that pattern perception depends on expectation of regularity and sensitivity to deviation is consistent with later perception research, but I did not check specific studies for this lane.

### Implications for LTF

Gombrich's economy-versus-enjoyment trade-off is a usable design target for lessons: pages that are quickly comprehensible and predictable (a stable template for each lesson, so the learner's sense of order does its work) with controlled variety (an occasional illustrated diagram, a change of rhythm) to keep attention. Because breaks in a regular pattern are what we notice, the same property makes alerts effective: keep the base state of the interface regular (aligned grid, consistent spacing) and let a warning break that regularity; an interface already full of irregular ornament gives a warning nothing to break. His framing, filling, linking triple maps neatly onto components: frame (card, panel border, section header), fill (the content or pattern in the panel), link (connectors, arrows, a progress path). Ornament in LTF should do one of those three jobs; ornament that does none is decoration the page can lose. The warning that repetition drains meaning argues for restraint with repeated icons or motifs along a lesson path: when every step wears the same badge, the badge stops meaning anything.

Confirmed this session: Open Library (work OL686188W, Phaidon 1979); Zerner review https://www.nybooks.com/articles/1979/06/28/the-sense-of-sense/ (read via WebFetch); Kirkus review https://www.kirkusreviews.com/book-reviews/e-h-gombrich/the-sense-of-order-a-study-in-the-psychology-of/ (read via WebFetch); web search summaries mentioning Storr's review. I did not read the book.

## tufte1990envisioning

Tufte, E. R. (1990). *Envisioning Information*. Cheshire, CT: Graphics Press.

### Core claims

Tufte argues that complexity is not the enemy of clear display, and that confusion and clutter come from design failures rather than from the information. The text I read (a complete scan of the book) says that confusion and clutter are failures of design, not attributes of information, and that the aim is to find design strategies that reveal detail rather than to fault the data for being complicated or to fault viewers for lacking understanding. His chapters: Escaping Flatland, Micro/Macro Readings, Layering and Separation, Small Multiples, Color and Information, and Narratives of Space and Time.

### Specifics

Layering and separation is the chapter most relevant here. Tufte borrows from Josef Albers the idea that two elements placed together create a third visual effect, which he writes as 1 + 1 = 3 or more: incidental white paths, vibration and patterns that are non-information, noise and clutter. He gives remedies. The noise of 1 + 1 = 3 is directly proportional to the light/dark contrast between figure and ground, so on white backgrounds a range of lighter colours minimizes incidental clutter. Grids should be gray and delicate because dark grid lines are chartjunk, and in a look-up table the grid should still be muted relative to the data. Thinning two sides of each block on a map line pair stops the vibration. He ties this to practice: signal enhancement through noise reduction can reduce viewer fatigue and improve accuracy of readings from a computer interface, a flight-control display or a medical instrument. In one cautionary example he shows an index in a manual for flying small aircraft whose entries have no page numbers and vibrate visually, imagined against noise in a plane.

On colour he sets the first principle as "do no harm", lists four uses of colour (to label, to measure, to imitate reality, to enliven) and says more than 20 or 30 colours frequently produce negative returns for encoding abstract information. He recommends a palette from nature, especially lighter blues, yellows and grays, with spot highlights of strong colour. He quotes Imhof's rules of colour composition (Imhof 1982, p. 72, by Tufte's note): pure, bright or very strong colours are unbearable when they stand unrelieved over large adjacent areas but can be used sparingly on or between dull background tones; large background colours should be muted, grayish or neutral so that smaller bright areas stand out. His small multiples chapter argues that for a wide range of problems they are the best design solution because constancy of design puts emphasis on changes in the data, not changes in the data frames.

### Replication and criticism

This is an essay by a recognized authority, not an experiment, and several of its claims are contested. In the clutter chapter Tufte endorses a quotation from Albers saying that words are read as wholes, that capital-only words are the hardest to read, and that the preference for sans-serif in text lacks historical and practical competence. The whole-word-shape account of reading is treated as contested in the legibility lanes of this knowledge base (I did not verify that literature here), so do not use that passage as evidence. Tufte also writes that the fourth Imhof rule is pushed too far toward a general aesthetic theory (his own footnote: Mondrian violates it, and the problem is with the rule). A student commentary found in search says the chapter leaves little room for experimentation, and Stephen Few's critique of Tufte's "chartjunk" concept is mentioned as the more open debate. Treat the "no decoration" stance as a strong default from an expert, not a tested law; I did not review experimental work on embellished charts in this lane.

### Implications for LTF

The most reusable idea is 1 + 1 = 3: every element added to a panel (border, rule, shadow, tint) creates extra visual activity. For gauges and fly-mode panels, subtract before adding: mute grid and tick lines relative to data, give separate layers distinct value or hue so they stack instead of competing, and avoid heavy borders around every card. Use small multiples for comparisons (the same diagram of three flap settings, or a pattern at four stages) with constant design. Colour budget: a handful of categories, a quiet neutral ground, and one or two spot highlights per screen. In the dark theme, the figure-ground contrast rule means large bright fills create more noise, so favour thin, mid-tone strokes.

Confirmed this session: Open Library (work OL2824011W, Graphics Press 1990); full text read from a scanned copy of the book (https://www.stat.cmu.edu/~brian/rm/764-2016/week04/graphs%20and%20tables/tufte,%20edward%20-%20envisioning%20information.pdf), including the layering, small multiples and colour chapters; web search summaries of commentary.

## chandra2013evaluation

Chandra, D. C., & Grayhem, R. (2013). Evaluation of a technique to simplify depictions of visually complex aeronautical procedures for NextGen. *Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 57*(1), 86-90. DOI 10.1177/1541931213571021.

### Core claims

Aeronautical charts for newer performance-based navigation procedures can be visually complex, which may harm usability. The study tests whether splitting a cluttered chart onto several simpler chart images helps pilots find information faster. The abstract (read in the Volpe Center copy) reports a consistent and significant reduction in time to find information from the simplified images, and that response time varied linearly with a simple clutter metric, the sum of visual elements in the depiction, indicating serial visual search. This is a study of chart design by a US Department of Transportation human factors group, and it describes display behaviour only. Nothing here is flight procedure advice.

### Specifics

Forty-seven professional pilots took part. They used high-fidelity current and modified charts of approach and Standard Instrument Departure procedures, shown one at a time on a computer monitor, to find specific pieces of information, with response time and accuracy recorded. Analyses used the logarithm of response times. Pilots were just over 6 seconds faster with modified approach charts and almost 3 seconds faster with modified departure charts (the reported F tests were highly significant, p < 0.001). The benefit was consistent across the airports used. The clutter metric gave every chart element equal weight and added one per element; for example, the current Boise approach image had 142 elements while a modified single-path image had 22. After removing slow outliers (response times over 60 seconds, 1.8 percent of trials), the correlation between element count and response time was 0.87 for approaches and 0.88 for departures, with a regression slope of 66 milliseconds per element and an intercept of 8.5 seconds. Most questions were answered with at least 90 percent accuracy, but two questions about "at or below" altitude constraints had accuracies of 64 and 55 percent, and the authors suggest pilots may have misread them because they violated routine expectations, because they misread the graphic depiction, or because altitudes are inherently complex data.

### Replication and criticism

An earlier conference paper reported the same data in a different analysis (a companion MIT thesis and a Volpe report appear in the same repository; I read only this paper). The authors flag limits themselves: the task was looking for one specific piece of information, whereas charts are also used for planning and orientation; pilots were not asked to locate the correct chart among several; and the study did not examine the drawbacks of splitting (more pages to carry and to find). They also say the finding supports a serial, bottom-up search model, and that they expect it to generalize to other chart types, which is an argument, not a tested result. It is a single experiment with professional pilots and prototype charts made by FAA and Jeppesen staff.

### Implications for LTF

This is the strongest aviation-specific evidence in the lane that visual clutter has a measurable cost per element, roughly linear, even for experts. It supports three design moves. First, on any LTF chart or diagram, remove elements that are not needed for the current question and show other elements on a separate view or on demand, rather than shrinking everything to fit. Second, use element count as a cheap review check: count marks on a widget and set a budget, higher for study mode and lower for fly mode. Third, the failures cluster where information is subtle, not just cluttered: constraint wording and graphics that violate expectation got the worst accuracy. LTF quizzes and briefings should test such cases deliberately and should not depict constraints with symbols that look similar. For fly mode, where glances are short, 66 milliseconds per element means a hundred extra elements add roughly 6.6 seconds to a search. The participants were professional pilots; beginners are novices, so it is reasonable (but untested here) to expect the cost to be at least as large for them.

Confirmed this session: Crossref (DOI 10.1177/1541931213571021; Chandra and Grayhem 2013, Proceedings of the HFES Annual Meeting 57(1), 86-90); full text read at https://rosap.ntl.bts.gov/view/dot/11978/dot_11978_DS1.pdf; web search for abstract and related reports.

## smallman2005naive

Smallman, H. S., & St. John, M. (2005). Naive realism: Misplaced faith in realistic displays. *Ergonomics in Design, 13*(3), 6-13. DOI 10.1177/106480460501300303.

### Core claims

Users and designers prefer highly realistic displays that they believe are intuitive, even when those displays produce worse performance. The authors name this naive realism, which they define as the misplaced faith in people's ability to extract information from realistic displays, and they say it rests on a folk theory that vision works like an inner screen showing an accurate, complete, easy picture of the world. A human factors paper from a programme of US Navy work on tactical displays, it brings evidence from several studies together in a review.

### Specifics

Three misconceptions are named. Perception feels easy but is hard: realistic 3-D perspective views were surprisingly poor for precise relative position and distance judgments, because viewers assume depths compress at the same rate as widths (cross-scaling), which underestimates distance, a pattern the authors report in 71 percent of line drawings by a large sample of psychology students. Perception feels complete but is sparse: change blindness studies show that little of a scene is actually sampled; in their own studies, users rarely detected changes that occurred during interruptions, and change detection was near chance even while monitoring. A tool that listed changes in a table improved response times by as much as 80 percent and reduced misses to zero, whereas an instant replay tool, which kept temporal realism, was less useful than no tool. Perception feels accurate but is distorted: for icons, users rated realistic 3-D ship and aircraft icons as preferable, while abstract military symbols produced consistently better identification. The paper gives three reasons: similar objects have similar realistic icons, realistic icons overload the spatial dimension (a 3-D icon confounds pitch with heading), and perspective views mix symbolic and spatial information.

The remedy has three prongs, each matched to a misconception: simplify and caricature reality, quietly supplement what perception misses, and gently inform users of likely error. The authors say they are not advocating a return to sparse displays, only that designers should not lose the baby with the bathwater, and that caricatured icons maximized both performance and preference in their own symbology work.

### Replication and criticism

It is a position paper with cited experiments rather than a single study. The approach was later developed into a fuller "folk fallacies" theory in a 2011 paper (Topics in Cognitive Science, reported in a search summary), and a related Cartographica paper by Hegarty, Smallman, Stull and Canham (2009, "Naive cartography", confirmed in Crossref) tested how intuitions about display configuration can hurt performance. The authors note that realism is not always wrong: simulator fidelity can matter when the detailed experience is part of the task, such as smoke and noise for firefighters. Evidence comes largely from military display tasks with trained participants, so transfer to learners reading a cockpit diagram is an inference.

### Implications for LTF

This directly shapes how LTF treats the Cessna cockpit and the simulator's own realism. A photoreal cockpit image or a 3-D rendered panel will be loved by users and may teach less than a caricatured, simplified panel that highlights the instrument being discussed. Use simplified, caricatured instrument diagrams with consistent shapes and colours for learning, and use real sim screenshots for orientation, to show learners where to look in the sim. Do not trust early user feedback ("this looks great") as a measure of learning; pair it with a task. The change table result suggests an explicit list of what has changed (a checklist state, a configuration summary) beats a realistic replay for monitoring. For an unobtrusive supplement, use quiet cues rather than animation. Animation and 3-D effects need a task-based justification, since the authors cite studies showing animation often adds little over static snapshots.

Confirmed this session: Crossref (DOI 10.1177/106480460501300303, Ergonomics in Design 13(3), 6-13, 2005; also 10.3138/carto.44.3.171 for the 2009 Cartographica paper); full text read in an unofficial PDF copy at https://tarheels.live/topics/wp-content/uploads/sites/2744/2023/04/naive-realism.pdf; web search for the 2011 follow-up.

## white2003editing

White, J. V. (2003). *Editing by Design: For Designers, Art Directors, and Editors* (3rd ed.). Allworth Press. First edition 1974 (R. R. Bowker), as *Editing by Design: Word-and-Picture Communication for Editors and Designers*.

### Core claims

White, a magazine art director and consultant, argues that editors and designers share one task, revealing the core of each message plainly and compellingly, and should work together on it. Wikipedia's summary says the 1974 book first presented his thesis that design is a clarifying tool, not a decorative one. A student reading of the book (a university course page) says it focuses on the interdependence of the editor and designer roles. Publishers Weekly is quoted on retail pages as calling his books the best working how-to volumes on graphics in publications; I treat that as publicity.

### Specifics

Editions confirmed by Wikipedia and Open Library: first edition 1974 (Bowker), second 1982, third 2003 (Allworth Press, 256 pages in retail listings), fourth 2020 co-authored with Alex W. White. The course page reports a twenty-seven chapter book that pairs product making (design) with story telling (writing supported by design), moving from general principles of multi-page media to specifics such as type and colour. It names "The Multi-Page Medium" as chapter 1, which treats a publication as a physical object, discusses how readers hold a magazine and how pages fold, and which areas of a spread are most and least valuable. Columns and grids and margins get extensive treatment (the reader found them repetitive). The author frames suggestions as options rather than rules because editorial decisions are subjective. White's career, per Wikipedia: associate art director at Architectural Forum (1951 to 1956), art director at House & Home (1956 to 1964), then consultant, writer and teacher, with later books including The Grid Book, Great Pages and Color for the Electronic Age. Fourth edition listings say it covers columns and grids for organization and consistency, teamwork, and originality and inducement for the reader. I could not open the book's text this session, so I cannot give his specific rules beyond these descriptions.

### Replication and criticism

It is a craft book, not research, and its stronger claims (that visual structure makes content clearer) are consistent with but not proven by the reading research in other lanes. It has stayed in print since 1974, which is its evidence of use. The student reading criticizes repetition among chapters. Because it concerns print publications, the advice about spreads, folds and page position does not transfer literally to scrolling pages; what transfers is the stance that one person, or one process, owns both the words and the layout.

### Implications for LTF

LTF's lessons are editorial products, not just screens. Writers and designers should share a brief per lesson: what is the one thing a learner must get from this page, and what will they see first. White's editor-designer partnership argues against separate "content" and "design" tickets: a diagram should be specified by the writer who knows what must be understood and drawn by the designer who knows how to make it readable. His "which areas of a spread are valuable" idea is the print ancestor of entry points and above-the-fold placement; check with the attention and eye-tracking lanes before relying on it. His framing of design as clarification gives a review question for any decorative proposal: what does this clarify? If the answer is nothing, it is ornament and should pass the Jones-style test of whether it can be removed without loss.

Confirmed this session: Open Library (works OL4230902W, OL21896097W, OL25678516W); Wikipedia on Jan V. White (editions, thesis, career); a university course page https://sites.gsu.edu/awalsh6/?p=95 (chapter outline, read via WebFetch); web search results quoting retail and publisher descriptions. I did not read the book.
