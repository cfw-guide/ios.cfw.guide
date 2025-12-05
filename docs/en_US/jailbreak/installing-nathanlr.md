---
lang: en_US
title: Installing nathanlr
description: Guide to installing nathanlr
permalink: /installing-nathanlr
pkgman: sileo
extra_contributors:
 - Alriceee
 - Nathan
---

::: danger

Before continuing, please **read the following information below in full**.

nathanlr is what is considered a **semi**-jailbreak, and is **not** a full-fledged, proper jailbreak.

*Semi*-jailbreaks - while allowing you to use a decent percentage of tweaks - do not have the same capabilities as a full-fledged jailbreak. You may run into some tweaks (such as some that inject into daemons) that do not fully work as intended.

:::

::: danger

If you have previously used Serotonin and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what Bootstrap or Serotonin are, you can ignore this notice and proceed.

:::

nathanlr is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered semi-jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is capable of semi-jailbreaking A12 and later devices on iOS/iPadOS versions 16.5.1 to 16.6.1, 16.7 RC (20H18), and 17.0.

We will first install TrollStore using one of three methods (depending on your iOS version and computer platform), and then install nathanlr through TrollStore.

## Installing TrollStore

The method that needs to be followed in order to install TrollStore depends on your current firmware version and your platform, select the tab that fits your current firmware version and follow the subsequent steps.

::: tip

If you already have TrollStore installed, you will not need a computer for any of the subsequent steps, and you can skip this section.

:::

::::: tabs

:::: tab name="TrollInstallerX (16.5.1 to 16.6.1)" :default="true"

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

::::

:::: tab name="TrollRestore (16.7 RC (20H18)/17.0, macOS/Windows)"

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

1. Plug your iOS device into your computer.
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

:::: tab name="TrollRestore (16.7 RC (20H18)/17.0, Linux)"

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

1. Plug your iOS device into your computer
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

::::::

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
