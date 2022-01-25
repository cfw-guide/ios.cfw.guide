<template>
  <h2 v-if="infoData.length > 0" v-html="infoHeader"/>
  <p><div v-for="i in infoData" :key="i" v-html="i"/></p>
  <template v-if="getDeviceList"><h2 v-if="getDeviceList.length > 0" v-html="compatibilityHeader"/></template>
  <ul>
    <li v-for="g in getDeviceList" :key="g" :id="`liCompat-${g.name.replace(/ /g, '-')}`" style="list-style-type: none;" class="showOnHover">
      <input type="checkbox" :id="`toggleListCompat-${g.name.replace(/ /g, '-')}`">
      <i class="fas fa-chevron-right chevron chevronPoint clickToHide"/>
      <i class="fas fa-chevron-down chevron chevronPoint clickToShow displayNone"/>
      <a v-html="g.name" :href="`${devicePath}${g.name.replace(/ /g, '-')}.html`"/>
      
      <div class="hoverElement" style="display: inline;">
        <i class="fas fa-circle ml-" style="font-size: 0.3rem; opacity: 0.5; vertical-align: middle; margin-left: 2em; margin-right: 2em;"/>
        <label :for="`toggleListCompat-${g.name.replace(/ /g, '-')}`"><a style="cursor: pointer;" :id="`toggleShowCompat-${g.name.replace(/ /g, '-')}`" v-html="showMoreStr" v-on:click="toggleShowCompat(g.name.replace(/ /g, '-'))"/></label>
      </div>
      <div class="clickToShow">
        <table>
          <tr>
            <th v-html="versionStr"/>
            <th v-for="d in g.devices" :key="d" v-html="devices[d].name"/>
          </tr>
          <tr v-for="fw in g.firmwares.reverse()" :key="fw">
            <td>{{fw.version}} (<a v-html="fw.build" :href="`${firmwarePath}${fw.build}.html`"/>)</td>
            <td v-for="d in g.devices" :key="d" v-html="getCompat[d][fw.build] ? compatibleStr : notCompatibleStr"/>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'
import json from '@temp/main'
const extLinkIcon = '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>'

String.prototype.format = function(vars) {
  let temp = this;
  for (let item in vars)
    temp = temp.replace("${" + item + "}", vars[item]);
  return temp
}

