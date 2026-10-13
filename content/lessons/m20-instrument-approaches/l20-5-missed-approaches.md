---
slug: l20-5-missed-approaches
code: L20.5
module: m20-instrument-approaches
order: 5
priority: P0
title: Missed approaches
summary: Decide to go missed, fly the memory flow, follow the published missed approach to the hold, and choose what comes next.
estimatedMinutes: 20
prerequisites: [l20-2-rnav-gps-approaches]
objectives:
  - State the conditions that require a missed approach at DA, at the MAP, or earlier.
  - Fly the missed approach flow from memory and the published missed approach to the holding fix.
  - Sequence the G1000 and autopilot through a missed approach and choose between holding, another attempt and a diversion.
challenges: []
resources: [iph-approaches, aim-5, garmin-g1000-nxi-pilots-guide]
published: false
lastVerifiedAt: null
simVersion: null
---

## The approach that ends in a climb

Half of every approach briefing is about the missed approach, and most pilots fly a hundred approaches before they need one for real. That is the problem. The missed approach is a go-around in cloud, started at the moment you most want to land, with a turn and a climb to a fix you have to find on the plate. Like the go-around in [[l4-4-go-arounds]], it is a normal maneuver and a sign of good judgment, not a failure. Learn-To-Fly scores it as a pass every time it is the right call.

:::callout{type="real-world"}
In a real airplane, the missed approach is practiced until the first three steps happen without thought, because the alternative, hesitating at 200 ft in cloud, is how controlled flight into terrain happens. Real training also covers things the sim cannot: a missed approach in icing, with a passenger asking questions, and with an engine that may not give full power. Fly the flow here until it is automatic, then remember it is only the beginning.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## When to go missed

The obvious trigger is reaching DA, or the MAP at MDA, without the runway environment in sight. It is not the only one. Anything that makes the approach unsafe before that point is also a missed approach, and the earlier you call it, the easier it is to fly.

| Trigger                                               | When                 | Why                                                                        |
| ----------------------------------------------------- | -------------------- | -------------------------------------------------------------------------- |
| Runway environment not in sight at DA or the MAP      | At minimums          | The approach is finished                                                   |
| Runway in sight but a normal landing is not possible  | At or after minimums | Too high, too fast, or not in the touchdown zone                           |
| Full-scale needle inside the FAF                      | Any time             | You are outside the protected airspace                                     |
| Not stabilized by 1,000 ft above the airport in IMC   | Inside the FAF       | The Learn-To-Fly standard from [[l20-1-anatomy-of-an-instrument-approach]] |
| A guidance flag (NAV, GS, LOI) or a lost annunciation | Any time             | The needles are lying                                                      |
| ATC instructs you to go around                        | Any time             | Traffic or a runway problem                                                |
| You lose the runway after seeing it (circling)        | Below MDA            | See [[l20-6-circling-approaches-and-procedure-turns]]                      |

The "not stabilized" line is the one pilots argue with themselves about. Do not argue. If you are off the needles, fast, and sinking at 1,200 fpm to catch up, the runway may appear and you may even land. That is luck. The missed approach is the plan.

:::quiz{id="l20-5-q1" type="multi"}
Which of these require a missed approach? Pick all that apply.

- [x] At DA, you see only gray
- [x] Inside the FAF the localizer needle goes full scale
- [ ] At DA, the PAPI and threshold lights are clearly in sight and you are on speed
- [x] At 800 ft above the airport in IMC you are 20 kt fast with the glideslope a dot and a half low
- [x] The glideslope flag appears at 1,000 ft above DA

---

Everything except the stabilized approach with the runway environment in sight. A full-scale needle, an unstable approach near minimums and a failed glideslope each end the approach, with or without a runway.
:::

## The flow

The first part of the missed approach is a memory flow. You do not look it up and you do not reach for the plate; you fly it from the top, in order, and only then navigate.

:::callout{type="memory"}
**Missed approach flow**

1. **Power:** full throttle.
2. **Pitch:** the climb attitude, about {{vspeed.vy}} once clean; the go-around picture you know.
3. **Positive rate:** confirm on the VSI and altimeter, aloud.
4. **Flaps:** retract in stages per the checklist, once climbing.
5. **Navigate:** the published missed approach; check the CDI source and that the G1000 has sequenced.
6. **Talk:** "Skyhawk 123AB, missed approach."

