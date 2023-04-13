---
lang: en_US
title: Installing unc0ver (TrollStore)
description: Guide to installing unc0ver using TrollStore
permalink: /installing-unc0ver-trollstore
redirect_from:
  - /installing-uncover-trollstore
pkgman: Cydia
extra_contributors:
  - opa334
  - iCraze
---

unc0ver is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

::: warning

In order to follow this method, you'll need an A12 or newer device running iOS versions 14.0 to 14.3 or 14.6 to 14.8. If you have either an A11 or earlier device or are running iOS 13.7 or earlier, follow <router-link to="/installing-unc0ver">Installing unc0ver</router-link> instead.

If you have an A12 or newer device on iOS versions 14.4 to 14.5.1, continue to <router-link to="/installing-unc0ver-fugu14">Installing unc0ver (Fugu14)</router-link> instead.

:::

While unc0ver is compatible with jailbreaking several devices on iOS/iPadOS versions from 11.0 to 14.8 (excluding iOS 12.5.6), this method of obtaining unc0ver requires an A12 or newer device running iOS versions 14.0 to 14.3 or 14.6 to 14.8.

::: warning

If you are already jailbroken with Taurine, make sure to properly <router-link to="/removing-taurine">remove Taurine</router-link> before proceeding.

:::

::: warning

unc0ver on firmware versions 14.6 to 14.8 only supports A12 and A13 iPhones.

:::

## Downloads

- unc0ver
    - If you are on iOS 14.6 to 14.8, download the latest version of [unc0ver](https://unc0ver.dev/)
      - If you are on iOS 14.6 to 14.8, also download the latest version of [u0Launcher](https://github.com/opa334/u0Launcher/releases)
    - If you are on iOS 14.0 to 14.3, download the 6.1.1 version of [unc0ver](https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa)
    - Make sure to download the aforementioned files **onto your iOS device**

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

In order to be able to sideload unc0ver (and u0Launcher, if needed), a couple more steps need to be done.

### Installing Persistence Helper

1. Reopen the `GTA Car Tracker` app
1. Press `Register Persistence Helper`

The `GTA Car Tracker` app can now be used as the Persistence Helper

::: tip

The reason the persistence helper is highly important is that, whenever iOS rebuilds its icon cache, all apps installed by TrollStore (as well as TrollStore itself) will either disappear or no longer open.

To workaround this, the Persistence Helper (which will still open even after this happens) can refresh app registrations so that the apps will reappear and open again.

:::

## Installing unc0ver

1. Go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the unc0ver `.ipa` file
1. Tap on the unc0ver `.ipa` file
1. Tap `Install`

The unc0ver app will now be installed onto your device.

::: warning

If you're on iOS 14.6 to 14.8, you'll need to repeat these steps for the u0Launcher `.ipa` file as well.

:::

## Running unc0ver

1. Reboot your phone
    - This is not necessary but recommended
1. Open the unc0ver application from your home screen immediately afterwards
    - If you're on iOS 14.6 to 14.8, open the u0Launcher application instead
1. Open the settings menu and disable the `Disable Auto Updates` toggle
    - unc0ver disables Over-The-Air updates by default, however it's recommended to toggle this as it can cause issues when updating manually if not disabled
1. Tap "Done"
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver application from your home screen immediately after rebooting
    - If you're on iOS 14.6 to 14.8, open the u0Launcher application instead
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If you receive the error `rootFS already mounted, delete the OTA update`, read the <router-link to="/troubleshooting/#rootfs-already-mounted">Troubleshooting</router-link> page

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-sileo">Installing Sileo</router-link>

:::
