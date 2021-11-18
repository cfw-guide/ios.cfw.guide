---
title: "Installing Ensō (3.60)"
sidebar: false
---

### Required Reading

Ensō is a complete CFW solution for the PS Vita (TV) which allows for convenient homebrew access on your device by running an exploit at boot-time to setup the HENkaku homebrew environment.

It is more convenient than HENkaku as it does not require you to trigger an exploit on your device after every reboot manually.

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
* The latest release of [Ensō (3.60)](https://github.com/henkaku/enso/releases/latest/)
* The latest release of [VitaShell](https://github.com/TheOfficialFloW/VitaShell/releases/latest)

### Instructions

#### Section I - Prep Work

1. Launch the molecularShell or VitaShell application
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:` -> `data/`
1. Transfer `enso.vpk` to the `data` folder
1. Transfer `VitaShell.vpk` to the `data` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing VPKs

1. On your device, navigate to `ux0:` -> `data/`
1. Press (Square) on each of the `.vpk` files to mark them
1. Press (Triangle) to open the menu, then select "More" -> "Install all" to install the marked files
1. Press (Cross) to confirm the install
1. Press (Cross) to continue the install each time you are prompted about extended permissions
1. Press (Triangle) to open the menu, then select "Delete" to delete the marked files
1. Press (Cross) to confirm the deletion
1. Close the molecularShell or VitaShell application

#### Section III - Installing Ensō

1. Open the Ensō application
1. Press (Circle) to accept the terms
1. Press (Cross) to install Ensō
    + When the process has completed, press any button to reboot your device

::: tip
Continue to [Finalizing Setup (Legacy)](finalizing-setup-(legacy))
:::
