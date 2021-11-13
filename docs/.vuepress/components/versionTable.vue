<template>
  <div v-html="getTable"/>
</template>

<script setup lang="ts">
import { computed } from 'vue'

var jailbreak = {
  chimera: {
    text: "Installing Chimera",
    url: "/installing-chimera/",
    0: {
      minVer: [12,0,0],
      maxVer: [12,1,2],
      include: [12],
    },
    1: {
      minVer: [12,0,0],
      maxVer: [12,5,5],
      include: [7,8,9,10,11],
    }
  },
  daibutsu: {
    text: "Installing Daibutsu",
    url: "/installing-daibutsu/",
    0: {
      minVer: [8,4,1],
      maxVer: [8,4,1],
      include: [5],
    }
  },
  doubleh3lix: {
    text: "Installing doubleh3lix",
    url: "/installing-doubleh3lix/",
    0: {
      minVer: [10,0,0],
      maxVer: [10,3,4],
      include: [7,8,9],
    }
  },
  electra: {
    text: "Installing Electra",
    url: "/installing-electra/",
    0: {
      minVer: [11,0,0],
      maxVer: [11,4,1],
      include: [7,8,9,10,11],
    }
  },
  etasonjb: {
    text: "Installing EtasonJB",
    url: "/installing-etasonjb/",
    0: {
      minVer: [8,4,1],
      maxVer: [8,4,1],
      include: [6],
    }
  },
  evasi0n7: {
    text: "Installing Evasi0n7",
    url: "/installing-evasi0n7/",
    0: {
      minVer: [7,0,0],
      maxVer: [7,0,6],
      include: [4,5,6,7]
    }
  },
  h3lix: {
    text: "Installing h3lix",
    url: "/installing-h3lix/",
    0: {
      minVer: [10,0,0],
      maxVer: [10,3,4],
      include: [6],
    }
  },
  homedepot: {
    text: "Installing HomeDepot",
    url: "/installing-homedepot/",
    0: {
      minVer: [9,1,0],
      maxVer: [9,3,4],
      include: [5,6],
    }
  },
  kok3shi: {
    text: "Installing Kok3shi",
    url: "/installing-kok3shi/",
    0: {
      minVer: [9,3,4],
      maxVer: [9,3,5],
      include: [7,8]
    }
  },
  meridian: {
    text: "Using Meridian",
    url: "/installing-meridian/",
    0: {
      minVer: [10,0,0],
      maxVer: [10,3,3],
      include: [10],
    }
  },
  odyssey: {
    text: "Installing Odyssey",
    url: "/installing-odyssey/",
    0: {
      minVer: [13,0,0],
      maxVer: [13,7,0],
      include: [8,9,10,11,12,13],
    }
  },
  odysseyrain: {
    text: "Odysseyra1n",
    url: "odysseyra1n/",
    0: {
      minVer: [14,4,0],
      maxVer: [14,8,1],
      include: [7,8,9,10,11],
    }
  },
  p0sixspwn: {
    text: "Installing p0sixspwn",
    url: "/installing-p0sixspwn/",
    0: {
      minVer: [6,1,3],
      maxVer: [6,1,6],
      include: [3,4,5,6],
    }
  },
  pangu7: {
    text: "Installing Pangu7",
    url: "/installing-pangu7/",
    0: {
      minVer: [7,1,0],
      maxVer: [7,1,2],
      include: [4,5,6,7],
    }
  },
  pangu933: {
    text: "Installing Pangu933",
    url: "/installing-pangu933/",
    0: {
      minVer: [9,2,0],
      maxVer: [9,3,3],
      include: [7,8,9],
    }
  },
  phoenix: {
    text: "Installing Phœnix",
    url: "/installing-phoenix/",
    0: {
      minVer: [9,3,5],
      maxVer: [9,3,6],
      include: [5,6],
    }
  },
  taurine: {
    text: "Installing Taurine",
    url: "/installing-taurine/",
    0: {
      minVer: [14,0,0],
      maxVer: [14,3,0],
      include: [9,10,11,12,13,14],
    }
  },
  unc0ver: {
    text: "Installing unc0ver",
    url: "/installing-unc0ver/",
    0: {
      minVer: [12,1,3],
      maxVer: [12,4,1],
      include: [12],
    }
  },
  pangu9: {
    text: "Pangu9",
    url: "http://en.9.pangu.io/",
    target: '_blank',
    icon: '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>',
    0: {
      minVer: [9,0,0],
      maxVer: [9,1,0],
      include: [7,8,9],
    }
  },
  evasi0n: {
    text: "evasi0n",
    url: "http://www.iphonehacks.com/download-evasi0n",
    target: '_blank',
    icon: '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>',
    0: {
      minVer: [6,0,0],
      maxVer: [6,1,2],
      include: [5,6],
    }
  },
  redsn0w: {
    text: "redsn0w",
    url: "https://ipsw.me/iPhoneDev",
    target: '_blank',
    icon: '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>',
    0: {
      minVer: [5,0,0],
      maxVer: [5,1,1],
      include: [5],
    }
  },
  taig: {
    text: "TaiG",
    url: "http://www.taig.com/en/",
    target: '_blank',
    icon: '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>',
    0: {
      minVer: [8,0,0],
      maxVer: [8,4,0],
      include: [5,6,7,8],
    }
  }
};

