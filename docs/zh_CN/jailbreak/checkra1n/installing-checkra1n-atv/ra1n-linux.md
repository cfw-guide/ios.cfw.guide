---
lang: zh_CN
title: Installing checkra1n for Apple TV (Linux)
description: Guide to installing checkra1n for Apple TV on Linux
permalink: /installing-checkra1n-tv/linux
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - Snoolie
  - WhitetailAni
---

::: danger

如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ， 那么本指南不适用于你，你应该<router-link to="/using-odysseyn1x">使用 Odysseyn1x</router-link>

:::

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

## Requirements (Linux)

- 最新版本的 [checkra1n](https://checkra.in)
- An Apple TV Siri remote (any generation)
- If you have an Apple TV 4K, you will also need two cables:
  - A GoldenEye or Foxlink X892 cable
  - An Alex DCSD cable
  - It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.

![checkra1n 截图](/assets/images/checkra1n.png)

## 安装 checkra1n

::::: tabs

:::: tab name="Apple TV HD" :default="true"

::: tip

checkra1n 对基于Debian的 Linux 发行版(如Ubuntu) 提供了原生支持。 It's recommended that you follow [specific instructions](https://checkra.in/linux) provided by the checkra1n team themselves.

:::

1. 在终端中使用 `./checkra1n` 运行 `checkra1n` 二进制文件。
   - 如果不成功你可能需要运行 `sudo chmod a+x ./checkra1n`
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
2. Plug your Apple TV device into your computer
3. 点击 `Start` -> `Next`
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option before clicking Start
   - 你的设备将会自动进入恢复模式
4. 现在将会有提示指引你将设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>，点击 `Start` 开始
   - 跟随指示，直到设备黑屏
5. After this, checkra1n should automatically install to your Apple TV

::::

:::: tab name="Apple TV 4K (1st generation)" :default="false"

1. Connect the GoldenEye to your Apple TV's Ethernet port
2. The Alex cable will have text that says "Bacon Side Up" on it; orient this to face towards the side of the Lightning port farthest from the edge of the GoldenEye, then connect the two
3. Connect the other end of the Alex cable to your computer, and then power cycle the Apple TV
   - You can do this by unplugging the power cord or by holding the Menu and TV buttons
4. The Apple TV should automatically enter DFU.
5. Run the `checkra1n` binary in the terminal using `./checkra1n -c`
   - 如果不成功你可能需要运行 `sudo chmod a+x ./checkra1n`
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
6. After this, checkra1n should automatically install.

::::

::::::

Your Apple TV device should now reboot.

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
