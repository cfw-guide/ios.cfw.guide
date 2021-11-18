---
title: "Installing Ensō (3.65)"
sidebar: false
---

### Required Reading

If your device on firmware version 3.65 was unable to downgrade to firmware version 3.60 due to its "factory firmware", you will fortunately still be able to use the more convenience Ensō boot-time exploit.

Unfortunately, you may experience minor software incompatibilities as you will not be able to use any homebrew which is only compatible with 3.60.

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* The latest release of [Ensō (3.65)](https://github.com/TheOfficialFloW/enso/releases/latest/)

### Instructions

#### Section I - Prep Work

1. Launch the VitaShell application
1. Press (Start) to open the VitaShell settings
1. Press (Cross) on "SELECT button" to change the mode to "FTP"
    + Alternatively, you can leave this setting on "USB" and transfer all files via a USB cable for the remainder of this guide
    + Note that the USB transfer mode will start you in the ux0 partition
    + Additionally, some files will be hidden in USB mode on Windows; you must enable "Show hidden files, folders, and drives" and disable "Hide protected operating system files" in the File Explorer options in order to see all files
1. Press (Circle) to close the VitaShell settings
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:` -> `data/`
1. Transfer `enso.vpk` to the `data` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing VPK

1. On your device, navigate to `ux0:` -> `data/`
1. Press (Cross) on `enso.vpk` to install the file
1. Press (Cross) to confirm the install
1. Press (Cross) to continue the install when you are prompted about extended permissions
1. Press (Triangle) to open the menu, then select "Delete" to delete the marked file
1. Press (Cross) to confirm the deletion
1. Close the VitaShell application

#### Section III - Installing Ensō

1. Open the Ensō application
1. Press (Circle) to accept the terms
1. Press (Cross) to install Ensō
    + When the process has completed, press any button to reboot your device

::: tip
Continue to [Finalizing Setup (Legacy)](finalizing-setup-(legacy))
:::
