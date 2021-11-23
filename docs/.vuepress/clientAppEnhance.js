const redirects = require('./json/redirects')

export default ({ router }) => {
  for (var r in redirects) for (var p in redirects[r].path) {
    router.addRoute({ path: redirects[r].path[p], redirect: redirects[r].redirect })
  }
}