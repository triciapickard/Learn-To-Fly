---
slug: l7-2-non-towered-airports-ctaf
code: L7.2
module: m7-radio-airport-operations
order: 2
priority: P0
title: Non-towered airports (CTAF)
summary: At airports without a tower, pilots talk to each other — the standard position reports and how to join and leave the pattern safely.
estimatedMinutes: 20
prerequisites: [l7-1-radio-basics-and-the-phonetic-alphabet, l4-2-the-traffic-pattern]
objectives:
  - Make the standard CTAF position reports in the pattern.
  - Enter and leave a non-towered pattern safely.
challenges: [c7-1-ctaf-pattern-at-tracy]
resources: [aim-4-1, aopa-asi-radio]
published: false
lastVerifiedAt: null
simVersion: null
---

## No tower, no controller

Most airports have no control tower. Pilots **self-announce** on a shared frequency, the **CTAF** (Common Traffic Advisory Frequency), so everyone knows where everyone else is.

At some airports, the CTAF is also a **UNICOM**: a ground station, often the fuel desk, that can answer questions but doesn't control traffic.

## Finding the frequency

- On the **sectional**, in the airport's data block, next to the Ⓒ symbol.
- In the **Chart Supplement** entry for the airport.

:::callout{type="verify"}
Author note: check the Tracy CTAF on the current sectional and add it to `airports.yaml`.
:::

:::quiz{id="l7-2-q1" type="single"}
Where do you find an airport's CTAF?

- [ ] Only by asking ATC
- [x] In the sectional data block (next to Ⓒ) or the Chart Supplement
- [ ] On the airport's windsock
- [ ] It's always 122.8

---

In the **sectional data block**, next to the Ⓒ, or in the **Chart Supplement**. Many airports share common frequencies, but always check.
:::

## The format

Every CTAF call **starts and ends with the airport's name**. Pilots listening to several airports on the same frequency catch the name at either end.

> "**Tracy traffic**, Skyhawk One Two Three, entering left downwind, runway two six, **Tracy**."

:::quiz{id="l7-2-q2" type="single"}
How do you start and end a CTAF call?

- [ ] With your call sign
- [x] With the airport's name, such as "Tracy traffic … Tracy"
- [ ] With "over"
- [ ] With the frequency

---

**With the airport's name**, so everyone on the frequency knows which airport you mean.
:::

## The standard calls

Arriving:

1. **About 10 nm out**: "Tracy traffic, Skyhawk One Two Three, one zero miles west, inbound for landing, Tracy."
2. **Entering the pattern**: "Tracy traffic, Skyhawk One Two Three, entering forty-five for left downwind, runway two six, Tracy."
3. **Downwind**: "Tracy traffic, Skyhawk One Two Three, left downwind, runway two six, Tracy."
4. **Base**: "Tracy traffic, Skyhawk One Two Three, left base, runway two six, Tracy."
5. **Final**: "Tracy traffic, Skyhawk One Two Three, final, runway two six, Tracy."
6. **Clear of the runway**: "Tracy traffic, Skyhawk One Two Three, clear of runway two six, Tracy."

Departing:

- **Taxiing**: "Tracy traffic, Skyhawk One Two Three, taxiing to runway two six, Tracy."
- **Taking off**: "Tracy traffic, Skyhawk One Two Three, departing runway two six, departing to the west, Tracy."

Play the animation with the radio calls turned on to see where each call happens.

::widget{name="traffic-pattern" calls="true"}

## Keep talking, keep looking

- **Self-announce even if nobody answers.** Someone may be listening without talking, or have a radio problem.
- **Not every airplane has a radio.** Keep looking outside.
- **Listen before you arrive.** Tune the CTAF well before 10 nm so you can build a picture of who's in the pattern.

## Joining and leaving

- **Join** on the 45° to downwind at pattern altitude, as in Lesson 4.2.
- **Leave** straight out or with a 45° turn in the direction of the pattern, after reaching pattern altitude.

:::callout{type="sim"}
In MSFS, the ATC window offers CTAF calls at non-towered airports, and the AI traffic may make its own calls. If the options don't match what you want to say, say the call out loud and move on.
:::

:::callout{type="verify"}
Author note: check which CTAF calls the MSFS 2024 ATC window offers, and whether AI traffic announces its position.
:::
