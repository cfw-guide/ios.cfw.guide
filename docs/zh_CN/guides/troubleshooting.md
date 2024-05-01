---
lang: 简体中文
title: "故障排除"
description: 解决越狱设备上的常见问题。
permalink: /故障排除
extra_contributors:
  - iCrazeiOS
  - hopolapopola
  - Tanbeer191
  - TheHacker894
  - raizo
  - Superuser
---

## Bootloops 和 respring loops

### Respring Loops

无限respring是由不兼容的插件导致的，设备在越狱状态下陷入无限respring

虽然没有简单的方法来诊断引起无限respring的原因，但最有可能的是你最近安装/更新的插件与你的iOS版本或其他插件不兼容。

#### 半(不)完美越狱

::: tip

半不完美越狱 (semi-tethered jailbreak) 是指在设备重新启动后，需要通过计算机上的一个应用程序引导来进行越狱的越狱方式。

半完美越狱 (semi-untethered jailbreak) 是指设备在重新启动后，需要通过设备上安装的一个应用程序或通过一个网站来进行越狱的越狱方式。

:::

为了摆脱无限 respring ，[强制重启您的设备](#How-to-exit-dfu-mode). 一旦设备重新启动后，在越狱工具设置中禁用插件注入。 重新越狱后，你应该能够打开你的软件包管理器，移除最近安装或更改的插件，它们可能导致了无限respring。

在最坏的情况下，若最终无法诊断或解决这个问题，您可以在 [r/jailbreak Discord服务器](https://discord.gg/jb)中寻求帮助，或在越狱工具中恢复 rootFS。

#### 完美越狱

::: tip

完美越狱 (untethered jailbreak) 是指在设备重新启动后，越狱状态仍然能够保持不变的越狱。

:::

在完美越狱中，无限respring很容易与无限重启 (bootloop) 混淆，因为即使重新启动设备，你依然会陷入无限 respring中。

为了在完美越狱设备中避免潜在的无限respring风险，您需要[强制重启](#How-to-exit-dfu-mode)设备并按住音量上键，由于越狱工具的不同，最好的方法是一直按住音量上键，直到设备完全启动进入iOS。

即使您多次尝试了这样操作，发现在按住音量上键时依然无法正常启动进入iOS；您的设备可能处于[无限重启](#Bootloops)中。

### 无限重启 (bootloop)

无限重启是因为系统文件损坏或存在硬件故障而造成的不可恢复错误。 在现代iOS版本中，通过意外或有意的手段导致设备陷入无限重启的可能性较小，但仍然存在。

可以通过看见持续不断出现的苹果标志(白苹果)来判断设备出现了无限重启，即使您已经强制重启了设备。

为了摆脱无限重启，你必须对设备进行的DFU恢复。

## 如何进入DFU模式

#### 有实体Home键的设备 (iPhone 6s或更早)：

1. 同时按住Home键和锁定按键。
1. 8秒后，松开锁定按键，并继续按住Home键

#### iPhone 7/7+，iPod 第七代和 iPad 2018款：

1. 如果还没有开机，请打开iPhone/iPad
1. 使用数据线将设备连接至电脑
1. 启动 iTunes (或在 macOS Catalina 和更新版本中的 Finder)，并查看iPhone/iPad 是否被成功识别
1. 同时按住侧边按键和音量下键
1. 8秒后，松开侧边按键，并继续按住音量下键

#### 没有实体Home键的设备，iPhone 8/8+，iPad Air 5和iPad Mini 6：

1. 如果还没有开机，请打开iPhone/iPad
1. 使用数据线将设备连接至电脑
1. 启动 iTunes (或在 macOS Catalina 和更新版本中的 Finder)，并查看iPhone/iPad 是否被成功识别
1. 按住音量上键，紧接着按住音量下键
1. 按住电源键直到屏幕变为黑色
1. 松开电源键
1. 按住电源按钮和音量下按键，等候5秒
1. 松开电源键，但继续按住音量下键5秒

## 如何退出DFU模式

#### 有实体Home键的设备 (iPhone 6s或更早)：

按住Home键和锁定按键，直到设备重启。

#### iPhone 7/7+，iPod 第七代和 iPad 2018款：

按住侧边按键和音量下键，直到设备重启。

#### 没有实体Home键的设备，iPhone 8/8+，iPad Air 5和iPad Mini 6：

1. 快速按下音量上键
2. 快速按下音量下键
3. 按住侧边按键直到设备重启。

## Chimera，Odyssey和Taurine上的常见错误

### ERR_Jailbreak

::: danger

如果是在使用 taurine-permanent 时遇到此问题，请查看[当使用taurine-permanent时遇到ERR_Jailbreak](#ERR_Jailbreak-when-using-taurine-permanent)。

:::

这是因为你之前使用过越狱。 要解决这个问题，您需要还原rootFS：

1. 重启设备
1. 打开Odyssey 或 Taurine
1. 打开 `Restore Rootfs` 选项
1. 点击 Jailbreak按钮

恢复rootFS完成后，请尝试再次越狱

### ERR_Already_Jailbreak和ERR_KernRW (Taurine)/ERR_TFP0 (Odysey)
`ERR_Already_Jailbroken` 表示越狱过程被中断。 `ERR_KernRW` 和 `ERR_TFP0` 表示漏洞使用失败。 两者都可以同样方式解决：

1. 重启设备
1. 打开Odyssey 或 Taurine
1. 点击 Jailbreak按钮

::: tip

越狱不会每次都百分百成功，您可能需要多次尝试

:::

### 在初次使用 Odyssey 1.4.2 越狱后打开 Sileo 提示“Installation Error”

删除当前安装的Odysey版本，安装[最新版本的 Odysey](https://theodyssey.dev)，然后恢复 rootFS 后重新越狱。

### 在使用Taurine 越狱后一段时间无法打开 NewTerm 或 Cr4shed (以及其他应用)

::: tip

如果您使用的是 14.3 及更高版本*或者*是 A12 或更新的设备，你很可能已经重新启动 (这意味着你不再处于越狱状态) ，或者可能有其他与越狱无关的问题导致了此情况。

:::

如果您使用的是 14.0 至 14.2 *并且* 为 A11 或更早的设备，这个问题是由于越狱工具停止 codesign 之前，一些插件和程序使用的库的组件已经在运行所导致的。 当发生这种情况时，无法使用插件和相关程序。

解决这个问题的最简单办法是重新启动并重新越狱。 或者如果您不想再遇到这个问题，您可以使用 <router-link to="/installing-odysseyra1n">Odysseyra1n</router-link>，因为Taurine 和 Odysseyra1n 都彼此相互兼容，并且 Odysseyra1n 不会受这个问题的影响。

### 当使用 taine-permanent 时遇到 ERR_Jailbreak

更新到最新版本的 taurine-permanent

### 使用Chimera 1.6.1 或 Taurine 1.1.2 初次越狱时 Sileo 不出现

- 如果您在 Chimera 上有这个问题，请获取[最新版本的 Chimera](https://chimera.coolstar.org/)
- 如果您在Taurine上有这个问题，请获取[最新版本的Tauline](https://taurine.app/)

## unc0ver 常见错误

### iOS 14 上unc0ver 的普遍性问题

::: tip

尽管这些问题在 iOS 14 上是最常见的，但有些问题甚至可能出现在早期版本的 iOS 上

:::

在 iOS 14上使用 unc0ver时，常常出现以下问题：
  - 应用程序在启动时卡住
  - 各种 App Store 相关的问题(包括无法下载应用或在应用内购买)
  - 在越狱状态下无法接电话
  - 使用移动数据时存在问题(例如无法加载网页或其他在线服务)
  - 无法保存、拍摄或查看屏幕截图
  - Safari不加载页面或无限加载页面
  - 共享菜单不能正常工作
  - CarPlay 相关问题

::: warning

如果您在使用 Fugu14 来实现对 unc0ver 的永久签名，可能会更大程度上遇到这些问题，以及一些 Fugu14 独有的问题，例如：
  - 无法查看电池数据
  - 更频繁和随机的内核崩溃

:::

为了**临时性**解决这些问题，可以在设备的终端程序 (如 NewTerm) 中输入`launchctl reboot userspace`来进行软重启

### rootFS already mounted

1. 打开设置应用
1. 转到`通用`-> `储存空间`
    - 可能显示为`iPhone储存空间`，`iPad储存空间`或`iPod储存空间`
1. 滚动页面找到下载了的系统更新
1. 点击`删除`
1. 重新运行 unc0ver

如果问题依旧存在，或者根本没有下载过更新，您可能需要手动下载OTA更新并删除。 请尝试以下操作：

1. 打开 unc0ver 应用程序
1. 点击右上角的设置图标
2. 取消勾选所有选项
3. 开启 `Restore RootFS`
4. 在右上角点击 `Done`
5. 转到越狱选项卡然后点击 `Restore RootFS`
    - 如果按钮显示的是 `Jailbreak`, 请返回并检查是否 `Restore RootFS` 是唯一启用的选项
1. 当弹出有关的提示框，点击 `OK`
    - 可能需要一点时间
    - 如果失败，请从头开始重试
1. 完成后，再次点击 `OK`，您的设备将会自动重启
1. 打开设置应用
1. 转到`通用`-> `软件更新`
1. 下载软件更新，但是**不要安装它**
1. 返回到`通用`
1. 下载完成后，转到`储存空间`
    - 可能显示为`iPhone储存空间`，`iPad储存空间`或`iPod储存空间`
1. 滚动页面找到下载了的系统更新
1. 点击`删除`
1. 找到 unc0ver 应用程序并点击它
1. 点击`删除`
1. 再次[安装 uc0ver ](/installing-unc0ver)但是不要打开
1. 开启飞行模式并立即运行越狱
    - 这可能需要多次尝试直到成功运行

::: tip

如果问题依旧存在，请前往 r/Jailbreak [Discord 服务器](https://discord.gg/jb)寻求帮助。

:::

### 在使用Batchomatic 或 IAmLazy 这类插件后无法使用 unc0ver 重新越狱或还原rootFS

如果遇到这种情况，解决这个问题的可能性取决于您的的iOS版本：

- 如果您的的 iOS 版本在14.3或以下 (不包括11.x或A12(X) 12.1.3-12.4.1) ，请使用其它越狱工具， <router-link to="/restoring-rootfs">进行恢复rootFS，</router-link> 具体越狱工具的选择请参照您的设备型号与系统版本
- 如果您的 iOS 版本为 14.4 至 14.5.1，请尝试在 Fugu14 中恢复 rootFS
- 如果您的iOS版本为14.6至14.8之间，或者属于第一组排除的范围，那么你只能选择等待另一个越狱工具的发布，或等待 unc0ver 更新以修复此问题，或者进行DFU恢复到最新的iOS版本，但会因此失去可以越狱的机会。


## 修复Sileo插件安装错误

为了说明此部分内容，我们假设你正在在 Taurine/Odyseyra1n 上运行 Sileo 。

为了确定你遇到的错误类型，当在Sileo中安装或卸载插件时出现错误时，你需要点击`显示详细信息`

如果下述内容对你没有帮助，请前往 Sileo [Discord 服务器](https://discord.gg/Sileo)上寻求支持。

### Syntax error: "(" unexpected
这个错误表明您尝试安装/移卸载的插件的开发者编写了不正确的安装/卸载脚本。 您需要Filza来解决这个问题。

#### 卸载插件插件时出现此问题
1. 打开 Filza 并转到 `/Library/dpkg/info`
1. 找到与出错插件对应的 .postinst 或 .postrm 文件，例如，如果ShortMoji 2出现安装错误，那么`com.miro.shortmoji2.postinst`就是需要编辑的文件；如果出现卸载错误，那么`com.miro.shortmoji2.postrm`就是需要编辑的文件。
1. 点击并按住文件，直到菜单出现
1. 点击`打开方式`
1. 点击`文本编辑器`
1. 找到文件的第一行显示 `#!/bin/sh`的地方
1. 将 `sh` 更改为 `bash`
1. 点击`保存`
1. 打开 Sileo
1. 卸载插件
   - 对于付费的插件，如果您想要安装，您需要向开发人员提交错误报告
   - 对于免费的插件，您可以向开发者提交错误报告。 如果您想直接安装该插件，请进行以下步骤

#### 编辑插件以修复错误 (仅对于免费插件)
1. 在 Safari 中打开[Parcility](https://parcility.co)
1. 搜索您想要安装的插件
   - 如果它没有出现在搜索中，您将必须等待开发者更新他们的插件
1. 点击 `下载`
1. 文件下载完成后，点击Safari下载菜单中的文件
1. 点击 "分享" 按钮
1. 点击`保存到Filza`
1. 点击`保存`
1. 打开Filza，它将打开到你下载插件文件的文件夹
1. 点击你想要修复的插件
1. 滚动以选择`解压`
1. 打开输出文件夹，并转到`DEBIAN`
1. 重复上文中`卸载插件插件时出现此问题`中的步骤2-8
1. 转到插件的文件夹
1. 点击并按住插件文件夹
1. 点击`创建DEB`
1. 点击并按住由此生成的deb 文件
1. 点击`打开方式`
1. 点击 `Sileo`
1. 点击`获取`

::: tip

在越狱社区中一些开发者在他们的安装/卸载脚本中调用了错误的 shell。 直到2021年4月，大多数越狱工具将 `/bin/sh` 指向 `/bin/bash` ，因此开发者可以使用 `#!/bin/sh` 来指示使用哪个 shell，即使他们使用了Bash的特性。 2021年4月，运行在Chimera、Odyssey、Taurine和Odysseyra1n上的Procursus切换到了一个不同的、性能更高的shell。 这导致了这些格式不正确的脚本出现问题。

:::

### Exec format error
这个错误表明您在尝试安装/卸载的插件的开发者省略了安装/卸载脚本的关键部分。 您需要Filza来解决这个问题。

#### 卸载插件插件时出现此问题
1. 打开 Filza 并转到 `/Library/dpkg/info`
1. 找到与出错插件对应的 .postinst 或 .postrm 文件，例如如果ShortMoji 2出现安装错误，那么`com.miro.shortmoji2.postinst`就是需要编辑的文件
1. 点击并按住文件，直到菜单出现.
1. 点击`打开方式`
1. 点击`文本编辑器`
1. 在文件开头添加一个新的行称， `#!/bin/bash`
1. 点击`保存`
1. 打开 Sileo
1. 卸载插件
1. 转到`软件源`选项卡
1. 向下滑动并刷新软件源
1. 转到`搜索`选项卡
1. 输入 `libiosexec1` 至搜索框
1. 安装开发者为Hayden Seay的`libiosexec1` 插件
1. 再次尝试安装

::: tip

2021年5月，Procursus试图迁移到一个不再处理这种安装错误的dpkg版本，因为开发者应该在他们的脚本中包含 `#!/bin/sh` 或 `#!/bin/bash` 的调用。 在本文撰写时，Procursus的开发者已经创建了一个补丁，`libiosexec`，重新添加了对这个错误处理。 如果您仍然遇到此错误，您可能有一段时间没有更新了。

:::
