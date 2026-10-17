---
slug: l15-1-class-b-and-class-c-operations
code: L15.1
module: m15-advanced-airspace-atc
order: 1
priority: P0
title: Class B and Class C operations
summary: 'Flying into the busiest airspace in the Bay Area: what a Class B clearance sounds like, what Class C needs, the Mode C veil, and the routes that keep you out of the way.'
estimatedMinutes: 25
prerequisites: [l6-2-airspace, l7-3-towered-airports-and-sim-atc]
objectives:
  - Request a Class B clearance and recognize the exact words that grant it.
  - Enter Class C airspace correctly by establishing two-way radio communication.
  - Use VFR flyways and published transition routes to cross the Bay Area without a clearance, or with one.
challenges: []
resources: [aim-3, faa-sf-tac, ecfr-91-130, ecfr-91-131]
published: false
lastVerifiedAt: null
simVersion: null
---

## The wedding cake over the bay

In [[l6-2-airspace]] you learned to read the upside-down wedding cake of the San Francisco Class B and to fly underneath its shelves. That is how most Bay Area pilots fly most of the time. But sooner or later you will want to go _through_ it: across the bay to the coast, over Oakland to the East Bay, or into San Jose itself.

The airspace around SFO, OAK and SJC exists because airliners are climbing and descending through it at 250 knots. ATC needs to know where every airplane is, including yours. This lesson teaches you the two conversations that get you in: the Class B clearance and the Class C check-in. They sound similar, but the rules behind them differ.

:::callout{type="safety"}
Entering Class B without a clearance is one of the most common pilot deviations in the country. Never cross the solid blue line until you have heard "cleared into the Class Bravo airspace" (or "cleared through", or "cleared to enter") with your call sign.
:::

## The rules, in plain words

Class B and Class C each have a regulation that says who may enter and with what equipment. In short:

| Requirement              | Class B (SFO)                                                                        | Class C (OAK, SJC)                                        |
| ------------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Before you enter         | An **explicit ATC clearance**                                                        | **Two-way radio communication** established with ATC      |
| Pilot certificate        | Private pilot, or a student with an endorsement (never a student solo at SFO itself) | Any pilot certificate                                     |
| Transponder              | Mode C (altitude reporting) and ADS-B Out                                            | Mode C (altitude reporting) and ADS-B Out                 |
| Two-way radio            | Required                                                                             | Required                                                  |
| Speed limit              | 250 KIAS inside; 200 KIAS under the shelves                                          | 200 KIAS within 4 nm of the airport at or below 2,500 AGL |
| VFR weather minimums     | 3 sm visibility, clear of clouds                                                     | 3 sm visibility, standard cloud clearances                |
| Departing a nearby field | Contact ATC before entering                                                          | Contact ATC as soon as practical after takeoff            |

The Skyhawk cannot reach any of these speed limits, so the rows that matter to you are the first three. The transponder rule reaches beyond the airspace itself, as the Mode C veil section below explains.

## "Cleared into the Class Bravo" versus "remain clear"

A Class B clearance is a specific sentence. Everything else the controller says, including answering you by call sign, is not a clearance. Here is the conversation when you want to cross the bay from Hayward toward Half Moon Bay:

| You say                                                                                                                                                                     | They say                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "NorCal Approach, Skyhawk One Two Three, request Class Bravo transition."                                                                                                   | "Skyhawk One Two Three, NorCal Approach, go ahead."                                                                                                                   |
| "Skyhawk One Two Three, a Cessna one seventy-two, over Hayward at two thousand five hundred, request transition westbound to Half Moon Bay at three thousand five hundred." | "Skyhawk One Two Three, squawk four five two one, **remain clear of the Class Bravo airspace**."                                                                      |
| "Squawk four five two one, remain clear of the Bravo, Skyhawk One Two Three."                                                                                               | (a minute later) "Skyhawk One Two Three, radar contact, **cleared into the Class Bravo airspace**, fly heading two seven zero, maintain three thousand five hundred." |
| "Cleared into the Bravo, heading two seven zero, three thousand five hundred, Skyhawk One Two Three."                                                                       | "Skyhawk One Two Three, readback correct."                                                                                                                            |

Notice the middle row. You have a squawk code, the controller knows who you are, and you are still not cleared. If the line is coming up, turn or slow down and stay outside until you hear the clearance. "Stand by", "remain clear" and "squawk four five two one" all mean "not yet". The controller's rule book words it as "cleared to enter", "cleared through" or "cleared out of Bravo airspace". You will hear "cleared into the Class Bravo" most often, and all of them count.

