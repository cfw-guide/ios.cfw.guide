---
lang: zh_CN
title: 安装盘古7
excerpt: 安装盘古7的指南
permalink: /installing-pangu7
redirect_from:
  - /pangu712
  - /pangu7
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - hopolapopola
---

盘古7支持运行 iOS 7.1 - 7.1.2 的所有设备

盘古7是一款完美越狱(untethered jailbreak) 工具，这意味着在设备重新启动后仍能保持越狱状态，因此一旦进行越狱，除非抹除设备，否则你不需要再重新使用它

你需要运行 Windows XP 或更新的 PC 或运行 Mac OS X 10.9 Mavericks 至 macOS 10.14 的Mac， 以及正确版本的盘古越狱工具

![盘古7(Windows) 的截图](/assets/images/pangu7-win.png)

::::: tabs

:::: tab name="macOS" :default="true"

### 下载

- 来自 Legacy Jailbreak Archives 的 [Pangu v1.2.0](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/Fo8ihCJa)

### 安装盘古

1. 打开 `pangu` dmg 文件并将其内应用程序拖到的 `/Applications` 文件夹
1. 打开终端并运行以下命令： `sudo -b /Applications/pangu.app/Contents/MacOS/pangu`
1. 将您的设备插入您的计算机并信任您的计算机
1. 禁用设备密码 (越狱完成后可以重新启用)
1. 设置您的设备日期设置为2014年6月之前的任何时间
1. 在计算机盘古app里点击“开始越狱”
1. 当设备主屏幕上显示盘古 app 时打开它
   - 点击“继续”信任应用并允许其运行
1. 您的设备将会重启，然后解锁设备
1. 一段时间后，设备会再次重新启动

::::

:::: tab name="Windows"

::: danger

由于光传感器bug当设备处于黑暗环境下越狱可能会白苹果无限重启

:::


### 下载
- 来自 Legacy Jailbreak Archives 的[Pangu v1.0](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/41UlRSyS)

### 安装盘古

1. 运行 `pangu` 的exe文件
1. 将您的设备插入您的计算机并信任您的计算机
1. 禁用设备密码 (越狱完成后可以重新启用)
1. 设置您的设备日期设置为2014年6月之前的任何时间
1. 取消勾选`安装PP助手`
1. 在计算机盘古app里点击“开始越狱”
1. 当设备主屏幕上显示盘古 app 时打开它
   - 点击“继续”信任应用并允许其运行
1. 您的设备将会重启，然后解锁设备
1. 一段时间后，设备会再次重新启动

### 修复在黑暗环境中越狱可能会白苹果的问题

1. 解锁您的设备并打开 Cydia
1. 点击 `忽略(临时)`
1. 点击 "软件源" 选项卡
1. 点击 `编辑` 然后点击 `添加`
1. 输入 `http://repo.kawaiizenbo.me` 然后点击 `添加软件源`
1. 点击刚刚新添加的 `KawaiiZenbo's Cydia 源`
1. 选择 `System` 分类然后找到 `Pangu 7.1-7.1.x Untether`
1. 点击 `安装` 然后点击 `确认`
1. 安装成功后重启设备

::::

:::::

----

一旦重启进入锁屏界面，你的设备将会成功越狱，并且安装好了补丁，你的设备将不在会有在黑暗环境下越狱白苹果的风险 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

