## Required Reading

::: tip

This page is optional, but helpful if you are unfamiliar with jailbreaking.

:::

Melder is a package manager with a built-in root terminal. It supports iOS 3.0 to iOS 13. It can be used to install tweaks and themes.
On iOS 4.0 or newer, it also supports update notifications via [Skyglow Notifications](https://cydia.skyglow.es/tweaks/Notifications/index.html).

<p><router-link to="/faq/#what-are-tweaks">Tweaks</router-link> are small modifications to change the look and/or feel of your device. You can find tweaks on repositories, colloquially referred to as "repos".</p>

<p><router-link to="/faq/#what-s-a-repo">Repositories</router-link> are essentially databases that contain lots of tweaks for you to install. When you add repos to Melder, you will be able to install the tweaks on it, and look for them using the search function.</p>

This guide will show you how you can add and remove repos, and install, uninstall, and update tweaks.

## Adding Repos

1. Open the Melder application
1. Tap `Sources` on the bar at the bottom
1. Tap the `Edit` button in the top left-hand corner
1. Tap the `Add` button in the top right-hand corner
1. Enter a repo URL in the `Address` field (e.g. [`https://sparkdev.me/`](https://sparkdev.me/))
    - Melder also accepts Cydia and Zebra links
1. Tap `Save`

You can now enter the repo from the `Sources` page to see all the tweaks available on it.

Melder also has a built-in list of repos. To open it, scroll to the bottom of the `Sources` page, tap `Settings`, then tap `Community Repos`. Tap a repo to add it. Repos with a check mark are already in your source list.

## Removing Repos

1. Open the Melder application
1. Tap `Sources` on the bar at the bottom
1. Tap the `Edit` button in the top left-hand corner
1. Tap the red icon next to the repo you want to delete
1. Tap `Remove`
1. Tap `Done`

::: tip

You can also swipe a repo on the `Sources` page to reveal the `Remove` button.

:::

The repo should now be removed from Melder.

## Installing Tweaks

1. Open the Melder application
1. Tap `Search` on the bar at the bottom
1. Search for a tweak you'd like to install, then tap on it
1. Tap the `Install` button in the top right-hand corner
    - If a prompt asking you what version to install appears, tap `Install`
    - The `Queue` page should appear and list the tweak under `Install`
    - To add more tweaks before installing, tap `Continue Queuing`
1. Tap `Confirm`
    - It may take some time for the tweak to install
    - The title changes from `Running` to `Complete` when it's finished
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Restart SpringBoard</router-link>"
    - The device should appear to reboot after this
    - If the button says `Reboot Device`, tap it instead
    - If neither button is shown, tap `Done`

The tweak should now be installed to your device and will be active whenever your device is jailbroken.

## Uninstalling Tweaks

1. Open the Melder application
1. Tap `Installed` on the bar at the bottom
1. Tap on a tweak you'd like to uninstall
1. Tap the `Modify` button in the top right-hand corner
1. Tap `Remove`
1. Tap `Confirm`
    - It may take some time for the tweak to uninstall
    - The title changes from `Running` to `Complete` when it's finished
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Restart SpringBoard</router-link>"
    - The device should appear to reboot after this
    - If the button says `Reboot Device`, tap it instead
    - If neither button is shown, tap `Done`

After restarting SpringBoard, the tweak should now be uninstalled.

## Updating Tweaks

1. Open the Melder application
1. Tap `Changes` on the bar at the bottom
1. Tap the `Upgrade All` button in the top right-hand corner
    - If you cannot tap the button, there is nothing to update
1. Tap `Confirm`
    - It may take some time for the tweaks to update
    - The title changes from `Running` to `Complete` when it's finished
1. After it's finished, tap "<router-link to="/faq/#what-is-respringing">Restart SpringBoard</router-link>"
    - If the button says `Reboot Device`, tap it instead
    - If neither button is shown, tap `Done`

Your tweaks should now be updated to the latest version.
