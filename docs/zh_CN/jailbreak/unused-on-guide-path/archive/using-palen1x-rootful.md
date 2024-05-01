---
lang: 简体中文
title: 使用 palen1x (Rootful)
excerpt: 通过 palen1x 安装 rootful palera1n 的指南 (归档)
permalink: /archived-palen1x-rootful
pkgman: sileo
extra_contributors:
  - Mineek
  - nebula
  - ssalagginkool
redirect_from:
  - /installing-palera1n-rootful
---

::: danger

本文内容已经归档，我们之后不会对本文做出明显修改

对于寻找维护的 palera1n 指南的用户：我们通常建议按照常规的<router-link to="/using-palen1x">使用 palen1x</router-link> 的指南进行操作，它与 rootful palera1n相比，在几乎所有方面都会有更好的体验，并且是大多数开发者在插件方面的首要支持

如果你现在在使用 rootful palera1n，建议你<router-link to="/removing-palera1n">移除rootful palera1n</router-link> 然后使用 palen1x <router-link to="/using-palen1x">安装 rootless palera1n</router-link>

不管怎样，如果你选择继续安装使用 rootful palera1n，你可能会注意到随着时间的推移相关的支持会越来越少，并且支持的插件也会越来越少

:::

::: danger

如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ，那么本指南不适用于你，你需要获取一个可启动的的介质，并按照以下步骤使用它

:::

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

palen1x 是一个可启动的 Linux 微系统，可以让你快速在兼容设备上运行 palera1n。 palera1n 支持运行 iOS 15 及更新版本的 A8(X) - A11 设备

在 A11 设备上，你必须先**禁用密码**，并且在启动到非越狱状态或是原生 iOS 系统之前，你将无法使用你的密码或其他 SEP 功能。 SEP 功能包括诸如密码、Face ID/Touch ID和 Apple Pay 等功能

此外如果你的设备是运行在 iOS 16 上的 A11 设备，并且之前曾设置过密码，你需要**抹除所有内容和设置**才能够进行越狱

## 安装要求

- 一个至少64MB 大的 U盘
  - 如果你没有 U盘但有其他可支持启动的介质 (如 CD 或 DVD 等)，那么你可以使用它
- 最新版本的 [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

## 安装 Ventoy

1. 下载并解压 `Ventoy.zip` 文件
2. 插入你的 U盘然后运行 `Ventoy2Disk.exe`
3. 选择你刚刚插入的 U盘来作为 palen1x 启动盘
   - 你的 U盘将会被格式化
   - 请确认在操作前备份了数据
4. 点击`安装`并确认格式化 U盘
   - 在操作完成之前不要拔掉 U盘
5. 安装完毕后，复制刚才下载的 palen1x iso 文件到 U盘

## 启动 palen1x

1. 重新启动你的电脑，进入主板 BIOS 设置中禁用 Secure Boot，然后选择从你的 U盘启动
   - 具体操作方法因主板不同而异
   - 搜索你的 PC 或主板品牌了解如何进入 BIOS
2. 看到显示器显示 Ventoy 后，回车进入palen1x

## 运行 palera1n

### 创建 FakeFS/BindFS

::: warning

如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::

1. 一旦成功启动进入 palen1x ，请选择 `palera1n`
2. 选择 `Options`
3. 根据你的设备容量、可用储存空间和系统版本，启用两个选项之一：
   - 16GB 设备应该启用 `Create BindFS`，并且注意你的设备需要至少2-3GB 的可用存储空间
   - 如果你的设备为有2-3GB 以上的可用存储空间的设备(iOS 15)，或者有5-6GB 以上但少于10-15GB 的可用存储空间的设备(iOS 16)，也启用 `Create BindFS`
   - 有不少于10-15GB 的可用储存空间的设备应启用 `Create FakeFS`

::: warning

如果你的设备是其中之一：

- 运行 iOS 15，且没有至少2-3GB 的可用存储空间
- 运行 iOS 16，且没有至少5-3GB 的可用存储空间

你将无法再继续按照本指南操作

如果你确实无法释放足够的存储空间，你应该查看<router-link to="/using-palen1x">使用 palera1n</router-link> ，使用 rootless palera1n

:::

4. `回车` 以保存刚才选择的选项，然后选择 `Start`
   - 请确保设备已经成功连接
5. 按照屏幕上的指示使设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>

你设备应该开始创建 FakeFS 或 BindFS (取决于你刚才的选择)

::: tip

A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按下 `Control` + `C`
2. 键入 `exit`
3. 在 palen1x 中重复刚才的操作

:::

### 使用 palera1n 越狱

1. 当提示 `press enter to exit` 时，回车
2. 等待 palen1x 菜单再次加载后，重新选择 `palera1n`
3. 选择 `Start`
   - 请确保设备已经成功连接
4. 按照屏幕上的指示使设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>

你的设备现在应该开始进行越狱

::: tip

A9(X) 及更早设备中存在一个问题，它们在运行 pongoOS 中会卡住。 要解决这个问题，你需要完成以下步骤：

1. 在终端窗口中，按下 `Control` + `C`
2. 键入 `exit`
3. 在 palen1x 中重复刚才的操作

:::

一旦设备启动，主屏幕上打开 palera1n loader 并点击 `Install`。 完成后你会被提示注销，然后 `Sileo` 应该会出现在主屏幕上
