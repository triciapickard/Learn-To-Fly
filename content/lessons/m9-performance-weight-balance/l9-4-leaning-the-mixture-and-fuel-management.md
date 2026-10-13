---
slug: l9-4-leaning-the-mixture-and-fuel-management
code: L9.4
module: m9-performance-weight-balance
order: 4
priority: P0
title: Leaning the mixture and fuel management
summary: Set the mixture with the EGT for power and economy, plan fuel with a real reserve, and keep the tanks balanced with the selector.
estimatedMinutes: 20
prerequisites: [l1-3-engine-fuel-and-electrical-systems]
objectives:
  - Lean the mixture for cruise using EGT and fuel flow, following the in-sim cruise checklist.
  - Compute endurance and the fuel required for a planned flight, including the legal reserve and a personal buffer.
  - Manage the fuel selector and recognize and correct a fuel imbalance.
challenges: []
resources: [phak-ch7, aopa-asi]
published: false
lastVerifiedAt: null
simVersion: null
---

## The red knob you have been ignoring

In Course 1 the mixture had two positions: full rich to fly, idle cut-off to stop. That stops being fine when you climb to 6,500 ft for a cross-country, plan a three-hour leg, or take off from a mountain airport. The red knob sets how much fuel meets each lungful of air, and getting it right is worth power, range and a cleaner engine. In [[l1-3-engine-fuel-and-electrical-systems]] you learned the plumbing: two wing tanks, a selector, a fuel-injected {{aircraft.engine}}. This lesson teaches you to run it.

## Why lean: power, economy, spark-plug fouling

The engine wants a particular ratio of fuel to air. Full rich is set for sea level on a cool day. Climb, and each cylinder gets fewer air molecules while the fuel flow stays the same, so the mixture drifts **rich**: more fuel than the air can burn.

| Problem            | What happens                                                     | What you notice                                |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------------- |
| Lost power         | Unburned fuel does no work and cools the combustion              | Lower RPM at the same throttle, a weaker climb |
| Wasted fuel        | Fuel flow stays high while power falls                           | A shorter range than you planned               |
| Spark-plug fouling | Lead from unburned fuel coats the plugs, especially at low power | A rough magneto check at the next run-up       |

Leaning pulls the fuel back to match the thinner air. Too far the other way, a **too-lean** mixture burns hot, then runs rough and loses power, so leaning is a search for the right spot. Your guide is the **exhaust gas temperature** (EGT) on the G1000 engine page: as you lean from full rich, EGT rises, peaks, then falls. The peak is the landmark.

:::quiz{id="l9-4-q1" type="single"}
Leaning too far past peak EGT causes…

- [ ] higher RPM and better economy
- [x] roughness and power loss
- [ ] the fuel pump to switch on
- [ ] the EGT to keep rising

---

Past peak there is not enough fuel for the air in the cylinders. Combustion weakens, the engine runs rough and power falls. A little lean of peak is a technique on some engines; a lot lean of peak is just a sick engine.
:::

## Leaning methods

Learn-To-Fly teaches the method in the in-sim cruise checklist: at cruise power, lean to peak EGT, then enrich slightly. In practice:

1. Level off, set cruise power (2,300–2,400 RPM for our settings), let the speed settle, trim.
2. On the G1000 engine page, select the leaning display, which shows an EGT bar for each cylinder and tracks the peak.
3. Pull the mixture slowly until EGT stops rising and the display reports a peak (or the engine first runs rough).
4. Push the mixture back in until EGT is about 50 °F below peak on the rich side: **rich of peak**, a safe compromise between power and economy.
5. Note the fuel flow. It should fall from around 13–14 GPH at full rich to about {{aircraft.fuelBurn}}.

| Mixture setting       | EGT                       | Power                    | When                                       |
| --------------------- | ------------------------- | ------------------------ | ------------------------------------------ |
| Full rich             | Well below peak           | Full                     | Takeoff and climb below 3,000 ft           |
| Best power            | About 100 °F rich of peak | Highest at this throttle | Climbing at altitude, when you need it all |
| Rich of peak (taught) | About 50 °F rich of peak  | Slightly less            | Normal cruise at 75% power or less         |
| Peak EGT              | Peak                      | Less                     | Best economy; only at low cruise power     |
| Lean of peak          | Below peak, lean side     | Less                     | Not taught in this course                  |

