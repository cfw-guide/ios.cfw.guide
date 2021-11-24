---
lang: en_US
title: Installing h3lix
description: Guide to installing H3lix
permalink: /installing-h3lix
---

h3lix is capable of jailbreaking every 32bit iOS device on firmware version 10.0 up to 10.3.3.

Note that the h3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.

We will use Sideloadly and a patcher script to install the application to your device.

## Downloads

- The latest version of [h3lix](https://h3lix.tihmstar.net/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- Jackajames' [patcher script](https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46)
- A Mac

## Patching the application

1. Open the Terminal application
1. Change directory to the folder where you saved the script and h3lix.ipa files
   - If you saved them to Downloads, this would be `cd ~/Downloads`
1. Type `./patch.sh` in the terminal
1. Drag and drop the h3lix `.ipa` file into the terminal
1. Type "h3lix.ipa"
1. Press Enter

You now have a patched h3lix ipa that you can sign

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the h3lix `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The h3lix application can now be opened from home screen.

## Running h3lix

1. Open the h3lix application from your home screen
1. Tap "Jailbreak"

::: tip
If the app displays `Uicache Failed!` this means the signing process was not done properly and you should double check you followed the steps above properly
:::

::: warning
If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](/faq/#what-are-tweaks), themes and more.
