---
author: Shanel
layout: post
title: Coop Automation V1 - Automated Run Door
date: 2020-07-22 16:00:00 -0600
tags: project-ChickenCoop

---
# Arduino/ESP32-powered automated chicken coop door

[![r/arduino - Arduino/ESP32-powered automated chicken coop door](https://preview.redd.it/mjpqnuy8gj651.jpg?width=640&crop=smart&auto=webp&s=03b4bcf03d1cf3d64b5e6149fb19d389b98e7a9a)](https://i.redd.it/mjpqnuy8gj651.jpg)

* Chip: Sparkfun ESP32 Thing (programmed w/ Arduino)
* Motor: 12V DC 30RPM gearmotor
* Motor controller: TB6612FNG
* Power supply: 12V/5V wall adapter w/ ATX connector

The ESP connects to our home wi-fi, looks up sunrise/sunset times using [sunrise-sunset.org](https://sunrise-sunset.org/)'s API, keeps time w/ [ntp.pool.org](https://ntp.pool.org/), and runs the motor to open/close the door. The door automatically opens at sunrise and closes at sunset. A user on the home network can also browse to the ESP's IP address to connect to a web interface to view the system time, scheduled sunrise/sunset times, and manually open/close the door.

## Hardware:

* Drawer slide rails for the door to move up/down
* 2x4 scrap with a hole chiseled out for the motor
* Motor shaft coupler w/ plastic end caps used as a winch bobbin
* 1/4" nylon cord
* Screw eyes
* Weatherproof housing: two plastic take-out containers that I Frankenstein'd together with hot glue, persistence, and prayer
* Scrap door hinge to provide a rounded corner for the rope to slide