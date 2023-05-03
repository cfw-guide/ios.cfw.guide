---
lang: en_US
title: Using checkm8-a5
description: Guide to using checkm8-a5
permalink: /using-checkm8-a5
extra_contributors:
  - selfisht
redirect_from:
    - /checkm8-a5
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: none
---

## Requirements

   - An [Arduino Uno](https://store.arduino.cc/products/arduino-uno-rev3)
   - A [MAX3421E USB host shield](https://www.aliexpress.com/w/wholesale-MAX3421E-USB-host-shield.html), and USB-A to USB-B cable
   - A soldering iron
   - 0.5mm solder
   - Solder flux (Optional)

::: danger

Following this guide is a difficult task and requires moderate soldering and computer terminal skills. Proceed with caution.

:::

## Preparing the host shield

Your host shield can arrive in two states - with headers, and without. If it is with headers, it will have pins and pin sockets already soldered to it, allowing you to connect it to an Arduino by simply placing it on top. If it has headers, your job is much easier.

::::: tabs id="headers"

:::: tab name="With Headers" :default="true"

You will need to solder three pads on your USB host shield. The pads to solder are circled in this image:
<p><img src="/assets/images/hostshield.jpg" alt="Where to solder to your host shield" style="display: block; margin-inline: auto; max-width: 30em;"></p>

1. Plug in your soldering iron so it starts to heat up
1. Once it has heated up, place your USB host shield near a good source of light
1. Get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip
1. Touch this ball of solder to the pad that you have chosen - make sure it touches both sides of the pad
1. Repeat steps 3-4 until all three pads have been bridged

::::

:::: tab name="Without Headers"

You will need to solder five sets of headers and bridge three pads on your USB host shield. The pads to solder are circled in this image:
<p><img src="/assets/images/hostshield.jpg" alt="Where to solder to your host shield" style="display: block; margin-inline: auto; max-width: 30em;"></p>

1. Plug in your soldering iron so it starts to heat up
1. Once it has heated up, place your USB host shield near a good source of light
1. Insert the first header into the holes on the board
    - For the single-row headers, ensure the sockets face towards the side with the ICs and USB port
    - For the dual-row header, ensure the sockets face on the opposite side of the board.
1. Get a medium-sided length of solder and form it into a straight wire shape
1. Touch it to a pin on the header - it's easiest to work from one edge and work your way to the other
1. Then, touch the soldering iron to the solder slightly away from the board, so that a short length of it is separated
1. This should form itself around the pin, securing the pin to the board
    - If it doesn't, remelt the solder and move it to the proper place
1. Repeat step 4 until all 34 pins are properly affixed
    - Ensure none of the pins are bridged (solder connecting two or more pins together)
1. Once the headers are soldered, get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip
1. Touch this ball of solder to the pad that you have chosen - make sure it touches both sides of the pad
1. Repeat steps 6-7 until all three pads have been bridged.

::::

:::::

## Installing Git

To use checkm8-a5, you'll need Git. Depending on what version of macOS you're on, the steps are different.

::::: tabs id="git"

:::: tab name="OS X 10.9 to macOS 10.12" :default="true"

1. Download the Git installer from [this link](https://sourceforge.net/projects/git-osx-installer/files/)
1. Open and run the installer
1. Once it is installed, open Terminal and run `git --version` to verify it has installed properly

::::

:::: tab name="macOS 10.13+"

1. Install Brew, if you don't have it installed already, by opening a terminal window and running the command: 
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
1. Enter your user password when prompted
    - Installing brew can take up to half an hour to complete
1. Once Brew is installed, run the command `brew install git` in terminal
1. Once it is complete, run the command `git --version` to verify it has installed properly

::::

:::::

## Patching the USB Host Shield 2.0 Library

1. Open a new Terminal window and run the command `git clone https://github.com/felis/USB_Host_Shield_2.0.git`
1. Run the command `git clone https://github.com/synackuk/checkm8-a5.git`
1. Run the command `cd USB_Host_Shield_2.0 && git apply ~/checkm8-a5/usb_host_library.patch/`

## Preparing the Script

1. Download and install the [Arduino IDE](https://www.arduino.cc/en/software)
1. While it is installing, connect your MAX3421E USB host shield to the Arduino
1. The pins and sockets on the bottom of the host shield will line up with the pins and sockets on the Arduino
1. Connect your Arduino to your computer
1. Once the Arduino IDE is installed, open Finder, press Command+Shift+G, and type in `~/checkm8-a5`
1. Open the file named `checkm8-a5.ino`
1. In the same Terminal window as before, run `cp -r ~/USB_Host_Shield_2.0 ~/Documents/Arduino/libraries/USB_Host_Shield_Library_2.0`

## Running the Script

::: tip

It may take a few tries to get your device into DFU. Be patient and ensure you follow the steps exactly.

:::

::::: tabs id="device"

:::: tab name="iPhone 4s and iPad 2 (non-2012 model)" :default="true"

1. Connect your iPhone or iPad to your computer
1. Enter DFU using [this guide](https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode)
1. Disconnect your device from your computer and connect it to your USB host shield.
1. Under the Tools menu, select Port and ensure your Arduino is selected
1. In the checkm8_a5 script, find the line that reads `#define A5_8942` and change it to `#define A5-8940`
1. Again under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino
1. Serial Monitor will begin displaying a log of what the script is doing
1. Once it displays `Done!`, disconnect your device from the Arduino and proceed to the next steps

::::

:::: tab name="iPad 2 (2012), iPad mini 1, iPod touch 5"

1. Connect your iPhone, iPad, or iPod to your computer
1. Enter DFU using [this guide](https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode)
1. Disconnect your device from your computer and connect it to your USB host shield
1. Under the Tools menu, select Port and ensure your Arduino is selected
1. Again under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino
1. Serial Monitor will begin displaying a log of what the script is doing
1. Once it displays `Done!`, disconnect your device from the Arduino and proceed to the next steps

::::

:::: tab name="iPad 3"

::: warning

On the iPad 3, success rate is much lower compared to other devices. It is not uncommon for it to take upwards of 10 tries to successfully pwn.

:::

1. Connect your iPhone, iPad, or iPod to your computer
1. Enter DFU using [this guide](https://www.theapplewiki.com/wiki/DFU_Mode#Entering_DFU_Mode)
1. Disconnect your device from your computer and connect it to your USB host shield
1. Under the Tools menu, select Port and ensure your Arduino is selected
1. In the checkm8_a5 script, find the line that reads `#define A5_8942` and change it to `#define A5-8945`.
1. Again under the Tools menu, open Serial Monitor
1. Set the baud rate is set to 115200, then upload the sketch to the Arduino
1. Serial Monitor will begin displaying a log of what the script is doing
1. Once it displays `Done!`, disconnect your device from the Arduino and proceed to the next steps

::::

:::: tab name="Apple TV 3 (A1427)"

1. Connect your Apple TV to a computer with a MicroUSB cable
1. You will most likely need to disconnect the HDMI cable
1. Enter DFU mode by completing the following steps:
    1. Hold Menu and Down until the LED on the Apple TV flashes rapidly.
    1. Let go, then hold Menu and Play/Pause until the LED on the Apple TV flashes rapidly

::: tip
    
If iTunes or Finder says `n/a` when listing the serial number when reporting it detected an Apple TV in recovery or DFU mode, it has successfully entered DFU.

If it displays the serial number, try the steps again - it entered Recovery Mode instead.

:::

4. Disconnect your Apple TV from your computer and connect it to your USB host shield
1. Under the Tools menu, select Port and ensure your Arduino is selected
1. Also under the Tools menu, open Serial Monitor
1. Set the baud rate is set to 115200, then upload the sketch to the Arduino
1. Serial Monitor will begin displaying a log of what the script is doing
1. Once it displays `Done!`, disconnect your Apple TV from the Arduino

::::

:::::

::: warning

At this step, there are many errors you may see. A list of the most common, with fixes, are as follows:

- `usb init failed`: This means you did not solder the USB host shield correctly. Double-check everything is soldered properly and there are no bridges between pins.
- `Non Apple DFU found (vendorID: 0, productId: 0`: This means the exploit failed. Force reboot the Apple TV, reenter DFU, and try the script again.
- `heap_feng_shui_req: setup status = 0, data status = 4` on loop: This is usually not an error. If it goes on for more than two minutes, force reboot the device and try the process again - otherwise, it should proceed to sending the line `2. set global state`.
- `heap_feng_shui_req: setup status = D, data status = 5` on loop *is* an error, but easily fixable - simply reupload the script to the Arduino and it should work. If it still doesn't, reenter DFU and try the process again.

:::

If checkm8-a5 printed out `Done!`, your A5 device is now successfully pwned. You may return to whatever guide you were following previously, if any.
