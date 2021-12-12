module.exports = {
  name: "PwnageTool",
  priority: 3,
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/PwnageTool",
      url: "https://www.theiphonewiki.com/wiki/PwnageTool",
      external: true
    },
    type: "Untethered",
    firmwares: ["4.0","5.1.1"],
    notes: "Also supports iPhoneOS 1.1.4 and iPhoneOS 2.0 to 2.2.1",
    latestVer: "5.1.1",
    color: "#d0cfd1",
    icon: "/assets/images/jb-icons/pwnagetool.png",
  },
  compatibility: [
    {
      firmwares: [
        "4A102", // 1.1.4
        "5A347", // 2.0
        "5B108", // 2.0.1
        "5C1", // 2.0.2
        "5F136", // 2.1
        "5G77", // 2.2
        "5H11", // 2.2.1
        "8A293", // 4.0
        "8B117", // 4.1
        "8C148", // 4.2.1
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
        "iPod1,1", // iPod touch
        "iPod2,1", // iPod touch (2nd generation)
      ]
    },
    {
      firmwares: [
        "8A293", // 4.0
        "8A306", // 4.0.1
        "8A400", // 4.0.2
        "8B117", // 4.1
        "8C148a", // 4.2.1, iPhone 3GS only
        "8F190", // 4.3
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "9A405", // 5.0.1
        "9B206", // 5.1.1
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
      ]
    },
    {
      firmwares: [
        "8C148", // 4.2.1
        "8E200", // 4.2.6, iPhone 4 (CDMA) only
        "8E401", // 4.2.8, iPhone 4 (CDMA) only
        "8F190", // 4.3
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "9A334", // 5.0
        "9A405", // 5.0.1
        "9B176", // 5.1
        "9B206", // 5.1.1
        "9B208", // 5.1.1, iPhone 4 only
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
      ]
    },
    {
      firmwares: [
        "8B117", // 4.1
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "9A405", // 5.0.1
      ],
      devices: [
        "iPod3,1", // iPod touch (3rd generation)
      ]
    },
    {
      firmwares: [
        "8B117", // 4.1
        "8B118", // 4.1, iPod touch 4 only
        "8C148", // 4.2.1
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "9A405", // 5.0.1
      ],
      devices: [
        "iPod4,1", // iPod touch (4rd generation)
      ]
    },
    {
      firmwares: [
        "7B500", // 3.2.2, iPad only
        "8B117", // 4.1
        "8C148", // 4.2.1
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "9A334", // 5.0
        "9A405", // 5.0.1
        "9B206", // 5.1.1
      ],
      devices: [
        "iPad1,1", // iPad
      ]
    }
  ]
}