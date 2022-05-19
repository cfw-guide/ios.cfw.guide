---
lang: en-US
title: Updating (Dallas)
description: Guide on updating using the Dallas tweak
permalink: /updating-dallas
redirect_from:
  - /dallas
  - /updating-(dallas)
  - /updating-Dallas
extra_contributors:
  - DhinakG
---

## Required Reading

::: tip

If you previously attempted the regular blobless method, remove all delay and beta profiles prior to following this method.

:::

::: warning

This page now only exists as a placeholder until newer iOS versions are implemented

:::

## Requirements

- A device you are able to jailbreak and install packages to
    - Check <router-link to="/get-started">Get Started</router-link> if you are unsure
- A backup of your device through iCloud

## Instructions

### Supervising your device

::: tip

If you are supervised from attempting the normal blobless method at an earlier time, feel free to skip this section.

:::

1. Launch your current jailbreak and jailbreak your device
1. Open your preferred package manager and add the following repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Search and install the `SupervisedEnabler` package
1. Your device should now be supervised
    - You can check by going into the settings app, where a message should be present at the top indicating so. If there isn't, attempt to reinstall `SupervisedEnabler`


### Installing Dallas

::: tip

The Dallas tweak redirects update searches to a different server. As such, the owners of the server will be able to view your IP address. This is normal, however if you are uncomfortable with this, do not proceed.

:::

1. Launch your current jailbreak
1. Open your preferred package manager and add the following repos:
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.cadoth.net](https://repo.cadoth.net)
1. Search and install the `Dallas` package
1. Tap `Reboot Device`
1. Go to [https://dhinakg.github.io/dallas](https://dhinakg.github.io/dallas) on your device
1. Tap on "Dallas Enabler" to download the profile
1. Tap "Allow" when prompted
1. Open the Settings app
1. Go to `General` -> `Profiles & Device Management` -> `Dallas Enabler`
1. Tap "Install" in the top right corner and enter your passcode if prompted
1. Tap "Install" again twice to confirm
1. Go back to your web browser
1. Under "Version Profiles", tap the version that you want to update to
1. Tap "Allow" when prompted
1. Open the Settings app
1. Go to `General` -> `Profiles & Device Management` -> `Dallas - [VERSION]`
    - If you receive an error, make sure that you are currently jailbroken
1. Tap "Install" in the top right corner and enter your passcode if prompted
1. Tap "Install" again twice to confirm
1. Reboot your device when prompted

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

## Removing supervision

After updating and removing Dallas profiles, your device will remain supervised. Being in a supervised state means that:

- A message will display in Settings, showing that your device is supervised
- Activation lock will be disabled, potentially making your device accessible by thieves (FindMy will still work however)
- If your device has Mobile Device Management enabled (e.g. a school or work device), then your organisation will be able to silently install and uninstall apps on your device

Note that, for most users, staying in a supervised state won't be an issue.

It is possible to remove the supervised state by resetting your device and restoring a previously made backup. This can be done by selecting "Erase All Content and Settings" in the Settings app, then restoring from a backup during setup from iCloud.

::: danger

If you restore a backup made in a jailbroken state from **iTunes/Finder**, you may encounter severe issues, such as bootloops.

:::

::: warning

If you restore a backup made in a jailbroken state from **iCloud**, you may encounter false-positive flagging of jailbreak detection. 

:::

## Troubleshooting

::: tip

If you need to use OTAEnabler for any reason, you'll need to remove it and then redo everything starting from `Installing Dallas`.

:::

### "Unable to check for updates"

Try using [OTAEnabler](https://repo.cadoth.net/), if that doesn't work, follow the steps below:

1. Restore rootFS through your jailbreak
1. Install and open the <router-link to="/installing-unc0ver">unc0ver</router-link> application
1. Turn off "Disable updates"
1. Re-jailbreak using unc0ver

### It just freezes

Re-enable the OTA daemon using the iCleaner tweak

---

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
