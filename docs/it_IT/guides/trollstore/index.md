---
lang: it_IT
title: TrollStore
description: Guida all'installazione di TrollStore
permalink: /it_IT/installing-trollstore
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

# Installare TrollStore

::: tip


Per ottenere supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.gg/jb) di r/LegacyJailbreak.

:::


::: danger


TrollStore **non** è un jailbreak.

:::


TrollStore is a tool which uses a CoreTrust bug in order to permanently sign any app with any entitlements which are necessary for the apps functioning.

Installare TrollStore è un processo che varia a seconda di quale dispositivo e iOS si possiede, perciò verranno elencate diverse guide a seconda di tale combinazione

::: danger


If your device is on iOS 14.0 *beta 1* or earlier, is running iOS 16.7.x (excluding 16.7 RC (20H18)), or is running iOS 17.0.1 or newer, it will **never** be supported by TrollStore.

:::


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
      <th style="text-align: center; font-weight: bold;">Da</th>
      <th style="text-align: center; font-weight: bold;">A</th>
      <th style="text-align: center; font-weight: bold;">arm64 (A8 - A11)</th>
      <th style="text-align: center; font-weight: bold;">arm64e (A12 - A17 / M1 - M2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">14.0 beta 1 and earlier</td>
      <td style="text-align: center;" colspan="2">Non supportato</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">14.0 beta 2</td>
      <td style="text-align: center; font-weight: bold;">14.8.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper">TrollStore (TrollHelper)</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollhelperota">Installare TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.0</td>
      <td style="text-align: center; font-weight: bold;">15.5 beta 4</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelperota">Installare TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center; font-weight: bold;">15.5</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper-mdc">Installare TrollStore (TrollInstallerMDC)</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollhelperota">Installare TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6 beta 1</td>
      <td style="text-align: center; font-weight: bold;">15.6 beta 5</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelperota">Installare TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.6</td>
      <td style="text-align: center; font-weight: bold;">15.6.1</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper-mdc">Installare TrollStore (TrollInstallerMDC)</router-link></td>
      <td style="text-align: center;"><router-link to="/installing-trollhelperota">Installare TrollStore (TrollHelperOTA)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7</td>
      <td style="text-align: center; font-weight: bold;">15.7.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-mdc">Installare TrollStore (TrollInstallerMDC)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">15.7.2</td>
      <td style="text-align: center; font-weight: bold;">15.8.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-trollmisaka">Installare TrollStore (Misaka)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.0</td>
      <td style="text-align: center; font-weight: bold;">16.1.2</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-mdc">Installare TrollStore (TrollInstallerMDC)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.2</td>
      <td style="text-align: center; font-weight: bold;">16.6.1</td>
      <td style="text-align: center;" colspan="2"><router-link to="/installing-trollhelper-trollstar">Installing TrollStore (TrollStar)</router-link></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center; font-weight: bold;">16.7 RC</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper">TrollStore (TrollHelper)</router-link></td>
      <td style="text-align: center;">Nessun metodo di Installazione</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.7</td>
      <td style="text-align: center; font-weight: bold;">16.7.5</td>
      <td style="text-align: center;" colspan="2">Non supportato</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center; font-weight: bold;">17.0</td>
      <td style="text-align: center;"><router-link to="/installing-trollhelper">TrollStore (TrollHelper)</router-link></td>
      <td style="text-align: center;">No Installation Method</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">17.0.1 e successive</td>
      <td style="text-align: center;" colspan="2">Non supportato</td>
    </tr>
  </tbody>
</table>
