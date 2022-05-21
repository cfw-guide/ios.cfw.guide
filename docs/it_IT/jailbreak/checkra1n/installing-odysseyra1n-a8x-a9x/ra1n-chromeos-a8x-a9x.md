---
lang: it_IT
title: checkra1n (A8X/A9X) (ChromeOS)
description: Guida all'installazione di checkra1n su ChromeOS sui dispositivi A9X e A8X
permalink: /installing-checkra1n-chromeos-a8x-a9x
redirect_from:
  - /installing-checkra1n/chromeos/a8x-a9x
extra_contributors:
  - DhinakG
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

::: danger

Questa è una pagina guida altamente sperimentale, possono essere presenti cose non direttamente menzionate che devono essere eseguite per seguire questa guida. Di conseguenza, si consiglia vivamente di usare un altro tipo di computer se possibile.

:::

::: tip

Devi aver abilitato la modalità sviluppatore sul tuo dispositivo ChromeOS per seguire questa guida

:::

## Download (ChromeOS)

- L’ultima release di [checkra1n](https://checkra.in)
- La versione modificata di [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![Uno screenshot dell’applicazione di checkra1n](/assets/images/checkra1n.png)

## Consentire l'esecuzione di checkra1n

1. Sposta il binary di checkra1n che viene scaricato su `/usr/local/bin`
    - Ciò può essere fatto facendo quanto segue:
      - premi `Ctrl` + `Alt` + `T`
      - esegui la `shell`
      - esegui `mv ~/Downloads/checkra1n /usr/local/bin/`
1. Esegui il seguente comando nel terminale: `sudo mount -o remount,exec /tmp`
    - Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS
1. Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, è necessario collegare il dispositivo e entrare in modalità di recupero manualmente.

## Installare checkra1n

1. Apri il file `pongoOS.zip`, seleziona `PongoConsolidated.bin` ed estrailo.
    - Prendi nota di dove lo estrai
1. Esegui il file binary di `checkra1n` in modalità CLI usando la versione modificata di pongoOS nel terminale utilizzando `TERM=linux sudo checkra1n -c -k [percorso di PongoConsolidated.bin]`
1. Collega il tuo dispositivo iOS al computer
1. Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
    - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
1. Dopo ciò, checkra1n dovrebbe installarsi automaticamente

Il tuo dispositivo iOS dovrebbe adesso riavviarsi.

Dopo l'avvio del dispositivo, apri l'app checkra1n e installa Cydia.

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweak</router-link>, temi, pacchetti e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-sileo">Installare Sileo</router-link>

:::