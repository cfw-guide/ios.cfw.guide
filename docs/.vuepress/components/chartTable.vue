<template>
  <div v-html="getAllTables"/>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import deviceList from './json/deviceList.json';
import ios1 from './json/ios/1';
import ios2 from './json/ios/2';
import ios3 from './json/ios/3';
import ios4 from './json/ios/4';
import ios5 from './json/ios/5';
import ios6 from './json/ios/6';
import ios7 from './json/ios/7';
import ios8 from './json/ios/8';
import ios9 from './json/ios/9';
import ios10 from './json/ios/10';
import ios11 from './json/ios/11';
import ios12 from './json/ios/12';
import ios13 from './json/ios/13';
import ios14 from './json/ios/14';
import ios15 from './json/ios/15';

const iosVer = { "0": ios1, "1": ios2, "2": ios3, "3": ios4, "4": ios5, "5": ios6, "6": ios7, "7": ios8, "8": ios9, "9": ios10, "10": ios11, "11": ios12, "12": ios13, "13": ios14, "14": ios15, };

const props = defineProps({
  device: {
    type: String,
    required: true,
  }
});

function getTable(device) {
  var fwArr = [];
  for (var i = 0; i < getFw('length', device); i++) fwArr.push(getFw(i, device));
  if (fwArr.length < 1) return -1;
  
  var headers = ['Version', 'Build', 'Released'];
  
  var html = '<table><tbody>';
  html += '<tr>';
  for (var i = 0; i < headers.length; i++) {
    html += '<th>' + headers[i] + '</th>';
  }
  html += '</tr>';
  for (var i = 0; i < fwArr.length; i++) {
    html += '<tr>';
    html += '<td>' + fwArr[i].ver + '</td>'
    html += '<td>' + fwArr[i].build + '</td>'
    html += '<td>' + fwArr[i].released + '</td>'
    html += '</tr>'
  }
  html += '</tbody></table>';
  
  return html;
};

const getAllTables = computed(() => {
  var tableArr = [];
  for (var deviceType in deviceList) {
    for (var device in deviceList[deviceType]) {
      if (getTable(deviceList[deviceType][device]) != '-1')
        tableArr.push('<h2>' + deviceList[deviceType][device] + '</h2>' + getTable(deviceList[deviceType][device]));
    }
  }
  var html = '';
  for (var table in tableArr) {
    html += tableArr[table];
  }
  return html;
});

function getFw(i, device) {
  var fwArr = [];
  for (var majFw in iosVer) {
    for (var midFw in iosVer[majFw]) {
      for (var minFw in iosVer[majFw][midFw]) {
        for (var build in iosVer[majFw][midFw][minFw]) {
          if (iosVer[majFw][midFw][minFw][build].devices.includes(device)) {
            var fwObj = {
              ver: iosVer[majFw][midFw][minFw][build].ver,
              build: iosVer[majFw][midFw][minFw][build].build,
              released: iosVer[majFw][midFw][minFw][build].released
            };
            fwArr.push(fwObj);
          }
        }
      }
    }
  }
  if (i == 'length') return fwArr.length;
  return fwArr[i];
};

</script>