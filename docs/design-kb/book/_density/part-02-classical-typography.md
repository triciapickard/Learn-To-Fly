# Density test: Part II, Classical Typography

Test section: the measure (line length) of lesson prose. Sources in the notes: Morison, Gill,
Bringhurst, Tschichold (via a digest), Hochuli, Unger, with Tinker and Dyson from lane 02 for the
experimental check. Product facts: `LessonPage` article capped at 800 px, `MarkdownContent` at
16 px, `Prose` at `max-w-measure` (68ch) and `body-lg`.

## Draft 1: terse (about 150 words)

The craft tradition agrees on a moderate line. Morison puts the convenient line at ten to twelve
words [@morison1936first]; Gill gives the same figure and warns that long lines cause "doubling"
while short ones cut phrases apart [@gill1936essay]. Bringhurst gives 45 to 75 characters, with 66
as ideal, for a single serif column [@bringhurst2012elements]. These are conventions, not
measurements [@unger2018theory]. Screen studies found faster reading on longer lines but a
preference, and in one study better comprehension, for about 55 characters [@dyson2004physical].
Set lesson text at a moderate measure counted in characters.

*In LTF:* lessons run at 16 px in an article capped at 800 px, much wider than `Prose`. Narrow the
lesson column.

## Draft 2: medium (about 400 words)

Two printers writing within a few years of each other gave the same figure. Morison: "The average
line of words which the reader's eye can conveniently seize is between ten and twelve"
[@morison1936first]. Gill reports that "the consensus of opinion favours an average of 10-12 words
per line" and that "the best length for reading is not more than 12 words" [@gill1936essay]. Neither
cites a source, so the agreement looks like shared workshop lore rather than two measurements.
Gill names the failure at each end. A very wide measure risks "doubling," reading the same line
twice, unless lines are leaded; a very narrow one cuts phrases up, because "Practised readers do not
read letter by letter or even word by word, but phrase by phrase."

Bringhurst restates the target in characters: about 45 to 75 for a single column of serif text at
text size, with 66 regarded as ideal, and about 40 to 50 for multi-column work
[@bringhurst2012elements]. Hochuli adds that English lines can be shorter than German ones for an
even texture, because English words are shorter [@hochuli2008detail]. Unger treats all such
figures as open questions [@unger2018theory].

The experimental record is weaker than the folklore. Tinker found 10-point type equally legible
over a wide band of line widths and a 43-pica line raising regressions by 56.7 per cent against a
19-pica line [@tinker1963legibility]. Dyson's screen review found faster reading on longer lines,
while readers rated 55 characters easiest, and one study found better comprehension at 55 than at
100 [@dyson2004physical].

Rule: keep lesson prose between about 45 and 75 characters, counted in characters.

*In LTF:* the lesson article is 800 px at 16 px, which by an estimate made for this book is about
93 to 112 characters. `Prose` is 68ch, which is not 68 characters in Instrument Sans. Narrow the
lesson column and redefine the token.

## Draft 3: full (about 800 words)

### Where the numbers come from

Two printers writing within a few years of each other gave the same figure. Morison, in the essay he
called a rationale of book typography: "The average line of words which the reader's eye can
conveniently seize is between ten and twelve," and his summary formula asks for paragraphs of "ten
to twelve consistently spaced words" [@morison1936first]. Gill: "the consensus of opinion favours an
average of 10-12 words per line," at fifteen or more words a compositor can have both equal length
and even spacing, but "the best length for reading is not more than 12 words" [@gill1936essay].
Neither cites anything. The agreement is best read as the workshop consensus of the period, not as
two independent measurements. The later Tschichold, in a secondary digest of his essays, gives eight
to twelve words [@tschichold1991form].

Gill names the failure at each end, which is more useful than the number. A very wide measure
involves too much movement of the eye and head and risks "doubling" unless the lines are separated
by leads. A very narrow measure, narrow in relation to the type, cuts phrases and words apart,
because "Practised readers do not read letter by letter or even word by word, but phrase by phrase"
[@gill1936essay]. Morison ties the two variables together: letter size must relate to line length,
and leads prevent doubling when small type is unavoidable [@morison1936first].

Bringhurst restates the target in characters: about 45 to 75 characters for a single-column page
set in a serif text face at text size, with 66 (counting letters and spaces) widely regarded as
ideal, and about 40 to 50 for multi-column work [@bringhurst2012elements]. Words and characters
agree roughly: at about five to six characters per word and space, ten to twelve words is 55 to 70
characters. Hochuli adds a language effect: English words are shorter than German ones, so English
lines can be shorter for an even, neutral texture [@hochuli2008detail].

### What the experiments add

Tinker's print studies, with samples near 2,000 readers per type size, found 10-point type set solid
equally legible from 17 to 27 picas, and with 2-point leading from 14 to 31 picas. A 43-pica line
raised regressions by 56.7 per cent against a 19-pica line, which he ascribes to trouble finding the
next line start [@tinker1963legibility]. On screens, Dyson's review found that most studies report
faster reading with longer lines, that readers rated 55 characters easiest to read though it was not
fastest, and that one study found better comprehension at 55 than at 100 characters per line. She
argues characters per line, not physical width, is the variable that matters, and that no upper limit
has been identified [@dyson2004physical].

So the craft figure is a comfort-and-comprehension judgment with partial experimental support, not
a speed law. Unger's refusal to give formulas is the right posture [@unger2018theory].

### Rule

Keep lesson prose between about 45 and 75 characters per line, counted in characters, grade B.

### Application

`LessonPage` sets lesson Markdown at 16 px inside an `article` capped at `max-w-[800px]`. An
estimate made for this book from the shipped Instrument Sans file (average advance about 0.447 em
over the lesson corpus, kerning ignored) puts that column at about 93 characters at `xl` and up to
about 112 between `md` and `lg`, or close to 20 words, nearly double Gill's figure. `Prose` uses
`max-w-measure`, defined as 68ch, but `ch` is the width of the zero, and Instrument Sans's zero is
about 0.666 em, so 68ch holds about 100 characters of real text. A target of 66 characters is about
44ch in this face. Move lessons onto the measure token and redefine the token in characters of real
text.

## Verdict

The terse draft keeps the headline numbers but drops Gill's two failure modes, the Tinker and Dyson
nuance (speed against preference against comprehension), Hochuli's language point, and the `ch`
trap that is the most important application. It produces a rule a reviewer cannot apply with
judgment. The medium draft keeps most findings but compresses the reasoning so far that the reader
cannot see why the figure is a comfort judgment, and the application loses its arithmetic. The full
draft keeps every finding, number, caveat and the worked product decision, and contains no
restatement: each paragraph adds a source or a step.

Chosen density: full (about 800 words for a major section), with minor topics treated at about half
that. Reach the floor by adding sources, worked product decisions and rules, not by restating.
