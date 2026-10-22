---
name: unslop
description: Cut AI tells from any writing, tuned for Learn to Fly lessons, challenges and site pages.
disable-model-invocation: true
---

# Unslop

Edit text to remove AI patterns. Scan for the patterns below, then rewrite. Preserve meaning and match the intended tone.

## Learn to Fly (LTF)

When the text is Learn to Fly content, these house rules come first. They come from v1.md Section 18 and v2.md Section 19, which win over any rule below.

- **Where the prose lives.** Lesson Markdown in `content/lessons/`, challenge YAML in `content/challenges/`, the other YAML in `content/` (modules, glossary, checklists, airports, resources), and user-visible strings in `src/pages/` and `src/features/` (page copy, FAQ, landing cards, callout titles, aria labels). Code comments are out of scope.
- **Voice.** A friendly instructor talking to "you". Short sentences, one idea per sentence, US English, reading level grade 8 to 10. Encouragement is part of the voice ("a go-around is a good decision") as long as it is said once and plainly.
- **Never change.** Aviation facts, numbers, units and limits; tokens such as `{{vspeed.vx}}`; internal links `[[slug]]`; directives (`:::callout{type="..."}`, `:::quiz{...}`) and their attributes; frontmatter keys, slugs and ids; quiz option text and which option is marked `[x]`; radio calls and ATC phraseology inside quotes ("Skyhawk One Two Three, cleared for takeoff"); checklist item wording; legal and safety wording. Sim checks inside `verify` callouts are author notes, so tidy them lightly at most.
- **House formats to keep.** En dashes in numeric ranges ("60–70 KIAS"), thousands separators ("3,500 ft"), three-digit headings ("heading 090"), MSL or AGL on every altitude, and bold on a term where the lesson defines it.
- **Fix in place.** Keep each edit local and don't restructure a lesson. Its `##` headings become the lesson's step navigation, and published lessons were checked line by line in the sim.

## Patterns to detect and fix

Rule numbers are stable ids that other skills cite. A removed rule leaves a gap.

### Content

3. **Superficial -ing phrases.** "highlighting...", "ensuring...", "reflecting...", "showcasing...", "fostering...". Delete or expand with real sources.
4. **Vague attributions.** "Experts believe", "Industry reports suggest", "Some critics argue". Name the source or delete.
5. **"X, not Y" taglines.** A sentence that ends by correcting a contrast nobody raised: "It is a first look, not a license.", "a floor, not a target", "a hint, not a guarantee", "is a win, not a failure", "the sim is the warm-up, not the real thing", "a plan, not a promise". LTF uses dozens. Keep one when the reader really would confuse the two and the contrast is the lesson ("the needle you follow is the GPS leg, not the localizer"). Otherwise state the positive fact and give the reason: "Those reserves are the legal minimum, so Learn to Fly adds a personal buffer." Same for "is not cheating; it is how you learn". Rule 9 covers the "not just X, but Y" form.
6. **Count announcements.** "Two rules protect you.", "Three things happen:", "Holds have three jobs:", "Two habits keep you honest under the shelves:", "Three things to carry forward:". Announcing the count before the list adds a sentence and pushes the list toward three (rule 10). Drop the count and lead with the content, or let the list start the section. In the closing summaries, write "To carry forward:" so the list can have as many items as it needs. Keep a count only when the number is itself the fact ("Every challenge has three steps: Brief, Fly, Debrief", where the UI shows three tabs).
7. **Scene-setting openers.** "Picture a grass strip after a week of rain." "Every technique in this lesson comes from one idea:" A lesson or section can open on a concrete situation, but in one sentence that leads straight to what the learner does. Cut the "one idea" and "comes down to" framing and state the idea.
8. **Honesty talk.** "an honest, scored debrief", "Be honest with yourself", "Debrief honestly", "The only person you can cheat is yourself", "keeps you honest", "an honest 'I don't know'", "the airplane responds honestly". LTF repeats this across the site and lessons. Say it once where scoring is explained (self-assessed scores only help if you mark what happened), then describe the mechanism elsewhere: "score each row against what you flew".

### Language

7. **AI vocabulary.** Additionally, crucial, delve, enduring, enhance, fostering, garner, interplay, intricate, landscape (abstract), pivotal, showcase, tapestry (abstract), testament, underscore, vibrant. Replace with plain words. LTF adds: amazing, wonderful, journey (for the course or the aircraft ladder), mastery, building block, seamless, like a pro, essential (when it means "important").
8. **Fancy ways to say "is".** "serves as", "stands as", "boasts", "features". Say "is" or "has".
9. **"Not just X, but Y."** State the point directly instead. LTF form: "You will not just press buttons that happen to work", "tutorials that actually teach you how to fly the aircraft, not just which buttons to press". Say what the lesson does: "Each lesson explains why the airplane behaves the way it does."
10. **Rule of three.** Don't force ideas into groups of three. Use the natural number.
11. **Synonym cycling.** Protagonist, main character, central figure, hero all in one paragraph. Pick one, repeat it.
12. **False ranges.** "from X to Y" where X and Y aren't on a meaningful scale. List topics directly.

### Style

