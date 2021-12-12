module.exports = {
  name: "iLiberty+",
  alias: ["iLiberty", "iLibertyPlus"],
  priority: 0,
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/ILiberty+",
      url: "https://www.theiphonewiki.com/wiki/ILiberty%2B",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.0","1.1.5"],
    latestVer: "1.3.0.113 (Windows)\n1.6_RC3 (OS X)",
    color: "#ffffff",
    icon: "/assets/images/jb-icons/iliberty.png",
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
        "4B1", // 1.1.5, iPod touch only
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPod1,1", // iPod touch
      ]
    },
  ]
}