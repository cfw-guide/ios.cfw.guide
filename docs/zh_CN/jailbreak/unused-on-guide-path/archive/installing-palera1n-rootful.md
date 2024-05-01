---
lang: zh_CN
title: 安装 palera1n (Rootful)
description: 安装 rootful palera1n 的指南 (归档)
permalink: /archived-palera1n-rootful
pkgman: sileo
extra_contributors:
  - Mineek
  - nebula
redirect_from:
  - /using-palen1x-rootful
---

::: danger

本文内容已经归档，我们之后不会对本文做出明显修改

对于寻找维护的 palera1n 指南的用户：我们通常建议按照常规的<router-link to="/installing-palera1n">安装 palera1n</router-link> 的指南进行操作，它与 rootful palera1n相比，在几乎所有方面都会有更好的体验，并且是大多数开发者在插件方面的首要支持

如果你现在在使用 rootful palera1n，建议你 <router-link to="/removing-palera1n">移除rootful palera1n</router-link> 然后 <router-link to="/installing-palera1n">安装 rootless palera1n</router-link>

不管怎样，如果你选择继续安装使用 rootful palera1n，你可能会注意到随着时间的推移相关的支持会越来越少，并且支持的插件也会越来越少

:::

palera1n 是一款正在开发的越狱工具，它修补系统内核以使用 Sileo 来安装插件。 目前 palera1n 支持运行 iOS 15 及更新版本的 A11 (iPhone X) 及更早的设备，并且有一些注意事项

在 A11 设备上，你必须先**禁用密码**，并且在启动到非越狱状态或是原生 iOS 系统之前，你将无法使用你的密码或其他 SEP 功能。 SEP 功能包括诸如密码、Face ID/Touch ID和 Apple Pay 等功能

此外如果你的设备是运行在 iOS 16 上的 A11 设备，并且之前曾设置过密码，你需要**抹除所有内容和设置**才能够进行越狱

::: warning

如果你在使用旧版不完美越狱 (tethered) 的 palera1n，请在操作前<router-link to="/removing-palera1n">移除 palera1n</router-link>

:::

::: tip

如果你使用的是 Windows，你应该<router-link to="/archived-palen1x-rootful">使用 palen1x-rootful</router-link>

:::

## 下载

