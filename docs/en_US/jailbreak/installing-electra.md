---
lang: en_US
title: Installing Electra
description: Guide to installing Electra
permalink: /installing-electra
redirect_from:
  - /electra
  - /el
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: sileo
extra_contributors:
  - TheHacker894
  - Alriceee
  - kittymaxine
---

Electra is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is compatible with jailbreaking devices on iOS versions from 11.0 to 11.4.1.

Due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use PlumeImpactor to install the Electra application to your iOS device for use in the next step.

::: warning

If you are already jailbroken with unc0ver, make sure to properly [remove it](/removing-unc0ver) before proceeding.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Electra is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Electra](https://coolstar.org/electra/)
- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

## Installing the application

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the Electra `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Electra application can now be opened from home screen.

## Running Electra

1. Open the Electra application from your home screen
1. Tap "Jailbreak"

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

While you are now jailbroken at this point, we need to both update and install some packages so that we're able to both update other packages and have stuff work properly

## Installing necessary software

1. Open the Sileo app
1. Tap on the "Sources" tab
1. Press the `+` icon in the top right corner
1. Enter `https://kittymaxine.com/repo` and press "Add Source"
1. Wait for the repo to load, then tap "Maxine's Repo"
1. Tap "Packaging", then tap on `ElectraRepoFix`
1. Tap "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done"
