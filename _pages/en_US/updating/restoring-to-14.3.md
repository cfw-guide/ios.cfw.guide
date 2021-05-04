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

If you have ever found yourself wanting to restore to an unsigned version, well, now you can! Assuming that you have met the requirements below and have a computer, you can use Futurerestore! See requirements below.

## Requirements

- Blobs saved for the version you want to restore to
  - If there are multiple blobs saved for your version, use the first one
- A device that can be or is already jailbroken
- A computer with at least 10 gigabytes of space.

## Downloads

- The latest release of [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- The iPSW file for your device from [ipsw.me](https://ipsw.me/)
  - This should be the same iOS version that your blob is for
- On Windows, make sure you have [iTunes](https://www.apple.com/itunes/) installed
  - Scroll down and select the other Windows build as the Windows Store version will not work
- Dimentio on the iDevice. In order to download it, add [1conans repo](https://repo.1conan.com) to sources of Cydia/Sileo, then search for dimentio and download it, if there are multiple ones to choose from, you can choose any.
- OpenSSH and NewTerm 2 need to be downloaded on the iDevice through Cydia/Sileo. Unc0ver users will have to download libkrw as well.

## Steps
- On Device
(Optional: make sure to save a back up)
1. Open your blob and search for "generator", there should a long number under it, like this:
![GeneratorExample](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg) If the number isnt 0x1111111111111111, don't freak out! Make sure to write the number under "generator" somewhere, it's essential.
2. Open NewTerm 2 and type in "su root -c dimentio (number under generator)" if it asks for a password and you didn't change yours before, type "alpine". After that, simply type "dimentio" a long list should appear, at the end of the list it should say "current nonce: (number that you put)".
 
-On Computer 
1. Download the latest version of [FutureRestore GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
2. Click "Download FutureRestore" 
3. Click "Select iPSW" and select the iPSW of the version you want to go to 
4. Click "Select Blob" and select the blob of the version you want to go to 
5. If you want to keep your data, make sure to click "update" (DO NOT DO THIS IF YOURE GOING FROM 14.5 TO A LOWER VERSION)
6. Click "Start Futurerestore"

And that's it! If you have any issues, please come and ask in the [Futurerestore-Help channel in the r/jailbreak discord](https://discord.gg/9apvC4C3CC)

Guide written by dabezt
