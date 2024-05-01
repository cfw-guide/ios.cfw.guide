---
lang: zh_CN
title: 安装 unc0ver (Fugu14)
description: 利用 Fugu14 安装 unc0ver 的指南
permalink: /installing-unc0ver-fugu14
pkgman: cydia
redirect_from:
  - /installing-uncover-fugu14
  - /installing-unc0ver-(fugu14)
  - /installing-uncover-(fugu14)
---

unc0ver 是一款<router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">半完美越狱工具 (semi-untethered)</router-link>，这意味着设备每次重新启动后都需要重新激活越狱状态

利用 Fugu14 安装 unc0ver 的方法适用于运行 iOS 14.3 - 14.5.1 的 A12 及更新的设备

::: warning

此方法不适用于测试版系统。 如果你的设备是 iOS 14.3，14.4 或 14.5 的 beta 版本，请查看 <router-link to="/installing-taurine-trollstore">安装 Taurine (TrollStore)</router-link>

:::

我们将使用 AltStore 配置相关内容以进行越狱

## 下载

- 最新版本的 [unc0ver](https://unc0ver.dev)
- 最新版本的 [AltStore](http://altstore.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- 最新版本的 [iCloud](https://secure-appnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) 如果是在 Windows 上

## 安装应用程序

1. 为你的操作系统下载 AltStore
2. 启动 AltStore/AltServer
   - 在 macOS 上打开邮件应用并在顶部菜单栏中打开 `邮件` -> `偏好设置`
   - 点击 `通用` 选项卡，在底部找到 `管理插件...` 并打开，勾选 `AltPlugin` 然后应用
3. 将设备连接到你的 Mac 或 PC
4. 点击菜单栏/系统托盘中的 AltStore/AltServer
5. 点击 Install AltStore
   - 跟随屏幕提示操作
6. 打开你的设备的设置转到到 `通用` -> `设备管理` 并验证 AltStore
7. 在设备上下载 [unc0ver](https://unc0ver.dev)，并在AltStore 中打开 `.ipa`
   - 确保你的设备与 Mac 或 PC 连接到了同一个 WiFi
8. `.ipa`安装后，你将会看到提示 “Jailbreak Requires Untethering” 弹出，点击 `Install Untethered Jailbreak`
   - 如果你在安装 `.ipa` 后没有看到该提示，那么说明你的设备/系统版本不支持该方法，请返回到 <router-link to="/get-started">开始</router-link>.
9. AltStore 将在完成后安装 Placeholder 程序，点击 `Open Placeholder`
10. 点击 `Setup Fugu14`，完成后点击 `OK`
11. 重新打开 AltStore
12. AltStore 将会修补 Placeholder 程序，完成后再次点击 `Open Placeholder`
13. 点击 `Install Untether`
14. 安装完成后，点击 `Reboot Now` 并等待设备进行重启
15. 重新打开 AltStore
16. 点击 `Install unc0ver` 等待 unc0ver 进行安装
17. 点击 `Open unc0ver`

## 运行 unc0ver

1. 打开设置菜单并禁用 `Disable Auto Updates`
   - unc0ver 默认会打开此选项以禁用系统 OTA 升级，但推荐关闭它因为它可能会在我们手动升级系统时造成问题
2. 点击 "Done"
3. 点击 "Jailbreak"
4. 出现提示时重新启动设备
5. 重启后立即从主屏幕上打开 unc0ver
6. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

::: warning

如果你遇到了 `rootFS already mounted, delete the OTA update` 的错误，请查看 <router-link to="/troubleshooting/#rootfs-already-mounted">故障排除</router-link> 页面

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择<router-link to="/installing-sileo">安装 Sileo</router-link>

:::
