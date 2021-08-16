---
title: Using iOS-OTA-Downgrader
permalink: /ota-downgrader
excerpt: Guide to Using iOS OTA Downgrader 
sidebar:
  nav: sidebar
---
## Introduction
iOS OTA Downgrader allows you to downgrade to restore to some versions on select devices, mostly legacy devices.
<br>
The first step of using iOS OTA Downgrader is checking if your device is compatible, and what versions you can restore to. List of compatible devices and versions they can be restored to:
<table>
    <thead>
        <tr>
            <th>Target Version</th>
            <th>Supported Devices</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>iOS 10.3.3</td>
            <td><b>A7 devices:</b></td>
        </tr>
        <tr><td>iPhone 5S</td></tr>
        <tr><td>iPad Air 1</td></tr>
        <tr><td>iPad mini 2 (except iPad4,6)</td></tr>
        <tr>
            <td rowspan=6>iOS 8.4.1</td>
            <td><b>32-bit devices:</b></td>
        </tr>
        <tr><td>iPhone 4S</td></tr>
        <tr><td>iPhone 5</td></tr>
        <tr><td>iPad 2, iPad 3, iPad 4</td></tr>
        <tr><td>iPad mini 1</td></tr>
        <tr><td>iPod touch 5</td></tr>
        <tr>
            <td rowspan=2>iOS 6.1.3</td>
            <td>iPhone 4S</td>
        </tr>
        <tr><td>iPad 2 (except iPad2,4)</td></tr>
    </tbody>
</table>


## Requirements
- a macOS or Linux Computer
- a compatible device (see introduction above)


## Preperations

### 32Bit devices 
*for refrence, 32bit devices are all the devices except the A7 devices* <br>
32 bit devices must be jailbroken and download `OpenSSH` from cydia. <br>32bit devices on iOS 10 **also** need to download `Dropbear` from this repo: https://lukezgd.github.io/repo/

### 32Bit devices on Pangu 7 and 8
32Bit devices on Pangu 7 and 8 need to import these packages to filza then install them if theyre not already downloaded in order to make their jailbreak untethered, then follow the instructions above for `OpenSSH` <br>
[Pangu 7 Package](https://github.com/LukeZGD/iOS-OTA-Downgrader-Keys/releases/download/untether/io.pangu.axe7_0.3_iphoneos-arm.deb)<br>
[Pangu 8 Package](https://github.com/LukeZGD/iOS-OTA-Downgrader-Keys/releases/download/untether/io.pangu.xuanyuansword8_0.5_iphoneos-arm.deb)

### A7 Devices
A jailbreak is not required

## The Restore
In order to do the restore, complete the following steps:
1. Download the zip of ios-ota-downgrader [here](https://github.com/LukeZGD/iOS-OTA-Downgrader/archive/master.zip) and unzip it.
2. Open a terminal, type `cd` then drag in the `iOS-OTA-Downgrader-master` zip, then press enter.
3. type `./restore.sh` and press enter 
4. When prompted with the Main Menu, press 1 then enter
5. Select the version you want to restore to by typing the number next to it
6. Select “[2] No” when prompted if you want to jailbreak the target version, because this tends to be unreliable
Now your device should restore successfully! If you encounter any issues, join the [R/jailbreak legacy discord server](https://discord.gg/bhDpTAu) and ask for assistence in the #assistence channel
