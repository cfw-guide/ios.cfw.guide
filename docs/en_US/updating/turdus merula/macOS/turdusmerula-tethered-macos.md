---
lang: en_US
title: Using turdus merula (Tethered, macOS)
description: Guide to using turdus merula to restore your device without having shsh blobs
permalink: /turdusmerula-tethered-macos
extra_contributors:
  - kok3shidoll
  - Clarity
  - Mineek
  - Alfie
---

turdus merula is a tool which utilizes a bootrom exploit and a SEP exploit to allow A9(X) and A10(X) devices to restore to older versions of iOS/iPadOS, including those that are not compatible with the latest signed SEP firmware.

::: danger

Tethered restores **REQUIRE** a computer to boot your device every time, and cannot be booted at all without one.

Because of this limitation, unless you're linked to this guide directly, linked to this guide as a troubleshooting step, experimenting with older iOS versions or otherwise are a developer needing temporary access to an older iOS version, it is not worth doing a tethered downgrade.

:::

::: warning

checkra1n/palera1n require extra steps in order to be able to jailbreak, and cannot be run standalone on tethered downgraded devices.

:::

## Requirements

- An A9(X) or A10(X) device
- macOS 10.12 or later

::: danger

Cellular A10X iPad Pros, as well as some iPhone 7's, will run into issues or not be able to activate after restoring to **iOS 10**, this is due to turdus merula needing to use the latest baseband available for the device on restores, which is incompatible with iOS 10 on some A10(X) devices.

**If you are using an A9(X) device, or are restoring to iOS 11 or later, you can ignore this warning**.

:::

::: warning

Depending on the version you are restoring to, you may need to tether downgrade to a different version before downgrading to your target version:
  - If you are restoring to 10.0 to 10.3.2, you will need to tether downgrade to [iOS 10.3.3](https://appledb.dev/firmware/iOS/14G60.html) first
  - If you are restoring to 9.0 to 9.3.5, you will need to tether downgrade to [iOS 10.2.1](https://appledb.dev/firmware/iOS/14D27.html) first

**If you are restoring to iOS 11 or later, you can ignore this warning**.

:::

## Downloads

- The latest release of [turdus merula](https://sep.lol)
- The IPSW file for your device from [appledb.dev](https://appledb.dev)
  - This should be for the iOS version you would like to restore to

## Using turdus merula

The following steps will slightly vary depending on if the device you are restoring is an A9(X) or A10(X) device.

::::: tabs

:::: tab name="A9(X) devices" :default="true"

::: warning

A9(X) restores do have a small failure rate. If the restore fails, retry again from the start of this section.

:::

### Getting the shcblock (pre-restore)

::: tip

The shcblock that is grabbed here is designed to *only* be used during the initial tethered restore to the target iOS/iPadOS version.

:::

1. Connect your device to your Mac
1. Make sure that your Mac is trusted by your device
1. Enter Recovery mode on your device
1. Open a new terminal window and navigate to where you extracted the turdus merula folder to
1. Run `cd turdus_m3rula` to navigate to the folder where turdus_merula is located
1. Run `/usr/bin/xattr -cr ./bin`
1. Run `./bin/turdusra1n -D`
    - Follow the on-screen instructions to enter DFU mode when prompted
1. Run `./bin/turdus_merula --get-shcblock [ipsw file]`
    - Replace `[ipsw file]` with the file path of the IPSW file for your version

The shcblock will be saved to the `block` folder in the `turdus_m3rula` folder, and your device will reboot after this step is completed.

### Restoring the device

1. Re-enter Recovery mode on your device
1. Run `./bin/turdusra1n -D`
    - Follow the on-screen instructions to enter DFU mode when prompted
1. Run `./bin/turdus_merula -o --load-shcblock [shcblock] [ipsw file]`
    - Replace `[shcblock]` with the file path of the shcblock you obtained in the previous section
    - Replace `[ipsw file]` with the file path of the IPSW file for your version
1. Follow any additional steps that are listed in the terminal window

Your device should now be restored to the targeted firmware version.

### Getting the shcblock (post-restore)

::: tip

The shcblock that you got in the pre-restore section is not intended to be used after restoring. Once you've obtained the post-restore shcblock, the original shcblock can be discarded.

:::

1. Run `./bin/turdusra1n -g`
    - Follow the on-screen instructions to enter DFU mode when prompted

The shcblock will be saved to the `block` folder in the `turdus_m3rula` folder, and your device will reboot after this step is completed.

### Getting the pteblock

1. Run `./bin/turdusra1n -g -i [signed-SEP.img4] -C [shcblock]`
    - Replace `[signed-SEP.img4]` with the file ending in with `signed-SEP.img4` that can be located within the `image4` folder within the `turdus_m3rula` folder, and can be dragged in from a Finder window
    - Replace `[shcblock]` with the file path of the post-restore shcblock you obtained in the previous section
    - Follow the on-screen instructions to enter DFU mode when prompted

The pteblock will be saved to the `block` folder in the `turdus_m3rula` folder, and your device will reboot after this step is completed.

### Booting the device

1. Run `./bin/turdusra1n -TP [pteblock]`
    - Replace `[pteblock]` with the file path of the pteblock you utilized in the previous section
    - Follow the on-screen instructions to enter DFU mode when prompted

Your device should now boot into the version of iOS you restored to.

::::

:::: tab name="A10(X) devices"

### Restoring the device

1. Connect your device to your Mac
1. Make sure that your Mac is trusted by your device
1. Enter Recovery mode on your device
1. Open a new terminal window and navigate to where you extracted the turdus merula folder to
1. Run `cd turdus_m3rula` to navigate to the folder where turdus_merula is located
1. Run `/usr/bin/xattr -cr ./bin`
1. Run `./bin/turdusra1n -D`
    - Follow the on-screen instructions to enter DFU mode when prompted
1. Run `./bin/turdus_merula -o [ipsw file]`
    - Replace `[ipsw file]` with the file path of the IPSW file for your version
1. Follow any additional steps that are listed in the terminal window

Your device should now be restored to the targeted firmware version.

::: tip

At this stage, files will also be saved into the image4 folder within the `turdus_m3rula` folder. These files are needed in the next section to boot your device.

For ease-of-use, it is recommended to open a Finder window and drag these files into the terminal window itself when running the commands in the next section.

:::

### Booting the device

1. Run `./bin/turdusra1n -t [iBoot.img4] -i [signed-SEP.img4] -p [target-SEP.im4p]`
    - It is recommended to open a Finder window and drag the files from the `image4` folder into the terminal window itself when running this command
    - Follow the on-screen instructions to enter DFU mode when prompted

Your device should now boot into the version of iOS you restored to.

::::

:::::
