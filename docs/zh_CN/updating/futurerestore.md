---
lang: 简体中文
title: "使用 FutureRestore 和 Blob 恢复系统"
description: 使用 FutureRestore 并利用 Blob 来恢复系统的指南
permalink: /futurerestore
redirect_from:
  - /future-restore
  - /restoring-to-14-3
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - CoocooFroggy
---
## 注意事项
如果你的设备是运行 iOS 15.2 或更高版本的 A10 设备，你应该查看[这个](https://gist.github.com/aac55c97f7925cddcf5ec3167f85dfe8)教程。 注意如果你的设备支持iOS 16 (包括 A12+ 设备)，由于Cryptex1和SEP/BB 不兼容，你**无法**按照本指南操作。 想要了解更多有关信息，请查看[这个页面](https://gist.github.com/Cryptiiiic/b82133ac290070939189e1377dc3ac85)

## 安装要求

- 保存了你想要前往版本的 Blob
  - Blob 必须属于**你的设备**，你无法使用来自其它设备的 Blob
- 越狱设备 **或** 运行 iOS 15.0 - 15.1.1 的 A10 - A11 设备

::: danger

你**必须**先确保最新正在签署的 SEP/基带与你想要恢复到的系统版本相兼容以防止白苹果或无法激活等问题。 你可以查看 [SEP/BB 表格](https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0)。 如果单元格内显示"Compatible"，那么你可以还原到那个版本

:::

## 下载

- 最新版本的 [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- 来自[ipsw.me](https://ipsw.me)的 IPSW 文件
  - 版本应该与你保存的 Blob 相同
- 在 Windows上，确保安装了 [iTunes](https://www.apple.com/itunes/)
  - 下翻选择 Windows build，微软商店版的 iTunes 不能用
- 如果是运行 iOS 15.0 - 15.1.1 的 A10 设备：
  - 最新版本的 [TrollStore](https://github.com/opa334/TrollStore/releases)
  - 最新版本的 [TrollNonce](https://github.com/opa334/TrollNonce/releases)

## 开始 (越狱设备)

1. 打开软件包管理器
1. 添加 [repo.1conan.com](https://repo.1conan.com) 源
1. 下载并安装 dimentio
1. 下载并安装 NewTerm2
2. [寻找G值](#finding-the-generator)

## 开始 (未越狱设备)

1. 转到 [TrollStore](https://github.com/opa334/TrollStore) GitHub 页面跟随指示安装 TrollStore
   - 如果表格中显示“不支持”并且你的设备无法越狱，或者你不是 A11 及更早的设备，那你将无法继续操作
2. 安装 TrollStore 后，通过 TrollStore 安装 [TrollNonce](https://github.com/opa334/TrollNonce/releases)
3. 执行下面的步骤

## 寻找G值

::: danger

确保不要编辑到了 Blob 文件！ 这样做会使 Blob 无效

:::

1. 在文本编辑器中打开你的 Blob 并搜索 `generator` ![G 值图示](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg)

1. 记下 `<string>` 中的值
    - 它应该是以 `0x` 开头然后跟随着16个字符，这些字符是字母与数字的组合。 这就是 G值

**注意：**如果没有找到 G 值，请尝试记起保存 Blob 时使用的越狱工具。 如果您正在使用 unc0ver，你的 G 值应该是 `0x1111111111111111`，如果使用的是Chimera/Odyssey/Taurine，那么应该是 `0xbd34a880be0b53f3`

## 固定随机值 (未越狱)

1. 在设备上打开 NewTerm 2然后运行` su root -c 'dimentio [你刚刚获取的 G 值]'`

1. 当要求密码时，请输入你的 root 密码
    - 默认密码为 `alpine`，并不是你的锁屏密码
1. 运行命令后，应该会显示一长串文本
1. 在文本末尾附近，你应该可以看到显示了 `Set nonce to [G 值]`

## 固定随机值 (越狱)

::: warning

此方法不适用于 A9 设备和运行 iOS 15.2 或更新版本的 A10 设备。 如果你无法越狱，你需要查看[这个](https://gist.github.com/aac55c97f7925cddcf5ec3167f85dfe8)教程

:::

1. 打开 TrollNonce
2. 选择 `Set Nonce`，然后输入你刚刚在 Blob 中找到的 G值， 然后点击 `Set`

### 在计算机上操作

::: danger

再强调一遍：你**无法**在任何支持 iOS 16的设备上使用 FutureRestore。 按照下列的步骤操作将导致运行失败或无法激活设备，这两者发生后都需要还原到正在被签署的最新 iOS版本。 尽管你无法在这些设备上降级，但你可以使用另外的方法升级到特定已经关闭签名的系统版本，具体信息可以查看 <router-link to="/updating-blobless">升级 (无需Blob)</router-link> 页面

:::

1. 将设备设备连接至计算机
1. 确保信任了此电脑
    - 可选的，你可以通过 iTunes 或 Finder为你的设备创建完整的备份
1. 在你的计算机上打开 FutureRestoreGUI
    - 如果有任何杀毒软件报毒，请添加信任 - 它是安全的
1. 打开 FutureRestoreGUI 后，你应该可以看到它的菜单 ![FutureRestoreGUI 主菜单页面](/assets/images/futurerestore-gui.png)

1. 点击 `Settings` 然后启用`Futurerestore Beta` 选项，然后点击 `Download FutureRestore`。 **你只需要在macOS 或 Linux 平台上这样做**
  - Windows 用户应在[这里](https://cdn.cryptiiiic.com/bin/Windows/x86_64/futurerestore/futurerestore-Windows-x86_64-v2.0.0-test-Build_304-RELEASE.exe)下载 beta 版。 下载完成后，点击 `Select FutureRestore Binary/Executable` 然后定位到你刚才下载的文件。 选择该文件然后点击 `打开`
1. 点击 `Select Blob File...` 然后选择你的 Blob .shsh2 文件
1. 点击 `Select Target iPSW File...` 然后选择你的 .ipsw 文件
1. 点击 Next 转到 Options 菜单 ，确保勾选了 `Extra Logs`
1. 如果你不是降级，你可以在 Options 菜单里安全勾选 `Preserve Data` 以保存数据。 但是在降级时勾选它可能是危险的
1. 在任何现代设备上都不要勾选 `AP Nonce Collision`
1. 勾选 `No RSEP`
1. 点击 Next 转到 Controls 菜单
1. 点击 `Start Futurerestore`

如果你在运行过程中遇到任何问题，请查看 <router-link to="/futurerestore-help">FutureRestore 帮助页面</router-link>，如果你仍然无法解决问题，请在 r/jailbreak [Discord 服务器](https://discord.gg/9apvC4C3CC)中 #genius-bar 板块寻求帮助