Re-lean after every altitude or power change: climb and the mixture you set is rich again; descend and it is lean, so push it in as you come down. The before-landing checklist sets it full rich.

:::callout{type="verify"}
The in-sim cruise checklist (`content/checklists.yaml → cruise`) says "lean to peak EGT, then enrich slightly (simplified in v1)". Confirm the method and the 50 °F / 100 °F rich-of-peak figures against the 172S POH Section 4 cruise leaning notes and against how the MSFS 2024 G1000 NXi lean page behaves (ENGINE softkey → LEAN; does it show a ΔPEAK readout and assist mode?). Confirm the full-rich cruise fuel flow (13–14 GPH used here). Screenshot for the shot list: "G1000 lean page at peak EGT in cruise".
:::

:::callout{type="sim"}
Engine roughness modelling. A real engine shakes, then stumbles, as you lean too far. The sim's engine may run smoothly until it suddenly loses power, so do not rely on "lean until rough" in the sim. Use the EGT display.
:::

## Leaning for climb and for high-altitude takeoffs

The climb checklist says mixture rich, and at Bay Area field elevations that is right: the extra fuel helps keep the cylinders cool. Above about 3,000 ft pressure altitude full rich costs power, and the checklist note says lean for **maximum RPM**: pull the mixture slowly until the tachometer stops rising, then stop.

The same idea applies on the ground at a high airport. At Truckee, about 5,900 ft, full rich at full throttle makes noticeably less power than the engine has. During the run-up, at full throttle, lean until the RPM peaks, and take off with that mixture. [[l13-3-high-elevation-airport-operations]] turns this into a procedure.

:::callout{type="verify"}
The 3,000 ft pressure-altitude threshold and "lean for maximum RPM" are from the v1 climb checklist note, citing the POH. Confirm against the 172S POH Section 4 (takeoff and climb) and verify the KTRK elevation (about 5,900 ft) before publishing.
:::

:::quiz{id="l9-4-q2" type="single"}
You are about to take off from an airport at 6,000 ft pressure altitude. The mixture should be…

- [ ] full rich, as on every takeoff
- [x] leaned during the run-up until the RPM peaks at full throttle
- [ ] set to idle cut-off until rotation
- [ ] leaned to peak EGT in the climb only

---

Above about 3,000 ft pressure altitude a full-rich mixture gives away power you badly need at a high airport. Lean to maximum RPM at full throttle before the takeoff roll.
:::

## Fuel planning: burn, reserve, buffer

Fuel planning is multiplication plus honesty. The Skyhawk carries {{aircraft.fuelCapacity}}; plan with 53 gal and a burn of 10 GPH, deliberately pessimistic for a leaned cruise. The law requires enough fuel to reach your destination and then fly **30 minutes** by day or **45 minutes** at night at normal cruise. Those reserves are a floor, not a target, so Learn-To-Fly adds a **personal buffer**; one hour is a good one. A 1 hour 40 minute daytime leg:

| Item                              | Gallons |
| --------------------------------- | ------- |
| Taxi, run-up, takeoff and climb   | 2       |
| Cruise, 1 h 40 min at 10 GPH      | 17      |
| Legal day reserve, 30 min         | 5       |
| Personal buffer, 1 h              | 10      |
| **Fuel required at engine start** | **34**  |

With full tanks you have 53 gal, so this leg is comfortable. Turn it around and you get **endurance**: on 53 gal at 10 GPH the tanks last about 5 hours 20 minutes, so about 4 hours 50 minutes by day before you touch the reserve, less once your buffer is counted. On a long leg, "do I have enough" becomes "at what time must I be on the ground," and you write that time on the nav log.

