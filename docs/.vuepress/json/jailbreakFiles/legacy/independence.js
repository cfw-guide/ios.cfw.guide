module.exports = {
  name: "iNdependence",
  info: {
    website: {
      name: "code.google.com/archive/p/independence",
      url: "https://code.google.com/archive/p/independence/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/INdependence",
      url: "https://www.theiphonewiki.com/wiki/INdependence",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.0","1.1.4"],
    latestVer: "1.4",
    color: "#000000",
    icon: "/assets/images/jb-icons/independence.png",
  },
  compatibility: [
    {
      firmwares: [
        "1A543a", // 1.0.0, iPhone 2G only
        "1C25", // 1.0.1, iPhone 2G only
        "1C28", // 1.0.2, iPhone 2G only
        "3A109a", // 1.1.1, iPhone 2G only
        "3A110a", // 1.1.1, iPod touch only
        "3B48b", // 1.1.2
        "4A93", // 1.1.3
        "4A102", // 1.1.4
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPod1,1", // iPod touch
      ]
    },
  ]
}