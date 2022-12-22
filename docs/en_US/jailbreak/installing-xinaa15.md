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

- The 1.1.4 version of [XinaA15](https://github.com/jacksight/xina520_official_jailbreak/releases/tag/v1.1.4)
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

While you are now jailbroken at this point, we recommend installing Sileo Nightly so that some important issues with the included Sileo can be resolved.

::: warning

While this jailbreak does include both Sileo and Saily, we **highly recommend not using Saily** due to the fact that it tends to cause many issues and can generally lead to either your jailbreak being broken or (in very extreme circumstances) potentially a need to restore to the latest iOS version.

If you wish to do so, you can make it so it doesn't install in the first place by toggling the Saily option off before jailbreaking with XinaA15.

:::

## Installing Sileo Nightly

### Adding Amy's Repo

1. Open the Sileo application
1. Tap "Sources" on the bar at the bottom
1. Tap the "+" icon in the top right-hand corner
1. Type in [https://repo.anamy.gay/](https://repo.anamy.gay/))
1. Tap "Add Source"

### Installing Sileo Nightly

1. Tap on "Amy's Repo"
1. Tap "All Categories"
1. Tap `Sileo (Nightly Channel)`
1. Tap the "Get" button at the top of the page
    - A bar labeled "Queued" should appear at the bottom of your screen
1. Tap on the bar and press "Confirm"
    - It may take some time for the tweak to install
1. After it's finished, tap "Done"

Sileo Nightly should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.