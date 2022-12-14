---
lang: en_US
title: Installing XinaA15
description: Guide to installing XinaA15
permalink: /installing-xinaa15
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

XinaA15 is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

::: warning

XinaA15 is currently a **beta**, as a result, you may run into more issues than you would otherwise expect.

Additionally, as this jailbreak is fundamentally different from how most other jailbreaks have been in the past, you may run into issues with tweak compatibility.

:::

::: warning

XinaA15 only supports A12 and newer devices on iOS 15.0 to 15.1.1

:::

## Downloads

- The latest version of [XinaA15](https://github.com/jacksight/xina520_official_jailbreak)
    - Make sure to download the XinaA15 `.ipa` file **onto your iOS device**

## Installing TrollHelper

1. Open Safari
1. Go to [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollHelper, however.

## Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

## Preparing TrollStore

In order to be able to sideload XinaA15, a couple more steps need to be done.

### Installing Persistence Helper

1. Reopen the `GTA Car Tracker` app
1. Press `Register Persistence Helper`

The `GTA Car Tracker` app can now be used as the Persistence Helper

::: tip

The reason the persistence helper is highly important is that, whenever iOS rebuilds its icon cache, all apps installed by TrollStore (as well as TrollStore itself) will either disappear or no longer open.

To workaround this, the Persistence Helper (which will still open even after this happens) can refresh app registrations so that the apps will reappear and open again.

:::

### Installing ldid

1. Open the `TrollStore` app
1. Tap `Install ldid`

## Installing XinaA15

1. Open the `Files` app
1. Go to where you saved the XinaA15 `.ipa` file
1. Tap on the XinaA15 `.ipa` file
1. Press on the `Share` icon at the top right of the screen
1. Press `TrollStore`

The XinaA15 app will now be installed onto your device.

## Running XinaA15

1. Reboot your phone
    - This is not necessary but recommended
1. Open the XinaA15 application from your home screen immediately afterwards
1. Tap "Jailbreak", then "openJailbreak", your device will then reboot after a period of time
1. Open the XinaA15 application from your home screen immediately after rebooting
1. Tap "Jailbreak", then "openJailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating Sileo

::: tip

It's highly recommended to do these steps, as this will fix issues with signing into repositories, among other issues.

:::

### Downloads

- The xina-beta-2 version of [Sileo](https://github.com/Sileo/Sileo/releases/tag/xina-beta-2)
    - Make sure to download the Sileo `.ipa` file **onto your iOS device**

### Removing Sileo-Preboot

1. Open the `TrollStore` app
1. Tap on `Sileo-Preboot`
1. Press `Uninstall App`, then `Uninstall`

Sileo-Preboot will now be uninstalled

### Installing Sileo

1. Open the `Files` app
1. Go to where you saved the Sileo `.ipa` file
1. Tap on the Sileo `.ipa` file
1. Press on the `Share` icon at the top right of the screen
1. Press `TrollStore`

Sileo will now be reinstalled onto your device, and should eventually reappear on the home screen.