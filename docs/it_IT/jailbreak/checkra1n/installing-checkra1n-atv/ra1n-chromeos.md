---
lang: it_IT
title: Installing checkra1n for Apple TV (ChromeOS)
description: Guide to installing checkra1n for Apple TV on ChromeOS
permalink: /it_IT/installing-checkra1n-tv/chromeos
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - Snoolie
  - stekc
  - WhitetailAni
---

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: danger

This guide does not currently account for the Apple TV 4K (1st Generation) at this time.

:::

::: danger

This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this.

:::

## Requirements (ChromeOS)

- L'ultima versione di [checkra1n](https://checkra.in)
- An Apple TV Siri remote (any generation)

![Uno screenshot dell'applicazione checkra1n](/assets/images/checkra1n.png)

## Allowing checkra1n to run

1. Sposta il binary di checkra1n che viene scaricato su `/usr/local/bin`
   - This can be done by doing the following:
     - Press `Ctrl` + `Alt` + `T`
     - Run `shell`
     - Run `mv ~/Downloads/checkra1n /usr/local/bin/`
2. Esegui il seguente comando nel terminale: `sudo mount -o remount,exec /tmp`
   - You'll need to do this every single time you reboot your ChromeOS device
3. Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.

## Installing checkra1n

1. Esegui il file binary di `checkra1n` nel terminale usando `TERM=linux sudo checkra1n`
   - Potrebbe essere necessario eseguire `sudo chmod a+x /usr/local/bin/checkra1n` se il file binary non viene eseguito
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
2. Clicca `Start` e segui le istruzioni a schermo
3. Ora vedrai le istruzioni su come riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
   - Follow the instructions until your device shows a black screen
4. After this, checkra1n should automatically install

Your Apple TV device should now reboot.

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
