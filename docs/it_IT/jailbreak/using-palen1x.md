---
lang: it_US
title: Usare palen1x
excerpt: Guida all’installazione di palera1n tramite palen1x
permalink: /it_IT/using-palen1x
pkgman: sileo
redirect_from:
  - /installing-palen1x
  - /using-palenix
  - /palen1x
  - /palenix
  - /using-palen1x-rootless
extra_contributors:
  - Mineek
  - nebula
  - ssalagginkool
---

::: danger


Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc) non si avrà successo seguendo questa guida, e avrai bisogno di un supporto avviabile come una chiavetta USB e di seguire i passaggi seguenti.

:::


::: warning


Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::


palen1x è una distro Linux avviabile in live che consente di eseguire rapidamente palera1n su un dispositivo compatibile. palera1n è in grado di eseguire il jailbreak su dispositivi iOS da A8(X) ad A11 su iOS 15.0 o successivi

Sui dispositivi con A11, **devi disabilitare il pin di sblocco** e non sarai in grado di utilizzare il pin, o altre funzionalità SEP, finché non fai il boot allo stato di iOS stock. Le funzionalità SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.

Inoltre, se il tuo è un dispostivo A11 con iOS 16 a cui è stato impostato un codice di sblocco precedentemente, dovrai **cancellare il contenuto e le impostazioni** per poter eseguire il jailbreak.

## Requisiti

- Unità USB da 128MB o superiore
    - Se non hai un'unità USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), è possibile utilizzarlo invece di un'unità USB
- L’ultima versione di [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

## Installare Ventoy

1. Scarica ed estrai il contenuto del file `Ventoy.zip`
1. Inserisci l'unità USB se non l'hai già fatto e apri il file `Ventoy2Disk.exe`
1. Seleziona l'unità USB dalla quale vuoi avviare palen1x
    - Questa unità USB verrà completamente cancellata
    - Assicurati di eseguire il backup di tutti i dati importanti in anticipo
1. Fai clic su `Install` e conferma di essere ok con il cancellare l'unità USB
    - Non rimuovere l'unità USB fino a quando il processo non sarà completato
1. Una volta installato, copia il file iso di palen1x che hai scaricato sul drive USB

## Avviare palen1x

1. Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l'unità USB da avviare
    - Questo è diverso per ogni computer
    - Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro
1. Premi Invio una volta che visualizzi la schermata di Ventoy per avviare palen1x

## Eseguire palera1n

::: warning


Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::


1. Once you have loaded palen1x, select `Shell`
1. Type `palera1n -e thid_should_crash=0`
1. Segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

::: tip


Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
1. Rerun the command that you just ran

You'll need to do this every time you rejailbreak your device as well.

:::


Una volta che il dispositivo si avvia, aprire l'app palera1n loader e toccare `Sileo`. Dopo un po 'di tempo, ti verrà chiesto di impostare un codice di accesso per utilizzare comandi da riga di comando, poi`Sileo` dovrebbe essere sulla schermata iniziale.

::: tip


Per rieseguire il jailbreak il tuo dispositivo, esegui semplicemente il comando che hai appena eseguito e poi ripeti qualsiasi altro passaggio applicabile.

Alternatively, if you are on 15.0 to 15.8.1, you can use <router-link to="/installing-meowbrek2">meowbrek2</router-link> per rieseguire il jailbreak.

:::
