---
lang: 简体中文
title: 安装 Taurine
description: 安装 Taurine 的指南
permalink: /installing-taurine
redirect_from:
  - /taurine
  - /tr
pkgman: sileo
extra_contributors:
  - hopolapopola
---

Taurine 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

Taurine 支持运行 iOS/iPadOS 14.0 - 14.8.1 的所有设备

由于半完美越狱的机制，越狱app <router-link to="/resigning-apps">在每7天后都需要</router-link> 重新签名。 但你也可以选择在越狱后安装一个永久签名的Tauline app

我们会使用 Sideloadly 来把 Taurine app 安装到设备上

::: tip

更加**推荐** <router-link to="/installing-taurine-trollstore">安装Taurine (TrollStore) ，</router-link> 如果你是 A12 及更新的设备

:::

::: warning

如果你事先已经使用了其它越狱工具(除了 Odysseyra1n )，请确保 <router-link to="/restoring-rootfs">已经事先</router-link> 移除了该越狱工具

:::

::: warning

对于 1TB 和 2TB 的 M1 iPad Pro，使用*非官方*版本的 Taurine 更加*可靠*。 如果你不愿意使用非官方版本，你可以尝试使用官方版本， 但它的成功率很低

:::

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Taurine 目前在 <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> 上签名，可以在没有电脑的情况下进行安装。
</p></div>

- 最新版本的 [Taurine](https://taurine.app/)
    - 对于 1TB 和 2TB 的 M1 iPad Pro，你可以在[这里](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1)下载非官方版，如果不是 M1 iPad Pro 请**不要**使用该版本
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

![Sideloadly 的截图 (Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽 Taurine`.ipa` 文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly 必须向其服务器发出请求才能使用免费的开发人员帐户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击 `信任<你的 Apple ID>`

Taurine app 现在可以从主屏幕中打开

## 运行 Taurine

1. 重启设备
    - 这不是必要的操作，但推荐做这样以提高成功率
1. 此后立即从主屏幕上打开 Taurine
1. 点击 "Jailbreak"
1. 出现提示时重新启动设备
1. 重启后立即从主屏幕上打开 Taurine
1. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

::: warning

如果你遇到了 `ERR_Jailbreak`、`ERR_Already_Jailbroken`或 `ERR_KernRW` 错误，请查阅 <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">故障排除</router-link> 页面

:::

你已完成越狱并且Sileo已经安装到了主屏幕。 你可以使用Sileo安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

## 安装必要软件包

1. 打开 Sileo
1. 点击底部选项卡 "搜索"
1. 搜索“libiosexec1”
1. 点击“安装”
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击"完成"
1. 搜索"libhooker (common)"、"PreferceLoader"和"RocketBootstrap", 然后点击"安装"将它们添加到队列中
    - 当准备队列时，不要安装队列中的任何东西，直到选择完了所有需要安装的软件包
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击 "重启SpringBoard"

在完成上述操作后，推荐安装taurine-permanent 以便拥有一个永久签名的 Taurine app

## 安装 taurine-permanent

::: warning

taurine-permanent 将会安装最新*官方*版本的 Taurine

如你在使用非官方版本以获得可靠的 M1 iPad Pro 支持，你还可以通过 TrollStore 安装 TrollStore Helper (在 havoc.app 源中)，并通过它安装非官方版本的 Taurine

:::

1. 打开 Sileo
1. 点击底部选项卡 "搜索"
1. 搜索“taurine-permanent”
1. 点击“安装”
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击"完成"
