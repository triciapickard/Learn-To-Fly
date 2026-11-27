# Lane 32: Cartography, ornament and editorial design

## imhof2007cartographic

Imhof, E. (2007). *Cartographic Relief Presentation* (H. J. Steward, Ed.). Redlands, CA: ESRI Press. Original German 1965; English translation de Gruyter 1982.

### Core claims

Imhof, a professor of cartography at the Swiss Federal Institute of Technology in Zurich from 1925 to 1965, argues that a map must be designed, not merely drafted: the cartographer chooses what to show, how strongly, and in what visual register, so that a very large amount of terrain data reads as something simple and beautiful. A reviewer of the 2007 edition quotes the book's page 359 as saying that only simplicity gives a lasting impression (Youngblood review, Cartographic Perspectives 65, 2010). The same reviewer says the book's mission was to improve the precision and readability of maps, and that chapter 5 separates a map from a picture.

A second claim is that colour, line, tone and lettering have to be planned together. Chapter 14, "Interplay of Elements", sets out what the reviewer calls his now classic techniques for keeping layered elements, such as contour lines and text, clear to interpret.

### Specifics

Structure (from the Youngblood review): sixteen chapters. Chapter 1 is a fifteen-page history of relief depiction. Chapter 2 covers topographic foundations, chapter 3 the study of topography (landscape drawing, aerial photographs, field work). Chapter 4 is a theory of colour that reviews the chemical, physiological and psychological theories and ends with specific advice on colour combinations. Chapter 5 states the general problem of relief presentation. Chapter 6 covers spot heights and soundings and includes exacting tables, for example minimum type sizes for spot-height values by map scale. Chapters 7 to 13 cover skeleton lines, contour lines (just under forty pages), shading and shadows (the longest chapter), hachures, rock drawing, topographic symbolization and area colour tinting; chapter 14 is the interplay of elements, 15 reproduction and 16 future developments.

Principles reported in secondary accounts: Ordnance Survey's cartography guide (docs.os.uk, guide to cartography, colour) says Imhof used strong, deeply saturated colours only in small areas of extremes and avoided placing them next to each other across large areas, and that he stressed base colours, which give way to smaller brighter areas. It follows that quiet greys and beiges work as backgrounds while saturated hues pull the eye first. A paper on hypsometric tints, found in the same search, reports that Imhof (1982) held that contrasting colour schemes break up the continuity of terrain and make combination with other map features difficult (I did not open that paper, so treat this as a pointer).

### Replication and criticism

This is a craft treatise by an acknowledged master, not an experiment. Its rules rest on Imhof's trained judgment and the Swiss national map tradition, and the plates feature the Alps, so some advice is tied to mountain terrain and to print reproduction. The reviewer notes that chapters 15 and 16 (reproduction and future developments) are of least practical use today. Later empirical cartographers (see Robinson, MacEachren, Brewer in this lane) tested parts of the colour and symbol advice with readers and kept the broad principles: restraint with saturation, tonal separation of layers, and simplicity. His rule on relief lighting from the upper left is widely used, but it is a convention about perceiving relief, not a rule for every UI.

### Implications for LTF

Fly mode and chart widgets should follow Imhof's tonal hierarchy: terrain or background in low-saturation neutrals, with saturated colour held for the few things the learner must act on (the active waypoint, the airspace boundary being discussed, a warning). Where a diagram layers text over lines (a traffic pattern with leg labels, say), give the text a clear plane of its own rather than letting lines run through it; Imhof's interplay-of-elements chapter is the craft source. His minimum-size tables are a reminder that label size should be set by scale and viewing distance, which matters for a screen read at arm's length beside a simulator. Light and dark themes should each have their own base tone ladder, not an inverted copy. Do not copy specific print values from the book into LTF tokens; use the principle and check contrast with the colour lanes.

Confirmed this session: Open Library search (works OL17999406W, ESRI Press 2007, ISBN 9781589480261; OL16378666W de Gruyter 1982); Youngblood review in Cartographic Perspectives 65 (2010), read in full from https://cartographicperspectives.org/index.php/journal/article/download/cp65-youngblood/pdf/976; Ordnance Survey colour guide https://docs.os.uk/more-than-maps/geographic-data-visualisation/guide-to-cartography/colour; web search summaries on the editions. I did not read the book itself.

