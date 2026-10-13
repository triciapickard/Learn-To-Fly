---
slug: l21-2-ifr-emergencies
code: L21.2
module: m21-instrument-capstone
order: 2
priority: P0
title: IFR emergencies
summary: 'When an IFR flight goes wrong in cloud: declare and get help, handle an alternator failure, fly a partial-panel approach and apply the lost-comms rules end to end.'
estimatedMinutes: 25
prerequisites:
  [
    l21-1-single-pilot-ifr-and-automation-management,
    l14-1-electrical-failures,
    l14-2-instrument-and-avionics-failures,
  ]
objectives:
  - Declare an emergency or request priority with the right words, code and frequency.
  - Handle an alternator failure in IMC by shedding load and choosing where to land before the battery runs out.
  - Fly an approach on partial panel using no-gyro vectors and the simplest approach available.
  - Apply the lost-communications rules for route, altitude and when to start the approach to a whole flight.
challenges: []
resources: [ifh-emergencies, aim-6, aim-5, pilot-controller-glossary, ecfr-91-185]
published: false
lastVerifiedAt: null
simVersion: null
---

## The same flight, three ways to go wrong

In [[l21-1-single-pilot-ifr-and-automation-management]] you planned KLVK to KMRY in cloud. This lesson flies that route three more times. First the alternator quits over the hills. Then the attitude indicator shows a red X on the approach. Then the radios go quiet. Each is a problem you know from Course 2, with the one thing that changes everything: you cannot look outside.

The fixes are mostly the ones from [[l14-1-electrical-failures]], [[l14-2-instrument-and-avionics-failures]] and [[l17-4-partial-panel-and-the-magnetic-compass]]. The new parts are the decisions: how soon to land, which approach to pick and how to get help.

:::callout{type="real-world"}
In a real airplane these emergencies are practiced with an instructor under a view-limiting device, never alone in real cloud, and instrument pilots fly recurrent training because the skills fade fast. A real electrical failure in cloud at night is one of the most dangerous situations in general aviation. Treat this lesson as a reason to keep real training current, not as a substitute for it.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Declaring an emergency and asking for help

In cloud you are not alone. ATC can see you, clear traffic out of your way, tell you where the nearest VMC is and talk you down with headings. Pilots delay asking because they fear paperwork. It is rare, and far easier than the alternative.

| You need                           | Say                                             | Set                                                                         | What ATC can do                                                 |
| ---------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Immediate help, danger to life     | "Mayday, Mayday, Mayday" then your call sign    | Your assigned code while ATC answers; 7700 if told to, or if nobody answers | Clear all traffic, vector you, alert the airport, stay with you |
| Help, but not yet life-threatening | "Pan-Pan, Pan-Pan, Pan-Pan" then your call sign | Keep your code unless told                                                  | Priority handling, vectors, weather, nearest suitable airport   |
| Nobody answers on your frequency   | Call on 121.5                                   | 7700                                                                        | Any station that hears you relays to ATC                        |

Then give the facts ATC needs, in this order: who you are (call sign and type), what is wrong, what you want, where you are and your altitude. Add fuel remaining in minutes and people on board if there is time. "Mayday, Mayday, Mayday, NorCal Approach, Skyhawk 123, alternator failure in cloud, request vectors to the nearest ILS, 15 miles north of Salinas at 6,000." Then fly the airplane and let them work.

In an emergency that needs immediate action you may deviate from any rule as far as the emergency requires. No permission and no declaration are needed for that authority; the FAA may ask you for a written report afterward. Tell ATC what you are doing anyway, so they can protect you. If you are not sure it is an emergency, say "Pan-Pan". You can always upgrade.

:::quiz{id="l21-2-q1" type="single"}
Your attitude indicator has failed in cloud. You are flying on the standby instruments but want ATC to know and to get priority handling. What do you say?

- [ ] Nothing yet; wait until it gets worse
- [x] "Pan-Pan, Pan-Pan, Pan-Pan", then your call sign, the problem, your position and your request
- [ ] "Mayday" only if you are below 1,000 ft
- [ ] Squawk 7600 and continue

---

Pan-Pan is the urgency call: you need help and priority, but life is not yet in immediate danger. Upgrade to Mayday if it gets worse. 7600 is for a radio failure.
:::

## Electrical failure in IMC

An alternator failure looks the same in cloud as in sunshine: a LOW VOLTS annunciation, a discharge on the ammeter and a battery that is now the only thing keeping the G1000 alive. You learned the flow in [[l14-1-electrical-failures]]. In cloud, three things change.

**Land soon.** In VMC you could fly home on the battery. In IMC you cannot. Every minute on the battery brings you closer to losing the screens keeping you upright. Go to the nearest airport with an approach you can fly, now. Not the destination, not the airport with cheap fuel.

**Shed load hard.** Turn off everything not keeping you flying, navigating or talking: the second COM and NAV, lights you do not need, pitot heat unless you are in icing. The sooner you shed, the longer the battery lasts.

