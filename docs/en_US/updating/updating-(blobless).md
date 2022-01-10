---
lang: en-US
title: Updating (Blobless)
description: Guide on updating to unsigned firmwares without any blobs.
permalink: /updating-(blobless)
redirect_from:
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
---

## Required Reading

iOS and iPadOS devices can typically only update to firmware versions which Apple has "signed". This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.

Fortunately, we can use different "profiles" to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.

This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:

- **14.8** -  24th January 2022
- **15.0.2** -  23th January 2022

Time is given in `UTC 00:00`. For more expiration dates, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

::: tip

You must have a jailbreak to follow these instructions. If you cannot jailbreak, follow <router-link to="/updating-(blobless-advanced)">Updating (Blobless) (Advanced)</router-link> instead.

:::

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Search and install the `SupervisedEnabler` package
1. Tap `Restart Springboard`
1. Your device should now be supervised
    - You can check by going into the settings app, where a message should be present at the top indicating so. If there isn't, attempt to reinstall `SupervisedEnabler`
1. Once you're back into your device, navigate to this webpage
1. Tap a version below to install its respective update profile:
    - [14.8](/assets/files/delay_14_8_alternate.mobileconfig)
    - [15.0.2](/assets/files/delay_15_0_2.mobileconfig)

For more firmware versions, view [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

## Editing the profile

::: tip

If you are currently on 14.5 or higher, you are updating to 15.0.2, **or** using another non-"alternative" profile, you can skip this section.

:::

1. Tap the following link and install the [Beta Profile](https://cydia.ichitaso.com/no-ota15.mobileconfig)
1. When prompted, restart your device
1. Re-apply your jailbreak
1. Open your <router-link to="/package-managers">package manager</router-link> and install the [Filza](https://moreinfo.thebigboss.org/moreinfo/depiction.php?file=filzafilemanagerDp) file manager
1. Open the Filza app and navigate to `/Library/Managed Preferences/mobile`
1. Open the `com.apple.MobileAsset.plist` file
1. Set `MobileAssetAssetAudience` to `c724cb61-e974-42d3-a911-ffd4dce11eda`
1. Reboot your device
    - Alternatively, run `launchctl reboot userspace` in a terminal to run a userspace reboot

## Restoring rootFS

1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version displayed is either 14.8 or 15.0.2
    - **Do not** update yet, we will do this later
    - If you are installing a different firmware version, make sure that the version matches the intended version instead
1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Reboot your device

## Updating your firmware version

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
1. Ensure that the version you are updating to is either 14.8 or 15.0.2
    - If you are installing a different firmware version, make sure that the version matches the intended version instead
1. Download and install the update
1. Once updated, remove the update profile and (if applicable) the beta profile through Settings

If you're having issues with updating, install [OTAEnabler](https://repo.cadoth.net/) and reboot. If you're still having issues continue reading below. 

::: tip

To remove supervision after updating, either jailbreak and then reinstall then uninstall SupervisedEnabler, or erase all content and settings and restore a backup made prior to becoming supervised.

:::

::: tip

If the update was successful, continue to <router-link to="/get-started">Get Started</router-link> to jailbreak your device.

:::

## Troubleshooting

::: tip

If you needed to use OTAEnabler, and you needed to modify the Beta Profile in previous steps, you'll need to repeat that section after using OTAEnabler.

:::

### "iOS is up to date"

1. Remove any beta profiles installed
1. Install the OTADisabler tweak and then uninstall it
1. Restart your device
    - You can also use ldrestart or a userspace reboot

### "Unable to check for updates"

1. Restore rootFS through your jailbreak
1. Install and open the <router-link to="/installing-unc0ver">unc0ver</router-link> application
1. Turn off "Disable updates"
1. Re-jailbreak using unc0ver

### It just freezes

Re-enable the OTA daemon using the iCleaner tweak

---

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
