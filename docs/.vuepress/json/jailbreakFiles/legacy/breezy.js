module.exports = {
  name: "Breezy",
  info: {
    website: {
      name: "code.google.com/archive/p/pxl/wikis/Breezy.wiki",
      url: "https://code.google.com/archive/p/pxl/wikis/Breezy.wiki",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.0.0","1.0.2"],
    latestVer: "20070908",
    color: "#000000",
    icon: "/assets/images/jb-icons/breezy.png",
  },
  compatibility: [
    {
      firmwares: [
        "1A543a", // 1.0.0, iPhone 2G only
        "1C25", // 1.0.1, iPhone 2G only
        "1C28", // 1.0.2, iPhone 2G only
      ],
      devices: [
        "iPhone1,1", // iPhone
      ]
    },
  ]
}