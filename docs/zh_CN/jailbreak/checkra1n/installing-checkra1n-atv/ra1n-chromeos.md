---
lang: zh_CN
title: Installing checkra1n for Apple TV (ChromeOS)
description: Guide to installing checkra1n for Apple TV on ChromeOS
permalink: /installing-checkra1n-tv/chromeos
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - Snoolie
  - stekc
  - WhitetailAni
---

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: danger

This guide does not currently account for the Apple TV 4K (1st Generation) at this time.

:::

::: danger

这是一篇实验性很强的指南，在操作中有些具体事项可能没有被直接提及。 因此我们更加建议使用其它平台

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this.

:::

## Requirements (ChromeOS)

- 最新版本的 [checkra1n](https://checkra.in)
- An Apple TV Siri remote (any generation)

![checkra1n 截图](/assets/images/checkra1n.png)

## 准备工作

1. 将下载的 checkra1n 二进制文件移动到 `/usr/local/bin`
   - 可以像下面这样做：
     - Press `Ctrl` + `Alt` + `T`
     - Run `shell`
     - Run `mv ~/Downloads/checkra1n /usr/local/bin/`
2. 在终端中运行：`sudo mount -o remount,exec /tmp`
   - 每次重启ChromeOS 后，你都需要这样做
3. 每次需要在 ChromeOS 中使用越狱时，你都需要插入你的设备并手动进入恢复模式

## 安装 checkra1n

1. 在终端中使用 `TERM=linux sudo checkra1n` 运行 `checkra1n` 二进制文件。
   - 如果不成功你可能需要运行 `sudo chmod a+x /usr/local/bin/checkra1n`
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
2. 点击 `Start` 并根据屏幕指示操作
3. 现在将会有提示指引你将设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>，点击 `Start` 开始
   - 跟随指示，直到设备黑屏
4. 然后 checkra1n 应该会自动安装

Your Apple TV device should now reboot.

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
