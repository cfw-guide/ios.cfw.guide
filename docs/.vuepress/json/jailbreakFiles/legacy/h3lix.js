module.exports = {
  name: "h3lix",
  alias: "h3lix",
  priority: 1,
  info: {
    website: {
      name: "h3lix.tihmstar.net",
      url: "https://h3lix.tihmstar.net/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/h3lix",
      url: "https://www.theiphonewiki.com/wiki/h3lix",
      external: true
    },
    guide: [
      {
        name: "Installing h3lix",
        url: "/installing-h3lix/",
        pkgman: "cydia",
      }
    ],
    latestVer: "RC6",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/evasi0n.png",
    type: "Semi-untethered",
    firmwares: ["10.0","10.3.4"]
  },
  compatibility: [
    {
      firmwares: [
        "14A403", // 10.0.1
        "14A456", // 10.0.2
        "14B72", // 10.1
        "14B100", // 10.1.1
        "14B150", // 10.1.1
        "14C92", // 10.2
        "14D27", // 10.2.1
        "14E277", // 10.3
        "14E304", // 10.3.1
        "14F89", // 10.3.2
        "14G60", // 10.3.3
        "14G61", // 10.3.4
      ],
      devices: [
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPhone5,3", // iPhone 5c (GSM), A6
        "iPhone5,4", // iPhone 5c (CDMA), A6
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
      ]
    }
  ]
}