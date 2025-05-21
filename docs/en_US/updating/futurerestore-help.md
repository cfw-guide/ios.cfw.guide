---
lang: en_US
title: "FutureRestore issues Help"
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

## iMessage not working on A11 devices

You might encounter this issue after downgrading from iOS 16.7.8 or newer to older versions on an A11 device, especially after downgrading to iOS 16.6.x, to fix the issue:

### Prerequisites
1. A modified version of Dopamine, the `.ipa` can be downloaded via [this direct hyperlink](https://cdn.discordapp.com/attachments/1220760232838303794/1353532814477496430/Dopamine.ipa?ex=67e9e82a&is=67e896aa&hm=0d926812737fe305db47d52d07b5f410b12fe9ae81cb6d74a9a2bae3d4ee1632&).
   - Guide for sideloading `.ipa` files via TrollStore can be found [here](https://ios.cfw.guide/installing-trollstore/).
2. The `shared_cache.sh` shell script, the `.sh` can be downloaded via [this direct hyperlink](https://cdn.discordapp.com/attachments/1220760232838303794/1353532814825361479/shared_cache.sh?ex=67e9e82a&is=67e896aa&hm=59c58bd2b7079040b702cac165216a2ad56da05bad3decf83e0a03d48768ef1a&).
3. 3-6 GB free storage space.

### Instructions
1. Jailbreak with the modified `Dopamine.ipa` after the downgrading process. Guide on how to sideload an `.ipa` via TrollStore can be found [here](https://ios.cfw.guide/installing-trollstore/).
2. Open iOS built-in Files app, find your `shared_cache.sh` and move it to the root of **On My iPhone**.
3. Open your preferred package manager, usually **Sileo** or **Zebra**.
4. Tap on the **Sources** tab.
5. Make sure the **BigBoss repo** (http://apt.thebigboss.org/repofiles/cydia/) is added.
6. Tap on the **Search** tab and search for "Filza File Manager" and install the tweak.
7. Go to your homescreen, tap on **Filza** and navigate to
   `/var/mobile/Containers/Shared/AppGroup/group.com.apple.FileProvider.LocalStorage/File Provider Storage/`
9. Find `shared_cache.sh`, tap on it then tap **Continue**.
10. By default, Filza will execute `sh "shared_cache.sh"`, you might see the following
    `shared_cache.sh: 4: setopt: not found`
    `shared_cache.sh: 5: typeset: not found`
    `shared_cache.sh: 13: Syntax error: "(" unexpected`

    - It outputs those errors because `sh "shared_cache.sh"` isn't the correct command, so ignore it.
    - Enter these commands, make sure that you are having an internet connection before executing the third command:
        1. `mv ./shared_cache.sh ~/shared_cache.sh`
        2. `chmod +x ~/shared_cache.sh`
        3. `~/shared_cache.sh`
    
11. Wait until the script finishes, after that, iMessage will be working.

::: warning

You must use the modified `Dopamine.ipa` in the process, otherwise you will fail at step 10.

:::

Credits to [Cryptic](https://github.com/cryptiiiic) for finding a solution to this issue.
