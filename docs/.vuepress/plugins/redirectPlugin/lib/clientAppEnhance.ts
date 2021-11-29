import { defineClientAppEnhance } from '@vuepress/client'
import pages from '@temp/pages'

function redirects() {
  var retArr = [];
  for (var i in pages) {
    var redObj = {
      path: [],
      redirect: ''
    };
    
    const f = pages[i].frontmatter;
    if (!f.hasOwnProperty('redirect_from')) continue;
    redObj.redirect = pages[i].path
    
    if (Array.isArray(f.redirect_from)) {
      for (var j in f.redirect_from) {
        if (f.redirect_from[j].length < 1) continue;
        redObj.path.push(f.redirect_from[j]);
      }
    } else {
      if (f.redirect_from.length < 1) continue;
      redObj.path.push(f.redirect_from)
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