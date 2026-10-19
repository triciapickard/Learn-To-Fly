---
slug: l20-6-circling-approaches-and-procedure-turns
code: L20.6
module: m20-instrument-approaches
order: 6
priority: P1
title: Circling approaches and procedure turns
summary: Understand circling minima and the protected area, and recognize a procedure turn or hold-in-lieu on a plate before you have to fly one.
estimatedMinutes: 20
prerequisites: [l20-4-vor-and-other-non-precision-approaches]
objectives:
  - Describe circling minima, the protected area and the rule for a missed approach while circling.
  - Recognize a procedure turn and a hold-in-lieu on a plate and describe how each is flown.
challenges: []
resources: [iph-approaches, aim-5, ecfr-91-175, faa-dtpp]
published: false
lastVerifiedAt: null
simVersion: null
---

<!-- ltf:unverified-warning:start (managed by `npm run content:warnings`, do not edit) -->

> [!CAUTION]
> **UNVERIFIED CONTENT: NOT FOR LEARNING USE**
>
> This lesson is an unverified draft. It has not been checked in Microsoft Flight
> Simulator 2024 or against official sources, so its numbers, procedures and steps may be
> wrong. Do not use it to learn to fly, in the sim or in a real aircraft. Only verified
> content is published on the Learn to Fly site.

<!-- ltf:unverified-warning:end -->

## Circling and procedure turns on the plate

Most of the approaches you fly in this course are straight-in, joined on vectors. Many procedures were designed before radar coverage, and two features on the plates come from that time: **circling minima**, for when the approach does not line up with the runway you want, and the **procedure turn**, for when nobody is there to turn you onto final. This short lesson gives you enough to read them on a plate, fly them in the sim when a challenge asks, and know why real pilots treat them with care.

:::callout{type="real-world"}
In a real airplane, circling approaches are among the highest-risk maneuvers in instrument flying: low, slow, visual, close to terrain and often at night. Many operators forbid them below certain minima. Procedure turns demand situational awareness without a magenta line. Pilots train both with an instructor, in the airplane, before flying them alone in cloud.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Circling minima and the protected area

A **circling approach** ends at the airport rather than at a runway. You descend to a circling MDA, find the airport visually, and maneuver to land on a runway the approach does not point at. The wind may favor the other end, or the final course may be 70° off every runway. Circling minima have their own line, by category. They are never lower than straight-in minima, and usually higher, because you will be turning low over terrain on a path the designer cannot predict.

The **protected area** is the airspace around the runways in which the circling MDA guarantees obstacle clearance. For Category A it is drawn from arcs 1.3 nm from each runway end. The FAA's newer table grows the radius with the circling altitude and the category, but for Category A it stays 1.3 nm below 7,000 ft. You may still see a "C" in a black box marking plates built to that table. Stay inside it. A mile and a half outside the arcs, the circling MDA gives you no obstacle clearance.

| Item             | Category A, standard plate                                       | Note                                                                    |
| ---------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Protected radius | 1.3 nm from each runway end                                      | Grows for faster categories and high MDAs, not for a Category A Skyhawk |
| Minimum altitude | Circling MDA (HAA given)                                         | Hold it until in a position to descend normally                         |
| Visual contact   | Keep an identifiable part of the airport in sight the whole time | Lose it (other than briefly in a normal bank): missed approach, now     |
| Speed            | {{vspeed.approach}} or slower                                    | Keeps you Category A and inside the area                                |

:::quiz{id="l20-6-q1" type="single"}
While circling at the MDA you lose sight of the runway in a patch of low cloud. What do you do?

- [ ] Continue the turn; you know where the runway is
- [ ] Descend below the MDA to regain visual contact
- [x] Begin the missed approach immediately with a climbing turn toward the runway
- [ ] Climb back to the FAF altitude and fly the approach again

---

Losing the runway while circling means an immediate missed approach. The standard technique is a climbing turn toward the landing runway, which keeps you over the protected area while you rejoin the published missed approach course.
:::

## Flying the circle

Circling is a traffic pattern flown at the MDA instead of pattern altitude, tighter than you are used to, and never further from the runway than the protected area allows. Choose the pattern that keeps the runway on your side and in sight. Left or right does not matter unless the plate forbids circling on one side.

