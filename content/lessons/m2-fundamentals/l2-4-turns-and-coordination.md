---
slug: l2-4-turns-and-coordination
code: L2.4
module: m2-fundamentals
order: 4
priority: P0
title: Turns and coordination
summary: Roll into and out of turns precisely, keep the ball centered with rudder, and roll out on your heading.
estimatedMinutes: 20
prerequisites: [l2-3-climbs-and-descents]
objectives:
  - Roll into and out of shallow, medium and standard-rate turns.
  - Keep turns coordinated using rudder.
  - Roll out on a target heading using a lead of about half the bank angle.
challenges: [c2-3-turns-to-headings, c2-4-the-box]
resources: [afh-ch3, phak-ch5]
published: false
lastVerifiedAt: null
simVersion: null
---

## How an airplane turns

An airplane doesn't turn with the rudder. It turns by **banking**.

When the wings are level, lift points straight up. When you bank, lift tilts with the wings. Part of it still points up and holds the airplane in the air; the other part points sideways, toward the inside of the turn. That sideways part pulls the airplane around the turn.

Turns are grouped by bank angle:

| Turn    | Bank angle |
| ------- | ---------- |
| Shallow | up to 20°  |
| Medium  | 20–45°     |
| Steep   | over 45°   |

## Back pressure in a turn

Because part of the lift is now pulling sideways, less of it holds the airplane up. If you do nothing, you start to descend. To hold altitude, add a little **back pressure** as you roll in. That raises the angle of attack and makes more lift. Release it as you roll out.

The steeper the bank, the more back pressure you need. You'll see why in Module 5, where steep turns double the load on the wings.

## Adverse yaw and the rudder

When you roll into a turn, the aileron that goes down (on the rising wing) makes more lift, and also more drag. That drag pulls the rising wing back, so the nose swings **away** from the turn for a moment. This is **adverse yaw**.

The fix is rudder in the direction of the turn: left rudder with left aileron, right rudder with right aileron. When the turn is established, you need only a little rudder to keep it coordinated.

Try it below. Bank the airplane, then use the rudder to center the ball.

::widget{name="turn-coordinator" mode="explore"}

:::quiz{id="l2-4-q1" type="single"}
The ball is to the right in a right turn. Which rudder do you press?

- [ ] Left rudder
- [x] Right rudder
- [ ] No rudder; use aileron

---

"Step on the ball": press the rudder on the side the ball has moved to. The ball is on the right, so press **right rudder**.
:::

:::callout{type="classic"}
In the classic panel, the turn coordinator (bottom left of the six-pack) shows the rate of turn with a small airplane, and the ball below it shows coordination. On the G1000 the same jobs are done by the turn rate trend line and the slip/skid bar.
:::

## Standard-rate turns

A **standard-rate turn** changes heading at 3° per second, so a full circle takes 2 minutes. The bank you need depends on your true airspeed:

**Bank ≈ (TAS ÷ 10) + 7**

At about 100 knots that's 100 ÷ 10 + 7 = **17°**. On the G1000, the outer marks on the turn rate arc show standard rate: hold the magenta trend line on the mark.

:::quiz{id="l2-4-q2" type="single"}
About how much bank do you need for a standard-rate turn at 100 knots true airspeed?

- [ ] 10°
- [x] 17°
- [ ] 30°
- [ ] 45°

---

100 ÷ 10 + 7 = **17°**. At 120 knots it would be about 19°.
:::

## Rolling out on a heading

The airplane keeps turning while you roll the wings level, so start the rollout **before** the target heading. Lead by about **half your bank angle**: in a 20° bank, start rolling out 10° early.

:::callout{type="tip"}
Start the rollout about half your bank angle before the target heading.
:::

:::quiz{id="l2-4-q3" type="single"}
You're turning left in a 20° bank toward heading 270. When do you start rolling out?

- [ ] At heading 270
- [x] At about heading 280
- [ ] At about heading 260
- [ ] At about heading 300

---

Half of 20° is 10°. You're turning left, so heading numbers are decreasing: start the rollout at about **280**.
:::

## Look before you turn

Before every turn, look in the direction you're turning, and above and below. In the high-wing Skyhawk, your wing blocks the view in the direction of the turn once you bank, so look _before_ you roll in. For a long or steep turn, lift the wing slightly first to check the sky.

## When auto-rudder is on

:::callout{type="sim"}
With auto-rudder on, the sim adds the rudder for you and keeps the ball close to the center. It can't anticipate adverse yaw as well as good feet do, so you may still see a small slip as you roll in. The real Skyhawk has no auto-rudder: every turn needs your feet.
:::

Now fly [[c2-3-turns-to-headings]], then put it all together in [[c2-4-the-box]].
