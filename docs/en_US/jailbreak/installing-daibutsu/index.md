---
lang: en_US
title: Installing Daibutsu
description: Guide to installing Daibutsu
permalink: /installing-daibutsu
redirect_from:
  - /Daibutsu
  - /es
  - /eta
---

Daibutsu is capable of jailbreaking 32-bit iOS devices on firmware version 8.4.1 to 9.1.

Unlike most modern jailbreaks, Daibutsu is persistent after a reboot (this is also referred to as an "[untethered](/types-of-jailbreak/#untethered-jailbreaks)" jailbreak). This means that after you reboot the device, the device will stay jailbroken and you won't have to run the exploit again.

We will use the AltDeploy tool to install the Daibutsu jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Daibutsu](https://etasonjb.tihmstar.net/)
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![A screenshot of the AltDeploy application](/assets/images/altdeploy.png)

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Daibutsu `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your password
    - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Daibutsu application can now be opened from home screen.

## Running Daibutsu

1. Open the Daibutsu application from your home screen
1. Tap `Jailbreak`

::: warning
If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](/faq/#what-are-tweaks), themes and more.