---
lang: en-US
title: Updating (Dallas)
description: Guide on updating using the Dallas tweak
permalink: /updating-dallas
redirect_from:
  #- /dallas
  #- /updating-(dallas)
extra_contributors:
  - DhinakG
---

## Required Reading

::: warning

This method is now dead, and this page is being kept for when Dallas receives an update to allow for non-14.8 usage

:::

You have a limited amount of time to do this to go to 14.8.

::: tip

You must be jailbroken to follow these instructions.

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
1. Ensure that the version displayed is iOS 14.8
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
