const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'

function openStr(os) {
  return `There are multiple builds for firmware version ${os}. Please select the build that you want to view below.\n\n`
}

function getHtml(os) {
  var html = '';
  const buildArr = getBuildArr(os);
  for (const i in buildArr) {
    const b = buildArr[i];
    html += '## ' + b.build + " [<i style=\"font-size: 21px\" class=\"fas fa-link\"></i>](" + fwPath + b.build + ")\n";
    for (const d in b.devices) html += `- [${deviceList[b.devices[d]].name}](${devicePath + b.devices[d]})\n`
  }
  return html;
}

function getBuildArr(os) {
  var retArr = [];
  for (var i in iosList) {
    const b = iosList[i];
    if (!b.hasOwnProperty('ver')) continue;
    if (b.ver == os) retArr.push(b)
  }
  return retArr;
}

module.exports = function(os) {
  return openStr(os) + getHtml(os)
}