---
lang: en_US
title: Installing Fugu15 Max
description: Guide to installing Fugu15 Max
permalink: /installing-fugu15max
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Fugu15 Max is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

::: warning

Fugu15 Max is currently a **beta**, as a result, you may run into more issues than you would otherwise expect.

Additionally, as this jailbreak is fundamentally different from how most other jailbreaks have been in the past, you will run into **substantial** issues with tweak compatibility.

:::

::: warning

Fugu15 Max only supports A12 and newer devices on iOS 15.0 to 15.4.1

:::

## Downloads

The latest version of [Fugu15 Max](https://github.com/opa334/Fugu15/releases)
  - Only download the Fugu15 Max `.tipa` (named `Fugu15.tipa`)

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

In order to be able to sideload Fugu15 Max, a couple more steps need to be done.

### Installing Persistence Helper

1. Reopen the `GTA Car Tracker` app
1. Press `Register Persistence Helper`

The `GTA Car Tracker` app can now be used as the Persistence Helper

::: tip

The reason the persistence helper is highly important is that, whenever iOS rebuilds its icon cache, all apps installed by TrollStore (as well as TrollStore itself) will either disappear or no longer open.

To workaround this, the Persistence Helper (which will still open even after this happens) can refresh app registrations so that the apps will reappear and open again.

:::

## Installing Fugu15 Max

1. Go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the Fugu15 Max `.tipa` file
1. Tap on the Fugu15 Max `.tipa` file
1. Tap `Install`

The Fugu15 Max app will now be installed onto your device.

## Running Fugu15 Max

::: warning

If your device is on iOS 15.0 to 15.3.1, you'll need to fully disable your Wi-Fi in Settings in order to jailbreak, you'll be able to re-enable it after jailbreaking, but you'll still need to re-disable it every time you rejailbreak.

:::

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Fugu15 Max application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

Sileo Nightly should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

While you are now jailbroken at this point, we need to both update and install some packages so that we're able to both update other packages and have stuff work properly

## Installing necessary software

1. Open the Sileo Nightly
1. Tap on the "Sources" tab
1. Tap on the "ElleKit" repository, then tap on "All Categories"
1. Tap "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Restart SpringBoard Later`
1. Go back to the list of repositories on the "Sources" tab
1. Tap the `+` button, then add `https://dhinakg.github.io/repo/`
1. Once the repository is added, tap on it, then tap on "All Categories"
1. Tap on `Sileo (Nightly Channel)`
1. Tap "Modify", then tap "Upgrade"
1. Tap the `< All Categories` button
1. Tap on `PreferenceLoader`
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Restart SpringBoard`

## Updating necessary software

1. After the device finishes respringing, reopen Sileo Nightly
1. Tap on the "Search" tab
1. Search for "debianutils"
1. Tap "Modify", then tap "Upgrade"
1. Tap on `< Search`
1. Search for "liblzma5"
1. Tap "Modify", then tap "Upgrade"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Done`

::: tip

After doing all the above steps, you may need to reboot and rejailbreak in order for tweak injection to function properly.

:::
