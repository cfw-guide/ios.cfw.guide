module.exports = {
  "name": "powdersn0w",
  "alias": "powdersnow",
  "info": {
    "website": {
      "name": "dora2ios.web.app/konayuki/index.html",
      "url": "https://dora2ios.web.app/konayuki/index.html",
      "external": true
    },
    "type": "Untethered",
    "firmwares": ["9.3.5","9.3.6"],
    "soc": "A5, A6",
    "notes": "Only supports specific devices, also supports 9.0.2",
  },
  "compatibility": [
    {
      "firmwares": [
        "13A452", // 9.0.2
        "13G36", // 9.3.5
      ],
      "devices": [
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPod5,1", // iPod touch (5th generation), A5
      ]
    },
    {
      "firmwares": [
        "13A452", // 9.0.2
        "13G37", // 9.3.6
      ],
      "devices": [
        "iPhone4,1", // iPhone 4S, A5
      ]
    }
  ]
}