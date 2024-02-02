---
lang: en_US
title: "Troubleshooting"
description: Fixing common issues on jailbroken devices.
permalink: /troubleshooting
extra_contributors:
  - iCrazeiOS
  - hopolapopola
  - Tanbeer191
  - TheHacker894
  - raizo
  - Superuser
---

## Bootloops and respring loops

### Respring Loops

A respring loop is a symptom of an incompatible tweak(s), causing the device to be stuck in resprings while in a jailbroken state. 

While there is no easy way to diagnose what causes a respring loop, the most likely culprit is your most recently installed/updated tweak being incompatible with your iOS version or another tweak.

#### Semi-(un)tethered jailbreaks

::: tip

A semi-tethered jailbreak is a jailbreak that needs an app on a computer in order to jailbreak after a reboot.

A semi-untethered jailbreak is a jailbreak that needs an app that is installed on the device or website in order to jailbreak after a reboot.

:::

In order to escape the respring loop, [force reboot your device](#How-to-exit-dfu-mode). Once you've booted back up, use your jailbreak of choice and disable tweak injection from the jailbreak settings. Once you've jailbroken, you should be able to access your package manager and remove your most recent tweak or your last tweak setting change that may have caused the respring loop. 

In a worst case scenario, where you cannot diagnose or fix the issue, ask for support in the [r/jailbreak discord server](https://discord.gg/jb) or restore rootFS.

#### Untethered jailbreaks

::: tip

A untethered jailbreak is a jailbreak that persists after a reboot

:::

A respring loop on an untethered jailbreak is very easy to confuse with a bootloop, since even restarting your device will keep you in the respring loop.

In order to escape a potential respring loop, you must [forcefully reboot](#How-to-exit-dfu-mode) your device and hold Volume Up, as the timing varies depending on jailbreaks, your best bet is to hold Volume Up until you've booted into iOS. 

Even after you've attempted to do this multiple times, you may find that you cannot boot into iOS while holding volume up; you may be in a [bootloop](#Bootloops). 

### Bootloops

A bootloop is an unrecoverable error caused by either corrupted system files or a hardware failure. While much rarer in modern iOS versions, it is still possible to bootloop your device through accidental or intentional means. 

A bootloop can be diagnosed by looking for a constant re-occuring Apple logo, even after you've forcefully rebooted your device. 

In order to escape from a bootloop, you must DFU restore your device. 

## How to enter DFU mode

#### For devices with a real home button (iPhone 6s and below):

1. Hold down both the Home button and Lock button.
1. After 8 seconds, release the Lock button while continuing to hold down the Home button.
  
#### For iPhone 7/7+, iPod 7th Gen and 2018 iPads: 

1. Power on your iPhone/iPad if it's not on already
1. Connect it to your computer with your cable
1. Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised
1. Hold down both the Side button and Volume Down button.
1. After 8 seconds, release the Side button while continuing to hold down the Volume Down button.

#### For devices without a home button, iPhone 8/8+, iPad Air 5 and iPad Mini 6:

1. Power on your iPhone/iPad if it's not on already
1. Connect it to your computer with your cable
1. Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised
1. Press the Volume Up button immediately followed by the Volume Down button
1. Press and hold down the Power button until the screen turns black
1. Release the Power button
1. Hold down the Power button and the Volume Down button for immediately after for 5 seconds
1. Release the Power button but keep holding down the Volume Down button for another 5 seconds

## How to exit DFU mode

#### For devices with a real home button (iPhone 6s and below):

Hold the Home button and the Lock button until the device reboots.

#### For iPhone 7/7+, iPod 7th Gen and 2018 iPads:

Hold down the Side button and Volume Down button until the device reboots.

#### For devices without a home button, iPhone 8/8+, iPad Air 5 and iPad Mini 6:

1. Quick-press the Volume Up button 
2. Quick-press the Volume Down button
3. Hold down the Side button until the device reboots.

## Common Errors on Chimera, Odyssey, and Taurine

### ERR_Jailbreak

::: danger

If you are seeing this issue while using taurine-permanent, follow [ERR_Jailbreak when using taurine-permanent](#ERR_Jailbreak-when-using-taurine-permanent) instead.

:::

This is caused by you having used a previous jailbreak. To solve this, you need to restore rootfs:

1. Reboot the device.
1. Open the Odyssey or Taurine app, depending on your iOS version.
1. Toggle the `Restore Rootfs` option
1. Press the Jailbreak button.

Once the restore rootfs successfully completes, try jailbreaking again.

### ERR_Already_Jailbroken and ERR_KernRW (Taurine)/ERR_TFP0 (Odyssey)
`ERR_Already_Jailbroken` indicates that the jailbreak process was interrupted. `ERR_KernRW` and `ERR_TFP0` indicate that the exploit failed. Both can be solved in the same way:

1. Reboot the device.
1. Open the Odyssey or Taurine app, depending on your iOS version.
1. Press the Jailbreak button.

::: tip

Jailbreaks are hardly ever 100% successful, you may need to re-attempt running the jailbreak multiple times

:::

### "Installation Error" upon opening Sileo after initially jailbreaking on Odyssey 1.4.2

Remove the currently installed version of Odyssey, sideload the [latest version of Odyssey](https://theodyssey.dev), and then restore rootfs and then rejailbreak.

### Unable to open NewTerm or Cr4shed (among other things) after a period of time on Taurine

::: tip

If you're on 14.3 and later *or* have an A12 or newer device, you likely either rebooted (which would mean you're no longer in a jailbroken state) or you may have something else causing issues entirely unrelated to the jailbreak.

:::

If you're on 14.0 to 14.2 *and* have A11 or earlier device, this issue is caused by the fact that some tweaks and apps use libaries which have components that may run before the jailbreak is able to stop codesigning. When this happens, affected tweaks and apps cannot be used.

The easiest solution to this issue is to reboot and rejailbreak when this issue happens. Alternatively, if you do not want this issue to happen, you can jailbreak with <router-link to="/installing-odysseyra1n">Odysseyra1n</router-link>, as Taurine and Odysseyra1n are both intercompatible with eachother, and Odysseyra1n is not affected by this issue.

### ERR_Jailbreak when using taurine-permanent

Update to the latest version of taurine-permanent.

### Sileo not appearing upon initially jailbreaking on Chimera 1.6.1 or Taurine 1.1.2

- If you are having this issue on Chimera, get the [latest version of Chimera](https://chimera.coolstar.org/)
- If you are having this issue on Taurine, get the [latest version of Taurine](https://taurine.app/)

## Common Errors on unc0ver

### General issues with unc0ver on iOS 14

::: tip

While these issues are generally the most frequent on iOS 14, some issues could be present even on earlier versions of iOS

:::

While using unc0ver on iOS 14, it is very common to run into the following issues:
  - Apps hanging when trying to launch them
  - Various app store related issues (including the inability to download apps or make in-app purchases)
  - Being unable to receive phone calls while jailbroken
  - Having issues utilizing cellular data (such as being unable to load web pages or other online services)
  - Being unable to save, take, or view screenshots
  - Safari not loading pages, or reloading pages infinitely
  - The share sheet not functioning properly
  - Issues connecting to Carplay.

::: warning

If you are using Fugu14 to have unc0ver be permanently signed, you may experience these issues to a larger extent, as well as some Fugu14 exclusive issues, such as:
  - The inability to view battery statistics
  - More frequent and random kernel panics

:::

To **temporarily** resolve these issues, userspace reboot by typing `launchctl reboot userspace` into a terminal app (e.g. NewTerm) on your device.

### rootFS already mounted

1. Open the Settings application
1. Go to `General` -> `iX Storage`
    - This could be `iPhone Storage`, `iPad Storage` or `iPod Storage`
1. Scroll to the System Update downloaded and tap on it
1. Tap `Delete`
1. Re-run unc0ver

If this doesn't fix it, or there is no update downloaded, you may need to download the OTA update and delete it again. Try the following instructions:

1. Open the unc0ver application
1. Tap on the settings icon in the top right-hand corner
2. Uncheck all the options
3. Enable `Restore RootFS`
4. Press `Done` in the top right-hand corner
5. Go to the jailbreak tab and press `Restore RootFS`
    - If the button says `Jailbreak`, go back and check to see if `Restore RootFS` is the only option enabled
1. When prompted about restoring, tap `OK`
    - This may take some time
    - If it fails, try again from the beginning
1. When finished, tap `OK` again, and your device will restart
1. Open the Settings application
1. Go to `General` -> `Software Update`
1. Download the software update but **do not install it**
1. Go back to `General`
1. Once downloaded, go to `iX Storage` like before
    - This could be `iPhone Storage`, `iPad Storage` or `iPod Storage`
1. Scroll to the System Update downloaded and tap on it
1. Tap `Delete`
1. Scroll to the unc0ver application and tap on it
1. Tap `Delete`
1. [Install unc0ver](/installing-unc0ver) again like before but don't run it yet
1. Turn on Airplane Mode and run the jailbreak now
    - This may take several attempts, keep trying until it works

::: tip

If this doesn't work, ask on the r/Jailbreak [Discord Server](https://discord.gg/jb) for support.

:::

### Not being able to rejailbreak or restore rootfs in unc0ver after using tweaks such as Batchomatic or IAmLazy

Your ability to fix this issue if you end up in this state depends on your iOS version:

- If you are on iOS versions at or below 14.3 (excluding if you're on 11.x or are A12(X) 12.1.3-12.4.1), follow another jailbreak's <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> method that is supported on your device/version combination.
- If you are on iOS versions 14.4 to 14.5.1, attempt to restore rootfs in the Fugu14 app
- If you are either on iOS versions 14.6 to 14.8, or in the group excluded from the first group, your only options are to wait for another jailbreak, wait for an unc0ver update which fixes this issue, or to DFU Restore to the latest iOS version and lose your ability to jailbreak for the forseeable future


## Fixing package installation errors on Sileo

For the purposes of this troubleshooting section, we are assuming you are running Sileo on Taurine/Odyssey/Odysseyra1n.

In order to determine which error you are encountering, you will have to tap `Show Details` in Sileo when you encounter an error with installing or removing a package.

If the fixes below don't help, feel free to ask on the Sileo [Discord Server](https://discord.gg/Sileo) for support.

### Syntax error: "(" unexpected
This error indicates that the developer of the tweak you are trying to install/remove has written the installation/removal script incorrectly. You will need Filza to fix this issue.

#### Removing the tweak causing this error
1. Open Filza and navigate to `/Library/dpkg/info`
1. Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. `com.miro.shortmoji2.postinst` would be the file to edit if ShortMoji 2 had an install error or `com.miro.shortmoji2.postrm` if it had an uninstall error
1. Tap and hold the file until a menu appears
1. Tap `Open with`
1. Tap `Text Editor`
1. Find the first line of the file that says `#!/bin/sh`
1. Change `sh` to `bash`
1. Tap `Save`
1. Open Sileo
1. Uninstall the tweak.
   - For paid tweaks, you will need to file a bug report to the developer if you wish to install the tweak.
   - For free tweaks, you should file a bug report to the developer. If you wish to install the tweak immediately, continue with this guide.

#### Editing the tweak to fix the error (Free tweaks only)
1. Open [Parcility](https://parcility.co) in Safari on your device
1. Search for the tweak you wish to install
   - If it does not appear in the search, you will have to wait for the developer to update their tweak
1. Tap `Download`
1. Once the file has finished downloading, tap on the file in Safari's downloads menu
1. Tap the share button
1. Tap `Save to Filza`
1. Tap `Save`
1. Open Filza, it will open to the folder where you downloaded the tweak file
1. Tap on the tweak you wish to fix
1. Scroll down and tap `Extract`
1. Open the result folder, and navigate to `DEBIAN`
1. Repeat steps 2-8 of `Removing the tweak causing this error` above
1. Navigate back to the folder where you downloaded the tweak
1. Tap and hold on the tweak folder
1. Tap on `Create DEB`
1. Tap and hold on the resulting deb file
1. Tap `Open with`
1. Tap on `Sileo`
1. Tap `Get`

::: tip

Some developers in the Jailbreak community put a call to the wrong shell in their installation/removal scripts. Until April 2021, most Jailbreaks pointed `/bin/sh` to `/bin/bash` so developers were able to use `#!/bin/sh` to indicate which shell to use even if they use Bash features. In April 2021, Procursus, which runs on Chimera, Odyssey, Taurine, and Odysseyra1n, changed to a different, higher performance shell. This broke these incorrectly formatted scripts.

:::

### Exec format error
This error indicates that the developer of the tweak you are trying to install/remove has omitted a key part of the installation/removal script. You will need Filza to fix this issue.

#### Removing the tweak causing this error
1. Open Filza and navigate to `/Library/dpkg/info`
1. Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. `com.miro.shortmoji2.postinst` would be the file to edit if ShortMoji 2 had an install error
1. Tap and hold the file until a menu appears.
1. Tap `Open with`
1. Tap `Text Editor`
1. Add a new line to the start of the file that says `#!/bin/bash`.
1. Tap `Save`
1. Open Sileo
1. Uninstall the tweak.
1. Navigate to the `Sources` tab
1. Swipe down and refresh your sources
1. Navigate to the `Search` tab
1. Type `libiosexec1` into the Search field
1. Install `libiosexec1` by Hayden Seay
1. Try installing the tweak causing an error again

::: tip

In May 2021, Procursus attempted to migrate to a version of dpkg that no longer handles this install error, as developers should have included the `#!/bin/sh` or `#!/bin/bash` calls in their scripts. At the time of writing, the lead developer of Procursus has created a patch, `libiosexec`, that re-adds this error handling. If you still encounter this error, you may not have updated for a while.

:::

### nitoTV issues

The application doesn't launch

1. If nitoTV fails to open upon when clicking on the application, could be the result of the device being in an unjailbroken state. This occurs when the Apple TV reboots or has been shut down and powered back on.
1. Reinitiating the jailbreak it will bring nitoTV back to full functionality. This could be via checkra1n or by launching any of the other jailbreaks tools and clicking `Jailbreak`.

It fails to install/download/search for updates

1. Open nitoTV and navigate to the `Sources` tab at the top bar and highlight the `nitoTV` repository. Click and hold the trackpad button for one second then releasing will prompt to remove the repository. Once deleted, click `Add` and enter the following repositoy URL: [`https://nitosoft.com/checkra1n/`] then click `Okay`. After a few moments, the repository should show on the list. Once done, initiate the app multitasker and swipe up on nitoTV to terminate the app, then relaunch nitoTV from the homescreen.

nitoTV crashes when adding new repositories

1. Open nitoTV and navigate to the `Installed` tab at the top bar and highlight `nitoTV`. Click `Modify` below the app name and select `Downgrade` then choose the selected version that works best. Another possible way to fix this issue is to log in via SSH. This can be done by locating your Apple TV Devices IP address and using the command `ssh root@Apple TV IP Address` then using `alpine` as the password  to log in. After logging in, type in the following command to add the repository of your choice: `scho "deb URL_ADDRESS`

Issues with respringing

1. In some occurances, nitoTV will need to be terminated from the multitasker window. This is done by pressing the TV button twice on the Siri Remote.

Apps won't appear

1. A simple respring can fix these odd situations. Double-check the console log for any errors and feel free to join the discord channel for further guidance.

