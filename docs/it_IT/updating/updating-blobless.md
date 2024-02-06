---
lang: it_IT
title: Aggiornare (Blobless)
permalink: /it_IT/updating-blobless
description: Guida all'aggiornamento a firmware non firmati senza alcun blob utilizzando il profilo di Dallas.
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

::: tip

Se si è tentato in precedenza di usare un metodo di aggiornamento blobless, rimuovi tutti i profili delay e beta prima di seguire questo metodo.

:::

::: tip

Devi avere un jailbreak per seguire queste istruzioni. Se non puoi eseguire il jailbreak, segui <router-link to="/updating-blobless-nonjailbroken">Aggiornamento (Blobless) (Non-Jailbroken)</router-link> o <router-link to="/updating-blobless-advanced">Aggiornare (Blobless) (Avanzato)</router-link> invece.

:::

## Requisiti

- Un dispositivo al quale è possibile eseguire il jailbreak e installarci pacchetti
    - Controlla <router-link to="/get-started">Cominciamo!</router-link> se non sei sicuro
- Un backup del dispositivo tramite iCloud

## Istruzioni

### Installare Dahlia

::: tip

Il tweak di Dahlia, quando si usano i profili di Dallas, reindirizza le ricerche di aggiornamento a un server diverso. I proprietari del server saranno in grado di visualizzare il tuo indirizzo IP. Questo è normale, tuttavia se si è a disagio con ciò, segui <router-link to="/updating-blobless-alternate">Aggiornare (Blobless) (Metodo Alternativo)</router-link> .

:::

1. Avvia il tuo attuale jailbreak
1. Apri il tuo gestore di pacchetti preferito e aggiungi le seguenti repo:
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.alexia.lol](https://repo.alexia.lol)
1. Cerca e installa il pacchetto `Dahlia`
1. Tocca `Riavvia il dispositivo` e poi ri-esegui il jailbreak del dispositivo dopo il riavvio

### Preparare l'Aggiornamento

1. Apri l'app Impostazioni, scorri verso il basso e clicca su `Dahlia`
1. Clicca su `Download Profiles`e poi premi su "Dallas"
1. Clicca su "Dallas Enabler" per scaricare il profilo
1. Premi "Consenti" quando viene richiesto
1. Esci dal menu di Dahlia e vai a `Generali` -> `Gestione Profili e Dispositivo` -> `Dallas Enabler`
1. Clicca "Installa" nell'angolo in alto a destra e inserisci il codice di accesso se richiesto
1. Tocca nuovamente "Installa" due volte per confermare
1. Torna alla schermata di `Dahlia` nelle impostazioni
1. Clicca nuovamente su `Download Profiles`e poi premi di nuovo su "Dallas"
1. Sotto "Version Profiles", tocca la versione alla quale vuoi aggiornare
1. Premi "Consenti" quando viene richiesto
1. Apri l'app Impostazioni
1. Esci dal menu di Dahlia e vai a `Generali` -> `Gestione Profili e Dispositivo` -> `Dallas - [Version]`
   - Se vedi un errore, assicurati di essere jailbroken e di aver installato Dallas Enabler in precedenza
1. Clicca "Installa" nell'angolo in alto a destra e inserisci il codice di accesso se richiesto
1. Tocca nuovamente "Installa" due volte per confermare
1. Riavvia il dispositivo quando richiesto e ri-esegui il jailbreak
1. Riapri l'app Impostazioni e tornare alla pagina di Dahlia
1. Attiva `Enable Supervision-less Mode.`
   - Puoi anche scegliere di abilitare `Toggle Supervision`, ma l'unico modo per rimuovere la supervisione dopo l'aggiornamento è quello di attendere un jailbreak o inizializzare il dispositivo
1. Assicurati che `Ready to Update` indichi di "Sì"
   - Se non lo fa, clicca sulla "i" accanto a "Ready to Update", e vedi quale è il problema

### Ripristinare il RootFS

1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
    - **Non aggiornare** ancora, lo faremo più tardi
    - Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
    - Se dice che il dispositivo è aggiornato, il server utilizzato per Dallas è offline; attendi che torni online
1. Apri il tuo jailbreak attuale e ripristina il rootFS
    - Se hai bisogno di una guida dettagliata su come ripristinare il rootfs, segui <router-link to="/it_IT/restoring-rootfs">Ripristinare il RootFS</router-link> e seleziona il jailbreak che usi attualmente
1. Riavvia il dispositivo

### Aggiornare la versione del firmware

1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento

### Rimozione dei profili Dallas

1. Apri l'app Impostazioni dopo l'aggiornamento alla versione desiderata
1. Vai su `Generali`, `Gestione Profili e Dispositivo`
1. Premi su entrambi i profili e clicca su `Rimuovi profilo`
    - Inserisci il tuo codice di accesso se richiesto

::: tip

Se hai scelto di abilitare la supervisione in precedenza, il tuo dispositivo rimarrà supervisionato. Essere in uno stato supervisionato significa che:

- Un messaggio verrà visualizzato in Impostazioni, mostrando che il dispositivo è supervisionato
- Il blocco di attivazione sarà disabilitato, rendendo il dispositivo potenzialmente accessibile dai ladri (Dov'è funzionerà comunque)
- Se il dispositivo ha la gestione del dispositivo mobile attivata (es. un dispositivo scolastico o di lavoro), allora la tua organizzazione sarà in grado di installare e disinstallare silenziosamente le app sul tuo dispositivo

Nota che, per la maggior parte degli utenti, rimanere in uno stato supervisionato non sarà un problema.

È possibile rimuovere lo stato di supervisione ripristinando il dispositivo e ripristinando un backup precedentemente fatto. Ciò può essere fatto selezionando "Cancella tutti i contenuti e le impostazioni" nell'app Impostazioni, poi ripristinando da un backup da iCloud durante la configurazione iniziale.

:::

::: danger

Se si ripristina un backup fatto in uno stato jailbroken da **iTunes/Finder**, si possono riscontrare gravi problemi, come i bootloop.

:::

::: warning

Se ripristini un backup fatto in uno stato jailbroken da **iCloud**, potresti riscontrare segnali di falsi positivi per il rilevamento del jailbreak.

:::

Crediti a [dhinakg](https://github.com/dhinakg/) per aver scoperto questo metodo.
