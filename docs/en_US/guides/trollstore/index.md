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

TrollStore is a tool which uses a codesign bypass as well as another exploit in order to permanently sign any app with any entitlements which are necessary for the apps functioning.

Installing TrollStore is a process which varies depending on what device and iOS you are running, as a result, different guides are attached below depending on said combination

---

<table>
  <colgroup>
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 15%;">
    <col span="1" style="width: 35%;">
    <col span="1" style="width: 35%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center; font-weight: bold;">From</th>
      <th style="text-align: center; font-weight: bold;">To</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A8 - A11)</th>
      <th style="text-align: center; font-weight: bold;">arm64e (A12 - A17 / M1 - M2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">13.7 and earlier</td>
      <td style="text-align: center;" colspan="2">Unsupported</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">14.0</td>
      <td style="text-align: center; font-weight: bold;">14.8.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper">Installing TrollStore (TrollHelper)</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollhelperota">Installing TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.0</td>
      <td style="text-align: center; font-weight: bold;">15.5 beta 4</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelperota">Installing TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper-mdc">Installing TrollStore (TrollInstallerMDC)</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollhelperota">Installing TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 1</td>
      <td style="text-align: center; font-weight: bold;">15.6 beta 5</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelperota">Installing TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6</td>
      <td style="text-align: center; font-weight: bold;">15.6.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper-mdc">Installing TrollStore (TrollInstallerMDC)</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollhelperota">Installing TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7</td>
      <td style="text-align: center; font-weight: bold;">15.7.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-mdc">Installing TrollStore (TrollInstallerMDC)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7.2</td>
      <td style="text-align: center; font-weight: bold;">15.8.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-trollmisaka">Installing TrollStore (TrollMisaka)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0</td>
      <td style="text-align: center; font-weight: bold;">16.1.2</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-mdc">Installing TrollStore (TrollInstallerMDC)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.2</td>
      <td style="text-align: center; font-weight: bold;">16.6.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-trollstar">Installing TrollStore (TrollStar)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper">Installing TrollStore (TrollHelper)</router-link></td>
      <td style="text-align: center;">No Installation Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7</td>
      <td style="text-align: center; font-weight: bold;">16.7.4</td>
      <td style="text-align: center;" colspan="2">Unsupported</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper">Installing TrollStore (TrollHelper)</router-link></td>
      <td style="text-align: center;">No Installation Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">17.0.1 and later</td>
      <td style="text-align: center;" colspan="2">Unsupported</td>
    </tr>
  </tbody>
</table>

::: danger

If your device is on iOS 13.7 and older, is running iOS 16.7.x (excluding 16.7 RC (20H18)), or is running iOS 17.0.1 or newer, it will **never** be supported by TrollStore.

:::
