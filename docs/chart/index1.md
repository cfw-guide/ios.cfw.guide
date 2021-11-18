---
title: "Home"
description: "A complete guide to PS Vita (TV) custom firmware, from stock to Ensō."
home: true
header:
  overlay_title: PS Vita (TV) Hacks Guide
  overlay_excerpt: A complete guide to PS Vita (TV) custom firmware, from stock to Ensō.
  overlay_image: /assets/images/home-page-feature.jpg
  overlay_filter: 0.5
  overlay_color: 1a1d24
  cta_label: "Get Started"
  cta_url: get-started
---

::: tip
For complete guides to homebrew and custom firmware for other devices, check out [Hacks.Guide](https://hacks.guide).
:::

::: warning
Thoroughly read all of the introductory pages (including this one!) before proceeding.
:::

::: danger
This guide is for retail (consumer purchased; not from the PlayStation Partner Program) consoles _only_!
:::

<!--::: tip
This guide is available in other languages!
Click the language button at the top right of the page to change the language.
Alternatively, click [here](https://crowdin.com/project/vita-guide) to help to keep these translations up to date.
:::-->

## What is Homebrew?

[**Homebrew**](https://en.wikipedia.org/wiki/List_of_homebrew_video_games) usually refers to software that is not authorized by Sony. It allows you to run homebrew games, tools like save editing and backup, and emulators for various older systems.

Running homebrew on your device is 100% free on your device.

## What is Custom Firmware?

**Custom Firmware** ("CFW") enables you to use more advanced hacks that userland homebrew can't easily do, in addition to anything homebrew can do. Essentially all homebrew solutions on the PS Vita (TV) include a CFW of some kind.

For information on how custom firmware works, please see [this post](https://yifan.lu/2017/07/31/henkaku-enso-bootloader-hack-for-vita/) by [Yifan Lu](https://twitter.com/yifanlu).

## What does this guide install?

This guide has the end goal of taking a completely unmodified PS Vita (TV) from stock firmware to custom firmware.

The best CFW solution currently available, Ensō, allows for convenient homebrew access on your device by running an exploit at boot-time to setup the homebrew environment. It is more convenient than other CFW solutions (such as HENkaku or h-encore) as it does not require you to trigger an exploit on your device after every reboot manually.

Ensō is available on all devices with firmware version 3.65 or below, while higher firmware version devices can use h-encore to achieve a similar (if less convenient) result.

## What can I do with Custom Firmware?

+ Customize your home screen with user-created [themes](http://vstema.com/).
+ Use "ROM hacks" for games that you own
+ [Backup, edit, and restore](https://github.com/d3m3vilurr/vita-savemgr) saves for many games.
+ Play games for older systems with various emulators, using RetroArch or other standalone emulators.
+ Dump your game cards to a format you can install, and play them without needing the card.
+ Certain games only: stream live gameplay to your PC wirelessly with Rincheat Streamer.
+ Play your PSP games on your Vita with Adrenaline ePSP CFW

## What do I need to know before starting?

+ **Before beginning the guide, you must know the risks of Vita hacking: EVERY time you modify your system, there is always the potential for an UNRECOVERABLE brick. They're rare, but still a possibility so make sure you follow ALL directions EXACTLY.**
+ This guide will work on all PS Vita, PS Vita Slim, and PS TV devices in all regions on firmwares from 1.03 to 3.73
+ If everything goes according to plan, you will lose no data and end up with everything that you started with (games, PSN Account, saves, etc. will be preserved).
+ **Keep your device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off!**
+ The PS Vita 2000 and PS TV models are essentially identical to the original PS Vita 1000 in terms of software. All steps which say "PS Vita" also apply to other models unless otherwise specified.
+ If you have a PS Vita 1000, you must also have an official Sony memory card (of any size) to follow this guide. This restriction does not apply to the PS Vita 2000 or PS TV as those devices have a built-in memory card.