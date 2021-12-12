module.exports = {
  name: "RageBreak",
  info: {
    website: {
      name: "ragemasta.com/jb.html (archive.org)",
      url: "https://web.archive.org/web/20140216122014/http://ragemasta.com/jb.html",
      external: true
    },
    type: "Tethered",
    firmwares: ["7.0","7.0.5"],
    soc: "A4",
    notes: "Only supports iPhone 4",
    latestVer: "121",
    color: "#0794f7",
    icon: "/assets/images/jb-icons/ragebreak.png",
  },
  compatibility: [
    {
      firmwares: [
        "11A465", // 7.0
        "11A501", // 7.0.2
        "11B511", // 7.0.3
        "11B554a", // 7.0.4
        "11B601", // 7.0.5
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,2", // iPhone 4 (GSM, 2012), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
      ]
    },
  ]
}