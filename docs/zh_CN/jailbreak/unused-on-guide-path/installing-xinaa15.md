---
lang: zh_CN
title: 安装 XinaA15
description: 安装 XinaA15 的指南
permalink: /installing-xinaa15
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
redirect_from:
  - /xinaa15-archive
---

XinaA15 是一款<router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">半完美越狱工具 (semi-untethered)</router-link>，这意味着设备每次重新启动后都需要重新激活越狱状态

::: warning

XinaA15 仅支持运行 iOS 15.0 - 15.4.1 的A12或更新的设备

:::

## 下载

下载下面的 `.ipa`文件到 **你的 iOS 设备**：

- The latest version of [XinaA15](https://zhuxinlang.github.io/XinaA12.2.1.5.2.ipa)

## 安装 TrollHelper

1. 打开 Safari
2. 访问 [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
3. 点击 `Install`

一个名为 GTA Car Tracker 的应用程序会被安装至您的设备上，它实际上是TrollHelper

## 安装 TrollStore

1. 打开 `GTA Car Tracker`
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

## 安装 XinaA15

1. 返回到 TrollStore 的 `Apps` 标签页
2. 点击右上角的 +
3. 转到保存 XinaA15 `.ipa` 文件的位置
4. 点击 XinaA15 `.ipa`文件
5. 点击 `Install`

XinaA15 app现在应该会被安装到您的设备上

## 运行 XinaA15

1. 重启设备
   - 这不是必要的操作，但推荐做这样以提高成功率
2. 此后立即从您的主屏幕上打开 XinaA15 应用程序
3. 点击左上角的设置图标
4. 禁用安装 Saily 的选项
5. 返回
6. 点击"越狱"，然后点击"开始越狱"，设备将在一段时间后自动重启
7. 重启后立即从主屏幕上打开 XinaA15

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

Sileo现在应该被成功安装了。 你可以使用 Sileo 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
