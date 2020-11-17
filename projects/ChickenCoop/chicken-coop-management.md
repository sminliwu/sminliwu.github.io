---
layout: project
title: Chicken Coop Management
season: Summer / Fall 2020

---
## Summary

An automation/reminder management system for a backyard chicken/duck coop. 

## Actors

* ESP32
* Google Cloud Services
* Humans
* Flock

## System Tasks

### ESP32

* Automatically open/close the run door (unless human sets it to manual mode)
* Track door status (with human input in manual)
* Send POST requests to Google Cloud Services (if enabled)

### Google Cloud Services

* Sends out reminder at sunrise to open coop
  * Provides options: just the run (if run door is in manual mode) OR the run + front door
  * Asks for confirmation 15 min after 1st reminder _(in progress)_
* Sends out reminder at sunset to close up coop
  * Asks for confirmation 15 min after 1st reminder _(in progress)_
  * Sends out more urgent reminder 1 hour after 1st reminder? _(in progress)_
* Listen for updates from ESP32
* Tracks cleaning schedule? _(in progress)_

## Web Integrations

### EXISTING:

* NTP date/time (w/ ESP)
* Sunrise-sunset (w/ ESP)

### IN PROGRESS:

* Google App Script deployed as web app: Google Calendar + Sheets (Google w/ ESP and humans' personal devices)

### POSSIBLE:

* Discord bot?

## Electronic Hardware

* ESP32 (SparkFun ESP32 Thing)
* Motor to lift/lower run door
* TB6612FNG motor driver
* 2 buttons (door up / door down)
* Button to toggle manual/auto run door
* Outdoor extension cord
* 12V/5V DC power adapter

## References

* Irrigation automation project (Instructables): [https://www.instructables.com/id/Irrigation-Using-Google-Calendar/](https://www.instructables.com/id/Irrigation-Using-Google-Calendar/ "https://www.instructables.com/id/Irrigation-Using-Google-Calendar/")
* Using ESP32 as NTP date/time client: [https://randomnerdtutorials.com/esp32-date-time-ntp-client-server-arduino/](https://randomnerdtutorials.com/esp32-date-time-ntp-client-server-arduino/ "https://randomnerdtutorials.com/esp32-date-time-ntp-client-server-arduino/")
* HTTP GET and POST requests with ESP32: [https://randomnerdtutorials.com/esp32-http-get-post-arduino/](https://randomnerdtutorials.com/esp32-http-get-post-arduino/ "https://randomnerdtutorials.com/esp32-http-get-post-arduino/")
* Motor driver Arduino library (Github): [https://github.com/sparkfun/SparkFun_TB6612FNG_Arduino_Library](https://github.com/sparkfun/SparkFun_TB6612FNG_Arduino_Library "https://github.com/sparkfun/SparkFun_TB6612FNG_Arduino_Library")
* Tutorial for using Google script: [https://www.dfrobot.com/blog-917.html](https://www.dfrobot.com/blog-917.html "https://www.dfrobot.com/blog-917.html")
* Google Apps Script reference: [https://developers.google.com/apps-script](https://developers.google.com/apps-script "https://developers.google.com/apps-script")
* JavaScript Date object reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date")
* CORS errors in HTTP requests: [https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9 "https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9")