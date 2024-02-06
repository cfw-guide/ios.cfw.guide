---
lang: it_IT
title: "Salvataggio Blobs"
excerpt: Guida al salvataggio dei blobs per ottenere la capacità di eseguire un downgrade di iOS in futuro.
permalink: /it_IT/saving-blobs
redirect_from:
  - /it_IT/blobs
  - /it_IT/blob
  - /it_IT/save-blobs
  - /it_IT/save-blob
  - /it_IT/saving-blob
extra_contributors:
  - TheHacker894
  - airsquared
  - hopolapopola
  - wr3nch3000
  - Tanbeer191
  - itsnebulalol
---

Questo ti guiderà nel processo di salvataggio dei blobs che sono necessari se si desidera effettuare il downgrade ad una versione di iOS o iPadOS più vecchia e non più firmata. Ci sono diversi metodi che puoi provare. Per i dispositivi unjailbroken, è necessario utilizzare il metodo "Computer".

## Salvare i blobs con shshd

shshd è un tweak utilizzato per il salvataggio automatico dei blobs. Una volta che l'hai installato, non dovrai preoccuparti di salvare manualmente i blobs in quanto gestisce tutto in background. Devi essere in jailbroken per usare shshd. Se non sei jailbroken, segui [Salvare i blobs con il sito web di TSS Saver](#saving-blobs-with-tss-saver-website).

::: warning

