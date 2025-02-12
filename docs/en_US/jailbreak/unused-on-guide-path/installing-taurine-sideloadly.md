---
lang: en_US
title: Installing Taurine (Sideloadly)
description: Guide to installing Taurine via Sideloadly
permalink: /installing-taurine-sideloadly
pkgman: sileo
extra_contributors:
  - hopolapopola
  - Alriceee
---

Taurine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is compatible with jailbreaking all devices on iOS/iPadOS versions 14.0 to 14.8.1.

Due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days. However, you also have the option of installing a permanently signed Taurine app after jailbreaking.

We will use Sideloadly to install the Taurine jailbreak application to your iOS device for use in the next step.

::: tip

It is **highly** recommended to follow <router-link to="/installing-taurine">Installing Taurine</router-link> instead.

:::

::: warning

If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly <router-link to="/restoring-rootfs">remove it</router-link> before proceeding.

:::

::: warning

*Reliable* M1 iPad Pro support for 1TB and 2TB M1 iPad Pro's requires an *unofficial* build of Taurine. If you are not comfortable with using an unofficial build, you can attempt to use the official release, but it will be extraordinarily unlikely that it ever succeeds.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Taurine is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Taurine](https://taurine.app/)
    - If you have a 1TB or 2TB M1 iPad Pro, you can opt to get the latest [unofficial Taurine](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1) instead (if you do not have an M1 iPad Pro, **do not use this unofficial build**)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Taurine `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Taurine application can now be opened from home screen.

## Running Taurine

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Taurine application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the Taurine application from your home screen immediately after rebooting
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If you receive the error `ERR_Jailbreak`, `ERR_Already_Jailbroken` or `ERR_KernRW` read the Taurine/Odyssey section on the <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">Troubleshooting</router-link> page.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Installing necessary software

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "libiosexec1"
1. Tap "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done"
1. Search for "libhooker (common)", "PreferenceLoader", and "RocketBootstrap" and add them to the queue by pressing "Install"
    - While we're preparing the queue, do not install the anything that is queued until after we've selected all our programs to install
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap 'Restart SpringBoard'

After installing the necessary software, you can also install taurine-permanent to have a permanently signed Taurine application, which we recommend doing in order to be able to save effort in the long-term.

## Installing taurine-permanent

::: warning

taurine-permanent will install the latest *official* version of Taurine.

If you are using the unofficial build for reliable M1 iPad Pro support, you can alternatively install TrollStore (via the TrollStore Helper package on the havoc.app repository) and install the unofficial build of Taurine through that, in order to permasign it.

:::

1. Reopen the Sileo application
1. Tap on the "Search" tab
1. Search for "taurine-permanent"
1. Tap "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done"
