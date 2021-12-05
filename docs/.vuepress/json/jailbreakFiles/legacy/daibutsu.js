module.exports = {
  "name": "daibutsu",
  "priority": 2,
  "info": {
    "website": {
      "name": "github.com/dora2-iOS/daibutsu",
      "url": "https://github.com/dora2-iOS/daibutsu",
      "external": true
    },
    "guide": [
      {
        "name": "Installing daibutsu",
        "url": "/installing-daibutsu/"
      }
    ],
    "type": "Untethered",
    "firmwares": ["8.4.1","9.1"]
  },
  "compatibility": [
    {
      "firmwares": [
        "12H321", // 8.4.1
        "13A344", // 9.0
        "13A404", // 9.0.1
        "13A452", // 9.0.2
        "13B143", // 9.1
      ],
      "devices": [
        "iPhone4,1", // iPhone 4S, A5
        "iPhone5,1", // iPhone 5 (GSM), A6
        "iPhone5,2", // iPhone 5 (CDMA), A6
        "iPhone5,3", // iPhone 5c (GSM), A6
        "iPhone5,4", // iPhone 5c (CDMA), 
        "iPad2,1", // iPad 2 Wi-Fi, A5
        "iPad2,2", // iPad 2 Wi-Fi + 3G (GSM), A5
        "iPad2,3", // iPad 2 Wi-Fi + 3G (CDMA), A5
        "iPad2,4", // iPad 2 Wi-Fi (Mid 2012), A5
        "iPad2,5", // iPad mini Wi-Fi, A5
        "iPad2,5", // iPad mini Wi-Fi + Cellular, A5
        "iPad2,5", // iPad mini Wi-Fi + Cellular (MM), A5
        "iPad3,1", // iPad (3rd generation) Wi-Fi, A5X
        "iPad3,2", // iPad (3rd generation) Wi-Fi + Cellular (VZ), A5X
        "iPad3,3", // iPad (3rd generation) Wi-Fi + Cellular, A5X
        "iPad3,4", // iPad (4th generation) Wi-Fi, A6X
        "iPad3,5", // iPad (4th generation) Wi-Fi + Cellular, A6X
        "iPad3,6", // iPad (4th generation) Wi-Fi + Cellular (MM), A6X
        "iPod5,1", // iPod touch (5th generation), A5
      ]
    },
  ]
}