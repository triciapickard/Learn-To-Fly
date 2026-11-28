# Color: Science, Meaning and Access

Color is the design variable most often decided by taste and defended by folklore. This Part replaces both with what can be shown. It runs from the physics and physiology of color vision (why hue is a coarse signal and lightness a strong one), through the standards that measure color and the perceptual spaces that make token ramps behave, to the context effects that make a correct swatch look wrong on the page. It then tests the popular claims about color meaning against their replications, sets out what is known about color and emotion, preference and learning, and ends with the material that most directly governs the product: color vision deficiency, contrast standards, display polarity in light and dark themes, and color as a signal in alerts, status and data.

The evidence is uneven, and the grades say so. The physiology and colorimetry are among the most secure findings in this book: trichromacy, opponent processing, the non-uniformity of the CIE diagram and simultaneous contrast have been replicated for a century or more. The psychology of color meaning is the weakest: several headline effects (red lowers test scores, blue helps creativity, red wins fights) have shrunk to nothing in larger studies. Contrast thresholds are standards, graded C, with a modest experimental base on polarity and reading behind them. Every chapter applies its findings to Learn to Fly by name, and several of the applications rest on numbers computed for this book from the values in `src/styles/tokens.css`: WCAG contrast ratios, Oklch coordinates and simulated color-deficient views of the status pairs. Use the rules as gates in review, and the closing decision list as the summary of what this Part settles for LTF.

## Light, Cones and Opponent Channels

### Color is made by the viewer

Newton's prism experiments established that white sunlight is a mixture of rays that differ in how strongly they bend, and that each ray carries a color no later refraction changes [@newton1704opticks]. Read in the 1704 printing, his central proposition is broad: all the colors made by light, and not by imagination, are either the colors of homogeneal lights or compounds of them. He describes the separated spectrum as violet, indigo, blue, green, yellow, orange and red, "with all their intermediate degrees in continual succession", and says there are as many degrees of color as there are sorts of rays [@newton1704opticks]. The seven names are labels laid on a continuum, not seven measured kinds of light.

Newton also gave the first rule for mixing. He divided a circle into seven arcs, placed a weight at the center of each arc in proportion to the amount of that color, and took the common center of gravity: its direction from the center gave the hue of the mixture, its distance the "fullness", and the center itself meant white [@newton1704opticks]. He admitted the rule was accurate enough for practice but not mathematically exact, that he could never make a perfect white from two primaries, and that red mixed with violet gives a purple that is not in the spectrum at all. Helmholtz later repeated Brewster's challenges to the prism results under tighter controls and found no departure from Newton's predictions [@helmholtz1924treatise].

What Newton placed in the light, Young placed in the eye. In his 1802 Bakerian Lecture, Young argued that if each sensitive point of the retina needed a separate particle tuned to every possible frequency, the retina would need an unlimited number of them, so "it becomes necessary to suppose the number limited, for instance, to the three principal colours, red, yellow, and blue" [@young1802theory]. Two details of that sentence matter. The triplet he named was red, yellow and blue, the painters' primaries, not the red, green and violet that popular accounts attribute to him; no source consulted for this book shows when or whether he changed it. And the receptors are broadly tuned: each can be moved "less or more forcibly" by frequencies "differing less or more from a perfect unison", which is already the idea of overlapping sensitivity curves [@young1802theory]. The argument was by economy, not by measurement, and priority is contested, since George Palmer proposed a three-particle retina in the 1770s and 1780s.

Helmholtz turned the hypothesis into a working framework. His Handbuch supported Young's suggestion with color-mixing measurements and color-blind observers, distinguished additive from subtractive mixing, and drew speculative sensitivity curves for three kinds of fibres, captioned in the English translation as red-sensitive, green-sensitive and violet-sensitive [@helmholtz1924treatise]. The curves overlap; they are not separate bands. He did not at first embrace Young's idea and became a proponent after Maxwell's color-disc work of 1855, and his results rested almost entirely on his own observations [@helmholtz1924treatise].

### Three cones, measured

The three-cone picture was confirmed physiologically in the twentieth century, and the current standard estimates of cone sensitivity come from Stockman and Sharpe [@stockman2000spectral]. Their method is worth knowing because it explains why the numbers are trusted. They measured observers who lack one cone class, so that the missing cone cannot contaminate the measurement of the other, and they genotyped those observers so that the photopigment each carried was known. The abstract reports M-cone data from nine protanopes and L-cone data from 20 deuteranopes; Stockman's later review gives twenty-two deuteranopes, and the discrepancy cannot be settled without the paper's own text [@stockman2000spectral]. The resulting cone fundamentals were sanctioned by the CIE in 2006 as physiologically relevant standards for mean normal color vision.

Three facts from this work bear on design. First, a single cone cannot signal wavelength: photon absorption is all-or-nothing, so each cone's response is "univariant", light is represented by three numbers, and any two lights that produce the same three cone responses match even if their spectra differ [@stockman2000spectral]. Such matching pairs are metamers. Second, every set of color-matching functions, for real or imaginary primaries, is a linear transformation of the cone fundamentals, which is why one good set of matching data can generate all the others. Third, the standard describes a mean observer. The commonest natural shift in the L-cone pigment is about 3 nm, caused by a single amino-acid substitution, and individuals differ in lens density, macular pigment and photopigment density in ways the standard does not capture [@stockman2000spectral]. Peaks quoted for the fundamentals (near 570, 543 and 442 nm for L, M and S in one citing source) differ from pigment peaks (near 560, 530 and 420 nm) because the fundamentals include the filtering of lens and macula.

