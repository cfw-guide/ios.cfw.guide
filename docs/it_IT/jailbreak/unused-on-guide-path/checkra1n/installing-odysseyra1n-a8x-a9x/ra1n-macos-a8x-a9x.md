---
lang: it_IT
title: Odysseyra1n (A8X/A9X) (macOS)
description: Guida all'installazione di Odysseyra1n su dispositivi A8X e A9X su macOS
permalink: /it_IT/installing-odysseyra1n-a8x-a9x/macos
redirect_from:
  - /installing-odysseyra1n-a9x/macos
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - zachary7829
---

## Download (macOS)

- L'ultima versione di [checkra1n](https://checkra.in)
- La versione personalizzata di [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![Uno screenshot dell'applicazione checkra1n](/assets/images/checkra1n.png)

## Installare checkra1n

::: tip

Se stai utilizzando un Mac Apple Silicon e un dispositivo A9X, ti verrà chiesto di scollegare e ricollegare il dispositivo durante il processo e sarà necessario farlo.

:::

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

1. Apri il file `pongoOS.zip`, seleziona `PongoConsolidated.bin` ed estrailo.
   - Prendi nota di dove lo estrai
2. Apri il terminale ed avvia checkra1n in modalità CLI utilizzando il comando `/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [percorso di PongoConsolidated.bin]`
3. Collega il tuo dispositivo iOS al computer
4. Ora vedrai le istruzioni su come riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
   - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
5. Dopo ciò, checkra1n dovrebbe installarsi automaticamente

Il tuo dispositivo iOS dovrebbe adesso riavviarsi.

<!--Will probably make this better later on but this will work for now-->

::: tip

Anche se è possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:

- Le persone tendono generalmente ad avere più stabilità utilizzando Odysseyra1n invece di Cydia
- Alcune funzionalità facili da usare (come shshd, che salva automaticamente i blobs mentre si è jailbroken) non sono disponibili
- Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia

:::

Per installare Odysseyra1n, <u>non</u> aprire l'app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.

## Lo script di Odysseyra1n

::: tip

Se preferisci, invece di eseguire lo script sul tuo computer, puoi eseguire lo script Odysseyra1n utilizzando la [scorciatoia](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771) aprendo questa pagina dal tuo dispositivo e poi cliccare il link della scorciatoia.

:::

1. Apri l'app terminale sul tuo computer
2. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
3. Installa "homebrew" incollando ed eseguendo il seguente comando: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
4. Installa "iproxy" incollando ed eseguendo il seguente comando: `brew install libusbmuxd`
5. Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
