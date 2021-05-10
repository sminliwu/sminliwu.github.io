---
author: S
layout: post
title: Repairing a Micro-USB plug
date: 2021-05-10 16:00:00 -0600
tags: ''

---
WARNING: tech gore.

\[head-on shot of fixed plug here\]

This micro-USB plug was attached to the only proper Raspberry Pi power supply (5V/2.5mA) in the lab, and I had ordered more, but they were held up in the university mailroom. I _needed_ the Raspberry Pi online over the weekend, so I spent an afternoon literally fixing the plug with trash and hot glue.

## Diagnosing

Process of elimination:

* The power adapter box seemed to be working, since the green light was on when I plugged it into an outlet.
* I knew the Pi was working because it powered on with a non-ideal power supply (5V/2mA, a phone charger). It did complain about undervoltage, which is why I needed the higher-power adapter.
* I plugged the power adapter into another micro-USB device that I wasn't too worried about killing with too much current (my cheap Bluetooth headphones that charge through USB), and that didn't work. The adapter's USB plug (the metal bit) wiggled an alarming amount in the plastic housing, so I was pretty sure the plug itself was the problem.
* To check that it was indeed the plug, and not a break somewhere in the cable, I cut the cable close to the plug and stripped the wires in the cable. (red and white, which told me that this was purely a power connection and I wouldn't have to worry about repairing more sensitive data connections) I plugged the adapter into an outlet and stuck a multimeter on the two exposed wires (I am NOT a good example of electrical safety, please go elsewhere for that) to confirm that the adapter was able to deliver a consistent 5V and 2.5mA current through the cable.

## Repairing

### Deconstructing

I used an exacto knife to dissect the cut-off plug. It's actually a lot like dissecting an earthworm, if anyone else did that in high school/middle school biology. The plastic housing of the plug requires some force to remove. But from my experience dissecting other cable connectors, most of these housings should be a shell around a smaller metal/plastic connector component. So I cut the plug along the seam (see picture below) to expose that core.

\[image of cutting-plug\]

### Soldering

A micro-USB plug generally has 5 pins in it, with the rightmost being 1. 

![](http://www.hobbytronics.co.uk/image/data/tutorial/usb-micro-b-plug.jpg)

![](/assets/20210507_173443-1.jpg)![](/assets/20210507_181729-1.jpg)![](/assets/20210507_191918-1.jpg)