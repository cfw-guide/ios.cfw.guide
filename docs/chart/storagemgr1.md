---
title: "StorageMgr"
sidebar: false
---

### Required Reading

StorageMgr is a multi-purpose kernel plugin for the PS Vita (TV) which allows for the use of alternative storage devices such as a USB drive, an SD2Vita, or a psvsd adapter.

The SD2Vita is a microSD to game card adapter which is inserted into the game-card slot in your device, while the psvsd is a microSD adapter which replaces the 3g modem on 3g PS Vita models.

By using the StorageMgr kernel plugin, the USB drive or microSD card you use will be mounted to `ux0:` just like a Sony memory card. This is very useful because microSD cards are significantly cheaper than Sony memory cards (especially at higher capacities).

This will use FTP (File Transfer Protocol) to transfer the files, so your Vita and PC must be connected to the same network.

::: tip
You must have already installed VitaShell to use this.
:::

### What You Need

* A formatted storage device compatible with your system
  + To format your device, see [Storage Format (Windows)](storage-format-(windows)), [Storage Format (Linux)](storage-format-(linux)), or [Storage Format (Mac)](storage-format-(mac))
* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* The latest release of [StorageMgr](https://github.com/CelesteBlue-dev/PSVita-StorageMgr/releases)
  + `storage_config.txt` should be edited to fit your situation as instructed in the [README](https://github.com/CelesteBlue-dev/PSVita-StorageMgr/blob/master/README.md#how-to-configure-storagemgr-)
  + `MCD=uma0` should be kept as-is if you plan to keep a Sony memory card in your device, and removed otherwise
  + `INT=imc0` should be kept as-is for PS Vita 2000 and PS TV users, and removed for PS Vita 1000 users
  + `GCD=ux0` should be kept as-is for SD2Vita users, and edited to `UMA=ux0` for USB drive and psvsd users
  + `UMA=grw0` should be removed unless you have multiple storage devices (in which case the device which is not assigned to `ux0:` should be assigned to `grw0:`)

### Instructions

#### Section I - Installing Plugins

1. Launch the VitaShell application
1. Press (Select) to enable FTP access on your device
1. Open your FTP client on your computer
1. Enter the IP Address and Port displayed on your device
1. Using your FTP client, copy all files from `ux0:tai/` to `ur0:tai/`
    + Overwrite any existing files in the `ur0:tai/` folder
    + If you do not have a `ux0:tai/` folder, skip this step
1. Transfer `storagemgr.skprx` to the `ur0:tai/` folder
1. Transfer `storage_config.txt` to  the `ur0:tai/` folder
1. For any paths in `ur0:tai/config.txt` which contain `ux0:tai/`, replace `ux0:tai/` with `ur0:tai/`
    + If you did not have a `ux0:tai/` folder, skip this step
1. Add the following line to `ur0:tai/config.txt` under the `*KERNEL` line:
    + `ur0:tai/storagemgr.skprx`
1. Delete the `ux0:tai/` folder
    + This is an important step as HENkaku will not load plugins installed in `ur0:tai` if it detects that `ux0:tai` exists

#### Section II - Restoring Data

This section will copy the data from your old Sony memory card to your new storage device.

1. Backup the contents of `ux0:` to a folder on your computer
    + This may take some time if you have a large amount of data on your Sony memory card
1. Insert your new storage device into your computer
1. Copy the contents of your `ux0:` folder to your new storage device
    + This may take some time if you have a large amount of data on your Sony memory card
    + Do not copy the `ux0:` folder itself to your new storage device
1. Insert your new storage device into your PS Vita (TV)
1. Press (Circle) on your device to close the FTP connection
1. Close the VitaShell application
1. Reboot your device
    + If your device does not have Ensō, you will need to manually launch and exit h-encore to enable homebrew
    + This is required to load the new kernel plugins added to `ur0:tai/config.txt`
    
Your new storage device is now configured and ready for use at the mount point specified in your `storage_config.txt`.

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

This is because you must keep h-encore installed to the memory card so you can enable HENkaku (and therefore StorageMgr) after a reboot.