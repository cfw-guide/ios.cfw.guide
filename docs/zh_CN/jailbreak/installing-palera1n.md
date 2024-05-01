---
lang: zh_CN
title: 安装 palera1n
description: palera1n 安装指南
permalink: /installing-palera1n
pkgman: sileo
redirect_from:
  - /installing-palerain
  - /palera1n
  - /palerain
  - /installing-palera1n/linux
  - /installing-palera1n/macos
  - /installing-palera1n/windows
  - /installing-palera1n-rootless
extra_contributors:
  - Mineek
  - nebula
---

palera1n 是一款仍在开发中的越狱工具，适用于运行iOS 15.0 及更高版本的 A11 (Phone X) 及更早设备，但在 A11 设备上有一些其它注意事项。

在 A11 设备上，你必须先**禁用你的密码**，并且在启动到非越狱状态或是原生 iOS 系统之前，你将无法使用你的密码或其他 SEP 功能。 SEP 功能包括诸如密码、Face ID/Touch ID和 Apple Pay 等功能。

此外如果你的设备是运行在 iOS 16 上的 A11 设备，并且之前曾设置过密码，你需要**抹除所有内容和设置**才能够进行越狱。

::: warning


如果你正在使用一个旧版本的 palera1n (tethered) ，你需要： <router-link to="/removing-palera1n-legacy">在操作前</router-link> 提前移除 palera1n

:::


::: warning


如果您正在使用Windows，你 <router-link to="/using-palen1x">应该</router-link> 使用 palen1x

:::


## 安装越狱

请选择您的操作系统：

:::::: tabs


:::: tab name="macOS" :default="true"


### 安装 palera1n

1. 打开终端窗口
1. 运行 `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### 运行 palera1n

::: warning


如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::


::: tip


如果你正在使用的是 Apple Silicon 的 Mac 并且使用了 USB-C 接口，你需要在运行日志出现 `Checkmate!` 后重新插拔一次设备

:::


1. 运行 `palera1n`
    - 请确保在输入此命令时设备已经成功连接
1. 准备就绪后，`回车`，并按屏幕指示进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>.

::: tip


A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按 `Control` + `C`
1. 重新运行刚刚运行的命令

每次重新越狱时，都需要这样做

:::


:
:::


:::: tab name="Linux"


::: danger


Depending on the Linux distribution you are using, you may run into issues with the latest version (2.0.0b9) of palera1n.

If you do run into issues, you have four options:
- 搞一个 Mac 使用 macOS
- Try to use a different Linux distribution instead (e.g. Ubuntu).
- <router-link to="/using-palen1x">使用 palen1x，</router-link> 因为 palen1x 没这些问题
- **If you are trying to jailbreak a 15.0 to 16.7.4 device**, you can manually install [palera1n 2.0.0b7](https://github.com/palera1n/palera1n/releases/tag/v2.0.0-beta.7) instead.

:::


::: danger


如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ，那么本指南不适用于你。

:::


::: warning


如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::


### 安装 palera1n

::: warning


如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::


1. 打开终端窗口
1. 运行 `sudo systemctl stop usbmuxd`
1. 运行 `sudo usbmuxd -f -p`
1. 打开新的终端窗口
1. 运行 `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### 运行 palera1n

1. 运行 `sudo palera1n`
    - 请确保在输入此命令时设备已经成功连接
1. 准备就绪后，`回车`，并按屏幕指示进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>.

::: tip


A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按 `Control` + `C`
1. 重新运行刚刚运行的命令

每次重新越狱时，都需要这样做

:::


:
:::


:::
:::


一旦设备启动，主屏幕上打开 palera1n loader 并点击 `Sileo`。 过一段时间后，你会被提示设置一个密码以用于命令行操作，之后 `Sileo` 应该会出现在你的主屏幕上。

::: tip


要重新越狱，只需重新运行刚刚运行的命令，然后重复相关步骤。

Alternatively, you can also install a permanently signed semi-untethered jailbreak, which will allow you to rejailbreak your device without a computer.

If you are using an A9(X) to A11 device on 15.0 to 16.6.1, you can follow <router-link to="/installing-dopamine">Installing Dopamine</router-link> to rejailbreak.

If you are instead using an A8(X) device on 15.0 to 15.8.2, you can follow <router-link to="/installing-meowbrek2">Installing meowbrek2</router-link> 来重新越狱

:::
