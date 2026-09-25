---
slug: l1-3-engine-fuel-and-electrical-systems
code: L1.3
module: m1-meet-the-skyhawk
order: 3
priority: P0
title: Engine, fuel and electrical systems
summary: How the throttle, mixture, fuel selector, master switches and magnetos work, and why each is set the way the checklist says.
estimatedMinutes: 15
prerequisites: [l1-2-the-cockpit-g1000-pfd-and-mfd]
objectives:
  - Explain what the throttle and mixture do.
  - Describe the fuel system and the correct fuel selector position for takeoff and landing.
  - Describe the roles of the master switch, the avionics master and the magnetos.
challenges: []
resources: [phak-ch7, cessna-skyhawk]
published: false
lastVerifiedAt: null
simVersion: null
---

## The engine

The Skyhawk has a {{aircraft.engine}} engine making {{aircraft.horsepower}}. It drives a {{aircraft.propeller}} propeller.

Because the propeller's blade angle never changes, **engine RPM is a direct measure of power**. More throttle, more RPM, more power. That's why the lessons talk about power settings in RPM: about 2,300 RPM for cruise, about 1,500 RPM to descend in the pattern.

## Throttle and mixture

Two knobs control the engine:

- **Throttle (black).** Push in for more power, pull out for less.
- **Mixture (red).** Sets the ratio of fuel to air. Push in for **rich** (more fuel), pull out to **lean** (less fuel). Pulling it all the way out is **idle cut-off**: no fuel reaches the cylinders and the engine stops.

Air gets thinner as you climb. At altitude a full-rich mixture has too much fuel for the air available, so you lean it in cruise for smoother running and better economy. At the low Bay Area airports you'll use full rich for takeoff and landing and lean in cruise.

:::callout{type="safety"}
Shut the engine down with the mixture: pull it to idle cut-off. Never shut down by turning the magnetos off first. It leaves fuel in the cylinders and can damage the engine.
:::

## The fuel system

Fuel flows like this:

1. Two **wing tanks**, one in each wing. Total capacity {{aircraft.fuelCapacity}}.
2. The **fuel selector** on the floor between the seats: **LEFT**, **RIGHT**, **BOTH** or **OFF**.
3. The engine-driven **fuel pump**, with an electric **auxiliary pump** for starting and as a backup.
4. The **fuel injection** system, which sprays fuel into each cylinder.

Use **BOTH** for takeoff, landing and most flying. It feeds from both tanks, so you can't accidentally run one dry at a bad moment.

The fuel is {{aircraft.fuelType}}. The EIS on the MFD shows fuel quantity in each tank and the fuel flow. For simple planning, use about **10 gallons per hour**. Real fuel burn at cruise is a little lower, so this leaves you a margin.

:::quiz{id="l1-3-q1" type="single"}
Where should the fuel selector be for takeoff?

- [ ] LEFT
- [ ] RIGHT
- [x] BOTH
- [ ] OFF

---

**BOTH.** The engine feeds from both tanks, so a single tank running low can't starve it during takeoff or landing.
:::

:::quiz{id="l1-3-q4" type="numeric" answer="20" tolerance="0" unit="gal"}
Using the planning figure of 10 gallons per hour, how many gallons do you need for a 2-hour flight, before adding any reserve?

---

2 hours × 10 gallons per hour = **20 gallons**. Always add a reserve on top: at least 30 minutes of fuel for day VFR flights (about 5 more gallons).
:::

## The electrical system

- **Battery.** Powers everything before the engine starts.
- **Alternator.** Driven by the engine; it powers the airplane and recharges the battery once running.
- **Master switch.** A split switch: **BAT** connects the battery, **ALT** connects the alternator. Normally both on or both off.
- **Avionics master.** Powers the G1000 and radios. It stays **off during engine start**: the starter draws a big current and can cause voltage spikes that harm sensitive electronics. Turn it on after the engine is running.

:::quiz{id="l1-3-q2" type="single"}
Why is the avionics master off during engine start?

- [ ] To save fuel
- [ ] Because the G1000 needs the engine running first
- [x] To protect the avionics from voltage spikes during the start
- [ ] So the magnetos work

---

The starter motor draws a large current, and the voltage can dip and spike. Keeping the avionics off during the start protects them.
:::

## Ignition and magnetos

The spark plugs are fired by **magnetos**: small generators driven by the engine. They don't need the battery at all, so the engine keeps running even if the electrical system fails.

There are **two magnetos**, and each cylinder has two spark plugs, one from each. That gives:

- **Redundancy.** If one magneto fails, the other keeps the engine running.
- **Better combustion.** Two sparks burn the fuel more completely.

The key switch has five positions: **OFF, R, L, BOTH, START**. You start on START, fly on BOTH, and check each magneto on its own (R, then L) during the run-up.

:::quiz{id="l1-3-q3" type="single"}
Why does the engine have two magnetos?

- [ ] One for starting and one for flying
- [x] For redundancy, and more efficient combustion
- [ ] One for each wing tank
- [ ] To charge the battery

---

Two independent magnetos mean the engine keeps running if one fails, and two sparks per cylinder burn the mixture more completely.
:::

## Fuel injected, not carbureted

The 172S is **fuel injected**. Older Skyhawks have a carburetor, which can ice up in humid air and needs **carburetor heat**. The injected engine can't get carburetor ice, so there's no carb heat knob in the 172S.

:::callout{type="verify"}
Author note: confirm that both MSFS 2024 Skyhawk variants model a fuel-injected engine. If the classic variant has a carburetor, add a Classic panel callout about carb heat here and in the landing lessons.
:::

:::callout{type="sim"}
In the sim, engine failures only happen if you enable failures or run out of fuel. Real engines are very reliable, but pilots still practice for failures, and so will you in Lesson 5.4.
:::
