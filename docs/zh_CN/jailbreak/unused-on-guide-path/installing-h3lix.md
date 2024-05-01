---
lang: zh_CN
title: 安装 h3lix
description: 安装 h3lix 的指南
permalink: /installing-h3lix
redirect_from:
  - /installing-helix
  - /helix
  - /h3lix
  - /h3
  - /he
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
extra_contributors:
  - hopolapopola
---

h3lix 支持所有运行 iOS 10.0 - 10.3.4 的32位设备

请注意，h3lix 越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后重新利用漏洞来激活越狱。 下文也会说明这点

由于免费开发者账号自签限制，大多数情况下你需要每 7 天用电脑重新安装h3lix app到你的设备上

我们将使用 Sideloadly 和 patcher 脚本安装h3lix 程序到您的设备

## 下载

- 来自 Legacy Jailbreak Archives 的 [h3lix RC6](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/UgV1HAJT)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- macOS 和 Linux：Jakeajames 的 [patcher 脚本](https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46)
- Windows：[winh3lixpatcher](https://github.com/kawaiizenbo/winh3lixpatcher/releases)

## 修补 h3lix

::: tip

如果你不想进行此操作并且你的设备是 iOS 10.3.x，你可以以使用 <router-link to="/installing-socket">安装 Socket</router-link>

:::

::: tip

### macOS 和 Linux

1. 打开终端
2. 将目录更改为保存了patcher脚本和 h3lix.ipa 文件的文件夹
   - 如果你保存它们到下载，这将是 `cd ~/Downloads`
3. 在终端中输入 `./patch.sh`
4. 拖拽 h3lix `.ipa` 文件到终端中
5. 输入 "h3lix.ipa"
6. 回车

:::

::: tip

### Windows

1. 把 h3lix 的 ipa 文件拖到 winh3lixpatcher.exe 文件上

:::

现在你可以对修补后 h3lix 签名安装了

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽h3lix `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`VPN与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

h3lix app 现在可以从主屏幕中打开

## 运行 h3lix

1. 从主屏幕中打开 h3lix
2. 点击 "Jailbreak"

::: tip

如果显示 `Uicache Failed!`，这意味之前修补过程没有成功完成，请仔细检查遵循了上面的步骤

:::

::: warning

如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你可以使用 Cydia 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等

::: tip

如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::
