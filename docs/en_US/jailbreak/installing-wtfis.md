---
lang: en_US
title: Installing wtfis
description: Guide to installing wtfis
permalink: /installing-wtfis
redirect_from:
  - /wtfis
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - hopolapopola
---

wtfis is capable of jailbreaking every 64bit iOS device on firmware version 8.0 up to 8.4.1.

Unlike most modern jailbreaks, wtfis is persistent after a reboot (this is also referred to as an "[untethered](/types-of-jailbreak/#untethered-jailbreaks)" jailbreak). This means that after you reboot the device, the device will stay jailbroken and you won't have to run the exploit again.

::: warning

wtfis is currently **in beta**, if you are not comfortable with using beta software, wait until wtfis (or another jailbreak) exits beta

:::

## Downloads

- The latest version of [wtfis](https://github.com/TheRealClarity/wtfis/releases/latest)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the wtfis `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Pangu application can now be opened from home screen.

## Running wtfis

1. Open the wtfis application from your home screen
    - Allow notifications if prompted
1. Tap "Go"

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.