---
title: "Storage Format (Mac)"
sidebar: false
---

### Required Reading

This is an add-on section for formatting a storage device for use with the StorageMgr kernel plugin.

Additionally, there is an optional section for checking your storage device for errors using F3X. Depending on the size of your storage device and the speed of your computer, the checking process can take up to several hours!

This page is for Mac users only. If you are not on Mac, check out the [Storage Format (Windows)](storage-format-(windows)) or [Storage Format (Linux)](storage-format-(linux)) pages.

### What You Need

* The latest release of [F3X](https://github.com/insidegui/F3X/releases/latest)
  + This is not required if you do not want to check your storage device for errors

### Instructions

#### Section I - Formatting Storage Device

1. Insert your storage device into your computer
1. Open the Terminal app
1. Enter `diskutil list` into the terminal
1. Identify which disk is your storage device in the format `/dev/diskX`
1. Enter `diskutil unmount /dev/diskX` and then `sudo dd if=/dev/zero of=/dev/diskX` to format the storage device
1. Remove and reinsert your storage device
1. Enter `sudo newfs_exfat -R /dev/diskX` to format your storage device into exfat
    + If your storage device has a capacity of 256 GB or greater, you must run `sudo newfs_exfat -R  -c 64 /dev/diskX`

#### Section II - Verifying Storage Device

If you do not want to check your storage device for errors, skip this section.

1. Unzip the F3X `.zip` file
1. Insert your storage device into your computer
1. Run the F3X app
1. Select your storage device
1. Press "Start Test"
1. Wait until the process is complete.

If the test shows the result `Success! Your card is ok!` your storage device is good and you can delete all `.h2w` files on your storage device.

If the test shows any other results, your storage device may be corrupted or damaged and you may have to replace it!

::: tip
Return to [StorageMgr](storagemgr)
:::