::: {.rule #COL-001 grade="B"}
**Do not promise that a color on an LTF page matches the color a learner sees in the simulator.** Matching is a property of one observer and two spectra: lights that produce equal cone responses match for that observer and may not for another, and the standards describe only a mean observer whose lens, macular and pigment variation is not modeled [@stockman2000spectral]. Hunt and Pointer's treatment of metamerism and of precision in colorimetry exists because such claims fail in practice [@hunt2011measuring]. Wide-gamut monitors with narrow primaries widen the differences between observers.

*In LTF:* lesson copy and widget captions say "similar to" or "a simplified version of" the sim's display colors, never "the same as". The fixed instrument tokens (`arc-green`, `display-magenta` and the others) are drawing colors chosen for the widget, not reproductions of the simulator.
:::

### The second stage: opponent channels

Trichromacy explains matching but not appearance. Hering had observed that reddish greens and yellowish blues are never seen, although yellowish greens and bluish reds are common, and that staring at a red patch leaves a greenish afterimage. His hypothesis was that the three cone signals feed later stages organized in opposing pairs: red against green, yellow against blue, and a non-opponent black against white channel [@hurvich1957opponent]. Hurvich and Jameson gave the idea a quantitative footing with hue cancellation. For each wavelength the observer adds a cancelling light until one perceived hue disappears (green to cancel redness at short wavelengths, blue to cancel yellowness in the middle of the spectrum); the amount needed measures the strength of the cancelled hue, its chromatic valence, and plotting valence against wavelength gives the opponent curves [@hurvich1957opponent]. In the illustrative data reproduced in teaching accounts of the method, 450 nm carries a blue valence near minus 1.0 and a red valence near 0.2, which is why it looks violet; no single wavelength gives unique red, since even 700 nm needs a little blue to cancel its yellowness.

Opponency as a feature of visual processing is no longer in question; neural responses mirroring it were recorded from the 1950s. The stronger claim, that the psychophysical hue axes are the neural axes, is contested. A 2017 tutorial by Shevell and Martin (not itself in this book's bibliography, and reported here through the secondary accounts of the Hurvich and Jameson work) argues that unique hues vary between observers (especially blue, red and green), that they do not line up with the cone-opponent axes found in the retina and thalamus, and that there are no "red-green" or "blue-yellow" cells as such [@hurvich1957opponent]. One source gives a range of 490 to 555 nm for unique green across people. The modern synthesis, which also settled the Helmholtz and Hering dispute, is a two-stage model: three cone classes first, opponent recoding second [@helmholtz1924treatise; @hurvich1957opponent].

For a designer the two-stage model has three consequences, each of which recurs throughout this Part. The achromatic channel carries fine detail and does not depend on hue, so text and thin marks must be separated from their ground by luminance. The red-green channel is the one that fails in the commonest forms of color vision deficiency (see the chapter on color vision deficiency), so a red-green pair is the weakest two-way distinction a UI can rely on. And the receptors are broadly tuned, so hue is a coarse signal: small hue steps carry little.

::: {.rule #COL-002 grade="B"}
**Separate text, thin strokes and any must-see mark from its background by luminance contrast, never by hue difference alone.** The black-white opponent channel carries the detail that reading needs and is independent of hue [@hurvich1957opponent]. Buchner and Baumgartner found that red text on a green background, a hue contrast without a luminance contrast, could not compensate for the missing luminance difference in proofreading [@buchner2007text], and the WCAG Understanding document states that hue matters less than light-dark difference [@w3c2024wcag]. The limit: this governs legibility and detection of detail, not the coding of large areas, where hue can label categories.

*In LTF:* every text token pair is checked for luminance contrast (the chapter on contrast lists the computed ratios). A colored label such as the `text-accent` lesson code "Lesson 0.1" passes because `accent` (#00757c) is dark enough on `canvas` (5.03:1), not because teal differs from grey.
:::

::: {.rule #COL-003 grade="B"}
**Do not encode a quantity or a state in small hue differences; make hue steps large or add a second channel.** Young's receptors are broadly tuned and overlapping [@young1802theory], hue categories are labels on a continuum [@newton1704opticks], and efficient visual search for a color target needs a difference far larger than a just-noticeable one [@wolfe2004what]. Small hue shifts are therefore discriminable side by side under good conditions and unreliable at a glance on an unknown screen.

*In LTF:* the Day `caution` (#945a00, hue near 67 degrees in Oklch) and `tier-gold` (#906200, hue near 77) differ by about ten degrees of hue at nearly the same lightness; they are told apart only by their words and context, which must stay. No widget may show "slightly warmer" as a meaningful state.
:::

::: {.rule #COL-004 grade="B"}
**When a two-way distinction must rest partly on hue, prefer the blue and yellow axis to the red and green axis, and still add a non-color cue.** The commonest color vision deficiencies weaken the red-green opponent signal, while blue against yellow survives for red-green deficient viewers [@hurvich1957opponent; @machado2009physiologically]. Okabe and Ito, themselves protanopes, build their figure guidance on the same principle of varying hue and lightness along axes dichromats can still discriminate [@okabe2008color]. The axis choice reduces risk; it does not remove it, since tritan deficiencies, though rare, weaken blue against yellow.

*In LTF:* the product's own status pair is red against green (`warn` and `go`). Where a new binary indicator is drawn in a widget (for example "inside the target band" against "outside"), use the accent teal against an amber or ink state, with a shape change, rather than introducing another red-green pair.
:::

::: {.rule #COL-005 grade="C"}
**Keep large, saturated, high-luminance flashes out of dark full-screen views.** Hering's observation that a red patch followed by a neutral field leaves a complementary ghost is part of the evidence for opponent processing [@hurvich1957opponent]; a bright saturated patch on a dark screen, followed by the dark cockpit of a simulator, invites exactly that afterimage. The rule rests on a classical observation and on reasoning about the viewing situation, not on a test of web interfaces, hence grade C.

*In LTF:* the Fly mode random-event alert uses a `border-4 border-warn` frame on `bg-warn-tint` and a ring that pulses outward (`warning-pulse`) rather than a full-screen red fill. Keep it that way: the attention cue is the ring, the beep and the word, not a flood of saturated color across a dark screen.
:::

::: {.rule #COL-006 grade="C"}
**In learner-facing copy about vision, call the cones long-, middle- and short-wavelength cones, and describe color as made by the eye and brain, not as a property of light.** The cone names "red, green and blue" are shorthand for broadly tuned, overlapping sensitivities [@helmholtz1924treatise; @stockman2000spectral], and Young's own 1802 triplet was red, yellow and blue [@young1802theory]. Copy that says a cone "sees red" teaches a false model, and a beginner who holds it will expect color names on an instrument to be physical facts.

*In LTF:* a lesson on reading glass-cockpit colors, or a "Sim vs reality" `Callout` about monitor color, says that the same display can look different on two screens and to two people, and points to the label or position as the reliable cue.
:::

### How strong the evidence is

The physiological story in this chapter is grade A as science: three cone classes, confirmed by single-cone measurements and by the genotyped psychophysics behind the CIE fundamentals, and an opponent second stage confirmed by neural recordings [@stockman2000spectral; @hurvich1957opponent]. What is contested lies at the edges: which hue triplet Young meant, who has priority, whether unique hues correspond to neural axes, and how cone signals combine (the yellow-blue equilibrium locus is dog-leg shaped, suggesting a nonlinear combination). None of those disputes changes the design consequences. The rules above are graded B or C not because the physiology is weak but because the step from physiology to a specific interface choice is an inference, supported by experiments such as Buchner and Baumgartner's [@buchner2007text] rather than tested directly on LTF's screens.

One more consequence of trichromacy is a hard limit on reproduction. Because screens mix three primaries additively, they can only show colors inside the triangle those primaries span; Newton's center-of-gravity rule already implied that a mixture lies between its components [@newton1704opticks]. Spectral colors and some saturated simulator renderings simply cannot be shown on an sRGB page, a point the chapter on perceptual color spaces turns into a rule about gamut mapping.

### What this means for Learn to Fly

**Keep.** The token system already separates luminance from hue in the way this chapter requires. The ink ladder (`ink`, `ink-2`, `ink-3`) is near-neutral at Oklch chroma of about 0.003 in both themes, so all ordinary reading text is carried by luminance alone. The single saturated non-status color, `accent`, is dark enough in Day (#00757c, 5.03:1 on `canvas`) and light enough in Night (#56d3da, 10.30:1 on the Night `canvas`) to work as text. The quiz result in `QuizBlock` pairs `text-go` with a `CheckCircle2` icon and the word "Correct!", and `text-warn` with an `XCircle` icon and "Not quite.", so the red-green pair never stands alone.

**Change.** The status pair `go` and `warn` in Day differ almost only in hue: computed for this book with the WCAG relative-luminance formula, `go` (#006c43) and `warn` (#b71824) have a luminance ratio of only 1.02 to each other. To the achromatic channel they are the same grey. That is acceptable only because every use carries an icon or a word, so treat the icon and word as mandatory, never optional, in `Badge`, `Callout`, `Toast` and `FormField` errors. The `PasswordStrengthMeter` colors its bar with `bg-warn`, `bg-warn`, `bg-caution`, `bg-go`, `bg-go`, a red-to-green ramp for an ordered quantity; it must show its strength word beside the bar (COL-003, COL-004).

**Build.** Add a short "Sim vs reality" explainer to Module 0 that tells learners their monitor, room light and own eyes all change what a color looks like, and that the app always names or labels what a color means (COL-001, COL-006). Add an authoring rule to `content/README.md` that lessons never describe cones by color names.

## Measuring Color: Standards, Order and Difference

### The 1931 standard observer

In 1931 the Commission Internationale de l'Eclairage adopted a way to specify a color by three numbers, so that two lights with the same numbers match for a standard observer. Smith and Guild's long paper in the Transactions of the Optical Society explained the system and its use, covering the trichromatic method, new colorimetric terms and the theory of transformations between primaries [@smith1931cie]. The data underneath came from matching experiments in the late 1920s by W. David Wright with ten observers and John Guild with seven, who matched test colors with three primaries at 700, 546.1 and 435.8 nm in a field two degrees across [@smith1931cie]. That field size is why the result is called the 2-degree standard observer; it was tied to the belief that the color-sensitive cones lay within about two degrees of the fovea.

Matching with real primaries needs negative amounts of some primary for many test colors. The CIE transformed the data to imaginary primaries X, Y and Z so that all matching functions were non-negative, which simplified calculation by hand [@smith1931cie]. Two choices from that transformation shape every web color tool. The y function was set equal to the photopic luminous efficiency function V(lambda), so Y is luminance. And chromaticity was defined by normalizing away intensity: x = X/(X+Y+Z), y = Y/(X+Y+Z), with z = 1 − x − y, and equal-energy white at x = y = z = 1/3 [@smith1931cie]. The transformations are valid only because color matching is linear and additive, as stated in Grassmann's laws, which have been tested extensively and hold well.

The standard's limits are well documented. It holds for small foveal fields, which is why a 10-degree supplementary observer followed in 1964. It describes additive mixing only. The short-wavelength end of the luminosity function was later corrected by Judd and by Vos. Stockman argues that the 1931 functions inherit a flawed 1924 V(lambda) that underestimates luminance at short wavelengths, a view to read knowing that he is an author of the competing cone-based standard [@stockman2000spectral]. And, most important for design, distances on the xy diagram do not correspond to perceived differences.

### Equal distances are not equal differences

MacAdam measured how precisely a trained observer could match one color to another [@macadam1942visual]. The observer viewed a fixed test color and adjusted a second field to match it, repeatedly; the standard deviation of the matches, plotted on the CIE chromaticity diagram, formed an ellipse around each target. The abstract states the finding: small, equally noticeable chromaticity differences are represented by the radii of a family of ellipses, and those ellipses vary greatly in size and orientation across the diagram [@macadam1942visual]. The test field was held at constant luminance (15 millilamberts on a 7.5 millilambert surround, per the abstract) under Illuminant C. Secondary accounts report 25 color points and a single trained observer; those details are secondhand.

The famous plot draws the ellipses at ten times their true size. If matches follow a bivariate normal distribution, a 1X ellipse contains about 39 percent of matches, a 2X about 86 percent and a 3X about 99 percent, and the just-noticeable chromaticity difference is generally taken as about the 3X ellipse [@macadam1942visual]. Lighting engineers still describe the color precision of a lamp in "standard deviations of color matching" defined on these ellipses.

The qualitative result has been replicated by every later study: Brown and MacAdam extended it to ellipsoids including luminance in 1949, and others followed [@macadam1942visual]. No transformation can turn all the ellipses into equal circles, and the later uniform spaces (CIE 1960 UCS, CIELUV, CIELAB) only reduced the spread. The original data set is small by modern standards, one observer and a 2-degree field, so the specific ellipses are not universal thresholds; discrimination ellipses stayed relatively unchanged for luminances between 3 and 30 cd/m², which says nothing about very dim interface states.

::: {.rule #COL-007 grade="A"}
**Never judge how different two colors look by their distance in RGB, hex, HSL or CIE xy; use a perceptual difference measure.** MacAdam's ellipses vary widely in size and orientation across the chromaticity diagram, so equal distances there are not equal visual differences, and this has been replicated by every later study; even the later uniform spaces only reduce the problem [@macadam1942visual; @smith1931cie]. RGB and HSL are device encodings and inherit the same non-uniformity.

*In LTF:* when comparing tokens (whether `ink-2` and `ink-3` are far enough apart, whether two chart series are distinct), compute the difference in Oklab or with CIEDE2000, never by eyeballing hex values or a color picker's HSL sliders.
:::

::: {.rule #COL-008 grade="B"}
**Make any two states that must be told apart at a glance differ by many just-noticeable steps, not one or two.** MacAdam's thresholds were measured with a trained observer matching adjacent fields under laboratory conditions [@macadam1942visual]; a beginner scanning a busy screen beside a simulator is far from that. Wolfe and Horowitz add that efficient color search needs differences much larger than a MacAdam ellipse, and that the efficient region does not even look like a scaled ellipse [@wolfe2004what]. The rule is graded B because the threshold for "at a glance" on LTF's screens has not been measured.

*In LTF:* the Day tier tokens `tier-gold` (#906200), `tier-silver` (#5f6469) and `tier-bronze` (#8c5331) sit within 0.03 of each other in Oklch lightness (0.53, 0.50 and 0.50, computed for this book), and gold and bronze are only about 0.06 apart in Oklab. As rings they are near-identical in lightness; the printed tier word and the ring shape carry the distinction, and must continue to.
:::

### Color order: hue, value and chroma

Munsell's contribution was to insist that every color has three independent qualities and to measure them [@munsell1907color]. Hue is the quality that distinguishes a red from a yellow; value distinguishes a light color from a dark one; chroma is the "strength of color", which separates a strong color from a weak one at the same hue and value. He called "intensity" a misleading synonym for chroma. Two dimensions are not enough: diagrams of hue and value that leave out chroma are, in his comparison, as incomplete as a map of Switzerland with the mountains left out [@munsell1907color].

His solid has white at the north pole, black at the south, a neutral grey axis between, and chroma running outward from the axis. Five principal hues (R, Y, G, B, P) and five intermediates give ten hue names, which he thought as many as a child could handle at the outset; value runs from 0 for black to 10 for white. The notation is hue, then value over chroma: vermilion is R 5/9, a buttercup YR 7/9, a wild violet B 3/4 [@munsell1907color]. The buttercup is more stimulating than the violet partly because it is lighter and partly because its chroma is five steps higher. And because pigments differ in the chroma they can reach, the true solid is an irregular "color tree" with branches of unequal length: the maximum chroma available differs by hue.

Munsell's own spacing was set by his judgment. The Optical Society's committee (Newhall, Nickerson and Judd, 1943) renotated the system by new visual estimates and defined it in CIE terms under Illuminant C, aiming at psychological equal spacing; later renotations proposed alternatives, and one source holds that a system built on radiating polar coordinates can never be completely uniform [@munsell1907color]. His physical explanations, such as value as the height of "ether waves", belong to his time and should not be cited. The three-quality model, and the irregular solid, have lasted.

::: {.rule #COL-009 grade="C"}
**Specify every design color by three perceptual coordinates (lightness, chroma and hue), and decide each one deliberately.** Munsell's demonstration that hue and value without chroma describe only part of a color [@munsell1907color] is reinforced by the color-psychology literature's complaint that chroma has been almost entirely overlooked and that device-level color specification confounds the dimensions [@elliot2014color]. Grade C: this is a craft and standards consensus about specification, not an experimental finding.

*In LTF:* the token comments in `tokens.css` describe roles ("one saturated non-status color, the horizon line") but the values are hex. Each token's usage note should record its Oklch triplet, as tabulated in the chapter on perceptual color spaces, so a reviewer can see that `accent` is a medium-lightness, moderate-chroma teal and not just "#00757c".
:::

### Computing difference correctly

The industrial standard for small color differences is CIEDE2000, published by the CIE in 2001. Sharma, Wu and Dalal showed that implementing it is harder than it looks [@sharma2005ciede2000]. The formula rescales the a* axis using the mean chroma, computes lightness, chroma and hue differences each divided by a weighting and a parametric factor, and adds a rotation term that matters mainly in the blue region, around 275 degrees of hue. Its worked examples in the CIE report were too few to catch mistakes: several implementations circulating on the Internet, including some from reputable sources, agreed with those examples and were still wrong.

The paper lists the traps. Use a four-quadrant arctangent and convert hue to 0 to 360 degrees. Compute the chroma and hue differences as signed quantities; using absolute values breaks only the cross term, an error that is hard to see because it is localized in the blue region. Handle the mean hue carefully, since a literal reading of the published equations can give angles above 360 or below zero, and most implementations of the time got this wrong. Check symmetry by swapping the two colors. The authors supply 34 test pairs designed to exercise exactly these cases (pairs 1 to 6 for the signed differences, 7 to 16 for the arctangent and mean hue, 17 to 20 for large differences, 25 to 34 reproducing the published data), and recommend agreement to four decimal places [@sharma2005ciede2000].

They also document small discontinuities. The main one arises when two hue angles about 180 degrees apart are averaged and the mean flips; at chroma 2.5 the largest jump in the difference is 0.2734, which the authors call relatively small but not negligible [@sharma2005ciede2000]. The discontinuities rule out gradient-based optimization over the formula. The paper addresses computation only, not whether the formula matches perception, and the formula is meant for small differences.

::: {.rule #COL-010 grade="C"}
**Verify any color-difference code against Sharma, Wu and Dalal's 34 test pairs before trusting its output, and do not optimize palettes by gradient descent on CIEDE2000.** Implementations that matched the CIE's own examples were still wrong, and the formula has discontinuities that break continuous optimization [@sharma2005ciede2000]. For palette search, use a continuous space such as Oklab [@ottosson2020perceptual]. Check the license of any reference code before copying it; the author's page provides it as is and says it is not an official CIE implementation.

*In LTF:* if a palette check is added to the test suite (a script that warns when two chart or status tokens are too close), use a library that publishes its CIEDE2000 validation, or use Euclidean distance in Oklab, and keep the test pairs as fixtures.
:::

### The measurement side of the subject

Fairchild's Color Appearance Models and Hunt and Pointer's Measuring Colour are the two references a team should own when a defensible number is needed [@fairchild2013color; @hunt2011measuring]. Hunt and Pointer's stance is that measuring color involves the observer's physiology and psychology, not only instruments, and their chapters map onto LTF questions: RGB colorimetry for describing display primaries, metamerism and color constancy for why a sim screenshot and a web color diverge across monitors, precision and accuracy before anyone claims a color is "exactly" the sim's, and color order systems for naming [@hunt2011measuring]. Neither book is a source for aviation color conventions, which must come from aviation documents.

::: {.rule #COL-011 grade="C"}
**Base every contrast and legibility calculation on relative luminance (CIE Y, linearized), never on lightness coordinates, saturation or perceived brightness.** In the CIE system Y was defined as luminance by setting the y function equal to V(lambda) [@smith1931cie], and the WCAG contrast ratio is computed from relative luminance with linearized channels [@w3c2024wcag]. Perceptual lightness (Oklab L, CIELAB L*) is a different quantity designed for spacing, not for the standard's contrast test [@ottosson2020perceptual].

*In LTF:* the contrast check for `tokens.css` linearizes each sRGB channel and weights them 0.2126, 0.7152 and 0.0722 before applying the ratio; the Oklch table is used only for ramp spacing.
:::

::: {.rule #COL-012 grade="C"}
**Cite a color-science source for any color-science fact stated in a lesson or component note, and never copy formulas into tokens from memory.** The facts in this chapter are easy to garble (Young's triplet, the meaning of Y, the status of the 1931 functions), and the reference works exist to settle them [@hunt2011measuring; @fairchild2013color]. Grade C: an evidence-discipline rule.

*In LTF:* a "Sim vs reality" callout that explains why the PFD looks different on a phone cites this Part or Hunt and Pointer; a code comment that defines a color formula links its source.
:::

### What this means for Learn to Fly

**Keep.** The token system already defines colors by role and holds them constant within a theme, which is the precondition for measuring them. The fixed instrument and chart tokens are deliberately separate, so their measurement can be done once.

**Change.** Hex values alone hide the perceptual structure. The Day ink ladder shows why: `ink-2` (#595856) and `ink-3` (#6a6967) are 0.06 apart in Oklch lightness (0.46 and 0.52) and give 6.53:1 and 5.04:1 on `canvas`. Two text levels that close are a distinction few readers will perceive, which is a reason either to widen the gap or to retire one level (COL-007, COL-008). The tier rings in `Badge` and the landing tier legend should never be shown without their words, since gold, silver and bronze in Day share almost one lightness (COL-008).

**Build.** Add a small script under `scripts/` (or a test beside the tokens) that parses `tokens.css`, converts each token to Oklch, computes the WCAG ratio for each declared text and ground pair, and computes Oklab distance for pairs that must be distinguishable (status pairs, tier pairs, chart series). Use Sharma's pairs as fixtures if CIEDE2000 is used (COL-010, COL-011). Store the output as a generated table so that design review reads numbers, not swatches.

## Perceptual Color Spaces and Token Ramps

### Why a perceptual space

A design system needs a color space in which simple operations behave: stepping lightness evenly, changing chroma without shifting hue, blending two colors without a muddy middle. Device spaces (sRGB, HSL, HSV) fail at all three, because they encode what a display emits, not what a viewer sees. The CIE answered with CIELAB and CIELUV, and color science went on to full appearance models (CIECAM02, CAM16) that account for adaptation, surround and luminance [@fairchild2013color]. Fairchild's book teaches why viewing conditions matter and what a model must predict; it also shows, by devoting a chapter to testing models and another to the question "why not just CIELAB", that no model is accepted as complete [@fairchild2013color]. CIECAM02 has documented numerical problems under extreme blue adaptation, which CAM16 was designed to fix.

For a web app, the appearance-model machinery is too heavy for runtime use. The practical choice is Oklab, introduced by Björn Ottosson in a 2020 technical post [@ottosson2020perceptual]. His assessment of the alternatives, as written: CIELAB and CIELUV predict hue poorly, especially for blues; CAM16-UCS is good overall but numerically poorly behaved, not scale invariant, and compresses chroma in a way that hurts blending; IPT has excellent hue uniformity but poor lightness and chroma prediction; HSV fails nearly every requirement. Oklab keeps IPT's simple structure while aiming at CAM16-level lightness and chroma prediction [@ottosson2020perceptual].

### How Oklab was built, and what it does not do

The derivation used three data sets: equal-lightness and equal-chroma pairs generated with CAM16 under normal viewing conditions and limited to Pointer's gamut, and uniform-hue pairs from the IPT data [@ottosson2020perceptual]. The transform has three steps: a matrix from XYZ to an LMS-like cone space, a cube root on each component, and a second matrix to L, a and b. The fitted exponent came out at 0.323 and was fixed at one third; D65 white maps to L = 1 with a = b = 0, and positive b points to the same yellow as CAM16. Oklch is the polar form, with chroma C as the length of (a, b) and hue h as its angle. In the root-mean-square errors on the page, smaller being better, Oklab scores 0.20 on lightness against CIELAB's 1.70, 0.81 on chroma against 1.84, and 0.49 on hue against 0.69 (with JzAzBz best at 0.43) [@ottosson2020perceptual].

The limits are stated by the author and matter for design. There is no peer-reviewed validation in what the research for this book found. The lightness and chroma test data were generated by CAM16, not collected from observers, so the page cannot show which model best matches human perception. Oklab claims perceptually orthogonal coordinates, not exact spacing along each axis. It is exposure invariant and does not model viewing conditions such as the background color; it is designed for a well-lit viewing condition. And sRGB has an awkward shape in Oklab, so editing in Oklch easily produces colors the screen cannot show [@ottosson2020perceptual]. CSS Color Module Level 4 defines `oklab()` and `oklch()`, and browser support reached baseline status in 2023.

The starting matrix is a cone-like space, which is no accident: every color-matching system is a linear transform of the cone fundamentals [@stockman2000spectral], and Oklab builds on that physiology before its nonlinearity.

### LTF's tokens in Oklch

The following values were computed for this book from the hex values in `src/styles/tokens.css`, using Ottosson's published transform. L is lightness from 0 to 1, C is chroma, h is hue in degrees.

| Token | Day (L, C, h) | Night (L, C, h) | Note |
| --- | --- | --- | --- |
| `canvas` | 0.97, 0.003, 68 | 0.19, 0.004, 107 | warm-neutral ground |
| `surface` | 1.00, 0.000 | 0.24, 0.004, 85 | cards |
| `ink` | 0.20, 0.004, 85 | 0.94, 0.003, 85 | body text |
| `ink-2` | 0.46, 0.003, 85 | 0.76, 0.003, 85 | supporting text |
| `ink-3` | 0.52, 0.003, 85 | 0.66, 0.003, 85 | meta text |
| `accent` | 0.51, 0.087, 202 | 0.80, 0.110, 200 | the horizon line |
| `accent-line` | 0.63, 0.107, 202 | 0.74, 0.126, 200 | underlines, connector |
| `go` | 0.47, 0.108, 159 | 0.82, 0.130, 162 | status |
| `caution` | 0.52, 0.115, 67 | 0.85, 0.140, 85 | status |
| `warn` | 0.50, 0.190, 25 | 0.76, 0.146, 25 | status |
| `tier-gold` | 0.53, 0.111, 77 | 0.84, 0.130, 85 | tier |

Three patterns are visible. The greys are genuinely neutral (chroma near 0.003) and the hue is held near 85 degrees, so the ink ladder is a clean lightness ramp. The Day status colors cluster at L between 0.47 and 0.52, so `go`, `caution` and `warn` differ in hue and chroma but hardly in lightness. And `warn` in Day carries by far the highest chroma in either theme (0.190), which makes it the loudest token in the system; that is correct for a warning and a problem wherever `warn` is used for anything else (see the chapter on color as signal).

The Night ink ladder has a different shape from the Day one. In Day the steps from `ink` to `ink-2` to `ink-3` are 0.26 and then 0.06 in L; in Night they are 0.18 and then 0.10. The tertiary level is better separated in Night than in Day.

::: {.rule #COL-013 grade="C"}
**Author theme ramps in Oklch: hold hue constant within a ramp, step lightness in planned increments, and set chroma by role.** Oklab's lightness and chroma predictions are far closer to the CAM16 reference than CIELAB's, and its hue prediction is better too [@ottosson2020perceptual]; Munsell's three qualities are the model being implemented [@munsell1907color]. Grade C because Oklab itself lacks independent perceptual validation, and the rule is a practice built on it.

*In LTF:* the ink ladder is already a hue-held ramp. New ramps (a chart sequential scale, a dark-theme surface ladder) are written in `oklch()` in `tokens.css`, with the intended L steps stated in the comment.
:::

::: {.rule #COL-014 grade="B"}
**Cap chroma separately for each hue rather than applying one saturation value across a palette.** The maximum chroma reachable differs by hue (Munsell's irregular color tree), so a vivid yellow and a vivid blue cannot be balanced at equal chroma or equal area [@munsell1907color]; the sRGB gamut is irregular in Oklab, so a uniform chroma target produces out-of-gamut colors for some hues [@ottosson2020perceptual]. Grade B: the hue dependence of maximum chroma is long established, though its application to a UI palette is practice.

*In LTF:* the Night status tokens already vary chroma by hue (`go` 0.130, `caution` 0.140, `warn` 0.146). When the palette is extended, set each new hue's chroma from what the sRGB gamut allows at the target lightness, not from a shared number.
:::

::: {.rule #COL-015 grade="C"}
**Never use a difference in Oklab or CIELAB lightness as a substitute for the WCAG contrast ratio.** Perceptual lightness is designed for even spacing, while the standard's contrast test is defined on relative luminance with a flare term [@w3c2024wcag; @ottosson2020perceptual]. The two disagree most for dark colors, where a small luminance difference can be a large lightness difference.

*In LTF:* the Night `canvas` (L 0.19) and `line` (L 0.34) are 0.15 apart in lightness, which looks generous, yet their contrast ratio is only 1.57:1. The ramp tool may plan in L; the gate is always the ratio.
:::

::: {.rule #COL-016 grade="C"}
**Map out-of-gamut colors by reducing chroma at constant hue and lightness, never by clipping channels.** Clipping changes the proportion of primaries and shifts hue; the stated goal is to avoid hue shifts while reducing chroma as little as possible [@ottosson2020perceptual]. Editing in Oklch makes out-of-gamut values easy to produce, so the mapping must be explicit.

*In LTF:* any token authored in `oklch()` is checked against the sRGB gamut in the token script; if out of gamut, its chroma is lowered until it fits and the resulting hex is recorded, so that browsers do not each clip it differently.
:::

::: {.rule #COL-017 grade="C"}
**Interpolate gradients and color transitions in Oklab, not in sRGB.** Oklab was built so that blends and gradients behave, and its structure avoids the chroma compression that hurts blending in CAM16-UCS [@ottosson2020perceptual]. CSS can request the interpolation space directly.

*In LTF:* the product uses few gradients; where `color-mix()` appears (the `warning-pulse` keyframes mix `warn` toward transparent "in srgb"), mixing in oklab would keep the ring's hue stable as it fades. This is a minor refinement, not a defect.
:::

::: {.rule #COL-018 grade="C"}
**Name tokens by role and let each theme map roles to values; never let components reference raw values.** Carbon's color system expresses every color as a role-based token so that the same component renders correctly in four themes without code changes, with groups such as background, layer, border, text, support and focus [@ibm2026carbon]. Grade C: vendor documentation of a practice, not research.

*In LTF:* `tokens.css` already does this (`canvas`, `surface`, `ink`, `accent`, `go`, `caution`, `warn`), and the AGENTS rule forbids raw hex in components. Keep the fixed instrument and chart tokens as the only exceptions, documented as such.
:::

::: {.rule #COL-019 grade="C"}
**Keep adjacent levels of a text or surface ramp at least about 0.08 apart in Oklch lightness, or merge them.** Distinctions smaller than many just-noticeable steps are not reliably seen in use [@macadam1942visual; @wolfe2004what], and a ramp level that cannot be told from its neighbor adds a token without adding a distinction. The 0.08 figure is a working threshold chosen for this product, not a published value; tune it by review, which is why the grade is C.

*In LTF:* Day `ink-2` and `ink-3` are 0.06 apart; Night `ink-2` and `ink-3` are 0.10 apart. Either lighten Day `ink-3` toward the 4.5:1 floor on `surface-sunken` (it is 4.73:1 there now, so the room is small) or fold `text-ink-3` (23 uses) into `text-ink-2` and keep three levels only in Night.
:::

### Viewing conditions the space ignores

Fairchild's catalogue of appearance phenomena is a checklist of what Oklab does not model [@fairchild2013color]. The Hunt effect is an increase in colorfulness with luminance, first described by R. W. G. Hunt in 1952: the same token looks more colorful on a bright screen than on a dimmed one. The Helmholtz-Kohlrausch effect is that a saturated stimulus looks brighter than an achromatic one of the same luminance, which is one reason a saturated `warn` button looks heavier than its luminance suggests. The Bezold-Brücke effect is a hue shift with intensity: most colors look less red or green and more blue or yellow as illumination increases [@fairchild2013color]. Chromatic adaptation and the surround change everything again. These effects are why a palette built in a perceptual space still has to be reviewed on real screens at real brightness, in the next chapter's terms.

### What this means for Learn to Fly

**Keep.** The neutral ink ladder, the role names, and the decision to vary chroma by hue in Night are sound. The Night palette is lighter for accents and keeps their hue (accent near 200 degrees in both themes, `warn` at 25 in both), which preserves identity across themes.

**Change.** Record Oklch values next to each token in `tokens.css` comments (the table above is a start), and resolve the Day `ink-2` and `ink-3` collision (COL-019). Plan in Oklch, gate on the WCAG ratio (COL-013, COL-015).

**Build.** Extend the token script proposed in the previous chapter to emit the Oklch table, flag gamut problems for any `oklch()` token, and report lightness gaps between adjacent ramp levels (COL-016, COL-019). If a chart palette or a sequential scale is added for the dashboard, define it in Oklch with a monotonic L and per-hue chroma caps (COL-013, COL-014).

## Context: Simultaneous Contrast and the Surround

### A dye that was not at fault

Chevreul's book begins with a workplace complaint. As director of dyeing at the Gobelins tapestry works he was told that the blacks used to shade blue and violet draperies lacked vigor [@chevreul1872principles]. Black wools bought from other workshops were no better. The weakness was not in the dye: it came from the color next to the black, a phenomenon of contrast. He concluded that he had two subjects, the chemistry of dyeing and the contrast of colors, and spent about ten years on both. His central statement is the law of simultaneous contrast: when the eye sees two contiguous colors at once, they appear as dissimilar as possible, both in optical composition and in height of tone [@chevreul1872principles].

He separated the effect into two parts. Placing two stripes side by side, either two tones of one color or one tone of two colors, the eye perceives changes in the intensity of each (contrast of tone) and in its optical composition (contrast of color), provided the stripes are not too wide. The translator's introduction to the English edition tabulates what happens to red: against blue it looks yellower, against yellow bluer, against green purer and brighter, against black duller, against white lighter and brighter, and against grey brighter [@chevreul1872principles]. He also described successive contrast (looking at a color calls up its complementary) and mixed contrast (the called-up color adds to a following one and dulls it). He applied the law to painting, tapestry, carpets, mosaics, printing, map coloring, dress and gardening.

Three qualifications keep Chevreul current. The existence of simultaneous contrast is robust, and Fairchild lists it first among appearance phenomena [@fairchild2013color]. But the rule that neighbors always become more dissimilar is too strong: in some displays assimilation occurs instead, with narrow luminance transitions producing assimilation and wide ones contrast, and no general quantitative model of simultaneous color contrast is accepted. The explanation by "added complementaries" is descriptive, not a mechanism. And Chevreul's red, yellow and blue primaries, with their complementary pairs (blue and orange, red and green, yellow and violet), are wrong for mixing lights; Munsell's appendix attacks this scheme and gives blue-green as the true complement of red [@munsell1907color]. Keep his observations and discard his wheel.

::: {.rule #COL-020 grade="A"}
**Never approve a color in isolation: judge every token on each surface it will appear on, next to its real neighbors, in both themes.** Simultaneous contrast is one of the oldest and most robust findings in color science: the same color changes in apparent hue and lightness with its surround [@chevreul1872principles; @fairchild2013color], and Albers built a whole curriculum on showing that one color can be made to look like two [@albers1963interaction]. The size and direction of the change depend on the configuration, so it must be checked, not predicted.

*In LTF:* `accent` is used as text on `canvas`, `surface` and `accent-tint`, as `accent-line` on the 1 px `line` baseline of `Tabs`, and as a progress fill. Review each of those contexts in Day and Night on `/dev/components`, which renders every component in every state, rather than approving the swatch in `tokens.css`.
:::

### Albers: color deceives continually

Albers taught color as an experience to be trained rather than a system to be memorized. His Interaction of Color grew out of his course at Black Mountain College and Yale; his foundation describes his rejection of color systems as having little practical value for artists and his preference for direct observation, with exercises that isolate one aspect of interaction at a time and move from simple to complex [@albers1963interaction]. He wrote that color "deceives continually", and held that color is relative and unstable, but also partly predictable, so that putting colors in specific contexts gives anticipatable results. The best-known problems ask students to make one color look like two, make two different colors look alike, and produce vibrating or vanishing boundaries and illusions of transparency from opaque papers [@albers1963interaction].

Albers offers demonstrations, not data; the effects are the simultaneous-contrast and assimilation phenomena that vision science catalogues [@fairchild2013color]. His view that systems are of little use is a teacher's position, and the measured systems in the previous chapters show that designers can use them. The book's plates are reproductions, so their effects vary with printing and screen. Sources disagree on the number of plates in the 1963 edition, so no count is given here.

Tufte imported Albers into information design as "1 + 1 = 3 or more": two elements placed together create a third, unintended visual effect, such as an incidental white path, vibration or pattern that carries no information [@tufte1990envisioning]. He states that this noise is directly proportional to the light-dark contrast between figure and ground, so on white backgrounds a range of lighter colors minimizes incidental clutter; that grids should be grey and delicate; and that in a look-up table the grid should be muted relative to the data. He ties the remedy to instruments: reducing noise can reduce viewer fatigue and improve the accuracy of readings from a computer interface or a flight-control display [@tufte1990envisioning].

::: {.rule #COL-021 grade="B"}
**Separate adjacent saturated colors with a neutral edge or a clear lightness gap.** Two saturated hues in contact shift each other and can produce vibrating boundaries [@chevreul1872principles; @albers1963interaction]; Tufte gives the same remedy for vibration in maps and tables, thinning or neutralizing the boundary [@tufte1990envisioning]. Grade B: the phenomenon is robust, and the remedy is craft practice consistent with it.

*In LTF:* the Fly mode stopwatch places an 8 px `accent-line` running dot inside an `ink` pill; keep it separated from any `warn` alert by surface. In the G1000 widget, magenta and green course elements drawn against `sky` and `ground` fills need a thin dark or light keyline where they cross those fields.
:::

::: {.rule #COL-022 grade="B"}
**Present every reproduction of a cockpit display or chart on a neutral, constant field.** Because the surround changes how a display's colors look [@chevreul1872principles; @fairchild2013color], an instrument drawing placed on a tinted card or a colored band will look different from the same drawing on grey. Fixing the drawing's own colors is not enough; the frame around it must be fixed too.

*In LTF:* the instrument tokens are fixed in both themes, but `WidgetFrame` sits on `bg-surface`, which is white in Day and near-black in Night. Give the drawing area its own fixed ground (the `instrument` token for glass displays, `chart-land` for the sectional) inside the frame, so the instrument colors are judged against the same surround in both themes. Do not place widgets inside tinted `Callout`s.
:::

### Large areas quiet, small areas strong

Tufte quotes Eduard Imhof's rules of color composition: pure, bright or very strong colors are unbearable when they stand unrelieved over large adjacent areas but can be used sparingly on or between dull background tones, and large background colors should be muted, greyish or neutral so that smaller bright areas stand out [@tufte1990envisioning]. Tufte's own color principles are "do no harm", four uses of color (to label, to measure, to imitate reality, to enliven), and a warning that more than 20 or 30 colors frequently produce negative returns for abstract information; he recommends a palette from nature, especially lighter blues, yellows and greys, with spot highlights of strong color [@tufte1990envisioning]. He also notes that the fourth Imhof rule is pushed too far toward a general aesthetic theory, citing Mondrian as a painter who violates it.

The color-and-emotion experiments in a later chapter point the same way: high saturation over large areas raises arousal [@wilms2018color; @valdez1994effects]. The cartographic rule and the laboratory finding agree, which is unusual enough to be worth acting on.

::: {.rule #COL-023 grade="B"}
**Keep large areas muted and near-neutral, and spend saturated color only on small elements that carry meaning.** Imhof's composition rules, as quoted by Tufte, and Tufte's own budget of a quiet ground with one or two spot highlights per screen [@tufte1990envisioning] agree with laboratory findings that saturated large fields are the most arousing [@wilms2018color]. Grade B: craft authority plus indirect experimental support.

*In LTF:* the warm-neutral `canvas` and white `surface` are the right grounds, and status tints are pale. The full-width `BetaBanner` in `bg-caution-tint` on every page, and the tinted `current` cards and resume bars in `bg-accent-tint`, are the largest colored areas in the product; keep them pale and few, and do not add tinted section bands to the landing page.
:::

::: {.rule #COL-024 grade="C"}
**Mute grid lines, borders and rules relative to the data or text they organize.** Dark structural lines create clutter and vibration in proportion to their contrast with the ground [@tufte1990envisioning]. The limit is accessibility: a boundary that is the only means of identifying an interactive component must still meet the non-text contrast minimum [@w3c2024wcag].

*In LTF:* the default `line` token (#dfdedc in Day, 1.24:1 on `canvas`) is suitably quiet for card edges and table rules, and `line-strong` (3.63:1 on `canvas`, 3.95:1 on `surface`) is reserved for input borders where the boundary identifies the control. Keep that split; do not use `line-strong` for decorative dividers.
:::

### Brightness and adaptation change appearance

The appearance effects of the previous chapter apply here with force. The Hunt effect makes colors look more colorful at higher luminance, and the Bezold-Brücke effect shifts hue with intensity [@fairchild2013color]. A learner's laptop at low brightness in a dim room, beside a bright simulator monitor, is a viewing condition that neither the CIE observer nor Oklab models [@smith1931cie; @ottosson2020perceptual]. MacAdam's ellipses were measured in daylight at moderate luminance and should not be extrapolated to very dim interface states [@macadam1942visual].

::: {.rule #COL-025 grade="B"}
**Review palettes at both high and low display brightness, and in a dim room, before accepting them.** Colorfulness and hue change with luminance (the Hunt and Bezold-Brücke effects), and adaptation to a surround changes appearance again [@fairchild2013color]; ColorBrewer's practice of filtering schemes by end-use environment (screen, print, projection, photocopy) treats viewing conditions as a design input [@harrower2003colorbrewer]. Grade B: the effects are established, and the review step follows from them.

*In LTF:* add "checked at minimum and maximum laptop brightness, Day and Night, and in a dark room beside a lit monitor" to the review of any change to `tokens.css` and to each widget's fixed colors.
:::

::: {.rule #COL-026 grade="C"}
**Never ask a learner to identify a color by name from a single swatch on a variable background; show labeled choices side by side.** Appearance depends on neighbors [@chevreul1872principles; @albers1963interaction], and color names are less reliably shared than labels (see the next chapter) [@berlin1969basic]. A quiz that asks "which indicator is the amber one?" tests the screen and the surround as much as the learner.

*In LTF:* quiz items in `QuizBlock` that involve display colors refer to a labeled element ("the pointer marked A") or to position ("the band at the top of the tape"), never to a bare color name.
:::

### Teaching context effects

Albers's method, show the effect and then explain it, is the right template for a beginner [@albers1963interaction]. A learner who has seen one swatch change on two backgrounds understands at once why the app labels its colors and why a screenshot of the sim may not look like their own screen. An interactive pair, the same patch on two surrounds with a slider that changes one surround, makes the principle experiential rather than asserted. Such a widget is cheap to build with the existing widget primitives.

### What this means for Learn to Fly

**Keep.** The neutral grounds and the pale tints; the decision that `Callout` spends its type color only on the 20 px icon and the title, with body copy in `ink`; the quiet `line` token for structure.

**Change.** Give widget drawings their own fixed ground inside `WidgetFrame` so instrument colors meet the same surround in Day and Night (COL-022). Audit large tinted areas (the `BetaBanner`, `bg-accent-tint` objective cards and resume bars) and keep their number and area small (COL-023). Add keylines where saturated widget colors meet `sky` and `ground` fills (COL-021).

**Build.** A small "Same color, two backgrounds" widget for Module 0 or the "Sim vs reality" material, built from the existing SVG primitives, so learners see why color is always paired with a label (COL-020, COL-026). Make `/dev/components` render each status and accent token on every ground in both themes side by side, which turns COL-020 into a page a reviewer can open.

## Color Names and Categories

### Categories on a continuum

Hue is continuous, but people use it in categories. Newton named seven regions of a spectrum that he described as continuous, with as many degrees of color as sorts of rays [@newton1704opticks]. Any interface that asks a viewer to tell "orange" from "yellow" at a glance is therefore asking for a category judgment on a continuous variable, and the answer depends on where that viewer, in that language, draws the boundary.

Berlin and Kay argued in 1969 that the way languages divide color is not arbitrary [@berlin1969basic]. Every language has some basic color terms, and the sets across languages follow a constrained order. In the strong form, terms are added in a fixed sequence: stage I has two terms (dark-cool and light-warm, read as black and white), stage II adds red, stage III adds green or yellow, stage IV has both, stage V adds blue, stage VI adds brown, and stage VII adds purple, pink, orange or grey, reaching eight or more terms [@berlin1969basic]. They proposed a universal inventory of eleven basic categories; English uses all eleven (black, white, red, green, yellow, blue, brown, purple, pink, orange, grey). A summary of the work puts its base at 20 languages studied experimentally and 78 more from the literature.

### A tendency, not a law

The hypothesis has been revised rather than abandoned, and its strong form has not held [@berlin1969basic]. Berlin and Kay loosened the ordering in later work; the World Color Survey found anomalies that require modifying the schema, though one review judged that they hardly invalidate the basic formulation. Critics argue that the methods and cultural assumptions are flawed, that some languages' "color" terms encode other properties such as dryness or freshness, that deciding which terms are basic is discretionary (English "orange" is a case in point), and that the clustering on which universality rests may be partly an artifact.

On the relativity side, a study of Berinmo speakers in Papua New Guinea, whose language has five basic color terms, found categorical perception effects only at the boundaries of each speaker's own linguistic categories, which its authors read as evidence that having words for categories shapes recognition and judgment. A later review argued that the Whorf hypothesis is "half right": naming affects color perception mainly in the right visual field, processed by the language-dominant left hemisphere, and cross-language naming reflects both universal tendencies and local convention. Those studies (Roberson, Davies and Davidoff 2000; Regier and Kay 2009) are reported here through the critical literature on Berlin and Kay and are not separately in this book's bibliography [@berlin1969basic]. The debate is not settled. The safe reading for design is that basic color terms are shared as a tendency, that category boundaries differ across languages, and that only a handful of hues can be named reliably.

::: {.rule #COL-027 grade="C"}
**When lesson or interface text must name a color, use a basic English color term (red, green, yellow, blue, orange, purple, pink, brown, gray, black, white) and never a designer's name for it.** Basic terms are the ones most reliably shared, while terms outside the set, and the boundaries between categories, vary between speakers and languages [@berlin1969basic]. Okabe and Ito make the same point from the side of color vision deficiency: state color names clearly where communication depends on them [@okabe2008color]. Grade C because the universality claim behind basic terms is contested; the rule rests on the weaker, uncontested point that basic terms are more widely shared.

*In LTF:* the `AirspeedArcs` legend already uses basic names ("White", "Green", "Yellow", "Red line"). Learner copy never says "teal", "amber" or "magenta" without a basic-term gloss; where the simulator's own label is "magenta", write "magenta (pink-purple)" on first use.
:::

::: {.rule #COL-028 grade="C"}
**Whenever a color name carries meaning, pair it with a label, an icon, a position or a shape that carries the same meaning.** Category boundaries differ across languages and individuals [@berlin1969basic], appearance shifts with the surround [@chevreul1872principles], and color-deficient viewers may not see the named difference at all [@okabe2008color]. A learner who reads English as a second language faces the first problem twice.

*In LTF:* the `AirspeedArcs` legend pairs each band's color name with its meaning in words and draws the red line as a different shape (a 3 px vertical mark rather than a band). That is the model for every widget legend. Lesson prose that says "the green arc" also says what it marks, using the lesson's own sourced wording and `{{vspeed.*}}` tokens rather than numbers typed by hand.
:::

::: {.rule #COL-029 grade="C"}
**Limit any set of colors that learners must name or remember to about six hues, plus black, white and gray.** English has eleven basic terms, three of which are achromatic and one of which (brown) is a dark orange, so few chromatic categories can be named reliably [@berlin1969basic]; Tufte warns of negative returns well before twenty or thirty colors for abstract coding [@tufte1990envisioning]. The figure six is a design limit derived from the term inventory, not a measured capacity, hence grade C.

*In LTF:* the page UI uses one accent and three status hues, which is within the limit. The widgets add arc colors, display magenta, cyan and green, sky, ground and chart colors; each widget should use only the subset it needs, and no lesson should require learners to remember more than a few color meanings at once.
:::

### The primaries myth

::: myth
**"Red, yellow and blue are the three primary colors, and red is the complement of green."** The claim comes from painters' pigments and from Chevreul's color wheel, in which complements were the secondary made from the other two primaries: blue and orange, red and green, yellow and violet [@chevreul1872principles]. It fails for light. Munsell's appendix "False color balance" calls the red, yellow and blue primaries a widely accepted error, says the theory behind them had long been dropped once the elements of color vision were found, and reports that the red-green, yellow-purple and blue-orange complements fail when tested with colored lights or Maxwell discs; he gives blue-green as the complement of red [@munsell1907color]. Young's 1802 triplet was red, yellow and blue as a hypothesis, not a measurement [@young1802theory]. Screens mix light additively from red, green and blue primaries, and complementary pairs for lights are found by mixing them to neutral, not from a painter's wheel.
:::

::: {.rule #COL-030 grade="B"}
**Do not teach a painter's color wheel or red, yellow and blue primaries in any lesson or design rationale; if complements are needed, use pairs that mix to neutral as lights.** The red-yellow-blue scheme and its complementary pairs are wrong for mixing lights, as Munsell's tests with lights and Maxwell discs showed [@munsell1907color], and the modern account of color vision does not support them [@hurvich1957opponent]. Grade B: the physics of additive mixture is secure, and Munsell's tests are early but consistent with it.

*In LTF:* this matters for any widget or lesson that explains display colors or afterimages. The text says that screens use red, green and blue light, and that an afterimage of red tends toward blue-green.
:::

::: {.rule #COL-031 grade="B"}
**Do not make a learner judge a category boundary between neighboring hues (orange against yellow, cyan against green, magenta against purple) without a second cue.** Hue is a continuum labeled with categories [@newton1704opticks], boundaries vary between people and languages [@berlin1969basic], and unique-hue settings vary between observers [@hurvich1957opponent]. Grade B: the individual variation is measured; the interface consequence is inferred.

*In LTF:* the G1000 widget uses `display-magenta`, `display-cyan` and `display-green`. Wherever the lesson depends on telling two of these apart (for example a course line against a reference line), the widget labels them in text or with a distinct line style, and the "Describe this diagram" text names each element.
:::

### Naming in the product's own vocabulary

The product names its themes "Day" and "Night" and its accent "the horizon line" in code comments. Those are design vocabulary, not color names, and are fine as long as learner-facing copy never relies on them to identify a color. The callout titles ("Safety", "Pro tip", "Classic panel") carry their meaning in words, which is what makes their tints decorative rather than load-bearing. The tier names Gold, Silver and Bronze are object names that suggest colors; the tiers are always printed as words, and the ring colors, which in Day sit at nearly one lightness, should be read as decoration of the word rather than as the code.

### What this means for Learn to Fly

**Keep.** The widget legends that pair basic color names with meanings and distinct shapes (`AirspeedArcs`), the always-printed tier words, and the worded callout titles.

**Change.** Add to `content/README.md` a copy rule: color names in lessons are basic English terms, each paired with its meaning, and designer names ("teal", "amber") appear only with a gloss (COL-027, COL-028). Check the G1000 and sectional-legend widgets for any element distinguished only by a neighboring hue (COL-031).

**Build.** When writing the lesson material on glass-cockpit displays, include a short labeled legend for each display color the lesson uses, written from the lesson's sourced material, so that learners anchor each color to a label and position rather than to a name alone (COL-028, COL-029).

## Color Psychology Under Replication

### A nascent field, by its own leaders' account

Color psychology asks whether perceiving a color changes how people feel, think and act. Elliot and Maier, the two researchers most associated with its modern revival, reviewed the field in 2014 and reached a two-part conclusion: color can carry important meaning and can affect affect, cognition and behavior, but the literature "remains at a nascent stage of development", and much more work on boundary conditions, moderators and real-world generalizability is needed before strong recommendations for application are warranted [@elliot2014color]. Their review concentrates on achievement, affiliation and attraction, with consumer behavior and food evaluation alongside.

Elliot's follow-up methodological checklist, published in 2015, explains why caution is needed [@elliot2014color]. Color has three properties, hue, lightness and chroma, but most theory concerns hue, especially red, and chroma has been almost entirely overlooked. Many studies specify color at the device level or not at all, rather than spectrally, so focal and non-focal properties are confounded. Viewing distance, angle, ambient light and background are often uncontrolled, and web-based studies usually cannot control them. Work going back to the nineteenth century often lacked experimenter blinding, did not exclude color-deficient participants, did not standardize exposure time, and used underpowered samples. The theory the authors favor, color-in-context theory, holds that color meaning comes from biological predisposition combined with learning and is therefore context dependent: blue on a ribbon signals first place, blue on meat signals rot [@elliot2014color].

That theory is plausible and also hard to falsify: if effects depend on culture, task, age and color variant, any failed replication can be explained by a moderator. The claims below show what happened when the headline effects were tested with larger samples.

### Red and test performance

Elliot and colleagues proposed in 2007 that red is learned to signal danger and failure in achievement settings, so that merely perceiving red evokes avoidance motivation and lowers performance on tasks that matter [@elliot2007color]. Four experiments reported that a brief glimpse of red before an important test, such as an IQ test, impaired performance, apparently without participants' awareness; two more linked red to avoidance through task choice and cortical activation. The comparison colors were green and grey or other achromatic controls.

Gnambs tested the claim with a random-effects meta-analysis of 67 effect sizes from 38 samples in 22 publications, all randomized studies from 2007 onward comparing red with another color on anagram, reasoning or knowledge tests [@gnambs2020limited]. Anagram and knowledge tests showed no significant effect (d of −0.06 and −0.04). Reasoning tests showed a pooled effect of d = −0.34, 95% CI [−0.61, −0.06], but the cumulative analysis showed that effect shrinking from −0.86 in the early studies as later ones were added, and every publication-bias correction (PET-PEESE, selection models, p-uniform*) returned adjusted effects near zero. Sample sizes had a median of 76 (range 16 to 282); with typical samples, power to detect the pooled reasoning effect was about 18 percent. No moderator tested (control color, color matching, paper against screen, cover page against every page) mattered. The author notes that the analysis was not preregistered and covers only these test types [@gnambs2020limited].

::: myth
**"Red makes people perform worse on tests."** The original experiments reported that a brief exposure to red before an intelligence test impaired performance through avoidance motivation [@elliot2007color]. A meta-analysis of 38 samples found no effect on anagram or knowledge tests, a reasoning effect that shrank sharply from the early to the later studies, and no evidential value at all after correcting for publication bias; with typical samples the studies had about 18 percent power [@gnambs2020limited]. The pattern of large early effects shrinking in larger later studies is the signature of small samples and selective publication.
:::

### Blue for creativity, red for detail

Mehta and Zhu tried to reconcile a literature in which blue sometimes helped and sometimes hurt [@mehta2009blue]. Their proposal was task dependence: red induces avoidance motivation and so improves detail-oriented tasks, blue induces approach motivation and so improves creative tasks. Six studies supported it, with samples from 42 to 208: red against blue induced the two motivations (n = 69), red helped a detail task and blue a creative one (n = 208 and 118), and the results extended to product design (n = 42) and persuasive messages (n = 161), apparently outside awareness (n = 68) [@mehta2009blue]. The reconciliation is itself flexible: red harms test performance in one theory and helps detail work in another, depending on how the task is classified.

Steele directly replicated one of the anagram experiments with the same anagrams, instructions and colors and more than three times as many participants, and found no color-priming effect although power was sufficient to detect the original one [@steele2014failure]. A single failed replication of one of six experiments cannot show an effect is zero, and no replication of the creativity arm was found. Read together with the meta-analysis of the red-performance literature [@gnambs2020limited], the headline claim stands as a hypothesis with a clear failed direct test.

::: myth
**"Blue backgrounds boost creativity and red backgrounds sharpen attention to detail."** The claim comes from six small-to-moderate studies proposing that red primes avoidance and blue primes approach [@mehta2009blue]. A direct replication of the anagram experiment with more than three times the sample and adequate power found no effect [@steele2014failure], and the related red-performance literature shows no evidential value after bias correction [@gnambs2020limited]. No background hue has been shown to improve checklists, procedures or learning.
:::

### Red wins contests

Hill and Barton reported in a one-page Nature letter that in the 2004 Olympic combat sports, where red or blue was assigned by organizers, red was associated with a higher probability of winning, and they proposed a sexually selected signal of dominance [@hill2005red]. Secondary accounts put the red win rate at about 55 percent overall, concentrated in evenly matched bouts. Follow-ups shifted the explanation to judges: a referee experiment reported in news coverage found that experienced taekwondo referees awarded red-clad fighters more points for the same sparring, and a study with electronic scoring found no red advantage. Then the original authors, with colleagues, tested 6,589 contests from seven Olympic Games (1996 to 2020) and nine World Boxing Championships (2005 to 2021) [@peperkoorn2024meta]. Red won 50.5 percent overall and 51.5 percent of close contests, neither significantly different from even. Only before 2005 did close contests show some support (56.8 percent for red), and the authors suggest that awareness of the effect and rule changes may have made a small effect disappear [@peperkoorn2024meta].

::: myth
**"Red is a dominance color that helps you win."** The Athens 2004 observation [@hill2005red] did not survive a test of 6,589 contests over 25 years by a team that included its original authors: red won 50.5 percent overall, not significantly different from chance [@peperkoorn2024meta]. Where a red advantage appeared, evidence pointed to judges' bias rather than to the competitors.
:::

### Color charts and brand personality

Labrecque and Milne reported four marketing studies in which hue, saturation and value shaped brand personality ratings: red logos were rated more "exciting" and blue logos more "competent" [@labrecque2012exciting]. These are ratings of imagery, not behavior, with limited control of spectral properties and display, and the full text was not available for this book, so no effect sizes are given. Palmer and Schloss's ecological valence theory, discussed in the next chapter, implies that such mappings are learned and should vary across cultures and product categories [@palmer2010ecological]. The popular "color meaning" chart that assigns trust to blue and energy to red descends from studies of this kind with the context removed.

Whitfield and Wiltshire's critical review is the older warning label. They limited it to laboratory studies of evaluative responses to color patches or chips, which they describe as numerically the main body of color psychology, because of the literature's size, diversity and uneven rigor [@whitfield1990color]. Later work cites it for the ambiguity of uncontrolled research and for the point that rating a color's connotation on scales such as warm-cool is not evidence about the color's emotional effect on the viewer [@elliot2014color; @wilms2018color].

::: myth
**"Blue means trust, red means urgency, green means calm: pick brand and UI colors from the chart."** The charts compress rating studies of logos and patches, made without spectral control, into universal rules [@labrecque2012exciting; @whitfield1990color]. Color meaning is learned and context bound (blue on a ribbon against blue on meat) [@elliot2014color], preferences come from the objects people associate with colors and vary between groups [@palmer2010ecological], and the field's own leaders call it nascent [@elliot2014color].
:::

::: {.rule #COL-032 grade="A"}
**Never justify an LTF color choice by a claimed priming effect on performance, motivation or mood.** The best-known effects (red impairs test performance, red and blue change task performance, red wins contests) have failed direct replication or shrunk to nothing in meta-analyses with bias correction [@gnambs2020limited; @steele2014failure; @peperkoorn2024meta]. Grade A for the rule's basis: the null results are replicated across independent tests.

*In LTF:* design rationale in PRs, in `v1.md` decisions and in code comments gives legibility, convention, contrast and color-vision reasons for color, never "red keeps learners alert" or "blue calms nervous beginners".
:::

::: {.rule #COL-033 grade="C"}
**Choose the color of error, warning and incorrect-answer states by signal convention and redundancy, not by psychology.** The argument against careless red is color vision deficiency and dilution of the warning signal, not an anxiety effect on learners, which has no reliable support [@gnambs2020limited; @okabe2008color; @faa2010flightcrew]. Grade C: convention and standards.

*In LTF:* the `warn` red on a wrong quiz answer is justified because red marks error by common convention and the state also carries `XCircle` and "Not quite."; it needs no psychological defense, and it should not be softened to a "calmer" hue on psychological grounds.
:::

::: {.rule #COL-034 grade="B"}
**Never write learner-facing copy that claims a color improves memory, calm, focus or performance.** The claims that circulate have failed replication or rest on preference ratings [@gnambs2020limited; @steele2014failure; @whitfield1990color]; the one positive learning result (emotional design) does not isolate color (see the next chapter) [@brom2018how]. Grade B.

*In LTF:* the theme toggle, onboarding copy and any "why Night mode" text describe what a theme does (lighter text on a dark ground, for a dim room) and make no wellness claim.
:::

::: {.rule #COL-035 grade="B"}
**If LTF tests a color change against a learning or performance outcome, preregister it and power it for effects much smaller than those first reported.** Published color effects shrank as samples grew; the typical sample in the red-performance literature had a median of 76 and about 18 percent power [@gnambs2020limited]. Steele's replication is the model: same stimuli, stated measure, larger sample, a statement of power [@steele2014failure].

*In LTF:* any A/B test of themes on quiz accuracy or challenge scores states its hypothesis, measure and sample in advance, and treats an early positive result as likely to shrink.
:::

::: {.rule #COL-036 grade="C"}
**Treat brand-personality color associations as weak, culture-bound preferences that never override legibility, contrast or convention.** The evidence is rating studies of logos without behavioral outcomes [@labrecque2012exciting], and associations vary with the objects and groups people know [@palmer2010ecological]. Grade C.

*In LTF:* the teal accent needs no "teal means trust" justification and should not get one. If the brand color is revisited, the decisive tests are contrast in both themes, distinctness from the status colors, and identity, not a color-meaning chart.
:::

::: {.rule #COL-037 grade="C"}
**When LTF studies color, specify stimuli in measured terms and control the viewing conditions that can be controlled.** The field's own checklist names device-level specification, uncontrolled ambient light and background, unscreened color-deficient participants and unstandardized exposure as the faults that made earlier work uninterpretable [@elliot2014color]. Grade C: methodological consensus.

*In LTF:* a theme experiment records the tokens as Oklch values, the device and brightness where known, and the room conditions where reported, and screens out nothing it cannot measure while noting what it could not control.
:::

::: {.rule #COL-038 grade="B"}
**Do not assign red or blue to learners or groups in competitive features in the belief that the color gives an edge, and prefer automated scoring to human judgment where bias is possible.** The red advantage vanished in large data, and where it appeared, evidence pointed to judges [@peperkoorn2024meta; @hill2005red]. Grade B.

*In LTF:* challenge tiers and any future leaderboard use the tier tokens and neutral ink, not red against blue. The debrief already recomputes the tier on the server from the rubric; keep scoring rubric-based rather than impressionistic.
:::

### What this means for Learn to Fly

**Keep.** The product's color choices are already justified by role (horizon line, status, tier) rather than by psychology; the token comments speak of contrast and meaning, not mood.

**Change.** Strike any psychological claim from future design rationale and copy (COL-032, COL-034). Keep the `warn` red for errors and wrong answers on convention, with its icon and word, rather than softening it for imagined learner anxiety (COL-033).

**Build.** If the team ever wants evidence about color and learning in LTF, write a preregistered test plan in `docs/` before building it: a theme or palette variable, a measured outcome such as quiz accuracy or checklist completion, a power analysis, and measured stimuli (COL-035, COL-037). Until then, the honest statement is that no color has been shown to improve learning by itself.

## Emotion, Preference and Learning

### Lightness and chroma do most of the work

The folklore says hue carries emotion: red excites, blue calms. The two best controlled studies in the research for this book say that lightness and chroma matter at least as much. Valdez and Mehrabian rated emotional reactions to Munsell chips on the Pleasure-Arousal-Dominance model [@valdez1994effects]. Saturation and brightness had strong and consistent effects, and brightness effects were nearly the same for chromatic and achromatic colors. The standardized regressions in the abstract are Pleasure = .69B + .22S, Arousal = −.31B + .60S and Dominance = −.76B + .32S, with B for brightness and S for saturation: brighter colors felt more pleasant, less arousing and less dominant, and more saturated colors felt more arousing and somewhat more pleasant [@valdez1994effects]. Hue mattered too, but not as the folklore predicts: blue, blue-green, green, red-purple, purple and purple-blue were the most pleasant, yellow and green-yellow the least; green-yellow, blue-green and green were the most arousing. Red was not singled out as the most arousing hue.

The study's stimuli were not colorimetrically specified, its Munsell values were not reported exactly, and brightness and saturation were probably not varied independently [@wilms2018color]. The task was also to rate a color, not one's own state while viewing it.

Wilms and Oberfeld fixed those problems [@wilms2018color]. They crossed three hues (blue, green, red), three saturations and three brightness levels in a factorial design, plus three brightness-matched achromatic colors, on an LED panel in a darkened cabin at 1.5 m (about 18 degrees of visual angle, maximum 223 cd/m²), specifying colors in CIE L*a*b* with measured luminance. Sixty-two participants viewed each color for 30 seconds after a grey adapting field and rated their own valence and arousal while skin conductance and heart rate were recorded. Saturated and bright colors produced higher arousal and larger skin conductance responses. With saturation and brightness controlled, hue also affected arousal, rising from blue to green to red. Valence was highest for saturated and bright colors; blue got higher valence than the other hues, but only at high saturation, and the pattern reversed at low saturation. Hue and brightness affected arousal only for relatively saturated colors. Physiological effects were weaker than rating effects, and 12 of the 62 participants produced no skin conductance responses [@wilms2018color].

The two studies agree on the main point, that saturation and brightness do much of the work, and disagree on details: the most arousing hue (green-yellow before, red here) and the shape of the saturation-valence relation (monotonic before, peaking at medium saturation here). Both are single studies of large color fields viewed alone, far from the small, mixed color of an interface.

::: {.rule #COL-039 grade="B"}
**Set the emotional tone of a surface through its lightness and chroma, not by picking a "calm" or "energetic" hue.** In both controlled studies, saturation and brightness had strong effects on rated pleasure and arousal, and the hue effects that remained depended on saturation [@valdez1994effects; @wilms2018color]. A high-chroma "calm blue" is not calm in any tested sense. Grade B: two studies that agree on the main point and differ on details.

*In LTF:* the product's restraint comes from low chroma (neutral greys at C 0.003, pale tints near C 0.03–0.05), not from its teal hue. Any proposal to make a page "friendlier" or "calmer" is expressed as a lightness and chroma change and reviewed for contrast.
:::

::: {.rule #COL-040 grade="B"}
**Reserve high chroma for small elements the learner should act on, and keep large surfaces low in chroma.** Saturated large fields are the most arousing in the laboratory [@wilms2018color; @valdez1994effects], and composition practice says strong color is bearable only in small areas against muted grounds [@tufte1990envisioning]. The step from large patches in a dark cabin to interface elements is an inference, which limits the grade to B.

*In LTF:* the highest-chroma page token is Day `warn` (C 0.190). It should appear as small text, icons, borders and the alert frame, and as a filled area only on the `danger` button behind a confirmation. The landing hero's 64 px `bg-warn` play disc on `YouTubeEmbed` is a large, high-chroma, non-warning use and should change to `ink` or `accent` (see also the chapter on color as signal).
:::

### Preference follows associations

Palmer and Schloss asked why people on average like some colors more than others [@palmer2010ecological]. Their ecological valence theory holds that people like colors associated with objects they like (blues with clear sky and clean water) and dislike colors associated with objects they dislike (browns with feces and rotting food). They used 32 colors from the Berkeley Color Project, eight hues crossed with four saturation-lightness "cuts" (saturated, light, muted, dark). Preferences came from 48 participants; separate groups listed objects for each color (74 participants, 3,874 descriptions in 222 object categories), rated how much they liked each object (98) and rated how well each object's color matched each screen color (31) [@palmer2010ecological]. The weighted affective valence estimate built from those tasks, with no free parameters, correlated with average preference at r = +0.893, explaining 80 percent of the variance. Alternatives explained less: a color-appearance model 60 percent, a color-emotion model 55 percent, and a cone-contrast model 37 percent.

The preference pattern peaked at blue and dipped at chartreuse; saturated colors were preferred to light and muted ones; dark orange (brown) and dark yellow (olive) were disliked while dark red and dark green were liked [@palmer2010ecological]. Preliminary extensions found that preference clusters of similar people were predicted better by their own cluster's estimates, that American estimates predicted American preferences better than Japanese ones and the reverse, and that school-spirit colors shifted preferences between Berkeley and Stanford students. The evidence is correlational and from one lab, the sample is mostly Bay Area undergraduates, the cultural and priming results are explicitly preliminary, and preference ("I like this color") is not emotional effect ("this color makes me feel good").

::: {.rule #COL-041 grade="B"}
**Offer a theme choice instead of assuming one palette suits everyone, and never present a palette as universally preferred.** Average preference is real but varies between groups and cultures and with the objects people associate with each color [@palmer2010ecological]; first impressions of web pages likewise vary with age and education [@reinecke2013predicting]. Grade B.

*In LTF:* the three-way `ThemeToggle` (Day, System, Night) is the right structure. Keep both themes first-class, and do not ship a single "brand" palette that overrides the learner's choice anywhere except where a fixed palette is required (the instrument and chart drawings).
:::

::: {.rule #COL-042 grade="C"}
**Avoid dark yellow (olive) and dark orange (brown) as accents for headline states.** They were the least-liked color cuts in the one large study of average preference [@palmer2010ecological]. The consideration is mild and comes from one lab's sample, so it never outranks contrast or convention; grade C.

*In LTF:* the Day `caution` (#945a00, a dark orange at L 0.52) and `tier-bronze` (#8c5331) sit in that region. That is acceptable for a caution state and a bronze tier, whose meaning comes from convention and words, but neither should become a brand or accent color.
:::

### Pleasant colors in learning materials

The one positive learning result involving color comes from emotional design. Brom, Stárková and D'Mello meta-analyzed 33 independent samples (N = 2,924) that added anthropomorphic faces or pleasant colors to multimedia learning materials [@brom2018how]. They found positive effects on retention (k = 18, d+ = 0.387), comprehension (k = 14, d+ = 0.317) and transfer (k = 27, d+ = 0.327), a robust effect on intrinsic motivation (d+ = 0.255), weaker effects on liking (0.109) and positive affect (0.113, marginal), and a reduction in perceived difficulty (d+ = −0.208) [@brom2018how]. There was no major publication bias; a trim-and-fill analysis for transfer left the estimate at 0.316.

What this licenses is narrow. "Pleasant colors" in this literature means predominantly warm, bright, saturated colors chosen with good visual design, avoiding the garish [@brom2018how]. Only 5 of the 33 samples (15.2 percent) were color-only contrasts; 11 were faces only, 13 combined faces and colors, and 4 pooled manipulations, so the color effect cannot be isolated. Most studies used college students, science content and sessions of up to about 30 minutes, and the mechanism is unknown, with intrinsic motivation a candidate. Unlike the priming literature, this one passes bias checks, and the color is a property of the learning material tested on learning outcomes.

::: {.rule #COL-043 grade="B"}
**Give lesson diagrams and widgets a coherent, moderately warm and clear palette rather than grayscale, without garish saturation and never at the cost of contrast.** A meta-analysis found small to medium learning gains from emotional design that included pleasant colors, with reduced perceived difficulty and no major publication bias [@brom2018how]. The color-only evidence is thin (five samples) and short-session, which is why this is B, not A, and why the rule says "clear" rather than "saturated".

*In LTF:* the widgets already use color rather than grey (the `chart-*` sectional colors, the `sky` and `ground` attitude fills, the arc bands). Keep them; do not desaturate diagrams to match the neutral page chrome. The constraint is that every colored element in a widget still meets the non-text contrast floor and has a label.
:::

### First impressions: complexity before colorfulness

Reinecke and colleagues predicted visual appeal from 500 ms exposures to 450 website screenshots, rated by 548 volunteers for colorfulness, complexity or appeal [@reinecke2013predicting]. A colorfulness model built from image statistics reached R² of .78, and a complexity model R² of .65. Combined with demographics, the two predicted 48 percent of the variance in appeal ratings (from 3,412 rating means by 242 volunteers aged 16 to 70 in 34 countries). Complexity mattered most; colorfulness played a role but was not nearly as important. High complexity produced the largest drop in appeal, participants over 45 liked low complexity more than others, and people with a PhD were most negatively affected by high colorfulness [@reinecke2013predicting]. Even Webby-nominated sites drew average ratings from 4.21 to 6.57 on a 9-point scale. The models predict a first impression from a screenshot, not usability or trust, and the authors note their colorfulness model overestimates bright colors.

::: {.rule #COL-044 grade="B"}
**On first-contact pages, reduce visual complexity first and keep colorfulness moderate; do not try to win a first impression with more color.** Complexity predicted 500 ms appeal far more strongly than colorfulness, older viewers preferred low complexity, and some groups were put off by high colorfulness [@reinecke2013predicting]. Grade B: one large study of first impressions, consistent with related work on complexity.

*In LTF:* the landing page's restrained palette (canvas and surface bands, one teal accent, ink buttons) is consistent with this. Its generic look comes from layout rhythm, not from too little color, so the fix for "looks like every template" is not a brighter palette; see Part XX, Brand Identity and Distinctiveness.
:::

### What this means for Learn to Fly

**Keep.** Low-chroma grounds and a single accent; colored widgets that are clear rather than gaudy; both themes as equal choices.

**Change.** Replace the red `bg-warn` play disc on the landing video with a neutral or accent fill (COL-040). Keep `caution` and `tier-bronze` out of any brand use (COL-042). Express any "friendlier" or "calmer" request as lightness and chroma, then check contrast (COL-039).

**Build.** When new widgets are drawn, set a widget palette brief: a small set of clear, moderately warm colors per widget, each labeled, each above the non-text contrast floor against the widget's fixed ground (COL-043). Record the reason for each color in the widget's code comment in terms of role, never mood.

## Color Vision Deficiency: Simulation and Redundancy

### Who is affected

Color vision deficiency is common enough that every LTF screen will be seen by people who have it. Okabe and Ito's guide gives red-green deficiency at roughly 8 percent of Caucasian males, 5 percent of Asian males and 4 percent of African males, with tritanopia (blue-yellow) very rare; their illustration is that a room of 250 people should include more than ten color-blind attendees [@okabe2008color]. Machado and colleagues open their paper with the estimate that color vision deficiency affects about 200 million people worldwide [@machado2009physiologically]. Okabe and Ito's figures are population estimates that differ by sex and ancestry; a 2025 global meta-analysis, known to this book only through secondary reports, found lower pooled rates across all populations, so the familiar 8 percent describes men of Northern European ancestry rather than everyone [@okabe2008color]. The rates differ by sex and ancestry, and none of these sources describes LTF's audience, which is unmeasured.

The types matter for design. Normal vision is trichromatic. Dichromats lack one cone class: protanopes the L cones, deuteranopes the M cones, tritanopes the S cones. Anomalous trichromats have all three cone classes but one with a shifted sensitivity, at varying severity, and they are the larger group. Total color blindness is rarer and often comes with severe vision loss [@okabe2008color]. The genotyped dichromats who made the CIE cone fundamentals possible are the same population, seen from the measurement side [@stockman2000spectral].

### Simulating dichromacy

Brettel, Viénot and Mollon gave the standard method for showing a trichromat roughly what a dichromat sees [@brettel1997computerized]. Colors are represented in LMS cone space, and each is projected onto a reduced surface defined by the neutral axis and by monochromatic anchor stimuli that trichromats and that type of dichromat perceive as the same hue: a 575 nm yellow and a 475 nm blue for protan and deutan simulations, a 660 nm red and a 485 nm blue-green for tritan. The residual hues come from reports of unilateral dichromats, people with one normal and one dichromatic eye. In validation, a protanope and a deuteranope each accepted the match between an original mosaic of color patches and its transformed version [@brettel1997computerized]. The authors note that one can never be certain of another person's sensations.

The method's limits are built in. It simulates complete dichromacy only, it relies on a few unilateral dichromats for the residual hues, and its validation used two observers [@brettel1997computerized].

### Simulating severity

Machado, Oliveira and Fernandes extended simulation to anomalous trichromacy in one framework [@machado2009physiologically]. Their model is based on the stage theory of color vision, cone signals followed by opponent processing, derived from electrophysiological data, and models deficiency as a shift in the spectral absorption of a cone pigment. The practical output is one 3 by 3 matrix per type and severity, multiplied by each pixel's RGB vector; severity runs from 0.0 (normal) to 1.0 (equivalent to dichromacy), with precomputed matrices at steps of 0.1 and interpolation between them as a fast approximation [@machado2009physiologically]. The model was validated with groups of color-deficient and normal-vision participants, whose sizes are not given on the authors' page.

Implementers need four warnings. Two equations in the conference version contain a typo, and a 2010 correction notice exists for the journal article, so matrices must come from the authors' corrected material, not a transcription [@machado2009physiologically]. The authors' image captions give severity in nanometers of spectral shift while the matrix table uses the 0 to 1 scale, without explaining the mapping. A widely used library implementing the model describes its tritanomaly matrices as an approximation by the shift paradigm that does not model tritanopia. And neither the authors' page nor that library says whether the RGB input must be linear or gamma-encoded, which a developer has to settle before trusting results.

Okabe and Ito, as protanopes, add the user's caution: simulators show one approximation, many color-blind people distinguish more colors than a simulation suggests, simulations must not be used to judge a person's abilities, and a color-blind reviewer is recommended [@okabe2008color].

### LTF's status colors under simulation

The following was computed for this book by applying the Machado severity 1.0 matrices to linearized sRGB values of LTF tokens (the linear choice is an assumption, for the reason just given), then measuring Euclidean distance in Oklab between the two colors of each pair. Larger distances mean more distinct; the "normal" column is the unsimulated distance.

| Pair | Normal | Protan | Deutan |
| --- | --- | --- | --- |
| Day `go` / `warn` | 0.28 | 0.10 | 0.08 |
| Night `go` / `warn` | 0.26 | 0.17 | 0.07 |
| Day `caution` / `warn` | 0.13 | 0.10 | 0.02 |
| `arc-green` / `arc-red` | 0.36 | 0.24 | 0.08 |
| `display-magenta` / `display-cyan` | 0.31 | 0.18 | 0.05 |

Two results stand out. Under the deutan simulation, Day `caution` (#945a00) and `warn` (#b71824) almost merge (distance 0.02, from 0.13), and their luminance ratio to each other is only 1.17:1. And `display-magenta` and `display-cyan` in the G1000 widget, clearly distinct to normal vision, nearly merge for a simulated deuteranope (0.05 from 0.31). The red-green pairs fall to a quarter or a third of their normal separation. The tritan simulation, not shown, left all of these pairs distinct. These are design-check numbers from an approximate model with an assumed input encoding, not a measurement of anyone's vision.

::: {.rule #COL-045 grade="C"}
**Never use color as the only visual means of conveying information, indicating an action, prompting a response or distinguishing an element.** This is WCAG 2.2 success criterion 1.4.1, Level A [@w3c2024wcag], and the first practical principle of Color Universal Design [@okabe2008color]; the prevalence of deficiency and the collapse of red-green pairs under simulation are the reasons [@machado2009physiologically]. Grade C: a standards requirement, with no experiment behind the rule itself.

*In LTF:* the product's existing provisions are the model: `Badge` status variants add a 12 px icon (Check, TriangleAlert, OctagonAlert), tiers always print their word, status icons carry sr-only text, links are always underlined, and `ProgressBar` carries `aria-valuetext`. Keep every one; the Day `caution` and `warn` pair depends entirely on its different icons (triangle against octagon) and words.
:::

::: {.rule #COL-046 grade="C"}
**Check every screen and widget that uses color to carry meaning under protan, deutan and tritan simulation, at full and at partial severity, in both themes.** Dichromat simulation shows complete loss [@brettel1997computerized]; the severity model covers the more common anomalous trichromats [@machado2009physiologically]. Checking at an intermediate severity (for example 0.5) as well as 1.0 matters because deficiency is often partial. Grade C: a tool-based practice.

*In LTF:* add simulated views to review for `/dev/components` and `/dev/widgets`, and attach them to any PR that changes `tokens.css` or a widget's colors.
:::

::: {.rule #COL-047 grade="C"}
**Fix a pair that merges under simulation by adding a second cue (shape, label, position, line style or pattern), not by retuning hue alone.** Okabe and Ito's redundant coding (line styles, symbols, hatching, direct labels, thicker lines and larger symbols) works for every type of color vision, while a retuned hue helps one type and may hurt another [@okabe2008color]. Grade C.

*In LTF:* for the `display-magenta` and `display-cyan` collapse in the G1000 widget, give the two elements different line styles or direct text labels in the drawing; do not shift the hues away from what the simulator shows.
:::

::: {.rule #COL-048 grade="C"}
**Avoid pure red on dark backgrounds and on green, avoid colors between yellow and green, and use strong lightness or saturation differences when pairing two warm or two cool colors.** Dark red can look black to protanopes, and these are the specific confusions Okabe and Ito list for figure design; they recommend vermilion or a light red in place of pure red and reddish purple in place of purple [@okabe2008color]. Grade C: practitioner authority grounded in lived experience and consistent with the simulation models.

*In LTF:* the Night `warn` (#ff8880) is already a light red rather than a pure red, at 7.98:1 on the Night `canvas`, which follows the advice. The fixed `arc-red` (#ef4444) on the `bezel` grey is only 3.60:1, and on `instrument` 5.09:1; where a red mark sits on dark bezel parts of a gauge, give it a light keyline or a distinctive shape.
:::

::: {.rule #COL-049 grade="C"}
**Label colored elements directly where they are drawn instead of relying on a separate color key.** Direct labels remove the need to match a color across space and work for every type of color vision [@okabe2008color]; the chief virtue claimed for rainbow color maps in key-based lookup is a reminder that a key ties accuracy to color matching [@borland2007rainbow]. Grade C.

*In LTF:* the `AirspeedArcs` legend sits below the band as a separate key; where space allows, label the bands at their ends on the band itself, and keep the legend as a fallback. Dashboard charts, if added, label lines at their ends rather than in a legend box.
:::

::: {.rule #COL-050 grade="C"}
**Do not describe LTF as "colorblind safe"; say that it was checked with simulation and does not depend on color alone, and include a color-deficient reviewer when one is available.** Simulations approximate, many deficient viewers see more than the simulation shows, and simulations cannot certify a person's experience [@okabe2008color; @brettel1997computerized]. Grade C.

*In LTF:* the accessibility statement, if one is written, uses the cautious wording. No simulation feature is shipped to learners as a tool for judging their own vision, which could mislead a learner thinking about pilot medical standards; those are regulatory matters for official sources.
:::

::: {.rule #COL-051 grade="C"}
**Implement simulation from the corrected published matrices, record the input encoding chosen, and test the code against known outputs.** The original equations had a typo, a correction notice exists, severity scales are inconsistently labeled, and the input encoding is unspecified [@machado2009physiologically]. Grade C.

*In LTF:* if the token script gains a simulation check, it states in a comment that it applies the severity matrices to linearized sRGB (or to encoded values, whichever is chosen), and flags pairs whose simulated Oklab distance falls below a threshold set by review.
:::

::: {.rule #COL-052 grade="C"}
**For categorical colors in charts, use a palette designed for color vision deficiency, such as the Okabe-Ito set, and test each color against the theme grounds.** The Okabe-Ito palette (vermilion, bluish green, reddish purple, sky blue, blue, yellow and orange) varies hue and lightness along axes dichromats can discriminate [@okabe2008color]; ColorBrewer offers schemes filtered as colorblind safe on the basis of the same research group's evaluation [@harrower2003colorbrewer]. The palette was designed for figures on white, so contrast against a dark theme must be checked separately. Hex values should be taken from the guide itself, not from secondary listings.

*In LTF:* if the dashboard gains a chart of attempts by challenge type, the series colors come from such a palette, with direct labels, rather than from the status tokens.
:::

### What this means for Learn to Fly

**Keep.** The redundancy the product already has: icons and words on every status, tier words, underlined links, legends with words and distinct shapes, and the `Callout` titles. The fact that `QuizBlock` marks results with two different icons as well as words means its red-green pair survives the simulation.

**Change.** The Day `caution` and `warn` pair is the most fragile in the product: nearly equal in luminance (1.17:1) and nearly merged in the deutan simulation. Since the two states mean different things (act soon against act now), keep their icons distinct in every component, and do not use the two tokens as adjacent fills without words (for example in the `PasswordStrengthMeter`) (COL-045, COL-047). In the G1000 widget, separate magenta and cyan elements by line style or label (COL-047, COL-031).

**Build.** Add simulated-view screenshots (protan, deutan and tritan at severity 0.5 and 1.0) to the e2e visual checks for `/dev/components` and `/dev/widgets`, and a token-pair simulation check to the token script (COL-046, COL-051). This check is additive to the axe runs in `e2e/a11y.spec.ts`, not a replacement for them.

## Contrast: Standards, Models and Reading

### The WCAG ratio

The Web Content Accessibility Guidelines are the standard LTF will be audited against, and version 2.2 (first published October 2023, republished December 2024) is the current Recommendation [@w3c2024wcag]. Its color requirements are four success criteria:

| Criterion | Level | Requirement |
| --- | --- | --- |
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 for text, 3:1 for large text |
| 1.4.6 Contrast (Enhanced) | AAA | 7:1 for text, 4.5:1 for large text |
| 1.4.11 Non-text Contrast | AA | 3:1 for UI components, states and needed graphics |
| 1.4.1 Use of Color | A | color not the only visual means |

Large-scale text is at least 18 point, or 14 point bold [@w3c2024wcag]; Carbon's documentation states the same split in pixels, treating text below 24 px as small [@ibm2026carbon]. The ratio is (L1 + 0.05) / (L2 + 0.05), where L1 is the relative luminance of the lighter color and L2 of the darker, so ratios run from 1:1 to 21:1. Relative luminance for sRGB is 0.2126 R + 0.7152 G + 0.0722 B on linearized channels, and the 0.05 term models typical viewing flare [@w3c2024wcag]. The thresholds are not rounded: 4.499:1 fails 4.5:1. Exceptions cover inactive components, pure decoration, invisible text and logotypes.

The Understanding document gives the rationale. A ratio of 3:1 is the minimum recommended for standard text by ISO 9241-3 and ANSI-HFES-100-1988. The 4.5:1 level compensates for the loss of contrast sensitivity that accompanies acuity of about 20/40, estimated at about 1.5 times, so 3 times 1.5 gives 4.5; 7:1 relates to about 20/80 vision [@w3c2024wcag]. The document links 20/40 acuity to typical acuity at about age 80, and states that hue matters less than light-dark difference.

The ratio is a threshold built on approximations: a fixed flare term, a single luminance model, no account of size beyond the large-text split, and no account of weight or polarity. Those are the openings its critics use.

### What reading tolerates, and who needs the margin

Legge, Rubin and Luebker measured reading rate as a function of contrast and character size in normal vision [@legge1987psychophysics]. Reading was fastest, at about 350 words per minute, for letters between 0.25 and 2 degrees, and within that range it was very tolerant of contrast loss: for 1-degree letters, a tenfold reduction in contrast reduced reading rate by less than a factor of two. Results were very similar for white-on-black and black-on-white text. Reading declined faster for letters smaller than 0.25 or larger than 2 degrees, and because people with low vision usually need large characters, high contrast is especially important for them; the authors took 35 words per minute as a reading threshold to build a contrast-sensitivity function for reading [@legge1987psychophysics].

The finding cuts against complacency rather than for it. Normal readers at comfortable sizes cope with low contrast, which is why low-contrast grey text often passes informal review. The people the 4.5:1 floor protects are the ones whose contrast sensitivity is reduced: older readers, readers with low vision, and anyone reading on a dim screen or in glare.

::: {.rule #COL-053 grade="C"}
**Give all text at least 4.5:1 contrast against its actual background, and large text at least 3:1, computed on the final composited token pair in both themes, without rounding.** This is WCAG 2.2 success criterion 1.4.3 [@w3c2024wcag], whose 4.5:1 level is derived from the contrast-sensitivity loss that accompanies 20/40 acuity. Grade C: a standard, with a rationale from vision research but no experiment that tests the threshold itself.

*In LTF:* computed for this book, every declared text token passes on every ground in both themes (Day `ink-3` is the tightest at 4.73:1 on `surface-sunken`; Night `ink-3` at 4.61:1 on `surface-raised`). Tight margins mean that a new ground (a tint, a hover fill) must be checked before `text-ink-3` is used on it.
:::

::: {.rule #COL-054 grade="C"}
**Give every boundary or mark needed to identify a control, its state or a meaningful part of a graphic at least 3:1 contrast against its neighbors.** This is WCAG 2.2 success criterion 1.4.11 [@w3c2024wcag]; Carbon applies the same 3:1 to graphical elements, data visualizations and focus states [@ibm2026carbon]. Decorative borders are exempt, which is why the quiet `line` token is acceptable for card edges.

*In LTF:* computed for this book, Day `accent-line` (#009ca5) is 3.07:1 on `canvas` and 3.33:1 on `surface`, passing, but 2.88:1 on `surface-sunken`, failing. Where the teal line marks the active tab, the active section in `SectionNav`, the active nav item or the done part of `LessonPath` on a sunken ground, use `accent` (4.72:1 on `surface-sunken`) instead. Input borders use `line-strong` (3.95:1 on `surface` in Day, 4.58:1 in Night), which passes; keep them on that token.
:::

::: {.rule #COL-055 grade="C"}
**Aim for 7:1 for safety-relevant text that a learner reads at a glance, such as Fly mode steps, alert labels and checklist items.** WCAG's enhanced level of 7:1 corresponds to roughly 20/80 vision [@w3c2024wcag], and glance reading in dim surroundings is where light-on-dark text performs worst [@dobres2017effects]. The standard does not address dim-room viewing, so this is a target set for LTF's use, graded C.

*In LTF:* in the Night theme that `FlyModeLayout` applies by default, `ink` (#ecebe9) on `canvas` is 15.48:1 and `warn` is 7.98:1, both above 7:1; `ink-2` is 8.61:1 and `ink-3` 5.93:1. Fly mode text therefore uses `ink` or `ink-2`, never `ink-3`.
:::

::: {.rule #COL-056 grade="B"}
**Treat contrast near the minimum as a risk for low-vision and older readers, not as harmless because the text looks readable.** Normal readers at comfortable sizes tolerate large contrast reductions [@legge1987psychophysics], so a designer's own impression is a poor test; the floor exists for readers whose contrast sensitivity is reduced [@w3c2024wcag]. Grade B: the reading-rate tolerance is measured, and the protective purpose follows from the standard's rationale.

*In LTF:* do not lower `ink-2` or `ink-3` contrast for a "softer" look. The most common color class in the product is `text-ink-2` (266 uses), so its contrast governs most supporting text on every page.
:::

### APCA: a proposed successor

The Accessible Perceptual Contrast Algorithm, developed by Andrew Somers and Myndex Research, is proposed as a replacement for the WCAG 2 ratio [@somers2022apca]. Its premise is that readability depends on font size and weight, on polarity (dark on light against light on dark) and on perceived lightness contrast, which one luminance ratio cannot represent. Its output is a signed lightness contrast, Lc, from roughly −108 to +106, the sign encoding polarity, intended so that the same Lc represents the same perceived contrast anywhere in the range. The published library (algorithm 0.0.98G-4g, library 0.1.9, July 2022) uses an exponent of 2.4, separate text and background exponents, sRGB weights, a black threshold and scalers [@somers2022apca]. The author's guidance levels are roughly Lc 90 preferred and Lc 75 minimum for body text, Lc 60 for content text at larger sizes, Lc 45 for headlines, Lc 30 for placeholder-like text and Lc 15 as a floor for non-text, with a lookup table from size and weight to required Lc; for dark mode the documentation advises staying below Lc 90 for large fonts.

Its status is contested. The documentation itself says APCA is in beta, that WCAG 2 and perceptual models will disagree, and that readers must judge suitability for their region [@somers2022apca]. The WCAG 3 working draft dated 10 September 2026 states that its contrast algorithm is yet to be determined and does not mention APCA [@w3c2024wcag]. Commentators argue that adopting APCA instead of WCAG 2 creates legal risk because only the WCAG 2 ratios are in force; the specific Lc thresholds are not validated in a peer-reviewed study that the research for this book could confirm. The criticisms of the WCAG ratio that APCA's documentation makes (no model of size and weight, overstated contrast for dark colors, unsuitability for dark mode) come from a rival method's developer.

::: {.rule #COL-057 grade="D"}
**Use APCA only as an advisory second check on dark-theme and thin or small text, and when it disagrees with WCAG 2.2, take the stricter result.** The WCAG 2 ratio is the standard in force, and APCA is an unvalidated beta whose thresholds are its author's guidance [@w3c2024wcag; @somers2022apca]. The rule is graded D because whether APCA predicts readability better than the ratio is contested and untested in the sources found.

*In LTF:* the token script may report Lc for Night text pairs and for `text-sm` meta text as information, with no gate on it. Re-check the WCAG 3 status whenever this Part is revised.
:::

::: {.rule #COL-058 grade="C"}
**Compute contrast automatically from the token files for every declared text and ground pair in both themes, and fail the build on a miss.** Contrast must be computed on the actual values, without rounding, and a theme change can silently break a pair [@w3c2024wcag]; a design system's own claims of compliance should be verified rather than inherited [@ibm2026carbon]. Grade C.

*In LTF:* the token comments say contrast figures for every pair live in `tokens.json`, which does not exist in the repository. Replace that promise with a generated table from `tokens.css` and a test that fails when any declared pair drops below its threshold.
:::

::: {.rule #COL-059 grade="C"}
**Check text on tinted fills as its own pair, never by assuming that a token which passes on `surface` also passes on a tint.** Tints raise the background luminance in Day and lower it in Night, so each text-on-tint combination has its own ratio [@w3c2024wcag]. Grade C.

*In LTF:* computed for this book, Day `accent` on `accent-tint` is 4.86:1 (passing with little room) and Day `caution` on `caution-tint` is 4.93:1; Night `warn` on `warn-tint` is 6.02:1. The `Callout` titles and `Badge` labels that use these pairs pass, but a lighter `accent` or a darker tint would break them first.
:::

### Contrast in instrument drawings

The widgets are graphics, so 1.4.11 governs their meaningful parts, and their fixed colors were computed for this book against the fixed `instrument` ground (#100f0e). `arc-white` reaches 17.48:1, `arc-yellow` 12.50:1, `arc-green` 8.40:1, `display-cyan` 10.60:1, `display-magenta` 7.83:1 and `arc-red` 5.09:1, all above 3:1. The `sky` fill (#2563c9) is 3.38:1 and `ground` (#7a4d24) 2.66:1 against `instrument`, but those are areas, not marks; what matters is that marks drawn on them pass. `instrument-text` (#ecebe9) is 4.76:1 on `sky` and 6.05:1 on `ground`, so labels drawn on the attitude fills pass the text minimum. On the sectional chart, `chart-blue` (6.08:1) and `chart-magenta` (6.33:1) on `chart-land` pass comfortably.

The weak point is between marks rather than against the ground: `arc-green` and `arc-red` are only 1.65:1 against each other, and `arc-yellow` and `arc-green` 1.49:1. Where bands abut, the distinction is carried by hue alone, which is the case COL-045 forbids unless labels or position also carry it. In `AirspeedArcs` they do (worded legend, red line drawn as a different shape), and that redundancy must be preserved in every gauge.

### What this means for Learn to Fly

**Keep.** The ink ladder and status tokens, which pass on every declared ground in both themes; the focus ring, which uses `accent` (5.03:1 on Day `canvas`, 10.30:1 on Night `canvas`) and so exceeds the 3:1 that focus indicators need; input borders on `line-strong`.

**Change.** Stop using `accent-line` for meaningful marks on `surface-sunken` in Day (COL-054). Remove the reference to a nonexistent `tokens.json` contrast table from the `tokens.css` comment and replace it with generated numbers (COL-058). Keep `text-ink-3` off tints and raised surfaces unless the pair is checked (COL-053, COL-059).

**Build.** The contrast gate in the token script, run in CI for Day and Night: every text token on every ground and tint it is used on, every non-text indicator on its neighbor, with WCAG thresholds as failures and APCA as information only (COL-057, COL-058). Add the widget marks to it, pairing each fixed mark color with the fixed ground it is drawn on.

## Polarity, Dark Themes and Fly mode

### Polarity is a luminance question

The question "is dark mode harder to read" has a better experimental record than most theme debates, and the record turns it into a different question: how bright is the display? Buchner and Baumgartner ran a series of proofreading experiments that crossed text-background polarity with ambient illumination (a dark room against typical office light) and with chromaticity (black and white against blue and yellow) [@buchner2007text]. Dark text on a light background, positive polarity, gave better proofreading in every comparison. A final experiment set red text on a green background to test whether a hue difference could stand in for a luminance difference; it could not. The study also measured breathing rate, heart rate, heart rate variability and skin conductance, and asked about mood, fatigue, eyestrain, headache and muscle strain. None varied with the conditions, which the authors read as showing that participants worked equally hard throughout, so the advantage was not an effort trade-off [@buchner2007text]. Sample and effect sizes were not available for this book, so the size of the advantage cannot be stated.

The obvious confound is that a positive-polarity screen is mostly bright background and therefore emits more light. Buchner, Mayr and Brandt manipulated polarity and overall display luminance independently and found no polarity effect at matched luminance, only a main effect of luminance, with brighter displays read better [@buchner2009advantage]. Their conclusion is that polarity per se does not affect readability; overall luminance does. That is a strong claim from one experiment, and it is the claim on which a dark theme's design depends.

Two follow-ups sharpen it. Piepenbrock, Mayr, Mund and Buchner asked whether older adults, whose aging lenses scatter more light, might reverse the effect; the competing prediction was that age-related loss of retinal illuminance would make bright displays help them more. Positive polarity won in both age groups, and the authors recommend it independent of age [@piepenbrock2013positive]. A 2014 follow-up by the same group, reported alongside that paper, crossed polarity with character sizes of 8, 10, 12 and 14 points (0.22 to 0.34 degrees of vertical visual angle) and found the advantage grew linearly as characters got smaller, advising against negative polarity especially with small fonts [@piepenbrock2013positive]. Dobres, Chahine and Reimer then used a lexical decision task with a time threshold, an approximation of a glance, crossing two type sizes, two polarities and two ambient illuminations [@dobres2017effects]. Thresholds were worst for light-on-dark text in near-dark surroundings; positive polarity in the dark, and every condition under bright light, did significantly better. Their proposed mechanism, pupil contraction under brighter light reducing optical aberrations, fits the luminance account but was not measured directly.

The tension with Buchner and Baumgartner, who found no interaction with room light, is resolved by task: extended proofreading in one, glance reading in the other. The limits matter as much as the findings. Almost all of this comes from one group; the tasks are proofreading, acuity and lexical decision; and the luminance manipulation is stylized. Legge and colleagues found normal readers at comfortable sizes very tolerant of contrast loss, with little difference between polarities [@legge1987psychophysics]. So the polarity effect is real and modest, largest for small text, dim displays and glances.

::: {.rule #COL-060 grade="B"}
**Default dense reading, quizzes and checklists to positive polarity (dark text on a light ground), with a well-built dark theme as a choice.** Positive polarity gave better proofreading in dark and lit rooms and in two chromaticities [@buchner2007text], for younger and older adults [@piepenbrock2013positive], and the advantage grows as text gets smaller. Grade B: consistent results, mostly from one group, on proofreading-type tasks.

*In LTF:* `System` resolves to the operating-system setting on ordinary pages, and Day is the design reference for `LessonPage`, `QuizBlock` and `Prose`. Keep Day the theme in which every new component is first designed and reviewed.
:::

::: {.rule #COL-061 grade="B"}
**In a dark theme, make small text larger, heavier or brighter than its light-theme equivalent; never set thin, small gray text on near-black.** The positive-polarity advantage is a luminance effect [@buchner2009advantage] that grows as characters shrink [@piepenbrock2013positive], so the dark theme's penalty falls on exactly the small, dim meta text most designs place there. Grade B.

*In LTF:* Night meta text is `text-sm` (14 px) in `ink-2` (#b2b1af) or `ink-3` (#939290). In Night, use `ink-2` rather than `ink-3` for any meta text that carries information (lesson minutes, challenge counts, timestamps), and consider stepping `eyebrow` (12 px) labels to weight 600 in `ink-2` only.
:::

::: myth
**"Dark mode is easier on the eyes, so it is better for reading, especially for older users and in dark rooms."** In controlled proofreading, light-on-dark text was read less accurately in both dark rooms and office light, with no difference in measured strain [@buchner2007text]; older adults showed the same positive-polarity advantage as younger ones [@piepenbrock2013positive]; and at a glance, light-on-dark in a near-dark room was the slowest condition of all [@dobres2017effects]. Dark themes are a legitimate preference and can reduce glare, but readability is not their advantage.
:::

### Building the dark theme

A dark theme is not an inverted light theme. Carbon's two dark themes, Gray 90 (#262626) and Gray 100 (#161616), step each layer one shade lighter (on Gray 100 the first layer is Gray 90, the next Gray 80), and the guidance says dark themes should not use components darker than the background outside high-contrast mode [@ibm2026carbon]. Elevation, which a light theme shows with shadow, becomes lightness. Focus on dark themes is white in Carbon rather than the light theme's blue.

LTF's Night theme follows this pattern: `canvas` #141412, `surface` #1f1e1c, `surface-raised` #2b2a28, with `shadow-1` replaced by a 1 px `line` ring. `surface-sunken` (#0f0e0d) is darker than `canvas`, which Carbon's guidance would avoid for components; it is used for wells such as code chips and the `ThemeToggle` track, where "sunken" is the intended reading, so it is defensible, but it should not hold interactive cards.

::: {.rule #COL-062 grade="C"}
**Express elevation in a dark theme by stepping surfaces lighter, one step per layer, and keep raised surfaces distinguishable from the ground without relying on shadow.** Shadows are nearly invisible on dark grounds, and Carbon's layering model makes each layer one shade lighter [@ibm2026carbon]. Grade C: design-system practice.

*In LTF:* the Night ladder steps 0.19, 0.24 and 0.29 in Oklch lightness (`canvas`, `surface`, `surface-raised`), about 0.05 per step. Toasts, popovers and the `Drawer` use `surface-raised`; check that a popover over a `surface` card is still distinguishable, since one 0.05 step plus the line ring is the only cue.
:::

::: {.rule #COL-063 grade="C"}
**Keep saturated fills small in a dark theme and prefer thin, mid-tone strokes for highlights.** On a dark ground, large bright fills create the most figure-ground noise [@tufte1990envisioning], and saturated bright fields raise arousal [@wilms2018color]. Grade C.

*In LTF:* in Night the tints (`accent-tint` #023538, `warn-tint` #442321) are dark and low in chroma, and the strong colors appear as text and lines. Keep it so; do not introduce bright filled badges in Night.
:::

### Fly mode: glance reading in a dim room

Fly mode is the one place in LTF where the reading situation is known in advance: a learner at a simulator, often in a dim room, glancing at a second screen for a step, a time or an alert. `FlyModeLayout` sets `data-theme` to dark unless the reader explicitly chose Day, so a learner on `System` gets Night regardless of the operating-system setting. That puts the default into the condition Dobres and colleagues found slowest for glance reading: light text on a dark display in near-dark surroundings [@dobres2017effects]. The layout compensates with size: a `text-xl` base, `text-2xl` goal, `text-3xl` step headings and `text-5xl` mono stopwatch digits, which fits the finding that the dark penalty is largest for small characters [@piepenbrock2013positive].

The dark choice has a plausible reason the studies did not test: a bright second screen beside a dark simulator view may dazzle or shift adaptation. That is a comfort argument, not a legibility one, and it is exactly the trade-off a measurement should settle.

::: {.rule #COL-064 grade="B"}
**In Fly mode, use large type, the brightest ink level for key values and steps, and a restrained dark surface, and let the learner switch to Day inside Fly mode.** Light-on-dark text is slowest at a glance in a dark room [@dobres2017effects], and the penalty shrinks as characters grow [@piepenbrock2013positive]; the best polarity depends on room light, which the app cannot sense. Grade B.

*In LTF:* `FlyPanel large` already uses large sizes. Add a compact Day/Night control to `FlyModePage` (the header-less layout currently offers none), keep step text in `ink`, and keep `ink-3` out of Fly mode entirely (see COL-055).
:::

::: {.rule #COL-065 grade="B"}
**Decide Fly mode's default theme by measuring glance reading time and step accuracy in both polarities, with display luminance recorded, rather than by assuming dark is better in a dark room.** The studies separate polarity from luminance only when luminance is controlled [@buchner2009advantage], and the glance result is a single lab's [@dobres2017effects]. Grade B.

*In LTF:* a small study with a handful of learners at their own setups (time to read the next step, errors on a checklist, a comfort rating) is enough to choose between the current dark default and following `System`; record it in the decision log.
:::

::: {.rule #COL-066 grade="C"}
**Do not justify a dark theme by age or by a dark room alone.** Older adults showed the positive-polarity advantage [@piepenbrock2013positive] and darkness did not remove it in proofreading [@buchner2007text]. Grade C as a review rule built on those findings.

*In LTF:* the Night theme is offered as a preference ("a dimmer page"), not recommended as easier to read.
:::

### What this means for Learn to Fly

**Keep.** Day as the design reference; a Night theme built by lighter layers rather than shadows; dark, low-chroma tints in Night; Fly mode's large type.

**Change.** In Night, move information-bearing meta text from `ink-3` to `ink-2` (COL-061). Add a theme control inside Fly mode (COL-064). Stop describing Night as easier on the eyes anywhere in copy (COL-066).

**Build.** A glance-reading check for Fly mode in both themes, with results in the decision log (COL-065), and a Night review pass on `/dev/components` that looks specifically at 12 and 14 px text and at popovers over cards (COL-061, COL-062).

## Color as Signal: Alerts, Status, Salience and Data

### A color convention written as a rule

Flight-deck alerting is one of the few places where a color convention is written into regulation. The FAA's flightcrew alerting rule for transport-category airplanes, 14 CFR 25.1322, requires alerts to give the crew the information needed to recognize a non-normal condition and decide what to do, to be easy to detect and understand under all foreseeable conditions including multiple alerts, and to be removed when the condition no longer exists [@faa2010flightcrew]. It sets three priority levels: a warning needs immediate awareness and immediate response, a caution immediate awareness and a later response, and an advisory awareness and possibly a later response. Warnings and cautions must use at least two senses (aural, visual or tactile) to get attention. The alerting function must minimize false and nuisance alerts, and if an attention-getting cue is suppressed the crew must get a clear indication that it is [@faa2010flightcrew].

The color paragraph begins "Red for warning alert indications"; caution is amber or yellow; advisory is any color except red or green; and on displays that cannot show these colors, other coding must distinguish the levels [@faa2010flightcrew]. A further paragraph allows red, amber and yellow for non-alerting functions only to a limited extent and without adversely affecting alerting. The rule is a certification floor for one class of airplane, written from consensus and experience rather than experiment, and it says nothing about any particular aircraft's displays or procedures; it is cited here for its display principles only.

### Why a reserved color stays loud

The regulation's limit on non-alerting red has a perceptual basis. Theeuwes found that people searching for a known target could not fully ignore a salient item that differed on another dimension: a uniquely colored item slowed search for a unique shape and the reverse, the interference did not disappear with practice, and it scaled with the distractor's relative discriminability [@theeuwes1992perceptual]. Whether every salient item captures attention in every task is contested (other work finds that capture depends on the searcher's mode and goals), but in the conditions tested, a color singleton costs attention whether or not it is relevant [@theeuwes1992perceptual].

Wolfe and Horowitz's review lists color among the four undoubted attributes that guide attention, with motion, orientation and size [@wolfe2004what]. Two of their findings set palette rules. Efficiency rises with the target-distractor difference and falls with the distractor-distractor difference, and efficient color search needs differences far above a just-noticeable step. And heterogeneity hurts most when distractors flank the target in feature space, so a target hue that can be separated from all the others by a single line in color space (the only warm color among cool ones) is found easily, while one surrounded by neighbors on both sides is not [@wolfe2004what].

::: {.rule #COL-067 grade="B"}
**Reserve the warning red for conditions that need the learner's immediate attention, and do not use it for decoration, branding or routine controls.** The alerting rule restricts non-alerting uses of red so that they do not dilute alerts [@faa2010flightcrew], and a uniquely colored item draws attention whether or not it is relevant [@theeuwes1992perceptual]. Grade B: a regulatory principle with experimental support for its mechanism.

*In LTF:* `warn` appears in the right places (errors, wrong answers, the unverified warning, the Fly mode random event, the safety callout). It also appears where it should not: the 64 px `bg-warn` play disc on `YouTubeEmbed` in the landing hero, and the `decision` callout type, which uses the same `bg-warn-tint` and `text-warn` as `safety` for a go/no-go prompt. Move the play disc to `ink`, and give `decision` its own neutral or accent treatment.
:::

::: {.rule #COL-068 grade="B"}
**Keep status colors for status: do not reuse `go`, `caution` or `warn` to label content types.** Each reuse weakens the convention, as the alerting rule's limit on non-alerting red and amber anticipates [@faa2010flightcrew], and makes the page a field of competing singletons [@theeuwes1992perceptual; @wolfe2004what]. Grade B.

*In LTF:* the `Callout` config assigns `go` to "Pro tip" and `caution` to "Classic panel", so a learner sees a green "success" fill on advice and an amber "caution" fill on a panel note. Retint those types with neutral or accent fills and keep the status hues for safety, decision states and real cautions.
:::

::: {.rule #COL-069 grade="C"}
**Give in-app alerts three levels (act now, act soon, note for later), each with its own word, icon shape and color, and use a second sense for the top level.** This mirrors the structure of the alerting rule, including its requirement of two senses for warnings and cautions and other coding where color cannot be shown [@faa2010flightcrew]. Grade C: a regulatory structure applied by analogy to a training app.

*In LTF:* the Fly mode random event already combines a `warn` frame, a pulsing ring, the `BellRing` icon, a label and a beep. Map the product's tones to the three levels explicitly (`warn` with octagon for act now, `caution` with triangle for act soon, ink with info icon for note) and document it beside `Toast` and `Badge`.
:::

::: {.rule #COL-070 grade="C"}
**Remove a color-coded alert when its condition clears, and when a cue is muted or dismissed, show that it is.** The alerting rule requires alerts to be removed when conditions end and requires an indication when attention cues are suppressed [@faa2010flightcrew]. Grade C.

*In LTF:* the Fly mode event alert clears when acknowledged; if beeps can be muted, show a "Sound off" state in Fly mode. The `BetaBanner`, dismissible and stored in local storage, is a standing caution-tinted strip and should not be the only place a real caution appears.
:::

::: {.rule #COL-071 grade="B"}
**Keep ordinary content in a narrow, quiet color range so that the one exceptional state can be separated from everything else at a glance.** Efficient color search depends on large target-distractor and small distractor-distractor differences, and on the target being separable from all distractors in color space [@wolfe2004what]. Grade B: a well-supported review applied to interface design.

*In LTF:* the neutral ink ladder and the single teal accent achieve this on ordinary pages. On busy pages (the challenge list, the dashboard, the reference hub) count the distinct hues in view; if `accent`, `go`, `caution`, `warn` and the three tier colors all appear together, the warning is no longer separable.
:::

::: {.rule #COL-072 grade="C"}
**Let the single accent mean one thing (where you are, and the next step on the path) and do not spend it on general emphasis.** A reserved hue keeps its signal value only if it is not used everywhere [@theeuwes1992perceptual; @tufte1990envisioning]. Grade C.

*In LTF:* `accent` and `accent-line` mark the active nav item, the active tab, the active lesson section, completed `LessonPath` stops, the current module and the `accent` button variant "only for continuing the lesson path". That is coherent. Links are also `text-accent`; keep their underline so that link and "you are here" are told apart by shape.
:::

### Color for data

When LTF shows quantities, the ColorBrewer taxonomy is the place to start [@harrower2003colorbrewer]. A sequential scheme suits ordered data from low to high, carried mainly by lightness steps. A diverging scheme gives equal weight to a meaningful midpoint and both extremes, with a light middle and dark contrasting hues at the ends. A qualitative scheme suits categories, with hue doing the work and only subtle lightness differences, implying no order. The tool offers 35 schemes with 3 to 12 classes, hand-selected with reference to Munsell, filterable as colorblind safe, print friendly and photocopy safe [@harrower2003colorbrewer]. Its wide adoption is not validation, and the schemes were designed for filled map areas.

Borland and Taylor argued that the rainbow color map confuses the viewer, obscures data and misleads: its hues have no perceptual order, its luminance varies uncontrollably, and it creates boundaries that are not in the data [@borland2007rainbow]. A 2023 reply by Ware, Stone and Szafir, reported with that critique, grants the problems of the classic map but notes that rainbows are often most accurate when values are read with a key, and that redesigned maps such as Turbo mitigate the flaws. Brewer showed earlier that spectral schemes can work as diverging schemes when lightness is controlled, with dark ends and a light middle, and suggested skipping yellow-greens for red-green deficient readers [@brewer1997spectral].

::: {.rule #COL-073 grade="C"}
**Match every color scale to its data type: sequential (one hue, monotonic lightness) for amounts, diverging for signed deviation from a meaningful midpoint, qualitative for categories.** Mismatching types hides order or invents it [@harrower2003colorbrewer]. Grade C: expert-selected schemes, widely adopted.

*In LTF:* dashboard progress per module is a sequential quantity and should use one hue (the accent) at varying lightness or length, never status colors. A future view of deviation from a target value in a challenge would be diverging around the target.
:::

::: {.rule #COL-074 grade="B"}
**Do not use the classic rainbow or jet map for continuous quantities; use a monotonic-lightness ramp, and use a spectral scheme only as a lightness-controlled diverging scale.** The classic rainbow lacks perceptual order and uniform luminance and creates false boundaries [@borland2007rainbow]; spectral colors are defensible only with dark ends and a light middle [@brewer1997spectral]. Grade B: the critique is supported by mixed experiments, and redesigned rainbows narrow it.

*In LTF:* no rainbow exists in the product today. If a heat map is added (time spent per lesson, accuracy by challenge), use a single-hue ramp checked in both themes, since a ramp ending near black vanishes in Night.
:::

::: {.rule #COL-075 grade="C"}
**Keep the fixed instrument and chart colors inside drawings and keep page tokens out of drawings.** Mixing the two systems blurs which colors are conventions to learn and which are interface signals; the token rules already draw this line, and the alerting principle of not diluting reserved colors applies to it [@faa2010flightcrew; @ibm2026carbon]. Grade C.

*In LTF:* `arc-red`, `display-magenta` and `chart-*` stay in `AirspeedArcs`, `g1000-pfd`, `sectional-legend` and the `YouTubeEmbed` background; `warn` and `go` stay out of the instrument drawings. A grep for `arc-` and `display-` outside `features/widgets/` and `AirspeedArcs.tsx` is a cheap review check.
:::

### What this means for Learn to Fly

**Keep.** One accent with one meaning; status colors that travel with icons and words; the Fly mode event alert's combination of frame, ring, icon, word and sound; the separation of instrument and page tokens.

**Change.** Move the landing video's play disc off `warn` (COL-067). Retint the "Pro tip", "Classic panel" and "Decision" callouts so status hues mean status (COL-067, COL-068). Write down the three alert levels and map `Toast`, `Badge` and `Callout` tones to them (COL-069).

**Build.** A hue-count check in review for busy pages (COL-071) and data-scale guidance in the component docs before the first dashboard chart is built (COL-073, COL-074).

## Decision list and review checklist

### Decisions this Part settles for LTF

1. **Luminance carries legibility; hue carries category.** All text and needed marks are separated from their grounds by luminance contrast; hue differences are never relied on for detail (COL-002, COL-003, COL-011).
2. **Color never stands alone.** Every status, tier, quiz result, widget band and alert carries a word, icon, shape or position as well as color (COL-028, COL-045, COL-047). The Day `caution` and `warn` pair, nearly merged under deutan simulation, depends on its triangle and octagon icons.
3. **Tokens are specified perceptually.** Each token records its Oklch triplet; ramps are planned in Oklch with per-hue chroma caps and explicit gamut mapping; contrast is gated on the WCAG ratio, never on lightness difference (COL-009, COL-013 to COL-016, COL-019).
4. **Day `ink-3` is resolved.** Either its lightness gap from `ink-2` is widened or it is folded into `ink-2` in Day (COL-019, COL-061).
5. **A token script gates color in CI.** It generates the Oklch table, WCAG ratios for every declared pair in both themes, simulated color-deficient distances for must-differ pairs, and an advisory APCA report (COL-010, COL-046, COL-051, COL-057, COL-058).
6. **Contrast floors.** 4.5:1 text, 3:1 large text and non-text indicators, 7:1 target for Fly mode text; `accent-line` is not used for meaningful marks on `surface-sunken` (COL-053 to COL-055, COL-059).
7. **No color psychology in rationale or copy.** Colors are justified by role, convention, contrast and color vision, never by priming or mood claims (COL-032 to COL-036).
8. **Day is the reading default and the design reference; Night compensates.** Night meta text uses `ink-2`; Fly mode gains an in-mode theme control and a measured decision on its default (COL-060, COL-061, COL-064, COL-065).
9. **Status hues mean status.** `warn` is removed from the landing play disc and the `decision` callout; `go` and `caution` are removed from "Pro tip" and "Classic panel" (COL-067, COL-068).
10. **Three alert levels with redundant coding,** cleared when the condition ends (COL-069, COL-070).
11. **Widgets sit on fixed grounds,** use labeled colors in basic English names, and keep instrument colors separate from page tokens (COL-022, COL-027, COL-049, COL-075).
12. **Data scales follow the data type;** no rainbow; categorical series use a deficiency-aware palette with direct labels (COL-052, COL-073, COL-074).
13. **No exactness claims.** Copy never says a page color is the sim's color, and never calls the product "colorblind safe" (COL-001, COL-050).

### Review checklist

Run these questions against a pull request or a page.

- Does any text, thin stroke or needed mark rely on hue rather than luminance to stand out from its ground? (COL-002)
- Is any state or quantity encoded by a small hue difference, or by a neighboring-hue boundary such as cyan against green? (COL-003, COL-031)
- Is a new binary indicator red against green? If so, does it also differ in shape or label? (COL-004, COL-045)
- Is there a large saturated flash on a dark full-screen view? (COL-005, COL-063)
- Does copy promise that a color matches the simulator, describe cones by color names, or teach red, yellow and blue primaries? (COL-001, COL-006, COL-030)
- Were color differences judged by hex or HSL rather than Oklab or CIEDE2000, and is any difference code validated against the Sharma pairs? (COL-007, COL-010)
- Do states that must be told apart at a glance differ by many just-noticeable steps? (COL-008)
- Does every new or changed token record its Oklch triplet and stay within the sRGB gamut by chroma reduction, not clipping? (COL-009, COL-013, COL-014, COL-016)
- Was contrast checked by the WCAG ratio, not by a lightness difference? (COL-011, COL-015)
- Are gradients and mixes interpolated in Oklab? (COL-017)
- Do components reference role tokens only, with instrument and chart colors confined to drawings? (COL-018, COL-075)
- Are adjacent ramp levels at least about 0.08 apart in Oklch lightness? (COL-019)
- Was each color reviewed on every surface it appears on, in Day and Night, at low and high brightness? (COL-020, COL-025)
- Do adjacent saturated colors have a neutral edge or lightness gap? (COL-021)
- Do widget drawings sit on a fixed neutral ground inside `WidgetFrame`? (COL-022)
- Are large areas muted and strong color confined to small meaningful elements? (COL-023, COL-040)
- Are grids, borders and dividers quiet, with `line-strong` kept for control boundaries? (COL-024)
- Does any quiz ask learners to name a color from a lone swatch? (COL-026)
- Are color names in copy basic English terms, each paired with a label, icon, position or shape? (COL-027, COL-028)
- Does any view ask learners to remember more than about six hue meanings? (COL-029)
- Does any rationale or copy claim a psychological effect of color? (COL-032, COL-034, COL-036)
- Are error and wrong-answer states justified by convention and redundancy? (COL-033)
- Is a color experiment preregistered, powered and specified in measured terms? (COL-035, COL-037)
- Are competitors or groups assigned red or blue for an imagined edge? (COL-038)
- Is a "calmer" or "friendlier" request expressed in lightness and chroma, then checked for contrast? (COL-039)
- Do both themes remain first-class choices? (COL-041)
- Is olive or brown used as an accent? (COL-042)
- Are widget colors clear and labeled rather than gray or garish? (COL-043)
- Does a first-contact page add color where it should reduce complexity? (COL-044)
- Were protan, deutan and tritan simulations at 0.5 and 1.0 checked in both themes, with any merged pair fixed by a second cue? (COL-046, COL-047, COL-051)
- Is pure red used on dark grounds or on green, or a yellow-green used for meaning? (COL-048)
- Are colored elements labeled directly rather than through a separate key? (COL-049)
- Does any text claim the product is colorblind safe? (COL-050)
- Do categorical chart colors come from a deficiency-aware palette, checked against both theme grounds? (COL-052)
- Does all text meet 4.5:1 (3:1 large) and every needed indicator 3:1 on its actual ground, including tints, with no rounding? (COL-053, COL-054, COL-059)
- Does Fly mode text reach 7:1 and avoid `ink-3`? (COL-055)
- Was low-contrast text accepted because it "looks fine"? (COL-056)
- Is APCA used only as advice, with the stricter result taken? (COL-057)
- Does the CI contrast gate cover the change? (COL-058)
- Is dense reading designed first in Day, and is Night small text larger or brighter? (COL-060, COL-061)
- Does Night elevation use lighter layers rather than shadow? (COL-062)
- Can the learner change theme inside Fly mode, and was the Fly mode default measured? (COL-064, COL-065)
- Is a dark theme justified by age or room darkness alone? (COL-066)
- Is `warn` used for anything other than act-now conditions, or are status hues used to label content types? (COL-067, COL-068)
- Does a new alert fit one of three levels with word, icon, color and (for the top level) sound, and does it clear with its condition? (COL-069, COL-070)
- How many distinct hues are in view, and is the exceptional state still separable? (COL-071)
- Is the accent used only for position and the next step? (COL-072)
- Does each color scale match its data type, with no rainbow? (COL-073, COL-074)
