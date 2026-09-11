## Required Reading

::: tip

This page is optional, but is highly recommended given the unique environment that iPhone OS 1.x jailbreak use, compared to jailbreaks designed for newer firmwares.

:::

PXLInstaller is a `.pxl` tweak installation utility. This allows you to install `.pxl` tweaks to a device running iPhone OS 1.0 to 1.1.5.

<p><router-link to="/faq/#what-are-tweaks">Tweaks</router-link> are small modifications to change the look and/or feel of your device.</p>

This guide will show you how you can install and uninstall tweaks.

In order to use PXLInstaller, you will need a computer.

## Downloads

- The latest version of [PXLInstaller](https://github.com/theiphoneos1project/PXLInstaller) for your platform.
    - For Apple Silicon Macs, this will be `PXLInstaller_macOS_arm64.zip`
    - For Intel-based Macs, this will be `PXLInstaller_macOS_x64.zip`
    - For Linux, this will be `PXLInstaller_Linux_x64.zip`
    - For Windows, this will be `PXLInstaller_Windows_x64.zip`

## Installing PXLInstaller

::: tip

Extract the zip file for your platform before proceeding with this guide.

:::

Please select your operating system:

::::: tabs

:::: tab name="macOS" :default="true"

1. Plug your device into your computer
1. Double-click `pxlinstaller-gui`

PXLInstaller is now setup, and can now be used to install `.pxl` tweaks. Note that you will need to repeat the last step in order to run PXLInstaller at any point in the future.

::::

:::: tab name="Linux"

1. Plug your device into your computer
1. Open a terminal application
1. Run `cd <path/to/pxlinstaller>`
    - In most cases, this will likely mean running `cd ~/Downloads/PXLInstaller_Linux_x64`
1. *In the same terminal window*, run `sudo pxlinstaller-gui`

PXLInstaller is now setup, and can now be used to install `.pxl` tweaks. Note that you will need to repeat the last step in order to run PXLInstaller at any point in the future.

::::

:::: tab name="Windows"

### Fixing Device Detection

::: tip

This section is only required if you are using something besides Antares, or are using a different computer than the one that you used to initially run Antares.

If you used Antares on the same computer you're following this guide on, this section can be skipped.

:::

1. Plug your device into your computer
1. Open `zadig.exe`
1. Toggle on List All Devices by going to `Options` -> `List All Devices`
1. Select your iPhone or iPod Touch
    - This will likely be whatever has `(Interface 1)` listed next to it
1. Set the *target* driver to libusbK, then click `Replace Driver`
    - Note that libusbK may be listed as something like `libusbK (v3.1.0.0)`
    - If prompted, reboot your computer

::::

:::::

### Running PXLInstaller

1. Plug your device into your computer
1. Open `pxlinstaller-gui.exe`

## Installing Tweaks

::: tip

`.pxl` tweaks will need to be found externally. There is no modern repository system compared to what exists in jailbreaks on newer firmware versions.

:::

1. Open the PXLInstaller application
1. Click `Install Application`
1. Locate and select the `.pxl` file that you have downloaded, then click `Open`

The tweak should now be installed to your device, and your device will automatically respring.

## Uninstalling Tweaks

1. Open the PXLInstaller application
1. Locate the tweak that you would like to uninstall on the right-hand side of PXLInstaller, then click `X`, then click `Yes`
    
The tweak should now be removed your device, and your device will automatically respring.