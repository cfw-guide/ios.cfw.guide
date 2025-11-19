## Required Reading

::: tip

This page is optional, but helpful if you are unfamiliar with jailbreaking.

:::

Sileo is a modern package manager that has a redesigned UI made to fit with iOS 11 and above. It's the App Store for all the tweaks and themes available for your device.

<p><router-link to="/faq/#what-are-tweaks">Tweaks</router-link> are small modifications to change the look and/or feel of your device. You can find tweaks on repositories, colloquially referred to as "repos".</p>

<p><router-link to="/faq/#what-s-a-repo">Repositories</router-link> are essentially databases that contain lots of tweaks for you to install. When you add repos to Sileo, you will be able to install the tweaks on it, and look for them using the search function.</p>

This guide will show you how you can install and uninstall tweaks, and add different repos.

## Adding Repos

1. Open the Sileo application
1. Tap "Sources" on the bar at the bottom
1. Tap the "+" icon in the top right-hand corner
1. Enter in a repo URL (e.g. [`https://sparkdev.me/`](https://sparkdev.me/))
1. Tap "Add Source"

You can now enter the repo from this page to see all the tweaks available on it.

## Removing Repos

1. Open the Sileo application
1. Tap "Sources" on the bar at the bottom
1. Tap the "Edit" button in the top left-hand corner
1. Tap the red icon next to the repo you want to delete
1. Confirm the deletion

The repo should now be removed from Sileo.

## Installing Tweaks

1. Open the Sileo application
1. Search for a tweak you'd like to install
1. Tap the "Get" button at the top of the page
    - A bar labeled "Queued" should appear at the bottom of your screen
1. Tap on the bar and press "Confirm"
    - It may take some time for the tweak to install
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - The device should appear to respring after this
    - Sometimes, the button might not say to respring, but you can tap the button anyway

The tweak should now be installed to your device and will be active whenever your device is jailbroken.

## Uninstalling Tweaks

1. Open the Sileo application
1. Tap on a tweak you'd like to uninstall
1. Tap the "Modify" button at the top of the page
1. Tap "Remove"
    - A bar labeled "Queued" should appear at the bottom of your screen
1. Tap on the bar and press "Confirm"
    - It may take some time for the tweak to uninstall
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - The device should appear to respring after this
    - Sometimes, the button might not say to respring, but you can tap the button anyway
    
After respringing, the tweak should now be uninstalled.

## Logging Into Repos

Some repos require you to log in to be able to download their tweak's (e.g. [`https://havoc.app/`](https://havoc.app/), [`https://chariz.com/`](https://chariz.com/)), this can be done by:

1. Open the Sileo application
1. Tap "Featured" on the bar at the bottom.
1. Click the profile icon at the top right of the screen.
1. Under "Payment Providers" tap on the repo you would like to log in to.
1. Follow the prompts to log in.

You should now be able to download tweaks off the repo you logged into. 

::: tip

If you run into errors installing or removing packages, read the <router-link to="/troubleshooting/#fixing-package-installation-errors-on-sileo">Troubleshooting</router-link> page

:::
