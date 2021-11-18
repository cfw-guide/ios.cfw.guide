---
title: Installing h-encore
---

### Required Reading

The h-encore exploit for the PS Vita (TV) allows for the installation of homebrew applications to your home screen. It is compatible with the firmware versions 3.65 to 3.73.

Note that the h-encore exploit chain is not “persistent” (meaning it does not remain installed after a reboot). This means you will have to run the exploit again after each reboot.

In addition to installing the h-encore exploit, we enable access to “unsafe” homebrew which gives extended permissions to homebrew applications. This idea could be considered analogous to the “administrator” mode on a computer.

If you are on firmware versions 3.65 to 3.68, you will be using the h-encore exploit, however if you are on firmware versions 3.69 to 3.73, you will be using the h-encore² exploit. The program we use to install the exploit to your console (finalhe) should sort this out for you.

::: tip
If you have a PS Vita 1000, you must also have an official Sony memory card (of any size) to follow this guide. This restriction does not apply to the PS Vita 2000 or PS TV as those devices have a built-in memory card.
:::

### What You Need

* The latest release of [finalhe](https://github.com/soarqin/finalhe/releases/latest)
  - If you are using MacOS or Linux you will be required to compile finalhe yourself
* The latest release of [VitaDeploy](https://github.com/SKGleba/VitaDeploy/releases/latest)
  - Download the `VitaDeploy-FHE.zip` file

### Instructions

#### Section I - finalhe

1. Copy the contents of the finalhe `.zip` file to a folder on your computer
1. Copy the VitaDeploy `.zip` file inside the finalhe folder
    + Do not extract this file
1. Launch finalhe on your computer
    + If you are prompted to allow finalhe network access through the firewall, do so
1. Launch the Content Manager application on your device
1. Tap "Copy Content"
    + If your device is already connected to your computer via USB, you can skip to [Section II - h-encore Transfer](#section-ii-h-encore-transfer)
    + If your device is not detected over USB, install [QcmaDriver_winusb](https://github.com/soarqin/finalhe/releases/download/v1.91/QcmaDriver_winusb.exe) and try again
1. Tap "PC"
1. Select the method you wish to use to connect to finalhe
    + If you are prompted to log-in to a PlayStation Network Account, do so
    + If you do not have a PlayStation Network Account, create one
1. Select or register your computer if prompted
    + If you encounter a message instructing you to update, reboot your device and try again
    + If you still encounter this message, enable Flight Mode in the System Settings and try again (this will *not* work on PS TVs)
    + If you *still* encounter this message, update to the latest firmware version and try again

#### Section II - h-encore Transfer

1. Select "Trim h-encore to ~7MB"
1. Click on the small arrow on the right-hand side of the finalhe window
    + This can be hard to spot, especially on high-DPI displays
1. Tick the "VitaDeploy" box
1. Click "Let's GO!"
    + The exploit files will be automatically downloaded and prepared
    + This process will take some time
1. Tap "PC -> PS Vita System" or "PC -> PS TV System" on your device
1. Tap "Applications"
1. Tap "PS Vita"
1. Select "h-encore" or "h-encore²" depending on which is displayed
1. Select "VitaDeploy"
1. Tap "Copy"
1. Tap "OK"
    + The h-encore exploit and VitaDeploy application will be copied to your device
    + This process will take some time
1. Close the Content Manager application on your device
1. Close finalhe on your computer

#### Section III - Opening h-encore

1. Launch the h-encore(²) application while holding down the (R) button
    + If prompted about trophies, select "Yes" while continuing to hold down the (R) button
1. If the exploit was successful, you will now see the h-encore bootstrap menu
    + If the exploit gets stuck, reboot your device and try again
    + If you can't reboot normally, hold the power button down for over 30 seconds to force a reboot
1. Press (Cross) to exit the application

#### Section IV - Configuring HENkaku

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
    + If HENkaku Settings is missing, select the "Reset taiHEN config.txt" in the h-encore bootstrap menu, then try again
1. Check "Enable Unsafe Homebrew"
1. Return to HENkaku Settings menu
1. Close the Settings application