:::

The order is the order of what kills you. Power and pitch stop the descent; positive rate proves it; flaps clean the airplane up; only then does anyone care where you are going, and ATC can wait until the airplane is climbing. In the sim, at DA, say each word as you do it. In Challenge C20.5 the flow is scored in this exact order.

The go-around speed from the checklist is {{vspeed.goAround}} with the flaps still partly out; let the airplane accelerate to {{vspeed.vy}} as they come up. Expect a strong pitch-up with full power and nose-up trim from the approach: push, then re-trim.

:::callout{type="verify"}
Confirm the flap retraction schedule for a go-around from an approach configuration (flaps 10 on an ILS; flaps 30 if a landing was being set up) against the in-sim checklist and the POH, and the go-around speed `{{vspeed.goAround}}` against `aircraft.yaml`. The flow is Appendix B.13, "simplified for the sim".
:::

:::quiz{id="l20-5-q2" type="order"}
Put the missed approach flow in order.

1. Power
2. Pitch
3. Positive rate
4. Flaps
5. Navigate
6. Talk

---

Power, pitch, positive rate, flaps, navigate, talk. Stop the descent first, prove it, clean up, then go somewhere, then tell someone.
:::

## The published missed approach

Every plate prints its missed approach in the briefing strip and draws it with a dashed line on the plan and profile views. It is designed from the MAP, so it assumes you are there, at or above the DA or MDA, when you start it. On the Learn-To-Fly Training Plate the ILS Runway 28 missed approach reads:

| Element      | Training Plate ILS Runway 28                                 |
| ------------ | ------------------------------------------------------------ |
| First action | Climb straight ahead to 1,200 ft MSL                         |
| Then         | Climbing right turn to 3,000 ft MSL, direct DEPOT            |
| Holding fix  | DEPOT                                                        |
| Hold         | As published: right turns, inbound course 100, 1-minute legs |

Two rules protect you. First, **no turns before the MAP**. If you go missed early, say at a full-scale needle 3 nm outside the MAP, climb to the missed approach altitude but fly the final approach course to the MAP before starting the turn, because the obstacle clearance for the turn starts there. Second, **the first altitude before the turn is a floor**: "climb to 1,200, then climbing right turn" means do not start the turn until 1,200 ft. You drew this hold and chose its entry in [[l19-1-holding-patterns-entries-timing-and-wind]]; now it has a purpose.

:::callout{type="verify"}
Widget W38 (Approach Plate Explorer) is embedded here once Phase 21 ships it: `::widget{name="approach-plate" mode="missed"}`, animating the missed approach from the MAP to the hold. The DEPOT hold details (right turns, inbound course 100) must match the W38 data. Confirm the "no turns before the MAP when going missed early" guidance against AIM 5-4-21 and the IPH.
:::

:::quiz{id="l20-5-q3" type="single"}
Four miles outside the MAP, inside the FAF, the glideslope flags and you decide to go missed. The published missed approach is "climb to 1,200, then climbing right turn to 3,000 direct DEPOT." What do you do about the turn?

- [ ] Start the right turn now, as soon as you reach 1,200 ft
- [x] Climb, but fly the final approach course to the MAP before starting the right turn
- [ ] Turn left instead; you are early
- [ ] Hold the FAF altitude until the MAP, then fly the published climb

---

The missed approach is designed from the MAP. Going missed early, you climb at once (nothing says stay low) but continue along the final approach course to the MAP, and only then begin the turn.
:::

## The G1000 and the missed approach

The box does not know you went missed until you tell it. As you pass the MAP the G1000 **suspends** automatic sequencing, shows SUSP on the HSI, and keeps guiding you along the runway's extended centerline. The navigate step of the flow is where you fix this:

| Step | Action                                                                             | What you should see                                                            |
| ---- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1    | Press the **GA** button (on the throttle) as part of "power, pitch"                | Flight director commands wings level and a climb; autopilot modes change to GA |
| 2    | At the "navigate" step, press the **SUSP** (or OBS) softkey, or confirm sequencing | SUSP clears; the active leg becomes the first missed approach leg to DEPOT     |
| 3    | On an ILS, confirm the CDI has switched back to **GPS**                            | Needle turns magenta; the missed approach is a GPS route                       |
| 4    | When ready, select **NAV** on the autopilot and an altitude mode                   | The autopilot follows the missed approach to the hold                          |

