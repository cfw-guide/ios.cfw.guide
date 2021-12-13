module.exports = {
  name: "Fugu",
  info: {
    website: {
      name: "github.com/LinusHenze/Fugu",
      url: "https://github.com/LinusHenze/Fugu",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Fugu",
      url: "https://www.theiphonewiki.com/wiki/Fugu",
      external: true
    },
    type: "Semi-tethered",
    firmwares: ["13.0","13.5"],
    soc: "A10, A10X",
    latestVer: "0.4",
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
        "17E262", // 13.4.1
        "17E8258", // 13.4.1
        "17F5034c", // 13.4.5 beta
        "17F5044d", // 13.4.5 beta 2
        "17F5054h", // 13.5 beta 3
        "17F5065a", // 13.5 beta 4
        "17F75-GM", // 13.5 GM
        "17F75", // 13.5
      ],
      devices: [
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
        "iPad7,1", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi, A10X
        "iPad7,2", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi + Cellular, A10X
        "iPad7,3", // iPad Pro 2 (10.5-inch) Wi-Fi, A10X
        "iPad7,4", // iPad Pro 2 (10.5-inch) Wi-Fi + Cellular, A10X
        "iPad7,5", // iPad (6th generation) Wi-Fi, A10
        "iPad7,6", // iPad (6th generation) Wi-Fi + Cellular, A10
        "iPad7,11", // iPad (7th generation) Wi-Fi, A10
        "iPad7,12", // iPad (7th generation) Wi-Fi + Cellular, A10
        "iPod9,1", // iPod touch (7th generation), A10
      ]
    }
  ]
}
