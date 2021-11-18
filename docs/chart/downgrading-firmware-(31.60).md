---
title: Downgrading Firmware (3.60)
sidebar: false
---

### Required Reading

We will now downgrade your device to firmware version 3.60 as it is the best supported firmware version which supports the Ensō boot-time exploit.

Ensō is a complete CFW solution for the PS Vita (TV) which allows for convenient homebrew access on your device by running an exploit at boot-time to setup the HENkaku homebrew environment.

It is more convenient than h-encore as it does not require you to trigger an exploit on your device after every reboot manually.

While it is possible to run homebrew on most firmware versions, downgrading to firmware version 3.60 will provide you with the greatest homebrew compatibility.

Since the release of the reF00D system plugin, there are very few (if any) downsides to running firmware version 3.60 as this plugin allows you to install and play games which would normally require a newer firmware version.

Unfortunately, a very small number of devices will be unable to downgrade to 3.60 due to their "factory firmware" version. Further instructions will be presented when relevant for users who encounter this situation.

::: tip
Ensure your device has a battery charge of 50% or greater before proceeding.
:::

### What You Need

* An FTP Client such as [WinSCP](https://winscp.net/) or [CyberDuck](https://cyberduck.io/)
  + Alternatively, you can also use the USB transfer feature of VitaShell
* <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [PSP2UPDAT.PUP](magnet:?xt=urn:btih:19720f56ab6a299292f009aebae67a9a50eb6e8a&dn=PSP2UPDAT.PUP&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce) (3.60) ([mirror](https://web.archive.org/web/20160902205052id_/http://dus01.psp2.update.playstation.net/update/psp2/image/2016_0323/rel_cd80b3da55771c99557db552542dff2b/PSP2UPDAT.PUP))
* The latest release of [modoru](https://github.com/SKGleba/modoru/releases/latest/)

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
1. Transfer `modoru.vpk` to the `data` folder
1. Transfer `PSP2UPDAT.PUP` to the `data` folder
1. Press (Circle) on your device to close the FTP connection

#### Section II - Installing modoru

1. On your device, navigate to `ux0:` -> `data/`
1. Press (Cross) on `modoru.vpk` to install it
1. Press (Cross) to confirm the install
1. Press (Cross) to continue the install when you are prompted about extended permissions
1. Press (Triangle) to open the menu, then select "Delete" to delete `modoru.vpk`
1. Press (Cross) to confirm the deletion
1. Press (Triangle) on `PSP2UPDAT.PUP` to open the menu, then select "Copy"
1. Press (Cross) to dismiss the copied file dialogue box
1. Press (Circle) to return to the `ux0:` partition
1. Navigate to `app` -> `MODORU000`
1. Press (Triangle) to open the menu, then select "Paste" to paste `PSP2UPDAT.PUP` in the current folder
1. Press (Circle) to return to the `ux0:` partition
1. Press (Triangle) on `tai` to open the menu, then select "Delete" to delete the `tai` folder
1. Press (Cross) to confirm the deletion
1. Close the VitaShell application

#### Section III - Downgrading Prep

1. Reboot your device
1. Launch the h-encore application while holding (R)
    + If prompted about trophies, continue holding (R) and select "Yes"
1. If the exploit was successful, you will now see the h-encore bootstrap menu
    + If the exploit is stuck on a white screen, simply close the application (which will cause a crash and reboot your device), then try again
    + If it is still stuck, hold the power button down for over 30 seconds to force a reboot, then try again
1. Select "Install HENkaku"
    + This will install the HENkaku exploit and enable homebrew access until the next reboot
1. Select "Exit"
1. Launch the Settings application
1. Navigate to `HENkaku Settings`
1. Select "Unlink Memory Card"
1. Return to HENkaku Settings menu
1. Close the Settings application

#### Section IV - Downgrading

1. Launch the modoru application
1. Press (Cross) to confirm the downgrade to firmware version 3.60
    + If you are given the message "Error you cannot go lower than your factory firmware.", you will be unable to downgrade to firmware version 3.60
    + If you are currently on firmware version 3.65, proceed to [Installing Ensō (3.65)](installing-enso-(3.65))
    + If you are currently on a firmware version above 3.65 and the listed "Factory firmware" is 3.65 or lower, proceed to [Downgrading Firmware (3.65)](downgrading-firmware-(3.65))
    + If you are currently on a firmware version above 3.65 and the listed "Factory firmware" is greater than 3.65, proceed to [Configuring h-encore](configuring-h-encore)
    + If you are currently on a firmware above 3.69 and the listed "Factory firmware" is greater than 3.68, proceed to [Finalizing Setup](finalizing-setup)
1. Press (Cross) to accept the terms and conditions
1. Your device will begin the downgrade process
1. Wait until the process is completed, your device will reboot automatically

::: tip
Continue to [Installing HENkaku](installing-henkaku)
:::
