---
title: "YAMT (SD2Vita)"
description: "Guide on installing the YAMT plugin for SD2Vita."
sidebar: false
---

### Required Reading

YAMT (Yet Another Mount Tool) is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of a microSD card as a storage device via an SD2Vita adapter. The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device.

By using the YAMT kernel plugin, the USB drive or microSD card you use will be mounted to `ux0:` just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).

This will use FTP (File Transfer Protocol) to transfer the files, so your Vita and PC must be connected to the same network.

::: tip
If you're using a USB drive or psvsd adapter, or if this method doesn't work for you, follow the [StorageMgr](storagemgr) guide.
:::

::: tip
YAMT is only compatible with firmware versions 3.60 and 3.65 on HENkaku Ensō.
:::

::: warning
Red Samsung Evo cards are not compatible with YAMT. If you have a Red Samsung Evo MicroSD card please follow the [StorageMgr](storagemgr) guide.
:::

### What You Need

* A storage device compatible with your system
  + This can be a microSD card to use in an SD2Vita or psvsd adapter, or a USB device for a PS TV console
* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* The latest release of [yamt-vita](https://github.com/SKGleba/yamt-vita/releases)
* The latest release of [storageFormat](https://github.com/SKGleba/VitaTools/raw/main/storageFormat/build/storageFormat.vpk)

### Instructions

#### Section I - Prep Work

1. Launch the VitaShell application
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, navigate to `ux0:` -> `data/`
1. Transfer `yamt.vpk` to the `data` folder
1. Transfer `storageFormat.vpk` to the `data` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing VPKs

1. On your device, navigate to `ux0:` -> `data/`
1. Press (Square) on each of the `.vpk` files to mark them
1. Press (Triangle) to open the menu, then select "More" -> "Install all" to install the marked files
1. Press (Cross) to confirm the install
1. Press (Cross) to continue the install each time you are prompted about extended permissions
1. Press (Triangle) to open the menu, then select "Delete" to delete the marked files
1. Press (Cross) to confirm the deletion
1. Close the VitaShell application

#### Section III - Formatting the microSD

1. Insert your SD2Vita with the microSD card into your PS Vita or PS TV device
1. Launch the storageFormat application
1. Ensure `Target` is set to "SD2Vita" and `Filesystem` is set to "TexFAT"
1. Press (Cross) on "Format target storage"
    + If this fails, ensure the adapter is inserted properly and is undamaged - then reboot and try again
    + If it still fails, follow the [StorageMgr](storagemgr) guide
1. Press (Cross) on "Reboot your device"

#### Section IV - Installing yamt-vita

If you previously installed StorageMgr or another storage plugin, please remove it from your `ux0:tai/` or `ur0:tai/` folder before continuing.
{: .notice--info}

1. Power on your device to reboot
1. Launch the YAMT Installer application
1. Press (Cross) on `-> Install the lite version`
    + Once finished, your device will reboot
1. Open the Settings application
1. Navigate to `Devices` -> `Storage Devices`
1. Enable "Use YAMT" to enable the YAMT driver
1. Set `ux0:` to "Memory Card"
    + If you're not using a memory card, select "Internal Storage"
1. Set `uma0:` to "SD2Vita"
1. Hold the power button and select "Power Off"

#### Section V - Restoring Data

::: tip
This section will copy the data from your old Sony memory card to your new storage device.
:::

1. Power on your device to reboot
1. Open the VitaShell application
1. Navigate to the `ux0:` partition
    + This is currently your official memory card or internal storage
1. Press down on the D-Pad to highlight a folder or file
1. Press (Triangle) to bring up the menu
1. Press (Cross) on "Mark all" to select all folders and files in the `ux0:` partition
1. Press (Triangle) again to bring up the menu
1. Press (Cross) on "Copy"
1. Press (Cross) again when prompted
1. Navigate out of the `ux0:` partition and enter the `uma0:` partition
    + This is your unofficial storage device's memory
1. Press (Triangle) to bring up the menu
1. Press (Cross) on paste and wait for it to finish
1. Once done, exit VitaShell and open the Settings application
1. Navigate to `Devices` -> `Storage Devices`
1. Set `ux0:` to "SD2Vita"
1. Set `uma0:` to "Memory Card"
    + If you're not using a memory card, select "Internal Storage"
1. Hold the power button and select "Power Off"
1. Power on your device to reboot

___

If you want to reclaim the space on your memory card (to use for storing PSP games for instance), you can delete the contents of `uma0:` (the new memory card mount point) and / or `imc0:` (if you have a PS Vita 2000 or PS TV).

If you decide to do this, you must *not* delete these folders if they exist:

  + `uma0:data/bootstrap.self`
  + `uma0:app/PCSG90096`
  + `uma0:appmeta/PCSG90096`
  + `uma0:appmeta/VITASHELL`
  + `uma0:license/app/PCSG90096`
  + `uma0:license/app/VITASHELL`
  + `uma0:user/00/savedata/PCSG90096`
  + `uma0:user/00/savedata/VITASHELL`

This is because you must keep h-encore installed to the memory card so you can enable HENkaku (and therefore YAMT) after a reboot.
