---
slug: l15-3-light-gun-signals-lost-comms-and-special-vfr
code: L15.3
module: m15-advanced-airspace-atc
order: 3
priority: P0
title: Light gun signals, lost comms and special VFR
summary: "What the tower's light gun is telling you, how to get home when the radio dies, and the clearance that lets you in under a low ceiling."
estimatedMinutes: 15
prerequisites: [l7-3-towered-airports-and-sim-atc]
objectives:
  - Interpret every light gun signal, both on the ground and in the air.
  - Follow the VFR lost-communications procedure at a towered airport.
  - State the special VFR rules and explain when you would and would not ask for one.
challenges: []
resources: [aim-4-3, aim-4-2, ecfr-91-157]
published: false
lastVerifiedAt: null
simVersion: null
---

## When the radio goes quiet

You are 10 nm east of Livermore, inbound, and the tower does not answer. You try again. Nothing. The COM radio shows the right frequency, the volume is up, and the silence is complete. In a real airplane this happens a few times in a flying career: a failed radio, a loose headset plug, a popped circuit breaker.

The tower has a plan for exactly this: a light gun, a hand-held lamp that fires a narrow beam of red, green or white light at one airplane. You need to know what each color means, how to get into position to see it, and how to acknowledge it. And, because low weather is the other classic way to get stuck outside a towered airport, this lesson ends with **special VFR**, the clearance that lets you in when the clouds are below the usual minimums.

## Light gun signals

The same six signals mean different things depending on whether you are on the ground or in the air. Learn both columns; the flashcard deck will drill them.

| Signal                        | On the ground                   | In the air                                        |
| ----------------------------- | ------------------------------- | ------------------------------------------------- |
| **Steady green**              | Cleared for takeoff             | Cleared to land                                   |
| **Flashing green**            | Cleared to taxi                 | Return for landing (a steady green follows later) |
| **Steady red**                | Stop                            | Give way to other aircraft and keep circling      |
| **Flashing red**              | Taxi clear of the runway in use | Airport unsafe, do not land                       |
| **Flashing white**            | Return to your starting point   | Not applicable                                    |
| **Alternating red and green** | Exercise extreme caution        | Exercise extreme caution                          |

A pattern helps: **green** means go, **red** means stop or stay away, **white** only exists on the ground, and **red and green together** means the tower is worried about something and wants your full attention.

You acknowledge a signal so the controller knows you saw it. In the air during the day, **rock your wings**. At night, **flash the landing light** or the navigation lights. On the ground, move the ailerons or rudder so the control surfaces visibly wiggle.

:::quiz{id="l15-3-q1" type="single"}
You are on downwind with a failed radio and the tower shows you a steady red light. What does it mean?

- [ ] Cleared to land
- [ ] Airport unsafe, do not land
- [x] Give way to other aircraft and continue circling
- [ ] Return to your starting point

---

In the air, **steady red** means give way to other traffic and keep circling. The tower will give you a steady green when it is your turn to land. Flashing red is the "do not land" signal.
:::

:::quiz{id="l15-3-q2" type="single"}
Holding short of the runway with a failed radio, you see a flashing green light. What does it mean?

- [ ] Cleared for takeoff
- [x] Cleared to taxi
- [ ] Stop
- [ ] Taxi clear of the runway

---

On the ground, **flashing green** is cleared to taxi. Takeoff needs a **steady** green. The difference between steady and flashing is the whole message, so watch for a few seconds before you decide.
:::

## Lost communications under VFR

First, make sure the radio really has failed. Most "radio failures" are a knob or a plug:

1. Volume up, squelch set, correct frequency in the **active** window, not standby.
2. Headset plugs fully in; try the other COM radio; try the hand microphone if there is one.
3. Check the circuit breakers and the audio panel selection.
4. Listen for the tower on the ATIS frequency or on a nearby airport's frequency to confirm the receiver works.

If it is really gone, the VFR procedure at a towered airport has four steps:

- **Squawk 7600.** The transponder tells every radar controller that you cannot talk.
- **Remain VFR.** Stay in visual conditions and outside the Class D until you have worked out the direction of traffic.
- **Enter the pattern.** Fly the normal pattern for the runway in use, which you can judge from the wind sock, other traffic or the ATIS if you can still hear it.
- **Watch the tower.** From downwind onward, keep looking at the tower cab for a light signal, and acknowledge each one.

