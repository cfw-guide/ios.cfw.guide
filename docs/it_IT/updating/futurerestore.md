---
lang: it_IT
title: "Ripristinare con i blobs utilizzando FutureRestore"
description: Guida all'utilizzo di FutureRestore per ripristinare il dispositivo
permalink: /it_IT/futurerestore
redirect_from:
  - /it_IT/future-restore
  - /it_IT/restoring-to-14-3
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - CoocooFroggy
---
## Osservazioni
Se sei su iOS 15, dovrai invece seguire [questa](https://gist.github.com/nyuszika7h/aac55c97f7925cddcf5ec3167f85dfe8) guida. Nota che se sei su iOS 15 e sei su un dispositivo A12+, non sarai in grado di eseguire un downgrade, siccome attualmente non c'è un jailbreak o un exploit che può essere utilizzato per impostare il nonce sui dispositivi A12+ che eseguono iOS 15.

## Requisiti

- I blobs salvati per la versione alla quale si desidera ripristinare
- Un dispositivo jailbroken

## Download

- L'ultima versione di [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- Il file iPSW per il tuo dispositivo da [ipsw.me](https://ipsw.me)
  - Scarica la stessa versione di iOS del tuo blob
- Su Windows, assicurati di avere installato [iTunes](https://www.apple.com/itunes/)
  - Scorri verso il basso e seleziona l'altra build di Windows siccome la versione di Microsoft Store non funzionerà

## Cominciamo!

1. Apri il gestore di pacchetti sul tuo dispositivo jailbroken
1. Aggiungi [repo.1conan.com](https://repo.1conan.com) alle sorgenti
1. Scarica e installa dimentio
1. Scarica e installa NewTerm2

## Impostare il nonce

::: danger

Se stai usando unc0ver su iOS 14.6-14.8, non puoi usare dimentio siccome libkrw non funziona. Dovresti invece impostare il tuo generatore dalle impostazioni di unc0ver.

:::

1. Apri il tuo blob in un editor di testo e cerca `generator` ![Esempio di Generator](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg)

1. Annota il valore all'interno del campo `<string>`
    - Dovrebbe essere `0x` seguito da 16 caratteri che saranno una combinazione di lettere e numeri. Questo è il tuo generator.

**N.B:** Se non è presente alcun valore, prova a ricordare quale jailbreak stavi usando al momento del salvataggio dei blobs. Se stavi usando unc0ver, il tuo generator molto probabilmente è `0x1111111111111111`, se stavi usando Chimera/Odyssey/Taurine, il tuo generator molto probabilmente è `0xbd34a880be0b53f3`

3. Apri NewTerm 2 sul tuo dispositivo e digita il seguente comando, dove `[generator]` è il valore che hai appena ottenuto: `su root -c 'dimentio [generator]'`

1. Quando viene richiesta una password, inserisci la password di root
    - Quella predefinita è impostata su `alpine`, non è la password del tuo telefono.
1. Una volta eseguito il comando, dovrebbe comparire del testo
1. Vicino alla fine del testo, dovresti vedere la riga `Set nonce to [generator]`

### Su Computer
1. Connetti il dispositivo al tuo computer
1. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
    - Opzionalmente, è possibile creare un backup completo del dispositivo tramite iTunes o Finder
1. Apri FutureRestoreGUI sul tuo computer
    - Se richiesto da Windows Defender o un altro software anti-virus, consenti al programma di essere eseguito - è sicuro
1. Quando apri FutureRestoreGUI, ti dovrebbe essere presentato questo menu: ![immagine](https://user-images.githubusercontent.com/48022799/147845013-73dbda5b-500d-4f5a-ae51-3751d9268fe6.png)

1. Clicca sul pulsante `Download FutureRestore` per ottenere l'ultima versione di FutureRestore ** N.B:** Se il tuo dispositivo supporta iOS 15 o è un iPad WiFi-only, dovrai cliccare sul pulsante `Settings` e abilitare `Futurerestore Beta`, poi clicca sul pulsante `Download FutureRestore`. Questa versione di futurerestore **richiede** macOS o Linux.
1. Fai clic sul pulsante `Select Blob File...` e seleziona il file blob .shsh2
1. Fai clic su `Select Target iPSW File...` e seleziona il tuo file .ipsw
1. Dopo fai clic sul pulsante Next per passare al menu Options, assicurati che `Extra Logs` sia abilitato
1. Se non sei in fase di downgrading, è sicuro abilitare `Preserve Data` nel menu delle opzioni per conservare i dati. Tuttavia usarlo durante il downgrade può essere rischioso
1. Non abilitare `AP Nonce Collision` su qualsiasi dispositivo moderno
1. Fai clic su Next per passare al menu Controls
1. Clicca `Start Futurerestore`

Se si verificano problemi durante il processo, controlla la <router-link to="/it_IT/futurerestore-help">pagina di aiuto di Futurerestore</router-link>, se ancora non riesci a trovare una soluzione, chiedi aiuto nel canale #futurerestore-help sul [Server Discord](https://discord.gg/9apvC4C3CC) di r/jailbreak.
