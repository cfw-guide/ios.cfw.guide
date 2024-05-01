---
lang: zh_CN
title: Installing Daibutsu
description: Guide to installing Daibutsu
permalink: /installing-daibutsu
redirect_from:
  - /daibutsu
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
---

Daibutsu is capable of jailbreaking most A5(X) iOS devices on firmware version 8.4.1.

::: warning

With regards to iPad 2's, Daibutsu only supports iPad 2's that were made in 2012 or later.

In case you don't know if it's an eligible iPad 2, the following should be true:

- It is a WiFi-Only iPad 2
- It is a 16GB iPad 2

If it is a 16GB WiFi-Only iPad 2, you should check Settings -> General -> About -> Legal -> RF Exposure

- If it mentions "iPad2,4" in the URL mentioned in the page, it is a supported device

If it is a cellular iPad 2, or a 32/64GB iPad 2, or if checking the URL does not say it's an iPad2,4, it is not a supported iPad 2, and you should follow <router-link to="/installing-etasonJB">Installing etasonJB</router-link> instead.

:::

Unlike most modern jailbreaks, Daibutsu is persistent after a reboot (this is also referred to as an "[untethered](/types-of-jailbreak/#untethered-jailbreaks)" jailbreak). 这意味这在设备每次重启后无需再次运行 wtfis 以激活越狱状态

We will use the Sideloadly tool to install the Daibutsu jailbreak application to your iOS device for use in the next step.

## 下载

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Daibutsu is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Daibutsu](https://dora2ios.web.app/daibutsu.html)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上

![Sideloadly 截图(Windows)](/assets/images/sideloadly_win.png)

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. Drag and drop the Daibutsu `.ipa` file into Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

The Daibutsu application can now be opened from home screen.

## Running Daibutsu

1. Open the Daibutsu application from your home screen
2. 点击 `Jailbreak`

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
