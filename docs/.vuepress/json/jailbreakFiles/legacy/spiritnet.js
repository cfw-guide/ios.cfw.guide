module.exports = {
  name: "SpiritNET",
  priority: 1,
  info: {
    website: {
      name: "invoxiplaygames.uk/projects/spiritnet",
      url: "https://invoxiplaygames.uk/projects/spiritnet/",
      external: true
    },
    type: "Untethered",
    firmwares: ["3.1.2","3.2"]
  },
  compatibility: [
    {
      firmwares: [
        "7D11", // 3.1.2
        "7E18", // 3.1.3
        "7B367", // 3.2, iPad only
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPhone1,2", // iPhone 3G
        "iPhone2,1", // iPhone 3GS
        "iPad1,1", // iPad
        "iPod1,1", // iPod touch
        "iPod2,1", // iPod touch (2nd generation)
        "iPod3,1", // iPod touch (3rd generation)
      ]
    },
  ]
}