shshd è compatibile solo con i jailbreak che si basano su Procursus, come Taurine, Odyssey, Chimera e Odysseyra1n. Se stai usando unc0ver o checkra1n, segui [Salvare i blobs con l'App di TSS Saver](#saving-blobs-with-tss-saver-app).

:::

1. Apri il gestore dei pacchetti
1. Cerca il pacchetto `shshd`
1. Scarica e installa il pacchetto
1. Premi "Fatto" quando viene richiesto

I blobs verranno salvati in automatico quando installi shshd, ogni volta che si ri-esegue il jailbreak, e ogni settimana. I blobs sono disponibili sul sito web [TSS saver](https://tsssaver.1conan.com/v2/). Per recuperarli, vai su "retrieve" e inserisci il tuo ECID.

### Eseguire shshd manualmente

Non dovresti aver bisogno di eseguire shshd manualmente, ma può essere eseguito attraverso un terminale.

1. Fai SSH nel tuo dispositivo o scarica NewTerm 2
1. Digita `sudo /usr/sbin/shshd` nel terminale
    - Se richiesto per una password, inserisci la password di root (quella predefinita è impostata su `alpine`)

## Salvare i blobs con l'App di TSS Saver

L'app TSS Saver può essere installata su dispositivi jailbroken e consente di salvare facilmente i tuoi blobs solamente con un clic. Se non sei jailbroken, segui [Salvare i blobs con il sito web di TSS Saver](#saving-blobs-with-tss-saver-website).

1. Aggiungi [repo.1conan.com](https://repo.1conan.com/) alle sorgenti nel tuo <router-link to="/it_IT/package-managers">gestore di pacchetti preferito</router-link>
1. Scarica e installa TSS Saver
    - Se stai usando unc0ver su iOS 14, scarica e installa anche `libkrw`
    - Se stai usando Taurine su iOS 14, scarica e installa `libkernrw`
1. Premi "Save Blobs"
1. Una volta ricevuto il messaggio di conferma, clicca "Open"

## Salvare i blobs con il sito web di TSS Saver

Il sito web di TSS Saver consente di salvare i blobs del dispositivo inserendo alcune informazioni specifiche del dispositivo. Una volta salvati, è quindi possibile accedere ai blobs inserendo queste informazioni di nuovo.

Gli utenti con un dispositivo A12+ devono essere jailbroken per poter utilizzare il sito web di TSS Saver, visto che è un requisito per impostare i valori di ApNoncs e Generator Se non sei jailbroken, segui [Salvare i blobs con blobsaver](#saving-blobs-with-blobsaver)

### Ottenere Generatore e ApNonce (solo A12+ Jailbroken)

::: tip

Se stai usando unc0ver o Taurine su iOS 14, installa rispettivamente libkrw o libkernrw.

:::

1. Apri un'app Terminale ed esegui `sudo dimentio > dimentio.txt`
    - In alternativa, puoi ottenere il tuo Generatore e ApNonce dalla sezione Generator nell'App di TSS Saver
1. Vai a /var/mobile su Filza e apri dimentio.txt
1. Copiare il numero 0x dopo `Current nonce is` nella parte inferiore del file di testo così come il numero che viene dopo `entangled nonce:`. Il numero 0x è il tuo Generatore, e il numero del nonce entangled è il tuo ApNonce. Tienili al sicuro da qualche parte, ne avrai bisogno più tardi
1. Segui il resto di questa guida

### Salvare i blobs (Tutti i Dispositivi)
1. Collega il tuo dispositivo iOS al tuo Mac o PC
1. Apri iTunes o Finder
    - Gli utenti Windows devono scaricare la versione [normale](https://www.apple.com/itunes/), NON la versione del Windows Store
1. Vai alla pagina di riepilogo del dispositivo
1. Fai clic due volte sul campo Numero seriale
    - Esso dovrebbe cambiare per mostrare il tuo numero ECID
1. Appuntati l'ECID da qualche parte in modo da poterlo leggere più tardi
1. Apri il sito web [TSS Saver](https://tsssaver.1conan.com/v2/)
1. Inserisci l'ECID del tuo dispositivo
1. Seleziona il tuo dispositivo
    - Gli utenti con iPhone 6S, 6S Plus e iPhone SE avranno bisogno di ottenere la loro board configuration tramite [AX-CPU](https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8) sull'App Store
    - Gli utenti con A12+ dovranno inserire ApNonce e Generator
1. Fai clic su Submit

## Salvare i blobs con blobsaver

blobsaver è un programma per PC multipiattaforma, compatibile con Windows, macOS e Linux, che ti permette di salvare facilmente i tuoi blobs su qualsiasi dispositivo, jailbroken o meno. Non è conveniente come le altre opzioni, ma funziona con la maggior parte dei dispositivi.

### blobsaver

1. Scarica, installa e avvia l'ultima versione di [blobsaver](https://github.com/airsquared/blobsaver/releases)
1. Connetti il tuo dispositivo iOS al tuo computer e assicurati che sia sbloccato
1. Clicca sul primo pulsante "Read from device", che inserirà il tuo ECID e le informazioni del dispositivo nel programma
1. Se il tuo dispositivo iOS non è A12 o superiore, non è necessario ottenere un APNonce e si può saltare il passo successivo

### Ottenere APNonce e generator specifici per il dispositivo

Assicurati che il tuo dispositivo sia sbloccato e connesso al tuo computer durante questo processo.

1. Clicca sul secondo pulsante "Read from device" accanto al campo APNonce
1. Se sei jailbroken o hai generatore/apnonce già impostati sul tuo dispositivo, seleziona "Jailbroken". Altrimenti, seleziona "Unjailbroken"

Il dispositivo si riavvierà in modalità di recupero più volte. Quando si riavvia in modalità normale, sblocca il dispositivo iOS.

::: danger

Se rimani bloccato in modalità di recupero, prova a utilizzare l'opzione "Exit Recovery Mode" dal menu "Help" su blobsaver.

:::

::: tip

Questi valori possono essere riutilizzati in qualsiasi momento per salvare i blobs se jailbroken o meno.

:::

### Salvare i Blobs
1. Una volta compilate tutte le informazioni, fai clic su "Go" per salvare i blobs
1. È inoltre possibile fare clic su "Save device" per salvare le informazioni del dispositivo corrente, in modo da poter salvare i blobs per esso in modo più veloce

### Salvare i blobs automaticamente in background
1. È possibile impostare blobsaver per salvare i blobs automaticamente in background, senza dover aprire manualmente blobsaver
1. Una volta che si dispone di uno o più dispositivi salvati, fare clic su "Background Settings" per iniziare a configurarlo
1. Seleziona per quali dispositivi si desidera salvare automaticamente i blobs in background, e blobsaver li testerà per assicurarsi che le informazioni del dispositivo siano corrette
1. È successivamente possibile modificare la frequenza con la quale i blobs vengono salvati, utilizzando il pulsante "Change Frequency"
1. Una volta pronto, fai clic su "Start Background" per attivarlo
1. Ora puoi chiudere blobsaver e i blobs saranno salvati automaticamente in background durante l'intervallo impostato

## Salvataggio dei Blobs Onboard

Il salvataggio dei Blobs Onboard è il processo di salvataggio la firma precedente dell'ultimo aggiornamento che hai eseguito, e la conversione di essa in un blob utilizzabile. Dato che hai aggiornato mentre la versione era ancora firmata, puoi riutilizzare questi blobs, ed essi saranno ancora validi. Tuttavia, il tipo di blobs che verrà salvato dipenderà da come si è aggiornato alla versione corrente.

### Blobs Onboard OTA
Se hai aggiornato alla versione della quale vuoi salvare i Blobs Onboard utilizzando l'app Impostazioni tramite aggiornamento over-the-air, allora i blobs saranno "Blobs OTA". Questi blobs richiedono un **exploit bootrom** per essere utilizzati, e **solo** con l'argomento `--use-pwndfu` su FutureRestore possono essere usati.

### Blobs Onboard iTunes
Se hai aggiornato/ripristinato alla versione della quale vuoi salvare i Blobs Onboard utilizzando iTunes / Finder, allora i Blobs Onboard saranno salvati come blobs normali e sarete in grado di usarli. Tuttavia, differiscono a seconda che si sia ripristinato o aggiornato utilizzando un computer.

Se *hai ripristinato* usando un computer, i tuoi blobs saranno "Erase" blobs, e **non** potranno essere utilizzati con l'opzione "Update (-u)" su FutureRestore.

Se hai *aggiornato* usando un computer, i tuoi blobs saranno "Update" blobs, e potranno essere utilizzati **solo** con l'opzione "Update (-u)" su FutureRestore.

### Salvare i Blobs Onboard

### Utilizzando Deverser

::: danger

Per utilizzare questo metodo è necessario un pc Linux o macOS e un dispositivo jailbroken con OpenSSH installato.

Su checkra1n/odysseyra1n, non hai bisogno di OpenSSH, ma è consigliato per i principianti.

:::

1. Sul tuo pc Linux o macOS, esegui `git clone https://github.com/joshuah345/deverser.git && cd deverser` per scaricare la sorgente di Deverser da GitHub
    - Se hai già fatto ciò, esegui `cd deverser` e `git pull` per ottenere le ultime modifiche
2. Esegui `chmod +x deverser.sh` per consentirne l'esecuzione, poi esegui `./deverser.sh` per avviare lo script
3. Rispondi `Yes` se viene chiesto di installare img4tool
    - img4tool converte il file grezzo nel tuo blob SHSH utilizzabile
4. Inserisci l'indirizzo IP del dispositivo
    - Su checkra1n/odysseyra1n, puoi eseguire iproxy se vuoi.
        - Su macOS, in un'altra finestra terminale, installa libimobiledevice con `brew install libimobiledevice libirecovery`, poi esegui `sudo iproxy 22 44`
        - Su Linux, è consigliaro utilizzare OpenSSH sul dispositivo, ma se si desidera installare manualmente libimobiledevice, un link ai binary sono [qui](https://cadoth.net/~nyuszika7h/ios-builds/libimobiledevice-static-linux.tar.gz)
    - Per utilizzare OpenSSH, installalo sul tuo dispositivo e ottieni l'indirizzo IP del dispositivo dalle impostazioni Wi-Fi
5. Lo script ti chiederà di inserire due volte la password di root del tuo dispositivo
    - Se non sei sicuro, è probabilmente `alpine`

Puoi trovare il tuo blob chiamato `(il TUO ECID).dumped.shsh` nella directory dove hai eseguito Deverser (di solito ~/deverser).

### Utilizzando una Ramdisk SSH

::: danger

Per utilizzare questo metodo è necessario un pc Linux o macOS e un dispositivo vulnerabile a checkm8 su iOS 12+.

Questo è un metodo più avanzato e non è comsigliato ai principianti.

:::

1. Vai su [questo link](https://github.com/verygenericname/SSHRD_Script) e imposta la ramdisk
    - Utilizzare `14.8` come versione ramdisk è consigliato, ma è possibile sceglierne una qualsiasi
2. Esegui `./sshrd.sh dump-blobs`
3. Infine, esegui `./sshrd.sh ssh`, poi esegui `reboot` nella sessione SSH.
    - Anche il riavvio forzato funzionerà

Puoi trovare il tuo blob chiamato `dumped.shsh` nella directory in cui hai clonato la repo (di solito ~/SSHRD_Script).

### Utilizzando System Info

::: danger

Questo metodo attualmente non funziona e non riuscirai a ottenere il tuo blob.

:::

1. Aggiungi la repo [https://apt.arx8x.net](https://apt.arx8x.net) sul tuo <router-link to="/package-managers">gestore di pacchetti preferito</router-link>
2. Scarica il Tweak `System Info` ![](https://imgur.com/a/g8XZPrM)
3. Dopo aver scaricato System Info, apri le Impostazioni e vai su `Generali > Info`
4. Scorri verso il basso fino a `ECID`
5. Esegui uno swipe verso sinistra su `ECID` e clicca `APTicket`
4. Clicca su `Submit`

Apparirà un popup con il messaggio "APTicket Submitted" una volta terminato. Ora puoi accedere ai tuoi blobs su [shsh.host](https://shsh.host).

### Verificare il Tipo di Blob

Per verificare i tipi di blobs che possiedi, usa [img4tool](https://github.com/tihmstar/img4tool)
1. Scarica gli zip IPSW e OTA da internet, estrai il file BuildManifest.plist da entrambi gli iPSW.
    - Google è tuo amico
2. Esegui  `img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 e img4tool -v OTA_BuildManifest.plist -s blob.shsh2`
3. Scorri attraverso l'output e controlla con quale BuildManifest img4tool ha riportato un successo.
