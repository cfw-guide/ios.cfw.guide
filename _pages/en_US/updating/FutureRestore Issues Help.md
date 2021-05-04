---
title: "FutureRestore issues Help"
permalink: /FutureRestoreHelp
redirect_from:
  - /frhelp

excerpt: Provides solutions to some FR issues.
sidebar:
  nav: sidebar
---
## Help page

- This page is intended to provide solutions for errors encountered with FutureRestore. If none work, please join the [r/jb discord and ask in #futurerestorehelp](https://discord.gg/9apvC4C3CC)

## iBec error (Error code 3, 8, and 10)
 This issue most commonly affects Windows machines.
Potential Fix: `
1. Uninstall all apple drivers via device manager.
2. Uninstall all apple products including itunes and apple device support stuff via control panel uninstall a program. MAKE SURE TO CHECK UNINSTALL DRIVER WHEN UNINSTALLING
3. Unplug and replug device.
4. Check device manager for more apple stuff and uninstall if so with same driver checkbox.
5. Disconnect device.
6. Install itunes64 exe from apple.com itself, no windows store bullshit. This is the best version: https://support.apple.com/kb/DL1816?locale=en_US (It will be labeled windows 7, 8 but install it on windows 10, it works fine)
7. Plug in device in recovery.
8. iboot (recovery) driver should show up under usb in device manager. Uninstall it and check the with software box.
9. Run futurerestore.
10. Unplug and replug your device.
11. Run futurerestore again

![example](https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png)

## Device APnonce doesn't match APTicket Nonce
![](https://media.discordapp.net/attachments/688124783400845336/839198853915082762/image0.png)

This error means that you have not set generator on your device to that of the blob. In order to solve this problem:

1. Open the blob and search for generator, under generator there should be a 16-digit hex value starting with "0x". Note it down somewhere.
2. Jailbreak your device. Download and install OpenSSH, NewTerm 2 and dimentio. In order to install dimentio, add the `https://repo.1conan.com`source to your package manager.
3. Open NewTerm 2 and run the following command: ```su root -c 'dimentio [generator]'```
4. Run FutureRestore again.

## SEP Firmware is not being signed

This problem occurs when the user tries to manually specify SEP from the *target* version, instead of from the *latest* available version. To fix this problem, either choose the `latest-sep` argument or manually specify a SEP from the latest available iOS version, viewable at [IPSW.me](https://ipsw.me)

## Could not connect to device in recovery mode / Failed to place device in recovery mode

**NOTE:** if the error is similarly named, follow these steps too.

If your device is in recovery mode:
- Run FutureRestore again while your device is in recovery mode.

If your device is not in recovery mode:
- Enter recovery mode manually, then run FutureRestore again.

## Error: Unable to receive message from FDR...

This is an issue which has been diagnosed but no fix has been found yet. Either wait for a fix or try again later.
