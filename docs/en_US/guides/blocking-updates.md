---
lang: en_US
title: Blocking Updates
description: How to block updates on your iOS or iPadOS device.
permalink: /blocking-updates
extra_contributors:
  - Tanbeer191
  - Jack LaFond
  - fullpwn
---

This will take you through installing the iOS 17 "tvOS profile" to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.

## Installing the tvOS profile

1. Set your device's date to any point before December 14th, 2023
    - This is so that the profile can be installed despite an expired certificate, and can be set back to normal after the profile is installed.
    - You may need to disable Screen Time and Share Across Devices to configure your date and time.
1. Open [https://static.itsnebula.net/apple/noota/17.mobileconfig](https://static.itsnebula.net/apple/noota/17.mobileconfig) in your device's browser
1. Select "Allow" if prompted
1. Open the Settings application
1. Navigate to `General` -> `Profile`
    - This may also be called `Profile and Device Management`
1. Tap on the tvOS Beta Profile you just installed
1. Tap "Install"
1. Confirm by tapping "Install" again
    - Enter your passcode if you have one
1. Tap "Install" for a third time
1. Restart your device when prompted

Your device should no longer receive software updates. You can confirm this by going to `Settings > General > Software Update`, and if it shows that "iOS is up to date", you are successfully blocking updates.

::: tip

You can now set your devices date back to the current date.

:::

## Uninstalling the tvOS Profile

If you want to update your system again, follow the following steps to remove update blocking.

::: danger

By removing update blocking, you may unintentionally update to a higher firmware, and be unable to jailbreak.

:::

1. Open the Settings application
1. Go to `General` -> `Profile`
  - This may also be called `Profile and Device Management`
3. Tap on the tvOS Beta Profile
1. Tap "Remove Downloaded Profile"

Your device should now be able to update again.
