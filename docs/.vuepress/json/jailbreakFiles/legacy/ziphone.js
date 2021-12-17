module.exports = {
  name: "ZiPhone",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/ZiPhone",
      url: "https://www.theiphonewiki.com/wiki/ZiPhone",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.1.3","1.1.5"],
    latestVer: "3.6",
    color: "#ed9121",
    icon: "/assets/images/jb-icons/ziphone.png",
  },
  compatibility: [
    {
      firmwares: [
        "4A93", // 1.1.3
        "4A102", // 1.1.4
        "4B1", // 1.1.5, iPod touch only
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPod1,1", // iPod touch
      ]
    },
  ]
}