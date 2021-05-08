---
title: "Troubleshooting"
permalink: /troubleshooting
excerpt: Having trouble with your jailbreak? We've got the solution
sidebar:
  nav: sidebar
---

## <a name="iphonex_dfu" />How to enter DFU on an iPhone or iPad without a Home Button

1. Power on your iPhone/iPad if it's not on already
1. Connect it to your computer with your cable
1. Launch iTunes (or Finder on macOS Catalina and newer) and check that the iPhone/iPad is recognised
1. Press the Volume+ button immediately followed by the Volume- button
1. Press and hold down the Power button until the screen turns black
1. Release the Power button
1. Hold down the Power button, and the Volume- button for 5 seconds immediately after
1. Release the Power button but keep holding down the Volume- button for another 5 seconds

Your device should now be in DFU mode. The screen should be black, and your computer should recognise it as in recovery mode.

## <a name="taurine_odyssey" />Common Errors on Odyssey and Taurine

### ERR_Jailbreak
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

Jailbreaks are hardly ever 100% successful, you may need to re-attempt running the jailbreak multiple times
{: .notice--info}
## <a name="rootfs_u0" />rootFS already mounted

1. Open the Settings application
1. Go to `General` -> `iX Storage`
  - This could be `iPhone Storage`, `iPad Storage` or `iPod Storage`
1. Scroll to the System Update downloaded and tap on it
1. Tap `Delete`
1. Re-run unc0ver

If this doesn't fix it, or there is no update downloaded, you may need to download the OTA update and delete it again. Try the following instructions:

1. Open the unc0ver application
1. Tap on the settings icon in the top right-hand corner
1. Tap `Clean diagnostics data`
  - If unc0ver crashes, open it again
1. Uncheck all the options
1. Enable `Restore RootFS`
1. Press `Done` in the top right-hand corner
1. Go to the jailbreak tab and press `Restore RootFS`
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
1. [Install unc0ver](installing-unc0ver) again like before but don't run it yet
1. Turn on Airplane Mode and run the jailbreak now
  - This may take several attempts, keep trying until it works

If this doesn't work, ask on the r/Jailbreak [Discord Server](https://discord.gg/jb) for support.
{: .notice--info}

## <a name="sileo_errors" /> Fixing package installation errors on Sileo

For the purposes of this troubleshooting section, we are assuming you are running Sileo on Taurine/Odyssey/Odysseyra1n.

In order to determine which error you are encountering, you will have to tap `Show Details` in Sileo when you encounter an error with installing or removing a package.

If the fixes below don't help, feel free to ask on the Sileo [Discord Server](https://discord.gg/Sileo) for support.
### Syntax error: "(" unexpected
This error indicates that the developer of the tweak you are trying to install/remove has written the installation/removal script incorrectly. You will need Filza to fix this issue.

#### Removing the tweak causing this error
1. Open Filza and navigate to `/Library/dpkg/info`
1. Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. `com.miro.shortmoji2.postinst` would be the file to edit if ShortMoji 2 had an install error
1. Tap and hold the file until a menu appears.
1. Tap `Open with`.
1. Tap `Text Editor`.
1. Find the first line of the file that says `#!/bin/sh`.
1. Change `sh` to `bash`.
1. Tap `Save`.
1. Open Sileo.
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

Some developers in the Jailbreak community put a call to the wrong shell in their installation/removal scripts. Until April 2021, most Jailbreaks pointed `/bin/sh` to `/bin/bash` so developers were able to use `#!/bin/sh` to indicate which shell to use even if they use Bash features. In April 2021, Procursus, which runs on Chimera, Odyssey, Taurine, and Odysseyra1n, changed to a different, higher performance shell. This broke these incorrectly formatted scripts.
{:.notice--info}

### Exec format error
This error indicates that the developer of the tweak you are trying to install/remove has omitted a key part of the installation/removal script. You will need Filza to fix this issue.

#### Removing the tweak causing this error
1. Open Filza and navigate to `/Library/dpkg/info`
1. Find the .postinst or .postrm file corresponding to the tweak with an error, e.g. `com.miro.shortmoji2.postinst` would be the file to edit if ShortMoji 2 had an install error
1. Tap and hold the file until a menu appears.
1. Tap `Open with`.
1. Tap `Text Editor`.
1. Add a new line to the start of the file that says `#!/bin/bash`.
1. Tap `Save`
1. Open Sileo
1. Uninstall the tweak.
1. Navigate to the `Sources` tab.
1. Swipe down and refresh your sources.
1. Navigate to the `Search` tab.
1. Type `libioexec1` into the Search field.
1. Install `libioexec1` by Hayden Seay.
1. Try installing the tweak causing an error again.

In May 2021, Procursus attempted to migrate to a version of dpkg that no longer handles this install error, as developers should have included the `#!/bin/sh` or `#!/bin/bash` calls in their scripts. At the time of writing, the lead developer of Procursus has created a patch, `libioexec`, that re-adds this error handling. If you still encounter this error, you may not have updated for a while.
{:.notice--info}

