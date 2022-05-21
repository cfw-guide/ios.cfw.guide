---
lang: it_IT
title: Odysseyn1x (A8X/A9X)
description: Guida all'installazione di checkra1n tramite Odysseyn1x sui dispositivi A9X e A8X
permalink: /it_IT/using-odysseyn1x-a8x-a9x
pkgman: sileo
redirect_from:
  - /using-odysseyn1x-a9x
extra_contributors:
  - stekc
  - flowerible
  - bbaovanc
  - Tanbeer191
  - TheHacker894
---

::: warning

Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

Odysseyn1x è una distro Linux avviabile tramite live-booting che consente di eseguire rapidamente checkra1n su un dispositivo compatibile. checkra1n è un tool in grado di eseguire il Jailbreak di milioni di dispositivi iOS con un SoC A7-A11 su firmware 12.0-14.8.1.

!!!include(./docs/en_US/jailbreak/checkra1n/include/odysseyra1n-explanation.md)!!!

::: tip

Se utilizzi un dispositivo A8X o A9X con iOS 14.4.2 o precedente, è necessario seguire la guida di <router-link to="/it_IT/using-odysseyn1x">Odysseyn1x</router-link> e usare la versione 0.12.2 di checkra1n.

:::

Sui dispositivi A8X e A9X non è possibile utilizzare Odysseyn1x 2.14 (richiesto per 14.5+) senza l'uso di una versione di pongoOS personalizzata e checkra1n in modalità CLI. È possibile utilizzare una versione personalizzata di Odysseyn1x per aggirare il problema.

## Requisiti

- Unità USB da 256MB o superiore
    - Se non hai un'unità USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), è possibile utilizzarlo invece di un'unità USB
- L’ultima versione di [Odysseyn1x per A9X](https://github.com/asdfugil/checkn1x_a9x_kerninfo_pongoOS/releases/tag/14.5-a9x-4)
    - Questa versione di odysseyn1x viene definita come una versione "solo per A9X", tuttavia i dispositivi A8X presentano problemi simili a quelli dei dispositivi A9X, quindi questa versione di odysseyn1x è ideale per entrambe le CPU
    - Per computer a 64 bit, scarica la versione "AMD64"
    - Per computer a 32 bit, scarica la versione "i686"
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

![Uno screenshot del menu di Odysseyn1x](/assets/images/Odysseyn1x.png)

## Installare Ventoy

1. Scarica ed estrai il contenuto del file `Ventoy.zip`
1. Inserisci l'unità USB se non l'hai già fatto e apri il file `Ventoy2Disk.exe`
1. Seleziona l'unità USB dalla quale vuoi avviare Odysseyn1x
    - Questa unità USB verrà completamente cancellata
    - Assicurati di eseguire il backup di tutti i dati importanti in anticipo
1. Fai clic su `Install` e conferma di essere ok con il cancellare l'unità USB
    - Non rimuovere l'unità USB fino a quando il processo non sarà completato
1. Una volta installato, copia il file iso di Odysseyn1x che hai scaricato sul drive USB

## Avviare Odysseyn1x

1. Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l'unità USB da avviare
    - Questo è diverso per ogni computer
    - Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro
1. Premi Invio una volta che visualizzi la schermata di Ventoy per avviare Odysseyn1x

## Eseguire checkra1n

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

1. Una volta caricato odysseyn1x, seleziona `checkra1n (A9X)`
1. Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in <router-link to="/it_IT/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
    - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
1. Una volta che il dispositivo si avvia, è possibile uscire da checkra1n, ma non spegnere il computer

## Lo script di Odysseyra1n

I seguenti passaggi devono essere eseguiti solo una volta e sono opzionali ma altamente consigliati per un'esperienza più fluida con un bootstrap moderno.

1. Sblocca il tuo dispositivo
1. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
1. Seleziona `Odysseyra1n` su Odysseyn1x
1. Sileo dovrebbe installarsi sul dispositivo
1. Non chiudere Odysseyn1x siccome sarà necessario ri-eseguire il jailbreak fra pochi minuti

!!!include(./docs/en_US/jailbreak/checkra1n/include/no-loader.md)!!!
!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
