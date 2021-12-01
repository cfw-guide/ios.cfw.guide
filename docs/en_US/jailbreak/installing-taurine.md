---
lang: en_US
title: Installing Taurine
description: Guide to installing Taurine
permalink: /installing-taurine
redirect_from:
  - /taurine
  - /tr
pkgman: sileo
extra_contributors:
  - hopolapopola
---

Taurine is a [semi-untethered jailbreak](/types-of-jailbreak/#semi-untethered-jailbreaks), meaning it requires a app to re-apply the exploit after a reboot.

The tool is compatible with jailbreaking devices on iOS/iPadOS versions from 14.0 to 14.3.

Due to how semi-untethered jailbreaks work, the app will need to be [re-signed](/resigning-apps) once every 7 days.

We will use Sideloadly to install the Taurine jailbreak application to your iOS device for use in the next step.

::: warning
If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly [remove it](/restoring-rootfs) before proceeding.
:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Taurine is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Taurine](https://taurine.app)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Taurine `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Taurine application can now be opened from home screen.

## Running Taurine

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Taurine application from your home screen immediately afterwards
    - If you have unc0ver installed, enable "Restore RootFS" before proceeding to remove unc0ver
1. Tap "Jailbreak"

If you restored rootFS, go back to step 1 and repeat this section.

::: tip
If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
:::

::: warning
If you receive the error `ERR_Jailbreak`, `ERR_Already_Jailbroken` or `ERR_KernRW` read the Taurine/Odyssey section on the [Troubleshooting](/troubleshooting/#common-errors-on-odyssey-and-taurine) page
:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](/faq/#what-are-tweaks), themes and more.

## Installing necessary software

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "libhooker"
1. Tap "Install"
    - This will begin a queue - do not install the queue until we've selected all our programs to install
1. Search for "PreferenceLoader" and "RocketBootstrap" and add them to the queue by pressing "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap 'Restart SpringBoard'
