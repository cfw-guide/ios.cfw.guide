module.exports = {
  name: "Yalu",
  info: {
    website: {
      name: "yalu.qwertyoruiop.com",
      url: "https://yalu.qwertyoruiop.com/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Yalu",
      url: "https://www.theiphonewiki.com/wiki/Yalu",
      external: true
    },
    type: "Semi-untethered",
    firmwares: ["10.0.1","10.2"],
    latestVer: "yalu102",
    color: "#4b4b4b",
    icon: "/assets/images/jb-icons/yalu.png",
  },
  compatibility: [
    {
      firmwares: [
        "14A403", // 10.0.1
        "14A456", // 10.0.2
        "14B72", // 10.1
        "14B100", // 10.1.1
        "14B150", // 10.1.1
        "14C92", // 10.2
      ],
      devices: [
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (Global), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
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
        "iPad6,11", // iPad (5th generation) Wi-Fi, A9
        "iPad6,12", // iPad (5th generation) Wi-Fi + Cellular, A9
        "iPod7,1", // iPod touch (6th generation), A8
      ]
    },
    {
      firmwares: [
        "14B72c", // 10.1, iPhone 7 and iPhone 7 Plus only
        "14B100", // 10.1.1
        "14B150", // 10.1.1
        "14C92", // 10.2
      ],
      devices: [
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
      ]
    }
  ]
}