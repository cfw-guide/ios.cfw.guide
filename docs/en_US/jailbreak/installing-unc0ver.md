---
lang: en_US
title: Installing unc0ver
description: Guide to installing unc0ver
permalink: /installing-unc0ver
redirect_from:
  - /installing-uncover
  - /unc0ver
  - /uncover
  - /u0
  - /uo
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

unc0ver is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is capable of jailbreaking nearly every iOS device on firmware version 11.0 up to 14.8 (excluding iOS 12.5.6/12.5.7), however, for our purposes, it will be used to jailbreak devices in which no easier option is available.

Due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use Sideloadly to install the unc0ver jailbreak application to your iOS device for use in the next step.

::: tip

If you are using a device running iOS 14.0 to 14.3 or 14.6 to 14.8, it is **highly** recommended to follow <router-link to="/installing-unc0ver-trollstore">Installing unc0ver (TrollStore)</router-link> instead.

:::

::: tip

If you are looking for the guide on how to use unc0ver on A12 or newer devices on firmware versions 14.4 to 14.5.1, continue to <router-link to="/installing-unc0ver-fugu14">Installing unc0ver (Fugu14)</router-link>

:::

::: warning

If you are already jailbroken with another jailbreak, make sure to properly <router-link to="/restoring-rootfs">remove it</router-link> before proceeding.

:::

::: warning

unc0ver on firmware versions 14.6 to 14.8 only supports A12 and A13 iPhones.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
unc0ver is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The 5.3.1 version of [unc0ver](https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa)
  - Users on firmware versions 12.4.9 - 12.5.4, 13.5.1 - 14.3 should download the 6.1.1 version of [unc0ver](https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa) instead
  - Users on firmware version 12.5.5 should download the 7.0.2 version of [unc0ver](https://unc0ver.dev/downloads/7.0.2/11c3f7b0eea806ba3cac975f74dcc2cc4e916bac/unc0ver_Release_7.0.2.ipa) instead
  - Users with A12 or A13 iPhones on firmware versions 14.6 - 14.8 should download the latest version of [unc0ver](https://unc0ver.dev) instead
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the unc0ver `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The unc0ver application can now be opened from home screen.

## Running unc0ver

1. Reboot your phone
    - This is not necessary but recommended
1. Open the unc0ver application from your home screen immediately afterwards
    - If unc0ver warns you that the app has been tampered with, reinstall unc0ver via Sideloadly
1. Open the settings menu and disable the `Disable Auto Updates` toggle
    - unc0ver disables Over-The-Air updates by default, however it's recommended to toggle this as it can cause issues when updating manually if not disabled
1. Tap "Done"
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver application from your home screen immediately after rebooting
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If you receive the error `rootFS already mounted, delete the OTA update`, read the <router-link to="/troubleshooting/#rootfs-already-mounted">Troubleshooting</router-link> page

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to the following depending on your iOS version:

- If you are on iOS 12 or later, continue to <router-link to="/installing-sileo">Installing Sileo</router-link>
- If you are on iOS 11, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
