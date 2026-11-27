# Lane 05: Color science (research notes)

Order of sections follows the history of the subject: light and the eye first, then standards and measurement, then color order and appearance, then tools that matter to a web app today.

## newton1704opticks

Newton, Isaac. 1704. Opticks (first edition, London, printed for Sam. Smith and Benj. Walford). Evidence type: experimental treatise by the founder of the subject; primary source.

### Core claims

Newton argued that the colors seen when a prism spreads sunlight are not something the glass adds to white light. White sunlight is a mixture of rays that differ in how strongly they bend (their "refrangibility"), and each ray has its own color that no later refraction or reflection changes. The central claim for color science is Proposition VII of Book I, Part II: all the colors in the universe that are made by light, and do not depend on the power of imagination, are either the colors of homogeneal lights or compounds of them. He adds a physiological point that is easy to miss: mixed rays do not alter each other's color-making power, but their actions combine in the "Sensorium" to produce a sensation of a mean color between their proper colors.

### Specifics

I read the OCR text of the 1704 printing (archive.org item cited in sources.json). Four specifics are directly confirmed there.

First, the order of the spectrum. Newton describes the separated rays, from the end where the most refrangible rays fall to the other end, as tinged with the series violet, indigo, blue, green, yellow, orange, red, with all the intermediate degrees in continual succession. The seven names are labels on a continuum, and he says there are as many degrees of color as there are sorts of rays differing in refrangibility.

Second, immutability. Light of one color, isolated and sent through further prisms, stays that color. Objects viewed in such light (he lists paper, red lead, indigo, gold, grass, violets) appear entirely in the color of the light, differing only in how strongly they reflect it.

Third, the color circle and mixing rule (Book I, Part II, Proposition VI, Problem III). Newton divides a circle's circumference into seven arcs, proportioned to the intervals of the musical octave, and assigns red, orange, yellow, green, blue, indigo and violet to them in order. For a mixture, place a small circle at the center of gravity of each arc, sized in proportion to the amount of that color, and find the common center of gravity Z. The direction of Z from the circle's center gives the hue, and the distance gives the fullness, with the center itself meaning white. His worked example (violet 1, indigo 1, blue 2, green 3, yellow 5, orange 6, red 10 parts) gives an orange verging a little toward red, with a little less than half the fullness of pure orange.

Fourth, limits he admits. He considers the rule accurate enough for practice but not mathematically accurate. He could never produce a perfect white by mixing only two primary colors, and did not know whether three at equal distances would do. Red and violet mixtures give a purple, which is not a spectral color.

### Replication and criticism

The prism results were replicated widely. Helmholtz in 1852 repeated Brewster's experiments with tighter controls and found that the results did not diverge from Newtonian predictions (Wade 2021, doi 10.1080/0964704X.2021.1904182). What did not survive was the view that the three-fold character of mixing lies in light. Mollon (2002) argues that eighteenth-century writers treated trivariance as physics, and that Young's insight was to assign it to the eye. Newton's center-of-gravity rule is an early form of additive mixing, but it needs three receptor classes and linear algebra to be made exact; Maxwell and Helmholtz supplied those. One source I found says the count of seven was chosen somewhat arbitrarily.

### Implications for LTF

Hue is a continuum that people sort into named categories, so a UI that relies on a viewer separating "orange" from "yellow" at a glance asks for a categorical judgment on a continuous variable; give a second cue such as a label or shape. Mixtures of lights (screens) behave roughly as Newton described, so a display cannot show colors outside the triangle of its primaries. Newton's "fullness" axis is the ancestor of chroma: a color diluted with white is a different object from a darker color, and theme ramps must treat them separately. In a lesson on reading an instrument display, do not teach color names as if they were physical properties; the seen color depends on lighting and monitor.

Confirmed this session: read the OCR full text of the 1704 first printing at archive.org (bim_eighteenth-century_opticks-or-a-treatise-_newton-sir-isaac_1704), including Book I Part II Propositions VI and VII and the passage on immutable colors; Open Library search "Opticks Newton" (OL31832178W, OL19091121W); Mollon 2002 (vision.psychol.cam.ac.uk); Wade 2021 (discovery.dundee.ac.uk).

## young1802theory

Young, Thomas. 1802. The Bakerian Lecture. On the theory of light and colours. Philosophical Transactions of the Royal Society of London 92, 12-48. Evidence type: theoretical argument from the physics of waves, with no new color experiment.

### Core claims

The lecture was delivered in November 1801 and printed in 1802. Its main business is the wave theory of light and interference, but it contains the first clear argument that the three-fold character of color mixing belongs to the eye, not to light. Light, in Young's view, is a continuum of vibration frequencies. If every frequency needed its own receptor, the retina would need an unlimited number of tuned particles at every point. He proposed instead a small, fixed number of broadly tuned receptor types. This is the origin of trichromacy as a physiological hypothesis.

### Specifics

The key sentence, reproduced in Mollon (2002) and Wade (2021) from the 1802 text, reads: "Now, as it is almost impossible to conceive each sensitive point of the retina to contain an infinite number of particles, each capable of vibrating in perfect unison with every possible undulation, it becomes necessary to suppose the number limited, for instance, to the three principal colours, red, yellow, and blue." Three details matter.

The three colors named in 1802 are red, yellow and blue, not the red, green and violet that popular accounts attribute to Young. I could not confirm from any source I read that he later changed the triplet, so the LTF reference book should say that the 1802 lecture names red, yellow and blue and treat the red, green, violet version as a later reformulation unless a source is found. The Royal Society's blog gives the same wording.

The receptors are broadly tuned. Mollon quotes Young as saying each particle can be put in motion "less or more forcibly, by undulations differing less or more from a perfect unison". That is already the idea of overlapping spectral sensitivity curves, a feature of real cone pigments.

The argument is by elimination and by economy, not by measurement. Young did not measure a cone, and the lecture contains no color-matching data. Mollon notes that in the eighteenth century many scientists concluded there must be only three kinds of light, and quotes Maxwell (1871) crediting Young as the first who looked for the explanation of three primaries "not in the nature of light, but in the constitution of man". Mollon adds that modern opsins, segregated in different cones, have peak sensitivities near 420, 530 and 560 nm (citing Dartnall et al. 1983).