export default {
  data() {
    return {
      devicePath: '/chart/device/',
      firmwarePath: '/chart/firmware/',

      infoHeader: 'Info',
      websiteStr: 'Website: ${websiteLink}',
      wikiStr: 'Wiki: ${wikiLink}',
      guideStr: 'Guide: ${guideLink}',
      typeStr: 'Type: ${type}',
      supportedStrSingle: 'Supported Firmware: ${ver}',
      supportedStr: 'Supported Firmwares: ${ver0} to ${ver1}',
      socStr: 'SoC: ${soc}',

      compatibilityHeader: 'Compatibility Listing',
      showMoreStr: 'Show More',
      showLessStr: 'Show Less',
      versionStr: 'Version',
      compatibleStr: 'Compatible',
      notCompatibleStr: 'Not compatible',
      
      frontmatter: usePageFrontmatter(),
      devices: json.device,
    }
  },
  methods: {
    toggleShowCompat: function (id, event) {
      var liID = `liCompat-${id}`
      var liClassList = document.getElementById(liID).classList
      if (liClassList.contains('showOnHover')) liClassList.remove('showOnHover')
      else liClassList.add('showOnHover')
      document.getElementById(liID).classList = liClassList

      var toggleID = `toggleShowCompat-${id}`
      var toggleInner = document.getElementById(toggleID).innerHTML
      if (toggleInner == this.showMoreStr) toggleInner = this.showLessStr
      else toggleInner = this.showMoreStr
      document.getElementById(toggleID).innerHTML = toggleInner
    },
  },
  computed: {
    websiteLink() {
      const site = this.frontmatter.jailbreak.info.website
      if (!site || (!site.url && site.name)) return
      if (!site.url) return site.name
      if (!site.name) site.name = site.url

      var link = `<a ${(site.external) ? 'target="_blank"' : ''} href="${site.url}">${site.name}</a>${(site.external) ? extLinkIcon : ''}`
      return this.websiteStr.format({ websiteLink: link })
    },
    wikiLink() {
      const site = this.frontmatter.jailbreak.info.wiki
      if (!site || (!site.url && site.name)) return
      if (!site.url) return site.name
      if (!site.name) site.name = site.url

      var link = `<a href="${site.url}" target="_blank">${site.name}</a>${extLinkIcon}`
      return this.wikiStr.format({ wikiLink: link })
    },
    guideLink() {
      var gStr = this.guideStr
      if (!this.frontmatter.jailbreak.info.guide) return []
      return this.frontmatter.jailbreak.info.guide.map(function (g) {
        if (!g || (!g.url && g.name)) return
        if (!g.url) return g.name
        if (!g.name) g.name = g.url

        var link = `<a href="${g.url}">${g.name}</a>`
        return gStr.format({ guideLink: link })
      })
    },
    jbType() {
      const type = this.frontmatter.jailbreak.info.type
      if (!type) return
      else return this.typeStr.format({ type: type })
    },
    supportedFw() {
      const firmwares = this.frontmatter.jailbreak.info.firmwares
      if (!firmwares) return
      if (firmwares[0] == firmwares[1]) return this.supportedStrSingle.format({ ver: firmwares[0] })
      else return this.supportedStr.format({ ver0: firmwares[0], ver1: firmwares[1]})
    },
    infoData() {
      return [
        this.websiteLink,
        this.wikiLink,
        ...this.guideLink,
        this.jbType,
        this.supportedFw,
      ].filter(i => i)
    },
    getDeviceList() {
      const compat = this.frontmatter.jailbreak['compatibility']
      if (!compat) return

      var devList = []
      for (var i in compat) {
        for (var d in compat[i].devices) {
          const dev = compat[i].devices[d]
          var retg = json.groups.filter(g => g.devices.includes(dev))[0]
          if (!devList.includes(retg)) devList.push(retg)
        }
      }

      devList = devList.map(function (x) {
        const dev = x.devices
        if (!dev) return

        x.firmwares = dev.map(function(d) {
          var ret = []
          const fwList = compat.filter(function(c) {
            if (!c.hasOwnProperty('devices')) return false
            else return c.devices.includes(d)
          }).map(f => f.firmwares)
          for (var i in fwList) for (var f in fwList[i]) if (!ret.includes(fwList[i][f])) ret.push(fwList[i][f])

          return ret
        })

        var fwArr = []
        for (var i in x.firmwares) for (var f in x.firmwares[i]) if (!fwArr.includes(x.firmwares[i][f])) {
          const fw = json.ios.filter(b => b.build == x.firmwares[i][f])[0]
          if (!fw) continue
          if (fw.beta) continue
          if (fwArr.includes(fw)) continue
          fwArr.push(fw)
        }
        x.firmwares = fwArr
        return x
      })

      return devList
    },
    getCompat() {
      const compat = this.frontmatter.jailbreak.compatibility
      var devObj = {}
      this.getDeviceList.map(function(x) {
        for (var d in x.devices) {
          const dev = x.devices[d]
          devObj[dev] = {}
          for (var fw in x.firmwares) {
            const firmware = x.firmwares[fw].build
            for (var i in compat) {
              devObj[dev][firmware] = 0
              if (compat[i].firmwares.includes(firmware) && compat[i].devices.includes(dev)) {
                devObj[dev][firmware] = 1
                break
              }
            }
          }
        }
      })
      return devObj
    }
  }
}
</script>

<style>
.chevronPoint { 
  float: left;
  margin-left: -1.5em;
}

.chevron {
  padding-right: 0.23em;
  margin-top: 0.8em;
  font-size: 0.7em;
}

.showOnHover .hoverElement {
  opacity: 0;
  display: none !important;
}

.displayNone {
  display: none !important;
}

.showOnHover:hover .hoverElement {
  opacity: 0.3;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;
  display: inline !important;
}

.hoverElement:hover {
  opacity: 1 !important;
  display: inline !important;
}

input[type=checkbox]{
  position: absolute;
  left: -9999px;
  opacity: 0;
}

.clickToShow { display: none !important; }
.clickToHide { display: block !important; }
.clickToHideInline { display: inline !important; }
input:checked ~ .clickToHide { display: none !important; }
input:checked ~ .clickToShow { display: block !important; }
input:checked ~ .clickToShowInline { display: inline !important; }
</style>