module.exports = {
  name: "unthreadera1n",
  alias: "unthreaderain",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/Unthredera1n",
      url: "https://www.theiphonewiki.com/wiki/Unthredera1n",
      external: true
    },
    type: "Untethered",
    firmwares: ["4.3.4","5.1.1"],
    latestVer: "1.0",
    color: "#dc5f60",
    icon: "/assets/images/jb-icons/unthreadera1n.png",
  },
  compatibility: [
    {
      firmwares: [
        "8K2", // 4.3.4
        "8L1", // 4.3.5
        "9A334", // 5.0
        "9A405", // 5.0.1
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
      ]
    },
    {
      firmwares: [
        "8K2", // 4.3.4
        "8L1", // 4.3.5
        "9A334", // 5.0
        "9A405", // 5.0.1
        "9B176", // 5.1
        "9B206", // 5.1.1
        "9B208", // 5.1.1, iPhone 4 only
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPad1,1", // iPad
        "iPod3,1", // iPod touch (3rd generation)
        "iPod4,1", // iPod touch (4th generation)
      ]
    }
  ]
}