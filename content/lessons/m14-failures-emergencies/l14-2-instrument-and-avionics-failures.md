---
slug: l14-2-instrument-and-avionics-failures
code: L14.2
module: m14-failures-emergencies
order: 2
priority: P0
title: Instrument and avionics failures
summary: What the airspeed, altimeter and VSI do when the pitot or static lines block, how to use the alternate static, and how to fly with a red X or a dark PFD.
estimatedMinutes: 25
prerequisites: [l1-2-the-cockpit-g1000-pfd-and-mfd]
objectives:
  - Predict how the airspeed indicator, altimeter and VSI behave for a pitot blockage and for a static blockage.
  - Use the alternate static source and describe how the readings change.
  - Fly pitch and power with a failed PFD in reversionary mode, and brief what still works.
challenges: []
resources: [phak-ch8, ifh-instruments, garmin-g1000-nxi-pilots-guide]
published: false
lastVerifiedAt: null
simVersion: null
---

## When the instruments lie

An electrical failure takes the screens away, and you know they are gone. An instrument failure is worse: the number is still there, confidently displayed, and it is wrong. Pilots have stalled airplanes while the airspeed tape showed a comfortable speed, because a tube the width of a pencil was blocked by ice or an insect.

This lesson covers a blocked **pitot** tube, a blocked **static** port, and the G1000's own sensors or displays failing. The common answer is the one from [[l2-2-attitude-flying-and-trim]]: a known pitch and a known power give a known airspeed, whatever the tape says.

## The pitot-static system

Three instruments on the PFD are driven by air pressure, not electronics: airspeed, altitude and vertical speed. They get that pressure from two places on the outside of the airplane.

| Source          | Where                               | What it measures                                      | Feeds                    |
| --------------- | ----------------------------------- | ----------------------------------------------------- | ------------------------ |
| **Pitot tube**  | Under the left wing, facing forward | Ram pressure: static air plus the push of the airflow | Airspeed only            |
| **Static port** | On the side of the fuselage         | Still air pressure at your altitude                   | Airspeed, altimeter, VSI |

The airspeed indicator compares the two: ram minus static is the push of the airflow, a measure of speed. The altimeter and VSI need only the static side. That one fact lets you predict every failure below.

The pitot tube has a small **drain hole** so water can run out, and a **pitot heat** switch to melt ice. On the G1000 the pressures go to the **air data computer (ADC)**, which turns them into the numbers on the PFD, including true airspeed, so those readouts go wrong too when the lines do.

:::callout{type="verify"}
Widget W31 (Pitot-Static System) is embedded here once Phase 20 ships it: `::widget{name="pitot-static" mode="explore"}`, including its quiz mode. Until then the table in the next section is the walkthrough. Confirm on the sim's Skyhawk: pitot tube location, number and location of static ports, PITOT HEAT switch position, and whether pitot heat is modeled (does icing block the tube with heat off?).
:::

## Pitot blockage: ram, or ram and drain

Two different pitot blockages give two different lies.

**Ram inlet blocked, drain open.** The pressure in the tube leaks out of the drain until it equals static. Ram minus static is zero, so the **airspeed drops to zero**. Easy to spot, because it is obviously wrong.

**Ram inlet and drain both blocked.** The pitot pressure is trapped at whatever it was when the blockage formed, while the static side still changes with altitude. Climb, and static pressure falls, so the trapped pitot pressure looks bigger by comparison: **airspeed reads higher** as you climb, and lower as you descend. The airspeed indicator has become an altimeter. This is the dangerous one: pull the nose up to "slow down" from a false high reading and you climb toward a stall with the tape still saying you are fast.

The altimeter and VSI ignore both pitot blockages, because they use only static pressure.

| Blockage                    | Airspeed                                                     | Altimeter     | VSI                          |
| --------------------------- | ------------------------------------------------------------ | ------------- | ---------------------------- |
| Pitot ram only (drain open) | Drops to zero                                                | Normal        | Normal                       |
| Pitot ram and drain         | Acts like an altimeter: rises in a climb, falls in a descent | Normal        | Normal                       |
| Static port                 | Reads low in a climb, high in a descent                      | Frozen        | Zero                         |
| Alternate static in use     | Slightly high                                                | Slightly high | Momentary climb, then normal |

