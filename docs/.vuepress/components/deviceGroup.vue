<template>
    <h2>{{ themeLocaleData.requiredReading.title }}</h2>
    <p v-for="s in themeLocaleData.requiredReading.content" :key="s">{{ s.format({ deviceType: fm.group[0].type, osStr: fm.group[0].latestOsStr }) }}</p>

    <div v-if="fm.type == 'iPhone'" class="custom-container tip"><p>{{ themeLocaleData.iPhoneNotice }}</p></div>

    <template v-for="dev in deviceArr" :key="dev"><template v-for="url in [`${localePathPrefix}/get-started/${dev.name.fdn()}.html`]" :key="url">
        <div class="flexWrapper">
            <div class="devHead">
                <router-link :to="url" style="color: inherit;">
                    <h3>{{dev.name}}</h3>
                    <div class="flexWrapper flexImg" style="user-select: none; height: 8em;">
                        <div style="text-align: center;">
                            <template v-if="dev.img.count > 0"><img v-for="i in Math.min(dev.img.count,3)" :key="i" :class="`devImage${i}`" :src="`https://img.appledb.dev/device@preview/${dev.devices[0].replace(/\//g,'%252F')}/${i-1}${isDarkMode && dev.img.dark ? '_dark' : ''}.png`" style="max-height: 8em; padding-right: .5em;"></template>
                            <template v-else><img class="devImage0" :src="`/assets/images/logo${isDarkMode ? '_dark' : ''}.png`" style="max-height: 8em; padding-right: .5em;"></template>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="flexWrapper flexColumn devInfo">
                <ul class="devInfo infoList" style="position: absolute;">
                    <li v-for="i in infoObj[dev.name].slice(0,3)" :key="i">
                        {{ i.replace('...','') }}
                        <a v-if="i.includes('...')" :href="`https://appledb.dev/device/${dev.name.fdn()}`" target="_blank">...</a>
                    </li>
                    <li><router-link :to="url">{{ this.themeLocaleData.info.showMore }}</router-link></li>
                </ul>
                <ul class="devReleased infoList" style="position: relative; top: 9em;">
                    <li v-if="dev.released">{{ this.themeLocaleData.info.released.format({ released: dev.released.slice(0,1).join(', ') }) }}<template v-if="dev.released.length > 1">, <a :href="`https://appledb.dev/device/${dev.name.fdn()}`" target="_blank">...</a></template></li>
                </ul>
            </div>
        </div>
        <span class="variablePadding"/>
        <hr>
    </template></template>
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

String.prototype.fdn = function() {
  return this
  .replace(/ /g, '-')
  .replace(/\//g,'%2F')
  .replace(/ü/g,'u')
  .replace(/²/g,'2')
  .replace(/³/g,'3')
}

String.prototype.format = function(vars) {
  let temp = this;
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item]);
  return temp
}

export default {
    data() {
        return {
            iPhoneNote: 'Note that all "Plus", "Max" and "mini" models of iPhones are functionally identical to the regular models.',
            fm: usePageFrontmatter(),
            isDarkMode: useDarkMode(),
            themeLocaleData: useThemeLocaleData().value.chart.deviceChart.deviceSelection,
        }
    },
    computed: {
        localePathPrefix() {
            const lang = this.fm.lang
            if (lang == 'en_US') return ''
            return `/${lang}`
        },
        deviceArr() {
            return this.fm.group
        },
        infoObj() {
            let labels = {
                soc: this.themeLocaleData.info.soc,
                arch: this.themeLocaleData.info.arch,
                latestFw: this.themeLocaleData.info.latestFw,
            }
            let o = {}
            for (const dev of this.deviceArr) {
                let attr = ['soc','arch','latestFw']
                .map(x => {
                    return {
                        type: x,
                        value: dev[x]
                    }
                })

                o[dev.name] = []
                for (const i of attr) if (i.value && i.value != '') {
                    let ret = labels[i.type].format({ [i.type]: i.value.slice(0,3).join(', ') })
                    if (i.value.length > 3) ret += ', ...'
                    o[dev.name].push(ret)
                }
            }
            return o
        }
    }
}
</script>

<style>
h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

td, th {
    text-align: center;
}

.noBorder tr {
    background-color: inherit;
}

.noBorder td {
    border: 0;
    text-align: initial;
    vertical-align: 0;
}

.flexWrapper {
    display: flex;
    flex-wrap: wrap;
}

.flexImg {
    overflow: hidden;
    max-height: 8em;
}

.flexColumn {
    flex-direction: column;
}

.devHead {
    margin-right: 1em;
    width: 50%;
}

.devImage1 {
    max-width: 100%;
}

.variablePadding {
    display: block;
    margin-bottom: 1em;
}

@media only screen and (max-width: 600px) {
    .devHead {
        width: 100%;
    }
    .devInfo {
        position: static !important;
    }
    .devReleased {
        position: static !important;
    }
    h3 {
        white-space: normal;
        overflow: visible;
    }
    .variablePadding {
        display: none;
    }
}

.home {
    padding-top: 0 !important;
}

.infoList {
    list-style-type: none;
    padding-left: 0;
}
</style>