<template>
  <template v-if="Object.keys(frontmatter.device).length != Object.keys(devices).length">
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
  </template>
  <input type="text" v-model="reverseSorting" style="display:none;">
  <template v-if="getFwArr.length > 0">
    <h2 v-html="tableHeader"/>
    <ul class="tableOptionsWrapper">
      <li class="showOnHover">
        <div class="chartDropdown">
          <i class="fas fa-filter"></i>
          {{ filterStr }}
          <span class="arrow down"></span>
        </div>
        <div class="hoverElement chartDropdownBox opaqueHover">
          <ul>
            <li class="dropdown-item" style="padding: 0em 1em">
              <input type="checkbox" v-model="showBuildNum" id="showBuildNumCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
              <label for="showBuildNumCheckbox">{{ showBuildNumStr }}</label>
            </li>
            <li class="dropdown-item" style="padding: 0em 1em">
              <input type="checkbox" v-model="showVersion" id="showVersionCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
              <label for="showVersionCheckbox">{{ showVersionStr }}</label>
            </li>
            <li class="dropdown-item" style="padding: 0em 1em">
              <input type="checkbox" v-model="showJailbreak" id="showJailbreakCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
              <label for="showJailbreakCheckbox">{{ showJailbreakStr }}</label>
            </li>
            <li class="dropdown-item" style="padding: 0em 1em">
              <input type="checkbox" v-model="showReleaseDate" id="showReleaseDateCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
              <label for="showReleaseDateCheckbox">{{ showReleaseDateStr }}</label>
            </li>
            <hr v-if="getFwArr.filter(x => x.beta).length > 1 || Object.keys(frontmatter.device).length == Object.keys(devices).length">
            <template v-if="getFwArr.filter(x => x.beta).length > 1">
              <li class="dropdown-item" style="padding: 0em 1em">
                <input type="checkbox" v-model="showBeta" id="showBetaCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
                <label for="showBetaCheckbox">{{ showBetaStr }}</label>
              </li>
              <li class="dropdown-item" style="padding: 0em 1em">
                <input type="checkbox" v-model="showStable" id="showStableCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
                <label for="showStableCheckbox">{{ showStableStr }}</label>
              </li>
            </template>
            <template v-if="Object.keys(frontmatter.device).length == Object.keys(devices).length">
              <li class="dropdown-item" style="padding: 0em 1em">
                <input type="checkbox" v-model="showiOS" id="showiOSCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
                <label for="showiOSCheckbox">{{ showiOSStr }}</label>
              </li>
              <li class="dropdown-item" style="padding: 0em 1em">
                <input type="checkbox" v-model="showtvOS" id="showtvOSCheckbox" style="position: static; left: 0px; opacity: 1; margin-right: .5em;">
                <label for="showtvOSCheckbox">{{ showtvOSStr }}</label>
              </li>
            </template>
          </ul>
        </div>
      </li>
      <li>
        <div class="chartDropdown">
          <button v-on:click="reverseSorting = !reverseSorting">
            <i class="fas fa-sort"></i>
            {{ sortStr }}
          </button>
        </div>
      </li>
    </ul>
    <table>
      <tr>
        <th v-html="buildStr" v-if="showBuildNum"/>
        <th v-html="versionStr" v-if="showVersion"/>
        <th v-html="jailbreakStr" v-if="showJailbreak"/>
        <th v-html="releaseDateStr" v-if="showReleaseDate"/>
      </tr>
      <template v-for="fw in fwArr" :key="fw">
        <tr v-if="(
          (
            (fw.istvOS && showtvOS) ||
            (!fw.istvOS && showiOS)
          ) && (
            (fw.beta && showBeta) ||
            (!fw.beta && showStable)
          )
        )">
          <td v-if="showBuildNum"><a :href="firmwarePath + fw.uniqueBuild + '.html'">{{fw.build}}</a></td>

          <template v-if="showVersion">
            <td v-if="!showBuildNum"><a :href="firmwarePath + fw.uniqueBuild + '.html'">{{fw.osStr}} {{fw.version}} <span v-if="getFwArr.filter(x => x.version == fw.version && x.osStr == fw.osStr).length > 1">({{fw.build}})</span></a></td>
            <td v-else>{{fw.osStr}} {{fw.version}}</td>
          </template>
          
          <template v-if="showJailbreak">
            <td v-if="fw.jailbreakArr.length > 0"><span v-for="(jb, index) in fw.jailbreakArr" :key="jb"><a :href="jailbreakPath + jb.name.replace(/ /g, '-') + '.html'" v-html="jb.name"/><span v-if="index+1 < fw.jailbreakArr.length">, </span></span></td>
            <td v-else v-html="noJbStr"/>
          </template>
          
          <td v-if="showReleaseDate">{{fw.released}}</td>
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

