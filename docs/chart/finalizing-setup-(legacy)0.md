---
title: "Finalizing Setup (Legacy)"
sidebar: false
---

### Required Reading

We will now setup applications and plugins such as the following:

+  **Vita Homebrew Browser** *(allows for installing homebrew applications from the internet)*
+  **iTLS Installer** *(adds TLSv1.2 support in older firmwares for online connection)*
+  **NoNpDrm** *(allows for encrypted games and applications to be used)*
+  **0syscall6** *(allows using games and applications that require higher firmware versions)*
+  **DownloadEnabler** *(allows any file type to be downloaded with the browser)*
+  **shellbat** *(displays exact battery percentage in the status bar)*
+  **pngshot** *(improves the built-in screenshot utility)*
+  **PSVshell** *(allows overclocking the PSVita for better performances as well as showing CPU usage and fps counter)*

In order to install the necessary `.vpk` (content package) file on your device, we use the [File Transfer Protocol (FTP)](https://wikipedia.org/wiki/File_Transfer_Protocol) to copy the files to your device's memory card.

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
* [config.txt](/assets/files/config.txt)
* The latest release of [Vita Homebrew Browser](https://github.com/devnoname120/vhbb/releases/latest/)
* The latest release of [iTLS-Enso](https://github.com/SKGleba/iTLS-Enso/releases/latest/)
* The latest release of [NoNpDrm](https://github.com/TheOfficialFloW/NoNpDrm/releases/latest)
* The latest release of [0syscall6](https://github.com/SKGleba/0syscall6/releases/latest)
* The latest release of [DownloadEnabler](https://github.com/TheOfficialFloW/VitaTweaks/releases/tag/DownloadEnabler)
* The latest release of [shellbat](https://github.com/nowrep/vita-shellbat/releases/latest)
* The latest release of [pngshot](https://github.com/xyzz/pngshot/releases/latest)
* The latest release of [PSVshell](https://github.com/Electry/PSVshell/releases/latest)

### Instructions

#### Section I - Prep Work

1. Launch the VitaShell application
1. Press (Start) to open the VitaShell settings
1. Press (Cross) on "SELECT button" to change the mode to "FTP"
    + You cannot use USB file transfer for this section
1. Press (Circle) to close the VitaShell settings
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:`
    + The `ux0:` partition corresponds to the memory card of your device (on the PS Vita 1000, this partition will always be the external memory card; on the PS Vita 2000 and PS TV, this partition will either be the external memory card if one is inserted, or the built-in memory card otherwise)
    + The `ur0:` partition corresponds to the internal system memory which is always present on all devices (on the PS Vita 2000 and PS TV, this is *not* the same as the built-in memory card!)
1. Delete the `tai` folder if it exists
1. Navigate to the `data/` folder
1. Transfer `VitaHBBrowser.vpk` to the `data/` folder
1. Transfer `iTLS-Enso.vpk` to the `data/` folder
1. Navigate to `ur0:` -> `tai/`
1. Transfer `config.txt` to  the `tai/` folder
  + Overwrite (replace) the existing `config.txt` file
1. Transfer `nonpdrm.skprx` to the `tai/` folder
1. Transfer `0syscall6.skprx` to the `tai/` folder
1. Transfer `download_enabler.suprx` to the `tai/` folder
1. Transfer `shellbat.suprx` to the `tai/` folder
1. Transfer `pngshot.suprx` to the `tai/` folder
1. Transfer `PSVshell.skprx` to the `tai/` folder
1. Press (Circle) on your device to close the FTP connection
    + For more information on plugins and their installation, read [this webpage](https://samilops2.gitbook.io/vita-troubleshooting-guide/plugins-related-problem/error-when-using-autoplugin)

#### Section II - Installing homebrew applications

1. Launch the VitaShell application
1. Navigate to `ux0:` -> `data/`
1. Press (Triangle) to open the side menu
1. Press (Cross) on "Mark all"
1. Press (Triangle) to open the side menu again
1. Press (Cross) on "More"
1. Press (Cross) on "Install all"
1. Press (Cross) to confirm the install
1. Press (Cross) to confirm the install again when prompted

#### Section III - Installing iTLS

1. Open the iTLS-Enso application
1. Press (Cross) on "Install the full iTLS package"
    + If not on HENkaku Ensō, select "Install the iTLS compat module (web-browser)" instead
1. Wait for your device to reboot

#### Section IV - Blocking Updates

1. Launch the Settings application
1. Navigate to `System` -> `Auto-Start Settings`
1. Uncheck the `Download Update File for System Sofwtare`
1. Close the Settings application

#### Section V - PSN Access

1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Check "Enable PSN spoofing"
1. Check "Enable Version Spoofing"
1. Navigate to "Spoofed Version"
1. Enter "3.73" into the box
    + Should a new firmware version be released in the future, you must change the spoofed version to match in order to access PSN
1. Close the Settings application

___

::: tip
You can browse for new homebrew applications on [VitaDB](https://vitadb.rinnegatamante.it/).
:::

::: danger
It is *not* recommended to make modifications to your Custom Firmware installation by installing homebrew applications intended for advanced users (such as "Enso EX"). Doing so without fully understanding the system can lead to a BRICK!
:::

::: tip
For information on replacing your Sony memory card with alternative storage (such as a microSD card or USB drive), check out the [YAMT](yamt) page.
:::

::: tip
For information on installing CFW to the built-in PSP emulator, check out the [Adrenaline](adrenaline) page.
:::
