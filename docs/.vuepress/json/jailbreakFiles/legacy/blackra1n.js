module.exports = {
  name: "blackra1n",
  alias: "blackrain",
  info: {
    website: {
      name: "blackra1n.com",
      url: "http://www.blackra1n.com",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Blackra1n",
      url: "https://www.theiphonewiki.com/wiki/Blackra1n",
      external: true
    },
    type: "Tethered",
    firmwares: ["3.1","3.1.3"],
    latestVer: "RC3",
    color: "#000000",
    icon: "/assets/images/jb-icons/blackra1n.png",
  },
  compatibility: [
    {
      firmwares: [
        "7C144", // 3.1, iPhone only
        "7C145", // 3.1.1, iPod only
        "7C146", // 3.1.1, iPod touch 3 only
        "7D11", // 3.1.2
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
        "iPod1,1", // iPod touch
        "iPod2,1", // iPod touch (2nd generation)
        "iPod3,1", // iPod touch (3rd generation)
      ]
    },
    {
      firmwares: [
      "7E18", // 3.1.3
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
      ]
    }
  ]
}