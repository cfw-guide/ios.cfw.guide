module.exports = {
  name: "Pangu933",
  priority: 1,
  info: {
    website: {
      name: "en.pangu.io/help.html (archive.org)",
      url: "https://web.archive.org/web/20211114002150/http://en.pangu.io/help.html",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Pangu9",
      url: "https://www.theiphonewiki.com/wiki/Pangu9#Pangu9_for_iOS_9.2_-_9.3.3",
      external: true
    },
    guide: [
      {
        name: "Installing Pangu933",
        url: "/installing-pangu933/",
        pkgman: "cydia",
      }
    ],
    type: "Semi-untethered",
    firmwares: ["9.2","9.3.3"],
    latestVer: "1.3.2 (Windows)\n1.1.1 (macOS)\n1.0.0 (Apple TV 4)",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/pangu9.png",
  },
  compatibility: [
    {
      firmwares: [
        "13C75", // 9.2
        "13D15", // 9.2.1
        "13D20", // 9.2.1, iPhone 6, 6s, iPad Air 2, Pro (12-inch) only
        "13E233", // 9.3
        "13E234", // 9.3, iPhone 6s, iPad Pro (9.7-inch) only
        "13E237", // 9.3
        "13E238", // 9.3.1
        "13F69", // 9.3.2
        "13F72", // 9.3.2, iPad Pro (9.7-inch) only
        "13G34", // 9.3.3
      ],
      devices: [
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (CDMA), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
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
        "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
        "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        "iPod7,1", // iPod touch (6th generation), A8
      ]
    },
  ]
}