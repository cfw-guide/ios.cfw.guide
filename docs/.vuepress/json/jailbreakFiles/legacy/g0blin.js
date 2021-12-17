module.exports = {
  name: "g0blin",
  alias: "goblin",
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/G0blin",
      url: "https://www.theiphonewiki.com/wiki/G0blin",
      external: true
    },
    type: "Semi-untethered",
    firmwares: ["10.2","10.3.3"],
    latestVer: "RC2",
    color: "#8105f3",
    icon: "/assets/images/jb-icons/g0blin.png",
    notes: "Abandoned and superceded by doubleh3lix"
  },
  compatibility: [
    {
      firmwares: [
        "14C92", // 10.2
        "14D27", // 10.2.1
        "14E277", // 10.3
        "14E304", // 10.3.1
        "14F89", // 10.3.2
        "14F90", // 10.3.2, iPad (5th generation) only
        "14F91", // 10.3.2, iPad mini 4 (Wi-Fi + Cellular) only
        "14G60", // 10.3.3
      ],
      devices: [
        "iPhone6,1", // iPhone 5s (GSM), A7
        "iPhone6,2", // iPhone 5s (Global), A7
        "iPhone7,1", // iPhone 6 Plus, A8
        "iPhone7,2", // iPhone 6, A8
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
        "iPad4,1", // iPad Air Wi-Fi, A7
        "iPad4,2", // iPad Air Wi-Fi + Cellular, A7
        "iPad4,3", // iPad Air Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,4", // iPad mini 2 Wi-Fi, A7
        "iPad4,5", // iPad mini 2 Wi-Fi + Cellular, A7
        "iPad4,6", // iPad mini 2 Wi-Fi + Cellular (TD-LTE), A7
        "iPad4,7", // iPad mini 3 Wi-Fi, A8
        "iPad4,8", // iPad mini 3 Wi-Fi + Cellular, A8
        "iPad4,9", // iPad mini 3 Wi-Fi + Cellular (TD-LTE), A8
        "iPad5,1", // iPad mini 4 Wi-Fi, A8
        "iPad5,2", // iPad mini 4 Wi-Fi + Cellular, A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
        "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        "iPad6,11", // iPad (5th generation) Wi-Fi, A9
        "iPad6,12", // iPad (5th generation) Wi-Fi + Cellular, A9
        "iPod7,1", // iPod touch (6th generation), A8
      ]
    }
  ]
}