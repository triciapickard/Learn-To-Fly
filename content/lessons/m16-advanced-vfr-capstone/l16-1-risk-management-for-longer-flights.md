---
slug: l16-1-risk-management-for-longer-flights
code: L16.1
module: m16-advanced-vfr-capstone
order: 1
priority: P0
title: Risk management for longer flights
summary: The 5P check at every phase of flight, a personal minimums worksheet for Course 2 flying, the hazardous attitudes on a long day, and fatigue.
estimatedMinutes: 20
prerequisites: [l15-5-flying-on-vatsim]
objectives:
  - Run the 5P check at each phase of a longer flight and name the item most likely to have changed.
  - Fill in a personal minimums worksheet that covers crosswind, density altitude, night, mountains and fuel.
  - Recognize the five hazardous attitudes as they sound on a long cross-country and apply the antidote.
  - Recognize the signs of fatigue and decide when to shorten a flight.
challenges: []
resources: [faa-risk-management-handbook, phak-ch2, phak-ch17]
published: false
lastVerifiedAt: null
simVersion: null
---

## Two hours is a long time

Course 1 taught you to make one good decision before you fly: PAVE, IMSAFE, personal minimums, go or no-go. That works for a 40-minute hop to Tracy. Course 2 needs more.

Livermore to Truckee takes about 2 hours. It crosses a valley, a mountain pass and a high-elevation runway, and lands in different weather from the weather you took off in. Fuel shrinks. You get tired. A decision made once at the ramp has to be made again, all the way to the destination.

This lesson gives you a tool for that, the **5P check**, then updates your personal minimums for Course 2, revisits the hazardous attitudes after 2 hours in the seat, and ends with fatigue. It builds on [[l8-1-decision-making-and-personal-minimums]] and [[l11-6-the-go-no-go-decision-and-vfr-into-imc]]; nothing here replaces them.

## The 5P check

PAVE asks four questions once. The **5P check** asks five questions several times: **Plan, Plane, Pilot, Passengers, Programming**. Each is a place risk hides, and each can change while you fly.

| P               | Ask yourself                                                     | What changes on a long flight                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| **Plan**        | Route, weather, fuel, timing, alternate: still what I briefed?   | Weather ahead, daylight left, a closed destination     |
| **Plane**       | Fuel, oil, electrical load, any indication I have been ignoring? | Fuel burned, a lazy alternator, rising oil temperature |
| **Pilot**       | IMSAFE, again. Hungry, thirsty, tired, needing a bathroom?       | Fatigue builds and attention narrows                   |
| **Passengers**  | Comfortable, quiet when I need quiet, not pushing my decisions?  | A sick passenger; one who "has to be back by 5"        |
| **Programming** | Is the G1000 set for the next phase? Am I heads-down too long?   | A missed waypoint, a frequency not loaded              |

The important word is **again**. Run the whole check at five fixed points: preflight; before takeoff; top of climb; before descent, with the destination weather in hand; and just before the approach. The fourth check saves flights. At the top of descent you still have the fuel and altitude to go somewhere else. On short final you do not.

:::quiz{id="l16-1-q1" type="single"}
At the top of descent into Truckee the ATIS now gives winds 240° at 18 kt gusting 26 kt, a 15 kt crosswind component on the runway in use. Which P has changed, and what do you do?

- [ ] Plane: lean the mixture for the descent and continue
- [x] Plan: compare the crosswind with your personal minimum and decide now whether to divert
- [ ] Programming: load the runway into the flight plan and continue
- [ ] Passengers: ask whether they mind a bumpy landing

---

Weather is part of the **Plan**, and it has changed. Top of descent is the last point where a diversion is easy, so compare the numbers with your worksheet and decide before you lose the altitude.
:::

## The personal minimums worksheet

In Course 1 you wrote five numbers: wind, crosswind, visibility, cloud base and fuel at landing. Course 2 adds density altitude, night, mountains and longer legs, so the worksheet grows. The kneeboard for Challenges C11.1 and C16.2 prints it. Fill it in **now**, calm and on the ground, not at the top of descent with a gusting ATIS.

| Item                                  | A Course 2 starting point                                          | My minimum |
| ------------------------------------- | ------------------------------------------------------------------ | ---------- |
| Maximum surface wind                  | 20 kt steady                                                       |            |
| Maximum crosswind component           | 12 kt, well under the {{aircraft.maxCrosswind}} demonstrated value |            |
| Maximum gust spread                   | 8 kt                                                               |            |
| Minimum visibility                    | 5 sm; 8 sm in the mountains                                        |            |
| Minimum cloud base                    | 3,000 ft AGL; 2,000 ft above the highest ridge on the route        |            |
| Maximum density altitude for takeoff  | 7,000 ft, with a runway twice the chart distance                   |            |
| Minimum fuel at landing               | 1 hour, and no leg longer than 2.5 hours                           |            |
| Night                                 | Known airports only; a night landing in the last 30 days           |            |
| Maximum time awake before a challenge | 10 hours                                                           |            |

Two rules. **A minimum is a decision already made**: if the number is exceeded you do not go, or you divert, with no new reasoning. And **relax one line at a time**, after a flight that went well, never because today's weather needs it.

