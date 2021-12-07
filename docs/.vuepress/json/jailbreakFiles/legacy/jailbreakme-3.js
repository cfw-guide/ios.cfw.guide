module.exports = {
  name: "JailbreakMe 3.0",
  alias: ["JailbreakMe-3.0", "JailbreakMe_3.0", "JailbreakMe3.0", "JailbreakMe 3", "JailbreakMe-3", "JailbreakMe_3", "JailbreakMe3", "JailbreakMe Saffron", "JailbreakMeSaffron", "JailbreakMe-Saffron", "JailbreakMe_Saffron"],
  priority: 0,
  info: {
    website: {
      name: "jailbreakme.com",
      url: "https://www.jailbreakme.com/",
      external: true,
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Saffron",
      url: "https://www.theiphonewiki.com/wiki/Saffron",
      external: true,
    },
    guide: [
      {
        name: "Using JailbreakMe Saffron",
        url: "/using-jailbreakme-saffron/",
        sidebarName: "JailbreakMe Saffron",
        pkgman: "cydia",
      }
    ],
    type: "(Safari) Untethered",
    firmwares: ["4.2.6","4.3.3"]
  },
  compatibility: [
    {
      firmwares: [
        "8E200", // 4.2.6, iPhone 4 (CDMA) only
        "8E303", // 4.2.7, iPhone 4 (CDMA) only
        "8E401", // 4.2.8, iPhone 4 (CDMA) only
        "8F190", // 4.3
        "8G4", // 4.3.1
        "8H7", // 4.3.2
        "8J2", // 4.3.3
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPod3,1", // iPod touch (3rd generation)
        "iPod4,1", // iPod touch (4th generation)
        "iPad1,1", // iPad
      ]
    },
    {
      firmwares: [
        "8J2", // 4.3.3
      ],
      devices: [
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
      ]
    },
  ]
}