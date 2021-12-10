module.exports = {
  name: "Odyssey",
  priority: 0,
  info: {
    website: {
      name: "theodyssey.dev",
      url: "https://theodyssey.dev/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Odyssey",
      url: "https://www.theiphonewiki.com/wiki/Odyssey",
      external: true
    },
    guide: [
      {
        name: "Installing Odyssey",
        url: "/installing-odyssey/",
        pkgman: "sileo",
      }
    ],
    latestVer: "1.4.1",
    color: "#faf4f7",
    icon: "/assets/images/jb-icons/odyssey.png",
    jailbreaksmeapp: true,
    type: "Semi-untethered",
    firmwares: ["13.0","13.7"]
  },
  compatibility: [
    {
      firmwares: [
        "17A5492t", // 13.0 beta
        "17A5508m", // 13.0 beta 2
        "17A5522f", // 13.0 beta 3
        "17A5522g", // 13.0 beta 3
        "17A5534f", // 13.0 beta 4
        "17A5547d", // 13.0 beta 5
        "17A5556d", // 13.0 beta 6
        "17A5565b", // 13.0 beta 7
        "17A5572a", // 13.0 beta 8
        "17A577-GM", // 13.0 GM
        "17A577", // 13.0
        "17A5821e", // 13.1 beta
        "17A5831c", // 13.1 beta 2
        "17A5837a", // 13.1 beta 3
        "17A5844a", // 13.1 beta 4
        "17A5844b", // 13.1 beta 4
        "17A844", // 13.1
        "17A854", // 13.1.1
        "17A860", // 13.1.2
        "17A861", // 13.1.2, iPhone X, iPhone XS and iPhone XS Max only
        "17A878", // 13.1.3
        "17B5059g", // 13.2 beta
        "17B5068e", // 13.2 beta 2
        "17B5077a", // 13.2 beta 3
        "17B5084a", // 13.2 beta 4
        "17B84", // 13.2
        "17B102", // 13.2.2
        "17B111", // 13.2.3
        "17C5032d", // 13.3 beta
        "17C5038a", // 13.3 beta 2
        "17C5046a", // 13.3 beta 3
        "17C5053a", // 13.3 beta 4
        "17C54", // 13.3
        "17D5026c", // 13.3.1 beta
        "17D5044a", // 13.3.1 beta 2
        "17D5050a", // 13.3.1 beta 3
        "17D50", // 13.3.1
        "17E5223h", // 13.4 beta
        "17E5233g", // 13.4 beta 2
        "17E5241d", // 13.4 beta 3
        "17E5249a", // 13.4 beta 4
        "17E5255a", // 13.4 beta 5
        "17E255-GM", // 13.4 beta 6
        "17E255", // 13.4
        "17E8255", // 13.4
        "17E262", // 13.4.1
        "17E8258", // 13.4.1
        "17F5034c", // 13.4.5 beta
        "17F5044d", // 13.4.5 beta 2
        "17F5054h", // 13.5 beta 3
        "17F5065a", // 13.5 beta 4
        "17F75-GM", // 13.5 GM
        "17F75", // 13.5
        "17F80", // 13.5.1
        "17G5035d", // 13.5.5 beta
        "17G5045c", // 13.6 beta 2
        "17G5059c", // 13.6 beta 3
        "17G68-GM", // 13.6 GM
        "17G68", // 13.6
        "17G80", // 13.6.1
        "17H33", // 13.7 beta
        "17H35", // 13.7
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
        "iPhone11,8", // iPhone XR, A12
        "iPhone11,2", // iPhone XS, A12
        "iPhone11,4", // iPhone XS Max (China mainland), A12
        "iPhone11,6", // iPhone XS Max, A12
        "iPhone12,1", // iPhone 11, A13
        "iPhone12,3", // iPhone 11 Pro, A13
        "iPhone12,5", // iPhone 11 Pro Max, A13
        "iPhone12,8", // iPhone SE (2nd generation), A13
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
        "iPad8,1", // iPad Pro 11-inch Wi-Fi, A12X
        "iPad8,2", // iPad Pro 11-inch Wi-Fi (1TB), A12X
        "iPad8,3", // iPad Pro 11-inch Wi-Fi + Cellular, A12X
        "iPad8,4", // iPad Pro 11-inch Wi-Fi + Cellular (1TB), A12X
        "iPad8,5", // iPad Pro 12.9-inch (3rd generation) Wi-Fi, A12X
        "iPad8,6", // iPad Pro 12.9-inch (3rd generation) Wi-Fi (1TB), A12X
        "iPad8,7", // iPad Pro 12.9-inch (3rd generation) Wi-Fi + Cellular, A12X
        "iPad8,8", // iPad Pro 12.9-inch (3rd generation) Wi-Fi + Cellular (1TB), A12X // iPad Pro 12.9-inch (3rd generation) Wi-Fi + Cellular (1TB), A12X
        "iPad8,9", // iPad Pro 11-inch (2nd generation) Wi-Fi, A12Z
        "iPad8,10", // iPad Pro 11-inch (2nd generation) Wi-Fi + Cellular, A12Z
        "iPad8,11", // iPad Pro 12.9-inch (4th generation) Wi-Fi, A12Z
        "iPad8,12", // iPad Pro 12.9-inch (4th generation) Wi-Fi + Cellular, A12Z
        "iPad11,1", // iPad mini (5th generation) Wi-Fi, A12
        "iPad11,2", // iPad mini (5th generation) Wi-Fi + Cellular, A12
        "iPad11,3", // iPad Air (3rd generation) Wi-Fi, A12
        "iPad11,4", // iPad Air (3rd generation) Wi-Fi + Cellular, A12
        "iPod9,1", // iPod touch (7th generation), A8
      ]
    }
  ]
}