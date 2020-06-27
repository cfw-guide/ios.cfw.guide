---
title: Firmware Selection (iPad 5)
permalink: /firmware-selection-(ipad-5)
excerpt: Find out what jailbreaks you can use on your iPad 5th Generation
---

{% include toc title="Table of Contents" %}

## Required Reading

Different firmware versions will require different steps to jailbreak your iOS device. This page will help you find where to start.

Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from 11.0 to 12.2" row includes version 11.0, version 12.2, and all versions in-between.

Your device version can be found in the Settings application in `General` -> `About`.

There is no jailbreak on firmwares 12.4.1 and above for this device.
{: .notice--danger}

## Version Table

<table class="version_table">
  <colgroup>
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>From</th>
      <th>To</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10.0.1</td>
      <td>10.3.3</td>
      <td><a href="installing-doubleh3lix">Installing doubleh3lix</a></td>
    </tr>
    <tr>
      <td>11.0</td>
      <td>11.4.1</td>
      <td><a href="installing-unc0ver">Installing unc0ver</a></td>
    </tr>
    <tr>
      <td>12.0</td>
      <td>12.2</td>
      <td><a href="installing-chimera">Installing Chimera</a></td>
    </tr>
    <tr>
      <td>12.3</td>
      <td>12.3.2</td>
      <td><a href="installing-checkra1n">Installing checkra1n</a></td>
    </tr>
    <tr>
      <td>12.4</td>
      <td>12.4</td>
      <td><a href="installing-chimera">Installing Chimera</a></td>
    </tr>
    <tr>
      <td>12.4.1</td>
      <td>13.5.5</td>
      <td colspan="2"><a href="installing-unc0ver">Installing unc0ver</a></td>
    </tr>
    <tr>
      <td>13.0</td>
      <td>{% include latestfw %}</td>
      <td><a href="installing-checkra1n">Installing checkra1n</a></td>
     </tr>
  </tbody>
</table>

---

checkra1n is compatible with all firmware versions 12.3 and up if you prefer a semi-tethered jailbreak
{: .notice--primary}

unc0ver is also compatible with firmware versions 11.0 to 13.5.5 Developer Beta 1 (excluding firmwares 12.3 - 12.3.2 and 12.4.2 - 12.4.7)
{: .notice--primary}

In boxes marked `--`, there is no jailbreak for that firmware version.
{: .notice--info}

---

{% capture find-ios-version-ipad %}{% include_relative find-ios-version-ipad.md %}{% endcapture %}
<div id="find-ios-version-ipad">{{ find-ios-version-ipad | markdownify }}</div>

<div class="notice">{{ notice-2 | markdownify }}</div>
