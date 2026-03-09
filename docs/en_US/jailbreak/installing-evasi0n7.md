---
lang: en_US
title: Installing evasi0n7
description: Guide to installing evasi0n7
permalink: /installing-evasi0n7
redirect_from:
  - /evasion7
  - /evasi0n7
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - hopolapopola
---

evasi0n7 is capable of jailbreaking all iOS devices on iOS 7.0 to 7.0.6

evasi0n7 is an untethered jailbreak, meaning that it persists after reboot, so once it's installed you will not have to reinstall it unless you erase your device.

In order to use evasi0n7, you will need a Windows computer running Windows 7 or newer and the patched version of the original evasi0n7.exe so that it can fetch jailbreak files from the internet.

<!-- Technically you can run it on Mojave or older but I don't have access to that so I can't write about it -->

::: warning

If you are using a 32-bit iOS device, it is recommended to follow <router-link to="installing-aquila">Installing Aquila</router-link> instead, as it uses better exploits, supports macOS, includes the updated device certificates by default, and will succeed even on OTA updated devices.

If you are using a 64-bit device, you should **disregard this notice** and proceed with this guide.

:::

## Downloads

- The latest version of [Patched evasi0n7](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/1wc0HZgQ) from the Legacy JB Archive
   - If you are using an iPhone 5S or 5C on iOS 7.0 (Build 11A466) you will need [this version of evasi0n7](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/Z1MC2ZaS) instead of the one above.

## Installing evasi0n7

::: warning

If your device has been OTA updated to its current version of iOS 7, you may encounter a bootloop or face other errors with attemping to jailbreak.

:::

1. Open the `patched-with-ipg-link-evasi0n7.exe` file
   - If you're using a 5S/5C on 7.0, it'll be called `ONLY_5c_7.0_evasi0n7.exe`
1. Plug your device into your computer and trust the computer on device when prompted
1. In evasi0n7, click "Jailbreak"
   - It may take a moment for the required files to download
1. Once your phone has rebooted once, open the evasi0n app on your home screen
1. Once your phone has rebooted again, unlock your device. evasi0n will reboot your device one last time and you will see the evasi0n logo on your phone as it boots up

Once you see your lock screen, you should be jailbroken. Cydia will be on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done