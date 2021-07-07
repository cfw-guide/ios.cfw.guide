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

## iBEC error (error code -8)
This is a common error which you may run into while using FutureRestore, especially if you are using a Windows machine.
To fix this:
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
1. Run FutureRestore again. This issue should now be resolved.

![example](https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png)

## Device ApNonce doesn't match APTicket nonce

This error means that you have not set your generator on your device to that of the blob. In order to solve this problem, you'll need to set Nonce, follow the steps bellow:

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

1. Open your blob in a text editor and search for `generator`
![GeneratorExample](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg) 
 - This should be a `0x` followed by 16 characters, which will be a combination of letters and numbers.
2. Note that value down. This is your generator.

**NOTE:** If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely `0x1111111111111111`, and if you were using Chimera/Odyssey/Taurine, your generator is most likely `0xbd34a880be0b53f3`.

3. Open NewTerm 2 on your iDevice and type the following command, where `[generator]` is the value you just grabbed:

    `su root -c 'dimentio [generator]'`
    
4. When asked for a password, enter your root password
    - By default, this is set to `alpine`
5. Once the command executes, a lot of text should appear
6. Near the end of the text, you should see the line `Set nonce to [generator]`
7. Run FutureRestore again. This issue should now be resolved.

## SEP Firmware is not being signed

This problem occurs when the user tries to manually specify SEP from the *target* version, instead of from the *latest* available version. To fix this problem, either choose the `latest-sep` argument or manually specify a SEP from the latest available iOS version

## Could not connect to device in recovery mode / Failed to place device in recovery mode

**NOTE:** if the error is similarly named, follow these steps too.

If your device is in recovery mode:
- Run FutureRestore again while your device is in recovery mode.

If your device is not in recovery mode:
- Enter recovery mode manually, then run FutureRestore again.

## Error: Unable to receive message from FDR...

The fix for this is either waiting (it can take a very long time) or just re-trying the process. 
This is an error that has been diagnosed but no fix for it is available as of the time of writing this.
