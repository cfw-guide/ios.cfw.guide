module.exports = {
  name: "kok3shi",
  alias: ["kokeshi", "kok3shiJB", "kokeshiJB"],
  priority: 0,
  info: {
    website: {
      name: "dora2ios.web.app/kokeshiJB.html",
      url: "https://dora2ios.web.app/kokeshiJB.html",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/kok3shi",
      url: "https://www.theiphonewiki.com/wiki/kok3shi",
      external: true
    },
    guide: [
      {
        name: "Installing kok3shi",
        url: "/installing-kok3shi/",
        pkgman: "cydia",
      }
    ],
    type: "Semi-untethered",
    firmwares: ["9.3","9.3.5"],
    notes: "Doesn't support A9 or A9X devices",
    latestVer: "1.0 beta 2",
    color: "#c279a0",
    icon: "/assets/images/jb-icons/kok3shi.png",
  },
  compatibility: [
    {
      firmwares: [
        "13E233", // 9.3
        "13E237", // 9.3
        "13E238", // 9.3.1
        "13F69", // 9.3.2
        "13G34", // 9.3.3
        "13G35", // 9.3.4
        "13G36", // 9.3.5
      ],
      devices: [
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (CDMA), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
        "iPad4,1", // iPad Air Wi-Fi, A7
        "iPad4,2", // iPad Air Wi-Fi + Cellular, A7
        "iPad4,3", // iPad Air Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,4", // iPad mini 2 Wi-Fi, A7
        "iPad4,5", // iPad mini 2 Wi-Fi + Cellular, A7
        "iPad4,6", // iPad mini 2 Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,7", // iPad mini 3 Wi-Fi, A8
        "iPad4,8", // iPad mini 3 Wi-Fi + Cellular, A8
        "iPad4,9", // iPad mini 3 Wi-Fi + Cellular (TD-LTE), A8
        "iPad5,1", // iPad mini 4 Wi-Fi, A8
        "iPad5,2", // iPad mini 4 Wi-Fi + Cellular, A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPod7,1", // iPod touch (6th generation), A8
      ]
    },
  ]
}