---
lang: en_US
title: Installing Daibutsu
description: Guide to installing Daibutsu
permalink: /installing-daibutsu
redirect_from:
  - /daibutsu
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
 - Alriceee
---

Daibutsu is capable of jailbreaking most A5(X) iOS devices on firmware version 8.4.1.

::: warning

With regards to iPad 2's, Daibutsu only supports iPad 2's that were made in 2012 or later.

In case you don't know if it's an eligible iPad 2, the following should be true:
- It is a WiFi-Only iPad 2
- It is a 16GB iPad 2

If it is a 16GB WiFi-Only iPad 2, you should check Settings -> General -> About -> Legal -> RF Exposure
- If it mentions "iPad2,4" in the URL mentioned in the page, it is a supported device

If it is a cellular iPad 2, or a 32/64GB iPad 2, or if checking the URL does not say it's an iPad2,4, it is not a supported iPad 2, and you should follow <router-link to="/installing-etasonJB">Installing etasonJB</router-link> instead.

:::

Unlike most modern jailbreaks, Daibutsu is persistent after a reboot (this is also referred to as an "[untethered](/types-of-jailbreak/#untethered-jailbreaks)" jailbreak). This means that after you reboot the device, the device will stay jailbroken and you won't have to run the exploit again.

We will use the Sideloadly tool to install the Daibutsu jailbreak application to your iOS device for use in the next step.

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Daibutsu is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Daibutsu](https://dora2ios.web.app/daibutsu.html)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Daibutsu `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Daibutsu application can now be opened from home screen.

## Running Daibutsu

1. Open the Daibutsu application from your home screen
1. Tap `Jailbreak`

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
