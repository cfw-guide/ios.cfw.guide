---
lang: it_IT
title: "Bloccare il Rilevamento del Jailbreak"
description: Bypassare ed evitare il rilevamento del jailbreak.
permalink: /it_IT/blocking-jailbreak-detection
redirect_from:
  - /it_IT/blocking
  - /it_IT/jailbreak-detection
extra_contributors:
  - Absolucy
  - TheHacker894
---

::: danger

Consigliamo di non utilizzare applicazioni bancarie su un dispositivo jailbroken. Usa un dispositivo diverso e sicuro per accedere al tuo conto bancario.

:::

Molte applicazioni, che si basano sulla sicurezza, possiedono algoritmi per rilevare e bloccare gli utenti jailbroken dall'utilizzo dell'app. Ciò include applicazioni bancarie, alcuni videogiochi online (ad esempio Pokemon Go, Mario Kart Tour) e altre applicazioni incentrate sulla privacy come Snapchat.

Ciò è una buona cosa da un punto di vista di sicurezza, siccome per un dispositivo jailbroken è molto più probabile essere esposto a rischi rispetto a una versione stock di iOS. Ciò può causare dei problemi quando alcuni di noi vogliono solo utilizzare le applicazioni che abbiamo bisogno di utilizzare.

::: danger

Bloccare il rilevamento del jailbreak può impedire l'accesso a foto e altri file nelle applicazioni selezionate.

:::

Adesso vedremo i tweak che possono essere utilizzati per minimizzare il rilevamento del jailbreak. Alcune applicazioni, tuttavia, non possono essere patchate e non funzioneranno mentre si è jailbroken, indipendentemente dai bypass utilizzati. Altre app potrebbero aver bisogno di bypass realizzati specificamente per esse.
## Tweak

