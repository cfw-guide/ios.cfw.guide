<template>
  <h2>Compatibility Listing</h2>
  <template v-for="compatList in jbList[jb]">
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
          {{ getVerFromBuild(fw) }} ({{ fw }})
        </li>
      </ul>
    </template>
  </template>
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

function getVerFromBuild(b) {
  for (var majFw in iosVer) {
    for (var midFw in iosVer[majFw]) {
      for (var minFw in iosVer[majFw][midFw]) {
        for (var build in iosVer[majFw][midFw][minFw]) {
          if (b == iosVer[majFw][midFw][minFw][build].build) {
            return iosVer[majFw][midFw][minFw][build].ver;
          }
        }
      }
    }
  }
  return -1
}

const props = defineProps({
  jb: { type: String, },
})

</script>