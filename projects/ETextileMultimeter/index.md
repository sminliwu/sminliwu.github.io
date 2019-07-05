---
layout: project
title: E-Textiles Web Multimeter
---

Spring 2019

## [Visualization Web App](/projects/ETextileMultimeter/main)

![The e-textile multimeter and visualizer in use](./documentation/cover.jpg)

## Concept

<table style="width: 100%; border-collapse: collapse; margin-left: auto; margin-right: auto;" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> 
	<td style="width: 33.3333%;">
		<p><img src="./documentation/prototyping.jpg" alt="E-textiles prototyping with embroidery"></p>
		<p style="text-align: center;">Prototyping</p>
	</td>
	<td style="width: 33.3333%;">
		<p><img src="./documentation/testing.jpg" alt="Testing e-textiles circuit"></p>
		<p style="text-align: center;">Testing</p>
	</td>
	<td style="width: 33.3333%;">
		<p><img src="./documentation/visualization.jpg" alt="Visualizing e-textiles circuit with multimeter"></p>
		<p style="text-align: center;">Visualization</p>
	</td>
</tr></tbody></table>
<p><span style="font-size: 10pt;">An e-textiles design workflow showing how the multimeter might be used after prototyping to test and visualize the design.</span></p>

### Description: Motivation & Goals

Both of us work in e-textiles and run into several obstacles during the design process. Like many other kinds of making, our process involves prototyping, analyzing or diagnosing the design, debugging, and then iterating. In e-textiles, there aren&rsquo;t many tools to support the diagnosis and debugging stages. For this project, we would like to build upon Rona&rsquo;s ongoing work in creating a wearable e-textile multimeter and extend its capabilities. The tool currently indicates continuity in an e-textile circuit through an LED, which helps the user identify any shorts or breaks in their sewn or woven circuit.

Our proposed design for this e-textile diagnostic tool will add a digital representation to the e-textile multimeter, visualizing the circuit layout while the multimeter is in use. Translating from the physical iteration will give the user deeper insights during their design process. This real-time feedback will let the user move more quickly through iterations and debug more efficiently.

### Components
<table style="width: 100%;">
<tbody>
<tr>
	<td style="width: 50%;">
		<p><strong>Electronics</strong></p>
		<ul>
			<li>Arduino Uno</li>
			<li>Sparkfun Bluetooth Mate Silver</li>
			<li>ADNS-9800 motion sensor</li>
			<li>Other Bluetooth-enabled device</li>
			<li>Soft multimeter probe
				<ul>
				<li>Soft jumper wires&nbsp;</li>
				<li>LED</li>
				<li>Conductive threads&nbsp;</li>
				</ul>
			</li>
		</ul>
	</td>
	<td style="width: 50%;">
		<p><strong>Materials</strong></p>
		<ul>
			<li>Fabric</li>
			<li>Snap connectors</li>
			<li>Cotton/non-conductive yarn</li>
		</ul>
		<p><strong>Tools</strong></p>
		<ul>
			<li>Soldering iron</li>
			<li>Sewing needle</li>
		</ul>
	</td>
</tr></tbody></table>

### Block Diagram
<p><a href="./documentation/blockDiagram.png"><img src="./documentation/blockDiagram.png" alt="Block diagram of system showing Arduino, motion sensor, Bluetooth, and visualizer"></a></p>
<p style="text-align: center;"><span style="font-size: 10pt;">Block diagram showing connections for motion sensor, Bluetooth module, and data flow into the visualizer. (click for hi-res)</span></p>

### Probe Circuit Schematic
<p><img src="./documentation/voltmeterCircuit.png" alt="Circuit schematic of multimeter probe and a simple circuit under testing."></p>
<p style="text-align: center;"><span style="font-size: 10pt;">Schematic showing how to connect the Arduino and probe to the test circuit.</span></p>

## Instructions
### Modifying the ADNS Motion Sensor for 5V mode
<table style="width: 100%; border-collapse: collapse;" border="0" cellpadding="0">
<tbody><tr>
	<td style="width: 50%;">
		<p><img src="./documentation/ADNS_underside.jpg" alt="Underside of sensor, showing where to solder and cut"></p>
		<p style="padding-left: 20px;"><span><strong>1.</strong> The ADNS can run on 3.3V or 5V logic. The breakout board ships in 3.3V mode. If you are using a microcontroller that runs on 5V logic (e.g. Arduino Uno), follow the board maker&rsquo;s instructions for enabling 5V mode as shown above. Use an Exacto knife or fine blade to cut the traces.</span></p>
	</td>
	<td style="width: 50%; vertical-align: top;">
		<p><img src="./documentation/ADNS_topside.jpg" alt="Top of sensor, showing how to secure plastic lens"></p>
		<p style="padding-left: 20px;"><strong>2.</strong> The sensor lens does not come secured to the rest of the board, so use a soldering iron to slightly melt the two plastic pegs so they won&rsquo;t fall out of their slots.</p>
	</td>
