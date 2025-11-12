## Required Reading
::: tip

This page is optional, but helpful if you are unfamiliar with jailbreaking.

:::

purePKG is a modern package manager that has a simple UI made to fit with iOS 13 and above. It's the App Store for all the tweaks and themes available for your device.

<p><router-link to="/faq/#what-are-tweaks">Tweaks</router-link> are small modifications to change the look and/or feel of your device. You can find tweaks on repositories, colloquially referred to as "repos".</p>

<p><router-link to="/faq/#what-s-a-repo">Repositories</router-link> are essentially databases that contain lots of tweaks for you to install. When you add repos to purePKG, you will be able to install the tweaks on it, and look for them using the search function.</p>

This guide will show you how you can install and uninstall tweaks, and add different repos.

## Adding Repos

::: tip

If you are unable to add a repository, try to restart purePKG from your app switcher.

:::

1. Open the purePKG application
1. Navigate to "Browse" on the bar at the top
1. Tap the "+" icon in the top right-hand corner
1. Enter in a repo URL (e.g. [`https://sparkdev.me/`](https://sparkdev.me/))
1. Tap "OK"

You can now enter the repo from this page to see all the tweaks available on it.

## Removing Repos

1. Open the purePKG application
1. Navigate to "Browse" on the bar at the top
1. Go onto the source you would like to remove
1. Hold down on the trackpad of your remote and click
1. Select "Remove"

The repo should now be removed from purePKG.

## Installing Tweaks

1. Open the purePKG application
1. Navigate to "Installed" on the bar at the top
1. Tap on a tweak you'd like to install
1. Tap the "install" button next to the tweak name
1. Navigate to "Queued" on the bar at the top
1. Tap on the bar at the bottom and press "Perform Actions"
    - It may take some time for the tweak to install
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - The device should appear to respring after this
    - Sometimes, the button might not say to respring, but you can tap the button anyway
    
The tweak should now be installed to your device and will be active whenever your device is jailbroken.

## Uninstalling Tweaks

1. Open the purePKG application
1. Navigate to "Installed" on the bar at the top
1. Tap on a tweak you'd like to uninstall
1. Tap the "Uninstall" button next to the tweak name
1. Navigate to "Queued" on the bar at the top
1. Tap on the bar at the bottom and press "Perform Actions"
    - It may take some time for the tweak to uninstall
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Respring</router-link>"
    - The device should appear to respring after this
    - Sometimes, the button might not say to respring, but you can tap the button anyway
    
After respringing, the tweak should now be uninstalled.

<!-- Afaik logging into repos on purePKG is not supported as of 11/11/25 so the section has been removed -->

::: tip

If you run into errors installing or removing packages, read the <router-link to="/troubleshooting">Troubleshooting</router-link> page

:::
