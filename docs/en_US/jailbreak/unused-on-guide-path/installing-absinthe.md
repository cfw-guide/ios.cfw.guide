---
lang: en_US
title: Installing Absinthe
description: Guide to installing Absinthe
permalink: /installing-absinthe
redirect_from:
    - /absinthe
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

Absinthe is capable of jailbreaking every iOS device on firmware versions 5.0.1 and 5.1.1, as well as the iPhone 4S on firmware version 5.0.

Absinthe is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore

## Downloads

- Computer running macOS 10.12.x or older or Windows XP to Windows 8.1 with iTunes installed. Wine will not work.
- The latest version of [Absinthe](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)

![A screenshot of Absinthe (Windows)](/assets/images/absinthe-win.png)

## Installing the application

1. Unzip Absinthe
1. Run Absinthe
    - Right click and click `Open` on macOS
    - On Windows, Absinthe will extract itself to a folder wherever you ran the executable. Open that folder and run "absinthe.exe".
1. Connect your iOS Device over to USB to your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Click `Jailbreak` on Absinthe
    - Jailbreaking may take a while, please be patient and do not let your computer go to sleep mode.

::: tip

Be sure to use an MFI-certified 30-pin connector for highest chances of success

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done