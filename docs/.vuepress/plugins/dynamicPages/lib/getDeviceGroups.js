const { path, fs } = require('@vuepress/utils')

const allowedDeviceTypes = [
    'iPhone',
    'iPad',
    'iPad Pro',
    'iPad mini',
    'iPad Air',
    'iPod touch',
    'Apple TV'
]

const deviceList = require('../../../json/deviceList')
const jailbreakList = require('../../../json/jailbreak')
const osArr = require('../../../json/ios')
.reverse()
.filter(x => !x.beta)

function isDir(p) {
    return fs.lstatSync(p).isDirectory()
}

let imgArr = []
const appleDeviceImagesPath = path.resolve(__dirname, '../../../../../apple-device-images')
const imagePath = path.join(appleDeviceImagesPath, 'images')
fs.readdirSync(imagePath)
.filter(f => f.endsWith('.png') || isDir(path.join(imagePath, f)))
.forEach(f => {
    imgArr.push({
        identifier: f.replace('.png',''),
        imgCount: (f.endsWith('.png')) ? 1 : -1,
        dark: false,
    })
})

let folderArr = imgArr.filter(x => x.imgCount < 0).filter(x => isDir(path.join(appleDeviceImagesPath, `images/${x.identifier}`)))
imgArr = imgArr.filter(x => x.imgCount > 0)

for (const i of folderArr) {
    let folderImgArr = []
    fs.readdirSync(path.join(appleDeviceImagesPath, `images/${i.identifier}`))
    .filter(f => f.endsWith('.png'))
    .forEach(file => {
        folderImgArr.push(file)
    })
    let folderImgCount = folderImgArr.filter(x => !x.endsWith('_dark.png')).length
    let darkBool = folderImgArr.filter(x => x.endsWith('_dark.png')).length > 0
    imgArr.push({
        identifier: i.identifier,
        imgCount: folderImgCount,
        dark: darkBool
    })
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
    let imgObj = {}
    let firstDeviceIdentifier = ''
    for (const dev of x.devices) {
        imgObj = imgArr.filter(y => y.identifier == dev)
        firstDeviceIdentifier = dev
        if (imgObj[0] !== undefined) break
    }
    x.img = {}
    if (imgObj.length < 1) {
        x.img.count = fs.existsSync(path.join(appleDeviceImagesPath, `/images-lowres/${firstDeviceIdentifier}.png`)) ? 1 : 0
        x.img.dark = false
    }
    else {
        x.img.count = imgObj[0].imgCount
        x.img.dark = imgObj[0].dark
    }
    return x
})

module.exports = deviceGroups