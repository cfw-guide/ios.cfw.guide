---
lang: zh_CN
title: 安装 unc0ver
description: 安装 unc0ver 的指南
permalink: /installing-unc0ver
redirect_from:
  - /installing-uncover
  - /unc0ver
  - /uncover
  - /u0
  - /uo
pkgman: cydia
extra_contributors:
  - TheHacker894
---

unc0ver 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

unc0ver 几乎支持所有运行 iOS 11.0 - 14.8 的设备 (不包括 iOS 12.5.6)，但我们通常在没有其它更简单的越狱方案时选择它

由于半完美越狱的机制，越狱app <router-link to="/resigning-apps">在每7天后都需要</router-link> 重新签名

我们会使用 Sideloadly 来把 unc0ver app 安装到设备上

::: tip

我们更**推荐** <router-link to="/installing-unc0ver-trollstore">安装Taurine (TrollStore)</router-link> ，如果你的设备是运行 iOS 14.0 - 14.3 或 14.6 -14.8 的 A12 或更新的设备

:::

::: tip

如果你正在寻找的是在运行 iOS 14.4 - 14.5.1 的 A12 及更新设备上使用 unc0ver，请查看 <router-link to="/installing-unc0ver-fugu14">安装 unc0ver (Fugu14)</router-link>

:::

::: warning

如果你已经使用其它越狱工具越狱了，请确保 <router-link to="/restoring-rootfs">已经事先</router-link> 移除了该越狱工具

:::

::: warning

unc0ver 在 14.6 - 14.8 上只支持搭载 A12 和 A13 的iPhone

:::

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
unc0ver 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- [unc0ver 5.3.1](https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa)
  - 12.4.9 - 12.5.4 和 13.5.1 -14.3 的用户应该下载 [unc0ver 6.1.1](https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa)
  - 12.5.5 的用户应该下载 [unc0ver 7.0.2](https://unc0ver.dev/downloads/7.0.2/11c3f7b0eea806ba3cac975f74dcc2cc4e916bac/unc0ver_Release_7.0.2.ipa)
  - 14.6 - 14.8 的 A12 和 A13 的iPhone用户应该下载[最新版 unc0ver](https://unc0ver.dev)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽unc0ver`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - No key XPath: /ol/li[5]/ul/li File: installing-unc0ver.md 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击 `信任<你的 Apple ID>`

unc0ver 现在可以从主屏幕中打开

## 运行 unc0ver

1. 重启设备
    - 这不是必要的操作，但推荐做这样以提高成功率
1. 此后立即从您的主屏幕上打开 unc0ver 应用程序
    - 如果提示错误"This build was tampered with."，请使用 Sideloadly 重新安装 unc0ver
1. 打开设置菜单并禁用 `Disable Auto Updates`
    - unc0ver 默认会打开此选项以禁用系统 OTA 升级，但推荐关闭它因为它可能会在我们手动升级系统时造成问题
1. 点击 "Done"
1. 点击 "Jailbreak"
1. 出现提示时重新启动设备
1. 重启后立即从主屏幕上打开 unc0ver
1. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

::: warning

如果显示错误 `rootFS already mounted, delete the OTA update`，请查看 <router-link to="/troubleshooting/#rootfs-already-mounted">故障排除</router-link> 页面

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

::: tip

如果你想使用一个更为现代的软件包管理器，根据您的 iOS 版本，你可以选择：

- 在 iOS 12 或更高版本，请 <router-link to="/installing-sileo">安装 Sileo</router-link>
- 在 iOS 11 或更高版本，请 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::
