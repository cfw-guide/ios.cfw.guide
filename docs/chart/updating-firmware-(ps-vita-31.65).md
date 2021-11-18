---
title: "Updating Firmware (PS Vita 3.65)"
sidebar: false
---

### Required Reading

The h-encore exploit is only compatible with firmware versions 3.65 and above. As a result, other firmware versions must update using a custom update application in order to use that exploit.

While the h-encore exploit itself is compatible with higher firmware versions, users on a firmware version under 3.65 should only update to firmware version 3.65 as it is the latest version which still supports the Ensō boot-time exploit.

Note that a custom update application can only update your device, not downgrade it. If you are on a firmware version higher than 3.65, you should return to [Get Started](get-started).

### What you need

* The `PSP2Updat.PUP` file corresponding to the firmware version you are attempting to update to
  + <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [PSP2UPDAT.PUP](magnet:?xt=urn:btih:5f2437f2141408c925ffc5d81ff76e94e1a4c493&dn=PSP2UPDAT.PUP&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce) (3.65) ([mirror](https://web.archive.org/web/20180630222648id_/http://dus01.psp2.update.playstation.net/update/psp2/image/2017_0317/rel_0a0f2a9ae58968ac5d1d2127049c3cba/PSP2UPDAT.PUP))
* The latest release of [finalhe](https://github.com/soarqin/finalhe/releases/latest)

### Instructions

#### Section I - finalhe

1. Copy the contents of the finalhe `.zip` to a folder on your computer
1. Move `PSP2UPDAT.PUP` to the same folder as finalhe
1. Launch finalhe on your computer
    + If you are using a Windows computer and are prompted to allow finalhe network access through the firewall, do so
1. Launch the Content Manager application on your device
1. Select "Copy Content"
1. Select "PC"
1. Select the method you wish to use to connect to finalhe
    + If you are prompted to log-in to a PlayStation Network Account, do so
    + If you do not have a PlayStation Network Account, create one
1. Select / register your computer if prompted
    + If you encounter a message instructing you to update, reboot your device and try again
    + If you still encounter this message, enable Flight Mode in the system settings, reboot your device, and try again
    + If you *still* encounter this message, disable Flight Mode, follow the instructions in [Blocking Updates](blocking-updates), reboot your device, and try again
    + If your device is not detected over USB on Windows, install [QcmaDriver_winusb](https://github.com/soarqin/finalhe/releases/download/v1.3/QcmaDriver_winusb.exe) and try again
1. The finalhe application should display instructions for updating your device

#### Section II - Updating Firmware

1. Launch the Settings application
1. Navigate to `System Update` -> `Update by Connecting to a PC`
1. Ensure the update message "Version 3.65" is displayed, depending on which version you are attempting to update to
    + If it displays any other message, stop and figure out what went wrong
1. Follow the prompts to update your device
    + When the process has completed, your device will reboot automatically

::: tip
Continue to [Installing h-encore](installing-h-encore)
:::