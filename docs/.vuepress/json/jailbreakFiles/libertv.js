module.exports = {
  name: "LiberTV",
  info: {
    website: {
      name: "newosxbook.com/libertv",
      url: "http://newosxbook.com/libertv/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/LiberTV",
      url: "https://www.theiphonewiki.com/wiki/LiberTV",
      external: true
    },
    latestVer: "1.1",
    type: "Semi-untethered",
    firmwares: ["11.0","11.1"],
  },
  compatibility: [
    {
      firmwares: [
        "14T330", // 10.0, AppleTV
        "14U100", // 10.0.1, AppleTV
        "14U71", // 10.0.1, AppleTV
        "14U593", // 10.1, AppleTV
        "15J381", // 11.0, AppleTV
        "15J582", // 11.1, AppleTV
      ],
      devices: [
        "AppleTV5,3", // Apple TV HD (4th generation), A8
        "AppleTV6,2", // Apple TV 4K (1st generation), A10X
      ]
    }
  ]
}