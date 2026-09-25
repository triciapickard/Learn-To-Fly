---
slug: l1-1-the-airframe-and-flight-controls
code: L1.1
module: m1-meet-the-skyhawk
order: 1
priority: P0
title: The airframe and flight controls
summary: The parts of the Skyhawk, the control surfaces that move it, and the three axes it rotates around.
estimatedMinutes: 15
prerequisites: [l0-1-welcome-how-learn-to-fly-works]
objectives:
  - Name the main parts of the airframe.
  - Identify each control surface and the cockpit control that moves it.
  - Describe the three axes of rotation and which surface controls each one.
challenges: []
resources: [phak-ch3, phak-ch6, afh-ch3]
published: false
lastVerifiedAt: null
simVersion: null
---

## The Skyhawk at a glance

The Cessna 172 Skyhawk is the most-produced airplane in history, and one of the most common training airplanes in the world. Flight schools love it because it is stable, forgiving and easy to see out of.

Some things to know about the 172S you fly in the sim:

- **High wing.** The wing is mounted on top of the cabin. You get a great view of the ground, but you have to lift a wing (or look carefully) to check for traffic above you in a turn.
- **Four seats.** Two in front, two in the back.
- **Fixed tricycle landing gear.** Two main wheels under the cabin and a steerable nose wheel. The gear never retracts.
- **One engine and a fixed-pitch propeller.** {{aircraft.engine}}, making {{aircraft.horsepower}}.

| Item           | Value                 |
| -------------- | --------------------- |
| Wingspan       | {{aircraft.wingspan}} |
| Length         | {{aircraft.length}}   |
| Maximum weight | {{aircraft.mtow}}     |
| Seats          | {{aircraft.seats}}    |

## Parts of the airframe

Every airplane has the same five main parts:

- **Fuselage.** The body. It holds the cabin, the instrument panel and the baggage area, and everything else attaches to it.
- **Wings.** They make the lift that holds the airplane up. On the Skyhawk they also hold the fuel tanks.
- **Empennage.** The tail: the vertical stabilizer with the rudder, and the horizontal stabilizer with the elevator. It keeps the airplane pointing straight, like the feathers on an arrow.
- **Landing gear.** The wheels, tires and brakes.
- **Powerplant.** The engine and propeller that pull the airplane forward.

## The three axes

An airplane can rotate in three ways, around three imaginary lines (axes) that all pass through its center of gravity:

| Axis                         | Motion | Controlled by | Cockpit control       |
| ---------------------------- | ------ | ------------- | --------------------- |
| Longitudinal (nose to tail)  | Roll   | Ailerons      | Yoke left and right   |
| Lateral (wingtip to wingtip) | Pitch  | Elevator      | Yoke forward and back |
| Vertical (top to bottom)     | Yaw    | Rudder        | Rudder pedals         |

Move the controls in the explorer below and watch which surfaces move and how the airplane rotates. Try the quiz mode when you're ready.

::widget{name="control-surfaces" mode="explore"}

A turn uses all three: the ailerons **roll** the airplane into a bank, the elevator adds a little back pressure to **pitch** the nose around the turn, and the rudder keeps the nose from **yawing** the wrong way. You'll practice that in Module 2.

:::quiz{id="l1-1-q1" type="single"}
You move the yoke to the left. What happens to the ailerons?

- [x] The left aileron goes up and the right aileron goes down
- [ ] The left aileron goes down and the right aileron goes up
- [ ] Both ailerons go up
- [ ] The ailerons don't move; the rudder does

---

The left aileron goes **up**, reducing lift on the left wing, and the right aileron goes **down**, increasing lift on the right wing. The airplane rolls left.
:::

:::quiz{id="l1-1-q2" type="single"}
Which axis does the rudder control?

- [ ] Roll, around the longitudinal axis
- [ ] Pitch, around the lateral axis
- [x] Yaw, around the vertical axis

---

The rudder swings the tail left or right, so the nose yaws around the **vertical** axis.
:::

## Flaps and trim

**Flaps** are panels on the inboard trailing edge of each wing. Lowering them makes more lift **and** more drag, so you can fly slower and descend more steeply, which is useful for landing. The Skyhawk's flaps are electric, with four positions: {{aircraft.flaps}}. There's a flap switch and a position indicator on the lower panel.

The **trim tab** is a small hinged panel on the trailing edge of the elevator, moved by the trim wheel (or trim buttons). Once you've set the pitch attitude you want, you roll in trim until you no longer need to push or pull on the yoke. Trimming doesn't change what the airplane does; it removes the effort of holding it there.

:::quiz{id="l1-1-q3" type="single"}
What does the elevator trim tab do?

- [ ] It makes the airplane climb faster
- [x] It relieves control pressure so the airplane holds a pitch attitude by itself
- [ ] It locks the elevator in place on the ground
- [ ] It adds drag for landing

---

Trim relieves the pressure you'd otherwise hold on the yoke, so the airplane keeps the pitch attitude you set. You'll use it constantly from Module 2 on.
:::

## Steering on the ground

On the ground the yoke doesn't steer. Instead:

- **Rudder pedals** steer the nose wheel. Push the left pedal to turn left.
- **Toe brakes** on the top of each pedal brake the wheel on that side. Pressing one brake more than the other (differential braking) tightens a turn.

Taxi slowly, and use brakes gently. You'll learn taxiing properly in Module 3.

## Seeing it in the sim

Start at a parking spot with the engine off. Switch to an outside view, then move the yoke and pedals and watch the ailerons, elevator and rudder move. Lower the flaps one step at a time (the battery needs to be on) and watch them extend.

:::callout{type="sim"}
In a real Skyhawk the controls push back: the faster you fly, the heavier they feel, and you can feel the airplane through the yoke. Most sim hardware has no control forces at all, which is why it's so easy to over-control. Make small, smooth inputs and watch what the airplane does.
:::
