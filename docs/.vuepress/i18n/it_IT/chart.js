module.exports = {
  deviceChart: {
    deviceSelection: {
      pageTitle: 'Selezione Del Dispositivo (${deviceType})',
      description: 'Scopri quali jailbreak puoi usare sul tuo ${deviceType}',
      requiredReading: {
        title: 'Lettura Necessaria',
        content: [
          '${deviceType} diversi richiederanno step differenti per eseguire il jailbreak del tuo dispositivo ${osStr}. Questa pagina ti aiuterà a capire da dove cominciare.',
          'Qui sotto seleziona quale modello di ${deviceType} possiedi.'
        ]
      },
      iPhoneNotice: 'Nota che tutti i modelli "Plus", "Max" e "mini" di iPhone sono funzionalmente identici ai modelli normali.',
      info: {
        soc: "SoC: ${soc}",
        arch: "Architettura: ${arch}",
        latestFw: "Ultima versione: ${latestFw}",
        latestJailbreakFirmware: "Latest jailbreakable version: ${latestJailbreakFirmware}",
        released: "Rilasciato il ${released}",
        showMore: "Mostra altro",
        noJailbreaks: "No jailbreaks available."
      },
      dateStyles: { // Don't translate this bit, just ask me (emiyl) to handle it
        yearOnly: { year: 'numeric'},
        yearAndMonth: { dateStyle: 'long'},
        yearMonthAndDay: { dateStyle: 'long'}
      }
    },
    getStarted: {
      pageTitle: "Cominciamo!",
      description: "Scopri quali jailbreak puoi usare sul tuo Dispositivo iOS",
      requiredReading: {
        title: "Lettura Necessaria",
        content: [
          "Dispositivi differenti richiederanno passaggi differenti per eseguire il Jailbreak del tuo dispositivo iOS. Questa pagina ti aiuterà a capire da dove iniziare.",
          "Seleziona che tipo di dispositivo possiedi."
        ]
      }
    },
    firmwareSelection: {
      pageTitle: 'Selezione del Firmware (${device})',
      description: 'Scopri quali jailbreak puoi usare sul tuo ${device}.',
      requiredReading: {
        title: 'Lettura Necessaria',
        content: [
          'Versioni del firmware differenti richiederanno passaggi diversi per eseguire il jailbreak del tuo ${osStr} dispositivo. Questa pagina ti aiuterà a capire da dove iniziare.',
          'Seleziona la pagina appropriata per la tua versione dal grafico sottostante. Nota che i campi "Da" e "A" sono inclusivi. Ciò significa che, per esempio, la riga "da ${minFw0} a ${maxFw0}" include la versione ${minFw1}, la versione ${maxFw1}, e tutte le versioni in mezzo.',
          'La versione del dispositivo può essere trovata nell\'applicazione Impostazioni in `Generali` -> `Info`.'
        ]
      },
      findiOSVersion: {
        title: 'Trovare la tua ${osStr} versione',
        verStr: {
          old: 'Versione',
          new: 'Versione del Software',
          tvOld: "Apple TV Software",
          tvNew: "tvOS" 
        },
        instructions: {
          ios: "1. Apri l'app Impostazioni\n1. Entra in `Generali` -> `Info` -> `${verStr}`",
          tv: "1. Open the Settings application\n1. Navigate to `General\` -> `About` -> `${verStr}`",
        },
        image: { // For translating, you can take an identical screenshot of these images in the language that you're translating to
          altText: 'Trovare la versione di iOS su ${deviceType}',
          iphone: '/assets/images/find-version.jpg',
          ipad: '/assets/images/find-version-ipad.jpg',
          iphoneOld: '/assets/images/find-version-old.jpg',
          ipadOld: '/assets/images/find-version-ipad-old.jpg',
          tvOld: "/assets/images/find-version-tv-old.jpg",
          tvNew: "/assets/images/find-version-tv-new.jpg"
        }
      }
    },
    table: {
      title: 'Tabella Versioni',
      tableHeader: [
        'Da',
        'A',
        'Jailbreak'
      ],
      showBetaVersions: 'Mostra Versioni Beta',
      hideBetaVersions: 'Nascondi Versioni Beta',
      noJbTip: 'Per i campi contrassegnati con "N/A", non c\'è nessun jailbreak per quella versione.',
      showMore: "Mostra altro"
    }
  }
};