---
slug: l5-3-steep-turns-and-load-factor
code: L5.3
module: m5-slow-flight-stalls-emergencies
order: 3
priority: P0
title: Steep turns and load factor
summary: Why steep turns raise the stall speed, and how to fly a 360° turn at 45° bank without gaining or losing altitude.
estimatedMinutes: 15
prerequisites: [l5-2-stalls-power-off-and-power-on]
objectives:
  - Explain load factor and how the stall speed increases with bank.
  - Fly 360° steep turns at 45° bank both ways, holding altitude within 100 ft and airspeed within 10 kt, and rolling out within 10° of the entry heading.
challenges: [c5-4-steep-turns]
resources: [afh-ch10, phak-ch5]
published: false
lastVerifiedAt: null
simVersion: null
---

## Load factor

In a level turn, the wing has to hold the airplane up _and_ pull it around the turn. So it makes more lift than the airplane weighs. The ratio of lift to weight is the **load factor**, measured in G.

| Bank | Load factor | Stall speed increase |
| ---- | ----------- | -------------------- |
| 0°   | 1.0 G       | ×1.00                |
| 30°  | 1.15 G      | ×1.07                |
| 45°  | 1.41 G      | ×1.19                |
| 60°  | 2.0 G       | ×1.41                |

The stall speed goes up with the **square root** of the load factor. With a clean stall speed of {{vspeed.vs1}}, the stall speed in a 60° bank is about 68 KIAS.

Drag the bank slider and watch the G and the stall speed climb, slowly at first and then very fast past 60°.

::widget{name="load-factor" mode="explore" initial="45"}

:::quiz{id="l5-3-q1" type="single"}
What's the load factor in a 60° level turn?

- [ ] 1.41 G
- [x] 2 G
- [ ] 3 G
- [ ] 1 G

---

**2 G.** At 60° bank, the wing has to make twice the airplane's weight in lift.
:::

:::quiz{id="l5-3-q2" type="numeric" answer="68" tolerance="3" unit="KIAS"}
The clean stall speed is 48 KIAS. About what's the stall speed in a 60° level turn?

---

About **68 KIAS**: 48 × 1.41 ≈ 68.
:::

## Maneuvering speed

Enter steep turns **at or below maneuvering speed** (Va). Below Va, the wing stalls before it can overstress the airplane. Va is {{vspeed.va}} at maximum weight and less when the airplane is lighter. For solo practice, use about **95 KIAS**.

## Flying a steep turn

1. **Clearing turn** and look for traffic.
2. **Note your heading** and pick a landmark on the horizon.
3. **Roll into 45° of bank**, smoothly.
4. As you pass about 30°, **add back pressure** to hold altitude, and **add about 100–200 RPM** to hold the speed.
5. **Hold the sight picture.** Keep the horizon in the same place on the windshield. Cross-check the altimeter and the bank angle.
6. **Roll out about 20° before** your entry heading, releasing the back pressure as you do.

:::quiz{id="l5-3-q3" type="single"}
When do you start the rollout from a 45° bank turn?

- [ ] Exactly on the target heading
- [ ] 5° before the target heading
- [x] About 20° before the target heading
- [ ] 90° before the target heading

---

About **20° before** the target heading, which is roughly half the bank angle.
:::

## The overbanking tendency

In a steep turn, the outside wing travels faster than the inside wing, so it makes more lift and the bank tends to **keep increasing**. Hold a little **opposite aileron** to stop it.

## Common errors

- **Losing altitude in the first 90°.** Add the back pressure as the bank increases, not after.
- **Ballooning on the rollout.** Release the back pressure as you roll out.
- **Letting the bank creep up** because of the overbanking tendency.
- **Staring at the instruments.** Most of your attention should be on the horizon.
