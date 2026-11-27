# Lane 32: Cartography, ornament and editorial design

## imhof2007cartographic

Imhof, E. (2007). *Cartographic Relief Presentation* (H. J. Steward, Ed.). Redlands, CA: ESRI Press. Original German 1965; English translation de Gruyter 1982.

### Core claims

Imhof, a professor of cartography at the Swiss Federal Institute of Technology in Zurich from 1925 to 1965, argues that a map must be designed, not merely drafted: the cartographer chooses what to show, how strongly, and in what visual register, so that a very large amount of terrain data reads as something simple and beautiful. A reviewer of the 2007 edition quotes the book's page 359 as saying that only simplicity gives a lasting impression (Youngblood review, Cartographic Perspectives 65, 2010). The book's mission, the same reviewer says, was to improve the precision and readability of maps. It treats the problem of showing a three-dimensional surface on a flat sheet, and it separates the question "what is a map" from "what is a picture", which is the root of its design discipline.

A second claim is that colour, line, tone and lettering have to be planned together. Chapter 14, "Interplay of Elements", sets out what the reviewer calls his now classic techniques for keeping layered elements, such as contour lines and text, clear to interpret.

### Specifics

Structure (from the Youngblood review): sixteen chapters. Chapter 1 is a fifteen-page history of relief depiction. Chapter 2 covers topographic foundations, chapter 3 the study of topography (landscape drawing, aerial photographs, field work). Chapter 4 is a theory of colour that reviews the chemical, physiological and psychological theories and ends with specific advice on colour combinations. Chapter 5 states the general problem of relief presentation. Chapter 6 covers spot heights and soundings and includes exacting tables, for example minimum type sizes for spot-height values by map scale. Chapter 7 is skeleton lines, chapter 8 contour lines (just under forty pages, with tables and illustrations for choosing every detail), chapter 9 shading and shadows (the longest chapter, ending with oblique hill shading by computer), chapter 10 hachures, chapter 11 rock drawing, chapter 12 topographic symbolization, chapter 13 area colour tinting, chapter 14 the interplay of elements, chapter 15 reproduction and chapter 16 future developments.

Principles reported in secondary accounts: Ordnance Survey's cartography guide (docs.os.uk, guide to cartography, colour) says Imhof used strong, deeply saturated colours only in small areas of extremes and avoided placing them next to each other across large areas, and that he stressed base colours, which give way to smaller brighter areas. It follows that quiet greys and beiges work as backgrounds while saturated hues pull the eye first. A paper on hypsometric tints, found in the same search, reports that Imhof (1982) held that contrasting colour schemes break up the continuity of terrain and make combination with other map features difficult (I did not open that paper, so treat this as a pointer). Shading conventions linked to Imhof in a web search result include illumination from the upper left to avoid relief inversion, and grey tones for flat areas.

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

A second claim is that graphics have three functions: recording information, communicating it as a simplified message, and processing it (using the drawing to find structure by manipulating it). He also holds that the efficient graphic is one where the whole image can be read in a single glance.

### Specifics

The contents list published by Esri shows the structure. Part one, "Semiology of the graphic sign-system", has three sections: analysis of the information; the properties of the graphic system (the plane, with its two dimensions, and the retinal variables); and the rules of the graphic system, including "image theory" (stages in the reading process, definition and construction of an image, limits of an image) and the three functions. A closing section on "general rules of legibility" covers graphic density, angular legibility and retinal legibility. Part two classifies problems into diagrams, networks and maps, with the reorderable matrix as a method for processing data.

The variables, as summarized by Roth (2015): Bertin originally identified seven. Two are the planar dimensions (location) and the rest are the retinal variables: size, shape, orientation, color hue, color value (lightness) and texture. The "retinal" label reflects that they are seen preattentively, at the level of the eye. Bertin set out levels of organization. Associative variables let all marks sharing a value be perceived as a group; he took location, shape, orientation, hue and texture to be associative, and size and value to be dissociative (one variation dominates). Selective variables let the eye isolate one category and ignore the others; Roth reports he held shape to be the only variable that is not selective. Ordered variables are read as more or less; he took location, size, value and texture to be ordered. Quantitative perception, the ability to estimate how much more, he restricted to location and size. A Stony Brook course slide deck on Bertin records the same split between associative and selective levels, and notes that his theory was based more on intuition than on vision research but was later found fairly accurate by M. Green (the slide's claim, which I did not trace further).

### Replication and criticism

Bertin's rules are a theory derived from craft analysis, not experiments. Roth notes the taxonomy of visual variables varies by scholar (a review by Tyner is cited) and was extended: Morrison (1974) added two variables (the list includes arrangement and saturation), and MacEachren (1995) added crispness, resolution and transparency and argued that saturation, crispness, resolution and transparency are also strongly ordered, with texture only marginally ordered. MacEachren's "syntactics" then maps variable to data type: unordered variables (hue, orientation, shape) suit nominal data, ordered ones suit ordinal data, and only location and size suit numbers. Later perception work (see MacEachren 1995 in this lane) supports the broad idea and adjusts the details. The semiotic framing also invites critique of power relations hidden in design choices, which Roth mentions.

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
