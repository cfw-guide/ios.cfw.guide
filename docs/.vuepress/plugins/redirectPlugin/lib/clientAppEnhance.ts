import { defineClientAppEnhance } from '@vuepress/client'
import pages from '@temp/pages'

function redirects() {
  var retArr = [];
  for (var i in pages) {
    var redObj = {
      path: [],
      redirect: ''
    };
    
    const p = pages[i];
    if (!p.hasOwnProperty('redirect_from')) continue;
    if (p.redirect_from == null) continue
    redObj.redirect = p.path
    
    if (Array.isArray(p.redirect_from)) {
      for (var j in p.redirect_from) {
        if (p.redirect_from[j].length < 1) continue;
        redObj.path.push(p.redirect_from[j]);
      }
    } else {
      if (p.redirect_from.length < 1) continue;
      redObj.path.push(p.redirect_from)
    }
    
    if (!redObj.path.length) continue;
    
    retArr.push(redObj);
  }
  
  return retArr;
}

export default defineClientAppEnhance(({ app, router, siteData }) => {
  const redirectArr = redirects();
  for (const i in redirectArr) {
    for (const j in redirectArr[i].path) {
      router.addRoute({ path: redirectArr[i].path[j], redirect: redirectArr[i].redirect })
    }
  }
})
