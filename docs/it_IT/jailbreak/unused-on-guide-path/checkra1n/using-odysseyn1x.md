---
lang: it_US
title: Odysseyn1x
excerpt: Guida all'installazione di checkra1n tramite Odysseyn1x
permalink: /it_IT/using-odysseyn1x
pkgman: sileo
redirect_from:
  - /installing-odysseyn1x
  - /using-odysseynix
  - /odysseyn1x
  - /odysseynix
  - /using-bootra1n
  - /using-bootrain
  - /bootra1n
  - /bootrain
  - /using-checkn1x
  - /using-checknix
  - /checkn1x
  - /checkn1x
extra_contributors:
  - stekc
  - ssalagginkool
  - bbaovanc
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - itsnebulalol
---

::: danger

Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc) non si avrà successo seguendo questa guida, e avrai bisogno di un supporto avviabile come una chiavetta USB e di seguire i passaggi seguenti.

:::

::: warning

Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::

::: warning

I dispositivi A7 probabilmente falliranno nell'eseguire il jailbreak con Odysseyn1x su Linux, di conseguenza, dovrai usare una versione di Odysseyn1x più vecchia e scollegare e ricollegare rapidamente il tuo dispositivo una volta che vedrai l'avviso `Right Before Trigger`. Si consiglia vivamente di seguire <router-link to="/installing-chimera">Installare Chimera</router-link>.

:::

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

Odysseyn1x è una distro Linux avviabile tramite live-booting che consente di eseguire rapidamente checkra1n su un dispositivo compatibile. checkra1n è un tool in grado di eseguire il Jailbreak di milioni di dispositivi iOS con un SoC A7-A11 su firmware 12.0-14.8.1.

!!!include(./docs/en_US/jailbreak/checkra1n/include/odysseyra1n-explanation.md)!!!

I dispositivi A11con iOS 14 non consentono di utilizzare la funzionalità SEP mentre si è jailbroken. Le funzionalità SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.

## Requisiti

- Unità USB da 256MB o superiore
  - Se non hai un'unità USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), è possibile utilizzarlo invece di un'unità USB
- L'ultima versione di [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases)
  - Se sei su un dispositivo A7, dovresti utilizzare la versione v2.12-checkra1n-0.10.1 di [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1)
  - Per computer a 64 bit, scarica la versione "AMD64"
    - Non importa se si possiede un processore AMD o meno, "AMD64" è solo il nome dell'architettura
  - Per computer a 32 bit, scarica la versione "i686"
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

![Uno screenshot del menu Odysseyn1x](/assets/images/Odysseyn1x.png)

## Installare Ventoy

1. Scarica ed estrai il contenuto del file `Ventoy.zip`
2. Inserisci l'unità USB se non l'hai già fatto e apri il file `Ventoy2Disk.exe`
3. Seleziona l'unità USB dalla quale vuoi avviare Odysseyn1x
   - Questa unità USB verrà completamente cancellata
   - Assicurati di eseguire il backup di tutti i dati importanti in anticipo
4. Fai clic su `Install` e conferma di essere d'accordo con il cancellare l'unità USB
   - Non rimuovere l'unità USB fino a quando il processo non sarà completato
5. Una volta installato, copia il file iso di Odysseyn1x che hai scaricato sul drive USB

## Avviare Odysseyn1x

1. Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l'unità USB da avviare
   - Questo è diverso per ogni computer
   - Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro
2. Premi Invio una volta che visualizzi la schermata di Ventoy per avviare Odysseyn1x

## Eseguire checkra1n

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

1. Una volta caricato odysseyn1x, seleziona `checkra1n`
   - Se sei su un dispositivo A8X o A9X, seleziona l'opzione `checkra1n (A8X/A9X)`.
   - Se sei su un dispositivo A11, dovrai andare su `Options` e poi abilitare l'opzione `Skip A11 BPR Check`
   - Se sei su iOS 14.6 o successivo, dovrai andare su `Options` e abilitare l'opzione `Allow Untested Versions`
2. Clicca `Start` e segui le istruzioni a schermo
3. Ora vedrai le istruzioni su come riavviare il tuo dispositivo in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
   - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
4. Una volta che il dispositivo si avvia, è possibile uscire da checkra1n, ma non spegnere il computer

<!--Will probably make this better later on but this will work for now-->

::: tip

Anche se è possibile installare Cydia a questo punto della guida invece di continuare con i passaggi di Odysseyra1n, non lo consigliamo a causa del fatto che:

- Le persone tendono generalmente ad avere più stabilità utilizzando Odysseyra1n invece di Cydia
- Alcune funzionalità facili da usare (come shshd, che salva automaticamente i blobs mentre si è jailbroken) non sono disponibili
- Alcuni tweaks possono richiedere o essere meglio testati con il software che Odysseyra1n utilizza, piuttosto che il software che viene utilizzato quando si sceglie di installare Cydia

:::

## Lo script di Odysseyra1n

::: tip

Se preferisci, invece di eseguire lo script sul tuo computer, puoi eseguire lo script Odysseyra1n utilizzando la [scorciatoia](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771) aprendo questa pagina dal tuo dispositivo e poi cliccare il link della scorciatoia.

:::

I seguenti passaggi devono essere eseguiti solo una volta e sono opzionali ma altamente consigliati per un'esperienza più fluida con un bootstrap moderno.

1. Sblocca il tuo dispositivo
2. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
3. Seleziona `Odysseyra1n` su Odysseyn1x
4. Sileo dovrebbe installarsi sul dispositivo
5. Non chiudere Odysseyn1x siccome sarà necessario ri-eseguire il jailbreak fra pochi minuti

!!!include(./docs/en_US/jailbreak/checkra1n/include/no-loader.md)!!!
!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
