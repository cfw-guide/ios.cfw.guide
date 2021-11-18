---
title: "Installing VitaDeploy"
sidebar: false
---

The guide uses the VitaDeploy application as the primary method of installing other apps and a custom firmware. If you didn't install VitaDeploy when installing h-encore, you can install it yourself with molecularShell or VitaShell.

In order to install the necessary `.vpk` (content package) file on your device, we use the [File Transfer Protocol (FTP)](https://wikipedia.org/wiki/File_Transfer_Protocol) to copy the files to your device's memory card.

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* The latest version of [VitaDeploy](https://github.com/SKGleba/VitaDeploy/releases/latest/)
  + Download the `VitaDeploy.vpk` file

#### Section I - Prep Work

1. Launch the VitaShell application
1. Press (Start) to open the VitaShell settings
1. Press (Cross) on "SELECT button" to change the mode to "FTP"
    + Alternatively, you can leave this setting on "USB" and transfer all files via a USB cable for the remainder of this guide
1. Press (Circle) to close the VitaShell settings
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:` -> `data/`
1. Transfer `VitaHBBrowser.vpk` to the `data/` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing the application

1. Launch the VitaShell application
1. Navigate to `ux0:` -> `data/`
1. Press (Cross) on "VitaDeploy.vpk"
1. Press (Cross) to confirm the install
1. Press (Cross) to confirm the install again when prompted

VitaDeploy should now be installed to your home screen.