The autopilot in GA mode flies a wings-level climb at a fixed pitch and nothing else. It does not turn, and on some installations pressing GA disconnects the autopilot altogether, leaving the flight director only. Either way, nobody is navigating until you complete step 2 and select NAV. Watch the mode annunciator and say what you see: "GA, GA; SUSP cleared, GPS; NAV, ALT armed."

:::callout{type="verify"}
Verify the MSFS 2024 G1000 NXi and GFC 700 behaviour at the MAP: whether SUSP appears, which softkey un-suspends (SUSP vs OBS), whether the CDI returns to GPS automatically after an ILS, whether the GA button disconnects the autopilot or sets GA on the autopilot, and the exact annunciator text. Rewrite the table to match. Screenshot for the shot list: "HSI with SUSP at the MAP, then first missed approach leg active".
:::

## What to do next

Established in the hold at DEPOT, climbing through the gray, you have time. Use it for the decision the hold exists to protect.

:::callout{type="decision"}
**Hold, try again, or divert?** Hold if the weather is improving and you have the fuel to wait and still reach the alternate with 45 minutes to spare. Try again only if something _specific_ will be different: the ATIS now reports a higher ceiling, or the first attempt failed because of something you can fix (an unstable approach, a wrong transition). Divert if the weather at minimums was not there and nothing has changed, if fuel is a question, or if you are tired of the question itself. "I'll try once more and see" is not a plan. Two missed approaches in a row at the same airport is a strong signal that the third would be the same.
:::

:::callout{type="verify"}
The "45 minutes to spare" in the decision callout is the IFR fuel reserve from 14 CFR 91.167 (destination, alternate, then 45 minutes at normal cruise), taught in [[l18-1-ifr-rules-minimums-currency-alternates-and-fuel]]; confirm the wording before publishing.
:::

Whichever you choose, tell ATC early and in plain words: "Skyhawk 123AB, missed approach, request the RNAV 25R again" or "request clearance to Stockton." In the sim, the self-voiced script in the challenge brief covers both.

:::quiz{id="l20-5-q4" type="single"}
After a missed approach, the ATIS still reports a ceiling 200 ft below the minima, the forecast says no change for 2 hours, and your fuel covers the alternate plus 45 minutes with 20 minutes to spare. What do you do?

- [ ] Try the approach once more; the ceiling might lift
- [ ] Hold for an hour and see
- [x] Divert to the alternate now
- [ ] Fly the approach to 100 ft below minimums

---

Nothing will be different on a second attempt, the forecast says so, and fuel is already tight. The alternate exists for exactly this. Diverting is the good decision, and it is scored as one.
:::

## Practice and next steps

Four things to carry forward:

1. Go missed at DA or the MAP without the runway environment, and earlier for a full-scale needle, an unstable approach or a flag.
2. Power, pitch, positive rate, flaps, navigate, talk.
3. No turns before the MAP; the first altitude is a floor before the turn.
4. SUSP off, CDI to GPS, NAV on; then hold, try again or divert, for a reason you can say aloud.

**Practice.** This lesson feeds the `memory-items` deck: the missed approach flow, in order, is a card you should be able to answer in your sleep.

**Fly it.** Challenge C20.5 "Missed approach to the hold" flies the KLVK "ILS or LOC RWY 25R" (not for navigation) in `WX_IMC_BELOW` weather, so the brief tells you to expect to go missed, and scores the flow, the published missed approach and the hold entry. Challenge C20.6 "Partial-panel approach" (P1) adds a failed PFD before the FAF. The last lesson in this module, [[l20-6-circling-approaches-and-procedure-turns]], covers two things you will meet on plates even if you rarely fly them.

:::callout{type="verify"}
Real procedure named: KLVK "ILS or LOC RWY 25R" and its published missed-approach holding fix (Section 12.4). Confirm the procedure and the hold exist in the current d-TPP and in the sim's nav database, and record the d-TPP cycle checked here before publishing.
:::
