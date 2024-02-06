---
lang: it_IT
title: "FAQ"
description: Domande frequenti sui dispositivi Jailbroken.
permalink: /it_IT/faq
redirect_from:
  - /it_IT/help/faq
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - BurritoSOFTWARE
---

## Domande generali

### Che cos'è il jailbreak?

Jailbreak è un termine utilizzato per descrivere il processo che consente di sbloccare veramente il potenziale del tuo dispositivo iOS. Il sistema operativo mobile di Apple è noto per la sua sicurezza e questo è in parte a causa di quanto sia bloccato. Eseguire il jailbreak del tuo dispositivo ti permetterà di infrangere tali restrizioni e personalizzare il dispositivo a tuo piacimento.

Il Jailbreak ti dà la possibilità di installare applicazioni di terze parti e "tweak" (modifiche) tramite un gestore di pacchetti per personalizzare e migliorare l'esperienza utente. Il Jailbreak è gratuito e facile da eseguire per la maggior parte dei dispositivi.

### Il Jailbreak è legale?

Il Jailbreak negli Stati Uniti è perfettamente legale. Nel 2010, l'Ufficio per il Copyright degli Stati Uniti ha dichiarato il Jailbreak come un'eccezione al Digital Millennium Copyright Act.

Prima di procedere dovresti controllare se nel tuo Paese è legale o meno, tuttavia nella maggior parte dei Paesi non dovrebbero esserci problemi.

### Cos'è un gestore di pacchetti?

I gestori di pacchetti sono utilizzati per installare, disinstallare e modificare software ufficiali e fatti dalla community per personalizzare il tuo dispositivo. Sileo è un esempio di gestore di pacchetti.

Possono essere messi a confronto con l'App Store di iOS, dove è possibile installare software gratuiti o a pagamento.

### Che cos'è una repo?

Esse sono essenzialmente database che contengono un sacco di tweak da installare. Quando si aggiungono delle repo sul tuo gestore di pacchetti, sarà possibile installare tweak su di esso, e cercarli utilizzando la funzione di ricerca.

### Cosa sono i tweak?

I tweak sono piccole modifiche che possono essere installate per cambiare l'aspetto e/o la sensazione del tuo dispositivo.

Con alcune eccezioni, i tweak di solito non possiedono un'icona app, ma piuttosto un'area nell'app Impostazioni per modificare il funzionamento dei vari tweak. I tweak più semplici potrebbero non averla.

### Che cosa è il "respring" o "Riavviare la Springboard"?

Il respring è essenzialmente la procedura con la quale si riavvia la home screen e l'interfaccia utente di iOS. La maggior parte delle volte, è possibile installare un tweak e eseguire un respring per applicarlo, senza riavviare completamente.

Non dovrai rieseguire un exploit dopo il respring e rimarrai jailbroken.

### Che cos'è la Modalità di Recupero?

La Modalità di Recupero è una protezione integrata per il dispositivo che consente all'utente di ricominciare completamente con una nuova installazione di iOS. Ciò è particolarmente utile se il sistema operativo installato è danneggiato e non può avviarsi correttamente, cosa che può accadere durante i jailbreak, anche se raramente. Entrare in modalità di recupero è possibile sul dispositivo e attraverso un computer, e iTunes/Finder utilizzerà la modalità di recupero durante gli aggiornamenti e i ripristini normali.

### Che cos’è la modalità DFU?

La modalità DFU è un modo per interagire con il dispositivo iOS senza caricare il sistema operativo o il boot loader. Sta per Device Firmware Upgrade. È funzionalmente diverso dalla modalità di recupero ed è generalmente inteso come ultima risorsa nel caso in cui le cose vadano seriamente male sul tuo dispositivo, tuttavia possiamo usarlo con <router-link to="/it_IT/installing-odysseyra1n">Odysseyra1n</router-link> per eseguire il jailbreak sul tuo dispositivo. Entrare in modalità DFU è possibile solo sul dispositivo in quanto fa parte del telefono stesso.

### Cosa posso fare una volta eseguito il Jailbreak?

- Ottenere pieno accesso al sistema operativo del tuo dispositivo
- Ottenere l'accesso a un gestore di pacchetti, come Sileo o Zebra
- Installare temi per cambiare l'aspetto e la sensazione del tuo dispositivo
- Installare tweak per modificare il comportamento di iOS

### Cosa dovrei sapere prima di iniziare?

