# Brand Identity and Distinctiveness

This Part is about being recognizable: what makes a learner who has seen Learn to Fly once know it again in a browser tab, a search result, a shared link or a screenshot, and what makes the product feel like one thing rather than a set of pages assembled from a component kit. It draws on three bodies of work that rarely meet. The first is marketing science, chiefly the Ehrenberg-Bass tradition (Sharp, Romaniuk, Ehrenberg) and its rivals (Keller, Aaker, Fournier), which studies how brands are noticed, remembered and chosen. The second is the experimental literature on logos, packaging and aesthetic preference (Henderson and Cote, van der Lans and colleagues, Luffarelli and colleagues, Orth and Malkewitz, Hekkert, Tuch, Zajonc and the mere exposure meta-analysis). The third is the craft record of identity designers and system builders (Rand, Chermayeff and Geismar, Vignelli and Noorda, Wheeler, Rams, Beck as documented by Garland, and the GOV.UK principles).

The evidence is uneven and the grades say so. A few findings are well replicated: double jeopardy in buying data, the effect of repeated exposure on liking, and the structure of logo design dimensions across countries. Most of the rest is single studies, studies from one research group that also promotes the conclusion, or expert opinion from people whose own marks survived. Almost none of it was collected on learning software. Read each rule as the best available guidance for an unknown, free product in a crowded category, and treat its "In LTF" paragraph as a hypothesis that LTF's own learners can confirm or overturn. The final chapter collects the decisions and gives a review checklist; Part XXVI, The Audit and the Identity Playbook, turns them into a redesign plan.

## Why products converge, and what distinctiveness is

### The owner's complaint, stated precisely

The complaint behind this book is that Learn to Fly looks interchangeable with thousands of other sites. The product dossier lists the reasons with unusual candor. The landing page follows the common marketing order: a hero with headline, subline, two buttons and a media block, then a row of four stats, a five-step icon row, a three-card "what you need" row, a two-column FAQ and a final call-to-action band (`LandingPage.tsx`). Rounded, bordered `bg-surface` cards with a soft shadow carry lessons, challenges, airports, quiz blocks, widget frames and dashboard tiles, often hand-inlined as `rounded-lg border border-line bg-surface p-4 shadow-1` rather than through `Card`. A small uppercase eyebrow sits over nearly every heading. Icons are stock lucide line glyphs at 64 import sites. Primary buttons, the `ThemeToggle`, the widget Explore and Quiz toggle and the tooltip all use the same near-black fill with white text, a look the dossier calls "very common Vercel or shadcn-like". The palette is a warm off-white, white cards, three grey ink levels and one teal. The type is one sans family plus a mono, the same structure as the ubiquitous Inter-plus-mono pairing.

None of these choices is wrong on its own. Each is the safe default for its job, and that is the point: when every decision is the safe default, the sum is the average of the web. The question this Part answers is which choices should stay conventional and which should carry the brand, and on what evidence.

### Distinctiveness is not differentiation

Marketing science separates two ideas that design discussions usually blur. Differentiation is a perceived and valued difference in what a brand offers: "this course is better, faster, safer". Distinctiveness is the property of being identifiable by cues that are different, whether or not those cues imply any advantage [@romaniuk2007evidence]. A brand can have a unique mark (distinctive) without that mark promising anything (differentiated).

Romaniuk, Sharp and Ehrenberg's paper is the main peer-reviewed statement of why the distinction matters. Its abstract says the research challenges "the central importance of differentiation to brand strategy", and presents survey data across many categories and two countries showing a low level of perceived differentiation between competing brands, while customers still buy those brands [@romaniuk2007evidence]. If buyers see few differences and still choose, choice cannot rest mainly on perceived advantage; salience and ease of recognition must do more of the work. The authors close by placing distinctiveness, a brand building unique associations that make it easy to identify, at the center of brand strategy and calling for research on "being distinctive and getting noticed" [@romaniuk2007evidence]. Sharp's book generalizes the argument: because most buyers perceive little real difference between competitors, the practical job of branding is to be easy to recognize and attribute, and distinctive assets such as colors, logos, shapes and sounds are the memory cues that do it [@sharp2010how].

The evidence has limits that matter for LTF. The low-differentiation data come from the same tradition that promotes the conclusion, which is a concern for independence, and critics argue that survey measures can miss differences that matter at the moment of choice and that mainstream-category results may not transfer to high-involvement categories [@romaniuk2007evidence]. A practitioner review of Sharp's book argues that "differentiation is a myth" overreaches and that the model fits less well in premium, subscription, business and new-category settings [@sharp2010how]. Learning to fly in a simulator is closer to a new, high-involvement category than to soap. So the reading this Part adopts is moderate: real product quality (accurate lessons, good challenges) still has to retain learners, and the identity's job is to make that quality easy to recognize and remember, not to argue for it.

