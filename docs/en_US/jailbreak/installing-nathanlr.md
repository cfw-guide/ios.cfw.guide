---
lang: en_US
title: Installing nathanlr
description: Guide to installing nathanlr
permalink: /installing-nathanlr
pkgman: sileo
extra_contributors:
 - Alriceee
---

::: danger

Before continuing, please **read the following information below in full**.

nathanlr is what is considered a **semi**-jailbreak, and is **not** a full-fledged, proper jailbreak.

*Semi*-jailbreaks - while allowing you to use a decent percentage of tweaks - do not have the same compatibility or capabilities as a full-fledged jailbreak. You will probably run into a fair number tweaks (such as some that inject into daemons) that do not fully work as intended.

:::

::: danger

If you have previously used Serotonin and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what Bootstrap or Serotonin are, you can ignore this notice and proceed.

:::

nathanlr is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered semi-jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is capable of semi-jailbreaking A12 and later devices on iOS/iPadOS versions 16.5.1 to 16.6.1.

We will first use PlumeImpactor to sideload TrollInstallerX, then use TrollInstallerX to install TrollStore, and then install nathanlr from there.

## Installing TrollStore

::: tip

If you already have TrollStore installed, you can skip this section.

:::

### Requirements

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
TrollInstallerX is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollInstallerX](https://github.com/alfiecg24/TrollInstallerX/releases/latest/download/TrollInstallerX.ipa)

### Installing the application

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the TrollInstallerX `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The TrollInstallerX application can now be opened from home screen.

::: danger

Unless you used jailbreaks.app to install TrollInstallerX, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

### Running TrollInstallerX

1. Open TrollInstallerX
1. Tap `Install TrollStore`
    - If your device is stuck on "Exploiting Kernel", reboot your device
1. When prompted to select an app to install the persistence helper into, select an app you care about **the least**
    - If you don't know what app to select, select `Tips`
    - If your device reboots *before* getting to this step, try again

The persistence helper should now be installed into the app you selected.

### Installing TrollStore

::: warning

If the persistence helper is not installed into the app you selected, shut down your device normally, turn your device back on, open the app you want as your persistence helper, then close the app (**from the app switcher**) and run TrollInstallerX again.

:::

1. Open the app you selected as your persistence helper from your home screen
1. Press `Install TrollStore`.

TrollStore will now be installed to your device.

## Installing nathanlr

### Downloads

- The latest version of [nathanlr](https://nathan4s.lol/nathanlr/nathanlr.tipa)
    - Make sure to download the nathanlr `.tipa` file **onto your iOS device**

### Installing nathanlr

1. Open `TrollStore`
1. Press the `+` on the top right
1. Go to where you saved the nathanlr `.tipa` file
1. Tap on the nathanlr `.tipa` file
1. Tap `Install`

The nathanlr app will now be installed onto your device.

## Running nathanlr

1. Reboot your phone
    - This is not necessary but recommended
1. Open the nathanlr application from your home screen immediately afterwards
1. Tap "Bootstrap", then tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and nathanlr isn't installed, simply try rebooting and running the exploit again until it does work.

:::

You should now be semi-jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating packages

1. Open the Sileo application
1. Tap on the "Packages" tab
1. Tap "Upgrade All"
1. Tap "Confirm"