</tr></tbody></table>

### Arduino & Bluetooth Set Up and Pairing
<ol>
	<li>Connect the Arduino Uno, RN-42 Bluetooth module, and ADNS motion sensor as shown in the block diagram. <a href="https://cdn.tindiemedia.com/images/resize/WKNelWheBozH4EhsI_s1RjeWf5k=/p/full-fit-in/1378x1034/i/3333/products/2016-05-29T15%3A12%3A00.327Z-ADNS-9800%20to%20Uno.jpg">This is a more detailed diagram of the ADNS to Arduino connection. </a>Make sure to connect&nbsp;<em>both</em> GND pins on the sensor. The MOT pin is not necessary to run the code. Power the ADNS with 5V and the RN-42 with 3.3V. When the RN-42 module is powered, you will see a slowly blinking red LED, indicating that it is in pairing mode. Additionally, connect pin 5 on the Arduino to GND to keep the device inactive.</li>
	<li>Load the&nbsp;<strong>ADNS_Bluetooth_burstmotion&nbsp;</strong>code (<a href="https://github.com/sminliwu/sminliwu.github.io/blob/master/projects/ETextileMultimeter/Arduino/ADNS_Bluetooth_burstmotion.ino">GitHub</a>) onto the Arduino. Open the serial monitor and wait for the ADNS firmware to finish uploading. You will see "Optical Chip Initialized" and some register readings when it is complete. If you see all zeros from the registers, such as the Product_ID and SROM_Version, that's a sign that the sensor is not properly connected.</li>
	<li>Now to configure the RN-42. <span>Switch the serial monitor from &ldquo;Newline&rdquo; to &ldquo;No line ending&rdquo; on the bottom dialog. Then, send &ldquo;</span><strong>$$$</strong><span>&rdquo; to the module to switch it to command mode. You should see the red LED on the module begin blinking much more quickly. </span></li>
	<li><span>Switch the serial monitor back to "Newline". Send the command &ldquo;<strong>SN</strong>,&nbsp;<em>&lt;something unique&gt;</em>&rdquo; to rename the module to something you will easily recognize, like "ETextileMeter".&nbsp;</span>Enter &ldquo;<strong>S~, 6</strong>&rdquo; to set the module&rsquo;s profile to HID (Human Interface Device). Enter &ldquo;<strong>SH, 0221</strong>&rdquo; to configure the module as a mouse. Enter &ldquo;<strong>SA, 2</strong>&rdquo; to set the authentication mode to SSP (simple secure pairing) to make connecting to the module much easier.&nbsp;<em>Optional: Enter "<strong>SM, 6</strong>" to enable auto-reconnect with paired devices.</em></li>
	<li>Restart the module to save the changes in configuration by entering "<strong>R,1</strong>" or restarting the entire system.</li>
	<li><span>Open the Bluetooth settings on another device, such as your laptop, scan for the module with its new name, and pair with it. The module should connect as a mouse!</span></li>
	<li><span>Reopen the serial monitor. Enable pin 5 "activeSwitch" on the Arduino by disconnecting it from GND, and move the motion sensor. You should see X and Y coordinates in the serial monitor, as well as the mouse cursor on your screen move.</span></li>
</ol>

### Making the Soft Multimeter Probe
<p>
	<img src="./documentation/probe1.jpg" width="300" height="225">
	<img src="./documentation/probe2.jpg" width="300" height="225">
</p>
<p>The finger-meter case:</p>
<p>&nbsp;The ADNS Motion Sensor was placed in the bottom together with a strip of conductive fabric that operated as an analog input (A0) for the voltage divider.&nbsp;</p>
<p><img src="./documentation/wires.jpg" width="300" height="225"></p>
<p>Soft Jumper wires:&nbsp;<br />Conductive threads wrapped with non-conductive yarn for isolation.&nbsp;&nbsp;</p>

## Visualizer and Using Everything
The [visualization app](/projects/ETextileMultimeter/main) is hosted on GitHub, but can also be forked and opened on your own machine without an Internet connection. Open the visualizer, connect the multimeter to your laptop, power your test circuit, and probe away.
