---
lang: zh_CN
title: 安装盘古933
description: 安装盘古933的指南
permalink: /installing-pangu933
redirect_from:
  - /pangu933
  - /pangu9
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - hopolapopola
  - Braec0
---

盘古933支持运行 iOS 9.2 - 9.3.3 的所有64位设备

请注意，盘古933越狱不是“永久性”的(重新启动后会失效)。 你需要在每次重启后重新运行漏洞以激活越狱状态，但幸运的是你不需要安装特定的应用程序来运行漏洞。 下文也会说明这点

我们会使用 Sideloadly 来把盘古app 安装到设备上

## 下载

- 最新版本的[盘古933](https://web.archive.org/web/20170214021020/http://dl.pangu.25pp.com/jb/NvwaStone_1.1.ipa) _(archive.org)_
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽 Pangu9`.ipa` 文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的开发人员帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击`信任<你的 Apple ID>`

盘古 app 现在可以从主屏幕中打开

## 运行盘古933

1. 从主屏幕中打开盘古
    - 如果提示，请允许通知权限
1. 点击"开始越狱"
1. 锁定设备
1. 你将收到通知提示越狱已经成功

在首次运行时，越狱过程可能会需要一点时间。 这是正常的

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

## 重新激活越狱

盘古933是一款半完美越狱 (semi-untethered) 工具，所以当你的设备重新启动后不会保留越狱状态。 但幸运的是你这次不需要保留盘古 app 来用于激活越狱，你可以按照以下步骤来重新激活越狱

::: danger

此部分并**不安装**越狱，首次越狱你先需要安装盘古 app 并使用其安装越狱后在进行下面的操作

:::

1. 在您的 iOS 设备上打开 Safari
1. 前往 [jbme.ddw.nu](http://jbme.ddw.nu) 网站
    - 请确保您的设备处于竖屏状态(如果不是, 您会收到通知)
1. 点击 "go"

您的设备现在应该处于越狱状态了

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且没有成功激活越狱状态，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::