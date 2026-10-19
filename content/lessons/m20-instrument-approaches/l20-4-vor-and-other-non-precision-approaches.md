---
slug: l20-4-vor-and-other-non-precision-approaches
code: L20.4
module: m20-instrument-approaches
order: 4
priority: P0
title: VOR and other non-precision approaches
summary: Fly a VOR or localizer-only approach to an MDA with a continuous descent, find the VDP, and identify the missed approach point by distance or time.
estimatedMinutes: 25
prerequisites: [l20-1-anatomy-of-an-instrument-approach, l6-4-vor-navigation]
objectives:
  - Set up and fly a VOR or LOC approach to the MDA, tracking the final approach course with the CDI on the correct source.
  - Compute a continuous-descent rate from the FAF and compare it with step-down flying.
  - Identify the missed approach point by distance or by timing from the FAF, and state when you may leave the MDA.
challenges: []
resources: [iph-approaches, ecfr-91-175, aim-5, faa-chart-users-guide, faa-dtpp]
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

## When there is no glidepath

Not every runway has an ILS, and the G1000 does not always give you LPV. Sometimes the approach is a VOR radial pointing roughly at an airport, or a localizer with the glideslope out of service, and the only vertical guidance is a column of altitudes on the plate and your own arithmetic. These are the **non-precision approaches**, flown to an MDA rather than a DA. The skills are the ones you built tracking radials in [[l6-4-vor-navigation]], plus a stopwatch and a plan for the descent.

:::callout{type="real-world"}
In a real airplane, non-precision approaches are the ones with the worst accident record, mostly from descending below the MDA or past a step-down altitude too early. Real training drills them with an instructor until the altitude discipline is automatic. The sim cannot hurt you, so be stricter with yourself here than the sim requires.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## VOR and LOC approaches

A **VOR approach** uses a radial to or from a VOR as the final approach course. The VOR may be on the airport, in which case the MAP is station passage, or miles away, in which case the MAP is a DME distance or a time. Because a radial is a straight line from wherever the station happens to be, the final approach course is often not aligned with any runway. When the course is more than 30° off the runway heading, the plate offers only **circling** minima, covered in [[l20-6-circling-approaches-and-procedure-turns]].

A **LOC approach** is an ILS with the glideslope ignored or out of service. It usually shares the ILS plate. Monterey's "ILS or LOC RWY 10R" is one procedure with two lines of minima, while Livermore charts "ILS RWY 25R" and "LOC RWY 25R" separately. The localizer is as sensitive as ever, and the MDA replaces the DA.

| Approach | Final course from | CDI source on the G1000 | Sensitivity                   | MAP identified by                          |
| -------- | ----------------- | ----------------------- | ----------------------------- | ------------------------------------------ |
| VOR      | A VOR radial      | VOR1 (green)            | ±10° full scale               | Station passage, DME/GPS distance, or time |
| LOC      | The localizer     | LOC1 (green)            | ±2.5° full scale              | DME/GPS distance, or time from the FAF     |
| LNAV     | A GPS course      | GPS (magenta)           | ±0.3 nm full scale at the FAF | The GPS fix at the runway                  |

Setup is the same as for an ILS, except that on a VOR approach you must **set the final approach course on the CRS knob yourself**, and the TO/FROM flag matters. Tune, identify (the three-letter Morse, decoded next to the frequency), set the course, check the CDI reads VOR1. On a G1000 you can also load the VOR approach from PROC so the map draws it and the distances come from GPS, but the needle you fly is the green one.

:::quiz{id="l20-4-q1" type="single"}
A VOR approach has a final approach course of 240 to a runway with a heading of 310. Which minima does the plate most likely give?

- [ ] Straight-in minima to Runway 31
- [x] Circling minima only, because the course is more than 30° off the runway
- [ ] LPV minima
- [ ] No minima; the approach is not usable

---

A final course 70° from the runway heading cannot be a straight-in. The plate will list circling minima only, and you will maneuver to the runway visually once you see it.
:::

## Step-down fixes

