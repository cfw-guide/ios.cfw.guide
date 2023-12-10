---
lang: en_US
title: Using JailbreakMe Star
description: Guide to using JailbreakMe (Star)
permalink: /using-jailbreakme-star
redirect_from:
  - /installing-jailbreakme-star
  - /installing-star
  - /star
  - /jailbreakme-star
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

JailbreakMe Star is capable of jailbreaking every device on iPhone OS 3.1.2 to iOS 4.0.1 except for the iPad 1st Generation on iPhone OS 3.2.2.

JailbreakMe Star is an untethered jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore.

## Running JailbreakMe Star

1. Open Safari on your iOS device
1. Go to the [jailbreakme.com/star/_/](http://jailbreakme.com/star/_/) website
1. Select the PDF that corresponds to your iOS version. You may use [https://appledb.dev/firmware.html](https://appledb.dev/firmware.html) to help you determine which PDF corresponds to your device, as the PDFs are named according to the build ID, not the iOS version.

After a couple of minutes, Cydia should be installed on your home screen.

## Patching Cydia

::: danger

Skip these steps if you are on iOS 4 or higher

:::

1. Open Cydia and select `Developer (No Filters)`
1. Wait for data to reload (May take a very long time, ensure device does not go to sleep)
1. When prompted about essential upgrades, select `Complete Upgrade` (Again, ensure device does not go to sleep)
1. Once done, tap `Close Cydia (Restart)`
1. After Cydia has restarted, wait for it to reload data and **ignore any errors about untrusted server certificates**
1. Go to the sources tab, tap `Edit`, then `Add`
1. Type in `http://cydia.invoxiplaygames.uk/`, and wait until `Close` appears in the top righthand corner
1. Tap on the newly added `IPG's Cydia Repo`, then tap `Tweaks`, then find `Cydia HTTPatch`
1. Tap `Install`, then `Confirm`, then wait until `Close` appears in the top righthand corner
1. Cydia will close, and should now be fully patched.

You can now use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
