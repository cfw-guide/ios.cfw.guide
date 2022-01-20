module.exports = {
  name: "greengr4ss",
  alias: "greengrass",
  info: {
    website: {
      name: "ipodtouchfans.com/forums/showthread.php?t=155813 (archive.org)",
      url: "http://web.archive.org/web/20090314040717/http://www.ipodtouchfans.com/forums/showthread.php?t=155813",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/greengr4ss",
      url: "https://www.theiphonewiki.com/wiki/greengr4ss",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.2.1","2.2.1"],
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