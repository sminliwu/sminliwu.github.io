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

![](/assets/img/voltReg/1_stripWires.jpg)

Now the cord's ready to have the voltage regulator connected. Effectively, what we're doing is tapping into the 24V supply to siphon off the ESP32's smaller power supply. Since 24V is the input voltage, the barrel connector cord needs to go to the board's "IN" side. This particular board has two holes at each connection point (IN + and -, OUT + and -), which makes it easy to insert a cut wire, connecting each end to the same point. I wonder if that was intentional.

![](/assets/img/voltReg/2_twistIN.jpg)

Once the wires were appropriately inserted, I twisted the cut ends together, then soldered both holes together. The twisting-then-soldering was to ensure a more solid connection.

![](/assets/img/voltReg/3_solderIN.jpg)
![](/assets/img/voltReg/4_connectPower.jpg)
![](/assets/img/voltReg/5_connectMultimeter.jpg)
![](/assets/img/voltReg/6_multimeterVoltage.jpg)
![](/assets/img/voltReg/7_screwdriver.jpg)
![](/assets/img/voltReg/8_adjustedEnough.jpg)
![](/assets/img/voltReg/9_connUSB1.jpg)
![](/assets/img/voltReg/10_connUSB2.jpg)
![](/assets/img/voltReg/11_insulate.jpg)