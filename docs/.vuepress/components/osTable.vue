<template>
  <!--<template v-if="getFw(os)">
    <h2>Info</h2>
    <p>
      <template v-if="getFw(os).hasOwnProperty('ver')">Version: {{ getFw(os).ver }}<br></template>
      <template v-if="getFw(os).hasOwnProperty('build')">Build: {{ getFw(os).build }}<br></template>
      <template v-if="getFw(os).hasOwnProperty('released')">Released: {{ getFw(os).released }}</template>
    </p>
    <p v-if="getFw(os).hasOwnProperty('info')">
      <template v-for="info in getFw(os).info">
        {{ info.name }}: {{ info.value }}<br v-if="getFw(os).info.length > 1">
      </template>
    </p>
  </template>-->
  <!--<h2 v-if="getDeviceList(os).length > 0">Devices</h2>
  <ul>
    <li v-for="d in getDeviceList(os)"><a :href="'/chart/device/' + d">{{ deviceList[d].name }}</a></li>
  </ul>
  <h2 v-if="getJailbreakList(os).length > 0">Jailbreaks</h2>
  <template v-for="i in getJailbreakList(os).length">
    <h3>{{ getJailbreakList(os)[i-1] }}</h3>
    <ul>
      <template v-for="d in getDevArr()[i-1]">
        <li><a :href="'/chart/device/' + d">{{ deviceList[d].name }}</a></li>
      </template>
    </ul>
  </template>-->
</template>

<script setup lang="ts">
const props = defineProps({
  os: { type: String, },
})

const deviceList = require('../json/deviceList');
const jbList = require('../json/jailbreak');
const iosVer = require('../json/ios');

function getDeviceList(b) {
  const fw = getFw(b)
  if (fw.hasOwnProperty('devices'))
    return fw.devices
}

function getFw(b) {
  for (var majFw in iosVer)
    for (var midFw in iosVer[majFw])
      for (var minFw in iosVer[majFw][midFw])
        for (var build in iosVer[majFw][midFw][minFw])
          if (iosVer[majFw][midFw][minFw][build].hasOwnProperty('build'))
            if (b == iosVer[majFw][midFw][minFw][build].build)
              return iosVer[majFw][midFw][minFw][build];
}

function getJailbreakList(b) {
  var ret = []
  for (var jb in jbList)
    for (var compatList in jbList[jb])
      if (jbList[jb][compatList].hasOwnProperty('firmwares'))
        if (jbList[jb][compatList].firmwares.includes(b))
          if (!ret.includes(jb))
            ret.push(jb)
  return ret;
}

function isDevSupport(dev, jb) {
  for (var compatList in jbList[jb])
    if (jbList[jb][compatList].hasOwnProperty('firmwares'))
      if (jbList[jb][compatList].firmwares.includes(props.os))
        if (jbList[jb][compatList].hasOwnProperty('devices')){
          if (jbList[jb][compatList].devices.includes(dev))
            return true}
  return false;
}

function getDevArr() {
  const devArr = getDeviceList(props.os);
  const jbArr = getJailbreakList(props.os);
  var ret = [];
  for (var jb in jbArr) {
    var jbDevArr = [];
    for (var d in devArr) {
      if (isDevSupport(devArr[d], jbArr[jb])) {
        jbDevArr.push(devArr[d]);
      }
    }
    ret.push(jbDevArr);
  }
  return ret;
}
</script>