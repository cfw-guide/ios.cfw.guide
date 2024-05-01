---
lang: zh_CN
title: 安装 PwnageTool
description: 安装 PwnageTool 的指南
permalink: /installing-pwnagetool
redirect_from:
  - /pwnagetool
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - WhitetailAni
---

PwnageTool 支持运行 iOS 1.1.4 - 5.1.1 的 A5 以前的设备，具体支持情况根据设备与系统不同而异

PwnageTool 是一款完美越狱(untethered jailbreak) 工具，这意味着在设备重新启动后仍能保持越狱状态，因此一旦进行越狱，除非抹除设备，否则你不需要再重新使用它

要使用 PwnageTool，你需要运行Mac OS X Mavericks或更早版本的 Mac


![PwnageTool 的截图](/assets/images/pwnagetool.png)

## 下载

- 来自 r/LegacyJailbreak 存档的适用于你的设备的[PwnageTool](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/folder/swVhVKYB)
    - If you're using a iPhone 2G or iPod Touch 1/2 or jailbreaking iPhone OS 2, download PwnageTool 3.1.5.

## 安装 PwnageTool

1. 解压 `zip` 到合适的位置
1. 打开 PwnageTool 程序
1. 将设备插入计算机
1. 如果你的设备
1. 从 [ipsw.me](https://ipsw.me) 下载 IPSW 固件文件
1. 提示时，选择下载的 IPSW 到 PwnageTool
1. 选择“General”，然后继续
1. **不要**动“Root partition size”这部分
1. 继续，直到进入“Cydia Settings”
1. 选择 OpenSSL 和 OpenSSH
1. 继续，并确定勾选了 Cydia Installer
1. 取消勾选 Icy ，然后继续
1. 选择“Build”，然后继续
1. 选择保存自定义 IPSW 文件的位置
1. 等待 IPSW 生成
1. PwnageTool 会询问你的设备是否越狱过，请根据实际情况选择
1. 根据 PwnageTool 的提示将设备进入 DFU 模式
1. 打开 iTunes, 使用刚刚 PwnageTool 生成的 `.ipsw` 文件恢复系统

当你看到设备亮起进入锁屏页面后，现在应该处于越狱状态了。 Cydia将会出现在主屏幕上。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它
