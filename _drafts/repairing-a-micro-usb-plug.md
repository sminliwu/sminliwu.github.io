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
* I plugged the power adapter into another micro-USB device that I wasn't too worried about killing with too much current (my cheap Bluetooth headphones that charge through USB), and that didn't work. The adapter's USB plug wiggled an alarming amount, so I was pretty sure the plug itself was the problem.

![](/assets/20210507_173443-1.jpg)![](/assets/20210507_181729-1.jpg)![](/assets/20210507_191918-1.jpg)