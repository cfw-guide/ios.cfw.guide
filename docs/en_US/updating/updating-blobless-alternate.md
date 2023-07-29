---
lang: en_US
title: Updating (Blobless) (Alternate Method)
description: Guide on updating to unsigned firmwares without any blobs using Delay profiles.
permalink: /updating-blobless-alternate
extra_contributors:
  - DhinakG
---

## Required Reading

iOS and iPadOS devices can typically only update to firmware versions which Apple has "signed". This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.

Fortunately, we can use different "profiles" to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.

This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:

- **16.4.1** - August 16th, 2023
- **15.7.5** - August 16th, 2023
- **16.5** - September 19th, 2023
- **15.7.6** - September 19th, 2023

Time is given in `UTC 00:00`. For more expiration dates, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

::: tip

You must have a jailbreak to follow these instructions. If you cannot jailbreak, follow <router-link to="/updating-blobless-nonjailbroken">Updating (Blobless) (Non-Jailbroken)</router-link> or <router-link to="/updating-blobless-advanced">Updating (Blobless) (Advanced)</router-link> instead.

:::

::: tip

If you previously attempted an older blobless method, remove all delay and beta profiles prior to following this method.

:::

## Installing Dahlia

1. Launch your current jailbreak
1. Open your preferred package manager and add the following repos:
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.alexia.lol](https://repo.alexia.lol)
1. Search and install the `Dahlia` package
1. Tap `Reboot Device`, and then rejailbreak your device after rebooting

## Preparing to update

1. Open the settings app, scroll down, and tap on `Dahlia`
1. Enable `Toggle Supervision`, then say Yes to Userspace Rebooting
   - If you are already supervised for any reason, you can skip this step
1. Tap `Download Profiles`, then tap "Normal"
1. Tap `Download Profile` next to the iOS version you are wanting to update too.
1. Tap "Allow" when prompted
1. Exit out of the Dahlia menu and go to `General` -> `Profiles & Device Management` -> `OTA Delay - [Days] Days`
1. Tap "Install" in the top right corner and enter your passcode if prompted
1. Tap "Install" again twice to confirm
1. Go back to the `Dahlia` tab in Settings
1. Make sure `Ready to Update` says "Yes"
   - If it doesn't, click the "i" next to the "Ready to Update" tab, and see what the issue is

## Restoring rootFS

1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version you are intending to update to
    - **Do not** update yet, we will do this later
1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Reboot your device

## Updating your firmware version

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version you are intending to update to
1. Download and install the update
1. Once updated, remove the update profile and (if applicable) the beta profile through Settings

::: tip

As a result of supervising earlier, your device will remain supervised. Being in a supervised state means that:

- A message will display in Settings, showing that your device is supervised
- Activation lock will be disabled, potentially making your device accessible by thieves (FindMy will still work however)
- If your device has Mobile Device Management enabled (e.g. a school or work device), then your organisation will be able to silently install and uninstall apps on your device

Note that, for most users, staying in a supervised state won't be an issue.

It is possible to remove the supervised state by resetting your device and restoring a previously made backup. This can be done by selecting "Erase All Content and Settings" in the Settings app, then restoring from a backup during setup from iCloud.

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
