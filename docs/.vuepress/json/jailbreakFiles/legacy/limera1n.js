module.exports = {
  name: "limera1n",
  alias: "limerain",
  priority: 3,
  info: {
    website: {
      name: "limera1n.com",
      url: "http://limera1n.com/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Limera1n",
      url: "https://www.theiphonewiki.com/wiki/Limera1n",
      external: true
    },
    type: "Untethered",
    firmwares: ["3.2.2","4.2.1"],
    latestVer: "RC1b",
    color: "#bcdfa4",
    icon: "/assets/images/jb-icons/limera1n.png",
  },
  compatibility: [
    {
      firmwares: [
        "7B500", // 3.2.2, iPad only
        "8A293", // 4.0
        "8A306", // 4.0.1
        "8A400", // 4.0.2
        "8B117", // 4.1
        "8B118", // 4.1, iPod touch 4 only
        "8C148a", // 4.2.1, iPhone 3GS only
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPad1,1", // iPad
        "iPod2,1", // iPod touch (2nd generation)
        "iPod3,1", // iPod touch (3rd generation)
        "iPod4,1", // iPod touch (4th generation)
      ]
    },
    {
      firmwares: [
        "8B117", // 4.1
      ],
      devices: [
        "iPod2,1", // iPod touch (2nd generation)
      ]
    },
  ]
}