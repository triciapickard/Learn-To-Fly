---
slug: l4-4-go-arounds
code: L4.4
module: m4-takeoffs-patterns-landings
order: 4
priority: P0
title: Go-arounds
summary: When a landing isn't working, go around — early, confidently and in the right order.
estimatedMinutes: 10
prerequisites: [l4-3-normal-approach-and-landing]
objectives:
  - Decide early and fly a go-around without hesitation.
  - Apply the go-around sequence of power, attitude and clean-up.
challenges: [c4-4-go-around]
resources: [afh-ch9]
published: false
lastVerifiedAt: null
simVersion: null
---

## A normal maneuver

A **go-around** means abandoning a landing and climbing away to try again. It's not a failure. Airline pilots do them routinely, and the pilots who have accidents are usually the ones who tried to save a bad approach instead of going around.

Decide **early**. The later you decide, the less room you have.

## When to go around

- The approach **isn't stabilized** at 300 ft.
- The **runway is occupied** by another airplane or a vehicle.
- You **bounce** on landing.
- The tower tells you to.
- **Anything** doesn't feel right.

## The sequence: power, attitude, clean-up

1. **Power.** Full power, immediately. Add right rudder.
2. **Attitude.** Raise the nose to the climb attitude. Speed should be around {{vspeed.goAround}} to begin with.
3. **Flaps to 20°** right away, to reduce drag.
4. **Positive climb.** Once you're climbing and the speed is increasing, **flaps to 10°**.
5. **Flaps up** once you're clear of obstacles at a safe altitude and speed.

::checklist{slug="go-around"}

:::callout{type="verify"}
Author note: check this sequence against the in-sim balked-landing checklist for the G1000 Skyhawk.
:::

:::quiz{id="l4-4-q1" type="single"}
What's the first action in a go-around?

- [x] Full power
- [ ] Flaps up
- [ ] Raise the nose
- [ ] Radio call

---

**Full power** first. Everything else depends on having the power to climb.
:::

:::quiz{id="l4-4-q2" type="single"}
Why not raise the flaps from 30° to 0° all at once?

- [ ] It would damage the flaps
- [x] The sudden loss of lift makes the airplane sink
- [ ] The flap motor is too slow
- [ ] The stall horn would sound

---

Raising all the flaps at once takes away a lot of **lift** close to the ground, and the airplane **sinks**. Raise them in stages as the speed builds.
:::

## Where to fly

At a non-towered airport, **side-step** slightly to the side of the runway (usually the right side for a left pattern) as you climb. That lets you see any airplane departing below you. Then rejoin the pattern on crosswind.

Watch the go-around in the traffic pattern animation below: press **Go around**.

::widget{name="traffic-pattern" calls="true"}

## The radio call

At a non-towered airport, tell everyone:

> "Livermore traffic, Skyhawk 123, going around, runway 25 Right."

At a towered airport, the tower may tell you to go around, or you tell them: "Livermore Tower, Skyhawk 123, going around."

## Common errors

- **Forgetting right rudder** as full power comes in.
- **Pitching too high** with full flaps still out: the airspeed drops and the stall horn sounds.
- **Retracting all the flaps at once**, so the airplane sinks.

Practice it in [[c4-4-go-around]].
