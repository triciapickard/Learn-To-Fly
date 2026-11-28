# Classical Typography

This Part collects what the printing tradition, from Bodoni's specimen book of 1818 to Unger's reflections of 2018, says about setting type to be read, and turns it into rules for Learn to Fly. Its sources are treatises, manuals, lectures and histories written by printers, type designers and book typographers: Warde, Morison, Gill, Updike, De Vinne, Johnston, Bodoni, Tschichold (twice, on opposite sides of his own argument), Dowding, Bringhurst, Tracy, Noordzij, Hochuli, Kinross and Unger. Almost none of it is experimental. It is craft authority: the accumulated judgment of people who watched readers use pages for a living. Where the experimental record of Part III, Legibility and the Science of Reading, bears on a craft claim, this Part cites it, says whether it confirms or qualifies the claim, and grades the rule accordingly. Most rules here are grade C. That is an honest description of their evidence, not a judgment of their usefulness: a C rule is a sound default that a stated argument can override.

Use the Part in two ways. When a page or component is designed, read the chapter that covers its problem (the measure, leading, capitals, figures, hierarchy) and apply the rules as defaults. When a design is reviewed, run the checklist in the final chapter. Throughout, the craft numbers (Gill's twelve words, Bringhurst's 66 characters, De Vinne's three-to-em space) are treated as starting points to verify on real learners and devices, which is the position Unger takes and the one this book adopts [@unger2018theory]. Screen rendering, font loading and CSS mechanics are covered in Part IV, Typography on Screens; the page grid in Part V, Grids, Layout and Space. This Part stays with the reading column, the line, the word and the letter.

## The Purpose of Typography

### Service before display

The tradition begins with a definition of purpose, and every later rule in it is a consequence. Morison's 1929 and 1930 essay, which he called an "essay towards a rationale of book-typography," defines the craft this way: "Typography may be defined as the art of rightly disposing printing material in accordance with specific purpose; of so arranging the letters, distributing the space and controlling the type as to aid to the maximum the reader's comprehension of the text" [@morison1936first]. He draws the corollary without softening it. Typography is "the efficient means to an essentially utilitarian and only accidentally aesthetic end," and so "any disposition of printing material which, whatever the intention, has the effect of coming between author and reader is wrong." In books meant to be read, he says, there is "little room for 'bright' typography."

Beatrice Warde made the same argument as a lecture to the British Typographers Guild in October 1930, later collected in *The Crystal Goblet* [@warde1955crystal]. Her image is a choice between two wine goblets, one of solid gold with exquisite ornament and one of thin, clear crystal. The connoisseur picks the crystal because it reveals the wine instead of hiding it. Her one-line version: "Type well used is invisible as type, just as the perfect talking voice is the unnoticed vehicle for the transmission of words, ideas." She adds that the "mental eye focuses through type and not upon it."

Bringhurst compresses the whole position into the first sentence of his manual: "Typography exists to honor content" [@bringhurst2012elements]. Kinross, writing a critical history rather than a manual, gives the same aim a historical frame. Modern typography, in his account, is an attempt to communicate clearly and rationally, not a style, and it includes the traditionalists as well as the avant-garde [@kinross2004modern]. Even Tschichold's 1928 manifesto, which attacked the traditional book, opens with a version of it: "The essence of the New Typography is clarity" [@tschichold1995new].

The agreement matters more than any one statement. Writers who disagreed about nearly everything else (serif against sans serif, symmetry against asymmetry, ornament against none) agreed that type is judged by what it does for the reader. For a product whose reader is a beginner trying to learn a skill with real consequences in the sim, this is the first test of any typographic choice.

::: {.rule #TYP-001 grade="C"}
**Judge every typographic choice in lesson and reference text by whether it helps the learner understand the text, and reject any choice whose main effect is decorative.** Morison defines typography as arranging letters and space "to aid to the maximum the reader's comprehension," and calls anything that comes between author and reader "wrong" [@morison1936first]. Warde's goblet makes the same point [@warde1955crystal], and Bringhurst's first principle is that typography "exists to honor content" [@bringhurst2012elements]. This is craft consensus across opposed schools [@kinross2004modern; @tschichold1995new], not an experimental result. It applies with full force to sustained reading; display surfaces such as the landing hero have other jobs (see TYP-004).

*In LTF:* the test for a change to `MarkdownContent`, `Callout`, `QuizBlock` or the lesson headings is whether it makes the lesson easier to follow. A new color, weight or face that a reviewer cannot connect to a reading task does not go into `LessonPage`.
:::

### Readability is not loudness

Warde's lecture contains the tradition's earliest warning against equating visibility with readability. She separates readability from what an optician would call legibility: a page in 14-point bold sans serif is, she says, more "legible" according to laboratory tests than one in 11-point Baskerville, but a speaker who bellows is more audible without being a better speaker [@warde1955crystal]. The research notes for this book could not identify the "laboratory tests" she meant, so treat the comparison as her recollection, not as data.

The experimental record later gave her intuition partial support. Tinker's summary of half a century of Minnesota studies found boldface read at the ordinary rate, but 70 percent of readers preferred ordinary lowercase; italic was read somewhat more slowly, and all capitals greatly retarded reading [@tinker1963legibility]. In other words, heavier type did not make continuous reading faster, and readers did not want it. Tinker's broader conclusion is that most ordinary choices matter little while a few (size, line width with leading, all capitals, italics, contrast) matter a lot, and that bad choices combine into a large loss.

The practical consequence is a split that Warde's distinction makes possible. Sustained reading (a lesson, the disclaimer, a challenge brief) wants ordinary sizes and a calm weight. Glancing (a readout on a second screen beside the sim, a timer, a tier result) is a different task, where large, heavy figures earn their place. That split is an inference from her distinction, not her claim, and the chapter on two traditions returns to it.

::: {.rule #TYP-002 grade="B"}
**Do not make running text bolder or larger to make it "more readable"; set lesson prose at an ordinary text weight and size and reserve heavy weights for short emphasis and glance readouts.** Warde separates laboratory legibility from readability [@warde1955crystal]. Tinker found bold read at the ordinary rate but not preferred by 70 percent of readers, so weight does not buy speed in continuous text [@tinker1963legibility]. The evidence is old and on paper; Part III covers the size floor on screens.

*In LTF:* lesson prose stays at the regular weight of Instrument Sans. Bold is for a term the learner must notice. The heavy mono figures on `SpeedsPage`, the result card and the `Stopwatch` are glance readouts and are not a model for prose.
:::

### The transparent page is hard work

Warde insists that invisibility is not the absence of effort: "There is nothing simple or dull in achieving the transparent page" [@warde1955crystal]. Her lecture names concrete failures that break transparency, and they are still the ones a reviewer sees on screens. Setting that invites "doubling" of lines, or that lets three words read as one, keeps the reader subconsciously worried. A running headline "that keeps shouting at us," a line that looks like one long word, and capitals "jammed together without hair spaces" cause "subconscious squinting and loss of mental focus." She compares margins to the long thin stem of a wine glass, which keeps fingerprints off the bowl.

Each of these failures has a modern equivalent. Doubling is the cost of a measure that is too long for its leading (see the chapter on measure). Three words reading as one is word spacing that is too tight or uneven. The shouting running headline is any repeated furniture that competes with the text it frames: a sticky header, a banner that appears on every page, a heavy section label repeated in each card. Jammed capitals are all-caps labels without added letterspacing. Warde gives no measurements, only a typology, but the typology is a usable review vocabulary.

::: {.rule #TYP-003 grade="C"}
**Keep repeated page furniture visually quieter than the text it frames: headers, banners and labels that recur on every screen must not outweigh the content.** Warde names a running headline "that keeps shouting at us" among the causes of "subconscious squinting and loss of mental focus" [@warde1955crystal]. This is craft observation without measurement.

*In LTF:* the `Header` (sticky, `bg-canvas/95`, `text-sm font-medium` nav) is already quiet. The `BetaBanner` is not: a full-width `bg-caution-tint` strip with a 20 px caution icon above the header on every page, Fly mode included. Once dismissed it stays gone, which helps, but on first visit it is the loudest band on a lesson page. Keep its tint, reduce its height and icon weight, and keep it out of `FlyModeLayout`.
:::

### The objection: type has a voice

Warde's metaphor has a weakness that its critics have pressed. Text is already invisible as meaning; the reader never sees thought, only marks. Typography therefore cannot be the invisible part. It is the visible form that meaning takes, and that form carries tone the way a speaking voice does. A reassuring voice for an anxious beginner is a typographic decision, not an absence of one. Tschichold's 1928 programme makes the same point from the other side: the function of printed text includes emphasis, which he calls "word value," and the logical sequence of contents, both of which typography must express [@tschichold1995new]. Bringhurst's "honor content" also leaves room for type to add as well as to transmit [@bringhurst2012elements].

The reconciled rule is the one the tradition actually practiced. Type should never cause friction, and it should be chosen deliberately for the voice the product needs. Warde's own lecture allows for this when she describes fine printing as a window of small leaded panes, where the reader is conscious that someone enjoyed building it [@warde1955crystal]. The point is to choose which window each page needs.

::: {.rule #TYP-004 grade="C"}
**Choose typefaces and display treatments deliberately for the voice the product needs, but only where the type is not being read continuously.** Tschichold counts emphasis ("word value") and sequence among the functions type must express [@tschichold1995new]; Warde allows a visible, crafted window where the purpose is to be looked at [@warde1955crystal]. Voice belongs in display: headlines, the logo, the landing hero, section openers. It does not belong in the lesson body (TYP-001).

*In LTF:* the product has no display face (the planned Big Shoulders Display was never implemented), so the landing hero `display-xl` "Yes, you can fly a plane." and the lesson body speak in the same Instrument Sans voice. If a display face is added, it goes into `display-*` utilities only, never into `MarkdownContent`.
:::

### Real text, not specimens

Warde records an anecdote about T. M. Cleland, who set a specimen layout in Latin so that the client would not read the text [@warde1955crystal]. The point cuts both ways. A specimen set in an unreadable language turns a page into a picture, to be judged as a picture. That is fine for a picture, and wrong for a page meant to be read, because only real text shows where reading snags: a heading that breaks after its first word, a figure that falls at a line end, a run of capitals that crowds. Noordzij's theory of writing reaches the same practical conclusion from a different direction: legibility depends on rhythm and contrast across a word and a line, so a candidate face is judged by setting real sentences, not by a specimen of single glyphs [@noordzij2005stroke].

::: {.rule #TYP-005 grade="C"}
**Review every typographic change with real LTF lesson text, real challenge data and real numbers, never with placeholder copy.** Warde's Cleland anecdote shows that unreadable specimen text makes a page into something to look at rather than read [@warde1955crystal]; Noordzij places legibility in the rhythm of real words and lines [@noordzij2005stroke]. Craft consensus.

*In LTF:* `/dev/components` (`DevComponentsPage.tsx`) is the place to review type in every state. Fill it with excerpts from `content/lessons/`, including a paragraph with tokens such as `{{vspeed.*}}` expanded, a long callout title, a checklist line with capital identifiers, and a table with mixed-width numbers.
:::

### What this means for Learn to Fly

LTF already states its purpose in service terms: the product exists to teach a beginner, and the honesty traits in `product-context.md` (the `DraftBadge`, `verify` callouts, "Last verified" lines) are typography in Morison's sense, arrangements that serve comprehension and trust. Keep that stance and make the type obey it.

Three changes follow. First, separate the surfaces where type should be invisible from those where it may speak. `LessonPage`, `Prose`, `BriefTab`, the `Callout` body and the reference panels are reading surfaces (TYP-001, TYP-002). The landing hero, the `PageHeader` title, the 404 "taxiway" line and the logo lockup are display surfaces (TYP-004). Write that classification into the component comments so it governs future edits. Second, quiet the furniture that repeats on every page: the `BetaBanner` first, and any eyebrow that appears on every card (TYP-003, and the chapter on capitals). Third, change the review habit. A pull request that changes type includes a screenshot of a real lesson section, at phone width and at `xl`, in Day and Night (TYP-005). The rest of this Part supplies the specific settings, and each of them has to pass the test of service set out above.

## Convention and the Conservative Reader

### Obedience to convention

Morison's second principle is about convention, and it is the one most relevant to a product for beginners. Book typography, he argues, rests on the nature of alphabetic writing and on the traditions of the society it serves, and it demands "an obedience to convention which is almost absolute" [@morison1936first]. The wider the audience, the stricter the limit. An experiment suits a 50-copy tract, not a book printed 50,000 times. Hence his most quoted sentence: "Type design moves at the pace of the most conservative reader."

Morison's argument is not that convention is beautiful. It is that a reader who must first learn how a page works has less attention left for what the page says. A reader's familiarity with a convention (where paragraphs begin, what a heading looks like, which way the text runs, what an underline means) is a resource that the typographer spends or saves. A wide audience contains more readers for whom an unfamiliar arrangement costs attention, so a wide audience needs stricter convention.

Updike's history, written a few years earlier, rests on a related idea. He called *Printing Types* "a study in survivals" because it tries to show "not only what types have survived, but what should survive through their fitness for the best typography" [@updike1922printing]. The assumption is that long survival signals fitness.

Both claims need care. The survival argument is weaker than it looks: types survive through habit, cost and the stock a foundry happens to hold, not only through fitness, and the notes for this book flag that Updike's historical attributions should be checked against later scholarship before reuse [@updike1922printing]. Kinross also places Morison inside a "new traditionalism" shaped by the Monotype Corporation [@kinross2004modern], and Warde, who made the goblet argument, worked as Monotype's publicist alongside Morison [@warde1955crystal]. The doctrine of convention came partly from people whose employer sold conventional types. That does not make it wrong, but it means the doctrine needs its reasons stated, not just its authority.

### Familiarity is not clarity

The best qualification of the convention argument comes from inside the craft tradition. Edward Johnston, in a footnote to the preface of his 1906 handbook, wrote: "our personal view of legibility is apt to favour custom and use unduly, for a quite bad, familiar writing may seem to us more readable than one that is far clearer in itself but unfamiliar" [@johnston1906writing]. This cuts against Morison's "familiar design" as a standard. If readers judge legibility by familiarity, then "comfortable size and familiar design" is partly circular: what is familiar seems legible because it is familiar.

The experimental literature explains the mechanism. Larson's review of word-recognition research reports that lowercase is read 5 to 10 percent faster than uppercase, and attributes the difference to practice rather than to any property of lowercase forms; reading speed in uppercase, and even in mirror-reversed text, rises with practice [@larson2005science]. Familiarity is real and measurable, and it is learned. A reader is fast with what the reader has practiced.

Two conclusions follow, and they pull in different directions. For the reading conventions every literate adult shares (lowercase running text, left alignment, paragraphs marked by space or indent, headings larger and bolder than text), familiarity is an asset the product should keep. For conventions only the design team shares (a private icon vocabulary, an eyebrow-over-heading pattern used everywhere, mono codes such as "M0" and "C4.3", the meaning of a teal underline), familiarity is a trap: the team reads them easily because it has practiced them, and the beginner has not. Johnston's footnote is the reason to test with people who have never seen the product.

::: {.rule #TYP-006 grade="C"}
**Use the reading conventions every adult reader already knows in lesson and reference text: mixed case, left alignment, paragraphs marked by one consistent method, headings that are larger or bolder than text, and underlined links.** Morison demands near-absolute obedience to convention for wide audiences, because "Type design moves at the pace of the most conservative reader" [@morison1936first]. Practice makes familiar forms faster to read [@larson2005science]. Craft doctrine with indirect experimental support for the familiarity mechanism.

*In LTF:* `MarkdownContent` and `Prose` already follow these conventions (left aligned, `my-3` or `my-4` paragraph spacing, underlined accent links). Keep them. Do not introduce centered lesson text, run-in headings, all-caps paragraphs or unmarked links in lesson Markdown.
:::

::: {.rule #TYP-007 grade="B"}
**Test the readability of lessons, labels and codes with people who have never used LTF, and do not accept the team's ease of reading as evidence.** Johnston warned that "a quite bad, familiar writing may seem to us more readable" than a clearer unfamiliar one [@johnston1906writing]; Larson reports practice effects large enough to change reading speed by case [@larson2005science]. The mechanism is experimentally supported; its size for LTF's specific labels is unknown.

*In LTF:* the mono codes ("Lesson 0.1", "C4.3", "M0") and eyebrows that open almost every card are read fluently by the team. Watch five beginners find the next lesson on `CurriculumPage` and read a `ChallengePage` header, and note where they pause on a code or label.
:::

### Where novelty belongs

Morison does not ban experiment. He restricts it by audience and by place. The 50-copy tract may experiment; the book printed in tens of thousands may not [@morison1936first]. His part V answers the charge that conventional typography is monotonous: decoration belongs on the preliminary pages, not in the text, because "the typographer's only purpose is to express, not himself, but his author." The same essay limits the title page: no line larger than twice the text size ("If the book be set in 12-point, the title need be no larger than 24-point").

Translated to a web product, the preliminary pages are the places a reader looks at rather than reads: the landing page, a module opener, the dashboard's course-complete panel, the 404 page, the logo. These are where LTF can be distinctive. The text of a lesson is where it should be conventional. That division answers a real tension in the owner's complaint. The product looks generic, and the remedy is not to make lesson text unusual. It is to make the display surfaces specific to flying and to make the reading surfaces excellent, which is a different thing from unusual.

::: {.rule #TYP-008 grade="C"}
**Put typographic novelty (a display face, unusual sizes, expressive layout) on surfaces the learner looks at, not on surfaces the learner reads continuously.** Morison confines decoration to the preliminary pages because the text belongs to the author [@morison1936first]. Kinross shows that traditionalists and modernists shared the aim of rational communication and differed about means [@kinross2004modern]. Craft consensus.

*In LTF:* candidates for distinctive display treatment are the landing hero and section heads, module openers on `ModulePage`, the course-complete panel on `DashboardPage`, `NotFoundPage` and the `LessonPath` labels. Candidates for strict convention are `MarkdownContent`, `Callout` bodies, `QuizBlock` prompts and explanations, `BriefTab` and the reference panels.
:::

### Rules as guides, reasons written down

Johnston's handbook contains a second idea that governs how this book should be used. "Rules are only Guides and ... Methods are suggested by the work itself," he writes, and too much fitting and planning "makes the work lifeless" [@johnston1906writing]. Kinross, in Carter's review, frames the modern version: "typographers need to incorporate critical reflection into their own practice" [@kinross2004modern]. Unger's book refuses to give formulas at all; it treats theory as investigative and reflective, and urges designers to state their own research questions [@unger2018theory].

This is the stance a design knowledge base needs. A rule with its reason written beside it can be overridden knowingly, by someone who can say why the reason does not apply. A rule without a reason is either obeyed blindly or ignored. The grades in this book serve the same purpose: a grade C rule announces that its authority is judgment, and invites a better argument.

The habit has a second use. Updike's verdicts, read a century later, show how quickly craft authority dates. He listed among the types "we ought not to want" practically all types on "standard line," all condensed or expanded types, and all "sans-serif" or (as he says "absurdly miscalled") "gothic" types [@updike1922printing]. Within six years Tschichold argued the opposite [@tschichold1995new], and the later history is largely of sans serif becoming the mainstream [@kinross2004modern]. A rule that records its reason ("sans serif lacks the stroke contrast and serifs the old faces use to guide the eye", say) can be tested and retired. A rule that records only a verdict cannot.

::: {.rule #TYP-009 grade="C"}
**Write down the reason and the evidence grade for every typographic rule in the design system, and record each deliberate departure with its reason.** Johnston treats rules as guides [@johnston1906writing], Kinross asks for critical reflection in practice [@kinross2004modern], and Unger declines formulas in favor of investigation [@unger2018theory]. Updike's dated verdict against sans serif shows what happens to verdicts kept without reasons [@updike1922printing]. Craft consensus about process.

*In LTF:* comments in `tokens.css` and `index.css` cite design sources (`tokens.json`, a design-system README, `night-mode.md`) that do not exist in the repository. Replace those citations with rule IDs from this book, and when a token departs from a rule, say so in the comment and in the `v1.md` decision log.
:::

### The audience LTF serves

Morison's audience test asks two questions: how wide is the readership, and how much does a reading idiom cost it? LTF's readership is wide in the sense that matters. Its learner has "never flown," arrives from a search or a video, and may have no habit of technical reading. The learner also reads in an unusual posture: often at a desk beside the sim, with a controller in hand, glancing between a second screen and the simulator. That posture raises the cost of any unfamiliar arrangement, because attention is already divided.

At the same time, the subject matter carries its own conventions, and some of them are unfamiliar to beginners by nature: capital identifiers on checklists, abbreviations such as KIAS and MSL, airport codes in four capitals. These are not the product's to change. They are the language the learner is learning. The typographic job is to present them in a way that makes them learnable: consistent, explained on first use, given room (see the chapter on capitals). The product's own inventions (mono codes for modules and lessons, eyebrows, tier rings) are a different case: they are optional, and each should earn its unfamiliarity.

### What this means for Learn to Fly

Keep the conventional reading surfaces: lesson text that is left aligned, mixed case, in paragraphs, with underlined links (TYP-006). Spend novelty where Morison would have put decoration, on the landing page, module openers and celebration panels, and not inside `MarkdownContent` (TYP-008).

Audit the product's private conventions with beginners (TYP-007). The eyebrow-over-heading pattern appears on landing sections, `PageHeader`, module cards, challenge cards, stat tiles and table headers, so a beginner meets a small uppercase label before nearly every heading. Each eyebrow should carry information the heading does not ("Module 3 · Up next" does; a repeated "Lesson" label above a lesson title does not). The mono codes ("M0", "Lesson 0.1", "C4.3") are useful once learned and opaque before; on first appearance they need a word beside them.

Finally, make the design system argue for itself (TYP-009). The code comments that cite missing documents should cite this book's rule IDs instead, so that a future change can see why the measure is what it is, why eyebrows are tracked, and why lessons use the face they use.

## Choosing and Limiting Typefaces

### The courage to eliminate

Updike's practical purpose in *Printing Types* is to teach printers how to stock a composing room, and his method is subtraction. Studying type forms, he says, teaches "not only how to choose" but gives "courage to eliminate" [@updike1922printing]. The ideal composing room is not built from a list of "standard" faces accepted on others' word, but by printers who study and then add the fonts their study has revealed. His sharpest sentence is a moral one: "There are many ways of being wrong, but only one way of being right," and if we do not judge types rightly, "they will judge us."

Tschichold, arguing from the opposite aesthetic, reaches the same economy. His 1928 handbook redesigns a newspaper advertisement that used ornaments, seven kinds of type and sizes and a centered layout; the corrected version has no ornament, "only 5 different types," and "good legibility" [@tschichold1995new]. The five is an example, not a law, but the direction is clear. Fewer faces and fewer sizes, each with a job.

The two arguments converge on a rule for a product's type stock. Each family earns its place by doing a job no other family in the stock can do. LTF today has two: Instrument Sans for "everything you read" and JetBrains Mono for "everything you measure," as the comment in `tokens.css` puts it. That is already an economical stock, and the division of labor is clear. The open question is the display face the plan called for (Big Shoulders Display, D-25) and the code never loaded. If it comes, it must have a job the other two cannot do (headline voice on display surfaces), and it must stay out of reading surfaces (TYP-008).

::: {.rule #TYP-010 grade="C"}
**Limit LTF to a named set of at most three type families, one for reading, one for measured values and at most one for display, and write each family's job into the tokens.** Updike's "courage to eliminate" [@updike1922printing] and Tschichold's reduction to a few types [@tschichold1995new] both treat economy as part of clarity. Craft consensus from opposed schools.

*In LTF:* the stock is Instrument Sans (`font-sans`) and JetBrains Mono (`font-mono`), and the job split is documented in `tokens.css`. Keep it. If a display face is added, add a third token with a one-line job statement and limit its use to the `display-*` utilities.
:::

### Disreputable offspring: synthetic and distorted styles

Updike's list of types "we ought not to want" includes "condensations, distortions, or exaggerations of the original letter," the variants he calls the "disreputable offspring of honest parents" [@updike1922printing]. In metal type the offence was a foundry's carelessly derived variant. On screens the same offence is committed automatically. The CSS Fonts specification states that user agents must not synthesize condensed or expanded faces [@w3c2026cssfonts], which removes one form of distortion, but a page can still request an italic or a weight the loaded files do not contain, and it can still scale type with transforms or squeeze it in an SVG.

LTF has a concrete case. `src/main.tsx` imports `@fontsource-variable/instrument-sans` and `@fontsource-variable/jetbrains-mono` through their default entry points, which declare only upright faces (`font-style: normal`, weights 400 to 700). The packages include italic files, but they are not imported. So any italic the product asks for (Markdown emphasis in a lesson, the `italic` class in the traffic-pattern widget's quoted radio call, the `italic` label in the sectional legend chart) is drawn from no true italic. What the learner sees is a substitute the browser generates, or no change at all, depending on the browser. A true italic of a sans serif is usually more than a slant, and the substitute is exactly Updike's distortion.

::: {.rule #TYP-011 grade="C"}
**Load every style the interface uses as a real font file, and never rely on browser-synthesized italic or bold.** Updike condemns distorted variants of the original letter [@updike1922printing]; the CSS Fonts specification already forbids synthesized condensed and expanded faces [@w3c2026cssfonts]. Craft consensus, with a standards precedent.

*In LTF:* either import the italic files (`@fontsource-variable/instrument-sans/wght-italic.css`, and the JetBrains Mono italic if code comments need it) or remove italic from the product. Given TYP-045, removing it from lesson emphasis and keeping it only where a true italic is loaded is the simpler path. Check the traffic-pattern radio call and the sectional chart label after the change.
:::

::: {.rule #TYP-012 grade="C"}
**Never stretch, squeeze or scale type along one axis to make a label fit; shorten the label, change the size uniformly or choose a narrower style that the font actually contains.** Updike's "condensations, distortions, or exaggerations" [@updike1922printing] and the specification's ban on synthesized widths [@w3c2026cssfonts] rest on the same idea: the proportions of a letter are part of its design. Craft consensus.

*In LTF:* the widget labels in `src/features/widgets/` (gauge numerals, tape values, the `Label` primitive in `shared/svg.tsx`) must keep the face's proportions at every size. If a G1000-style tape label does not fit, change the label or the tape, not the glyph proportions.
:::

### Contrast between thick and thin

Bodoni's *Manuale tipografico* (1818, completed after his death by his widow and his foreman Luigi Orsi; only 290 copies were struck off) is the tradition's great statement of high-contrast type [@bodoni1818manuale; @updike1922printing]. His preface derives the beauty of type from several heads, of which the research notes could confirm the wording of the first two: regularity, "conformity without ambiguity, variety without dissonance," and "sharpness and definition, neatness and finish." He praises "the beautiful contrast as between light and shade" that a well-cut pen gives [@bodoni1818manuale].

The craft tradition largely rejected that contrast for continuous reading. Morison's first composition principle is that the eye cannot easily read many words with sharply contrasted thicks and thins [@morison1936first]. Updike calls the *Manuale* "the acme of Bodoni's late, chilly, dry manner" and bans "all hair-line types" from the respectable composing room [@updike1922printing]. Dowding, as reported in excerpts, says modern (Bodoni-style) faces need generous leading and narrow measures for continuous reading [@dowding1954finer]. All three are craft opinion, not measurement, and Part III and Part IV hold the experimental and rendering evidence. On screens the risk is plausibly worse than in print, because thin strokes at small sizes depend on rendering and pixel density, but that is a hypothesis to check there, not a finding here.

Bodoni's own preface still contributes something. Regularity as "conformity without ambiguity, variety without dissonance" is a fair description of what a component library is for, and the "sharpness and definition" he demanded of cast type is a rendering requirement for every hairline in LTF's instrument drawings.

::: {.rule #TYP-013 grade="C"}
**Do not use high-contrast faces with hairline strokes (Didone and similar) for running text or small labels; if used at all, confine them to large display sizes.** Morison says the eye cannot easily read many words with sharply contrasted thicks and thins [@morison1936first]; Updike bans hair-line types [@updike1922printing]; Dowding says modern faces need extra leading and narrow measures [@dowding1954finer]. Craft consensus; the screen evidence is in Part IV.

*In LTF:* neither current face is high contrast. The rule matters when a display face is chosen: a Didone headline face would carry a fashion connotation foreign to the product and would fail at the 12 px `eyebrow` size and in Night. Test any candidate at 12 px and in the `[data-theme='dark']` theme before adopting it.
:::

::: {.rule #TYP-014 grade="C"}
**Check that hairlines in instrument drawings (gauge ticks, tape graduations, chart linework) stay sharp at 1x pixel density, in both themes.** Bodoni counts "sharpness and definition, neatness and finish" among the beauties of type [@bodoni1818manuale]. Craft standard applied to drawing.

*In LTF:* the `Gauge`, `Tape` and `Compass` primitives in `src/features/widgets/shared/svg.tsx` and the `sectional-legend/Chart.tsx` linework draw thin strokes over `fill-instrument` and `chart-*` grounds. Review them on a 1x monitor, not only a high-density laptop.
:::

### Serif or sans serif

The most persistent typeface argument is whether serifs make text easier to read. Updike's 1922 ban on sans serif rests on taste [@updike1922printing]; so does much of the opposite opinion. The experimental record is more useful than either. Tinker's summary found common type faces equally legible, with only a marked difference (Cloister Black against Scotch Roman) showing an effect; a sans serif face (Kabel Light) was read as fast as ordinary type but not preferred [@tinker1963legibility]. Arditi and Cho built fonts differing only in serif size and found that, while serifs at 5 percent of cap height slightly lowered size thresholds, RSVP and continuous reading showed no effect, and their abstract concludes that typefaces differing only in serifs showed no difference in legibility [@arditi2005serifs]. Where serifs help at all, they may do so by adding space between letters. The study is small (four normally sighted and two low-vision observers, one font design), and its authors say subtle effects cannot be excluded.

Practitioners who spent careers on legible type treat the question as open. Unger's legibility chapter mostly asks questions, including whether serif faces are more legible than sans serif ones and whether a high x-height aids legibility [@unger2018theory].

::: myth
**"Serif type is more legible for body text, so lessons should be set in a serif."** The claim is usually supported by the idea that serifs guide the eye along the line. Tinker found common faces, including a sans serif, read at the same speed [@tinker1963legibility], and Arditi and Cho found no effect of serifs on reading speed when serifs were the only variable [@arditi2005serifs]. The full case, with the studies, is made in Part III, Legibility and the Science of Reading, and is not repeated here.
:::

::: {.rule #TYP-015 grade="B"}
**Choose LTF's text face on letter distinctness, spacing, numerals, weight range and voice, not on whether it has serifs.** Common faces read at equal speed [@tinker1963legibility], serifs alone made no difference to reading speed [@arditi2005serifs], and the question remains open among practitioners [@unger2018theory]. Experimental support is real but limited in sample and conditions.

*In LTF:* the choice of Instrument Sans (a sans serif) over the planned Inter is not a legibility problem in itself. The tests that matter for it are TYP-016 and TYP-017.
:::

### Spacing tests and distinct letters

Tracy, who spent about thirty years at British Linotype designing newspaper faces, is best known for a letterspacing method that doubles as an acceptance test [@tracy1986letters]. As a write-up of the method reports it (a paraphrase, not his wording): in lowercase, n is the control letter and the space between its stems, halved, is the starting point, adjusted by eye in a row of n's; o is the round standard, spaced by inserting it among n's; in capitals, H and O play the same roles. A face whose rows of n, o, H and O look uneven, with dark clumps or holes, has weak spacing. Tracy's career was in faces for mass reading, which is why his view of legibility is a working designer's.

Noordzij's theory puts the same emphasis on white: white space, not the black stroke, is the principal element in perceiving letterforms, and rhythm and contrast across a word matter more than the ideal shape of each character [@noordzij2005stroke]. Spiekermann's review draws the consequence that b, d, p and q are distinguished by their place in a sequence of black and white. The theory is argued, not tested, but its practical instruction is sound: judge a face in lines of real text.

The experimental literature adds the letters most often confused. Beier and Larson found that narrow single-stem letters (i, j, l, t, f) and mixed-stroke x-height letters are misrecognized most, that widening narrow letters helped, and that a single-storey a was less legible than a double-storey a [@beier2010design]. For a flying product the pairs that matter are in identifiers and values: 0 and O, 1 and l and I, 5 and S, 8 and B.

::: {.rule #TYP-016 grade="C"}
**Before adopting any face, set rows of n and o and of H and O at body size, and a paragraph of real lesson text, and reject the face if its rhythm is visibly uneven.** Tracy's control-letter method [@tracy1986letters] and Noordzij's emphasis on white space and rhythm [@noordzij2005stroke] make spacing the face's responsibility. Craft heuristic requiring judgment.

*In LTF:* run the test for Instrument Sans at 16 px (`MarkdownContent`) and 18 px (`body-lg`), and for any display candidate at `display-md` to `display-xl`. Keep the result in the design-system notes.
:::

::: {.rule #TYP-017 grade="B"}
**Check every face for confusable characters (0 and O, 1 and l and I, 5 and S, 8 and B) at the smallest size it is used and in both themes, and use the face that keeps them distinct for identifiers and values.** Beier and Larson found narrow and mixed-stroke letters most often misread and showed that letter design changes recognition [@beier2010design]. Experimental, with young participants and test fonts.

*In LTF:* JetBrains Mono carries ICAO codes, runway values, module and lesson codes and readouts, which is the right assignment; confirm its zero and capital O, and its 1, l and I, at `readout-sm` (14 px) and in Night. Where Instrument Sans sets identifiers in prose (a runway number inside a sentence), check the same pairs at 16 px.
:::

### What this means for Learn to Fly

LTF's type stock is already economical: one reading face and one measuring face, with their jobs documented (TYP-010). The decisions this chapter settles are mostly about integrity and testing. Load the styles the product uses, starting with italic, or stop using italic (TYP-011). Keep widget labels in true proportions (TYP-012). If the display face is revived, choose it against TYP-013 and TYP-016, at small and large sizes, in Day and Night, and give it a token and a job.

Do not reopen the choice of Instrument Sans on serif-versus-sans grounds (TYP-015). Reopen it, if at all, on its rhythm in real lessons and on its character distinctness (TYP-016, TYP-017), and on voice, which Part XX, Brand Identity and Distinctiveness, treats. A face that is "a close relative in feel" of Inter, as the dossier describes Instrument Sans, contributes to the generic look the owner dislikes; that is a brand argument, not a legibility one, and it should be made as such.

Finally, treat the instrument drawings as type. Their numerals, ticks and hairlines are judged by Bodoni's "sharpness and definition" on a 1x screen (TYP-014), and by the same confusable-pairs test as any readout.

## The Measure

### Where the numbers come from

Two printers writing within a few years of each other gave the same figure for the length of a line. Morison, in his rationale of book typography: "The average line of words which the reader's eye can conveniently seize is between ten and twelve," and his summary formula asks for paragraphs of "ten to twelve consistently spaced words" [@morison1936first]. Gill: "the consensus of opinion favours an average of 10-12 words per line"; at fifteen or more words a compositor can have both equal line length and even spacing, but "the best length for reading is not more than 12 words" [@gill1936essay]. Neither cites a source. The agreement is best read as the workshop consensus of the period, not as two independent measurements. A secondary digest of the later Tschichold's essays gives eight to twelve words [@tschichold1991form].

Gill names the failure at each end, which is more useful than the number. A very wide measure involves too much movement of the eye and head and risks "doubling," reading the same line twice, unless lines are separated by leads. A very narrow measure, narrow in relation to the type, cuts phrases and words apart, because "Practised readers do not read letter by letter or even word by word, but phrase by phrase" [@gill1936essay]. Morison ties the variables together: letter size must relate to line length, and when small type is unavoidable, leads prevent doubling [@morison1936first]. Hochuli, in qualitative terms, says the same: lines should not be so long that the eye gets lost nor so short that the text feels jumpy, and longer lines need looser leading [@hochuli2008detail].

Bringhurst restates the target in characters. For a single-column page set in a serif text face at text size, about 45 to 75 characters per line, with 66 (counting letters and spaces) regarded as ideal, and about 40 to 50 for multi-column work [@bringhurst2012elements]. Words and characters agree roughly: in LTF's own lesson corpus a word plus its following space averages about 5.6 characters (a count made for this book over the lesson Markdown in `content/lessons/`), so ten to twelve words is about 56 to 67 characters. Hochuli adds a language effect that matters for an English product: English words are shorter than German ones, so English lines can be shorter for an even, neutral texture [@hochuli2008detail]. Line-length rules imported from German or long-line book settings should not be copied without testing.

### What the experiments add

The experimental record is weaker than the folklore and more interesting. Tinker's print studies, with samples near 2,000 readers per type size, found 10-point type set solid equally legible from 17 to 27 picas, and with 2-point leading from 14 to 31 picas. Very short lines needed more and longer fixations. A 43-pica line raised regressions by 56.7 percent against a 19-pica line, which he ascribes to trouble finding the next line start [@tinker1963legibility]. That is Gill's "doubling" observed in the laboratory.

On screens, Dyson's review found that most studies report faster reading with longer lines, that readers rated 55 characters per line easiest to read though it was not read fastest, and that one study found better comprehension at 55 than at 100 characters per line. She argues that characters per line, not physical width, is the variable that matters, because saccade size is consistent in characters, and she notes that no upper limit has been identified [@dyson2004physical]. The studies are from the 1980s and 1990s, with 18 to 48 participants, on small, low-resolution screens.

So the craft figure is a comfort and comprehension judgment with partial experimental support, not a speed law. Readers prefer moderate lines, comprehension may favor them, and speed may not. For a training product, comprehension is the outcome that counts. Unger's refusal to give formulas for such questions is the right posture [@unger2018theory]: adopt the range as a default and check it with learners.

::: {.rule #TYP-018 grade="B"}
**Keep lesson and long-form prose between about 45 and 75 characters per line, aiming near 60 to 66, at every viewport width.** The craft range comes from Morison and Gill (ten to twelve words) [@morison1936first; @gill1936essay] and Bringhurst (45 to 75 characters) [@bringhurst2012elements]. Screen studies found readers rating about 55 characters easiest, and one found better comprehension at 55 than at 100, while longer lines were sometimes read faster [@dyson2004physical]. Long lines raise regressions in print [@tinker1963legibility]. The range is a comprehension and comfort default; it is not a speed optimum.

*In LTF:* `LessonPage` places `MarkdownContent` (16 px) in an `article` capped at `max-w-[800px]`. Measured against the shipped Instrument Sans file (see TYP-019), that column holds about 93 characters at `xl` and up to about 112 between `md` and `lg`, close to 20 words a line. Narrow the lesson text column to the measure token, redefined per TYP-019.
:::

### The `ch` trap

The web has a unit that looks as though it counts characters and does not. The CSS `ch` unit is the advance width of the zero in the current font. In a monospaced face that is every character's width. In a proportional face the zero is usually one of the wider glyphs, so a line set to a given number of `ch` holds more characters of ordinary text than the number suggests.

LTF's measure token shows the effect. `tokens.css` defines the `container-measure` token as 68ch, used by `Prose` through `max-w-measure`. Inspecting the shipped Instrument Sans file (`instrument-sans-latin-wght-normal.woff2`) for this book gives a zero advance of 0.666 em. The average advance over the lesson corpus, ignoring kerning, is about 0.447 em. A 68ch line therefore holds about 68 × 0.666 ÷ 0.447, or roughly 100 characters of lesson text, in `body-lg` or at any other size, since both quantities scale with the font size. The design system's stated measure is close to Bringhurst's ideal in name and near the top of Dyson's tested range in fact.

The correction is simple arithmetic in the same face. For 66 characters of real text the token should be about 44ch; for the 45 to 75 range, about 30 to 50ch. These figures hold only for Instrument Sans and only for English text with a similar letter mix. A different face, or a fallback font while the web font loads, changes them, which is a reason to verify by counting rather than to trust a unit.

::: {.rule #TYP-019 grade="C"}
**Define the reading measure by counting characters of real text in the actual face, and do not assume that a width in `ch` equals that many characters.** Dyson identifies characters per line as the variable that matters [@dyson2004physical]; Bringhurst counts letters and spaces [@bringhurst2012elements]. The `ch` unit measures the zero, which in Instrument Sans is about 0.666 em against an average of about 0.447 em for lesson text (measured for this book from the shipped font file). Craft rule applied with a measurement.

*In LTF:* change the `container-measure` token from 68ch to about 44ch and move lesson text onto `max-w-measure`. Add a unit test or a Playwright check that renders a known lesson paragraph and asserts the characters per line fall in the 45 to 75 range at `sm`, `lg` and `xl`. If the face changes, recompute.
:::

### Narrow measures: phones, rails and cards

Gill's warning about narrow measures is the half of his argument that web designers forget. When a column gets narrow relative to the type, phrases break apart [@gill1936essay]. On a 375 px phone with LTF's `px-4` gutters, the lesson column is about 343 px wide, which at 16 px Instrument Sans holds roughly 48 characters (same estimate). That is inside the range and needs no change. The narrow measures that do fall short are elsewhere: a 280 px glossary rail, a `Callout` set side by side with another in `BriefTab`, a 360 px `Toast`, a challenge card in a three-column grid, a `Card` with `p-5` padding inside an already narrow column.

The cure for a measure that is too narrow is not smaller type. Morison relates letter size to line length [@morison1936first], and shrinking type to fit more words reduces legibility to solve a layout problem. Reflow the layout instead: stack the side-by-side callouts below `lg`, or let the text run under the icon instead of beside it.

::: {.rule #TYP-020 grade="C"}
**When a text column falls below about 40 characters, change the layout (stack, widen, remove side padding) rather than reducing the type size.** Gill says narrow measures cut phrases apart [@gill1936essay]; Morison ties letter size to line length [@morison1936first]; Bringhurst gives about 40 to 50 characters for multi-column work [@bringhurst2012elements]. Craft consensus.

*In LTF:* the side-by-side `safety` and `tip` `Callout`s in `BriefTab` and any two-column callout layout should stack below `lg`. The `Callout` grid (`grid-cols-[20px_1fr] gap-3`, `px-5`) costs about 64 px of the column; in narrow containers let the title row carry the icon and the body use the full width.
:::

### One column for prose

The columns study in Dyson's review found a single column of about 80 characters per line, paged, read faster than three columns of about 25 characters, with no difference in comprehension, though the advantage held only for the youngest age group [@dyson2004physical]. Bringhurst's lower range for multi-column work, 40 to 50 characters, exists because columns force short lines [@bringhurst2012elements]. A web page that scrolls has little reason to split prose into columns at all, since the reader cannot see the bottom of the first column and the top of the second together.

::: {.rule #TYP-021 grade="B"}
**Set lesson and long-form prose in a single column; use multiple columns only for short, independent items such as cards, definitions or FAQ entries.** Short columns were read more slowly than a single moderate column in the study Dyson reviews [@dyson2004physical], and craft practice shortens the measure for columns [@bringhurst2012elements]. One study, with an age-limited effect.

*In LTF:* `MarkdownContent` is single column; keep it. The landing "Questions" `dl` (`md:grid-cols-2`) is acceptable because each item is short and independent. Do not set lesson paragraphs, `Prose` legal text or challenge procedures in CSS columns.
:::

### Measures for text that is not prose

Bringhurst's range is for continuous prose in a serif text face [@bringhurst2012elements]. Much of LTF is not prose: checklist steps, table cells, labels, readouts, quiz options, step lists in `FlyPanel`. These have different needs. A checklist step is read as a unit and acted on, so its length is set by its content, and a break in the middle of a step is worse than a long line. A table column should be sized to its content, not stretched to the full width of the page; Rutter's treatment of tables, drawing on the tradition, says the same [@rutter2017web]. A quiz option is short and should not wrap at all if it can be avoided.

::: {.rule #TYP-022 grade="C"}
**Apply the prose measure only to prose: size table columns to their content, keep checklist steps and quiz options on as few lines as their content allows, and never stretch a table to fill the page.** Bringhurst's range is defined for continuous text [@bringhurst2012elements]; Rutter advises sizing columns to content and not stretching tables full width [@rutter2017web]. Craft consensus.

*In LTF:* the `MarkdownContent` table renders `w-full` inside a bordered scroll region; drop `w-full` so short tables take their natural width. The `SpeedsPage` table and `BriefTab` scoring `Table` should keep numeric columns narrow. In `FlyPanel`, a step row at `text-lg` (and larger in `FlyPanel large`) may exceed 75 characters on a wide screen; that is acceptable because each step is one unit.
:::

### What this means for Learn to Fly

The measure is the single largest classical-typography defect in the product as built. The design system defines a measure, but lessons do not use it, and the measure it defines is wider than its name. Lesson text at `xl` runs about 93 characters and between `md` and `lg` about 112, or close to twenty words, against a craft range of ten to twelve words and an experimental preference near 55 characters (TYP-018).

The fix is three changes. Redefine the `container-measure` token in characters of real text, about 44ch for Instrument Sans (TYP-019). Apply `max-w-measure` to the lesson prose blocks inside `LessonPage`, letting widgets, tables and figures run to the full 800 px article width where they need it, so that the reading line and the figure width are separate decisions. Then reconsider the reading size: with a 44ch measure, the 18 px `body-lg` that `Prose` uses may suit lessons better than the 16 px they inherit, a question Part III, Legibility and the Science of Reading, should settle with its size evidence.

Keep the phone layout, which is already in range, and fix the narrow cases instead: stacked callouts, padded cards and rails (TYP-020). Keep prose single-column (TYP-021), and let non-prose content follow its own logic (TYP-022). Add a measurement test so that the measure cannot drift unseen when a face, a size or a padding changes.

## Leading and Vertical Motion

### The basic unit

Bringhurst opens his treatment of vertical space with a definition and a duty: "This unit is the leading, which is the distance from one baseline to the next," and the designer should choose a basic leading that suits the typeface, the text and the measure (his section 2.2.1) [@bringhurst2012elements]. The three dependencies are the substance of the rule. A face with a large x-height looks tighter at the same leading than one with a small x-height; a dense technical text needs more air than a light narrative; a long line needs more leading than a short one.

The term is a survival from metal type, where strips of lead were inserted between lines. Morison spends a passage defending the practice against purists who preferred solid setting. When small type is unavoidable, he says, leads should be inserted to prevent "doubling," the reading of the same line twice [@morison1936first]. Gill makes leads the remedy for the wide measure: a very wide measure risks doubling "unless" the lines are separated by leads [@gill1936essay]. Hochuli states the relation in his own qualitative terms: longer lines need looser leading [@hochuli2008detail].

The experimental record supports the relation and limits it. Tinker found that 10-point type set solid was equally legible from 17 to 27 picas, and with 2-point leading from 14 to 31 picas [@tinker1963legibility]. Leading, in other words, widened the band of line lengths that read well. He also found leading mattered more for small type than for 12-point, and he published "safety zones" by size, for example 10-point in 19-pica lines with 2 to 4 points of leading. These are print measurements, and their figures do not transfer to screens directly, but the direction does: leading and measure trade against each other.

::: {.rule #TYP-023 grade="B"}
**Set leading in proportion to the measure: when a column gets longer, increase the line height, and when it gets shorter, the line height may tighten.** Morison and Gill prescribe leads against doubling on long lines [@morison1936first; @gill1936essay], Hochuli says longer lines need looser leading [@hochuli2008detail], and Tinker found leading widened the range of legible line widths [@tinker1963legibility]. Print evidence from large samples; the screen values belong to Part IV.

*In LTF:* lesson text inherits the global 16/26 (1.625) from `index.css`. At the current 93 to 112 characters, that leading is doing the work Gill describes, holding a too-long line together. When the measure is narrowed per TYP-019, keep 1.625 at first and evaluate whether 1.5 to 1.6 reads better at 44ch; do not tighten both at once.
:::

### Leading is not a cure for small type

Tinker's data contain a finding that limits how far leading can be pushed. Eight-point type with 2-point leading was not read faster than 10-point type set solid [@tinker1963legibility]. Space between lines does not make up for letters that are too small. The craft writers agree in their own way. Morison allows leads for small type to prevent doubling, but his formula asks first for type of "comfortable size and familiar design" [@morison1936first].

The finding matters most in the parts of LTF that use small text densely: `text-sm leading-5` (14/20) metadata rows, `body-sm` (14/20) supporting text, the `eyebrow` (12/16), `Badge` text (`text-xs`), the card meta rows on `ChallengesPage`. These are short strings, not paragraphs, so doubling is not the risk. The risk is a designer making a sentence or a paragraph small and compensating with generous line height. A `text-sm` paragraph of instructions under a field, or a long `Toast` description, is that case.

::: {.rule #TYP-024 grade="B"}
**Do not set multi-sentence text below the body size and rely on extra leading to make it readable; if it is long enough to need leading, it is long enough to need body size.** Tinker found 8-point type with 2-point leading no faster than 10-point set solid [@tinker1963legibility]; Morison asks for type of "comfortable size" first [@morison1936first]. Print evidence.

*In LTF:* `FormField` hints, `Toast` descriptions, `EmptyState` messages and the hero note under the landing buttons are `text-sm` (14 px). Keep them to a sentence or two. Anything longer, such as the `SignupBanner` copy, the `UnverifiedWarning` body or a long field hint, goes to body size.
:::

### Unitless leading on the web

Bringhurst's book is a print manual. The web adaptation of it (which keeps his section titles) adds a warning that matters on screens: fixed leading breaks when users enlarge text, and web text often needs more space than print [@bringhurst2012elements]. A line height written in pixels does not grow when a learner sets a larger default font size in the browser. A unitless ratio does. LTF's global line height is already unitless (1.625), and the type utilities in `index.css` set paired pixel values (`display-xl` 64/64, `body-lg` 18/29, `label` 14/20). Those pairs are fixed in pixels, so a learner who enlarges text by changing the browser's default size keeps the 16 px root (`html { font-size: 16px }`) and gets no larger type at all, which is a Part XXV, Accessibility, concern. Within the classical frame the point is narrower: leading belongs to the style as a ratio.

::: {.rule #TYP-025 grade="C"}
**Express each text style's leading as a unitless ratio of its size, chosen for its face and measure, and keep one leading per style.** Bringhurst defines a basic leading that suits face, text and measure, and the web adaptation warns that fixed leading breaks under text enlargement [@bringhurst2012elements]. Craft consensus.

*In LTF:* rewrite the `index.css` utilities as size plus ratio (for example `body-lg` 18 px at about 1.61, `display-xl` 64 px at 1.0) so that they scale together. Remove raw `leading-5` and `leading-6` from components and let the style carry its leading.
:::

### Display leading and the clearance test

Headings are set tighter than text. LTF's base rule gives `h1` to `h4` a line height of 1.25 with `text-wrap: balance`, and the display utilities go further: `display-md` 32/36 (1.125), `display-lg` 44/48 (about 1.09), `display-xl` 64/64 (1.0). Tight leading at large sizes is normal practice, because the space between lines grows with the size even at a ratio of 1, and because display lines are few.

Johnston supplies the limit. In his handbook writing lines are usually set about three times the height of the letter o apart, kept "as close together as is compatible with legibility," with descenders clearing the ascenders of the line below [@johnston1906writing]. The rule was written for the pen, and the figure does not transfer to type as a measurement, but the clearance test does. At a line height of 1.0 in a face whose ascenders and descenders together exceed the em, a descender can touch the next line's ascender. The landing h1 "Yes, you can fly a plane." is set `display-xl` in a `max-w-[12ch]` box, so it breaks across two or more lines; its y and p descend toward the ascenders of the line below. Whether they collide depends on the face's vertical metrics and the break, and the test is to look at the rendered heading at each breakpoint.

It is a curious coincidence, worth recording and not worth building on, that Johnston's three o-heights applied to Instrument Sans (x-height 0.51 em in the shipped file) gives a line spacing of about 1.53, close to the body leading LTF uses.

::: {.rule #TYP-026 grade="C"}
**For any heading or label that can wrap, check at every breakpoint that descenders clear the ascenders of the next line, and loosen the leading of that style if they do not.** Johnston sets lines "as close together as is compatible with legibility," with descenders clearing ascenders [@johnston1906writing]. Craft rule, tested by looking.

*In LTF:* check `display-xl` (64/64) on the landing hero, `display-lg` on the reference hub, and the lesson h1 (`text-3xl` to `text-4xl` at Tailwind's default leading) with the longest real lesson titles. Check the same in dense instrument labels and the `sectional-legend` chart text, where labels stack.
:::

### Space that scales with the type

Johnston measures spacing with the letters themselves: "The average space between two words is the width of the letter o," and line spacing in o-heights [@johnston1906writing]. Bringhurst calls the em "a sliding measure" [@bringhurst2012elements]. The shared idea is that spacing in text is a property of the type, so it should be expressed in units that move with the type. On the web that means em-based (or ratio-based) spacing for anything that sits inside text: paragraph spacing, list indents, the gap between a heading and its first paragraph, the padding inside an inline code chip.

LTF mixes the two. `Prose` uses `my-4` paragraphs and `mt-10 mb-3` headings (Tailwind spacing in rem, which scales with the root but not with the element's own size); `MarkdownContent` uses `my-3` paragraphs and `mt-12 mb-3` headings; the inline code chip uses `px-1 py-0.5` with `text-[0.9em]`. The values are reasonable, but they are tied to the root size, so text set larger (Fly mode's `text-xl` base, or `FlyPanel large`) keeps the same gaps between its larger lines.

::: {.rule #TYP-027 grade="C"}
**Express spacing that belongs to text (paragraph gaps, heading spacing, list indents, inline chips) in units relative to the text's own size, so that larger text gets proportionally larger gaps.** Johnston measures word and line spacing in letter widths and heights [@johnston1906writing]; Bringhurst treats the em as a sliding measure [@bringhurst2012elements]. Craft consensus.

*In LTF:* convert the paragraph and heading margins in `MarkdownContent` and `Prose` to `em` values (for example a paragraph gap of about 0.75 em and a heading top margin of about 2 em), and use the same values in `FlyModePage`, so that its 20 px base gets matching air without a separate set of classes.
:::

### Vertical rhythm between blocks

The leading of a line is one unit of vertical motion; the gaps between blocks are another. Bringhurst's chapter on rhythm treats both as part of one system [@bringhurst2012elements]. A lesson in LTF is a stack of heterogeneous blocks (markdown, heading, callout, image, video, quiz, widget, checklist), and each has its own top and bottom spacing set in its component. When those spacings are unrelated, the page has no rhythm: a callout sits 16 px below one paragraph and 24 px below another, a quiz card sits closer to the heading above it than to the paragraph it tests.

Classical typography offers the principle, not a figure. Spacing between elements should follow from their relation: things that belong together sit closer than things that do not, and the same relation always gets the same space. Part V, Grids, Layout and Space, gives the layout system; here the requirement is that the text column's vertical spacing come from a small set of values tied to the body leading.

::: {.rule #TYP-028 grade="C"}
**Space lesson blocks from a small set of values derived from the body leading, and give the same relation (paragraph to paragraph, heading to its text, text to callout, text to widget) the same space everywhere.** Bringhurst treats horizontal and vertical motion as one proportional system [@bringhurst2012elements]. Craft consensus.

*In LTF:* define three block gaps in `tokens.css` as multiples of the 26 px body line (for example one line between paragraphs, one and a half above a callout or quiz, two above a block heading) and have `LessonRenderer` apply them, instead of each block component setting its own `my-*`.
:::

### What this means for Learn to Fly

LTF's leading is mostly sound. The 1.625 body leading suits a long measure, headings are tighter, and display leading is tighter still, which is normal practice. The defects are structural. Leading and spacing are written as fixed pixel pairs and Tailwind steps, so they do not scale with the type (TYP-025, TYP-027); small text is sometimes asked to carry paragraphs (TYP-024); and lesson blocks each set their own spacing, so the page has no shared rhythm (TYP-028).

The order of work matters. First narrow the measure (TYP-019). Then revisit the body leading against the new measure, changing one variable at a time (TYP-023). Then convert the type utilities to ratios and the in-text spacing to em values, and give `LessonRenderer` a shared set of block gaps. Check every multi-line display style for descender clearance with real titles (TYP-026), starting with the landing hero, which is the first thing a visitor reads.

## Word Space, Justification and the Ragged Edge

### The Procrustean bed

Gill's chapter on justification takes its title from the composing stick, "The Procrustean Bed," which forces every line to the same length [@gill1936essay]. His argument is the clearest in the tradition. A ten-to-twelve-word line is short for a compositor, and on a short line equal length and even spacing conflict: to fill the line exactly, the compositor must widen or squeeze the spaces between words. Gill's resolution is to choose even spacing and let the right edge be ragged, compromising only so far as the spacing stays visibly even. Lines of unequal length are not in themselves objectionable; uneven spacing is. He calls equal line length "a laudable appetite" that "has become somewhat of a Superstition," and says a page of equal lines "partakes too much of the ideas of those who regard books as things to be looked at rather than read." The book demonstrates its own argument. Its 1936 edition, hand-set in Gill's own Joanna at 12 point with 3 point leading, sets the first two pages of the justification chapter justified and the rest unjustified [@gill1936essay].

De Vinne, writing as a compositor's teacher, had reached the same priority from the shop floor. Composition is made more pleasing "when the spaces between words seem to be of the same width in all lines on the page," and lines thick-spaced at one side and thin at the other are "a disgrace to the printer" [@devinne1910practice]. He names the result of forced justification "hounds'-teeth," irregular white gaps running across lines, "more offensive to the reader than any strangeness of division." The modern name is rivers.

Hochuli carries the argument into English setting. Because English uses less hyphenation than German, line breaks are less flexible, and his reviewer reports the consequence: "an editorial designer can achieve a better result with ranged text than with justified text" [@hochuli2008detail]. The typefoundry summary of his guidance adds that overly wide word spaces disrupt reading and that letterspacing should not be varied to justify lines.

### Criticism of the ragged case

The ragged-right argument is not unanimous, and its best critic is Gill's own editor. Christopher Skelton's introduction to the reprint grants that the case for close word spacing "has long since been recognised," but observes that Gill's ragged pages need as many word breaks as ordinary setting, "some of them very dubious," and asks whether, "if Gill had used the same treatment with justified setting," any unevenness of word spacing would be noticeable [@gill1936essay]. Skelton also notes Gill's habitual disparagement of the industrial system: his preference for the hand was a moral position as well as a typographic one.

The criticism matters for screens in a specific way. Gill's ideal was a skilled compositor making each line's spacing even by judgment. Browsers justify by distributing space mechanically, and their hyphenation depends on language dictionaries of uneven quality. Hochuli's reviewers note that the guidance on hyphenation and ragged setting depends on language and on the quality of the hyphenation available, which is a different situation from a fixed page [@hochuli2008detail]. The craft verdict for screens is therefore stronger than for print: a skilled hand might make justified English even, but a browser cannot be relied on to. Whether ragged-right is more readable than justified text is an empirical question for Part III and Part IV; this chapter grades the rule on craft grounds.

::: {.rule #TYP-029 grade="C"}
**Set all lesson, reference and interface text flush left and ragged right; do not justify text anywhere in the product.** Gill chooses even word spacing over equal line length [@gill1936essay], De Vinne calls uneven spacing "a disgrace" and its rivers "more offensive to the reader than any strangeness of division" [@devinne1910practice], and Hochuli's English edition favors ranged text [@hochuli2008detail]. Skelton's objection [@gill1936essay] applies to skilled hand justification, not to a browser. Craft consensus; the experimental question is open.

*In LTF:* no component uses `text-justify` or `text-align: justify` today. Keep it so, and add a lint or stylesheet check that rejects justification in `src/`.
:::

### How wide a word space

The word space is the oldest unresolved question in the craft, and the sources record the dispute rather than settling it. De Vinne, for hand-set lowercase, gives the three-to-em space as the most used in solid composition and the en quadrat for wide-leaded matter, and disapproves em-quad spaces ("pigeonholing") [@devinne1910practice]. A footnote records that "several eminent disciples of the fifteenth-century school of typography" used only a thin space. Half a century later Dowding, from the private-press line of Morris, the Doves Press and J. H. Mason, argued for close spacing: widely spaced lines look grey, and quoting Tschichold, spacing should be "about a middle space or the thickness of an 'i' in the type size used," text closely spaced "and not en or em quadded" [@dowding1954finer]. The digest of the later Tschichold's essays gives "three-to-em or even more compressed" [@tschichold1991form]. Johnston, from the pen, gave the width of the letter o [@johnston1906writing].

Bringhurst's section 2.1.1 resolves the dispute in the only defensible way: define the word space to suit the size and natural letterfit of the font. "A loosely fitted or bold face will need a larger interval between the words," and tighter letterfit at larger sizes allows tighter word spacing [@bringhurst2012elements]. On the web, the font designer has already chosen the word space for the face's fit; the shipped Instrument Sans file sets its space at 0.2 em, a third of an em, which is De Vinne's three-to-em. Unger's refusal of a formula for the balance of positive and negative space applies here [@unger2018theory]: no number is correct in general, and the font's own choice is the best default available.

There is one exception the sources agree on. Capitals need wider word spaces than lowercase (see the chapter on capitals).

::: {.rule #TYP-030 grade="C"}
**Use the word space the font designer built into the face for lowercase text, and do not adjust `word-spacing` or `letter-spacing` on running text to change line fit or texture.** Bringhurst ties word space to the face's size and letterfit [@bringhurst2012elements]; the historical figures conflict [@devinne1910practice; @dowding1954finer; @tschichold1991form; @johnston1906writing], and no formula exists [@unger2018theory]. Hochuli advises against varying letterspacing to fit lines [@hochuli2008detail]. Craft consensus.

*In LTF:* lesson text uses Instrument Sans's own 0.2 em space; keep it. Remove `tracking-[0.02em]` from mixed-case `Badge` labels and `tracking-wide` from any mixed-case label; positive tracking belongs only on capitals (TYP-034).
:::

### One space between sentences

Bringhurst's section 2.1.4 is brief: use a single word space between sentences [@bringhurst2012elements]. Dowding's private-press rules went the other way from any wide sentence space: he would omit the space after a full point altogether when the next word starts with A, J, T, V or Y [@dowding1954finer]. That last rule is a good example of a craft preference that defeats itself. Roy Johnson's review of the 1995 revision accepts the book's authority but rejects the full-point rule, which he says may sacrifice legibility for color and so "defeats what he wanted to achieve" [@dowding1954finer]. In a training product, where the learner must find sentence boundaries in instructions, a missing space after a full stop is an error, not a refinement.

HTML collapses runs of spaces, so a double space typed in Markdown renders as one. LTF's lesson sources contain no double spaces after full stops (a search for this book found none), so the rule costs nothing today and should be protected.

::: {.rule #TYP-031 grade="C"}
**Use exactly one word space after a sentence, and never remove the space after a full stop for optical reasons.** Bringhurst prescribes a single word space between sentences [@bringhurst2012elements]; Dowding's rule of omitting it before certain capitals is rejected by his own reviewer as defeating legibility [@dowding1954finer]. Craft consensus.

*In LTF:* add a `content:validate` check that flags two or more spaces after sentence punctuation and any full stop followed directly by a capital letter in lesson prose.
:::

### Hyphenation and the broken word

De Vinne's position on word division is a balance: words "always appear better unbroken, but the breaking of words may not be so unsightly as the breaking up of a general uniformity of the spacing between words" [@devinne1910practice]. He quotes Horace Hart's rule for divisions at Oxford, that the part left at a line end should suggest the part carried over, and he records that American and British houses divide differently ("moth-er" against "mo-ther"). Dowding prefers breaks to wide spaces, calling it "infinitely preferable to have a number of break lines succeeding each other" than widely spaced lines [@dowding1954finer]. Hochuli advises frequent hyphenation where justified text would otherwise space widely [@hochuli2008detail].

All of this is advice for justified text, where hyphenation buys even spacing. In ragged-right setting the trade is different: a ragged line can simply end early, so hyphenation buys only a smoother right edge. For LTF that is a poor trade. Lesson text is full of technical words a beginner is learning (carburetor, magneto, mixture, annunciator), identifiers, and numbers with units. A browser hyphenating "carbu-retor" across a line, or splitting a unit from its value, adds a reading task at the moment the learner is meeting the word. Hart's rule is not something a browser dictionary can apply.

::: {.rule #TYP-032 grade="C"}
**Leave automatic hyphenation off in ragged-right lesson and interface text, and never let a line break separate a value from its unit, an identifier's parts, or a hyphenated term from its context.** De Vinne and Dowding accept division to preserve even spacing in justified text [@devinne1910practice; @dowding1954finer], a reason that does not apply to ragged setting (TYP-029). Hart's rule that the first part should suggest the second requires judgment a browser lacks [@devinne1910practice]. Craft reasoning.

*In LTF:* keep CSS `hyphens` at its default (manual). In content, join values and units with a no-break space where the line could split them (the `{{vspeed.*}}` and `{{aircraft.*}}` token output is a good place to add it once), and keep runway and frequency identifiers unbroken.
:::

### Breaking short text by sense

Gill's observation that "Practised readers do not read letter by letter or even word by word, but phrase by phrase" [@gill1936essay] has a corollary for short text. In a heading, a button, a checklist step or a quiz stem, where there are only two or three lines, the place a line breaks is part of the meaning. A heading that breaks after its first word, or a checklist step that leaves a single word on its second line, makes the reader reassemble a phrase the typographer broke. Warde's complaint about a line "that looks like one long word" [@warde1955crystal] is the opposite failure, and both come from treating short text as if it were a paragraph.

LTF already applies `text-wrap: balance` to `h1` through `h4`, which evens the lengths of a wrapped heading's lines. That is a good default for headings. It does not break by sense; it breaks by length. For the shortest, highest-stakes strings (checklist steps in `FlyPanel`, the challenge `Goal`, quiz prompts), authors should check the break at the widths the learner will see.

::: {.rule #TYP-033 grade="C"}
**Treat line breaks in headings, checklist steps, quiz stems and button labels as part of the copy: balance headings, avoid a single word alone on a last line, and check the breaks at phone and desktop widths.** Gill's phrase-reading argument [@gill1936essay] and Warde's warnings about misleading lines [@warde1955crystal] apply most where text is short. Craft consensus.

*In LTF:* keep `text-wrap: balance` on headings. Add `text-wrap: pretty` (or the equivalent no-orphan treatment) to `QuizBlock` prompts, `FlyPanel` step text and `Callout` titles, and review them in Fly mode at the `text-lg` and `FlyPanel large` sizes.
:::

### What this means for Learn to Fly

The product already sets everything ragged right and has no justified text, which is the most important decision about word space and alignment (TYP-029). Keep it, and protect it with a check. The font's own word space is in use, which is correct (TYP-030), but a few mixed-case labels carry tracking that belongs only on capitals; remove it.

The remaining work is in content and in short strings. Make the content validator enforce one space between sentences and catch missing spaces (TYP-031). Keep hyphenation off and bind values to units with no-break spaces, ideally in the token renderer so authors do not have to remember (TYP-032). Extend the heading treatment to the short strings a learner acts on, checklist steps and quiz stems first (TYP-033), and review their breaks at the widths Fly mode uses, since the learner reads those strings in a glance, beside the sim.

## Capitals, Small Capitals and Letterspacing

### Capitals need room

The craft sources are unusually unanimous on one micro-typographic point: strings of capitals need more space than lowercase. De Vinne gives the reason in metal terms. Capitals are about twice as high and wide as round lowercase letters, so they need word spaces "twice as wide" and leads "twice as thick"; the en quadrat is the least permissible word space in capitals [@devinne1910practice]. Bringhurst's section 2.1.6 makes it a rule: letterspace all strings of capitals and small caps, and all long strings of digits [@bringhurst2012elements]. The digest of the later Tschichold says roman capitals are always letterspaced [@tschichold1991form]. Warde, in her list of failures, names capitals "jammed together without hair spaces" as a cause of "subconscious squinting" [@warde1955crystal].

The reason is visible in any face. Lowercase is spaced by its designer for lowercase: the sidebearings that make n, o and e sit evenly in a word are set for the lowercase rhythm. Capitals have larger, more varied internal and external spaces (the open sides of L, T, A, V, the closed rounds of O), and set at the lowercase fit they look cramped and uneven. Tracy's spacing method, as reported, uses H and O as the control letters for capitals precisely because capitals need their own spacing logic [@tracy1986letters].

::: {.rule #TYP-034 grade="C"}
**Add positive letterspacing to every string set in capitals (labels, badges, eyebrows, uppercase buttons), and never to lowercase or mixed-case text.** De Vinne, Bringhurst, the later Tschichold and Warde all require letterspaced capitals [@devinne1910practice; @bringhurst2012elements; @tschichold1991form; @warde1955crystal]; Tracy treats capital spacing as its own system [@tracy1986letters]. Craft consensus.

*In LTF:* the `eyebrow` utility (12 px, 600, 0.08em, uppercase) and the tier `Badge` pills (0.08em, uppercase) follow this rule; keep them. The mixed-case `Badge` (`tracking-[0.02em]`) and `tracking-wide` on mixed-case labels break it; remove the tracking there.
:::

::: {.rule #TYP-035 grade="C"}
**Widen the word space in all-caps strings as well as the letterspacing, so that words in a capital label stay separate.** De Vinne asks for word spaces "twice as wide" in capitals [@devinne1910practice]; Warde warns against setting that lets three words read as one [@warde1955crystal]. Craft consensus.

*In LTF:* letter-spacing adds space after every character, including the word space, so a 0.08em track widens word spaces only slightly. For multi-word eyebrows such as "Free · Public beta · Cessna 172 Skyhawk · MSFS 2024" the middle dots carry the separation; for multi-word all-caps labels without separators, add `word-spacing` of about 0.1 to 0.2 em in the `eyebrow` utility and test it.
:::

### All capitals in running text

The experimental record on capitals is old, large and consistent. Tinker's summary found that all capitals greatly retarded reading and took at least one-third more space [@tinker1963legibility]. Larson's review reports lowercase read 5 to 10 percent faster than uppercase in two later studies [@larson2005science]. Tinker attributed the cost to the loss of distinctive word shapes; Larson, drawing on later work, rejects word shape and attributes the cost to practice: readers have far more experience with lowercase, and uppercase reading speed rises with practice [@larson2005science].

The disagreement about cause does not touch the practical rule. Whatever the mechanism, a beginner reading a paragraph or a warning in capitals reads it more slowly and needs more space for it. That matters most in LTF where the stakes are highest. Safety notes, `Callout` text, checklist instructions and Fly mode alerts are exactly the places where a designer is tempted to "make it stand out" with capitals.

::: {.rule #TYP-036 grade="A"}
**Never set sentences, paragraphs, warnings or instructions in all capitals; reserve capitals for short labels and for identifiers that are capitals by nature.** All capitals greatly retarded reading and took at least a third more space in Tinker's studies [@tinker1963legibility], and lowercase was read 5 to 10 percent faster in later studies [@larson2005science]. The effect is replicated; its cause (practice rather than word shape) does not change the rule.

*In LTF:* the `safety` `Callout`, the `UnverifiedWarning`, the `FlyPanel` random-event alert (`border-4 border-warn bg-warn-tint`) and `ErrorSummary` must stay in sentence case. Emphasis there comes from the color, the icon, the border and the title, all of which the components already use.
:::

::: myth
**"Readers recognize words by their outline, so all capitals are hard to read because they destroy word shape."** The word-shape account is old (it goes back to Cattell) and Tinker used it to explain his all-caps results [@tinker1963legibility]. The full case, with the studies, is made in Part III, Legibility and the Science of Reading, and is not repeated here.
:::

### Identifiers and abbreviations

LTF's subject matter is full of capitals that are not the typographer's choice. Airport identifiers come in four capitals, many terms are abbreviations (MSL, AGL, KIAS, ATIS, CTAF), and sim and panel labels are often printed in capitals. A search of the lesson Markdown for this book found 1,574 words of four or more capital letters, most of them identifiers and abbreviations of this kind. These are part of what the learner is learning to read, and the product must present them as the learner will meet them.

The craft rule still applies to them. Bringhurst's 2.1.6 covers all strings of capitals, which includes abbreviations inside running text [@bringhurst2012elements]. In print the usual treatment is small capitals with slight letterspacing, so that abbreviations do not shout from the page. The shipped Instrument Sans subset has no small-cap feature (its substitution features, inspected for this book, are only `ccmp`, `liga`, `locl`, `pnum` and `tnum`), so true small caps are not available, and synthesized small caps would be another of Updike's distortions (TYP-011). What remains is letterspacing, applied consistently and automatically.

The second requirement is learnability. De Vinne's warning that small capitals of nine point and smaller "are dense and not easily read" for running titles, and that hair-spacing helps [@devinne1910practice], applies to any small capital string. A beginner meets "CTAF" or "KIAS" as four unfamiliar letters, read letter by letter. Those letters need room and a definition on first use.

::: {.rule #TYP-037 grade="C"}
**Give strings of two or more capitals inside running text a slight letterspacing applied by the renderer, never by authors, and define each abbreviation on first use in a lesson.** Bringhurst letterspaces all strings of capitals [@bringhurst2012elements]; De Vinne finds small capital strings dense without hair-spacing [@devinne1910practice]. Craft consensus; the size of the benefit on screens is untested.

*In LTF:* add a small remark step in `MarkdownContent` that wraps runs of capitals (KIAS, MSL, AGL, ICAO codes) in a span with about 0.03 to 0.05 em of tracking, so authors write plain text. The glossary chips in the right rail already define terms; make sure the first use of each abbreviation in a lesson is either a glossary term or spelled out.
:::

### The smallest capitals

De Vinne's threshold of nine point and smaller [@devinne1910practice] lands, by coincidence of units, exactly on LTF's most common capital label. CSS defines 1 pt as 4/3 px, so the 12 px `eyebrow` is 9 points. The eyebrow is full capitals, not small capitals, at 600 weight with 0.08em tracking, and capitals at 12 px stand about 8.6 px tall in Instrument Sans (cap height 0.72 em in the shipped file). It is at the edge the craft tradition names as dense. That does not make it wrong. It makes its tracking and its weight necessary, and it means the eyebrow should not go any smaller, or be set lighter, or be used for text longer than a few words.

Use is the other issue. The eyebrow-over-heading pattern is the dossier's most common heading pattern (landing sections, `PageHeader`, module and challenge cards, stat tiles, table headers), and it is one of the traits it lists as generic. A small capital label above every heading is the modern form of Warde's running headline: repeated furniture that competes with what it labels [@warde1955crystal]. Where the eyebrow carries information ("Module 3 · Up next", "Challenge C4.3 · Landing"), it is earning its place. Where it repeats what the heading or the page already says, it is noise.

::: {.rule #TYP-038 grade="C"}
**Do not set capital labels smaller than 12 px or lighter than semibold, and use an eyebrow only when it says something the heading does not.** De Vinne finds capitals of nine point and smaller dense [@devinne1910practice], and 12 px is 9 points; Warde warns against repeated furniture that shouts [@warde1955crystal]. Craft consensus.

*In LTF:* keep the `eyebrow` at its current 12 px, 600, 0.08em. Audit its uses: the stat labels, table headers and section eyebrows on `LandingPage` and `DashboardPage` are candidates for removal or for sentence-case labels in `label` (14/20, 500), where the eyebrow repeats the heading.
:::

### Long strings of digits

Bringhurst's 2.1.6 extends letterspacing to long strings of digits [@bringhurst2012elements]. Digits in most proportional faces are designed to sit next to letters, not to each other, and a long run of them (a frequency, a long altitude, a phone number, a date) can clot. LTF handles most numbers that matter by setting them in JetBrains Mono, whose fixed advances (every glyph in the shipped file is 0.6 em wide) space digits evenly by construction. Numbers inside prose, set in Instrument Sans, are the case to watch. They are usually short in lesson text, and for them the better answer is the numeral style discussed in the chapter on figures, not tracking.

::: {.rule #TYP-039 grade="C"}
**Set long strings of digits that the learner must read or copy (identifiers, frequencies, codes) either in the mono face or with slight letterspacing, never tightly in the text face.** Bringhurst letterspaces long strings of digits [@bringhurst2012elements]. Craft consensus.

*In LTF:* the `readout` utilities already put such values in JetBrains Mono; keep that. In `BriefTab`'s "Sim setup" `dl`, where values have copy buttons, every copyable value should be mono.
:::

### What this means for Learn to Fly

LTF's eyebrows and tier badges already follow the oldest rule about capitals (TYP-034): capitals are tracked, lowercase is not, with a few mixed-case exceptions to remove. The product also keeps capitals out of warnings and instructions, and the components carry emphasis by color, icon and border instead; that should become an explicit rule for content authors and reviewers (TYP-036), because content is where capitals creep in.

The new work is in running text and in restraint. Abbreviations and identifiers are the learner's vocabulary; give them light tracking automatically and a definition on first use (TYP-037). Treat the 12 px eyebrow as a floor and use it less (TYP-038): an eyebrow above every heading is one of the generic traits the owner sees, and removing the redundant ones makes the remaining ones informative. Widen word spaces in multi-word capital labels (TYP-035). Leave numbers that must be read exactly in the mono face (TYP-039). And retire word shape from design discussions; it is a myth.

## Scale and Hierarchy

### Don't compose without a scale

Bringhurst's section 3.1.1 is titled as an order: "Don't compose without a scale." The traditional scale of sizes, he writes, "survived with little change and few additions for 400 years," and a designer who wants another may devise one from "a modest set of distinct and related intervals" [@bringhurst2012elements]. The rule has two parts, and both matter. The sizes are few, and they are related, so that the step from one to the next is felt as a step and not as an accident.

Bodoni's specimen book shows the opposite extreme and the reason for the rule. Its first volume runs roman and italic types over 144 pages from small to very large bodies, sometimes with as many as fourteen varieties of the same body in different weights of line [@bodoni1818manuale]. Updike, reading it in 1922, doubted so many near-identical kinds were needed, but approved the finely graduated sizes, which let Bodoni "place on his pages, not approximately, but exactly, the size of type he wished to employ" [@updike1922printing]. The lesson is to choose each size for a purpose and to avoid sizes so close that no reader could tell them apart.

Brown's essay on modular scales gives the modern method: start from the body size and the typeface, multiply and divide by a ratio, and draw sizes from the result [@brown2011more]. He uses the golden mean, warns that the scale is "a tool and not magic," and himself improvises a sidebar size outside it. The notes for this book add a criticism: steep ratios such as the golden mean produce jumps too large at the extremes, and interfaces need intermediate sizes a steep scale does not supply. A gentle ratio and a short list of named exceptions is the practical form. Like every proportional system in the craft, it is a means of consistency, not evidence of legibility.

LTF has a scale and does not use it consistently. `index.css` defines fifteen utilities from `display-xl` (64/64) down to `eyebrow` (12/16). Their steps are irregular: 12, 14, 16, 18, 20, 24, 32, 44, 64 px, ratios from about 1.11 to 1.45 between neighbors, which is not a scale in Bringhurst's sense so much as a list. Meanwhile 138 files use raw Tailwind sizes (`text-sm` 204 times, `text-2xl` 36, `text-xs` 29, `text-lg` 25, `text-xl` 19 and so on), `body-md` is never used, and 34 files use `font-bold` against 29 using the token utilities. The dossier calls this "two typographic dialects."

::: {.rule #TYP-040 grade="C"}
**Draw every text size in the product from a named type token; do not use raw size classes (`text-sm`, `text-2xl`, bracket sizes) in components or pages.** Bringhurst: "Don't compose without a scale" [@bringhurst2012elements]. Bodoni's exact graduated sizes [@bodoni1818manuale; @updike1922printing] and Brown's modular scale [@brown2011more] both treat sizes as chosen, not adjusted. Craft consensus; it is also LTF's own "tokens, not literals" rule applied to type.

*In LTF:* replace the raw size classes in the lesson h1, `ModulePage` and `DashboardPage` h2s (`text-2xl font-bold`), `BriefTab` headings, `QuizBlock` prompts (`text-lg font-semibold`), `FlyModePage` and the result card with the `display-*`, `heading-*`, `body-*` and `readout-*` utilities. Add a lint rule that rejects `text-xs` through `text-6xl` outside `index.css`.
:::

::: {.rule #TYP-041 grade="C"}
**Build the type scale from the body size and one gentle ratio, with any exception named and justified in the token file.** Brown derives sizes from the body size by a ratio and admits improvised exceptions [@brown2011more]; Bringhurst asks for "a modest set of distinct and related intervals" [@bringhurst2012elements]. Craft method with no legibility evidence behind any particular ratio.

*In LTF:* rebuild the `index.css` scale from the reading size (16 or 18 px, as Part III decides) with a ratio near 1.2 to 1.25 for text and heading steps, and treat `display-lg` and `display-xl` as named display exceptions. Merge or remove styles that sit too close to each other: `body-sm` (14/20, 400) and `label` (14/20, 500) differ only in weight; `heading-sm` (16/22) sits at body size.
:::

### Hierarchy comes from content

Tschichold's 1928 handbook gives the clearest account of where typographic hierarchy should come from: "Every part of a text relates to every other part by a definite, logical relationship of emphasis and value, predetermined by content" [@tschichold1995new]. The typographer expresses that relationship through type size and weight, the arrangement of lines, color and photography, and must study "how his work is read and ought to be read." The method is the reverse of styling by habit. First rank the content; then give each rank a treatment; then check that the treatments are distinguishable and that nothing outranks what it should not.

Bodoni's first head of beauty, regularity as "conformity without ambiguity, variety without dissonance" [@bodoni1818manuale], is the test the result must pass. Conformity without ambiguity means the same rank looks the same everywhere: a reader who has seen one section heading recognizes the next one on another page. Variety without dissonance means the ranks differ enough to read as ranks and not so much that they clash. De Vinne's observation that readers notice inconsistency, that "the reader of to-day is more or less a critic of style in type-setting," is the reason this matters [@devinne1910practice].

LTF fails the conformity test across pages. The dossier records that h2 is 24 px at 700 on app pages, 32 to 44 px at 600 to 700 on the landing page, and 20 px at 600 on the reference hub; the lesson h1 is 30 to 36 px at 700 while the `PageHeader` h1 is 32 px at 600; the 404 and error h1s are `text-3xl font-bold`. A learner moving from the curriculum to a module to a lesson to a challenge sees four different heading systems.

::: {.rule #TYP-042 grade="C"}
**Give each heading level one style per surface class (reading, interface, display), and use that style on every page of the class.** Tschichold derives hierarchy from content relationships that are the same wherever they occur [@tschichold1995new]; Bodoni's regularity requires "conformity without ambiguity" [@bodoni1818manuale]; De Vinne notes that readers notice inconsistency [@devinne1910practice]. Craft consensus.

*In LTF:* on reading and interface pages, make the page title `display-md` (as `PageHeader` does) everywhere, including `LessonPage`, `NotFoundPage` and `RootErrorPage`; make section headings `heading-lg` on `ModulePage`, `DashboardPage`, `BriefTab` and in lesson block headings; make sub-headings `heading-md`. The landing page is display and may use the larger sizes.
:::

::: {.rule #TYP-043 grade="C"}
**Before styling a page, list its elements in rank order and give adjacent ranks treatments a reader can tell apart at a glance; if two ranks cannot be told apart, merge them.** Tschichold asks the typographer to express "a definite, logical relationship of emphasis and value" [@tschichold1995new]; Updike doubted the need for many near-identical kinds of the same size [@updike1922printing]. Craft method.

*In LTF:* the lesson head stacks a mono accent label ("Lesson 0.1"), the h1, a meta row, the `UnverifiedWarning`, the `SignupBanner`, a resume bar, the objectives `Card` and the mobile section `Select` before the first paragraph. Rank them. The h1 and the first paragraph are first and second; the sign-up prompt and resume bar are not third and fourth, and their tinted boxes should not outrank the objectives.
:::

### How large a heading

Morison gives a number for the largest line on a title page: no larger than twice the text size ("If the book be set in 12-point, the title need be no larger than 24-point") [@morison1936first]. The rule was written for books, and a web page is not a title page. But its reasoning applies to any surface where reading is the main task. A heading that is far larger than the text it introduces pulls the eye away from the text and spends vertical space a reader must scroll through to begin.

LTF's lesson h1 is `text-4xl` from `sm`, 36 px against a 16 px body, 2.25 times. Block headings are `text-2xl` (24 px, 1.5 times) and Markdown h3s `text-xl` (20 px, 1.25 times). That is close to Morison's ceiling and reasonable. The landing h1 at 64 px is 3.6 times `body-lg`, which is acceptable because the landing hero is a display surface whose job is to be looked at (TYP-008).

::: {.rule #TYP-044 grade="C"}
**On reading surfaces, keep the largest heading within about twice to two and a half times the body size; larger display sizes belong to display surfaces.** Morison limits the title to twice the text size in books [@morison1936first]. Craft rule adapted from print; no experiment.

*In LTF:* the lesson, challenge and reference pages should use `display-md` (32 px) as the page title, which is 2 times a 16 px body and 1.8 times an 18 px body. Keep `display-lg` and `display-xl` for the landing page, the reference hub title and celebration panels.
:::

### Emphasis inside the text

Inside a paragraph, hierarchy works at the scale of the word. The tradition and the evidence agree on which tools to use. Tinker found italic read somewhat more slowly than roman, and italic combined with marginal light or size slowed reading by more than 10 percent; boldface was read at the ordinary rate [@tinker1963legibility]. Dowding calls underlining as emphasis in display "a crude relic of Victorian typography" [@dowding1954finer]. On the web, underline has a second job that settles the question: it marks links, and LTF's rule is that links are always underlined. Capitals for emphasis are ruled out by TYP-036.

Bold is therefore the default tool for emphasis in LTF's running text, used sparingly so it keeps its force. Italic keeps a small role for titles of works and for a term at its definition, where a slight slowing is acceptable and even useful, and only if a true italic is loaded (TYP-011).

::: {.rule #TYP-045 grade="B"}
**Emphasize words in running text with semibold weight; do not use underline (reserved for links), capitals or color alone for emphasis, and use italic only for titles and defined terms in a loaded italic face.** Tinker found italic slower and bold read at the ordinary rate [@tinker1963legibility]; Dowding rejects underline as emphasis [@dowding1954finer]. Print evidence for the speed effects; craft for the rest.

*In LTF:* `Prose` already maps `strong` to `font-semibold`; apply the same in `MarkdownContent`. Make Markdown emphasis (`*text*`) render as italic only once the italic file is imported, or map it to semibold until then. Never underline non-link text.
:::

### Clarity is not meagerness

Tschichold's manifesto anticipates a misreading of itself. A letterhead with no ornament and legible type, he says, is called "meagerness," and its failure shows "the hollowness of the old principles" [@tschichold1995new]. The point is that removing ornament is not the same as creating order. A page stripped of hierarchy, with every element at the same weight and size and separated only by white space, is not clear. It is undifferentiated. Clarity requires the ranks to be visible.

This bears on the generic look the owner dislikes. A neutral, restrained interface with one accent and three ink levels is a common product style. Its risk is not too much decoration; it is too little hierarchy, where everything is `text-sm text-ink-2` and the reader cannot tell what matters. `text-ink-2` is the single most common color class in the product. A page where most text is secondary has no secondary text.

::: {.rule #TYP-046 grade="C"}
**Do not mistake an absence of ornament for clarity: every page must show at least three distinguishable ranks of text, and secondary styling must be used for secondary content only.** Tschichold distinguishes order from "meagerness" [@tschichold1995new]. Craft argument.

*In LTF:* audit pages where most text is `text-ink-2`. On `DashboardPage`, `ChallengesPage` cards and the curriculum module rows, make the primary line `ink` at a heading style, the supporting line `ink-2`, and meta `ink-3`, so the three ink levels map to three ranks.
:::

### What this means for Learn to Fly

The type scale is where LTF's classical typography most visibly falls short, and the defect is consistency, not taste. The product has a defined set of utilities and a parallel set of raw Tailwind sizes; a learner meets different heading systems on different pages. Fixing it is mechanical and worth doing early, because every later typographic decision assumes a single scale.

The decisions: rebuild the scale from the reading size with one gentle ratio and named display exceptions (TYP-041); require every size to come from a token and enforce it by lint (TYP-040); give each heading level one style per surface class (TYP-042), with `display-md` as the page title on reading and interface pages (TYP-044); rank each page's elements before styling, starting with the lesson head stack (TYP-043); use semibold for emphasis and keep underline for links (TYP-045). Then check that pages show real hierarchy, not a uniform grey (TYP-046). When the scale is rebuilt, update `/dev/components` to show every type token with real text, so the scale can be reviewed as a whole.

## Figures, Symbols and the House Style Card

### Two kinds of figures

Bringhurst's section 3.2.1 sets the classical rule for numerals: "Use titling figures with full caps, and text figures in all other circumstances" [@bringhurst2012elements]. Titling (lining) figures stand on the baseline at cap height; text (old-style) figures have ascenders and descenders like lowercase and sit in a line of prose without standing out. The rule was written for books, where numbers are mostly dates and page references inside sentences.

Rutter's web handbook, which grew out of a project to apply Bringhurst to the web, adapts the rule for data. Lining figures draw the eye, so in running text they can feel like shouting, while old-style figures sit comfortably in prose; lining figures suit all-caps headings and places where readers scan, compare or search for data, such as lists and tables [@rutter2017web]. The CSS Fonts specification supplies the controls (`lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `slashed-zero` and others in `font-variant-numeric`) and states that tabular numerals allow columns of numbers to line up [@w3c2026cssfonts]. None of this is experimental: the claim that lining figures help scanning is plausible craft reasoning without a cited test.

The second distinction is width. Proportional figures have widths fitted to their shapes (a 1 narrower than a 0); tabular figures share one width, so digits in successive rows line up and a changing value does not shift sideways. A readout that changes in place, such as a timer, a live score preview or a slider value, jitters if its figures are proportional, because each new digit has a different width.

LTF's faces settle some of these choices by what they contain. Inspection of the shipped Instrument Sans file for this book found only `pnum` and `tnum` among its figure features, with default figure widths varying from 0.391 em (the 1) to 0.666 em (the 0), so Instrument Sans figures are proportional unless the `tabular` utility is applied, and the face offers no alternative old-style figures to switch to. JetBrains Mono sets every glyph at 0.6 em, so its figures are tabular by construction. The product's split, "Instrument Sans for everything you read, JetBrains Mono for everything you measure," therefore already gives tabular figures to the values it puts in mono.

::: {.rule #TYP-047 grade="C"}
**Set every number that is compared, aligned or updated in place (table values, readouts, scores, timers, slider values, stat tiles) in tabular figures, either in the mono face or with `tabular-nums`.** Rutter assigns lining figures to data and tables [@rutter2017web]; the CSS Fonts specification states that tabular numerals let columns line up [@w3c2026cssfonts]; Bringhurst's titling-figure rule is the print precedent [@bringhurst2012elements]. Craft consensus and a standards fact.

*In LTF:* the `readout-*` utilities already apply `tabular-nums` in JetBrains Mono, and `Stopwatch` digits are mono. Check the values that are not: `ProgressBar` and `ProgressRing` labels, the `DebriefForm` live score preview, widget slider values and `KeyNumbers`, and apply `readout` or the `tabular` utility where they are Instrument Sans.
:::

::: {.rule #TYP-048 grade="C"}
**In running prose, set ordinary numbers in the text face, and switch to the mono face only for identifiers and values the learner must read exactly or copy.** Bringhurst keeps text figures for "all other circumstances" than capitals [@bringhurst2012elements], and Rutter notes that data-style figures stand out in prose [@rutter2017web]. Changing face mid-sentence makes a number louder than its sentence. Craft consensus.

*In LTF:* lesson Markdown uses `code` (`bg-surface-sunken font-mono`) for inline code; keep that for genuine code and for values a learner types into the sim. Ordinary numbers in a sentence ("three checks", "the second turn") stay in Instrument Sans. Speeds rendered from `{{vspeed.*}}` tokens are values a learner must read exactly and may reasonably render in `readout` style; decide once, in the token renderer, and apply it everywhere.
:::

### Weight and alignment of numbers

The dossier records that bold mono is common in pages (Dashboard stat tiles, `SpeedsPage` KIAS cells at `font-mono text-2xl font-bold`, the result card at `font-mono text-5xl font-bold`) although the `readout` utilities are weight 500. That is the same two-dialect problem as the headings, at the scale of figures. A reader who sees speeds bold on one page and medium on another will wonder whether the difference means something. De Vinne's observation that readers notice inconsistency faster than they notice errors of substance applies with special force to numbers [@devinne1910practice].

Rutter's table rules give the alignment: left-align text columns and right-align numbers, with headings matching their data, and align on the decimal point when precision varies [@rutter2017web]. Right alignment lets the reader compare magnitudes by the position of the leftmost digit.

::: {.rule #TYP-049 grade="C"}
**Right-align numeric columns and their headers, align on the decimal point where precision varies, left-align text columns, and give readouts one weight per size from the tokens.** Rutter's table guidance [@rutter2017web]; De Vinne on consistency [@devinne1910practice]. Craft consensus.

*In LTF:* the `MarkdownContent` table sets `text-left` on the whole table; add a right-aligned numeric column option (GFM already supports right alignment with a trailing colon in the delimiter row of the source table). Replace `font-mono text-2xl font-bold` and `font-mono text-5xl font-bold` with sized `readout` tokens (adding a `readout-xl` if needed) at one weight.
:::

### The right symbol

Hochuli's English edition was criticized by one reviewer on a single point: a suggestion to use the letter x as a multiplication sign. The reviewer argued that a font should supply a proper multiplication sign [@hochuli2008detail]. The notes for this book turn that into a general rule: use a real multiplication sign or minus where the font has them, do not substitute lookalike letters in numeric content, and let the font provide the glyphs. LTF's fonts do have them. The shipped Instrument Sans and JetBrains Mono files both contain the multiplication sign (U+00D7), the minus sign (U+2212), the en dash (U+2013) and the degree sign (U+00B0), as inspected for this book.

LTF's content uses them inconsistently. A search of the lesson Markdown found the multiplication sign 50 times and a letter x between numbers 3 times, in runway dimensions, written as a number, a letter x and a number. The project rule already requires an en dash for ranges.

::: {.rule #TYP-050 grade="C"}
**Use the true glyph for each symbol (× for dimensions and multiplication, − for negative values, – for ranges, ° for degrees) and never a lookalike letter or hyphen.** Hochuli's reviewer argues that a font should supply a proper multiplication sign rather than an x [@hochuli2008detail]. Craft consensus; both LTF faces contain these glyphs.

*In LTF:* replace the three "x" dimensions in lesson content with ×, and add `content:validate` checks for a letter x between digits, for a hyphen-minus before a digit where a minus is meant, and for a hyphen in numeric ranges.
:::

### Quotation marks

The lesson Markdown in LTF uses straight typewriter quotes throughout: a search for this book found about 4,256 straight double quotes and 677 straight apostrophes inside words, and no curly quotes. The renderer (`react-markdown` with `remark-gfm`) does not convert them, so learners see typewriter marks. In a product whose identity depends on care, typewriter quotes are a small but constant sign of carelessness, the kind of drift De Vinne says the modern reader notices [@devinne1910practice].

Dowding goes further than form. "The use of quotation marks never improves a text setting," he writes; where they are needed, use single quotes, and at display sizes make them two sizes smaller than the body [@dowding1954finer]. That is a book-setting taste, and for LTF it would be wrong. Quotation marks carry meaning in flight training: they show where a spoken radio call begins and ends, and where a label is quoted exactly as it appears on the panel. A beginner needs to see those boundaries. The craft sensibility survives in a narrower form: use the marks where they carry meaning, render them properly, and keep one convention.

::: {.rule #TYP-051 grade="C"}
**Render typographic (curly) quotation marks and apostrophes in all learner-facing text automatically, so authors can type straight quotes.** De Vinne records that readers have become critics of style in typesetting [@devinne1910practice]; Dowding treats quotation marks as a matter of careful setting [@dowding1954finer]. Craft consensus.

*In LTF:* add a smart-quotes step to the content pipeline (in `scripts/lib/parseLesson.ts` or as a remark plugin in `MarkdownContent`) that converts straight quotes outside code spans, and apply the same conversion to YAML-sourced strings such as checklist and glossary text.
:::

::: {.rule #TYP-052 grade="C"}
**Mark quoted speech, such as radio calls, and labels quoted from the panel in one consistent way across all content, and do not drop quotation marks where they mark the boundary of words the learner must say or find.** Dowding's rule against quotation marks is a book-setting taste [@dowding1954finer]; in instruction, the boundary of a quoted phrase is content. Craft reasoning against a craft authority.

*In LTF:* the traffic-pattern widget sets its radio call as an italic paragraph inside quotes, and lessons quote calls in plain text. Choose one treatment for radio calls (for example, curly double quotes in the text face, no italic) and one for panel labels (for example, the label in the case the sim shows, without quotes), write them into the style card, and apply them in lessons, challenges and widgets.
:::

### The style card

De Vinne's *Correct Composition* is, at bottom, an argument for a written house code. "There is no book of generally accepted authority that lays down a full code of explicit rules for orderly printing," he says, so each printing house that strives for consistency must make its own, the "style-card," to guide new compositors and maintain uniformity [@devinne1910practice]. Printing that passed a tolerant inspection in 1850 "does not pass now," and "the reader of to-day is more or less a critic of style in type-setting." His book publishes such a code for others, while allowing that different houses and kinds of work need different rules (English printers divide "mo-ther," American printers "moth-er").

Hochuli's advice points the same way from the other end. Hard-to-automate rules belong in a writing style guide for human authors, not in CSS, and a short guide is more likely to be adopted than a long one [@hochuli2008detail]. Dowding's micro rules, which his reviewers found hard to reproduce in digital layout tools [@dowding1954finer], are the cautionary case: a rule that only a specialist can apply by hand will not survive many authors.

LTF already has the beginning of a style card. AGENTS.md requires US English, second person, no em dashes in learner-facing text, an en dash in ranges, knots, feet, nautical miles and inHg, and MSL or AGL on every altitude; aircraft numbers come from `{{vspeed.*}}` and `{{aircraft.*}}` tokens in `content/aircraft.yaml`. That is exactly De Vinne's kind of code. What it lacks is coverage of the typographic details above, and enforcement for those details.

::: {.rule #TYP-053 grade="C"}
**Keep one written style card for numbers, units, symbols, abbreviations, capitalization and quotation, and enforce every rule on it that a machine can check in `content:validate`.** De Vinne's "style-card" is the historical model for keeping uniformity across many compositors [@devinne1910practice]; Hochuli argues for short guides and leaving hand rules to authors [@hochuli2008detail]; Dowding's hard-to-automate rules show what happens otherwise [@dowding1954finer]. Craft consensus.

*In LTF:* extend `content/README.md` with a typographic section covering: × for dimensions, − for negatives, en dash for ranges, a no-break space between value and unit, one form for each unit abbreviation, curly quotes (rendered), the radio-call and panel-label treatments, abbreviation definitions on first use, and capitalization of headings. Add validator checks for each machine-checkable item, starting with those in TYP-031 and TYP-050.
:::

### What this means for Learn to Fly

LTF's numerals are in better shape than its headings. The decision to put measured values in JetBrains Mono gives them tabular figures and clear identity, and the `readout` utilities exist. The remaining figure work is to apply tabular figures to the Instrument Sans values that change or align (TYP-047), to keep ordinary prose numbers in the text face (TYP-048), to align numeric columns and settle one weight per readout size (TYP-049).

The symbol and quotation work is in content, and it is where the product looks most careless at close range: typewriter quotes in every lesson and a few lookalike multiplication signs. Fix the quotes in the pipeline, not by hand (TYP-051), give radio calls and panel labels one treatment each (TYP-052), and use the true glyphs the fonts already contain (TYP-050). Then write it all down, short, in `content/README.md`, and let the validator enforce it (TYP-053). That is the cheapest way to make many authors' lessons look like one hand set them.

## The Paragraph and the Text Block

### Imposition before composition

Morison ranks the decisions of book typography, and the ranking surprises readers who think of typography as the choice of a typeface. Imposition, the placing of the text block on the page, is "the most important element in typography" [@morison1936first]. Margins should be proportionate to the text area, with "decent space for thumbs and fingers." The vertical oblong is the normal page because a horizontal oblong drives lines to an impossible length. Only after the page, the text block and the margins are settled do the details of composition (type size, leading, spacing) follow.

The order transfers to screens as a working sequence, not as a set of proportions. The page width of a screen is set by the device, not the designer, so the first decision is the reading column: how wide it is relative to the type, where it sits, and what surrounds it. The measure and leading chapters above are the composition that follows. A team that chooses a face and a size first and then fits them into whatever column the layout grid left over has reversed Morison's order, which is how LTF's lessons came to be set at 16 px across an 800 px article: the article width was a layout decision, and the type inherited it.

::: {.rule #TYP-054 grade="C"}
**Decide the reading column (its width in characters, its position and what may sit beside it) before choosing type size and leading for a reading page, and record the column as a token.** Morison calls imposition "the most important element in typography" and puts it before composition [@morison1936first]. Craft consensus.

*In LTF:* for `LessonPage`, settle the prose column first (TYP-019), then the width that widgets, tables and images may break out to (the 800 px article), then the rails beside it. Express both widths as tokens beside `container-page`, so that `PageContainer narrow` (768 px) and the lesson article stop being separate, unrelated numbers.
:::

### Margins as the stem of the glass

Warde's image for margins is the long thin stem of a wine glass, which keeps fingerprints off the bowl; margins keep fingers off the type page [@warde1955crystal]. Morison asks for "decent space for thumbs and fingers" [@morison1936first]. Both were writing about books held in the hand. On a screen, the corresponding space is the gutter between the text and the edge of the viewport, and the space between the text column and the furniture beside it (rails, sticky headers, a floating section `Select`).

The page canons that Tschichold popularized belong to print. Kinross's review of *The Form of the Book* reports the 2:3 and 3:4 page as the "natural" pair, and the account of page canons in the research notes gives the Van de Graaf construction: margins of one-ninth and two-ninths of the page, inner margin half the outer, and for a 2:3 page the proportions 2:3:4:6 for inner, top, outer and bottom [@tschichold1991form]. The same account records the reservations: the canon is a reconstruction of a method that "may have been used," Tschichold did not examine Van de Graaf's source article, and a measured Gutenberg page is closer to 2:3 than to the golden ratio. These canons are a craft heritage, not proof that proportions drive readability. On screen LTF can borrow the relational idea (margins derived from one ratio) without borrowing book measurements. In print, LTF can use the canon directly, because the kneeboard and checklists are printed.

::: {.rule #TYP-055 grade="C"}
**On screens, keep a clear gutter on both sides of every text column at every width; on printed pages (kneeboard, checklists), derive the margins from one stated ratio and leave the bottom and outer margins largest.** Warde and Morison treat margins as the space that protects the text from the hand [@warde1955crystal; @morison1936first]; the page canons give one historical ratio, with stated reservations [@tschichold1991form]. Craft heritage; no readability evidence.

*In LTF:* the `px-4` (16 px) gutter on phones is the minimum; keep it and do not let `Card` or `Callout` content run closer to the screen edge. For the print styles of `/reference/checklists/:slug` and the kneeboard, set page margins from one ratio (for example the 2:3:4:6 relation for a portrait sheet) in the print stylesheet, with room at the bottom for a thumb on a kneeboard clip.
:::

### Marking the paragraph

Morison is firm that every paragraph after the first should be indented, by a space "sufficient to be noticeable," and that abolishing indention is "plainly an undesirable practice" [@morison1936first]. Kinross reports that the later Tschichold treats indenting paragraph openings as essential, because omitting indents sacrifices meaning for superficial neatness [@tschichold1991form]; the digest of his essays gives one em as the usual indent. Gill, in the 1936 *Essay*, used paragraph marks instead of indents [@gill1936essay]. What they share is the requirement that the start of a paragraph be visible. The paragraph is a unit of thought, and a reader skimming for the next idea looks for its start.

On the web, the common convention is a space between paragraphs rather than an indent. That is a legitimate method of marking the paragraph, and it has an advantage on screens: the gap survives at any width and in any block type, including lists and callouts. The rule the tradition supports is therefore to choose one method and apply it everywhere, not to use both (which marks the paragraph twice) or neither (which makes text into a wall).

LTF uses spacing, but two values: `MarkdownContent` sets paragraphs at `my-3` (12 px), `Prose` at `my-4` (16 px). A learner reading the disclaimer and then a lesson sees two paragraph rhythms. Neither is wrong; having both is.

::: {.rule #TYP-056 grade="C"}
**Mark every paragraph start by one method, space between paragraphs in LTF, using one value tied to the body leading in every reading surface; never use both an indent and a space, and never neither.** Morison and the later Tschichold require the paragraph start to be visible [@morison1936first; @tschichold1991form]; Gill shows another method doing the same job [@gill1936essay]. Craft consensus.

*In LTF:* set the paragraph gap once (about 0.75 em at a 1.625 leading, or one blank half-line) and use it in `MarkdownContent`, `Prose`, `Callout` bodies and the `QuizBlock` explanation. Remove `my-3` and `my-4` from the components in favor of the shared value (TYP-028).
:::

### Keeping the text free of interruption

Morison's part V answers the charge that conventional typography is monotonous by putting decoration on the preliminary pages, not in the text [@morison1936first]. He also describes how publishers "drive out" a book to make it look longer, with wide spaces, blank pages and big initials. Both observations concern what may interrupt the reading column. The tradition's answer is that the text runs continuously, and that matter which is not the author's text goes before or after it.

A lesson in LTF is not a novel; its widgets, quizzes and callouts are part of the teaching, and Part XV, Instructional Design, decides where they go. But a good deal of what sits in the reading column is not teaching. The lesson head stacks a `SignupBanner` ("Sign up (free) to save your progress and challenge scores."), a resume bar, and, on drafts, an `UnverifiedWarning` before the objectives and the first paragraph. Each is reasonable alone. Together they push the start of the text down and put a promotion, in a tinted box, ahead of the author. Morison would have put the promotion at the end, with the completion panel, where it can be read when the reader has a reason to save progress.

::: {.rule #TYP-057 grade="C"}
**Keep promotional and account prompts out of the reading column before the text begins; place them after the text or in the page furniture, and let only what the learner needs to read the lesson (title, honesty warnings, objectives) come before the first paragraph.** Morison confines decoration to the preliminary pages and criticizes padding a book to look substantial [@morison1936first]. Craft consensus.

*In LTF:* move the `SignupBanner` from the top of `LessonPage` to the completion panel ("Finished reading and trying the questions?"), where saving progress is the natural next act. Keep the `UnverifiedWarning` at the top, because it changes how the learner should read what follows, and keep the resume bar, but make it a single line, not a tinted box.
:::

### What this means for Learn to Fly

The paragraph-level work is small and the page-level work is a matter of order. Decide the lesson's reading column first and make it a token, separate from the width that figures may use (TYP-054); then the measure and leading rules have something to apply to. Keep gutters on every side at every width, and use a real page ratio in the print stylesheets for the kneeboard and checklists, which are the one place LTF prints and where the book canon applies without translation (TYP-055).

Mark paragraphs one way, with one value, in every reading surface (TYP-056), and keep the text free of prompts that belong elsewhere (TYP-057). The lesson head is the clearest case: a learner who opens lesson 0.1 should meet the title, the objectives and the first sentence, and meet the sign-up offer when the lesson is done.

## Two Traditions: Book Typography and Interface Typography

### The New Typography

Tschichold's *Die neue Typographie* of 1928 is the founding statement of the other tradition. "The essence of the New Typography is clarity," it begins, and the clarity is set against an old typography whose aim was "beauty" [@tschichold1995new]. The justification is the volume of print competing for attention: the "extraordinary amount of print" demands "the greatest economy of expression." Form is to be developed "out of the functions of the text," as in technology and nature, and the functions of printed text are communication, emphasis ("word value") and the logical sequence of contents.

Two rules follow. Reject the central axis, an "artificial, invisible backbone" imposed from outside and illogical because readers start at one side of a line. And prefer asymmetry: "Asymmetry is the rhythmic expression of functional design," more logical and "far more optically effective than symmetry." Asymmetry is not chaos: "A striving for order can, and must, also be expressed in asymmetrical form." Ornament is "an ignorant tendency that our century must repress." And the New Typography "encourages 'standardization' in the construction of units, as in building," which Kinross's history summarizes as Tschichold's programme "Standardization, instead of individualism" [@kinross2004modern]. Kinross also corrects a common assumption about where this came from: "the Bauhaus had no fully fledged typographers"; Tschichold, with Renner and Trump, taught in Munich.

The claims about optical effectiveness are assertions, not measurements. They are also the first statement of rules most interface designers now follow by habit: left alignment, a few sizes, hierarchy by size and weight and position, components built to standard units.

### The reversal

Tschichold then changed sides. The headnote to the reader that reprints his manifesto records that he was imprisoned by the Nazis, escaped to Basel, "turned back to the classical typography of his early training," and sensed "an element of fascism" in the movement's purifying order [@tschichold1995new]. The later essays collected in *The Form of the Book* defend the traditional book: typography as a modest, self-effacing art serving the reader, pages in "natural" proportions, indented paragraphs [@tschichold1991form]. A digest of them reports his view that book typography has no "new" rules, only centuries-old principles. Neither position rests on experiment.

The reversal is usually told as a conversion. Kinross's history suggests a more useful reading. Modern typography, in his account, is the attempt to communicate clearly and rationally, and it includes the traditionalists as well as the avant-garde [@kinross2004modern]. The craft tradition and the modernist tradition share the aim of serving the reader and differ about means. Tschichold's two books can then be read as answers to two different problems: continuous reading of a book, where convention serves the reader best (Morison's argument [@morison1936first]), and display, advertising and information work, where the reader scans, compares and acts, and where function-derived asymmetric order serves better. That reading is this book's interpretation, but it fits the material, and it gives LTF a way to use both.

### Four kinds of surface

LTF has at least four kinds of text surface, and the traditions apply to them differently.

| Surface | Examples in LTF | Governing tradition |
| --- | --- | --- |
| Reading | lessons, `Prose` pages, `BriefTab` | Morison, Warde, Gill |
| Interface | curriculum, dashboard, challenge lists, forms | Tschichold 1928 |
| Display | landing hero, module openers, 404 | voice, within limits |
| Instrument | widgets, readouts, Fly mode | glance, tested |

On reading surfaces the book tradition governs: a calm text face at a comfortable size, a moderate measure, ragged right, paragraphs marked, conventions kept. On interface surfaces Tschichold's 1928 rules fit better: alignment to a left edge, few sizes, hierarchy from function, standardized units. Display surfaces may carry voice (TYP-004) inside the limits of the scale. Instrument surfaces (the widgets, the `readout` values, `FlyModePage`) are glance typography, which neither tradition addressed directly and which needs testing rather than doctrine.

The notes for this book record the same split from different directions: Warde's distinction between legibility and readability supports book-face discipline for lessons and large, heavy figures for a glance beside the sim [@warde1955crystal]; Updike's verdict against sans serif should not bind instrument faces chosen for glanceability [@updike1922printing]; Tschichold's later essays disagreeing with his earlier manifesto are the reason to write guidance as defaults per content type, not as one doctrine [@tschichold1991form].

::: {.rule #TYP-058 grade="C"}
**Classify every text surface as reading, interface, display or instrument, record the class in the component, and apply that class's defaults; do not apply book rules to instrument readouts or interface rules to lesson prose.** Tschichold's two positions answer different problems [@tschichold1995new; @tschichold1991form], and Kinross shows both traditions serve the reader by different means [@kinross2004modern]. Craft interpretation.

*In LTF:* add the class to the top comment of each page and layout (`LessonPage` reading, `CurriculumPage` interface, `LandingPage` display, `FlyModePage` instrument), and organize the type tokens the same way, so that a `readout` cannot be used for lesson prose by accident.
:::

### The central axis

Tschichold's case against the central axis is that readers start at one side of a line, so centering imposes a form that reading does not follow [@tschichold1995new]. For a short title on a display surface, centering is a legitimate choice. For anything a reader must read line by line, a ragged left edge makes every line start in a new place. LTF centers a few blocks of that kind: the `EmptyState` and `ErrorState` messages (`text-center` in a 420 px box), the reference hub header, and the debrief result card.

::: {.rule #TYP-059 grade="C"}
**Align interface and reading text to a left edge; center only short display lines (a title, a single number, a one-line message), never text of two or more lines that the learner must read.** Tschichold rejects the central axis because readers start at one side [@tschichold1995new]. Craft argument.

*In LTF:* `States.tsx` centers the `EmptyState` and `ErrorState` title, message and action. The title and action may stay centered; left-align the message if it can run to two lines, or keep messages to one line. Keep the debrief result card's centered tier and percent, which are single display values, and left-align its "Criterion by criterion" rows.
:::

### Standardization and deliberate inconsistency

Tschichold's "standardization in the construction of units, as in building" [@tschichold1995new] is the historical rationale for design tokens and shared components. Kinross's summary, "Standardization, instead of individualism" [@kinross2004modern], is also a warning about what happens without it: every page becomes an individual. The dossier's finding that many pages skip `Card` and hand-inline `rounded-lg border border-line bg-surface p-4 shadow-1`, and that sizes and weights are hand-picked per page, is individualism in Tschichold's sense.

Unger supplies the counterweight. His book treats consistency or deliberate inconsistency as a component of typography, and declines to give formulas [@unger2018theory]. A system is not good because it is uniform. It is good when its uniformity and its exceptions are both chosen. A safety alert in Fly mode should look different from lesson prose, on purpose, and the difference should be designed once and reused, not improvised.

::: {.rule #TYP-060 grade="C"}
**Build every repeated text treatment as a shared component or token, and make every deliberate exception (alerts, celebrations, instrument readouts) a named variant rather than a page-level override.** Tschichold's standardization of units [@tschichold1995new; @kinross2004modern] and Unger's "deliberate inconsistency" [@unger2018theory]. Craft consensus.

*In LTF:* replace the hand-inlined card classes on lesson, challenge, dashboard and reference pages with `Card`, and replace page-level type overrides (`text-2xl font-bold` headings, `font-mono text-5xl font-bold` results) with named variants. The `FlyPanel` random-event alert is a good example of a deliberate exception; make it a named `Callout`-family variant so its treatment is documented.
:::

### Glance typography and the reversed page

Fly mode and the Night theme are where the classical sources say least and the risk is greatest. Tinker found black on white much more legible than white on black, because reversed print needed more fixations; three-quarters of readers preferred black on white; and reversal cost the serif face at every size, while the sans serif face lost little at 10 and 14 points but did lose at 6 [@tinker1963legibility]. The evidence is on paper, from the period, and screens differ. But its direction matches the craft caution about hairlines (TYP-013): reversed text is harder at small sizes and with thin strokes.

`FlyModeLayout` is dark, sets a `text-xl` base, uses `text-4xl` titles, `text-2xl` goals and 5xl mono stopwatch digits: large, heavy figures for a glance, which is the right direction for an instrument surface. Night mode applies the same type sizes as Day across the whole product. Unger's process recommendation is the right one for both: where a design question can be tested with learners, test it [@unger2018theory].

::: {.rule #TYP-061 grade="B"}
**Set light-on-dark text at generous size and weight, and verify the Night theme and Fly mode with learners rather than assuming they read as well as Day.** Tinker found reversed print less legible, especially at small sizes [@tinker1963legibility]; Unger recommends testing design questions with readers [@unger2018theory]. Print evidence; screen evidence is in Part IV.

*In LTF:* keep Fly mode's large type. In Night, check `text-sm` and `text-xs` text in `ink-2` and `ink-3`, where reversal and small size combine, and consider a slightly heavier weight for small Night text through the variable `wght` axis, as a hypothesis to test, not a settled rule.
:::

::: {.rule #TYP-062 grade="C"}
**When a typographic question can be settled by watching learners (numeral style in Fly mode, the lesson measure, eyebrow removal), run a small test instead of debating it, and record the result next to the rule it changes.** Unger urges designers to pose research questions and collaborate with scientists [@unger2018theory]; Johnston treats rules as guides [@johnston1906writing]. Craft process.

*In LTF:* the first three tests are the narrowed lesson measure (TYP-019), the Fly mode step text at its large sizes (TYP-033), and recognition of codes and abbreviations by beginners (TYP-007, TYP-037).
:::

### What this means for Learn to Fly

The two traditions are not a choice LTF has to make once. They are tools for different surfaces. Classify the surfaces and organize the tokens to match (TYP-058). Apply the book tradition to lessons: the measure, leading, ragged right and paragraph rules of the preceding chapters. Apply Tschichold's 1928 rules to the interface: left alignment (TYP-059), standardized components and named exceptions (TYP-060). Treat Fly mode and Night as instrument and reversed surfaces whose rules are tested, not assumed (TYP-061, TYP-062).

This also bears on the owner's complaint. A product that applies one generic style to every surface looks generic. A product whose lessons read like a well-set book, whose interface is ordered like a good timetable, and whose instruments read like instruments has three distinct, purposeful typographic characters, all drawn from one type stock. That is a more durable source of identity than a new display face, though Part XX, Brand Identity and Distinctiveness, may add one.

## Decision list and review checklist

### Decisions this Part settles for LTF

1. **Purpose.** Lesson and reference typography is judged by comprehension; decoration is vetoed on reading surfaces (TYP-001, TYP-002). Voice and novelty go to display surfaces only (TYP-004, TYP-008).
2. **Furniture.** The `BetaBanner` is quieted and removed from `FlyModeLayout`; repeated labels are cut back (TYP-003, TYP-038).
3. **Review practice.** Type changes are reviewed with real lesson text, at phone and `xl` widths, in Day and Night, and with beginners where codes and labels are concerned (TYP-005, TYP-007, TYP-062).
4. **Reasons on record.** Token and utility comments cite rule IDs from this book instead of missing documents (TYP-009).
5. **Type stock.** At most three families with written jobs: Instrument Sans for reading, JetBrains Mono for measured values, and an optional display face confined to `display-*` (TYP-010, TYP-013). The text face is not reopened on serif grounds (TYP-015); it is tested for rhythm and distinct characters (TYP-016, TYP-017).
6. **True styles.** Italic files are imported or italic is dropped; no synthesized styles, no distorted labels; instrument hairlines checked at 1x (TYP-011, TYP-012, TYP-014, TYP-045).
7. **Measure.** The `container-measure` token becomes about 44ch (about 66 characters of Instrument Sans text); lesson prose moves onto it, while figures may use the full article width; a test asserts 45 to 75 characters per line (TYP-018, TYP-019, TYP-054). Narrow containers reflow instead of shrinking type; prose stays single column; tables size to content (TYP-020, TYP-021, TYP-022).
8. **Leading and spacing.** Leading is a ratio per style, reviewed against the new measure; small text never carries paragraphs; in-text spacing is em-based; lesson blocks share a small set of gaps; multi-line headings pass the clearance check (TYP-023 to TYP-028).
9. **Alignment and spacing of words.** Ragged right everywhere, never justified; the font's word space; one space between sentences; no automatic hyphenation; values bound to units; short strings broken by sense (TYP-029 to TYP-033).
10. **Capitals.** Capitals are tracked, lowercase is not; capital labels get wider word spaces; no sentences in capitals; abbreviations tracked by the renderer and defined on first use; eyebrows no smaller than 12 px and only where informative; long digit strings in mono (TYP-034 to TYP-039).
11. **Scale and hierarchy.** One scale from the reading size and a gentle ratio; no raw size classes; one style per heading level per surface class, `display-md` as the page title on reading and interface pages; ranks set before styling; semibold for emphasis; three visible ranks per page (TYP-040 to TYP-046).
12. **Figures and symbols.** Tabular figures for data and changing values; prose numbers in the text face; numeric columns right-aligned; one weight per readout size; true symbols; curly quotes rendered by the pipeline; one treatment for radio calls and panel labels; a typographic style card enforced by `content:validate` (TYP-047 to TYP-053).
13. **Page and paragraph.** The reading column is decided first and tokenized; gutters at every width and a stated ratio for printed margins; one paragraph-marking value; the `SignupBanner` moves to the completion panel (TYP-054 to TYP-057).
14. **Surface classes.** Every page declares reading, interface, display or instrument; interface text is left aligned; repeated treatments are components with named exceptions; Night and Fly mode are tested (TYP-058 to TYP-062).

### Review checklist

Run these questions against a pull request or a page. A "no" needs a fix or a recorded reason.

**Purpose and practice**

- Does every typographic change on a reading surface help the learner understand the text, with nothing purely decorative added? (TYP-001)
- Is running text at an ordinary weight, with heavy weights kept to short emphasis and glance readouts? (TYP-002)
- Is repeated furniture (headers, banners, eyebrows) quieter than the content? (TYP-003)
- Is any display voice confined to display surfaces? (TYP-004, TYP-008)
- Was the change reviewed with real LTF text and numbers, at phone and `xl` widths, in Day and Night? (TYP-005)
- Does lesson text keep mixed case, left alignment, marked paragraphs and underlined links? (TYP-006)
- Have new codes, labels or abbreviations been tried on someone who has not used LTF? (TYP-007)
- Does every new or changed token carry its reason or rule ID? (TYP-009)

**Faces**

- Does the change use only the named families, each for its stated job? (TYP-010)
- Is every style used (italic, weights) loaded as a real font file? (TYP-011)
- Are labels free of one-axis scaling or squeezing? (TYP-012)
- Is any high-contrast face confined to large display sizes? (TYP-013)
- Are hairlines in drawings sharp at 1x in both themes? (TYP-014)
- Was any face choice argued on letter distinctness, spacing, numerals and voice rather than serifs? (TYP-015)
- Has a new face passed the n/o and H/O rows and a real-text setting? (TYP-016)
- Are 0 and O, 1, l and I, 5 and S, 8 and B distinct at the smallest size used, in both themes? (TYP-017)

**Measure, leading and spacing**

- Does prose fall between 45 and 75 characters per line at every width, counted in real text? (TYP-018, TYP-019)
- Do narrow containers reflow rather than shrink type? (TYP-020)
- Is prose in a single column? (TYP-021)
- Are tables sized to content, and checklist steps and quiz options kept as units? (TYP-022)
- Does the leading suit the measure, changed one variable at a time? (TYP-023)
- Is multi-sentence text at body size? (TYP-024)
- Is leading a ratio set in the type token, with no raw `leading-*` in components? (TYP-025)
- Do wrapped headings and stacked labels keep descenders clear of ascenders? (TYP-026)
- Is spacing inside text in em units, and are block gaps taken from the shared set? (TYP-027, TYP-028)

**Words and lines**

- Is all text ragged right, with no justification? (TYP-029)
- Is lowercase text free of added `letter-spacing` and `word-spacing`? (TYP-030)
- Is there exactly one space after each sentence? (TYP-031)
- Is hyphenation off, with values bound to units and identifiers unbroken? (TYP-032)
- Do headings, checklist steps, quiz stems and buttons break by sense, with no single word stranded? (TYP-033)

**Capitals**

- Are all-caps strings letterspaced, with wider word spaces, and is mixed-case text untracked? (TYP-034, TYP-035)
- Are sentences, warnings and instructions in sentence case? (TYP-036)
- Are capital abbreviations in prose tracked by the renderer and defined on first use? (TYP-037)
- Are capital labels at least 12 px and semibold, and does each eyebrow say something the heading does not? (TYP-038)
- Are long digit strings the learner must copy set in mono? (TYP-039)

**Scale and hierarchy**

- Does every size come from a type token, with no raw size classes? (TYP-040)
- Does the scale follow one ratio, with named exceptions only? (TYP-041)
- Does each heading level match the style used for that level elsewhere in its surface class? (TYP-042)
- Can adjacent ranks be told apart at a glance? (TYP-043)
- Is the largest heading on a reading page within about two to two and a half times the body? (TYP-044)
- Is emphasis semibold, with underline only on links and italic only in a loaded face? (TYP-045)
- Does the page show at least three distinguishable ranks, with `ink-2` only for secondary content? (TYP-046)

**Figures, symbols and style**

- Are compared, aligned and changing numbers in tabular figures? (TYP-047)
- Are ordinary prose numbers in the text face? (TYP-048)
- Are numeric columns right-aligned and readout weights taken from tokens? (TYP-049)
- Are ×, −, – and ° used instead of lookalikes? (TYP-050)
- Are quotation marks and apostrophes rendered curly? (TYP-051)
- Do radio calls and panel labels follow the single style-card treatment? (TYP-052)
- Is every machine-checkable style-card rule enforced in `content:validate`? (TYP-053)

**Page and surface**

- Was the reading column set as a token before type details? (TYP-054)
- Do text columns keep their gutters, and do print styles use a stated margin ratio? (TYP-055)
- Are paragraphs marked by the single shared spacing value? (TYP-056)
- Is the reading column free of promotion before the first paragraph? (TYP-057)
- Does the page declare its surface class and follow that class's defaults? (TYP-058)
- Is text of two or more lines left aligned? (TYP-059)
- Are repeated treatments components, with exceptions as named variants? (TYP-060)
- Were Night and Fly mode text checked at their real sizes, and were testable questions tested? (TYP-061, TYP-062)
