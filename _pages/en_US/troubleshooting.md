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
