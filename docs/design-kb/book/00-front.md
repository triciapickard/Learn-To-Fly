```{=typst}
#ltf-title-page([A cited reference for every design decision on Learn to Fly: what the research shows, what the best practitioners do, and what it means for this product.], [First edition, November 2026])
```

## Contents {.unnumbered .notoc}

::: {#toc}
:::

## How to use this book {.unnumbered}

This book is the source of truth for design decisions on Learn to Fly, the web application that teaches a complete beginner to fly the Cessna 172 in Microsoft Flight Simulator 2024. It exists because the product, as built, looks like many other products. The remedy is not taste applied by feel. It is a body of evidence and craft knowledge, written down, graded, and applied to the pages, components and tokens that actually exist.

### What is in it

Twenty-five Parts each take one field, from classical typography to accessibility, and do three things: report what the research and the craft literature say, turn that into numbered rules, and apply the rules to the product. Every chapter ends with a section on what the material means for Learn to Fly, and every Part ends with a decision list and a review checklist. Part XXVI audits the current design against the rules of the first twenty-five Parts, rules on the points where Parts pull in different directions, and sets out how the product acquires an identity of its own.

### Rules and grades

Guidance appears as numbered rules. Each has an identifier made of a three-letter prefix for its Part and a number, such as `TYP-012`, and each carries an evidence grade.

| Grade | Meaning | How to treat it |
|:--|:----------|:------------|
| A | Replicated evidence: several independent studies or a meta-analysis | Follow it unless you have a specific, stated reason |
| B | Some evidence: one or a few studies, or indirect evidence | Follow it by default and watch for conflict with other rules |
| C | Expert consensus: craft authority or a standard, without direct experiment | A sound default that a good argument can override |
| D | Contested: the evidence conflicts or replications have failed | Know the dispute before relying on it |

A grade describes the evidence behind a rule, not its importance. A requirement of an accessibility standard may be graded C because no experiment stands behind the exact threshold, and still be mandatory for the product. The Index of Rules at the back lists every rule with its grade and page.

### Claims that do not hold up

Design folklore is full of confident claims that fail when checked. Where a popular claim is wrong or weaker than its reputation, the book says so in a marked block and cites the work that shows it.

### How the sources were handled

The bibliography holds 555 works, from the eighteenth century to 2026. Every one was confirmed to exist during the research for this book, against Crossref, Open Library or a web search, and the research notes record what was actually read for each: full text, an abstract, a publisher's record, or a reliable secondary account. Figures and quotations in the text come from those notes. Where a number could not be confirmed, the finding is stated in words or left out. Each Part ends with the list of sources it cites, and the full bibliography follows Part XXVI.

A few works in the bibliography predate 1776, the starting point set for the survey (Newton's *Opticks* and Hume's essay on taste among them). They are kept because later sources in the same Parts depend on them.

### How the product is named

Pages, components and tokens are named as they are in the code: `LessonPage`, `Callout`, `--color-accent`. Several Parts refer to a color or spacing token by its short name, without the leading `--color-` or `--` (`accent`, `ink-3`, `container-measure`), as the comments in `src/styles/tokens.css` do. Both forms mean the same token. Statements about the product describe the code as it stood in November 2026.

### What the book does not do

It states no aircraft number, speed, limit or flight procedure as fact. Those belong to the product's content pipeline and its verification process. Where a design example needs one, the text refers to it generically or by content token.

It does not replace testing with learners. Many rules rest on studies of people and tasks unlike a beginner learning to fly beside a simulator. The grades, and the limits stated inside each rule, say how far the evidence reaches. Where the product can find out cheaply by watching a handful of learners use a page, that observation outranks an inference from a distant experiment. A handful is a practical round size, not a coverage figure: Parts I and IX explain why no fixed number of participants finds a fixed share of problems.

### Using it in review

For a change to a page or component, open the decision list and checklist at the end of each relevant Part and run the questions against the change. Cite rule identifiers in pull requests. When a decision departs from a rule, record why. When new evidence overturns a rule, change the rule here first.
