module.exports = {
  name: "evasi0n7",
  alias: "evasion7",
  priority: 0,
  info: {
    website: {
      name: "theiphonewiki.com/wiki/Evasi0n7",
      url: "https://www.theiphonewiki.com/wiki/Evasi0n7",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Evasi0n7",
      url: "https://www.theiphonewiki.com/wiki/Evasi0n7",
      external: true
    },
    guide: [
      {
        name: "Installing Evasi0n7",
        url: "/installing-evasi0n7/",
        pkgman: "cydia",
      }
    ],
    latestVer: "1.0.8",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/evasi0n.png",
    type: "Untethered",
    firmwares: ["7.0","7.0.6"]
  },
  compatibility: [
    {
      firmwares: [
        "11A465", // 7.0
        "11A466", // 7.0, iPhone 5c and iPhone 5s only
        "11A470a", // 7.0.1
        "11A501", // 7.0.2
        "11B511", // 7.0.3
        "11B554a", // 7.0.4
        "11B601", // 7.0.5
        "11B651", // 7.0.6
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,2", // iPhone 4 (GSM, 2012), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPhone4,1", // iPhone 4S, A5
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPhone5,3", // iPhone 5c (GSM), A6
        "iPhone5,4", // iPhone 5c (CDMA), A6
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (GSM), A7
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPad2,5", // iPad mini Wi-Fi, A5
        "iPad2,6", // iPad mini Wi-Fi + Cellular, A5
        "iPad2,7", // iPad mini Wi-Fi + Cellular (MM), A5
        "iPad3,1", // iPad (3rd generation) Wi-Fi, A5X
        "iPad3,2", // iPad (3rd generation) Wi-Fi + Cellular (VZ), A5X
        "iPad3,3", // iPad (3rd generation) Wi-Fi + Cellular, A5X
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
        "iPad4,1", // iPad Air Wi-Fi, A7
        "iPad4,2", // iPad Air Wi-Fi + Cellular, A7
        "iPad4,3", // iPad Air Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,4", // iPad mini 2 Wi-Fi, A7
        "iPad4,5", // iPad mini 2 Wi-Fi + Cellular, A7
        "iPad4,6", // iPad mini 2 Wi-Fi + Cellular (TD-LTE), A7
        "iPod5,1", // iPod touch (5th generation), A5
      ]
    },
  ]
}