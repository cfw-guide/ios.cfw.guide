## Saving Onboard Blobs

Onboard Blobs are blobs that are saved on the device itself. Unlike normal blobs, you can save onboard blobs on unsigned versions as long as you're on that version of iOS. There are 2 types of Onboard blobs


### OTA Onboard Blobs 
If you updated to the version you are saving Onboard Blobs on using the settings app, then the blobs will be saved as "OTA Blobs". You will be able to use these in the very near future.

### iTunes Onboard Blobs 
If you updated/restored to the version you are saving Onboard Blobs on using a computer, then the Onboard Blobs will be saved like normal blobs and you'll be able to use them.

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

{% include_relative include/end-of-page.md %}