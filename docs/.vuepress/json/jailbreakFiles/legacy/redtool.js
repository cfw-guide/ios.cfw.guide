module.exports = {
  name: "redTool",
  info: {
    website: {
      name: "ipodtouchfans.com/forums/showthread.php?t=152387 (archive.org)",
      url: "https://web.archive.org/web/20090310150001/http://www.ipodtouchfans.com/forums/showthread.php?t=152387",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.2.1","2.2.1"],
    notes: "Only supports iPod touch (2nd generation)",
    latestVer: "1.0",
    color: "#dc5f60",
    icon: "/assets/images/jb-icons/redtool.png",
  },
  compatibility: [
    {
      firmwares: [
        "5H11a", // 2.2.1, iPod touch (2nd gen) only
      ],
      devices: [
        "iPod2,1", // iPod touch (2nd generation)
      ]
    },
  ]
}