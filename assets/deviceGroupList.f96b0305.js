import{_ as v,i as C,g as P,p as b,r as L,o as t,c as o,a as p,t as m,F as u,k as d,l as g,q as f,v as _,w as k,b as w}from"./app.3071e6d2.js";String.prototype.fdn=function(){return this.replace(/ /g,"-").replace(/\//g,"%2F").replace(/ü/g,"u").replace(/²/g,"2").replace(/³/g,"3")};const A={data(){return{colCount:3,fm:C(),themeLocaleData:P().value.chart.deviceChart,isDarkMode:b()}},computed:{localePathPrefix(){const n=this.fm.lang;return n=="en_US"?"":`/${n}`},typeArr(){return Array.from(new Set(this.fm.groupList.map(n=>n.type)))},groupObj(){var n=[],r=[{label:"",types:["iPhone","iPad","iPad Air","iPad Pro","iPad mini","iPod touch","Apple TV"]}].map(a=>{a.types=a.types.filter(e=>this.typeArr.includes(e));for(const e of a.types)n.push(e);return a});const c=this.typeArr.filter(a=>!n.includes(a));return c.length>0&&r.push({label:"Other",types:c}),r},imageObj(){var n=[],r={};const c={AirPods:"AirPods1,1",iPhone:"iPhone15,2"};for(const e of this.fm.groupList)c.hasOwnProperty(e.type)&&e.img.key!=c[e.type]||n.includes(e.type)||(n.push(e.type),r[e.type]={key:e.img.key,imageBool:e.img.count>0,dark:e.img.dark,names:e.img.names});var a={};for(const e in r)a[e]=r[e].imageBool?`https://img.appledb.dev/device@preview/${r[e].key}/${r[e].names[0]}${this.isDarkMode&&r[e].dark?"_dark":""}.webp`:`/assets/images/logo${this.isDarkMode?"_dark":""}.webp`;return a}}},D={key:0},O=["src"];function x(n,r,c,a,e,y){const h=L("router-link");return t(),o(u,null,[p("h2",null,m(e.themeLocaleData.getStarted.requiredReading.title),1),(t(!0),o(u,null,d(e.themeLocaleData.getStarted.requiredReading.content,s=>(t(),o("p",{key:s},m(s),1))),128)),r[1]||(r[1]=p("br",null,null,-1)),(t(!0),o(u,null,d(y.groupObj,s=>(t(),o(u,{key:s},[s.label?(t(),o("h2",D,m(s.label),1)):g("",!0),(t(!0),o(u,null,d(Math.ceil(s.types.length/e.colCount),i=>(t(),o("table",{key:i},[p("tr",{style:f(`width: ${parseInt(100/e.colCount)}%;`)},[(t(!0),o(u,null,d(e.colCount,l=>(t(),o("th",{key:l,style:f({width:parseInt(100/e.colCount)+"%"})},[s.types[(i-1)*e.colCount+l-1]?(t(),_(h,{key:0,to:`${y.localePathPrefix}/get-started/select-${s.types[(i-1)*e.colCount+l-1].fdn().toLowerCase()}/`},{default:k(()=>[w(m(s.types[(i-1)*e.colCount+l-1]),1)]),_:2},1032,["to"])):g("",!0)],4))),128))],4),p("tr",null,[(t(!0),o(u,null,d(e.colCount,l=>(t(),o("td",{key:l},[s.types[(i-1)*e.colCount+l-1]?(t(),_(h,{key:0,to:`${y.localePathPrefix}/get-started/select-${s.types[(i-1)*e.colCount+l-1].fdn().toLowerCase()}/`},{default:k(()=>[p("img",{src:y.imageObj[s.types[(i-1)*e.colCount+l-1]],style:{"max-height":"11em"}},null,8,O)]),_:2},1032,["to"])):g("",!0)]))),128))]),p("tr",null,[(t(!0),o(u,null,d(e.colCount,l=>(t(),o("td",{key:l},r[0]||(r[0]=[p("hr",{class:"separator"},null,-1)])))),128))])]))),128))],64))),128))],64)}var B=v(A,[["render",x],["__scopeId","data-v-126ca3ae"],["__file","deviceGroupList.vue"]]);export{B as default};
