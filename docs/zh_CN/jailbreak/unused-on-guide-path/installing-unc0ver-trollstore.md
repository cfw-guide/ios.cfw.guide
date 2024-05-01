---
lang: zh_CN
title: 安装 unc0ver (TrollStore)
description: 通过 TrollStore 安装 unc0ver 的指南
permalink: /installing-unc0ver-trollstore
redirect_from:
  - /installing-uncover-trollstore
pkgman: Cydia
extra_contributors:
  - opa334
  - iCraze
---

unc0ver 是一款<router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">半完美越狱工具 (semi-untethered)</router-link>，这意味着设备每次重新启动后都需要重新激活越狱状态

::: warning

要使用此方法，你需要运行 iOS 14.0 - 14.3 或 14.6 - 14.8 的 A12或更新的设备。 如果你是 A11 或更早的设备，或者运行的是 iOS 13.7 或更早版本的设备，请查看 <router-link to="/installing-unc0ver">安装 unc0ver</router-link>

如果你是运行 iOS 14.4 - 14.5.1 的 A12 及更新的设备，请查看 <router-link to="/installing-unc0ver-fugu14">安装 unc0ver (Fugu14)</router-link>

:::

虽然 unc0ver 几乎支持所有运行 iOS 11.0 - 14.8 的设备 (不包括 iOS 12.5.6)，但本方法只适用于运行 iOS 14.0 - 14.3 或 14.6 - 14.8 的 A12或更新的设备

::: warning

如果你已经使用了 Taurine 越狱，请在继续操作之前确保已经正确 <router-link to="/removing-taurine">移除了 Taurine</router-link>

:::

::: warning

unc0ver 在 14.6 - 14.8 上只支持搭载 A12 和 A13 的iPhone

:::

## 下载

- unc0ver
  - 如果在 iOS 14.6 - 14.8上，下载最新版本的 [unc0ver](https://unc0ver.dev/)
    - 如果在 iOS 14.6-14.8 上，下载最新版本的 [u0Launcher](https://github.com/opa334/u0Launcher/releases)
  - 如果在 iOS 14.0 - 14.3 上，下载6.1.1 版本的 [unc0ver](https://unc0ver.dev/downloads/6.1.1/decf7c36cc08dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa)
  - 请将上述文件下载到 **你的 iOS 设备**

## 安装 TrollHelper

1. 打开 Safari
2. 访问 [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
3. 点击 `Install`

一个名为 GTA Car Tracker 的应用程序会被安装至您的设备上，它实际上是TrollHelper

## 安装 TrollStore

1. 打开 GTA Car Tracker
2. 点击 `Install TrollStore`

TrollStore应用程序现在应该会被安装到您的设备

## 安装 Persistence Helper

1. 打开 `GTA Car Tracker`
2. 点击 `Register Persistence Helper`

现在 `GTA Car Tracker` 程序将会变成 Persistence Helper

::: tip

之所以我们要安装 Persistence Helper，是因为每当 iOS 重建图标缓存时，TrollStore 安装的所有应用程序，以及 TrollStore 自己本身，都会打不开或者消失

所以为了解决这个问题，Persistence Helper 可以这种情况下被成功打开，并且可以刷新应用程序注册，以便所有 TrollStore 应用程序重新出现并被成功打开。

:::

## 安装 unc0ver

1. 返回到 TrollStore 的 `Apps` 标签页
2. 点击右上角的 +
3. 转到保存 unc0ver `.ipa` 文件的位置
4. 点击 unc0ver `.ipa`文件
5. 点击 `Install`

unc0ver app现在应该会被安装到您的设备上

::: warning

如果你是 iOS 14.6 - 14.8，你需要对 u0Launcher `.ipa` 文件重复上述步骤

:::

## 运行 unc0ver

1. 重启设备
   - 这不是必要的操作，但推荐做这样以提高成功率
2. 此后立即从您的主屏幕上打开 unc0ver 应用程序
   - 如果你是 iOS 14.6 - 14.8，请打开 u0Launcher 应用程序
3. 打开设置菜单并禁用 `Disable Auto Updates`
   - unc0ver 默认会打开此选项以禁用系统 OTA 升级，但推荐关闭它因为它可能会在我们手动升级系统时造成问题
4. 点击 "Done"
5. 点击 "Jailbreak"
6. 出现提示时重新启动设备
7. 重启后立即从主屏幕上打开 unc0ver
   - 如果你是 iOS 14.6 - 14.8，请打开 u0Launcher 应用程序
8. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

::: warning

如果你遇到了 `rootFS already mounted, delete the OTA update` 的错误，请查看 <router-link to="/troubleshooting/#rootfs-already-mounted">故障排除</router-link> 页面

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择<router-link to="/installing-sileo">安装 Sileo</router-link>

:::
