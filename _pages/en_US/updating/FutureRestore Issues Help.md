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
Potentional Fix:
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

## Device apnonce doesn't match Device APTicket
![](https://media.discordapp.net/attachments/688124783400845336/839198853915082762/image0.png)

This error means that you have not set nonce on your device to that of the blob. In order to solve this problem:

1. Open the blob and search for generator, under generator there should be a number. Write it down somewhere.
2. Boot your device back into jailbroken mode. Download OpenSSH, NewTerm 2 and dimentio. In order to download dimentio, add repo.1conan.com to Cydia/Sileo.
3. Open NewTerm 2 and type ```su root -c 'dimentio [generator]'```
4. Try FutureRestore again.

## SEP Firmware is not signed

This problem occurs when the user tries to manually specify SEP, to fix this problem, either choose latest SEP or manually specify a signed SEP. You can check what SEP (and bassband) is being signed by looking at what iOS versions are signed right now, you can do that at [iPSW.me](https://ipsw.me)

## Could not enter recovery mode

In order to fix this issue, manually enter recovery mode on your device and run FutureRestore again.

## Error: Unable to receive message from FDR...

The fix for this is either waiting (it can take a very long time) or just re trying 
