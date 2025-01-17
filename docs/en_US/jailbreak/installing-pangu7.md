---
lang: en_US
title: Installing Pangu7
excerpt: Guide to installing Pangu7
permalink: /installing-pangu7
redirect_from:
  - /pangu712
  - /pangu7
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - hopolapopola
---

Pangu7 is capable of jailbreaking every iOS device on firmware version 7.1 up to 7.1.2.

Pangu7 is an untethered jailbreak, meaning that it persists after reboot, so once it's installed you will not have to reinstall it unless you erase your device.

You will need a computer running Windows XP and newer or a Mac running Mac OS X 10.9 Mavericks to macOS 10.14 Mojave and the appropriate Pangu.

::: warning

If you are using a 32-bit device, it is recommended to follow <router-link to="/using-lyncis">Ysing Lyncis</router-link> instead, as it does not require a computer and is substantially easier.

:::

![A screenshot of Pangu7 (Windows)](/assets/images/pangu7-win.png)

::::: tabs

:::: tab name="macOS" :default="true"

### Downloads

- Version 1.2.0 of [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/Fo8ihCJa) from the Legacy Jailbreak Archives

### Installing Pangu

1. Open the `pangu` dmg and move the application to your `/Applications` folder
1. Open the terminal and run the following command: `sudo -b /Applications/pangu.app/Contents/MacOS/pangu`
1. Plug your device into your computer and trust your computer 
1. Disable your passcode (You will be able to re-enable it once the jailbreak process is done)
1. Set your device's date to any point before June 2014
1. Press jailbreak in the Pangu app on your computer
1. Open the Pangu app on your device once it appears on your home screen
   - Tap Continue to trust the app and allow it to run
1. Your device will reboot after a short period, then you will need to unlock it
1. Wait a little while and your device will reboot one more time

::::

:::: tab name="Windows"

::: danger

You will bootloop if you jailbreak your device while in a dark space

:::


### Downloads
- Version 1.0-en of [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/41UlRSyS) from the Legacy Jailbreak Archives

### Installing Pangu

1. Open the `pangu` exe
1. Plug your device into your computer and trust your computer 
1. Disable your passcode (You will be able to re-enable it once the jailbreak process is done)
1. Set your device's date to any point before June 2014
1. Untick the `Install PP25` checkbox
1. Press jailbreak in the Pangu app on your computer
1. Open the Pangu app on your device once it appears on your home screen
   - Tap Continue to trust the app and allow it to run
1. Your device will reboot after a short period, then you will need to unlock it
1. Wait a little while and your device will reboot one more time

### Fixing bootloops while booting in a dark space

1. Unlock your device and open Cydia
1. Tap `Ignore (Temporary)`
1. Open the Sources tab
1. Tap `Edit` then `Add`
1. Type in `http://repo.kawaiizenbo.me` and then tap `Add source` 
1. Tap on the new source `KawaiiZenbo's Cydia repository`
1. Tap on `System` then `Pangu 7.1-7.1.x Untether` 
1. Tap `Install` then `Confirm`
1. Reboot your device once the package is installed

::::

:::::

----

Once you see your lock screen, you will be jailbroken with a fixed untether package that will no longer cause bootloops while in the dark. You can now use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

