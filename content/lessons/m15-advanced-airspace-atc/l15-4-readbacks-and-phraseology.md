---
slug: l15-4-readbacks-and-phraseology
code: L15.4
module: m15-advanced-airspace-atc
order: 4
priority: P0
title: Readbacks and phraseology
summary: 'Which parts of an instruction you must read back, how to build a request the controller can act on, and what to say when you missed the call.'
estimatedMinutes: 20
prerequisites: [l7-1-radio-basics-and-the-phonetic-alphabet]
objectives:
  - Read back every required element of an ATC instruction, ending with your call sign.
  - Use standard words and structure for requests and replies.
  - Recover from a missed or misunderstood call with "say again", "verify" and "unable".
challenges: []
resources: [aim-4-2, pilot-controller-glossary]
published: false
lastVerifiedAt: null
simVersion: null
---

## The readback is a safety check, not good manners

In [[l7-3-towered-airports-and-sim-atc]] you learned to read back runway assignments and hold-short instructions. Here is why it matters so much. A controller says "hold short of runway two five left". You hear "two five right", which is the runway you are heading for anyway, and taxi across 25L in front of a landing Skyhawk. If you had read back "hold short two five right", the controller would have caught it: "Negative, hold short of two five **left**."

The readback is the only moment in the exchange where a mistake can be found before it becomes a runway incursion or an altitude bust. That is why some elements are required, and why the controller's "readback correct" is not a formality. This lesson makes the list exact, then gives you the words for everything else.

## What must be read back

| Element                            | Example instruction                          | Your readback                                                       |
| ---------------------------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| **Hold short**                     | "Hold short of runway two five left"         | "Hold short of runway two five left, Skyhawk One Two Three"         |
| **Runway assignment**              | "Runway two five right, taxi via Alfa"       | "Runway two five right, via Alfa, Skyhawk One Two Three"            |
| **Takeoff and landing clearances** | "Runway two five right, cleared for takeoff" | "Runway two five right, cleared for takeoff, Skyhawk One Two Three" |
| **Altitude**                       | "Maintain three thousand five hundred"       | "Three thousand five hundred, Skyhawk One Two Three"                |
| **Heading**                        | "Fly heading zero niner zero"                | "Heading zero niner zero, Skyhawk One Two Three"                    |
| **Frequency**                      | "Contact tower one one eight point one"      | "One one eight point one, Skyhawk One Two Three"                    |
| **Squawk**                         | "Squawk four six one two"                    | "Squawk four six one two, Skyhawk One Two Three"                    |
| **Clearance**                      | "Cleared into the Class Bravo airspace"      | "Cleared into the Bravo, Skyhawk One Two Three"                     |
| **Altimeter setting**              | "Livermore altimeter three zero zero two"    | "Three zero zero two, Skyhawk One Two Three"                        |
| **Line up and wait**               | "Runway two five right, line up and wait"    | "Runway two five right, line up and wait, Skyhawk One Two Three"    |

Three rules sit under the table:

- **Numbers, always.** Every number the controller gives you comes back in your reply, and the runway comes back with every runway instruction.
- **Call sign, always last.** The readback belongs to someone; the call sign says who.
- **Say what you heard, not what you expected.** If the readback is wrong, the controller fixes it. If you silently "correct" it, nobody can.

:::callout{type="verify"}
Author note: check the required readback items against AIM 4-4-7(b) (altitude assignments, altitude restrictions and vectors), AIM 4-3-18 (runway assignments, hold-short instructions and taxi instructions) and AIM 4-3-10 (line up and wait). The altimeter setting is good practice rather than required; label it as such if the AIM does not list it.
:::

:::quiz{id="l15-4-q1" type="multi"}
Which of these must be read back? Pick all that apply.

- [x] "Hold short of runway two five left"
- [x] "Squawk four six one two"
- [ ] "Traffic, two o'clock, three miles"
- [x] "Fly heading zero niner zero"
- [ ] "Wind two five zero at eight"

---

Hold-short instructions, squawk codes and headings are all required readbacks. A traffic call is answered with "looking" or "in sight", and the wind needs no reply at all.
:::

## The structure of a good call

The shape you learned in Course 1 has not changed: **who you are calling, who you are, where you are, what you want**. What changes with experience is how little you say. A good call carries exactly what the controller needs to act, in the order the controller writes it down.

Spell anything unusual with the phonetic alphabet, say each digit of a number separately, and keep "tree", "fife" and "niner". The trainer below is a quick refresher before the drill.

::widget{name="phonetic-alphabet" mode="explore"}

Altitudes are the one place where digits are grouped: "three thousand five hundred" and "one zero thousand five hundred", never "thirty-five hundred" or "ten five". Frequencies are digit by digit with "point": "one two seven point one five". Headings are three digits: "heading zero niner zero".

:::quiz{id="l15-4-q2" type="single"}
How do you say an altitude of 10,500 ft on the radio?

- [ ] "Ten thousand five hundred"
- [ ] "Ten five"
- [x] "One zero thousand five hundred"
- [ ] "One zero five zero zero"

---

Thousands are spoken digit by digit, then "thousand", then the hundreds: **"one zero thousand five hundred"**. "Ten" and "ten five" are easily mistaken for other numbers through static.
:::

## The standard words

Most of the radio is numbers. The rest is a small set of words that each mean one precise thing:

