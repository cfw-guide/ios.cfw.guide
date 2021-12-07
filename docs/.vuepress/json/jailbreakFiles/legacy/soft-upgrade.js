module.exports = {
  name: "Soft Upgrade",
  alias: ["SoftUpgrade", "Soft_Upgrade", "Soft-Upgrade"],
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/Soft_Upgrade",
      url: "https://www.theiphonewiki.com/wiki/Soft_Upgrade",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.1.3","1.1.4"],
  },
  compatibility: [
    {
      firmwares: [
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