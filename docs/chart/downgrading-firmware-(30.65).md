---
title: Downgrading Firmware (3.65)
sidebar: false
---

### Required Reading

If your device was unable to downgrade to firmware version 3.60 due to its "factory firmware", you will still be able to use the more convenience Ensō boot-time exploit (as long as your "factory firmware" is 3.65 or lower) by downgrading to firmware version 3.65.

Unfortunately, you may experience minor software incompatibilities as you will not be able to use any homebrew which is only compatible with 3.60.

::: tip
Ensure your device has a battery charge of 50% or greater before proceeding.
:::

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [PSP2UPDAT.PUP](magnet:?xt=urn:btih:5f2437f2141408c925ffc5d81ff76e94e1a4c493&dn=PSP2UPDAT.PUP&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce) (3.65) ([mirror](https://web.archive.org/web/20180630222648id_/http://dus01.psp2.update.playstation.net/update/psp2/image/2017_0317/rel_0a0f2a9ae58968ac5d1d2127049c3cba/PSP2UPDAT.PUP))

#### Section I - Prep Work

1. Exit the modoru application
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
1. Delete the existing 3.60 `PSP2UPDAT.PUP` file
1. Transfer the 3.65 `PSP2UPDAT.PUP` to the `data` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing modoru

1. On your device, navigate to `ux0:` -> `data/`
1. Press (Cross) on `modoru.vpk` to install it
1. Press (Cross) to confirm the install
1. Press (Cross) to continue the install when you are prompted about extended permissions
1. Press (Triangle) to open the menu, then select "Delete" to delete `modoru.vpk`
1. Press (Cross) to confirm the deletion
1. Press (Triangle) on the 3.65 `PSP2UPDAT.PUP` to open the menu, then select "Copy"
1. Press (Cross) to dismiss the copied file dialogue box
1. Press (Circle) to return to the `ux0:` partition
1. Navigate to `app` -> `MODORU000`
1. Press (Triangle) on the existing 3.60 `PSP2UPDAT.PUP` to open the menu, then select "Delete"
1. Press (Cross) to confirm the deletion
1. Press (Triangle) to open then menu, then select "Paste" to paste the 3.65 `PSP2UPDAT.PUP` in the current folder
1. Press (Circle) to return to the `ux0:` partition
1. Press (Triangle) on `tai` to open the menu, then select "Delete" to delete the `tai` folder
1. Press (Cross) to confirm the deletion
1. Close the VitaShell application

#### Section III - Downgrading

1. Reboot your device
1. Launch the h-encore application while holding (R)
    + If prompted about trophies, continue holding (R) and select "Yes"
1. If the exploit was successful, you will now see the h-encore bootstrap menu
    + If the exploit is stuck on a white screen, simply close the application (which will cause a crash and reboot your device), then try again
    + If it is still stuck, hold the power button down for over 30 seconds to force a reboot, then try again
1. Select "Install HENkaku"
1. Select "Exit"
1. Launch the modoru application
1. Press (Cross) to confirm the downgrade to firmware version 3.65
1. Press (Cross) to accept the terms and conditions
1. Your device will begin the downgrade process
1. Wait until the process is completed, your device will reboot automatically

::: tip
Continue to [Installing Ensō (3.65)](installing-enso-(3.65))
:::
