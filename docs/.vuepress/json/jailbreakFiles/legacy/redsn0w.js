module.exports = {
  name: "redsn0w",
  alias: "redsnow",
  priority: 2,
  info: {
    website: {
      name: "sites.google.com/a/iphone-dev.com/files/home",
      url: "https://sites.google.com/a/iphone-dev.com/files/home/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Redsn0w",
      url: "https://www.theiphonewiki.com/wiki/Redsn0w",
      external: true
    },
    latestVer: "0.9.15b",
    color: "#2d95f7",
    icon: "/assets/images/jb-icons/redsn0w.png",
    type: "Untethered",
    firmwares: ["2.1.1","6.1.6"]
  },
  compatibility: [
    {
      firmwares: [
        "5H11a", // 2.2.1, iPod touch (2nd gen) only
        "7A341", // 3.0
        "7A400", // 3.0.1, iPhone only
        "7C144", // 3.1, iPhone only
        "7C145", // 3.1.1, iPod only
        "7D11", // 3.1.2
        "7E18", // 3.1.3
        "8A293", // 4.0
        "8A306", // 4.0.1
        "8A400", // 4.0.2
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
        "7A341", // 3.0
        "7A400", // 3.0.1, iPhone only
        "7C144", // 3.1, iPhone only
        "7D11", // 3.1.2
        "7E18", // 3.1.3
        "8F190", // 4.3
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "8K2", // 4.3.4
        "8L1", // 4.3.5
        "9A334", // 5.0
        "9A405", // 5.0.1
        "9B176", // 5.1
        "9B206", // 5.1.1
        "9B208", // 5.1.1, iPhone 4 only
        "10A403", // 6.0
        "10A523", // 6.0.1
        "10B141", // 6.1
        "10B144", // 6.1, iPhone 4 (GSM) and iPod touch 4 only
        "10B146", // 6.1.2
        "10B329", // 6.1.3
        "10B350", // 6.1.4
        "10B400", // 6.1.5
        "10B500", // 6.1.6
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
      ]
    },
    {
      firmwares: [
        "7A341", // 3.0
        "7A400", // 3.0.1, iPhone only
        "7C144", // 3.1, iPhone only
        "7C145", // 3.1.1, iPod only
        "7C146", // 3.1.1, iPod touch 3 only
        "7D11", // 3.1.2
        "7E18", // 3.1.3
        "8B117", // 4.1
        "8B118", // 4.1, iPod touch 4 only
        "8C148", // 4.2.1
        "8E200", // 4.2.6, iPhone 4 (CDMA) only
        "8E303", // 4.2.7, iPhone 4 (CDMA) only
        "8E401", // 4.2.8, iPhone 4 (CDMA) only
        "8E501", // 4.2.9, iPhone 4 (CDMA) only
        "8E600", // 4.2.10, iPhone 4 (CDMA) only
        "8F190", // 4.3
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
        "8K2", // 4.3.4
        "8L1", // 4.3.5
        "9A334", // 5.0
        "9A405", // 5.0.1
        "9B176", // 5.1
        "9B206", // 5.1.1
        "9B208", // 5.1.1, iPhone 4 only
        "10A403", // 6.0
        "10A523", // 6.0.1
        "10B141", // 6.1
        "10B144", // 6.1, iPhone 4 (GSM) and iPod touch 4 only
        "10B146", // 6.1.2
        "10B329", // 6.1.3
        "10B350", // 6.1.4
        "10B400", // 6.1.5
        "10B500", // 6.1.6
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,2", // iPhone 4 (GSM, 2012), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPad1,1", // iPad
        "iPod3,1", // iPod touch (3rd generation)
        "iPod4,1", // iPod touch (4th generation)
      ]
    },
    {
      firmwares: [
        "9A405", // 5.0.1
        "9A406", // 5.0.1, iPhone 4S only
        "9B206", // 5.1.1
      ],
      devices: [
        "iPhone4,1", // iPhone 4S, A5
      ]
    }
  ]
}