13. **Em dash overuse.** Avoid em dashes entirely. Use periods or commas only (no parentheses, no en dashes, no hyphen-as-dash substitutes). If a thought needs separation, end the sentence or use a comma. LTF exceptions: an en dash in a numeric range ("60–70 KIAS") is house style, and a lone "—" marking an empty table cell is fine. A label list such as "**C** — Clearance limit" becomes "**C**: Clearance limit".
14. **Colon overuse.** Colons are fine before a list or example, not as mid-sentence connectors. "If you're coming from traditional automation: instead of registering event handlers, you describe conditions" adds nothing with the colon. Rewrite to let the point stand on its own without comparison framing. "Describing when the scheduler should fire works best as plain English." Same meaning, no crutch punctuation. LTF form: the label-colon reveal, "The rule of thumb: lean for takeoff...", "The fix is a habit: brief the taxi...", "The habit: compute...", "The honest plan is: ...". Write the sentence: "Lean for takeoff whenever the density altitude is above about 3,000 ft."
15. **Boldface overuse.** Don't bold every proper noun or acronym. LTF lessons average over 20 bold spans each. Bold a term where it is defined, a memory item, or the one action a step turns on. Unbold emphasis words (**not**, **and**, **never**, **why**) and phrases bolded for drama; the sentence should carry the stress.
16. **Inline-header lists.** The tell is a bold label and colon that restates the line: "**Performance:** Performance improved...". Convert those to prose. A bold lead-in that ends in a period, names the item, and is followed by genuinely new detail ("**Schema in TypeScript.** Tables live in one file.") is fine, not a tell.
17. **Title case headings.** Use sentence case.
18. **Decorative emojis.** Remove from headings and bullets.
19. **Curly quotes.** Use straight quotes.
20. **Semicolon chains.** LTF lessons hold over 850 semicolons, most joining two full sentences: "Taxi slowly with as little braking as possible; the surface does the braking for you." Use a period. Keep a semicolon only inside a dense list where commas are already taken.

### Communication artifacts

20. **Chatbot phrases.** "I hope this helps!", "Let me know if...", "Of course!", "Certainly!", "Found the smoking gun!" Remove.
21. **Sycophantic tone.** "Great question! You're absolutely right!" Respond directly.

### Filler

23. **Filler phrases.** "In order to" becomes "To". "Due to the fact that" becomes "Because". Delete "It is important to note that".
24. **Excessive hedging.** "could potentially possibly be argued that it might" becomes "may".
25. **Generic conclusions.** "The future looks bright." State specific plans or facts. LTF form: closing lines like "That is the plan, anyway" or "then [[next-lesson]] covers the one maneuver you hope never to need". The "Next." line says plainly what the next lesson teaches.

### Jargon

26. **Abstract metaphor nouns.** Substrate (base), wedge, wedge in (add), vector (way, method), locus, vantage, nexus, primitive as a noun, harness as a metaphor, surface as in "API surface", bedrock, scaffolding as a metaphor, modality, paradigm, gold-plating (more than the job needs), ratchet as a metaphor (the mechanism's real name, or a limit that only tightens), evacuate for moving code (move out), endgame (the last phase), north star, flywheel. These read as technical but usually have a plainer concrete word. Pick the concrete word.

### Plain speech

27. **Say what it does, not how it feels.** "the database stays close at hand", "SQL you can read", "types that follow your schema" name a feeling. The fix names the mechanism or a number: "`.toSQL()` returns the exact string sent to the database", "a column rename fails the build". Ask what the sentence tells the reader to do or know, then write that. If you can't restate it as a concrete instruction, fact, or number, cut it. One more check: if the sentence could appear unchanged in another project's docs, it says nothing about this one. Cut it.
28. **Shorten or split dense sentences.** If the reader has to backtrack to parse a sentence, break it in two or drop clauses. One idea per sentence.
29. **Active voice.** Prefer it. Catch "is/are/was/were + past participle" and name the actor: "queries are validated" becomes "the compiler validates queries", "the file is parsed by the loader" becomes "the loader parses the file". Passive is fine only when the actor is unknown or genuinely doesn't matter.
30. **Cut adverbs, or use a stronger verb.** "runs quickly" becomes "is fast" or the number, and "significantly improves" becomes the measured delta. An adverb propping up a weak verb means the verb is wrong.
31. **Prefer the plain word.** "utilize" and "leverage" become "use", "facilitate" becomes "help", "numerous" becomes "many", "in the event that" becomes "if". The fancier synonym is rarely clearer.
32. **Mannered prose.** Metaphor or flourish where a literal phrase exists: aphorisms ("wire it or delete it"), rhetorical fragments for effect, personified code ("the plan holds it"), figurative verbs ("rides along", "stands on"), stock framing phrases. "A dial worth turning" becomes "a parameter worth varying". Say what you mean. Rule 26 covers the metaphor nouns. LTF form: personified airplanes, instruments and bodies ("the airplane will cheerfully fly whatever hold you loaded", "when the instruments lie", "Why your inner ear lies", "the runway that grabs your wheels", "the flashlight earns its place") and cute headings. Name what happens: "the autopilot flies whatever hold you loaded, right or wrong", "Why your inner ear misleads you". A heading names the section's topic.
33. **Over-compression.** Dropped articles, verbless fragments, symbol-speak, and abbreviations that make the reader decode instead of read. "Parser rejects bad date → exit 2, no write" becomes "The parser rejects a bad date, exits with code 2, and writes nothing." Write whole sentences with their articles and verbs, and spell out arrows and abbreviations.
34. **"That is why" pointers.** "That is why step 5 matters:", "which is exactly why the sim is such a good place to learn", "Here is the physics behind it". These point at the reasoning instead of giving it. Put the reason in the sentence that needs it ("Climb out of ground effect at that speed and the drag comes back, so the airplane cannot accelerate."), and cut "exactly", "really" and "actually" used for stress (rule 30).
