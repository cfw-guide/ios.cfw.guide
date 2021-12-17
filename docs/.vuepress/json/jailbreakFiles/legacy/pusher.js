module.exports = {
  name: "Pusher",
  info: {
    website: {
      name: "ripdev.com/pusher (archive.org)",
      url: "https://web.archive.org/web/20090204000703/http://ripdev.com/pusher/",
      external: true
    },
    type: "Untethered",
    firmwares: ["2.0","2.2.1"],
    notes: "Only supports iPhone and iPhone 3G",
    latestVer: "1.1",
    color: "#f5c968",
    icon: "/assets/images/jb-icons/pusher.png",
  },
  compatibility: [
    {
      firmwares: [
        "5A347", // 2.0
        "5B108", // 2.0.1
        "5C1", // 2.0.2
        "5G77", // 2.2
        "5H11", // 2.2.1
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
      ]
    },
  ]
}