const version = [
  [0,0,0],
  
  [5,0,0],
  [5,0,1],
  [5,1,0],
  [5,1,1],
  
  [6,0,0],
  [6,0,1],
  [6,0,2],
  [6,1,0],
  [6,1,1],
  [6,1,2],
  [6,1,3],
  [6,1,4],
  [6,1,5],
  [6,1,6],
  
  [7,0,0],
  [7,0,1],
  [7,0,2],
  [7,0,3],
  [7,0,4],
  [7,0,5],
  [7,0,6],
  [7,1,0],
  [7,1,1],
  [7,1,2],
  
  [8,0,0],
  [8,0,1],
  [8,0,2],
  [8,1,0],
  [8,1,1],
  [8,1,2],
  [8,1,3],
  [8,2,0],
  [8,3,0],
  [8,4,0],
  [8,4,1],
  
  [9,0,0],
  [9,0,1],
  [9,0,2],
  [9,1,0],
  [9,2,0],
  [9,2,1],
  [9,3,0],
  [9,3,1],
  [9,3,2],
  [9,3,3],
  [9,3,4],
  [9,3,5],
  [9,3,6],
  
  [10,0,0],
  [10,0,1],
  [10,0,2],
  [10,0,3],
  [10,1,0],
  [10,1,1],
  [10,2,0],
  [10,2,1],
  [10,3,0],
  [10,3,1],
  [10,3,2],
  [10,3,3],
  [10,3,4],
  
  [11,0,0],
  [11,0,1],
  [11,0,2],
  [11,0,3],
  [11,1,0],
  [11,1,1],
  [11,1,2],
  [11,2,1],
  [11,2,2],
  [11,2,5],
  [11,2,6],
  [11,3,0],
  [11,3,1],
  [11,4,0],
  [11,4,1],
  
  [12,0,0],
  [12,0,1],
  [12,1,0],
  [12,1,1],
  [12,1,2],
  [12,1,3],
  [12,1,4],
  [12,2,0],
  [12,3,0],
  [12,3,1],
  [12,3,2],
  [12,4,0],
  [12,4,1],
  [12,4,2],
  [12,4,3],
  [12,4,4],
  [12,4,5],
  [12,4,6],
  [12,4,7],
  [12,4,8],
  [12,4,9],
  [12,5,0],
  [12,5,1],
  [12,5,2],
  [12,5,3],
  [12,5,4],
  [12,5,5],
  
  [13,0,0],
  [13,1,0],
  [13,1,1],
  [13,1,2],
  [13,1,3],
  [13,2,0],
  [13,2,1],
  [13,2,2],
  [13,2,3],
  [13,3,0],
  [13,3,1],
  [13,4,0],
  [13,4,1],
  [13,5,0],
  [13,5,1],
  [13,6,0],
  [13,6,1],
  [13,7,0],
  
  [14,0,0],
  [14,0,1],
  [14,1,0],
  [14,2,0],
  [14,3,0],
  [14,4,0],
  [14,4,1],
  [14,4,2],
  [14,5,0],
  [14,5,1],
  [14,6,0],
  [14,7,0],
  [14,7,1],
  [14,8,0],
  [14,8,1],
  
  [15,0,0],
  [15,0,1],
  [15,0,2],
  [15,1,0],
]

