import { defineClientAppEnhance } from '@vuepress/client'
import pages from '@temp/pages'

/*function redirects() {
  var retObj = {
    path: '',
    redirect: ['']
  };
  
  for (var i in pages) {
    const f = pages[i].frontmatter;
    if (!f.hasOwnProperty('redirect_from')) continue;
  }
}*/

export default defineClientAppEnhance(({ app, router, siteData }) => {
  //router.addRoute({ path: '/foo', redirect: JSON.stringify(pages[0].frontmatter.title) })
})