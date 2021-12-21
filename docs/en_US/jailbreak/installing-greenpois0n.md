---
lang: en_US
title: Installing greenpois0n
description: Guide to installing greenpois0n
permalink: /installing-greenpois0n
redirect_from:
    - /greenpois0n
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak <a href="http://discord.legacyjailbreak.com/">Discord Server</a>.
pkgman: cydia
---

greenpois0n is capable of jailbreaking every iOS device except the iPhone 3G on firmware versions 4.1, 4.2.1, and 4.2.6

greenpois0n is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore

## Downloads

- Computer running macOS 10.11.X or older or Windows XP - 8.1. Wine will not work.
- [greenpois0n](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)
  - Choose RC6.1 if on iOS 4.2.1 or 4.2.6
  - Choose RC4 if on iOS 4.1
- iTunes version 10.7 if on Windows
  - [64-bit](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
  - [32-bit](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)

![A screenshot of greenpois0n (Windows)](/assets/images/greenpois0n-win.png)

## Installing the application

1. Unzip greenpois0n
1. Run greenpois0n
    - Right click and click `Open` on macOS
    - On Windows, Administrator access may be prompted.
1. Connect your iOS Device over to USB to your computer
    - Make sure your computer is trusted and allowed to view the contents of your device.
1. Click the `Prepare to Jailbreak (DFU)` button and follow the instructions on screen to put your device into DFU mode.
1. Once finished, click the `Jailbreak!` button.
    - Your iOS Device's screen may turn white during this process. This is normal.
    - Jailbreaking may take a while, please be patient and do not let your computer go to sleep mode.
1. Once the jailbreak process is complete and you are on the home screen, open the newly-installed `Loader` app.
    - Ensure your iOS Device is connected to the internet.
1. Tap on `Cydia` and then tap `Install Cydia`
    - The download may vary in speed depending on your connection. Ensure that your iOS Device does not go to sleep.

::: tip

Be sure to use an MFI-certified 30-pin connector for highest chances of success

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
