---
lang: en_US
title: Installing Chimera
description: Guide to installing Chimera
permalink: /installing-chimera
redirect_from:
  - /chimera
  - /cm
pkgman: sileo
extra_contributors:
  - TheHacker894
  - Mineek
---

Chimera is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Chimera is capable of jailbreaking all devices on iOS 12.0 to 12.1.2 and A7 to A11 devices on iOS 12.0 to 12.5.7.

Due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use Sideloadly to install the Chimera jailbreak application to your iOS device for use in the next step.

::: warning

If you have a newer device with an A12 SoC, such as the iPhone XS, you can only use Chimera on iOS 12.0 - 12.1.2. If you are on iOS 12.1.3 to 12.4.1, you will need to follow <router-link to="/installing-unc0ver">Installing unc0ver</router-link> instead.

:::

::: warning

If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly <router-link to="/restoring-rootfs">remove it</router-link> before proceeding.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Chimera is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest release of [Chimera](https://chimera.coolstar.org/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Chimera `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to its servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Chimera application can now be opened from home screen.


## Running Chimera

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Chimera application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone again when prompted
    - If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.
    - This time, it is necessary
1. Once again, open the Chimera application from your home screen immediately after rebooting
1. Tap "Jailbreak" again
    - If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.

::: warning

If that app or your device continually crashes/restarts unexpectedly and the jailbreak isn't installed despite the above steps, attempt to put the device in a freezer for that 1-2 minute period.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