:::quiz{id="l14-2-q1" type="single"}
Both the pitot ram inlet and its drain hole are blocked by ice. You start a climb. What does the airspeed indicator do?

- [ ] Drops to zero
- [x] Reads higher and higher as you climb
- [ ] Reads lower and lower as you climb
- [ ] Nothing changes; it keeps reading correctly

---

The pitot pressure is trapped; as you climb, static pressure falls, the difference grows and the indicator reads faster. Fly pitch and power and ignore it.
:::

:::quiz{id="l14-2-q2" type="single"}
Only the pitot ram inlet is blocked; the drain hole is clear. What happens?

- [x] Airspeed drops to about zero; altimeter and VSI are normal
- [ ] Airspeed reads high; altimeter freezes
- [ ] All three instruments freeze
- [ ] Airspeed is normal; the altimeter reads low

---

With the drain open the trapped pressure leaks away until it matches static, so airspeed falls to zero. The altimeter and VSI use only the static line and keep working.
:::

## Static blockage and the alternate static source

A blocked static port hits all three instruments at once, because they all need static pressure.

- The **altimeter freezes** at the altitude where the blockage happened. Climb or descend and it does not move.
- The **VSI shows zero**, since it works by comparing static pressure now with static pressure a moment ago, and the trapped pressure never changes.
- The **airspeed** is subtle. The static reference is stuck. Climb into thinner air and the ram pressure falls while the trapped static stays high, so airspeed **reads low in a climb** and **high in a descent**. The opposite of the double pitot blockage.

The fix is the **alternate static source**: a pull knob low on the panel, left of the pilot, that opens the static line to cabin air instead of the outside port. Pull it and the instruments come back to life.

They come back slightly wrong. Cabin air is at a little lower pressure than outside air, so with alternate static you read **slightly high** on airspeed and altitude, and the VSI shows a brief climb as the pressure equalizes. The POH has a small correction table; in the sim the difference is probably too small to see.

:::callout{type="verify"}
Confirm the alternate static valve's label and location in the sim cockpit (POH Section 7: "ALT STATIC AIR" or similar, left lower panel), whether the sim models it, and whether a static blockage can be set in the MSFS 2024 failure menu. If not, Challenge C14.3 keeps the talk-through scenario card. Check the direction of the airspeed error for a static blockage against PHAK Chapter 8 before publishing.
:::

:::quiz{id="l14-2-q3" type="single"}
The static port is blocked. Which set of readings matches?

- [ ] Airspeed zero, altimeter normal, VSI normal
- [ ] Airspeed high in a climb, altimeter normal, VSI normal
- [x] Airspeed low in a climb, altimeter frozen, VSI zero
- [ ] All three read high

---

All three use static pressure: the altimeter freezes, the VSI zeros and the airspeed skews (low in a climb, high in a descent). Pull the alternate static source.
:::

## AHRS and ADC failures: the red X

The G1000 does not have mechanical gyros. Attitude and heading come from the **AHRS** (attitude and heading reference system); airspeed, altitude and vertical speed come from the **ADC**. When either box fails, or loses its data, the G1000 draws a large **red X** across the fields it can no longer trust.

| Failed unit | Red X over                                              | What you still have                                         |
| ----------- | ------------------------------------------------------- | ----------------------------------------------------------- |
| AHRS        | Attitude indicator, heading, turn rate                  | Airspeed, altitude, VSI; standby attitude; magnetic compass |
| ADC         | Airspeed tape, altitude tape, VSI, TAS and OAT readouts | Attitude and heading; standby airspeed and altimeter        |

The standby instruments are the point of this table. Beside the displays the Skyhawk carries a **standby airspeed indicator, attitude indicator and altimeter**, plus the **magnetic compass**. They have their own pitot-static lines, and the standby attitude indicator is electric, on the essential bus. When a red X appears, your eyes go to the standby instrument for that job and you keep flying.

:::callout{type="classic"}
On the classic steam-gauge Skyhawk the attitude and heading indicators are **vacuum-driven** gyros. A vacuum pump failure gives no red X: the attitude indicator slowly tumbles over several minutes while looking almost right, which is far more dangerous. Watch the **suction gauge** on every cruise check and cross-check the attitude indicator against the electric turn coordinator and the altimeter.
:::

