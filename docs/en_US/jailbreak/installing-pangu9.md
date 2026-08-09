---
lang: en_US
title: Installing Pangu9
excerpt: Guide to installing Pangu9
permalink: /installing-pangu9
redirect_from:
  - /pangu9
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - hopolapopola
---

Pangu9 is capable of jailbreaking every iOS device on firmware version 9.0GM up to 9.0.2. 64bit devices can also be jailbroken on 9.1.

Pangu9 is an untethered jailbreak, meaning that it persists after reboot, so once it's installed you will not have to reinstall it unless you erase your device.

You will need a Mac running macOS 10.14 Mojave or earlier in order to use pangu9.

## Downloads

- Version 1.1.1 of [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/w00VVQ7J) from the Legacy Jailbreak Archives

## Installing Pangu9

1. Open the `pangu9_mac_v1.1.1` dmg and move the application to your `/Applications` folder
1. Open the terminal and run the following command: `sudo -b /Applications/jb9mac.app/Contents/MacOS/jb9mac`
1. Turn off Find My iPhone.
1. Plug your device into your computer and trust your computer.
1. Unlock your device.
2. Set your device's date to any point before November 2015.
1. Enable Airplane Mode.
1. When Pangu9 says the jailbreak is ready, press Start.
1. Press the 'Already Backup' button.
1. After the device reboots, unlock it and re-enable airplane mode.
1. Open the Pangu app.
1. Click Accept, then press ok for accessing Photo Library.
1. Keep your device plugged in until the jailbreak hits 100% and your device reboots.

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
