---
lang: en_US
title: Installing Patchstick
description: Guide to installing Patchstick
permalink: /installing-patchstick
redirect_from:
    - /patchstick
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: none
---

Patchstick is capable of untether jailbreaking the Apple TV 1 on Apple TV Software 1.0 to 3.0.2.

Patchstick is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes or Finder (macOS Catalina and newer).

THIS IS IN PROGRESS PLEASE DO NOT MERGE

## Requirements

- A computer with at least one free USB-A port
- A USB-A flash drive with a capacity between 1GB and 64GB
- macOS 10.8 to 10.13

## Creating the Patchstick

1. Download the Apple TV software's restore DMG corresponding to the TV Software version that your Apple TV is running from [here](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/cgUwDb5S). [This link](https://www.iclarified.com/970/appletv-firmware-download-locations) will tell you which DMG corresponds to what TV Software version
    - If you are running TV Software 1.1, there is no download currently. Contact WhitetailAni#1287 or Converseallstar95#0067 on Discord as soon as you can for additional instructions.
1. Download the latest version of [ATV USB Creator](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/M1kWwbia)
1. Unzip ATV USB Creator and drag it to /Applications
1. Open Terminal and run the command `sudo /Applications/atvusb-creator.app/Contents/MacOS/atvusb-creator` to open the application. Enter your user password when prompted.
1. In ATV USB Creator, click Choose a DMG and then select your downloaded TV Software DMG.
1. Ensure that your chosen USB flash drive is selected in the "USB Target Device" dropdown. It will not show the drive's name, only its location in /dev.
    - To ensure that it is the correct drive, open Disk Utility, select your flash drive, and make sure that the Device listing matches up with ATV USB Creator's selected device.
    - This will erase all data on the flash drive.
1. Make sure that `ssh tools` and `bin tools` is enabled under the Installation Options dropdown. You may enable the other options, but they are not required.
1. Click the `Create Using ->` button and wait. The process will take a few minutes.

## Installing the Patchstick

1. Unplug the power cable from your Apple TV.
1. Plug your newly created Patchstick into the USB port on the back of your Apple TV.
1. Plug the power cable back in.
1. Wait a few minutes. You will see an Apple TV 1 logo with Tux sitting on it for about 30 seconds, and then a lot of text will scroll down the screen.
1. Once you see the line `penbuntu login: _` at the bottom, unplug the Apple TV, unplug the USB flash drive, and plug your Apple TV back in.

:::

You should now be jailbroken with the Software Menu added to your home screen. You can use this menu to manage your Apple TV. SSH is available via the command `ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-dss frontrow@ip.of.apple.tv`.