const exclusion = {
  6: {
    "9,3,6": 0,
    "10,0,0": 1,
    "10,0,3": 2,
    "10,3,4": 3,
  },
  7: {
    "9,3,6": 0,
    "10,0,0": 1,
    "10,0,3": 2,
    "10,3,4": 3,
  },
  8: {
    "9,3,6": 0,
    "10,0,0": 1,
    "10,0,3": 2,
    "10,3,4": 3,
  },
  9: {
    "9,3,6": 0,
    "10,0,0": 1,
    "10,0,3": 2,
    "10,3,4": 3,
    "12,4,2": 4,
    "12,4,3": 5,
    "12,4,4": 6,
    "12,4,5": 7,
    "12,4,6": 8,
    "12,4,7": 9,
    "12,4,8": 10,
    "12,4,9": 11,
    "12,5,0": 12,
    "12,5,1": 13,
    "12,5,2": 14,
    "12,5,3": 15,
    "12,5,4": 16,
    "12,5,5": 17,
  },
  10: {
    "10,3,4": 0,
    "12,4,2": 1,
    "12,4,3": 2,
    "12,4,4": 3,
    "12,4,5": 4,
    "12,4,6": 5,
    "12,4,7": 6,
    "12,4,8": 7,
    "12,4,9": 8,
    "12,5,0": 9,
    "12,5,1": 10,
    "12,5,2": 11,
    "12,5,3": 12,
    "12,5,4": 13,
    "12,5,5": 14,
  },
  11: {
    "12,4,2": 0,
    "12,4,3": 1,
    "12,4,4": 2,
    "12,4,5": 3,
    "12,4,6": 4,
    "12,4,7": 5,
    "12,4,8": 6,
    "12,4,9": 7,
    "12,5,0": 8,
    "12,5,1": 9,
    "12,5,2": 10,
    "12,5,3": 11,
    "12,5,4": 12,
    "12,5,5": 13,
  },
  12: {
    "12,4,2": 0,
    "12,4,3": 1,
    "12,4,4": 2,
    "12,4,5": 3,
    "12,4,6": 4,
    "12,4,7": 5,
    "12,4,8": 6,
    "12,4,9": 7,
    "12,5,0": 8,
    "12,5,1": 9,
    "12,5,2": 10,
    "12,5,3": 11,
    "12,5,4": 12,
    "12,5,5": 13,
  },
}

const props = defineProps({
  soc: {
    type: Number,
    required: true,
  },
  x: {
    type: Boolean,
    default: false,
  },
  minVer: {
    type: Number,
    default: [0,0,0],
  },
  maxVer: {
    type: Number,
    default: [99,99,99],
  },
  exclude: {
    type: Number,
    default: [],
  },
})

function doesExcl(ver) {
  // Device-specific version exclusions
  if (props.exclude.length < 1) return;
  for (var i = 0; i < props.exclude.length; i++) {
    const verExcl = props.exclude[i];
    const exclBool = JSON.stringify(ver) === JSON.stringify(verExcl);
    if (exclBool) return exclBool;
  }
  return false;
}

