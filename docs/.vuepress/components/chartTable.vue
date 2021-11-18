<template>
  <h2 v-text="deviceList[device || d].name"/>
  <table>
    <tbody>
      <tr>
        <th>Version</th>
        <th>Build</th>
        <th>Released</th>
      </tr>
        <template v-for="majFw in iosVer"><template v-for="midFw in majFw"><template v-for="minFw in midFw"><template v-for="v in minFw">
          <tr v-if="v.devices.includes(device || d)">
            <td v-text="v.ver"/>
            <td v-text="v.build"/>
            <td v-text="v.released"/>
          </tr>
        </template></template></template></template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
const page = usePageData()

var d = page.value.path;
d = d.split('/')
d = d[d.length-1]
d = d.split('.')
d = d[d.length-2]

const deviceList = computed(() => require('./json/deviceList'));
const iosVer = computed(() => { return {"0": require('./json/ios/1'), "1": require('./json/ios/2'),"2": require('./json/ios/3'),"3": require('./json/ios/4'),"4": require('./json/ios/5'),"5": require('./json/ios/6'),"6": require('./json/ios/7'),"7": require('./json/ios/8'),"8": require('./json/ios/9'),"9": require('./json/ios/10'),"10": require('./json/ios/11'),"11": require('./json/ios/12'),"12": require('./json/ios/13'),"13": require('./json/ios/14'),"14": require('./json/ios/15'),}});

const props = defineProps({
  device: {
    type: String,
    required: true,
  },
})
</script>