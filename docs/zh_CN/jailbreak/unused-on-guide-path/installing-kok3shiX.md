---
lang: zh_CN
title: 安装 kok3shiX
description: 安装 kok3shiX 的指南
permalink: /installing-kok3shiX
redirect_from:
  - /kok3shiX
  - /kokeshiX
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - hopolapopola
---

kok3shiX 支持运行 iOS 10.3 - 10.3.4 的所有32位设备

请注意，kok3shiX 越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后重新利用漏洞来激活越狱。 下文也会说明这点

由于免费开发者账号自签限制，大多数情况下你需要每 7 天用电脑重新安装kok3shiX app到你的设备上

我们将使用 Sideloadly 安装应用程序到您的设备。

::: warning

kok3shiX 还在早期开发测试阶段，因此你可能会遇到更多问题。 请在操作前备份数据

或者，你可以选择 <router-link to="/installing-socket">安装 Socket</router-link>

:::

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>kok3shiX 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。</p></div>

- 最新版本的 [kok3shiX](https://kok3shidoll.github.io/download/kokeshi/kokeshiX_v1.0_alpha_2.ipa)
- 最新版本的 [Sideloadly](https://sideloadly.io/)

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽kok3shiX.ipa文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`VPN与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

kok3shiX 现在可以从主屏幕中打开

## 运行 kok3shiX

1. 从主屏幕中打开 kok3shiX
2. 点击 "Jailbreak"

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::
