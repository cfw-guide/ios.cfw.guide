---
lang: zh_CN
title: 安装 Electra
description: 安装 Electra 的指南
permalink: /installing-electra
redirect_from:
  - /electra
  - /el
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: sileo
extra_contributors:
  - TheHacker894
---

Electra 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

Electra 支持运行iOS 11.0 - 11.4.1 的所有设备

由于半完美越狱的机制，越狱app <router-link to="/resigning-apps">在每7天后都需要</router-link> 重新签名

我们会使用 Sideloadly 来把 Electra app 安装到设备上

::: warning

如果你已经使用了 unc0ver越狱，请在继续操作之前确保已经正确 [移除了 unc0ver](/removing-unc0ver)

:::

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Electra 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- 最新版本的 [Electra](https://coolstar.org/electra/)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装

1. 打开 Sideloadly
1. 将您的 iOS 设备插入您的电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽Electra`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的开发人员帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点进 `信任<你的 Apple ID>"`

Electra 现在可以从主屏幕中打开

## 运行 Electra

1. 从主屏幕中打开 Electra
1. 点击 "Jailbreak"

::: warning

如果你的设备在运行 Electra 后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你已完成越狱并且Sileo已经安装到了主屏幕。 你可以使用Sileo安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
