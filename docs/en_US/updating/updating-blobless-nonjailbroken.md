---
lang: en_US
title: Updating (Blobless) (Non-Jailbroken)
description: Guide on updating to unsigned firmwares without any blobs using Delay profiles.
permalink: /updating-blobless-nonjailbroken
extra_contributors:
  - DhinakG
---

## Required Reading

iOS and iPadOS devices can typically only update to firmware versions which Apple has "signed". This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.

Fortunately, we can use different "profiles" to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.

This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:

- **16.6.1 (For devices on 14.4.2 or earlier that got 17)** - December 17th, 2023
- **16.6.1 (All other devices)** - December 20th, 2023
- **17.0** - December 20th, 2023
- **17.0.1** - December 25th, 2023
- **17.0.2** - January 2nd, 2024

Time is given in `UTC 00:00`. For more expiration dates, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

::: tip

You must be on iOS 15.7.1 and earlier, or iOS 16.0 to 16.1.2. If you are not on those versions, follow <router-link to="/updating-blobless-advanced">Updating (Blobless) (Advanced)</router-link> instead.

:::

::: tip

If you previously attempted an older blobless method, remove all delay and beta profiles prior to following this method.

:::

## Installing Supervise

### Downloads

- The latest version of [Supervise](https://dhinakg.github.io/apps.html)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Supervise `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Supervise application can now be opened from home screen.

## Supervising your device

1. Open the `Supervise` app from your home screen
1. Open the Settings app, then go to the `General` tab
1. Scroll down to the `Toggle Supervision` tab, then go to that tab
1. Enable the `Toggle Supervision` option
1. Restart your device

After your device reboots, you should see a notice in Settings that you are supervised, if you don't, repeat the steps in this section.

## Updating your firmware version

1. Open this page on your device
1. Tap a version below to install its respective update profile:
    - [15.7.8](/assets/files/delay.mobileconfig)
    - [16.6](/assets/files/delay.mobileconfig)
    - For more firmware versions, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).
1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version you are intending to update to
1. Download and install the update
1. Once updated, remove the update profile through Settings

::: tip

As a result of supervising earlier, your device will remain supervised. Being in a supervised state means that:

- A message will display in Settings, showing that your device is supervised
- Activation lock will be disabled, potentially making your device accessible by thieves (FindMy will still work however)
- If your device has Mobile Device Management enabled (e.g. a school or work device), then your organisation will be able to silently install and uninstall apps on your device

Note that, for most users, staying in a supervised state won't be an issue.

If you want to remove supervision, you'll need to reset your device and restore a previously made backup. This can be done by selecting "Erase All Content and Settings" in the Settings app, then restoring from a backup during setup from iCloud.

:::

::: danger

If you restore a backup made in a jailbroken state from **iTunes/Finder**, you may encounter severe issues, such as bootloops.

:::

::: warning

If you restore a backup made in a jailbroken state from **iCloud**, you may encounter false-positive flagging of jailbreak detection. 

:::

::: tip

If the update was successful, continue to <router-link to="/get-started">Get Started</router-link> to jailbreak your device.

:::

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
