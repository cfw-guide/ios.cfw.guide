---
lang: en-US
title: Updating to 14.8 (Dallas)
description: Guide on updating to unsigned firmwares without any blobs.
permalink: /updating-to-14-8-(dallas)
redirect_from:
  - /dallas
  - /updating-(dallas)
extra_contributors:
  - DhinakG
---

## Required Reading

Devices on 13.7 or lower sometimes have issues with the Beta Profile + Delay Profile way of updating to 14.8 (in that 14.8 doesn't show up). Using a tweak known as Dallas, however, this issue can be avoided.

::: warning

We don't recommend following this unless both of the following is true:

- You have tried the method at <router-link to="/updating-(blobless)">Updating (Blobless)</router-link> and are unable to get iOS 14.8 to show up.
- Your device has a jailbreak on 14.8 - which can be confirmed at the <router-link to="/get-started">Get Started</router-link> page.

:::

You have until **January 24th, 2022** (in UTC 00:00) to do this to go to 14.8.

::: tip

You must be jailbroken to follow these instructions.

:::

::: tip

Assuming you previously attempted the regular blobless method for 14.8, remove all delay and beta profiles prior to following this method.

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

1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
1. Search and install the `Dallas` package
1. Tap `Restart Springboard`

## Restoring rootFS

1. Reboot your device
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is iOS 14.8
    - **Do not** update yet, we will do this shortly
    - If it says something along the lines of "You are up to date", the server used for Dallas is offline, wait for it to go back online.
1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Reboot your device

## Updating your firmware version

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is the version you are intending to update to
1. Download and install the update

::: tip

After updating, once you jailbreak again, install [OTAEnabler](https://repo.cadoth.net/), then install and then uninstall SupervisedEnabler.

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
