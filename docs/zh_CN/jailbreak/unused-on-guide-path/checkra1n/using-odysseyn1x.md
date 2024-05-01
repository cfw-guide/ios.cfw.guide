---
lang: zh_CN
title: 使用 Odysseyn1x
excerpt: 通过 Odysseyn1x 安装 palera1n 的指南
permalink: /using-odysseyn1x
pkgman: sileo
redirect_from:
  - /installing-odysseyn1x
  - /using-odysseynix
  - /odysseyn1x
  - /odysseynix
  - /using-bootra1n
  - /using-bootrain
  - /bootra1n
  - /bootrain
  - /using-checkn1x
  - /using-checknix
  - /checkn1x
  - /checkn1x
extra_contributors:
  - stekc
  - ssalagginkool
  - bbaovanc
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - itsnebulalol
---

::: danger

如果你正在使用 Windows 上的虚拟机 (例如 Virtualbox、VMWare、WSL 等) ，那么本指南不适用于你，你需要获取一个可启动的的介质，并按照以下步骤使用它

:::

::: warning

如果你的电脑使用的是AMD Ryzen 系列 CPU ，你也可能会遇到一些问题。 如果确实遇到了问题，最好还是用 Mac 或 Intel CPU 的电脑。

:::

::: warning

A7 设备可能无法成功使用 Odysseyn1x 越狱，因此你需要使用旧版本的 Odysseyn1x，并在看到 `Right Before Trigger` 后迅速插拔设备。 因此我们更建议 A7 设备<router-link to="/installing-chimera">安装 Chimera</router-link>

:::

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

Odysseyn1x 是一个可启动的 Linux 微系统，可以让你快速在兼容设备上运行 palera1n。 checkra1n 支持运行 iOS 12.0 -14.8.1 的 A7 - A11 设备

!!!include(./docs/en_US/jailbreak/checkra1n/include/odysseyra1n-explanation.md)!!!

在 iOS 14 中，A11 设备在越狱状态下无法使用任何 SEP 功能。 SEP 功能包括诸如密码、Face ID/Touch ID和 Apple Pay 等功能

## 安装要求

- 一个至少 256MB 大的 U盘
  - 如果你没有 U盘但有其他可支持启动的介质 (如 CD 或 DVD 等)，那么你可以使用它
- 最新版本的 [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases)
  - 如果是 A7 设备，你应该使用 v2.12-checkra1n-0.10.1 版 [Odysseyn1x](https://github.com/raspberryvonie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1)
  - 对于64位计算机，请下载 "AMD64" 版本
    - "AMD64" 只是架构的名称而并非 AMD 处理器的计算机！
  - 对于32位计算机，请下载 "i686" 版本
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

![Odysseyn1x 的菜单截图](/assets/images/Odyseyn1x.png)

## 安装 Ventoy

1. 下载并解压 `Ventoy.zip` 文件
2. 插入你的 U盘然后运行 `Ventoy2Disk.exe`
3. 选择你刚刚插入的 U盘来作为 Odysseyn1x 启动盘
   - 你的 U盘将会被格式化
   - 请确认在操作前备份了数据
4. 点击`安装`并确认格式化 U盘
   - 在操作完成之前不要拔掉 U盘
5. 安装完毕后，复制刚才下载的 Odysseyn1x iso 文件到 U盘

## 启动 Odysseyn1x

1. 重新启动你的电脑，进入主板 BIOS 设置中禁用 Secure Boot，然后选择从你的 U盘启动
   - 具体操作方法因主板不同而异
   - 搜索你的 PC 或主板品牌了解如何进入 BIOS
2. 看到显示器显示 Ventoy 后，回车进入 Odysseyn1x

## 运行 checkra1n

::: warning

如果您正在使用 USB-C转 Lightning 数据线来进行操作，您可能会遇到无法进入DFU 模式的问题

如果你确实有此类问题，请使用 USB-A 转 Lightning 数据线，并且最好要有个 USB-C 转 USB-A 适配器

:::

1. 一旦成功启动进入 odysseyn1x ，请选择 `checkra1n`
   - 如果是 A8X 或 A9X 设备，请选择 `checkra1n (A8X/A9X)`
   - 如果是 A11 设备，你需要进入 `Options`，启用 `Skip A11 BPR Check`
   - 如果你使用的是 iOS 14.6 或更高版本，你需要进入 `Options`，启用 `Allow Untested Versions`
2. 点击 `Start` 并根据屏幕指示操作
3. 现在将会有提示指引你将设备进入 <router-link to="/faq/#what-is-dfu-mode">DFU 模式</router-link>，点击 `Start` 开始
   - 跟随指示，直到设备重启黑屏
4. 设备启动后，你可以退出 checkra1n，但不要关闭电脑

<!--Will probably make this better later on but this will work for now-->

::: tip

此时你可以选择安装 Cydia 而不继续执行 Odysseyra1n 的步骤，但由于以下原因，我们不建议这样做：

- 使用 Odysseyra1n 的系统会更加稳定
- 某些实用的功能 (如shshd，在越狱时自动保存SHSH blobs) 会不可用
- 一些插件可能直接需要 Odysseyra1n 的有关的组件，或者是 Odysseyra1n 环境下进行测试开发的

:::

## Odysseyra1n 脚本

::: tip

你也可以直接在设备上打开此页面，然后通过[快捷指令](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771)来运行此 Odysseyra1n 脚本

:::

以下步骤只需要执行一次并且是可选的，但建议完成这些步骤以获得更流畅的体验

1. 解锁设备
2. 确保信任了此电脑
3. 在 Odysseyn1x 中选择 `Odysseyra1n`
4. Sileo 现在会被安装到你的设备
5. 不要关闭 Odysseyn1x，因为之后你需要用它重新越狱

!!!include(./docs/en_US/jailbreak/checkra1n/include/no-loader.md)!!!
!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
