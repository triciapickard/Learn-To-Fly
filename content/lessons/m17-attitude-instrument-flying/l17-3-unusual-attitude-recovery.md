---
slug: l17-3-unusual-attitude-recovery
code: L17.3
module: m17-attitude-instrument-flying
order: 3
priority: P0
title: Unusual attitude recovery
summary: Recognize a nose-high or nose-low unusual attitude from the instruments and recover in the right order, every time.
estimatedMinutes: 20
prerequisites: [l17-2-basic-instrument-maneuvers-and-patterns]
objectives:
  - Identify a nose-high or nose-low unusual attitude from the PFD and from the standby instruments.
  - State the recovery steps for each, in order.
  - Recover from an unusual attitude without stalling or overstressing the airplane.
challenges: []
resources: [ifh-attitude-flying, afh-ch5, garmin-g1000-nxi-pilots-guide]
published: false
lastVerifiedAt: null
simVersion: null
---

## Looking up from the chart

You are in cloud at 5,500 ft, hand-flying, and you look down at the approach chart on your kneeboard for a few seconds. When you look up, the attitude indicator shows 40° of right bank, the airspeed is 135 KIAS and increasing, and the altimeter is unwinding. A few seconds of inattention, a trimmed airplane that was not quite trimmed, and the Skyhawk has found its own way into a spiral.

An **unusual attitude** is any attitude you did not intend and did not see develop. Recovering is not hard, but it has to be done in the right order, and the order is different for nose-high and nose-low. That is this lesson.

:::callout{type="real-world"}
In a real airplane, an instrument instructor puts the airplane into the unusual attitude while you close your eyes or look down under the view-limiting device, then hands it back with "recover". Instructors keep the attitudes within the airplane's limits and well above the ground. Nobody practices this alone or in actual cloud. In the sim you set the attitude yourself with the look-away method, and the cost of a bad recovery is a restart.
:::

## How unusual attitudes happen

| Cause               | What happens                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| Distraction         | A chart, a radio call or a passenger takes your eyes off the scan for seconds                    |
| Disorientation      | Your inner ear says "level" while the airplane is banking (see [[l17-5-spatial-disorientation]]) |
| Turbulence          | A gust rolls or pitches the airplane faster than a slow scan catches it                          |
| Automation surprise | The autopilot disconnects or was never engaged, and nobody is flying                             |
| Trim                | An untrimmed airplane drifts the moment you let go                                               |

Notice that none of these is dramatic. Unusual attitudes are usually quiet, which is why the first and best defense is the scan from [[l17-1-the-instrument-scan]]. The second defense is recognizing the attitude the instant you see it.

## Recognizing the attitude

On the PFD, the attitude indicator tells you directly, but in a surprise you may not believe it, so confirm with the performance instruments. Two patterns cover everything:

| Instrument | Nose high                              | Nose low                                 |
| ---------- | -------------------------------------- | ---------------------------------------- |
| Airspeed   | Decreasing                             | Increasing                               |
| Altimeter  | Increasing                             | Decreasing, often fast                   |
| VSI        | Up                                     | Down                                     |
| Attitude   | Horizon low in the display, blue above | Horizon high in the display, brown above |
| Bank       | Any, often steep                       | Any, often steep                         |

Airspeed and altimeter moving in **opposite** directions from normal (speed falling while height rises) means nose high. Speed rising while height falls means nose low. On the standby instruments, the standby airspeed and altimeter give you the same answer even if the big display is gone.

When the attitude gets extreme, the G1000 helps. Past about 30° nose up, 20° nose down or 65° of bank, the PFD **declutters**: the inset map, annunciations and the small windows go, and only the attitude, airspeed, altitude, vertical speed and HSI stay. From 50° nose up or 30° nose down, large red chevrons appear on the attitude display, pointing toward the horizon. Follow the chevrons. They exist so that a startled pilot sees one thing: which way is up.

:::callout{type="verify"}
Sim check: does the MSFS 2024 NXi declutter the PFD past +30°/−20° pitch or 65° bank and draw red chevrons from 50° nose up and 30° nose down? Thresholds desk-verified 2026-10-13 against the Garmin G1000 NXi Pilot's Guide (Cessna Nav III, Flight Instruments). Screenshot for the shot list: "PFD declutter chevrons, nose low".
:::

:::quiz{id="l17-3-q1" type="single"}
Airspeed 140 KIAS and increasing, altimeter unwinding, VSI pegged down, 50° of right bank. What is this?

- [ ] Nose high, left bank
- [x] Nose low, right bank
- [ ] A normal cruise descent
- [ ] A power-on stall

---

Increasing airspeed with decreasing altitude is nose low. The bank is to the right. This is a spiral dive, and the recovery order matters.
:::

## Nose-high recovery

In a nose-high attitude the airspeed is bleeding away toward a stall. Every step is aimed at getting the wing flying again before you worry about anything else.

:::callout{type="memory"}
**Nose high: recover**

