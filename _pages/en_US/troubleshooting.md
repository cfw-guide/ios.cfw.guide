---
title: "Troubleshooting"
permalink: /troubleshooting
---

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
1. When finished, tap `OK` again and your device will restart
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
1. [Install unc0ver](installing-unc0ver){:target="_blank"} again like before but don't run it yet
1. Turn on Airplane Mode and run the jailbreak now
  - This may take several attempts, keep trying until it works

If this doesn't work, ask on the r/Jailbreak [Discord Server](https://discord.gg/jb) for support.
{: .notice--info}

## <a name="iphonex_dfu" />How to enter DFU on an iPhone X

1. Power on your iPhone if it's not on already
1. Connect it to your computer with your cable
1. Launch iTunes (or Finder on Macos 10.15) and check that the iPhone is recognised
1. Press the Volume+ button immediately followed by the Volume- button
1. Press and hold down the Power button until the screen turns black
1. Release the Power button
1. Hold down the Power button and the Volume- button for 5 seconds immediately after
1. Release the Power button but keep holding down the Volume- button for another 5 seconds

Your device should now be in DFU mode. The screen should be black and your computer should recognise it as in recovery mode.
