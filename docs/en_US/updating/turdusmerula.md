---
lang: en_US
title: "Restoring with blobs using turdus merula"
description: Guide to using turdus merula to restore your device 
permalink: /turdusmerula
redirect_from:
  - /turdus_merula
extra_contributors:
  - kok3shidoll
  - Clarity
  - Mineek
  - Alfie
---

turdus merula is a tool which utilizes a bootrom exploit and a SEP exploit to allow restoring A9(X) and A10(X) devices to restore to older versions of iOS/iPadOS, including those that are not compatible with the latest signed SEP firmware.

::: danger

While turdus merula also supports tethered downgrades (which do not require blobs, but require a computer to boot your device every time), this guide does not cover them, and they are not recommended for most people.

:::

## Requirements

- shsh2 blobs saved for the version you want to restore to
  - These blobs must be for **your** device only; you cannot use other people's blobs
  - If you are trying to restore to iPadOS 16.0 or later, you also need to have saved cryptex1 information for the version you want to restore to within your shsh2 blobs
- An A9(X) or A10(X) device
- macOS

::: danger

Cellular A10X iPad Pros, as well as some iPhone 7's, will run into issues or not be able to activate after restoring to **iOS 10**, this is due to turdus merula needing to use the latest baseband available for the device on restores, which is incompatible with iOS 10 on some A10(X) devices.

**If you are using an A9(X) device, or are restoring to iOS 11 or later, you can ignore this warning**.

:::

## Downloads

- The latest release of [turdus merula](https://sep.lol)
- The IPSW file for your device from [appledb.dev](https://appledb.dev)
  - This should be the same iOS version as your blob

## Finding the generator

::: danger

Make sure you do not edit the blob file. Doing so will make it invalid and unusable with turdus merula.

:::

::: tip

If you already know the generator of the blob that you are using to restore, you can skip this section.

:::

1. Open a terminal window and navigate to the directory your blobs are located
1. Run `cat [shsh blob].shsh2 | grep -A 1 "generator"`
    - Replace `[shsh blob]` with the name of your blob file

Take note of the output listed in the <string> field, as it will be needed in a later step.

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

### Restoring the device

1. Re-enter DFU mode on your device
1. Run `./bin/turdusra1n -EDb [generator]`
    - Replace `[generator]` with the generator you obtained in the previous section
1. Run `./bin/turdus_merula -w --load-shsh [shsh blob] --load-shcblock [shcblock] [ipsw file]`
    - Replace `[shsh blob]` with the file path of your shsh blob
    - Replace `[shcblock]` with the file path of the shcblock you obtained in the previous section
    - Replace `[ipsw file]` with the file path of the IPSW file for your version
1. Follow any additional steps that are listed in the terminal window

Your device should now be restored to the targeted firmware version.

::::

:::: tab name="A10(X) devices"

1. Connect your device to your Mac
1. Make sure that your Mac is trusted by your device
1. Enter DFU mode on your device
1. Open a new terminal window and navigate to where you extracted the turdus merula folder to
1. Run `cd turdus_m3rula` to navigate to the folder where turdus_merula is located
1. Run `/usr/bin/xattr -c ./bin/turdusra1n && /usr/bin/xattr -c ./bin/turdus_merula && /usr/bin/xattr -c ./bin/lib/libirecv.dylib`
1. Run `./bin/turdusra1n -EDb [generator]`
    - Replace `[generator]` with the generator you obtained in the previous section
1. Run `./bin/turdus_merula -w --load-shsh [shsh blob] [ipsw file]`
    - Replace `[shsh blob]` with the file path of your shsh blob
    - Replace `[ipsw file]` with the file path of the IPSW file for your version
1. Follow any additional steps that are listed in the terminal window

Your device should now be restored to the targeted firmware version.

::::

:::::