适合你操作系统的 [palera1n](https://github.com/palera1n/palera1n/releases)

- macOS 用户应选择 `palera1n-macos-universal`
- Linux 用户应该选择符合你计算机架构的版本
  - 通常是 `palera1n-linux-x86_64` 。 如果你不确定请选择它
  - 如果你使用的是32位计算机，请选择 `palera1n-linux-x86`
  - 如果你使用的是 ARM 架构的计算机(例如树莓派)，32位请选择 `palera1n-linux-armel` ；64位请选择`palera1n-linux-arm64`

## 安装越狱

请选择你的操作系统：

:::::: tabs

:::: tab name="macOS" :default="true"

### 安装 palera1n

1. 对终端启用完全磁盘访问(只需要完成一次)

   - macOS Montery 及更早版本：系统偏好设置 → 安全性和隐私 → 隐私 → 完全磁盘访问
   - macOS Ventura 及更新版本：系统设置 → 隐私与安全性 → 完全磁盘访问

   如果没有在列表中看到终端，请点击 + 然后在 应用程序 → 实用工具 中选择终端
2. 如果你使用的是 macOS Monterey 12.2.1 或更早的版本，请运行一下指令(只需要完成一次)：
   ```
   sudo python -m ensurepip
   sudo python -m pip install setuptools xattr==0.6.4
   ```
3. 打开终端窗口然后 `cd` 到你刚才下载 palera1n 的文件目录(通常是`cd ~/Downloads`)
4. 运行 `sudo mkdir -p /usr/local/bin`
5. 运行 `sudo mv ./palera1n-macos-universal /usr/local/bin/palera1n`
   - 将 `/palera1n-macos-universal` 替换为你下载的版本
6. 运行 `sudo xattr -c /usr/local/bin/palera1n`
7. 运行`sudo chmod +x /usr/local/bin/palera1n`

### 运行 palera1n

::: warning

如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::

::: tip

如果你正在使用的是 Apple Silicon 的 Mac 并且使用了 USB-C 接口，你需要在运行日志出现 `Checkmate!` 后重新插拔一次设备

:::

1. 运行 `palera1n <insert arguments here>`
   - 16GB 设备应该使用 `palera1n -B -f`，并且注意你的设备需要至少2-3GB 的可用存储空间
   - 有2-3GB以上可用存储空间但少于10-15GB 的可用存储空间的设备也可以使用`palera1n -B -f`，但仅限于运行 iOS 15 的设备
   - iOS 16 设备或有超过10-15GB 的可用存储空间的设备应该使用 `palera1n -c -f`
   - 请确保在输入此命令时设备已经成功连接

::: warning

如果你的设备是其中之一：

- 运行 iOS 15，且没有至少2-3GB 的可用存储空间
- 运行 iOS 16，且没有至少10-15GB 的可用存储空间

你将无法再继续按照本指南操作

如果你确实无法释放足够的存储空间，你可以查看<router-link to="/installing-palera1n-rootless">安装 palera1n (Rootless)</router-link> ，使用 rootless palera1n

:::

2. 准备就绪后，`回车`，并按屏幕指示进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>

你设备应该开始创建 FakeFS 或 BindFS (取决于你具体输入的命令)

3. 你的设备创建 FakeFS 或 BindFS 后，运行 `palera1n -f`

::: tip

A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按下 `Control` + `C`
2. 重新运行刚刚运行的命令

每次重新越狱时，都需要这样做

:::

::::

:::: tab name="Linux"

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
2. 运行 `sudo systemctl stop usbmuxd`
3. 运行 `sudo usbmuxd -f -p`
4. 打开新的终端窗口然后 `cd` 到你刚才下载 palera1n 的文件目录(通常是`cd ~/Downloads`)
5. 运行 `sudo mv ./palera1n-linux-* /usr/bin/palera1n`
6. 运行 `sudo chmod +x /usr/bin/palera1n`

### 运行 palera1n

1. 运行 `sudo palera1n <insert arguments here>`
   - 16GB 设备应该使用 `sudo palera1n -B -f`，并且注意你的设备需要至少2-3GB 的可用存储空间
   - 有2-3GB以上可用存储空间但少于10-15GB 的可用存储空间的设备也可以使用`sudo palera1n -B -f`，但仅限于运行 iOS 15 的设备
   - iOS 16 设备或有超过10-15GB 的可用存储空间的设备应该使用 `sudo palera1n -B -f`
   - 请确保在输入此命令时设备已经成功连接

::: warning

如果你的设备是其中之一：

- 运行 iOS 15，且没有至少2-3GB 的可用存储空间
- 运行 iOS 16，且没有至少10-15GB 的可用存储空间

你将无法再继续按照本指南操作

如果你确实无法释放足够的存储空间，你可以查看<router-link to="/installing-palera1n">安装 palera1n</router-link> ，使用 rootless palera1n

:::

2. 准备就绪后，`回车`，并按屏幕指示进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>

你设备应该开始创建 FakeFS 或 BindFS (取决于你具体输入的命令)

3. 你的设备创建 FakeFS 或 BindFS 后，运行 `sudo palera1n -f`

::: tip

A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按下 `Control` + `C`
2. 重新运行刚刚运行的命令

每次重新越狱时，都需要这样做

:::

::::

::::::

一旦设备启动，主屏幕上打开 palera1n loader 并点击 `Install`。 完成后你会被提示注销，然后 `Sileo` 应该会出现在主屏幕上

::: tip

无论你刚刚运行了什么指令，若要重新越狱，只需要运行 `palera1n -f` 然后重复其它适用的步骤

::: <br>
To revert the jailbreak, follow <router-link to="/removing-palera1n/">Removing palera1n</router-link>.
