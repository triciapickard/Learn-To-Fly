---
slug: l6-1-reading-a-sectional-chart
code: L6.1
module: m6-vfr-navigation
order: 1
priority: P0
title: Reading a sectional chart
summary: The VFR pilot's map — airports, terrain, obstacles, navaids and the landmarks you'll navigate by.
estimatedMinutes: 25
prerequisites: [l1-4-speeds-limits-and-checklists]
objectives:
  - Identify airports, navaids, terrain, obstacles and maximum elevation figures on a sectional.
  - Read an airport data block.
  - Choose landmarks that make good checkpoints.
challenges: [c6-1-landmark-hunt]
resources: [faa-chart-users-guide, faa-vfr-charts, skyvector, phak-ch16]
published: false
lastVerifiedAt: null
simVersion: null
---

## What a sectional is

A **sectional chart** is the standard map for VFR flying in the US. It shows everything you need to fly by looking outside: airports, airspace, terrain, obstacles, radio navigation aids and landmarks.

- The FAA publishes them **free** as downloads, updated every 56 days. Download the **San Francisco** sectional for this module.
- **SkyVector** shows the same charts in your browser, and lets you draw a route and read distances.
- Around busy airports, a **Terminal Area Chart (TAC)** shows the same area at twice the scale.

:::callout{type="sim"}
MSFS has its own VFR map, but it doesn't show everything a sectional does. Plan with the real chart, just as a real pilot would.
:::

## Scale and position

- **Scale.** A sectional is 1:500,000, about **6.86 nm per inch**. A TAC is 1:250,000.
- **Latitude and longitude.** Tick marks along the grid lines mark every minute. One minute of latitude is **1 nautical mile**, which makes a handy ruler: the latitude scale on the side of the chart measures distance.

## Explore the chart

Click each symbol on this simplified chart of the Livermore area to find out what it means. It's an original drawing, not a real chart. Always use the current FAA chart for planning.

::widget{name="sectional-legend" mode="explore"}

## Airports and data blocks

- **Blue** airport symbols are **towered** airports. **Magenta** symbols are **non-towered**.
- A **circle with runways drawn inside** means hard-surfaced runways from 1,500 to 8,069 ft long. Longer runways are drawn on their own, without the circle.
- **Tick marks** around the circle mean services, such as fuel, are available.
- A **star** on top means a rotating beacon.

Next to each airport is a **data block**: the name, identifier, tower frequency (a ★ means part-time), ATIS, field elevation, lighting, the **longest runway in hundreds of feet**, and the CTAF, marked with a Ⓒ. "RP" means right traffic for the runways listed.

:::callout{type="verify"}
Author note: check each airport symbol against the current Aeronautical Chart User's Guide.
:::

:::quiz{id="l6-1-q1" type="single"}
What does a magenta airport symbol mean?

- [ ] A towered airport
- [x] A non-towered airport
- [ ] A military airport
- [ ] A closed airport

---

**Non-towered.** Blue airports have a control tower; magenta ones don't.
:::

:::quiz{id="l6-1-q2" type="single"}
Where do you find the length of the longest runway?

- [ ] On the runway symbol itself
- [x] In the airport data block, in hundreds of feet
- [ ] In the chart legend
- [ ] Only in the Chart Supplement

---

In the **airport data block**, in hundreds of feet. "52" means 5,200 ft.
:::

## Terrain and obstacles

- **Color tints** show terrain elevation, from green in the lowlands to tan and brown higher up.
- Each quadrangle of latitude and longitude has a **Maximum Elevation Figure** (MEF), the height of the highest terrain or obstacle in it, rounded up. A large 3 with a small 5 means **3,500 ft MSL**.
- **Obstacles**, like towers, show two heights: the top in feet MSL (in bold) and the height above the ground in brackets.

:::quiz{id="l6-1-q3" type="single"}
An MEF shows a large 3 and a small 5. What does it mean?

- [ ] 35 ft
- [ ] 350 ft
- [x] 3,500 ft MSL is the highest terrain or obstacle in that quadrangle
- [ ] Fly at 3,500 ft

---

**3,500 ft MSL**: the maximum elevation figure for that quadrangle.
:::

## Navaids and magnetic variation

- **VORs** appear as compass roses, with a box giving the name, frequency and Morse identifier. Lesson 6.4 covers flying them.
- **Isogonic lines** are dashed magenta lines showing **magnetic variation**, the difference between true north and magnetic north. In the Bay Area it's about 13° east. You'll use it in Lesson 6.3.

## Landmarks

For navigating by sight, the best landmarks are **big, unique and easy to see**:

- Water, such as lakes, reservoirs and shorelines.
- Major highways and their interchanges, and railroads.
- Towns and cities.
- Prominent peaks, like Mount Diablo.
- Distinctive features, like the Altamont Pass wind farms.

Small roads and creeks look alike from the air. Avoid them as checkpoints.

## Practice on SkyVector

Open SkyVector, choose the San Francisco sectional and find:

1. **Livermore (KLVK)**. What color is the symbol, and what's the tower frequency?
2. **Tracy (KTCY)**, to the east. Is it towered?
3. **Altamont Pass**, between them.
4. **Lake Del Valle**, south of Livermore.
