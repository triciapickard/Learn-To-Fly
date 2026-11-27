# Lane 23: Design systems and UI consistency

Research notes for the Learn to Fly Design Knowledge Base. Each section covers one source in `sources.json`.

## alexander1977pattern

Alexander, C., Ishikawa, S., Silverstein, M., with Jacobson, M., Fiksdahl-King, I., and Angel, S. (1977). *A Pattern Language: Towns, Buildings, Construction*. New York: Oxford University Press.

### Core claims

Alexander and his colleagues at the Center for Environmental Structure in Berkeley argue that good places are not made by inventing forms from scratch but by combining proven solutions to recurring problems, and that these solutions can be written down in a shared, learnable vocabulary. The book offers one such vocabulary of 253 patterns that, in the introduction's words as relayed by a fetched summary, "together form a language" (https://en.wikipedia.org/wiki/A_Pattern_Language). The deeper claim, developed in the companion volume *The Timeless Way of Building*, is that patterns capture what Alexander calls the quality without a name, a sense of wholeness or aliveness in a space.

### Specifics

The book is volume 2 of the Center for Environmental Structure series, between *The Timeless Way of Building* (volume 1) and *The Oregon Experiment* (volume 3). The 253 patterns are arranged in three parts, Towns, Buildings and Construction, running from regional scale down to building details. This ordering is the structural idea that matters most for design systems: large patterns constrain the smaller ones inside them, and smaller ones complete the larger ones.

