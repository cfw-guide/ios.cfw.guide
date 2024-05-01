---
lang: zh_CN
title: 安装 greenpois0n
description: 安装 greenpois0n 的指南
permalink: /installing-greenpois0n
redirect_from:
  - /greenpois0n
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
---

greenpois0n 支持除了 iPhone 3G 以外的所有运行 iOS 4.1、4.2.1和4.2.6的设备以及运行 iPhoneOS 3.2.2 的第一代 iPad

greenpois0n 是一款 <router-link to="/types-of-jailbreak/#untethered-jailbreaks">完美越狱工具</router-link> ，这意味着设备重新启动后仍能保持越狱状态，但如果出现一些问题可能会导致设备进入白苹果无限重启。 如果你遇到白苹果无限重启，请通过 iTunes、Finder(macOS Catalina 及更新版本) 或 FutureRestore  
恢复你的设备。你需要一台运行 macOS 10.11 或更早版本的计算机，或者运行 Windows XP - Windows 8.1 的电脑。 在 Wine 上不可用

![greenpois0n(Windows) 的截图](/assets/images/greenpois0n-win.png)

## 安装应用程序

<br>

::::: tabs

:::: tab name="macOS" :default="true"

1. 下载 [greenpois0n](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)
    - iOS 4.2.1 - 4.2.6：选择 RC6
    - iOS 4.1 或 iPhoneOS 3.2.2：选择 RC4
1. 解压 greenpois0n
1. 运行 greenpois0n
    - 右键然后点击`打开`
1. 将设备设备连接至电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容.
1. 点击 `Prepare to Jailbreak (DFU)` 并根据屏幕提示操作使设备进入 DFU 模式
1. 完成上面的操作后，点击 `Jailbreak!`
    - 在此过程中，设备的屏幕可能会变为白色。 这是正常的
    - 越狱可能需要一段时间，请请耐心等待并防止电脑自动进入休眠
1. 一旦越狱进度完成，进入主屏幕，打开新安装的 `Loader` app
    - 确保设备已连接到互联网
1. 打开 `Cydia` 然后点击 `Install Cydia`
    - 下载速度可能因你的网络质量而异。 确保设备不会自动熄屏

::::

:::: tab name="Windows"

1. 检查安装的 iTunes 版本，如果为 10.6.3 或更低，那么跳过步骤 2-4
    - 你可以通过打开 iTunes，点击 `帮助` -> `关于 iTunes` 查看你的 iTunes版本
1. `win + R` 键打开运行，输入`appwiz.cpl`
1. 卸载所有发布者为 `Apple Inc.` 的程序
    - 如果通过发布者排序，那么可以更容易地找到它们
    - 需要卸载的应用程序数量可能不尽相同，请确保正确移除了所有
    - 如果卸载后提示重新启动计算机，请忽略它
1. 在所有程序被卸载后，重新启动计算机
1. 下载 iTunes 10.7
    - [64位](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
    - [32位](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)
1. 安装 iTunes，然后在提示时重新启动计算机
1. 下载 [greenpois0n](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)
    - iOS 4.2.1 - 4.2.6：选择 RC6
    - iOS 4.1 或 iPhoneOS 3.2.2：选择 RC4
1. 解压 greenpois0n
1. 运行 greenpois0n
    - 可能会要求请求管理员权限
1. 将设备设备连接至电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容.
1. 点击 `Prepare to Jailbreak (DFU)` 并根据屏幕提示操作使设备进入 DFU 模式
1. 完成上面的操作后，点击 `Jailbreak!`
    - 在此过程中，设备的屏幕可能会变为白色。 这是正常的
    - 越狱可能需要一段时间，请请耐心等待并防止电脑自动进入休眠
1. 一旦越狱进度完成，进入主屏幕，打开新安装的 `Loader` app
    - 确保设备已连接到互联网
1. 打开 `Cydia` 然后点击 `Install Cydia`
    - 下载速度可能因你的网络质量而异。 确保设备不会自动熄屏

::: tip

越狱完成后，建议安装最新版本的 iTunes
 - Windows XP 和 Windows Vista (12.1.3):
    - [64位](https://secure-appldnld.apple.com/itunes12/031-34005-20150916-98D38F1E-5C11-11E5-A6AD-C05A6DA99CB1/iTunes6464Setup.exe)
    - [32位](https://secure-appldnld.apple.com/itunes12/031-34002-20150916-98D32A92-5C11-11E5-80AC-C25A6DA99CB1/iTunesSetup.exe)
 - Windows 7 及更高版本(如果您在Windows 7上，请选择Windows 8)：
    - [Apple Support 文章](https://support.apple.com/en-us/HT210384)

:::

::::

::::::

::: tip

为了提高成功率最好使用经过 MFI 认证的30-pin数据线

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
