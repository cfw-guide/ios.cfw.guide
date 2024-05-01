---
lang: zh_CN
title: Installing Dopamine (Sideloadly)
description: Guide to installing Dopamine using Sideloadly
permalink: /installing-dopamine-sideloadly
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Dopamine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Dopamine supports A9(X) and later devices on iOS 15.0 to 16.5, A9(X) to A14 and M1 devices on iOS 16.5.1, and A9(X) to A11 devices on iOS 16.6 to 16.6.1.

::: danger

If you're using a beta or release candidate (RC) version of iOS, or if your device is using the preinstalled version of iOS that your device first shipped with, this guide will not work, and you'll need to follow <router-link to="/installing-dopamine">Installing Dopamine</router-link> instead.

:::

::: danger

如果你在使用_有根版(rootlful)_ palera1n，你需要在操作前 <router-link to="/removing-palera1n">移除 palera1n</router-link>

:::

::: danger

If you have previously used Serotonin and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what Bootstrap or Serotonin are, you can ignore this notice and proceed.

:::

::: tip

If you're using an A8(X) iPad, at this time, you should follow <router-link to="/installing-meowbrek2">Installing meowbrek2</router-link> instead.

:::

## 下载

- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- The latest version of [Dopamine](https://ellekit.space/dopamine)

### 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. Drag and drop the Dopamine `.ipa` file into Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

The Dopamine application can now be opened from home screen.

::: danger

如果你的设备是ios16.0 —— 16.6.1，你需要打开开发者模式

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::

## Running Dopamine

1. 重启设备
   - 这不是必要的操作，但推荐做这样以提高成功率
2. Open the Dopamine application from your home screen immediately afterwards
3. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

Sileo现在应该被成功安装了。 你可以使用 Sileo 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

While you are now jailbroken at this point, we need to both update and install some packages so that we're able to both update other packages and have stuff work properly

## Installing necessary software

1. Open the Sileo app
2. Tap on the "Sources" tab
3. Tap on the "ElleKit" repository, then tap on "All Categories"
4. Tap on `ElleKit`
5. Tap "Get"
6. 点击屏幕底部的 "队列"
7. 点击 "确认" 按钮
8. Once finished, tap `Restart SpringBoard Later`
9. Go to the "Search" tab
10. Search for `PreferenceLoader`
11. Tap on `PreferenceLoader`
12. Tap on "Get"
13. 点击屏幕底部的 "队列"
14. 点击 "确认" 按钮
15. Once finished, tap `Restart SpringBoard`

::: tip

After doing all the above steps, you may need to reboot and rejailbreak in order for tweak injection to function properly.

:::

## 安装 TrollStore

::: tip

While Dopamine is now installed and setup, this next section - _while technically optional_ - is **highly recommended**, since it'll allow you to install Dopamine and not have to worry about keeping it signed.

:::

### 安装 TrollStore

1. Open the Sileo app
2. Go to the Search tab and search for `TrollStore Helper`
3. Tap on `TrollStore Helper`
4. Tap "Get"
5. 点击屏幕底部的 "队列"
6. 点击 "确认" 按钮
7. install the `TrollStore Helper` package
8. After TrollStore Helper installs, close Sileo
9. 在主屏幕上打开 `TrollHelper`
10. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

::: danger

Make sure that you do the following steps, or you won't be able to access TrollStore after rebooting your device into stock iOS.

:::

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`
4. Reboot your device, then open the `Tips` app
5. Press `Refresh App Registrations`

TrollStore should now be accessible from the Home Screen. From there, we can use TrollStore to permanently install Dopamine.

### 下载

The latest version of [Dopamine](https://ellekit.space/dopamine)

- Make sure to download the `.ipa` file onto your iOS device

### Installing Dopamine

1. Open TrollStore if it is not open already

- If you're in a different tab, go back to the `Apps` tab

1. 点击右上角的 +
2. Go to where you saved the Dopamine `.ipa` file
3. Tap on the Dopamine `.ipa` file
4. 点击 `Install`

The Dopamine app will now be installed onto your device.