| Word                 | Meaning                                    | Not the same as                                       |
| -------------------- | ------------------------------------------ | ----------------------------------------------------- |
| **Roger**            | I received all of your last transmission   | "Yes": roger never answers a question                 |
| **Wilco**            | I received it and will comply              | Roger: wilco promises action                          |
| **Affirm**           | Yes                                        | "Affirmative" is also used; never "yeah"              |
| **Negative**         | No                                         |                                                       |
| **Unable**           | I cannot comply with that instruction      | Silence: always say why or what you can do            |
| **Stand by**         | Wait, I will call you back                 | An answer: it is a pause, not a yes                   |
| **Request**          | I would like…                              | "Can I…": "request" starts the controller's checklist |
| **Say again**        | Repeat your last transmission              | "What?"                                               |
| **Verify**           | Confirm what I think I heard               | Say again: verify checks a specific item              |
| **Correction**       | I made an error; the right version follows |                                                       |
| **Readback correct** | The controller agrees with your readback   |                                                       |

Use the words, and only the words. "Roger" to a question ("say altitude") is a non-answer. "Wilco" alone in reply to a hold-short instruction is a violation: the required elements must be spoken back.

:::quiz{id="l15-4-q3" type="single"}
The controller says "Skyhawk One Two Three, say altitude." Which reply is correct?

- [ ] "Roger, Skyhawk One Two Three"
- [ ] "Wilco"
- [x] "Three thousand five hundred, Skyhawk One Two Three"
- [ ] "Affirm"

---

A question needs an answer, not an acknowledgment. **"Three thousand five hundred, Skyhawk One Two Three"** gives the controller the number asked for. "Roger" only says you heard.
:::

## Recovering from a missed call

Everyone misses a call. The pilots who get into trouble are the ones who guess. Three tools:

| Situation                                                 | You say                                                                                           |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| You missed the whole thing                                | "Skyhawk One Two Three, say again."                                                               |
| You caught the start but not the end                      | "Skyhawk One Two Three, say again all after 'runway two five right'."                             |
| You are not sure about one item                           | "Skyhawk One Two Three, verify heading zero niner zero."                                          |
| You heard it and cannot do it                             | "Unable three thousand for clouds, Skyhawk One Two Three can maintain two thousand five hundred." |
| You got a readback wrong and the controller corrected you | "Correction, hold short of runway two five **left**, Skyhawk One Two Three."                      |
| The frequency is too busy to get a word in                | Wait for "readback correct" or a pause, then transmit                                             |

"Say again" costs five seconds. A wrong guess at a hold-short instruction can cost far more. Controllers repeat things all day; they will not think less of you.

:::callout{type="tip"}
Write it down. Keep a pen on the kneeboard and jot the numbers as they arrive: "25R A", "090", "3500", "4612". The readback then comes off the paper, and the paper is still there two minutes later when you wonder what the squawk was.
:::

## Readback practice

Widget W32 (Radio Readback Trainer) is embedded here once Phase 20 ships it. It reads an instruction out loud, you type or speak the readback, and it highlights each required element you included or missed. Until then, cover the right-hand column of the table below and read each instruction back out loud:

| Instruction                                                                            | Required elements in the readback                          |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| "Runway two five right, taxi via Alfa, hold short of runway two five left"             | Runway 25R, via Alfa, hold short 25L, call sign            |
| "Runway two five right, cleared for takeoff, right turn out approved"                  | Runway 25R, cleared for takeoff, right turn out, call sign |
| "Squawk four six one two, maintain VFR at or below three thousand five hundred"        | Squawk 4612, at or below 3,500, call sign                  |
| "Fly heading zero niner zero, contact NorCal Approach on one two seven point one five" | Heading 090, 127.15, call sign                             |
| "Cleared into the Class Bravo airspace, maintain three thousand five hundred"          | Cleared into the Bravo, 3,500, call sign                   |

:::callout{type="verify"}
Author note: W32 (`::widget{name="radio-readback"}`, modes VFR ground, VFR airborne, Class B/C) replaces the table above when it ships. The instructions here should match the first items in `content/radio-drills.yaml` so the drill and the lesson agree.
:::

## Common sim-ATC differences

MSFS 2024's ATC does the readback for you when you pick a menu item, which is exactly the skill this lesson wants you to own. A few other differences to expect:

| Real ATC                                                    | MSFS 2024 ATC                                                           |
| ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| Shortens your call sign after the first exchange            | Often uses the full N-number every time                                 |
| "Say again", "verify" and "unable" are everyday words       | Not in the menu; nothing to pick                                        |
| Hold-short instructions are routine on crossing taxi routes | Taxi clearances may skip hold-short instructions                        |
| Altitudes spoken as "three thousand five hundred"           | Sometimes "three thousand five hundred feet", or a different word order |
| Controllers correct a wrong readback                        | The menu readback is always "correct"                                   |

None of this is a reason to skip the sim's ATC. It is a reason to say the call out loud, with every required element, before you click the menu.

:::callout{type="sim"}
In self-voiced mode you speak both sides from the challenge script. On VATSIM, the controller is a person and the full list above applies, including "readback correct" and the occasional "negative".
:::

:::callout{type="verify"}
Author note: confirm each row of the sim-ATC table against MSFS 2024 at the current sim version, including whether the menu offers "say again" and how it voices altitudes.
:::

## Practice and next steps

Three things to carry forward:

1. Hold short, runway, altitude, heading, frequency, squawk and clearance always come back, with your call sign last.
2. Roger means heard, wilco means will do, and neither answers a question.
3. "Say again" is free. Guessing is not.

**Practice.** This lesson feeds the `radio-phraseology` flashcard deck: the required readback items and the standard words.

**Fly it.** Challenge C15.3 "Readback drill" gives you 10 instructions in the trainer and scores every required element. No sim needed.

**Next.** [[l15-5-flying-on-vatsim]] puts a real person on the other end of the radio.
