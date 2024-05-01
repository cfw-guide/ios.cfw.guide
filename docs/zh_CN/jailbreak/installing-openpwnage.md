---
lang: zh_CN
title: 安装 openpwnage
description: 安装 openpwnage 的指南
permalink: /installing-openpwnage
redirect_from:
  - /openpwnage
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - TheHacker894
---

openpwnage 支持运行 iOS 8.4b4 - 9.3.6 的所有32位设备

请注意，openpwnage 越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后再次使用 HomeDepot 以激活越狱。 下文也会说明这点

由于免费开发者账号自签限制，大多数情况下你需要每 7 天用电脑重新安装 openpwnage app到你的设备上

我们会使用 Sideloadly 来把 openpwnage app 安装到设备上

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
openpwnage 目前在 <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- 最新版本的 [openpwnage](https://github.com/0xilis/openpwnage)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽 openpwnage`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly must make a request to its servers in order to work with free developer accounts. 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击`信任<你的 Apple ID>`

openpwnage 现在可以从主屏幕中打开

## 运行 openpwnage

1. 从主屏幕中打开 openpwnage
1. 点击 `Jailbreak`

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

::: tip

如果你想要在 iOS 9 上使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::