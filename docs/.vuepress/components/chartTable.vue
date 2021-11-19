<template>
  <table>
    <colgroup>
      <col span="1" style="width: 15%;">
      <col span="1" style="width: 15%;">
      <col span="1" style="width: 70%;">
    </colgroup>
    <thead>
      <tr>
        <th>Version</th>
        <th>Build</th>
        <th>Jailbreak</th>
      </tr>
    </thead>
    <tbody>
        <template v-for="majFw in riosVer"><template v-for="midFw in majFw"><template v-for="minFw in midFw"><template v-for="v in minFw">
          <tr v-if="v.devices.includes(d) || showAll">
            <td v-text="v.ver"/>
            <td v-text="v.build"/>
            <td>
              <template v-for="tool in getTools(v, d)">
                <a v-if="tool.url" :href="tool.url" >{{ tool.name }}</a>
                <template v-if="!(tool.url)">{{ tool.name }}</template>
                <template v-if="tool != getTools(v, d)[getTools(v, d).length-1]">, </template>
              </template>
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

var showAll = false;
var d = page.value.path;
d = d.split('/')
d = d[d.length-1]
d = d.split('.')
d = d[d.length-2]
if (props.device != null) d = props.device;
if (props.device == 'all') showAll = true;

const deviceList = computed(() => require('./json/deviceList'));
const jbList = require('./json/jailbreak');
var iosVer = {"0": require('./json/ios/1'), "1": require('./json/ios/2'),"2": require('./json/ios/3'),"3": require('./json/ios/4'),"4": require('./json/ios/5'),"5": require('./json/ios/6'),"6": require('./json/ios/7'),"7": require('./json/ios/8'),"8": require('./json/ios/9'),"9": require('./json/ios/10'),"10": require('./json/ios/11'),"11": require('./json/ios/12'),"12": require('./json/ios/13'),"13": require('./json/ios/14'),"14": require('./json/ios/15'),};

function getTools(ver, device) {
  var toolArr = [];
  for (var tool in jbList) {
    for (var compatList in jbList[tool]) {
      if (jbList[tool][compatList].hasOwnProperty('firmwares') && jbList[tool][compatList].hasOwnProperty('devices')) {
        if (jbList[tool][compatList].firmwares.includes(ver.build) && (jbList[tool][compatList].devices.includes(device) || showAll)) {
          toolArr.push(jbList[tool]);
        }
      }
    }
  }
  return toolArr;
}

function reverseObj(obj) {
  var ret = {}
  const objCount = Object.keys(obj).length;
  for (var i = objCount - 1; i >= 0; i--) {
    ret[objCount-1-i] = obj[i];
  }
  return ret;
}

var riosVer = reverseObj(iosVer);
for (var a in riosVer) riosVer[a] = reverseObj(riosVer[a]);
for (var a in riosVer) for (var b in riosVer[a]) riosVer[a][b] = reverseObj(riosVer[a][b]);
for (var a in riosVer) for (var b in riosVer[a]) for (var c in riosVer[a][b]) riosVer[a][b][c] = reverseObj(riosVer[a][b][c]);

const props = defineProps({
  device: { type: String, },
})
</script>