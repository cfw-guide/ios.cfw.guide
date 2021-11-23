import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ router }) => {
  router.addRoute({ path: '/pkgman/', redirect: '/package-managers' })
})