Between the FAF and the MAP a non-precision approach may have one or more **step-down fixes**: a named fix or DME distance with a minimum altitude that applies until you cross it. They exist because of an obstacle, and the altitudes are hard floors. The Training Plate also has a non-precision version, the VOR Runway 28. Its profile reads like this:

| Fix               | Distance from the VOR | Minimum altitude | Note                                        |
| ----------------- | --------------------- | ---------------- | ------------------------------------------- |
| FLARE (FAF)       | 6.0 nm                | 2,000 ft MSL     | Start the descent and the timer             |
| CREST (step-down) | 3.0 nm                | 1,400 ft MSL     | Do not descend below 1,400 until past CREST |
| MDA               | —                     | 900 ft MSL       | HAT 450 ft                                  |
| MAP               | 1.0 nm                | —                | Go missed if not in sight                   |

Flown "dive and drive", you would descend from 2,000 ft to 1,400 ft, level off until CREST, then descend to 900 ft and level off again. That is two descents, two level-offs and two power changes inside a 5 nm final. It works, and you must know it, but a continuous descent is a better way.

:::callout{type="verify"}
Widget pending: Widget W39 (Descent and VDP Planner, P1) is embedded here once Phase 21 ships it: `::widget{name="descent-vdp" mode="stepdowns"}`, drawing this profile with the CDFA line over the step-downs. The fictional VOR Runway 28 profile above must match the P1 second training plate when it exists.
:::

## CDFA vs dive-and-drive

A **continuous descent final approach** replaces the staircase with one straight line from the FAF altitude to the MDA, planned to reach the MDA at a point where you can still land normally if the runway appears. You hold one attitude and one power setting, with the same picture as an ILS. The descent rate comes from a formula:

> **CDFA descent rate = (FAF altitude − MDA) ÷ time from the FAF to where you want to reach MDA**

Try it on the Training Plate VOR. From FLARE at 2,000 ft to the MDA of 900 ft is 1,100 ft. You want to be at MDA by about 1 nm before the MAP, so 4 nm after the FAF. At a 90 kt groundspeed, 4 nm takes 4 ÷ 90 × 60 = 2.67 minutes. 1,100 ÷ 2.67 ≈ 410 fpm. Check it against the step-down: at 410 fpm you lose about 820 ft in the 3 nm to CREST, reaching about 1,180 ft, which is below CREST's 1,400 ft floor. So the line must be flatter until CREST, or the plan is to cross CREST at 1,400 ft and steepen slightly after it. **Step-down altitudes always take priority over the straight line.** Check every one.

| Technique      | Descents | Level-offs before MDA | Reaches MDA         | Risk                                       |
| -------------- | -------- | --------------------- | ------------------- | ------------------------------------------ |
| CDFA           | 1        | 0 (level at MDA only) | Just before the VDP | Must check each step-down against the line |
| Dive and drive | 2+       | 1 per step-down       | Early               | Busting a step-down or the MDA in the rush |

Whichever you fly, **level off at the MDA and do not go below it** until the runway environment is in sight and you can land normally.

:::quiz{id="l20-4-q2" type="numeric" answer="400" tolerance="40" unit="fpm"}
The FAF is at 2,400 ft MSL and the MDA is 1,200 ft. You want to reach MDA 3 minutes after the FAF. What descent rate does the CDFA need, with no step-down fixes in the way?

---

(2,400 − 1,200) ÷ 3 = 1,200 ÷ 3 = 400 fpm.
:::

## The VDP and leaving the MDA

Once you are level at MDA with the runway in sight, check that you can still descend to a normal landing. A **visual descent point** (VDP) is the point on final from which a normal 3° descent from the MDA reaches the touchdown zone. Some plates print it as a "V" on the profile with a DME distance. If none is printed, you can estimate it:

> **VDP distance from the threshold (nm) ≈ HAT (ft) ÷ 300**

On the Training Plate VOR, the HAT is 450 ft, so the VDP is about 1.5 nm from the threshold. If you reach the VDP at MDA without the runway, you may continue level to the MAP and look, but landing from there would need a steep, unstable dive. If you have no runway at the VDP, prepare for the missed approach, and fly it at the MAP.