### Replication and criticism

The hypothesis was later confirmed in the sense that matters: there are three cone classes with overlapping sensitivities. The Wikipedia account of the Young-Helmholtz theory dates direct confirmation in human retinas to Dartnall, Bowmaker and Mollon in 1983, by microspectrophotometry on single cones. The idea was not new in kind: George Palmer proposed a similar three-particle retina in 1777 and 1786, with red, yellow and blue rays, a quarter century before Young (Wikipedia on Palmer and on the Young-Helmholtz theory). Priority is therefore contested, and the red, yellow, blue triplet is the classical painters' primaries, not a measured result. Wade (2021) reports that Helmholtz did not initially embrace Young's suggestion and became an ardent proponent after Maxwell's color-disc work of 1855. The theory also has a known gap that Hering later exploited: three cone signals do not by themselves explain why red and green, or yellow and blue, never appear together; see the Hurvich and Jameson entry.

### Implications for LTF

For a beginner audience the practical point is that color is made by the viewer's three-channel visual system, so any pilot-training color code must be checked against how three channels respond, not against color names. Two lights that look the same on one monitor can differ in spectrum (metamers), so a green that matches the sim on your screen may not match on a pilot's second monitor. For the "fly mode" next to the sim, Young's economy argument implies you should never encode a quantity in tiny hue differences: the system carries three broad signals, and small differences in the middle of the spectrum are the first to be lost under glare or an aging lens.

Confirmed this session: Crossref record doi 10.1098/rstl.1802.0004; Mollon (2002) full text PDF read (section 5, with the Young 1802a quotation and the Maxwell 1871 quotation); Wade (2021) full text PDF (discovery.dundee.ac.uk); Royal Society blog (royalsociety.org, 2015); Wikipedia "Young-Helmholtz theory"; Project Gutenberg's copy of the lecture (ebook 79490) was down for maintenance, so the primary text was not read directly.

## helmholtz1924treatise

Helmholtz, Hermann von. 1924. Helmholtz's Treatise on Physiological Optics, translated by J. P. C. Southall from the third German edition (Optical Society of America). German original: Handbuch der physiologischen Optik, 1867. Evidence type: encyclopedic synthesis of physics, physiology and psychology of vision; I read secondary accounts, not the Treatise itself.

### Core claims

Helmholtz's Handbuch is the nineteenth-century summation of vision science and the place where trichromatic theory became a working framework for color. Wade (2021) describes the three volumes as dealing with the physics, physiology and psychology of vision in turn: volume 1 the anatomy and optics of the eye, volume 2 the sensations of vision (principally color and contrast phenomena), volume 3 perception, including eye movements and binocular vision. For color, Helmholtz took Young's suggestion of three receptor types, supported it with color-mixing measurements and color-blindness cases, and set it against the opposing view of Ewald Hering.

### Specifics

Publication history, as far as I could confirm. The Handbuch appeared as a single volume in 1867 (Leipzig, L. Voss), after its three parts had been issued separately in 1856, 1860 and 1866; the color material sits in the second part. The English Treatise was translated by Southall from the third German edition (edited by Nagel, Gullstrand and von Kries, 1909 to 1911) and published in 1924 and 1925. A search result notes that the third edition was based on Helmholtz's text from the first edition of 1867, not on the revised second edition of 1896, so the 1867 wording reaches English readers only through that route.

Wade (2021) gives several concrete points about the color work. In 1852 Helmholtz repeated and tightened David Brewster's experiments on the analysis of sunlight into three spectral components and found that results did not diverge from Newtonian predictions. By the time of the Handbuch's second part he had examined several color-blind observers and had used Maxwell's color wheel. In that part he distinguished additive from subtractive mixing. His speculative sensitivity curves for three kinds of fibres (volume 2 of the 1867 text, figure 21) are captioned in the Southall translation as "taken to indicate something like the degree of excitation of the three kinds of fibres, No. 1 for red-sensitive fibres, No. 2 for the green-sensitive fibres, and No. 3 for the violet-sensitive fibres" (Helmholtz 1924b, 143, as quoted by Wade). The curves overlap, not separate bands.

Wade states that Helmholtz did not initially embrace Young's suggestion and became an ardent proponent after Maxwell (1855) supplied more detailed support using the color disc. A search result summarizing a paper by Heesen (2015) argues that the Handbuch of 1860 gives Maxwell too little credit and that the idea of coterminal response curves has a clearer line to Maxwell; I could not open that paper, so treat the priority dispute as reported, not confirmed.

### Replication and criticism

The three-cone core was confirmed physiologically in the twentieth century (Dartnall, Bowmaker and Mollon in 1983, per the Wikipedia history of the theory). The theory has a known blind spot: trichromacy alone does not explain why reddish greens and yellowish blues are never seen, which Hering pressed. The Helmholtz and Hering dispute was both scientific and personal; Turner (1994, as cited by Wade) is the standard history. Shevell and Martin (2017) summarize it in one line: Helmholtz criticized Hering's reliance on introspection and hypothetical neural mechanisms, and Hering criticized Helmholtz's physicalism. The modern resolution, set out in the Hurvich and Jameson entry, is a two-stage model with three cone types followed by opponent processing. Wade also notes that Helmholtz's results rested almost entirely on his own observations.

### Implications for LTF

The two-stage lesson from Helmholtz and Hering is the one a designer needs: color is encoded first in three overlapping cone signals and then recoded as light and dark, red against green, and yellow against blue. A cockpit-style interface that places red and green markers side by side in the same size, brightness and position works against the second stage for color-deficient viewers; add a second cue. For lesson copy, avoid saying "red, green and blue cones" as if they were colored receptors; the cones respond to broad bands, and the names are shorthand.

Confirmed this session: Open Library search (OL12361818W for the 1924 OSA Treatise, OL95302W for the Handbuch, OL10462633W for the 1962 Dover edition); Wade (2021) full text PDF from discovery.dundee.ac.uk, including the volume contents, the 1852 Brewster paper and the quoted caption; web search on the Handbuch's publication history and the Southall translation; Shevell and Martin (2017) at PMC6022826. The Treatise text itself was not opened.

