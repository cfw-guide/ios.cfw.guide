<template>
    <h2>{{ themeLocaleData.firmwareSelection.requiredReading.title }}</h2>
    <p v-for="content in themeLocaleData.firmwareSelection.requiredReading.content" :key="content" v-html="content.format({ osStr: latestOs.osStr, minFw0: reqReadingMinMaxFw.min, minFw1: reqReadingMinMaxFw.min, maxFw0: reqReadingMinMaxFw.max, maxFw1: reqReadingMinMaxFw.max }).md()"></p>
    <h2>{{ themeLocaleData.table.title }}</h2>
    <div class="custom-container tip" v-if="tableArr.map(x => x.jb.name).includes('N/A')"><p>{{ themeLocaleData.table.noJbTip }}</p></div>
    
    <table>
        <tr><th v-for="header in themeLocaleData.table.tableHeader" :key="header">{{ header }}</th></tr>
        <tr v-for="row in tableArr" :key="row">
            <td>{{ row.from }}</td>
            <td>{{ row.to }}</td>
            <td v-if="row.jb.url && row.jb.external"><a :href="row.jb.url">{{ row.jb.name }}</a></td>
            <td v-else-if="row.jb.url && !row.jb.external"><router-link :to="localePathPrefix + row.jb.url">{{ row.jb.name }}</router-link></td>
            <td v-else>{{ row.jb.name }}</td>
        </tr>
    </table>

    <a :href="`https://appledb.dev/device/${fm.name.replace(/ /g,'-')}.html`" target="_blank">{{ themeLocaleData.table.showMore }}</a>
    <h2 v-if="findOsVersion.verStr || findOsVersion.imgUrl">{{ themeLocaleData.firmwareSelection.findiOSVersion.title.format({ osStr: latestOs.osStr }) }}</h2>
    <div v-if="findOsVersion.verStr" v-html="themeLocaleData.firmwareSelection.findiOSVersion.instructions[fm.devType == 'Apple TV' ? 'tv' : 'ios'].format({ verStr: findOsVersion.verStr }).md()"></div>
    <div v-if="findOsVersion.imgUrl" class="custom-container tip"><p>
        <img :src="findOsVersion.imgUrl" :alt="themeLocaleData.firmwareSelection.findiOSVersion.image.altText.format({ osStr: latestOs.osStr, deviceType: fm.devType })" class="medium-zoom-image">
    </p></div>
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import { marked } from 'marked'

String.prototype.format = function(vars) {
  let temp = this
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item])
  return temp
}

String.prototype.md = function() {
  return marked.parse(this)
}

export default {
    data() {
        return {
            themeLocaleData: useThemeLocaleData().value.chart.deviceChart,
            fm: usePageFrontmatter()
        }
    },
    computed: {
        localePathPrefix() {
            const lang = this.fm.lang
            if (lang == 'en_US') return ''
            return `/${lang}`
        },
        reqReadingMinMaxFw() {
            for (const row of this.tableArr) {
                const { osArr } = this.fm
                const versionArr = osArr.map(x => x.version)
                const posDif = Math.abs(versionArr.indexOf(row.from) - versionArr.indexOf(row.to))
                
                if (posDif < 2) continue
                
                return {
                    min: row.from,
                    max: row.to
                }
            }
            return {
                min: this.tableArr[0].from,
                max: this.tableArr[0].to
            }
        },
        latestOs() {
            return this.fm.osArr[0]
        },
        findOsVersion() {
            const majFw = this.latestOs.version.split('.')[0]
            const oldFw = majFw < 11
            const iPad = this.fm.devType.includes('iPad')
            const AppleTV = this.fm.devType == 'Apple TV'

            const findiOSVersion = this.themeLocaleData.firmwareSelection.findiOSVersion

            let verStr, imgUrl
            if (oldFw) {
                verStr = findiOSVersion.verStr.old
                imgUrl = iPad ?
                findiOSVersion.image.ipadOld : findiOSVersion.image.iphoneOld
            } else {
                verStr = findiOSVersion.verStr.new
                imgUrl = iPad ? findiOSVersion.image.ipad : findiOSVersion.image.iphone
            }

            if (AppleTV) {
                verStr = findiOSVersion.verStr.tv
                imgUrl = findiOSVersion.image.tv
            }

            return {
                verStr: verStr,
                imgUrl: imgUrl
            }
        },
        tableArr() {
            const {osArr, jbArr, devArr} = this.fm
            let retArr = []
            for (const os of osArr) {
                let jb = jbArr.filter(x => {
                    if (!x.compatibility || x.hideFromGuide) return false
                    const compat = x.compatibility.map(y => 
                        y.firmwares.includes(os.build) &&
                        y.devices.some(r => devArr.includes(r))
                    ).filter(x => x)
                    return (compat.length) ? true : false
                }).sort((a,b) => a.priority > b.priority)[0]

                let retJb = {}
                if (!jb) retJb.name = 'N/A'
                else retJb = {
                    name: jb.name,
                    url: `https://appledb.dev/jailbreak/${jb.name.replace(/ /g,'-')}`,
                    external: true
                }

                if (jb && jb.info && jb.info.guide) {

                    let guideObj = jb.info.guide.filter(x => {
                        if (x.hasOwnProperty('firmwares') || x.hasOwnProperty('devices')) {
                            const fwCheck = x.hasOwnProperty('firmwares') ? x.firmwares.includes(os.build) : true
                            const devCheck = x.hasOwnProperty('devices') ? x.devices.some(r => devArr.includes(r)) : true
                            return fwCheck && devCheck
                        }
                        else return true
                    }).sort((a,b) => {
                        const check = [a,b].map(x => x.hasOwnProperty('firmwares') && x.hasOwnProperty('devices'))
                        if (check[0] < check[1]) return 1
                        if (check[0] > check[1]) return -1
                        return 0
                    })
                    guideObj = guideObj[0]
                    if (guideObj.name && guideObj.url) retJb = {
                        name: guideObj.name,
                        url: guideObj.url,
                        external: false
                    }
                }

                if (retArr.length == 0 || retArr[retArr.length-1].jb.name != retJb.name) {
                    retArr.push({
                        from: os.version,
                        to: os.version,
                        jb: retJb
                    })
                } else {
                    retArr[retArr.length-1].from = os.version
                }
            }
            return retArr
        }
    }
}
</script>