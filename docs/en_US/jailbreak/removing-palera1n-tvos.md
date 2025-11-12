---
lang: en_US
title: Removing palera1n (tvOS)
description: Guide to removing palera1n (tvOS)
permalink: /removing-palera1n-tvos
redirect_from: /removing-palerain-tvos
---

If you want to remove palera1n, you can use the commands below on a PC/Mac while your device is connected. To remove the jailbreak, you **do not have to restore your device**.


::: tip

This guide assumes you are using a computer that already has palera1n installed. You can use the same computer you used before to install palera1n on your device. If you are using a different computer that does not have palera1n installed, follow the <router-link to="/installing-palera1n-tvos">Installing palera1n (tvOS)</router-link> guide to download palera1n, then return to this page when you reach the "Running palera1n" section (but do not follow the steps in that section).

:::


## Requirements

- An Apple TV Siri remote (any generation)
- If you have an Apple TV HD, you will need a USB-C cable.
- If you have an Apple TV 4K, you will also need three cables:
  - A GoldenEye or Foxlink X892 cable
  - An Alex DCSD cable (needed to enter DFU mode; using a Lightning cable with the GoldenEye cable on its own won't work)
  - A standard Lightning cable
  - It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.

## Uninstalling

Please select your operating system:

:::::: tabs

:::: tab name="macOS" :default="true"

 
::: details Apple TV 4K instructions
1. Plug your GoldenEye/Foxlink cable into the Ethernet port on your Apple TV.
1. Plug your DCSD cable into the Lightning connector on the GoldenEye/Foxlink cable upside down—the side labeled "this side up" or similar should face down; otherwise, it might not enter DFU mode.
1. Finally, plug the USB end of your DCSD cable into your computer or any power source.
1. Restart your Apple TV with both cables plugged in to put it into DFU mode.
1. Once in DFU mode, unplug your DCSD cable (**not** your GoldenEye/Foxlink cable, keep that plugged in) and plug in your Lightning cable, with the other end connected to your computer.
1. Run the correct command depending on your initial jailbreak type:
   - For a **rootful** jailbreak, run: `palera1n -cf --force-revert`
   - For a **rootless** jailbreak, run: `palera1n -l --force-revert`

Your device should now be unjailbroken and boot into a stock environment.
:::

::: details Apple TV HD instructions
1. Plug your USB-C cable into the USB-C diagnostic port on the back of the device and the other end into your computer.
1. Run the correct command depending on your initial jailbreak type:
   - For a **rootful** jailbreak, run: `palera1n -cf --force-revert`
   - For a **rootless** jailbreak, run: `palera1n -l --force-revert`
1. When ready, press `Enter` and follow the on-screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

Your device should now be unjailbroken and boot into a stock environment.
:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard.
1. Rerun the command that you just ran.

:::

::::

:::: tab name="Linux"


::: danger

If you are trying to use Virtual Machine software from Windows (e.g., VirtualBox, VMWare, Windows Subsystem for Linux, etc.), you will not succeed with this guide.

:::

::: warning

Ubuntu-based Linux distributions are known to have issues successfully running palera1n.

If you are using an Ubuntu-based Linux distribution and run into issues, it's recommended to either use another Linux distribution or follow <router-link to="/using-palen1x-tvos">Using palen1x (tvOS)</router-link> instead.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::


::: details Apple TV 4K instructions
1. Plug your GoldenEye/Foxlink cable into the Ethernet port on your Apple TV.
1. Plug your DCSD cable into the Lightning connector on the GoldenEye/Foxlink cable upside down—the side labeled "this side up" or similar should face down; otherwise, it might not enter DFU mode.
1. Finally, plug the USB end of your DCSD cable into your computer or any power source.
1. Restart your Apple TV with both cables plugged in to put it into DFU mode.
1. Once in DFU mode, unplug your DCSD cable (**not** your GoldenEye/Foxlink cable, keep that plugged in) and plug in your Lightning cable, with the other end connected to your computer.
1. Run the correct command depending on your initial jailbreak type:
   - For a **rootful** jailbreak, run: `palera1n -cf --force-revert`
   - For a **rootless** jailbreak, run: `palera1n -l --force-revert`

Your device should now be unjailbroken and boot into a stock environment.
:::

::: details Apple TV HD instructions
1. Plug your USB-C cable into the USB-C diagnostic port on the back of the device and the other end into your computer.
1. Run the correct command depending on your initial jailbreak type:
   - For a **rootful** jailbreak, run: `palera1n -cf --force-revert`
   - For a **rootless** jailbreak, run: `palera1n -l --force-revert`
1. When ready, press `Enter` and follow the on-screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

Your device should now be unjailbroken and boot into a stock environment.
:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard.
1. Rerun the command that you just ran.

:::

::::

:::: tab name="palen1x"

::: tip

If you no longer have your palen1x USB drive, you can prepare another one by following the steps on <router-link to="/using-palen1x-tvos">Using palen1x (tvOS)</router-link> up to, but not including, the "Running palera1n" section.

:::

::: details Apple TV 4K instructions
1. Once you have loaded palen1x, select `Shell`.
1. Plug your GoldenEye/Foxlink cable into the Ethernet port on your Apple TV.
1. Plug your DCSD cable into the Lightning connector on the GoldenEye/Foxlink cable upside down—the side labeled "this side up" or similar should face down; otherwise, it might not enter DFU mode.
1. Finally, plug the USB end of your DCSD cable into your computer or any power source.
1. Restart your Apple TV with both cables plugged in to put it into DFU mode.
1. Once in DFU mode, unplug your DCSD cable (**not** your GoldenEye/Foxlink cable, keep that plugged in) and plug in your Lightning cable, with the other end connected to your computer.
1. Run the correct command depending on your initial jailbreak type:
   - For a **rootful** jailbreak, run: `palera1n -cf --force-revert`
   - For a **rootless** jailbreak, run: `palera1n -l --force-revert`

Your device should now be unjailbroken and boot into a stock environment.
:::

::: details Apple TV HD instructions
1. Once you have loaded palen1x, select `Shell`.
1. Plug your USB-C cable into the USB-C diagnostic port on the back of the device and the other end into your computer.
1. Run the correct command depending on your initial jailbreak type:
   - For a **rootful** jailbreak, run: `palera1n -cf --force-revert`
   - For a **rootless** jailbreak, run: `palera1n -l --force-revert`
1. When ready, press `Enter` and follow the on-screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

Your device should now be unjailbroken and boot into a stock environment.
:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard.
1. Rerun the command that you just ran.

:::

::::

::::::