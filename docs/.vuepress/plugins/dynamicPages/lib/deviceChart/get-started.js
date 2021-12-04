const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const deviceGroups = require('../../../../json/deviceGroups');
const jbList = require('../../../../json/jailbreak');

const findVersionHeader = [
  'Finding your iOS version',
  'Finding your iPadOS version',
]

const header = {
  required: 'Required Reading',
  table: 'Version Table',
  findver: findVersionHeader,
}

function requiredReading(deviceType, minFw, maxFw) {
  var osStr = 'iOS'
  
  if ((deviceType == 'iPad' || deviceType == 'mini' || deviceType == 'Air' || deviceType == 'Pro') && (parseInt(minFw.split('.')[0]) > 12))
    osStr = 'iPadOS'
  
  var ret = [];
  
  ret.push(`Different firmware versions will require different steps to jailbreak your ${osStr} device. This page will help you find where to start.`);
  ret.push(`Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from ${minFw} to ${maxFw}" row includes version ${minFw}, version ${maxFw}, and all versions in-between.`);
  ret.push('Your device version can be found in the Settings application in `General` -> `About`.');
  ret.push('');
  
  return ret.join('\n\n')
}

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  const retArr = [
    {
      title: header.required,
      content: requiredReading(deviceList[device].type, '15.1', '15.1.1'),
    },
    {
      title: header.table,
      content: require('./getTable')(device, showAll, maxDisplayed, simplifyTable, groupTable),
    },
  ]
  
  var ret = '';
  
  for (const i in retArr) if (retArr[i].content.length > 1) ret += `## ${retArr[i].title} \n${retArr[i].content}`
  
  return ret;
}