## Saving Blobs with Computer (A12+)

After getting the values from this guide, you can continue saving blobs with TSS Saver forever.
{: .notice--info}

### Read your device's ECID
1. Connect your iOS device to your computer with an OEM Lightning cable
1. On macOS, connect your device and run

```
brew install libimobiledevice
ideviceinfo | grep UniqueChipID
```
{: .notice--info}

1. On Windows, open iTunes and click on your device's Serial Number twice
  - This is your ECID          

1. Convert the ECID value from decimal to hexadecimal using [this decimal to hexadecimal](https://www.binaryhexconverter.com/decimal-to-hex-converter){:target="_blank"}

### Download and install getnonce

You will need [Python 3](https://www.python.org/downloads/) for this part of the guide.
{: .notice--info}

1. Download [libimobiledevice-net](https://www.github.com/libimobiledevice-win32/imobiledevice-net/releases/tag/v1.3.17)
1. Extract the `.zip` file

On macOS, you will also need to install irecovery with `brew install irecovery`
{: .notice--info}

1. Save [this webpage link](https://raw.githubusercontent.com/nyuszika7h/getnonce/main/getnonce.py) as `getnonce.py`

### Get your device-specific APNonce and generator

Make sure your device is connected and unlocked throughout this process.
{: .notice--info}

1. Open Terminal in macOS or [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) on Windows 10.
1. Run these commands

```
cd /path/to/idevicemobile-net/directory
pip install xmltodict termcolor
python getnonce.py
```
{: .notice--info}

If `python` or `pip` don't work, try `python3` and `pip3` or `py` and `py -m pip`
{: .notice--danger}

1. Press `n` when prompted

Your device will reboot into recovery mode multiple times. When you reboot into normal OS mode, unlock your iOS device.
{: .notice--success}

Make sure to write down your "ApNonce" and "Generator" values.
{: .notice--info}

If there are any errors or red lines, you cannot continue.
{: .notice--danger}

### Save Blobs
1. Visit the [TSS Saver website](https://tsssaver.1conan.com/v2/)
  - You can also use alternative methods like AutoTSS
1. Input your iOS device's ECID and device type as well the ApNonce and Generator in their respective fields.

These values can be reused at any time to save blobs whether or not you're jailbroken.
{: .notice--info}

Please note that you should not use tools that allow you to input a different generator value unless you can be sure that you will remember it.
{: .notice--danger}

{% include_relative include/end-of-page.md %}
