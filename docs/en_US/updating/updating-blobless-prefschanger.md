---
lang: en_US
title: Updating (Blobless) (Prefs Changer)
description: Guide on updating to unsigned firmwares without any blobs.
permalink: /updating-blobless-prefschanger
extra_contributors:
  - flowerible
  - dacadla
---

## Required Reading

iOS and iPadOS devices can typically only update to firmware versions which Apple has "signed". This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.

Fortunately, we can use different "profiles" to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.

This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:

- **15.7** (*iPads which got 16.x on 14.4.2 or older only*) - January 22nd, 2023
- **16.0.3** - January 22nd, 2023
- **15.7** (*All other devices*) - January 25th, 2023
- **16.1** - February 7th, 2023
- **16.1.1** (*iPhones only*) - February 28th, 2023
- **15.7.1** - March 13th, 2023
- **16.1.1** (*All other devices*) - March 13th, 2023
- **16.1.2** - March 13th, 2023

Time is given in `UTC 00:00`. For more expiration dates, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

Because you do not currently have a jailbreak (or you choose not to jailbreak for any reason), you'll have to use advanced methods, involving things such as resetting all contents and settings, to be able to update.

::: danger

You need to be on 16.1.2 or lower to follow this guide. if you are not on this version, follow <router-link to="/updating-blobless-advanced">Updating (Blobless) (Advanced)</router-link>.

:::

::: danger

Depending on your target iOS version, you won't be able to do this if you futurerestored after the following dates:

  - 15.7 (*iPads which got 16.x on 14.4.2 or older only*): October 24th, 2022
  - 16.0.3: October 24th, 2022
  - 15.7 (*All other devices*): October 27th, 2022
  - 16.1: November 9th, 2022
  - 16.1.1 (*iPhones only*): November 30th, 2022
  - 15.7.1: December 13th, 2022
  - 16.1.1 (*All other devices*): December 13th, 2022
  - 16.1.2: December 13th, 2022

:::

## Downloads

- The latest version of [Prefs Changer](https://appinstallerios.com/AppCenter/PrefsChanger.ipa)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

### Installing the application

::: danger

If you are using iOS 16, you will need to take extra steps beforehand to open sideloaded apps:

1. Open Settings
1. Go to Privacy & Security and find the `Developer Mode` entry
1. Toggle Developer Mode on, then press `Reboot`
1. After the device reboots, unlock it, and confirm that you want to enable Developer Mode
  - If you have a passcode enabled, you'll need to enter it.

:::

1. Open Sideloadly
2. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
3. Drag and drop the Prefs Changer  `.ipa` file into Sideloadly
4. Enter in your Apple ID
5. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

## Supervising

1. Open Prefs Changer
2. Select `Supervised` in the list if not already selected
3. Tap `Apply Supervised`
    - If it says "Applying" for over 30 seconds close and reopen the app and try these steps again.
4. When it says `Done! to use Supervised open Settings and go to Contacts` open Settings
5. Tap `Contacts` and enable the `Supervised` option
6. Restart your phone

## Updating your firmware version

1. When the device boots up after being erased, set it up, then open this page on your device
1. Tap a version below to install its respective update profile:
    - [15.7](/assets/files/delay_15_7.mobileconfig)
    - [16.0.3](/assets/files/delay_16_0_3.mobileconfig)
    - For more firmware versions, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).
1. Reboot your device
1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version you are intending to update to
1. Download and install the update
1. Once updated, remove the update profile through Settings

::: tip

If the update was successful, continue to [Get Started](/get-started) to jailbreak your device.

:::

## Removing Supervision

1. Open Prefs Changer
2. Select `Supervised` in the list if not already selected
3. Tap `Apply Supervised`
    - If it says "Applying" for over 30 seconds close and reopen the app and try these steps again.
4. When it says `Done! to use Supervised open Settings and go to Contacts` open settings
5. Tap `Contacts` and disable the `Supervised` option
6. Restart your phone

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