If your transmitter works but your receiver does not, tell the tower your type, position, altitude and intention to land, ask to be controlled by light signals, and keep transmitting in the blind: 3 to 5 miles out, on downwind and on base. If your receiver works but your transmitter does not, listen: the tower may talk to you and ask you to acknowledge by rocking your wings.

:::callout{type="tip"}
The transponder is your voice now. Set 7600 _before_ you spend five minutes troubleshooting, then troubleshoot. Controllers see the code immediately, and nothing is lost if you fix the radio and switch back to 1200.
:::

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against AIM 4-2-13, AIM 6-4-2 (code 7600) and 14 CFR 91.129(d)(2). Still open: do MSFS 2024 towers show light gun signals at all? If not, Challenge C15.4 shows them as prompt cards on the Fly tab.
:::

:::quiz{id="l15-3-q3" type="order"}
Your radio fails 10 nm from Livermore. Put the steps in order.

1. Set the transponder to 7600
2. Stay in visual conditions outside the Class D and work out the runway in use
3. Enter the normal traffic pattern
4. Watch the tower for light signals and acknowledge them

---

Squawk 7600 first, so the controllers know. Then remain VFR outside the airspace while you work out the traffic flow, join the pattern, and fly it while watching the tower cab for the light gun.
:::

## Special VFR

The usual VFR minimums near a towered airport are 3 sm visibility, a ceiling of at least 1,000 ft, and 500 ft between you and the cloud above. On a Bay Area morning the marine layer can sit at 800 ft with 2 sm underneath, which is perfectly flyable and completely illegal under basic VFR.

**Special VFR** is an ATC clearance that lets you operate inside the surface area of Class B, C, D or E airspace with lower minimums:

| Rule               | Special VFR                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| Where              | Only within the surface area around an airport, with an ATC clearance  |
| Visibility         | At least 1 sm, in flight and on the ground for takeoff or landing      |
| Clouds             | Clear of clouds, no distance required                                  |
| Who asks           | **You.** ATC never offers it; you request it                           |
| At night           | Pilot must be instrument rated and the airplane IFR-equipped           |
| Where it is banned | Some busy Class B and Class C airports, marked "NO SVFR" on the chart  |
| Traffic            | ATC separates you from IFR traffic, so you may be told to wait outside |

The request is short: "Livermore Tower, Skyhawk One Two Three, one zero miles east, request special VFR to land." The clearance you want to hear is "cleared to enter the Livermore surface area, maintain special VFR conditions", sometimes with "at or below" an altitude. SFO is one of the "NO SVFR" airports; Oakland and San Jose are not.

:::callout{type="decision"}
Special VFR gets you the last 5 miles into an airport under a thin layer. It does not get you across the valley at 700 ft under an overcast. If the weather needs special VFR on the way _out_ of an airport, ask yourself where you will be when the clearance ends and the ceiling is still 800 ft. The pilot who stays on the ground, or asks for the clearance to come back and land, has made the better decision.
:::

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against 14 CFR 91.157, Part 91 Appendix D Section 3 (SFO listed; OAK and SJC not), AIM 4-4-6 and FAA Order 7110.65 7-5-3 (clearance phraseology). Still open: does MSFS 2024 ATC offer special VFR at all? If not, say so in a sim callout.
:::

:::quiz{id="l15-3-q4" type="single"}
Which of these is true of a special VFR clearance?

- [ ] ATC offers it automatically when the weather drops below VFR minimums
- [ ] It requires 3 sm visibility and 500 ft below the clouds
- [x] You must request it, and by day it needs 1 sm visibility and clear of clouds
- [ ] It applies everywhere within 30 nm of the airport

---

Special VFR is only available **on request**, only inside the airport's surface area, and by day it needs **1 sm visibility and clear of clouds**. At night it also needs an instrument-rated pilot in an IFR-equipped airplane.
:::

## Practice and next steps

Three things to carry forward:

1. Steady green is go, flashing red is get off or stay away, alternating red and green is danger.
2. Lost comms: 7600, remain VFR, enter the pattern, watch the tower, acknowledge by rocking your wings.
3. Special VFR is yours to request, 1 sm and clear of clouds by day, and only within the airport's surface area.

**Practice.** This lesson feeds the `light-signals` flashcard deck, one card per signal and column, plus the lost-comms steps.

**Fly it.** Challenge C15.4 "Radio failure at a towered airport" (P1) fails your COM radio on the way into Livermore and scores the squawk, the pattern entry and your response to each light signal.

**Next.** [[l15-4-readbacks-and-phraseology]] goes back to a working radio and polishes what you say on it.
