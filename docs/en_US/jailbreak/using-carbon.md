---
lang: en_US
title: Using Carbon
description: Guide to using Carbon
permalink: /using-carbon
redirect_from:
  - /installing-carbon
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - diliboy88
---

Carbon is a WebKit-based jailbreak capable of jailbreaking every 32-bit iOS device on firmware versions 8.0 to 9.3.6.

Note that the Carbon jailbreak is only initially untethered on firmware versions 8.0 to 9.3.4. If you're on firmware versions 9.3.5 or 9.3.6, you will need to install a separate package after jailbreaking in order to make it an untethered jailbreak. You will be instructed on how to do this.

## Running Carbon

1. Open Safari on your iOS device
2. Go to the [http://carbon.sep.lol](http://carbon.sep.lol) website
3. (optional) Install the certificates by clicking the 'Install Certs' button to access modern websites (You will need this if installing the 9.3.5/9.3.6 untethered via the repo in the instructions)
4. Press "Run"
   - If the device reboots or the page refreshes, and you don't end up in a jailbroken state, you will **need** to try again.

Carbon will now jailbreak your device. 

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Untethering (9.3.5/9.3.6)

::: warning

If you are on firmware versions 8.0 to 9.3.4, the jailbreak is already untethered, and this section should be skipped.

:::

This is an optional (though highly recommended) step which allows the jailbreak to run automatically when your device is booted. This means that you won't have to re-jailbreak through the Carbon website after your device is turned off.

You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read [Using Cydia](/using-carbon/using-cydia.html) first, before returning to this page.

1. Open the Cydia application
2. Add the repo "http://lukezgd.github.io/repo/" (You need to include the http or it might not work)
3. Open the "Search" tab and enter "iocaste untether"
4. Tap on the tweak and then tap "Install" in the top right-hand corner of the screen
5. This will install the iocaste and another tweak called 'animate'
6. Confirm the installation

::: danger

The installation process may take up to 5 minutes to complete. **Do not** exit Cydia during this process, or you will bootloop and need to restore.

:::

Once finished, you will be prompted to reboot your device.

::: tip

If you are having errors installing 'iocaste', the error is most likely a 'animate' tweak error. Install animate seperately and if still didnt work install the fix [here](https://github.com/arjndr/fixed-animate-deb)

If you wish to use a more modern package manager, and are on iOS 9, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

If you cant reach any repositories or links are not working (etc), you will need to install the certificates at [http://carbon.sep.lol](http://carbon.sep.lol)

:::
