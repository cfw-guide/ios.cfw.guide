<template>
  <h2 v-html="infoHeader" v-if="infoData.length > 0"/>
  <p>
    <div v-for="i in infoData" :key="i" v-html="i"/>
  </p>
  <h2 v-html="groupHeader" v-if="groupedDevices.length > 0"/>
  <ul>
    <li v-for="d in groupedDevices" :key="d">
      <a v-html="d.name" :href="devicePath + d.identifier + '.html'"/>
    </li>
  </ul>
  <template v-if="getFwArr.length > 0">
    <h2 v-html="tableHeader"/>
    <p><a v-html="(showBeta) ? hideBetaStr : showBetaStr" id="betaToggle" style="cursor: pointer;" v-on:click="showBeta = !showBeta"/></p>
    <table>
      <tr>
        <th v-html="versionStr"/>
        <th v-html="jailbreakStr"/>
      </tr>
      <template v-for="fw in getFwArr" :key="fw">
        <tr v-if="!fw.beta || (fw.beta && showBeta)">
          <td><a :href="firmwarePath + fw.uniqueBuild + '.html'">{{fw.osStr}} {{fw.version}} <span v-if="getFwArr.filter(x => x.version == fw.version && x.osStr == fw.osStr).length > 1">({{fw.build}})</span></a></td>
          <td v-if="fw.jailbreakArr.length > 0"><span v-for="(jb, index) in fw.jailbreakArr" :key="jb"><a :href="jailbreakPath + jb.name.replace(/ /g, '-') + '.html'" v-html="jb.name"/><span v-if="index+1 < fw.jailbreakArr.length">, </span></span></td>
          <td v-else v-html="noJbStr"/>
        </tr>
      </template>
    </table>
  </template>
</template>

<script>
import { usePageFrontmatter } from '@vuepress/client'
import json from '@temp/main'

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
      jailbreakPath: '/chart/jailbreak/',
      firmwarePath: '/chart/firmware/',
      timeLocale: 'en-US',

      infoHeader: 'Info',
      deviceStr: 'Device: ${dev}',
      identStr: 'Identifier: ${ident}',
      socStr: 'SoC: ${soc}',
      archStr: 'Arch: ${arch}',
      modelStr: 'Model: ${model}',

      relatedHeader: 'Related Devices',
      groupedHeader: 'Grouped Devices',

      tableHeader: 'Version Table',
      showBetaStr: 'Show Beta Versions',
      hideBetaStr: 'Hide Beta Versions',
      noJbStr: 'For fields marked "--", there is no jailbreak for that version.',

      buildStr: 'Build',
      versionStr: 'Version',
      jailbreakStr: 'Jailbreak',
      noJbStr: 'N/A',

      showBeta: false,
      frontmatter: usePageFrontmatter(),
      devices: json.device,
      firmwares: json.ios,
      jailbreaks: json.jailbreak,
    }
  },
  computed: {
    deviceName() {
      const deviceName = this.frontmatter.device.name
      if (!deviceName) return
      else return this.deviceStr.format({ dev: deviceName })
    },
    deviceIdentifier() {
      const deviceIdentifier = this.frontmatter.device.identifier
      if (!deviceIdentifier) return
      else return this.identStr.format({ ident: deviceIdentifier })
    },
    deviceSoc() {
      const deviceSoc = this.frontmatter.device.soc
      if (!deviceSoc) return
      else return this.socStr.format({ soc: deviceSoc })
    },
    deviceArch() {
      const deviceArch = this.frontmatter.device.arch
      if (!deviceArch) return
      else return this.archStr.format({ arch: deviceArch })
    },
    deviceModel() {
      const deviceModel = this.frontmatter.device.model
      if (!deviceModel) return
      else return this.modelStr.format({ model: deviceModel.join(', ') })
    },
    infoData() {
      if (!this.frontmatter.device && !this.frontmatter.group) return []
      return [
        this.deviceName,
        this.deviceIdentifier,
        this.deviceSoc,
        this.deviceArch,
        this.deviceModel,
      ].filter(i => i)
    },
    groupHeader() {
      if (this.frontmatter.group == null) return this.relatedHeader
      else return this.groupedHeader
    },
    groupedDevices() {
      var group
      // If frontmatter has group, use that group
      if (this.frontmatter.group) group = this.frontmatter.group
      // If frontmatter does not have group, grab group from list
      else if (this.frontmatter.device) group = json.groups.filter(x => x.devices.includes(this.frontmatter.device.identifier))[0]
      else return []

      // Check if group is valid
      if (!group) return
      if (!group.hasOwnProperty('devices')) return

      var devArr = group.devices
      if (devArr.length < 1) return
      // Remove current device from related devices
      if (this.frontmatter.group == null) devArr = devArr.filter(x => x != this.frontmatter.device.identifier)
      // Grab device data
      devArr = devArr.map(d => this.devices[d])
      return devArr
    },
    getFwArr() {
      var devArr
      var noDevice = false
      if (this.frontmatter.group) devArr = this.groupedDevices.map(x => x.identifier)
      else if (this.frontmatter.device) devArr = [this.frontmatter.device.identifier]
      else noDevice = true
      
      var fwArr

      if (noDevice) fwArr = this.firmwares
      else {
        fwArr = []
        for (var d in devArr) {
          var devFwArr = this.firmwares.filter(function(x) {
            if (!x.hasOwnProperty('devices')) return 0
            else return Object.keys(x.devices).includes(devArr[d])
          })
          devFwArr.map(function(x) { if (!fwArr.includes(x)) fwArr.push(x) })
        }
      }

      var jbList = this.jailbreaks
      for (var f in fwArr) {
        var jbArr = []
        const fw = fwArr[f]
        for (var jb in jbList) {
          if (!jbList[jb].hasOwnProperty('compatibility')) continue
          for (var c in jbList[jb].compatibility) {
            if (!jbList[jb].compatibility[c].firmwares.includes(fw.uniqueBuild)) continue
            if (!noDevice) if (!jbList[jb].compatibility[c].devices.some(r=> devArr[d].includes(r))) continue
            if (jbArr.includes(jbList[jb])) continue
            jbArr.push(jbList[jb])
          }
        }

        jbArr = jbArr.sort((a,b) => a.priority - b.priority)
        fwArr[f].jailbreakArr = jbArr
      }

      return fwArr.reverse()
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