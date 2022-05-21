---
lang: it_IT
title: Odysseyra1n (Linux)
description: Guida all'installazione di Odysseyra1n su Linux
permalink: /installing-odysseyra1n/linux
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
---

::: warning

Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

## Download (Linux)

- L’ultima release di [checkra1n](https://checkra.in)
  - Se utilizzi un dispositivo A8X o A9X, dovresti invece usare la release 0.12.2 di [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)

![Uno screenshot dell’applicazione di checkra1n](/assets/images/checkra1n.png)

## Installare checkra1n

::: tip

checkra1n fornisce supporto nativo alle macchine che eseguono una distribuzione basata su Debian (ad esempio Ubuntu). È consigliabile seguire le [istruzioni specifiche](https://checkra.in/linux) fornite dal team di checkra1n stesso.

:::

1. Eseguire il file binary di `checkra1n` nel terminale usando `./checkra1n`
    - Potrebbe essere necessario eseguire `sudo chmod a+x ./checkra1n` se il file binary non viene eseguito
    - Se sei su un dispositivo A11, dovrai andare su `Options` e poi abilitare l'opzione `Skip A11 BPR Check`
    - Se sei su iOS 14.6 o successivo, dovrai andare su `Options` e abilitare l'opzione `Allow Untested Versions`
    - Se sei su un dispositivo A8X o A9X con ios 14.4-14.4.2, dovrai andare su `Options` e abilitare l'opzionse `Allow Untested Versions`
1. Clicca `Start` e segui le istruzioni a schermo
1. Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
    - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
1. Dopo ciò, checkra1n dovrebbe installarsi automaticamente

Il tuo dispositivo iOS dovrebbe adesso riavviarsi.

Per installare Odysseyra1n, <u>non</u> aprire l'app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.

## Lo script di Odysseyra1n

1. Apri l'app terminale sul tuo computer
1. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
1. Installa "iproxy" incollando ed eseguendo il seguente comando:
    - Ubuntu/Debian: `sudo apt install libusbmuxd-tools`
    - Arch Linux: `pacman -S libusbmuxd`
1. Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
