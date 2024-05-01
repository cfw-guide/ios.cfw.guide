---
lang: zh_CN
title: "FAQ"
description: 关于越狱设备的常见问题
permalink: /faq
redirect_from:
  - /help/faq
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - BurritoSOFTWARE
---

## 常见问题

### 什么是越狱？

越狱 (Jailbreak) 是获取 iOS 设备最高权限的一种技术手段。 由于高封闭程度，Apple 打造的操作系统以其安全性而闻名， 越狱后的设备将允许你打破这些限制，将你的设备定制为你喜欢的样子。

越狱使你能够从软件包管理器中安装自定义应用程序和 "调整"（修改）过的应用，以定制和增强用户体验。 在大多数设备上，越狱是免费的，而且很容易。

### 越狱是否合法？

在美国，越狱行为是完全合法的。 2010年，美国版权局宣布越狱是《数字千年版权法》（DMCA）的一个例外。

你可能想此种行为在你的国家是否符合当地法规，但在大多数国家，这应该是可以的。

### 什么是软件包管理器？

软件包管理器用于安装、卸载和修改官方或社区制作的软件，以全面自定义化你的设备。 例如 Sileo 就是软件包管理器。

它们可以被认为类似于iOS 的 App Store，在那里你可以安装免费和付费软件。

### 什么是软件源？

软件源本质上是包含可安装插件的数据库。 当你向软件包管理器中添加软件源时，你将能够安装其中包含的插件，并使用搜索功能查找它们。

### 什么是 tweaks?

插件是可安装的，可以对系统外观或功能等进行微小修改的方式。

与应用程序不同，插件通常没有应用图标，而是在“设置”中提供一个区域来更改插件的行为方式。 一些更简单的插件可能都不包含这些。

### “Respring” 和“重启 SpringBoard”是什么?

“Respring”是指重启主屏幕和 iOS 用户界面。 大多数情况下，你在安装插件后可以通过“respring”来应用它，而无需重新启动设备

“respring”不会使你的越狱状态丢失

### 什么是恢复模式(Recovery Mode) ？

恢复模式是内置于设备中的一种保护机制，允许设备重新安装 iOS 。 当系统损坏且无法正常启动时恢复模式非常有用，在越狱后这种情况可以发生但比较少见。 要想进入恢复模式，可以在设备上进行操作或通过电脑，而且在正常升级和恢复过程中，iTunes/Finder 也会利用恢复模式

### 什么是 DFU 模式？

DFU模式是一种可以在不加载系统或引导程序的情况下与 iOS 设备交互的方式。 DFU 代表 Device Firmware Upgrade(设备固件升级)。 DFU 模式在功能上与恢复模式不同，它通常作为在设备发生严重问题时的最后手段，然而我们可以使用它与 <router-link to="/installing-odysseyra1n">Odysseyra1n</router-link> 来越狱设备。 进入 DFU 模式只能在设备上操作，因为它是设备本身的一部分

### 成功越狱之后，我能做什么？

- 获得对你的设备的操作系统的全部权限
- 能够使用软件包管理器，比如 Sileo 或 Zebra
- 安装主题以改变设备的观感
- 安装 tweak 以调整 iOS 系统的行为

### 在开始之前我应该知道什么？

- 我们**强烈**建议将你的设备备份至 iCloud、iTunes 或访达（macOS Catalina 或更新版本的系统）上，以防数据丢失
- 如果安装过程中没有出现任何问题，越狱后你的数据将不会丢失
- 保持设备接入电源，或保证设备电量充足，以便不会出现任何意料之外的断电情况
- 尽管越狱允许你解锁系统权限，但如果你损坏了系统，则会导致数据丢失
- 相比于未越狱时，你或许会在越狱之后面临更多的恶意软件和其他安全问题
- 你的设备保修将在越狱后失效，直到恢复到未越狱状态，不过恢复的操作很容易就能完成

## Blob 相关问题

### 什么是 Blob？

Blob (中文里叫 SHSH 比较多)是一个包含专门用于某一设备的特殊密钥的文件，允许降级到特定的固件版本

Blob 是在系统签名窗口打开的时期，由苹果制作的数字签名，就像是一张前往一个固件版本的门票。 如果你获取了它，请妥善保存

### Blob 是如何工作的？

你可以在一款叫 `futurerestore` 的工具中使用 Blob来还原到一个版本，前提是当前签署的 SEP (Secure Enclave Processor) 固件和基带固件与还原的版本相互兼容

虽然现在可能无法使用 Blob 还原系统，但仍然建议保存它们，以备日后有机会使用

### 我现在可以保存它们吗？

目前可以保存下列两种 Blob：

- 当前苹果正在开放验证的版本
- 你当前使用的版本

请注意，能否保存你所在的版本的 Blob 取决于你是否越狱，其中具体情况取决于你的设备以及你当时是如何升级到此版本的，它有可能可以使用，但也有可能是无效的

想具体了解保存 Blob 的方法，请查看 <router-link to="/saving-blobs">保存 Blob</router-link> 指南

## 插件相关问题

### 我可以使用 Batchomatic 或 IAmLazy 这样的插件吗？

**不要使用**这类插件，因为它们通常会对越狱造成问题。 如果你切换了越狱工具或升级到较新的 iOS 版本并想保留原本的插件，请制作一个基于文本的插件列表，然后手动重新安装它们

## 其他问题

### 我的64位设备有可用越狱的最新 iOS 版本是什么？

你可以查看 <router-link to="/get-started">开始</router-link>，或者直接查看下面的内容：

- **A7 iPad**：iOS 12.5.7 (Odysseyra1n 或 Chimera)
- **A7/A8 iPhone**：iOS 12.5.7 (Odysseyra1n 或 Chimera)
- **iPod Touch (第六代)**：iOS 12.5.7 (Odysseyra1n 或 Chimera)
- **A8(X) iPads**：iPadOS 15.8.1 (通过meowbrek2 或 palera1n)
- **iPod Touch (7th Generation)**: iOS 15.8.1 (via Dopamine, meowbrek2, or palera1n)
- **A9/A10 iPhones**: iOS 15.8.1 (via Dopamine, meowbrek2, or palera1n)
- **A9(X) iPads**: iPadOS 16.7.5 (通过 palera1n)
- **A10(X) iPads**: iPadOS 17.3.1 (via palera1n)
- **A11 iPhone**: iOS 16.7.5 (通过 palera1n)
- **A12-A14 iPhones**: iOS 16.5.1 (via Dopamine)
- **A12-A14/M1 iPads**: iPadOS 16.5.1 (via Dopamine)
- **A15/A16 iPhones**: iOS 16.5 (via Dopamine)
- **A15/M2 iPads**: iPadOS 16.5 (via Dopamine)

Note that A12 and newer devices running iOS 16.6 or newer do not have a jailbreak, which also inherently means no A17 device has a jailbreak currently.
