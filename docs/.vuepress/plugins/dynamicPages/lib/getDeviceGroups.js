const { path, fs } = require('@vuepress/utils')
const request = require('sync-request')

const allowedDeviceTypes = [
    'iPhone',
    'iPad',
    'iPad Pro',
    'iPad mini',
    'iPad Air',
    'iPod touch'
]

const deviceList = require('../../../json/deviceList')
const jailbreakList = require('../../../json/jailbreak')
const osArr = require('../../../json/ios')
.reverse()
.filter(x => !x.beta)

let imgJson = []
try {
    const req = request(
        'GET',
        'https://img.appledb.dev/main.json'
    ).getBody('utf8')
    if (!fs.existsSync('./cache')) fs.mkdirSync('./cache')
    fs.writeFileSync('./cache/imgArr.json', req)

    imgJson = JSON.parse(req)
} catch {
    if (fs.existsSync('./cache/imgArr.json'))
        imgJson = require('../cache/imgArr.json')
}

const deviceGroups = require('../../../json/deviceGroups')
.filter(x => allowedDeviceTypes.includes(x.type))
.map(x => {
    const devices = x.devices.map(y => deviceList[y])

    x.released = Array.from(new Set(
        devices
        .map(y => y.released)
        .filter(y => y)
        .flat()
    ))
    .sort((a,b) => {
        a = new Date(a)
        b = new Date(b)
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
    /*if (released.join() != '') x.released = released.map(y => {
        const releasedArr = y.split('-')
        const dateStyleArr = [{ year: 'numeric'}, { dateStyle: 'medium'}, { dateStyle: 'medium'}]
        return new Intl.DateTimeFormat('en-US', dateStyleArr[releasedArr.length-1]).format(new Date(y))
    })*/

    x.soc = Array.from(new Set(devices.map(y => y.soc).filter(y => y).flat()))
    x.arch = Array.from(new Set(devices.map(y => y.arch).filter(y => y).flat()))

    let compatibleFirmwares = osArr.filter(y => y.deviceMap.some(r => x.devices.includes(r)))

    let latestFw = compatibleFirmwares[0]
    if (!latestFw) return null

    let latestJailbreakFirmware = compatibleFirmwares.filter(fw => {
        const compatibleJailbreaks = jailbreakList.filter(jb => {
            if (!jb.compatibility || jb.hideFromGuide) return false
            const compatEntries = jb.compatibility.filter(c => {
                const deviceCheck = c.devices ? c.devices.some(r => x.devices.includes(r)) : true
                const firmwareCheck = c.firmwares ? c.firmwares.includes(fw.build) : true
                return deviceCheck && firmwareCheck
            })
            return compatEntries.length > 0
        })
        return compatibleJailbreaks.length > 0
    })[0]

    x.latestFw = [[latestFw.osStr, latestFw.version].join(' ')]
    x.latestOsStr = latestFw.osStr

    x.latestJailbreakFirmware = ['']
    x.latestJailbreakFirmwareOsStr = ''
    x.hasJailbreaks = false
    x.expanded = false

    if (latestJailbreakFirmware) {
        x.hasJailbreaks = true
        x.expanded = true
        x.latestJailbreakFirmware = [[latestJailbreakFirmware.osStr, latestJailbreakFirmware.version].join(' ')]
        x.latestJailbreakFirmwareOsStr = latestJailbreakFirmware.osStr
    }

    return x
})
.filter(x => x)
.filter(x => x.hasJailbreaks)
.sort((a,b) => {
    let arr = [a,b].map(x => x.type)
    if (arr[0] < arr[1]) return -1
    if (arr[0] > arr[1]) return 1

    arr = [a,b]
    .map(x => x.devices[0])
    .map(x => deviceList[x].released)
    if (arr[0] < arr[1]) return 1
    if (arr[0] > arr[1]) return -1
    return 0
})
.map(x => {
    let imgObj = {
        key: 'logo',
        count: 1,
        dark: true
    }

    for (const dev of x.devices) {
        let findImgObj = imgJson.find(y => y.key == dev)
        if (findImgObj) {
            imgObj.key = dev
            imgObj.count = findImgObj.count
            imgObj.dark = findImgObj.dark
            break
        }
    }
    
    x.img = imgObj
    return x
})

module.exports = deviceGroups