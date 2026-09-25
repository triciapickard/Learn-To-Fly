---
slug: l5-1-slow-flight
code: L5.1
module: m5-slow-flight-stalls-emergencies
order: 1
priority: P0
title: Slow flight
summary: Fly the airplane slowly and under control — the same speed range you use on every takeoff, landing and go-around.
estimatedMinutes: 15
prerequisites: [l2-4-turns-and-coordination, l4-3-normal-approach-and-landing]
objectives:
  - Set up slow flight, just above the stall warning, while holding altitude.
  - Make gentle turns, climbs and descents in slow flight.
  - Recover smoothly to cruise flight.
challenges: [c5-1-slow-flight]
resources: [afh-ch5]
published: false
lastVerifiedAt: null
simVersion: null
---

## Why slow flight matters

Every takeoff, landing and go-around happens at low speed. **Slow flight** means flying at a speed just above where the stall warning would sound, so that any more angle of attack or load factor would trigger it. Practicing up high teaches you how the airplane feels down low: the controls go soft, and the airplane needs more rudder and more attention.

## Before you start

- **Altitude.** Practice high enough to recover from a stall with plenty to spare. In the challenges we use **3,000 ft above the ground** or higher.
- **Clearing turns.** Make two 90° turns (or one 180°) and look for traffic, especially below you, before you start.
- **A reference.** Pick a heading and a landmark on the horizon.

## Getting into slow flight

1. **Power to about 1,500 RPM.** The 172S is fuel-injected, so it has no carb heat to worry about.
2. **Raise the nose** gradually to hold altitude as the speed decreases.
3. **Flaps in stages**: 10° below {{vspeed.vfe10}}, then 20° and 30° below {{vspeed.vfe}}.
4. As the speed approaches **50–55 KIAS**, **add power** to hold both speed and altitude. It takes more power than you'd expect, often around 1,900–2,100 RPM.
5. **Trim** to take the pressure off.

:::callout{type="verify"}
Author note: check the RPM that holds 55 KIAS with full flaps at C5.1's weight and altitude in the sim.
:::

Watch the angle of attack in the diagram as you slow down: at low speed the wing needs a high angle of attack to make enough lift.

::widget{name="angle-of-attack" mode="explore" initial="12" flaps="true"}

## Pitch for speed, power for altitude

In slow flight, the usual way of thinking turns around:

- **Pitch controls airspeed.** Nose up, slower; nose down, faster.
- **Power controls altitude.** Sinking? Add power. Climbing? Reduce it.

This is the **back side of the power curve**. At very low speed, flying slower takes _more_ power, not less, because the wing is producing so much drag.

:::quiz{id="l5-1-q1" type="single"}
In slow flight, what mainly controls your altitude?

- [ ] Pitch
- [x] Power
- [ ] Flaps
- [ ] Trim

---

**Power.** Pitch holds the airspeed, and power holds the altitude.
:::

## Rudder and coordination

High power at low speed means strong left-turning tendencies, so you'll need plenty of **right rudder**. The controls are also soft and slow to respond. Keep the ball centered: an uncoordinated airplane near the stall can drop a wing.

Turns should be **gentle**, no more than about 15° of bank. Bank increases the load factor, and that brings the stall closer (Lesson 5.3).

## Recovery

1. **Full power**, with right rudder.
2. **Lower the nose** to hold altitude as the speed builds.
3. **Flaps up in stages**: 20°, then 10°, then 0°, as the speed increases.
4. **Accelerate** to cruise, set cruise power and trim.

:::quiz{id="l5-1-q2" type="single"}
What's the first action when you recover from slow flight?

- [ ] Flaps up
- [x] Full power (and lower the nose to hold altitude)
- [ ] Raise the nose
- [ ] Reduce power

---

**Full power first**, lowering the nose to hold altitude. Then flaps up in stages as the speed builds.
:::

## The stall warning

The current Airman Certification Standards say slow flight should be flown **without** setting off the stall warning. Our Gold tier follows that rule. If the horn chirps, lower the nose slightly or add a little power.

:::callout{type="verify"}
Author note: check the current ACS wording for the stall warning in slow flight.
:::

:::callout{type="sim"}
In a real airplane, you feel the controls go soft and hear the airflow get quieter. In the sim, watch the airspeed tape closely and listen for the stall horn.
:::
