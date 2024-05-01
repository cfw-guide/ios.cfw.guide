---
lang: zh_CN
title: 安装 Phœnix
description: 安装 Phœnix 的指南
permalink: /installing-phoenix
redirect_from:
  - /installing-phœnix
  - /phœnix
  - /phoenix
  - /pn
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - TheHacker894
---

Phœnix 支持运行 iOS 9.3.5 - 9.3.6 的32位设备

请注意，Phœnix 越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后重新利用漏洞来激活越狱。 下文也会说明这点

由于免费开发者账号自签限制，大多数情况下你需要每 7 天用电脑重新安装Phœnix app到你的设备上

我们会使用 Sideloadly 来把Phœnix app 安装到设备上

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Phœnix 目前在 <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下安装
</p></div>

- 最新版本的 [Phœnix](https://phoenixpwn.com/)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上

![Sideloadly 截图(Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽 Phœnix `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，设备管理可能会显示为VPN与设备管理\`
2. 点击 `信任 "<Your Apple ID>"`

Phœnix app 现在可以从主屏幕中打开

## 运行 Phœnix

1. 从主屏幕中打开 Phœnix
2. 按顺序点击 `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

再次越狱时，“Kickstart Jailbreak”的按钮将替换掉原有的“Prepare for Jailbreak”。 这次点击它

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::