function removeNullAndDuplicatesAndSort(r) {
  r = r.filter(x => x)
  r = [...new Set(r)]
  r = r.sort((a,b) => a - b)
  return r
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

      showBetaStr: 'Show beta versions',
      showStableStr: 'Show stable versions',
      showiOSStr: 'Show iOS versions',
      showtvOSStr: 'Show tvOS versions',

      showBuildNumStr: 'Show build numbers',
      showVersionStr: 'Show version numbers',
      showJailbreakStr: 'Show jailbreaks',
      showReleaseDateStr: 'Show release date',

      buildStr: 'Build',
      versionStr: 'Version',
      jailbreakStr: 'Jailbreak',
      releaseDateStr: 'Released',
      noJbStr: 'N/A',

      filterStr: 'Filter',
      sortStr: 'Sort',

      showBeta: false,
      showStable: true,
      showtvOS: true,
      showiOS: true,

      showBuildNum: false,
      showVersion: true,
      showJailbreak: true,
      showReleaseDate: false,

      reverseSorting: true,
      fwArr: undefined,

      frontmatter: usePageFrontmatter(),
      devices: json.device,
      firmwares: json.ios,
      jailbreaks: json.jailbreak,
    }
  },
  computed: {
    deviceName() {
      const fm = this.frontmatter
      if (fm.name) return this.deviceStr.format({ dev: fm.name })

      var deviceList = fm.device
      if (!deviceList) return
      deviceList = deviceList.map(x => this.devices[x])

      const deviceNameArr = removeNullAndDuplicatesAndSort(deviceList.map(x => x.name))
      if (deviceNameArr.length > 0) return this.deviceStr.format({ dev: deviceNameArr.join(', ') })
    },
    deviceIdentifier() {
      const fm = this.frontmatter
      var deviceList = fm.device
      if (!deviceList) return
      deviceList = deviceList.map(x => this.devices[x])
      
      const deviceIdentifierArr = removeNullAndDuplicatesAndSort(deviceList.map(x => x.identifier))
      if (deviceIdentifierArr.length > 0) return this.identStr.format({ ident: deviceIdentifierArr.join(', ') })
    },
    deviceSoc() {
      const fm = this.frontmatter
      var deviceList = fm.device
      if (!deviceList) return
      deviceList = deviceList.map(x => this.devices[x])
      
      const deviceSocArr = removeNullAndDuplicatesAndSort(deviceList.map(x => x.soc))
      if (deviceSocArr.length > 0) return this.socStr.format({ soc: deviceSocArr.join(', ')})
    },
    deviceArch() {
      const fm = this.frontmatter
      var deviceList = fm.device
      if (!deviceList) return
      deviceList = deviceList.map(x => this.devices[x])
      
      const deviceArchArr = removeNullAndDuplicatesAndSort(deviceList.map(x => x.arch))
      if (deviceArchArr.length > 0) return this.archStr.format({ arch: deviceArchArr.join(', ')})
    },
    deviceModel() {
      const fm = this.frontmatter
      var deviceList = fm.device
      if (!deviceList) return
      deviceList = deviceList.map(x => this.devices[x])
      
      const deviceModelArr = removeNullAndDuplicatesAndSort(deviceList.map(x => x.model.join(', ')))
      if (deviceModelArr.length > 0) return this.modelStr.format({ model: deviceModelArr.join(', ') })
    },
    infoData() {
      const fm = this.frontmatter
      if (!fm.device && !fm.group) return []
      return [
        this.deviceName,
        this.deviceIdentifier,
        this.deviceSoc,
        this.deviceArch,
        this.deviceModel,
      ].filter(i => i)
    },
    groupHeader() {
      const fm = this.frontmatter
      if (fm.device.length == 1) return this.relatedHeader
      else return this.groupedHeader
    },
    groupedDevices() {
      const fm = this.frontmatter
      var group = []
      if (fm.device.length < 1) return
      else if (fm.device.length == 1) group = json.groups.filter(x => x.devices.includes(fm.device[0]))[0]
      else group = { "devices": [...fm.device] }

      // Check if group is valid
      if (!group) return
      if (!group.hasOwnProperty('devices')) return

      var devArr = group.devices
      if (devArr.length < 1) return
      // Remove current device from related devices
      if (fm.device.length == 1) devArr = devArr.filter(x => x != fm.device[0])
      // Grab device data
      devArr = devArr.map(d => this.devices[d])
      return devArr
    },
    getFwArr() {
      const fm = this.frontmatter
      var devArr = fm.device

      var fwArr = []
      for (var d in devArr) {
        var devFwArr = this.firmwares.filter(function(x) {
          if (!x.hasOwnProperty('devices')) return 0
          else return Object.keys(x.devices).includes(devArr[d])
        })
        devFwArr.map(function(x) { if (!fwArr.includes(x)) fwArr.push(x) })
      }

      if (devArr.length == Object.keys(this.devices).length) fwArr = this.firmwares

      var jbList = this.jailbreaks
      for (var f in fwArr) {
        var jbArr = []
        const fw = fwArr[f]
        for (var jb in jbList) {
          if (!jbList[jb].hasOwnProperty('compatibility')) continue
          for (var c in jbList[jb].compatibility) {
            if (!jbList[jb].compatibility[c].firmwares.includes(fw.uniqueBuild)) continue
            if (jbArr.includes(jbList[jb])) continue
            jbArr.push(jbList[jb])
          }
        }

        jbArr = jbArr.sort((a,b) => a.priority - b.priority)
        fwArr[f].jailbreakArr = jbArr
      }

      fwArr = fwArr.map(function(x) {
        x.istvOS = (x.osStr == 'tvOS' || x.osStr == 'Apple TV Software')
        return x
      })

      function versionCompare(v1, v2, options) {
        var lexicographical = options && options.lexicographical,
            zeroExtend = options && options.zeroExtend,
            v1parts = v1.split('.'),
            v2parts = v2.split('.')

        function isValidPart(x) {
          return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x)
        }

        if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) return NaN

        if (zeroExtend) {
          while (v1parts.length < v2parts.length) v1parts.push("0");
          while (v2parts.length < v1parts.length) v2parts.push("0");
        }

        if (!lexicographical) {
          v1parts = v1parts.map(Number);
          v2parts = v2parts.map(Number);
        }

        for (var i = 0; i < v1parts.length; ++i) {
          if (v2parts.length == i) return 1
          if (v1parts[i] == v2parts[i]) continue
          else if (v1parts[i] > v2parts[i]) return 1
          else return -1
        }

        if (v1parts.length != v2parts.length) return -1
        return 0;
      }

      fwArr = fwArr.sort(function(a,b) {
        function getVerStr(x) { return x.version.split(' ')[0] }
        const compVerStr = versionCompare(getVerStr(a), getVerStr(b))
        if (compVerStr != 0) return compVerStr
        else {
          const verInclGM   = [a.version.includes('GM'), b.version.includes('GM')]
          const verInclBeta = [a.version.includes('beta'), b.version.includes('beta')]
          const verInclRC   = [a.version.includes('RC'), b.version.includes('RC')]
          const beta        = [a.beta, b.beta]
          
          if (beta[1] - beta[0] != 0) return beta[1] - beta[0]
          else if (verInclRC[0] - verInclRC[1] != 0) return verInclRC[0] - verInclRC[1]
          else if (verInclGM[0] - verInclGM[1] != 0) return verInclGM[0] - verInclGM[1]
          else if (verInclBeta[0] - verInclBeta[1] != 0) return verInclBeta[0] - verInclBeta[1]
        }
        return 0
      })

      return fwArr
    }
  },
  watch: {
    reverseSorting: function (bool) {
      const fw = this.getFwArr
      this.fwArr = fw.reverse()
    },
    fwArr: function (val) {
      this.result = val
    }
  },
  created() {
    this.fwArr = this.getFwArr
    if (this.reverseSorting) this.fwArr = this.fwArr.reverse()
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

.showOnHover:hover .hoverElement {
  opacity: 0.3;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 100ms;
  display: inline !important;
}

.showOnHover:hover .opaqueHover {
  opacity: 1 !important;
}

.hoverElement:hover {
  opacity: 1 !important;
  display: inline !important;
}

.chartDropdown {
  font-size: 0.9rem;
  line-height: 1.4rem;
  font-weight: 500;
  cursor: pointer;
}

.chartDropdownBox {
  position: absolute;
  height: auto !important;
  box-sizing: border-box;
  background-color: var(--c-bg-navbar);
  border: 1px solid var(--c-border);
  border-bottom-color: var(--c-border-dark);
  text-align: left;
  border-radius: 0.25rem;
  white-space: nowrap;
  top: auto;
  padding: 1.5em 0.8em 1.5em 0em;
}

.chartDropdownBox li {
  list-style-type: none;
  float: none !important;
  margin: 0 !important;
}

.tableOptionsWrapper li {
  float: left;
  margin: 0.2em 1.3em 1em 0em;
}

.tableOptionsWrapper li {
  list-style-type: none;
}

.chartDropdown button {
  cursor: pointer;
  border: none;
  background-color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  padding: inherit;
}
</style>