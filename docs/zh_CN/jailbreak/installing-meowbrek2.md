---
lang: zh_CN
title: 安装 meowbrek2
description: 安装 meowbrek2 的指南
permalink: /installing-meowbrek2
pkgman: sileo
---

meowbrek2 是一款<router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">半完美越狱工具 (semi-untethered)</router-link>，这意味着设备每次重新启动后都需要重新激活越狱状态

meowbrek2 supports A11 and earlier devices on firmware versions 15.0 to 15.8.1.

::: warning

如果你目前使用的是_有根版(rootful)_ 的 palera1n，或者在 **2023 年 4 月 27 日之前**安装了_无根版(rootless)_ 的palera1n，你首先需要<router-link to="/removing-palera1n">删除有根版 palera1n</router-link> 然后再继续操作

If you are using _rootless_ palera1n, and set it up **after April 27th, 2023**, this is not an issue, and you can continue with these steps.

:::

## 安装 TrollStore

安装 TrollStore 的具体方法取决于你当前的系统版本，请选择适合你当前系统版本的选项，并按照后续步骤进行操作

::: tip

如果你已经安装了 TrollStore，那么你可以跳过此部分

:::

::::: tabs

:::: tab name="TrollHelperOTA (15.0 - 15.4.1)" :default="true"

### 安装 TrollHelper

1. 打开 Safari
2. 访问 [https://api.jailbreaks.app/troll](https://api.jailbreaks.app/troll)
3. 点击 `Install`

一个名为 GTA Car Tracker 的应用程序会被安装至您的设备上，它实际上是TrollHelper

### 安装 TrollStore

1. 打开 `GTA Car Tracker`
2. 点击 Register Persistence Helper\`
3. 点击 `Install TrollStore`

TrollStore应用程序现在应该会被安装到您的设备

::::

:::::tabname="TrollInstallerMDC (15.5 - 15.7.1)"

### 安装要求

- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- 最新版本的 [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

### 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽TrollInstallerMDC `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

### 注入 TrollStore Helper

::: warning

如果您已经打开过了提示, 请在这些步骤之前重启您的设备

:::

1. 打开 TrollInstallerMDC
2. 一旦显示"Successfully replaced Tips binary"，关闭`TrollInstallerMDC`
   - 如果出现错误，关闭 TrollInstallerMDC 并重新打开

### 安装 TrollStore

1. 打开“提示”应用
2. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`

::::

:::: tab name="TrollMisaka (15.7.2 to 15.8.1)"

::: warning

This method may have issues in some cases. If you are having repeated and unresolvable issues, you can follow <router-link to="/installing-meowbrek2-palera1n">Installing meowbrek2 (palera1n)</router-link> instead.

:::

### 安装要求

- 在您的设备上安装了“提示”应用
- The latest version of [AltServer](http://altstore.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- 最新版本的 [iCloud](https://secure-appnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) 如果是在 Windows 上
- The latest version of [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

### 安装应用程序

1. Open AltServer
2. 将设备插入电脑
3. Shift-Click (Windows) or Option-Click (macOS) AltServer in the System Tray or Menu Bar
4. Click `Sideload .ipa`, then select your device
5. Select the TrollMisaka `.ipa` file

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

The TrollMisaka application can now be opened from home screen.

### Adding a Keyboard

1. Open TrollMisaka, then exit the app _while keeping it in the app switcher_
2. Go to `Settings` -> `General` -> `Keyboard` -> `Keyboards` -> `Add New Keyboard...`
3. Select `TrollMisaka`
4. Tap `TrollMisaka`, then toggle on `Allow Full Access`, then tap `Allow`
5. Re-open TrollMisaka

After re-opening TrollMisaka, open the app switcher and then reboot your device.

::: danger

Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.

:::

### 注入 TrollStore Helper

::: warning

这个方法可能需要多次尝试才能成功。

:::

1. 解锁设备
2. Immediately open `Spotlight Search` (via swipping down on the middle of the home screen)
3. Tap the globe icon on the keyboard
   - If needed, select `TrollMisaka` from the list of keyboards
4. Tap `kopen`
   - If the device reboots, try these steps again
5. 点击 `Install TrollStore`
   - If the keyboard app seemingly refreshes, try again, If it fails, try again in Safari instead.

Once it says it's successful, you can continue with the next section.

### 安装 TrollStore

1. Re-open the app switcher
2. Open the TrollMisaka app _from the app switcher_
3. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`

::::

:::::

## 安装 meowbrek2

### 下载

- The latest version of [meowbrek2](https://kok3shidoll.github.io/download/secret/8F38F948-BCF6-46AF-8926-C95D823107B0/meowbrek2_1.1.7_TS.tipa)
  - 请将 meowbrek2 `.tipa` 文件下载到**设备**

### 安装越狱

1. 在主屏幕上打开 `TrollStore`
2. 点击右上角的 +
3. 转到保存meowbrek2 `.tipa` 文件的位置
4. 点击meowbrek2 `.tipa` 文件
5. 点击 `Install`

meowbrek2 app现在应该会被安装到您的设备上

## 运行 meowbrek2

1. 重启设备
   - 这不是必要的操作，但推荐做这样以提高成功率
2. 此后立即从主屏幕上打开 meowbrek2
3. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且没有成功激活越狱状态，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Sileo 已经安装到了主屏幕。 你可以使用 Sileo 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
