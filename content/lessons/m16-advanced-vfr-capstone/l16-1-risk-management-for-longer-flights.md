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
resources: [faa-risk-management-handbook, phak-ch2, phak-ch17, aim]
published: false
lastVerifiedAt: null
simVersion: null
---

<!-- ltf:unverified-warning:start (managed by `npm run content:warnings`, do not edit) -->

> [!CAUTION]
> **UNVERIFIED CONTENT: NOT FOR LEARNING USE**
>
> This lesson is an unverified draft. It has not been checked in Microsoft Flight
> Simulator 2024 or against official sources, so its numbers, procedures and steps may be
> wrong. Do not use it to learn to fly, in the sim or in a real aircraft. Only verified
> content is published on the Learn to Fly site.

<!-- ltf:unverified-warning:end -->

## Decisions on a long flight

Course 1 taught you to make one good decision before you fly: PAVE, IMSAFE, personal minimums, go or no-go. That works for a 40-minute hop to Tracy. Course 2 needs more.

Livermore to Truckee takes about 2 hours. It crosses a valley, a mountain pass and a high-elevation runway, and lands in different weather from the weather you took off in. Your fuel goes down and you get tired. You have to make the decision from the ramp again and again, all the way to the destination.

This lesson gives you a tool for that, the **5P check**, then updates your personal minimums for Course 2, revisits the hazardous attitudes after 2 hours in the seat, and ends with fatigue. It builds on [[l8-1-decision-making-and-personal-minimums]] and [[l11-6-the-go-no-go-decision-and-vfr-into-imc]] and does not replace them.

## The 5P check

PAVE asks four questions once. The **5P check** asks five questions several times: **Plan, Plane, Pilot, Passengers, Programming**. Each one covers a source of risk, and each can change while you fly.

| P               | Ask yourself                                                     | What changes on a long flight                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| **Plan**        | Route, weather, fuel, timing, alternate: still what I briefed?   | Weather ahead, daylight left, a closed destination     |
| **Plane**       | Fuel, oil, electrical load, any indication I have been ignoring? | Fuel burned, a weak alternator, rising oil temperature |
| **Pilot**       | IMSAFE, again. Hungry, thirsty, tired, needing a bathroom?       | Fatigue builds and attention narrows                   |
| **Passengers**  | Comfortable, quiet when I need quiet, not pushing my decisions?  | A sick passenger, or one who "has to be back by 5"     |
| **Programming** | Is the G1000 set for the next phase? Am I heads-down too long?   | A missed waypoint, a frequency not loaded              |

Run the whole check again at each of the five points PHAK Chapter 2 names: preflight; just before takeoff; the midpoint of the flight, or every hour on a flight longer than 2 hours; before descent, with the destination weather in hand; and just before entering the pattern. The fourth check matters most. At the top of descent you still have the fuel and altitude to go somewhere else. On short final you do not.

:::quiz{id="l16-1-q1" type="single"}
At the top of descent into Truckee the ATIS now gives winds 240° at 18 kt gusting 26 kt: about 13 kt of crosswind on Runway 29, and nearly 19 kt in the gusts. Which P has changed, and what do you do?

- [ ] Plane: lean the mixture for the descent and continue
- [x] Plan: compare the crosswind with your personal minimum and decide now whether to divert
- [ ] Programming: load the runway into the flight plan and continue
- [ ] Passengers: ask whether they mind a bumpy landing

---

Weather is part of the **Plan**, and it has changed. Top of descent is the last point where a diversion is easy, so compare the numbers with your worksheet and decide before you lose the altitude.
:::

## The personal minimums worksheet

In Course 1 you wrote five numbers: wind, crosswind, visibility, cloud base and fuel at landing. Course 2 adds density altitude, night, mountains and longer legs, so the worksheet grows. The kneeboard for Challenges C11.1 and C16.2 prints it. Fill it in now, calm and on the ground, not at the top of descent with a gusting ATIS.

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

**A minimum is a decision already made.** If conditions exceed the number, you do not go, or you divert, with no new reasoning. **Relax one line at a time**, after a flight that went well, never because today's weather needs it.

:::callout{type="verify"}
Author decision: the starting values are the author's figures. Desk-verified 2026-10-13: the Risk Management Handbook (FAA-H-8083-2A) Chapter 2 prescribes no numbers, only a sample table built from the pilot's own experience, and `aircraft.yaml` gives 15 kt for `{{aircraft.maxCrosswind}}`. Still open: v2 Section 21.8 lists the kneeboard's planning sheet but not this worksheet; confirm it prints.
:::

:::quiz{id="l16-1-q2" type="single"}
Your written crosswind minimum is 12 kt. The destination reports a 14 kt component, but you flew a 15 kt crosswind in Challenge C10.1 last week and it went fine. What does the worksheet say?

