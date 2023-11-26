---
lang: en_US
title: Installing XinaA15
description: Guide to installing XinaA15
permalink: /installing-xinaa15
extra_contributors:
  - opa334
  - iCraze
redirect_from:
  - /xinaa15-archive
---

XinaA15 is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

:::

::: warning

XinaA15 only supports A12 and newer devices on iOS 15.0 to 15.4.1

:::

## Downloads

Download the following `.ipa` files **onto your iOS device**:
- The latest version of [XinaA15](https://apt.xina.vip/Xina.kfd.2.0.8.ipa)

## Installing TrollHelper

1. Open Safari
1. Go to [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollHelper, however.

## Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

## Installing Persistence Helper

1. Reopen the `GTA Car Tracker` app
1. Press `Register Persistence Helper`

The `GTA Car Tracker` app can now be used as the Persistence Helper

::: tip

The reason the persistence helper is highly important is that, whenever iOS rebuilds its icon cache, all apps installed by TrollStore (as well as TrollStore itself) will either disappear or no longer open.

To workaround this, the Persistence Helper (which will still open even after this happens) can refresh app registrations so that the apps will reappear and open again.

:::

## Installing XinaA15

1. Go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the XinaA15 `.ipa` file
1. Tap on the XinaA15 `.ipa` file
1. Tap `Install`

The XinaA15 app will now be installed onto your device.

## Running XinaA15

1. Reboot your phone
    - This is not necessary but recommended
1. Open the XinaA15 application from your home screen immediately afterwards
1. Tap "Jailbreak", then "OpenJailbreak", your device will then reboot after a period of time
1. Open the XinaA15 application from your home screen immediately after rebooting

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

Sileo should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.