---
lang: en-US
title: Updating (Dallas)
description: Guide on updating using the Dallas tweak
permalink: /updating-dallas
redirect_from:
  - /dallas
  - /updating-(dallas)
extra_contributors:
  - DhinakG
---

## Required Reading

Due to certain issues regarding the normal blobless method, in order to Delay OTA to 15.1, you have to use the Dallas tweak and its profiles to be able to go to iOS 15.1. If you wish, you can also use the Dallas method to go to iOS 14.8.1 as well

::: tip

You must meet the following criteria in order to use Dallas:
  - You must be able to jailbreak your device 
  - You must be able to install packages and profiles onto your device

:::

::: danger

If you are trying to go to 15.1, this method does not work for iPhone 12 or iPhone 13 series devices. (This includes Pro, Max, and Mini versions of those devices).

:::

::: warning

You have until around March 13th, 2022, in UTC 00:00 time, to follow this method for both 14.8.1 and 15.1.

:::

::: warning

If you previously attempted the regular blobless method, remove all delay and beta profiles prior to following this method.

:::

## Preparing

::: tip

If you are supervised from attempting the normal blobless method at an earlier time, feel free to skip this section.

:::

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Search and install the `SupervisedEnabler` package
1. Your device should now be supervised
    - You can check by going into the settings app, where a message should be present at the top indicating so. If there isn't, attempt to reinstall `SupervisedEnabler`


## Installing Dallas

::: tip

As the Dallas tweak redirects update searches to a different server, they will be able to see your IP address. However, it is never actually used for anything malicious.

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
1. Tap "Install" in the top right corner and enter your passcode if prompted
1. Tap "Install" again twice to confirm
1. Reboot your device when prompted

## Restoring rootFS

1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is iOS version you desire to update to
    - **Do not** update yet, we will do this shortly
    - If it says something along the lines of "You are up to date", the server used for Dallas is offline, wait for it to go back online.
1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Reboot your device

## Updating your firmware version

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the iOS version you desire to update to
1. Download and install the update

## Removing Dallas profiles

1. Open the Settings application after updating to version you desired to update to
1. Go to `General` if not already there, then `Profiles and Device Management`
1. Tap on both profiles, and tap `Remove Profile`
    - Enter your passcode if asked

::: tip

After updating and removing Dallas profiles, if you went to iOS 15.1 you have two ways to move forward:
  - Erase All Content and Settings in the settings app, and restore a backup made prior to jailbreaking and prior to supervising
  - Stay supervised, and wait for a jailbreak to become available for iOS 15.1

If you went to iOS 14.8.1, ignore this tip unless you are unable to jailbreak on 14.8.1.

:::

::: tip

If the update was successful, continue to <router-link to="/get-started">Get Started</router-link> to jailbreak your device.

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
