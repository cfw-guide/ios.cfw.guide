---
lang: en_US
title: Installing Dopamine (TrollStore)
description: Guide to installing Dopamine using TrollStore
permalink: /installing-dopamine-trollstore
pkgman: sileo
redirect_from:
  - /installing-fugu15max
extra_contributors:
  - opa334
  - iCraze
  - Alriceee
---

Dopamine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Dopamine supports all devices on iOS/iPadOS 15.0 to 17.3.1, and A13 and earlier devices on iOS/iPadOS 17.4 to 18.7.1 and 26.0 to 26.0.1.

::: danger

This guide only works on devices running iOS/iPadOS 15.0 to 16.6.1, as well as iOS/iPadOS 16.7 RC (20H18) and 17.0. If you are on iOS/iPadOS 16.7 through 16.7.16, 17.0.1 through 18.7.1, or 26.0 through 26.0.1, you should follow <router-link to="/installing-dopamine">Installing Dopamine</router-link> instead.

:::

::: danger

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

:::

::: danger

If you have previously used nathanlr, Relaxin, Serotonin, and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what any of those tools are, you can ignore this notice and proceed. If you used nathanlr specifically, you can remove it by following <router-link to="/removing-nathanlr">Removing nathanlr</router-link>.

:::

We will first install TrollStore using one of three methods (depending on your current device and iOS/iPadOS version), and then install Dopamine through TrollStore.

## Installing TrollStore

The method that needs to be followed in order to install TrollStore depends on both your device and your current firmware version, select the tab that fits your current firmware version and device and follow the subsequent steps.

::: tip

If you already have TrollStore installed, you will not need a computer for any of the subsequent steps, and you can skip this section.

:::

::::: tabs

:::: tab name="TrollRestore (15.8.7 to 15.8.8 / 16.7 RC (20H18) / 17.0 / A8(X) 15.7.2 to 15.8.6, macOS/Windows)" :default="true"

::: tip

This section requires a computer.

:::

### Requirements

