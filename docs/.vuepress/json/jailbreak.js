const fs = require('fs');
const curPath = './docs/.vuepress/json/'
const jbPath = './jailbreakFiles'
const jbFiles = fs.readdirSync(curPath + jbPath).filter(file => file.endsWith('.js'));
const jbArr = [];

for (const file in jbFiles) {
  const jb = require(`${jbPath}/${jbFiles[file]}`)
  jbArr.push(jb);
}

module.exports = jbArr;