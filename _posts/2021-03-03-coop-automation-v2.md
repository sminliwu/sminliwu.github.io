---
author: S
layout: post
date: 2021-03-03 23:58:00 -0700
title: Coop Automation V2 - Automated Run Door (and Reminders!)
project: ''
tags: project-ChickenCoop

---
![](/assets/coopmanual.png)

(This post is back dated from March 2022) See my [earlier post on V1](https://sminliwu.github.io/2020/07/22/coop-automation-v1-automated-run-door.html).

After an extremely clunky (but functional?) V1 of an automated run door for our backyard coop, I immediately got working on a V2 that focused on "usability". When testing the motor timing system, I realized that improving the web UI would not only make debugging/testing easier, but also make the system more usable in the long term by displaying key system data and ways to change important settings.

In AUTO mode, the door doesn't have to run on a fixed time interval. Users can adjust the duration for which the motor runs, as well as the offset (positive number) from sunrise/sunset when it runs. For sunrise, the offset means the number of minutes _before_ the sunrise time. For sunset, the offset is the minutes _after_ the time. I didn't allow for negative offsets, but we'll see if that was the appropriate choice.

Also along the lines of displaying (logging) system data, I learned how to use Google Apps Script to host a simple web app that could log messages sent from the ESP32.

![](/assets/cooplog.png)

As the abbreviated messages suggest, I started using a simple shorthand command set for system communications.

    ## ESP Status Codes
    Category 		Assc. Variables 		Broadcast Change?
    (code)									WS 	Google
    -------------------------------------------------------------------
    door (d) 		doorStatus 				y 	d 		y = yes always
    				motorOn					 	 		d = debug only
    				motorDir 				 			x = never
    control (c) 	autoMode 				y 	y
    motor time (m)	motorInterval_open		y 	y 
    				motorInterval_close
    auto-offset (e)	offset_open				y 	y
    				offset_close
    flock (f) 		flockStatus 			y 	y
    google (g) 		googleEnabled			y 	y
    state (s) 		state 					d 	d
    time (t) 		time 					y 	x
    day-night (n)	sunrise/sunset 			y 	x
    				date 				 	
    
    ## ESP32-Client Communications
    
    (Messages sent over WebSocket)
    Client sends		ESP	sends				Context
    -------------------------------------------------------------------
    open (o)									Client clicked 
    											"open" button
    					opening [##]
    close (c)									Client clicked 
    											"close" button
    					closing [##]
    stop (h)
    set-open (so)
    					open
    set-close (sc)
    					closed
    manual (a)
    					control [AUTO/MANUAL]
    google (g)
    					google [ON/OFF]
    m[o/c] \[##\] (m)							Client adjusted motor 
    											interval time
    					m[o/c] \[##\]			
    e[o/c] \[##\]								Client adjusted offset 
    											auto open/close time
    					e[o/c] \[##\]
    					time: [HH:MM AM/PM]		ESP updates client with 
    											time data
    					date: [MM/DD/YYYY]
    					sunrise/sunset: 
    					[time/time]
    
    ## ESP32-Google Communications
    
    (ESP sends HTTP POST requests to a Google web app)
    ESP sends			Google response
    ------------------------------------------------------------------
    c[a/m] 				control mode: switches calendar events 
    					to auto/manual
    f[c/r/y] ### 		logs the change in flock status with IP address
    [other data] 		logs the message in a spreadsheet

Coming up with these codes made communications between the ESP web server and the client device more efficient by keeping messages to a few bytes, which was important since the Wi-Fi connection could be shaky out in the shed on the far end of the yard. Furthermore, as all of these codes could be passed to the Google Apps script, I could parse the relevant ones into actions that affect a calendar, like event-based reminders for when to open/close the coop.

I'm still working on the script (which is in JavaScript), since this particular environment is so new to me. Google has you implement `doGet()` and `doPost()` functions to be executed in the event of, well, GET and POST requests to the web app. It really seems like it's just meant for simple scripts to route data from app X to app Y, so my web app endpoint can't refer to external libraries and I have a lot of helper functions that reinvent the wheel. But overall, the AM events and reminders seem to work great.

![](/assets/coopcalam.png)

The PM events/reminder have given me more trouble for some reason. Which is a bit annoying, because those would be more helpful for me to have, as sunset "time" is relative to when a work day normally ends or when dinner "time" should be. All of which I have trouble paying attention to.

![](/assets/coopcalpm.png)

## References

* Tutorial for using Google script - [https://www.dfrobot.com/blog-917.html](https://www.dfrobot.com/blog-917.html "https://www.dfrobot.com/blog-917.html")
* Google Apps Script reference - [https://developers.google.com/apps-script](https://developers.google.com/apps-script "https://developers.google.com/apps-script")
* HTTP GET and POST requests with ESP32 Arduino - [https://randomnerdtutorials.com/esp32-http-get-post-arduino/](https://randomnerdtutorials.com/esp32-http-get-post-arduino/ "GET and POST requests with ESP32")