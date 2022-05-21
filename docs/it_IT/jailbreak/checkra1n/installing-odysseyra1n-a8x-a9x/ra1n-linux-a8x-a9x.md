---
lang: it_IT
title: Odysseyra1n (A8X/A9X) (Linux)
description: Guida all'installazione di Odysseyra1n su dispositivi A8X e A9X su Linux
permalink: /installing-odysseyra1n-a8x-a9x/linux
redirect_from:
  - /installing-odysseyra1n-a9x/linux
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

- The latest release of [checkra1n](https://checkra.in)
- La versione modificata di [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![Uno screenshot dell’applicazione di checkra1n](/assets/images/checkra1n.png)

## Installare checkra1n

1. Apri il file `pongoOS.zip`, seleziona `PongoConsolidated.bin` ed estrailo.
    - Prendi nota di dove lo estrai
1. Esegui il file binary di `checkra1n` in modalità CLI usando la versione modificata di pongoOS nel terminale utilizzando `sudo checkra1n -c -k [path to PongoConsolidated.bin]`
1. Collega il tuo dispositivo iOS al computer
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