| Where you break out                            | Pattern                                               |
| ---------------------------------------------- | ----------------------------------------------------- |
| Aligned with the runway, landing the other way | Fly a downwind to the landing runway, base, final     |
| Crossing the runway at an angle                | Turn to a downwind on the side that keeps it in sight |
| Over the airport                               | Fly over it, turn downwind, then base and final       |

Hold the MDA until you are on a normal descent path to the runway, then fly the approach you learned in [[l4-3-normal-approach-and-landing]]. Fly the whole circle at the approach speed with flaps 10 until final, and configure late. If anything goes wrong, the missed approach from a circle is always a climbing turn toward the landing runway, then the published missed approach.

:::callout{type="decision"}
Circling MDA, airport in sight, but it is dusk, the runway lights are dim, and the downwind would put a ridge between you and the field. The straight-in runway has a 10 kt tailwind. Which risk do you prefer: a low circle you cannot see well, or a longer landing on a 5,000 ft runway? With the Skyhawk's landing distance, the tailwind is the smaller risk. Say it aloud and land straight in.
:::

## Procedure turns and the hold-in-lieu

When you fly a full procedure without radar vectors and arrive heading the wrong way, the plate gives you a **course reversal** to turn around and get established inbound.

| Course reversal                      | On the plate                                                                                           | How it is flown                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **Procedure turn**                   | A barbed arrow on the plan view, with "remain within 10 nm" (the usual limit; some plates say 5 or 15) | Outbound on the course, turn 45° to the barb side, fly 1 minute, turn 180° back, intercept inbound |
| **Hold-in-lieu of a procedure turn** | A racetrack at the IF or FAF                                                                           | Enter the hold normally, fly one circuit, continue inbound                                         |

You choose the procedure turn's exact shape, as long as you stay on the barb side and within the distance limit. The 45/180 is the classic. Start it at or above the altitude printed beside it and descend only when established inbound. Do not fly either reversal when the plate says **NoPT** for your route, when you are on vectors, or when ATC clears you "straight in". The G1000 will sequence a hold-in-lieu automatically when the transition needs it, as in [[l19-2-holding-with-the-g1000-and-autopilot]]. It does not fly a procedure turn for you.

:::quiz{id="l20-6-q2" type="single"}
You are cleared for a full-procedure approach from the stem IAF behind the airport. The plate shows a racetrack at the IF marked "hold-in-lieu". ATC did not say "straight in". What do you do?

- [ ] Fly a 45/180 procedure turn on the barb side
- [x] Enter the hold-in-lieu, fly one circuit, then continue inbound
- [ ] Skip the course reversal; the G1000 can fly direct to the FAF
- [ ] Turn directly onto final and descend

---

A hold-in-lieu is flown once, like any hold, and replaces the procedure turn. You may skip it only with NoPT, vectors, or a straight-in clearance.
:::

## Practice and next steps

To carry forward:

1. Circling minima are higher, the protected area is small, and losing the runway means a climbing turn toward it and the missed approach.
2. Circle at the MDA, at the approach speed, configured late, on the side that keeps the runway in sight.
3. A barbed arrow is a procedure turn. A racetrack at the IF or FAF is a hold-in-lieu. NoPT, vectors or "straight in" cancel both.

**Practice.** This lesson feeds the `approach-plate-symbols` deck (the barbed arrow, the racetrack, the boxed "C" and the circling minima line).

**Fly it.** Challenge C20.7 "Circle to land" (P1) uses a Watsonville approach with circling minima, the KWVI "RNAV (GPS) RWY 2" or the circling-only "VOR-A" (not for navigation), in `WX_IMC_CIRCLE` weather. That completes Module 20. The capstone, [[l21-1-single-pilot-ifr-and-automation-management]], puts every approach in this module into one flight.

:::callout{type="verify"}
Sim check: in d-TPP cycle 2610 (01–29 Oct 2026) KWVI "RNAV (GPS) RWY 2" (Amdt 4) carries a circling line and KWVI "VOR-A" (Amdt 1B) is circling-only; KHAF "RNAV (GPS) RWY 12" and "RWY 30" have no circling minima, so Half Moon Bay is out. Still open: which of the two Watsonville procedures the sim's nav database carries, then name it by its charted title in C20.7.
:::
