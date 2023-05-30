---
lang: en_US
title: Installing p0sixspwn
description: Guide to installing p0sixspwn
permalink: /installing-p0sixspwn
redirect_from:
  - /installing-posixpwn
  - /p0sixpwn
  - /posixpwn
  - /p0
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Midnight145
---

P0sixspwn is capable of jailbreaking every iOS device on firmware version 6.1.3 up to 6.1.6

P0sixspwn is an [untethered](/types-of-jailbreak/#untethered-jailbreaks) jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore

You will need a computer running macOS 10.12 Sierra or older or Windows XP or newer. Wine will not work.

![A screenshot of P0sixspwn (Windows)](/assets/images/p0sixspwn-win.png)

::::: tabs

:::: tab name="macOS Sierra or older" :default="true"

1. Download the latest version of [P0sixspwn](https://ih8sn0w.com/p0sixspwn.html)
1. Unzip P0sixspwn
1. Run P0sixspwn
    - Right click and click `Open`
1. Connect your iOS Device over to USB to your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Click `Jailbreak` on P0sixspwn
    - Jailbreaking may take a while, please be patient and do not let your computer go to sleep mode

::::

:::: tab name="macOS High Sierra and newer"

1. Download the [custom version of p0sixspwn updated for modern macOS](https://archive.org/download/p0sixspwn-modernmacOS/p0sixspwn%206.1.6%20test.zip)
1. Unzip the ZIP file
1. Open Terminal (can be found in `Applications/Utilities/`)
1. Navigate to the extracted zip folder with `cd`
1. Run `./p0sixspwn.tool` from the P0sixspwn folder
    - If you receive an error `“pris0nbarake” cannot be opened because the developer cannot be verified.` or anything similar, run `sudo xattr -c *` in the P0sixspwn folder and then run `./p0sixspwn.tool` again.
1. Connect your iOS Device over to USB to your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Click `Jailbreak` on P0sixspwn
    - Jailbreaking may take a while, please be patient and do not let your computer go to sleep mode

::::

:::: tab name="Windows"

1. Check your iTunes version, if it is 11.1.4 or lower, you can skip steps 2-4
    - You can check by opening iTunes, clicking `Help`, then clicking `About`
1. Press `Windows Key+R` to open the Run dialog, then type `appwiz.cpl`
1. Uninstall everything published by `Apple Inc.`
    - You can find them easier if you sort by publisher
    - The amount of applications may vary, make sure you remove all of them
    - If you are prompted to restart your computer, dismiss the dialog
1. After all programs have been uninstalled, restart your computer
1. Download iTunes version 11.1.5
    - [64-bit](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
    - [32-bit](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)
1. Install iTunes, then restart your computer if prompted
1. Download the latest version of [P0sixspwn](https://ih8sn0w.com/p0sixspwn.html)
1. Unzip P0sixspwn

::: tip

For Windows 10 and later, you will need to set compatibility mode for the P0sixspwn application to Windows XP SP3
1. Right click on `p0sixspwn-1.0.8.exe`
1. Select `Properties`
1. Go to the `Compatibility` tab
1. Tick the checkbox in `Compatibilty mode`
1. Set the drop down box to `Windows XP (Service Pack 3)`
1. Click `Apply`, then `OK`

:::

9. Run P0sixspwn
10. Connect your iOS Device over to USB to your computer
      - Make sure your computer is trusted and allowed to view the contents of your device
11. Click `Jailbreak` on P0sixspwn
      - Jailbreaking may take a while, please be patient and do not let your computer go to sleep mode

::: tip

After jailbreaking is complete, install the latest version of iTunes to avoid library issues
 - Windows XP and Windows Vista (12.1.3):
    - [64-bit](https://secure-appldnld.apple.com/itunes12/031-34005-20150916-98D38F1E-5C11-11E5-A6AD-C05A6DA99CB1/iTunes6464Setup.exe)
    - [32-bit](https://secure-appldnld.apple.com/itunes12/031-34002-20150916-98D32A92-5C11-11E5-80AC-C25A6DA99CB1/iTunesSetup.exe)
 - Windows 7 and later (select Windows 8 if you are on Windows 7):
    - [Apple Support article](https://support.apple.com/en-us/HT210384)

:::

::::

:::::

::: tip

Be sure to use an MFI-certified 30-pin or lightning connector for highest chances of success

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
