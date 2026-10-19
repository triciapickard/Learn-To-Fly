---
slug: l12-3-night-operations-preflight-to-landing
code: L12.3
module: m12-night-flying
order: 3
priority: P0
title: 'Night operations: preflight to landing'
summary: 'Fly the pattern you already know, in the dark: lights by phase, the black climb-out, a wider pattern, the flare, and the rule that keeps night pilots current.'
estimatedMinutes: 25
prerequisites: [l12-2-aircraft-and-airport-lighting]
objectives:
  - Complete a night preflight and taxi with the correct lights for each phase.
  - Fly a night takeoff and pattern using the attitude indicator through the black climb-out.
  - Land at night with and without the landing light, using the runway edge lights to judge the flare.
  - State the night currency rule and explain why it exists.
challenges: []
resources: [afh-ch11, ecfr-61-57, msfs-checklist, phak-ch17, faa-chart-supplement]
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

## Flying the pattern at night

Tonight you fly the Livermore pattern from [[l4-2-the-traffic-pattern]], and nothing about the airplane changes. {{vspeed.vr}} is still {{vspeed.vr}}. The pattern altitude is still about 1,400 ft MSL. What changes is what you can see, so the procedures change slightly. You use more lights, taxi slower, fly a wider pattern and run the checklist earlier. This lesson covers the whole flight, chock to chock, and ends with the night currency rule.

:::callout{type="real-world"}
In a real airplane, your first night pattern is with an instructor, at your home airport, on a clear night with a moon. A real night preflight means a cold ramp, a flashlight in your teeth and a fuel sample you cannot see the color of. Treat this lesson as the procedures and the sight pictures. The judgment of when a night is too dark, too hazy or too windy to fly comes from an instructor and from your own personal minimums ([[l8-1-decision-making-and-personal-minimums]]).
:::

## Flashlight and cockpit lighting

Start before you reach the airplane. Carry two flashlights, a bright white one for the preflight and a dim or red one for the cockpit. Keep the cockpit one where you can find it by feel. A headlamp counts. The preflight itself is the normal one from [[l3-1-preflight-and-engine-start]] with these additions:

- **Test every light.** Position, beacon, strobes, landing and taxi, with the master on, before you start. A dead position light grounds the flight. A dead landing light is a judgment call.
- **Fuel samples by flashlight.** Hold the sampler against the light to see color and any water line.
- **Set the cockpit before you start.** Panel brightness, flood lights and the G1000 display brightness all to the lowest level you can read, and the cockpit flashlight within reach.

| Phase               | Lights on                                     |
| ------------------- | --------------------------------------------- |
| Before start        | Position (nav), then beacon just before start |
| Taxi                | Position, beacon, taxi light                  |
| Entering the runway | Add strobes and landing light                 |
| Climb and cruise    | Position, beacon, strobes; landing light off  |
| Pattern and final   | Landing light back on                         |
| Clear of the runway | Strobes and landing light off, taxi light on  |

:::callout{type="classic"}
On a steam-gauge Skyhawk, the panel is lit by small post lights beside each instrument and a flood light under the glareshield, with separate dimmers for each. One burnt-out post light can leave an instrument unreadable, and then you need the flashlight. The G1000 NXi dims its screens with a photocell and its own brightness setting. Check that the setting is not stuck at daytime brightness.
:::

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 Skyhawk's cockpit lighting controls (panel, flood and glareshield dimmers; G1000 NXi display brightness and whether the photocell auto-dim is modeled) and the light switch names against the in-sim checklist, and record the sim version. Screenshot for the shot list: "panel lighting". Desk-verified 2026-10-13: the light-by-phase table matches AFH Chapter 11 and v2 Appendix B.2.
:::

## Taxi at night

Taxi slower at night. Distances are hard to judge, hold-short lines are hard to see, and you are relying on blue edge lights and lit signs rather than painted lines. Use these habits:

1. **Taxi light on, strobes off.** The taxi light shows you the pavement. Strobes on a dark ramp blind everyone around you.
2. **Walking pace.** If you have to brake hard to stop at a hold-short line, you were too fast. Use the airport diagram and confirm each sign against it, as in [[l3-2-taxiing-signs-and-markings]].
3. **Runway guard lights mean stop and think.** Alternating flashing yellow at a hold point means a runway is next. Do not cross without a clearance (towered) or a look and a call (non-towered).