:::callout{type="tip"}
Note fuel at every checkpoint. Next to each checkpoint time on the nav log, write the fuel used. If it is running ahead of plan, you find out at checkpoint two, not at the destination. The G1000's fuel totalizer only counts from the number you give it, so set it to the actual fuel on board after every fill-up.
:::

:::callout{type="verify"}
Day and night VFR reserves (30 and 45 minutes at normal cruise) are 14 CFR 91.151; confirm the wording. Confirm the taxi, takeoff and climb allowance (2 gal used here) against the 172S POH Section 5 note on fuel for engine start, taxi and takeoff, and confirm the G1000 NXi fuel totalizer behaviour in the sim (does it ask for fuel on board at start-up?).
:::

:::quiz{id="l9-4-q3" type="numeric" answer="210" tolerance="5" unit="min"}
You take off by day with 40 gal of usable fuel and plan on 10 GPH. Keeping the legal 30-minute reserve untouched, how many minutes can you fly?

---

The reserve is 5 gal, leaving 35 gal to burn. 35 ÷ 10 = 3.5 hours = 210 minutes. Add a personal buffer and you should plan to be on the ground sooner than that.
:::

## Fuel imbalance and the selector

The Skyhawk's tanks feed by gravity through a selector with three positions: **LEFT**, **RIGHT** and **BOTH**. Normal flying is on BOTH, and takeoff and landing are always on BOTH, so a momentarily unported tank in a slip or a bounce cannot starve the engine.

In cruise the tanks do not always feed evenly: flying with the ball off-center, or one wing slightly low for a long time, drains one tank faster. A few gallons of difference is normal. A large one is worth fixing, because a heavy wing is tiring and an empty tank is a surprise you do not want.

| Situation                                | Action                                                            |
| ---------------------------------------- | ----------------------------------------------------------------- |
| Tanks within a few gallons               | Stay on BOTH                                                      |
| One tank several gallons lower in cruise | Select the fuller tank for a while, then back to BOTH             |
| Before descent and landing               | BOTH, confirmed on the before-landing checklist                   |
| Fuel pressure dropping, engine faltering | Fuel pump ON, selector to BOTH or the fuller tank, mixture rich   |
| One gauge reads unexpectedly low         | Believe it until proven otherwise; cross-check time and totalizer |

The fuel shutoff valve is separate from the selector and stays open in flight; it is for fire and shutdown, not balancing. Fuel-starvation accidents almost always have fuel somewhere on the airplane. The selector, the gauges and the clock are how you make sure it reaches the engine.

:::callout{type="verify"}
Confirm the selector positions and the takeoff/landing BOTH requirement against the 172S POH Section 7, confirm how the MSFS 2024 Skyhawk models uneven tank feed and the selector (does LEFT/RIGHT actually change the flow?), and confirm the fuel-pump and selector actions in the engine-faltering row against POH Section 3 and `aircraft.yaml`.
:::

:::quiz{id="l9-4-q4" type="single"}
For takeoff and landing the fuel selector should be on…

- [ ] LEFT, so the pilot's side tank feeds first
- [ ] whichever tank is fuller
- [x] BOTH
- [ ] OFF until airborne

---

BOTH gives the engine two tanks to draw from in the phases where a stumble is least welcome. Use a single tank only in cruise, to balance, and go back to BOTH before descent.
:::

## Practice and next steps

Four things to carry forward:

1. Lean in cruise: find peak EGT, then enrich a little. Re-lean after every altitude or power change.
2. Below about 3,000 ft pressure altitude climb full rich; above it, and for high-altitude takeoffs, lean for maximum RPM.
3. Fuel required = taxi and climb + time × burn + legal reserve + your buffer. Write down the time you must be on the ground.
4. BOTH for takeoff and landing; single tanks only to balance in cruise.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck: usable fuel, the planning burn, the day and night reserves, and the fuel selector rule.

**Fly it.** Challenge C9.3 "Lean and log" has you climb to cruise, lean on the G1000 lean page, and log fuel at three checkpoints against your plan. That closes Module 9. Module 10 returns to the runway with [[l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]].
