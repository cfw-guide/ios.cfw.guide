---
title: Firmware Selection (iPhone SE)
permalink: /firmware-selection-(iphone-se)
---

{% include toc title="Table of Contents" %}

## Required Reading

Different firmware versions will require different steps to jailbreak your iOS device. This page will help you find where to start.

Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from 11.0 to 11.4.1" row includes version 11.0, version 11.4.1, and all versions in-between.

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
      <th>MacOS</th>
      <th>All</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9.3</td>
      <td>9.3.3</td>
      <td colspan="2"><a href="installing-pangu933">Installing Pangu933</a></td>
    </tr>
    <tr>
      <td>9.3.4</td>
      <td>9.3.5</td>
      <td><a href="updating-to-{% include latestfw %}">Updating to {% include latestfw %}</a></td>
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

unc0ver is also compatible with firmware versions 13.0 - 13.5.5 if you prefer a semi-untethered jailbreak.
{: .notice--primary}

In boxes marked `--`, there is no jailbreak for that firmware version.
{: .notice--info}

---
  
{% include_relative /find-ios-version.md %}


<div class="notice">{{ notice-2 | markdownify }}</div>
