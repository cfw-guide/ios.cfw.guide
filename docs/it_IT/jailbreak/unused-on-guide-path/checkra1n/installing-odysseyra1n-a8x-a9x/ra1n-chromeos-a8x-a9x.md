---
lang: it_IT
title: Odysseyra1n (A8X/A9X) (ChromeOS)
description: Guida all'installazione di Odysseyra1n su ChromeOS sui dispositivi A9X e A8X
permalink: /it_IT/installing-odysseyra1n-chromeos-a8x-a9x
redirect_from:
  - /installing-checkra1n/chromeos/a8x-a9x
  - /installing-checkra1n-chromeos-a8x-a9x
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - stekc
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

- L'ultima versione di [checkra1n](https://checkra.in)
- La versione personalizzata di [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![Uno screenshot dell'applicazione checkra1n](/assets/images/checkra1n.png)

## Consentire l'esecuzione di checkra1n

1. Sposta il binary di checkra1n che viene scaricato su `/usr/local/bin`
   - Ciò può essere fatto facendo quanto segue:
     - premi `Ctrl` + `Alt` + `T`
     - esegui `shell`
     - esegui `mv ~/Downloads/checkra1n /usr/local/bin/`
2. Esegui il seguente comando nel terminale: `sudo mount -o remount,exec /tmp`
   - Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS
3. Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, è necessario collegare il dispositivo e entrare in modalità di recupero manualmente.

## Installare checkra1n

1. Apri il file `pongoOS.zip`, seleziona `PongoConsolidated.bin` ed estrailo.
   - Prendi nota di dove lo estrai
2. Esegui il file binary di `checkra1n` in modalità CLI usando la versione modificata di pongoOS nel terminale utilizzando `TERM=linux sudo checkra1n -c -k [percorso di PongoConsolidated.bin]`
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

## Lo script di Odysseyra1n

1. Apri questa pagina (ios.cfw\.guide/installing-odysseyra1n-chromeos-a8x-a9x) sul tuo dispositivo digitando questo URL su Safari
2. Clicca su [questo hyperlink](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771) sul tuo dispositivo e premi `Ottieni scorciatoia`
   - Se necessario, scarica l'app ComandiRapidi.
3. Quando richiesto, scegli `Apri`
4. Se necessario, premi l'icona `Procursus Bootstraper` e clicca sull'icona Esegui.
5. Dai OK a tutti gli avvisi che vengono visualizzati

::: tip

Se vieni avvisato circa un Comando Rapido non attendibile, esegui un altro Comando Rapido, quindi apri `Impostazioni`, vai su `Comandi Rapidi`, e attiva `Consenti Comandi Rapidi non attendibili`

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. È possibile utilizzare Sileo per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi, pacchtti e altro ancora.
