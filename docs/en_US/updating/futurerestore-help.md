---
lang: en_US
title: FutureRestore issues Help
description: Provides solutions to some FR issues.
permalink: /futurerestore-help
redirect_from:
  - /frhelp
  - /futurerestorehelp
  - /FutureRestoreHelp
extra_contributors:
  - Tanbeer191
  - TheHacker894
---

## Help page

- This page is intended to provide solutions for errors encountered with FutureRestore. If none work, please join the r/Jailbreak [Discord Server](https://discord.gg/9apvC4C3CC) and ask in #futurerestorehelp

## iBEC error (error code -8)
This is a common error which you may run into while using FutureRestore, especially if you are using a Windows machine.
To fix this:
1. Uninstall all Apple devices in Device Manager
    - Make sure to check "Uninstall Driver" when uninstalling
1. Uninstall all Apple products including iTunes and Apple Device Support programs in the Control Panel
1. Unplug and replug your device
1. Check device manager for any Apple devices and uninstall them and any drivers
1. Disconnect your device
1. Install the iTunes `.exe` file from [apple.com](https://support.apple.com/kb/DL1816?locale=en_US) itself
1. Boot your device into [Recovery Mode](https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/) and plug it into your computer
1. Uninstall the iBoot (Recovery) driver and software from Device Manager
1. Run FutureRestore again
1. Unplug and replug your device.
1. Run FutureRestore again. This issue should now be resolved.

![example](https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png)

## Device ApNonce doesn't match APTicket nonce

This error means that you have not set your generator on your device to that of the blob. In order to solve this problem, follow the `Setting nonce` part of the <router-link to="/futurerestore">FutureRestore page</router-link>

## SEP Firmware is not being signed

This problem occurs when the user tries to manually specify SEP from the *target* version, instead of from the *latest* available version. To fix this problem, either choose the `latest-sep` argument or use the `custom-latest` or `custom-latest-buildid` with the `custom-latest-beta` argument with a compatible version provided based on the [SEP/BB Compatibility Chart](https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0) (you can use [https://appledb.dev](appledb) to find the buildid for a version). You do not need to manually provide SEP or BB.

## Could not connect to device in recovery mode / Failed to place device in recovery mode

**NOTE:** if the error is similarly named, follow these steps too.

- If your device is in recovery mode, run FutureRestore again while your device is in recovery mode.
- If your device is not in recovery mode, enter recovery mode manually, then run FutureRestore again.

## Error: Unable to receive message from FDR...

The fix for this is either waiting (it can take a very long time) or just re-trying the process. 
This is an error that has been diagnosed but no fix for it is available as of the time of writing this.

## About to send NOR data... No data to read

If you get this error message, you may try stopping the futurerestore process and disabling the `no-rsep` argument. If the restore continues to get stuck here regardless if `no-rsep` is enabled or disabled, you may be unable to restore as the cause of this error has not been diagnosed at the time of writing. 
