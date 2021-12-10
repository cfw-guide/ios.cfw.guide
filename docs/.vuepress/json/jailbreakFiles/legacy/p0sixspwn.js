module.exports = {
  name: "p0sixspwn",
  alias: "posixspwn",
  priority: 0,
  info: {
    website: {
      name: "ih8sn0w.com/p0sixspwn",
      url: "https://ih8sn0w.com/p0sixspwn.html",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/p0sixspwn",
      url: "https://www.theiphonewiki.com/wiki/p0sixspwn",
      external: true
    },
    guide: [
      {
        name: "Installing P0sixspwn",
        url: "/installing-p0sixspwn/",
        pkgman: "cydia",
        updateLink: [
          {
            text: 'Updating to 6.1.3',
            link: '/updating-to-6-1-3/'
          },
        ],
      }
    ],
    latestVer: "1.0.8",
    color: "#c4c5cc",
    icon: "/assets/images/jb-icons/p0sixspwn.png",
    type: "Untethered",
    firmwares: ["6.1.3","6.1.6"]
  },
  compatibility: [
    {
      firmwares: [
        "10B329", // 6.1.3
        "10B350", // 6.1.4
        "10B400", // 6.1.5
        "10B500", // 6.1.6
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
        "iPad2,7", // iPad mini Wi-Fi + Cellular (MM), A5
        "iPad3,1", // iPad (3rd generation) Wi-Fi, A5X
        "iPad3,2", // iPad (3rd generation) Wi-Fi + Cellular (VZ), A5X
        "iPad3,3", // iPad (3rd generation) Wi-Fi + Cellular, A5X
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
        "iPod4,1", // iPod touch (4th generation)
        "iPod5,1", // iPod touch (5th generation), A5
      ]
    },
  ]
}