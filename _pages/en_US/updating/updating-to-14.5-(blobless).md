---
title: Updating to 14.5 (Blobless)
permalink: /updating-to-14-5-(blobless)
excerpt: Guide on updating to 14.5 without any blobs.
redirect_from:
  - /updating-to-14-(blobless)
  - /updating-to-14-5
  - /updating-to-14-4-2-(blobless)
  - /updating-to-14-4-(blobless)
  - /updating-to-14-3-(blobless)
  - /and@@starplayer132
---

## Required Reading

While iOS firmware version 14.5 is unsigned, it's still possible to update to it from a lower firmware version and use Odysseyra1n. However, this method will **expire on July 31st, 2021**.

Odysseyra1n only fully supports A8(X), A9, and A10(X) devices on iOS 14.5, with limited support (no security) for A11 devices, for more context, see [Regarding Odysseyra1n on A11](information-regarding-a11).
{: .notice--danger}

You need a pre-existing jailbreak installed to use this method.
{: .notice--primary}

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: `https://cydia.ichitaso.com/`
1. Search and install the `SupervisedEnabler` package
1. Tap `Restart Springboard`
1. Your device should now be in supervision mode
1. Once you're back into iOS, navigate to this webpage and click this link to install the [update profile for the version you want to update to ](https://dhinakg.github.io/delayed-otas.html) 
1. After installing the profile, the update should show up in the Settings app as an update
1. Restart your device
1. Open your current jailbreak and enable restoring rootFS
  - This will remove all tweaks and other jailbreak related data
1. Tap the button to jailbreak your device

## Updating to the verion

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
  - Ensure that the version you are updating to is correct
1. Download and install the update
1. Once updated, remove the update certificate through Settings

## Troubleshooting

If you're having issues with updating, install [OTAEnabler](https://repo.cadoth.net/) and reboot. If you're still having issues continue reading below. If it worked and you're on a compatible device, move on to [installing Odysseyra1n](installing-odysseyra1n).

### "iOS is up to date"

1. Remove any beta profiles installed
1. Install the OTADisabler tweak and then uninstall it
1. Restart your device
  - You can also use ldrestart or a userspace reboot

### "Unable to check for updates"

1. Restore rootFS through your jailbreak
1. Install and open the [unc0ver](installing-unc0ver) application
1. Turn off "Disable updates"
1. Re-jailbreak using unc0ver

### It just freezes

Re-enable the OTA daemon using the iCleaner tweak

---

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
