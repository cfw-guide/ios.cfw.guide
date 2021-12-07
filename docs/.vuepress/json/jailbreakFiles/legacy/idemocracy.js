module.exports = {
  name: "iDemocracy",
  info: {
    website: {
      name: "code.google.com/archive/p/idemocracy",
      url: "https://code.google.com/archive/p/idemocracy/",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.1.1","1.1.4"]
  },
  compatibility: [
    {
      firmwares: [
        "3A109a", // 1.1.1, iPhone 2G only
        "3A110a", // 1.1.1, iPod touch only
        "3B48b", // 1.1.2
        "4A93", // 1.1.3
        "4A102", // 1.1.4
      ],
      devices: [
        "iPhone1,1", // iPhone
        "iPod1,1", // iPod touch
      ]
    },
  ]
}