---
author: S
layout: post
title: 'Voltage Regulators: A Refresher'
date: 2022-06-01T18:00:00.000-06:00
tags: electronics

---
![Cover image: a person holds a small voltage regulator PCB in front of a multimeter measuring its output voltage. The multimeter reads 5.03V.](/assets/img/voltReg/8_adjustedEnough.jpg)

Continuing my exploration of cheap-o components from Amazon ([link to the one I bought](https://www.amazon.com/dp/B01MQGMOKI "voltage regulator product link")) for this sound-interactive project, I needed a way to supply multiple voltage levels from a single power socket, so voltage regulators to the rescue. Namely, I needed a speaker amp (VCC = 24V) and ESP32's (VCC = 5V) to both run off of the speaker amp's power brick.

I did NOT want to cut up the relatively-pricey power brick's cord. So I additionally bought some barrel connector extension cords that would just link up between the power brick and the amp, and cut into those cords instead.

![A person's hand holding the two pieces of a barrel connector power cord, cut near one of the plug ends.](/assets/img/voltReg/0_cut.jpg)

It's a pretty standard power cord, so there are two wires: red (VCC) and black (GND), both of which need to have their ends stripped after cutting.

![The cut ends of both wires held up, showing about 0.5in/1cm of insulation stripped from each end, exposing the copper.](/assets/img/voltReg/1_stripWires.jpg)

Now the cord's ready to have the voltage regulator connected. Effectively, what we're doing is tapping into the 24V supply to siphon off the ESP32's smaller power supply. Since 24V is the input voltage, the barrel connector cord needs to go to the board's "IN" side. This particular board has two holes at each connection point (IN + and -, OUT + and -), which makes it easy to insert a cut wire, connecting each end to the same point. I wonder if that's an intentional design feature.

![](/assets/img/voltReg/2_twistIN.jpg)

Once the wires were appropriately inserted, I twisted the cut ends together, then soldered both holes together. The twisting-then-soldering ensured a more solid connection.

![](/assets/img/voltReg/3_solderIN.jpg)

The (sparse) documentation doesn't really give any instructions, but I could glean the adjustment procedure from the buyer reviews. You can't know the output voltage until you supply the input voltage, so I connected the regulator cord to the 24V power supply.

![](/assets/img/voltReg/4_connectPower.jpg)

I grabbed my multimeter, put it on DC voltage measurement, and connected the two leads to the regulator's OUT connections.

\[**NOTE:** [one of the reviews](https://www.amazon.com/gp/customer-reviews/R2IE8EMWTWPTL2/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01MQGMOKI) warns against adjusting the output voltage this way, on an open circuit without any load. I was fine, but if this is a concern, you can connect a decent-size resistor (3-5kΩ) across OUT along with the multimeter leads.\]

![](/assets/img/voltReg/5_connectMultimeter.jpg)

The regulators all ship with some random output voltage, since the trim pot on the board is positioned somewhere in the middle of its range.

![](/assets/img/voltReg/6_multimeterVoltage.jpg)

I found a flat-head screwdriver more effective than a Phillips-head for actually turning the trim pot, but your mileage may vary. There aren't any set divisions on the trim pot to set a particular voltage, so you have to rely on manual dexterity to turn the tiny plate to _just_ the right position. At the same time, watch the reading on the multimeter to see how close you're getting to the right output voltage.

![](/assets/img/voltReg/7_screwdriver.jpg)

I decided 0.03V away from 5V was close enough.

![](/assets/img/voltReg/8_adjustedEnough.jpg)Once the output voltage was set, I connected a micro-USB cable on the OUT side of the regulator.

![](/assets/img/voltReg/9_connUSB1.jpg)

Here, having two holes per connection point came in handy again, as I could solder two micro-USB cables to the OUT connections and thus power two ESP32's from the same supply.

![](/assets/img/voltReg/10_connUSB2.jpg)

And hot glue to insulate the whole thing, for maximum jank.

![](/assets/img/voltReg/11_insulate.jpg)