---
lang: en_US
title: Installing Antares
description: Guide to Installing Antares
permalink: /installing-antares
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: pxlinstaller
---

Antares is capable of jailbreaking any device on iPhone OS 1.0 to 1.1.5.

Antares is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered jailbreak</router-link>, meaning it only requires the exploit to be run once, whether through a website, an app, or a computer.

In order to use Antares, you will need a computer.

## Downloads

- The latest version of [Antares](https://github.com/theiphoneos1project/Antares/releases) for your platform.
    - For Apple Silicon Macs, this will be `Antares_macOS_arm64.zip`
    - For Intel-based Macs, this will be `Antares_macOS_x64.zip`
    - For Linux, this will be `Antares_Linux_x64.zip`
    - For Windows, this will be `Antares_Windows_x64.zip`

## Installing Antares

::: tip

Extract the zip file for your platform before proceeding with this guide.

:::

Please select your operating system:

::::: tabs

:::: tab name="macOS" :default="true"

1. Plug your device into your computer
1. Double-click `antares-gui`
1. Click `Jailbreak`

Antares will now begin to jailbreak your device.

Once the device is booted back to the lock screen, you will now be jailbroken.

::::

:::: tab name="Linux"

1. Plug your device into your computer
1. Open a terminal application
1. Run `cd <path/to/Antares>`
    - In most cases, this will likely mean running `cd ~/Downloads/Antares_Linux_x64`
1. *In the same terminal window*, run `sudo antares-gui`
1. Click `Jailbreak`

Antares will now begin to jailbreak your device.

Once the device is booted back to the lock screen, you will now be jailbroken.

::::

:::: tab name="Windows"

1. Plug your device into the computer
1. Open `zadig.exe`
1. Toggle on List All Devices by going to `Options` -> `List All Devices`
1. Select your iPhone or iPod Touch
    - This will likely be whatever has `(Interface 1)` listed next to it
1. Set the *target* driver to libusbK, then click `Replace Driver`
    - Note that libusbK may be listed as something like `libusbK (v3.1.0.0)`
    - If prompted, reboot your computer, then repeat the step two of this section before continuing
1. Open `antares-gui.exe`
1. Put the device into recovery mode by going to `Tools` -> `Enter Recovery`
1. In Zadig, select your iPhone or iPod Touch that is in Recovery Mode
    - This will likely be `IF0 (Interface 0)`
1. Set the *target* driver to libusbK, then click `Replace Driver`
    - Note that libusbK may be listed as something like `libusbK (v3.1.0.0)`
    - If prompted, reboot your computer, then repeat the step six of this section before continuing
1. Reboot your computer
1. In Antares, press `Jailbreak`

Antares will now begin to jailbreak your device.

Once the device is booted back to the lock screen, you will now be jailbroken.

::::

:::::

Note that - unlike jailbreaks for newer firmwares - this jailbreak does not ship with an on-device package manager, and does not use traditional `.deb` tweaks. Instead, iPhone OS 1.x jailbreaks use `.pxl` tweaks, and with Antares, these are installed through the PXLInstaller utility. As such, no tweak that supports newer firmwares works with this jailbreak, and vice-versa.
