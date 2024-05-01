---
lang: zh_CN
title: Installing ChimeraTV
description: Guide to installing ChimeraTV
permalink: /installing-chimeratv
redirect_from:
  - /chimera-tv
  - /cm-tv
0pkgman: nito.tv
extra_contributors:
  - WhitetailAni
---

ChimeraTV is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

ChimeraTV is capable of jailbreaking all devices on tvOS 12.0 to 12.2 and 12.4.

Due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use Sideloadly to install the ChimeraTV jailbreak application to your Apple TV for use in the next step.

## 下载

- The latest release of [ChimeraTV](https://chimera.coolstar.org/)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上

## 安装应用程序

::: warning

As the Apple TV 4K does not have a USB-C port, you will need to instead navigate to Settings > Remote Apps & Devices > Remote Devices on your Apple TV, rather than plugging it in.

:::

1. 打开 Sideloadly
2. Plug your Apple TV into your computer
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. Drag and drop the ChimeraTV `.ipa` file into Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly must make a request to its servers in order to work with free developer accounts. 如果您不愿意，您可以使用另外一个Apple ID。

The app will now install to your Apple TV. Once that's done, the ChimeraTV application can now be opened from home screen.

## Running ChimeraTV

1. Open the ChimeraTV application from your home screen
2. Click "Jailbreak"
3. Reboot your Apple TV again when prompted
   - If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.
   - This time, it is necessary
4. Once again, open the ChimeraTV application from your home screen immediately after rebooting
5. Click "Jailbreak" again
   - If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.

You should now be jailbroken with nito.tv installed on your home screen. You can use nito.tv to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
