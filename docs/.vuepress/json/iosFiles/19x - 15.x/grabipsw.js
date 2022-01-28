var request = require('request')

const version = require(process.argv[2])
const build = version.build

Object.keys(version.devices).map(function(x) {
  var url
  if (version.beta) url = `https://api.m1sta.xyz/betas/${x}`
  else url = `https://api.ipsw.me/v4/ipsw/${x}/${build}`

  request(url, function (error, response, body) {
    if (version.beta) response = JSON.parse(body).filter(x => x.buildid == build)[0]
    else response = JSON.parse(body)

    if (response) response = response.url
    else response = "none"
    
    console.log(`"${x}": {\n  "ipsw": "${response}"\n},`)
  })
})