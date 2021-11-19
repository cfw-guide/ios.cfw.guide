<template>
  <h2>Info</h2>
  <p>
    Version: {{ getFw(os).ver }}<br>
    Build Number: {{ getFw(os).build }}<br>
    Released: {{ getFw(os).released }}
  </p>
  <h2 v-if="getJailbreakList(os).length > 0">Jailbreaks</h2>
  <template v-for="i in getJailbreakList(os).length">
    <h3>{{ getJailbreakList(os)[i-1] }}</h3>
    <ul>
      <template v-for="d in getDevArr()[i-1]">
        <li><a :href="'/chart/device/' + d">{{ deviceList[d].name }}</a></li>
      </template>
    </ul>
  </template>
</template>

<script setup lang="ts">
const props = defineProps({
  os: { type: String, },
})

const deviceList = require('../json/deviceList');
const jbList = require('../json/jailbreak');
const iosVer = {"0": require('../json/ios/1'), "1": require('../json/ios/2'),"2": require('../json/ios/3'),"3": require('../json/ios/4'),"4": require('../json/ios/5'),"5": require('../json/ios/6'),"6": require('../json/ios/7'),"7": require('../json/ios/8'),"8": require('../json/ios/9'),"9": require('../json/ios/10'),"10": require('../json/ios/11'),"11": require('../json/ios/12'),"12": require('../json/ios/13'),"13": require('../json/ios/14'),"14": require('../json/ios/15'),};

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