const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

const findVersionHeader = [
  'Finding your iOS version',
  'Finding your iPadOS version',
]

const header = [
  'Required Reading',
  'Version Table',
  findVersionHeader,
]

const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const deviceGroups = require('../../../../json/deviceGroups');
const jbList = require('../../../../json/jailbreak');

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  return getDeviceInfo(device, groupTable) + getRelatedDevices(device, groupTable) + require('./getTable')(device, showAll, maxDisplayed, simplifyTable, groupTable);
}