**Know your battery time.** The main battery with a reduced load lasts a limited time, and the standby battery then keeps the essential instruments alive a little longer. That clock started when the alternator quit. Plan to be on the ground well inside it.

:::callout{type="memory"}
Alternator failure in IMC:

1. Verify: ALT switch on, ammeter and LOW VOLTS.
2. One reset: ALT off, then on. No recovery, ALT off.
3. Shed load: everything not needed to fly, navigate and talk.
4. Tell ATC: Pan-Pan, request the nearest approach.
5. Land as soon as practical, before the battery clock runs out.

:::

:::callout{type="verify"}
POH check: the alternator-failure flow and the reset order against the 172S POH Section 3 and the in-sim checklist; the main battery endurance with load shed and the standby battery minimum (the IFH gives only a rough 30–40 minutes for a main battery). Numbers go in `aircraft.yaml`, not here. Sim check: whether MSFS 2024 drains the battery with the ALT switch off (v2 Section 8.4, Week 6 sim notes).
:::

:::callout{type="sim"}
MSFS 2024 may not drain the battery after the ALT switch is turned off. If it does not, the challenge's event card still gives you a time limit, and you fly as if the clock were real. The habit matters more than the simulation.
:::

:::quiz{id="l21-2-q2" type="single"}
Alternator failure in cloud, 40 minutes from your destination and 12 minutes from an airport with an ILS. Where do you go?

- [ ] The destination; the approach there is already briefed
- [x] The airport 12 minutes away, after shedding load and telling ATC
- [ ] Climb to find VMC on top and continue
- [ ] Hold while you troubleshoot

---

In IMC the battery is your only source of flight instruments, and its time is limited. The nearest airport with a flyable approach wins. Troubleshooting is one reset, then you fly.
:::

## Partial panel in IMC

The second failure is a red X across the attitude and heading displays: the AHRS has failed. You learned to fly on the standby attitude indicator, standby airspeed and altimeter and the magnetic compass in [[l17-4-partial-panel-and-the-magnetic-compass]]. Two decisions make the difference in cloud.

**Ask for no-gyro vectors.** Tell ATC your heading indicator has failed and request a no-gyro vector or approach. The controller stops giving headings and says "turn left" and "stop turn" instead. You start a standard-rate turn the moment you hear "turn" and roll out on "stop turn"; once you are turned onto final, the controller tells you to make half-standard-rate turns. This takes the compass errors out of the problem.

**Choose the simplest approach.** Simple means vertical guidance, a long runway, straight-in, and the best weather within reach. An ILS or LPV to a long runway beats a VOR approach with a circle every time, even 10 miles further away. If anywhere within reach is VMC, go there and land visually.

| Choice    | Prefer                                | Avoid                                  |
| --------- | ------------------------------------- | -------------------------------------- |
| Guidance  | ILS or LPV: one needle, one glidepath | Step-down non-precision approaches     |
| Alignment | Straight-in                           | Circling                               |
| Runway    | Long, with approach lights            | Short, unlit                           |
| Weather   | Highest ceiling within fuel range     | Minimums                               |
| Autopilot | Expect it to be unavailable; hand-fly | Trusting modes that depend on the AHRS |

:::callout{type="memory"}
AHRS or PFD failure in IMC:

1. Standby attitude indicator: wings level, pitch for the phase of flight.
2. Standby airspeed and altimeter: confirm the trend.
3. Compass for heading; timed turns at standard rate.
4. Tell ATC: Pan-Pan, request no-gyro vectors to the simplest approach.
5. Hand-fly; do not rely on the autopilot.

:::

:::callout{type="verify"}
Desk-verified 2026-10-13: AIM 5-4-11 and the P/CG confirm "turn left/right", "stop turn", standard-rate turns started immediately, and half standard rate once on final. Sim check: does the sim's GFC 700 disconnect when the AHRS fails, and does sim ATC offer no-gyro vectors (if not, this is a self-voiced or online-network item)? Confirm the standby attitude indicator type in the sim's 172S (electric or vacuum), v2 Section 8.4.
:::

:::quiz{id="l21-2-q3" type="single"}
On a no-gyro approach the controller says "turn left". What do you do?

- [ ] Ask for the heading
- [x] Roll into a standard-rate left turn now and keep turning until "stop turn"
- [ ] Turn left 10°
- [ ] Turn left until the compass stops swinging

---

No-gyro vectors replace headings with timed turns. Start a standard-rate turn on "turn left" (half standard rate on final) and roll out on "stop turn". The controller watches the radar and does the arithmetic.
:::

## Lost comms flight end to end

The third failure is the quietest: you call approach and nobody answers. [[l18-5-enroute-ifr-and-lost-communications]] gave you the rules. Here is a whole flight, so you can see how they connect.

You filed ALTAM, Modesto (MOD) and V111 to Salinas (SNS), 1 hour 10 minutes en route. The clearance: "Cleared to Monterey as filed, climb and maintain 4,000, expect 6,000 one-zero minutes after departure." The radios fail 8 minutes after takeoff, level at 4,000 in solid cloud, before you received the climb.

