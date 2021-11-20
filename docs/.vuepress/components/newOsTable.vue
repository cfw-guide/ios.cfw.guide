<template>
  <div v-html="exp()"/>
</template>

<script setup lang="ts">
const header = [
  'Info',
  'Devices'
]

const infoHeader = [
  'Version',
  'Build',
  'Released'
]

const devicePath = '/chart/device/'

const iosList = require('../json/iosNew');
const deviceList = require('../json/deviceList');
const jbList = require('../json/jailbreak');

function getBuildInfo(b) {
  b = getBuild(b)
  return `
  <h2>` + header[0] + `</h2>
  <p>` + infoHeader[0] + `: ` + b.ver + `
  <br>` + infoHeader[1] + `: ` + b.build + `
  <br>` + infoHeader[2] + `: ` + b.released + `</p>`
}

function getBuildDevices(b) {
  const d = getBuild(b).devices
  var html = '<h2>' + header[1] + '</h2><ul>'
  for (var i in d) {
    html += '<li><a href="' + devicePath + d[i] + '">' + deviceList[d[i]].name + '</a></li>'
  }
  html += '</ul>'
  return html;
}

function getBuild(b) {
  for (var i in iosList)
    if (iosList[i].hasOwnProperty('build'))
      if (iosList[i].build == b)
        return iosList[i]
}
  
function exp() {
  return getBuildInfo(props.os) + getBuildDevices(props.os);
}

const props = defineProps({
  os: { type: String, }
})
</script>