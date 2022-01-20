module.exports = {
  name: "cinject",
  info: {
    website: {
      name: "sites.google.com/a/iphone-dev.com/files/home",
      url: "https://sites.google.com/a/iphone-dev.com/files/home/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Cinject",
      url: "https://www.theiphonewiki.com/wiki/Cinject",
      external: true
    },
    type: "Untethered",
    firmwares: ["5.1.1","5.1.1"],
  },
  compatibility: [
    {
      firmwares: [
        "9B206", // 5.1.1
        "9B208", // 5.1.1, iPhone 4 (GSM) only
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPhone4,1", // iPhone 4S, A5
        "iPad1,1", // iPad
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPad3,1", // iPad (3rd generation) Wi-Fi, A5X
        "iPad3,2", // iPad (3rd generation) Wi-Fi + Cellular (VZ), A5X
        "iPad3,3", // iPad (3rd generation) Wi-Fi + Cellular, A5X
        "iPod3,1", // iPod touch (3rd generation)
        "iPod4,1", // iPod touch (4th generation)
      ]
    }
  ]
}