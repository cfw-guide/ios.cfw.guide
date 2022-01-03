module.exports = {
  name: "evasi0n",
  alias: ["evasion", "evasi0n6", "evasion6"],
  priority: 0,
  info: {
    website: {
      name: "theiphonewiki.com/wiki/Evasi0n",
      url: "https://www.theiphonewiki.com/wiki/Evasi0n",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Evasi0n",
      url: "https://www.theiphonewiki.com/wiki/Evasi0n",
      external: true
    },
    guide: [
      {
        name: "Installing Evasi0n6",
        url: "/installing-evasi0n6/",
        pkgman: "cydia",
      }
    ],
    latestVer: "1.5.3",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/evasi0n.png",
    type: "Untethered",
    firmwares: ["6.0","6.1.2"]
  },
  compatibility: [
    {
      firmwares: [
        "10A403", // 6.0
        "10A405", // 6.0, iPhone 5 only
        "10A406", // 6.0, iPad mini and iPod touch 5 only
        "10A407", // 6.0, iPad 4 only
        "10A523", // 6.0.1
        "10A525", // 6.0.1, iPhone 5 only
        "10A8426", // 6.0.1, iPad mini and iPad 4 only
        "10A550", // 6.0.2, iPad mini (WiFi) only
        "10A551", // 6.0.2, iPhone 5 only
        "10A8500", // 6.0.2, iPad mini only
        "10B141", // 6.1
        "10B142", // 6.1, iPhone 4s only
        "10B143", // 6.1, iPhone 5 only
        "10B144", // 6.1, iPhone 4 (GSM) and iPod touch 4 only
        "10B145", // 6.1.1, iPhone 4S only
        "10B146", // 6.1.2
        "10B147", // 6.1.2, iPad mini only
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,2", // iPhone 4 (GSM, 2012), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPhone4,1", // iPhone 4S, A5
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPad2,5", // iPad mini Wi-Fi, A5
        "iPad2,6", // iPad mini Wi-Fi + Cellular, A5
        "iPad2,7", // iPad mini Wi-Fi + Cellular (MM), A
        "iPad3,1", // iPad (3rd generation) Wi-Fi, A5X
        "iPad3,2", // iPad (3rd generation) Wi-Fi + Cellular (VZ), A5X
        "iPad3,3", // iPad (3rd generation) Wi-Fi + Cellular, A5X
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
        "iPod5,1", // iPod touch (5th generation), A5
        "iPod4,1", // iPod touch (4th generation)
      ]
    },
  ]
}
