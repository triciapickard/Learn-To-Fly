---
slug: l10-3-soft-field-takeoffs-and-landings
code: L10.3
module: m10-advanced-takeoffs-landings
order: 3
priority: P0
title: Soft-field takeoffs and landings
summary: Keep the nose wheel light, lift off early, accelerate in ground effect and touch down as slowly as the airplane will fly.
estimatedMinutes: 15
prerequisites: [l4-1-normal-takeoff-and-climb, l4-3-normal-approach-and-landing]
objectives:
  - Fly a soft-field takeoff, lifting off at the lowest practical speed and accelerating in ground effect to Vx or Vy.
  - Fly a soft-field landing with a nose-high touchdown at minimum speed and the nose wheel held off.
  - Taxi on a soft surface without stopping, with the elevator held back.
challenges: []
resources: [afh-ch6, afh-ch9]
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

## Protecting the nose wheel

On a grass strip after a week of rain, the surface is soft and the grass is long and wet. A nose wheel that sinks an inch into it acts as a brake you cannot release. In every technique in this lesson, you **keep the weight off the nose wheel and keep the airplane moving**.

The same skills apply to a gravel strip, a snow-covered runway, and the paved runway where you practice for the real thing.

## What makes a field "soft" and why it matters

A soft field is any surface that resists the wheels rolling: wet grass, mud, soft dirt, snow, long grass or loose gravel.

| Effect                 | On takeoff                                                                                                  | On landing                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Rolling resistance     | Slower acceleration and a longer ground roll (dry grass adds roughly 15%; wet or long grass adds much more) | A shorter roll, but the airplane can slow so suddenly it pitches onto the nose |
| The nose wheel digs in | It drags, and on a rough surface it can be damaged                                                          | A firm nose-wheel touchdown can bury it or bend it                             |
| Bumps and ruts         | The airplane may lurch into the air before it is ready to fly                                               | A bounce off a rut can put you airborne at a very low speed                    |

The nose wheel is the weak point. The Skyhawk's nose gear is lighter than the main gear and it steers, so it takes damage first. Soft-field technique protects it from the first taxi to shutdown.

:::callout{type="verify"}
Sim check: record what the MSFS 2024 surface model does on grass (acceleration, bounce, stopping) from the Week 2 notes and the v2 Section 8.3 sim-data table. (Desk-verified 2026-10-13: the 172S POH takeoff chart notes add 15% of the ground-roll figure for a dry grass runway.)
:::

## Taxi: keep moving, elevator back

On a soft surface:

- **Full back elevator** (yoke fully aft) the whole time, to hold the nose wheel light. In a strong quartering tailwind, back elevator is the wrong input, so use the taxi table from [[l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]] and accept a heavier nose wheel.
- **Keep moving.** Once you stop in soft ground it can take a lot of power to get going again, and the blast throws stones into the propeller. Do the before-takeoff checks on firm ground, then taxi onto the runway and straight into the takeoff roll without a pause.
- **Taxi slowly** with as little braking as possible. The soft surface slows the airplane on its own.

## Takeoff: lift off early, accelerate in ground effect

| Step          | Action                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Configure  | Flaps 10°, for more lift at low speed                                                                                                   |
| 2. Roll on    | Yoke fully back as you turn onto the runway, then full power smoothly, without stopping                                                 |
| 3. Nose light | As the nose rises on its own, relax the back pressure just enough to hold a nose-high attitude with the nose wheel clear of the surface |
| 4. Lift-off   | Let the airplane fly off well below {{vspeed.vr}}, as the high angle of attack and ground effect allow                                  |
| 5. Stay low   | Lower the nose immediately and hold the airplane a few feet above the runway while it accelerates                                       |
| 6. Climb      | At {{vspeed.vx}} (or {{vspeed.vy}} with no obstacles), climb out. Flaps up once clear and accelerating                                  |

Ground effect is the cushion of air within about a wingspan of the surface. Near the ground the surface squashes the wingtip vortices, so the wing makes less induced drag. The airplane can fly, barely, at a speed that would not sustain it 50 ft up. If you climb out of ground effect at that low speed, the drag comes back. The airplane cannot accelerate, and it settles back onto the runway or stalls. So stay low in step 5 until you reach climb speed.

:::callout{type="verify"}
Sim check: confirm that the sim's Skyhawk lifts off early with full aft yoke and flaps 10° on a paved runway, record the typical lift-off speed, and take the shot-list screenshot "soft-field takeoff, nose-high roll, Tracy". (Desk-verified 2026-10-13: 172S POH Section 4 says soft or rough field takeoffs use 10° flaps, lifting off as soon as practical in a slightly tail-low attitude and leveling off immediately to accelerate; AFH Chapter 6 says stay in ground effect until at least Vx and retract flaps at Vy.)
:::

:::quiz{id="l10-3-q1" type="single"}
After a soft-field lift-off, why do you level off a few feet above the runway instead of climbing straight away?

