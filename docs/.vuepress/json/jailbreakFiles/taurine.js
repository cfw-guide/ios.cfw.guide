module.exports = {
  name: "Taurine",
  priority: 1,
  info: {
    website: {
      name: "taurine.app",
      url: "https://taurine.app/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Taurine",
      url: "https://www.theiphonewiki.com/wiki/Taurine",
      external: true
    },
    guide: [
      {
        name: "Installing Taurine",
        url: "/installing-taurine/",
        pkgman: "sileo",
      }
    ],
    latestVer: "1.1.1",
    color: "#6742cd",
    icon: "/assets/images/jb-icons/taurine.png",
    jailbreaksmeapp: true,
    type: "Semi-untethered",
    firmwares: ["14.0","14.3"]
  },
  compatibility: [
    {
      firmwares: [
        "18A5301v", // 14.0 beta
        "18A5319i", // 14.0 beta 2
        "18A5332f", // 14.0 beta 3
        "18A5342e", // 14.0 beta 4
        "18A5351d", // 14.0 beta 5
        "18A5357e", // 14.0 beta 6
        "18A5369b", // 14.0 beta 7
        "18A5373a", // 14.0 beta 8
        "18A373-GM", // 14.0 GM
        "18A373", // 14.0
        "18A393", // 14.0.1
        "18A8395-GM", // 14.1 GM
        "18A8395", // 14.1
        "18B5052h", // 14.2 beta
        "18B5052i", // 14.2 beta
        "18B5061e", // 14.2 beta 2
        "18B5072f", // 14.2 beta 3
        "18B5083a", // 14.2 beta 4
        "18B91", // 14.2 RC
        "18B92", // 14.2
        "18B111", // 14.2, iPhone 12 and 12 Pro only
        "18B121", // 14.2.1, iPhone 12 and 12 Pro only
        "18C5044f", // 14.3 beta
        "18C5054c", // 14.3 beta 2
        "18C5061a", // 14.3 beta 3
        "18C65", // 14.3 RC
        "18C66-RC", // 14.3 RC 2
        "18C66", // 14.3
      ],
      devices: [
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
        "iPhone10,1", // iPhone 8 (CDMA), A11
        "iPhone10,2", // iPhone 8 Plus (CDMA), A11
        "iPhone10,3", // iPhone X (CDMA), A11
        "iPhone10,4", // iPhone 8 (GSM), A11
        "iPhone10,5", // iPhone 8 Plus (GSM), A11
        "iPhone10,6", // iPhone X (GSM), A11
        "iPhone11,2", // iPhone XS, A12
        "iPhone11,4", // iPhone XS Max (China mainland), A12
        "iPhone11,6", // iPhone XS Max, A12
        "iPhone11,8", // iPhone XR, A12
        "iPhone12,1", // iPhone 11, A13
        "iPhone12,3", // iPhone 11 Pro, A13
        "iPhone12,5", // iPhone 11 Pro Max, A13
        "iPhone12,8", // iPhone SE (2nd generation), A13
        "iPhone13,1", // iPhone 12 mini, A14
        "iPhone13,2", // iPhone 12, A14
        "iPhone13,3", // iPhone 12 Pro, A14
        "iPhone13,4", // iPhone 12 Pro Max, A14
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
        "iPad7,1", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi, A10X
        "iPad7,2", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi + Cellular, A10X
        "iPad7,3", // iPad Pro 2 (10.5-inch) Wi-Fi, A10X
        "iPad7,4", // iPad Pro 2 (10.5-inch) Wi-Fi + Cellular, A10X
        "iPad7,5", // iPad (6th generation) Wi-Fi, A10
        "iPad7,6", // iPad (6th generation) Wi-Fi + Cellular, A10
        "iPad7,11", // iPad (7th generation) Wi-Fi, A10
        "iPad7,12", // iPad (7th generation) Wi-Fi + Cellular, A10
        "iPad11,1", // iPad mini (5th generation) Wi-Fi, A12
        "iPad11,2", // iPad mini (5th generation) Wi-Fi + Cellular, A12
        "iPad11,3", // iPad Air (3rd generation) Wi-Fi, A12
        "iPad11,4", // iPad Air (3rd generation) Wi-Fi + Cellular, A12
        "iPad11,6", // iPad (8th generation) Wi-Fi, A12
        "iPad11,7", // iPad (8th generation) Wi-Fi + Cellular, A12
        "iPad13,1", // iPad Air (4th generation) Wi-Fi, A14
        "iPad13,2", // iPad Air (4th generation) Wi-Fi + Cellular, A14
        "iPod9,1", // iPod touch (7th generation), A8
      ]
    }
  ]
}