module.exports = {
  name: "Pangu8",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/Pangu8",
      url: "https://www.theiphonewiki.com/wiki/Pangu8",
      external: true
    },
    type: "Untethered",
    firmwares: ["8.0","8.1"],
    latestVer: "1.2.1 (Windows)\n1.0.0 (macOS)",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/pangu8.png",
  },
  compatibility: [
    {
      firmwares: [
        "12A365", // 8.0
        "12A366", // 8.0, iPhone 6 Plus only
        "12A402", // 8.0.1
        "12A405", // 8.0.2
        "12B410", // 8.1, iPad only
        "12B411", // 8.1, iPhone and iPod only
      ],
      devices: [
        "iPhone4,1", // iPhone 4S, A5
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPhone5,3", // iPhone 5c (GSM), A6
        "iPhone5,4", // iPhone 5c (CDMA), A6
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (CDMA), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
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
        "iPad4,1", // iPad Air Wi-Fi, A7
        "iPad4,2", // iPad Air Wi-Fi + Cellular, A7
        "iPad4,3", // iPad Air Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,4", // iPad mini 2 Wi-Fi, A7
        "iPad4,5", // iPad mini 2 Wi-Fi + Cellular, A7
        "iPad4,6", // iPad mini 2 Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,7", // iPad mini 3 Wi-Fi, A8
        "iPad4,8", // iPad mini 3 Wi-Fi + Cellular, A8
        "iPad4,9", // iPad mini 3 Wi-Fi + Cellular (TD-LTE), A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPod5,1", // iPod touch (5th generation), A5
        "iPod7,1", // iPod touch (6th generation), A8
      ]
    },
  ]
}