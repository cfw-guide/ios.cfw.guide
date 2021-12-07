module.exports = {
  name: "WinPwn",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/WinPwn",
      url: "https://www.theiphonewiki.com/wiki/WinPwn",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.0","2.0.2"]
  },
  compatibility: [
    {
      firmwares: [
        "5A347", // 2.0
        "5B108", // 2.0.1
        "5C1", // 2.0.2
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
        "iPod1,1", // iPod touch
      ]
    },
  ]
}