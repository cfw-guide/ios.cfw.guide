---
title: "Restoring with blobs using FutureRestore"
permalink: /futurerestore
redirect_from:
  - /future-restore
  - /restoring-to-14-3
  - /fr
excerpt: Guide to using FutureRestore to restore your device 
sidebar:
  nav: sidebar
---

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
  - **NOTE:** If you are using an A14 device or a WiFi only iPad, then you'll need a more recent Futurerestore build rather than 194, which is what Futurerestore-GUI automatically downloads.

[Most recent build for macOS](https://cdn.discordapp.com/attachments/688124783400845336/858047086755053618/futurerestore-mac-v2_0_0-test.tar.xz)

[Most recent build for Linux](https://cadoth.net/~nyuszika7h/ios-builds/futurerestore-v2.0.0-215.tar.gz)

(Windows users can only use 194 at the moment)

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

3. Note down the value inside the `<string>` field
    - This should be a `0x` followed 16 characters which will be a combination of letters and numbers. This is your generator.

**NOTE:** If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely `0x1111111111111111`, and if you were using Chimera/Odyssey/Taurine, your generator is most likely `0xbd34a880be0b53f3`

4. Open NewTerm 2 on your iDevice and type the following command, where `[generator]` is the value you just grabbed:

    `su root -c 'dimentio [generator]'`
    
1. When asked for a password, enter your root password
    - By default, this is set to `alpine`
1. Once the command executes, a lot of text should appear
1. Near the end of the text, you should see the line `Set nonce to [generator]`


### On Computer 
1. Connect your iDevice to your compjuter
1. Make sure that your computer is trusted by your device
1. Create a full backup of your device through iTunes or Finder
1. Open FutureRestoreGUI on your computer
    - If prompted by Windows Defender or other anti-virus software, allow the program to run - it’s safe
1. Click the `Download FutureRestore` button to fetch the latest version of FutureRestore

**NOTE:** If you manually downloaded FutureRestore, then press "select FutureRestore binary/Executable" instead and select the Executable file that you have downloaded.

3. Click the `Select Blob File...` button and select your blob .shsh2 file
4. Click the `Select Target iPSW File...` and select your .ipsw file
5. Enable the `Update (-u)` checkbox
    - Do not enable this when downgrading from 14.5 or later
6. Click `Start Futurerestore`

If you experience any issues during the Process, look in the [FutureRestore help page](https://ios.cfw.guide/FutureRestoreHelp), if you still can't find a solution, ask in the #futurerestore-help channel on the [r/jailbreak Discord](https://discord.gg/9apvC4C3CC)
