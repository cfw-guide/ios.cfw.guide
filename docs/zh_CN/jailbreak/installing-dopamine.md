---
lang: zh_CN
title: 安装 Dopamine
description: 安装 Dopamine 的指南
permalink: /installing-dopamine
pkgman: sileo
redirect_from:
  - /installing-fugu15max
extra_contributors:
  - opa334
  - iCraze
---

Dopamine 是 <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">一款半完美越狱(semi-untethered) 工具，</router-link>这意味着每次设备重启后都需要重新运行越狱app以激活越狱状态

支持的设备和版本 A9--A16:15.0—16.5，A9--A14,M1:15.0—16.5.1，A9--A11:15.0—16.6.1

::: tip


如果你正在使用 A8(X) iPad，你应该 <router-link to="/installing-meowbrek2">安装 meowbrek2</router-link> 如果是是 iOS 9 或更新的版本

:::


::: danger


如果你现在正在使用 *rootful 模式* 的 palera1n，你需要先 <router-link to="/removing-palera1n">移除 rootful 模式 palera1n</router-link> 移除了该越狱工具

:::


::: danger


如果您先前使用过Serotonin或Bootstrap，您需要先将其完全移除，然后再继续。

如果你不知道什么是Bootstrap或Serotonin，你可以忽略这个通知并继续。

:::


我们将首先使用多种方法之一安装 TrollStore (取决于您当前的设备和 iOS 版本)，然后通过 TrollStore 安装 Dopamine 。

## 安装TrollStore

安装 TrollStore 的具体方法取决于你当前的系统版本，请选择适合你当前系统版本的选项，并按照后续步骤进行操作.

::: tip


如果你已经安装了 TrollStore，那么你可以跳过此部分

:::


::::: tabs


:::: tab name="TrollHelperOTA (15.0 to 15.4.1 / A12 and later 15.5 to 15.6.1)" :default="true"


::: warning


A11和早期设备在 iOS 15.0 - 15.4.1 上支持。

A12及更晚的设备：支持iOS 15.0 至 15.6.1

:::


### 安装 TrollHelper

