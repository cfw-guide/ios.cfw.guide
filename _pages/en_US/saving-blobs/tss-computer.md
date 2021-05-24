## Saving Blobs with Computer

### blobsaver

1. Download, install, and open the blobsaver v3.0 beta from [here](https://github.com/airsquared/blobsaver/discussions/242).
2. Connect your iOS device to your computer and make sure it is unlocked.
3. Click on the first "Read from device" button, which will fill your ECID and device information.
4. If your iOS device is not A12 or higher, you are not required to get an APNonce and you may skip the next step.

### Get your device-specific APNonce and generator

Make sure your device is connected and unlocked throughout this process.
{: .notice--info}

1. Click on the second "Read from device" button next to the APNonce field.
2. If you are jailbroken or have a generator/apnonce pair already set on your device you would like to keep, select "Jailbroken". Otherwise, select "Unjailbroken".


Your device will reboot into recovery mode multiple times. When you reboot into normal OS mode, unlock your iOS device.
{: .notice--success}

If you get stuck in recovery mode, try using the "Exit Recovery Mode" option from the "Help" menu in blobsaver.
{: .notice--danger}

These values can be reused at any time to save blobs whether or not you're jailbroken.
{: .notice--info}


### Save Blobs
1. Once you have filled out all the information, click "Go" to save blobs.
2. You can also click "Save Device" to save your current device's information, so you can save blobs for it again later.

### Save blobs automatically in the background
1. You can also optionally set up blobsaver to save blobs automatically in the background, without having to manually open blobsaver.
2. Once you have one or more saved devices, click "Background Settings" to begin setting it up
3. Select which devices you would like to save automatically in the background, and blobsaver will first test them to ensure the device information is correct.
4. You can then change the freqency interval blobs are saved at, using the "Change Frequency" button.
5. Once you are ready, click "Start Background" to enable it.
6. You may now close blobsaver, and blobs will automatically be saved in the background at the interval you set.


{% include_relative include/end-of-page.md %}
