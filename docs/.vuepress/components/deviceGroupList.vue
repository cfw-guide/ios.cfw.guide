<template>
    <h2>{{ themeLocaleData.getStarted.requiredReading.title }}</h2>
    <p v-for="s in themeLocaleData.getStarted.requiredReading.content" :key="s">{{ s }}</p>

    <br>

    <template v-for="o in groupObj" :key="o">
        <h2 v-if="o.label">{{ o.label }}</h2>
    
        <table v-for="t in Math.ceil(o.types.length / colCount)" :key="t">
            <tbody>
                <tr :style="`width: ${parseInt(100 / colCount)}%;`">
                    <th v-for="c in colCount" :key="c" :style="{'width': parseInt(100 / colCount) + '%'}">
                        <router-link v-if="o.types[(t - 1) * colCount + c - 1]" :to="
                            `${localePathPrefix}/get-started/select-${o.types[(t - 1) * colCount + c - 1].fdn().toLowerCase()}/`
                        ">
                            {{ o.types[(t - 1) * colCount + c - 1] }}
                        </router-link>
                    </th>
                </tr>
                <tr>
                    <td v-for="c in colCount" :key="c">
                        <router-link v-if="o.types[(t - 1) * colCount + c - 1]" :to="
                            `${localePathPrefix}/get-started/select-${o.types[(t - 1) * colCount + c - 1].fdn().toLowerCase()}/`
                        ">
                            <img :src="imageObj[o.types[(t - 1) * colCount + c - 1]]" style="max-height: 11em;">
                        </router-link>
                    </td>
                </tr>
                <tr><td v-for="c in colCount" :key="c"><hr class="separator"></td></tr>
            </tbody>
        </table>
    </template>
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

export default {
    data() {
        return {
            colCount: 3,
            fm: usePageFrontmatter(),
            themeLocaleData: useThemeLocaleData().value.chart.deviceChart,
            isDarkMode: useDarkMode()
        }
    },
    computed: {
        localePathPrefix() {
            const lang = this.fm.lang
            if (lang == 'en_US') return ''
            return `/${lang}`
        },
        typeArr() {
            return Array.from(new Set(this.fm.groupList.map(x => x.type)))
        },
        groupObj() {
            var presetTypeArr = []
            var presetOrder = [
                {
                    label: "",
                    types: [
                        "iPhone",
                        "iPad",
                        "iPad Air",
                        "iPad Pro",
                        "iPad mini",
                        "iPod touch",
                        "Apple TV"
                    ]
                }
            ].map(x => {
                x.types = x.types.filter(y => this.typeArr.includes(y))
                for (const t of x.types) presetTypeArr.push(t)
                return x
            })

            const unsetTypes = this.typeArr.filter(x => !presetTypeArr.includes(x))
            if (unsetTypes.length > 0) presetOrder.push({
                label: "Other",
                types: unsetTypes
            })

            return presetOrder
        },
        imageObj() {
            var tempTypeArr = []
            var firstDeviceObj = {}

            const overrides = {
                AirPods: "AirPods1,1",
                iPhone: "iPhone15,2" // change to iPhone15,2 on iOS 16.0+ jailbreak
                // iPad Pro: "iPad13,11" // change to iPad14,6 or remove on iPadOS 16.0+ jailbreak
            }

            for (const g of this.fm.groupList) {
                if (overrides.hasOwnProperty(g.type) && g.img.key != overrides[g.type]) continue
                if (tempTypeArr.includes(g.type)) continue
                tempTypeArr.push(g.type)
                firstDeviceObj[g.type] = {
                    key: g.img.key,
                    imageBool: g.img.count > 0,
                    dark: g.img.dark,
                    names: g.img.names
                }
            }

            var ret = {}
            for (const d in firstDeviceObj) {
                ret[d] = firstDeviceObj[d].imageBool ?
                    `https://img.appledb.dev/device@preview/${firstDeviceObj[d].key}/${firstDeviceObj[d].names[0]}${this.isDarkMode && firstDeviceObj[d].dark ? '_dark' : ''}.webp` :
                    `/assets/images/logo${this.isDarkMode ? '_dark' : ''}.webp`
            }
            
            return ret
        }
    }
}
</script>

<style scoped>
table {
    table-layout: fixed;
    margin-top: 0em;
}

td, th {
    text-align: center;
}

td, th, tr {
    background: rgba(0,0,0,0);
    border: 0;
}

th {
    padding-bottom: 1em;
}

.separator {
    margin-top: 2em;
    width: 80%;
}

th a {
    color: var(--c-text);
    font-weight: 600;
    font-size: 1.2em;
}
</style>
