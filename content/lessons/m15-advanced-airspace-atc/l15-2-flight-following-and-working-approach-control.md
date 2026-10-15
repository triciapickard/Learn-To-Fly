---
slug: l15-2-flight-following-and-working-approach-control
code: L15.2
module: m15-advanced-airspace-atc
order: 2
priority: P0
title: Flight following and working approach control
summary: 'Ask for radar traffic advisories, answer traffic calls, follow headings and altitudes, handle handoffs, and know what "radar service terminated" means.'
estimatedMinutes: 20
prerequisites: [l7-3-towered-airports-and-sim-atc]
objectives:
  - Request VFR flight following with a complete first call.
  - Respond correctly to traffic calls, altitude assignments and heading assignments.
  - Handle a frequency change and a termination of radar service.
challenges: []
resources: [aim-4-1, aim-4-2]
published: false
lastVerifiedAt: null
simVersion: null
---

## A second pair of eyes

On the cross-country in Course 1 you flew from Livermore to Half Moon Bay talking to nobody between the two towers. That is legal, and on a quiet day it is fine. But the Bay Area is not quiet. Airliners descend through 5,000 ft over the East Bay, jets climb out of San Jose, and a dozen trainers share the valley.

**Flight following** is the fix. You call the approach controller, get a squawk code, and from then on a radar controller watches your target and tells you about traffic near you. It costs nothing, it is optional, and it is the single best habit a new VFR pilot can pick up. This lesson teaches the whole conversation, from the first call to "squawk VFR".

:::callout{type="verify"}
Author decision: the v2 spec lists L7.4 as the prerequisite, but that lesson does not exist (checked 2026-10-13), so [[l7-3-towered-airports-and-sim-atc]] is used. Swap the prerequisite to l7-4 if and when it is written.
:::

## What flight following is, and is not

Flight following is the everyday name for **radar traffic advisories** given to VFR aircraft. The controller provides it when the workload allows, and can stop it at any time.

| Flight following gives you                                       | Flight following does not give you                                   |
| ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| Traffic calls for aircraft the radar sees near you               | Separation from that traffic: you still see and avoid                |
| A controller who knows where you are if something goes wrong     | A clearance into Class B, or permission to enter anything            |
| Handoffs that keep you with the right controller                 | Terrain or weather avoidance: you still fly the airplane             |
| The current altimeter setting, and often a shortcut to the tower | A guarantee: "unable, remain clear" is a normal answer on a busy day |

You stay VFR. You choose your route and altitude unless the controller assigns one. If you want to turn, climb or descend, you may, but tell the controller first so the traffic picture stays right.

:::callout{type="note"}
The service has an international cousin. Outside the US you will hear "radar advisory service" or "basic service". The idea is the same: a controller watching, a pilot still responsible.
:::

## The request

Pick the approach frequency for where you are. For Livermore it is on the airport card and the sectional; in the Bay Area the controller is **NorCal Approach**. Listen first, then make a short first call so the controller can fit you in.

| You say                                                                                                                                                                             | They say                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| "NorCal Approach, Skyhawk One Two Three, request flight following."                                                                                                                 | "Skyhawk One Two Three, NorCal Approach, go ahead."                                                          |
| "Skyhawk One Two Three, a Cessna one seventy-two, five miles east of Livermore at three thousand five hundred, request flight following to Monterey at four thousand five hundred." | "Skyhawk One Two Three, squawk four six one two."                                                            |
| "Squawk four six one two, Skyhawk One Two Three."                                                                                                                                   | "Skyhawk One Two Three, radar contact six miles east of Livermore. Livermore altimeter three zero zero two." |
| "Three zero zero two, Skyhawk One Two Three."                                                                                                                                       |                                                                                                              |

Your second call carries the four things the controller needs: **who** you are and what type, **where** you are with altitude, **what** you want, and the **destination** with your planned altitude. "Radar contact" means the controller has found your target. It is not a clearance into anything.

:::quiz{id="l15-2-q1" type="order"}
Put the parts of the full flight-following request in order.

1. Call sign and aircraft type
2. Position and altitude
3. The request
4. Destination and planned altitude

