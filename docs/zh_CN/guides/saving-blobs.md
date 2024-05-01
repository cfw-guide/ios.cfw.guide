---
lang: 简体中文
title: "保存 Blob"
excerpt: 保存 Blob 以确保将来能够降级 iOS
permalink: /saving-blobs
redirect_from:
  - /blobs
  - /blob
  - /save-blobs
  - /save-blob
  - /saving-blob
extra_contributors:
  - TheHacker894
  - airsquared
  - hopolapopola
  - wr3nch3000
  - Tanbeer191
  - itsnebulalol
---

本文将带你完成保存 SHSH Blob 的全部过程，如果你想要在未来降级到旧版本的 iOS 或 iPadOS ，这是必需的。 下列有多种方法可供你选择。 对于无法越狱的设备，你必须使用电脑

## 使用 shshd 保存 Blob

shshd 是一个可以自动保存 Blob 的插件。 在你安装它之后，你无需手动保存 Blob，因为它会在后台自动保存。 要使用 shshd 你必须先越狱。 如果你没有越狱，请查看 [使用 TSS Saver 网站保存 Blob](#saving-blobs-with-tss-saver-website)

::: warning

shshd 只支持基于 Procursus 的越狱，如 Taurine、Odyssey、Chimera 和 Odysseyra1n。 如果你是用的是 unc0ver 或 checkra1n，请查看 [使用 TSS Saver 应用保存 Blob](#saving-blobs-with-tss-saver-app)

:::

1. 打开你的软件包管理器
1. 搜索 `shshd`
1. 下载并安装
1. 弹出时点击"完成"

安装 shshd 后，每周或每次重新越狱后 Blob 将自动保存。 Blob 也可以在 [TSS Saver 网站](https://tsssaver.1conan.com/v2/)中找到。 要取回，请在"Retrieve"中输入你的ECID

### 手动运行 shshd

你并不需要手动运行 shshd，但你也可以在终端中手动运行它

1. SSH 连接到你的设备或在设备上下载安装 NewTerm 2
1. 在终端中运行 `sudo /usr/sbin/shshd`
    - 如果提示密码，请输入 root 密码(默认为 `alpine`)

## 使用 TSS Saver 应用保存 Blob

越狱设备可以安装 TSS Saver 应用，它允许你通过简单地点击按键来保存Blob。 如果你没有越狱，请查看 [使用 TSS Saver 网站保存 Blob](#saving-blobs-with-tss-saver-website)

1. 在软件包管理器中添加 [repo.1conan.com](https://repo.1conan.com/) <router-link to="/package-managers">源</router-link>
1. 下载并安装 TSS Saver
    - 如果你是在 iOS 14 上使用 unc0ver，还需要下载并安装 `libkrw`
    - 如果你是在 iOS 14 上使用 Taurine，还需要 下载并安装 `libkernrw`
1. 点击 "Save Blobs"
1. 收到确认消息后，点击 "Open"

## 使用 TSS Saver 网站保存 Blob

TSS Saver 网站允许你通过输入设备特定的信息来保存 Blob。 保存完毕后你可以通过再次输入该信息来查看或下载保存的 Blob

A12+ 设备必须越狱才能使用 TSS Saver 网站，因为它还需要输入ApNonce 与 G值(Generator)。 如果你没有越狱，请查看 [使用 blobsaver 保存 Blob](#saving-blobs-with-blobsaver)

### 获取 G 值与 ApNonce (仅 A12+ 的越狱设备)

::: tip

如果你是在 iOS 14 上使用 unc0ver 或 Taurine ，请分别安装 libkrw 或 libkernrw

:::

1. 打开终端运行 `sudo dimentio > dimentio.txt`
    - 或者你可以直接在 TSS Saver 应用里找到 Generator 与 ApNonce
1. 在 Filza 中前往 /var/mobile 然后打开 dimentio.txt
1. 复制文件底部 `Current nonce is`后以 0x 开头的所有字符，与 `entangled nonce:` 后的所有字符。 以 0x 开头的字符就是你的 G 值，"entangled nonce"后的字符就是你的 ApNonce。 将它们记录在安全的位置，之后你需要用到
1. 继续跟随本文操作

### 保存 Blob (所有设备)
1. 将设备连接到你的计算机
1. 打开 iTunes 或 Finder
    - Windows 用户必须下载[普通版本](https://www.apple.com/itunes/)的 iTunes，而不是微软商店版本
1. 转到设备页面
1. 点击显示你设备序列号的地方两次
    - 这将显示你设备的 ECID
1. 记下此 ECID
1. 打开 [TSS Saver 网站](https://tsssaver.1conan.com/v2/)
1. 输入你设备的 ECID
1. 选择你的设备型号
    - iPhone 6S、6S Plus 和 iPhone SE 用户还需要通过从App Store 下载 [AX-CPU](https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8)来查看 Board Config
    - A12+ 设备用户还需要输入 ApNonce 和 G 值
1. 点击 Submit

## 使用 blobsaver 保存 Blob

blobsaver 是一个跨平台程序，兼容 Windows、MacOS 和 Linux。 允许你能够轻松地在任何装置上保存 Blob，无论是否越狱。 虽然此方法不如其它方法方便，但它可适用于大多数设备

### blobsaver

1. 下载安装并打开最新版本的 [blobsaver](https://github.com/airsquared/blobsaver/releases)
1. 将你的设备连接至计算机并解锁你的设备
1. 点击 ECID 右侧的 "Read from device" ，设备的 ECID 会被自动填入
1. 如果你的设备不是 A12+，那么你不需要获取 APNonce，你可以跳过下一步

### 获取你设备特定的 APNonce 和 G 值

请确保在整个过程中你的设备与计算机保持着连接，并处于解锁状态

1. 点击 ApNonce 右侧的 "Read from device"
1. 如果你已经越狱或已经在设备上固定了 G 值，请选择“Jailbroken”。 否则选择 "Unjailbroken"

你的设备将会自动进入恢复模式。 当设备正常启动进系统后，解锁你的设备

::: danger

如果设备没有正常退出恢复模式，请使用 blobsaver "Help" 菜单里的 "Exit Recovery Mode" 退出恢复模式

:::

::: tip

无论你是否越狱，此次读取到的值都可以随时使用来保存 Blob

:::

### 保存 Blob
1. 填写完所有内容后，点击 "Go" 来保存 Blob
1. 你也可以点击 "Save Device" 来保存你的设备信息以在日后保存 Blob

### 在后台自动保存 Blob
1. 可选的，你可以设置 blobsaver 在后台自动保存 Blob，无需手动打开 blobsaver
1. 当你保存了至少一个设备信息后，点击 "Auto-Save Settings"
1. 勾选你想要在后台保存 Blob 的设备，blobsaver 会先测试该设备信息是否正确
1. 你可以点击 "Change Frequency" 来设置后台保存的频率
1. 一切准备就绪后，点击 "Start Background" 来启用
1. 现在你可以关闭 blobsaver，它会根据你设置的频率在后台自动保存 Blob

## 保存 Onboard Blob

保存 Onboard Blob 是指提取你设备上一次恢复时的签名，并将其转变成可用 Blob 的过程。 因为当时你是在签名窗口开放时更新或恢复到你的系统版本的，你可以重新使用这些 Blob，它们依然是有效的。 但是这类 Blob 的具体类型取决于你前往当前版本的方式

### OTA Onboard Blob
如果你是通过设置中软件更新更新到此版本，那么你的 Blob 为 "OTA Blob"。 要使用此类 Blob，必须要利用 **bootrom 漏洞**，并且**只能**在 FutureRestore 中使用 `--use-pwndfu` 参数

### iTunes Onboard Blobs
如果你是通过 iTunes/Finder 更新或恢复到此版本，那么你的 Blob 会像正常的 Blob 一样被保存并且你能够正常使用它们。 但是它们因你当时选择更新/恢复而有所不同

如果你当时是*恢复*到此版本，那么此 Blob 为"Erase"类型，你将**无法**使用 FutureRestore 中的"Update (-u)"选项

如果你当时是*更新*到此版本，那么此 Blob 为"Update"类型，你将**只能**使用 FutureRestore 中的"Update (-u)"选项

### 保存 Onboard Blob

### 使用 Deverser

::: danger

你需要运行 macOS 或 Linux 的计算机来使用此方法，并且需要安装了 OpenSSH 的设备

如果你使用的是 checkra1n/odysseyra1n，那么 OpenSSH 不是必须的，但推荐安装

:::

1. 在 macOS 或 Linux 计算机上，运行 `git clone https://github.com/joshuah345/deverser.git && cd deverser` 从GitHub 克隆 Deverser 文件
    - 如果你已经完成了此操作，运行 `cd deverser` 与 `git pull` 获取最新更新
2. 运行`chmod +x deverser.sh` 以允许其执行，然后运行 `./deverser.sh` 开始运行脚本
3. 如果提示安装 img4tool，请回复 `Yes`
    - img4tool 能够将提取的原始文件转变成可用的 SHSH Blob
4. 输入你设备的 IP 地址
    - 在 checkra1n/odysseyra1n 上，你也可以运行 iproxy
        - 在 macOS 上，打开新的终端窗口，使用 `brew install libimobiledevice libirecovery` 指令安装 libimobiledevice，然后运行 `sudo iproxy 22 44`
        - 在 Linux 上，我们建议在设备上使用 OpenSSH，但你也可以手动安装 [libimobiledevice](https://cadoth.net/~nyuszika7h/ios-builds/libimobiledevice-static-linux.tar.gz)
    - 要使用 OpenSSH，请在设备上安装它，并在 WiFi 设置中获取设备的 IP 地址
5. 脚本运行过程中会两次请求你输入设备的 root 密码
    - 如果你不清楚，默认密码为 `alpine`

运行结束后，你可以在你运行 Deverser 的目录下 (通常为 ~/deverser) 找到名为 `(设备 ECID).dumped.shsh` 的 Blob 文件

### 使用 SSH Ramdisk

::: danger

你需要运行 macOS 或 Linux 的计算机来使用此方法，并且你的设备需要是运行 iOS 12+ 的 checkm8 可用设备

此方法更为高级，不推荐给初学者

:::

1. 前往[此链接](https://github.com/verygenericname/SSHRD_Script)然后配置好 Ramdisk
    - 推荐使用 `14.8` 作为 ramdisk 版本，你也可以选择其它任何版本
2. 运行 `./sshrd.sh dump-blobs`
3. 最后运行 `./sshrd.sh ssh`，然后在 SSH 会话中运行 `reboot` 
    - 你也可以手动强制重启设备

运行结束后，你可以在你克隆仓库的目录下 (通常是 ~/SSHRD_Script) 找到名为 `dumped.shsh` 的 Blob 文件

### 使用 System Info

::: danger

此方法已经失效

:::

1. 添加 [https://apt.arx8x.net](https://apt.arx8x.net) 源 <router-link to="/package-managers">至你的软件包管理器中</router-link>
2. 下载安装 `System Info` ![](https://imgur.com/a/g8XZPrM)
3. 打开设置应用，前往 `通用 > 关于本机`
4. 下翻到 `ECID` 部分
5. 在 `ECID` 上左滑，然后点击 `APTicket`
4. 点击 `Submit`

完成后，会有"APTicket Submitted"的提示框弹出。 然后你可以在 [shsh.host](https://shsh.host) 中查看或保存此 Blob

### 检查 Blob 类型

要检查刚才保存的 Blob 类型，请使用 [img4tool](https://github.com/tihmstar/img4tool)
1. 在网络上下载 IPSW 和 OTA zip 文件，然后解压出 BuildManifest.plist 文件
    - 善用搜索引擎
2. 运行  `img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 and img4tool -v OTA_BuildManifest.plist -s blob.shsh2`
3. 通过查看输出内容查看使用哪一个 BuildManifest 文件 img4tool 提示成功了
