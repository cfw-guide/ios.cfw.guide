---
lang: en_US
title: "Restoring with blobs using FutureRestore"
description: Guide to using FutureRestore to restore your device 
permalink: /futurerestore
redirect_from:
  - /future-restore
  - /restoring-to-14-3
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - CoocooFroggy
---
## Notes
If you are on iOS 15.2 or newer on an A10- device, you should follow [this](https://docs.google.com/document/d/1-JR4vKboEzCvD_YR1lor-s8HuMAhcfarmr73KC039lM/edit?tab=t.0#heading=h.nbqxqvtctjix) guide instead. Note that if you are on a device that supports iOS 16 (which includes A12+), you will **not** be able to follow this guide due to Cryptex1 and SEP/BB incompatibility. For more information on why this is the case, please go [here](https://gist.github.com/Cryptiiiic/b82133ac290070939189e1377dc3ac85).

## Requirements

- Blobs saved for the version you want to restore to
  - These blobs must be for **your** device only; you cannot use other people's blobs
- A jailbroken device **or** an A10-A11 device on 15.0-15.1.1

::: danger

You **must** make sure that the latest SEP/BB is compatible to the version you are attempting to restore to in order to prevent bootloops or failed activation! To do so, please consult the [SEP/BB Chart](https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0). If a cell says "Compatible" then you are free to restore to that version.

:::

## Downloads

- The latest release of [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- The iPSW file for your device from [ipsw.me](https://ipsw.me)
  - This should be the same iOS version as your blob
- On Windows, make sure you have [iTunes](https://www.apple.com/itunes/) installed
  - Scroll down and select the other Windows build as the Windows Store version **will not work**
- If on an A10 device on 15.0-15.1.1
  - The latest version of [TrollStore](https://github.com/opa334/TrollStore/releases)
  - The latest version of [TrollNonce](https://github.com/opa334/TrollNonce/releases)

## Getting Started (Jailbroken)

1. Open your package manager on your jailbroken iDevice
1. Add [repo.1conan.com](https://repo.1conan.com) to your sources
1. Download and install dimentio
1. Download and install NewTerm2
2. Proceed to [Finding the generator](#finding-the-generator)

## Getting Started (Non-Jailbroken)

1. Navigate to the [TrollStore](https://github.com/opa334/TrollStore) GitHub page and follow the installation instructions for your device
   - If "Not Supported" is listed and you cannot jailbreak or you do not have an A11- device, you will be unable to proceed further
2. Once TrollStore is installed, install the [TrollNonce](https://github.com/opa334/TrollNonce/releases) app through TrollStore
3. Proceed to the next section

## Finding the generator

::: danger

Make sure you do not edit the blob file! Doing so will make it invalid and unusable with futurerestore.

:::

1. Open your blob in a text editor and search for `generator`
   ![GeneratorExample](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg) 

1. Note down the value inside the `<string>` field
    - This should be a `0x` followed 16 characters which will be a combination of letters and numbers. This is your generator.

**NOTE:** If there is no generator value, try to remember which jailbreak you were using at the time of saving blobs. If you were using unc0ver, your generator is most likely `0x1111111111111111`, and if you were using Chimera/Odyssey/Taurine, your generator is most likely `0xbd34a880be0b53f3`

## Setting the nonce (Jailbroken)

1. Open NewTerm 2 on your iDevice and type the following command, where `[generator]` is the value you just grabbed: `su root -c 'dimentio [generator]'`
    
1. When asked for a password, enter your root password
    - By default, this is set to `alpine`, not your phone's password.
1. Once the command executes, a lot of text should appear
1. Near the end of the text, you should see the line `Set nonce to [generator]`

## Setting the nonce (Unjailbroken)

::: warning

This method will not work for A9 devices at all or A10 devices on 15.2+. If you cannot jailbreak, you must follow [this](https://docs.google.com/document/d/1-JR4vKboEzCvD_YR1lor-s8HuMAhcfarmr73KC039lM/edit?tab=t.0#heading=h.nbqxqvtctjix) guide.

::: 

1. Open the TrollNonce app 
2. Select the `Set Nonce` option, then input the generator value you found in your blob into the box. Tap `Set`
 
### On Computer 

::: danger

To reiterate: you **cannot** FutureRestore on any device that has supports iOS 16. Following the steps listed below will either result in the process failing or will fail activation when setting up the device, both of which will require a restore to a signed iOS version. While you cannot downgrade, you may have a path to upgrade and instructions/details can be found at the <router-link to="/updating-blobless">Updating (blobless)</router-link> page.

:::

1. Connect your iDevice to your computer
1. Make sure that your computer is trusted by your device
    - Optionally, you can create a full backup of your device through iTunes or Finder
1. Open FutureRestoreGUI on your computer
    - If prompted by Windows Defender, Windows Smartscreen or other anti-virus software, allow the program to run - it’s safe
1. When opening FutureRestoreGUI, you should be greeted by this menu:
![FutureRestoreGUI main screen](/assets/images/futurerestore-gui.png)

1. Click the `Settings` button and enable `Futurerestore Beta`, then click the `Download FutureRestore` button. **This option is only available for macOS and Linux**
  - Windows users must download the beta from [here](https://cdn.cryptiiiic.com/bin/Windows/x86_64/futurerestore/futurerestore-Windows-x86_64-v2.0.0-test-Build_304-RELEASE.exe). Once that is done, press `Select FutureRestore Binary/Executable` and navigate to where you have downloaded the beta. Select the file and click `Open`
1. Click the `Select Blob File...` button and select your blob .shsh2 file
1. Click the `Select Target iPSW File...` and select your .ipsw file
1. Then click the Next button to navigate to the Options menu, make sure `Extra Logs` is enabled
1. If you are not downgrading, then it is safe to enable `Preserve Data` in the options menu in order to keep data. However, using it while downgrading may be dangerous
1. Do not enable `AP Nonce Collision` on any modern devices
1. Enable `No RSEP` 
1. Click Next to navigate to the controls menu
1. Click `Start Futurerestore`

If you experience any issues during the Process, look in the <router-link to="/futurerestore-help">FutureRestore help page</router-link>, if you still can't find a solution, ask in the #genius-bar forum on the r/jailbreak [Discord Server](https://discord.gg/jb).
