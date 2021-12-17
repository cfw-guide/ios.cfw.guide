module.exports = {
  name: "Pangu9",
  priority: 3,
  info: {
    website: {
      name: "en.9.pangu.io (archive.org)",
      url: "https://web.archive.org/web/20170702115349/http://en.9.pangu.io/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Pangu9",
      url: "https://www.theiphonewiki.com/wiki/Pangu9",
      external: true
    },
    type: "Untethered",
    firmwares: ["9.0","9.0.2"],
    latestVer: "1.3.2 (Windows)\n1.1.1 (macOS)\n1.0.0 (Apple TV 4)",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/pangu9.png",
  },
  compatibility: [
    {
      firmwares: [
        "13A340", // 9.0, iPad mini 4 only
        "13A342", // 9.0, iPhone 6s (non-Plus) only
        "13A343", // 9.0, iPhone 6s Plus only
        "13A344", // 9.0
        "13A404", // 9.0.1
        "13A405", // 9.0.1, iPhone 6s only
        "13A452", // 9.0.2

        "13T396", // 9.0, AppleTV
        "13T402", // 9.0.1, AppleTV
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
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
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
        "iPad5,1", // iPad mini 4 Wi-Fi, A8
        "iPad5,2", // iPad mini 4 Wi-Fi + Cellular, A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPod5,1", // iPod touch (5th generation), A5
        "iPod7,1", // iPod touch (6th generation), A8
        
        "AppleTV5,3", // Apple TV HD (4th generation), A8
      ]
    },
    {
      firmwares: [
        "13B143", // 9.1
        "13B144", // 9.1, iPad Pro (12.9-inch) only
      ],
      devices: [
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (CDMA), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
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
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        "iPod7,1", // iPod touch (6th generation), A8
      ]
    }
  ]
}