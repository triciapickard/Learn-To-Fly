---
slug: l20-1-anatomy-of-an-instrument-approach
code: L20.1
module: m20-instrument-approaches
order: 1
priority: P0
title: Anatomy of an instrument approach
summary: The segments, fixes and minima every instrument approach shares, and how to brief one so nothing surprises you on the way down.
estimatedMinutes: 25
prerequisites: [l18-2-ifr-charts-and-the-approach-plate]
objectives:
  - Name each approach segment and the fix that starts it, in order from the IAF to the MAP.
  - Read the minima section of a plate and choose the correct line for a Cessna 172.
  - Brief an approach aloud using the standard Learn to Fly briefing format.
challenges: []
resources: [iph-approaches, faa-chart-users-guide, faa-dtpp, aim-5, faa-acs-instrument]
published: false
lastVerifiedAt: null
simVersion: null
---

## Getting down through the cloud

You are level at 5,000 ft MSL over the Central Valley, heading home to Livermore. The ATIS reports an overcast at 1,200 ft and 3 miles visibility. Under VFR that would be a no-go. Under IFR it is an ordinary afternoon, because someone has already designed a safe path from the clouds to the runway and printed it on one page. That page is the approach plate you learned to read in [[l18-2-ifr-charts-and-the-approach-plate]]. This lesson is about what the plate _describes_: a sequence of segments, fixes and altitudes that is the same shape on almost every approach in the world.

:::callout{type="real-world"}
In a real airplane, instrument approaches are flown under an instrument rating that takes 40 hours of simulated or actual instrument time, a knowledge test and a practical test with an examiner. Flying an approach in the sim teaches the shape of the procedure and the discipline of the minima. It does not make you an instrument pilot. If this interests you, an instructor and a view-limiting device are the next step.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## The segments of an approach

Every approach is built from the same four segments. Each one starts at a named fix, and the fixes have standard abbreviations that ATC, the plate and the G1000 all use.

| Segment      | Starts at                       | Its job                                              | Typical shape                                    |
| ------------ | ------------------------------- | ---------------------------------------------------- | ------------------------------------------------ |
| Initial      | **IAF** (initial approach fix)  | Get you from the enroute structure onto the approach | A feeder route, a turn, or a hold-in-lieu        |
| Intermediate | **IF** (intermediate fix)       | Line you up and slow you down                        | Straight segment, aligned within 30° of final    |
| Final        | **FAF** (final approach fix)    | Descend to the minima, aligned with the runway       | Glideslope or glidepath, or step-downs to an MDA |
| Missed       | **MAP** (missed approach point) | Climb away safely when you do not see the runway     | Climb, then a turn to a holding fix              |

On a precision approach the final segment starts at the glideslope intercept point, usually marked on the profile view with a lightning-bolt symbol. On a non-precision approach the FAF is a plain fix, drawn as a Maltese cross on the profile. The MAP on a precision approach is the **decision altitude**, a height, not a place. On a non-precision approach the MAP is a point: a fix, a DME distance, or a time from the FAF.

Picture the **Learn to Fly Training Plate**: a fictional ILS to Runway 28 at an invented airport. The IAF is a fix called DEPOT at 4,000 ft MSL. From DEPOT a feeder route runs to the IF, a fix called ROLLA, where the course turns onto final at 3,000 ft. The FAF, called FLARE, is 5 nm from the runway at 2,000 ft. The DA is 650 ft MSL. Keep this picture; every lesson in Module 20 refers back to it.

:::callout{type="verify"}
Widget pending: Widget W38 (Approach Plate Explorer) is embedded here once Phase 21 ships it: `::widget{name="approach-plate" mode="segments"}`. The Training Plate it draws is original and fictional (D2-10); the fix names DEPOT, ROLLA and FLARE and the altitudes in this lesson must match the plate's hotspot JSON when it exists. Until then the table and the description above are the walkthrough.
:::

:::quiz{id="l20-1-q1" type="single"}
Which fix marks the start of the final approach segment?

- [ ] The IAF
- [ ] The IF
- [x] The FAF
- [ ] The MAP

---

The **final approach fix**. From the FAF you are aligned with the runway and descending to the minima. The MAP is where the final segment _ends_.
:::

## Vectors-to-final vs the full procedure

