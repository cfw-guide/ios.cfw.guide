## Saving Blobs with TSS Saver Website
A12+ Users will need their ApNonce and Generator pair for this method. If you are not jailbroken, follow [the computer-based guide](https://ios.cfw.guide/saving-blobs#saving-blobs-with-computer-a12).
{: .notice--info}
### Getting Generator and ApNonce (Jailbroken A12+ only)
1. If you are using unc0ver on iOS14, install libkrw; If you are using Taurine on iOS14, install libkernrw
1. Open a terminal and run `sudo dimentio > dimentio.txt`
    - Alternatively, you can get your Generator and ApNonce from the Generator tab in TSS Saver App
1. Go to /var/mobile in Filza and open dimentio.txt
1. copy the 0x number after `Current nonce is` at the bottom of the text file as well as the number that comes after `entangled nonce:`. The 0x number is your Generator, and the entangled nonce number is your ApNonce. Keep these safe somewhere, you'll need them later
1. Follow the rest of this guide

### Saving Blobs (All Devices)
1. Connect your iOS Device to your Mac or PC
1. Open iTunes or Finder
  - Windows users must download the [normal version](https://www.apple.com/itunes/) NOT the Windows Store version
1. Navigate to the device summary page
1. Click the Serial Number field twice
  - This should change to show your ECID number
1. Note down this ECID number somewhere where you can read it later
1. Open the [TSS Saver Website](https://tsssaver.1conan.com/v2/)
1. Input your device ECID
1. Select your Device
    - iPhone 6S, 6S Plus, and iPhone SE users will need to get their board configuration by [downloading this app](https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8)
    - A12+ users will need to input ApNonce and Generator pair
1. Click Submit

{% include_relative include/end-of-page.md %}
