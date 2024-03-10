---
lang: en_US
title: "FAQ"
description: Frequently asked questions on jailbroken devices.
permalink: /faq
redirect_from:
  - /help/faq
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - BurritoSOFTWARE
---

## General Questions

### What is jailbreaking?

Jailbreaking is a term used to describe the process that allows you to truly unlock the potential of your iOS device. Apple's mobile operating system is known for its security and that's partly because of how locked-down it is. Jailbreaking your device will allow you to break those restrictions and customize your device to how you like it.

Jailbreaking gives you the ability to install custom applications and "tweaks" (modifications) from a package manager to customize and enhance the user experience. Jailbreaking is free and easy on most devices.

### Is jailbreaking legal?

Jailbreaking in the US is perfectly legal. In 2010, the US Copyright Office declared jailbreaking to be an exception to the Digital Millennium Copyright Act.

You may want to check in your country whether it is legal there or not before proceeding, however in most countries it should be fine.

### What is a package manager?

Package managers are used to install, uninstall and modify official or community-made software to customize your device. Sileo is an example of a package manager.

They can be considered similar to the iOS App Store, where you can install both free and paid software.

### What's a repo?

These are essentially databases that contain lots of tweaks for you to install. When you add repos to your package manager, you will be able to install the tweaks contained on it, and look for them using the search function.

### What are tweaks?

Tweaks are small modifications that can be installed change the look and/or feel of your device.

Unlike apps, tweaks usually don't come with an app icon, but rather instead an area in the Settings app to change how the tweak acts. Some simpler tweaks might not even have this.

### What is "respringing" or "Restarting Springboard"?

Respringing is essentially restarting the home screen and the iOS UI. Most of the time, you can install a tweak and respring to apply it, without fully rebooting.

You won't have to reinstall an exploit after respringing, however, and you can remain jailbroken.

### What is Recovery Mode?

Recovery Mode is a protection built-in to your device that allows the user to completely start over with a fresh install of iOS. This is especially useful if the installed OS is damaged and cannot start properly, which can happen during jailbreaks, although rare. Entering recovery mode can be done on device and through a computer, and iTunes/Finder utilise recovery mode during normal upgrades and restores.

### What is DFU mode?

DFU mode is a way you can interact with your iOS device without loading the operating system or boot loader. It stands for Device Firmware Upgrade. It's functionally different from recovery mode and is generally intended as a last resort in case things seriously go wrong on your device, however we can use it with <router-link to="/installing-odysseyra1n">Odysseyra1n</router-link> to jailbreak your device instead. Entering DFU mode can only be done on device as it is part of the phone itself.

### What can I do once jailbroken?

- Gain full access to your device's OS
- Get access to a package manager, such as Sileo or Zebra
- Install themes to change the look and feel of your device
- Install tweaks to change how iOS behaves

### What should I know before starting?

- It is **strongly** recommended to backup your device to iCloud, iTunes, or Finder (on macOS Catalina or newer) in case of data loss
- If no issues occur during installation, you will be jailbroken without any data loss
- Keep the device plugged into to a power source or keep the battery fairly charged, so that any unexpected power off can be prevented
- Jailbreaking allows you to unlock your system but can lead to data loss if you damage the OS
- You may be vulnerable to more malware and other security issues after jailbreaking compared to if you were in a non-jailbroken state
- Your device warranty will become void after jailbreaking until it is restored to an un-jailbroken state, which is easy to do

## Blob questions

### What is a blob?

A blob is a file containing a special key specifically for that one device to allow downgrading to a specific firmware. 

Blobs are like golden tickets, but instead a digital signature made by Apple that was saved at the time when the signing window was open. If you possess one (or many), keep them safe.

### How do blobs work?

Blobs can be used in a program named `futurerestore`, to restore to a firmware, provided the SEP (Secure Enclave Processor) firmware and the Baseband firmware are compatible with the target iOS version.

Even though blobs may become incompatible for use of restoring at the current time, it is still advised to save them, in case an opportunity is made available which allows for their usage.

### Can I save them now?

There are two sets of blobs which can be saved at the current time:

- Versions currently signed by Apple
- The version you are currently on

Note that saving blobs for the version you are currently on is dependent on whether or not you have a jailbreak, and may or may not be usable depending on the device you have and how you got to the version you are on at that time.

To see all the possible methods of saving blobs, follow the <router-link to="/saving-blobs">Saving Blobs</router-link> guide.

## Tweak related questions

### Should I use tweaks such as Batchomatic or IAmLazy

You should **not** use these tweaks, due to the fact that they tend to cause issues and instability within your jailbreaking setup. Instead, if you're switching between jailbreaks or updating to a newer iOS version, make a text based tweaklist and then manually reinstall them.

## Other questions

### What is the latest iOS version with a jailbreak for my 64-bit device

While this can be easily figured out by checking <router-link to="/get-started">Get Started</router-link>, in case you don't want to go through get started, here is the following information:

- **A7 iPads**: iOS 12.5.7 (via Odysseyra1n or Chimera)
- **A7/A8 iPhones**: iOS 12.5.7 (via Odysseyra1n or Chimera)
- **iPod Touch (6th Generation)**: iOS 12.5.7 (via Odysseyra1n or Chimera)
- **A8(X) iPads**: iPadOS 15.8.2 (via meowbrek2 or palera1n)
- **iPod Touch (7th Generation)**: iOS 15.8.2 (via Dopamine, meowbrek2, or palera1n)
- **A9/A10 iPhones**: iOS 15.8.2 (via Dopamine, meowbrek2, or palera1n)
- **A9(X) iPads**: iPadOS 16.7.6 (via palera1n)
- **A10(X) iPads**: iPadOS 17.3.1 (via palera1n)
- **A11 iPhones**: iOS 16.7.6 (via palera1n)
- **A12-A14 iPhones**: iOS 16.5.1 (via Dopamine)
- **A12-A14/M1 iPads**: iPadOS 16.5.1 (via Dopamine)
- **A15/A16 iPhones**: iOS 16.5 (via Dopamine)
- **A15/M2 iPads**: iPadOS 16.5 (via Dopamine)

Note that A12 and newer devices running iOS 16.6 or newer do not have a jailbreak, which also inherently means no A17 device has a jailbreak currently.
