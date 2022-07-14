---
layout: project
title: Loom Pedals V2
season: Fall 2021 / Spring 2022

---

## Project Overview

The loom pedals are a hardware peripheral interface for the TC2 digital Jacquard loom by Tronrud Engineering. They have been designed as a modular system of foot pedals, similar to guitar effects pedals used by musicians, which are connected via a Raspberry Pi to a web-based open source weaving software, AdaCAD.

### \[https://github.com/UnstableDesign/Loom-Pedals/\] 

### Table of Contents

Section A: Project Fundamentals

1. Dependencies
2. Installation and assembly
3. Prerequisite skills for developers
4. Open source disclosure (?)
5. Weaving and TC2 basic knowledge

Section B: System Components

1. Hardware
  i. Circuit design
  ii. Enclosure design
2. Raspberry Pi software
  i. Pedals driver
  ii. TC2 connection *(not yet public)*
  iii. Database connection
3. AdaCAD integration
  i. Services
  ii. Component

Section C: Current and Future Work

1. Refactoring operations in AdaCAD
2. Physical enclosure improvements/alternate form factors
3. Adding analog inputs (e.g. dials, sliders)
4. Experimenting with output display: thermal printer

## Previous Version

V1 of the loom pedals was built in Fall 2019 by reimplementing Processing (Java) code from Lea (see acknowledgments) in Python/QT as a proof-of-concept for an improved GUI with multiple pedals on a Raspberry Pi.

## Acknowledgments

These pedals would not have been possible without the initial work of Lea Albaugh, whose Summer 2019 experiments in underdetermined, improvisational weaving interactions on the TC2 are documented on [their site here](http://www.lea.zone/underdetermined_handweaving.html "Underdetermined Handweaving"). Thank you, also, to Tronrud for engineering such a nifty Jacquard loom for experimental weaving. And finally, thank you to our lab's loom -- Jean-Luc Jacquard. 