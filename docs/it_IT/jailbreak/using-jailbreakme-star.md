---
lang: it_IT
title: JailbreakMe Star
description: Guida all'utilizzo di JailbreakMe (Star)
permalink: /it_IT/using-jailbreakme-star
redirect_from:
  - /it_IT/installing-jailbreakme-star
  - /it_IT/installing-star
  - /it_IT/star
  - /it_IT/jailbreakme-star
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - WhitetailAni
---

JailbreakMe Star è in grado di eseguire il jailbreak di ogni dispositivo su iPhone OS 3.1.2-4.0.1 tranne l'iPad 1a Generazione su iPhone OS 3.2.2.

JailbreakMe Star è un jailbreak untethered, sopravvive ad un riavvio e può causare un bootloop permanente se qualcosa va storto. Se ti imbatti in un bootloop, ripristina il dispositivo tramite iTunes, Finder (macOS Catalina e successivo) o FutureRestore.

## Eseguire JailbreakMe Star

1. Apri Safari sul tuo dispositivo iOS
1. Visita il sito [jailbreakme.com](http://jailbreakme.com)
1. Fai uno slide verso destra su “Slide to Jailbreak”

Dopo un paio di minuti, Cydia dovrebbe essere installato sulla home screen.

## Patchare Cydia

::: danger

Salta questi passaggi se sei su iOS 4 o superiore

:::

1. Apri Cydia e seleziona `Developer (No Filters)`
1. Attendi la ricarica dei dati (Potrebbe richiedere molto tempo, assicurari che il dispositivo non vada in modalità riposo)
1. Quando ti viene chiesto degli aggiornamenti essenziali, seleziona `Complete Upgrade` (Di nuovo, assicurati che il dispositivo non vada in modalità riposo)
1. Una volta finito, clicca su `Close Cydia (Restart)`
1. Dopo il riavvio di Cydia, attendi la ricarica dei dati e **ignora eventuali errori sui certificati server non attendibili**
1. Vai nella sezione sorgenti, premi `Edit`, e poi `Add`
1. Digita `http://cydia.invoxiplaygames.uk/`e attendi che `Close` appaia nell'angolo in alto a destra
1. Clicca sull’appena aggiunta `IPG’s Cydia Repo`, poi clicca su `Tweaks`, e cerca `Cydia HTTPatch`
1. Clicca su `Install`, poi, `Confirm`, e aspetta che `Close` appaia in alto a destra
1. Cydia si chiuderà, e ora dovrebbe essere completamente patchata.

Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
