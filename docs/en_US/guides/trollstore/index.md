---
lang: en_US
title: Installing TrollStore
description: Guide to installing TrollStore
permalink: /installing-trollstore
sidebar: false
home: true
hero: false
redirect_from:
  - /trollstore
extra_contributors:
  - alfiecg24
  - opa334
  - iCraze
---

# Installing TrollStore

::: tip

For support in English, ask for help on the r/Jailbreak [Discord Server](https://discord.gg/jb).

:::

::: danger

TrollStore is **not** a jailbreak.

:::

TrollStore is a utility which is able to permanently sign and install any application with almost any entitlement with the help of a CoreTrust bug. The latest releases of TrollStore (specifically 2.0 and later) work through the use of a CoreTrust bug in which code signatures are not correctly verified under certain circumstances.

Installing TrollStore is a process which varies depending on what device and iOS you are running, as a result, different guides are attached below depending on said combination

::: danger

If your device is on iOS 14.0 *beta 1* or earlier, is running iOS 16.7.x (excluding 16.7 RC (20H18)), or is running iOS 17.0.1 or newer, it will **never** be supported by TrollStore.

:::

---

<table>
  <colgroup>
    <col span="1" style="width: 13%;">
    <col span="1" style="width: 13%;">
    <col span="1" style="width: 23%;">
    <col span="1" style="width: 23%;">
    <col span="1" style="width: 28%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center; font-weight: bold;">From</th>
      <th style="text-align: center; font-weight: bold;">To</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A8)</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A9-A11)</th>
      <th style="text-align: center; font-weight: bold;">arm64e (A12-A17/M1-M2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">14.0 beta 1 and earlier</td>
      <td style="text-align: center;" colspan="3">Unsupported</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">14.0 beta 2</td>
      <td style="text-align: center; font-weight: bold;">14.8.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.0</td>
      <td style="text-align: center; font-weight: bold;">15.5 beta 4</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 1</td>
      <td style="text-align: center; font-weight: bold;">15.6 beta 3</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 4</td>
      <td style="text-align: center; font-weight: bold;">15.6.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7</td>
      <td style="text-align: center; font-weight: bold;">15.7.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7.2</td>
      <td style="text-align: center; font-weight: bold;">15.8.4</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollmisaka">TrollMisaka</router-link></td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0 beta 1</td>
      <td style="text-align: center; font-weight: bold;">16.0 beta 3</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0 beta 4</td>
      <td style="text-align: center; font-weight: bold;">16.6.1</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollrestore">TrollRestore</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7</td>
      <td style="text-align: center; font-weight: bold;">16.7.11</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;" colspan="2">Unsupported</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0 beta 1</td>
      <td style="text-align: center; font-weight: bold;">17.0 beta 4</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallerx">TrollInstallerX</router-link></td>
      <td style="text-align: center; font-weight: bold;"><router-link to="/installing-trollstore-trollrestore">TrollRestore</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0 beta 5</td>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollrestore">TrollRestore</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">17.0.1 and later</td>
      <td style="text-align: center;">Not Applicable</td>
      <td style="text-align: center;" colspan="2">Unsupported</td>
    </tr>
  </tbody>
</table>
