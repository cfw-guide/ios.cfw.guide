---
lang: en_US
title: Installing Odysseyra1n (A8X/A9X) (ChromeOS)
description: Guide to installing Odysseyra1n on ChromeOS on A8X and A9X devices
permalink: /installing-odysseyra1n-chromeos-a8x-a9x
redirect_from:
  - /installing-checkra1n/chromeos/a8x-a9x
  - /installing-checkra1n-chromeos-a8x-a9x
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - stekc
---

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: danger

This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this.

:::

## Downloads (ChromeOS)

- The latest release of [checkra1n](https://checkra.in)
- The custom version of [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Allowing checkra1n to run

1. Move the checkra1n binary which is downloaded to `/usr/local/bin`
    - This can be done by doing the following:
      - press `Ctrl` + `Alt` + `T`
      - run `shell`
      - run `mv ~/Downloads/checkra1n /usr/local/bin/`
1. Run the following command in terminal: `sudo mount -o remount,exec /tmp`
    - You'll need to do this every single time you reboot your ChromeOS device
1. Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.

## Installing checkra1n

1. Open the `pongoOS.zip` file, navigate to `PongoConsolidated.bin`, then extract it.
    - Keep note of where you extract this
1. Run the `checkra1n` binary in CLI mode using this custom pongoOS in the terminal using `TERM=linux sudo checkra1n -c -k [path to PongoConsolidated.bin]`
1. Plug your iOS device into your computer
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should now reboot.

<!--Will probably make this better later on but this will work for now-->

::: tip

While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don't recommend it because of the fact that:

 - People generally tend to have more stability when using Odysseyra1n instead of installing Cydia
 - Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available
 - Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia

:::

## The Odysseyra1n script

1. Open this page (ios.cfw.guide/installing-odysseyra1n-chromeos-a8x-a9x) on your device by typing this URL into Safari
1. Click on [this hyperlink](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771) on your device, and press `Get Shortcut
    - If needed, download the Shortcuts app.
1. When prompted, choose `Open`
1. If necessary, press the `Procursus Bootstraper` icon, then press the Play icon.
1. Press OK to any prompts which do come up

::: tip

If prompted about an untrusted shortcut, run another shortcut, then open `Settings`, go to `Shortcuts`, and then toggle `Allow Untrusted Shortcuts`

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes, packages and more.
