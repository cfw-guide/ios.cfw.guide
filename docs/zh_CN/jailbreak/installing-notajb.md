---
lang: zh_CN
title: 安装 Def1nit3lyN0tAJa1lbr3akTool
description: 安装 Def1nit3lyN0tAJa1lbr3akTool 的指南
permalink: /installing-notajb
pkgman: sileo
---

Def1nit3lyN0tAJa1lbr3akTool 是一款<router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">半完美越狱工具 (semi-untethered)</router-link>，这意味着设备每次重新启动后都需要重新激活越狱状态

The tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 16.0 to 16.6.1.

We will first use Sideloadly to sideload either TrollInstallerMDC or TrollStar, then use either TrollInstallerMDC or TrollStar to then install TrollStore, and then install Def1nit3lyN0tAJa1lbr3akTool from there.

::: warning

如果你在使用_有根版(rootlful)_ palera1n，你需要在操作前 <router-link to="/removing-palera1n">移除 palera1n</router-link>

If you are using _rootless_ palera1n, while you won't have to do anything, note that you **will lose your existing jailbreak setup** by following these steps.

:::

## 安装 TrollStore

安装 TrollStore 的具体方法取决于你当前的系统版本，请选择适合你当前系统版本的选项，并按照后续步骤进行操作

::: tip

如果你已经安装了 TrollStore，那么你可以跳过此部分

:::

::::: tabs

:::: tab name="TrollInstallerMDC (16.0 to 16.1.2)" :default="true"

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

::: danger

如果您尚未启用，您先需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::

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

:::: tab name="TrollStar (16.2 to 16.6.1)"

### 安装要求

- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- The latest version of [TrollStar](https://github.com/34306/TrollStar/releases/latest)

### 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. Drag and drop the TrollStar `.ipa` file into Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

::: danger

如果您尚未启用，您先需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::

### 注入 TrollStore Helper

::: warning

这个方法可能需要多次尝试才能成功。

:::

1. Open TrollStar
2. 点击Kopen
   - If the device reboots, wait a few minutes, then try again
3. Tap `Install TrollStore Helper to Tips`
4. Wait 10-15 seconds, then tap `kclose`
5. Tap `Respring to Apply`

Your device will respring after you tap `Respring to Apply`.

### 安装 TrollStore

1. 解锁设备
2. 打开“提示”应用
3. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`

::::

:::::

## 安装 Def1nit3lyN0tAJa1lbr3akTool

### 下载

- 最新版本的 [Def1nit3lyN0tAJa1lbr3akTool](https://github.com/KpwnZ/Def1nit3lyN0tAJa1lbr3akTool/releases/latest)
  - 请将 Def1nit3lyN0tAJa1lbr3akTool `.ipa` 文件下载到**设备**

### 安装越狱

1. 返回 TrollStore 的 `Apps` 选项卡
2. 点击右上角的 +
3. 转到保存Def1nit3lyN0tAJa1lbr3akTool `.ipa`文件的位置
4. 点击 Def1nit3lyN0tAJa1lbr3akTool `.ipa`文件
5. 点击 `Install`

Def1nit3lyN0tAJa1lbr3akTool app 将被安装到你的设备上

## 运行 Def1nit3lyN0tAJa1lbr3akTool

1. 重启设备
   - 这不是必要的操作，但推荐做这样以提高成功率
2. 此后立即从主屏幕上打开 Def1nit3lyN0tAJa1lbr3akTool
3. Tap "Start"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Sileo 已经安装到了主屏幕。 你可以使用 Sileo 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
