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

- **15.7.7** - October 22nd, 2023
- **16.5.1** - October 22nd, 2023
- **16.6** - December 6th, 2023
- **15.7.8** - December 10th, 2023
- **16.6.1 (For devices on 14.4.2 or earlier that got 17)** - December 17th, 2023
- **16.6.1 (All other devices)** - December 20th, 2023
- **17.0** - December 20th, 2023
- **17.0.1** - December 25th, 2023
- **17.0.2** - January 2nd, 2024

Time is given in `UTC 00:00`. For more expiration dates, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

Because you do not currently have a jailbreak (or you choose not to jailbreak for any reason), you'll have to use advanced methods, involving things such as resetting all contents and settings, to be able to update.

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

## Windows - iMazing

::: danger

This method requires that you purchase iMazing, if you don't have money to purchase iMazing, you cannot follow this method

:::

1. Download and install iMazing from [here](https://imazing.com/download/windows)
1. After setting up iMazing, click the `Supervision` option
1. Click Next, click the button below `Organization`, then click Choose
1. Click the `+` button at the bottom left corner of the new window
1. Add a name, then click `Save`
1. Click Choose, then click Next
    - If you forgot to backup your data earlier in the guide, this is the last step where you'll be able to do this.
1. Type the number it lists into the text box, then click `Next`, iMazing will erase your device and supervise it

## Updating your firmware version

1. When the device boots up after being erased, set it up, then open this page on your device
1. Tap a version below to install its respective update profile:
    - [15.7.7](/assets/files/delay.mobileconfig)
    - [16.5.1](/assets/files/delay.mobileconfig)
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
