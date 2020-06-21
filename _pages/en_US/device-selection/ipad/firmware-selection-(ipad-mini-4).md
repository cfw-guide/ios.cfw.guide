---
title: Firmware Selection (iPad Mini 4)
permalink: /firmware-selection-(ipad-mini-4)
excerpt: Find out what jailbreaks you can use on your iPad Mini 4
---

{% include toc title="Table of Contents" %}

## Required Reading

Different firmware versions will require different steps to jailbreak your iOS device. This page will help you find where to start.

Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from 9.2 to 9.3.3" row includes version 9.2, version 9.3.3, and all versions in-between.

Your device version can be found in the Settings application in `General` -> `About`.

## Version Table

<table class="version_table">
  <colgroup>
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 35%;">
    <col span="1" style="width: 35%;">
  </colgroup>
  <thead>
    <tr>
      <th>From</th>
      <th>To</th>
      <th>macOS</th>
      <th>All</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9.0</td>
      <td>9.1</td>
      <td colspan="2">Coming Soon</td>
    </tr>
    <tr>
      <td>9.2</td>
      <td>9.3.3</td>
      <td colspan="2"><a href="installing-pangu933">Installing Pangu933</a></td>
    </tr>
    <tr>
      <td>9.3.4</td>
      <td>9.3.5</td>
      <td><a href="updating-to-12-4-3">Updating to 12.4.3</a></td>
      <td>--</td>
    </tr>
    <tr>
      <td>10.0.1</td>
      <td>10.3.3</td>
      <td colspan="2"><a href="using-meridian">Using Meridian</a></td>
    </tr>
    <tr>
      <td>11.0</td>
      <td>11.4.1</td>
      <td colspan="2"><a href="installing-unc0ver">Installing unc0ver</a></td>
    </tr>
    <tr>
      <td>12.0</td>
      <td>12.2</td>
      <td colspan="2"><a href="installing-chimera">Installing Chimera</a></td>
    </tr>
    <tr>
      <td>12.3</td>
      <td>12.3.1</td>
      <td><a href="installing-checkra1n">Installing checkra1n</a></td>
      <td>--</td>
    </tr>
    <tr>
      <td>12.4</td>
      <td>12.4</td>
      <td colspan="2"><a href="installing-chimera">Installing Chimera</a></td>
    </tr>
    <tr>
      <td>12.4.1</td>
      <td>12.4.1</td>
      <td><a href="installing-checkra1n">Installing checkra1n</a></td>
      <td><a href="blocking-updates">Blocking Updates</a></td>
    </tr>
    <tr>
      <td>13.0</td>
      <td>{% include latestfw %}</td>
      <td><a href="installing-checkra1n">Installing checkra1n</a></td>
      <td>--</td>
    </tr>
  </tbody>
</table>

---

checkra1n is also compatible with firmware version 12.4 however we recommend use Chimera instead due to it being usable without a computer on every reboot.
{: .notice--primary}

unc0ver is also compatible with firmware versions 12.0 to 12.4 (excluding firmwares 12.3 and 12.3.1) however we recommend use Chimera instead due to it being easier to use.
{: .notice--primary}

In boxes marked `--`, there is no jailbreak for that firmware version.
{: .notice--info}

---

{% capture find-ios-version-ipad %}{% include_relative find-ios-version-ipad.md %}{% endcapture %}
<div id="find-ios-version-ipad">{{ find-ios-version-ipad | markdownify }}</div>

<div class="notice">{{ notice-2 | markdownify }}</div>
