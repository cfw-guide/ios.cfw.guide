---
lang: en_US
title: Installing Dopamine (TrollRestore)
description: Guide to installing Dopamine by installing TrollStore via TrollRestore
permalink: /installing-dopamine-trollrestore
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
  - Alriceee
---

Dopamine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Dopamine supports all devices on iOS 15.0 to 16.5, A14 and earlier devices and M1 devices on iOS 16.5.1, and A11 and earlier devices on iOS 16.6 to 16.6.1. However, this guide only works on iOS 15.2 to 16.6.1

::: danger

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

:::

::: danger

This guide should only be followed if you have an A8(X) iPad on 15.7.2 to 15.8.3 *or* you have run into issues with the normal guide.

If you do not fit either of these groups, you should follow <router-link to="/installing-dopamine">Installing Dopamine</router-link> instead.

:::

We will first install TrollStore using TrollRestore, and then install Dopamine through TrollStore.

## Installing TrollStore

::: warning

A computer is required for all steps in this section.

:::

### Downloads

- The latest version of [python3](https://www.python.org/downloads)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollRestore](https://github.com/JJTech0130/TrollRestore/releases) for your platform.
    - For Windows, this will be `TrollRestore.exe`
    - For Apple Silicon Macs, this will be `TrollRestore_macOS_arm64.zip`
    - For Intel-based Macs, this will be `TrollRestore_macOS_amd64.zip`
    - For Linux, this will be `TrollRestore_Linux.zip`

::: warning

Before continuing, if you're using *macOS* or *Linux*, extract the contents of the downloaded TrollRestore `.zip` file.

:::

::: warning

As this method of installing TrollStore involves restoring a modified backup, you'll need to disable Find My before continuing with this guide.

After this guide is complete, you are free to re-enable Find My.

:::

### Running TrollRestore

Please select your operating system:

:::::: tabs

:::: tab name="macOS/Windows" :default="true"

::: warning

The build of TrollRestore for *Intel-based Macs* is not notarized, which means you'll either need to Double Click while holding Control (if on macOS Sonoma or earlier) or by attempting to open it normally, and then opening `System Settings` -> `Privacy & Security` and scrolling down until you see `Open Anyway`.

Alternatively, if you're running into issues doing this, you can follow the `Linux` tab instead, as those steps work on all platforms (but are slightly more involved than the normal steps listed in this tab).

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

::: tip

Once the device reboots, a computer is no longer needed for this guide.

:::

The TrollStore Helper should now be restored to your device, and your device will reboot once this process is complete.

::::

:::: tab name="Linux"

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

::: tip

Once the device reboots, a computer is no longer needed for this guide.

:::

The TrollStore Helper should now be restored to your device, and your device will reboot once this process is complete.

::::

::::::

### Installing TrollStore

1. Unlock your device.
1. Open the app you originally put in.
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

## Installing Dopamine

### Downloads

- The latest version of [Dopamine](https://ellekit.space/dopamine)
    - A12 and later devices on iOS 15 are recommended to download the 2.1.7 version of [Dopamine](https://github.com/opa334/Dopamine/releases/download/2.1.7/Dopamine.ipa) instead
    - Make sure to download the `.ipa` file onto your iOS device

### Installing Dopamine

1. Open `TrollStore`
1. Press the `+` on the top right
1. Go to where you saved the Dopamine `.ipa` file
1. Tap on the Dopamine `.ipa` file
1. Tap `Install`

The Dopamine app will now be installed onto your device.

### Running Dopamine

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Dopamine application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If your device has a replacement screen, there is a chance (*especially if the screen is of low quality*) that the touchscreen **will not work** after userspace rebooting into a jailbroken state. This is **not** a Dopamine issue, and can only be fixed by getting a better screen replacement.

:::

Sileo should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

While you are now jailbroken at this point, we need to both update and install some packages so that we're able to both update other packages and have stuff work properly

## Installing necessary software

1. Open the Sileo app
1. Tap on the "Sources" tab
1. Tap on the "ElleKit" repository, then tap on "All Categories"
1. Tap on `ElleKit`
1. Tap "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Restart SpringBoard Later`
1. Go to the "Search" tab
1. Search for `PreferenceLoader`
1. Tap on `PreferenceLoader`
1. Tap on "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Restart SpringBoard`

::: tip

After doing all the above steps, you may need to reboot and rejailbreak in order for tweak injection to function properly.

:::