- The latest version of [python3](https://www.python.org/downloads)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollRestore](https://github.com/JJTech0130/TrollRestore/releases) for your platform.
    - For Windows, this will be `TrollRestore.exe`
    - For Apple Silicon Macs, this will be `TrollRestore_macOS_arm64.zip`
    - For Intel-based Macs, this will be `TrollRestore_macOS_amd64.zip`

::: warning

Before continuing, if you're using *macOS*, extract the contents of the downloaded TrollRestore `.zip` file.

:::

::: warning

As this method of installing TrollStore involves restoring a modified backup, you'll need to disable Find My before continuing with this guide.

After this guide is complete, you are free to re-enable Find My.

:::

::: warning

The build of TrollRestore for *Intel-based Macs* is not notarized, which means you'll either need to Double Click while holding Control (if on macOS Sonoma or earlier) or by attempting to open it normally, and then opening `System Settings` -> `Privacy & Security` and scrolling down until you see `Open Anyway`.

:::

### Injecting TrollStore Helper

1. Plug your iOS/iPadOS device into your computer.
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open a File Explorer (Windows) or Finder (macOS) window.
1. Navigate to where the downloaded/extracted file is saved.
    - This will likely be the `Downloads` folder.
1. Double Click `TrollRestore`.
1. When prompted, type in the name of a system app you want to overwrite, and press enter.
    - If you are unsure as to what app you want to overwrite, overwrite the Tips app by entering `Tips`

::: tip

Until the device reboots, there is no visual indication *on the device itself* that anything is being done.

:::

The TrollStore Helper should now be restored to your device, and your device will reboot once this process is complete.

### Installing TrollStore

1. Unlock your device.
1. Open the app you originally put in.
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

::::

:::: tab name="TrollRestore (15.8.7 to 15.8.8 / 16.7 RC (20H18) / 17.0 / A8(X) 15.7.2 to 15.8.6, Linux)"

::: tip

This section requires a computer.

:::

### Requirements

- The latest version of [python3](https://www.python.org/downloads)
- The latest version of [TrollRestore](https://github.com/JJTech0130/TrollRestore/releases) for Linux.
    - This will be `TrollRestore_Linux.zip`

::: warning

Before continuing, extract the contents of the downloaded TrollRestore `.zip` file.

:::

::: warning

As this method of installing TrollStore involves restoring a modified backup, you'll need to disable Find My before continuing with this guide.

After this guide is complete, you are free to re-enable Find My.

:::

::: tip

While this tab (and the associated zip file) are for Linux platforms, all other platforms can follow this tab and use the Linux `.zip` file as an alternative to the normal executable files.

:::

### Installing Dependencies

1. Open a terminal application
1. Run `cd <path/to/TrollRestore>`
    - In most cases, this will likely mean running `cd ~/Downloads/TrollRestore_Linux`
1. Run `pip3 install -r requirements.txt` and follow the on screen prompts

All dependencies needed for TrollRestore should now be installed.

### Injecting TrollStore Helper

1. Plug your iOS/iPadOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. *In the same terminal window as the previous section*, run `python3 trollstore.py`
1. When prompted, type in the name of a system app you want to overwrite, and press enter.
    - If you are unsure as to what app you want to overwrite, overwrite the Tips app by entering `Tips`

::: tip

Until the device reboots, there is no visual indication *on the device itself* that anything is being done.

:::

The TrollStore Helper should now be restored to your device, and your device will reboot once this process is complete.

### Installing TrollStore

1. Unlock your device.
1. Open the app you originally put in.
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

::::

:::: tab name="TrollInstallerX (16.0 to 16.6.1 / A9(X) and later 15.7 to 15.8.6 / A9(X) to A11 15.5 to 15.6.1)"

::: tip

Unless jailbreaks.app is signed, this section requires a computer.

:::

### Requirements

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
TrollInstallerX is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollInstallerX](https://github.com/alfiecg24/TrollInstallerX/releases/latest/download/TrollInstallerX.ipa)
    - If you are using a Yellow iPhone 14 or Yellow iPhone 14 Plus on 16.3 (**20D50**), you will need the [TrollInstallerX-20D50](https://github.com/alfiecg24/TrollInstallerX/releases/latest/download/TrollInstallerX-20D50.ipa) version instead.

### Installing the application

1. Plug your iOS/iPadOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the TrollInstallerX `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS/iPadOS device.

::: tip

Once TrollInstallerX is successfully installed, a computer is no longer required for the remainder of this guide.

:::

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The TrollInstallerX application can now be opened from home screen.

::: danger

If you're on iOS/iPadOS 16.0 or later, and did not use jailbreaks.app to install TrollInstallerX, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

### Running TrollInstallerX

1. Open TrollInstallerX
1. Tap `Install TrollStore`
    - If your device is stuck on "Exploiting Kernel", reboot your device
1. When prompted to select an app to install the persistence helper into, select an app you care about **the least**
    - If you don't know what app to select, select `Tips`
    - If your device reboots *before* getting to this step, try again

The persistence helper, and in most cases, TrollStore itself, should now be installed.

::: danger

On iOS/iPadOS 16.5.1 for A15, A16, and M2 devices, as well as iOS/iPadOS 16.6 to 16.6.1 for A12 and later devices, you'll need to install TrollStore through the installed persistence helper after using TrollInstallerX, this is covered in the following additional section below.

All other devices **do not** need to follow the next additional section.

:::

### Additional Steps (A12 and later 16.6 to 16.6.1 / A15-A16/M2 16.5.1)

::: warning

If the persistence helper is not installed into the app you selected, shut down your device normally, turn your device back on, open the app you want as your persistence helper, then close the app (**from the app switcher**) and run TrollInstallerX again.

:::

1. Open the app you selected as your persistence helper from your home screen
1. Press `Install TrollStore`.

TrollStore will now be installed to your device.

::::

:::: tab name="TrollHelperOTA (15.0 to 15.4.1 / A12 and later 15.5 to 15.6.1)"

::: tip

A computer is not required for any steps on this guide.

:::

::: warning

A11 and earlier devices are supported on iOS/iPadOS 15.0 to 15.4.1

A12 and later devices are supported on iOS/iPadOS 15.0 to 15.6.1

:::

### Installing TrollHelper

1. Open Safari
1. Open this page on your device
    - The url of this page is `https://ios.cfw.guide/installing-dopamine`
1. On your device, [tap here](itms-services://?action=download-manifest&url=https://jailbreaks.app/cdn/plists/TrollHelper.plist):
    - If you're unable to access this page, type `itms-services://?action=download-manifest&url=https://jailbreaks.app/cdn/plists/TrollHelper.plist` into Safari
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS/iPadOS device, this app is TrollHelper, however.

### Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Register Persistence Helper`
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS/iPadOS device.

::::

:::: tab name="TrollInstallerMDC (A8(X) 15.5 to 15.7.1)"

::: tip

This section requires a computer.

:::

### Requirements

- The Tips app installed to your device
- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

### Installing the application

1. Plug your iOS/iPadOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the TrollInstallerMDC `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS/iPadOS device.

::: tip

Once TrollInstallerMDC is successfully installed, a computer is no longer required for the remainder of this guide.

:::

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The TrollInstallerMDC application can now be opened from home screen.

### Injecting TrollStore Helper

::: warning

If you've already opened Tips, reboot your device before following these steps

:::

1. Open TrollInstallerMDC
1. Once it says "Successfully replaced Tips binary", close the `TrollInstallerMDC` app
    - If it gives an error, close TrollInstallerMDC and re-open it 

### Installing TrollStore

1. Open the `Tips` app
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

::::

:::::

## Installing Dopamine

### Downloads

- The latest version of [Dopamine](https://ellekit.space/dopamine)
    - Make sure to download the `.ipa` file onto your iOS/iPadOS device

### Installing Dopamine

1. Open `TrollStore`
1. Press the `+` on the top right
1. Go to where you saved the Dopamine `.ipa` file
1. Tap on the Dopamine `.ipa` file
1. Tap `Install`

The Dopamine app will now be installed onto your device.

### Running Dopamine

::: tip

If you are using an A12(X/Z) or A13 device on iOS/iPadOS 16.6 or later, the screen will briefly turn off and on during the jailbreak process. This is perfectly normal, and is a result of one of the exploits in the jailbreak process requiring this.

:::

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Dopamine application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: warning

On certain devices with 2GB of RAM running iOS/iPadOS 15.8.7 to 15.8.8 or iOS/iPadOS 16.7 or later, the Dopamine app may need to respring the device before you can attempt to jailbreak. The Dopamine app will notify you if this is the case.

If your device needs this additional step, tap `Apply Workaround`, and then redo steps 2 and 3 of this section after the respring is complete.

:::

::: warning

If your device has a replacement screen, there is a chance (*especially if the screen is of low quality*) that the touchscreen **will not work** after userspace rebooting into a jailbroken state. This is **not** a Dopamine issue, and can only be fixed by getting a better screen replacement.

:::

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

Sileo should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

While you are now jailbroken at this point, we need to both update and install some packages so that we're able to both update other packages and have stuff work properly.

## Installing necessary software

1. Open the Sileo app
1. Tap on the "Sources" tab
1. Tap on the "ElleKit" repository, then tap on "All Categories"
1. Tap on `ElleKit`
1. Tap "Get"
1. Go to the "Search" tab
1. Search for `PreferenceLoader`
1. Tap on `PreferenceLoader`
1. Tap on "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Reboot Device`

::: tip

The `Reboot Device` button in this case does not fully reboot your device. As a result, you will still be in a jailbroken state after pressing this button.

:::
