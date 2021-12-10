module.exports = {
  name: "Phœnix",
  alias: "Phoenix",
  priority: 0,
  info: {
    website: {
      name: "phoenixpwn.com",
      url: "https://phoenixpwn.com/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Phœnix",
      url: "https://www.theiphonewiki.com/wiki/Phœnix",
      external: true
    },
    guide: [
      {
        name: "Installing Phœnix",
        url: "/installing-phoenix/",
        pkgman: "cydia",
        updateLink: [
          {
            text: 'Updating to 9.3.5',
            link: '/updating-to-9-3-5/'
          },
          {
            text: 'Updating to 9.3.5 (IPSW)',
            link: '/updating-to-9-3-5-ipsw/'
          },
          {
            text: 'Updating to 9.3.6',
            link: '/updating-to-9-3-6/'
          },
          {
            text: 'Updating to 9.3.6 (IPSW)',
            link: '/updating-to-9-3-6-ipsw/'
          },
        ],
      }
    ],
    latestVer: "v6",
    color: "#000000",
    icon: "/assets/images/jb-icons/phoenix.png",
    type: "Semi-untethered",
    firmwares: ["9.3.5","9.3.6"]
  },
  compatibility: [
    {
      firmwares: [
        "13G36", // 9.3.5
        "13G37", // 9.3.6
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