There are two ways to join an approach. Flying the **full procedure** means starting at an IAF and flying every segment as charted. You do this at non-towered airports, when radar is not available, or whenever ATC says "cleared for the approach" without vectors. The plate tells you how to get from the IAF onto final: a feeder route, a procedure turn, or a hold-in-lieu of a procedure turn (both in [[l20-6-circling-approaches-and-procedure-turns]]).

**Vectors-to-final** is what you get in a radar environment like the Bay Area. Approach control turns you onto a heading that intercepts the final approach course, usually inside the IF and outside the FAF, and gives you an altitude to maintain "until established". The clearance sounds like: "Skyhawk 123AB, 5 miles from FLARE, turn left heading 310, maintain 3,000 until established on the localizer, cleared ILS Runway 28 approach." Three things, in order: a heading, an altitude, and the clearance.

Vectors are easier to fly but easier to get wrong in the G1000, because you must tell the box you are being vectored (the VECTORS transition, see [[l18-4-the-g1000-nxi-and-gfc-700-for-ifr]]) or it will try to take you to an IAF you will never cross.

:::quiz{id="l20-1-q2" type="single"}
ATC says "maintain 3,000 until established, cleared ILS Runway 28 approach." You are on a vector and not yet on the localizer. The glideslope needle starts to move. What do you do with your altitude?

- [ ] Follow the glideslope now; you are cleared for the approach
- [x] Hold 3,000 ft until the localizer needle is alive and you are established, then follow the glideslope
- [ ] Descend to the FAF altitude on the plate
- [ ] Climb; the glideslope is above you

---

"Until established" means exactly that. Until you are on the final approach course the altitude in the clearance is yours to keep. Once established, the plate's profile takes over.
:::

## Minima: DA vs MDA, visibility and category

The minima section is where the approach ends if the runway is not there. There are two kinds of minimum altitude, and they are flown differently.

| Minimum                            | Used on                                 | How you fly it                                                                                     |
| ---------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **DA** (decision altitude)         | ILS, LPV, LNAV/VNAV (vertical guidance) | Keep descending on the glidepath. _At_ DA, decide: runway in sight, land; not in sight, go missed. |
| **MDA** (minimum descent altitude) | LNAV, LOC, VOR (no vertical guidance)   | Descend to the MDA and **level off**. Hold it until you see the runway or reach the MAP.           |

Next to each altitude is a **visibility** number: statute miles after a hyphen ("980-1") or RVR in hundreds of feet after a slash ("650/24"). Both must be met: you need the runway environment in sight and at least the charted visibility. The small number after the visibility is the height above the touchdown zone (HAT) for a straight-in, or above the airport (HAA) for circling. On the Training Plate the ILS line reads "650/24 200": DA 650 ft MSL, RVR 2,400 ft, 200 ft above the touchdown zone. Anything in parentheses after that is a military minimum; civil pilots ignore it.

Minima are listed by **aircraft approach category**, fixed for each type by its certified landing reference speed (1.3 × Vso at maximum landing weight, or Vref): Category A is below 91 kt, B is 91 to 120 kt, C is 121 to 140 kt. The Skyhawk's figure, and the {{vspeed.approach}} you fly on final, are both far below 91 kt, so it is **Category A**. Always read the Category A column, and if you ever fly an approach faster than 90 kt, use the next category's minima. On most straight-in approaches the categories share one line; on circling approaches they often do not.

:::quiz{id="l20-1-q3" type="single"}
You are flying an approach to an MDA of 900 ft MSL. At 900 ft you do not see the runway and you are still 2 nm from the MAP. What do you do?

- [ ] Go missed immediately
- [x] Level off at 900 ft and continue to the MAP, looking for the runway
- [ ] Descend another 100 ft to improve your chances
- [ ] Climb back to the FAF altitude and try again

---

An MDA is a floor, not a decision point. Level off and fly to the MAP. If the runway appears before the MAP (and you can land normally), land. If you reach the MAP without it, go missed.
:::

## The approach briefing

An approach briefing is a spoken, ordered walk through the plate, done 10–15 minutes before the descent while you still have time to fix a mistake. Saying it aloud, even alone in the sim, is the point: the mouth catches errors the eyes skip over. Learn to Fly uses this format everywhere, including the kneeboard card in every approach challenge.