Each pattern follows what later writers call the Alexandrian form (https://en.wikipedia.org/wiki/Pattern_language): a short name; a rating of up to two stars for how confident the authors are that it is a real invariant; a sensitizing picture; a context; a problem statement; a longer discussion; a solution statement; a sketch; and references to other patterns. Problem and solution are in bold, and the solution begins "Therefore:". Each pattern lists the smaller patterns that help complete it, and those echo the link in their own context, so the links form a hierarchic network that Alexander argued was grammar-like, hence "language" rather than catalog.

The authors present the patterns as hypotheses open to revision, with the asterisks encoding confidence, and invite readers to write their own. A planning-press critique argues that this openness never materialized and the patterns stayed fixed in the printed volume (https://planetizen.com/features/109114-it-time-revive-pattern-language).

### Replication and criticism

The evidence base is craft authority and case study, not experiment. Alexander reports applications in later books, but Dearden and Finlay's review (see the dearden2006pattern section) notes that his method for deciding whether a space has the quality is personal observation plus a claim that observers agree, a claim he does not quantify. Dovey (1990), cited there, reads the work as implicitly phenomenological: patterns gain power from connecting to lived experience, not from being proven empirically.

Software took the idea up (the first Pattern Languages of Programming conference was in August 1994, per Dearden and Finlay). But a summary of pattern-language scholarship calls Gamma et al.'s *Design Patterns* a pattern catalogue rather than a language, because it makes little use of linking between patterns (https://en.wikipedia.org/wiki/Pattern_language). That distinction matters: most UI "pattern libraries" are catalogues, and the generative, linked structure that made Alexander's version a language is usually missing.

### Implications for LTF

1. Use the pattern form for LTF's recurring problems. Lesson pages, quiz items, challenge briefings and checklists each recur dozens of times. Writing each as name, context, problem, solution and links gives writers and Claude agents a shared vocabulary.
2. Respect scale ordering. Alexander's towns-to-construction ordering maps onto app shell, page template, component and token. A page-level rule (one primary action per screen next to the sim) should constrain the component choices below it.
3. Mark confidence. Borrow the asterisk idea: label each design rule as established by experiment, standard or craft opinion, and revisit as learner data arrives.
4. Beware catalogue-only thinking. A component list is not a language. Record which patterns contain which, so that changing a widget frame updates every instrument that uses it.
5. Do not treat the quality without a name as a testable criterion. It reminds designers to judge screens by how they feel to a beginner, but the evidence is observation and opinion, so LTF should still test with real learners.

Confirmed this session: Open Library work OL3923600W and edition OL5059163M (Oxford University Press, 1977, ISBN 0195019199) via openlibrary.org search; content from fetched summaries of https://en.wikipedia.org/wiki/A_Pattern_Language and https://en.wikipedia.org/wiki/Pattern_language; critique from https://planetizen.com/features/109114-it-time-revive-pattern-language and the full text of Dearden and Finlay (https://eprints.leedsbeckett.ac.uk/id/eprint/953/). I did not read the book itself.

## dearden2006pattern

Dearden, A., and Finlay, J. (2006). Pattern languages in HCI: A critical review. *Human-Computer Interaction*, 21(1), 49-102. https://doi.org/10.1207/s15327051hci2101_3

### Core claims

The review asks what is known about patterns and pattern languages in human-computer interaction and finds a field rich in published patterns but thin on evidence. It is organized around four questions: what is a pattern, what is a pattern language, how are patterns used, and how are values reflected in pattern-based design (abstract, Leeds Beckett repository copy). Its main conclusion is that HCI discussion has been "dominated by form and examples", with little concrete evaluation of whether pattern languages help the design process or improve the end product, and little examination of the values built into them.

### Specifics

Working definition: a pattern is a structured description of an invariant solution to a recurrent problem within a context, and a pattern language is a collection of such patterns organized in a meaningful way. The authors separate three classes of software-related pattern. General software design patterns state problems in terms of code structure (most of Gamma et al.). Interface software patterns state interaction problems but give code solutions. Interaction design patterns state problems in terms of human interaction and give perceivable behavior as the solution; their example is Tidwell's "go back to a safe place", a clearly identifiable way to return a system to a known state such as a home page. The review concentrates on the third class.

On history, it traces Alexander's move from the systematic decomposition of *Notes on the Synthesis of Form* (1964) to the pattern-language books of the 1970s and 80s, then the software uptake: Beck and Cunningham (1987), the first PLoP conference in August 1994, and Gamma et al. (1995). It records that interaction design patterns faded from PLoP while patterns workshops became regular events at CHI.

On what a pattern is, it contrasts two readings of Alexander: patterns as recurrent phenomena to be observed, and patterns as artifacts that explicitly represent design guidance. It also distinguishes design patterns from "activity patterns" that merely describe existing practice, and mentions antipatterns as poorly fitting Alexander's good-practice definition. On pattern languages, it reports Fincher and Windsor's four requirements for an organizing principle: a taxonomy for finding patterns, a way to find related patterns, a way to view the problem from different standpoints, and generativity. Van Welie's layered scheme (posture, experience, task, activity) is criticized because it is unclear how the layers determine relationships between patterns.

### Replication and criticism

This is a literature review, so the evidence is the quality of its survey. Its strongest finding is an absence: in software engineering the authors found no published observational or empirical studies of developers using patterns in practice, and in HCI relatively little written about practical use. Their research agenda has four parts: enrich pattern languages (consolidate duplicates, build generative frameworks, cover several levels of scale, favor timeless patterns over platform-specific ones); understand pattern development (largely ad hoc and individual, it should become a community effort with languages owned by stakeholders and open to revision); test patterns in use through empirical and observational studies; and ask what the HCI equivalent of the quality without a name might be. The paper dates from 2006, so later empirical work (including design-system adoption studies) may have partly addressed these gaps; I did not survey that here.

### Implications for LTF

1. A pattern library earns trust only when its patterns are validated. LTF should record, for each interface pattern it adopts (for example a step-by-step briefing card), where the evidence comes from and whether LTF has tested it with learners.
2. Prefer interaction patterns defined by human behavior, such as "go back to a safe place", for fly mode: a learner who loses their place while the sim is running needs one obvious way home.
3. Use the four organizing requirements as a check on the LTF knowledge base itself: can an agent find a pattern, find its neighbors, see it from another standpoint, and extend it?
4. Avoid platform-specific patterns where a timeless one exists. A rule about glanceable text size ages better than a rule about one component.
5. Plan for evidence. Because pattern-benefit evidence is scarce, LTF should log which patterns recur in its own usability sessions and keep antipattern notes (for example confusing quiz feedback) alongside the good patterns.

Confirmed this session: Crossref query for the title and authors returned DOI 10.1207/s15327051hci2101_3 (Human-Computer Interaction 21(1) 49-102, 2006); full text read from the accepted manuscript at https://eprints.leedsbeckett.ac.uk/id/eprint/953/1/Patterns_In_HCI.pdf (abstract, sections 1 to 8). Page numbers and dates above come from that manuscript.

## gamma1994design

Gamma, E., Helm, R., Johnson, R., and Vlissides, J. (1994). *Design Patterns: Elements of Reusable Object-Oriented Software*. Reading, MA: Addison-Wesley. (Copyright dated 1995 in some printings.)

### Core claims

The authors, known as the Gang of Four, argue that experienced object-oriented designers reuse solutions they have seen work, and that these solutions can be catalogued so novices can learn them. The book borrows the idea of a pattern from Alexander and applies it to software: each pattern names a recurring design problem, describes a core solution, and states its consequences. The catalog is meant to give teams a shared vocabulary, so that "use an Observer here" conveys a whole design decision in a few words. It is a catalog of 23 patterns, not a language in Alexander's sense with dense links between patterns.

### Specifics

Facts confirmed from a fetched reference summary (https://en.wikipedia.org/wiki/Design_Patterns): published by Addison-Wesley on 21 October 1994 (copyright 1995), 395 pages, ISBN 0-201-63361-2, with a foreword by Grady Booch. Two introductory chapters cover object-oriented capabilities and pitfalls; the rest describe 23 patterns in three groups. Creational (five): Abstract Factory, Builder, Factory Method, Prototype, Singleton. Structural (seven): Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy. Behavioral (eleven): Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor. Examples are in C++ and Smalltalk. The project began at a 1990 OOPSLA birds-of-a-feather session.

Two design principles are stated as slogans: program to an interface, not an implementation, and favor object composition over class inheritance. The authors call inheritance white-box reuse and composition black-box reuse.

Every pattern is described with a fixed template. Course materials that reproduce it list these headings: intent, also known as, motivation, applicability, structure, participants, collaborations, consequences, implementation, sample code, known uses, and related patterns (for example https://people.cs.pitt.edu/~chang/231/8pattern/PATTERN01/p8.html). Intent states the goal; motivation gives a concrete scenario; consequences state trade-offs. Known uses lists real systems where the pattern appears.

### Replication and criticism

This is expert opinion and craft codification, not experiment. The influence is large: the fetched summary reports more than 500,000 copies sold and an ACM SIGPLAN Programming Languages Achievement Award in 2005. Criticism is also substantial. Paul Graham wrote that seeing patterns in his programs was a sign of trouble, meaning patterns can be workarounds for missing language features. Peter Norvig showed that 16 of the 23 patterns are simplified or eliminated by features in Lisp or Dylan, and Hannemann and Kiczales used AspectJ to remove code-level dependencies from 17 of the 23 (all per the same summary). In a 2009 interview Gamma said the authors would recategorize some patterns and add others, and that he wanted to remove Singleton but the authors did not agree. Dearden and Finlay (see the dearden2006pattern section) add that no empirical studies of developers using the patterns in practice had been published by 2006.

A second line of criticism concerns misuse: the template makes it easy to apply a named pattern where a simpler construct would do. The book itself does not claim that more patterns mean better design.

### Implications for LTF

1. Adopt the template idea, not the object-oriented content. For each reusable LTF component (instrument widget, checklist, quiz card), record intent, motivation, applicability, consequences and known uses in the knowledge base. Consequences are the part most often skipped and the most useful for later changes.
2. Give things names that carry decisions. Names such as "briefing card", "fly-mode strip" and "gauge frame" let content writers and reviewers talk about structure without opening code.
3. Prefer composition over inheritance in the React widget layer: small components composed into a gauge or a checklist row, with a narrow props interface, match the "program to an interface" principle.
4. Resist premature patterns. Norvig's and Graham's critiques suggest asking whether the framework (React, Tailwind, TanStack Query) already provides the mechanism before writing a new abstraction.
5. Keep a known-uses rule: promote something to a shared component only after it has appeared in several lessons, which prevents a design system filled with one-off components.

Confirmed this session: Open Library search by ISBN 0201633612 returned work OL6030812W (Design Patterns, Gamma, Helm, Johnson, Vlissides, first published 1995 in that record); facts and criticisms from the fetched summary at https://en.wikipedia.org/wiki/Design_Patterns; template headings from course pages found by web search (https://people.cs.pitt.edu/~chang/231/8pattern/PATTERN01/p8.html). I did not read the book itself.

## frost2016atomic

Frost, B. (2016). *Atomic Design*. Brad Frost. Free online edition at https://atomicdesign.bradfrost.com/.

### Core claims

Frost argues that the page is the wrong unit for designing and building for the web, and that teams should instead design systems of components and then assemble pages from them. A site with tens of thousands of pages may rest on a handful of content types and layouts, so effort is driven by components, not page counts (chapter 1, https://atomicdesign.bradfrost.com/chapter-1/). He presents a style guide or pattern library as the working environment for that approach, and treats consistency, a shared vocabulary, speed after the initial investment, and the ability to survive redesigns as its payoffs.

### Specifics

The central model, in chapter 2 (https://atomicdesign.bradfrost.com/chapter-2/), has five stages. Atoms are basic HTML elements such as labels, inputs and buttons that cannot be broken down without ceasing to be functional. Molecules are small groups of atoms that work as a unit, such as a search form made of a label, an input and a button. Organisms are relatively complex sections built from molecules, atoms or other organisms, such as a header or a product grid. Templates are page-level layouts that show content structure. Pages are templates filled with real, representative content, which lets a team test whether the system holds up under real text and images. Frost draws the chemistry analogy from school lessons and later cautions that pushing it too far can confuse stakeholders. He says atoms in a pattern library show "all your base styles at a glance".

The book has five chapters: Designing Systems, Atomic Design Methodology, Tools of the Trade, The Atomic Workflow, and Maintaining Design Systems (table of contents page). Chapter 1 lists the benefits of style guides: consistency and cohesion, shared vocabulary, education, empathetic workflow, isolated testing, speed and longevity. It also lists challenges: convincing short-term organizations to invest, treating the guide as a side project, and libraries that lack context. It criticizes large redesign cycles every three to eight years and cites a health-insurance payment flow with four distinct interface designs within five clicks.

Chapter 5 covers governance (https://atomicdesign.bradfrost.com/chapter-5/). Add patterns only when another team needs the same solution; deprecate gradually; schedule regular reviews; separate makers from users; name patterns by structure rather than context ("card" over "product card"); keep documentation current; publish change logs; serve CSS and JavaScript from versioned URLs. To sell a system: make a thing, show it is useful, make it official, and treat it as a product, not a project. Frost cites Alex Schleifer's line that neglect is the biggest existential threat to any system.

### Replication and criticism

This is practitioner craft knowledge, backed by case examples, not experiment. The most common criticism is about the taxonomy: practitioners report that boundaries between atoms, molecules and organisms are blurry and cause friction in teams. Frost's reply, quoted by a vendor blog, is that the specific labels were never the point and are useful as a mental model (https://www.qt.io/blog/atomic-design-systems-why-the-labels-dont-matter). He also defends the hierarchical naming, saying that "components" and "modules" lack any sense of hierarchy (https://bradfrost.com/blog/link/where-atomic-design-fell-short/). The strongest claims, such as speed gains after the initial investment, are cited from examples (Mailchimp is named) and have not, to my knowledge, been tested in controlled studies; I did not find one this session.

### Implications for LTF

1. Use the model as vocabulary, not as folder law. LTF's `src/` structure can follow tokens, base elements (button, input), compound pieces (answer option with feedback), sections (briefing header, checklist panel), page templates, and real lessons, without arguing over molecule versus organism.
2. The page-with-real-content stage matters for LTF: test templates with real lesson text, long aircraft names, and checklist items of very different lengths, in light and dark themes.
3. Name by structure. "Card" and "callout" will serve better than "airspeed card" if the same shape recurs.
4. Take chapter 5's governance rules seriously: add a shared component only when a second lesson needs it, deprecate rather than delete, and keep a changelog (the repository already keeps a `CHANGELOG.md` line rule for user-facing changes).
5. Frame the design system as a product, with an owner and an update routine, or it will decay as lessons accumulate.

Confirmed this session: Open Library search for "atomic design brad frost" returned work OL22297494W (Brad Frost, 2016, ISBN 9780998296609); chapters 1, 2 and 5 and the table of contents read at atomicdesign.bradfrost.com; criticism from web search results and the two Frost-linked pages above (fetched through summarizing tools, so wording is paraphrased unless in quotes).