- [ ] To check the engine gauges
- [x] To accelerate with less induced drag, in ground effect
- [ ] To retract the flaps before climbing
- [ ] To keep the nose wheel on the ground

---

You level off to accelerate with less induced drag. In ground effect the airplane flies at a speed that will not sustain it higher up. Stay low until you reach {{vspeed.vx}} or {{vspeed.vy}}, then climb.
:::

## Landing: slow, nose up, a little power

Touch down at the **slowest possible speed**, on the main wheels only, as gently as the airplane can manage. Then keep the nose wheel off as long as the elevator will hold it.

| Phase     | Soft-field technique                                                                                                    | How it differs from a normal landing                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Final     | Full flaps, {{vspeed.shortFieldApproach}}, the short-field speed, stabilized as in [[l4-3-normal-approach-and-landing]] | A few knots slower than {{vspeed.approach}}, because extra speed means float |
| Round-out | Start a little earlier and carry a touch of power into the flare                                                        | A normal landing is power-idle                                               |
| Flare     | Hold the airplane off, nose high, and let it settle onto the mains close to the stall                                   | A normal landing accepts a firmer, faster touchdown                          |
| Touchdown | Keep the yoke coming back and a little power to cushion it                                                              | Power is idle                                                                |
| Rollout   | Nose wheel held off until it drops on its own, with little or no braking                                                | Nose wheel down early, brakes as needed                                      |
| Taxi      | Keep moving, elevator back                                                                                              | Normal taxi                                                                  |

The little bit of power softens the touchdown and keeps the elevator effective at a lower speed, so the nose stays up longer. Pull it to idle only once the mains are rolling.

:::quiz{id="l10-3-q2" type="multi"}
Which of these are part of a soft-field landing? Pick all that apply.

- [x] Carry a little power through the flare and touchdown
- [x] Touch down on the main wheels at the lowest possible speed
- [x] Hold the nose wheel off during the rollout with back elevator
- [ ] Brake firmly as soon as the main wheels touch
- [ ] Lower the nose wheel immediately after touchdown to improve steering

---

Power, a slow touchdown and the nose held off. Firm braking and an early nose-wheel touchdown are the mistakes that damage an airplane on a soft surface.
:::

## Practicing on pavement and on grass

Most soft-field practice happens on a paved runway, because that is where the training airplane is based. The technique is the same. You fly as if the pavement were mud. Challenge C10.3 does this at Tracy. An instructor looks for these items in a good rehearsal:

- Rolled onto the runway without stopping, yoke back.
- Nose wheel light within the first few hundred feet of the roll.
- Lift-off below {{vspeed.vr}}, then level in ground effect until {{vspeed.vx}}.
- Touchdown with the stall warning sounding, nose high, with a little power.
- Nose wheel held off until the elevator ran out of authority.

A real grass strip gives slower acceleration, more bouncing and a faster stop. A P1 variant of C10.3 uses a grass strip in the region. In a real airplane you would walk the strip first, looking for holes, ruts and soft patches, and add a healthy margin to every performance number.

:::callout{type="sim"}
MSFS 2024 models runway surfaces, and grass slows the airplane on the ground. But the sim will not bend a nose wheel, bury a tire in mud or throw a stone through the propeller. Nothing in the sim punishes a sloppy soft-field landing, so C10.3 scores the technique instead: the lift-off speed, the time in ground effect and how long the nose stays up.
:::

:::callout{type="verify"}
Author decision: choose the grass strip for the C10.3 P1 variant and record its identifier here. Sim check: record the Week 2 findings on the MSFS 2024 surface model (rolling resistance on grass, any bounce on rough surfaces).
:::

:::quiz{id="l10-3-q3" type="single"}
You are taxiing across wet grass toward the runway. Where should the yoke be?

- [ ] Neutral, as on pavement
- [ ] Fully forward, to keep the nose wheel steering firmly
- [x] Fully back, to keep the nose wheel light
- [ ] Turned fully into the wind, with the elevator neutral

---

Hold the yoke fully back. On a soft surface the nose wheel is the weak point, and back elevator keeps the weight off it. (Adjust for a strong quartering tailwind, as in the taxi table.)
:::

## Practice and next steps

To carry forward:

1. Soft field means protect the nose wheel and keep moving.
2. Takeoff: flaps 10°, yoke back, lift off early, accelerate in ground effect, climb at {{vspeed.vx}} or {{vspeed.vy}}.
3. Landing: slowest possible touchdown, a little power, nose wheel held off.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck (the soft-field flap setting and the ground-effect rule).

**Fly it.** Challenge C10.3 "Soft-field takeoff and landing" runs the whole sequence at Tracy, from the ramp to the rollout. Next comes the opposite problem, a runway that is firm but short, in [[l10-4-short-field-mastery-and-obstacles]].