::: {.rule #BRD-001 grade="B"}
**Spend identity effort on being recognizable, not on claiming superiority.** Survey evidence across many categories shows that buyers perceive few differences between competing brands yet still choose among them, which puts salience and recognizability ahead of claimed advantage [@romaniuk2007evidence; @sharp2010how]. The evidence comes mainly from one research tradition and from repeat-purchase categories, so it does not show that product quality is irrelevant, only that the identity's job is to be told apart and remembered.

*In LTF:* no landing or lesson copy should claim LTF is "the best" or "the fastest" way to learn; the beginner cannot verify it. The design budget goes to cues a learner can recognize at a glance: the fin mark, the horizon line, the readout numerals, the Brief, Fly and Debrief structure.
:::

::: myth
**"To stand out, a brand must be meaningfully different from its competitors."** The orthodox positioning view holds that brands win by owning a valued difference. Cross-category survey data show low perceived differentiation even between brands that people buy, and the authors propose distinctiveness (being easy to identify) as the more central goal [@romaniuk2007evidence]. The paper does not license looking like competitors; it recommends being easily told apart, by cues rather than by claims.
:::

### Typical first, then novel

If distinctiveness is the goal, why not make everything unusual? Because the aesthetic evidence says novelty is liked only within limits set by typicality. Hekkert, Snelders and van Wieringen ran three studies of consumer product designs and found that typicality (how good an example of its category a design is) and novelty jointly and about equally explained aesthetic preference, but suppressed each other: their direct correlations with preference were not significant, and each became highly significant once the other was partialed out [@hekkert2003most]. People prefer novel designs as long as the novelty does not cost typicality. Expertise did not change the balance, and a more objective measure of typicality (an item's average similarity to the rest of its category) gave the same result [@hekkert2003most].

Tuch and colleagues found the web version of the same pattern. With screenshots shown for 17 to 1000 ms, both visual complexity and prototypicality affected beauty ratings; websites low in complexity and high in prototypicality were judged most appealing, and low-prototypicality sites were generally judged unattractive [@tuch2012role]. Complexity acted earliest: at 17 ms its effect (partial eta squared .38) was about twice that of prototypicality (.19), and by 33 and 50 ms the two were similar [@tuch2012role]. Reber, Schwarz and Winkielman give a mechanism: prototypes, symmetry, contrast and repetition all make an object easier to process, and fluent processing feels good [@reber2004processing].

Put together, these findings explain both halves of LTF's problem. A page that is too typical is invisible as a brand; a page that is atypical in its structure reads as strange and unattractive before anyone reads a word. The way out is to be typical where structure is judged (layout, navigation, reading order, control behavior) and novel where identity is carried (the mark, a display voice, a signature color use, drawn instruments, the naming and rhythm of the course).

::: {.rule #BRD-002 grade="B"}
**Keep page structure typical and put novelty in identity layers: mark, type voice, color use, drawings and language.** Typicality and novelty jointly predict aesthetic preference, but novelty is liked only while it does not reduce typicality [@hekkert2003most]; websites that look atypical for their category are judged less attractive within a fraction of a second [@tuch2012role]. The studies used ratings of product images and screenshots, so they say what is liked at first sight, not what is remembered over weeks.

*In LTF:* keep `RootLayout`, the header navigation, the lesson's three-zone grid in `LessonPage` and standard control behavior conventional. Make the distinctive moves in `Logo`, the display type of `PageHeader` and the landing h1, the use of the `accent-line` horizon line, the hand-drawn widgets and the course vocabulary.
:::

### Why products converge

Convergence has causes that are worth naming, because each suggests its own correction.

The first is shared defaults. Component kits and utility frameworks ship with a spacing scale, radii, shadows, a grey ramp and icon sets that are tuned to look acceptable anywhere. LTF has already removed Tailwind's default palette, radii, shadows and fonts in `tokens.css`, but kept its text sizes, weights, leading, tracking and spacing scale, and the pages use raw `text-2xl font-bold` alongside the token utilities. Defaults are typical by construction; they produce the prototypicality that Tuch's raters liked, and nothing beyond it.

The second is safe copying of successful products. When a team looks at the best-known software for reference, it imports that software's identity layers along with its structural conventions. The ink pill button and the segmented pill toggle are not structural conventions of learning software; they are the perceptual signature of a few developer-tool brands. Copying them buys typicality nowhere it is needed and spends distinctiveness everywhere.

The third is that the strongest research guidance pushes toward the center. Most of the evidence in this book recommends contrast, simplicity, conventional layout and consistency, because those help comprehension, and they do. Applied without a counterweight, that evidence produces a clean, legible, generic product. Rams's credo is a common source of this drift: "Less, but better" and "as little design as possible" are calls for restraint in service of use [@rams2026good], but the Jansen commentary on the principles warns that unobtrusiveness can slide into monotony [@rams2026ten].

The fourth is identity drift through unfinished decisions. The plan for LTF (D-25) specified a livery-led identity with a condensed display face, navy bands and a red accent; the code shipped a type-led, warm-neutral, teal identity with no display face. The dossier notes that `CHANGELOG.md` and the decision log have no entry for this change. A product that half-implements two identities has neither, and the share card proves it: `public/og-image.png`, inspected for this Part, still shows the D-25 direction (a navy ground, condensed uppercase "LEARN TO FLY THE SKYHAWK." in white and coral, a fin with a red stripe, and red and white diagonal bands), while every page the link opens is warm off-white with a teal stripe on the fin.

::: {.rule #BRD-003 grade="C"}
**Audit every default the product inherits and decide, one by one, whether it serves structure or should carry identity.** Defaults from frameworks and copied products supply typicality, which is valuable for structure [@tuch2012role], but they cannot supply distinctiveness, because by construction they are shared [@romaniuk2007evidence]. This is a reasoned inference from the two findings, not a tested intervention.

*In LTF:* list the inherited choices (Tailwind's type sizes and spacing in raw classes, lucide icons, the ink pill button, the pill segmented control, the uppercase eyebrow, `rounded-lg` bordered cards) and mark each as "structure, keep conventional" or "identity, replace with an LTF decision". The pill segmented control and the eyebrow-over-every-heading pattern are identity layers by this test.
:::

::: {.rule #BRD-004 grade="C"}
**Record every change of identity direction as a decision, and finish or reverse it everywhere.** Distinctive assets are memory cues built by consistent repetition, and refreshing them out of boredom works against the memory structures they protect [@sharp2010how; @romaniuk2018building]; two partially implemented identities split exposure between them. Rand's advice is to change a mark only when it is ugly, outdated or inappropriate, not out of fashion or a wish to break with the past [@rand1991logos].

*In LTF:* add a Decision Log entry stating that the type-led, teal identity replaced D-25's livery direction (or the reverse), then bring `og-image.png`, the default `<title>` in `index.html`, `manifest.webmanifest` and the plan's Section 21 into line with it.
:::

### What this means for Learn to Fly

LTF's problem is not that its structure is conventional. Tuch's and Hekkert's results say conventional structure is what beginners will find attractive and easy, and the lesson grid, header and navigation should stay typical. The problem is that the identity layers, the places where a brand is supposed to be unconventional, were also filled with defaults: a framework's type sizes, a stock icon set, a developer-tool button style, a common sans-plus-mono pairing and the commonest landing-page order.

Keep: the conventional page structures in `RootLayout`, `LessonPage`, `ChallengesPage` and `DashboardPage`; the restraint of one non-status color; the fin mark; the instrument and chart tokens that are already distinctive.

Change: the identity layers listed in BRD-003. The pill segmented `ThemeToggle`, the ink-fill tooltip and the eyebrow over every heading are generic perceptual signatures, not structural needs. The landing page's section order is a typical structure that could stay, but its contents should be the LTF-specific things (the `LessonPath`, a drawn instrument, the Brief, Fly and Debrief sequence) rather than icon rows and stat tiles that any product could show.

Build: one recorded decision on identity direction (BRD-004), and a single source for every outward-facing asset so the share card, favicon, manifest and page cannot disagree again.

## How brands are noticed and remembered

### Brand knowledge as a network of associations

Keller's account of customer-based brand equity is the standard academic frame for what a brand is in a person's head. He defines brand equity as "the differential effect of brand knowledge on consumer response to the marketing of the brand": a brand has positive equity when people respond more favorably to something because it carries the brand than they would to the same thing unnamed [@keller1993conceptualizing]. Brand knowledge has two parts. Awareness is the ability to recognize the brand when it is shown (recognition) or to produce it from memory given a category or a need (recall). Image is the set of associations linked to the brand in an associative memory network, and associations matter according to three properties: favorability, strength and uniqueness, where uniqueness means the association is not shared with competitors [@keller1993conceptualizing].

Keller's taxonomy of associations is a useful audit tool. Associations run from attributes (product-related, such as what the product is made of, and non-product-related: price, appearance or packaging, user imagery and usage imagery) through benefits (functional, experiential, symbolic) to overall attitudes [@keller1993conceptualizing]. Strength depends on how much and how well the association was processed when it was formed. Keller also states two cautions that tend to be forgotten. The relative importance of recognition and recall depends on whether the choice is made at the point of encounter (recognition) or beforehand (recall). And although careful choice of name, logo and symbol helps, "the primary input comes from supporting marketing activities" [@keller1993conceptualizing]; in a product, that means the experience itself.

For a free web product, both routes to awareness matter and they need different cues. A learner who types "learn to fly msfs" into a search box is recalling; the name and a memorable phrase do the work. A learner scrolling a forum thread or a video's description is recognizing; visual cues in a thumbnail, a favicon or a share card do the work. A learner returning to a pinned tab beside the sim is recognizing at 16 pixels.

::: {.rule #BRD-005 grade="C"}
**Design separate cues for recall (name and phrase) and for recognition (mark, color, type), and check each where it is used.** Recognition and recall are distinct components of brand awareness, and which one matters depends on whether the choice happens at the moment of encounter or before it [@keller1993conceptualizing]. The framework is conceptual and widely used, not an experimental result.

*In LTF:* recall cues are the name "Learn to Fly" and a short phrase a learner could type (the manifest's "Learn to fly the Cessna 172 in Microsoft Flight Simulator 2024" is a candidate). Recognition cues are the fin mark in the favicon and `apple-touch-icon.png`, the teal stripe, and the share card. Review each in its real context: a search result snippet, a browser tab strip, a social preview.
:::

::: {.rule #BRD-006 grade="C"}
**Write down LTF's intended associations in Keller's categories and mark which are unique to LTF.** Brand image is a network of associations judged by favorability, strength and uniqueness; associations shared with competitors give no differential effect [@keller1993conceptualizing]. The taxonomy is a conceptual checklist; it does not say which associations matter most.

*In LTF:* product attributes (sim-verified lessons, scored challenges, one airplane taught deeply), non-product attributes (free, beta, browser-based, a calm warm-neutral look), usage imagery (a second screen beside the sim, a printed kneeboard), benefits (understanding why, not only what). "Aviation", "blue sky" and "learn to fly" are shared with every competitor; "verified in the sim", "Fly mode on a second screen" and "Brief, Fly, Debrief" are candidates for uniqueness.
:::

### Quantity of associations beats the perfect position

Positioning practice tells a brand to choose one message and repeat it. Romaniuk and Sharp tested that advice in a subscription market where customers normally use a single provider, using large samples for three brands covering over 95 percent of the market (4,000, 900 and 350 respondents) [@romaniuk2003measuring]. Associating a brand with any single attribute went with only slightly higher loyalty, a mean difference of 0.6 of a scale point on an 11-point measure, and no attribute acted as a trigger. Multi-attribute "positions" showed differences of 0.7 to 2.1 points with no ideal position. What predicted loyalty consistently was the number of associations: against a baseline of about six out of ten, each additional attribute a respondent linked to the brand raised loyalty by about 0.1 point [@romaniuk2003measuring]. The authors' advice is to monitor all attributes, build the "bank" of perceptions over time, pick whichever attribute makes the best creative execution in the short term, and brand communications prominently so people know who is speaking.

This is one study, of retention not acquisition, in a business subscription market, and the authors call for replication and concede that the attribute count may partly be a crude attitude measure [@romaniuk2003measuring]. Its lesson for design is still useful: identity work does not need to find the single perfect brand promise. It needs the brand to be present, clearly signed, across many of the situations in which a learner might think of it.

::: {.rule #BRD-007 grade="B"}
**Sign every lesson, challenge and reference page so that the learner always knows which product taught them, instead of searching for one perfect brand promise.** In a subscription market, the number of attributes customers linked to a brand predicted loyalty, while no single attribute or chosen position did [@romaniuk2003measuring]. The evidence is one study on retention in one market, so treat it as a strong hypothesis for a learning product.

*In LTF:* a learner may arrive at `/reference/speeds` or a challenge page from a forum link with no landing-page context. The header `Logo`, the page title format "Page title · Learn to Fly" and the visual signature (horizon line, readout numerals) must be present on every route, including `FlyModePage`, in a quiet form.
:::

### Salience, publicity and the small brand

Ehrenberg and colleagues argue that most brand advertising works as creative publicity rather than persuasion. Their abstract states that "Advertising seldom seems to persuade" and that "Advertising in a competitive market needs to maintain the brand's broad salience", defined as "being a brand the consumer buys or considers buying", which rests on awareness together with memory associations, familiarity and brand assurance [@ehrenberg2002brand]. The practical consequence they draw is that cut-through matters more than a persuasive selling proposition. This is an argued position from one tradition, contested by researchers who find that persuasion and emotion do change preferences, and it is not a randomized test [@ehrenberg2002brand]. For a product whose outward-facing surfaces are small (a favicon, a link preview, a tab title), the publicity view still gives the right brief: be instantly attributable before any text is read.

Ehrenberg, Goodhardt and Barwise document a pattern that changes how LTF should read its own numbers. Double jeopardy is the regularity that a small brand has far fewer buyers than a large one and that its buyers also buy it slightly less often, so small brands are penalized twice [@ehrenberg1990double]. Market share differences are mostly differences in the number of buyers; loyalty differences are modest and follow from size. The pattern is among the best replicated in marketing, with known exceptions (niche brands with unusually high loyalty and change-of-pace brands with unusually low repeat), but it is an aggregate regularity, not a causal mechanism, and its transfer from repeat-purchase goods to learning products is unknown [@ehrenberg1990double]. Sharp builds the managerial case on it: brands grow mainly by reaching more buyers, including light and occasional ones, rather than by deepening the loyalty of existing ones [@sharp2010how].

::: {.rule #BRD-008 grade="A"}
**Do not read low return rates in a small product as proof that the identity or the lessons have failed.** Across categories and countries, small brands have fewer buyers who are also slightly less loyal, so low loyalty figures partly reflect size [@ehrenberg1990double; @sharp2010how]. The regularity is well replicated in purchase panels; whether it holds for free learning products is untested, so compare LTF's figures against its own trend, not against large products.

*In LTF:* when judging a redesign, compare return visits and completion against LTF's earlier figures and against the number of new learners, not against the engagement numbers of large learning apps. Put early identity effort into reach and recognition (shareable pages, consistent share cards) before elaborate retention mechanics.
:::

::: {.rule #BRD-009 grade="C"}
**Make every outward-facing surface attributable to LTF before any of its text is read.** The publicity view holds that brand communication works mainly by keeping the brand salient and familiar, so cut-through and attribution matter more than argument [@ehrenberg2002brand]; distinctive assets are the cues that make attribution possible without the name [@romaniuk2018building]. This is an expert position, not a tested rule.

*In LTF:* the share card (`og-image.png`), favicon, home-screen icons and any future progress or certificate image should share one frame, mark and color treatment that matches the pages. Today the share card does not match the pages it opens (see the chapter on why products converge).
:::

::: myth
**"A strong brand comes from finding the one message that makes people loyal."** Positioning practice treats a single trigger attribute or a chosen cluster as the source of loyalty. In a test of exactly this in a subscription market, no single attribute or position predicted loyalty well; the sheer number of associations did [@romaniuk2003measuring]. One study, but it is the direct test, and the popular claim has no comparable evidence behind it.
:::

### Category entry points for a learner

The Ehrenberg-Bass rules for growth, as a review of Sharp's book lists them, include building memory structures linked to category entry points: the situations and needs in which a buyer starts thinking about the category [@sharp2010how]. The idea is a reminder that brands are retrieved from situations, not from slogans. For a flight-sim learner, the situations are concrete: the first time the sim is installed and nothing makes sense, a failed landing, a radio call the learner does not understand, a checklist step the sim does not explain, a crosswind, an unfamiliar airport. The more of these situations in which LTF is the thing that comes to mind, the more associations the brand holds, which is Romaniuk and Sharp's quantity finding seen from the other side [@romaniuk2003measuring].

This is where product structure and brand meet. Lesson and reference page titles that name situations ("Your first landing", "What to say on the radio") rather than abstract topics both help search and plant the brand in the situation. It also argues for the reference hub as a brand asset: a learner who returns to `/reference` mid-flight is forming the association "LTF is where I look things up".

::: {.rule #BRD-010 grade="C"}
**Name lessons, reference sections and share titles after the situations in which a beginner needs them.** Brands are retrieved from buying situations (category entry points), and more associations with more situations go with stronger loyalty [@sharp2010how; @romaniuk2003measuring]. The entry-point idea is a managerial generalization from purchase research, not a test on learning content.

*In LTF:* review the curriculum titles shown in `CurriculumMap` and the reference hub's "Most looked up" chips for situational phrasing. Keep the codes (M0, L0.1) as the systematic layer and let titles name the moment.
:::

### What this means for Learn to Fly

LTF already has more potentially unique associations than its look suggests: verification shown in the interface, a Fly mode for a second screen, a scored Brief, Fly, Debrief structure, a printable kneeboard, hand-drawn instruments. Most of these are invisible at the recognition moments (tab, share card, search result) and only appear deep inside pages.

Keep: the title format from `usePageTitle` ("Page title · Learn to Fly"), which signs every tab and search result; the header `Logo` on every `RootLayout` route; the honest, situation-led copy samples such as "Lesson 0.1 takes five minutes. Start there."

Change: the default `<title>` in `index.html`, which contains an em dash and should follow the house format; the share card, which shows a different identity from the pages; generic curriculum titles where a situational one exists.

Build: a one-page association map in the Keller categories (BRD-006), reviewed when copy or identity changes; a share-card template that carries the fin, the horizon line and the page's own title, generated per lesson and challenge so that every shared link is attributable (BRD-009).

## Distinctive assets: choosing, measuring and owning them

### What counts as an asset

Romaniuk's book is a measurement-led method for deciding which non-name elements of a brand (logos, colors, shapes, characters, sounds, taglines, packaging) work as distinctive brand assets [@romaniuk2018building]. Its central claim is that an element is an asset only if category buyers actually link it to the brand, and that this is an empirical question, not a matter of design intention or agency belief. Assets function as retrieval cues that stand in for the name when the name is not visible: a quick scan of a shelf, a feed or a thumbnail.

Two criteria define an asset. Fame is the proportion of category buyers who link the element to the brand. Uniqueness is the extent to which the element evokes only that brand and not competitors. Romaniuk plots the two on a grid; secondary sources label the quadrants differently, and reported thresholds vary between practitioners, so no cutoff is adopted here [@romaniuk2018building].
The grid's limitations are stated in the notes and matter. It is a measurement framework, not a causal experiment; independent replication of specific cutoffs is thin; much of its use is by the institute and by firms that sell asset tests; prompted questions inflate fame scores; and an unknown brand scores low on fame almost by definition [@romaniuk2018building]. A trade-press headline also reports an Ehrenberg-Bass professor warning that focusing on assets over the brand name is "poorly branding". So the grid is a discipline, not a scoreboard: it tells a new product to choose elements that could become both famous and unique, to measure them without prompting, and to keep the name prominent while they grow.

::: {.rule #BRD-011 grade="C"}
**Treat an identity element as a brand asset only once learners link it to LTF without being prompted; until then treat it as a candidate.** Distinctiveness is defined by category buyers' links between an element and the brand (fame) and the absence of links to competitors (uniqueness), measured rather than assumed [@romaniuk2018building]. The framework is a measurement convention with thin independent validation and no agreed thresholds.

*In LTF:* the fin mark, the teal horizon line, the `LessonPath` pins and the mono readouts are candidates. None can be called an asset until a small unprompted test (see the chapter on testing whether the identity works) shows learners name LTF when they see it.
:::

::: {.rule #BRD-012 grade="C"}
**Choose candidate assets that could be unique in aviation education, and reject elements already shared with many flight sites.** Uniqueness is one of the two defining properties of an asset; an element that evokes competitors cannot become distinctive however often it is shown [@romaniuk2018building; @keller1993conceptualizing]. Judging uniqueness in advance is a design judgment; only measurement settles it.

*In LTF:* a generic airplane silhouette, blue-sky gradients, a compass rose, wings badges in general and stock aviation icons are shared category cues and poor candidates. A specific tail-fin drawing with a specific stripe angle, a signature use of one teal line, the numbered `LessonPath` pins, a particular way of drawing instrument faces, and the Brief, Fly, Debrief sequence are better candidates because no competitor is known to use them in this form.
:::

### Kinds of asset available to an interface

Romaniuk's list was written for packaged goods and advertising. An interface has its own asset types, and some of them are stronger than any logo because they are met in every session:

- **The mark and the wordmark.** The fin and "Learn to Fly" in `Logo.tsx`.
- **A color used in a signature way.** Not merely a hue, but a rule for where it appears. LTF's tokens file defines exactly this: "one saturated non-status color, the horizon line (accent)", reused as the active-nav underline, the active tab underline, the lesson-path connector, the progress fill and link underlines.
- **A type voice.** A display face or a distinctive treatment of headings; at present LTF has none (the dossier's trait 8).
- **A shape or structural motif.** The `LessonPath` vertical connector with numbered pins and a single current ink pin with an `accent-tint` halo, which the dossier calls a custom pattern rather than a stock stepper.
- **Drawn things.** The hand-built SVG instruments in `src/features/widgets/` (G1000 PFD, airspeed dial and tape, VOR, sectional legend) with fixed instrument and chart tokens.
- **Numerals.** JetBrains Mono as the "everything you measure" face: V-speeds, codes, percentages, ICAO identifiers.
- **Language and structure.** Brief, Fly, Debrief; Day and Night; Gold, Silver, Bronze; "the kneeboard"; "You've wandered off the taxiway".
- **Motion and sound.** The `tier-pop` animation and the random-event beep are candidates in principle; they are covered by Part XXII, Motion and Perceived Performance.

Assets compound when they are combined consistently. A share card that shows the fin, the horizon line, a mono code such as "L0.1" and a drawn instrument is four candidate cues at once; a learner who knows any one of them can attribute the card.

::: {.rule #BRD-013 grade="C"}
**Give the horizon line a written usage rule and keep it: one teal line that marks where you are and what is done, nowhere else.** A color becomes a cue through consistent, distinctive use, and an element used inconsistently cannot accumulate fame or uniqueness [@romaniuk2018building; @sharp2010how]. Expert inference from the asset framework; no study tests interface color rules.

*In LTF:* the `accent-line` token already serves the active nav underline, active tab underline, completed `LessonPath` connector, progress fill and link underlines. Keep that meaning ("position and progress") and remove uses that dilute it, such as the hover border `hover:border-accent` on every challenge card, which turns the signature into a generic hover color.
:::

::: {.rule #BRD-014 grade="C"}
**Never borrow a status color to carry brand or decoration.** A status color's value comes from meaning one thing, and a cue that appears in unrelated roles loses its link to that meaning; assets in turn need a stable association to be learned [@romaniuk2018building; @keller1993conceptualizing]. This follows from the association model; it is not a tested rule for interfaces.

*In LTF:* the `YouTubeEmbed` play disc is a 64 px `bg-warn` red circle, so the landing page's most saturated mark is the warning color. Draw the play control in ink or in the horizon-line treatment, and keep `warn` for errors, destructive actions and in-flight alerts.
:::

### The asset audit for LTF

A first pass at the grid can be made by judgment, then replaced by measurement. The table rates likely uniqueness only; fame is near zero for all of them today.

| Candidate | Where it appears | Likely uniqueness | Action |
| --- | --- | --- | --- |
| Fin mark with stripe | header, favicon, icons | high if drawn consistently | keep; one drawing everywhere |
| Teal horizon line | nav, tabs, path, progress | medium; teal is common | keep with a strict rule |
| `LessonPath` pins | landing, `/learn` | high | promote to more surfaces |
| Drawn instruments | widgets, kneeboard | high | bring to landing and share card |
| Mono readouts | stats, codes, speeds | low to medium | keep; pair with a display voice |
| Brief, Fly, Debrief | challenge tabs | high | name it everywhere the same |
| Ink pill button | buttons, toggles, tooltip | very low | replace with an LTF form |
| Uppercase eyebrow | most headings | very low | reduce to where it informs |
| lucide icon set | 64 sites | none | keep for utility, draw signature ones |

::: {.rule #BRD-015 grade="C"}
**Keep a written register of candidate assets with their exact specification, and add or retire entries only by recorded decision.** Assets are built by consistent repetition and evaluated over time by fame and uniqueness, so they need a stable specification and a history [@romaniuk2018building; @wheeler2012designing]. Wheeler's process places "managing assets" as a distinct final phase of identity work. Practitioner guidance.

*In LTF:* the register lives beside `tokens.css` and names, for each candidate, the source file (`Logo.tsx`, `LessonPath.tsx`, `favicon.svg`), the tokens it uses and the surfaces where it must appear. A pull request that changes a registered asset references a Decision Log entry.
:::

### Assets and the name

The caution in the grid literature is worth repeating as a rule of its own: assets supplement the name, they do not replace it. Keller treats the name as the central brand element, and his criteria (simple, familiar, distinctive, easy to say and spell) apply to it [@keller1993conceptualizing]. "Learn to Fly" is simple and familiar, which helps recall; it is also generic, which weakens recognition and uniqueness in search. Keller notes that a familiar word aids recall while an unusual word can aid recognition [@keller1993conceptualizing]. Because the name is descriptive and shared with many unrelated flying schools and courses, the visual assets carry more of the recognition load than they would for a coined name. That is an argument for investing in them, and for always showing the mark next to the name until the assets are known.

::: {.rule #BRD-016 grade="C"}
**Show the mark beside the name wherever space allows, because a descriptive name alone does not identify LTF.** Familiar words aid recall but unusual elements aid recognition [@keller1993conceptualizing]; assets are the cues that let a brand be recognized where its name is weak or absent [@romaniuk2018building]. Inference from conceptual work, not a tested effect.

*In LTF:* keep the `Logo` lockup (`variant="mark"`) as the default; reserve `variant="type"` for places the mark genuinely cannot be drawn. On phones, where the header shows the fin alone, the fin carries the whole identity, so it must be drawn at full quality at 28 px.
:::

### What this means for Learn to Fly

LTF has more asset candidates than most early products, and almost all of them are hidden from the places where recognition happens. The `LessonPath`, the drawn instruments and the Brief, Fly, Debrief structure are the most unique things in the product and appear on the landing page only partly (the path card) or not at all (the instruments). Meanwhile the most repeated visual elements, the ink pill button and the eyebrow, are the least ownable.

Keep: the fin mark, the horizon line rule in `tokens.css`, `LessonPath`, the fixed instrument tokens, the Brief, Fly, Debrief naming.

Change: the `bg-warn` play disc in `YouTubeEmbed` (BRD-014); accent hover borders that dilute the horizon line (BRD-013); the ink pill and eyebrow, which spend repetition on generic forms.

Build: the asset register (BRD-015), and a plan to put the two strongest candidates, the drawn instruments and the lesson path, on the landing page and the share card.

## The mark: what logo research and logo designers agree on

### Three design dimensions

Henderson and Cote turned logo choice from taste into measurable properties. They calibrated 195 logos on 13 design characteristics and found three underlying dimensions: elaborateness (richness, the ability to capture the essence of an object), naturalness (depiction of commonly experienced objects) and harmony (congruence of the parts and patterns of the design) [@henderson1998guidelines]. They then tied profiles to objectives. High-recognition logos should be very natural, very harmonious and moderately elaborate. Low-investment logos, which produce a false sense of knowing and positive affect for a brand with little budget, should be less natural and very harmonious. High-image logos must be moderately elaborate and natural [@henderson1998guidelines].

Van der Lans and thirteen co-authors tested whether these dimensions are universal, with consumers and designers in ten countries rating the same set of 195 logos [@vanderlans2009cross]. Recognition was measured with a clean design: about 30 business undergraduates per group viewed 39 logos for two seconds each, did a ten-minute distracter task, then picked the ones they had seen from a booklet of 39 targets and 39 distracters. True recognition was the rate of correctly recognized targets; false recognition was the rate of claimed recognition of distracters [@vanderlans2009cross]. The findings were consistent across countries in direction. Natural designs increased positive affect, shared meaning, subjective familiarity and true recognition, and decreased false recognition. Harmonious designs increased affect, familiarity and false recognition, without changing shared meaning or true recognition. Elaborate designs were where cultures differed most, mostly raising affect and recognition while lowering shared meaning [@vanderlans2009cross]. The design dimensions explained only a modest share of recognition, which is the honest headline: they are a reliable vocabulary and a weak predictor.

::: {.rule #BRD-017 grade="B"}
**Make LTF's mark natural (a depicted, familiar object), harmonious and moderately elaborate.** Across 195 logos, high-recognition marks had this profile [@henderson1998guidelines], and in ten countries natural designs raised true recognition and lowered false recognition [@vanderlans2009cross]. The relationships are correlational across existing logos and explain a modest share of recognition, so they guide a choice rather than guarantee an outcome.

*In LTF:* the fin in `Logo.tsx` depicts a real object (the swept tail fin of the airplane the course teaches), is built from three paths, and is moderately elaborate: a fin, a stripe and a cut gap. Keep this profile. Do not reduce it to a letterform monogram, and do not elaborate it into a full airplane illustration.
:::

::: {.rule #BRD-018 grade="B"}
**Check a harmonious, simple mark for false recognition against competitors' marks before committing to it.** Harmony raises affect and familiarity but also false recognition, the sense of having seen a mark one has not seen [@vanderlans2009cross; @henderson1998guidelines]. A mark can feel familiar because it resembles someone else's. The finding is replicated across countries in direction, measured with students and existing logos.

*In LTF:* the fin with a diagonal stripe is a common motif in airline and aviation branding. Run the two-second recognition test described in the chapter on testing, with competitor and airline tail marks among the distracters, and redraw the stripe angle or the gap if learners falsely "recognize" lookalikes.
:::

### Descriptive marks help an unknown brand

A logo is descriptive when its text or picture indicates what kind of product the brand sells. Luffarelli, Mukesh and Mahmood tested this across six studies: four experiments, a survey of 174 real logos from UK crowdfunding sites (relatively unknown startups) rated by 1,327 people for purchase intention and authenticity and by a separate 1,303 for descriptiveness, and an archival study of consumer brands [@luffarelli2019let]. More descriptive logos produced better brand evaluations and purchase intentions. The mechanism was processing ease: a descriptive logo is easier to process, and ease is read as authenticity (authentic, trustworthy, credible). Whether the logo was a wordmark, an icon or a mix did not moderate the effect [@luffarelli2019let].

Two limits define where the finding applies. The advantage shrank when people already knew the brand, though it stayed positive. And it reversed for products with negative associations: oil drops helped an olive oil producer and hurt a palm oil producer, matching a pretest in which olive oil was rated far more positively (6.15 against 3.95 on a nine-point scale) [@luffarelli2019let]. In the archival study, descriptiveness was associated with gross profit (beta .16, p = .005) among 423 brands with financial data, which is a controlled association, not a causal test. Across the 597 brands in two of the studies, 41 percent of logos were descriptive [@luffarelli2019let]. The work is a single team's, with online panels and mostly unknown brands, and independent replication is still awaited.

Rand's essay takes the opposite line: subject matter matters less than people assume, as an apple, an alligator, a bat and a number such as 747 show [@rand1991logos]. The two positions reconcile through the familiarity moderator. Rand's examples are marks with decades of exposure; Luffarelli's effect is largest for brands nobody knows yet. That is LTF's situation.

::: {.rule #BRD-019 grade="B"}
**Keep the mark descriptive of flying while LTF is unknown, and simplify only after learners recognize it.** Descriptive logos raised evaluations and purchase intentions through ease of processing and perceived authenticity, most strongly for unfamiliar brands [@luffarelli2019let]; marks that depict nothing rely on familiarity built by long exposure [@rand1991logos]. One multi-study paper with archival support; not yet independently replicated.

*In LTF:* the fin says "aircraft" at a glance and the wordmark says "fly". Keep both. Any future simplification of the fin (for example, removing the gap) waits until a recognition test shows learners identify the mark without the name.
:::

::: {.rule #BRD-020 grade="B"}
**Keep negative flying imagery out of the mark, the favicon, the share card and the first screen.** A descriptive cue carries the valence of what it depicts: descriptiveness helped an olive oil brand and hurt a palm oil brand [@luffarelli2019let]. One study of the reversal; the direction is plausible and the cost of ignoring it is high for a beginner audience.

*In LTF:* no stall horns, smoke, red warning lights, steep bank angles or crash imagery in `Logo`, `favicon.svg`, `og-image.png` or the landing hero. Warnings belong inside lessons where they teach, drawn with the `warn` and `caution` status tokens.
:::

::: myth
**"A logo's subject matter does not matter; any mark can come to mean anything."** Rand argued this from famous marks [@rand1991logos]. For unfamiliar brands, experiments and a large survey of startup logos found that descriptive marks were evaluated better, through ease of processing and authenticity, and that the advantage shrinks as a brand becomes familiar [@luffarelli2019let]. Subject matter matters most at exactly the stage when a brand cannot yet afford for it not to.
:::

### The practitioners' tests

Rand's essay gives the oldest practical test for a mark: it must be attractive, reproducible in one color and legible at very small sizes, and should point or designate as simply as possible, because fussy designs carry a built-in weakness [@rand1991logos]. He lists seven qualities: distinctiveness, visibility, usability, memorability, universality, durability and timelessness. He also gives the reason for restraint about meaning: a logo identifies; it does not sell. "A logo is a flag, a signature, an escutcheon", and its meaning comes from the quality of what it stands for, built through familiarity and association [@rand1991logos].

Chermayeff, Geismar and Haviv's monograph on their studio's marks (the NBC peacock, Chase's octagon, PBS, Mobil) presents a consistent craft position: a good identity is appropriate to the client, distinctive and memorable, and simple, and simple marks survive changes of medium because they can take fashionable treatments without losing recognition [@chermayeff2011identify]. The principles as summarized come from interviews rather than the book text, and the book shows marks that worked, so its claim about durability is survivorship-biased opinion [@chermayeff2011identify]. Both sources are craft authority and should be graded as such, but their tests are easy to run and align with the experimental findings on harmony and moderate elaboration.

::: {.rule #BRD-021 grade="C"}
**Require the mark to work in one color, at 16 pixels, and on both Day and Night grounds without redrawing.** Rand's practical tests for a logo are one-color reproduction and legibility at very small sizes [@rand1991logos]; Chermayeff and Geismar argue simple marks survive changes of medium [@chermayeff2011identify]. Craft authority, consistent with the recognition advantage of moderately elaborate, harmonious marks [@henderson1998guidelines].

*In LTF:* `LogoMark` already uses `currentColor` for the fin and cuts the gap so the ground shows through, which makes the one-color and both-theme cases work. Add a one-color variant (fin and stripe both `currentColor`, gap cut) for print, the kneeboard and monochrome contexts, and check the favicon at 16 px, where the gap may close up.
:::

::: {.rule #BRD-022 grade="C"}
**Do not load the mark with claims; let lessons earn its meaning.** A mark identifies rather than persuades, and its meaning comes from the quality of what it stands for, built through familiarity [@rand1991logos]; Keller likewise says the primary input to brand knowledge comes from the activities behind the identity, not the identity elements themselves [@keller1993conceptualizing]. Expert opinion and a conceptual framework.

*In LTF:* no taglines, badges or "certified" cues inside the lockup. The fin and the wordmark are enough; the verified lessons and honest beta labeling are what will give them meaning.
:::

::: {.rule #BRD-023 grade="C"}
**Draw the mark once and generate every size and file from that one drawing.** Recognition depends on identical repetition of the cue [@sharp2010how; @romaniuk2018building], and Rand's usability and reproducibility qualities require a mark that can be reproduced everywhere without redrawing [@rand1991logos]. Craft and asset-framework guidance.

*In LTF:* `Logo.tsx` and `favicon.svg` share the same three paths, which is right. The PNG icons (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `icon-512-maskable.png`) and `og-image.png` must be exported from those paths by a script, so the fin in the share card can never again show a different stripe color from the fin in the header.
:::

### Where marks fail: the evidence on change

The research and the craft literature agree that marks should change rarely. Rand reports that new marks are often met with hostility (an IBM executive compared the striped logo to a chain gang; the Westinghouse mark was compared to a pawnbroker's sign), that ABC dropped a planned update after research showed strong audience recognition, and that a mark should change only when it is ugly, outdated or inappropriate, not from ego, fashion or a wish to break with the past [@rand1991logos]. Sharp's summary makes the empirical version of the same point: marketers refresh brands out of boredom while buyers barely notice, and consistent visuals build and protect memory structures [@sharp2010how]. These are reasons for LTF to decide its mark carefully now and then leave it alone.

### What this means for Learn to Fly

The fin is a well-chosen mark by the evidence: natural, descriptive, harmonious and moderately elaborate, built from shared paths in `Logo.tsx` and `favicon.svg`, following the theme through `currentColor` and the `accent-line` stripe. Its weaknesses are outside the drawing. It appears small and alone (28 px in the header), it has not been tested for false recognition against airline tails, and the share card renders it with a red stripe on navy, so a learner meets two versions.

Keep: the fin paths; `LogoMark`'s `currentColor` fin and cut gap; the lockup with the wordmark.

Change: `og-image.png` and every PNG icon, regenerated from the shared paths in the current colors (BRD-023); the play disc and any other red near the mark (BRD-020).

Build: a one-color variant for print (BRD-021); a small-size check at 16 px; a false-recognition test (BRD-018) before any wider launch.

## Perceptual identity: type, color and form as the brand

### Functional and perceptual patterns

Kholmatova's study of design systems at companies such as Airbnb, Atlassian, Eurostar and TED separates two kinds of pattern [@kholmatova2017design]. Functional patterns are reusable parts with a concrete job: buttons, text fields, a checklist row. Perceptual patterns are descriptive visual qualities, such as iconography, color, typography, spacing and voice, that give a product its recognizable feel. Her argument is that the useful part of a system is the shared design language behind the components, and that perceptual patterns are what make a product recognizable across components that do quite different jobs [@kholmatova2017design]. The book is practitioner interview research with case selection, not a controlled study.

The distinction explains why LTF can have a well-built component library and still look generic. Its functional patterns are careful: `Button` has defined variants and sizes, `Callout` has nine typed variants, form controls share a `control-box` with considered focus and invalid states. But its perceptual patterns are thin and mostly borrowed: a sans family close in feel to the most common UI face, a grey ramp, one teal, the ink-fill inversion, the uppercase eyebrow and a stock icon set. A product is recognized by the perceptual layer.

::: {.rule #BRD-024 grade="C"}
**Specify LTF's perceptual patterns (type voice, color use, shape vocabulary, drawing style, icon style, voice) as a separate, named layer from its components.** Perceptual patterns are the layer that gives a product its recognizable feel and must be named to be shared and kept [@kholmatova2017design]. Practitioner research from case studies.

*In LTF:* the current `tokens.css` defines values; it does not define a perceptual language. Write a short perceptual spec: which face speaks for the brand, where the horizon line appears, what corner and stroke geometry LTF uses, how instruments are drawn, and which words name things. Components then cite it.
:::

### The composition carries the impression

Orth and Malkewitz studied package designs as wholes instead of element by element, and across seven studies reduced them to five holistic types: massive, contrasting, natural, delicate and nondescript [@orth2008holistic]. They mapped types to brand impressions using Aaker's personality dimensions: sincere brands suit natural designs, exciting brands contrasting ones, competent brands delicate ones, sophisticated brands natural or delicate ones, rugged brands contrasting or massive ones [@orth2008holistic]. The method is a sender-perspective typology rated by consumers from static images, it inherits the weaknesses of the personality scale it maps to, and a 2024 review argues consumers use more criteria than a designer-defined typology captures [@orth2008holistic]. But the central observation, that the whole composition carries the impression more than any one element, matches what Tuch and colleagues found for web pages judged in a fraction of a second [@tuch2012role].

Two consequences follow for review. First, a page cannot be judged distinctive or generic by checking its colors and fonts one by one; a correct token set can still compose into a nondescript page. Second, the fifth type matters: "nondescript" is a recognized holistic category, and it is the one the owner's complaint describes.

::: {.rule #BRD-025 grade="C"}
**Review key screens as whole compositions, asking which holistic type they read as, not only whether each token is correct.** Holistic design types predicted brand impressions better than single elements in package research [@orth2008holistic], and first impressions of websites form from overall complexity and typicality before details are read [@tuch2012role]. The typology comes from packaging and static images, so use it as a review vocabulary.

*In LTF:* review `LandingPage`, `LessonPage`, `ChallengePage`, `FlyModePage` and the result card (`ResultView`) at thumbnail size, side by side with three competitor pages. If a screen reads as "nondescript", the fix is compositional (scale contrast, a drawn element, a type voice), not another token tweak.
:::

::: {.rule #BRD-026 grade="D"}
**Aim LTF's compositions at a calm, refined ("delicate" and "natural") register suited to competence and sincerity, and test that learners read it that way.** The package typology maps delicate designs to competence and natural ones to sincerity [@orth2008holistic], but the mapping rests on a personality framework whose validity is contested [@romaniuk2012brands]. Graded D because the underlying construct is disputed; useful as a direction, not as a law.

*In LTF:* the warm-neutral grounds, restrained palette and hand-drawn instruments already lean this way. The risk is that "delicate" slides into "nondescript"; the remedy is one confident display voice and drawn content, not louder color.
:::

### A type voice

Vignelli describes a working life using a handful of typefaces (he says he can "get along well with a half a dozen") and an exhibition made with only four (Garamond, Bodoni, Century Expanded and Helvetica) to show that variety comes from structure rather than from type [@vignelli2010canon]. He prefers an objective approach in which space, weight and alignment carry meaning ("I don't believe that when you write dog the type should bark!"), and he insists that "Good design is never boring, only bad design is" [@vignelli2010canon]. The point for identity is that a small type palette is not the cause of genericness; using the most common faces at their default sizes and weights is. Vignelli's identities were recognizable with Helvetica because of the structure and scale contrast he imposed on it, as the NYCTA manual's specified sizes, spacing and the black band across every sign show [@vignelli1970graphics].

LTF uses Instrument Sans for everything one reads and JetBrains Mono for everything one measures. Its plan called for a condensed display face (Big Shoulders Display) for headings and the landing page, never implemented. The dossier notes the resulting h2s differ across the app (24 px/700 on app pages, 32 to 44 px/600 to 700 on the landing page, 20 px/600 on the reference hub) because two systems are in use: the `display-*` and `heading-*` utilities and raw `text-2xl font-bold`. That inconsistency is itself an identity failure, because it denies the type voice the repetition that makes it recognizable. Part IV, Typography on Screens, and Part II, Classical Typography, cover the legibility side; the identity question is narrower: what does LTF's type look like that no one else's does?

::: {.rule #BRD-027 grade="C"}
**Give LTF one type voice that appears only in brand moments (display headings, the landing h1, share cards, result screens), and keep body text in a legible workhorse face.** Variety and recognizability come from a small type palette used with consistent structure and scale [@vignelli2010canon; @vignelli1970graphics]; perceptual patterns such as typography carry a product's recognizable feel [@kholmatova2017design]. Craft authority.

*In LTF:* either implement the planned condensed display face through a `font-display` token or define a signature treatment of Instrument Sans (a specific weight, tracking and scale step) used only in `PageHeader`, the landing h1, `FlyModePage` titles, the result card and the share card. Do not use it in body copy, labels or buttons.
:::

::: {.rule #BRD-028 grade="C"}
**Use one heading system everywhere so the type voice repeats identically.** Repetition is what turns a cue into an asset [@sharp2010how; @romaniuk2018building], and Vignelli's syntactics require every element to keep the same relationships across a body of work [@vignelli2010canon]. Craft authority and asset-framework inference.

*In LTF:* replace raw `text-2xl font-bold`, `text-3xl font-bold sm:text-4xl` and similar heading classes in `LessonPage`, `ModulePage`, `ChallengePage`'s `BriefTab`, `DashboardPage` and the error pages with the `display-*` and `heading-*` utilities, so an h1 or h2 looks the same on every route.
:::

### Color: role over hue

Labrecque and Milne's widely cited studies report that red logos are rated more "exciting" and blue logos more "competent" on Aaker's personality scale, and that saturation and value strengthen such associations [@labrecque2012exciting]. The work measures ratings of imagery, not behavior; the full sample details were not available for this book; and color associations are learned and vary with context and culture, so the US-based mapping is not a law [@labrecque2012exciting]. This is not a basis for choosing a brand color.

What the identity literature does support is a rule about how a color is used. A color becomes a cue when it is used consistently in a role that the learner meets again and again [@romaniuk2018building]. LTF's tokens file has the right rule ("one saturated non-status color, the horizon line") and a distinctive role for it (position and progress). Teal itself is not rare; the rule is the asset. The fixed instrument and chart colors, which the dossier lists as already distinctive, follow the same logic: they are identity because they are reserved for drawings of instruments and charts and never used in page chrome. Part VI, Color: Science, Meaning and Access, covers contrast and accessibility.

::: {.rule #BRD-029 grade="C"}
**Choose and defend LTF's brand color by its role and its distinctness from competitors, not by color-psychology charts.** Color-to-personality mappings come from rating studies of logos with limited control and no behavioral test [@labrecque2012exciting]; a color becomes a brand cue through consistent use in a recognizable role [@romaniuk2018building]. Expert inference with weak supporting evidence on the psychology side.

*In LTF:* keep teal if the team wants it, but justify it as "the horizon line, used only for position and progress, distinct from the navy and red common in aviation branding", not as "teal conveys trust".
:::

::: myth
**"Blue means trust, red means excitement, so pick the hue that matches the brand."** Rating studies find associations such as competent blue and exciting red [@labrecque2012exciting], and color charts strip them of their conditions. The associations are learned, context dependent and measured as ratings of images, with no shown effect on behavior; the source notes recommend testing with one's own audience instead [@labrecque2012exciting]. The full case, with the studies, is made in Part VI, Color: Science, Meaning and Access, and is not repeated here.
:::

### Shape and geometry

Henderson and Cote's harmony dimension, the congruence of the parts and patterns of a design, raised affect and familiarity in logo ratings [@henderson1998guidelines; @vanderlans2009cross]. Applied to a product, harmony means a shared geometry: the same corner logic, stroke weights and proportions across the mark, the icons, the widgets and the components. LTF's mark is built from sweeping curves and a diagonal; its components are built from soft rectangles (`rounded-md`, `rounded-lg`, pills) that account for most radius uses; its widgets are drawn with their own conventions; its icons are a third-party set drawn at stroke widths from 1.5 to 3. Four geometries do not add up to one product.

::: {.rule #BRD-030 grade="C"}
**Derive LTF's shape vocabulary (radii, stroke weights, the diagonal) from the mark and the instruments, and apply it to components, icons and widgets alike.** Harmony among a design's parts raises affect and familiarity [@henderson1998guidelines; @vanderlans2009cross]; extending a mark's geometry to the whole product is the craft practice of identity systems [@chermayeff2011identify]. Logo evidence extended to an interface by inference.

*In LTF:* settle on one icon stroke width (the design default of 1.75 is the obvious candidate) for all lucide and drawn icons; consider the fin's diagonal as a recurring motif (the share card, the `LessonPath` current pin, section dividers) instead of more rounded rectangles; review `WidgetFrame`, `Card` and `Callout` radii against the widgets' own drawing style.
:::

### What this means for Learn to Fly

LTF's functional layer is better built than its perceptual layer. The perceptual decisions that exist are good (one non-status color in a defined role, fixed instrument colors, mono for measured values) but are not written as a language, and the most visible perceptual choices are borrowed.

Keep: the horizon line rule; the instrument and chart tokens; JetBrains Mono for measured values; Instrument Sans for reading.

Change: the two heading dialects (BRD-028); mixed icon stroke widths (BRD-030); any argument for a color from psychology charts (BRD-029).

Build: a perceptual spec (BRD-024); one type voice for brand moments, through a `font-display` token or a defined treatment (BRD-027); a holistic screen review at thumbnail size against competitors (BRD-025).

## Consistency without sameness

### Why repetition builds a brand

The oldest experimental basis for consistent identity is the mere exposure effect. Zajonc argued that repeated exposure to a stimulus is enough by itself to increase liking for it, without reward [@zajonc1968attitudinal]. Among his evidence, the more frequently used member of each of 154 antonym pairs was judged more favorable in over 80 percent of cases (as described in secondary accounts) [@zajonc1968attitudinal]. Decades of work later, Montoya and colleagues pooled 268 curve estimates from 81 articles and found that the effect follows a curve with a positive slope and a negative quadratic term: liking rises with exposure and then flattens or declines, consistent with an inverted U [@montoya2017reexamination]. The inverted U was associated with all visual stimuli (not auditory ones), with exposures shorter than ten seconds or longer than a minute, and with ratings taken after all stimuli were shown [@montoya2017reexamination]. That exposure raises liking is well replicated; the mechanism is disputed. Reber and colleagues propose fluency, the ease of processing a repeated stimulus, as the explanation [@reber2004processing], and later work cited in this book's notes argues for salience instead.

Berlyne's experiments supply the other half. Undergraduates rated sequences of colored patches shown for nine seconds each; ratings fell during monotonous runs and rose briefly when a contrasting stimulus appeared, and simple stimuli became less pleasant with repetition while complex ones declined less or became more pleasant [@berlyne1970novelty]. Berlyne reported a tedium factor in monotony, and his data, like Montoya's meta-analysis, point to an optimum rather than "more is better" [@berlyne1970novelty; @montoya2017reexamination].

For identity, the two findings divide the work. Brand cues that are small, simple and met in passing (the mark, the horizon line, the page title format) benefit from identical repetition, and the evidence from asset research says to repeat them without variation [@sharp2010how; @romaniuk2018building]. Large, simple elements that fill the learner's view (the same card, the same section layout, the same icon row on every page) are where monotony sets in. The brand should be constant in its signature and varied in its content.

::: {.rule #BRD-031 grade="A"}
**Repeat LTF's small signature cues identically on every surface: mark, horizon line, title format and readout numerals.** Repeated exposure increases liking for visual stimuli, a finding pooled across 81 articles [@montoya2017reexamination; @zajonc1968attitudinal], and distinctive assets are built by consistent repetition [@sharp2010how]. The exposure effect is robust; its link to brand recognition in a learning product is inferred.

*In LTF:* the `Logo` lockup, the `accent-line` treatment, the "Page title · Learn to Fly" format and `readout` numerals must render the same in `RootLayout` pages, `FlyModeLayout`, print styles and the share card. No per-module colors, seasonal logo variants or alternative lockups.
:::

::: {.rule #BRD-032 grade="B"}
**Vary the large, repeated content structures across a course so that repetition does not turn into monotony.** Liking rises with exposure and then flattens or declines [@montoya2017reexamination], and monotonous runs of simple stimuli lose pleasantness while contrast restores it [@berlyne1970novelty]. Berlyne's stimuli were abstract patches and the meta-analysis pooled lab studies, so the transfer to pages is inferred.

*In LTF:* lessons already alternate block types (markdown, callout, image, quiz, widget, checklist) in `LessonRenderer`. Do the same at the page level: the landing page and the dashboard should not repeat one card form for every band; use the path, a drawn instrument, a table and plain prose in turn.
:::

::: myth
**"The more often people see your design, the more they like it."** Repetition does raise liking, but a meta-analysis of 81 articles found an inverted U for visual stimuli: liking rises, then flattens or falls [@montoya2017reexamination], and monotonous sequences lose pleasantness in direct tests [@berlyne1970novelty]. Repeat the signature, not the whole page.
:::

### "Be consistent, not uniform"

The GOV.UK design principles state the working rule in four words: "Be consistent, not uniform" [@govuk2025design]. Use the same language and patterns wherever possible so people become familiar with services, treat patterns as shared guidance, and change them when better methods or user needs emerge; teams may deviate where circumstances differ but should explain why they use a pattern [@govuk2025design]. These are organizational principles from a large public-sector team, not experimental findings, and they were written for services people must use, not an optional learning product.

Grudin's essay gives the argument behind the principle. He shows with five design exercises that consistency, applied as a goal, often produces worse designs, and that "designers would often do better to focus on users' work environments" [@grudin1989case]. He distinguishes internal consistency (a design agreeing with itself), external consistency (agreement with other interfaces the user knows) and analogic consistency (correspondence to the world), and names the trap of choosing "the most available consistency" over the one that serves the task [@grudin1989case]. His claim is that consistency is not sufficient, not that it has no value. Ozok and Salvendy's small experiment on web page consistency (ten participants per group) found a partial benefit, for error rate but not for speed or satisfaction [@ozok2000measuring].

For brand identity the lesson is precise. Consistency of signature cues is what makes a product recognizable. Uniformity of every surface is what makes it generic and monotonous. And the conventions that serve the learner's task, especially the external consistency with the simulator and the real aircraft, take precedence over brand expression.

::: {.rule #BRD-033 grade="C"}
**Hold the brand's signature constant and let each surface's layout follow its task.** Consistency should serve users' work rather than be pursued as a goal [@grudin1989case], and shared patterns with reasoned deviation ("consistent, not uniform") is the organizational form of that idea [@govuk2025design]. Expert argument and practice; the experimental benefit of consistency is partial [@ozok2000measuring].

*In LTF:* `FlyModePage` (dark, large type, glanceable) and `SpeedsPage` (a big table) should look different from `LessonPage` and the landing page, because their tasks differ. What must not differ is the mark, the horizon line, the type voice and the naming.
:::

::: {.rule #BRD-034 grade="C"}
**Never change an aviation convention to make the interface more distinctive.** External and analogic consistency with the world the learner will meet can matter more than internal consistency [@grudin1989case]; the brand's distinctiveness should come from non-functional layers rather than from conventions that carry safety meaning [@romaniuk2007evidence]. Expert inference.

*In LTF:* the airspeed arc colors (`arc-white`, `arc-green`, `arc-yellow`, `arc-red`), the attitude indicator's `sky` over `ground`, magenta and green course colors in the G1000 widget and the sectional chart colors stay as the aircraft and charts show them. Identity lives in the frame around them (`WidgetFrame`), the labeling and the drawing style, never in the instrument semantics.
:::

### Consistency is a process with an owner

Nielsen's edited volume on coordinating interfaces treats consistency as an organizational problem: it has several dimensions, corporate standards should be judged by costs and benefits, rigid application carries risks, and consistency is an ongoing process that needs ownership, commitment and political support [@nielsen1989coordinating]. The chapters are corporate case studies (Apple, IBM, Digital, Lotus, GE), not experiments, and some of the volume's economic claims could not be verified [@nielsen1989coordinating]. Garland's history of Beck's Underground diagram adds a cautionary story: a visual language that keeps expanding needs a custodian and rules, and the diagram's construction method let it grow while staying true to its design, until a bitter break between Beck and the organization in 1960 over who controlled it [@garland1994beck].

LTF is small enough that the custodian is the owner and whoever is writing code, often an AI agent. That makes written rules more important, not less: an agent produces the most available consistency, which is the framework default, unless the identity's rules are in the files it reads.

::: {.rule #BRD-035 grade="C"}
**Name a custodian for the identity and put its rules where every contributor, human or agent, will read them.** Consistency is maintained by an owned process, not by a document written once [@nielsen1989coordinating]; a growing visual language without a custodian drifts [@garland1994beck]. Practitioner evidence and history.

*In LTF:* the owner is the custodian. The perceptual spec, the asset register and this Part's decision list belong in files referenced from `AGENTS.md` and the `ltf-review` client checklist, so that `/ltf-review` can flag a raw `text-2xl font-bold` heading, a new pill toggle or a status color used as decoration.
:::

### Consistent yet fresh

Sharp's growth rules, as summarized in a review, include "stay consistent yet fresh" [@sharp2010how]. The tension resolves through layers. Brand's study of how buildings change distinguishes layers that change at different rates (site, structure, skin, services, space plan and stuff), with slower layers constraining faster ones; design that tangles layers makes every change expensive [@brand1994buildings]. Applied to identity, the slow layer is the mark, the name, the horizon line rule and the type voice: change it in years, by recorded decision. The middle layer is component form and composition: change it between major versions. The fast layer is content, illustration subjects, examples, seasonal or event material and copy: change it freely. Freshness comes from the fast layer; recognition comes from the slow one.

::: {.rule #BRD-036 grade="C"}
**Assign every identity element to a pace layer and change slow layers only by recorded decision.** Layers that change at different rates should be kept separate so that fast change does not disturb slow structure [@brand1994buildings]; brand cues are protected by consistency while freshness comes from new content [@sharp2010how]. The shearing-layer model is a widely used heuristic, not a measured law.

*In LTF:* slow (years): the fin, the name, the horizon-line rule, the type voice, instrument colors. Medium (major versions): `Card`, `Callout`, `Button` forms, page compositions. Fast (any release): lesson copy, challenge briefings, illustrations of scenarios, landing examples. A pull request that touches a slow layer cites a Decision Log entry.
:::

### What this means for Learn to Fly

LTF is both too uniform and not consistent enough. It is uniform in its large forms: the same bordered, rounded, shadowed card carries nearly every kind of content, the same eyebrow tops nearly every heading. It is inconsistent in its signature: two heading systems, two identities between share card and page, icons at several stroke widths, hand-inlined cards that drift from `Card`.

Keep: the signature cues already defined; the variety of lesson block types; the dark, large Fly mode that departs from the lesson layout for good reason.

Change: reverse the pattern. Make the signature identical everywhere (BRD-031) and let compositions vary by task (BRD-032, BRD-033). Replace the hand-inlined `rounded-lg border border-line bg-surface p-4 shadow-1` blocks with `Card` or with a different, task-specific form.

Build: pace-layer labels in the asset register (BRD-036), and checks in `ltf-review` that enforce the slow layer (BRD-035).

## Identity systems: how a look survives many hands

### The standards manual as the original design system

Before Vignelli and Noorda's manual, the New York City Transit Authority built its signs in-house, and a 1966 Unimark report was largely ignored; Vignelli is quoted calling the result "the biggest mess in the world" [@vignelli1970graphics]. The manual issued in 1970 was a specification that let many people, over many years, make signs that looked and behaved as one. As reported in secondary sources, it called for black signs on white; prescribed three sign sizes built from one-foot square panels (one by two feet for information, one by four for direction and one by eight for station identification); and specified word spacing, letter spacing, leading and the number of lines per sign [@vignelli1970graphics]. The black band at the top of signs began as a trace of the metal channels that held them and became a graphic element. The original face was Standard Medium; Helvetica became the official signage face only later [@vignelli1970graphics].

The manual is a historical case with admiring sources and no usability measurements, and its sources disagree on details such as dates and page counts [@vignelli1970graphics]. It is valuable for three things it shows. A strong identity can be built from a small kit with strict combination rules: three sizes from one unit cannot drift. Identity lives in the boring details (spacing, line counts), not only in the logo. And a standard can be wrong in situ: around 1973 signs switched to white on black to improve legibility amid graffiti, and in 1989 the manual was updated to unify the MTA's agencies [@vignelli1970graphics]. A manual is a living document with a maintenance cost.

::: {.rule #BRD-037 grade="C"}
**Build LTF's recurring surfaces from a small kit of sizes derived from one unit, so that layouts cannot drift.** The NYCTA manual's three sign sizes from one panel unit, with specified spacing and line counts, kept thousands of signs coherent [@vignelli1970graphics]. A historical case without measured outcomes; the principle is standard craft practice.

*In LTF:* define a small set of container forms (for example a lesson card, a challenge card, a data tile and a full-width band) on the spacing scale, each with fixed padding and title style. The current mix of `p-2`, `p-4`, `p-5` and `p-6` cards with differing title sizes is the opposite of a kit.
:::

::: {.rule #BRD-038 grade="C"}
**Specify the small details that make text recognizable and glanceable: line lengths, heading lengths, items per list, label case.** The NYCTA manual specified word spacing, letter spacing, leading and lines per sign, not only the logo [@vignelli1970graphics]; Vignelli's discipline holds that "Every detail is important because the end result is the sum of all the details" [@vignelli2010canon]. Craft authority.

*In LTF:* write limits for checklist item length, callout title length, eyebrow use and the lesson measure (the `Prose` component's `max-w-measure` is 68ch, while lessons run wider at 800 px; pick one and record it).
:::

::: {.rule #BRD-039 grade="C"}
**Test identity rules in the conditions of use and revise them when they fail there.** The NYCTA's black-on-white rule was reversed within a few years when conditions in the stations made it less legible [@vignelli1970graphics]. A single historical case, consistent with the general principle of designing for context [@govuk2025design].

*In LTF:* check the identity in a dim room beside a monitor running the sim, on a phone propped beside a controller, and on a printed kneeboard. Night colors, the horizon line's visibility and the fin at small size are the likely failures.
:::

### Semantics, syntactics, pragmatics

Vignelli's short canon gives a three-part gate that suits identity review [@vignelli2010canon]. Semantics is the search for meaning: research the company, product, market, competition, user and the history of the subject before designing, because design without semantics is "shallow and meaningless". Syntactics is the consistent structure: grid, typefaces, text, headlines, illustrations, with consistency arising from the relationships between elements. Pragmatics is whether the result is understood: "Whatever we do, if not understood, fails to communicate and is wasted effort" [@vignelli2010canon]. He adds appropriateness (the search for what is specific to this problem, which "transcends style"), and responsibility at three levels, to oneself, to the client and to the public.

The semantics step is where LTF's distinctive material is found. The history and the world of the subject (aircraft liveries, the pilot's operating handbook, sectional charts, kneeboards, checklists, the instrument panel, radio phraseology, the training syllabus) are the sources of identity that no generic product can share, because no generic product has done the research. The dossier's list of already-distinctive traits is almost entirely semantic: a POH-style numbered rail, a kneeboard, Brief, Fly, Debrief, Day and Night, chart colors.

::: {.rule #BRD-040 grade="C"}
**Draw identity ideas from the subject's own artifacts (checklists, handbooks, charts, panels, kneeboards, liveries) before borrowing from other software.** Vignelli's semantics requires research into the subject, user and history before design, and appropriateness means finding what is specific to the problem [@vignelli2010canon]; elements drawn from the subject are also more descriptive, which helps an unknown brand [@luffarelli2019let]. Craft authority plus an inference from one experimental line.

*In LTF:* extend what already works: the POH-style numbered rail in `ReferenceSections`, the kneeboard band, the chart tokens, the annunciator-light idea from the planned onboarding. A new component asks first "what does the cockpit, the chart or the handbook do here?" and only then "what does a SaaS kit do?".
:::

::: {.rule #BRD-041 grade="C"}
**Pass every new identity surface through three questions: what it means to a beginner pilot, whether it uses the shared structure, and whether a first-time learner understands it unaided.** Vignelli's semantics, syntactics and pragmatics form a complete review gate for a designed artifact [@vignelli2010canon]. Craft authority.

*In LTF:* use the three questions in pull request descriptions for new widgets, badges, the share card template and any landing band. "It looks nice" answers none of them.
:::

### A process for identity work

Wheeler's practitioner manual breaks identity work into five phases: conducting research, clarifying strategy, designing identity, creating touchpoints and managing assets [@wheeler2012designing]. It is a consulting framework justified by experience and case selection, not by comparative evidence, and its contents beyond the phase titles were not available for this book [@wheeler2012designing]. Its usefulness here is as a checklist that shows which phases LTF skipped. LTF's current identity was designed (phase three) and applied to some touchpoints (phase four), but there is no written research or strategy (phases one and two) and no asset management (phase five): no register, no single source for exported files, no recorded decision about the change from the plan's direction.

| Phase | What it means for LTF | Current state |
| --- | --- | --- |
| Research | learner interviews, competitor audit | not recorded |
| Strategy | one page: audience, promise, voice | spread across `v1.md` |
| Identity | mark, type voice, color, geometry | partly done |
| Touchpoints | pages, Fly mode, share card, icons | inconsistent |
| Managing assets | register, tokens, exports, review | tokens only |

::: {.rule #BRD-042 grade="C"}
**Complete the missing identity phases in order: a recorded competitor audit, a one-page identity strategy, then touchpoint and asset management.** Identity work is commonly structured as research, strategy, design, touchpoints and asset management, with the last phase where systems are kept [@wheeler2012designing]. A practitioner process with no comparative evidence; use it as a checklist.

*In LTF:* the competitor audit should capture the landing pages and lesson pages of the main alternatives a beginner meets (video courses, other sim training sites) at thumbnail size. The strategy page states audience, the intended associations from BRD-006, the personality register from the chapter on personality and voice, and the asset candidates from BRD-015.
:::

### Identity is in the system, not the logo

Chermayeff and Geismar's identities and Vignelli's NYCTA work share a feature that the logo literature misses: the mark is the smallest part of the identity. What made the subway recognizable was the sign system, its band, sizes, face and spacing [@vignelli1970graphics]. What made Beck's diagram an identity for London Transport was its construction method, which Garland describes as giving a simple but comprehensive system and a unifying corporate identity that could expand with the network [@garland1994beck]. A product interface is the same: the learner spends minutes with the mark and hours with the system.

::: {.rule #BRD-043 grade="C"}
**Treat LTF's construction rules (how pages, instruments and lesson paths are built) as the main identity, with the mark as one element of it.** The best-documented identity programs were recognizable through their systems: the subway sign kit [@vignelli1970graphics] and Beck's diagram construction, which also unified London Transport's identity [@garland1994beck]. Historical cases with no controlled comparison.

*In LTF:* the `LessonPath` construction (one vertical line, numbered pins, one current ink pin, teal only between completed stops) is the clearest system-level identity element the product has. Write its construction rules down and reuse them for the curriculum, the roadmap ladder on `/roadmap`, a module's progress and the challenge sequence, instead of using a different progress form on each.
:::

### What this means for Learn to Fly

LTF's identity was built the way most small products' identities are: a capable designer made a set of tokens and components, and pages were then written against them, partly through tokens and partly with raw framework classes. There is no manual in Vignelli's sense, the design sources cited in code comments (`tokens.json`, a design-system README, `night-mode.md`) are absent from the repository, and the plan describes a different identity from the code.

Keep: `tokens.css` as the single source of values; `DevComponentsPage` as a living catalog of components in every state.

Change: restore or rewrite the missing design-system sources so that code comments point to real files; reconcile `v1.md` Section 21 and D-25 with what shipped.

Build: a small kit of container forms (BRD-037); a written detail spec (BRD-038); the competitor audit and one-page strategy (BRD-042); construction rules for `LessonPath` as the product's system-level signature (BRD-043).

## Personality, voice and the relationship with a learner

### The brand personality scale

Aaker defined brand personality as "the set of human characteristics associated with a brand" and derived five dimensions from how people rate well-known brands on human traits: Sincerity, Excitement, Competence, Sophistication and Ruggedness [@aaker1997dimensions]. The method was careful. From 309 candidate traits reduced to 114, 631 respondents from a national panel rated subsets of 37 brands; a five-factor solution explained 92 percent of the variance and was stable across subsamples; the final scale has 15 facets and 42 traits; test-retest correlations for the dimensions were between .74 and .77 and Cronbach's alphas between .90 and .95; and a second sample of 180 respondents rating 20 brands confirmed the structure (CFI .98) [@aaker1997dimensions]. Three dimensions resemble human Big Five traits (Sincerity, Excitement and Competence map to Agreeableness, Extroversion and Conscientiousness); Sophistication and Ruggedness do not, and Aaker suggests they tap aspirations [@aaker1997dimensions]. Competence's typical traits include reliable, responsible, dependable and efficient; Sincerity's include domestic, honest, genuine and cheerful [@aaker1997dimensions].

### Do brands have personalities at all?

The scale's critics are strong. Azoulay and Kapferer argue that such scales merge several facets of identity and so do not measure personality strictly; cross-cultural replications show only partial overlap; and Aaker's item pool includes demographic traits that blur personality with user imagery [@aaker1997dimensions]. Romaniuk and Ehrenberg go further. Using their own data, they report that respondents rarely attribute personality traits such as "Charming" or "Helpful" to brands, and that there is little evidence that competing brands have distinct personalities, so the value of the concept to buyers choosing brands and to marketers designing strategy is questionable [@romaniuk2012brands]. Their paper is a short commentary from the group that champions distinctiveness, not an independent test, and the disagreement may partly be one of method: forced scaled ratings produce personalities; free responses rarely do [@romaniuk2012brands].

Fournier's relationship theory comes from the other direction. From three in-depth life-history case studies (12 to 15 hours of interviews per participant over three months), she argued that consumers form relationships with brands that vary by life situation, from committed partnerships to marriages of convenience, and proposed brand relationship quality as a diagnostic concept [@fournier1998consumers]. In her account, brand personality is a set of trait inferences consumers form from the brand's repeated behaviors, which is a behavior-based reading rather than a rating-scale one [@fournier1998consumers]. Three cases cannot say how common any relationship form is, and critics argue relationship talk overstates what people feel about ordinary products [@fournier1998consumers].

Taken together, the defensible position for design is narrow. Personality is a useful tool for keeping a product's voice and visual register consistent, because it gives a team shared words. It is not proven to drive choice, and it is unlikely that learners will describe LTF in human-trait terms. What they will notice is behavior: whether the product is clear, calm, honest and the same every time.

::: {.rule #BRD-044 grade="D"}
**Use a brand personality only as an internal tool for consistent voice and register, not as a promise to learners or a predictor of sign-ups.** The five-dimension scale is psychometrically careful [@aaker1997dimensions], but whether consumers attribute distinct personalities to competing brands is disputed [@romaniuk2012brands]. Graded D: the evidence conflicts.

*In LTF:* choose Competence (reliable, responsible, dependable, efficient) with a trace of Sincerity (honest, genuine) as the internal register, and use it to settle copy and visual disputes. Do not write a persona essay, and do not market LTF as "your friendly instructor".
:::

::: myth
**"People choose brands for their personalities, so a product needs a vivid persona."** The personality scale shows people can rate brands on human traits when asked [@aaker1997dimensions], but in free-response data respondents rarely attribute such traits to brands, and competing brands show little distinct personality [@romaniuk2012brands]. A persona may help a team write consistently; there is no good evidence it wins learners.
:::

### Voice as behavior

Fournier's behavioral account and Romaniuk and Ehrenberg's skepticism point to the same practical answer: a brand's character is perceived through what it repeatedly does [@fournier1998consumers; @romaniuk2012brands]. For a learning product, what it does is mostly words: how it explains, how it corrects, how it handles not knowing, how it marks what is unverified. Part XXIV, Writing and Microcopy, covers the craft of these words; the identity point is that LTF's voice is already its most consistent and distinctive behavior, and the visual identity has not caught up with it.

The dossier's samples show a recognizable voice: "Yes, you can fly a plane." "Read a little. Try it on the page. Fly it in the sim." "Bronze means you did it safely. Gold is checkride-ready." "You've wandered off the taxiway." And, most distinctive of all, the honesty lines: "Learn to Fly is in public beta. Lessons and challenges are still being checked in the sim"; "Draft · unverified"; "This badge celebrates your simulator practice on Learn to Fly. It is not a pilot certificate and has no value for real-world flying." Rams's sixth principle states the value behind these lines: good design is honest, does not overstate innovation, power or value, and makes no promises it cannot keep [@rams2026good]. Few products in any category put their own uncertainty in the interface, which is what makes this trait unusually ownable.

::: {.rule #BRD-045 grade="C"}
**Treat honesty about verification and limits as a signature of the LTF brand, and give it a consistent visual form.** Good design does not overstate value or make promises it cannot keep [@rams2026good]; brand character is inferred from repeated behaviors [@fournier1998consumers], and distinctive cues are those competitors do not share [@romaniuk2018building]. Craft principle plus inference; no study tests honesty as a brand asset.

*In LTF:* `BetaBanner`, `DraftBadge`, `UnverifiedWarning`, the "Last verified" line on `SpeedsPage`, the `verify` callout and the "not a pilot certificate" note already exist. Give them one shared form (for example one annotation style, modeled on the way printed manuals mark revised or provisional material) so that learners come to recognize "LTF tells you what it has checked".
:::

::: {.rule #BRD-046 grade="C"}
**Write a short voice guide of concrete rules instead of a personality description.** Personality descriptions may not be perceived by users at all [@romaniuk2012brands], while consistent behavior is what forms a brand's character [@fournier1998consumers]. Expert inference from conflicting evidence.

*In LTF:* the house rules in `AGENTS.md` (US English, second person, no em dashes, units, MSL or AGL) are the start. Add the few rules that carry character: calm over excited, no exclamation marks in safety text, name the limit plainly, short declaratives for instructions, a single dry line of humor at most on non-safety pages (as the 404 does).
:::

### Calm over bravado, and who controls intensity

Aaker's Excitement (daring, spirited, imaginative) and Ruggedness (tough, outdoorsy) dimensions are the registers many flight and gaming brands adopt [@aaker1997dimensions]. Orth and Malkewitz's typology associates them with contrasting and massive designs [@orth2008holistic]. For a beginner who may be anxious about a complex machine, a calm, competent register is a better fit, with excitement reserved for earned moments such as a Gold result. Fournier's finding that consumers hold very different kinds of relationships with brands (some committed, some convenient, some avoidant) supports letting learners set the intensity of motivational features, rather than imposing one persona on everyone [@fournier1998consumers].

::: {.rule #BRD-047 grade="C"}
**Keep the default register calm and competent, and reserve celebratory energy for earned results.** Excitement and ruggedness registers are associated with contrasting, massive designs [@orth2008holistic; @aaker1997dimensions], which suit a beginner's anxiety poorly; consumers hold varied relationship types with brands, so intensity should not be imposed [@fournier1998consumers]. Inference from rating studies and case research.

*In LTF:* the `tier-pop` animation and Gold styling on the result card are the right place for energy. Lesson pages, Fly mode and errors stay quiet. Any future streaks, reminders or praise get a setting on `/account` that lets the learner turn them down.
:::

::: {.rule #BRD-048 grade="C"}
**Do not add a mascot or character to inject personality.** The evidence that consumers attribute personality to brands is contested [@romaniuk2012brands], and a character would add a large new asset with no measured fame or uniqueness and a strong register that may not suit a safety-minded beginner [@romaniuk2018building]. Expert inference.

*In LTF:* the personality is carried by the voice, the honesty forms and the drawn instruments. If a character is ever proposed, it must pass the asset tests in BRD-011 and BRD-012 and the register test in BRD-047 before it ships.
:::

### What this means for Learn to Fly

LTF's voice is ahead of its look. The copy is calm, specific, honest and occasionally dry; the visual layer is neutral and borrowed. The task is to make the look say what the voice already says.

Keep: the hero line, the "Read a little" sequence, the tier sentence, the taxiway 404, every honesty line, the instructor framing in `v1.md`.

Change: give honesty a visual form shared by `BetaBanner`, `DraftBadge`, `UnverifiedWarning`, `Callout` type `verify` and the "Last verified" line (BRD-045); fix the default `<title>` in `index.html`, which breaks the no-em-dash rule that is part of the voice.

Build: a one-page voice guide of rules (BRD-046); a register statement (Competence with Sincerity) in the identity strategy (BRD-044); an intensity setting before any motivational feature ships (BRD-047).

## Where identity lives in a product

### Touchpoints, ranked by exposure

Wheeler's fourth phase, creating touchpoints, is the work of carrying an identity into every place a person meets the brand [@wheeler2012designing]. For a packaged good the touchpoints are the pack, the shelf and the advertisement. For LTF they are the places a learner's eyes rest, and they differ greatly in how often they are seen and how much attention they get. A practical ranking:

| Touchpoint | Exposure | Attention to brand | Identity job |
| --- | --- | --- | --- |
| Browser tab, favicon | every session | glance | recognize at 16 px |
| Header lockup | every page | low | sign the page |
| Lesson page chrome | most time spent | low | quiet signature |
| Fly mode | long, under load | minimal | stay out of the way |
| Share card, search result | first contact | brief, decisive | attribute before reading |
| Landing hero | first visit | high | show what only LTF has |
| Result card, course complete | rare, earned | high | the signature moment |
| 404, empty, error states | rare | moderate | voice and care |
| Printed kneeboard | in the cockpit | glance | sign the paper |

The table follows from evidence already given. Exposure builds familiarity [@montoya2017reexamination]; first contact sets expectations quickly [@lindgaard2006attention]; and branding of every message matters because a learner may meet any page without context [@romaniuk2003measuring].

::: {.rule #BRD-049 grade="C"}
**Assign each touchpoint an explicit identity job, and design brand expression to the attention it gets.** Identity work extends to every touchpoint as a distinct phase [@wheeler2012designing]; exposure builds familiarity [@montoya2017reexamination] while brief first encounters set expectations [@lindgaard2006attention]. A practitioner framework combined with experimental findings.

*In LTF:* adopt the table above as the touchpoint map in the identity strategy. Each row names its components (`Logo`, `PageHeader`, `FlyModeLayout`, `ResultView` result card, `NotFoundPage`, the reference print styles) and the cues each must carry.
:::

### The first glance

Lindgaard and colleagues found that ratings of a page's visual appeal after a 50 ms exposure correlated .97 with ratings after 500 ms, and that repeated 500 ms ratings correlated .97 with each other [@lindgaard2006attention]. The result shows agreement between judgments, not that a decision is made in 50 ms or is final, and appeal is not usability or credibility [@lindgaard2006attention]. Tuch and colleagues showed that complexity drives those first judgments earliest and that atypical sites are disliked [@tuch2012role]. For identity, these findings define the first-glance job: the first screen should be visually simple, typical in structure and still carry at least one cue that is unmistakably LTF's, because the glance that judges appeal is the same glance that has to attribute the page.

The landing page today is simple and typical, which the evidence rewards, but its one large visual element is a click-to-load video with a red play disc and no thumbnail. The things only LTF has (drawn instruments, the lesson path, the Brief, Fly, Debrief sequence) are below the fold or absent. The plan's original direction put a detailed Skyhawk illustration in the hero; the shipped landing says "no airplane illustration". Either can work. What cannot work is a hero whose only image is a generic video frame.

::: {.rule #BRD-050 grade="B"}
**Put one unmistakably LTF element in the first view of the landing page, inside a simple, typical layout.** Visual appeal is judged consistently within a fraction of a second, with simple and prototypical pages preferred [@lindgaard2006attention; @tuch2012role], and recognition depends on distinctive cues being present at that moment [@romaniuk2018building]. The first-impression findings are replicated for appeal, not for recognition, so the second half is inference.

*In LTF:* replace or supplement the `YouTubeEmbed` block in the hero with a drawn element from the widget system (for example an airspeed dial or attitude indicator drawn in the instrument tokens, or the `LessonPath` of Module 0), keeping the 7fr/5fr grid. The video can move below.
:::

::: myth
**"Visitors decide about your site in 50 milliseconds, so the first frame is everything."** Ratings of appeal after 50 ms agree closely with ratings after 500 ms [@lindgaard2006attention], but that shows people can judge a page from a glimpse, not that they must decide that fast or that the judgment is final; critics also note that appeal is not usability or credibility [@lindgaard2006attention]. The first frame sets expectations; the lessons decide whether learners stay.
:::

### The quiet signature in working surfaces

Rams's fifth principle is that good design is unobtrusive: products that serve a purpose are like tools, neutral and restrained, leaving room for the user [@rams2026good]. In LTF that applies with full force to the lesson body and to Fly mode, where the learner's attention belongs to the content or to the sim. Rand's mark-in-a-corner advice and his point that a logo identifies rather than performs [@rand1991logos] suggest the form of the brand there: a signature, not a show.

A quiet signature is still a signature. In the lesson page, it is the horizon line in `SectionNav` and the tab underline, the mono lesson code in accent, the `display-*` title once the heading system is unified, and the drawn widgets. In Fly mode, it is the type voice in the title, the mono stopwatch digits with the `accent-line` running dot, and nothing else.

::: {.rule #BRD-051 grade="C"}
**In Fly mode and lesson bodies, limit brand expression to a quiet signature: the horizon line, the type voice and the readout numerals.** Good design in a tool is unobtrusive and leaves the user's attention for the task [@rams2026good]; a mark identifies rather than performs [@rand1991logos]. Craft authority, consistent with attention research covered in Part VII, Perception and Attention.

*In LTF:* `FlyModeLayout` currently shows no header or footer, which is right; but the `BetaBanner` appears above it on every page. Consider a smaller beta note inside Fly mode. Add only the fin at small size in a corner, and keep instruments, steps and the stopwatch the visual focus.
:::

### Signature moments

Some moments deserve more brand than others because they are rare, earned and remembered: the first completed lesson, a challenge result, a Gold tier, course completion. These are the places where Excitement belongs (see the chapter on personality and voice) and where a product can afford a distinctive composition. LTF already treats them differently: the result card centers a `TierBadge` with `tier-pop` and a large mono percentage; course completion shows a `CourseBadge` wings roundel. They are also the moments a learner is most likely to screenshot or share, which makes them publicity in Ehrenberg's sense [@ehrenberg2002brand].

::: {.rule #BRD-052 grade="C"}
**Design the result card and course completion as LTF's signature compositions, and make them shareable with the brand intact.** With a calm default register (BRD-047), rare and earned moments are where an exciting, contrasting register can appear without changing the brand's overall impression [@orth2008holistic; @aaker1997dimensions], and shared images act as publicity that maintains salience [@ehrenberg2002brand]. Inference from rating studies and an argued position.

*In LTF:* the result card (`ResultView`) and the course-complete panel on `DashboardPage` should use the type voice, the fin and the horizon line, and offer a share image generated from the same template as `og-image.png`. Keep the honest line that the badge is not a pilot certificate on every shared version.
:::

### Small surfaces where care shows

The 404 page ("You've wandered off the taxiway"), empty states and errors are rare but revealing: they show whether a product's character holds when something goes wrong. LTF's empty and error states share one dashed box with a generic icon, which the dossier lists among the generic traits. Vignelli's responsibility to the public, that a design "should stand by itself, without excuses, explanations, apologies" [@vignelli2010canon], is a good standard for these surfaces: they should be as considered as the main pages.

::: {.rule #BRD-053 grade="C"}
**Give empty, error and not-found states the LTF voice and at least one LTF-specific visual cue.** Every detail contributes to the whole, and a design should stand by itself without apology [@vignelli2010canon]; brand character is inferred from consistent behavior, including in failure [@fournier1998consumers]. Craft authority.

*In LTF:* keep the taxiway 404 line. In `States.tsx`, replace the generic lucide `Inbox` and `SearchX` icons in `EmptyState` with a small set of drawn, subject-specific glyphs in the house stroke (an empty kneeboard clip, a blank logbook page), and center the box where it is the only content.
:::

### What this means for Learn to Fly

The identity is weakest exactly where it is most needed. The share card shows another identity; the favicon is good; the landing hero's one image is a video; the working surfaces carry the brand quietly, which is right, but the type voice they should carry does not exist yet; the signature moments are distinct but not shareable; the failure states are generic.

Keep: the absence of chrome in Fly mode; the `tier-pop` result; the wings roundel; the taxiway 404.

Change: the landing hero's visual (BRD-050); the generic state icons (BRD-053); the full `BetaBanner` in Fly mode (BRD-051).

Build: the touchpoint map (BRD-049); one share-image template used by the share card, result cards and course completion (BRD-052, BRD-009).

## Testing whether the identity works

### Why taste is not enough

Roberts, Gray and Lesnik's metro map experiments are a warning for any design decision made by preference. On a Paris map, 63 of 80 people planned journeys faster with a curvilinear design than with the official octolinear one, yet preference between the two was split (38 to 34, with 8 undecided) and aggregate ratings did not differ; a survey of 649 map enthusiasts showed a clear bias toward the octolinear style regardless of performance [@roberts2017preference]. People's ratings reflected their theories about good design. Identity decisions are especially exposed to this, because everyone has taste in logos and color and almost no one has data. The evidence-based tests below are cheap enough for a small product and match the methods used in the research this Part relies on.

::: {.rule #BRD-054 grade="B"}
**Do not accept a team's or a panel's preference as evidence that an identity works; measure recognition and attribution.** Subjective ratings of designs can be unrelated to performance and track people's theories about design [@roberts2017preference]; brand assets are defined by measured links between cue and brand, not by intention [@romaniuk2018building]. One set of experiments on maps, plus a measurement framework.

*In LTF:* a redesign proposal includes at least one of the tests in this chapter, with the result, in its pull request. "The owner likes it" and "it looks modern" are recorded as opinions, not evidence.
:::

### Test 1: unprompted attribution

Romaniuk's method asks category buyers what brand an element brings to mind, with the name removed, and warns that prompted questions inflate fame scores [@romaniuk2018building]. A small-scale version suits LTF: show five to ten flight-sim learners (from a forum or the beta list) each candidate asset alone (the fin, a card with the horizon line, a `LessonPath` fragment, a drawn instrument in the house style, a screen with the name blurred) and ask an open question such as "Where have you seen this?" or "What do you think this is from?". Record every answer. An asset is gaining fame when LTF is named; it is unique when competitors are not. A new product will score near zero on fame at first, by definition [@romaniuk2018building]; the value of an early test is in the uniqueness answers, which show whether a candidate already evokes someone else.

::: {.rule #BRD-055 grade="C"}
**Test candidate assets with open, unprompted questions and the name hidden, and record competitor mentions as well as LTF mentions.** Fame and uniqueness are measured by category buyers' links between an element and brands, and prompted questions inflate fame [@romaniuk2018building]. The method is a practitioner measurement framework without agreed thresholds.

*In LTF:* run the test before a wider launch and again after each major identity change, with the same stimuli, and keep the raw answers in `docs/` beside the asset register so trends can be read.
:::

### Test 2: true and false recognition

Van der Lans and colleagues measured recognition by showing logos for two seconds each, inserting a short distracter task, and then asking people to pick the ones they had seen from a set that mixed targets and distracters; false recognition (claiming a distracter) was measured alongside true recognition [@vanderlans2009cross]. The design is easy to copy and suits LTF because the two-second exposure approximates the glance at a tab icon or a thumbnail. Include airline and aviation-brand tail marks among the distracters. A high false-recognition rate for those means LTF's fin resembles them; a high false-recognition rate for LTF's fin, when it was not shown, means it feels generic.

::: {.rule #BRD-056 grade="B"}
**Measure the mark's true and false recognition with brief exposures and aviation distracters before treating it as final.** Natural designs raised true recognition and lowered false recognition across ten countries, while harmonious designs raised false recognition, in a two-second exposure test [@vanderlans2009cross]. A replicated design and measure; the specific stimuli for LTF are untested.

*In LTF:* show 10 to 20 marks (the fin, two or three variants, competitor and airline tails) for two seconds each, wait a few minutes, then show a mixed set. Use the result to settle the stripe angle and the gap in `Logo.tsx` before regenerating icons.
:::

### Test 3: the first-impression test

The brief-exposure method of Lindgaard and Tuch is cheap: show screenshots of the landing page, a lesson page and competitor pages for a fraction of a second, then ask for a rating of appeal [@lindgaard2006attention; @tuch2012role]. For identity, add two questions after a longer exposure: "Which of these have you seen before?" (with the current and proposed LTF designs among unfamiliar pages) and "Which two look most alike?". The second question measures convergence directly: if participants pair LTF with a generic template or a competitor, the identity is not doing its job. Reinecke and colleagues found that age and education shape first impressions (in their sample, people older than 45 liked low complexity more than other age groups) and that even award-nominated sites were widely disliked by some raters [@reinecke2013predicting], which is a reason to recruit testers who resemble LTF's actual learners rather than colleagues.

::: {.rule #BRD-057 grade="B"}
**Run a brief-exposure test of key screens against competitors, and ask which screens look alike as well as which look appealing.** Appeal ratings after very brief exposures are consistent with longer ones, and complexity and typicality drive them [@lindgaard2006attention; @tuch2012role]; a page that is typical without being novel is the convergence this Part is about [@hekkert2003most]. The appeal method is replicated; the similarity question is an adaptation.

*In LTF:* test `LandingPage`, `LessonPage` and `ChallengePage` screenshots in Day and Night against three competitor pages and one unbranded component-kit template. Repeat after the redesign and compare.
:::

### Test 4: what learners say about the product

Romaniuk and Ehrenberg propose two tests of brand personality that work as identity checks: how often people attach human-trait descriptions to a brand when free to choose their own words, and whether those descriptions differ between competing brands [@romaniuk2012brands]. Aaker's scale gives a structured alternative: have a handful of beginners rate screens on a few traits from the intended dimensions (reliable, honest, efficient) and a few from the unintended ones (daring, tough) [@aaker1997dimensions]. The free-description version is the better first step for LTF, because it does not put words in the learner's mouth. After a first session, ask: "How would you describe Learn to Fly to a friend who flies in the sim?". If answers are functional ("clear", "step by step", "tells you what's verified"), the product's behavior is being perceived; if answers could describe any course, the identity is not.

::: {.rule #BRD-058 grade="C"}
**After a first session, ask new learners to describe LTF in their own words, and check whether the description could apply to any other course.** Free-response incidence and distinctiveness of descriptions are proposed tests of whether a brand character exists at all [@romaniuk2012brands]; the trait scale offers a structured follow-up [@aaker1997dimensions]. Expert proposals from opposing camps, used here as a qualitative check.

*In LTF:* add the question to any learner interview or beta survey. Track whether "honest about what's checked", "Fly mode" or "Brief, Fly, Debrief" appear unprompted; those are the associations the identity is meant to carry.
:::

### Test 5: reading behavior over time

Two findings govern how to read numbers after an identity change. Liking for visual material rises with exposure before it levels off [@montoya2017reexamination], so first-view reactions to a new look are not a stable measure; and small brands show lower loyalty partly because they are small [@ehrenberg1990double]. The practical consequences are to measure attitudes after several sessions as well as the first, and to judge return visits against LTF's own history.

::: {.rule #BRD-059 grade="B"}
**Measure reactions to a new identity after several sessions, not only at first view, and compare behavior with LTF's own history.** Liking changes with repeated exposure, following an inverted U for visual material [@montoya2017reexamination]; small brands' lower loyalty reflects size [@ehrenberg1990double]. Both findings are well supported; their size for LTF is unknown.

*In LTF:* if the redesign is rolled out gradually, compare cohorts on return within two weeks and on lesson completion, and survey liking at the first and fourth session. Do not declare a redesign a failure because first-day reactions are cool.
:::

### What this means for Learn to Fly

None of these tests needs a research budget. Each can be run with a handful of learners from the beta, a slide deck and a spreadsheet, and each produces a record that outlasts opinions. The risk to avoid is the one Roberts documents: deciding by the preferences of people who already have a theory of good design, which in practice means the owner, the designer and the AI agent writing the code.

Keep: the beta audience and the "Report a problem" link in `BetaBanner` as a recruiting channel.

Build: a small test kit in `docs/` (stimuli, scripts, result templates) for the five tests; a rule in the identity strategy that any change to a slow-layer element (BRD-036) carries a test result (BRD-054).

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

1. **Distinctiveness over claimed superiority.** LTF's identity aims to be recognized, not to argue that it is better. Copy makes no unverifiable superiority claims; design effort goes into cues a learner can recognize (BRD-001, BRD-009).
2. **Typical structure, distinctive identity layers.** Page structure, navigation, reading order and control behavior stay conventional; the mark, type voice, color use, drawings and naming carry the brand (BRD-002, BRD-033).
3. **One identity direction, recorded.** A Decision Log entry states whether the shipped type-led, warm-neutral, teal identity or the plan's D-25 livery direction is current, and `og-image.png`, `index.html`, `manifest.webmanifest` and `v1.md` Section 21 are brought into line with it (BRD-004).
4. **Inherited defaults are reviewed.** The ink pill button and pill segmented control, the eyebrow over every heading, raw Tailwind heading sizes, mixed icon strokes and hand-inlined cards are treated as identity decisions to be replaced or justified, not as neutral defaults (BRD-003, BRD-028, BRD-030).
5. **Separate recall and recognition cues.** The name and a short typed phrase serve recall; the fin, the horizon line and the share card serve recognition; each is checked in its real context (BRD-005, BRD-016).
6. **An association map exists.** LTF's intended associations are written in Keller's categories, with the unique ones marked (verified in the sim, Fly mode on a second screen, Brief, Fly, Debrief) (BRD-006, BRD-010).
7. **Every route is signed.** Every page, including Fly mode and print, carries a quiet LTF signature, and the title format "Page title · Learn to Fly" is used everywhere (BRD-007, BRD-031, BRD-051).
8. **Metrics are read against LTF's own history.** Low return rates in a small product are not, by themselves, evidence that the identity or lessons failed (BRD-008, BRD-059).
9. **Assets are candidates until measured.** The fin, the horizon line, the `LessonPath`, the drawn instruments, the readout numerals and the Brief, Fly, Debrief naming are candidates; a register records their specification, surfaces and pace layer (BRD-011, BRD-012, BRD-015, BRD-036).
10. **The horizon line has one meaning.** The `accent-line` treatment marks position and progress only; hover borders and decorative uses are removed (BRD-013).
11. **Status colors are never brand.** The red `bg-warn` play disc in `YouTubeEmbed` is redrawn; `warn` and `caution` stay for alerts and destructive actions (BRD-014, BRD-020).
12. **The fin stays, drawn once.** The mark remains a natural, descriptive tail-fin drawing of moderate elaboration; every icon and share image is exported from the shared paths; a one-color variant is added; small-size and false-recognition checks run before wider launch (BRD-017, BRD-018, BRD-019, BRD-021, BRD-023, BRD-056).
13. **The mark makes no claims.** No taglines, badges or certification cues inside the lockup (BRD-022).
14. **A perceptual spec and a type voice.** The perceptual layer is specified apart from components, and one display voice (a `font-display` token or a defined Instrument Sans treatment) is used only in brand moments; one heading system is used everywhere (BRD-024, BRD-027, BRD-028).
15. **Compositions are reviewed whole.** Key screens are judged at thumbnail size against competitors for a calm, refined register that does not slide into nondescript (BRD-025, BRD-026).
16. **Color is defended by role.** The brand color is justified by its role and its distinctness from aviation clichés, not by psychology charts (BRD-029).
17. **One geometry.** Radii, stroke weights and a recurring diagonal derive from the mark and instruments (BRD-030).
18. **Signature constant, compositions varied.** Small cues repeat identically; large structures vary by task and across the course (BRD-031, BRD-032, BRD-033).
19. **Aviation conventions are not brand material.** Instrument colors and chart conventions follow the aircraft and charts (BRD-034).
20. **The identity has a custodian and machine-readable rules.** The owner is custodian; the rules are referenced from `AGENTS.md` and the `ltf-review` checklist (BRD-035).
21. **A kit and a detail spec.** A small set of container forms on the spacing scale and written limits for text details replace ad hoc cards and padding (BRD-037, BRD-038, BRD-039).
22. **Identity draws on the subject.** New identity ideas come from checklists, handbooks, charts, panels and kneeboards before other software, and pass the semantics, syntactics, pragmatics gate (BRD-040, BRD-041).
23. **Missing phases are completed.** A recorded competitor audit and a one-page identity strategy precede further visual work (BRD-042).
24. **`LessonPath` is the system signature.** Its construction rules are written and reused for curriculum, roadmap, module progress and challenge sequences (BRD-043).
25. **Register and voice.** Competence with a trace of Sincerity is the internal register; a short rule-based voice guide replaces any persona; no mascot; energy is reserved for earned results; motivational intensity is learner-controlled (BRD-044, BRD-046, BRD-047, BRD-048).
26. **Honesty is a brand signature.** Beta, draft, unverified and "not a pilot certificate" messages share one visual form (BRD-045).
27. **Touchpoints have jobs.** The touchpoint map sets the identity job of each surface; the landing hero shows one unmistakably LTF element; the result card and course completion are shareable signature compositions; empty, error and 404 states carry the voice and a drawn cue (BRD-049, BRD-050, BRD-052, BRD-053).
28. **Identity decisions are tested.** Preference is not evidence; unprompted attribution, true and false recognition, brief-exposure comparison, free description and multi-session measures are the tests (BRD-054, BRD-055, BRD-056, BRD-057, BRD-058, BRD-059).

### Review checklist

Run these questions against a pull request that touches the client's look, a new page or component, or any outward-facing asset. A "no" needs a reason recorded in the pull request.

#### Direction and defaults

- Does the change follow the identity direction recorded in the Decision Log, and if it changes that direction, does it add a new entry and update every outward-facing asset? (BRD-004)
- Does the change keep page structure, navigation and control behavior conventional? (BRD-002, BRD-033)
- Does any new element copy a perceptual signature from another product (an ink pill, a pill toggle, a stock hero layout) rather than an LTF decision? (BRD-003)
- Does any copy claim superiority that a beginner cannot verify? (BRD-001)

#### Signature and assets

- Is the page signed with the `Logo` lockup or, in Fly mode and print, with the quiet signature, and does its title follow "Page title · Learn to Fly"? (BRD-007, BRD-031, BRD-051)
- Is the `accent-line` horizon line used only for position and progress? (BRD-013)
- Is any status color (`warn`, `caution`, `go`) used for decoration or brand? (BRD-014)
- Does the change alter a registered asset, and if so, is there a Decision Log entry and a test result? (BRD-015, BRD-036, BRD-054)
- If a new candidate asset is proposed, is it plausibly unique within aviation education, and has an unprompted test been planned? (BRD-011, BRD-012, BRD-055)

#### The mark and outward-facing files

- Is every icon, favicon and share image generated from the shared fin paths in the current colors? (BRD-023)
- Does the mark still work in one color, at 16 pixels, and on Day and Night grounds? (BRD-021)
- Does any outward-facing image include negative flying imagery, or claims inside the lockup? (BRD-020, BRD-022)
- Would the share card or result image be attributable to LTF before its text is read? (BRD-009, BRD-052)

#### Perceptual layer

- Do headings use the `display-*` and `heading-*` utilities, not raw `text-2xl font-bold` and similar classes? (BRD-028)
- Is the display voice used only in brand moments, never in body, labels or buttons? (BRD-027)
- Do icons use the house stroke width, and do new shapes follow the shared geometry? (BRD-030)
- Is a color choice argued from its role rather than from color psychology? (BRD-029)
- Viewed at thumbnail size beside competitors, does the screen read as calm and refined rather than nondescript? (BRD-025, BRD-026)
- Do large structures vary by task, or does the page repeat one card form throughout? (BRD-032, BRD-037)

#### Subject, system and voice

- Does the design draw on the subject's own artifacts, and can the author answer the semantics, syntactics and pragmatics questions? (BRD-040, BRD-041)
- Are instrument colors and chart conventions left exactly as the aircraft and charts show them? (BRD-034)
- Does a new progress or sequence display reuse the `LessonPath` construction rules? (BRD-043)
- Are honesty messages (beta, draft, unverified, limits) in the shared honesty form? (BRD-045)
- Does the copy follow the voice guide's rules, with calm as the default and energy only in earned moments? (BRD-046, BRD-047)
- Does the change add a mascot, persona copy or a motivational feature without a learner-controlled intensity setting? (BRD-044, BRD-047, BRD-048)

#### Touchpoints and evidence

- Which touchpoint does the change affect, and does it perform that touchpoint's identity job? (BRD-049)
- If the change affects the landing hero, does the first view contain one unmistakably LTF element inside a simple layout? (BRD-050)
- Do empty, error and not-found states carry the LTF voice and a drawn cue? (BRD-053)
- Is the evidence for an identity change a measured result rather than a preference, and will reactions be measured after several sessions? (BRD-054, BRD-056, BRD-057, BRD-058, BRD-059)
- Are behavior metrics compared with LTF's own history, not with large products? (BRD-008)
