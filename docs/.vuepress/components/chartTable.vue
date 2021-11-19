<template>
  <p v-if="device != 'all'">
    <template v-if="deviceList[device].hasOwnProperty('name')">Device: {{ deviceList[device].name }}</template>
    <br v-if="deviceList[device].hasOwnProperty('name')">Identifier: {{ device }}
    <template v-if="deviceList[device].hasOwnProperty('soc')"><br>SoC: {{ deviceList[device].soc }}</template>
    <template v-if="deviceList[device].hasOwnProperty('arch')"><br>Architecture: {{ deviceList[device].arch }}</template>
    <template v-if="deviceList[device].hasOwnProperty('model')"><br>Model<template v-if="deviceList[device].model.length > 1">s</template>: <template v-for="i in deviceList[device].model.length">{{ deviceList[device].model[i-1] }}<template v-if="i != deviceList[device].model.length">, </template></template></template>
    <template v-if="deviceList[device].hasOwnProperty('released')"><br>Released: {{ deviceList[device].released }}</template>
    <template v-if="deviceList[device].hasOwnProperty('discontinued')"><br>Discontinued: {{ deviceList[device].discontinued }}</template>
  </p>
  <table>
    <colgroup>
      <col span="1" style="width: 15%;">
      <col span="1" style="width: 15%;">
      <col span="1" style="width: 70%;">
    </colgroup>
    <thead>
      <tr>
        <th>Build</th>
        <th>Version</th>
        <th>Jailbreak</th>
      </tr>
    </thead>
    <tbody>
        <template v-for="majFw in riosVer">
          <!--<tr v-if="majFw != riosVer[0]">
            <th colspan="3">
              iOS {{ majFw[0][0][0].ver.split('.')[0] }}
            </th>
          </tr>-->
          <template v-for="midFw in majFw"><template v-for="minFw in midFw"><template v-for="v in minFw">
          <tr v-if="v.devices.includes(d) || showAll">
            <td><a :href="'/chart/firmware/' + v.build">{{ v.build }}</a></td>
            <td v-text="v.ver"/>
            <td>
              <template v-for="tool in getTools(v, d)">
                <a :href="'/chart/jailbreak/' + tool.name + '.html'" >{{ tool.name }}</a>
                <template v-if="tool != getTools(v, d)[getTools(v, d).length-1]">, </template>
              </template>
            </td>
          </tr>
        </template></template></template>
      </template>
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

const deviceList = computed(() => require('../json/deviceList'));
const jbList = require('../json/jailbreak');
var iosVer = {"0": require('../json/ios/1'), "1": require('../json/ios/2'),"2": require('../json/ios/3'),"3": require('../json/ios/4'),"4": require('../json/ios/5'),"5": require('../json/ios/6'),"6": require('../json/ios/7'),"7": require('../json/ios/8'),"8": require('../json/ios/9'),"9": require('../json/ios/10'),"10": require('../json/ios/11'),"11": require('../json/ios/12'),"12": require('../json/ios/13'),"13": require('../json/ios/14'),"14": require('../json/ios/15'),};

function getTools(ver, device) {
  var toolArr = [];
  for (var tool in jbList)
    for (var compatList in jbList[tool])
      if (jbList[tool][compatList].hasOwnProperty('firmwares') && jbList[tool][compatList].hasOwnProperty('devices'))
        if (jbList[tool][compatList].firmwares.includes(ver.build) && (jbList[tool][compatList].devices.includes(device) || showAll))
          if (!toolArr.includes(jbList[tool]))
            toolArr.push(jbList[tool]);
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