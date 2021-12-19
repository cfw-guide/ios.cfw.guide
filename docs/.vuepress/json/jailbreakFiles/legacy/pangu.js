module.exports = {
  name: "Pangu",
  alias: "Pangu7",
  priority: 0,
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/Pangu",
      url: "https://www.theiphonewiki.com/wiki/Pangu",
      external: true
    },
    guide: [
      {
        name: "Installing Pangu7",
        url: "/installing-pangu7/",
        pkgman: "cydia",
      }
    ],
    type: "Untethered",
    firmwares: ["7.1","7.1.2"],
    latestVer: "1.2.1 (Windows)\n1.2.0 (macOS)",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/pangu.png",
  },
  compatibility: [
    {
      firmwares: [
        "11D167", // 7.1
        "11D169", // 7.1, iPhone 4 (GSM) and iPhone 4 (GSM, 2012) only
        "11D201", // 7.1.1
        "11D257", // 7.1.2
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