Once inside, you fly the headings and altitudes you are given, and you do not leave them without asking. ATC is separating you from airliners now.

:::quiz{id="l15-1-q1" type="single"}
Which phrase allows you to enter Class B airspace?

- [ ] "Skyhawk One Two Three, NorCal Approach, squawk four five two one."
- [ ] "Skyhawk One Two Three, radar contact."
- [x] "Skyhawk One Two Three, cleared into the Class Bravo airspace."
- [ ] "Skyhawk One Two Three, stand by."

---

Only an explicit "cleared into the Class Bravo airspace" lets you cross the line. A squawk, "radar contact" or "stand by" means the controller knows you are there, and nothing more.
:::

:::callout{type="tip"}
Ask early. The best place to request a transition is 10 nm or more before the boundary, at an altitude that keeps you under the shelf while you wait. If the frequency is busy, a controller can only say "remain clear", and an early request gives you room to do that without a last-second turn.
:::

## Class C: two-way communication, and what counts

Class C is easier. Instead of a clearance, you need **two-way radio communication**. You have it the moment the controller answers you using your call sign. Some replies count and some do not:

| The controller says                                        | Established?              | What you do                                                      |
| ---------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------- |
| "Skyhawk One Two Three, NorCal Approach, go ahead."        | Yes                       | Give your details and continue inbound                           |
| "Skyhawk One Two Three, stand by."                         | Yes                       | You may enter; wait for the controller to come back to you       |
| "Aircraft calling NorCal Approach, stand by."              | No                        | Stay outside the Class C; call again when the frequency is quiet |
| "Skyhawk One Two Three, remain outside the Class Charlie." | Yes, but told to stay out | Hold outside, as instructed                                      |
| No answer at all                                           | No                        | Stay outside; check the frequency and try again                  |

The second row surprises people. If the controller uses your call sign and says "stand by", communication is established, and you may enter unless told otherwise. If the reply leaves out your call sign, it is not.

The call itself is the four-part call from [[l7-1-radio-basics-and-the-phonetic-alphabet]], with your intentions and the ATIS letter: "NorCal Approach, Skyhawk One Two Three, over Livermore at three thousand five hundred, inbound to Oakland with information Delta." Inside Class C the controller will give you a squawk code, probably an altitude, and later a handoff to the tower.

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against AIM 3-2-4 (call sign plus "standby" establishes communication; a reply without your call sign does not) and AIM 3-2-3 (Class B needs the clearance regardless). Still open: does MSFS 2024 ATC answer a Class C check-in this way, and does it hold you outside Class B until an explicit clearance? If not, add a sim callout.
:::

:::quiz{id="l15-1-q2" type="single"}
What do you need before entering Class C airspace?

- [ ] An explicit clearance containing the words "cleared into the Class Charlie"
- [x] Two-way radio communication: the controller has answered using your call sign
- [ ] A squawk code and the words "radar contact"
- [ ] A VFR flight plan on file

---

Class C needs two-way radio communication, which exists as soon as the controller answers you with your call sign. A clearance is the Class B rule. A flight plan is never required.
:::

## The Mode C veil

Draw a 30 nm circle around SFO and you have the **Mode C veil**. Inside it, from the surface up to 10,000 ft MSL, every airplane needs a transponder that reports altitude (Mode C) and ADS-B Out, even when it never touches the Class B itself. Livermore, Tracy, Half Moon Bay and Palo Alto are all inside the veil. So is every flight in this course.

The sectional and the TAC show the veil as a thin, solid magenta circle. In the Skyhawk the rule costs you nothing. The transponder is on ALT and the G1000 broadcasts from the moment you take off. The rule matters when you fly a different airplane, or when the transponder fails. If the transponder fails inside the veil, ask ATC for a deviation before you fly.

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against 14 CFR 91.215(b)(2), 91.225(d)(2) and Part 91 Appendix D Section 1 (SFO listed; OAK and SJC not). Still open: how the MSFS 2024 Skyhawk transponder behaves (ALT vs ON vs STBY vs GND) and whether sim ATC enforces the veil at all.
:::

:::quiz{id="l15-1-q3" type="single"}
You are flying from Livermore to Tracy, well below and outside the SFO Class B. Do you need an altitude-reporting transponder?

- [x] Yes: both airports are inside the 30 nm Mode C veil
- [ ] No: you never enter Class B
- [ ] Only if you climb above 3,000 ft MSL
- [ ] Only if you talk to NorCal Approach

