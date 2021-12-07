module.exports = {
  name: "orangesn0w",
  alias: "orangesnow",
  info: {
    website: {
      name: "sites.google.com/site/iostechhelping/ios/downloads",
      url: "https://sites.google.com/site/iostechhelping/ios/downloads",
      external: true
    },
    type: "Tethered",
    firmwares: ["7.1 beta","7.1 beta"],
    soc: "A4",
    notes: "iPhone 4 only",
  },
  compatibility: [
    {
      firmwares: [
        "11D5099e", // 7.1 beta
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,2", // iPhone 4 (GSM, 2012), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
      ]
    },
  ]
}