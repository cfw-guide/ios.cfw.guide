module.exports = {
  name: "p0insettia",
  alias: "poinsettia",
  info: {
    website: {
      name: "dora2ios.web.app/p0insettia.html",
      url: "https://dora2ios.web.app/p0insettia.html",
      external: true
    },
    type: "Semi-untethered",
    firmwares: ["10.3.4","10.3.4"],
    soc: "A6",
    notes: "iPhone 5 only",
    latestVer: "1.0 beta 1",
    color: "#f6b0f6",
    icon: "/assets/images/jb-icons/p0insettia.png",
  },
  compatibility: [
    {
      firmwares: [
        "14G61", // 10.3.4
      ],
      devices: [
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
      ]
    }
  ]
}