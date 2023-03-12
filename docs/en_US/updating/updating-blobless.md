---
lang: en_US
title: Updating (Blobless)
description: Guide on updating to unsigned firmwares without any blobs using Dallas profiles.
permalink: /updating-blobless
redirect_from:
  - /dallas
  - /updating-(dallas)
  - /updating-Dallas
  - /updating-to-12-5-5-(blobless)
  - /updating-to-14-3-(blobless)
  - /updating-to-14-4-(blobless)
  - /updating-to-14-4-1-(blobless)
  - /updating-to-14-4-2-(blobless)
  - /updating-to-14-5-(blobless)
  - /updating-to-14-6-(blobless)
  - /updating-to-14-7-(blobless)
  - /updating-to-14-7-1-(blobless)
  - /updating-to-14-8-(blobless)
  - /updating-to-14-8-(blobless-alternate)
  - /updating-to-15-0-2-(blobless)
  - /updating-alternate-edit
  - /updating-to-14-8-(dallas)
  - /updating-(blobless)
extra_contributors:
  - DhinakG
---

## Required Reading

::: tip

If you previously attempted an older blobless method, remove all delay and beta profiles prior to following this method.

:::

::: tip

You must have a jailbreak to follow these instructions. If you cannot jailbreak, follow <router-link to="/updating-blobless-nonjailbroken">Updating (Blobless) (Non-Jailbroken)</router-link> or <router-link to="/updating-blobless-advanced">Updating (Blobless) (Advanced)</router-link> instead.

:::

## Requirements

- A device you are able to jailbreak and install packages to
    - Check <router-link to="/get-started">Get Started</router-link> if you are unsure
- A backup of your device through iCloud

## Instructions

### Installing Dahlia

::: tip

The Dahlia tweak, when using Dallas profiles, redirects update searches to a different server. As such, the owners of the server will be able to view your IP address. This is normal, however if you are uncomfortable with this, follow <router-link to="/updating-blobless-alternate">Updating (Blobless) (Alternate Method)</router-link> instead.

:::

1. Launch your current jailbreak
1. Open your preferred package manager and add the following repos:
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.cadoth.net](https://repo.cadoth.net)
1. Search and install the `Dahlia` package
1. Tap `Reboot Device`, and then rejailbreak your device after rebooting

### Preparing to Update

1. Open the settings app, scroll down, and tap on `Dahlia`
1. Tap `Download Profiles`, then tap "Dallas"
1. Tap on "Dallas Enabler" to download the profile
1. Tap "Allow" when prompted
1. Exit out of the Dahlia menu and go to `General` -> `Profiles & Device Management` -> `Dallas Enabler`
1. Tap "Install" in the top right corner and enter your passcode if prompted
1. Tap "Install" again twice to confirm
1. Go back to the `Dahlia` tab in Settings
1. Re-tap on `Download Profiles` and then re-tap "Dallas"
1. Under "Version Profiles", tap the version that you want to update to
1. Tap "Allow" when prompted
1. Open the Settings app
1. Exit out of the Dahlia menu and go to `General` -> `Profiles & Device Management` -> `Dallas - [Version]`
   - If you see an error, make sure you're both jailbroken and that you installed Dallas Enabler earlier
1. Tap "Install" in the top right corner and enter your passcode if prompted
1. Tap "Install" again twice to confirm
1. Reboot your device when prompted, then rejailbreak
1. Reopen the Settings app and go back to the Dahlia tab
1. Toggle `Enable Supervision-less Mode.`
   - You can also choose to enable `Toggle Supervision` instead, but the only way to remove supervision after updating is to either wait for a jailbreak or resetting your device
1. Make sure `Ready to Update` says "Yes"
   - If it doesn't, click the "i" next to the "Ready to Update" tab, and see what the issue is

### Restoring rootFS

1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is iOS version you desire to update to
    - **Do not** update yet, we will do this shortly
    - Ensure that the version displayed is the version that you want to update to
    - If it says that your device is up to date, the server used for Dallas is offline; wait for it to go back online
1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Reboot your device

### Updating your firmware version

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version that you want to update to
1. Download and install the update

### Removing Dallas profiles

1. Open the Settings application after updating to version you desired to update to
1. Go to `General` if not already there, then `Profiles and Device Management`
1. Tap on both profiles, and tap `Remove Profile`
    - Enter your passcode if asked

::: tip

If you chose to enable supervision earlier, your device will remain supervised. Being in a supervised state means that:

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

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
