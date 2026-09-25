---
slug: l6-6-planning-a-cross-country-flight
code: L6.6
module: m6-vfr-navigation
order: 6
priority: P0
title: Planning a cross-country flight
summary: Put it all together — route, altitude, nav log, fuel and a plan B.
estimatedMinutes: 30
prerequisites: [l6-3-pilotage-and-dead-reckoning, l6-5-gps-navigation-with-the-g1000]
objectives:
  - Produce a nav log for a 30–60 nm flight.
  - Choose a VFR cruising altitude using the hemispheric rule.
  - Brief the departure, route, arrival and a diversion.
challenges: []
resources: [phak-ch16, ecfr-91-151, ecfr-91-159, skyvector]
published: false
lastVerifiedAt: null
simVersion: null
---

## The planning workflow

1. **Choose the route** and checkpoints on SkyVector or the sectional.
2. **Check the airspace** along the route and **choose an altitude**.
3. **Get the weather.** In this course, it's the weather in the challenge brief.
4. **Fill in the nav log**: headings, times and fuel.
5. **Check the fuel.**
6. **Brief the departure and arrival**: runways, pattern and frequencies.
7. **Enter the route in the G1000** as a backup.

## Choosing an altitude

Above 3,000 ft above the ground, VFR flights use the **hemispheric rule**, based on the **magnetic course**:

| Magnetic course | Cruising altitude           | Examples       |
| --------------- | --------------------------- | -------------- |
| 0° to 179°      | **Odd** thousands + 500 ft  | 3,500 or 5,500 |
| 180° to 359°    | **Even** thousands + 500 ft | 4,500 or 6,500 |

A memory aid: going **east** is **odd**. Also check the terrain (the MEFs) and the airspace along your route.

:::quiz{id="l6-6-q1" type="single"}
Your magnetic course is 120°, and you'll cruise more than 3,000 ft above the ground. Which altitude?

- [ ] 4,500 ft
- [x] 3,500 or 5,500 ft
- [ ] 4,000 ft
- [ ] Any altitude

---

Magnetic courses from 0° to 179° use **odd thousands + 500**, such as 3,500 or 5,500 ft.
:::

## The nav log

A **nav log** is a table with one row for each leg of the route. Fill in everything except the actual times before you fly.

| Checkpoint  | Alt   | TC  | Wind   | WCA | TH  | Var  | MH  | Dist | GS  | ETE | ATE |
| ----------- | ----- | --- | ------ | --- | --- | ---- | --- | ---- | --- | --- | --- |
| KLVK → C83  | 3,500 | 049 | 270/15 | −5  | 044 | 13 E | 031 | 12   | 121 | 6   |     |
| C83 → KTCY  | 3,500 | 134 | 270/15 | +5  | 139 | 13 E | 126 | 12   | 120 | 6   |     |
| KTCY → KLVK | 4,500 | 271 | 270/15 | 0   | 271 | 13 E | 258 | 18   | 95  | 11  |     |

This worked example flies Livermore → Byron → Tracy → Livermore at 110 KTAS, with the wind from Lesson 6.3. **ETE** is the estimated time en route in minutes, and **ATE** is the actual time, which you write down in flight. The whole trip is about 42 nm and 23 minutes. The example ignores the time spent climbing.

:::callout{type="verify"}
Author note: measure the courses and distances on SkyVector.
:::

## Fuel

Fuel needed = flight time × fuel burn, **plus a reserve**, plus fuel for taxi and run-up.

- Day VFR needs enough fuel to reach your destination and fly **30 more minutes** at normal cruise (14 CFR 91.151). At night, it's 45 minutes.
- Use **10 GPH** for planning. The Skyhawk's fuel burn is {{aircraft.fuelBurn}}.

For the example: 23 minutes is about 4 gal, the 30-minute reserve is 5 gal, and taxi and run-up are about 1 gal. That's **10 gal** at the very least. Most pilots add a personal buffer on top.

:::quiz{id="l6-6-q2" type="single"}
What's the minimum day VFR fuel reserve?

- [ ] 15 minutes
- [x] 30 minutes at normal cruise
- [ ] 45 minutes at normal cruise
- [ ] 1 hour

---

**30 minutes** at normal cruise speed for day VFR (45 minutes at night).
:::

## Diversions

Sometimes you need to change plans in flight, because of weather, a problem with the airplane or a tired pilot.

1. **Choose a new destination.** The G1000's NRST page helps.
2. **Turn toward it straight away**, on a rough heading from the chart.
3. **Then refine**: work out the distance, and estimate the time. At 100 kt you cover about 1.7 nm per minute.
4. Tell someone, and check the fuel.

## If you get lost

Use the **5 Cs**:

- **Climb.** You'll see further, and radio range improves.
- **Communicate.** Call a nearby facility.
- **Confess.** Tell them you're unsure of your position.
- **Comply** with their instructions.
- **Conserve** fuel. Reduce power to an economical setting.

Then use the GPS or a VOR to fix your position, and go back to pilotage.

## Plan it on SkyVector

Open SkyVector and draw the route KLVK → C83 → KTCY → KLVK. Check the distances against the nav log above. Which airspace does each leg pass through? What's the highest terrain near the route?
