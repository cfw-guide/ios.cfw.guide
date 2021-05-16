## Saving Onboard Blobs

Saving Onboard Blobs is the process of saving your previous signature from when you last updated, and converting that into a usable blob. Because you updated while the version was still signed, you can re-use these blobs, and they will still be valid. However, the type of blobs that you save will depend on how you updated to your current version.

### OTA Onboard Blobs 
If you updated to the version you are saving Onboard Blobs on using the Settings app over-the-air, then the blobs will be "OTA Blobs". These blobs require a **bootrom exploit** to be used, and **only** can be used with the `--use-pwndfu` argument in FutureRestore.

### iTunes Onboard Blobs 
If you updated/restored to the version you are saving Onboard Blobs on using iTunes / Finder, then the Onboard Blobs will be saved like normal blobs and you'll be able to use them. However, they differ according to whether you restored or updated using a computer.

If you *restored* using a computer, your blobs will be "Erase" blobs, and **cannot** be used with the "Update (-u)" option in FutureRestore.

If you *updated* using a computer, your blobs will be "Update" blobs, and **can only** be used with the "Update (-u)" option in FutureRestore.

### Save Onboard Blobs

1. Add the [https://apt.arx8x.net](https://apt.arx8x.net) repo to your favorite [package manager](package-managers)
2. Download the Tweak `System Info`
![](https://imgur.com/a/g8XZPrM)
3. After downloading System Info, open Settings and navigate to `General > About` 
4. Scroll down to `ECID`
5. Slide left on `ECID` and tap `APTicket`
4. Tap `Submit`

A popup will appear with the message "APTicket Submitted" once finished. You can now access your blobs on [shsh.host](https://shsh.host)
{: .notice--success}

## Checking Blob Type

To check what type of blobs you have, use (https://github.com/tihmstar/img4tool)[img4tool]
1. Download the IPSW and OTA zip from https://ipsw.me/, then extract the BuildManifest.plist from both of the iPSWs.
2. Run  `img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 and img4tool -v OTA_BuildManifest.plist -s blob.shsh2`
3. Scrub through the output and check which BuildManifest img4tool reported a success with.

{% include_relative include/end-of-page.md %}
