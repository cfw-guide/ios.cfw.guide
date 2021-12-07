module.exports = {
  name: "JBMe",
  info: {
    website: {
      name: "jbme.qwertyoruiop.com",
      url: "https://jbme.qwertyoruiop.com/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Jbme",
      url: "https://www.theiphonewiki.com/wiki/Jbme",
      external: true
    },
    type: "(Safari) Semi-untethered",
    firmwares: ["9.3","9.3.3"]
  },
  compatibility: [
    {
      firmwares: [
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