## hurvich1957opponent

Hurvich, Leo M., and Dorothea Jameson. 1957. An opponent-process theory of color vision. Psychological Review 64(6, Part 1), 384-404. Evidence type: psychophysical experiments plus a quantitative theory; the foundation for the second stage of modern color vision models.

### Core claims

Hurvich and Jameson, working at Eastman Kodak, gave Ewald Hering's opponent-colors idea a quantitative footing. Hering had observed that some hue pairs never appear in the same place at once: reddish greens and yellowish blues are not seen, though yellowish greens and bluish reds occur (yorku.ca/eye/opponent.htm). He also noted that staring at a red patch and then at white produces a greenish afterimage. His hypothesis was that signals from the three cone types feed later neural stages that work in opposing pairs: red against green, yellow against blue, and, as a non-opponent channel, black against white. Hurvich and Jameson's contribution was a method, hue cancellation, that measures the strength of each opponent response at each wavelength, and a theory that links those measurements to the three cone signals.

### Specifics

Hue cancellation rests on the observation that mixing red and green lights gives yellow, not a reddish green, and mixing yellow and blue gives white, not a yellowish blue. As stated on the York University vision pages, in their view "Red and green cancel each other as do yellow and blue." The procedure, as described there and in Shevell and Martin (2017):

1. For each observer, find unique red, green, yellow and blue.
2. Show a monochromatic test light. If it is not itself a unique hue, the observer adds a cancelling light until one of the perceived hues disappears. For short wavelengths the observer adds green to cancel redness; in the middle of the spectrum unique red cancels green and unique blue cancels yellow; for long wavelengths unique green cancels red.
3. The amount of cancelling light needed is the measure of the strength of the hue being cancelled, called its chromatic valence.
4. Plot valence against wavelength to get the opponent curves. The plus or minus sign given to each curve is arbitrary and only shows that the two processes oppose each other.

Illustrative values from the same pages, for the observer shown: at 450 nm the blue valence is about minus 1.0 and the red valence about 0.2, which is why 450 nm looks violet or purple; at 550 nm both yellow and green valences are large, so it looks greenish yellow. A hue is unique when the valences of the other two hues are zero. No single wavelength gives unique red, since even 700 nm looks slightly yellow and needs a little blue to cancel it.

### Replication and criticism

Opponent processing is supported by neural recordings; the York page says electrophysiological responses that mirrored opponency were found in the 1950s, and that opponency is no longer questioned as a feature of visual processing. The strong claim that the psychophysical hue axes are the neural axes is contested. Shevell and Martin (2017) state that these experiments "do not explain unique hues" while showing that Hering's interactions exist, that unique-hue settings vary between observers (especially for blue, red and green), and that unique hues do not line up with the cone-opponent axes found in the retina and thalamus. They also argue against hue-named cells: in their words, there are no "red-green" or "blue-yellow" cells. The yellow-blue equilibrium locus is dog-leg shaped, not straight, which suggests cone signals combine nonlinearly. One source I found gives a range of 490 to 555 nm for unique green across people.

### Implications for LTF

The opponent model has direct design consequences. First, it is the reason text legibility should be set by luminance contrast, the black-white channel, and not by hue difference: the black-white channel does not depend on hue at all. Second, never use red against green as the only distinction in a status indicator, checklist state or quiz result; pair hue with a shape or label. Blue and yellow are the safer opponent pair for red-green deficient viewers, which also suits a blue-and-amber instrument palette. Third, Hering's afterimage observation is a reason to keep large saturated flashes out of a dark full-screen fly mode used next to the sim: a bright patch followed by a dark view leaves a complementary ghost.

Confirmed this session: Crossref records for doi 10.1037/h0041403 and the 1955 paper (10.1364/JOSA.45.000602); yorku.ca/eye/opponent.htm and yorku.ca/eye/huecan.htm and yorku.ca/eye/handj.htm; Shevell and Martin, "Color opponency: tutorial", JOSA A 34(7), 1099-1108 (PMC6022826). The 1957 paper's abstract was not retrievable (PsycNet page did not load), so the specifics above come from these accounts.

## stockman2000spectral

Stockman, Andrew, and Lindsay T. Sharpe. 2000. The spectral sensitivities of the middle- and long-wavelength-sensitive cones derived from measurements in observers of known genotype. Vision Research 40(13), 1711-1737. Evidence type: psychophysical measurements on genotyped observers; basis of the CIE physiologically relevant standards.

### Core claims

The paper estimates the spectral sensitivities of the L (long-wavelength) and M (middle-wavelength) cones from observers who lack one of those cone types, so the missing cone cannot contaminate the measurement. Because the observers were genotyped, the photopigment each one carried was known. The result, together with S-cone data, became the "cone fundamentals" that the CIE sanctioned in 2006 (technical report 170-1, with luminous efficiency and XYZ versions in 170-2 of 2015) as physiologically relevant standards for modeling mean normal color vision. I read it only through a search abstract and Stockman's 2019 review (UCL eprint 10079410).

### Specifics

Observers and method. The search abstract says M-cone data came from nine protanopes (who lack L cones) and L-cone data from 20 deuteranopes (who lack M cones). Stockman's 2019 review gives the numbers as nine protanopes, twenty-two deuteranopes and three S-cone monochromats (who lack both M and L cones). I cannot reconcile 20 and 22 from what I read, so the reference book should cite the paper's own abstract for the count. In the review's account, the male dichromats were chosen so that each had only a single opsin gene on the X chromosome, which means their longer-wavelength photopigment was known.

The logic of fundamentals. Photon absorption by a cone is all-or-nothing, so a single cone cannot signal wavelength (the response is "univariant"); light is thus represented by three numbers, and lights with equal cone responses must match (metamers). Every set of color matching functions, whether for real or imaginary primaries, is a linear transformation of the cone fundamentals. Stockman and Sharpe therefore need only one reliable set of color matching functions to transform. The review says the CIE chose the Stiles and Burch 10-degree matching functions, and prints the transformation from their r, g, b functions to the l, m, s fundamentals as a three-by-three matrix with first row 2.846201, 11.092490, 1, second row 0.168926, 8.265895, 1, third row 0, 0.010600, 1. The 2-degree fundamentals use the same transformation, adjusted for macular and photopigment densities suited to a 2-degree field. XYZ versions follow by a further linear step; the review gives the 2-degree matrix as rows 1.94735469, -1.41445123, 0.36476327; 0.68990272, 0.34832189, 0; and 0, 0, 1.93485343.

