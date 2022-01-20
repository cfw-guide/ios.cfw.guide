module.exports = {
  name: "etasonJB",
  priority: 1,
  info: {
    website: {
      name: "etasonjb.tihmstar.net",
      url: "https://etasonjb.tihmstar.net/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/EtasonJB",
      url: "https://www.theiphonewiki.com/wiki/EtasonJB",
      external: true
    },
    guide: [
      {
        name: "Installing EtasonJB",
        url: "/installing-etasonjb/",
        pkgman: "cydia",
      }
    ],
    type: "Untethered",
    firmwares: ["8.4.1","8.4.1"],
    latestVer: "RC5",
    color: "#2e8bec",
    icon: "/assets/images/jb-icons/etasonjb.png",
  },
  compatibility: [
    {
      firmwares: [
        "12H321", // 8.4.1
      ],
      devices: [
        "iPhone4,1", // iPhone 4S, A5
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPhone5,3", // iPhone 5c (GSM), A6
        "iPhone5,4", // iPhone 5c (CDMA), 
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPad2,5", // iPad mini Wi-Fi, A5
        "iPad2,5", // iPad mini Wi-Fi + Cellular, A5
        "iPad2,5", // iPad mini Wi-Fi + Cellular (MM), A5
        "iPad3,1", // iPad (3rd generation) Wi-Fi, A5X
        "iPad3,2", // iPad (3rd generation) Wi-Fi + Cellular (VZ), A5X
        "iPad3,3", // iPad (3rd generation) Wi-Fi + Cellular, A5X
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
        "iPod5,1", // iPod touch (5th generation), A5
      ]
    },
  ]
}
