module.exports = {
  name: "unc0verTV",
  alias: "uncoverTV",
  info: {
    website: {
      name: "unc0ver.dev/tvos",
      url: "https://unc0ver.dev/tvos",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Unc0verTV",
      url: "https://www.theiphonewiki.com/wiki/Unc0verTV",
      external: true
    },
    latestVer: "5.3.0",
    color: "#111111",
    icon: "/assets/images/jb-icons/unc0ver.png",
    type: "Semi-untethered",
    firmwares: ["11.0","13.4.5"]
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
      ],
      devices: [
        "AppleTV5,3", // Apple TV HD (4th generation), A8
        "AppleTV6,2", // Apple TV 4K (1st generation), A10X
      ]
    }
  ]
}