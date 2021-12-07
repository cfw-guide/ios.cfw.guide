module.exports = {
  name: "mach_portal",
  alias: ["machportal", "mach-portal", "mach%20portal"],
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
    firmwares: ["10.1","10.1.1"],
    soc: "A9, A9X, A10, A10X"
  },
  compatibility: [
    {
      firmwares: [
        "14B72", // 10.1
        "14B72c", // 10.1, iPhone 7 and iPhone 7 Plus only
        "14B100", // 10.1.1
        "14B150", // 10.1.1
      ],
      devices: [
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
        "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
        "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
      ]
    }
  ]
}