const getTable = computed(() => {
  const column = [15,15,70];
  const header = ['From', 'To', ''];
  const minVerPos = findVersion(props.minVer);
  var maxVerPos = findVersion(props.maxVer);
  if (!minVerPos) return;
  if (!maxVerPos) maxVerPos = version.length-1;
  
  // Start table
  var html = '<table>';
    
  // Columns
  html += '<colgroup>';
  for (var i = 0; i < column.length; i++) html += '<col style="width: ' + column[i] + '%;">';
  html += '</colgroup>'
  
  // Headers
  html += '<thead><tr>'
  for (var i = 0; i < header.length; i++) html += '<th>' + header[i] + '</th>';
  html += '</tr></thead>'
  
  // Rows
  html += '<tbody>';
  var jbLink;
  var jbMinVerPos = minVerPos;
  var jbMaxVerPos = minVerPos;
  for (var i = minVerPos; i <= maxVerPos; i++) {
    // Soc version exclusions
    if (exclusion.hasOwnProperty(props.soc))
      if (exclusion[props.soc][version[i]] > -1) continue;
      
    if (doesExcl(version[i])) continue;
    jbMaxVerPos = i;
    
    var oldJbLink = jbLink;
    var oldJbMinVerPos = jbMinVerPos;
    jbLink = getJailbreakLink(version[i]);
    if (jbLink == oldJbLink) {
      var htmlToAdd = '<tr>';
      htmlToAdd += '<td>' + verToString(version[jbMinVerPos]) + '</td><td>' + verToString(version[jbMaxVerPos]) + '</td>';
      htmlToAdd += '<td>' + jbLink + '</td>'
      htmlToAdd += '</tr>';
      continue;
    }
    
    if (htmlToAdd) html += htmlToAdd;
    
    jbMinVerPos = i;
    jbMaxVerPos = i;
    
    htmlToAdd = '<tr>';
    htmlToAdd += '<td>' + verToString(version[jbMinVerPos]) + '</td><td>' + verToString(version[jbMaxVerPos]) + '</td>';
    htmlToAdd += '<td>' + jbLink + '</td>'
    htmlToAdd += '</tr>';
  }
  
  // Add final row in 
  html += '<tr>';
  html += '<td>' + verToString(version[jbMinVerPos]) + '</td><td>' + verToString(version[maxVerPos]) + '</td>';
  html += '<td>' + jbLink + '</td>'
  html += '</tr>';
  
  // Exit table
  html += '</tbody></table>';
  return html;
});

function verToString(ver) {
  var str = ver[0] + '.' + ver[1];
  if (ver[2] > 0) str += '.' + ver[2];
  return str;
}

function stringToVer(str) {
  var ver = [0,0,0];
  var strArr = str.split('.');
  if ((strArr.length > 3) || (strArr.length < 1)) return -1;
  for (var i = 0; i < strArr.length; i++) {
    ver[i] = strArr[i];
  }
  return ver;
}

function getJailbreak(ver, property) {
  for (var jb in jailbreak) {
    var minVer = [0,0,0];
    var maxVer = [0,0,0];
    for (var index in jailbreak[jb]) {
      if (!jailbreak[jb][index].hasOwnProperty('include')) continue;
      const soc = parseInt(props.soc);
      if (jailbreak[jb][index].include.includes(soc)) {
        var minVer = jailbreak[jb][index].minVer;
        var maxVer = jailbreak[jb][index].maxVer;
      }
    }
    if ((ver >= minVer) && (ver <= maxVer))
      return jailbreak[jb][property]
  }
  return null
}

function getJailbreakLink(ver) {
  const jb = {
    text: getJailbreak(ver, 'text'),
    url: getJailbreak(ver, 'url'),
    target: getJailbreak(ver, 'target'),
    icon: getJailbreak(ver, 'icon'),
  };
  if (jb.text == null) jb.text = '--';
  if (jb.url == null) return jb.text;
  if (jb.icon == null) jb.icon = ''
  if (jb.target != null) jb.target = 'target="' + jb.target + '"';
  return '<a href="' + jb.url + '"' + jb.target + '>' + jb.text + '</a>' + jb.icon;
}

var verHash = {};
for (var i = 0; i < version.length; i++) {
  verHash[version[i]] = i;
}

function findVersion(v) {
  return parseInt(verHash[v]);
}
</script>