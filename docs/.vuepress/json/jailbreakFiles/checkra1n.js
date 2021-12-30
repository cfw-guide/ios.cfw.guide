module.exports = {
  name: "checkra1n",
  alias: ["checkrain", "odysseyra1n", "odysseyrain"],
  priority: 3,
  info: {
    website: {
      name: "checkra.in",
      url: "https://checkra.in/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/checkra1n",
      url: "https://www.theiphonewiki.com/wiki/checkra1n",
      external: true
    },
    guide: [
      {
        name: "Installing Odysseyra1n",
        url: "/installing-odysseyra1n/",
        pkgman: 'sileo',
        sidebarChildren: [
          {
            text: 'macOS',
            link: '/installing-odysseyra1n/macos/',
          },
          {
            text: 'Linux',
            link: '/installing-odysseyra1n/linux/',
          },
        ],
      },
      {
        name: "Installing Odysseyra1n (A9X)",
        url: "/installing-odysseyra1n-a9x/",
        pkgman: 'sileo',
        firmwares: [
          "18E5140j", // 14.5 beta
          "18E5140k", // 14.5 beta
          "18E5154f", // 14.5 beta 2
          "18E5164h", // 14.5 beta 3
          "18E5178a", // 14.5 beta 4
          "18E5186a", // 14.5 beta 5
          "18E5194a", // 14.5 beta 6
          "18E5198a", // 14.5 beta 7
          "18E5199a", // 14.5 beta 8
          "18E199-RC", // 14.5 RC
          "18E199", // 14.5
          "18E212", // 14.5.1
          "18F5046e", // 14.6 beta
          "18F5046f", // 14.6 beta
          "18F5055b", // 14.6 beta 2
          "18F5065a", // 14.6 beta 3
          "18F71", // 14.6 RC
          "18F72-RC", // 14.6 RC 2
          "18F72", // 14.6
          "18G5023c", // 14.7 beta
          "18G5033e", // 14.7 beta 2
          "18G5042c", // 14.7 beta 3
          "18G5052d", // 14.7 beta 4
          "18G5063a", // 14.7 beta 5
          "18G68", // 14.7 RC
          "18G69", // 14.7
          "18G82", // 14.7.1
          "18H17", // 14.8
          "18H107", // 14.8.1
        ],
        devices: [
          "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
          "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
          "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
          "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        ],
        sidebarChildren: [
          {
            text: 'macOS',
            link: '/installing-odysseyra1n-a9x/macos/',
          },
          {
            text: 'Linux',
            link: '/installing-odysseyra1n-a9x/linux/',
          },
        ],
      },
    ],
    latestVer: "0.12.4",
    color: "#4d4d4d",
    icon: "/assets/images/jb-icons/checkra1n.png",
    notes: "Compatible with A7 - A11 devices. A11 devices on iOS 14 cannot use a passcode, Touch ID, Face ID, or Apple Pay in a jailbroken state.",
    type: "Semi-tethered",
    firmwares: ["12.0","14.8.1"]
  },
  compatibility: [
    {
      firmwares: [
        "16A366-GM", // 12.0 GM
        "16A5288q", // 12.0 beta
        "16A5308e", // 12.0 beta 2
        "16A5318d", // 12.0 beta 3
        "16A5327f", // 12.0 beta 4
        "16A5339e", // 12.0 beta 5
        "16A5345f", // 12.0 beta 6
        "16A5354b", // 12.0 beta 7
        "16A5357b", // 12.0 beta 8
        "16A5362a", // 12.0 beta 9
        "16A5364a", // 12.0 beta 10
        "16A5365b", // 12.0 beta 11
        "16A5366a", // 12.0 beta 12
        "16A366", // 12.0
        "16A404", // 12.0.1
        "16B5059d", // 12.1 beta
        "16B5068i", // 12.1 beta 2
        "16B5077c", // 12.1 beta 3
        "16B5084a", // 12.1 beta 4
        "16B5089b", // 12.1 beta 5
        "16B92", // 12.1
        "16C5036c", // 12.1.1 beta
        "16C5043b", // 12.1.1 beta 2
        "16C5050a", // 12.1.1 beta 3
        "16C50", // 12.1.1
        "16D5024a", // 12.1.2 beta
        "16C101", // 12.1.2, iPhones only
        "16C104", // 12.1.2, iPhones only
        "16D5032a", // 12.1.3 beta 2
        "16D5037a", // 12.1.3 beta 3
        "16D5039a", // 12.1.3 beta 4
        "16D39", // 12.1.3
        "16D57", // 12.1.4
        "16E5181f", // 12.2 beta
        "16E5191d", // 12.2 beta 2
        "16E5201e", // 12.2 beta 3
        "16E5212f", // 12.2 beta 4
        "16E5223a", // 12.2 beta 5
        "16E5227a", // 12.2 beta 6
        "16E227", // 12.2
        "16F5117h", // 12.3 beta
        "16F5129d", // 12.3 beta 2
        "16F5139e", // 12.3 beta 3
        "16F5148a", // 12.3 beta 4
        "16F5155a", // 12.3 beta 5
        "16F5156a", // 12.3 beta 6
        "16F156", // 12.3
        "16F8155", // 12.3, iPod touch (7th generation) only
        "16F203", // 12.3.1
        "16F8202", // 12.3.1, iPod touch (7th generation) only
        "16F250", // 12.3.2
        "16G5027g", // 12.4 beta
        "16G5027i", // 12.4 beta 2
        "16G5038d", // 12.4 beta 3
        "16G5046d", // 12.4 beta 4
        "16G5056d", // 12.4 beta 5
        "16G5069a", // 12.4 beta 6
        "16G5077a", // 12.4 beta 7
        "16G77", // 12.4
        "16G102", // 12.4.1
        "16G114", // 12.4.2
        "16G130", // 12.4.3
        "16G140", // 12.4.4
        "16G161", // 12.4.5
        "16G183", // 12.4.6
        "16G192", // 12.4.7
        "16G201", // 12.4.8
        "16H5", // 12.4.9
        "16H20", // 12.5
        "16H22", // 12.5.1
        "16H30", // 12.5.2
        "16H41", // 12.5.3
        "16H50", // 12.5.4
        "16H62", // 12.5.5
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
        "17E262", // 13.4.1
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
        "18C5044f", // 14.3 beta
        "18C5054c", // 14.3 beta 2
        "18C5061a", // 14.3 beta 3
        "18C65", // 14.3 RC
        "18C66-RC", // 14.3 RC 2
        "18C66", // 14.3
        "18D5030e", // 14.4 beta
        "18D5043d", // 14.4 beta 2
        "18D52-RC", // 14.4 RC
        "18D52", // 14.4
        "18D61", // 14.4.1
        "18D70", // 14.4.2
        "18E5140j", // 14.5 beta
        "18E5140k", // 14.5 beta
        "18E5154f", // 14.5 beta 2
        "18E5164h", // 14.5 beta 3
        "18E5178a", // 14.5 beta 4
        "18E5186a", // 14.5 beta 5
        "18E5194a", // 14.5 beta 6
        "18E5198a", // 14.5 beta 7
        "18E5199a", // 14.5 beta 8
        "18E199-RC", // 14.5 RC
        "18E199", // 14.5
        "18E212", // 14.5.1
        "18F5046e", // 14.6 beta
        "18F5046f", // 14.6 beta
        "18F5055b", // 14.6 beta 2
        "18F5065a", // 14.6 beta 3
        "18F71", // 14.6 RC
        "18F72-RC", // 14.6 RC 2
        "18F72", // 14.6
        "18G5023c", // 14.7 beta
        "18G5033e", // 14.7 beta 2
        "18G5042c", // 14.7 beta 3
        "18G5052d", // 14.7 beta 4
        "18G5063a", // 14.7 beta 5
        "18G68", // 14.7 RC
        "18G69", // 14.7
        "18G82", // 14.7.1
        "18H17", // 14.8
        "18H107", // 14.8.1

        "16J364", // 12.0, AppleTV
        "16J380", // 12.0.1, AppleTV
        "16J602", // 12.1, AppleTV
        "16K45", // 12.1.1, AppleTV
        "16K534", // 12.1.2, AppleTV
        "16L226", // 12.2, AppleTV
        "16L250", // 12.2.1, AppleTV
        "16M153", // 12.3, AppleTV
        "16M568", // 12.4, AppleTV
        "16M600", // 12.4.1, AppleTV
        "17J586", // 13.0, AppleTV
        "17K82", // 13.2, AppleTV
        "17K449", // 13.3, AppleTV
        "17K795", // 13.3.1, AppleTV
        "17L256", // 13.4, AppleTV
        "17L562", // 13.4.5, AppleTV
        "17L570", // 13.4.6, AppleTV
        "17M61", // 13.4.8, AppleTV
        "18J386", // 14.0, AppleTV
        "18J400", // 14.0.1, AppleTV
        "18J411", // 14.0.2, AppleTV
        "18K57", // 14.2, AppleTV
        "18K561", // 14.3, AppleTV
        "18K802", // 14.4, AppleTV
        "18L204", // 14.5, AppleTV
        "18L569", // 14.6, AppleTV
        "18M60", // 14.7, AppleTV
      ],
      devices: [
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (Global), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
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
        "iPod7,1", // iPod touch (6th generation), A8
        "iPod9,1", // iPod touch (7th generation), A10

        "AppleTV5,3", // Apple TV HD (4th generation), A8
        "AppleTV6,2", // Apple TV 4K (1st generation), A10X
      ]
    }
  ]
}