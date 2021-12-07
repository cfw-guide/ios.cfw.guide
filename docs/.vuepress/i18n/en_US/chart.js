module.exports = {
  deviceChart: {
    info: {
      title: "Info",
      name: "Device:",
      identifier: "Identifier:",
      soc: "SoC:",
      arch: "Arch:",
      model: "Model:",
      released: "Released:",
      discontinued: "Discontinued:"
    },
    related: { title: "Related Devices" },
    grouped: { title: "Grouped Devices" },
    table: {
      title: "Version Table",
      tableHeader: [
        "Build",
        "Version",
        "Jailbreak",
      ],
      simpleTableHeader: [
        "From",
        "To",
        "Jailbreak",
      ],
      showBetaVersions: "Show Beta Versions",
      hideBetaVersions: "Hide Beta Versions",
      noJbTip: "For fields marked \"--\", there is no jailbreak for that version.",
      betaTip: "If you have any information regarding jailbreak compatibility with beta versions, please let us know on <a href=\"https://discord.gg/QBj8pBa\" target=\"_blank\">Discord</a>${extLinkSvg}"
    },
    devices: {
      iPhone: "iPhone",
      iPad: "iPad",
      mini: "iPad mini",
      Pro: "iPad Pro",
      Air: "iPad Air",
      iPod: "iPod",
      TV: "Apple TV",
      Watch: "Apple Watch",
    },
    getStarted: {
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
        },
        instructions: [
          "Open the Settings application",
          "Navigate to `General` -> `About` -> `${verStr}`",
        ],
        image: {
          altText: "Finding iOS version on an ${deviceType}",
          iphone: "/assets/images/find-version.jpg",
          ipad: "/assets/images/find-version-ipad.jpg",
          iphoneOld: "/assets/images/find-version-old.jpg",
          ipadOld: "/assets/images/find-version-ipad-old.jpg",
        },
      }
    }
  },
}