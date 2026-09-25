---
slug: l2-1-four-forces-and-how-a-wing-works
code: L2.1
module: m2-fundamentals
order: 1
priority: P0
title: Four forces and how a wing works
summary: Lift, weight, thrust and drag, angle of attack, and why a wing stalls at an angle, not at a speed.
estimatedMinutes: 15
prerequisites: [l1-4-speeds-limits-and-checklists]
objectives:
  - Name the four forces and how they balance in steady flight.
  - Define angle of attack and the critical angle of attack.
  - Explain why an airplane stalls at an angle of attack, not at a speed.
challenges: []
resources: [phak-ch5, boldmethod-aerodynamics, afh-ch4]
published: false
lastVerifiedAt: null
simVersion: null
---

## The four forces

Four forces act on an airplane in flight:

- **Lift** pulls the airplane up. The wings make it.
- **Weight** pulls it down toward the center of the Earth.
- **Thrust** pulls it forward. The propeller makes it.
- **Drag** holds it back. Every part of the airplane moving through the air makes some.

In **straight-and-level, unaccelerated flight** (constant speed, constant altitude, constant heading), the forces balance: lift equals weight and thrust equals drag. Change one of them and the airplane changes what it's doing until they balance again. Add power and you gain speed until drag catches up; raise the nose and you climb.

:::quiz{id="l2-1-q1" type="single"}
In straight-and-level, unaccelerated flight, lift equals what?

- [ ] Thrust
- [x] Weight
- [ ] Drag
- [ ] Twice the weight

---

Lift equals **weight** (and thrust equals drag). If lift were greater than weight, the airplane would climb.
:::

## Relative wind and angle of attack

Three terms matter here:

- The **chord line** is an imaginary straight line from the wing's leading edge to its trailing edge.
- The **relative wind** is the airflow the wing feels. It always blows opposite to the direction the airplane is moving, not the direction the nose points.
- The **angle of attack (AoA)** is the angle between the chord line and the relative wind.

Angle of attack is not the same as pitch attitude. In a steep descent with the nose on the horizon, the airplane is moving downward, so the relative wind comes from below and the angle of attack can be large even though the nose looks level.

## Lift and the critical angle of attack

As angle of attack increases, the wing makes more lift, up to a point. At the **critical angle of attack** (roughly 16–18° for a typical light-airplane wing) the air can no longer follow the curved top of the wing. The flow separates, lift drops sharply and drag climbs. That's a **stall**.

Drag the slider below and watch the streamlines and the lift curve. Try it with flaps down too.

::widget{name="angle-of-attack" mode="explore"}

:::callout{type="tip"}
The wing doesn't know your airspeed; it only knows its angle of attack. You can stall at any speed and in any attitude if you exceed the critical angle.
:::

:::quiz{id="l2-1-q2" type="single"}
A wing stalls when it exceeds what?

- [ ] Its maximum speed
- [x] The critical angle of attack
- [ ] A pitch attitude of 20° nose up
- [ ] Its maximum lift at cruise speed

---

A stall happens when the wing exceeds its **critical angle of attack**. It can happen at any airspeed or attitude.
:::

## The lift equation, in plain words

Lift depends mainly on two things you control:

- **Speed.** More airflow makes more lift, and lift grows with the _square_ of speed: twice as fast makes four times the lift.
- **Angle of attack.** A bigger angle makes more lift, up to the critical angle.

So to keep the same lift (and hold altitude) at a lower speed, you need a higher angle of attack. That's why the nose comes up as you slow down in level flight.

:::quiz{id="l2-1-q3" type="single"}
You slow down but want to keep your altitude. What must happen to the angle of attack?

- [x] It must increase
- [ ] It must decrease
- [ ] It stays the same

---

Less speed means less lift at the same angle of attack. To hold altitude you **increase** the angle of attack, raising the nose, to make up the difference.
:::

## Two kinds of drag

- **Parasite drag** comes from pushing the airplane through the air: the shape of the fuselage, the wheels, the antennas. It grows quickly as you go faster.
- **Induced drag** is the price of making lift. It is largest at **low** speed, where the wing works at a high angle of attack.

Add them together and total drag is lowest somewhere in the middle. Slower than that, induced drag climbs so fast that you need **more power to fly slower**. You'll feel this in slow flight in Module 5.

## Stall speed changes

The stall speeds on the airspeed indicator, {{vspeed.vs1}} flaps up and {{vspeed.vso}} with full flaps, are for straight-and-level flight at maximum weight, at **1 G**.

In a turn, the wing has to make more lift to hold altitude, so it works at a higher angle of attack and reaches the critical angle at a **higher** speed. In a 60° bank, stall speed rises by about 40%. You'll explore that in [[l2-4-turns-and-coordination]] and in Module 5.
