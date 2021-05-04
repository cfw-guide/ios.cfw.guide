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
- A jailbroken device
- A computer with at least 10 gigabytes of space.

## Downloads

- The latest release of [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- The iPSW file for your device from [ipsw.me](https://ipsw.me/)
  - This should be the same iOS version that your blob is for
- On Windows, make sure you have [iTunes](https://www.apple.com/itunes/) installed
  - Scroll down and select the other Windows build as the Windows Store version will not work
- On your iOS device, download dimentio. In order to download it, add [1Conan's repo](https://repo.1conan.com) to your sources in Cydia/Sileo.
- Download NewTerm 2 from Chariz repo.
- If you're on an iOS 14 version:
  - unc0ver: Download libkrw
  - Taurine: Download libkernrw
  - checkra1n/odysseyra1n: Nothing extra is needed.

## Instructions
### On Device
(Optional: Make a backup)
1. Open your blob in any text editor and search for `generator`. There should a long number under it, like this:
![GeneratorExample](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg) Note that number down. This is your generator.
2. Open NewTerm 2 and type in the following command: ```su root -c 'dimentio [generator]'``` The default password is `alpine`—if you've changed your root password, enter that instead. A lot of text should appear, and on the last or second to last line, you should see `Current nonce is [generator]`.
 
### On Computer 
1. Download the latest version of [FutureRestore GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
2. Click "Download FutureRestore" 
3. Click "Select iPSW" and select the iPSW of the version you want to go to 
4. Click "Select Blob" and select your blob that you downloaded earlier
5. If you want to keep your data, make sure to click "update" (DO NOT DO THIS IF YOU'RE GOING FROM 14.5 TO A LOWER VERSION)
6. Click "Start Futurerestore"

And that's it! If you have any issues, please come and ask in the [Futurerestore-Help channel in the r/jailbreak discord](https://discord.gg/9apvC4C3CC)
