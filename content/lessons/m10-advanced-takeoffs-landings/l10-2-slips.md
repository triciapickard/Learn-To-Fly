---
slug: l10-2-slips
code: L10.2
module: m10-advanced-takeoffs-landings
order: 2
priority: P0
title: Slips
summary: Use a forward slip to lose altitude without gaining airspeed, use a side slip to land in a crosswind, and take the slip out before the wheels touch.
estimatedMinutes: 15
prerequisites: [l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]
objectives:
  - Explain the difference between a forward slip and a side slip, and what each is for.
  - Fly a forward slip on final to lose altitude without gaining airspeed.
  - Recover from the slip and align the airplane with the runway before touchdown.
challenges: []
resources: [afh-ch9, faa-acs-private]
published: false
lastVerifiedAt: null
simVersion: null
---

## Too high, and no flaps to spare

You are on a 2-mile final to Runway 26 at Tracy, and you are high. Very high. The PAPI shows four white lights, you already have full flaps, and idle power is not fixing it. Pushing the nose down would only add airspeed and make you float. What you need is more **drag**, and the airplane has a big source of it you have not used yet: its own fuselage, turned sideways to the airflow.

That is a slip: a cross-controlled maneuver, aileron one way and rudder the other. The airplane flies partly sideways, the fuselage makes drag, and you come down steeply at a steady airspeed. There are two kinds, and they differ in where the nose points.

## The two slips and what each is for

|                  | Forward slip                                                 | Side slip                                                 |
| ---------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| **Purpose**      | Lose altitude fast without gaining airspeed                  | Hold the centerline in a crosswind and touch down aligned |
| **Ground track** | Straight down the runway                                     | Straight down the runway                                  |
| **Nose**         | Turned well off the ground track, away from the lowered wing | Pointed straight down the runway                          |
| **Bank**         | Lots, into the wind if there is one                          | Just enough to stop the drift                             |
| **Rudder**       | Full or nearly full, opposite the bank                       | Enough to keep the nose straight                          |
| **When**         | High on final, engine-out approach                           | The last 100 ft of a crosswind landing                    |

The forward slip is the altitude tool. The side slip is the crosswind tool from [[l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]], the wing-low method. In both, the ground track stays on the centerline; the difference is the nose. In a forward slip it is deliberately turned away from the lowered wing, so the fuselage meets the air sideways. In a side slip it stays on the runway heading and the lowered wing cancels the drift.

:::callout{type="verify"}
Widget pending: Widget W25 (Crosswind Technique & Slip Visualiser) is embedded here once Phase 20 ships it, in forward-slip and side-slip modes side by side (directive name to be confirmed when the widget exists). Until then the table above carries the comparison. Screenshot for the shot list: "forward slip on final, Tracy Runway 26, pilot's view".
:::

:::quiz{id="l10-2-q1" type="single"}
In a forward slip, where does the nose point?

- [ ] Straight down the runway centerline
- [ ] Toward the lowered wing, along the ground track
- [x] Away from the lowered wing, off the ground track
- [ ] Wherever the wind is coming from

---

**Away from the lowered wing, off the ground track.** That is what turns the fuselage sideways to the airflow and makes the drag. The ground track still runs down the runway.
:::

## Entering, holding and recovering from a forward slip

Enter from a stabilized, power-idle approach when you can see you are going to be high:

| Step               | Action                                                                                    | Watch for                                                 |
| ------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 1. Lower a wing    | Aileron, firmly. With any crosswind, lower the upwind wing so the slip also handles drift | The ground track staying on the centerline                |
| 2. Opposite rudder | Smoothly, until the nose swings well off the runway heading; a full-rudder slip is normal | The nose wanting to drop                                  |
| 3. Pitch for speed | Hold the attitude that normally gives {{vspeed.approach}}                                 | Do not chase the airspeed tape (see below)                |
| 4. Hold it         | Keep the aiming point still in the windshield                                             | When it stops moving down, you are back on the glide path |

To recover: **level the wings and release the rudder together**, smoothly, so the nose swings back to the runway heading. Let the rudder go abruptly and the nose snaps into line and the airspeed builds. In a crosswind leave the upwind wing slightly low, which turns the forward slip into a side slip. Then **re-check the pitch and airspeed**, because the drag is gone, and **land normally**, aligned with the runway, main wheels first.

Recover with enough height to settle before the flare, by 100–200 ft AGL on your first attempts. A slip taken out in the flare is a side-loaded touchdown waiting to happen. Still high after the slip? Go around; a slip that did not work is information, not a problem.

:::quiz{id="l10-2-q2" type="order"}
Put the forward-slip recovery steps in order.

