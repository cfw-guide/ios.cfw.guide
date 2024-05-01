---
lang: zh_CN
title: 安装Taurine (TrollStore)
description: 通过 TrollStore 安装 Taurine 的指南
permalink: /installing-taurine-trollstore
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Taurine 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

::: warning


此方法适用于 A12 及更新的设备。 如果你是A11或更早的设备，请查阅 <router-link to="/installing-taurine">安装 Taurine</router-link> 以获取支持

:::


尽管 Taurine 支持运行 iOS/iPadOS 14.0 - 14.8.1 的所有设备，但本文安装 Taurine 的方法要求 A12 及更新的设备

::: warning


如果你已经使用 unc0ver 越狱了，请确保 <router-link to="/removing-unc0ver">提前</router-link> 移除了该越狱工具

:::


::: warning


对于 1TB 和 2TB 的 M1 iPad Pro，使用*非官方*版本的 Taurine 更加*可靠*。 如果你不愿意使用非官方版本，你可以尝试使用官方版本， 但它的成功率很低

:::


## 下载

- 最新版本的 [Taurine](https://taurine.app/)
    - 对于 1TB 和 2TB 的 M1 iPad Pro，你可以在[这里](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1)下载非官方版，如果不是 M1 iPad Pro 请**不要**使用该版本
    - 请将 Taurine`.ipa` 文件下载到**设备**

## 安装 TrollHelper

1. 打开 Safari
1. 访问 [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
1. 点击 `Install`

一个名为 `GTA Car Tracker` 的应用程序会被安装至您的设备上，它实际上是TrollHelper

## 安装TrollStore

1. 打开 `GTA Car Tracker`
1. 点击 `Register Persistence Helper`
1. 点击 `Install TrollStore`

TrollStore应用程序现在应该会被安装到您的设备

## 安装 Taurine

1. 返回到 TrollStore 的 `Apps` 标签页
1. 点击右上角的 `+`
1. 转到保存 Taurine`.ipa` 文件的位置
1. 点击 Taurine`.ipa` 文件
1. 点击 `Install`

Taurine app现在应该会被安装到您的设备上

## 运行 Taurine

1. 重启设备
    - 这不是必要的操作，但推荐做这样以提高成功率
1. 此后立即从主屏幕上打开 Taurine
1. 点击 "Jailbreak"
1. 出现提示时重新启动设备
1. 重启后立即从主屏幕上打开 Taurine
1. 点击 "Jailbreak"

::: tip


如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::


::: warning


如果你遇到了 `ERR_Jailbreak`、`ERR_Already_Jailbroken`或 `ERR_KernRW` 错误，请查阅 <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">故障排除</router-link> 页面

:::


你已完成越狱并且Sileo已经安装到了主屏幕。 你可以使用Sileo安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

## 安装必要软件包

1. 打开 Sileo
1. 点击底部选项卡 "搜索"
1. 搜索“libiosexec1”
1. 点击“安装”
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击"完成"
1. 搜索"libhooker (common)"、"PreferceLoader"和"RocketBootstrap", 然后点击"安装"将它们添加到队列中
    - 当准备队列时，不要安装队列中的任何东西，直到选择完了所有需要安装的软件包
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击 "重启SpringBoard"