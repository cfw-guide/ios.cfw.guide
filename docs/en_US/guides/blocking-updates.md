---
lang: en_US
title: Blocking Updates
description: How to block updates on your iOS or iPadOS device.
permalink: /blocking-updates
extra_contributors:
  - Tanbeer191
  - Jack LaFond
---

This will take you through either installing a DNS profile or the OTADisabler tweak (depending on iOS version) to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.

## Blocking Updates

The method recommended to block updates depends on your iOS version, select the tab that fits your version and follow the subsequent steps.

<!--technically OTADisabler doesn't work on 5-8 but 5/6 didn't have working tvOS beta profile anyways and 7/8 are not common - eta wen something more competent than OTADisabler-->

::::: tabs

:::: tab name="DNS Profile (iOS/iPadOS 14 and higher)" :default="true"

::: warning

If you use an Apple Watch, the DNS profile will *also* block watchOS updates on any paired Apple Watch.

:::

### Installing the DNS profile

1. Open [https://kittymaxine.com/blockota.mobileconfig](https://kittymaxine.com/blockota.mobileconfig) in your device's browser
1. Select "Allow" if prompted
1. Open the Settings application
1. Navigate to `General` -> `Profile`
    - This may also be called `Profile & Device Management`, `VPN & Device Management`, or `VPN, DNS, & Device Management`
1. Tap on the DNS Profile you just downloaded
1. Tap "Install"
1. Confirm by tapping "Install" again
    - Enter your passcode if you have one
1. Tap "Install" for a third time

Your device should no longer receive software updates. You can confirm this by going to `Settings > General > Software Update`, and if it shows "Unable to Check for Update" even on a good internet connection, you are successfully blocking updates.

### Uninstalling the DNS Profile

If you want to update your system again, follow the following steps to remove the DNS profile.

::: danger

By removing update blocking, you may unintentionally update to a higher firmware, and be unable to jailbreak.

:::

1. Open the Settings application
1. Go to `General` -> `Profile`
    - This may also be called `Profile & Device Management`, `VPN & Device Management`, or `VPN, DNS, & Device Management`
1. Tap on the DNS Profile
1. Tap "Remove Profile"

Your device should now be able to update again.

::::

:::: tab name="OTADisabler (iOS/iPadOS 13 and lower, Jailbroken)"

::: warning

Using the OTADisabler tweak does require your device to be jailbroken beforehand.

:::

::: danger

If you ever update your device using iTunes/Finder, or restore a backup from a device that previously used this tweak (or other non-profile forms of update blocking), you will likely need to restore the device and *not* use a backup in order to update on-device in the future.

:::

### Installing OTADisabler

1. Jailbreak your device if it is not already in a jailbroken state
1. Open your preferred package manager and add the following repository:
    - [https://cydia.ichitaso.com](https://cydia.ichitaso.com)
1. Search and install the `OTADisabler` package

Your device should no longer receive software updates.

<!--TODO: Add uninstallation steps - hopefully something more competent replaces this down the road.-->

::::

:::::
