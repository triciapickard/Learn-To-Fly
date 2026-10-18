---
slug: l18-3-clearances-and-departures
code: L18.3
module: m18-ifr-system
order: 3
priority: P0
title: Clearances and departures
summary: Copy and read back an IFR clearance with CRAFT, then brief the takeoff minimums, obstacle departure procedure and climb gradient before you roll.
estimatedMinutes: 25
prerequisites: [l18-2-ifr-charts-and-the-approach-plate]
objectives:
  - Copy an IFR clearance in CRAFT shorthand and read it back with every element.
  - Brief an obstacle departure procedure and takeoff minimums from the d-TPP.
  - Explain what a void time and "released" mean at a non-towered airport.
  - Convert a climb gradient in feet per nautical mile into a rate of climb.
challenges: []
resources: [aim-5, iph-departures, faa-dtpp, ecfr-91-175]
published: false
lastVerifiedAt: null
simVersion: null
---

## The IFR clearance

A VFR flight starts when you decide to go. An IFR flight starts when ATC says "cleared to". From that moment ATC knows where you are going, which way, how high, and which code your transponder will show. Your job is to copy that clearance, read it back word for word, and fly it as given.

The controller says it fast, and only once unless you ask. Pilots copy it with a five-letter shorthand called **CRAFT** and a pen already in hand.

:::callout{type="real-world"}
In a real airplane, you practice copying clearances with an instructor, with the engine running and the ATIS just copied, and you fly the departure procedure over real terrain. The shorthand here is the real thing. The terrain is the reason real pilots brief every departure before asking for the clearance.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## How a clearance reaches you

Where you get the clearance depends on the airport:

| Airport                                           | Who gives it                                                         | What happens next                                                                |
| ------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Towered, with clearance delivery                  | Clearance delivery, before you call ground                           | Read back, then call ground for taxi as in [[l7-3-towered-airports-and-sim-atc]] |
| Towered, no clearance delivery (KLVK)             | Ground control                                                       | Same, in one call                                                                |
| Non-towered                                       | Flight service or the ATC facility by phone or a remote radio outlet | You get a **release** with a **void time**                                       |
| In the air (picking up IFR after a VFR departure) | The approach or center controller                                    | A shorter clearance, usually starting with "cleared to" and an altitude          |

At a non-towered airport nobody can see you take off, so ATC protects the airspace for a window of time. "**Released** at 1520, clearance void if not off by 1530; if not off by 1530, advise no later than 1600 of intentions" means you may depart between 1520 and 1530. After 1530 you may no longer depart IFR. The flight plan stays on file, but you need a new release. If you have not called by 1600, ATC treats you as overdue and starts a search. That deadline is never more than 30 minutes after the void time. "**Hold for release**" means you have the clearance but may not take off yet.

At Livermore the tower has no separate clearance delivery frequency. With the tower open, ground control gives the clearance. When it is closed, you telephone NorCal Approach at the number in the Chart Supplement. In the sim, MSFS 2024's ATC gives IFR clearances from the menu after you file in the world map. On VATSIM a delivery or ground controller gives it by voice ([[l15-5-flying-on-vatsim]]).

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 menu path for IFR clearances with the sim version. Desk-verified 2026-10-13: clearance paths and void-time wording against AIM 5-2-3 and 5-2-7 and the Pilot/Controller Glossary. KLVK arrangement (ground 121.6, phone NorCal when the tower is closed) against the Chart Supplement data on AirNav.
:::

:::quiz{id="l18-3-q1" type="single"}
Your clearance from a non-towered airport ends "clearance void if not off by 1530". It is 1535 and you are still on the ground. What is true?

- [ ] You may still depart as long as you stay below 3,000 ft
- [x] Your authority to depart IFR has expired; call ATC for a new release before departing IFR
- [ ] You may depart VFR and pick up the same clearance in the air
- [ ] The clearance is valid until 1600

---

After the void time you may not depart IFR, because ATC may have released other traffic into the airspace. The flight plan itself is still on file, so call for a new release. The 1600 time is the deadline for telling ATC your intentions, not an extension.
:::

## CRAFT

Every IFR clearance has the same five parts in the same order. Write the letters down your kneeboard before you call, then fill the blanks as the controller speaks:

- **C**: Clearance limit, usually the destination airport.
- **R**: Route, which may be a departure procedure, fixes and airways, or "as filed".
- **A**: Altitude, both the initial altitude and the one to expect later.
- **F**: Frequency for departure control.
- **T**: Transponder, the squawk code.

