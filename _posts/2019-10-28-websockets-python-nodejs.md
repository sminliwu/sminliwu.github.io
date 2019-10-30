---
title: Websockets in Python and Node.JS
author: Shanel
layout: post
date: 2019-10-28 23:40:20
tags: course-ECEN5783 programming
---

![Screenshot of temperature/humidity GUI accessed via HTML](/assets/img/EIDproj2.png)

## Installation Sources

This project was built on top of the first class project, described in this [previous post]({% post_url 2019-09-30-raspberry-pi-pyqt-gui %}), so these installations were in addition to the ones listed there.

### Server (Raspberry Pi)
- Node.js - already installed along with `npm` with standard installation of Raspbian on Pi. Make sure it's the latest version. Use `npm install` for the following packages:
    -  Install Websockets for Node.js. We used the [`ws`](https://github.com/websockets/ws) implementation, but `socket.io` and other versions are out there, too.
    - Install MySQL (`mysql`) for Node.js.
- Install Websockets for Python with the [Tornado framework](https://pypi.org/project/tornado/).

#### Client (another machine)
- Make sure the web browser you're using is compatible with WebSockets. Both the server and client must be connected to the same network in order to establish a WebSocket connection.
- Enable [JQuery](http://code.jquery.com/jquery.min.js) by including this source in the HTML file.

## Useful Links

1. [Python WebSockets with Tornado Reference](https://www.tornadoweb.org/en/stable/websocket.html) 
2. [Basic WebSockets Python Server/HTML Client Example](https://os.mbed.com/cookbook/Websockets-Server)
3. [Connecting Node.js to MySQL, 1](https://www.w3schools.com/nodejs/nodejs_mysql_select.asp) [2](https://markshust.com/2013/11/07/creating-nodejs-server-client-socket-io-mysql/) [3]( https://stackoverflow.com/questions/54606538/node-js-ws-and-mysql)
4. [JQuery Reference](https://api.jquery.com/)
5. [`ws` (Node.js Websockets) Reference](https://github.com/websockets/ws)

## Issues

The biggest issue that we ran into during the project (and up through the demo) was **handling the data connection and transportation over the WebSockets**. With the Python Websocket server, we were able to establish the server/client connection, but weren't able to properly transmit different data payloads. The Python QT code from the previous project was already fairly long, so there were some places were we didn't insert the WebSocket code or break it out into a separate file correctly. For the Node.js WebSocket, we realized that we needed to carefully format the JSON with the MySQL data in order to have a parse-able string on the client side.
