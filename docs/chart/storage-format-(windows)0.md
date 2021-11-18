---
title: "Storage Format (Windows)"
sidebar: false
---

### Required Reading

This is an add-on section for formatting a storage device for use with the StorageMgr kernel plugin.

Additionally, there is an optional section for checking your storage device for errors using h2testw. Depending on the size of your storage device and the speed of your computer, the checking process can take up to several hours!

This page is for Windows users only. If you are not on Windows, check out the [Storage Format (Linux)](storage-format-(linux)) or [Storage Format (Mac)](storage-format-(mac)) pages.

### What You Need

* [zzBlank.img](/assets/files/zzBlank.img)
* The latest version of [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/)
* The latest version of [h2testw](http://www.heise.de/ct/Redaktion/bo/downloads/h2testw_1.4.zip)
  + This is not required if you do not want to check your storage device for errors

### Instructions

#### Section I - Formatting Storage Device

1. Install Win32DiskImager if you have not already
1. Insert your storage device into your computer
1. Launch Win32DiskImager
1. Select `zzBlank.img` as the "Image File"
1. Set "Device" to the drive letter of your storage device
1. Select "Write"
1. Select "Yes" to continue when prompted
1. Select "OK" to dismiss the dialogue box when the write completes
1. Close Win32DiskImager
1. Right-click the drive in Windows Explorer, then select "Format"
1. Set "File system" to "exFAT"
    + If your storage device has a capacity of 256 GB or greater, you must format with a cluster size of 64 KB
1. Select "Start"
1. Select "OK" to continue when prompted
1. Select "OK" to dismiss the dialogue box when the format completes
1. Close the format window

#### Section II - Verifying Storage Device

If you do not want to check your storage device for errors, skip this section.

1. Copy `h2testw.exe` from the h2testw `.zip` to your desktop
1. Insert your storage device card into your computer
1. Run `h2testw.exe`
1. Select "English"
1. Select "Select target"
1. Select your storage device card's drive letter
1. Ensure "all available space" is selected
1. Select "Write + Verify"
1. Wait until the process is completed

If the test shows the result `Test finished without errors`, your storage device card is good and you can delete all `.h2w` files on your storage device card.

If the test shows any other results, your storage device card may be corrupted or damaged and you may have to replace it!

::: tip
Return to [StorageMgr](storagemgr)
:::
