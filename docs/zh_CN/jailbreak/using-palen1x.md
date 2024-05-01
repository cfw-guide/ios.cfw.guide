---
lang: zh_CN
title: 使用 palen1x
excerpt: 通过 palen1x 安装 palera1n 的指南
permalink: /using-palen1x
pkgman: sileo
redirect_from:
  - /installing-palen1x
  - /using-palenix
  - /palen1x
  - /palenix
  - /using-palen1x-rootless
extra_contributors:
  - Mineek
  - nebula
  - ssalagginkool
---

::: danger


如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ，那么本指南不适用于你，你需要获取一个可启动的的介质，并按照以下步骤使用它

:::


::: warning


如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::


palen1x 是一个可启动的 Linux 微系统，可以让你快速在兼容设备上运行 palera1n。 palera1n 支持运行 iOS 15.0 及更新版本的 A8(X) - A11 设备

在 A11 设备上，你必须先**禁用你的密码**，并且在启动到非越狱状态或是原生 iOS 系统之前，你将无法使用你的密码或其他 SEP 功能。 SEP 功能包括诸如密码、Face ID/Touch ID和 Apple Pay 等功能

此外如果你的设备是运行在 iOS 16 上的 A11 设备，并且之前曾设置过密码，你需要**抹除所有内容和设置**才能够进行越狱。

## 安装要求

- 一个至少 128MB 大的 U盘
    - 如果你没有 U盘但有其他可支持启动的介质 (如 CD 或 DVD 等)，那么你可以使用它
- 最新版本的 [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

## 安装 Ventoy

1. 下载并解压 `Ventoy.zip` 文件
1. 插入你的 U盘然后运行 `Ventoy2Disk.exe`
1. 选择你刚刚插入的 U盘来作为 palen1x 启动盘
    - 你的 U盘将会被格式化
    - 请确认在操作前备份了数据
1. 点击 `安装` 并确认格式化 U盘
    - 在操作完成之前不要拔掉 U盘
1. 安装完毕后，复制刚才下载的 palen1x iso 文件到 U盘

## 启动 palen1x

1. 重新启动你的电脑，进入主板 BIOS 设置中禁用 Secure Boot，然后选择从你的 U盘启动
    - 具体操作方法因主板不同而异
    - 搜索你的 PC 或主板品牌了解如何进入 BIOS
1. 看到显示器显示 Ventoy 后，回车进入palen1x

## 运行 palera1n

::: warning


如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::


1. Once you have loaded palen1x, select `Shell`
1. Type `palera1n`
1. 按照屏幕上的指示使设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>.

::: tip


A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按 `Control` + `C`
1. Rerun the command that you just ran

You'll need to do this every time you rejailbreak your device as well.

:::


一旦设备启动，主屏幕上打开 palera1n loader 并点击 `Sileo`。 过一段时间后，你会被提示设置一个密码以用于命令行操作，之后 `Sileo` 应该会出现在你的主屏幕上。

::: tip


要重新越狱，只需重新运行刚刚运行的命令，然后重复相关步骤。

Alternatively, you can also install a permanently signed semi-untethered jailbreak, which will allow you to rejailbreak your device without a computer.

If you are using an A9(X) to A11 device on 15.0 to 16.6.1, you can follow <router-link to="/installing-dopamine">Installing Dopamine</router-link> to rejailbreak.

If you are instead using an A8(X) device on 15.0 to 15.8.2, you can follow <router-link to="/installing-meowbrek2">Installing meowbrek2</router-link> 来重新越狱

:::
