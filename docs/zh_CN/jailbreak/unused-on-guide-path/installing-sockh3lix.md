---
lang: zh_CN
title: 安装 sockH3lix
description: 安装 sockH3lix 的指南
permalink: /installing-sockh3lix
redirect_from:
  - /installing-sockhelix
  - /sockhelix
  - /sockh3lix
  - /sh3
  - /she
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - hopolapopola
---

SockH3lix 支持所有运行 iOS 10.0 - 10.3.3 的大部分64位设备

SockH3lix 同时也支持运行 iOS 10.3.3 - 10.3.4 的 iPhone 5。 但它不支持 A10 设备，如 iPhone 7 和 iPad Pro (第二代)

请注意，sockH3lix 越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后重新利用漏洞来激活越狱。 下文也会说明这点

由于免费开发者账号自签限制，大多数情况下你需要每 7 天用电脑重新安装 sockH3lix app到你的设备上

我们将使用 Sideloadly 安装应用程序到您的设备。

::: warning

iPhone 5使用 sockH3lix 可能会遇到插件无法正常载入的问题。 如果你遇到了这个问题，你需要恢复设备，并查看 <router-link to="/installing-kok3shiX">安装 kok3shiX</router-link> 重新越狱

:::

## 下载

- 最新版本的 [sockH3lix](https://github.com/SongXiaoXi/sockH3lix/releases/latest)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽sockH3lix `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`VPN与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

sockH3lix app 现在可以从主屏幕中打开

## 运行 sockH3lix

1. 从主屏幕中打开 sockH3lix
2. 点击 "Jailbreak"

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::