- [ ] Land; you have proven you can do it
- [x] Divert; the minimum stands until you change it on the ground
- [ ] Land, then raise the minimum to 15 kt
- [ ] Ask for a different runway and land whatever the component

---

A minimum is a decision made in advance. You may raise it to 15 kt after a calm review on the ground, never on downwind because today needs it. The worksheet exists to resist that pressure.
:::

## The hazardous attitudes after two hours

You met the five hazardous attitudes and their antidotes in [[l8-1-decision-making-and-personal-minimums]]. What changes on a long flight is how they sound, because by then you are invested: a week of planning, 2 hours of flying, the destination in sight. Pilots call it **get-there-itis**. The formal name is **plan continuation bias**. The longer you have followed a plan, the harder it is to abandon.

| Attitude        | How it sounds at hour two                                        | Antidote                                    |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| Anti-authority  | "Approach wants me at 6,500. I'll stay higher, they won't care." | Follow the rules. They are usually right.   |
| Impulsivity     | "Truckee's closed? Fine, Reno, now." (before checking the fuel)  | Not so fast. Think first.                   |
| Invulnerability | "I've crossed Donner before. The build-ups won't be a problem."  | It could happen to me.                      |
| Macho           | "Fourteen knots of crosswind? I've got this."                    | Taking chances is foolish.                  |
| Resignation     | "The weather's changed; nothing I can do about it now."          | I am not helpless. I can make a difference. |

Every sentence in the middle column is a reason to keep going. Nobody has a hazardous attitude about turning back. When you catch yourself building a case for continuing, run the 5P check and read your minimums.

:::callout{type="decision"}
Your turn-back point for Donner Pass is Blue Canyon. You arrive 20 minutes late and the build-ups over the summit are taller than briefed. Nobody is watching. Which attitude is at work, and what does the antidote say? Turning back to Auburn is a pass in C16.2, and a good one.
:::

:::quiz{id="l16-1-q3" type="single"}
"I have flown this route three times, and the pass has never been a problem." Which hazardous attitude is this, and what is the antidote?

- [ ] Macho: "Taking chances is foolish."
- [x] Invulnerability: "It could happen to me."
- [ ] Resignation: "I am not helpless."
- [ ] Anti-authority: "Follow the rules."

---

Relying on past success is **invulnerability**. Three good crossings say nothing about today's wind and clouds.
:::

## Fatigue on long flights

Fatigue is the F in IMSAFE. On a short flight you answer it at the ramp. On a long one, the answer changes in the air. **Acute** fatigue comes from the day (a short night, a long drive, 2 hours of concentration) and rest fixes it. **Chronic** fatigue builds when there is not enough recovery between tired days. One good night does not fix it, and you stop noticing it.

Fatigue also removes your ability to notice fatigue, so watch for its effects instead:

| Sign                    | In the cockpit                                 |
| ----------------------- | ---------------------------------------------- |
| Narrowed attention      | You stare at one instrument and the scan stops |
| Skipped checklist items | "I'll do the descent checklist in a minute"    |
| Tolerating drift        | 200 ft low and you shrug                       |
| Irritation              | Snapping at a routine readback request         |

The countermeasures are simple. Sleep before the flight. Eat and drink during it. Plan no leg longer than 2.5 hours, even if the fuel would stretch, and get out of the seat at the stop. Write a time limit into your worksheet so you make the decision to stop before you are too tired to make it.

:::callout{type="sim"}
A sim cannot make you fly tired, but it can make you fly bored, and the symptoms overlap. The scan stops and the altitude drifts. Treat a 2-hour session like a 2-hour leg, and use the pauses between C16.2's legs.
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

To carry forward:

1. The 5P check runs at five points: preflight, before takeoff, the midpoint of the flight (hourly beyond 2 hours), before descent and before entering the pattern.
2. A personal minimum is a decision already made. Relax one line at a time, on the ground.
3. Every hazardous attitude is an argument for continuing. When you hear one, check the numbers.

**Practice.** This lesson feeds the `airspace-and-minimums` deck with the five Ps and the five antidotes.

:::callout{type="verify"}
Author decision: the `airspace-and-minimums` deck slug exists in v2 Section 14.4 but no deck file exists yet; confirm it is the home for the 5P and antidote cards. The 2.5-hour leg and 10-hours-awake limits are the author's figures; desk-verified 2026-10-13 that neither the Risk Management Handbook nor PHAK Chapters 2 and 17 gives a number (PHAK 2 only asks for an hourly 5P check on flights over 2 hours).
:::

**Next.** [[l16-2-preparing-for-the-advanced-vfr-stage-check]] describes the two flights that finish Course 2. Print the worksheet first.
