---
title: Raspberry Pi, PyQT, and GUI design
author: Shanel
layout: post
date: 2019-09-30 15:04:10
tags: course-ECEN5783 electronics programming
---

![Screenshot of temperature/humidity sensor GUI displayed by Raspberry Pi](/assets/img/thermostat.png)

## Installation Sources

### Python (make sure it's version 3+)
1. [MySQL](https://www.mysql.com/downloads/)
2. [MatPlotLib](https://matplotlib.org)
3. [DHT Temperature/Humidity sensor by AdaFruit](https://github.com/adafruit/Adafruit_Python_DHT)
4. [PyQT5](https://build-system.fman.io/pyqt5-tutorial)

### Other software
Installed on Raspberry Pi with `sudo apt-get`
1. QT Designer (comes with PyQT)
2. [VNC Connect (Server)](https://www.realvnc.com/en/connect/download/vnc/)

Installed on personal machine (Windows 10)
1. VNC Connect (Viewer) - sign up for VNC Cloud Connect to access Pi no matter what network you're on

## Useful Links

1. [QRangeSlider Widget](https://stackoverflow.com/questions/47342158/porting-range-slider-widget-to-pyqt5) (which we modified into a vertical version)
2. [How to customize widget appearances](https://doc.qt.io/qt-5/stylesheet-examples.html#customizing-using-dynamic-properties) and [how to dynamically update them](http://dgovil.com/blog/2017/02/24/qt_stylesheets/)
3. [How to define custom behaviors for widgets](https://stackoverflow.com/questions/20873259/pyqt-how-to-dynamically-update-widget-property-on-outer-variable-value-change)
4. [How to insert MatPlotLib figures in the main QT window](https://stackoverflow.com/questions/43947318/plotting-matplotlib-figure-inside-qwidget-using-qt-designer-form-and-pyqt5)
