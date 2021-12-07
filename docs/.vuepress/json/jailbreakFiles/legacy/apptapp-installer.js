module.exports = {
  name: "AppTapp Installer",
  alias: ["AppTappInstaller", "AppTapp-Installer", "AppTapp_Installer"],
  info: {
    wiki: {
      name: "theiphonewiki.com/wiki/AppTapp_Installer",
      url: "https://www.theiphonewiki.com/wiki/AppTapp_Installer",
      external: true
    },
    type: "Untethered",
    firmwares: ["1.0.0","1.0.2"]
  },
  compatibility: [
    {
      firmwares: [
        "1A543a", // 1.0.0, iPhone 2G only
        "1C25", // 1.0.1, iPhone 2G only
        "1C28", // 1.0.2, iPhone 2G only
      ],
      devices: [
        "iPhone1,1", // iPhone
      ]
    },
  ]
}