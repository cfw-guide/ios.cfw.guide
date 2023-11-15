---
lang: en_US
title: Installing Odysseyra1n (ChromeOS)
description: Guide to installing Odysseyra1n on ChromeOS
permalink: /installing-odysseyra1n-chromeos
redirect_from:
  - /installing-checkra1n/chromeos
  - /installing-checkra1n-chromeos
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

::: warning

A7 devices will likely fail to successfully jailbreak with checkra1n on Linux, as a result, you'll need to use an older checkra1n version and quickly unplug and replug your device once you see `Right Before Trigger`

:::

::: danger

This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this

:::

## Downloads (ChromeOS)

- The latest release of [checkra1n](https://checkra.in)
  - If you are on an A8X or A9X device, you should instead get the 0.12.2 release of [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)
  - If you are on an A7 device, you should instead get the 0.10.1 release of [checkra1n](https://checkra.in/releases/0.10.1-beta#all-downloads)

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

1. Run the `checkra1n` binary in the terminal using `TERM=linux sudo checkra1n`
    - You may need to run `sudo chmod a+x /usr/local/bin/checkra1n` if the binary doesn't run
    - If you're on an A11 device, you will need to head into `Options`, then enable the `Skip A11 BPR Check` option once it runs
    - If you're on iOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
    - If you're on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
1. Click `Start` and follow all onscreen prompts
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

1. Open this page (ios.cfw.guide/installing-odysseyra1n-chromeos) on your device by typing this URL into Safari
1. Click on [this hyperlink](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771) on your device, and press `Get Shortcut
    - If needed, download the Shortcuts app.
1. When prompted, choose `Open`
1. If necessary, press the `Procursus Bootstraper` icon, then press the Play icon.
1. Press OK to any prompts which do come up

::: tip

If prompted about an untrusted shortcut, run another shortcut, then open `Settings`, go to `Shortcuts`, and then toggle `Allow Untrusted Shortcuts`

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes, packages and more.