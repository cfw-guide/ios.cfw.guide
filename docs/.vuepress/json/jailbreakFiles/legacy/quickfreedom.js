module.exports = {
  name: "QuickFreedom",
  info: {
    website: {
      name: "ipodtouchfans.com/forums/showthread.php?t=155875 (archive.org)",
      url: "https://web.archive.org/web/20090314040712/http://ipodtouchfans.com/forums/showthread.php?t=155875",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.2.1","2.2.1"],
    notes: "Only supports iPod touch (2nd generation)",
    latestVer: "200Beta",
    color: "#3c3b3c",
    icon: "/assets/images/jb-icons/quickfreedom.png",
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