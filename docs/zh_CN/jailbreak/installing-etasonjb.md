---
lang: 简体中文
title: 安装 EtasonJB
description: 安装 EtasonJB 的指南
permalink: /installing-etasonjb
redirect_from:
  - /etasonjb
  - /es
  - /eta
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - TheHacker894
---

EtasonJB 支持运行 iOS 8.4.1 的32位设备

与大多数现代越狱不同的是，使用 EtasonJB 越狱后的设备在重启后依然能够保持越狱状态(这也被称为“完美越狱)。 这意味这在设备每次重启后无需再次运行 EtasonJB 以激活越狱状态

我们会使用 Sideloadly 来把 EtasonJB app 安装到设备上

## 下载

- 最新版本的 [EtasonJB](https://etasonjb.tihmstar.net/)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
1. 将您的 iOS 设备插入您的电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽EtasonJB`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的开发人员帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击 `信任<你的 Apple ID>`

EtasonJB 现在可以从主屏幕中打开

## 运行 EtasonJB

1. 从主屏幕中打开 EtasonJB
1. 点击 `Etason JB!`

::: warning

如果你的设备在运行 Electra 后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