Here is a worked example. The clearance, the callsign and the frequency are invented for teaching.

| Letter | What you hear                                                             | What you write       | What you read back                                     |
| ------ | ------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------ |
| C      | "Skyhawk 172LF is cleared to the Monterey Regional Airport"               | `C: MRY`             | "Cleared to Monterey"                                  |
| R      | "via radar vectors to the first fix in your filed route, then as filed"   | `R: RV first fix AF` | "radar vectors to the first fix, then as filed"        |
| A      | "climb and maintain 3,000, expect 7,000 one zero minutes after departure" | `A: 3000 / 7000 10`  | "climb and maintain 3,000, expect 7,000 in 10 minutes" |
| F      | "departure frequency 123.45"                                              | `F: 123.45`          | "departure 123.45"                                     |
| T      | "squawk 4521"                                                             | `T: 4521`            | "squawk 4521, Skyhawk 172LF"                           |

The **readback** is the whole thing, in order, ending with your callsign. If a letter is blank when the controller stops, ask: "Skyhawk 172LF, say again the route". One "say again" is normal. Never guess.

Read back the "expect" altitude too. It is the altitude you climb to if you lose radio contact ([[l18-5-enroute-ifr-and-lost-communications]]).

:::callout{type="verify"}
Widget pending: Widget W32 (Radio Readback Trainer) in clearance mode is embedded here once Phase 20 ships it: `::widget{name="radio-readback" mode="clearance"}`. Until then the table is the walkthrough and Challenge C18.1 "Copy a clearance" uses W32 directly. Clearance structure and readback desk-verified 2026-10-13 against AIM 4-4-3, 4-4-7 and 5-2-6. 123.45 is not a NorCal sector frequency (squawks are assigned dynamically, so the example stays labelled fictional).
:::

:::quiz{id="l18-3-q2" type="order"}
Put the parts of an IFR clearance in the order ATC gives them.

1. Clearance limit
2. Route
3. Altitude
4. Frequency
5. Transponder

---

CRAFT: Clearance limit, Route, Altitude, Frequency, Transponder. Writing the letters down before the call means you only have to fill blanks.
:::

## Obstacle departure procedures and takeoff minimums

The MEA protects you once you are on the airway. The **departure procedure** covers the gap between the runway and the airway. Big airports publish graphic SIDs. Smaller ones publish an **obstacle departure procedure** (ODP). It is usually a few lines of text in the "Takeoff Minimums and (Obstacle) Departure Procedures" section at the front of the d-TPP, and sometimes a separate chart with "(OBSTACLE)" in its title. The "T" triangle on the plate ([[l18-2-ifr-charts-and-the-approach-plate]]) points to that section, and the section tells you which kind you have. Livermore's entry says "Use LIVERMORE DEPARTURE". Its ODP is the graphic LIVERMORE THREE DEPARTURE (OBSTACLE).

An ODP has up to three parts. Here is Livermore's, paraphrased from the October 2026 cycle as an example and not for navigation:

| Part                   | What it says                                                                         | How you brief it                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Takeoff minimums       | A ceiling and visibility, or "standard", per runway, sometimes with a climb gradient | "Runways 25L and 25R: standard, with a minimum climb of 295 ft per nm to 3,400 ft, or 2,900 and 3 for a visual climb over the airport" |
| Takeoff obstacle notes | The obstacles near each runway end, with their height and distance                   | "Runway 25R: a sign, fences and trees from the departure end outward, the tallest trees about 60 ft above the runway end"              |
| Departure route        | A heading, altitude and turn to join the route or reach an altitude                  | "Runways 25L and 25R: climb heading 255° to 1,200 ft, then a climbing right turn heading 020° to join the Oakland 060 radial to ALTAM" |

For a Part 91 flight like yours, published takeoff minimums are legally advisory. For airlines they are mandatory. Learn to Fly treats them as mandatory, because they exist where something near the runway is tall enough to hit.

ATC does not usually assign an ODP. You fly it on your own unless the clearance gives a heading or a SID instead. If the ODP has a route or a turn restriction, tell ATC you are flying it. If "fly heading 250" conflicts with the ODP, say so before you take off.