Polymorphism. The commonest naturally occurring shift in L-cone pigment is about 3 nm, caused by alanine replacing serine at position 180 of the L opsin gene; the CIE L-cone fundamental incorporates a mix of the two variants (review). One citing source gives the CIE fundamentals' peaks as 570, 543 and 442 nm for L, M and S; Mollon (2002) gives pigment peaks near 420, 530 and 560 nm. The difference is expected: the fundamentals describe sensitivity to light entering the eye, so lens and macular filtering shift them.

### Replication and criticism

This is the most secure current estimate of mean cone sensitivities, in Stockman's own assessment, which comes from an author of the standard and should be read that way. His review also criticizes the older CIE 1931 functions as unsuitable for physiological modeling, because they were reconstructed from relative matching data using the 1924 V(lambda) function, which underestimates luminance at short wavelengths, and notes that the widely used Smith and Pokorny cone fundamentals inherit that flaw. The standards describe a mean observer; individual differences in lens density, macular pigment, photopigment density and opsin position all matter and are not captured.

### Implications for LTF

Three practical points. LTF should not promise exact color agreement between the sim, the web page and the pilot's other monitor: matching depends on the observer and the display spectra, and wide-gamut screens with narrow primaries expose differences. Second, tools that work in cone-like spaces (Oklab, for example, begins with an LMS-style matrix; see the Oklab entry) are building on this physiological picture. Third, the polymorphism and dichromat data are a reminder that some trainees have different cone sensitivities from the mean; see the Machado entry for simulating that.

Confirmed this session: Crossref record doi 10.1016/s0042-6989(00)00021-3; a web search returning the paper's abstract details (nine protanopes, 20 deuteranopes) and citing papers on position 180; Stockman (2019) full text PDF from discovery.ucl.ac.uk (matrices, observer counts, criticism of the 1931 data); a CIE 170-1 search result. The original paper's full text was not opened.

## smith1931cie

Smith, T., and J. Guild. 1931. The C.I.E. colorimetric standards and their use. Transactions of the Optical Society 33(3), 73-134. Evidence type: standards exposition written by the people who built the standard; the underlying data are the Wright and Guild color-matching experiments.

### Core claims

In 1931 the Commission Internationale de l'Eclairage (CIE) adopted a standard way to specify a color by three numbers, so that two lights with the same numbers match for a standard observer. Smith and Guild's long paper in the Optical Society's Transactions explains that system and how to use it. The ADS abstract record (1931TrOS...33...73S) summarizes it as covering the trichromatic system for color measurement and its origin, some new colorimetric terms, and the theory of color transformations and calibration of instruments. I did not obtain the paper's text, so the account of the 1931 system below comes from secondary sources (Wikipedia on the CIE 1931 color space; Stockman 2019).

### Specifics

The data. The standard rests on matching experiments from the late 1920s by W. David Wright (ten observers) and John Guild (seven observers), in which observers matched test colors using three primaries at 700, 546.1 and 435.8 nm (Wikipedia). Crossref lists Wright's 1928 and 1929 papers in the same Transactions and Guild's 1931 paper "The colorimetric properties of the spectrum" in Philosophical Transactions A. The matching field was two degrees across, which is why this is called the 2-degree standard observer; sources I found tie that size to the belief that the color-sensitive cones lay within about two degrees of the fovea.

The transformation. Matching with real primaries needs negative amounts of some primary for many test colors. The CIE therefore transformed the data to imaginary primaries, X, Y and Z, so that the matching functions were non-negative, which simplified hand and slide-rule calculation. The y function was set equal to the photopic luminous efficiency function V(lambda), so Y is luminance, and the equal-energy white has x = y = z = 1/3 (Wikipedia). Chromaticity is x = X/(X+Y+Z) and y = Y/(X+Y+Z), with z = 1 - x - y; X and Z can be recovered from x, y and Y. Stockman (2019) adds that the x, y, z functions were an invention of the CIE in 1931 that used imaginary primaries to form a color volume larger than the volume of real lights, and that the transformations are valid only because color matching is linear and additive, as tested by Grassmann's laws, which have been tested extensively and hold well.

### Replication and criticism

The standard has lasted nine decades, and every later system in this lane builds on it, but its limits are well documented. (1) It is valid for small foveal fields; a 10-degree supplementary observer was published in 1964 (Wikipedia). (2) It describes additive mixing only. (3) Distances on the xy diagram do not match perceived differences, which is why MacAdam's 1942 ellipses vary widely in size and why CIELAB and CIELUV were later built; see the MacAdam entry. (4) Judd (1951) and Vos (1978) corrected the short-wavelength end of the luminosity function. (5) Stockman argues that the 1931 matching functions were reconstructed from relative matching data using the flawed 1924 V(lambda), which underestimates luminance at short wavelengths, and that directly measured functions are better; this is the view of an author of the competing standard, so read it with that in mind.

### Implications for LTF

For a web app the 1931 system is the invisible foundation: the Wikipedia article draws the sRGB gamut inside XYZ and xyY, and any gamut picture is drawn on an xy diagram. Three rules follow. Never measure "how different two colors look" with straight-line distance in xy, or in RGB. When LTF shows a gamut or explains why a sim color cannot be reproduced on a page, use a chromaticity diagram, but say it is a map of hue and saturation without lightness. Treat Y as luminance: contrast measures for text on dark or light themes should be based on luminance, not on hue (the accessibility lane covers the contrast formulas). The standard rests on matches by seventeen observers of a small foveal patch, so a full-screen fly mode in a dark room is outside its design conditions; leave margin in any color-critical design.

Confirmed this session: Crossref records for doi 10.1088/1475-4878/33/3/301, Wright (10.1088/1475-4878/30/4/301 and 29/5/302) and Guild (10.1098/rsta.1932.0005); ADS abstract summary and a NIST citation from a web search; Wikipedia "CIE 1931 color space" (fetched); Stockman (2019) PDF. The Smith and Guild article itself was not read.