:::callout{type="verify"}
The starting values are the author's suggestions for a sim learner, not from a published source. Check them against the Risk Management Handbook personal minimums checklist (FAA-H-8083-2A) and `aircraft.yaml`; confirm the kneeboard prints this worksheet (v2 Section 21.8).
:::

:::quiz{id="l16-1-q2" type="single"}
Your written crosswind minimum is 12 kt. The destination reports a 14 kt component, but you flew a 15 kt crosswind in Challenge C10.1 last week and it went fine. What does the worksheet say?

- [ ] Land; you have proven you can do it
- [x] Divert; the minimum stands until you change it on the ground
- [ ] Land, then raise the minimum to 15 kt
- [ ] Ask for a different runway and land whatever the component

---

A minimum is a decision made in advance. You may raise it to 15 kt after a calm review on the ground, not on downwind because today needs it. That pressure is what the worksheet exists to resist.
:::

## The hazardous attitudes after two hours

You met the five hazardous attitudes and their antidotes in [[l8-1-decision-making-and-personal-minimums]]. What changes on a long flight is how they sound, because by then you are invested: a week of planning, 2 hours of flying, the destination in sight. Pilots call it **get-there-itis**; the formal name is **plan continuation bias**. The longer you have followed a plan, the harder it is to abandon.

| Attitude        | How it sounds at hour two                                        | Antidote                                    |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| Anti-authority  | "Approach wants me at 6,500. I'll stay higher, they won't care." | Follow the rules. They are usually right.   |
| Impulsivity     | "Truckee's closed? Fine, Reno, now." (before checking the fuel)  | Not so fast. Think first.                   |
| Invulnerability | "I've crossed Donner before. The build-ups won't be a problem."  | It could happen to me.                      |
| Macho           | "Fourteen knots of crosswind? I've got this."                    | Taking chances is foolish.                  |
| Resignation     | "The weather's changed; nothing I can do about it now."          | I am not helpless. I can make a difference. |

Every sentence in the middle column is a reason to **keep going**. Nobody has a hazardous attitude about turning back. When you catch yourself building a case for continuing, run the 5P check and read your minimums.

:::callout{type="decision"}
Your turn-back point for Donner Pass is Blue Canyon. You arrive 20 minutes late and the build-ups over the summit are taller than briefed. Nobody is watching. Which attitude is talking, and what does the antidote say? Turning back to Auburn is a pass in C16.2, and a good one.
:::

:::quiz{id="l16-1-q3" type="single"}
"I have flown this route three times, and the pass has never been a problem." Which hazardous attitude is this, and what is the antidote?

- [ ] Macho: "Taking chances is foolish."
- [x] Invulnerability: "It could happen to me."
- [ ] Resignation: "I am not helpless."
- [ ] Anti-authority: "Follow the rules."

---

Past success is the voice of **invulnerability**. Three good crossings say nothing about today's wind and clouds.
:::

## Fatigue on long flights

Fatigue is the F in IMSAFE. On a short flight you answer it at the ramp; on a long one the answer changes in the air. **Acute** fatigue comes from the day (a short night, a long drive, 2 hours of concentration) and rest fixes it. **Chronic** fatigue builds over days of poor sleep, one good night does not fix it, and you stop noticing it.

That is the dangerous part. Fatigue removes the ability to notice fatigue, so watch for what it does instead:

| Sign                    | In the cockpit                              |
| ----------------------- | ------------------------------------------- |
| Narrowed attention      | You stare at one instrument; the scan stops |
| Skipped checklist items | "I'll do the descent checklist in a minute" |
| Tolerating drift        | 200 ft low and you shrug                    |
| Irritation              | Snapping at a routine readback request      |

The counter-measures are unglamorous. Sleep before the flight. Eat and drink during it. Plan no leg longer than 2.5 hours, even if the fuel would stretch, and get out of the seat at the stop. Write a time limit into your worksheet so the decision to stop is made before you are too tired to make it.

:::callout{type="sim"}
A sim cannot make you fly tired, but it can make you fly bored, and the symptoms overlap: the scan stops and the altitude drifts. Treat a 2-hour session like a 2-hour leg, and use the pauses between C16.2's legs.
:::

:::quiz{id="l16-1-q4" type="multi"}
Which of these are early signs of fatigue in the cockpit? Pick all that apply.

- [x] Your scan narrows to one instrument
- [x] You accept an altitude 200 ft off without correcting it
- [ ] You feel sleepy and know it
- [x] A routine request from ATC annoys you

---

Feeling sleepy is the one sign you cannot rely on, because fatigue dulls the sense of being fatigued. A stalled scan, tolerated drift and irritability show up first.
:::

## Practice and next steps

Three things to carry forward:

1. The 5P check runs at five points: preflight, before takeoff, top of climb, before descent and before the approach.
2. A personal minimum is a decision already made. Relax one line at a time, on the ground.
3. Every hazardous attitude is an argument for continuing. When you hear one, check the numbers.

**Practice.** This lesson feeds the `airspace-and-minimums` deck with the five Ps and the five antidotes.

:::callout{type="verify"}
Confirm the flashcard deck for the 5P and antidote cards (v2 Section 18); `airspace-and-minimums` is a placeholder. Check the 2.5-hour leg and 10-hours-awake figures against the Risk Management Handbook and PHAK Chapter 17.
:::

**Next.** [[l16-2-preparing-for-the-advanced-vfr-stage-check]] describes the two flights that finish Course 2. Print the worksheet first.
