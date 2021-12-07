var page = [];

for (const i in jbList) {
  const jb = jbList[i];
  
  let redirects = [];
  if (jb.hasOwnProperty('alias')) {
    redirects = jb.alias
    if (!Array.isArray(redirects)) redirects = [redirects];
    redirects = redirects.map(function(x) { return jbPath + x; })
  }
  
  page.push({
    path: jbPath + jb.name + '.html',
    frontmatter: {
      title: jb.name,
      description: 'Compatible firmwares for ' + jb.name,
      redirect_from: redirects,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./content')(jb.name)
  })
};

module.exports = page;