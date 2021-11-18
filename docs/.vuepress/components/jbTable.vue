<template>
  <h2>Compatibility Listing</h2>
  <template v-for="compatList in fwLists">
    <h3>Devices</h3>
    <ul>
      <li v-for="device in compatList.devices">
        <a :href="device">
          <template v-if="deviceList.hasOwnProperty(device)">{{ deviceList[device].name }}</template>
          <template v-if="!deviceList.hasOwnProperty(device)">{{ device }}</template>
        </a>
      </li>
    </ul>
    <h3>Supported Firmwares</h3>
    <ul>
      <li v-for="fw in compatList.firmwares[0]">
        {{ getVer(fw).ver }} ({{ fw }})
      </li>
    </ul>
    
  </template>
  <!--template v-for="compatList in jbList[jb]">
    <template v-if="compatList.hasOwnProperty('firmwares') || compatList.hasOwnProperty('devices')">
      <h3>Devices</h3>
      <ul>
        <li v-for="device in compatList.devices">
          <a :href="device">
            <template v-if="deviceList.hasOwnProperty(device)">{{ deviceList[device].name }}</template>
            <template v-if="!deviceList.hasOwnProperty(device)">{{ device }}</template>
          </a>
        </li>
      </ul>
      <h3>Supported Firmwares</h3>
      <ul>
        <li v-for="fw in compatList.firmwares">
          {{ getVer(fw).ver }} ({{ fw }})
        </li>
      </ul>
    </template>
  </template>-->
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
const page = usePageData()

var jb = page.value.path;
jb = jb.split('/')
jb = jb[jb.length-1]
jb = jb.split('.')
jb = jb[jb.length-2]
if (props.jb != null) jb = props.jb;

const deviceList = computed(() => require('./json/deviceList'));
const jbList = require('./json/jailbreak');
const iosVer = {"0": require('./json/ios/1'), "1": require('./json/ios/2'),"2": require('./json/ios/3'),"3": require('./json/ios/4'),"4": require('./json/ios/5'),"5": require('./json/ios/6'),"6": require('./json/ios/7'),"7": require('./json/ios/8'),"8": require('./json/ios/9'),"9": require('./json/ios/10'),"10": require('./json/ios/11'),"11": require('./json/ios/12'),"12": require('./json/ios/13'),"13": require('./json/ios/14'),"14": require('./json/ios/15'),};

function getVer(b) {
  for (var majFw in iosVer) for (var midFw in iosVer[majFw]) for (var minFw in iosVer[majFw][midFw]) for (var build in iosVer[majFw][midFw][minFw])
    if (b == iosVer[majFw][midFw][minFw][build].build)
      return iosVer[majFw][midFw][minFw][build];
  return -1
}

var jbDeviceList = [];
for (var compatList in jbList[jb]) {
  if (jbList[jb][compatList].hasOwnProperty('devices')) {
    for (var i in jbList[jb][compatList].devices)
      if (!jbDeviceList.includes(jbList[jb][compatList].devices[i]))
        jbDeviceList.push(jbList[jb][compatList].devices[i])
  }
}

var fwLists = []
for (var d in jbDeviceList) getFwList(jbDeviceList[d]);

function getFwList(device) {
  var ret = [];
  for (var compatList in jbList[jb]) {
    if (!(jbList[jb][compatList].hasOwnProperty('firmwares') || jbList[jb][compatList].hasOwnProperty('devices'))) continue
    const fwArr = jbList[jb][compatList].firmwares;
    for (var i = 0; i < fwArr.length; i++) {
      if (getVer(fwArr[i]).devices.includes(device))
        if (!ret.includes(fwArr[i]))
          ret.push(fwArr[i])
    }
  }
  for (var i = 0; i < fwLists.length; i++) {
    var newArr = false;
    if (!(fwLists[i].hasOwnProperty('firmwares') || fwLists[i].hasOwnProperty('devices'))) continue
    for (var j in fwLists[i].firmwares[0]) {
      if (fwLists[i].firmwares[0][j] != ret[j]) {
        newArr = true;
        continue;
      }
    }
    if (!newArr) {
      fwLists[i].devices.push(device);
      return;
    }
  }
  const obj = {
    devices: [device],
    firmwares: [ret]
  }
  fwLists.push(obj)
  return fwLists
}

const props = defineProps({
  jb: { type: String, },
})

</script>