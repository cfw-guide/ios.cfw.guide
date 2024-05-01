---
lang: 简体中文
title: 安装 HomeDepot
description: 安装 HomeDepot 的指南
permalink: /installing-homedepot
redirect_from:
  - /homedepot
  - /hd
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - TheHacker894
  - White
  - LuckZGD
---

HomeDepot 支持所有运行 iOS 9.1 - 9.3.4 的32位设备，以及运行 iOS 8.0 - 8.4.1 的 A5(X) 设备

请注意，HomeDepot 越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后再次使用 HomeDepot 以激活越狱。 下文也会说明这点

由于免费开发者账号自签限制，大多数情况下你需要每 7 天用电脑重新安装 HomeDepot app到你的设备上

我们会使用 Sideloadly 来把 HomeDepot app 安装到设备上

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
HomeDepot 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- 适用于你设备系统版本的最新版 HomeDepot ︰
  - 支持ios9.1-9.3.4的工具
  - 支持ios8.0-8.4.1的工具
    - 如果你的设备运行的是 iOS 8.0 - 8.4 ，你还需要下载 [ohd patcher](https://github.com/LukeZGD/ohd/releases)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 修补 HomeDepot (iOS 8.0 - 8.4)

::: danger

仅需要在 iOS 8.0 - 8.4 进行这个操作，iOS 8.4.1 和 iOS 9.1 - 9.3.4 请忽略这一部分

:::

::: tip

### macOS 和 Linux

1. 打开终端
1. 将目录更改为保存了ohd patcher脚本和 h3lix.ipa 文件的文件夹
   - 如果你保存它们到了下载，命令将会是 `cd ~/Downloads`
1. 在终端中输入 `./patch.sh`
1. 拖拽 MixtapepPlayer`.ipa` 文件到终端中
1. 按下回车

:::

::: tip

### Windows

1. 把 MixtapepPlayer`.ipa` 拖到 patch.cmd 文件上

:::

## 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽HomeDepot`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的开发人员帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击`信任<你的 Apple ID>`

HomeDepot 现在可以从主屏幕中打开

## 运行 HomeDepot

1. 从主屏幕中打开 HomeDepot
1. 按顺序点击 `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

再次越狱时，一个称为“Kickstart Jailbreak”的按钮将替换掉原有的“Prepare for Jailbreak”。 这次点击它

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

## 修补为完美越狱

::: danger

此方法只适用于运行 iOS 9.1 - 9.3.4 的32位设备，运行 iOS 8.0 - 8.4.1 的 A5(X) 设备请忽略此部分

:::

此部分是可选的额外部分，它使设备在每次启动后自动运行越狱。 这意味着在每次设备重新启动后，无需再手动使用 HomeDepot 进入越狱状态

你需要使用 Cydia 来安装此部分内容。 如果你对 Cydia 不熟悉，请在操作前先查阅[使用 Cydia](/installing-homedepot/using-cydia.html)

1. 打开 Cydia
1. 查看"软件源"选项卡，确保已添加了"tihmstar's beta repo"源
    - 如果找不到，手动添加
1. 打开"搜索"选项卡并输入"UntetherHomeDepot"
1. 点击该插件，然后点击屏幕右上角的“安装”
1. 确认安装

安装完成后，你将被提示重新启动设备

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::