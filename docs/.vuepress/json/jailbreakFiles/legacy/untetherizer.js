module.exports = {
  name: "Untetherizer",
  info: {
    website: {
      name: "ipodtouchfans.com/forums/showthread.php?t=157735 (archive.org)",
      url: "https://web.archive.org/web/20090519061823/http://www.ipodtouchfans.com/forums/showthread.php?t=157735",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.2.1","2.2.1"],
    notes: "Only supports iPod touch (2nd generation)",
    latestVer: "1.1",
    color: "#000000",
    icon: "/assets/images/jb-icons/untetherizer.png",
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