---
lang: zh_CN
title: 安装 Odysseyra1n (ChromeOS)
description: 在 ChromeOS 上安装 Odysseyra1n 的指南
permalink: /installing-odysseyra1n-chromeos
redirect_from:
  - /installing-checkra1n/chromeos
  - /installing-checkra1n-chromeos
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - stekc
---

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

::: warning

如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::

::: warning

A7 设备在 Linux 上可能无法成功使用 checkra1n 进行越狱，因此你需要使用旧版本的 checkra1n，并在看到 `Right Before Trigger` 后迅速拔插设备

:::

::: danger

这是一篇实验性很强的指南，在操作中有些具体事项可能没有被直接提及。 因此我们更加建议使用其它平台

:::

::: tip

你先需要在你的 ChromeOS 设备上启用开发者模式

:::

## 下载 (ChromeOS)

- 最新版本的 [checkra1n](https://checkra.in)
  - 如果是 A8X 或 A9X 设备，你应该使用 0.12.2 版本的 [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)
  - 如果是A 7 设备，你应该使用 0.10.1 版本的 [checkra1n](https://checkra.in/releases/0.10.1-beta#all-downloads)

![checkra1n 截图](/assets/images/checkra1n.png)

## 准备工作

1. 将下载的 checkra1n 二进制文件移动到 `/usr/local/bin`
   - 可以像下面这样做：
     - 按 `Ctrl` + `Alt` + `T`
     - 运行 `shell`
     - 运行 `mv ~/Downloads/checkra1n /usr/local/bin/`
2. 在终端中运行：`sudo mount -o remount,exec /tmp`
   - 每次重启ChromeOS 后，你都需要这样做
3. 每次需要在 ChromeOS 中使用越狱时，你都需要插入你的设备并手动进入恢复模式

## 安装 checkra1n

1. 在终端中使用 `TERM=linux sudo checkra1n` 运行 `checkra1n` 二进制文件。
   - 如果不成功你可能需要运行 `sudo chmod a+x /usr/local/bin/checkra1n`
   - 如果是 A11 设备，你需要在它运行后进入 `Options`，启用 `Skip A11 BPR Check`
   - 如果你使用的是 iOS 14.6 或更高版本，你需要在它运行后进入 `Options`，启用 `Allow Untested Versions`
   - 如果是 A8X 或 A9X 设备且运行 iOS 14.4 - 14.4.2，你也需要在它运行后进入 `Options`，启用 `Allow Untested Versions`
2. 点击 `Start` 并根据屏幕指示操作
3. 现在将会有提示指引你将设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>，点击 `Start` 开始
   - 跟随指示，直到设备黑屏
4. 然后 checkra1n 应该会自动安装

你的设备现在应该会重启

<!--Will probably make this better later on but this will work for now-->

::: tip

此时你可以选择安装 Cydia 而不继续执行 Odysseyra1n 的步骤，但由于以下原因，我们不建议这样做：

- 使用 Odysseyra1n 的系统会更加稳定
- 某些实用的功能 (如shshd，在越狱时自动保存SHSH blobs) 会不可用
- 一些插件可能直接需要 Odysseyra1n 的有关的组件，或者是 Odysseyra1n 环境下进行测试开发的

:::

## Odysseyra1n 脚本

1. Safari中输入 ios.cfw\.guide/installing-odysseyra1n-chromeos
2. 在设备上点击[此链接](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771)，然后获取该捷径
   - 如果需要，下载快捷指令应用程序
3. 当提示时，选择 `打开`
4. 如有需要按下 `Procursus Bootstraper` 图标，然后点击运行图标
5. 出现任何提示时都按“确定”

::: tip

如果出现关于不受信任的提示，请运行另一个捷径，然后打开“设置”，找到 `快捷指令` 然后打开 `允许不受信任的快捷指令`

:::

你已完成越狱并且Sileo已经安装到了主屏幕。 你可以使用 Sileo 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