:::callout{type="verify"}
Confirm in the sim which standby instruments the Skyhawk has and what powers the standby attitude indicator (electric on the essential bus in the 172S NAV III, or vacuum in the sim variant). Confirm the red X behavior for AHRS and ADC failures if the failure menu allows them. Screenshot for the shot list: "PFD with AHRS red X".
:::

## Reversionary mode: when a display dies

The PFD and MFD are separate screens with separate electronics. If one goes dark, the other can show everything that matters. That is **reversionary mode**, and the G1000 enters it two ways:

1. **Automatically**, when the system detects that a display has failed.
2. **Manually**, when you press the red **DISPLAY BACKUP** button on the audio panel, the narrow strip between the PFD and the MFD.

The surviving screen then shows a compressed PFD (attitude, airspeed, altitude, HSI) with the engine instruments down the side. The map is gone; the flight instruments are all there.

:::callout{type="memory"}
**PFD failure (simplified for the sim)**

1. Press **DISPLAY BACKUP** on the audio panel, or confirm the system has already reverted.
2. Check the reversionary display: attitude, airspeed, altitude, HSI and engine data all present.
3. Brief aloud what you have and what you have lost, then continue or divert.

:::

In Challenge C14.2 "PFD failure" the event card tells you to press DISPLAY BACKUP and treat the PFD as failed. Covering the PFD with a sticky note on the monitor is honest in a way the sim cannot be.

:::callout{type="verify"}
Confirm the DISPLAY BACKUP button's location and label on the sim's audio panel, what the sim's reversionary layout shows, and whether the sim's failure menu can fail a single display (automatic reversion). Record the sim version.
:::

:::quiz{id="l14-2-q4" type="single"}
Where is the DISPLAY BACKUP button?

- [ ] On the MFD bezel, top right
- [x] On the audio panel, between the PFD and the MFD
- [ ] Next to the master switch
- [ ] On the yoke, under your left thumb

---

DISPLAY BACKUP is on the audio panel, the narrow strip between the two displays. Press it and the working screen shows flight instruments and engine data together.
:::

## Flying pitch and power when the airspeed lies

Whichever failure you have, the escape is the same: the Skyhawk flies a known speed for a known pitch and power. You learned the pairs in Course 1 without naming them; now they are your airspeed indicator.

| Phase           | Power (RPM) | Configuration | Pitch picture               | Expect about        |
| --------------- | ----------- | ------------- | --------------------------- | ------------------- |
| Climb           | Full        | Flaps up      | Nose well above the horizon | {{vspeed.vy}}       |
| Cruise, level   | About 2,300 | Flaps up      | Horizon just below the cowl | 105–115 KIAS        |
| Pattern descent | About 1,500 | Flaps 10°–20° | Slightly nose low           | 80–90 KIAS          |
| Final           | About 1,500 | Flaps 30°     | Nose low, aim point steady  | {{vspeed.approach}} |

Fly the attitude and the power, confirm with the altimeter, and cross-check with the **GPS groundspeed** on the MFD. Groundspeed is not airspeed, but on a calm day it is close, and it never freezes.

:::callout{type="verify"}
Fly these pitch-and-power pairs in the sim and replace the "expect about" column with measured values before publishing. Challenge C14.3 "Blocked pitot tube" scores against this table.
:::

:::callout{type="sim"}
MSFS 2024 may not let you block the pitot tube from its failure menu. The default Challenge C14.3 uses a card instead: "Airspeed unreliable, cover the airspeed tape." Covering it with a sticky note is a legitimate method; real instructors do the same.
:::

## Practice and next steps

Three things to carry forward:

1. Pitot feeds only airspeed; static feeds all three. Predict every blockage from that.
2. A red X means switch to the standby instrument for that job; a dark display means DISPLAY BACKUP.
3. Known pitch plus known power gives a known speed, whatever the tape says.

**Practice.** This lesson feeds the `memory-items` deck: the pitot-static truth table and the PFD-failure flow.

**Fly it.** Challenge C14.2 "PFD failure" and Challenge C14.3 "Blocked pitot tube" both come from this lesson. Fly C14.2 first; it is easier.

**Next.** [[l14-3-partial-power-loss-and-fuel-problems]] moves from the panel to the engine. Behind you, [[l14-1-electrical-failures]] covered the screens simply going dark.
