---
title: "FutureRestore issues Help"
permalink: /futurerestore-help
redirect_from:
  - /frhelp
  - /futurerestorehelp
  - /FutureRestoreHelp

excerpt: Provides solutions to some FR issues.
sidebar:
  nav: sidebar
---
## Help page

- This page is intended to provide solutions for errors encountered with FutureRestore. If none work, please join the [r/jb discord and ask in #futurerestorehelp](https://discord.gg/9apvC4C3CC)

## iBec error (Error code 3, 8, and 10)
Potentional Fix:
1. Uninstall all Apple devices in Device Manager
    - Make sure to check "Uninstall Driver" when uninstalling
1. Uninstall all Apple products including iTunes and Apple Device Support programs in the Control Panel
1. Unplug and replug your device
1. Check device manager for any Apple devices and uninstall them and any drivers
1. Disconnect your device
1. Install the iTunes `.exe` file from [apple.com](https://support.apple.com/kb/DL1816?locale=en_US) itself
1. Boot your device into [Recovery Mode](https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/) and plug it into your comoputer
1. Uninstall the iBoot (Recovery) driver and software from Device Manager
1. Run FutureRestore again
1. Unplug and replug your device.
1. Run FutureRestore agai

![example](https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png)

## Device ApNonce doesn't match Device APTicket nonce

This error means that you have not set nonce on your device to that of the blob. In order to solve this problem:

### Getting Started

1. Open your package manager on your jailbroken iDevice
1. Add [repo.1conan.com](https://repo.1conan.com) to your sources
1. Add [repo.chariz.com](https://repo.chariz.com) to your sources
    - This will usually already be there on newer jailbreaks
1. Download and install dimentio
1. Download and install NewTerm2
1. If you're on iOS 14.0 or above:
    - Install `libkernrw` if you're using Taurine
    - Install `libkrw` if you're using unc0ver
    - checkra1n/odysseyra1n users don't need to install anything extra

### Setting nonce

1. Open your blob in a text editor and search for `<key>generator</key>`
1. Note down the value inside the `<string>` field
    - This should be a `0x` followed by many numbers
1. Open NewTerm 2 on your iDevice and type the following command, where `[generator]` is the value you just grabbed:

    `su root -c 'dimention [generator]'`
    
1. When asked for a password, enter your root password
    - By default, this is set to `alpine`
1. Once the command executes, a lot of text should appear
1. Near the end of the text, you should see the line `Current nonce is [generator]`

## SEP Firmware is not signed

This problem occurs when the user tries to manually specify SEP. To fix this problem, either choose latest SEP or manually specify a signed SEP. You can check what SEP (and baseband) is currently signed by looking at what iOS versions are signed right now at [iPSW.me](https://ipsw.me)

## Could not enter recovery mode

In order to fix this issue, manually enter [Recovery Mode](https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/) on your device and run FutureRestore again.

## Error: Unable to receive message from FDR...

The fix for this is either waiting (it can take a very long time) or just re-trying the process.