## robinson1952look

Robinson, A. H. (1952). *The Look of Maps: An Examination of Cartographic Design*. Madison: University of Wisconsin Press. Reissued by Esri Press, 2010.

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

Bertin, J. (2010). *Semiology of Graphics: Diagrams, Networks, Maps* (W. J. Berg, Trans.). Redlands, CA: Esri Press. French original 1967 (Gauthier-Villars); first English edition University of Wisconsin Press, 1983.

### Core claims

Bertin proposes a formal grammar for graphics. Any set of information, he argues, consists of an invariant (the common ground that every data point shares) and a number of components (the things that vary). A graphic works only if each component is given a distinct visual variable, so the designer must first count the components and decide how many dimensions the drawing has to carry. In the sample chapter published by Esri, a plain price-over-time series has two components and uses the two dimensions of the plane; comparing two stocks adds a third component and so a third variable (size variation in that example), and comparing two stocks in two cities adds a fourth (texture). The book is the root of the "visual variables" vocabulary now standard in cartography and information visualization (Roth 2015, "Visual Variables", read in full).

A second claim is that graphics have three functions: recording information, communicating it as a simplified message, and processing it (using the drawing to find structure by manipulating it).

### Specifics

The contents list published by Esri shows the structure. Part one, "Semiology of the graphic sign-system", has three sections: analysis of the information; the properties of the graphic system (the plane, with its two dimensions, and the retinal variables); and the rules of the graphic system, including "image theory" (stages in the reading process, definition and construction of an image, limits of an image) and the three functions. A closing section on "general rules of legibility" covers graphic density, angular legibility and retinal legibility. Part two classifies problems into diagrams, networks and maps.

The variables, as summarized by Roth (2015): Bertin originally identified seven. Two are the planar dimensions (location) and the rest are the retinal variables: size, shape, orientation, color hue, color value (lightness) and texture. The "retinal" label reflects that they are seen preattentively, at the level of the eye. Bertin set out levels of organization. Associative variables let all marks sharing a value be perceived as a group; he took location, shape, orientation, hue and texture to be associative, and size and value to be dissociative (one variation dominates). Selective variables let the eye isolate one category and ignore the others; Roth reports he held shape to be the only variable that is not selective. Ordered variables are read as more or less; he took location, size, value and texture to be ordered. Quantitative perception, the ability to estimate how much more, he restricted to location and size. A Stony Brook course slide deck says his theory rested more on intuition than on vision research, though M. Green later found it quite accurate (the slide's claim, not traced further).

### Replication and criticism

Bertin's rules are a theory derived from craft analysis, not experiments. Roth notes the taxonomy of visual variables varies by scholar (a review by Tyner is cited) and was extended: Morrison (1974) added two variables (the list includes arrangement and saturation), and MacEachren (1995) added crispness, resolution and transparency and argued that saturation, crispness, resolution and transparency are also strongly ordered, with texture only marginally ordered. MacEachren's "syntactics" then maps variable to data type: unordered variables (hue, orientation, shape) suit nominal data, ordered ones suit ordinal data, and only location and size suit numbers. Later perception work (see MacEachren 1995 in this lane) supports the broad idea and adjusts the details.

### Implications for LTF

Bertin gives LTF a checklist for any instrument diagram or chart. First, count the components of the information the learner must read, then assign each its own variable and no more than the eye can separate. Use position and length for quantities the learner must compare precisely (airspeed against a limit); use hue only for categories (system on, off, caution) because hue is not ordered. Do not encode two things in one variable. Keep size and value for importance, since they dominate the image and suppress other variables. His note that shape is not selective argues against asking learners to find a particular glyph among many; use hue or value to make a target pop. For dashboards, the three functions are a useful split: progress screens record, lesson diagrams communicate, and a drag-to-reorder or compare widget processes. Test whether each image can be read at a glance, since fly mode is read in glances beside the simulator.

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
