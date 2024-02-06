---
lang: it_IT
title: Dopamine
description: Guida per l'installazione di Dopamine
permalink: /it_IT/installing-dopamine
pkgman: sileo
redirect_from:
  - /installing-fugu15max
extra_contributors:
  - opa334
  - iCraze
---

Dopamine è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede quindi l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

::: warning

Dopamine supporta solo A12 e dispositivi più recenti su iOS 15.0 a 15.4.1

:::


## Download

L’ultima versione di [Dopamine](https://ellekit.space/dopamine)
  - Assicurati di scaricare il file `.tipa` sul tuo dispositivo iOS

## Installazione di TrollHelper

1. Apri Safari
1. Vai su [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
1. Clicca su `Install`

Un'app chiamata `GTA Car Tracker` verrà ora installata sul tuo dispositivo iOS. Nonostante il nome, questa app è in realtà TrollHelper.

## Installazione di TrollStore

1. Apri l'app `GTA Car Tracker`
1. Clicca `Install TrollStore`

L'applicazione TrollStore verrà ora installata sul tuo dispositivo iOS.

## Installare Persistence Helper

1. Riapri l'app `GTA Car Tracker`
1. Clicca su `Register Persistence Helper`

L'app `GTA Car Tracker` può ora essere utilizzata come Persistence Helper

::: tip


Il motivo per cui la Persistence Helper è molto importante è che, ogni volta che iOS ricostruisce la sua cache delle icone, tutte le applicazioni installate da TrollStore (così come TrollStore stesso) scompariranno o non si apriranno più.

Per aggirare ciò, il Persistence Helper (che sarà ancora aperto anche dopo che questo accade) può aggiornare le registrazioni delle app in modo che le applicazioni riappariranno e si apriranno di nuovo.

:::


## Installare Dopamine

1. Torna alla scheda `Apps`
1. Premi sul `+` in alto a destra
1. Vai a dove hai salvato il file Dopamine `.tipa`
1. Tocca il file Dopamine `.tipa`
1. Clicca su `Install`

L'app Dopamine sarà ora installata sul tuo dispositivo.

## Eseguire Dopamine

1. Riavvia il dispositivo
    - Questo passaggio non è necessario ma consigliato
1. Apri l’applicazione di Dopamine dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”

::: tip


Se sul dispositivo l’app, crasha/si riavvia inaspettatamente e il jailbreak non è installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::


Sileo dovrebbe essere installato nella home. Puoi utilizzare Sileo per installare <router-link to="/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

Mentre sei jailbroken, bisogna aggiornare e installare alcuni pacchetti cosicché siamo in grado di aggiornare altri pacchetti e affinché tutto funzioni correttamente

## Installare il software necessario

1. Apri l'app Sileo
1. Apri la sezione Sources
1. Tocca il repository "ElleKit", quindi tocca "Tutte le Categorie"
1. Clicca su `ElleKit`
1. Clicca "Get"
1. Tocca la barra della coda in fondo alla pagina
1. Clicca su “Conferma”
1. Una volta finito, tocca `Riavvia SpringBoard più tardi`
1. Vai alla sezione "Cerca"
1. Cerca `PreferenceLoader`
1. Tocca `PreferenceLoader`
1. Clicca "Get"
1. Tocca la barra della coda in fondo alla pagina
1. Clicca su “Conferma”
1. Una volta finito, tocca `Riavvia SpringBoard`

::: tip


Dopo aver fatto tutti i passaggi di cui sopra, potrebbe essere necessario riavviare e rieseguire il jailbreak affinché l'iniezione dei tweak funzioni correttamente.

:::
