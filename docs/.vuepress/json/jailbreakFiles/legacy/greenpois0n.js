module.exports = {
  name: "greenpois0n",
  alias: ["greenpoison", "greenpois0n", "greenp0is0n"],
  priority: 1,
  info: {
    website: {
      name: "greenpois0n.com/downloads (archive.org)",
      url: "https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/",
      external: true
    },
    wiki: {
      name: "theiphonewiki.com/wiki/Greenpois0n_(jailbreak)",
      url: "https://www.theiphonewiki.com/wiki/Greenpois0n_(jailbreak)",
      external: true
    },
    guide: [
      {
        name: "Installing greenpois0n",
        url: "/installing-greenpois0n/",
        pkgman: "cydia",
      }
    ],
    type: "Untethered",
    firmwares: ["4.1", "4.2.6"],
    notes: "Also compatible with iPhoneOS 3.2.2",
    latestVer: "RC6",
    color: "#5f7d5d",
    icon: "/assets/images/jb-icons/greenpois0n.png",
  },
  compatibility: [
    {
      firmwares: [
        "7B500", // 3.2.2, iPad only
        "8B117", // 4.1
        "8B118", // 4.1, iPod touch 4 only
        "8C148", // 4.2.1
        "8E200", // 4.2.6, iPhone 4 (CDMA) only
      ],
      devices: [
        "iPhone3,1", // iPhone 4 (GSM), A4
        "iPhone3,3", // iPhone 4 (CDMA), A4
        "iPod2,1", // iPod touch (2nd generation)
        "iPod3,1", // iPod touch (3rd generation)
        "iPod4,1", // iPod touch (4th generation)
        "iPad1,1", // iPad
      ]
    },
    {
      firmwares: [
        "8B117", // 4.1
        "8C148a", // 4.2.1, iPhone 3GS only
      ],
      devices: [
        "iPhone2,1", // iPhone 3GS
      ]
    }
  ]
};
