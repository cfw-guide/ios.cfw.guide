---
lang: en_US
title: Installing greenpois0n
description: Guide to installing greenpois0n
permalink: /installing-greenpois0n
redirect_from:
    - /greenpois0n
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

greenpois0n is capable of jailbreaking every iOS device except the iPhone 3G on firmware versions 4.1, 4.2.1, and 4.2.6, as well as the iPad 1st Generation on version 3.2.2

greenpois0n is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore  
You will need a computer running macOS 10.11 or older or Windows XP - 8.1. Wine will not work.

![A screenshot of greenpois0n (Windows)](/assets/images/greenpois0n-win.png)

## Installing the application

<br>

::::: tabs

:::: tab name="macOS" :default="true"

1. Download [greenpois0n](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)
    - Choose RC6.1 if on iOS 4.2.1 or 4.2.6
    - Choose RC4 if on iOS 4.1 or iPhoneOS 3.2.2
1. Unzip greenpois0n
1. Run greenpois0n
    - Right click and click `Open`
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

::::

:::: tab name="Windows"

1. Check your iTunes version, if it is 10.6.3 or lower, you can skip steps 2-4
    - You can check by opening iTunes, clicking `Help`, then clicking `About`
1. Press `Windows Key+R` to open the Run dialog, then type `appwiz.cpl`
1. Uninstall everything published by `Apple Inc.`
    - You can find them easier if you sort by publisher
    - The amount of applications may vary, make sure you remove all of them
    - If you are prompted to restart your computer, dismiss the dialog
1. After all programs have been uninstalled, restart your computer
1. Download iTunes version 10.7
    - [64-bit](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
    - [32-bit](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)
1. Install iTunes, then restart your computer if prompted
1. Download [greenpois0n](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)
    - Choose RC6.1 if on iOS 4.2.1 or 4.2.6
    - Choose RC4 if on iOS 4.1 or iPhoneOS 3.2.2
1. Unzip greenpois0n
1. Run greenpois0n
    - Administrator access may be prompted.
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

After jailbreaking is complete, install the latest version of iTunes to avoid library issues
 - Windows XP and Windows Vista (12.1.3):
    - [64-bit](https://secure-appldnld.apple.com/itunes12/031-34005-20150916-98D38F1E-5C11-11E5-A6AD-C05A6DA99CB1/iTunes6464Setup.exe)
    - [32-bit](https://secure-appldnld.apple.com/itunes12/031-34002-20150916-98D32A92-5C11-11E5-80AC-C25A6DA99CB1/iTunesSetup.exe)
 - Windows 7 and later (select Windows 8 if you are on Windows 7):
    - [Apple Support article](https://support.apple.com/en-us/HT210384)

:::

::::

::::::

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
1. Tap `Unsigned iOS Bundle`
1. Tap `Install` -> `Install` -> `Install` -> Done
