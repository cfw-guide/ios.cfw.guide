---
lang: en_US
title: Installing HomeDepot
description: Guide to installing HomeDepot
permalink: /installing-homedepot
redirect_from:
  - /homedepot
  - /hd
---

HomeDepot is capable of jailbreaking every 32bit iOS device on firmware version 9.1 up to 9.3.4.

Note that the HomeDepot jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the HomeDepot jailbreak application to your device every 7 days from your computer.

We will use the AltDeploy tool to install the HomeDepot jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [HomeDepot](http://wall.supplies/)
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![A screenshot of the AltDeploy application](/assets/images/altdeploy.png)

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the HomeDepot `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your password
    - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The HomeDepot application can now be opened from home screen.

## Running HomeDepot

1. Open the HomeDepot application from your home screen
1. Tap `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

When jailbreaking for a second time, an option called "Kickstart Jailbreak" will replace "Prepare for Jailbreak". Tap that instead.

::: warning
If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](/faq/#what-are-tweaks), themes and more.