---

"Skyhawk One Two Three, a Cessna one seventy-two, five miles east of Livermore at three thousand five hundred, request flight following to Monterey at four thousand five hundred." Who, where, what, then where to.
:::

:::callout{type="tip"}
Set the squawk code before you read it back, then read it from the transponder. On the G1000 the code is entered on the PFD transponder softkeys. Reading it from the screen catches the kind of slip where you say "four six one two" and dial "four six two one".
:::

## Traffic calls: "traffic in sight" or "looking"

The reason you are here. A traffic call tells you where another airplane is using the clock face, with your nose at 12 o'clock, the distance, the direction it is moving, and its altitude if the radar knows it.

| They say                                                                                                   | Meaning                                                                | You say                                       |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------- |
| "Skyhawk One Two Three, traffic, two o'clock, three miles, northbound, altitude indicates three thousand." | Look right of the nose, 3 nm, crossing left to right, 500 ft below you | "Looking for traffic, Skyhawk One Two Three." |
| (you spot it)                                                                                              |                                                                        | "Traffic in sight, Skyhawk One Two Three."    |
| (you never spot it)                                                                                        |                                                                        | "Negative contact, Skyhawk One Two Three."    |
| "Skyhawk One Two Three, traffic no factor."                                                                | It has passed                                                          | "Skyhawk One Two Three."                      |
| "Skyhawk One Two Three, traffic no longer observed."                                                       | The radar lost it; it may still be out there, so keep looking          | "Skyhawk One Two Three."                      |

Three habits:

- **Look before you answer.** A quick "looking" is fine, but spend the next 10 seconds actually scanning the clock position, above and below the horizon.
- **"Negative contact" is not failure.** It tells the controller to keep calling that traffic. Saying "in sight" when you are not sure is the dangerous answer.
- **The clock is relative to your nose.** In a crab, the controller's "two o'clock" is still from your track. Scan a little wider than the number.

:::quiz{id="l15-2-q2" type="single"}
The controller calls traffic at your two o'clock, three miles, and you cannot find it after a careful look. What do you say?

- [ ] "Traffic in sight, Skyhawk One Two Three", so the controller stops worrying
- [x] "Negative contact, Skyhawk One Two Three"
- [ ] Nothing, until you see it
- [ ] "Roger"

---

**"Negative contact"** tells the controller you are still looking, so they keep updating you. Claiming to see traffic you have not found is the one answer that can hurt you.
:::

## Altitudes and headings

Most of the time on flight following, altitude is yours: "maintain VFR" means fly whatever VFR altitude suits you, and tell the controller when you change it. Inside Class B or C, or near traffic, the controller may assign one:

| They say                                                                       | What it means                                                | You say                                                           |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| "Skyhawk One Two Three, maintain VFR at or below three thousand five hundred." | A ceiling on your altitude, VFR cloud clearances still apply | "At or below three thousand five hundred, Skyhawk One Two Three." |
| "Skyhawk One Two Three, fly heading zero niner zero, vectors for traffic."     | Turn to 090 and hold it until told otherwise                 | "Heading zero niner zero, Skyhawk One Two Three."                 |
| "Skyhawk One Two Three, resume own navigation."                                | The vector is over; go back to your route                    | "Resume own navigation, Skyhawk One Two Three."                   |
| "Skyhawk One Two Three, say altitude."                                         | The radar altitude readout does not match, or is missing     | "Three thousand five hundred, Skyhawk One Two Three."             |

Read back every altitude and heading, always with your call sign. If an instruction would put you in a cloud or into terrain, the answer is **"unable"**, followed by what you can do: "Unable three thousand for clouds, Skyhawk One Two Three can maintain two thousand five hundred." The controller would much rather hear "unable" than watch you fly into the weather. When an assigned altitude is no longer needed you will hear "resume appropriate VFR altitudes": go back to a cruising altitude that fits your direction of flight.

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against the Pilot/Controller Glossary ("maintain", "resume own navigation", "say altitude"), AIM 4-1-18 (at-or-below altitude assignments) and FAA Order 7110.65 7-8-5/7-9-7 ("resume appropriate VFR altitudes"). Still open: does MSFS 2024 ATC issue altitude or heading assignments, "say altitude" or "resume own navigation" to VFR aircraft on flight following?
:::

