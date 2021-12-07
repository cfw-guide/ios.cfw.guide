function getMajFw(fwStr) {
  return parseInt(fwStr.split('.')[0]);
}

function getDeviceType(deviceType) {
  if (deviceType == 'mini' || deviceType == 'Air' || deviceType == 'Pro') deviceType = 'iPad';
  return deviceType;
}

function getOsStr(deviceType, fwStr) {
  deviceType = getDeviceType(deviceType);
  fwStr = getMajFw(fwStr);
  
  var ret = 'iOS'
  if (deviceType == 'iPad' && fwStr > 12) ret = 'iPadOS'
  if (fwStr < 4) ret = 'iPhoneOS';
  return ret;
}

function getFindVersionHeader(deviceType, minFw) {
  return `Finding your ${getOsStr(deviceType, minFw)} version \n\n`;
}

const header = {
  required: 'Required Reading',
  table: 'Version Table',
}

function getRequiredReading(deviceType, minFw, maxFw) {
  var ret = [];
  
  ret.push(`Different firmware versions will require different steps to jailbreak your ${getOsStr(deviceType, minFw)} device. This page will help you find where to start.`);
  ret.push(`Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from ${minFw} to ${maxFw}" row includes version ${minFw}, version ${maxFw}, and all versions in-between.`);
  ret.push('Your device version can be found in the Settings application in `General` -> `About`.');
  ret.push('');
  
  return ret.join('\n\n')
}

function getFindVersion(deviceType, minFw) {
  var verStr = 'Software Version';
  var imgUrl = '/assets/images/find-version';
  if (getDeviceType(deviceType) == 'iPad') imgUrl += '-ipad';
  if (getMajFw(minFw) < 11) {
    verStr = 'Version';
    imgUrl += '-old';
  }
  imgUrl += '.jpg'
  
  var ret = [];
  
  ret.push('1. Open the Settings application');
  ret.push('2. Navigate to `General` -> `About` -> `' + verStr + '`');
  ret.push('::: tip');
  ret.push(`![Finding iOS version on an ${deviceType}](${imgUrl})`);
  ret.push(':::')
  ret.push('');
  
  return ret.join('\n');
}

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  const tableArr = require('./getTableArr')(device, showAll, maxDisplayed, simplifyTable, groupTable)[0];
  if (!tableArr.length) return '';
  var from = tableArr[0].from;
  var to = tableArr[0].to;
  
  for (const i in tableArr) {
    var obj = {
      from: tableArr[i].from.split('.'),
      to: tableArr[i].to.split('.'),
    };
    
    for (const j in obj) {
      for (const k in obj[j]) obj[j][k] = parseInt(obj[j][k]);
      if (obj[j].length == 2) obj[j].push(0)
    }
    
    if (obj.from[0] == obj.to[0]) {
      if (obj.from[1] == obj.to[1]) {
        if (obj.from[2] == obj.to[2]) continue;
        if (obj.from[2] - obj.to[2] == -1) continue;
      }
    }
    
    for (const j in obj) if (obj[j][2] == 0) obj[j].pop()
    
    from = obj.from.join('.');
    to = obj.to.join('.');
    
    break;
  }
  
  const retArr = [
    {
      title: header.required,
      content: getRequiredReading(deviceList[device].type, from, to),
    },
    {
      title: header.table,
      content: require('./getTable')(device, showAll, maxDisplayed, simplifyTable, groupTable),
    },
    {
      title: getFindVersionHeader(deviceList[device].type, from),
      content: getFindVersion(deviceList[device].type, from),
    },
  ]
  
  var ret = '';
  
  for (const i in retArr) if (retArr[i].content.length > 1) ret += `\n\n## ${retArr[i].title} \n${retArr[i].content}`
  
  return ret;
}