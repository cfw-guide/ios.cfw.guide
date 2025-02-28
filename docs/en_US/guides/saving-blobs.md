---
lang: en_US
title: "Saving Blobs"
excerpt: Guide to saving blobs to secure your ability to downgrade iOS in the future.
permalink: /saving-blobs
redirect_from:
  - /blobs
  - /blob
  - /save-blobs
  - /save-blob
  - /saving-blob
extra_contributors:
  - TheHacker894
  - airsquared
  - hopolapopola
  - wr3nch3000
  - Tanbeer191
  - itsnebulalol
  - bradleytechman
---

This will take you through the process of saving blobs which are required if you wish to downgrade to an older, unsigned version of iOS or iPadOS. There are multiple methods below you can try. For unjailbroken devices, you will need to use the "Computer" method.

## Saving blobs with shshd

shshd is a tweak used for automatic blob saving. Once you have it installed, you won't need to worry about manually saving blobs as it handles it all in the background. You must be jailbroken to use shshd. If you aren't jailbroken, follow [Saving blobs with TSS Saver Website](#saving-blobs-with-tss-saver-website).

::: warning

shshd is only compatible with Procursus-based jailbreaks, such as Taurine, Odyssey, Chimera and Odysseyra1n. If you're using unc0ver or checkra1n, follow [Saving blobs with TSS Saver App](#saving-blobs-with-tss-saver-app).

:::

1. Open your package manager
1. Search for the `shshd` package
1. Download and install the package
1. Tap "Done" when prompted

Blobs will automatically be saved when you download shshd, every time you rejailbreak, and every week after that. The blobs are available at the [TSS saver website](https://tsssaver.1conan.com/v2/). To retrieve them, go to "retrieve" and enter your ECID.

### Running shshd manually

You shouldn't need to run shshd manually, but it can be run through a terminal.

1. SSH into your device or download NewTerm 2
1. Type ```sudo /usr/sbin/shshd``` into the terminal
    - If prompted for a password, enter in your root password (by default this is set to `alpine`)

## Saving blobs with TSS Saver App

The TSS Saver app can be installed on jailbroken devices and allows you to save your blobs easily with the tap of a button. If you aren't jailbroken, follow [Saving blobs with TSS Saver Website](#saving-blobs-with-tss-saver-website) instead.

1. Add [repo.1conan.com](https://repo.1conan.com/) to your sources in your preferred <router-link to="/package-managers">package manager</router-link>
1. Download and install TSS Saver
    - If you're using unc0ver on iOS 14, also download and install `libkrw`
    - If you're using Taurine on iOS 14. also download and install `libkernrw`
1. Tap "Save Blobs"
1. Once you receive the confirmation message, tap "Open"

## Saving blobs with TSS Saver Website

The TSS Saver website allows you to save your device's blobs by entering in some device-specific information. Once saved, you can then access the blobs by entering in that information again.

A12+ users must be jailbroken to use the TSS Saver Website, as it requires grabbing the ApNonce and Generator pair. If you aren't jailbroken, follow [Saving blobs with blobsaver](#saving-blobs-with-blobsaver)

### Getting Generator and ApNonce (Jailbroken A12+ only)

::: tip

If you are using unc0ver or Taurine on iOS 14, install libkrw or libkernrw respectively.

:::

1. Open a Terminal app and run `sudo dimentio > dimentio.txt`
    - Alternatively, you can get your Generator and ApNonce from the Generator tab in TSS Saver App
1. Go to /var/mobile in Filza and open dimentio.txt
1. Copy the 0x number after `Current nonce is` at the bottom of the text file as well as the number that comes after `entangled nonce:`. The 0x number is your Generator, and the entangled nonce number is your ApNonce. Keep these safe somewhere, you'll need them later
1. Follow the rest of this guide

### Saving blobs (All Devices)
1. Connect your iOS Device to your Mac or PC
1. Open iTunes or Finder
    - Windows users must download the [normal version](https://www.apple.com/itunes/), NOT the Windows Store version
1. Navigate to the device summary page
1. Click the Serial Number field twice
    - This should change to show your ECID number
1. Note down this ECID number somewhere where you can read it later
1. Open the [TSS Saver Website](https://tsssaver.1conan.com/v2/)
1. Input your device ECID
1. Select your Device
    - iPhone 6S, 6S Plus, and iPhone SE users will need to get their board configuration by downloading [AX-CPU](https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8) from the App Store
    - A12+ users will need to input ApNonce and Generator pair
1. Click Submit

## Saving blobs with blobsaver

blobsaver is a cross-platform PC program, compatible with Windows, macOS and Linux, that allows you to easily save your blobs on any device, jailbroken or not. It's not as convenient as the other options, however it works with the most devices.

### blobsaver

1. Download, install, and launch the latest version of [blobsaver](https://github.com/airsquared/blobsaver/releases)
1. Connect your iOS device to your computer and make sure it is unlocked
1. Click on the first "Read from device" button, which will fill your ECID and device information
1. If your iOS device is not A12 or higher, you are not required to get an APNonce and you may skip the next step

### Get your device-specific APNonce and generator

Ensure your device is unlocked and connected to your computer throughout this process.

1. Click on the second "Read from device" button next to the APNonce field
1. If you are jailbroken or have a generator/apnonce pair already set on your device you would like to keep, select "Jailbroken". Otherwise, select "Unjailbroken"

Your device will reboot into recovery mode multiple times. When you reboot into normal OS mode, unlock your iOS device.

::: danger

If you get stuck in recovery mode, try using the "Exit Recovery Mode" option from the "Help" menu in blobsaver.

:::

::: tip

These values can be reused at any time to save blobs whether or not you're jailbroken.

:::

### Saving blobs
1. Once you have filled out all the information, click "Go" to save blobs
1. You can also click "Save Device" to save your current device's information, so you can save blobs for it again later

### Saving blobs automatically in the background
1. You can also optionally set up blobsaver to save blobs automatically in the background, without having to manually open blobsaver
1. Once you have one or more saved devices, click "Background Settings" to begin setting it up
1. Select which devices you would like to save automatically in the background, and blobsaver will first test them to ensure the device information is correct
1. You can then change the freqency interval blobs are saved at, using the "Change Frequency" button
1. Once you are ready, click "Start Background" to enable it
1. You may now close blobsaver, and blobs will automatically be saved in the background at the interval you set

## Saving Onboard Blobs

Saving Onboard Blobs is the process of saving your previous signature from when you last updated, and converting that into a usable blob. Because you updated while the version was still signed, you can re-use these blobs, and they will still be valid. However, the type of blobs that you save will depend on how you updated to your current version.

### OTA Onboard Blobs 
If you updated to the version you are saving Onboard Blobs on using the Settings app over-the-air, then the blobs will be "OTA Blobs". These blobs require a **bootrom exploit** to be used, and **only** can be used with the `--use-pwndfu` argument in FutureRestore.

### iTunes Onboard Blobs 
If you updated/restored to the version you are saving Onboard Blobs on using iTunes / Finder, then the Onboard Blobs will be saved like normal blobs and you'll be able to use them. However, they differ according to whether you restored or updated using a computer.

If you *restored* using a computer, your blobs will be "Erase" blobs, and **cannot** be used with the "Update (-u)" option in FutureRestore.

If you *updated* using a computer, your blobs will be "Update" blobs, and **can only** be used with the "Update (-u)" option in FutureRestore.

### Save Onboard Blobs

### Using Deverser

::: danger

A Linux or macOS machine is required to use this method, and a jailbroken device with OpenSSH installed.

On checkra1n/odysseyra1n, you don't need OpenSSH, but it's recommended for beginners.

:::

1. On your Linux or macOS machine, run `git clone https://github.com/joshuah345/deverser.git && cd deverser` to grab the source of Deverser from GitHub
    - If you already have done this, run `cd deverser` and `git pull` to get the latest changes
2. Run `chmod +x deverser.sh` to allow it to be executed, then run `./deverser.sh` to start the script
3. Answer `Yes` if it asks to install img4tool
    - img4tool converts the raw file to your usable SHSH blob
4. Enter the device's IP address
    - On checkra1n/odysseyra1n, you can run iproxy if you'd like.
        - On macOS, in another terminal window, install libimobiledevice with `brew install libimobiledevice libirecovery`, then run `sudo iproxy 22 44`
        - On Linux, we recommend using OpenSSH on the iDevice, but if you'd like to manually install libimobiledevice, a link to the binaries are [here](https://cadoth.net/~nyuszika7h/ios-builds/libimobiledevice-static-linux.tar.gz)
    - To use OpenSSH, install it on your device, and get the device's IP address from Wi-Fi settings
5. The script will then ask you to enter your device's root password twice
    - If you aren't sure, it's probably `alpine`

You can find your blob named `(YOUR ECID).dumped.shsh` in the directory you ran Deverser (usually ~/deverser).

### Using an SSH Ramdisk

::: danger

A Linux or macOS machine is required to use this method, and a checkm8 device on iOS 12+.

This is a more advanced method and is not recommended for beginners.

:::

1. Navigate to [this link](https://github.com/verygenericname/SSHRD_Script) and set up the ramdisk
    - Choose whichever option is closest or exact to your version
2. Run `./sshrd.sh dump-blobs`
3. Finally, run `./sshrd.sh ssh`, then run `reboot` in the SSH session.
    - Force rebooting will work too

You can find your blob named `dumped.shsh` in the directory where you cloned the repo (usually ~/SSHRD_Script).

### Checking Blob Type

To check what type of blobs you have, use [img4tool](https://github.com/tihmstar/img4tool)
1. Download the IPSW and OTA zip from the internet, then extract the BuildManifest.plist from both of the iPSWs.
    - Google is your friend
2. Run  `img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 and img4tool -v OTA_BuildManifest.plist -s blob.shsh2`
3. Scrub through the output and check which BuildManifest img4tool reported a success with.
