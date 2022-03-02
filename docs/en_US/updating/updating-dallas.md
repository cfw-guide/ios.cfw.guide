---
lang: en-US
title: Updating to 15.1 (Dallas)
description: Guide on updating to 15.1 using the Dallas tweak
permalink: /updating-dallas
redirect_from:
  #- /dallas
  #- /updating-(dallas)
extra_contributors:
  - DhinakG
---

## Required Reading

Due to certain issues regarding the normal blobless method, in order to Delay OTA to 15.1, you have to use the Dallas tweak and its profiles to be able to go to iOS 15.1.

::: tip

You must meet the following criteria in order to go to 15.1:
  - You must be able to jailbreak your device 
  - You must be able to install packages and profiles onto your device

:::

::: danger

This method does not work for iPhone 12 or iPhone 13 series devices. (This includes Pro, Max, and Mini versions of those devices).

:::

::: warning

You have until around March 13th, 2022, in UTC 00:00 time, to follow this method.

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
1. Tap `Restart Springboard`
1. Your device should now be supervised
    - You can check by going into the settings app, where a message should be present at the top indicating so. If there isn't, attempt to reinstall `SupervisedEnabler`


## Installing Dallas

::: tip

As the Dallas tweak redirects update searches to a different server, they will be able to see your IP address. However, it is never actually used for anything malicious.

:::

::: warning

To follow these steps, you should have either Zebra or Sileo installed, if you don't have either of the two package managers, follow <router-link to="/installing-sileo">Installing Sileo</router-link>

:::

1. Jailbreak your device if it is not jailbroken already
1. Open this page of the guide on your device, then download Dallas by tapping [here](https://cdn.discordapp.com/attachments/688124493918371870/947358666577838160/com.dhinakg.dallas_0.4.0_iphoneos-arm.deb)
1. Press `Open in [package manager]` after downloading the above tweak
    - Package manager, in this case, is either Sileo or Zebra
    - If you do not see it auto select one of the two package managers, tap `More...` then select either Sileo or Zebra from there
1. Install the `Dallas` package from your package manager
1. Tap `Restart Springboard`
1. Reopen this page of the guide on your device, download the following two profiles:
    - [Dallas Enabler](https://cdn.discordapp.com/attachments/688124493918371870/947359708535205908/Dallas_Enabler.mobileconfig)
    - [Dallas 15.1 Profile](https://cdn.discordapp.com/attachments/688124493918371870/947359708707176468/Dallas_-_14.8.1.mobileconfig)
    - Make sure to completely install the first one, then completely install the second one
    - The second one may show up as 14.8.1, this is due to the Dallas OTA Profile now pointing to 15.1 instead of 14.8.1
1. After installing both profiles, reboot your device

## Restoring rootFS

1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is iOS 15.1
    - **Do not** update yet, we will do this shortly
    - If it says something along the lines of "You are up to date", the server used for Dallas is offline, wait for it to go back online.
1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Reboot your device

## Updating your firmware version

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is iOS 15.1
1. Download and install the update

## Removing Dallas profiles

1. Open the Settings application after updating to 15.1
1. Go to `General` if not already there, then `Profiles and Device Management`
1. Tap on both profiles, and tap `Remove Profile`
    - Enter your passcode if asked

::: tip

After updating and removing Dallas profiles, you have two ways to move forward:
  - Erase All Content and Settings in the settings app, and restore a backup made prior to jailbreaking and prior to supervising
  - Stay supervised, and wait for a jailbreak to become available for iOS 15.1

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
