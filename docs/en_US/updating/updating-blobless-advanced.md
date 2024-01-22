---
lang: en_US
title: Updating (Blobless) (Advanced)
description: Guide on updating to unsigned firmwares without any blobs.
permalink: /updating-blobless-advanced
extra_contributors:
  - ssalagginkool
---

## Required Reading

iOS and iPadOS devices can typically only update to firmware versions which Apple has "signed". This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.

Fortunately, we can use different "profiles" to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.

This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:

- **17.1** - February 5th, 2024
- **17.1.1** - February 28th, 2024
- **16.7.2** - March 9th, 2024
- **17.1.2** - March 9th, 2024
- **16.7.3** - March 18th, 2024
- **17.2 (For iPhones)** - March 18th, 2024
- **15.8** - April 21st, 2024
- **16.7.4** - April 21st, 2024
- **17.2 (For iPads)** - April 21st, 2024
- **17.2.1** - April 21st, 2024

Time is given in `UTC 00:00`. For more expiration dates, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

Because you do not currently have a jailbreak (or you choose not to jailbreak for any reason), you'll have to use advanced methods, involving things such as resetting all contents and settings or restoring a modified backup, to be able to update.

::: tip

If you're on iOS 15.7.1 or earlier, or are on iOS 16.0 to 16.1.2, you can follow <router-link to="/updating-blobless-nonjailbroken">Updating (Blobless) (Non-Jailbroken)</router-link> instead.

:::

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder

After making a backup, what you need to do after is dependent on if you use macOS or Windows

## macOS - Apple Configurator 2

1. Go to the App Store on your Mac
1. Search for `Apple Configurator 2` and install it
1. Setup Apple Configurator 2
1. Click Get Started
1. Click on your device, and then click Prepare
1. Select `Manual Configuration`
1. Choose `Do not enroll in MDM`
1. Go to `Organization`, and click `New Organization`
1. Either sign in to your Apple ID, or click Skip
    - If you chose to skip signing into your Apple ID, add a name, then click Next
1. Choose `Generate a new supervision identity`
    - If you've done this before in Apple Configurator 2, you can `Choose an existing supervision identity` instead
1. Configure the iOS Setup Assistant as you wish
    - If you forgot to backup your data earlier in the guide, this is the last step where you'll be able to do this.
1. Click `Prepare`, which will erase your device and supervise it

## Windows - Cowabunga Lite

1. Download and install the Windows version of Cowabunga Lite from [here](https://github.com/Avangelista/CowabungaLiteWindows/releases)
1. Extract **the entire Cowabunga Lite folder** to somewhere (doesn't matter), and then open Cowabunga Lite
1. Click `Setup Options` and toggle the checkmark on for `Enable Supervision`
1. Click `Apply`, then click `Apply Changes`

Your device will now reboot and be supervised.

## Updating your firmware version

1. When the device boots up after being erased, set it up, then open this page on your device
1. Tap a version below to install its respective update profile:
    - [15.8](/assets/files/delay.mobileconfig)
    - [16.7.2](/assets/files/delay.mobileconfig)
    - [17.1](/assets/files/delay.mobileconfig)
    - For more firmware versions, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).
1. Reboot your device
1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version you are intending to update to
1. Download and install the update
1. Once updated, remove the update profile through Settings

After updating, you can remove supervision and restore your backup you made earlier by erasing all content and settings.

::: tip

If the update was successful, continue to [Get Started](/get-started) to jailbreak your device.

:::

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
