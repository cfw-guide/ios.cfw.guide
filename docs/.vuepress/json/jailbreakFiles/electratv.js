module.exports = {
  name: "ElectraTV",
  info: {
    website: {
      name: "coolstar.org/electra",
      url: "https://coolstar.org/electra/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Electra",
      url: "https://www.theiphonewiki.com/wiki/Electra",
      external: true
    },
    type: "Semi-untethered",
    latestVer: "1.3.2",
    color: "#deeded",
    icon: "/assets/images/jb-icons/electra.png",
    firmwares: ["11.0","11.4.1"]
  },
  compatibility: [
    {
      firmwares: [
        "15J381", // 11.0, AppleTV
        "15J582", // 11.1, AppleTV
        "15K106", // 11.2, AppleTV
        "15K152", // 11.2.1, AppleTV
        "15K552", // 11.2.5, AppleTV
        "15K600", // 11.2.6, AppleTV
        "15L211", // 11.3, AppleTV
        "15L577", // 11.4, AppleTV
        "15M73", // 11.4.1, AppleTV
      ],
      devices: [
        "AppleTV5,3", // Apple TV HD (4th generation), A8
        "AppleTV6,2", // Apple TV 4K (1st generation), A10X
      ]
    }
  ]
}