:::callout{type="verify"}
Sim check: confirm the LIVERMORE THREE DEPARTURE (OBSTACLE) is in the sim's nav database (PROC, Select Departure) for Challenge C18.3. Desk-verified 2026-10-13: ODP, takeoff minimums and obstacle notes paraphrased from d-TPP cycle 2610 (effective 1–29 Oct 2026); Part 91 status against 14 CFR 91.175(f); ODP handling against AIM 5-2-9.
:::

:::quiz{id="l18-3-q3" type="multi"}
Which of these are true about an obstacle departure procedure? Pick all that apply.

- [x] It is printed in a separate section of the d-TPP, not on the approach plate
- [x] You fly it without an ATC instruction unless ATC gives you a heading or a SID instead
- [ ] It only applies to airlines
- [x] Learn to Fly's IFR challenges require you to fly it as published

---

ODPs are in the takeoff minimums section of the d-TPP, as text or as their own "(OBSTACLE)" chart, and never on the approach plate. Pilots fly them on their own initiative. Takeoff minimums are legally advisory for Part 91 flights, but the ODP protects you from obstacles on any flight, and Challenge C18.3 scores it as a required item.
:::

## Climb gradients

"Minimum climb of 300 ft per nm" is distance, not time. Your vertical speed indicator shows feet per minute. To compare them you need groundspeed:

> **Rate of climb (fpm) = gradient (ft per nm) × groundspeed (kt) ÷ 60**

The standard gradient, assumed when nothing is printed, is **200 ft per nm**. In the Skyhawk at a typical climb groundspeed of 75–90 kt:

| Gradient      | At 75 kt groundspeed | At 90 kt groundspeed |
| ------------- | -------------------- | -------------------- |
| 200 ft per nm | 250 fpm              | 300 fpm              |
| 300 ft per nm | 375 fpm              | 450 fpm              |
| 400 ft per nm | 500 fpm              | 600 fpm              |

Livermore's 295 ft per nm off runway 25R is 369 fpm at 75 kt and 443 fpm at 90 kt. A tailwind means a faster groundspeed and a faster required climb. The Skyhawk climbs well over 600 fpm on a cool day at sea level. On a hot day at a high airport, the required rate can be more than it can climb. [[l9-1-density-altitude-and-performance]] and [[l13-3-high-elevation-airport-operations]] cover that case.

:::callout{type="decision"}
The ODP asks for 400 ft per nm, your groundspeed will be 85 kt, and today's density altitude gives you 450 fpm at {{vspeed.vy}}. You need 567 fpm, so you cannot use this runway today. Wait for the wind, lighten the airplane, or depart another way. Make that decision on the ground, before you take off.
:::

:::quiz{id="l18-3-q4" type="numeric" answer="450" tolerance="10" unit="fpm"}
The departure procedure requires 300 ft per nm. Your groundspeed in the climb will be 90 kt. What rate of climb do you need?

---

300 × 90 ÷ 60 = 450 fpm.
:::

## Briefing the departure

Before asking for the clearance, brief the departure out loud from the d-TPP page and the clearance you expect:

1. **Runway and initial heading.** Which runway, and what the ODP or clearance says to do first.
2. **Initial altitude.** The "climb and maintain" number, set in the altitude preselect.
3. **The ODP.** Any turn restriction or climb gradient, and whether today's performance meets it.
4. **Departure frequency and squawk.** Set as standby and in the transponder before takeoff.
5. **Lost communications.** The expected altitude and route you would fly without a radio.
6. **Emergency return.** Which approach you would fly back if the engine runs rough after takeoff into cloud.

The brief takes 1 minute. It turns the clearance into a plan you can fly. Challenge C18.3 "IFR departure and enroute" expects to hear it.

## Practice and next steps

To carry forward: write C-R-A-F-T down before the call; the ODP is in the d-TPP, not on the plate; and gradient × groundspeed ÷ 60 turns feet per mile into feet per minute.

**Practice.** This lesson feeds the `ifr-rules` and `radio-phraseology` flashcard decks: the CRAFT letters, void-time wording, the standard 200 ft per nm gradient and the readback rules.

**Fly it.** Challenge C18.1 "Copy a clearance" is a 10-minute drill with no sim: five clearances, five readbacks. Challenge C18.3 "IFR departure and enroute" flies the departure after [[l18-5-enroute-ifr-and-lost-communications]].

**Next.** [[l18-4-the-g1000-nxi-and-gfc-700-for-ifr]] puts the clearance into the airplane: the flight plan, the procedures and the autopilot that will fly them.
