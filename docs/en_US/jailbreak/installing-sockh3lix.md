---
lang: en_US
title: Installing sockH3lix
description: Guide to installing sockH3lix
permalink: /installing-sockh3lix
redirect_from:
  - /installing-sockhelix
  - /sockhelix
  - /sockh3lix
  - /sh3
  - /she
pkgman: cydia
extra_contributors:
  - hopolapopola
---

SockH3lix is capable of jailbreaking 64-bit iOS devices on firmware version 10.0.1 up to 10.3.3.

It is also compatible with iPhone 5 on 10.3.4. It is not compatible with A10 devices such as the iPhone 7 and iPad Pro (2nd generation).

Note that the sockH3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.

We will use Sideloadly and a patcher script to install the application to your device.

## Downloads

- The latest version of [sockH3lix](https://github.com/SongXiaoXi/sockH3lix/releases/latest)
- The latest version of [Sideloadly](https://sideloadly.io/)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the sockH3lix `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The sockH3lix application can now be opened from home screen.

## Running sockH3lix

1. Open the sockH3lix application from your home screen
1. Tap "Jailbreak"

::: warning
If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
