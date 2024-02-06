---
lang: it_IT
title: Utilizzare JailbreakMe 4.0
description: Guida all'utilizzo di JailbreakMe 4.0
permalink: /it_IT/using-jailbreakme-4-0
redirect_from:
  - /installing-jailbreakme-4-0
  - /jailbreakme-4-0
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
---

JailbreakMe 4.0 è in grado di eseguire il jailbreak di ogni dispositivo a 32 bit su versioni firmware dalla 9.1 alla 9.3.4.

Tieni a mente che il jailbreak di JailbreakMe 4.0 non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

## Eseguire JailbreakMe 4.0

1. Apri Safari sul tuo dispositivo iOS
1. Visita il sito [jailbreak.me](http://jailbreak.me)
1. Tocca "jailbreak me!"

Dopo un paio di minuti, Cydia dovrebbe essere installato sulla home screen.

Per rieseguire il jailbreak in futuro, rifare questi step dovrebbe rieseguire il jailbreak sul tuo dispositivo.

::: warning


Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::


## Rendere il jailbreak untethered

Questo è un passaggio opzionale che permette al jailbreak di essere eseguito automaticamente quando il dispositivo viene avviato. Questo significa che non dovrai rieseguire il jailbreak tramite jailbreak.me dopo che il tuo dispositivo si spegne.

Dovrai usare Cydia per installare l'untether. Se non hai familiarità con il funzionamento di Cydia, leggi [Cydia](/installing-homedepot/using-cydia.html) prima di tornare a questa pagina.

1. Apri l'applicazione Cydia
1. Controlla la sezione "Sorgenti" e assicurati che "tihmstar's beta repo" sia aggiunta
    - Se non riesci a trovarla, clicca su `Modifica` -> `+` e inserisci `repo.tihmstar.net`
1. Apri la sezione "Cerca" e inserisci "UntetherHomeDepot"
1. Premi sul tweak e poi premi su "Installa" nell'angolo in alto a destra dello schermo
1. Conferma l'installazione

Una volta terminato, ti verrà chiesto di riavviare il dispositivo.

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

::: tip


Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installare Zebra</router-link>

:::