## macadam1942visual

MacAdam, David L. 1942. Visual sensitivities to color differences in daylight. Journal of the Optical Society of America 32(5), 247-274. Evidence type: laboratory psychophysics, a color-matching variability study on a very small number of observers.

### Core claims

MacAdam measured how precisely observers can match one color to another, and found that the scatter of matches on the CIE chromaticity diagram forms an ellipse around each target color. The ellipses differ greatly in size and orientation depending on where the target sits, so equal distances on the CIE 1931 diagram do not mean equal visual differences. The abstract (as returned by search) says small, equally noticeable chromaticity differences are represented, for all chromaticities and all kinds of variation, by the radii of a family of ellipses on the standard chromaticity diagram. This is the experimental case that the xy diagram is not perceptually uniform, and it motivated the search for uniform color spaces such as CIE 1960 UCS, CIELUV and CIELAB.

### Specifics

Method and conditions. The abstract says the standard deviation of color matching was finally adopted as the most reproducible criterion. Conditions per the same search: Standard Illuminant C, a test field of constant luminance of 15 millilamberts and a surround of 7.5 millilamberts. Another source describes a 2-degree field in a 42-degree surround. Wikipedia gives a two-degree foveal field and a luminance near 48 cd/m2, which I could not tie to the abstract's 15 millilamberts. A trained observer viewed a fixed test color and adjusted a second field to match it; the standard deviation of repeated matches in chromaticity defines an ellipse.

Sample. Wikipedia reports measurements at 25 color points and describes the key data as coming from a single trained observer, shown in the figure with the initials PGN. I could not confirm the observer count from the abstract. The number of points and the single observer are therefore secondhand and should be cited as "reported by Wikipedia", not as quotations from the paper.

Scale conventions. The famous plot draws the ellipses at ten times their true size so that they are visible. Assuming matches follow a bivariate normal distribution, a 1X ellipse contains about 39 percent of matches, a 2X ellipse about 86 percent and a 3X ellipse about 99 percent; the just-noticeable chromaticity difference is generally taken as about the 3X ellipse (Wikipedia). Lighting engineers use standard deviation of color matching (SDCM), which is defined relative to these ellipses, to describe the color precision of a light source.

Extensions listed on the Wikipedia page: Brown and MacAdam (1949) extended the measurement to ellipsoids that include luminance differences; Davidson (1951), Brown (1957) and Wyszecki and Fielder (1971) are listed as further measurements. Discrimination ellipses stayed relatively unchanged for luminances between 3 and 30 cd/m2.

### Replication and criticism

The qualitative result, that ellipses vary in size and orientation across the diagram, has been replicated by every later study listed above. The original data set is small by modern standards (one observer, 2-degree field), so the exact ellipses should not be applied as universal thresholds. A search result notes that Silverstein (1943) showed that no transformation can turn all the ellipses into equal circles, and that the CIE 1960 diagram only reduced the range of ellipse sizes. CIELUV and CIELAB make the ellipses nearly, but not exactly, circular. Recent work, as reported on Wikipedia, finds that ellipses grow with eccentricity in a VR study and that photoreceptor absorption explains about 87 percent of the variance in color discrimination (da Fonseca and colleagues).

### Implications for LTF

MacAdam is the evidence behind a simple rule for palettes: spacing in a chromaticity plot or in raw RGB is not spacing in perception. If LTF builds a categorical palette for charts, lesson tags or challenge difficulty levels, choose steps with a perceptual distance measure (see the CIEDE2000 and Oklab entries), not by eye on a diagram. The 3X ellipse idea also yields a practical threshold language: two states that must be told apart without effort, such as active and inactive instrument elements, should differ by many just-noticeable steps, not one or two, because the thresholds above were measured with a trained observer matching adjacent fields in a lab, not a beginner scanning a busy screen. A warning for dark themes: the ellipse data cover a limited luminance range, so do not extrapolate them to very dim UI states.

Confirmed this session: Crossref record doi 10.1364/josa.32.000247; web searches returning the abstract details and the Optica issue listing (pages 247-308 for the issue; 247-274 for the paper per the search); Wikipedia "MacAdam ellipse" (fetched). The scilit abstract page returned 403 and the paper itself was not read.

## munsell1907color

Munsell, Albert H. 1907 (second edition, Boston: Geo. H. Ellis Co.; copyright 1905). A Color Notation: A Measured Color System, Based on the Three Qualities Hue, Value and Chroma. Evidence type: a craft and teaching treatise by an artist and teacher, with a measured system, later given a colorimetric basis by committee work.

### Core claims

Munsell argues that every color is described by three independent qualities, hue, value and chroma, and that a color can be named by its position on three measured scales instead of by fanciful names. Two dimensions are not enough: flat diagrams of hue and value that omit chroma are, in his words, as incomplete as a map of Switzerland with the mountains left out. The book offers a color sphere as the organizing picture, a notation, a teaching method, and a theory of balance in which combinations that balance in neutral gray are harmonious.

### Specifics

Definitions (from the Gutenberg text I read). Hue is the quality by which one color is distinguished from another, as a red from a yellow. Value is the quality that distinguishes a light color from a dark one. Chroma is the "strength of color", the quality that separates a strong color from a weak one at the same hue and value. He calls "intensity" a misleading synonym for chroma.

The sphere. The north pole is white, the south pole black, the vertical axis is a neutral gray scale, and the equator is a circuit of middle reds, yellows, greens, blues and purples. Perpendiculars to the axis are scales of chroma, running from neutral gray at the center outward. Five principal hues (R, Y, G, B, P) and five intermediates formed by joining initials (YR, GY, BG, PB, RP) give ten hue names, which Munsell says is as many as a child can handle at the outset. Value runs from black as 0 to white as 10.

The notation. Hue is written first, value above the line and chroma below it, in the invariable order hue, value over chroma. R 5/9 is his example of vermilion; the buttercup is YR 7/9 and the wild violet B 3/4. The buttercup is more stimulating than the violet partly because it is lighter and partly because its chroma is five steps higher.

