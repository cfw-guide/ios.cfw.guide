module.exports = {
  name: "tetherbootX32",
  info: {
    website: {
      name: "dora2ios.web.app/tetherbootx32 (archive.org)",
      url: "https://web.archive.org/web/20210322151359/https://dora2ios.web.app/tetherbootx32/",
      external: true
    },
    type: "Tethered",
    firmwares: ["10.3.4","10.3.4"],
    soc: "A6",
    notes: "Only supports iPhone 5",
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