- È **fortemente** consigliato eseguire il backup del dispositivo su iCloud, iTunes o Finder (su macOS Catalina o più recenti) in caso di perdita dei dati
- Se non si verificano problemi durante l'installazione, sarai jailbroken senza alcuna perdita dei dati
- Mantieni il dispositivo collegato a una fonte di alimentazione o mantieni la batteria abbastanza carica, in modo che qualsiasi spegnimento imprevisto può essere impedito
- Eseguire il Jailbreak consente di sbloccare il sistema, ma può comportare una perdita dei dati se il sistema operativo viene danneggiato
- Potresti essere vulnerabile a più malware e altri problemi di sicurezza dopo il jailbreak rispetto all'essere in uno stato non-jailbroken
- La garanzia del dispositivo diventerà nulla dopo il jailbreak fino a quando non viene ripristinato a uno stato non-jailbroken, che è facile da fare

## Domande sui Blobs

### Che cosa è un blob?

Un blob è un file contenente una chiave speciale specificatamente per quel dispositivo per consentire il downgrade a un firmware specifico.

I blobs sono una firma digitale fatta da Apple che è stata salvata al momento in cui la versione del firmware era firmata. Se ne possiedi uno (o molti), tienili al sicuro.

### Come funzionano i blobs?

i blobs possono essere utilizzati in un programma chiamato `futurerestore`, per ripristinare un firmware, se una volta forniti il firmware SEP (Secure Enclave Processor) e il firmware Baseband essi sono compatibili con la versione iOS di destinazione.

Anche se i blobs possono diventare incompatibili il ripristino al momento attuale, si consiglia ancora di salvarli, nel caso in cui si renda disponibile un'opportunità che ne consente il loro utilizzo.

### Li posso salvare ora?

Ci sono due tipi di blobs che possono essere salvati al momento attuale:

- Versioni attualmente firmate da Apple
- La versione su cui sei attualmente

Nota che salvare le blobs per la versione su cui sei attualmente dipende dal fatto che tu abbia o meno un jailbreak, e può o non può essere utilizzabile a seconda del dispositivo che si dispone e come è stata installata la versione sulla quale si è in quel momento.

Per vedere tutti i metodi possibili per salvare le blobs, segui la guida per <router-link to="/it_IT/saving-blobs">Salvare i Blobs</router-link> .

## Domande relative ai tweak

### Dovrei usare tweak come Batchomatic o IAmLazy

Dovresti **non** utilizzare questi tweak, a causa del fatto che tendono a causare problemi e instabilità all'interno della configurazione del jailbreak. Invece, se stai cambiando jailbreak o aggiornando a una versione più recente di iOS, crea una tweaklist nelle note e poi installali di nuovo manualmente.

## Altre domande

### Qual è l'ultima versione iOS con un jailbreak per il mio dispositivo a 64 bit

Ciò può essere facilmente capito controllando <router-link to="/get-started">Cominciamo!</router-link>, nel caso in cui non si voglia passare per Cominciamo!, ecco le seguenti informazioni:

- **iPad A7**: iOS 12.5.7 (tramite Odysseyra1n o Chimera)
- **iPhone A7/A8**: iOS 12.5.7 (tramite Odysseyra1n o Chimera)
- **iPod Touch (6a generazione)**: iOS 12.5.7 (tramite Odysseyra1n o Chimera)
- **A8(X) iPads**: iPadOS 15.8.1 (via meowbrek2 or palera1n)
- **iPod Touch (7th Generation)**: iOS 15.8.1 (via meowbrek2 or palera1n)
- **A9/A10 iPhones**: iOS 15.8.1 (via meowbrek2 or palera1n)
- **A9(X) iPads**: iPadOS 16.7.5 (via palera1n)
- **A10(X) iPads**: iPadOS 17.3 (via palera1n)
- **A11 iPhones**: iOS 16.7.5 (via palera1n)
- **iPhone A12-A15**: iOS 15.4.1 (tramite Dopamine (Noto anche come Fugu15 Max))
- **iPad A12-A15/M1**: iPadOS 15.4.1 (tramite Dopamine (Noto anche come Fugu15 Max))

Tieni a mente che i dispositivi A12 o più recenti che eseguono iOS 15.5 o più recente non hanno un jailbreak, ciò significa anche che nessun dispositivo M2 o A16 ha un jailbreak attualmente.