At Livermore the tower closes at 9 p.m. local. After that the Class D lapses to Class G, the airport is non-towered and you make CTAF calls on the tower frequency, 118.1. The lights change too: the short runway's edge lights are off after hours, the long runway's sit at low intensity until you key 118.1, and the PAPIs stay on. A towered airport can be non-towered at night, so check the hours before you plan the flight.

:::callout{type="verify"}
Sim check: does sim ATC still answer at KLVK after 2100 local in MSFS 2024, and does the sim drop the Class D? Desk-verified 2026-10-13: tower 0700–2100 local, CTAF 118.1, Class D service hours then Class G, and the after-hours lighting, per the Chart Supplement SW.
:::

## Takeoff and the black climb-out

Line up on the centerline, note the runway heading on the HSI, and bring the strobes and landing light on. On the roll, use the runway edge lights to stay straight. They should slide past evenly on both sides. Rotate at {{vspeed.vr}} as usual.

After lift-off the ground disappears from view. The landing light shows nothing, the runway lights fall behind, and for the next minute you are an instrument pilot. **Transition to the attitude indicator the moment the wheels leave.** Pitch for {{vspeed.vy}}, confirm a positive rate on the VSI and the altimeter, keep the wings level on the attitude indicator, and fly runway heading until you are well clear of the ground. Do not turn below 500 ft AGL, and do not look outside for a horizon that is not there.

:::callout{type="safety"}
The **somatogravic illusion** can catch you on every night takeoff. As the airplane accelerates, your inner ear reads the push-back as a pitch-up, and the instinct is to lower the nose "back to level". In a real airplane, with no horizon, pilots have followed that instinct straight into the ground. The attitude indicator does not sense acceleration this way. Trust it, hold the climb attitude, and check the VSI.
:::

:::quiz{id="l12-3-q1" type="single"}
Just after lift-off on a dark night you feel the airplane pitching up steeply, but the attitude indicator shows a normal climb. What do you do?

- [ ] Lower the nose until the feeling goes away
- [x] Hold the climb attitude on the attitude indicator and confirm the climb on the VSI
- [ ] Turn crosswind early to find a horizon
- [ ] Level off and accelerate

---

The feeling is the somatogravic illusion, which mistakes acceleration for pitch-up. The instruments are right. Hold the attitude, confirm positive rate, and wait for the sensation to pass.
:::

## The night pattern

The pattern is the one you know, with these adjustments:

- **A little wider.** You cannot judge distance from the runway by the ground, so use the runway lights. On downwind the runway should sit about a third of the way up the wing strut, the same as by day. If in doubt, fly a touch wider to give yourself time.
- **Join at pattern altitude, and stay there.** Hold the pattern altitude until your normal descent point abeam the touchdown zone, even if you feel high. Feeling high at night usually means you are not.
- **Before-landing checklist earlier.** Run it on downwind before you are abeam the numbers, so your eyes are outside for the base and final turns.
- **Fly the PAPI on final.** Two white, two red, all the way down. If the runway has no PAPI, fly the same power and pitch as by day and watch the altimeter and VSI.

Night patterns often go wrong at the base turn. With no ground to see, pilots either overshoot final or descend too early. Pick your base turn by the runway lights (the threshold about 45° behind the wing) and keep the descent rate on the VSI where you would by day.

:::quiz{id="l12-3-q2" type="multi"}
Which of these change in a night pattern compared with a day pattern? Pick all that apply.

- [x] Fly it slightly wider so you have more time
- [x] Hold pattern altitude until the normal descent point even if you feel high
- [x] Run the before-landing checklist earlier on downwind
- [ ] Fly it closer and lower so you can see the runway better
- [ ] Land without flaps to keep the nose down

---

Wider, no early descent, and an earlier checklist are the night changes. Closer and lower invites the black-hole approach, and the landing configuration does not change at night.
:::

## The landing light and the flare

With the landing light on, final at night looks like a very dark day. The runway lights give you the aim point and the PAPI gives you the path. The light does not reach the runway until you are low. When the beam sweeps the pavement and you can suddenly see texture and the centerline, that is your cue to begin the roundout, just as the runway "spreading out" is by day.

