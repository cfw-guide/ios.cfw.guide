---
lang: en_US
title: Updating to 15.0.2 (Blobless)
description: Guide on updating to 15.0.2 without any blobs.
permalink: /updating-to-15-0-2-(blobless)
redirect_from:
  - /updating-to-15-0-(blobless)

---

## Required Reading

While iOS firmware version 15.0.2 is unsigned, it's still possible to update to it from a lower firmware version and wait for a jailbreak. However, this method will **expire on January 23rd, 2022** (time listed in UTC 00:00).

::: tip

You need a pre-existing jailbreak installed to use this method.

:::

::: danger

After updating, to remove supervision, you'll need to either reset all content and settings in the settings app or wait until a jailbreak becomes available.

:::

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Search and install the `SupervisedEnabler` package
1. Tap `Restart Springboard`
1. Your device should now be supervised
    - You can check by going into the settings app, where a message should be present at the top indicating so. If there isn't, attempt to reinstall `SupervisedEnabler`
1. Once you're back into iOS, navigate to this webpage and click this link to install the [update profile](https://cdn.discordapp.com/attachments/688122358107603013/829323445200355359/90_Day_Delay.mobileconfig)
1. After installing the profile, 15.0.2 should show up in the Settings app as an update
1. Restart your device
1. Open your current jailbreak and restore rootfs
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use.

## Updating to 15.0.2

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
    - Ensure that the version you are updating to is 15.0.2
1. Download and install the update
1. Once updated, remove the 15.0.2 update certificate through Settings

::: tip

If you're having issues with updating, install [OTAEnabler](https://repo.cadoth.net/) and reboot. If you're still having issues continue reading below. If it worked, wait until a jailbreak comes to this iOS firmware version.

:::

## Troubleshooting

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
