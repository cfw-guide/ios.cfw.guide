---
lang: en_US
title: Installing Blackb0x
description: Guide to installing Blackb0x
permalink: /installing-blackb0x
extra_contributors:
  - selfisht
redirect_from:
    - /blackb0x
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: none
---

Blackb0x is capable of untether jailbreaking the Apple TV (2nd generation) on Apple TV Software 5.3 and the Apple TV (3rd generation) on Apple TV Software 7.2.1 to 7.9. It is also capable of <router-link to="/types-of-jailbreak/#tethered-jailbreaks">tether jailbreaking</router-link> the Apple TV (2nd generation) on Apple TV Software 6.2.1 and the Apple TV (3rd generation) on Apple TV Software 6.0 to 6.2.

Blackb0x is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore

## Requirements

- Intel-based Mac running macOS 10.9 or later.
- The latest version of [Blackb0x](https://github.com/NSSpiral/Blackb0x/releases/tag/0.6.2)
- A non-Siri enabled Apple TV aluminum remote:
<p><img src="/assets/images/aluminum_tv_remote.png" alt="A photo of a non-Siri enabled Apple TV aluminum remote" style="display: block; margin-inline: auto; max-width: 30em;"></p>
- A1427 only:
   - An [Arduino Uno](https://store.arduino.cc/products/arduino-uno-rev3)
   - A [MAX3421E USB host shield](https://www.aliexpress.com/w/wholesale-MAX3421E-USB-host-shield.html), and USB-A to USB-B cable
   - A soldering iron
   - 0.5mm solder
   - (Optional) Solder flux

## Pwning with checkm8-a5

::: danger

If you have an A1427 Apple TV 3, the process to jailbreak it is complex and requires moderate soldering skills. Proceed with caution.

:::

### Preparing the host shield

Your host shield can arrive in two states - with headers, and without. If it is with headers, it will have pins and pin sockets already soldered to it, allowing you to connect it to an Arduino by simply placing it on top. If it has headers, your job is much easier.

::::: tabs

:::: tab name="With Headers" :default="true"

You will need to solder three pads on your USB host shield. The pads to solder are circled in this image:
<p><img src="/assets/images/hostshield.jpg" alt="Where to solder to your host shield" style="display: block; margin-inline: auto; max-width: 30em;"></p>

1. Plug in your soldering iron so it starts to heat up.
1. Once it has heated up, place your USB host shield near a good source of light.
1. Get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip.
1. Touch this ball of solder to the pad that you have chosen. Make sure it touches both sides of the pad.
1. Repeat steps 3-4 until all three pads have been bridged.

::::

:::: tab name="Without Headers" :default="false"

You will need to solder five sets of headers and bridge three pads on your USB host shield. The pads to solder are circled in this image:
<p><img src="/assets/images/hostshield.jpg" alt="Where to solder to your host shield" style="display: block; margin-inline: auto; max-width: 30em;"></p>

1. Plug in your soldering iron so it starts to heat up.
1. Once it has heated up, place your USB host shield near a good source of light.
1. Insert the first header into the holes on the board. For the single-row headers, ensure the sockets face towards the side with the ICs and USB port. For the dual-row header, ensure the sockets face on the opposite side of the board.
1. Get a medium-sided length of solder and form it into a straight wire shape. Touch it to a pin on the header - it's easiest to work from one edge and work your way to the other. Then, touch the soldering iron to the solder slightly away from the board, so that a short length of it is separated. This should form itself around the pin, securing the pin to the board. If it doesn't, remelt the solder and move it to the proper place.
1. Repeat step 4 until all 34 pins are properly affixed. Ensure none of the pins are bridged (solder connecting two or more pins together).
1. Once the headers are soldered, get your solder and touch it to the soldering iron, so that a small ball of solder forms on the tip.
1. Touch this ball of solder to the pad that you have chosen. Make sure it touches both sides of the pad.
1. Repeat steps 6-7 until all three pads have been bridged.

::::

### Installing Git

::::: tabs

To use checkm8-a5, you'll need Git. Depending on what version of macOS you're on, the steps are different.

:::: tab name="OS X 10.9 to macOS 10.12" :default="true"

1. Download the Git installer from [this link](https://sourceforge.net/projects/git-osx-installer/files/)
1. Open and run the installer. Once it is installed, open Terminal and run `git --version` to verify it has installed properly.

:::: tab name="macOS 10.13+" :default="false"

1. Install Brew, if you don't have it installed already. Open a Terminal window and run the command `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`. Enter your user password when prompted. This step can take up to half an hour to complete.
1. Once Brew is installed, run the command `brew install git` in terminal. This will take about 5 minutes. Once it is complete, run the command `git --version` to verify it has installed properly.

::::

### Patching the USB Host Shield 2.0 Library

1. Open a new Terminal window and run the command `git clone https://github.com/felis/USB_Host_Shield_2.0.git`. This can take a few minutes.
1. Run the command `git clone https://github.com/synackuk/checkm8-a5.git`.
1. Run the command `cd USB_Host_Shield_2.0 && git apply ~/checkm8-a5/usb_host_library.patch/`.

### Preparing the Script

1. Download and install the [Arduino IDE](https://www.arduino.cc/en/software)
1. While it is installing, connect your MAX3421E USB host shield to the Arduino. The pins and sockets on the bottom of the host shield will line up with the pins and sockets on the Arduino.
1. Connect your Arduino to your computer.
1. Once the Arduino IDE is installed, open Finder, press Command+Shift+G, and type in `~/checkm8-a5`. Open the file named `checkm8-a5.ino`.
1. In the same Terminal window as before, run `cp -r ~/USB_Host_Shield_2.0 ~/Documents/Arduino/libraries/USB_Host_Shield_Library_2.0`.

### Running the Script

1. Connect your Apple TV to a computer with a MicroUSB cable. You will most likely need to disconnect the HDMI cable. Then, enter DFU:
    - Hold Menu and Down until the LED on the Apple TV flashes rapidly.
    - Let go, then hold Menu and Play/Pause until the LED on the Apple TV flashes rapidly.
    - If iTunes or Finder says `n/a` when listing the serial number when reporting it detected an Apple TV in recovery or DFU mode, it has successfully entered DFU. If it displays the serial number, try the steps again - it entered Recovery Mode instead.
1. Disconnect your Apple TV from your computer and connect it to your USB host shield. 
1. Under the Tools menu, select Port and ensure your Arduino is selected.
1. Also under the Tools menu, open Serial Monitor. Set the baud rate is set to 115200, then upload the sketch to the Arduino.
1. Serial Monitor will begin displaying a log of what the script is doing. Once it displays `Done!`, disconnect your Apple TV from the Arduino and proceed to the next steps.

::: warning

At this step, there are many errors you may see. A list of the most common, with fixes, are as follows:

- `usb init failed`: This means you did not solder the USB host shield correctly. Double-check everything is soldered properly and there are no bridges between pins.
- `Non Apple DFU found (vendorID: 0, productId: 0`: This means the exploit failed. Force reboot the Apple TV, reenter DFU, and try the script again.
- `heap_feng_shui_req: setup status = 0, data status = 4` on loop: This is usually not an error. If it goes on for more than two minutes, force reboot the Apple TV and try the process again - otherwise, it should proceed to sending the line `2. set global state`.

:::


## Installing blackb0x

1. Unzip Blackb0x
1. Run Blackb0x
1. Connect your Apple TV via USB to your computer - you will most likely need to disconnect the HDMI cable.
1. Click `Install Jailbreak`
1. Follow the steps Blackb0x provides to enter DFU
    - Skip this step if you have an A1427 Apple TV
1. Once Blackb0x says done, your Apple TV will reboot. Disconnect it from your computer, but once it boots, do not use the Apple TV yet, wait a few minutes until it resprings.

::: tip

It may take a few tries to get your Apple TV into DFU. Be patient and ensure you follow the steps exactly.

:::

::: tip

Your Apple TV 3 may boot into recovery mode after using blackb0x. This is normal, it means you didn't disconnect the USB cable in time - the Apple TV 3 automatically boots into Recovery Mode if it is connected to a computer. Power cycle it and it will boot normally.

:::

You should now be jailbroken with Kodi installed on your home screen. To install packages, you will need to use SSH. To gain access, run the command `ssh -oHostKeyAlgorithms=+ssh-dss root@apple.tv.ip.here`. You can find the IP in Settings.
