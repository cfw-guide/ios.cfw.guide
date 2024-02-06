---
lang: it_IT
title: Installing checkra1n for Apple TV (macOS)
description: Guide to installing checkra1n for Apple TV on macOS
permalink: /it_IT/installing-checkra1n-tv/macos
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - Snoolie
  - WhitetailAni
---

## Requisiti

- L'ultima versione di [checkra1n](https://checkra.in)
- An Apple TV Siri remote (any generation)
- If you have an Apple TV 4K, you will also need two cables:
  - A GoldenEye or Foxlink X892 cable
  - An Alex DCSD cable
  - It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.

![Uno screenshot dell'applicazione checkra1n](/assets/images/checkra1n.png)

## Installing checkra1n

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, a USB-C to USB-A adapter.

:::

::::: tabs

:::: tab name="Apple TV HD" :default="true"

1. Open checkra1n on your Mac
2. Plug your Apple TV device into your Mac
3. Clicca su `Start` -> `Next` su checkra1n
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option before clicking Start
   - Your device will be put into recovery mode automatically
4. Ora vedrai le istruzioni su come riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
   - Follow the instructions until your device shows a black screen
5. After this, checkra1n should automatically install to your Apple TV

::::

:::: tab name="Apple TV 4K (1st generation)" :default="false"

1. Connect the GoldenEye to your Apple TV's Ethernet port
2. The Alex cable will have text that says "Bacon Side Up" on it; orient this to face towards the side of the Lightning port farthest from the edge of the GoldenEye, then connect the two
3. Connect the other end of the Alex cable to your Mac, and then power cycle the Apple TV
   - You can do this by unplugging the power cord or by holding the Menu and TV buttons
4. The Apple TV should automatically enter DFU.
5. Ensure the checkra1n app is in `/Applications`
6. Open a Terminal window and run the command `/Applications/checkra1n.app/Contents/MacOS/checkra1n -c`
7. After this, checkra1n will run

::::

::::::

Your Apple TV device should now reboot.

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