| Step               | Question                        | Rule                                                                  | What you do                                                                                                                                   |
| ------------------ | ------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Confirm         | Is it really lost comms?        | Try both radios, the last frequency, squelch, headset                 | Still nothing; squawk 7600                                                                                                                    |
| 2. VMC?            | Can you stay visual and land?   | VMC: remain VMC, land as soon as practicable                          | Solid cloud, so continue IFR                                                                                                                  |
| 3. Route           | Which route?                    | Assigned, Vectored, Expected, Filed                                   | "As filed": ALTAM, MOD, V111 to SNS                                                                                                           |
| 4. Altitude        | Which altitude on this segment? | Highest of assigned, MEA or expected, segment by segment              | 4,000 until 10 minutes after departure, then 6,000, the expected altitude. V111 MEAs MOD–SNS are 5,000 and 5,500, both lower, so 6,000 to SNS |
| 5. Clearance limit | When do you start the approach? | Leave the limit at the EFC time, or the ETA if none                   | The airport is not an approach fix: fly to SNS, where the approach begins, and start it at your ETA                                           |
| 6. Approach        | Which approach?                 | The one you would most expect, flown as published without a clearance | The ILS or LOC RWY 10R from SNS, as published; land                                                                                           |
| 7. On the ground   | Who do you call?                | Close the flight plan by phone                                        | Call the tower or Flight Service as soon as you are parked                                                                                    |

Look at step 4. Pilots often stay at the assigned altitude because that is what they were cleared to. The rule says you also climb to the altitude you were told to expect, once the time or fix you were given arrives, and never fly below the MEA. ATC protects airspace around you based on these rules, so follow them even when lower feels more comfortable. One trap: if the radios fail after that time has passed and ATC never gave you the climb, the expected altitude no longer applies; fly the higher of the assigned altitude and the MEA.

:::callout{type="memory"}
Lost comms in IMC:

1. Squawk 7600.
2. Route: Assigned, Vectored, Expected, Filed.
3. Altitude: the highest of assigned, MEA and expected, for each segment.
4. Start the approach at the EFC time, or at the ETA if there was none.
5. In VMC at any point: stay VMC and land as soon as practicable.

:::

:::callout{type="verify"}
Desk-verified 2026-10-13: every row checked against 14 CFR 91.185 and AIM 6-4-1 (including the clearance-limit timing and the "expected altitude no longer applies after the EFC time" note); V111 MEAs MOD–SNS taken from FAA NASR airway data effective 2026-10-01. Sim check: what sim ATC does when the COM volume is turned down, and whether 7600 has any effect in sim ATC, VATSIM and PilotEdge.
:::

:::quiz{id="l21-2-q4" type="numeric" answer="6000" tolerance="0" unit="ft"}
Lost comms in IMC. You were cleared to maintain 4,000 and told to expect 6,000 in 10 minutes; the radios failed before that time and it has now passed. The MEA on your current segment is 5,000. What altitude do you fly?

---

The rule is the highest of the assigned altitude (4,000), the MEA (5,000) and the expected altitude (6,000). That is 6,000 ft.
:::

## The stage check and the lost-comms challenge

Two challenges finish Course 3.

**Challenge C21.1 "Instrument stage check"** is the Course 3 checkride. From one brief, you copy a clearance, fly a departure, hold, fly the first approach by hand on partial panel after a failure event, go missed, then fly a second approach coupled to the autopilot and land. There is a 30% chance the alternator quits on the second approach. It is scored on the clearance, tracking, the hold, the partial-panel approach, the missed approach flow, your automation management and, above everything, never descending below DA or MDA without the runway environment. Silver or better earns the "Skyhawk Instrument Foundations (Sim)" badge, which marks what you have done in the sim. It is not a real certificate and does not count toward one.

**Challenge C21.3 "Lost comms in IMC"** (P1) flies the C21.2 route with a two-way radio failure on the enroute leg: squawk 7600, choose the route by AVEF, fly the right altitude on each segment and fly the approach. It is the table above with you in the seat.

## Practice and next steps

Three things to carry forward:

1. Ask for help early: Pan-Pan or Mayday, then who, what, where and what you want. ATC can vector you, find VMC and talk you down.
2. In cloud, an electrical or instrument failure means landing soon at the simplest approach within reach.
3. Lost comms is a set of rules, not a guess: 7600, AVEF, highest altitude, approach at the EFC or ETA.

**Practice.** This lesson feeds the `memory-items` deck (the three memory callouts) and the `ifr-rules` deck (the lost-comms route and altitude rules).

**Fly it.** Challenge C21.1 "Instrument stage check" opens after this lesson, once every P0 challenge in Modules 17–20 is passed. Challenge C21.3 "Lost comms in IMC" is optional practice for the table above. Fill in your personal minimums from [[l21-1-single-pilot-ifr-and-automation-management]] before you fly either one.