## Frequency changes

As you fly, you cross from one controller's sector into the next. The handoff is quick, and the check-in call is short because the next controller already has your details on the screen.

| They say                                                                           | You say                                                                     |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| "Skyhawk One Two Three, contact NorCal Approach on one two seven point one five."  | "One two seven point one five, Skyhawk One Two Three."                      |
| (on the new frequency, after listening for a gap)                                  | "NorCal Approach, Skyhawk One Two Three, level four thousand five hundred." |
| "Skyhawk One Two Three, NorCal Approach, Monterey altimeter three zero zero four." | "Three zero zero four, Skyhawk One Two Three."                              |

Put the new frequency in the **standby** window as you read it back, then flip-flop. If nobody answers after two tries, flip back to the previous frequency and say so: the old controller can fix the handoff. Near your destination the last handoff is to the tower, and the tower already knows you are coming.

:::quiz{id="l15-2-q3" type="single"}
After a handoff, what belongs in your first call on the new frequency?

- [ ] Your full position, altitude, destination and aircraft type again
- [x] Who you are calling, your call sign and your altitude
- [ ] Only your call sign
- [ ] A request for flight following, from the beginning

---

The next controller already has your flight strip. A short **"NorCal Approach, Skyhawk One Two Three, level four thousand five hundred"** confirms who you are and lets the controller check the altitude readout.
:::

## "Radar service terminated, squawk VFR"

Flight following ends in one of three ways:

- **The controller ends it.** "Skyhawk One Two Three, radar service terminated, squawk VFR, frequency change approved." Set 1200, answer "Squawk VFR, Skyhawk One Two Three", and you are on your own again. This happens when you leave radar coverage, when the controller is too busy, or when you are about to land at a non-towered field.
- **You end it.** "NorCal Approach, Skyhawk One Two Three, Tracy in sight, cancel flight following." The controller terminates you and approves the frequency change. Never just switch away: a target that stops answering looks like an emergency.
- **The tower takes over.** At a towered airport the approach controller hands you to the tower, and the tower's instructions replace the advisories.

:::callout{type="decision"}
Flight following was terminated 15 nm from Monterey because the controller got busy, and the coastal haze is thickening ahead. Your decision point is now, not at the shoreline: do you continue toward a towered airport in lowering visibility, or turn back toward the clear valley you just left? The right answer depends on the numbers from [[l8-1-decision-making-and-personal-minimums]], and a turn back counts as a good flight.
:::

## In the sim

MSFS 2024's ATC menu offers flight following once you are airborne, usually under the nearest approach or center facility. The sim gives traffic calls for AI aircraft and live traffic, hands you between sectors, and terminates service near your destination. What it does not do is understand "negative contact" or "unable", so some rows above will be missing from the menu.

:::callout{type="sim"}
In sim-ATC mode, say every call out loud before you pick it from the menu, including the ones the menu does not offer. In self-voiced mode you say both sides from the challenge script. On an online network a real person answers, and the full conversation above is exactly what you will hear.
:::

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 ATC menu path for requesting flight following, whether it issues altitude or heading assignments to VFR aircraft, and how it terminates service; record the sim version. Screenshot for the shot list: "ATC menu, flight following request airborne near KLVK".
:::

## Practice and next steps

Three things to carry forward:

1. The request is who, where, what and where to, and "radar contact" is not a clearance.
2. Answer every traffic call honestly: "looking", "in sight" or "negative contact".
3. Read back altitudes, headings and frequencies, and never leave a frequency without being released.

**Practice.** This lesson feeds the `radio-phraseology` flashcard deck: the request, the traffic responses and the termination phrases.

**Fly it.** Challenge C15.2 "Flight following to Monterey" starts at Livermore and scores your request, your readbacks, your answers to two traffic calls and the handoffs on the way to the coast.

**Next.** [[l15-3-light-gun-signals-lost-comms-and-special-vfr]] covers the day the radio stops working.