1. **Power**: full throttle.
2. **Nose down**: lower the nose to the horizon on the attitude indicator.
3. **Wings level**: roll level with coordinated aileron and rudder.
4. **Return** to the desired attitude, power and trim.

:::

Why this order? Power first, because thrust is the fastest way to buy airspeed when it is low. Nose down second, because lowering the nose reduces the angle of attack and ends the stall threat; rolling while slow and nose high can drop a wing. Wings level third, and then rebuild the picture. Keep the control inputs smooth: a sharp push at low speed is unpleasant and unnecessary.

:::callout{type="safety"}
If the stall warning is sounding, treat it as a stall recovery first: nose down and power, exactly as in [[l5-2-stalls-power-off-and-power-on]]. The unusual-attitude order and the stall-recovery order agree; the difference is only how far you lower the nose.
:::

## Nose-low recovery

In a nose-low attitude the airspeed is rising toward {{vspeed.vno}} and beyond, and a steep bank is loading the wing. The order flips.

:::callout{type="memory"}
**Nose low: recover**

1. **Power**: reduce to idle.
2. **Wings level**: roll level with coordinated aileron and rudder.
3. **Ease out of the dive**: raise the nose smoothly to the horizon.
4. **Return** to the desired attitude, power and trim.

:::

Why this order? Power off first, because every second of power adds speed. Wings level second and **before** you pull: pulling while banked tightens the spiral, adds load factor and gains nothing. Only with the wings level does back pressure point the lift upward. Then ease out: a smooth pull that keeps the airplane below {{vspeed.va}} if you can, and never a snatch. Expect to lose a few hundred feet; Challenge C17.3 scores under 300 ft as Gold.

:::quiz{id="l17-3-q2" type="order"}
Put the nose-low recovery in order.

1. Reduce power to idle
2. Level the wings
3. Ease the nose up to the horizon
4. Return to the desired attitude and trim

---

Power off, wings level, then ease out of the dive. Leveling the wings before pulling is the step that keeps the spiral from tightening.
:::

## Partial-panel unusual attitudes

If the attitude indicator is the thing that failed, you can still recognize and recover. Use the **airspeed trend and the altimeter for pitch** (speed rising and altitude falling means nose low) and the **turn indicator for bank** (roll until it shows no turn). The recovery steps are identical; only the instruments you read change. [[l17-4-partial-panel-and-the-magnetic-compass]] covers the standby instruments in detail.

| Drill | Attitude                                   | First action | Then                                |
| ----- | ------------------------------------------ | ------------ | ----------------------------------- |
| 1     | Nose high, left bank, 65 KIAS              | Full power   | Nose down, wings level              |
| 2     | Nose low, right bank, 130 KIAS             | Power idle   | Wings level, ease out               |
| 3     | Nose high, wings level, 60 KIAS            | Full power   | Nose down, then check bank          |
| 4     | Nose low, left bank, no attitude indicator | Power idle   | Center the turn indicator, ease out |

:::callout{type="verify"}
Widget pending: W34 (Unusual Attitude Trainer) is embedded here once Phase 21 ships it: `::widget{name="unusual-attitude" mode="drill"}`, showing frozen attitude, airspeed, altimeter and turn indicators with the learner selecting the recovery actions in order against a timer, with nose-high, nose-low and partial-panel variants. Until then the drill table and the quizzes carry the content.
:::

:::quiz{id="l17-3-q3" type="single"}
The attitude indicator is covered. Airspeed 55 KIAS and falling, altimeter climbing, turn indicator showing a left turn. What is your first action?

- [x] Full power
- [ ] Power to idle
- [ ] Level the wings
- [ ] Pull back to stop the climb

---

Falling airspeed with rising altitude is nose high, so the first action is full power, then nose down, then level the wings using the turn indicator.
:::

## Setting it up in the sim

Challenge C17.3 "Unusual attitudes" uses the **look-away method**: an event card tells you to look away from the screen and make a gentle control input for a count of seconds, then look back and recover at the beep. Four attitudes, mixing nose high and nose low, left and right. To practice on your own, trim for level flight in the overcast, close your eyes, roll gently one way and push or pull for about eight seconds, then open your eyes and fly the recovery.

:::callout{type="sim"}
The sim cannot make you feel the load factor of a pull-out or the lightness of a nose-high push, so there is nothing to tell you that you are pulling too hard except the airspeed and the G-sense you do not have. Watch the airspeed through the recovery and keep the pull gentle; the real airplane has limits and the sim's crash damage setting will enforce them.
:::

## Practice and next steps

Three things to carry forward:

1. Nose high: power, nose down, wings level, return.
2. Nose low: power off, wings level, ease out, return.
3. Airspeed and altimeter moving opposite ways tells you which one you have, even without an attitude indicator.

**Practice.** This lesson feeds the `memory-items` flashcard deck: both recoveries, one card each, plus the recognition cues.

**Fly it.** Challenge C17.3 "Unusual attitudes" scores the order of each recovery, the altitude lost and a gentle pull-out. Then continue to [[l17-4-partial-panel-and-the-magnetic-compass]].