- [A-Bypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/&package=com.rpgfarm.a-bypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/">repo.co.kr</a>)
- [Liberty Lite (Beta)](cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/&package=com.ryleyangus.libertylite.beta) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/">ryleyangus.com/repo</a>)
- [Choicy](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/&package=com.opa334.choicy) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/">opa334.github.io</a>)
- Libhooker Configurator (disponibile sulla repo di Odyssey)
- [KernBypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/&package=jp.akusio.kernbypass-unofficial) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/">cydia.ichitaso.com</a>)
- [vnodebypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/&package=kr.xsf1re.vnodebypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/">repo.xsf1re.kr</a>)

::: tip

Choicy è disponibile sulla repo predefinita di BigBoss, tuttavia si consiglia di aggiungere la repo dello sviluppatore per assicurarsi di avere la versione più aggiornata.

:::

C'è un altro software disponibile per nascondere il jailbreak, come [Shadow](sileo://package/me.jjolano.shadow) (<a href="sileo://source/https://ios.jjolano.me/">ios. jolano.me</a>), ma tratteremo solo i tweak presenti in questa guida.

## Installazione

1. Apri il tuo gestore di pacchetti (ad es. Cydia, Sileo, Zebra)
1. Aggiungi le tre repo linkate sopra
1. Cerca e installa i tre pacchetti
1. Esegui un respring quando richiesto

## A-Bypass

::: tip

Secondo l'autore del tweak, A-Bypass funziona meglio sui jailbreak basati su libhooker, come <router-link to="/it_IT/installing-chimera">Chimera</router-link>, <router-link to="/it_IT/installing-odyssey">Odyssey</router-link>, <router-link to="/it_IT/installing-odysseyra1n">odysseyra1n</router-link>, e <router-link to="/it_IT/installing-taurine">Taurine</router-link>. Tuttavia funziona lo stesso sui jailbreak basati su Substrate/Substitute, come checkra1n e unc0ver.

:::

1. Apri l'app delle Impostazioni
2. Scorri verso il basso fino a `A-Bypass`
3. Premi `Check for Updates`
    - Se una nuova app non funziona con A-Bypass, dovresti sempre controllare gli aggiornamenti nelle preferenze di A-Bypass.
4. Scorri verso il basso e abilita le applicazioni nella quale desideri bloccare il rilevamento del jailbreak.

## Liberty Lite

1. Apri l'app delle Impostazioni
1. Scorri verso il basso fino a `Liberty Lite`
1. Abilita `Enable Liberty`
1. Clicca `Block Jailbreak Detection`
1. Abilita le app nella quale vuoi bloccare il rilevamento del jailbreak

## Choicy

::: tip

Questa è l'opzione migliore per gli utenti che vogliono utilizzare Snapchat sul loro dispositivo jailbroken.

:::

::: tip

Se si utilizza un jailbreak basato su libhooker, come <router-link to="/it_IT/installing-chimera">Chimera</router-link>, <router-link to="/it_IT/installing-odyssey">Odyssey</router-link>, <router-link to="/it_IT/installing-odysseyra1n">odysseyra1n</router-link>, o <router-link to="/it_IT/installing-taurine">Taurine</router-link>, allora [libhooker configurator](#libhooker-configurator) svolge la stessa funzione di Choicy, ma è nativamente integrato in libhooker.

:::

1. Apri l'app delle Impostazioni
1. Scorri verso il basso fino a `Choicy`
1. Clicca `Applications`
1. Clicca su un'applicazione che hai selezionato con Liberty Lite
1. Abilita `Custom Tweak Configuration`
    - Per Snapchat, abilita `Disable Tweak Injection` e salta i passi successivi
1. Assicurati che `Whitelist` sia selezionata
1. Abilita il bypass che stai usando - per Liberty Lite sarebbe `zzzzzLiberty`, o `!ABypass2` per A-Bypass.
1. Ripeti questo procedimento per ogni app che hai selezionato da usare con il tweak.

## libhooker configurator

::: warning

Questo funziona solo sui jailbreak basati su libhooker! Se si utilizza un jailbreak basato su Substrate o Substitute, come checkra1n o unc0ver, allora *non funzionerà*, e dovresti usare [Choicy](#choicy)!

:::

1. Apri l'applicazione `libhooker`
1. Premi "Applications"
1. Scorri verso il basso per trovare l'applicazione che desideri configurare e premici sopra
1. In questa sezione è possibile disabilitare completamente i tweak nell'applicazione interessata, o configurare i singoli tweak.
   - Per configurare i singoli tweak, abilita "Override Configuration", che abiliterà delle opzioni per consentire solo specifici tweak o bloccare specifici tweak.
   - Ad esempio, per consentire solo Liberty Lite, dovresti selezionare `Allow`, e poi selezionare `zzzzzLiberty`.
   - Se stai usando A-Bypass, dovresti abilitare `!ABypass2`.

## KernBypass (iOS 12.0 - 14.2)

::: tip

Questa è l'opzione migliore per gli utenti che vogliono utilizzare le app Nintendo (Mario Kart Tour, Animal Crossing: Pocket Camp, ecc) e Pokemon GO sul loro dispositivo.

:::

::: warning

KernBypass non funzionerà su iOS 14 con unc0ver. Dai un'occhiata invece a [vnodebypass](#vnodebypass).

:::

::: danger

KernBypass è un kernel tweak. Non installarlo su dispositivi non supportati, usalo a tuo rischio e pericolo.

:::

1. Apri l'app delle Impostazioni
1. Scorri verso il basso fino a `KernBypass`
1. Premi `Enable KernBypass`
1. Abilita le app nella quale vuoi bloccare il rilevamento del jailbreak

## vnodebypass

::: tip

vnodebypass è simile a KernBypass per quanto riguarda ciò che può bypassare, ma sii consapevole che mentre è attivo, perderai l'accesso ai tuoi tweak!

:::

::: danger

vnodebypass è un kernel tweak. Non installarlo su dispositivi non supportati, usalo a tuo rischio e pericolo.

:::

1. Se sei su iOS 14, assicurati che `libkrw` 1.1.0 o successivo sia installato. È disponibile nella repo predefinita Elucubratus, se stai usando unc0ver o checkra1n.
2. Apri l'app `vnodebypass`
3. Tocca il pulsante `Enable`
4. Quando hai finito di usare l'app con il rilevamento del jailbreak, torna nell'app `vnodebypass` e premi `Disable`
