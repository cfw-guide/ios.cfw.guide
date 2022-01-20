module.exports = {
  name: "JailbreakMe AppSnapp",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/AppSnapp",
      url: "https://www.theiphonewiki.com/wiki/AppSnapp",
      external: true
    },
    type: "(Safari) Untethered",
    firmwares: ["1.1.1","1.1.1"],
  },
  compatibility: [
    {
      firmwares: [
        "3A109a", // 1.1.1, iPhone 2G only
        "3A110a", // 1.1.1, iPod touch only
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPod1,1", // iPod touch
      ]
    },
  ]
}