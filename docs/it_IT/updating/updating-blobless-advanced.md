---
lang: it_IT
title: Aggiornare (Blobless) (Avanzato)
description: Guida all'aggiornamento a firmware non firmati senza alcun blob.
permalink: /it_IT/updating-blobless-advanced
extra_contributors:
  - flowerible
---

## Lettura Necessaria

I dispositivi iOS e iPadOS possono essere aggiornati solo alle versioni firmware che Apple ha "firmato". Questo di solito significa che è possibile aggiornare solo alle versioni più recenti del firmware. Questo è un male per il jailbreak, siccome la maggior parte dei jailbreak si basano su exploit che sono stati patchati in versioni più recenti.

Fortunatamente, possiamo usare diversi "profili" per ritardare un aggiornamento del firmware. Questo è destinato alle organizzazioni che richiedono più tempo per aggiornare i loro dispositivi, ma possiamo anche usarli per aggiornare a versioni del firmware non firmate.

Ma questo ha un limite di tempo. Potrai aggiornare solo alle seguenti versioni del firmware prima delle rispettive date di scadenza:

- **15.3.1** - 12 giugno 2022
- **15.4** - 29 giugno, 2022
- **15.4.1** - 14 agosto, 2022

Il tempo è indicato in `UTC 00:00`. Per ulteriori date di scadenza, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

Se al momento non si dispone di un jailbreak (o si sceglie di non fare il jailbreak per un qualsiasi motivo), dovrai utilizzare metodi avanzati, che coinvolgono cose come il ripristino di tutti i contenuti e le impostazioni, per essere in grado di aggiornare.

::: danger

A seconda della versione iOS di destinazione, non sarà possibile farlo se hai usato futurerestore dopo le seguenti date:

  - 15.3.1: 14 Marzo 2022
  - 15.4: 31 Marzo 2022
  - 15.4.1: 16 Maggio 2022

:::

## Preparazione

1. Collega il tuo iDevice al tuo computer e fai un backup tramite iTunes o Finder

Dopo aver fatto un backup, ciò che è necessario fare dopo dipende dal fatto che si usi macOS o Windows

## macOS - Apple Configurator 2

1. Vai nell'App Store sul tuo Mac
1. Cerca `Apple Configurator 2` e installalo
1. Configura Apple Configurator 2
1. Clicca Get Started
1. Clicca sul tuo dispositivo e poi clicca su Prepare
1. Seleziona `Manual Configuration`
1. Scegli `Do not enroll in MDM`
1. Vai su `Organization`e clicca su `New Organization`
1. Accedi al tuo ID Apple oppure fai clic su Skip
    - Se hai scelto di saltare l'accesso al tuo ID Apple, aggiungi un nome, poi fai clic su Next
1. Scegli `Generate a new supervision identity`
    - Se lo hai già fatto prima su Apple Configurator 2, puoi `Scegliere un'identità di supervisione esistente`
1. Configura l'Assistente di Configurazione iOS come desideri
    - Se hai dimenticato di eseguire il backup dei dati in precedenza nella guida, questo è l'ultimo step in cui sarai in grado di farlo.
1. Clicca `Prepare`, che cancellerà i dati del tuo dispositivo e lo supervisionerà

## Windows - iMazing

::: danger

Questo metodo richiede l'acquisto di iMazing, se non si dispone di soldi per acquistare iMazing, non è possibile seguire questo metodo

:::

1. Scarica e installa iMazing da [qui](https://imazing.com/download/windows)
1. Dopo aver impostato iMazing, clicca sull'opzione `Supervision`
1. Fari clic su Next, fai clic sul pulsante sotto `Organization`, poi fai clic su Choose
1. Clicca sul pulsante `+` nell'angolo in basso a sinistra della nuova finestra
1. Aggiungi un nome, quindi fai clic su `Save`
1. Fai clic su Choose, poi clicca su Next
    - Se hai dimenticato di eseguire il backup dei dati in precedenza nella guida, questo è l'ultimo step in cui sarai in grado di farlo.
1. Digita il numero indicato nella casella di testo, poi fai clic su `Next`, iMazing cancellerà i dati del dispositivo e lo supervisionerà

## Aggiornare la versione del firmware

1. Quando il dispositivo si avvia dopo essere stato cancellato, configuralo, poi apri questa pagina sul dispositivo
1. Tocca una versione qui sotto per installare il rispettivo profilo di aggiornamento:
    - [15.3.1](/assets/files/delay_15_3_1.mobileconfig)
    - Per ulteriori versioni del firmware, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).
1. Riavvia il dispositivo
1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento
1. Una volta aggiornato, rimuovi il profilo di aggiornamento tramite le Impostazioni

Dopo l'aggiornamento, è possibile rimuovere la supervisione e ripristinare il backup effettuato in precedenza cancellando tutti i contenuti e le impostazioni.

Se hai problemi con l'aggiornamento, installa [OTAEnabler](https://repo.alexia.lol/) e riavvia. Se hai ancora problemi continua a leggere qui sotto.

::: tip

Se l'aggiornamento è andato a buon fine, continua con [Cominciamo!](/get-started) per eseguire il jailbreak del tuo dispositivo.

:::

## Risoluzione problemi

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
