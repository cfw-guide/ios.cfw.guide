---
lang: it_IT
permalink: /it_IT/installing-p0sixspwn
title: p0sixspwn
description: Guida per l’installazione di p0sixspwn
redirect_from:
  - /it_IT/installing-posixpwn
  - /it_IT/p0sixpwn
  - /it_IT/posixpwn
  - /it_IT/p0
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Midnight145
---

Posixspwn è in grado di eseguire il jailbreak di tutti i dispositivi iOS con una versione del firmware 6.1.3-6.1.6

P0sixspwn è un jailbreak [untethered](/types-of-jailbreak/#untethered-jailbreaks), sopravvive ad un riavvio e può causare un bootloop permanente se qualcosa va storto. Se ti imbatti in un bootloop, ripristina il dispositivo tramite iTunes, Finder (macOS Catalina e successivo) o FutureRestore

Avrai bisogno di un computer che esegue macOS 10.12 Sierra o più vecchio o Windows XP o più recente. Wine non funzionerà.

![Uno screenshot di P0sispwn (Windows)](/assets/images/p0sixspwn-win.png)

::::: tabs

:::: tab name="macOS Sierra or older" :default="true"

1. Scarica l'ultima versione di [P0sixspwn](https://ih8sn0w.com/p0sixspwn.html)
1. Decomprimi P0sixspwn
1. Esegui P0sixspwn
    - Tasto destro, `Apri`
1. Collega il tuo dispositivo iOS tramite USB al tuo computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Clicca su `Jailbreak` su P0sixspwn
    - Il jailbreak potrebbe richiedere un po ', si prega di essere paziente e non lasciare che il computer vada in modalità di riposo

::::

:::: tab name="macOS High Sierra and newer"

1. Scarica la versione [personalizzata di p0sixspwn aggiornata per versioni di macOS moderne](https://archive.org/download/p0sixspwn-modernmacOS/p0sixspwn%206.1.6%20test.zip)
1. Decomprimi il file ZIP
1. Apri terminale (si trova in `Applicazioni/Utility/`)
1. Naviga nella cartella zip estratta utilizzando con il comando `cd`
1. Esegui `./p0sixspwn.tool` dalla cartella P0sixspwn
    - Se si riceve un errore `“pris0nbarake” non può essere aperto perché lo sviluppatore non può essere verificato.` o qualcosa di simile, esegui `sudo xattr -c *` nella cartella P0sixspwn e poi esegui `./p0sixspwn.tool` di nuovo.
1. Collega il tuo dispositivo iOS tramite USB al tuo computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Clicca su `Jailbreak` su P0sixspwn
    - Il jailbreak potrebbe richiedere un po ', si prega di essere paziente e non lasciare che il computer vada in modalità di riposo

::::

:::: tab name="Windows"

1. Controlla la tua versione di iTunes, se è 11.1.4 o inferiore, puoi saltare i passaggi 2-4
    - Puoi controllare aprendo iTunes, facendo clic su `Aiuto`, e facendo clic su `Informazioni`
1. Premi `il tasto Windows+R` per aprire la finestra di Esegui, e digita `appwiz.cpl`
1. Disinstalla tutto ciò rilasciato da `Apple Inc.`
    - Puoi trovarli più facilmente se ordini per azienda
    - La quantità di applicazioni può variare, assicurati di rimuoverle tutte
    - Se ti viene chiesto di riavviare il computer non farlo
1. Dopo che tutti i programmi sono stati disinstallati, riavvia il computer
1. Scarica la versione 11.1.5 di iTunes
    - [64-bit](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
    - [32-bit](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)
1. Installa iTunes, e riavvia il computer se richiesto
1. Scarica l'ultima versione di [P0sixspwn](https://ih8sn0w.com/p0sixspwn.html)
1. Decomprimi P0sixspwn

::: tip

Per Windows 10 e successivi, è necessario impostare la modalità di compatibilità per l'applicazione P0sixspwn per Windows XP SP3
1. Click destro su `p0sixspwn-1.0.8.exe`
1. Seleziona `Proprietà`
1. Vai alla scheda `Compatibilità`
1. Spunta la casella su `Modalità compatibilità`
1. Imposta la casella su `Windows XP (Service Pack 3)`
1. Fai clic su `Applica`, e poi `OK`

:::

9. Esegui P0sixspwn
10. Collega il tuo dispositivo iOS tramite USB al tuo computer
      - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
11. Clicca su `Jailbreak` su P0sixspwn
      - Il jailbreak potrebbe richiedere un po ', si prega di essere paziente e non lasciare che il computer vada in modalità di riposo

::: tip

Dopo che il jailbreak è completo, installa l'ultima versione di iTunes per evitare problemi di librerie
 - Windows XP e Windows Vista (12.1.3):
    - [64-bit](https://secure-appldnld.apple.com/itunes12/031-34005-20150916-98D38F1E-5C11-11E5-A6AD-C05A6DA99CB1/iTunes6464Setup.exe)
    - [32-bit](https://secure-appldnld.apple.com/itunes12/031-34002-20150916-98D32A92-5C11-11E5-80AC-C25A6DA99CB1/iTunesSetup.exe)
 - Windows 7 e successivi (selezionare Windows 8 se si è su Windows 7):
    - [Articolo del Supporto Apple](https://support.apple.com/en-us/HT210384)

:::

::::

:::::

::: tip

Assicurati di utilizzare un connettore certificato MFI a 30 pin o lightning per probabilità di successo più alte

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
