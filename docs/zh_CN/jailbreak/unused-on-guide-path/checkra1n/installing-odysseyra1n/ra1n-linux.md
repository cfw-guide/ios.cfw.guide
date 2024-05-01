---
lang: zh_CN
title: 安装 Odysseyra1n (Linux)
description: 在 Linux 上安装 Odysseyra1n 的指南
permalink: /installing-odysseyra1n/linux
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - zachary7829
---

::: danger

如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ， 那么本指南不适用于你，你应该<router-link to="/using-odysseyn1x">使用 Odysseyn1x</router-link>

:::

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

::: warning

如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::

::: warning

A7 设备在 Linux 上可能无法成功使用 checkra1n 进行越狱，因此你需要使用旧版本的 checkra1n，并在看到 `Right Before Trigger` 后迅速拔插设备。 因此我们更建议 A7 设备<router-link to="/installing-chimera">安装 Chimera</router-link>

:::

## 下载 (Linux)

- 最新版本的 [checkra1n](https://checkra.in)
  - 如果是 A8X 或 A9X 设备，你应该使用 0.12.2 版本的 [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)
  - 如果是A 7 设备，你应该使用 0.10.1 版本的 [checkra1n](https://checkra.in/releases/0.10.1-beta#all-downloads)

![checkra1n 截图](/assets/images/checkra1n.png)

## 安装 checkra1n

::: tip

checkra1n 对基于Debian的 Linux 发行版(如Ubuntu) 提供了原生支持。 因此建议查看 checkra1n 团队提供的[指南](https://checkra.in/linux)

:::

1. 在终端中使用 `./checkra1n` 运行 `checkra1n` 二进制文件。
   - 如果不成功你可能需要运行 `sudo chmod a+x ./checkra1n`
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

要安装 Odysseyra1n，请<u>不要</u>打开 checkra1n app 安装 Cydia， 请按照下面的说明安装 Sileo

## Odysseyra1n 脚本

::: tip

你也可以直接在设备上打开此页面，然后通过[快捷指令](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771)来运行此 Odysseyra1n 脚本

:::

1. 在电脑上打开终端应用
2. 确保信任了此电脑
3. 通过执行以下命令安装 "iproxy"
   - Ubuntu/Debian：`sudo apt install libusbmuxd-tools`
   - Arch Linux：`pacman -S libusbmuxd`
4. 执行此命令来安装 Odyseyra1n 脚本：\`/bin/bash -c "$(curl -fsSL https\://raw\.githubusercontent.com/colstar/Odysey-bootstrap/master/prosecus-deplay-linux-macos.sh)"

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
