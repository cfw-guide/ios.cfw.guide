module.exports = {
  deviceChart: {
    deviceSelection: {
      pageTitle: "Device Selection (${deviceType})",
      description: "Find out what jailbreaks you can use on your ${deviceType}",
      requiredReading: {
        title: "Required Reading",
        content: [
          "Different ${deviceType}s will require different steps to jailbreak your ${osStr} device. This page will help you find where to start.",
          "Please select what model of ${deviceType} you have below.",
          "If your ${deviceType} is not listed, it cannot be jailbroken at all."
        ]
      },
      iPhoneNotice: "Note that all \"Plus\", \"Max\" and \"mini\" models of iPhones are functionally identical to the regular models.",
      info: {
        soc: "SoC: ${soc}",
        arch: "Architecture: ${arch}",
        latestFw: "Latest version: ${latestFw}",
        latestJailbreakFirmware: "Latest jailbreakable version: ${latestJailbreakFirmware}",
        released: "Released on ${released}",
        showMore: "Show more",
        noJailbreaks: "No jailbreaks available."
      },
      dateStyles: { // Don't translate this bit, just ask me (emiyl) to handle it
        yearOnly: { year: 'numeric'},
        yearAndMonth: { dateStyle: 'medium'},
        yearMonthAndDay: { dateStyle: 'medium'}
      }
    },
    getStarted: {
      pageTitle: "Get Started",
      description: "Find out what jailbreaks you can use on your iOS or tvOS Device",
      requiredReading: {
        title: "Required Reading",
        content: [
          "Different devices will require different steps to jailbreak your iOS or tvOS device. This page will help you find where to start.",
          "Please select what kind of device you have below."
        ]
      }
    },
    firmwareSelection: {
      pageTitle: "Firmware Selection (${device})",
      description: "Find out what jailbreaks you can use on your ${device}.",
      requiredReading: {
        title: "Required Reading",
        content: [
          "Different firmware versions will require different steps to jailbreak your ${osStr} device. This page will help you find where to start.",
          "Select the appropriate page for your version from the chart below. Note that the \"from\" and \"to\" fields are inclusive. This means that, for example, the \"from ${minFw0} to ${maxFw0}\" row includes version ${minFw1}, version ${maxFw1}, and all versions in-between.",
          "Your device version can be found in the Settings application in `General` -> `About`.",
        ],
      },
      findiOSVersion: {
        title: "Finding your ${osStr} version",
        verStr: {
          old: "Version",
          new: "Software Version",
          tvOld: "Apple TV Software",
          tvNew: "tvOS" //I think I set this up right? it changes depending on whether you're on TV Software or tvOS.
        },
        instructions: {
          ios: "1. Open the Settings application\n1. Navigate to `General\` -> `About` -> `${verStr}`",
          tv: "1. Open the Settings application\n1. Navigate to `General\` -> `About` -> `${verStr}`",
        },
        image: { // For translating, you can take an identical screenshot of these images in the language that you're translating to
          altText: "Finding your ${osStr} version on an ${deviceType}",
          iphone: "/assets/images/find-version.jpg",
          ipad: "/assets/images/find-version-ipad.jpg",
          iphoneOld: "/assets/images/find-version-old.jpg",
          ipadOld: "/assets/images/find-version-ipad-old.jpg",
          tvOld: "/assets/images/find-version-tv-old.jpg",
          tvNew: "/assets/images/find-version-tv-new.jpg" 
        },
      }
    },
    table: {
      title: "Version Table",
      tableHeader: [
        "From",
        "To",
        "Jailbreak",
      ],
      showBetaVersions: "Show Beta Versions",
      hideBetaVersions: "Hide Beta Versions",
      noJbTip: "For fields marked \"N/A\", there is no jailbreak for that version.",
      showMore: "Show more"
    },
  },
}