Irregular solid. Because pigments differ in the chroma they can reach, he says a "color tree" with branches of unequal length is needed to show real pigment colors. A brilliant spectrum projects beyond the sphere, since spectral colors have far greater chroma than pigments.

Balance. Munsell treats the sphere's center as the natural balancing point: points equally far from it on opposite sides balance. The buttercup and violet do not balance because the violet is too weak in chroma, so a designer can compensate by area.

A debunking worth keeping. An appendix, "False color balance", says it is a widely accepted error that red, yellow and blue are primary, that Brewster's theory had long been dropped when the elements of color vision proved to be red, green and violet-blue, and that teaching red-green, yellow-purple and blue-orange as complements fails when tested with colored lights or Maxwell discs. He credits Professor Rood's 1879 "Modern Chromatics".

### Replication and criticism

The 1905 spacing was set by Munsell's own judgment; the Optical Society's committee (Newhall, Nickerson and Judd, JOSA 33, 385-418, 1943) renotated the system by new visual estimates, defining it in terms of the standard ICI (CIE) coordinates and Illuminant C and aiming at both psychological equispacing and precise applicability. Later NBS re-renotations (Judd and Nickerson 1967) proposed alternatives. One source says a system built on radiating polar coordinates can never be completely uniform. His physical explanations (value as the height of "ether waves") are of his day and should not be cited. Fairchild (2013) devotes a color order chapter to Munsell, and a search result says Munsell was consulted in building ColorBrewer's schemes.

### Implications for LTF

The three-quality picture is the right mental model for a theme system: separate hue, lightness and chroma tokens, and expect that equal changes in each do not look equal. The most useful rule is Munsell's: a vivid yellow and a vivid blue cannot be balanced at equal chroma or equal area, because the maximum chroma available differs by hue. For dark and light themes this means a single "saturation" number across hues will produce uneven results; set chroma limits per hue. The value scale also teaches beginners to judge whether two elements differ in lightness before judging hue.

Confirmed this session: Open Library search (OL1560367W, OL32858853W); read the full Project Gutenberg text (archive.org acolornotationam26054gut), including paragraphs 10-14, 15-19, 22-23, 40-41, 73-77 and the appendix "False Color Balance"; web search on the 1943 renotation; Fairchild (2013) table of contents.

## chevreul1872principles

Chevreul, Michel Eugene. The Principles of Harmony and Contrast of Colours, and Their Applications to the Arts. French original 1839; read in the third English edition translated by Charles Martel (London: Bell & Daldy, 1872). Evidence type: craft treatise with systematic observation, written by a chemist who ran the dye works of a royal tapestry factory.

### Core claims

Chevreul's book starts from a workplace problem. As director of dyeing at the Gobelins, he received complaints about colors, and in his preface he reports that the supposed lack of vigor in the blacks used for shading blue and violet draperies was not a defect of the dye. Black-dyed wools bought from other workshops were no better; the weakness came from the color next to the black, a phenomenon of contrast. He concluded that he had two subjects, the contrast of colors and the chemistry of dyeing, and that his research over ten years had converged on these two centers. His central claim is the law of simultaneous contrast: when the eye sees two contiguous colors at once, they appear as dissimilar as possible in optical composition and in height of tone.

### Specifics

Definitions (Part I, section 8). Place two stripes side by side, either two tones of one color or one tone of two colors, and if the stripes are not too wide the eye perceives changes in the intensity of each color and in its optical composition. Chevreul names the whole effect simultaneous contrast of colors, the change in intensity contrast of tone, and the change in optical composition contrast of color. The law is stated at section 16 and explained at section 17: each color seems to take on the complementary of its neighbor, so that the two differ as much as possible.

Worked effects. The English edition's introduction by the translator tabulates what happens to red: placed against blue it appears yellower, against yellow bluer, against green purer and brighter, against black duller, against white lighter and brighter, and against gray brighter. The translator also summarizes successive contrast (looking at a color calls up its complementary) and mixed contrast (the called-up color adds to the original and dulls it).

Chevreul works in a red, yellow, blue frame. The translator's introduction defines the complementary as the secondary made from the other two primaries: blue and orange, red and green, yellow and violet. Chevreul was a dyer working with pigments, and the text applies the law to painting, tapestry, carpets, mosaics, glazing, paper-staining, calico printing, letterpress printing, map-coloring, dress and gardening, as the title page lists.

### Replication and criticism

The existence of simultaneous contrast is a robust observation, and Fairchild (2013) lists it first among appearance phenomena. Three qualifications matter. First, Chevreul's rule that neighbors always become more dissimilar is too strong: a search found studies in which assimilation and apparent contrast occur in the same display, with narrow luminance transitions producing assimilation and wide ones producing contrast, and the spreading effect is a long-range assimilation. Second, the explanation by "added complementaries" is a descriptive scheme, not a mechanism. The usual modern account is retinal lateral inhibition, but one source reports that no general, commonly accepted quantitative model of simultaneous color contrast has yet emerged. Third, the red, yellow, blue primaries and the complementary pairs that go with them are wrong for mixing lights. Munsell's 1907 appendix attacks this scheme and says the true complement of red is blue-green. Treat Chevreul's practical observations as sound and his color wheel as obsolete.

### Implications for LTF

The preface story is the lesson: a color judged correct on its own looks wrong in context. In LTF the equivalents are an indicator color that looks different on a dark panel and on a white one, and a chart color that changes character as its neighbors change. Rules that follow: judge palettes in the actual surroundings, in both light and dark themes; separate adjacent saturated colors with a neutral edge; and show any reproduction of a cockpit display on a neutral field, since the surround changes how its colors look. Finally, do not repeat Chevreul's wheel in any lesson. If LTF teaches complements, follow Munsell (red with blue-green).

Confirmed this session: Open Library search (OL24976705W, OL20044613W); read the OCR full text of the 1872 third edition at archive.org (principlesofharm1872chev): title page, author's preface, the translator's introduction, and Part I sections 8, 16 and 17; Munsell (1907) appendix; a web search on assimilation, lateral inhibition and the absence of a general model.

## albers1963interaction

Albers, Josef. 1963. Interaction of Color. New Haven: Yale University Press. Evidence type: art-school pedagogy, a set of observational exercises with plates; no controlled experiments.

