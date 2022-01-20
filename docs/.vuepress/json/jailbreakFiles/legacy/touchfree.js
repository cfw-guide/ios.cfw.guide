module.exports = {
  name: "touchFree",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/TouchFree",
      url: "https://www.theiphonewiki.com/wiki/TouchFree",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.1.2","1.1.2"],
  },
  compatibility: [
    {
      firmwares: [
        "3B48b", // 1.1.2
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPod1,1", // iPod touch
      ]
    },
  ]
}