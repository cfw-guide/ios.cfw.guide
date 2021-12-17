module.exports = {
  name: "iBrickr",
  info: {
    website: {
      name: "theiphonewiki.com/wiki/IBrickr",
      url: "https://www.theiphonewiki.com/wiki/IBrickr",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/iBrickr",
      url: "https://www.theiphonewiki.com/wiki/iBrickr",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.0","1.0.2"],
    latestVer: "v0.91",
    color: "#d08f74",
    icon: "/assets/images/jb-icons/ibrickr.png",
  },
  compatibility: [
    {
      firmwares: [
        "1A543a", // 1.0.0, iPhone 2G only
        "1C25", // 1.0.1, iPhone 2G only
        "1C28", // 1.0.2, iPhone 2G only
      ],
      devices: [
        "iPhone1,1", // iPhone
      ]
    },
  ]
}