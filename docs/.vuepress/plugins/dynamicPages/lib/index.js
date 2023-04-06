const { createPage } = require('@vuepress/core')
const { path, fs } = require('@vuepress/utils')

const allowedOsStrings = [
    'iOS',
    'iPhoneOS',
    'iPadOS',
    'tvOS',
    'Apple TV Software'
]

const deviceGroups = require('./getDeviceGroups')
const typeArr = Array.from(new Set(deviceGroups.map(x => x.type)))

const iosArr = require('../../../json/ios')
.filter(x => allowedOsStrings.includes(x.osStr) && !x.beta)

const jailbreakArr = require('../../../json/jailbreak').map(x => {
    if (!x.hasOwnProperty('priority')) x.priority = 9999
    return x
})

const i18n = require('../../../i18n')
const locales = i18n.locales

String.prototype.format = function(vars) {
    let temp = this;
    for (let item in vars)
        temp = temp.replace("${" + item + "}", vars[item]);
    return temp
}

let pageList = []

for (const deviceGroup of deviceGroups.filter(x => x.hasJailbreaks)) {
    const filteredOsArr = iosArr.filter(x => x.deviceMap.some(r => deviceGroup.devices.includes(r)))
    const filteredJailbreakArr = jailbreakArr.filter(x => {
        if (!x.compatibility) return false
        const compat = x.compatibility.map(y => 
            y.firmwares.some(r => filteredOsArr.map(x => x.build).includes(r)) &&
            y.devices.some(r => deviceGroup.devices.includes(r))
        ).filter(x => x)
        return (compat.length) ? true : false
    }).sort((a,b) => a.priority - b.priority)

    for (const localePath in locales) {
        const firmwareSelectionStr = i18n.themeConfigLocales[localePath].chart.deviceChart.firmwareSelection
        pageList.push({
            path: `${localePath}get-started/${deviceGroup.name.replace(/ /g,'-')}.html`,
            frontmatter: {
                lang: locales[localePath].lang,
                title: firmwareSelectionStr.pageTitle.format({ device: deviceGroup.name }),
                description: firmwareSelectionStr.description.format({ device: deviceGroup.name }),
                chartType: 'device',
                name: deviceGroup.name,
                devType: deviceGroup.type,
                devArr: deviceGroup.devices,
                osArr: filteredOsArr,
                jbArr: filteredJailbreakArr,
                sidebar: false,
                editLink: false,
                lastUpdated: false,
                contributors: false
            }
        })
    }
}

for (const localePath in locales) {
    const deviceSelectionStr = i18n.themeConfigLocales[localePath].chart.deviceChart.deviceSelection
    for (const type of typeArr) pageList.push({
        path: `${localePath}get-started/select-${type.toLowerCase().replace(/ /g,'-')}`,
        frontmatter: {
            lang: locales[localePath].lang,
            title: deviceSelectionStr.pageTitle.format({ deviceType: type }),
            description: deviceSelectionStr.description.format({ deviceType: type }),
            chartType: 'deviceGroup',
            widePage: true,
            type: type,
            group: deviceGroups.filter(x => x.type == type),
            sidebar: false,
            editLink: false,
            lastUpdated: false,
            contributors: false,
        }
    })

    const getStartedStr = i18n.themeConfigLocales[localePath].chart.deviceChart.getStarted
    pageList.push({
        path: `${localePath}get-started/`,
        frontmatter: {
            lang: locales[localePath].lang,
            title: getStartedStr.pageTitle,
            description: getStartedStr.description,
            chartType: 'deviceGroupList',
            groupList: deviceGroups,
            editLink: false,
            lastUpdated: false,
            contributors: false,
        }
    })
}

module.exports = function() {
    return {
        name: 'vuepress-new-dynamic-pages',
        async onInitialized(app) {
            for (const p in pageList) app.pages.push(await createPage(app, pageList[p]))
        }
    }
}