---
lang: en_US
title: Installing PwnageTool
description: Guide to installing PwnageTool
permalink: /installing-pwnagetool
redirect_from:
  - /pwnagetool
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

PwnageTool is capable of jailbreaking pre-A5 devices on iOS 1.1.4 to 5.1.1 - although support heavily varies.

PwnageTool is an untethered jailbreak, meaning that it persists after reboot, so once it's installed you will not have to reinstall it unless you erase your device.

In order to use PwnageTool, you will need a Mac running macOS Mavericks or earlier.


![A screenshot of PwnageTool](/assets/images/pwnagetool.png)

## Downloads

- The versions of [PwnageTool](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/swVhVKYB) for your platform from the r/LegacyJailbreak archives
    - If you're using a iPhone 2G or iPod Touch 1/2 or jailbreaking iPhone OS 2, download PwnageTool 3.1.5.

## Installing PwnageTool

1. Extract the `.zip` to a convenient location, e.g. your Downloads folder
1. Open the PwnageTool application
1. Plug your device into your computer
1. Select if you are using an iPhone, iPad or iPod touch
1. Download an IPSW from [ipsw.me](https://ipsw.me)
1. When prompted, input the IPSW you downloaded into PwnageTool
1. Select General, then continue on
1. Do **not** adjust the root partition size
1. Continue on until you hit Cydia Settings
1. Select OpenSSL, and OpenSSH.
1. Continue, and make sure Cydia Installer is checked
1. Uncheck Icy and continue
1. Select 'Build', and continue
1. Choose where to save the custom IPSW file
1. Wait for it to make the IPSW
1. PwnageTool will ask you if your phone has been jailbroken before; please select the answer that applies to you
1. Follow the instructions PwnageTool gives you to enter DFU mode
1. Open iTunes, and restore with the `.ipsw` file PwnageTool has created

Once you see your lock screen, you should be jailbroken. Cydia will be on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
