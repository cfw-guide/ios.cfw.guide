<template>
  <table>
    <thead>
    </thead>
    <tbody>
      <tr>
        <th>Version</th>
        <th>Build</th>
        <th>Devices</th>
      </tr>
        <template v-for="majFw in iosVer"><template v-for="midFw in majFw"><template v-for="minFw in midFw"><template v-for="v in minFw">
          <tr>
            <td v-text="v.ver"/>
            <td v-text="v.build"/>
            <td><template v-for="d in v.devices"><a :href="d">{{getDeviceName(d)}}<template v-if="v.devices.indexOf(d) < v.devices.length - 1">, </template></a></template></td>
          </tr>
        </template></template></template></template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageData } from '@vuepress/client'
const page = usePageData()

var d = page.value.path;
d = d.split('/')
d = d[d.length-1]
d = d.split('.')
d = d[d.length-2]

var deviceList = require('./json/deviceList');
const iosVer = computed(() => { return {"0": require('./json/ios/1'), "1": require('./json/ios/2'),"2": require('./json/ios/3'),"3": require('./json/ios/4'),"4": require('./json/ios/5'),"5": require('./json/ios/6'),"6": require('./json/ios/7'),"7": require('./json/ios/8'),"8": require('./json/ios/9'),"9": require('./json/ios/10'),"10": require('./json/ios/11'),"11": require('./json/ios/12'),"12": require('./json/ios/13'),"13": require('./json/ios/14'),"14": require('./json/ios/15'),}});

function getDeviceName(d) {
  if (deviceList.hasOwnProperty(d))
    return deviceList[d].name;
  return '-1';
}

const props = defineProps({
  device: { type: String, },
})
</script>