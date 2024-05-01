---
lang: 简体中文
title: 安装 Chimera
description: 安装 Chimera 的指南
permalink: /installing-chimera
redirect_from:
  - /chimera
  - /cm
pkgman: sileo
extra_contributors:
  - TheHacker894
  - Mineek
---

Chimera 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

Chimera 支持运行 iOS 12.0 - 12.1.2 的所有设备以及运行iOS 12.0 - 12.5.7 的 A7-A11 设备

由于半完美越狱的机制，越狱app <router-link to="/resigning-apps">在每7天后都需要</router-link> 重新签名

我们会使用 Sideloadly 来把 Chimera app 安装到设备上

::: warning

如果你有一台搭载了 A12 处理器的较新设备（比如 iPhone XS），那么你只能在 iOS 12.0 - 12.1.2 上使用 Chimera。 如果你已经更新到了 iOS 12.1.3 - 12.4.1，则需要 <router-link to="/installing-unc0ver">安装 unc0ver</router-link> ，如果你的设备不在这些版本上

:::

::: warning

如果你事先已经使用了其它越狱工具(除了 Odysseyra1n )，请确保 <router-link to="/restoring-rootfs">已经事先</router-link> 移除了该越狱工具

:::

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Chimera 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- 最新版本的 [Chimera](https://chimera.coolstar.org/)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装

1. 打开 Sideloadly
1. 将您的 iOS 设备插入您的电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽Chimera`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的apple developer帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击`信任<你的 Apple ID>`

Chimera现在可以从主屏幕中打开。


## 运行 Chimera

1. 重启设备
    - 这不是必要的操作，但推荐做这样以提高成功率
1. 此后立即从您的主屏幕上打开 Chimera 应用程序
1. 点击 "Jailbreak"
1. 出现提示时重新启动设备
    - 如果没有提示自动弹出就自动重启了，那么是越狱失败了，请重启后等待1-2分钟后重试越狱操作
    - 这次重启是必要的
1. 再次，立即从您的主屏幕上打开 Chimera 应用程序
1. 再次点击 "Jailbreak"
    - 如果设备自动重启或闪退了并且越狱没有被成功安装，请等待1-2分钟后重试越狱操作

::: warning

如果多次遇到重启或闪退并且越狱未被成功安装，请尝试在1-2分钟的等待时间内将设备放入冰箱降温

:::

你现在应该成功完成了越狱并且 Sileo 已经安装到了主屏幕。 你可以使用Sileo安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>、主题或者其它
