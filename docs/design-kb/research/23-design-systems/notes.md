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
