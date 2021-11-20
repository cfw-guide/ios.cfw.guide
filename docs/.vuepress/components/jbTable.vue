<template>
  <template v-if="jbList[jb].info">
    <h2>Info</h2>
    <p><template v-for="info in jbList[jb].info">{{ info.name }}: <a v-if="info.url" :href="info.url" :target="(info.external) ? '_blank' : '_self'">{{ info.value }}</a><template v-if="!info.url">{{ info.value }}</template><svg v-if="info.external" class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><br></template></p>
  </template>
  <h2>Compatibility Listing</h2>
  <template v-for="compatList in fwLists">
    <h3>Devices</h3>
    <ul>
      <li v-for="device in compatList.devices">
        <a :href="'/chart/device/' + device">
          <template v-if="deviceList.hasOwnProperty(device)">{{ deviceList[device].name }}</template>
          <template v-if="!deviceList.hasOwnProperty(device)">{{ device }}</template>
        </a>
      </li>
    </ul>
    <h3>Supported Firmwares</h3>
    <ul>
      <li v-for="fw in compatList.firmwares[0]">
        {{ getVer(fw).ver }} (<a :href="'/chart/firmware/' + fw">{{ fw }}</a>)
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

const deviceList = computed(() => require('../json/deviceList'));
const jbList = require('../json/jailbreak');
const iosVer = require('../json/ios');

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
for (var d in jbDeviceList) {
  var exclList = [
    'iPad7,11',
    'iPad7,12',
    'iPad8,9',
    'iPad8,10',
    'iPad8,11',
    'iPad8,12',
    'iPad11,1',
    'iPad11,2',
    'iPad11,3',
    'iPad11,4'
  ]
  //if (exclList.includes(jbDeviceList[d])) continue;
  getFwList(jbDeviceList[d]);
}

function getFwList(device) {
  var ret = [];
  for (var compatList in jbList[jb]) {
    if (!(jbList[jb][compatList].hasOwnProperty('firmwares') || jbList[jb][compatList].hasOwnProperty('devices'))) continue
    const fwArr = jbList[jb][compatList].firmwares;
    for (var i = 0; i < fwArr.length; i++) {
      if (getVer(fwArr[i]).devices.includes(device) && jbList[jb][compatList].devices.includes(device))
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
  if (ret == 0) return;
  const obj = {
    devices: [device],
    firmwares: [ret]
  }
  fwLists.push(obj)
}

const props = defineProps({
  jb: { type: String, },
})

</script>