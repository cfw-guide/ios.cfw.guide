---
lang: en_US
title: Installing XinaA15
description: Guide to installing XinaA15 (Archived)
permalink: /xinaa15-archive
extra_contributors:
  - opa334
  - iCraze
redirect_from:
  - /installing-xinaa15
---

XinaA15 is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

::: danger

This guide only exists as an archive - we won't be making noticeable changes to this guide in the future if anything happens.

For users who are looking for a jailbreak - we generally recommend following <router-link to="/installing-dopamine">Installing Dopamine</router-link> instead, as it will provide an overall better experience in almost every way compared to XinaA15, and supports the same devices and iOS versions as XinaA15, and even more.

We don't recommend that average users use XinaA15 at this point though, due to how:
  - XinaA15 generally requires a lot of patches that can result in a lot of strange and unexplainable issues
  - Sileo is unable to support future versions for XinaA15, leaving users without an ideal package manager
  - As iOS 15/16 jailbreaks begin to prioritize rootless, attempting to install packages with an equal or higher rootless version will break (due to the aforementioned note about Sileo being unable to be supported for XinaA15 at this point) making it impossible in the future to install most packages from their repositories
  - The developer of XinaA15 (xina520) has themselves recommended that users switch to Dopamine

If you currently use XinaA15, we *highly recommend* <router-link to="/removing-xinaa15">Removing XinaA15</router-link> and switching to <router-link to="/installing-dopamine">Dopamine</router-link>

Regardless, if you choose to install or continue to use XinaA15, do note that there will be an increasing number of unresolvable issues down the road that have little to no fix (other than switching to Dopamine).

:::

::: warning

XinaA15 only supports A12 and newer devices on iOS 15.0 to 15.1.1

:::

## Downloads

Download both of the following `.ipa` files **onto your iOS device**:
- The latest version of [XinaA15](https://apt.xina.vip/XinaA12.1.1.8.ipa)
- The xina-beta-5 version of [Sileo](https://github.com/Sileo/Sileo/releases/download/xina-beta-5/Sileo-Xina-Beta-5.ipa)

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
1. Tap "Jailbreak", then "openJailbreak", your device will then reboot after a period of time
1. Open the XinaA15 application from your home screen immediately after rebooting
1. Tap "Jailbreak", then "openJailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

While you are now jailbroken at this point, as there isn't a package manager included with XinaA15, we'll manually install the xina-beta-5 version of Sileo.

## Installing Sileo

1. Go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the Sileo `.ipa` file
1. Tap on the Sileo `.ipa` file
1. Tap `Install`

Sileo should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

Continue to <router-link to="/using-sileo">Using Sileo</router-link>

:::
