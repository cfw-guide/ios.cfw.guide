---
lang: en_US
title: Installing unc0ver dark
description: Guide to installing unc0ver dark
permalink: /installing-unc0ver dark
pkgman: zebra
extra_contributors:
  - TheHacker894
  - Alriceee
---

<!-- 

The only reason this guide exists is because iOS 12.0.1 (and presumably, iOS 12.0 as well) are unable to successfully strap with all other existing jailbreak tools (Latest Chimera will strap but is incredibly broken and unusable, Chimera 1.3.9 will strap but have a non-functional Sileo, and everything else will generally panic the device while strapping)

The literal millisecond this situation improves I am nuking this guide completely because this is genuinely a fucking atrocity and I deserve to get crucified for even writing this 

-->

unc0ver dark is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is capable of jailbreaking A11 and earlier devices on 11.0 to 12.1.2, however, for our purposes, it will only be used on iOS 12.0 and 12.0.1, due to other jailbreak tools being largely non-functional.

Due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use Sideloadly to install the unc0ver dark jailbreak application to your iOS device for use in the next step.

::: danger

This guide **should not be followed** unless you have an iOS 12.0 or 12.0.1 device, *and have been unable to achieve a truly functional jailbreak* with any other jailbreak.

Additionally, many steps in this guide will need to be precisely followed, or you will run into issues and need to start most of this guide over.

***If you do not know if you need this, return to <router-link to="/get-started">Get Started</router-link>, and do not continue with this guide***.

:::

## Downloads

- The latest version of [unc0ver dark](https://dark.diatr.us/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the unc0ver dark `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The unc0ver dark application can now be opened from home screen.

## Running unc0ver dark

1. Reboot your phone
    - This is not necessary but recommended
1. Open the unc0ver dark application from your home screen immediately afterwards
1. Toggle on `Re(Install) Sileo` but do not jailbreak yet
1. Go to the `Settings` tab and disable the `Disable Auto Updates` toggle
    - unc0ver dark disables Over-The-Air updates by default, however it's recommended to toggle this as it can cause issues when updating manually if not disabled
1. Go back to the `Jailbreak` tab, then tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver dark application from your home screen immediately after rebooting
    - Ensure that `Re(Install) Sileo` is still enabled from earlier
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

You should now be jailbroken with Sileo installed on your home screen, however, due to this jailbreak being extremely old, the included version of Sileo **should not be used outside of the below steps**.

::: warning

The next steps will involve installing a series of packages and package managers, which are all required to make unc0ver dark as functional as possible.

:::

## Installing Cydia

1. Open the Sileo application
1. Go to the `Packages` tab
1. Tap on `Sileo`, then tap on the 3 dots on the top right, then tap "Ignore Future Updates"
1. Go back to the `Packages` tab, tap "Upgrade All", then tap "Confirm"
1. Tap "Done"
1. Go to the `Search` tab, and search for `Cydia Installer`
1. Tap `Get`, then tap "Confirm"

Cydia should now be installed on your home screen. 

::: tip

Once Cydia is installed, you may exit the Sileo application. Sileo should no longer be used.

:::

## Installing NewTerm 2

1. Open the Cydia application
1. When prompted, tap "Complete Upgrade", then tap "Confirm"
1. Tap `Return to Cydia` when prompted
1. Go to the `Sources` tab
1. Tap "Edit", then "+", then type in `https://repo.chariz.com`
1. Press "Add Source", and then `Return to Cydia` when prompted
1. Go to the `Search` tab, and search for `NewTerm 2`
1. Tap `Install`, then tap "Confirm"
1. Tap `Return to Cydia`

NewTerm 2 should now be installed on your home screen. Additionally, dependencies for Zebra should also be installed as a result of installing NewTerm 2.

## Installing Zebra

1. Go to the `Sources` tab
1. Tap "Edit", then "+", then type in `https://getzbra.com/repo`
1. Press "Add Source", and then `Return to Cydia` when prompted
1. Go to the `Search` tab, and search for `Zebra`
1. Tap `Install`, then tap "Confirm"

Zebra should now be installed on your home screen.

::: tip

Once Zebra is installed, you may exit the Cydia application. Cydia should no longer be used unless you run into an issue with packages with Zebra.

:::

## Installing PreferenceLoader

::: danger

The steps in this section need to be followed extremely carefully. Following them incorrectly **will result in you needing to restore rootfs and repeat these steps again**.

:::

1. Open the Zebra application
1. Tap on `Community Sources`, tap "Cydia", then tap "Import"
1. Tap "Sileo", then tap "Import"
1. Go to the `Sources` tab
1. Tap "+", then enter `https://repo.chimera.sh`
1. Go to `Chimera Repo`, tap "System", then tap "PreferenceLoader"
1. Tap `Install`, tap on the Queue, then tap "Confirm"
1. Tap `Done`, then go back to the `Sources` tab
1. Swipe `Chimera Repo` all the way to the left to remove the repository

PreferenceLoader will now be installed, however, we'll need to grab the separate app, `TweakSettings` in order to be able to view modify any tweak preferences.

## Installing TweakSettings

1. Tap "+", then enter `https://creaturecoding.com/repo`
1. Go to the `Search` tab, and search for `TweakSettings`
1. Tap `Install`, tap on the Queue, then tap "Confirm"

TweakSettings should now be installed on your home screen, and can be used for viewing and modifying any tweak preferences.

## Additional Steps

While the jailbreak is ready to be used at this point, we're going to disable `Re(Install) Sileo` in the unc0ver dark app, which was enabled when initially running unc0ver dark for the first time, however is no longer necessary.

1. Open the unc0ver dark application
1. Toggle off `(Re)Install Sileo`
1. Close and Re-open the unc0ver dark application to make sure that this change is applied

::: tip

You can now use Zebra to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

Continue to <router-link to="/using-zebra">Using Zebra</router-link>

:::