### Core claims

Albers argues that color cannot be learned from color systems, wheels or names, only from watching how colors change each other. His book grew out of a course that began at Black Mountain College and reached its fullest form at Yale, according to the Josef and Anni Albers Foundation. The foundation's account says he rejected color systems as having little practical value for artists and preferred direct observation, with exercises that isolate one aspect of color interaction at a time and move from simple to complex. Color, he held, is relative and deceptive; the foundation page quotes him as writing that color "deceives continually", and describes color in his view as passive, deceptive and unstable. He also thought color's behavior was partly predictable, so putting colors in specific contexts can give anticipatable results. The course was framed as an ongoing inquiry, not a fixed set of rules.

### Specifics

Form of the book. The foundation describes three components: Albers's introductions to the exercises, which follow the order of the course; a portfolio of reproductions, mostly made by his students; and his commentaries on the plates. The first edition was published by Yale University Press in 1963 with silkscreened plates; a small pocket edition followed in 1971 and a complete German edition in 1972, and the book has since appeared in many languages (all from the foundation page). Sources disagree on the number of plates in the 1963 edition: the foundation says about 200 reproductions, one gallery shop says 150 color plates in the limited silkscreen edition, the Met describes 80 folders and the National Gallery of Art 81 screenprints. I therefore give no count. A 50th-anniversary expanded Yale edition exists (one result puts it at about 60 color studies), and the foundation's page does not mention it.

Exercises. Search results and teaching materials built on the book describe the best-known problems: make one color look like two, make two different colors look alike, produce "vibrating" and "disappearing" boundaries, and create an illusion of transparency by arranging opaque papers. The Albers Foundation offers a hands-on tutorial titled "One Color Becomes Two" built on the book. I could not confirm the full list of studies or their instructions, and a "subtraction of color" exercise did not appear in any source I read.

### Replication and criticism

Albers offers demonstrations, not data, so there is nothing to replicate in the experimental sense; the effects he trained students to produce are the familiar simultaneous-contrast and assimilation phenomena that Chevreul and later vision science describe, and Fairchild (2013) catalogues them as appearance phenomena. Two cautions. First, his claim that systems are of little use to artists is a position of a teacher, not a scientific finding, and the Munsell and CIE traditions in this lane show that measured systems can be used by designers. Second, the plates are reproductions: printed colors on a different substrate or screen will not reproduce the effects exactly. No search result challenged his main empirical claims.

### Implications for LTF

Albers gives the best pedagogical template for teaching color to beginners: show the effect, then explain. An LTF page about how color behaves in a cockpit or in the app could present interactive pairs, where the same swatch sits on two different backgrounds and a slider changes the background. That would make context effects experiential, in line with the book's method. For designers, the book's main message is a testing rule: never approve a color in isolation; place it on every surface where it will appear, in both themes, next to its neighbors, and look at it for a long time on a real display, not a swatch chart. Finally, because the book teaches that appearance depends on neighbors, avoid quizzes that ask learners to identify a color name from a single swatch on a variable background; use labeled, side-by-side choices.

Confirmed this session: Open Library search (OL2286161W); albersfoundation.org/alberses/teaching/interaction-of-color (fetched; structure, method, quotation, editions); web searches on the plate counts (Met, NGA, Neue Galerie, foundation) and the exercises; albersfoundation.org "One Color Becomes Two" workshop page (title and description only). The book itself was not read.

## berlin1969basic

Berlin, Brent, and Paul Kay. 1969. Basic Color Terms: Their Universality and Evolution. Berkeley: University of California Press. Evidence type: cross-language survey (linguistic anthropology) with a strong evolutionary hypothesis; heavily contested since.

### Core claims

Berlin and Kay claimed that the way languages divide the color space is not arbitrary. Every language has some basic color terms, those with certain properties of use and meaning, and the sets of terms across languages follow a constrained order. In the strong form, languages add basic terms in a fixed sequence, so that if a language has a term from a later stage it has the terms of all earlier stages. They proposed a universal inventory of eleven basic color categories, from which the eleven or fewer basic terms of any language are drawn. The implication is that color categories rest partly on shared perceptual facts.

### Specifics

Evidence base. A search result summarizing the work says Berlin and Kay studied 20 languages experimentally and drew on the literature for 78 more.

The stages as listed on Wikipedia: Stage I has two terms, dark-cool and light-warm (black and white in the standard reading); Stage II adds red; Stage III adds green or yellow; Stage IV has both green and yellow; Stage V adds blue; Stage VI adds brown; Stage VII adds purple, pink, orange or gray, and has eight or more terms. English has eleven.

Later development. Kay and McDaniel (1978, Language 54(3)) argued that the constraints on color lexicons come from the structure and function of the visual system; this comes from a search summary, and Wikipedia lists the paper without detail. The World Color Survey (Kay and Richard Cook) later gathered data from many more languages.

### Replication and criticism

The original claim has been revised, not abandoned. Berlin and Kay themselves loosened the ordering in later publications, and critics have too. The World Color Survey analyses found anomalies that require modification of the original schema, though a review judged that they hardly invalidate the basic formulation in any serious way. Specific criticisms from the search results: Saunders and van Brakel argued that the methods and cultural assumptions are flawed (Wikipedia also names Saunders 2000 and Levinson 2000); some languages have terms for non-color concepts such as dryness or freshness; deciding what counts as a "basic" term may be too discretionary, and English "orange" is a case in point; and the perceived clustering on which universality rests may be spurious.

The linguistic-relativity side is documented by Roberson, Davies and Davidoff (2000, Journal of Experimental Psychology: General 129(3), 369-398, "Color categories are not universal"). They tried to replicate and extend Rosch Heider's 1972 work on the Dani using Berinmo speakers in Papua New Guinea, whose language has five basic color terms. Categorical perception effects appeared for both English and Berinmo speakers but only at the boundaries of the speakers' own linguistic categories, which the authors read as evidence that having words for categories influences recognition and judgment. Regier and Kay (2009, Trends in Cognitive Sciences 13(10), 439-446) take a middle route: the Whorf hypothesis is "half right", since naming affects color perception mainly in the right visual field (processed by the language-dominant left hemisphere), while cross-language naming reflects both universal tendencies and local convention. Gilbert and colleagues (PNAS 2006) found the lateralized effect; Drivonikou and colleagues (PNAS 2007) found left-field effects too. The debate is not settled. Treat Berlin and Kay as a hypothesis supported as a tendency, not a law.

