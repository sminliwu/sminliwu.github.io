/*
  Example Bluetooth Serial Passthrough Sketch
  by: Jim Lindblom
  SparkFun Electronics
  date: February 26, 2013
  license: Public domain

  This example sketch converts an RN-42 bluetooth module to
  communicate at 9600 bps (from 115200), and passes any serial
  data between Serial Monitor and bluetooth module.
*/
#include <SoftwareSerial.h>

// pin nums, won't change
const int bluetoothTx = 2;  // TX-O pin of bluetooth mate, Arduino D2
const int bluetoothRx = 3;  // RX-I pin of bluetooth mate, Arduino D3
const int led = 5; // LED connected to PWM pin 5
const int button = 7; // button will be connected to pin 7

// will change
bool in; // current state of the input (button)

// char lol = {0xEE, 0x90, 0x92};

SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup() {
  Serial.begin(9600);  // Begin the serial monitor at 9600bps
  pinMode(led, OUTPUT);
  pinMode(button, INPUT);

  // set initial out state
  digitalWrite(led, out);

  bluetooth.begin(115200);  // The Bluetooth Mate defaults to 115200bps
  bluetooth.print("$");  // Print three times individually
  bluetooth.print("$");
  bluetooth.print("$");  // Enter command mode, no line break
  delay(100);  // Short delay, wait for the Mate to send back CMD
  bluetooth.println("U,9600,N");  // Temporarily Change the baudrate to 9600, no parity
  // 115200 can be too fast at times for NewSoftSerial to relay the data reliably
  bluetooth.begin(9600);  // Start bluetooth serial at 9600

  Serial.println("ready");
}

void loop() {
  // if the button state has changed
  in = digitalRead(button);
  if (in) {
    digitalWrite(led, HIGH);
    bluetooth.print("spam");
  } else {
    digitalWrite(led, LOW);
  }
  prevIn = in;
    
  if (bluetooth.available()) // If the bluetooth sent any characters
  {
    // Send any characters the bluetooth prints to the serial monitor
    char input = bluetooth.read();
    Serial.print(input);
    if (input == '1') { // make sure to have everything as a char!
      Serial.print("hello from the other side!");
      digitalWrite(led, HIGH);
    } else if (input == '0') {
      digitalWrite(led, LOW);
    }
  }
  if (Serial.available()) // If stuff was typed in the serial monitor
  {
    // Send any characters the Serial monitor prints to the bluetooth
    bluetooth.print((char)Serial.read());
  }
}
