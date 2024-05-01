---
lang: 简体中文
title: 安装 p0sixspwn
description: 安装 p0sixspwn 的指南
permalink: /installing-p0sixspwn
redirect_from:
  - /installing-posixpwn
  - /p0sixpwn
  - /posixpwn
  - /p0
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Midnight145
---

p0sixspwn 支持运行 iOS 6.1.3 - 6.1.6 的所有设备

p0sixspwn 是一款[完美越狱(untethered jailbreak)](/types-of-jailbreak/#untethered-jailbreaks)工具，这意味着设备重新启动后仍能保持越狱状态，但如果出现一些问题可能会导致设备进入白苹果无限重启。 如果遇到无限重启，请通过 iTunes、Finder (macOS Catalina 及更新版本)或 FutureRestore 恢复你的设备。

你需要运行 macOS 10.12 Sierra 或更早版本的 Mac 或运行 Windows XP 或更高版本的 PC。 在 Wine 上不可用

![p0sixspwn(Windows) 的截图](/assets/images/p0sixspwn-win.png)

::::: tabs

:::: tab name="macOS Sierra or older" :default="true"

1. 下载最新版本的 [p0sispwn](https://ih8sn0w.com/p0sixspwn.html)
1. 解压 p0sixspwn
1. 运行 p0sixspwn
    - 右键然后点击`打开`
1. 将设备设备连接至计算机
    - 请确保您的计算机已经被信任并允许查看您设备的内容
1. 在 p0sixspwn 中点击 `Jailbreak`
    - 越狱可能需要一段时间，请请耐心等待并防止电脑自动进入休眠

::::

:::: tab name="macOS High Sierra and newer"

1. 下载可用于现代 macOS 的[修改版 p0sixspwn ](https://archive.org/download/p0sixspwn-modernmacOS/p0sixspwn%206.1.6%20test.zip)
1. 解压 ZIP 文件
1. 打开终端(可在 `应用程序/实用软件/` 中找到)
1. 使用 `cd` 导航到已提取的 zip 文件夹
1. 在 p0sixspwn文件夹运行 `./p0sixspwn.tool`
    - 如果运行上述指令后显示 `无法打开“pris0nbarake”，因为无法确认开发者的身份` 或者类似的错误，请在终端尝试在 p0sixspwn 文件夹下运行 `sudo xattr -c *` 然后再次运行 `./p0sixspwn.tool`
1. 将设备设备连接至计算机
    - 请确保您的计算机已经被信任并允许查看您设备的内容
1. 在 p0sixspwn 中点击 `Jailbreak`
    - 越狱可能需要一段时间，请请耐心等待并防止电脑自动进入休眠

::::

:::: tab name="Windows"

1. 检查安装的 iTunes 版本，如果为 11.1.4 或更低，那么跳过步骤 2-4
    - 你可以通过打开 iTunes，点击 `帮助` -> `关于 iTunes` 查看你的 iTunes版本
1. `win + R` 键打开运行，输入`appwiz.cpl`
1. 卸载所有发布者为 `Apple Inc.` 的程序
    - 如果通过发布者排序，那么可以更容易地找到它们
    - 需要卸载的应用程序数量可能不尽相同，请确保正确移除了所有
    - 如果卸载后提示重新启动计算机，请忽略它
1. 在所有程序被卸载后，重新启动计算机
1. 下载 iTunes 11.1.5
    - [64位](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
    - [32位](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)
1. 安装 iTunes，然后在提示时重新启动计算机
1. 下载最新版本的 [p0sispwn](https://ih8sn0w.com/p0sixspwn.html)
1. 解压 p0sixspwn

::: tip

对于Windows 10及更高版本，你需要为启用Windows XP SP3 兼容模式
1. 右键 `p0sispwn-1.0.8.exe`
1. 选择 `属性`
1. 转到 `兼容性` 标签页
1. 打开 `兼容模式` 内的下拉框
1. 将下拉框设置为 `Windows XP (Service Pack 3)`
1. 点击`应用`，然后点击`确认`

:::

9. 运行 p0sixspwn
10. 将设备设备连接至计算机
      - 请确保您的计算机已经被信任并允许查看您设备的内容
11. 在 p0sixspwn 中点击 `Jailbreak`
      - 越狱可能需要一段时间，请请耐心等待并防止电脑自动进入休眠

::: tip

越狱完成后，建议安装最新版本的 iTunes
 - Windows XP 和 Windows Vista (12.1.3):
    - [64位](https://secure-appldnld.apple.com/itunes12/031-34005-20150916-98D38F1E-5C11-11E5-A6AD-C05A6DA99CB1/iTunes6464Setup.exe)
    - [32位](https://secure-appldnld.apple.com/itunes12/031-34002-20150916-98D32A92-5C11-11E5-80AC-C25A6DA99CB1/iTunesSetup.exe)
 - Windows 7 及更高版本(如果您在Windows 7上，请选择Windows 8)：
    - [Apple Support 文章](https://support.apple.com/en-us/HT210384)

:::

::::

:::::

::: tip

为了提高成功率最好使用经过 MFI 认证的 Lightning 数据线

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
