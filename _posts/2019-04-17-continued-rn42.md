---
title: Continued RN-42 tinkering
author: Shanel
layout: post
date: 2019-04-17 16:17:11
tags: electronics project-ETextileMultimeter
---

I was able to get the mouse HID profile working on the RN-42 module.

# Highlights
* SH,0220 for mouse
* Use [Serial.write(val)][1] or Serial.write(buf,len) to send hexadecimal values, instead of characters that get converted to their hex values. To send HID reports, I need to directly send the hexcodes, instead of their string representations.
* Alright, I can send HID reports. Although it’s overkill for ASCII characters, you can send RAW keypress reports as 0xFD (start byte), 0x9 (size 9 of report), 0x1 (descriptor indicating keyboard), modifier byte (0x20 or 0x2 for shift/capitalize), 0x0, then 6 scan codes. Sending 0x0 directly via the “write” function makes Arduino bug out, so send it as [bluetooth.write((byte)0);][2] Sending 0x0 alone will disconnect the device.
* For mouse: sends changes in X and Y position, in either negative (left/down) or positive (right, up). For positive hexadecimal numbers, begins with 0-7. Negative hexadecimal numbers begin with 8-F. Or you can directly write nonzero decimal numbers. Are the units pixels? I have WASD working now.
* I was able to get this working with input NOT from serial, and instead from an input pin (digital or analog).
* I was also able to get a mouse click set up. Referenced the [Adafruit HID library][4], which implements a mouse and keyboard with similar HID reporting. The button register order is left - 1; right - 2; middle - 4, corresponding to the 1st, 2nd, and 3rd bits.
* Looking at the [mouse sensor’s data sheet][3], looks like we’ll have to use SPI (clock signal, MOSI, MISO) In addition, there is a MOTION pin (HIGH normally, LOW active when motion detected). MOSI is used to initiate read operations, telling the sensor which registers to write to the MISO pin.

# Helpful Resources
* [Arduino Forum question on Serial.write(val)][1]
* [Arduino Forum question on writing zero/0/0x0 to a character (serial/bluetooth) buffer][2]
* [Adafruit HID library][4]
* [ADNS-9800 mouse sensor datasheet][3]

[1]: https://forum.arduino.cc/index.php?topic=142248.0
[2]: http://forum.arduino.cc/index.php?topic=45769.0
[3]: https://datasheet.octopart.com/ADNS-9800-Avago-datasheet-10666463.pdf
[4]: https://circuitpython.readthedocs.io/projects/hid/en/latest/index.html