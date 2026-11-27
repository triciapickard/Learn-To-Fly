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

## kholmatova2017design

Kholmatova, A. (2017). *Design Systems*. Smashing Media AG. (eBook record in Open Library titled "Design Systems (eBook)"; 288-page printed edition.)

### Core claims

Kholmatova, a former senior product designer at FutureLearn, argues that the useful part of a design system is not the component library but the shared design language behind it, and that "not all design systems are equally effective" (publisher description, https://www.smashingmagazine.com/design-systems-book/). The book is explicitly about how teams produce consistent visual and interaction output, not about tooling: it contains no code samples. It draws on 18 months of research and interviews, with case studies from Airbnb, Atlassian, Eurostar, TED and Sipgate, and aims at small and medium product teams (visual and interaction designers, UX practitioners, front-end developers).

### Specifics

The structure is the clearest guide to its method. Part 1, Foundations, covers design systems, design principles, functional patterns, perceptual patterns, and shared language. Part 2, Process, covers the parameters of your system, planning and practicalities, systemizing an interface (one chapter on functional patterns, one on perceptual patterns), and pattern libraries: what, why and how.

Two named categories organize the interface. Functional patterns are reusable interface parts with a concrete job, such as buttons and text fields. Perceptual patterns are descriptive visual qualities such as iconography, color and typography, the layer that gives a product its recognizable feel. Shared language is what results when patterns interconnect and are named consistently so the whole team uses the same words. Principles guide how patterns are created, captured, shared and used, and a pattern library is one practice among several. A bookstore excerpt (found by search, not read in full) describes systems along three dimensions: rules strict or loose, parts modular or integrated, organization centralized or distributed. I could not confirm that framing from the book itself, so treat it as a lead.

The publisher page quotes reviewers: Ethan Marcotte says the book outlines a process "not just for creating a design system, but sustaining it over time", and Amy Thibodeau of Shopify's Polaris says building a design system is as much about forming human connections as about technical solutions. These are endorsements, not findings.

### Replication and criticism

This is practitioner interview research, not controlled study. The evidence is a set of case studies chosen by the author, so it is vulnerable to survivorship bias: the companies interviewed had systems worth writing about. I found no independent critical review this session, only publisher and retailer pages, so I cannot say how the book has been challenged. A known limit on the approach is its deliberate narrowness: with no code and no tooling advice, it leaves open how a language becomes components and tokens, which is where Frost (see the frost2016atomic section) and the W3C token work pick up. Readers should also note that "design language" is a looser concept than a tested construct; no study cited here measures whether a stronger shared language improves product quality.

### Implications for LTF

1. Name the two layers separately. LTF should record functional patterns (answer option, checklist row, gauge frame) apart from perceptual patterns (the palette, type scale, spacing, icon style, and the calm tone for beginners). Changes to one layer then do not accidentally rewrite the other.
2. Treat shared language as a deliverable. A short glossary of LTF UI terms (briefing, challenge, fly mode, callout types such as verify) would stop writers and engineers from inventing parallel names.
3. Write design principles before components. A small set of LTF principles, such as "readable at arm's length next to a sim" and "never rely on color alone", gives a way to settle disputes.
4. Plan the process, not just the library. A small team should decide who owns the system, how patterns are proposed, and how often they are audited, since the book frames sustaining a system as the hard part.
5. Run an interface audit before systemizing: list every distinct button, callout and card on existing lesson pages, count the variants, and merge them. The book covers how to audit an interface, though I could not confirm where in the process it places that step.

Confirmed this session: Open Library search "design systems kholmatova" returned work OL38056351W (Design Systems (eBook), Alla Kholmatova, 2017, Smashing Media AG, ISBN 9783945749586); publisher page read at https://www.smashingmagazine.com/design-systems-book/ (description, contents, 288 pages, case studies, review quotes). I did not read the book.

## suarez2017design

Suarez, M., Anne, J., Sylor-Miller, K., Mounter, D., and Stanfield, R. (2017). *Design Systems Handbook*. Edited by N. Curtis. DesignBetter.Co (InVision).

### Core claims

The handbook argues that design has failed to scale because it is still bespoke, tailor-made for individual problems, and that the remedy is the one software engineering adopted decades ago: reusable components guided by clear standards. Its definition: a design system is "a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications". The opening chapter (Suarez) compares today's design situation to the software crisis of the 1960s and to Douglas McIlroy's 1968 proposal of component-based development, and says a team facing growth can hire more people, design faster, or create solutions that work for multiple problems, with only the last scaling.

### Specifics

Authorship and form were confirmed from search results: five practitioners, with Nathan Curtis as editor, drawn from Salesforce, Etsy, GitHub, InVision and Airbnb, in InVision's DesignBetter.Co library, with a Product Hunt launch listing dated 29 November 2017. I read a university-hosted PDF copy; I cannot vouch for its licensing, so the notes quote sparingly. Chapters: introducing design systems (Suarez), designing your design system (Anne), building (Sylor-Miller), putting into practice (Mounter), expanding (Suarez and Tahran), and the future (Stanfield).

Standards and components are the two halves. Standards include naming conventions, accessibility requirements, file structure and a visual language covering color, shape, type, icons, space and motion; "without standards, decisions become arbitrary and difficult to critique". Components are reusable code, and reducing them to a single function (a button, a drop-down) makes them more reusable than complex data tables.

Anne's chapter gives a process: assemble a cross-disciplinary team; choose a team model (solitary, centralized or federated, with the Salesforce Lightning team using a hybrid of central and federated); interview the internal customers; run a visual audit. The audit example is concrete: CSS Stats showed Facebook with 38 unique text colors (figure caption). It defines design tokens as the "subatomic" foundation, "name and value pairs stored as data" for colors, spacing, sizing and animation durations, with a spacing example given as SPACING_MEDIUM: 1rem. The chapter recommends metrics divisible by or multiples of 4, a modular type scale, and checking color contrast.

Sylor-Miller's chapter covers code style, namespacing, and the handling of breaking changes. It tells the story of duplicating and deprecating a Tab component by creating a second one, then recommends versioning, with semantic versioning as the common standard. Mounter's chapter compares versioning the whole system against versioning by module and describes how GitHub combined versioning with semver; it also covers support channels such as a dedicated Slack channel and office-hours-style help.

### Replication and criticism

This is practitioner opinion with company case examples (Salesforce, Shopify Polaris, GitHub, Atlassian, LinkedIn, Airbnb). There are no controlled studies. Its framing of design debt and its claims that a system speeds work are plausible but come from the authors' own organizations, which are large product companies with dedicated teams. Whether the same approach pays off for a small team is not tested here; the Salesforce chapter itself notes a solitary model can suit a fast-moving campaign (the Pantsuit system) but may need later work to be adopted widely. The software-crisis history is a framing device, not a researched account.

### Implications for LTF

1. LTF is closest to the solitary or small centralized model. The handbook says to staff a system like a product: even a one-person system needs an owner, a changelog and an update routine.
2. Do the visual audit early. Count the distinct colors, font sizes and spacing values already used in lessons and widgets, and merge them. The Facebook example shows how quickly variants accumulate.
3. Adopt design tokens now. Name-value pairs for color, spacing and type are cheap and already consistent with the repository rule that colors and spacing come from tokens, never raw hex. Semantic names support both light and dark themes.
4. Use spacing in multiples of 4 and a modular type scale as a starting default, then test legibility for glanceable fly mode.
5. Plan deprecation: when a widget is redesigned, version it and keep the old one working long enough to migrate lessons, rather than duplicating under a new name.

Confirmed this session: web search (Product Hunt listing and InVision announcement results) for authors, editor, publisher and launch date; text read from the university-hosted PDF at https://streaming.missioncollege.edu/mgarrett/media/gds72/gds72_resources/InVision_DesignSystemsHandbook.pdf (chapters 1 to 4 skimmed for definitions, tokens and versioning). No ISBN or DOI exists that I could confirm.

## dtcg2025design

Design Tokens Community Group (2025). *Design Tokens Format Module 2025.10* and *Design Tokens Resolver Module 2025.10*. Final Community Group Reports, 28 October 2025. https://www.designtokens.org/tr/2025.10/format/

### Core claims

The Format Module is a specification for a file format that lets design tokens move between tools. It describes design tokens as "a methodology for expressing design decisions in a platform-agnostic way" and aims to make tools interoperate (spec text, Introduction). Its companion, the Resolver Module, extends the format to handle several contexts at once, with light and dark themes as the headline example. Both are described as stable, but the status section is explicit that they were published by the Design Tokens Community Group and are not W3C Standards nor on the W3C Standards Track.

### Specifics

Format Module (https://www.designtokens.org/tr/2025.10/format/). Editors listed are Louis Chenais, Kathleen McMahon, Drew Powers, Matthew Strom-Awn and Donna Vitan. A token is a JSON object with a `$value` property; the object's key is the token name. Optional properties are `$type`, `$description`, `$extensions` and `$deprecated`. Objects without `$value` are groups. A group can inherit from another with `$extends` (a deep merge in which local definitions override inherited ones, with no circular chains), can set a default `$type`, and can carry a `$root` token. A token's type comes from its own `$type`, a parent group, or the token it references, and tools must not infer type from the value.

Names must not begin with `$` and must not contain `{`, `}` or a period; names are case-sensitive. Aliases use curly-brace references such as `{group.token}`, and circular references are errors. Simple types are color, dimension, fontFamily, fontWeight, duration, cubicBezier and number; composite types are strokeStyle, border, transition, shadow and typography (a gradient type also appears). Files are JSON, with the preferred media type `application/design-tokens+json` and recommended extensions `.tokens` and `.tokens.json`. Deprecation is expressed with `$deprecated` set to true, false, or an explanatory string, and a group-level flag extends to child tokens unless overridden.

Resolver Module (https://www.designtokens.org/tr/2025.10/resolver/). It defines sets (collections of tokens from inline definitions or referenced JSON files, merged in array order, last declaration wins) and modifiers (sets with a `contexts` map and a `default`). A `resolutionOrder` array lists what to apply, later items overriding earlier ones. An input object such as `{ "theme": "dark" }` selects a context. In the spec's theming example a `theme` modifier has contexts light, lightHighContrast, dark and darkHighContrast, defaulting to light, applied after size, typography and animation sets. Resolution runs in four stages: input validation, ordering, alias resolution, final resolution. Resolver documents use `.resolver.json`, and `version` must be `2025.10`.

### Replication and criticism

This is a standard-like technical specification, not research, and it is recent (October 2025). The status wording matters: "Candidate Recommendation" here is the group's own label, not a W3C process stage. I did not verify tool support (which of Style Dictionary, Figma, Tokens Studio and others read this version), so any plan to rely on the format should check the current tool matrix. No independent evaluation of whether tokens improve consistency or speed is cited in the spec.

### Implications for LTF

1. Keep LTF tokens in a form that could be exported to this format: names, types and values separate, aliases for semantic names (for example a semantic "surface" token aliasing a palette token), and no reliance on tool-specific syntax. The repository's `src/styles/tokens.css` can remain the working source while the structure is kept compatible.
2. Model light and dark themes as a context, not as duplicated component styles. The resolver's modifier idea (one theme input, default light) matches LTF's requirement that both themes work, and the high-contrast contexts suggest a future path for fly mode in a dim room.
3. Use `$deprecated`-style marking. When a token is retired, mark it and name the replacement rather than deleting it, which matches the project rule that slugs and IDs never change once published.
4. Use type-aware tokens for instrument widgets: dimension, duration and cubicBezier for animation timing, so a reduced-motion setting can swap one set of values.
5. Check tooling before adopting the format. LTF is one React app, so the immediate gain is naming discipline, not interchange.

Confirmed this session: both specification pages fetched and read at https://www.designtokens.org/tr/2025.10/format/ (first 100,000 of 114,563 characters, which covered the abstract, status, concepts, naming rules, types) and https://www.designtokens.org/tr/2025.10/resolver/. Facts above come from those fetches (summarized by the fetch tool; quotes are short and from the spec).

## grudin1989case

Grudin, J. (1989). The case against user interface consistency. *Communications of the ACM*, 32(10), 1164-1173. https://doi.org/10.1145/67933.67934

### Core claims

Grudin argues that consistency is an unreliable guide for interface design and that "designers would often do better to focus on users' work environments" (abstract, read in the full text). His reasoning is that treating consistency as the primary goal pulls attention toward measurable properties of the interface and away from users and their tasks, and that on close inspection the dimensions along which one might argue for consistency "shift or disappear". He says this is not a case for randomness: the supporting studies are not wrong but more context-bound than recognized.

### Specifics

The paper opens by citing the case for consistency: Shneiderman's first "golden rule" (strive for consistency), Smith and Mosier's guidelines compendium in which over 60 guidelines have "consistent" in the title, and Polson's summary of experiments reporting large positive transfer from consistency. It then says the term has never been pinned down: Reisner wrote in 1981 that it was unclear what consistency means or how to identify its absence, and a two-day workshop of 15 experts in 1988 could not produce a definition.

Three senses of consistency are distinguished. Internal consistency is a design agreeing with itself (layout, command naming, selection techniques), which designers control and which is reported to help initial learning. External consistency is agreement with other interfaces the user knows, which may conflict with internal consistency. Analogic consistency is correspondence to the world outside computers (compass arrows on cursor keys), which aids first learning but, as Carroll is cited, must break down somewhere if technology is to offer an advantage.

Five design exercises carry the argument. (1) Function key layout: an ISO proposal put the four arithmetic operations in the top row in the order learned; of 24 interface professionals given the task, a plurality (8) produced that solution, but putting the plus key above Enter, the frequently used keys, minimizes movement, so the best design violates consistency. (2) Cursor keys: all 24 experts chose the star arrangement as most appealing to novices, and about half thought it best, yet studies cited by Grudin favor the inverted T. (3) Menu defaults: "last item accessed", "most frequent" and "most likely next" each fail in some task; for irreversible global operations a default of Cancel is correct, so no rule, consistently applied, produces good defaults. (4) Abbreviating 20 command names: the best strategy (truncation, vowel deletion, single letter) depends on how the abbreviations are used. (5) Printing a folder: implementers argued for printing a list of pointers because it was consistent with the system architecture, while most people expected the documents to print. He calls this a snare, "the most available consistency".

### Replication and criticism

The paper is an argued essay with worked examples, not an experiment. It reinterprets the empirical consistency literature rather than overturning it, noting that most studies measured learning, recall and transfer, not skilled performance. Grudin's claim is best read as "consistency is not a sufficient design goal", not "consistency has no value". A search result describes Grudin and Norman (1993) as citing this paper for the point that violating consistency can improve performance in good systems; I saw this only in a search summary. The keyboard examples are dated.

### Implications for LTF

1. Do not make consistency the goal of the LTF design system; make learner tasks the goal and use consistency as a tool. Ask, for each pattern, which task it serves, such as reading a briefing, checking a checklist item against the sim, or answering a quiz.
2. Distinguish internal consistency (all LTF widgets behave alike) from external consistency (similar to the sim's own displays, familiar flight apps, platform conventions). Where they conflict for an instrument widget, a learner who will meet the real cockpit instrument may be better served by external correspondence, and a verified aviation source should decide.
3. Defaults should follow the most likely next action. Safe defaults for irreversible actions (resetting progress, discarding quiz attempts) should favor the cautious choice even where other menus default differently.
4. Do not mirror the data model in the interface. A lesson's database structure should not determine how its screens are grouped; group by what the learner is trying to do.
5. Weigh learning against use. Fly mode may be used repeatedly under load, so repeated-use speed can matter more than first-impression familiarity.

Confirmed this session: Crossref works/10.1145/67933.67934 (title, author, CACM 32(10) 1164-1173, October 1989, 52 references); full text read from the Microsoft Research copy at https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/the-case-against-user-interface-consistency.pdf. The Grudin and Norman statement is from a search summary only.

## ozok2000measuring

Ozok, A. A., and Salvendy, G. (2000). Measuring consistency of web page design and its effects on performance and satisfaction. *Ergonomics*, 43(4), 443-460. https://doi.org/10.1080/001401300184332

### Core claims

Ozok and Salvendy ask two questions that Grudin's essay left open: how can the consistency of web pages be measured, and does more consistency actually improve user performance and satisfaction? They hypothesized that consistent designs would improve both, and that overall consistency would be explained by three elements: physical consistency, communicational consistency and conceptual consistency. The results, as summarized in the Johns Hopkins repository record (https://pure.johnshopkins.edu/en/publications/measuring-consistency-of-web-page-design-and-its-effects-on-perfo-3/), only partly supported the performance hypothesis.

### Specifics

Design: a four-group between-subjects experiment with ten participants per group (40 in total), as reported in the abstract summaries I could read (publisher page blocked; the abstract text itself was not available to me, so wording here is a paraphrase). Measures were error rate, performance time and satisfaction.

Findings reported: the hypothesis was partially supported for error rate but not for satisfaction or performance time. All three consistency elements contributed to overall consistency, and physical and communicational consistency interacted with each other, while conceptual consistency did not interact with them. In other words, how pages look and how they talk to the user are tied together, and whether the underlying concepts are consistent behaves separately.

Related work by the same authors, confirmed by Crossref titles and a university record. A 2001 paper in *Behaviour and Information Technology* 20(6), 433-447, is titled "How consistent is your web design?". A 2003 paper in the same journal, 22(3), 155-163, reports "The effect of language inconsistency on performance and satisfaction in using the Web: results from three experiments". Ozok's Purdue doctoral dissertation, "Guidelines for Design and Measurement of Interface Consistency on the World Wide Web" (advisor Salvendy), is summarized on the Purdue repository (https://docs.lib.purdue.edu/dissertations/AAI3037621) as developing a questionnaire reduced from 125 items to 94 across nine factors, with four experiments on 140 subjects, internal reliability of 0.81 and interrater reliability of 0.75, and 25 guidelines derived from 20 tasks. Those figures are from a paraphrased abstract; I did not see the dissertation. The same record says consistent linguistic design lowered task time and error rates, so language consistency has some support beyond the 2000 paper.

### Replication and criticism

This is a small experiment (10 per cell), and a partial result: error rate improved, satisfaction and speed did not significantly follow. Small samples make the non-significant outcomes weak evidence of no effect. The study sits between two camps: the consistency advocates cited by Grudin (see the grudin1989case section) and Grudin's own view that consistency is context-bound. Its three-element structure (physical, communicational, conceptual) is a useful measurement scheme but has not, to my knowledge, been independently replicated; I did not search for replications beyond the same authors' follow-ups. The dissertation's later figures show reliability numbers for the questionnaire but come from a different, larger body of work.

### Implications for LTF

1. Expect the main benefit of consistency to be fewer errors, not faster or happier use. For LTF this fits checklist and quiz screens: consistent control placement should reduce mis-taps and misreads, which matter more than speed.
2. Separate three audits. Physical: layout, color and type of equal things match. Communicational: labels, button text and feedback wording follow one vocabulary (the project's tokens and copy rules already cover part of this). Conceptual: the same idea always maps to the same structure, such as "step" and "lesson" meaning one thing.
3. Because the dissertation record reports benefits of consistent language, give copy review the same weight as visual review. A consistent callout vocabulary (note, warning, verify) is a design-system element.
4. Do not treat a consistency score as a quality score. The study shows a partial relationship; keep usability tests with real beginners as the arbiter.
5. When two lessons legitimately differ, document why, so that a deliberate exception is not mistaken for drift later.

Confirmed this session: Crossref works query (title, authors, Ergonomics 43(4) 443-460, DOI 10.1080/001401300184332; companion papers 10.1080/01449290110092260 and 10.1080/0144929031000107081); abstract summary read at the Johns Hopkins repository page and Purdue dissertation record linked above; the publisher page returned 403, so the full abstract was not read.

## tidwell2005designing

Tidwell, J. (2005). *Designing Interfaces: Patterns for Effective Interaction Design*. O'Reilly Media. (Second edition 2010; third edition 2019 with Brewer and Valencia.)

### Core claims

Tidwell applies Alexander's pattern idea to interaction design: instead of a rulebook of guidelines, a reference of nearly 100 recurring interface solutions, each explained with an example, the situation in which to use it, the reasoning, and how to build it. The premise, set out in the preface (as the UXmatters reviewer describes it), is that interaction designers solve the same problems repeatedly across web, desktop and enterprise software and benefit from a shared vocabulary of solutions. The patterns are meant to be adapted, not copied.

### Specifics

Details below come from a published review (Leo Frishberg, UXmatters, November 2006, https://www.uxmatters.com/mt/archives/2006/11/book-review-designing-interfaces.php) and search-result listings of the O'Reilly pages, because the O'Reilly pages themselves returned 403 errors to my fetches.

The first edition has a preface, nine chapters, references and an index. The chapters: (1) What Users Do, twelve user behavior patterns; (2) Organizing the Content, eight patterns; (3) Getting Around, eleven navigation and wayfinding patterns; (4) Organizing the Page, twelve page-layout patterns; (5) Doing Things, ten action and command patterns; (6) Showing Complex Data, covering information graphics; (7) Getting Input from Users; (8) Builders and Editors, nine patterns; (9) Making it Look Good, covering visual style. The review mentions Button Groups, Progress Indicator, Command History and Macros as example patterns. Search results give the second edition as December 2010 at 575 pages.

Every pattern uses the same subheadings: Title, Example, What, Use when, Why, How, Examples. The review calls the "how" sections recipe-like. The chapters are self-contained, so the book works as a reference rather than a sequential text. Dearden and Finlay (see the dearden2006pattern section) describe Tidwell's earlier pattern collection (1998) as including "go back to a safe place", which they present as an interaction pattern: give users a clearly identifiable way to return to a known state such as a home page.

### Replication and criticism

The evidence is expert craft knowledge distilled from many examples, not experiment. The reviewer's weaknesses list is useful: Chapter 5 covers only a fraction of possible action and command patterns, other chapters are not exhaustive, the color-coded chapter edges are arbitrary, and the book does not address whether interaction patterns are culturally bound as architectural patterns may be. Dearden and Finlay's broader criticism applies: HCI pattern collections have generated many patterns with much duplication and little evaluation of whether using them improves outcomes, and organization by interface element (as in this book) differs from organization by user activity. Because the first edition dates from 2005, its web and desktop examples predate touch-first and mobile conventions.

### Implications for LTF

1. Use the seven-part pattern format for LTF's internal pattern notes: Title, Example (screenshot), What, Use when, Why, How, Examples. It is short enough to write for each widget and callout.
2. Borrow the grouping logic. Tidwell separates what users do (behavior), organizing content, navigation, page layout, actions, data display, input, and style. An LTF pattern catalog could mirror this: lesson reading, quiz and challenge input, progress display, instrument displays, and fly mode.
3. Patterns for safe exploration and recovery matter for a beginner audience: always a visible way to return to the lesson start or last safe screen, and undo for quiz answers before submission. The "safe place" pattern fits fly mode, where a learner may need to leave a step quickly.
4. Do not treat pattern names as evidence. A pattern is a documented practice, not a tested guarantee. LTF should validate chosen patterns (for example how to show a multi-step checklist) with beginners.
5. Use the review's complaint about arbitrary color coding as a reminder: structural cues such as chapter colors should carry meaning, or be left out.

Confirmed this session: Open Library search "designing interfaces tidwell" returned work OL8167456W (Designing interfaces, Jenifer Tidwell, 2005, O'Reilly, ISBN 0596008031); review content from https://www.uxmatters.com/mt/archives/2006/11/book-review-designing-interfaces.php; edition dates from web search listings (O'Reilly pages blocked by 403, not read directly). I did not read the book.
