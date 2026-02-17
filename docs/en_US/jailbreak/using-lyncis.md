---
lang: en_US
title: Using Lyncis
description: Guide to using Lyncis
permalink: /using-lyncis
redirect_from:
  - /installing-lyncis
  - /lyncis
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

Lyncis is a webkit-based jailbreak that is capable of doing an untethered jailbreak on 32-bit iOS devices on firmware version 7.1 to 7.1.2.

::: warning

If you have just restored your device, reboot once prior to continuing, or you may run into issues.

:::

::: warning

If you are using a 64-bit device, you should follow <router-link to="/installing-pangu7">Installing pangu7</router-link> instead.

:::

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done

## Running Lyncis

1. Open Safari on your iOS device
1. Go to the Lyncis website ([https://lyncisjb.com](https://lyncisjb.com))
1. Tap "Jailbreak"

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Migrating to pangu7

::: warning

While this section is optional, if you are intending on using **AppSync Unified**, or run into strange issues with Lyncis, it is highly recommended to follow this section.

:::

### Installing Pangu7 Migrator

1. Open Cydia
1. Tap `Complete Upgrade`, then `Confirm`
1. Once Cydia has completed upgrading all packages, tap `Return to Cydia`
1. Open the Sources tab
1. Tap `Edit` then `Add`
1. Type in `http://lukezgd.github.io/repo` and then tap `Add source` 
1. Tap on the `LukeZGD's Repo` source
1. Tap on `System` then `Pangu7 Migrator` 
1. Tap `Install` then `Confirm`
1. Once it has completed installing, tap `Reboot Device`

After the device has rebooted, the `Pangu7 Migrator` package will need to be removed to complete the migration

### Removing Pangu7 Migrator

1. Unlock the device
1. Open Cydia
1. Open the Installed tab
1. Tap on `Pangu7 Migrator`
1. Tap `Modify` then `Remove`
1. Tap `Confirm`

Pangu7 Migrator has been removed, and you have successfully migrated to the pangu7 untether.