---
lang: zh_CN
title: 安装 Odyssey
description: 安装 Odyssey 的指南
permalink: /installing-odyssey
redirect_from:
  - /odyssey
  - /od
pkgman: sileo
extra_contributors:
  - TheHacker894
  - hopolapopola
  - raizo
---

Odyssey 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

Odyssey 支持运行 iOS/iPadOS 13.0 -13.7 的所有设备

由于半完美越狱的机制，越狱app <router-link to="/resigning-apps">在每7天后都需要</router-link> 重新签名

我们会使用 Sideloadly 来把 Odyssey app 安装到设备上

::: warning

如果你事先已经使用了其它越狱工具(除了 Odysseyra1n )，请确保 <router-link to="/restoring-rootfs">已经事先</router-link> 移除了该越狱工具

:::

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Odyssey 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- 最新版本的 [Odysey](https://theodyssey.dev/)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽Odyssey`.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的开发人员帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击`信任<你的 Apple ID>`

Odyssey 现在可以从主屏幕中打开。

## 运行 Odessey

1. 重启设备
    - 这不是必要的操作，但推荐做这样以提高成功率
1. 此后立即从您的主屏幕上打开 Odyssey 应用程序
1. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

::: warning

如果你遇到了 `ERR_Jailbreak`、`ERR_Already_Jailbroken`或 `ERR_TFP0` 错误，请查阅 <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">故障排除</router-link> 页面

:::

你已完成越狱并且Sileo已经安装到了主屏幕。 你可以使用Sileo安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