### Implications for LTF

LTF's learners are largely English readers, many of them second-language readers, and the sim and the cockpit use color names. Three consequences. Name the colors you use in lessons with basic English terms (red, green, yellow, blue, orange, purple, pink, brown, gray, black, white) rather than "teal" or "amber"; terms outside the basic set are less reliably shared, and a learner may not know which swatch is meant. Do not assume the terms map the same way in every learner's first language, since category boundaries differ across languages (the Berinmo result above); give a label, icon or position along with the color, especially in any quiz asking which indicator is "the green one". Third, in a categorical palette, remember that the basic inventory is eleven terms and that two of them are black and white, so few hues can be named reliably.

Confirmed this session: Open Library search (OL64565W, OL43005024W); Wikipedia "Basic Color Terms" (fetched; stages and critics); web search summaries on the 20 and 78 languages, revisions and critiques; web search results for Roberson, Davies and Davidoff 2000 (Essex repository abstract) and Regier and Kay 2009 with the PNAS 2006 and 2007 follow-ups. The book itself was not read.

## fairchild2013color

Fairchild, Mark D. 2013. Color Appearance Models, 3rd edition. Wiley-IS&T Series in Imaging Science and Technology. Evidence type: authoritative textbook and survey by a leading researcher (professor of color science at the Rochester Institute of Technology, who directed its Munsell Color Science Laboratory for about twelve years, per the publisher page).

### Core claims

Colorimetry tells you when two stimuli match under one set of conditions; it does not tell you how a color will look when the surround, the adaptation state, the luminance or the viewing mode changes. Color appearance models try to predict appearance across such changes. Fairchild's book teaches the vision science, the vocabulary, the phenomena a model must account for, the main models and their tests, and the applications in imaging. The publisher description says the third edition adds and expands sections, including an updated review of color appearance and many of the most widely used models.

### Specifics

I did not read the book; the table of contents and description come from the Wiley-VCH page (472 pages, August 2013, ISBN 978-1-119-96703-3). The chapters, with the contents most relevant to this lane:

1. Human Color Vision (eye optics, retina, visual signal processing, color vision deficiencies).
2. Psychophysics (scales, threshold and matching techniques, experiment design).
3. Colorimetry (tristimulus values, color matching functions, chromaticity diagrams, CIE color spaces, color difference specification).
4. Color Appearance Terminology (hue, brightness and lightness, colorfulness and chroma, saturation, related and unrelated color).
5. Color Order Systems (requirements, Munsell, NCS, color naming).
6. Color Appearance Phenomena: simultaneous contrast; the Bezold-Brucke, Abney, Helmholtz-Kohlrausch, Hunt, Stevens and Helson-Judd effects; the Bartleson-Breneman equations; discounting the illuminant; color constancy.
7. Viewing Conditions. 8. Chromatic Adaptation, and 9. Chromatic Adaptation Models (von Kries, Retinex, CAT02).
10 to 16. Models: CIELAB ("why not just CIELAB"), Nayatani, Hunt, RLAB, ATD, LLAB, IPT, CIECAM97s and CIECAM02 (with CAM02-UCS).
17. Testing Color Appearance Models (corresponding-colors data, magnitude estimation, CIE activities).
18 to 21. Color rendering and color difference, device-independent color imaging (gamut mapping, ICC), image appearance modeling (S-CIELAB, iCAM) and a new chapter on high-dynamic-range color space.

Definitions that matter for a designer, from searches on the effects named in chapter 6: the Hunt effect is an increase in the colorfulness of a color with increasing luminance (first described by R. W. G. Hunt in 1952); the Helmholtz-Kohlrausch effect is that a saturated stimulus looks brighter than a less saturated or achromatic one; the Bezold-Brucke effect is a change in perceived hue with intensity, with most colors looking less red or green and more blue or yellow as illumination increases. The search results gave no definition of the Stevens effect, so I do not describe it.

### Replication and criticism

The evidence is varied: classic psychophysics for the phenomena, corresponding-colors experiments and magnitude estimation for model tests, and committee work in the CIE. No single model is accepted as complete; that is why the book devotes a chapter to testing and why it asks "why not use just CIECAM02". Problems with CIECAM02 are documented outside the book: search results describe a "yellow-blue" problem and a "purple" problem, both from negative values in the adaptation space under extreme blue adaptation, which the revised CAM16 (Li and colleagues, Color Research and Application, 2017) was designed to fix; follow-up notes still report edge cases. Ottosson (2020) calls CAM16-UCS numerically poorly behaved and not scale invariant, and Lilley's W3C slides call it numerically unstable and non-invertible; both write as implementers, not as testers of perceptual accuracy. A 2002 Color and Imaging Conference paper, "The performance of CIECAM02" (Li, Luo, Hunt, Moroney and colleagues), is one evaluation.

### Implications for LTF

Two practical reasons to know this book. First, the phenomena list is a checklist for theme design. Simultaneous contrast and the Hunt and Bezold-Brucke effects mean the same CSS color will look different on a bright and a dim screen, and in a dark room next to a lit sim monitor. LTF cannot control that, so it should avoid depending on subtle hue distinctions and should test palettes at both bright and dim display settings. Second, appearance-model machinery is too heavy for runtime use in a web app; CSS gives oklab and oklch (see the Oklab entry) instead. Use this book to justify why viewing conditions matter, then use simpler tools. The vocabulary of chapter 4 (lightness, chroma, colorfulness, saturation) gives precise terms where UI copy would say "bright" or "vivid".

Confirmed this session: Wiley-VCH product page (fetched; edition, table of contents, description); Open Library search (OL2691720W, OL2691721W for earlier editions); web searches on the Hunt, Helmholtz-Kohlrausch and Bezold-Brucke definitions, on CIECAM02 and CAM16 problems, and on Crossref for "The performance of CIECAM02" (doi 10.2352/cic.2002.10.1.art00007). The book itself was not read.
