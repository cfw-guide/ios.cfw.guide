---
lang: it_IT
title: Aggiornare (Blobless)
description: Guida all'aggiornamento a firmware non firmati senza alcun blob.
permalink: /it_IT/updating-blobless
redirect_from:
  - /it_IT/updating-to-12-5-5-(blobless)
  - /it_IT/updating-to-14-3-(blobless)
  - /it_IT/updating-to-14-4-(blobless)
  - /it_IT/updating-to-14-4-1-(blobless)
  - /it_IT/updating-to-14-4-2-(blobless)
  - /it_IT/updating-to-14-5-(blobless)
  - /it_IT/updating-to-14-6-(blobless)
  - /it_IT/updating-to-14-7-(blobless)
  - /it_IT/updating-to-14-7-1-(blobless)
  - /it_IT/updating-to-14-8-(blobless)
  - /it_IT/updating-to-14-8-(blobless-alternate)
  - /it_IT/updating-to-15-0-2-(blobless)
  - /it_IT/updating-alternate-edit
  - /it_IT/updating-to-14-8-(dallas)
  - /it_IT/updating-(blobless)
---

## Lettura Necessaria

I dispositivi iOS e iPadOS possono essere aggiornati solo alle versioni firmware che Apple ha "firmato". Questo di solito significa che è possibile aggiornare solo alle versioni più recenti del firmware. Questo è un male per il jailbreak, siccome la maggior parte dei jailbreak si basano su exploit che sono stati patchati in versioni più recenti.

Fortunatamente, possiamo usare diversi "profili" per ritardare un aggiornamento del firmware. Questo è destinato alle organizzazioni che richiedono più tempo per aggiornare i loro dispositivi, ma possiamo anche usarli per aggiornare a versioni del firmware non firmate.

Ma questo ha un limite di tempo. Potrai aggiornare solo alle seguenti versioni del firmware prima delle rispettive date di scadenza:

- **15.3.1** - 12 giugno 2022
- **15.4** - 29 giugno, 2022
- **15.4.1** - 14 agosto, 2022

Il tempo è indicato in `UTC 00:00`. Per ulteriori date di scadenza, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

::: danger

A seconda della versione iOS di destinazione, non sarà possibile farlo se hai usato futurerestore dopo le seguenti date:

  - 15.3.1: 14 Marzo 2022
  - 15.4: 31 Marzo 2022
  - 15.4.1: 16 Maggio 2022

:::

::: tip

Devi avere un jailbreak per seguire queste istruzioni. Se non riesci a fare il jailbreak, segui <router-link to="/it_IT/updating-blobless-advanced">Aggiornare (Blobless) (Avanzato)</router-link> .

:::

## Preparazione

1. Collega il tuo iDevice al tuo computer e fai un backup tramite iTunes o Finder
1. Avvia il tuo attuale jailbreak
1. Apri il tuo gestore di pacchetti preferito e aggiungi la seguente repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Cerca e installa il pacchetto `SupervisedEnabler`
1. Riavvia il dispositivo
1. Il tuo dispositivo dovrebbe essere ora supervisionato
    - È possibile controllare andando nell'app impostazioni, dove dovrebbe essere presente un messaggio in alto che indica ciò. Se non c'è, prova a reinstallare `SupervisedEnabler`
1. Una volta che sei tornato nel tuo dispositivo, vai a questa pagina web
1. Tocca una versione qui sotto per installare il rispettivo profilo di aggiornamento:
    - [15.3.1](/assets/files/delay_15_3_1.mobileconfig)
    - Per ulteriori versioni del firmware, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

## Ripristinare il RootFS

1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desisderi aggiornare
    - **Non aggiornare** ancora, lo faremo più tardi
1. Apri il tuo jailbreak attuale e ripristina il rootFS
    - Se hai bisogno di una guida dettagliata su come ripristinare il rootfs, segui <router-link to="/it_IT/restoring-rootfs">Ripristinare il RootFS</router-link> e seleziona il jailbreak che usi attualmente
1. Riavvia il dispositivo

## Aggiornare la versione del firmware

1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento
1. Una volta aggiornato, rimuovi il profilo di aggiornamento e (se presente) il profilo beta tramite le Impostazioni

Se hai problemi con l'aggiornamento, installa [OTAEnabler](https://repo.alexia.lol/) e riavvia. Se hai ancora problemi continua a leggere qui sotto.

::: tip

Per rimuovere la supervisione dopo l'aggiornamento, esegui il jailbreak e quindi reinstalla e disinstalla SupervisedEnabler, o inizializza il contenuto e le impostazioni e ripristina un backup fatto prima di avere la supervisione.

:::

::: tip

Se l'aggiornamento ha avuto successo, continua con <router-link to="/it_IT/get-started">Cominciamo!</router-link> per eseguire il jailbreak sul tuo dispositivo.

:::

## Risoluzione problemi

::: tip

Se hai dovuto utilizzare OTAEnabler e hai dovuto modificare il Profilo Beta nei passaggi precedenti, dopo aver usato OTAEnabler, dovrai ripetere questa sezione.

:::

### "iOS è aggiornato"

1. Rimuovi eventuali profili beta installati
1. Installare il tweak OTADisabler e poi disinstallalo
1. Riavvia il dispositivo
    - È inoltre possibile utilizzare un ldrestart o un userspace reboot

### "Impossibile controllare gli aggiornamenti"

1. Ripristina il rootFS attraverso il tuo jailbreak
1. Installa e apri <router-link to="/it_IT/installing-unc0ver">l'applicazione</router-link> di unc0ver
1. Disattiva "Disable updates"
1. Ri-esegui il jailbreak usando unc0ver

### La schermata si freeza

Riattiva il daemon OTA usando il tweak iCleaner

---

Crediti a [dhinakg](https://github.com/dhinakg/) per aver scoperto questo metodo.