---

The Mode C veil covers a 30 nm radius around SFO up to 10,000 ft MSL, whether or not you enter the Class B. Both Livermore and Tracy are inside it.
:::

## SFO's shelves

Use the profile below to walk the route from Half Moon Bay across to Tracy. Slide the airplane along the route and change its altitude. Find the point where you can climb no higher without a clearance, and the point where the Class B ends and the Oakland Class C begins.

::widget{name="airspace-profile" mode="explore"}

These habits keep you out of the Class B while you fly under the shelves:

- **Know your floor before you climb.** A shelf labeled 60/30 starts at 3,000 ft MSL. Climbing to 3,500 ft to clear a cloud puts you inside the Bravo without a clearance. Plan the altitude, then set it on the G1000 altitude bug.
- **Watch the altimeter setting.** Under a 3,000 ft floor with a stale altimeter setting, you can be 200 ft higher than you think. Get the setting from the ATIS of the nearest airport, or from the controller.

:::callout{type="sim"}
MSFS 2024 draws no airspace on the ground, so your only warnings are the chart and the G1000 MFD map, which shows Class B and C boundaries as colored lines. Zoom the map in and keep the airplane symbol clear of the blue lines unless you have the clearance.
:::

## VFR flyways and published transitions

The FAA offers two kinds of help for crossing a busy terminal area:

| Route                    | Where you find it                                    | Clearance needed? | What it gives you                                                                            |
| ------------------------ | ---------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------- |
| **VFR flyway**           | The VFR Flyway Planning Chart on the back of the TAC | No                | A recommended path and altitude _around and under_ the Class B, away from the airliner flows |
| **VFR transition route** | Drawn on the TAC itself (and on the flyway chart)    | Yes               | A published path _through_ the Class B that ATC can clear you on with one short call         |

A flyway is advice. It is a route other pilots use that keeps you under the shelves and clear of the busy corridors. A transition route shortens the clearance process. You ask for it by name, and the controller already knows the path. Either way, you still read the chart and fly the altitude yourself.

On the San Francisco TAC the transition routes are the Bay Shore, Pacifica and Coastline VFR transition routes, each marked "ATC clearance required, altitude assigned by ATC". The Bay Shore route runs along the bayshore over SFO from Hunters Point to the San Mateo interchange. That is the busiest airspace in the region, so expect "remain clear" on a busy afternoon. On the flyway chart, the SE Bay Flyway runs along the East Bay shoreline "below 3,000" and continues "below 4,000" through Niles Canyon toward Livermore. The NE Bay Flyway crosses the hills toward Walnut Creek "below 4,000", then "below 5,000". Where a flyway passes through the Oakland Class C the chart says "alt ATC asgn", so you still need two-way communication there.

:::callout{type="verify"}
Author decision: desk-verified 2026-10-13 against the San Francisco TAC and VFR Flyway Planning Chart, edition 3 Sep 2026 (next 29 Oct 2026); route names and altitudes above are from that chart. Still open: design the Challenge C15.1 route after choosing a flyway or transition route, and take the shot-list screenshot "SF TAC flyway planning chart, SE Bay flyway (Not for navigation)".
:::

:::quiz{id="l15-1-q4" type="single"}
What is the difference between a VFR flyway and a VFR transition route?

- [ ] A flyway is for IFR traffic; a transition route is for VFR traffic
- [x] A flyway avoids the Class B and needs no clearance; a transition route goes through it and needs one
- [ ] They are two names for the same thing
- [ ] A flyway is faster because it has a higher speed limit

---

A flyway is a recommended path around and under the Class B, so you need no clearance. A transition route is a published path through the Class B, which still requires "cleared into the Class Bravo airspace".
:::

## Practice and next steps

To carry forward:

1. Class B needs the words "cleared into the Class Bravo airspace". Nothing else counts.
2. Class C needs two-way communication: your call sign in the controller's reply.
3. The Mode C veil reaches 30 nm from SFO, so your transponder is always on ALT.

**Practice.** This lesson feeds the `airspace-and-minimums` and `radio-phraseology` flashcard decks: the entry rule for each class, the veil, and the request and clearance phrases.

**Fly it.** Challenge C15.1 "Class Bravo transition" starts at Hayward, has you request a transition across the bay, and scores whether you stayed outside until you were cleared. It works with the sim's ATC, with an online network, or self-voiced from the script.

**Next.** [[l15-2-flight-following-and-working-approach-control]] stays on the same frequency and teaches flight following, the service that makes all of this routine.
