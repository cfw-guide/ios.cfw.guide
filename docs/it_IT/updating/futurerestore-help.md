---
lang: it_IT
title: "Aiuto con FutureRestore"
description: Soluzioni ad alcuni problemi di FR.
permalink: /futurerestore-help
redirect_from:
  - /frhelp
  - /futurerestorehelp
  - /FutureRestoreHelp
extra_contributors:
  - Tanbeer191
  - TheHacker894
---

## Pagina di aiuto

- Questa pagina è destinata a fornire soluzioni per gli errori riscontrati con FutureRestore. Se non rislovi, per favore unisciti al [Server Discord](https://discord.gg/9apvC4C3CC) di r/jailbreak e chiedi aiuto su #futurerestorehelp

## iBEC error (error code -8)
Questo è un errore comune nella quale potresti imbatterti durante l'utilizzo di FutureRestore, soprattutto se si utilizza Windows. Per risolvere:
1. Disinstalla tutti i dispositivi Apple su Gestione Dispositivi
    - Assicurati di selezionare "Disinstalla Driver" durante la disinstallazione
1. Disinstalla tutti i prodotti Apple, inclusi iTunes e Apple Device Support nel Pannello di Controllo
1. Scollega e ricollega il tuo dispositivo
1. Cerca un qualsiasi dispositivo e driver Apple su gestione dispositivi e disinstallali
1. Disconnetti il tuo dispositivo
1. Installa il file iTunes `.exe` da [apple.com](https://support.apple.com/kb/DL1816?locale=en_US)
1. Avvia il dispositivo in [Modalità di Recupero](https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/) e collegalo al tuo computer
1. Disinstalla il driver e il software di iBoot (Recovery) da Gestione Dispositivi
1. Esegui di nuovo FutureRestore
1. Scollega e ricollega il tuo dispositivo.
1. Esegui di nuovo FutureRestore. Il problema dovrebbe ora essere risolto.

![esempio](https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png)

## Device ApNonce doesn't match APTicket nonce

Questo errore significa che il generator impostato sul dispositivo non corrisponde a quello del blob. Per risolvere questo problema, segui la parte `Impostare il nonce` sulla <router-link to="/futurerestore">pagina di FutureRestore</router-link>

## SEP Firmware is not being signed

Questo problema si verifica quando l'utente tenta di specificare manualmente la SEP della versione *target*, invece della *versione più recente* disponibile. Per risolvere questo problema, scegli l'argomento `latest-sep` o specifica manualmente la SEP dell'ultima versione iOS disponibile

## Could not connect to device in recovery mode / Failed to place device in recovery mode

**NOTA:** se l'errore è chiamato in modo simile, segui questi passaggi.

- Se il dispositivo è in modalità di recupero, esegui di nuovo FutureRestore mentre il dispositivo è in modalità di recupero.
- Se il dispositivo non è in modalità di recupero, entra in modalità di recupero manualmente, quindi esegui nuovamente FutureRestore.

## Error: Unable to receive message from FDR...

La correzione per questo errore è attendere (può richiedere molto tempo) o semplicemente riprovare. Questo è un errore che è stato diagnosticato, ma nessuna correzione per esso è disponibile al momento della scrittura di questa guida.