Leaving the MDA follows the same rule as leaving DA in [[l20-3-ils-approaches]]: the required flight visibility, a descent to a landing on the runway at a normal rate using normal maneuvers, and at least one item from the runway environment list distinctly visible and identifiable.

:::callout{type="verify"}
Sim check: the VDP definition and "do not descend below the MDA before the VDP" (AIM 5-4-5, Chart User's Guide), the 300 ft per nm rule (IPH Ch 4) and the leaving-MDA conditions (14 CFR 91.175(c)) are desk-verified. Still open: whether the sim's G1000 shows the VDP on approaches that chart one.
:::

:::quiz{id="l20-4-q3" type="numeric" answer="2" tolerance="0.2" unit="nm"}
An approach has an MDA with a HAT of 600 ft. About how far from the threshold is the visual descent point?

---

600 ÷ 300 = 2 nm. From 600 ft above the touchdown zone, a 3° descent needs about 2 nm of runway-ward travel.
:::

## Timing from the FAF

When the MAP is not a fix you can see on the GPS, it is a time from the FAF, printed in a small table at the bottom of the plate against groundspeed. You start the timer crossing the FAF and go missed when it runs out, whatever the GPS says. Timing is an old method, but a LOC approach with the DME out, or a sim database that does not draw the MAP, still needs it.

| Distance FAF to MAP | 80 kt | 90 kt | 100 kt | 120 kt |
| ------------------- | ----- | ----- | ------ | ------ |
| 4.0 nm              | 3:00  | 2:40  | 2:24   | 2:00   |
| 5.0 nm              | 3:45  | 3:20  | 3:00   | 2:30   |
| 6.0 nm              | 4:30  | 4:00  | 3:36   | 3:00   |

The table is distance ÷ groundspeed. Use the groundspeed, not the airspeed: a 15 kt headwind at an approach speed of {{vspeed.approach}} makes the leg noticeably longer. Read the groundspeed off the G1000 crossing the FAF, pick the column, start the timer. Flying the Training Plate VOR at 90 kt groundspeed, the 5 nm from FLARE to the MAP takes 3 minutes 20 seconds.

:::callout{type="decision"}
Timer at 3:20, level at the MDA, nothing but gray ahead. The GPS distance says 1.2 nm, slightly more than the plate's MAP, so you are tempted to fly a few more seconds. Don't. The timer is the MAP you briefed. Go missed on time, and sort out the discrepancy in the debrief.
:::

:::quiz{id="l20-4-q4" type="numeric" answer="3" tolerance="0" unit="min"}
The FAF is 5.0 nm from the MAP and your groundspeed is 100 kt. How many minutes after the FAF do you reach the MAP?

---

5 ÷ 100 × 60 = 3 minutes. At 90 kt it would be 3:20, and at 80 kt, 3:45.
:::

## Practice and next steps

To carry forward:

1. VOR and LOC approaches fly on the green needle, to an MDA, often with step-downs.
2. Fly a continuous descent, but check every step-down floor against the line.
3. The VDP is about HAT ÷ 300 nm from the threshold. If you pass it without the runway, expect to go missed.
4. Time the final from the FAF at your groundspeed, and treat the timer as the MAP.

**Practice.** This lesson feeds the `ifr-rules` deck (the VDP formula, the leaving-MDA rule) and the `approach-plate-symbols` deck (the step-down fix and the timing table).

**Fly it.** Challenge C20.4 "VOR approach" flies a VOR approach from the candidate list, likely the KSNS "VOR RWY 13" (not for navigation), in `WX_IMC_NP` weather, and scores the course tracking, every step-down or the CDFA, the MAP identification and the decision at MDA. Next: [[l20-5-missed-approaches]] covers what to fly when the runway is not there.

:::callout{type="verify"}
Sim check: d-TPP cycle 2610 (01–29 Oct 2026) charts KSNS "VOR RWY 13" (Amdt 13; SNS VORTAC, DME required, straight-in and circling minima), "ILS RWY 31" and "LOC RWY 31" as separate plates, and four RNAV (GPS) approaches; there is no "ILS or LOC RWY 31". Still open: VOR RWY 13 in the sim's nav database, then name it by that title in Challenge C20.4.
:::
