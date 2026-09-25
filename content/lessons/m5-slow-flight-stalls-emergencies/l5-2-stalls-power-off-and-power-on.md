---
slug: l5-2-stalls-power-off-and-power-on
code: L5.2
module: m5-slow-flight-stalls-emergencies
order: 2
priority: P0
title: 'Stalls: power-off and power-on'
summary: Recognize a stall and recover from it — reduce the angle of attack first, every time.
estimatedMinutes: 20
prerequisites: [l5-1-slow-flight]
objectives:
  - Recognize the signs of a stall — horn, buffet, soft controls and the nose dropping.
  - Recover using the recovery sequence, reducing the angle of attack first.
  - Explain when power-off and power-on stalls happen in real flying.
challenges: [c5-2-power-off-stall, c5-3-power-on-stall]
resources: [afh-ch5, boldmethod-stalls, aopa-asi-stalls]
published: false
lastVerifiedAt: null
simVersion: null
---

## What a stall is

A **stall** happens when the wing exceeds its **critical angle of attack**. The air can no longer follow the top of the wing smoothly, and lift drops sharply. A stall is about **angle of attack**, not airspeed: you can stall at any speed and any attitude if you pull hard enough.

Move the slider past the critical angle and watch the airflow break away.

::widget{name="angle-of-attack" mode="explore" initial="14"}

## Recognizing a stall

- **Stall horn.** It sounds about 5–10 knots before the stall.
- **Buffet.** The airframe shakes as turbulent air from the wing hits the tail.
- **Soft controls.** The controls feel light and respond slowly.
- **Nose drop.** At the stall, the nose drops even with the yoke held back.
- **Sink.** The airplane descends even though the nose is high.

:::callout{type="sim"}
MSFS shows the buffet as a camera shake and plays the stall horn, but you don't feel it in your seat. The stall characteristics in the sim may be gentler or sharper than the real airplane. Treat the sim as practice for the recovery, not for the feel.
:::

## The recovery sequence

This is the FAA's stall recovery template, in short:

1. **Autopilot off**, if it's on.
2. **Pitch nose down** to reduce the angle of attack. This is what actually ends the stall.
3. **Roll wings level.**
4. **Add power** as needed.
5. **Return to the desired flight path.** Climb away, and raise the flaps in stages.

:::callout{type="safety"}
Reduce angle of attack — always the first step. Adding power without lowering the nose can keep the wing stalled.
:::

:::callout{type="verify"}
Author note: check this sequence against the current wording in the Airplane Flying Handbook, chapter 5.
:::

:::quiz{id="l5-2-q1" type="single"}
What's the first action in any stall recovery?

- [ ] Add full power
- [x] Reduce the angle of attack (lower the nose)
- [ ] Roll the wings level with aileron
- [ ] Raise the flaps

---

**Reduce the angle of attack.** Nothing else ends the stall until the wing is back below its critical angle.
:::

## Power-off stalls

A **power-off stall** simulates a stall on the **approach to land**, when you're slow, configured and at low power.

1. Clearing turns.
2. Configure as if on final: flaps 30°, about 65 KIAS, descending.
3. Power to idle.
4. Smoothly raise the nose to hold altitude until the stall.
5. Recover: nose down, wings level, full power, flaps 20°, climb, flaps up in stages.

:::quiz{id="l5-2-q2" type="single"}
A power-off stall simulates which phase of flight?

- [ ] Takeoff and departure
- [ ] Cruise
- [x] Approach and landing
- [ ] Steep turns

---

**Approach and landing.** You're slow, configured for landing and at low power.
:::

## Power-on stalls

A **power-on stall** simulates a stall on **takeoff or departure**, when you're climbing steeply at high power.

1. Clearing turns.
2. Slow to about liftoff speed (55–60 KIAS), flaps 0–10°.
3. Set high power (at least 65%, or full).
4. Raise the nose to a climb attitude steeper than for Vy, and hold it until the stall.
5. Recover: nose down, wings level, climb away at Vy.

At high power and low speed, you'll need **a lot of right rudder** to keep the ball centered. If you don't, one wing will drop at the stall.

## Spins

A **spin** is a stall where one wing is more stalled than the other, so the airplane rotates as it descends. Spins start from a stall with **uncoordinated** flight. Keep the ball centered near the stall and you won't spin. This course doesn't teach spin recovery.

## Common errors

- **Pulling back during the recovery.** The nose is dropping and it feels natural to pull. Don't: pulling keeps the wing stalled.
- **Uncoordinated rudder**, which makes a wing drop.
- **Big aileron inputs at the stall.** They can make things worse. Reduce the angle of attack first, then level the wings with coordinated aileron and rudder.
- **A secondary stall.** Pulling up too hard after the recovery stalls the wing again.

:::quiz{id="l5-2-q3" type="single"}
A wing drops at the stall. What do you do?

- [ ] Full opposite aileron straight away
- [x] Reduce the angle of attack first, then level the wings with coordinated controls
- [ ] Pull back harder to stop the descent
- [ ] Add full left rudder

---

**Reduce the angle of attack first**, then level the wings with coordinated aileron and rudder. Large aileron inputs at the stall can deepen it.
:::
