---
lang: en_US
title: Installing TrollStore (sshrd)
description: Guide to installing TrollStore using an ssh ramdisk
permalink: /installing-trollstore-sshrd
redirect_from:
  - /sshrd
  - /trollstore-sshrd
extra_contributors:
  - opa334
  - Nathan
  - nebula
  - Superuser
---

## Requirements

You will need:
- An A11 or earlier device on iOS 15.0 to 15.5b4
- A macOS or Linux computer

## Installing TrollHelper

::: warning

This will replace the `Tips` app on your device with TrollHelper

:::

1. Connect your device to your computer and enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>
1. Open a Terminal
1. Run `git clone https://github.com/verygenericname/SSHRD_Script --recursive && cd SSHRD_Script`
1. Run `./sshrd.sh 14.8 TrollStore Tips`
1. Run `./sshrd.sh boot`

Once your device reboots, the Tips app should open TrollHelper

## Installing TrollStore

1. In your package manager, search and install the `TrollStore Helper` package
1. After installing, close your package manager
1. Open the `TrollHelper` app on your home screen
1. Press `Install TrollStore`

Your device should respring, and TrollStore should now be installed.