1. 打开 Safari
1. 根据您的设备，输入以下网址：
    - A12及更晚的设备，输入[https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
    - A11及更早的设备，输入[https://api.jailbreaks.app/troll](https://api.jailbreaks.app/troll)
1. 点击 `Install`

一个名为 `GTA Car Tracker` 的应用程序会被安装至您的设备上，它实际上是TrollHelper

### 安装 TrollStore

1. 打开 `GTA Car Tracker`
1. 点击 `Register Persistence Helper`
1. 点击 `Install TrollStore`

TrollStore应用程序现在应该会被安装到您的设备

:
:::


:::: tab name="TrollInstallerMDC (15.7 to 15.7.1 / 16.0 to 16.1.2 / A11 and earlier 15.5 to 15.6.1)"


### 安装要求

- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://socket-jb. app)
- 如果在 Windows 上，最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)
- 最新版本的 [TrollInstallerMDC](https://github. com/opa334/TrollStore/releases)

### 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽TrollInstallerMDC `.ipa`文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `< 你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击`信任<你的 Apple ID>`

TrollInstallerMDC现在可以从主屏幕中打开。

::: danger


如果您的设备是iOS 16.0 到 16.1.2，您需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::


### 注入 TrollStore Helper

::: warning


如果您已经打开过了提示, 请在这些步骤之前重启您的设备

:::


1. 打开 TrollInstallerMDC
1. 一旦显示"Successfully replaced Tips binary"，关闭`TrollInstallerMDC`
    - 如果出现错误，关闭 TrollInstallerMDC 并重新打开

### 安装 TrollStore

1. 打开“提示”应用
1. 点击 `Install TrollStore`这一步中国大陆用户一定要开VPN

您的设备应该会自动注销，TrollStore并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
1. 点击 `Settings`，然后点击 `Install Persistence Helper`
1. 在应用列表中选择 `Tips`

:
:::


:::: tab name="TrollMisaka (15.7.2 to 15.8.1)"


::: danger


This method can be very unreliable in some cases. If you are having issues with doing these steps, you can follow <router-link to="/installing-dopamine-sideloadly"></router-link>

:::


### 安装要求

- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上
- 最新版本的 [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

### 安装

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的计算机已经被信任并允许查看您设备的内容
1. 拖拽 TrollMisaka `.ipa` 文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `< 你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击 `信任"<Your Apple ID>`

TrollMisaka 现在可以从主屏幕中打开。

### 添加 TrollMisaka 键盘

1. 打开 TrollMisaka，然后退出，注意*不要杀掉后台*
1. 前往 `设置` -> `通用` -> `键盘` -> `键盘` -> `添加新键盘..`
1. 选择 `TrollMisaka`
1. 点击 `TrollMisaka`，然后打开`允许完全访问`，点击`允许`
1. 重新打开 TrollMisaka

重新打开 TrollMisaka 后，不要杀掉后台，重新启动设备

::: danger


在安装好 TrollStore 之前，不要关闭 TrollMisaka，否则就得重复上述操作

:::


### 注入 TrollStore Helper

::: warning


这个方法可能需要多次尝试才能成功

:::


1. 解锁设备
1. 立即在主屏幕上滑到 `Spolight 搜索页面`
1. 点击键盘地球图标
    - 如果键盘没有切换到 `TrollMisaka`，手动选择它
1. 点击 `kopen`
    - 如果设备自动重启，请重试
1. 点击 `Install TrollStore`
    - 如果键盘刷新了，请重试，如果一直失败，请在 Safari 中重试

如果显示 successful，你可以进行下一步了

### 安装 TrollStore

1. 打开多任务管理器
1. 在*多任务管理器*中打开 TrollMisaka
1. 点击 `Install TrollStore`这一步中国大陆用户一定要开VPN

您的设备应该会自动注销，TrollStore 并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
1. 点击 `Settings`，然后点击 `Install Persistence Helper`
1. 在应用列表中选择 `Tips`

:
:::


:::: tab name="TrollStar (16.2 to 16.6.1)"


::: warning


在某些情况下，这种方法可能有问题。 If you are having repeated issues with this method, you can follow <router-link to="/installing-dopamine-sideloadly">Installing Dopamine (Sideloadly)</router-link> instead.

:::


### 安装要求

- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上
- 最新版本的 [TrollStar](https://github.com/34306/TrollStar/releases/latest)

### 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的计算机已经被信任并允许查看您设备的内容
1. 拖拽 TrollStar `.ipa` 文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `< 你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击 `信任<Your Apple ID>`

::: danger


如果您尚未启用，您先需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::


### 注入 TrollStore Helper

::: warning


这个方法可能需要多次尝试才能成功

:::


1. 打开 TrollStar
1. Tap `Click here to start!`
    - 如果设备自动重启，等待几分钟，然后重试
1. 点击 `Install TrollStore Helper to Tips`
1. 点击 `Respring to Apply`

设备将会自动注销

### 安装 TrollStore

1. 解锁设备
1. 打开“提示”应用
1. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore 并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
1. 点击 `Settings`，然后点击 `Install Persistence Helper`
1. 在应用列表中选择 `Tips`

:
:::


::
:::


## 安装 Dopamine

### 下载

最新版本的 [Dopamine](https://ellekit.space/dopamine)
  - 请将 `.ipa` 文件下载到设备

### 安装 Dopamine

1. 打开 TrollStore
  - 确保位于 `Apps` 选项卡
1. 点击右上角的 `+`
1. 转到保存 Dopamine`.ipa` 文件的位置
1. 点击 Dopamine`.ipa` 文件
1. 点击 `Install`

Dopamine app现在应该会被安装到您的设备上

### 运行 Dopamine

1. 重启设备
    - 这不是必要的操作，但推荐做这样以提高成功率
1. 此后立即从主屏幕上打开 Dopamine
1. 点击 "Jailbreak"

::: tip


如果你的设备在运行 Dopamine 后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::


Sileo现在应该被成功安装了。 你可以使用Sileo安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

现在处于越狱状态了，但需要更新和安装一些依赖软件包，以便能够更新安装其它插件

## 安装必要软件包

1. 打开 Sileo
1. 点击 "软件源" 选项卡
1. 点击 "ElleKit" 源，然后点击"所有类别"
1. 点击 `ElleKit`
1. 点击“获取”
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击 `重启SpringBoard`
1. 点击底部选项卡 "搜索"
1. 搜索 `PreferenceLoader`
1. 点击 `PreferenceLoader`
1. 点击“获取”
1. 点击屏幕底部的 "队列"
1. 点击 "确认" 按钮
1. 完成后，点击 `重启SpringBoard`

::: tip


在完成所有上述步骤后，你可能需要重新启动并重新越狱以使插件注入能够正常工作

:::
