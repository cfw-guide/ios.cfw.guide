---
lang: zh_CN
title: 安装 Odysseyra1n (A8X/A9X) (macOS)
description: 在 macOS 平台上为 A8X 和 A9X 设备上安装 Odysseyra1n 的指南
permalink: /installing-odysseyra1n-a8x-a9x/macos
redirect_from:
  - /installing-odysseyra1n-a9x/macos
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - zachary7829
---

## 下载 (macOS)

- 最新版本的 [checkra1n](https://checkra.in)
- 自定义版的 [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![checkra1n 截图](/assets/images/checkra1n.png)

## 安装 checkra1n

::: tip

如果你正在使用 Apple Silicon Mac 和 A9X 设备，在此过程中你会被提示重新插拔设备，请跟随此操作

:::

::: warning

如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::

1. 打开 `pongoOS.zip` 文件，导航到 `PongoConsolidated.bin`，然后提取它
   - 记住提取的位置
2. 打开终端并通过运行 `/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [PongoConsolidated.bin的路径]`，在 CLI 模式下运行checkra1n。
3. 将设备插入电脑
4. 现在将会有提示指引你将设备 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>，点击 `Start` 开始
   - 跟随指示，直到设备黑屏
5. 然后 checkra1n 应该会自动安装

你的设备现在应该会重启

<!--Will probably make this better later on but this will work for now-->

::: tip

此时你可以选择安装 Cydia 而不继续执行 Odysseyra1n 的步骤，但由于以下原因，我们不建议这样做：

- 使用 Odysseyra1n 的系统会更加稳定
- 某些实用的功能 (如shshd，在越狱时自动保存SHSH blobs) 会不可用
- 一些插件可能直接需要 Odysseyra1n 的有关的组件，或者是 Odysseyra1n 环境下进行测试开发的

:::

要安装 Odysseyra1n，请<u>不要</u>打开 checkra1n app 安装 Cydia， 请按照下面的说明安装 Sileo

## Odysseyra1n 脚本

::: tip

你也可以直接在设备上打开此页面，然后通过[快捷指令](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771)来运行此 Odysseyra1n 脚本

:::

1. 在电脑上打开终端应用
2. 确保信任了此电脑
3. 通过运行 `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"` 安装 "homebrew"
4. 通过运行 `brew install libusbmuxd` 安装 "iproxy"
5. 执行此命令来安装 Odyseyra1n 脚本：\`/bin/bash -c "$(curl -fsSL https\://raw\.githubusercontent.com/colstar/Odysey-bootstrap/master/prosecus-deplay-linux-macos.sh)"

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
