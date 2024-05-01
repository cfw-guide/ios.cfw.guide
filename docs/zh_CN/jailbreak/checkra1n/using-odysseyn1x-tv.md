---
lang: zh_CN
title: Using Odysseyn1x (Apple TV)
excerpt: Guide to installing checkra1n for Apple TV via Odysseyn1x
permalink: /using-odysseyn1x-tv
0pkgman: nito.tv
redirect_from:
  - /installing-odysseyn1x-tv
  - /using-odysseynix-tv
  - /odysseyn1x-tv
  - /odysseynix-tv
extra_contributors:
  - stekc
  - flowerible
  - bbaovanc
  - Tanbeer191
  - TheHacker894
  - Snoolie
  - itsnebulalol
  - WhitetailAni
---

::: danger

如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ，那么本指南不适用于你，你需要获取一个可启动的的介质，并按照以下步骤使用它

:::

::: danger

This guide does not currently account for the Apple TV 4K (1st Generation) at this time.

:::

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

Odysseyn1x 是一个可启动的 Linux 微系统，可以让你快速在兼容设备上运行 palera1n。 checkra1n is capable of jailbreaking the Apple TV HD and Apple TV 4K (1st Generation) on firmwares 12.0 to 14.7.

## 安装要求

- 一个至少 256MB 大的 U盘
  - 如果你没有 U盘但有其他可支持启动的介质 (如 CD 或 DVD 等)，那么你可以使用它
- 最新版本的 [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases)
  - 如果是 A7 设备，你应该使用 v2.12-checkra1n-0.10.1 版 [Odysseyn1x](https://github.com/raspberryvonie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1)
  - 对于64位计算机，请下载 "AMD64" 版本
    - "AMD64" 只是架构的名称而并非 AMD 处理器的计算机！
  - 对于32位计算机，请下载 "i686" 版本
- An Apple TV Siri remote (any generation)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

![Odysseyn1x 的菜单截图](/assets/images/Odyseyn1x.png)

## 安装 Ventoy

1. 下载并解压 `Ventoy.zip` 文件
2. 插入你的 U盘然后运行 `Ventoy2Disk.exe`
3. 选择你刚刚插入的 U盘来作为 Odysseyn1x 启动盘
   - 你的 U盘将会被格式化
   - 请确认在操作前备份了数据
4. 点击`安装`并确认格式化 U盘
   - 在操作完成之前不要拔掉 U盘
5. 安装完毕后，复制刚才下载的 Odysseyn1x iso 文件到 U盘

## 启动 Odysseyn1x

1. 重新启动你的电脑，进入主板 BIOS 设置中禁用 Secure Boot，然后选择从你的 U盘启动
   - 具体操作方法因主板不同而异
   - 搜索你的 PC 或主板品牌了解如何进入 BIOS
2. 看到显示器显示 Ventoy 后，回车进入 Odysseyn1x

## 运行 checkra1n

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. 一旦成功启动进入 odysseyn1x ，请选择 `checkra1n`
   - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions`
2. 点击 `Start` 并根据屏幕指示操作
3. 现在将会有提示指引你将设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>，点击 `Start` 开始
   - 跟随指示，直到设备重启黑屏
4. 设备启动后，你可以退出 checkra1n，但不要关闭电脑

:::

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