| #   | Item                                                             | Training Plate example                                                    |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1   | Procedure name and date or cycle                                 | "Training Plate ILS Runway 28, training cycle"                            |
| 2   | Frequencies: ATIS, approach, tower/CTAF, LOC/VOR with identifier | "Localizer 110.3, identifier I-LTF"                                       |
| 3   | Final approach course                                            | "Final approach course 280"                                               |
| 4   | FAF name and altitude                                            | "FLARE at 2,000"                                                          |
| 5   | DA or MDA and required visibility                                | "DA 650, RVR 2,400"                                                       |
| 6   | Touchdown zone or airport elevation                              | "Touchdown zone elevation 450"                                            |
| 7   | Missed approach: first heading/altitude, holding fix             | "Climb to 1,200, then climbing right turn to 3,000 direct DEPOT and hold" |
| 8   | Notes: lighting, step-downs, VDP                                 | "Approach lights, PAPI left side, no step-downs"                          |
| 9   | Planned landing runway and taxi plan                             | "Runway 28, exit at the end, taxi to the ramp"                            |

Brief the missed approach every time, even in good weather. The one approach you do not brief it on is the one where you need it.

:::callout{type="tip"}
Set the box up _while_ you brief: as you say the localizer frequency, tune it; as you say the final approach course, set the CRS; as you say the DA, set the minimums bug. By the end of the briefing the airplane is ready too.
:::

:::quiz{id="l20-1-q4" type="order"}
Put the first four items of the approach briefing in order.

1. Procedure name and cycle
2. Frequencies and identifier
3. Final approach course
4. FAF name and altitude

---

Name it, tune it, set the course, then the fix you fly it from. The order follows the plate from the top of the briefing strip downward, so you can read it rather than remember it.
:::

## Stabilized approach criteria for IFR

You already know a stabilized approach from [[l4-3-normal-approach-and-landing]]: configured, on speed, on the glidepath, with only small corrections. IFR tightens the rule, because you will break out of the cloud with seconds to land, not minutes. The table is the Learn to Fly standard: the FAA's handbook sets the 1,000 fpm and 1,000 ft limits, the Instrument ACS allows up to three-quarters scale on the needles, and we ask for half.

| By the FAF (or glideslope intercept)         | Inside the FAF                                                 |
| -------------------------------------------- | -------------------------------------------------------------- |
| Landing configuration set (flaps as planned) | Needles within half scale, trending to center                  |
| Airspeed at the approach speed, ±10 kt       | Descent rate no more than 1,000 fpm                            |
| Approach briefed and the missed approach set | Only small power and heading changes                           |
| Checklist complete                           | At 1,000 ft above the airport in IMC: stabilized, or go missed |

A full-scale needle inside the FAF is not something to fix. It is a missed approach. The same goes for a descent rate you had to use to "catch up" with the glidepath. Going missed from an unstable approach is a decision the sim scores as a pass, because it is one.

:::callout{type="decision"}
Inside the FAF on the Training Plate ILS, the localizer needle is three-quarters of a dot out and moving away, and you are 15 kt fast. You are 800 ft above DA. The runway might be there. The honest call is a missed approach now, while you still have altitude and a plan. "I'll fix it on short final" is the sentence that ends up in accident reports.
:::

## Practice and next steps

Four things to carry forward:

1. IAF, IF, FAF, MAP: four fixes, four segments, in that order.
2. DA: decide while descending. MDA: level off and wait for the runway or the MAP.
3. Category A, always; read the right line and both numbers on it.
4. Brief aloud, in order, and brief the missed approach every time.

**Practice.** This lesson feeds the `approach-plate-symbols` flashcard deck: the fix abbreviations, the profile-view symbols and the minima format.

**Fly it.** There is no challenge for this lesson. Your first flown approach is Challenge C20.1 "RNAV (GPS) approach", which opens after [[l20-2-rnav-gps-approaches]]. If you want to read a real plate now, open the current d-TPP and find the KLVK "ILS RWY 25R" (not for navigation; Livermore charts its ILS and its localizer-only approach as two separate plates) and brief it with the table above.

:::callout{type="verify"}
Sim check: KLVK "ILS RWY 25R" (Amdt 9A) is confirmed in d-TPP cycle 2610 (01–29 Oct 2026), charted separately from "LOC RWY 25R" (Amdt 1). Still open: confirm the sim's nav database carries ILS RWY 25R under that title before publishing.
:::
