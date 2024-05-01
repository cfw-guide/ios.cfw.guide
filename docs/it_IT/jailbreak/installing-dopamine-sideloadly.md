---
lang: it_IT
title: Installare Dopamine (Sideloadly)
description: Guida all'installazione di Dopamine utilizzando Sideloadly
permalink: /installing-dopamine-sideloadly
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Dopamine è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, il che significa che richiede un'app per riapplicare l'exploit dopo un riavvio.

Dopamine supporta A9(X) e dispositivi successivi su iOS 15.0 a 16.5, da A9(X) a A14 e dispositivi M1 su iOS 16.5.1 e dispositivi da A9(X) a A11 su iOS 16.6 a 16.6.1.

::: danger

Se stai usando una versione beta o release candidate (RC) di iOS, o se il tuo dispositivo è sulla versione iOS di quando è stato spedito, questa guida non funzionerà e dovrai invece seguire <router-link to="/installing-dopamine">Installare Dopamine</router-link>.

:::

::: danger

se stai usando palera1n _rootful_, devi prima <router-link to="/removing-palera1n">Rimuovere palera1n rootful</router-link> prima di procedere.

:::

::: danger

Se hai precedentemente installato Serotonin e/o Bootstrap, dovrai rimuoverli completamente prima di procedere.

Se non sai cosa siano Bootstrap o Serotonin, puoi ignorare questo avviso e continuare.

:::

::: tip

Se stai usando un iPad A8(X), in questo momento, dovresti seguire <router-link to="/installing-meowbrek2">Installare meowbrek2</router-link>.

:::

## Download

- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L'ultima versione di [Dopamine](https://ellekit.space/dopamine)

### Installare l'applicazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di Dopamine su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

### Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di Dopamine adesso può essere aperta dalla home screen.

::: danger

Se sei su iOS da 16.0 a 16.6.1, avrai anche bisogno di abilitare la Modalità Sviluppatore.

Per farlo, vai in `Impostazioni` -> `Privacy e Sicurezza` e poi scorri verso il basso fino a vedere `Modalità sviluppatore`, tocca quella opzione, attiva la modalità sviluppatore e segui le istruzioni sullo schermo

:::

## Eseguire Dopamine

1. Riavvia il dispositivo
   - Questo passaggio non è necessario ma consigliato
2. Apri l’applicazione di Dopamine dalla home screen appena dopo il riavvio
3. Clicca su “Jailbreak”

::: tip

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente e il jailbreak non è installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

Sileo dovrebbe essere installato nella home. È possibile utilizzare Sileo per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

Mentre sei jailbroken, bisogna aggiornare e installare alcuni pacchetti per essere in grado di aggiornare altri pacchetti e affinché tutto funzioni correttamente

## Installare il software necessario

1. Apri l'app Sileo
2. Apri la sezione Sources
3. Tocca il repository "ElleKit", quindi tocca "Tutte le Categorie"
4. Clicca su `ElleKit`
5. Clicca "Get"
6. Tocca la barra della coda in fondo alla pagina
7. Clicca su “Conferma”
8. Una volta finito, tocca `Restart SpringBoard Later`
9. Vai alla sezione "Search"
10. Cerca `PreferenceLoader`
11. Tocca `PreferenceLoader`
12. Clicca "Get"
13. Tocca la barra della coda in fondo alla pagina
14. Clicca su “Conferma”
15. Una volta finito, tocca `Restart SpringBoard`

::: tip

Dopo aver fatto tutti i passaggi di cui sopra, potrebbe essere necessario riavviare e rieseguire il jailbreak affinché l'iniezione dei tweak funzioni correttamente.

:::

## Installare TrollStore

::: tip

Nonostante Dopamine sia installata e configurata, la prossima sezione - _nonostante sia facoltativa_ - è **altamente consigliata**, visto che permette di installare Dopamine senza preoccuparsi di mantenerla firmarla.

:::

### Installare TrollStore

1. Apri l'app Sileo
2. Vai alla scheda Cerca e cerca `TrollStore Helper`
3. Tocca `TrollStore Helper`
4. Clicca "Get"
5. Tocca la barra della coda in fondo alla pagina
6. Clicca su “Conferma”
7. installa il pacchetto `TrollStore Helper`
8. Dopo che TrollStore Helper si installa, chiudi Sileo
9. Apri l'app TrollHelper nella home screen
10. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

::: danger

Assicurati di eseguire i passaggi seguenti, o non sarà possibile accedere a TrollStore dopo aver riavviato il dispositivo in iOS stock.

:::

### Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app
4. Riavvia il tuo dispositivo, quindi apri l'app `Suggerimenti`
5. Premi `Refresh App Registrations`

TrollStore dovrebbe ora essere accessibile dalla schermata iniziale. Da lì, possiamo utilizzare TrollStore per installare Dopamine permanentemente.

### Download

L'ultima versione di [Dopamine](https://ellekit.space/dopamine)

- Assicurati di scaricare il file `.ipa` sul tuo dispositivo iOS

### Installare Dopamine

1. Apri TrollStore se non è già aperto

- Se sei in una scheda diversa, torna alla scheda `Apps`

1. Premi sul `+` in alto a destra
2. Vai a dove hai salvato il file `.ipa` di Dopamine
3. Tocca il file `.ipa` di Dopamine
4. Premi su `Installa`

L'app Dopamine sarà ora installata sul tuo dispositivo.
