---
lang: 简体中文
title: 安装TrollStore
description: 安装 TrollStore 的指南
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

# 安装TrollStore

::: tip


若需要英语支持，请访问 r/Jailbreak [Discord 服务器](https://discord.gg/jb)寻求帮助。

:::


::: danger


TrollStore**不是**越狱。

:::


TrollStore is a utility which is able to permanently sign and install any application with almost any entitlement with the help of a CoreTrust bug. The latest releases of TrollStore (specifically 2.0 and later) work through the use of a CoreTrust bug in which code signatures are not correctly verified under certain circumstances.

安装 TrollStore 的方法因你使用的设备和 iOS 版本而异，因此根据具体组合情况，以下附有不同的安装指南。

::: danger


If your device is on iOS 14.0 *beta 1* or earlier, is running iOS 16.7.x (excluding 16.7 RC (20H18)), or is running iOS 17.0.1 or newer, it will **never** be supported by TrollStore.

:::


---

<table>
  <colgroup>
    <col span="1" style="width: 13%;">
    <col span="1" style="width: 13%;">
    <col span="1" style="width: 23%;">
    <col span="1" style="width: 28%;">
    <col span="1" style="width: 23%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center; font-weight: bold;">从何版本</th>
      <th style="text-align: center; font-weight: bold;">至何版本</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A8-A11)</th>
      <th style="text-align: center; font-weight: bold;">arm64e (A12-A14/M1-M2)</th>
      <th style="text-align: center; font-weight: bold;">arm64e (A15-A17)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">14.0 beta 1 and earlier</td>
      <td style="text-align: center;" colspan="3">不支持</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">14.0 beta 2</td>
      <td style="text-align: center; font-weight: bold;">14.8.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollmisaka">TrollMisaka</router-link></td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
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
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 1</td>
      <td style="text-align: center; font-weight: bold;">15.6 beta 5</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6</td>
      <td style="text-align: center; font-weight: bold;">15.6.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollstore-trollhelperota">TrollHelperOTA</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7</td>
      <td style="text-align: center; font-weight: bold;">15.7.1</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7.2</td>
      <td style="text-align: center; font-weight: bold;">15.8.2</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollmisaka">TrollMisaka</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0</td>
      <td style="text-align: center; font-weight: bold;">16.1.2</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollinstallermdc">TrollInstallerMDC</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.2</td>
      <td style="text-align: center; font-weight: bold;">16.6.1</td>
      <td style="text-align: center;" colspan="3"><router-link to="/installing-trollstore-trollstar">TrollStar</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelper">TrollHelper</router-link></td>
      <td style="text-align: center;" colspan="2">No Install Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7</td>
      <td style="text-align: center; font-weight: bold;">16.7.6</td>
      <td style="text-align: center;" colspan="3">不支持</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0 beta 1</td>
      <td style="text-align: center; font-weight: bold;">17.0 beta 4</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelper">TrollHelper</router-link></td>
      <td style="text-align: center;">Coming Soon</td>
      <td style="text-align: center;">No Install Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0 beta 5</td>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center;"><router-link to="/installing-trollstore-trollhelper">TrollHelper</router-link></td>
      <td style="text-align: center;" colspan="2">No Install Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">17.0.1 及更晚</td>
      <td style="text-align: center;" colspan="3">不支持</td>
    </tr>
  </tbody>
</table>