Without the landing light (it fails, or you are practicing for the day it does), you fly the flare on the runway edge lights. On a normal approach they converge toward a point ahead. As you near the ground they appear to spread apart and rise up to your sides. Start the roundout when the far-end runway lights first seem to rise above the nose, hold the nose-high attitude, reduce the power slowly, and feel for the runway with small pitch and power changes. It may feel like you are waiting a long time. That is normal.

::widget{name="landing-sight-picture" mode="explore"}

:::callout{type="sim"}
The sim's landing light does illuminate the ground, so the "beam sweeps the pavement" cue works on screen. The no-landing-light variant in Challenge C12.1 asks you to switch it off on downwind of the third circuit and land on the edge lights alone. In the sim this is safe practice. In a real airplane it is a deliberate instructor exercise, never a solo one.
:::

:::callout{type="verify"}
Widget pending: W18 is used here in its night mode once the Phase 20 extension ships ("W18 (+night)", v2 Section 17); until then the default explore mode shows the day sight picture. Widget W27 (Airport Lighting Explorer) is also referenced from this lesson for the runway-light perspective view.
:::

:::callout{type="verify"}
Sim check: confirm how the MSFS 2024 landing light renders on the runway at the flare and record the sim version.
:::

## Night currency, and why it exists

The rules define "night" three ways, each for a different purpose:

| "Night" means…                                                       | Used for                           |
| -------------------------------------------------------------------- | ---------------------------------- |
| Sunset to sunrise                                                    | Position lights must be on         |
| End of evening civil twilight to beginning of morning civil twilight | Logging night time                 |
| 1 hour after sunset to 1 hour before sunrise                         | Night currency to carry passengers |

In plain language, the currency rule says that **to carry passengers at night, you must have made 3 takeoffs and 3 landings to a full stop within the preceding 90 days, at night (1 hour after sunset to 1 hour before sunrise), in the same category and class of airplane.** Touch-and-goes do not count, because each landing must be to a full stop.

The rule exists because the night landing is the most perishable skill in flying. The flare is a judgment of height from a few sliding lines of light, and that judgment fades within weeks. Three full-stop landings in 90 days is the regulator's estimate of how often you need to refresh it before you put someone else in the right seat. Learn to Fly's logbook tracks a sim version of the same rule so you build the habit of checking it before a night flight.

:::quiz{id="l12-3-q3" type="single"}
Which of these satisfies night currency to carry passengers?

- [ ] Three touch-and-goes after sunset in the last 90 days
- [x] Three takeoffs and landings to a full stop, at least 1 hour after sunset, in the last 90 days
- [ ] One night cross-country in the last 6 months
- [ ] Any three landings at night in the last 12 months

---

Three takeoffs and three landings to a full stop, in the preceding 90 days, between 1 hour after sunset and 1 hour before sunrise. Touch-and-goes do not count, and the window is 90 days, not 6 or 12 months.
:::

:::quiz{id="l12-3-q4" type="order"}
Put the lights in the order you turn them on for a night departure.

1. Position lights, before engine start
2. Beacon, just before engine start
3. Taxi light, before you move
4. Strobes and landing light, entering the runway

---

Position lights first so the airplane is visible on the ramp, beacon just before start as a warning that the engine is about to turn, taxi light to move, and strobes and landing light only when you enter the runway so you do not blind people on the ramp.
:::

## Practice and next steps

To carry forward:

1. Two flashlights, every light tested, and the cockpit dimmed before you start.
2. After lift-off, the attitude indicator is the horizon. Hold the climb and trust it.
3. Wider, no early descent, checklist earlier, PAPI all the way down, and flare on the edge lights.

**Practice.** This lesson feeds the `airspace-and-minimums` deck with the three definitions of night and the currency rule. The taxi and lighting cards live in `light-signals` from [[l12-2-aircraft-and-airport-lighting]].

**Fly it.** Challenge C12.1 "Night currency circuits" is three full-stop landings at Livermore at night, scored on your lights by phase, pattern altitude, the PAPI and where you touch down, with one landing without the landing light as a variant step. It is the same thing a real pilot does to stay current, and it is the gate to [[l12-4-night-cross-country-and-night-emergencies]].
