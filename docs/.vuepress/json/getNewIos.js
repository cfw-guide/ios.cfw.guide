const fs = require('fs');
const request = require('request')
const deviceList = require('./deviceList')

var iosList;

async function getList() {
  var buildArr = [];
  var ret = [];
  for (const d in deviceList) {
    var r = await doRequest(`https://api.ipsw.me/v4/device/${d}`)
    r = JSON.parse(r)
    for (const i in r.firmwares) {
      const v = r.firmwares[i]
      
      const deviceObj = {
        "identifier": v.identifier,
        "ipsw": v.url
      }
      
      if (buildArr.includes(v.buildid)) {
        ret[buildArr.indexOf(v.buildid)].devices.push(deviceObj)
        continue;
      }
      
      const obj = {
        "ver": v.version,
        "build": v.buildid,
        "released": v.uploaddate.substring(0, 10),
    		"beta": false,
        "devices": [deviceObj],
      };
      
      ret.push(obj);
      buildArr.push(v.buildid)
    }
  }
  return ret;
}

function doRequest(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
};

function compare(a,b) {
  if (a.ver < b.ver) return -1;
  if (a.ver > b.ver) return 1;
  return 0;
}

async function main() {
  console.log('Fetching...')
  iosList = await getList()
  iosList.sort(compare)
  console.log('Writing...')
  fs.writeFile('./ver.json', JSON.stringify(iosList), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
  });
};

main()