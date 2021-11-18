---
title: "Updating Firmware (PS TV 3.65)"
sidebar: false
---

### Required Reading

The h-encore exploit is only compatible with firmware versions 3.65 and above. As a result, other firmware versions must update using a custom update application in order to use that exploit.

While the h-encore exploit itself is compatible with higher firmware versions, users on a firmware version under 3.65 should only update to firmware version 3.65 as it is the latest version which still supports the Ensō boot-time exploit.

Note that a custom update application can only update your device, not downgrade it. If you are on a firmware version higher than 3.65, you should return to [Get Started](get-started).

### What you need

* A FAT32 formatted USB drive with 150MB of free space
* The `PSP2Updat.PUP` file corresponding to the firmware version you are attempting to update to
  + <i class="fa fa-magnet" aria-hidden="true" title="This is a magnet link. Use a torrent client to download the file."></i> - [PSP2UPDAT.PUP](magnet:?xt=urn:btih:5f2437f2141408c925ffc5d81ff76e94e1a4c493&dn=PSP2UPDAT.PUP&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fthetracker.org%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker1.itzmx.com%3A8080%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fbt.xxx-tracker.com%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.port443.xyz%3A6969%2Fannounce) (3.65) ([mirror](https://web.archive.org/web/20180630222648id_/http://dus01.psp2.update.playstation.net/update/psp2/image/2017_0317/rel_0a0f2a9ae58968ac5d1d2127049c3cba/PSP2UPDAT.PUP))

### Instructions

#### Section I - Drive Preparation

1. Create a folder named `PSVITA` on the root of your USB drive
1. Create a folder named `UPDATE` in the `PSVITA` folder on your USB drive
1. Rename the downloaded `PSP2UPDAT.PUP` to `PSVUPDAT.PUP`
1. Move `PSVUPDAT.PUP` to the created `UPDATE` folder

#### Section II - Updating Firmware

1. Power off your PS TV completely
1. Hold the power button for at least 7 seconds to boot into safe-mode
1. Connect a controller using a USB cable, then press the (PS) button
1. Navigate to `Update System Software` -> `Update from USB Storage Device`
1. Connect your USB drive to your PS TV
1. Follow the prompts to update your device
  + When the process has completed, your device will reboot automatically

::: tip
Continue to [Installing h-encore](installing-h-encore)
:::