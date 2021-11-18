<template>
  <table>
    <colgroup>
      <col span="1" style="width: 20%;">
      <col span="1" style="width: 20%;">
      <col span="1" style="width: 60%;">
    </colgroup>
    <thead>
      <tr>
        <th>Version</th>
        <th>Build</th>
        <th>Jailbreak</th>
      </tr>
    </thead>
    <tbody>
        <template v-for="majFw in iosVer"><template v-for="midFw in majFw"><template v-for="minFw in midFw"><template v-for="v in minFw">
          <tr v-if="v.devices.includes(d)">
            <td v-text="v.ver"/>
            <td v-text="v.build"/>
            <!--<td v-text="getJailbreak(v.build, device || d)"/>-->
            <td>
              <template v-for="tool in jbList"><template v-for="compat in tool"><template v-if="compat.hasOwnProperty('firmwares') && compat.hasOwnProperty('devices')"><template v-if="compat.firmwares.includes(v.build) && compat.devices.includes(d)">
                <a v-if="tool.guideLink || tool.toolLink" :target="(tool.guideLink) ? '_self': '_blank'" :href="tool.guideLink || tool.toolLink" v-text="tool.guideName || tool.toolName"/>
                <template v-if="!(tool.guideLink || tool.toolLink)">{{ tool.guideName || tool.toolName }}</template>
                <svg v-if="(!tool.guideLink)" class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
                <br>
              </template></template></template></template>
            </td>
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
if (props.device != null) d = props.device;

const deviceList = computed(() => require('./json/deviceList'));
const jbList = computed(() => require('./json/jailbreak'));
const iosVer = computed(() => { return {"0": require('./json/ios/1'), "1": require('./json/ios/2'),"2": require('./json/ios/3'),"3": require('./json/ios/4'),"4": require('./json/ios/5'),"5": require('./json/ios/6'),"6": require('./json/ios/7'),"7": require('./json/ios/8'),"8": require('./json/ios/9'),"9": require('./json/ios/10'),"10": require('./json/ios/11'),"11": require('./json/ios/12'),"12": require('./json/ios/13'),"13": require('./json/ios/14'),"14": require('./json/ios/15'),}});

const props = defineProps({
  device: { type: String, },
})
</script>