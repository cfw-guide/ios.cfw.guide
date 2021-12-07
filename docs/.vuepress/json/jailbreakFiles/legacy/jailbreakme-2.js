module.exports = {
  name: "JailbreakMe 2.0",
  alias: ["JailbreakMe-2.0", "JailbreakMe_2.0", "JailbreakMe2.0", "JailbreakMe 2", "JailbreakMe-2", "JailbreakMe_2", "JailbreakMe2", "JailbreakMe Star", "JailbreakMeStar", "JailbreakMe-Star", "JailbreakMe_Star"],
  priority: 0,
  info: {
    website: {
      name: "jailbreakme.com/star",
      url: "https://www.jailbreakme.com/star/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Star",
      url: "https://www.theiphonewiki.com/wiki/Star",
      external: true
    },
    guide: [
      {
        name: "Using JailbreakMe Star",
        url: "/using-jailbreakme-star/",
        sidebarName: "JailbreakMe Star",
        pkgman: "cydia",
      }
    ],
    type: "(Safari) Untethered",
    firmwares: ["3.1.2","4.0.1"],
    notes: "Not compatible with iPhoneOS 3.2.2"
  },
  compatibility: [
    {
      firmwares: [
        "7D11", // 3.1.2
        "7E18", // 3.1.3
        "7B367", // 3.2, iPad only
        "7B405", // 3.2.1, iPad only
        "8A293", // 4.0
        "8A306", // 4.0.1
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
        "iPhone2,1", // iPhone 3GS
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPad1,1", // iPad
        "iPod1,1", // iPod touch
        "iPod2,1", // iPod touch (2nd generation)
        "iPod3,1", // iPod touch (3rd generation)
      ]
    },
  ]
}