---
lang: en_US
title: "Restoring with blobs using FutureRestore"
description: Guide to using FutureRestore to restore your device 
permalink: /futurerestore
redirect_from:
  - /future-restore
  - /restoring-to-14-3
extra_contributors:
  - Serena
  - Tanbeer191
  - TheHacker894
  - CoocooFroggy
---
## Notes
If you are on iOS 15, you will need to follow [this](https://gist.github.com/nyuszika7h/aac55c97f7925cddcf5ec3167f85dfe8) guide instead. Note that if you are on iOS 15 and are on an A12+ device, you will not be able to downgrade, as there is currently no jailbreak or exploits which can be used to set nonce on A12+ devices running iOS 15.

## Requirements

- Blobs saved for the version you want to restore to
- A jailbroken iDevice
- A computer with at least 8 gigabytes of available space (not including the ipsw)

## Downloads

- The latest release of [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- The iPSW file for your device from [ipsw.me](https://ipsw.me)
  - This should be the same iOS version as your blob
- On Windows, make sure you have [iTunes](https://www.apple.com/itunes/) installed
  - Scroll down and select the other Windows build as the Windows Store version will not work

## Getting Started

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

## Setting nonce

1. Open your blob in a text editor and search for `generator`
   ![GeneratorExample](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg) 

1. Note down the value inside the `<string>` field
    - This should be a `0x` followed 16 characters which will be a combination of letters and numbers. This is your generator.

**NOTE:** If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely `0x1111111111111111`, and if you were using Chimera/Odyssey/Taurine, your generator is most likely `0xbd34a880be0b53f3`

3. Open NewTerm 2 on your iDevice and type the following command, where `[generator]` is the value you just grabbed: `su root -c 'dimentio [generator]'`
    
1. When asked for a password, enter your root password
    - By default, this is set to `alpine`, not your phone's password.
1. Once the command executes, a lot of text should appear
1. Near the end of the text, you should see the line `Set nonce to [generator]`
 
### On Computer 
1. Connect your iDevice to your computer
1. Make sure that your computer is trusted by your device
    - Optionally, you can create a full backup of your device through iTunes or Finder
1. Open FutureRestoreGUI on your computer
    - If prompted by Windows Defender or other anti-virus software, allow the program to run - it’s safe
1. When opening FutureRestoreGUI, you should be greeted by this menu:
![image](https://user-images.githubusercontent.com/48022799/126875170-142c9d15-8bd3-420e-bd59-18a6df8fc6eb.png)

1. Click the `Download FutureRestore` button to fetch the latest version of FutureRestore
** Note:** For A14 and WiFi only-iPad users, you will need to click the `Settings` button and press `Futurerestore beta`, then click the `Download FutureRestore` button.
1. Click the `Select Blob File...` button and select your blob .shsh2 file
1. Click the `Select Target iPSW File...` and select your .ipsw file
1. Then click the Next button to navigate to the Options menu, make sure `Extra Logs` is enabled
1. If you are upgrading or restoring to the same version the device is on, you may enable `Preserve Data` to keep data, however do not use this when downgrading. Especially when downgrading from 14.5 to a lower version, as that will result in a recovery loop.
1. Do not enable `AP Nonce Collision` on any modern devices
1. Click Next to navigate to the controls menu
1. Click `Start Futurerestore`

If you experience any issues during the Process, look in the <router-link to="/futurerestore-help">FutureRestore help page</router-link>, if you still can't find a solution, ask in the #futurerestore-help channel on the r/jailbreak [Discord Server](https://discord.gg/9apvC4C3CC).
