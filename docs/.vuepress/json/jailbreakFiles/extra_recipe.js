module.exports = {
  "name": "extra_recipe",
  "info": {
    "website": {
      "name": "yalu.qwertyoruiop.com",
      "url": "https://yalu.qwertyoruiop.com/",
      "external": true
    },
    "type": "Semi-untethered",
    "firmwares": ["10.0","10.0.2"],
    "soc": "A10"
  },
  "compatibility": [
    {
      "firmwares": [
        "13A346", // 10.0, iPhone 7 and iPhone 7 Plus only
        "14A403", // 10.0.1
        "14A456", // 10.0.2
      ],
      "devices": [
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
      ]
    }
  ]
}