---
lang: 简体中文
title: 使用 JailbreakMe Star
description: 使用 JailbreakMe Star 的指南
permalink: /using-jailbreakme-star
redirect_from:
  - /installing-jailbreakme-star
  - /installing-star
  - /star
  - /jailbreakme-star
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - WhitetailAni
---

JailbreakMe Star 支持运行 iPhoneOS 3.1.2 - iOS 4.0.1的所有设备 (不包括运行 iPhoneOS 3.2.2 的第一代 iPad)

JailbreakMe Star 是一款完美越狱(untethered jailbreak) 工具，这意味着设备重新启动后仍能保持越狱状态，但如果出现一些问题可能会导致设备进入白苹果无限重启。 如果遇到无限重启，请通过 iTunes、Finder (macOS Catalina 及更新版本)或 FutureRestore 恢复你的设备。

## 运行 JailbreakMe Star

1. 在您的设备上打开 Safari
1. 访问 [tilabme.com](http://jailbreakme.com) 网站
1. 滑动到右侧"Slide to Jailbreak"

几分钟后，Cydia应该会出现在的主屏幕上

## 修补 Cydia

::: danger

在 iOS 4 或更高版本上请跳过这些步骤

:::

1. 打开 Cydia 选择 `开发者`
1. 等待数据重新加载(可能需要很长时间，请确保设备自动熄屏)
1. 当提示必要升级时，选择 `升级` (请再次确保设备不会自动熄屏)
1. 完成后，点击 `关闭 Cydia`
1. Cydia 重启后，等待其重新加载完毕，**忽略所有**有关服务器证书的错误
1. 转到软件源标签页, 点击 `编辑`, 然后点击`添加`
1. 输入 `http://cydia.invoxiplaygames.uk/`,，耐心等待直到右上角出现`关闭`
1. 点击刚刚添加的 `IPG's Cydia 源`，点击 `Tweaks`，然后找到`Cydia HTTPatch`
1. 点击 `安装`，然后点击 `确认`， 耐心等待直到右上角出现`关闭`
1. Cydia将会退出，现在应该修复了 Cydia 的证书错误

你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