1. Level the wings and release the rudder together, smoothly
2. Re-set the normal glide attitude and check the airspeed
3. Hold the centerline with a small side slip if there is a crosswind
4. Land aligned with the runway, main wheels first

---

Wings and rudder come out together; a rudder released abruptly swings the nose and lets the speed build. Then the attitude and airspeed check, then the crosswind correction, then the landing.
:::

## Slips with flaps

Skyhawks of many generations carry a note about slips with the flaps extended. Older models had a placard telling pilots to avoid them. The 172S handbook is milder: a steep slip with more than 20° of flap can cause a slight tendency for the elevator to oscillate, depending on airspeed, slip angle and loading, and in a full-rudder side slip with 30° of flap you may feel it at normal approach speed. It does not affect control of the airplane, and it goes away as you ease the slip. The practical advice: slip with the flaps you have, but fix a high approach early, with less flap and a slip, rather than late, with full flaps and a full slip.

:::callout{type="verify"}
Sim check: fly a full-rudder slip with flaps 30° in the MSFS 2024 Skyhawk and note whether the flight model shows any elevator oscillation or pitch bobbing. (Desk-verified 2026-10-13: the paragraph above paraphrases 172S POH Section 4, normal landing and crosswind landing notes.)
:::

## The side slip as the wing-low crosswind technique

You already know this slip from [[l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]]: lower the upwind wing until the drift stops, hold the nose straight with opposite rudder, keep both inputs through the flare, and touch down on the upwind main wheel first. The side slip is small: a few degrees of bank and a light rudder pressure, adjusted continuously as the wind changes near the ground. If you run out of rudder to hold the nose straight, the crosswind is beyond what the airplane can handle at that speed. That is the real crosswind limit, and the answer is a go-around.

## Airspeed indication in a slip

In a slip the airflow hits the pitot tube and the static port at an angle, so the **airspeed indicator may read wrong**, by several knots. The Skyhawk's single static port is on the left side of the fuselage, so a slip to the left and a slip to the right do not give the same error. That is why instructors teach the slip by **attitude**: set the pitch that normally gives {{vspeed.approach}}, hold it, and treat the airspeed tape as a rough cross-check until the slip is out. The airplane stalls at the same angle of attack whether or not it is slipping; it just lies to you about the speed.

| What you see                                     | What it means                | What to do                                            |
| ------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| Airspeed drops a few knots as the slip goes in   | Probably indication error    | Hold the attitude; cross-check the attitude indicator |
| Nose high and the airspeed falling steadily      | Real deceleration            | Lower the nose now                                    |
| Airspeed returns to normal as the slip comes out | The indication error is gone | Carry on                                              |

:::callout{type="verify"}
Sim check: in a full-rudder slip at a held pitch attitude, record how much the sim's airspeed tape moves in a left slip and a right slip; the sim may model little or no error. (Desk-verified 2026-10-13: 172S POH preflight lists the static source opening on the left side of the fuselage; AFH Chapter 9 says airspeed indicators "may have considerable error" in a slip and to judge the slip by attitude, sound and feel.)
:::

:::callout{type="sim"}
A slip needs real rudder. A twist-grip joystick or a gamepad trigger works, with less finesse than pedals, so practice holding a steady half-rudder input. If the sim's **auto-rudder** assistance is on, the sim coordinates the airplane for you and a slip is not possible; turn it off for this module (MSFS 2024 assistance settings, piloting section). If you cannot fly without it, Challenge C10.2 offers a P1 variant that scores the glide path and touchdown only.
:::

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 menu path and the exact setting name for auto-rudder (expected under Options, Assistance options, Piloting) and write it into the sim callout above.
:::

:::quiz{id="l10-2-q3" type="single"}
During a forward slip the airspeed tape drops 5 knots although you have not changed the pitch attitude. What is the most likely explanation?

- [x] The pitot-static system is reading wrong because the airflow is hitting it sideways
- [ ] The airplane is about to stall
- [ ] The flaps have retracted
- [ ] The engine has lost power

---

The slipping airflow fools the pitot-static system. Hold the pitch attitude you know gives the right speed, and cross-check the attitude indicator, not just the airspeed tape.
:::

## Practice and next steps

Three things to carry forward:

1. Forward slip: lots of bank, opposite rudder, nose off the ground track, same airspeed. The altitude tool.
2. Side slip: a little bank into the wind, nose straight. The crosswind tool.
3. Take the slip out with enough height to settle before the flare; go around if you are still high.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck (what each slip is for and the recovery order).

**Fly it.** Challenge C10.2 "Forward slip to a landing" starts you high on a 2-mile final to Tracy's Runway 26 with the flaps up, and asks for a slip to a normal glide path and a landing on your aiming point. Then take these skills to the grass in [[l10-3-soft-field-takeoffs-and-landings]].
