module.exports = {
  name: "Absinthe",
  priority: 0,
  info: {
    website: {
      name: "greenpois0n.com/downloads (archive.org)",
      url: "https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Absinthe",
      url: "https://www.theiphonewiki.com/wiki/Absinthe",
      external: true
    },
    guide: [
      {
        name: "Installing Absinthe",
        url: "/installing-absinthe/",
        pkgman: "cydia",
      }
    ],
    type: "Untethered",
    firmwares: ["5.0", "5.1.1"],
    soc: "A4, A5, A5X",
    latestVer: "2.0.4",
    color: "#78ef76",
    icon: "/assets/images/jb-icons/absinthe.png",
  },
  compatibility: [
    {
      firmwares: [
        "9A405", // 5.0.1
        "9B206", // 5.1.1
        "9B208", // 5.1.1, iPhone 4 (GSM) only
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
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
    },
    {
      firmwares: [
        "9A334", // 5.0
        "9A405", // 5.0.1
        "9A406", // 5.0.1, iPhone 4S only
        "9B206", // 5.1.1
      ],
      devices: [
        "iPhone4,1", // iPhone 4S, A5
      ]
    },
  ]
};
