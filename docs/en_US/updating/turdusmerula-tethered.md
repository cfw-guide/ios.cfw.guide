---
lang: en_US
title: "Tethered restores using turdus merula"
description: Guide to using turdus merula to restore your device without having shsh blobs
permalink: /turdusmerula-tethered
extra_contributors:
  - kok3shidoll
  - Clarity
  - Mineek
  - Alfie
---

turdus merula is a tool which utilizes a bootrom exploit and a SEP exploit to allow A9(X) and A10(X) devices to restore to older versions of iOS/iPadOS, including those that are not compatible with the latest signed SEP firmware.

::: danger

Unless you're experimenting with older iOS versions or otherwise are a developer needing temporary access to an older iOS version, it is not worth doing a tethered downgrade.

Tethered restores **REQUIRE** a computer to boot your device every time, and cannot be booted at all without one.

:::

::: danger

checkra1n/palera1n do not work on tether downgraded devices. All other jailbreaks should work as normal (albeit any exploit failures will require you to use a computer to boot again).

:::

## Requirements

- An A9(X) or A10(X) device
- macOS 10.12 or later

::: danger

Cellular A10X iPad Pros, as well as some iPhone 7's, will run into issues or not be able to activate after restoring to **iOS 10**, this is due to turdus merula needing to use the latest baseband available for the device on restores, which is incompatible with iOS 10 on some A10(X) devices.

**If you are using an A9(X) device, or are restoring to iOS 11 or later, you can ignore this warning**.

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

### Getting the shcblock

1. Connect your device to your Mac
1. Make sure that your Mac is trusted by your device
1. Enter DFU mode on your device
1. Open a new terminal window and navigate to where you extracted the turdus merula folder to
1. Run `cd turdus_m3rula` to navigate to the folder where turdus_merula is located
1. Run `/usr/bin/xattr -c ./bin/turdusra1n && /usr/bin/xattr -c ./bin/turdus_merula`
1. Run `./bin/turdusra1n -ED`
1. Run `./bin/turdus_merula --get-shcblock [ipsw file]`
    - Replace `[ipsw file]` with the file path of the IPSW file for your version

The shcblock will be saved to the `blocks` folder in the `turdus_m3rula` folder, and your device will reboot after this step is completed.

### Getting the pteblock

1. Re-enter DFU mode on your device
1. Run `./bin/turdusra1n -ED`
1. Run `./bin/turdus_merula --get-pteblock --load-shcblock [shcblock] [ipsw file]`
      - Replace `[shcblock]` with the file path of the shcblock you obtained in the previous section
      - Replace `[ipsw file]` with the file path of the IPSW file for your version

### Restoring the device

1. Re-enter DFU mode on your device
1. Run `./bin/turdusra1n -ED`
1. Run `./bin/turdus_merula -o --load-pteblock [pteblock] [ipsw file]`
    - Replace `[pteblock]` with the file path of the pteblock you obtained in the previous section
    - Replace `[ipsw file]` with the file path of the IPSW file for your version
1. Follow any additional steps that are listed in the terminal window

Your device should now be restored to the targeted firmware version.

### Booting the device

1. Re-enter DFU mode on your device
1. Run `./bin/turdusra1n -TP [pteblock]`
    - Replace `[pteblock]` with the file path of the pteblock you utilized in the previous section

Your device should now boot into the version of iOS you restored to.

::::

:::: tab name="A10(X) devices"

### Restoring the device

1. Connect your device to your Mac
1. Make sure that your Mac is trusted by your device
1. Enter DFU mode on your device
1. Open a new terminal window and navigate to where you extracted the turdus merula folder to
1. Run `cd turdus_m3rula` to navigate to the folder where turdus_merula is located
1. Run `/usr/bin/xattr -c ./bin/turdusra1n && /usr/bin/xattr -c ./bin/turdus_merula && /usr/bin/xattr -c ./bin/lib/libirecv.dylib`
1. Run `./bin/turdusra1n -ED`
1. Run `./bin/turdus_merula -o [ipsw file]`
    - Replace `[ipsw file]` with the file path of the IPSW file for your version
1. Follow any additional steps that are listed in the terminal window

Your device should now be restored to the targeted firmware version.

::: tip

At this stage, files will also be saved into the image4 folder within the `turdus_m3rula` folder. These files are needed in the next section to boot your device.

For ease-of-use, it is recommended to open a Finder window and drag these files into the terminal window itself when running the commands in the next section.

:::

### Booting the device

1. Re-enter DFU mode on your device
1. Run `./bin/turdusra1n -ED`
1. Run `./bin/turdusra1n -t [iBoot.img4] -i [signed-SEP.img4] -p [target-SEP.im4p]`
    - It is recommended to open a Finder window and drag the files from the `image4` folder into the terminal window itself when running this command

Your device should now boot into the version of iOS you restored to.

::::

:::::
