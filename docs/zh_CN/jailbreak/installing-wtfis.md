---
lang: zh_CN
title: 安装 wtfis
description: 安装 wtfis 的指南
permalink: /installing-wtfis
redirect_from:
  - /wtfis
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - TheHacker894
  - hopolapopola
---

wtfis 支持运行 iOS 8.0 - 8.4.1 的所有64位设备

与大多数现代越狱不同的是，wtfis 越狱后的设备在重启后依然会保持越狱状态(也被称为 "[完美越狱](/types-of-jailbreak/#untethered-jailbreaks)"). 这意味这在设备每次重启后无需再次运行 wtfis 以激活越狱状态

::: warning

wtfis 仍处**测试版本**，如果你不想使用测试版软件，请等待直到 wtfis 正式版推出或使用其它越狱工具

:::

## 下载

- 最新版本的 [wtfis](https://github.com/TheRealClarity/wtfis/releases/latest)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上

![Sideloadly 截图(Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
2. 将您的 iOS 设备插入您的电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽wtfis `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

wtfis app 现在可以从主屏幕中打开

## 运行 wtfis

1. 从主屏幕中打开 wtfis
   - 如果提示，请允许通知权限
2. 点击 "Go"

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
