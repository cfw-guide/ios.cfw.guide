---
lang: it_IT
title: Odysseyra1n (A8X/A9X) (macOS)
description: Guida all'installazione di Odysseyra1n su dispositivi A8X e A9X su macOS
permalink: /installing-odysseyra1n-a8x-a9x/macos
redirect_from:
  - /installing-odysseyra1n-a9x/macos
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
---

## Download (macOS)

- The latest release of [checkra1n](https://checkra.in)
- La versione modificata di [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![Uno screenshot dell’applicazione di checkra1n](/assets/images/checkra1n.png)

## Installare checkra1n

::: tip

Se stai utilizzando un Mac M1 e un dispositivo A9X, ti verrà chiesto di scollegare e ricollegare il dispositivo durante il processo e sarà necessario farlo.

:::

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

1. Apri il file `pongoOS.zip`, seleziona `PongoConsolidated.bin` ed estrailo.
    - Prendi nota di dove lo estrai
1. Apri il terminale ed avvia checkra1n in modalità CLI utilizzando il comando `/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [percorso di PongoConsolidated.bin]`
1. Collega il tuo dispositivo iOS al computer
1. Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
    - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
1. Dopo ciò, checkra1n dovrebbe installarsi automaticamente

Il tuo dispositivo iOS dovrebbe adesso riavviarsi.

Per installare Odysseyra1n, <u>non</u> aprire l'app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.

## Lo script di Odysseyra1n

1. Apri l'app terminale sul tuo computer
1. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
1. Installa "homebrew" incollando ed eseguendo il seguente comando: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. Installa "iproxy" incollando ed eseguendo il seguente comando: `brew install libusbmuxd`
1. Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
