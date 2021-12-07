module.exports = {
  name: "JailbreakMe 4.0",
  alias: ["JailbreakMe-4.0", "JailbreakMe_4.0", "JailbreakMe4.0", "JailbreakMe 4", "JailbreakMe-4", "JailbreakMe_4", "JailbreakMe4"],
  info: {
    website: {
      name: "jailbreak.me",
      url: "https://jailbreak.me/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/JailbreakMe_4.0",
      url: "https://www.theiphonewiki.com/wiki/JailbreakMe_4.0",
      external: true
    },
    type: "(Safari) Semi-untethered",
    firmwares: ["9.1","9.3.4"]
  },
  compatibility: [
    {
      firmwares: [
        "13B143", // 9.1
        "13C75", // 9.2
        "13D15", // 9.2.1
        "13E233", // 9.3
        "13E236", // 9.3, iPad 2 (Cellular) only
        "13E237", // 9.3
        "13E238", // 9.3.1
        "13F69", // 9.3.2
        "13G34", // 9.3.3
        "13G35", // 9.3.4
      ],
      devices: [
        "iPhone4,1", // iPhone 4S, A5
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPhone5,3", // iPhone 5c (GSM), A6
        "iPhone5,4", // iPhone 5c (CDMA), A6
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPad2,5", // iPad mini Wi-Fi, A5
        "iPad2,6", // iPad mini Wi-Fi + Cellular, A5
        "iPad2,7", // iPad mini Wi-Fi + Cellular (MM), A5
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
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