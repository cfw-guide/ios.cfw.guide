module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en_US',
    title: 'iOS Guide',
    description: 'A complete iOS jailbreaking guide, from stock to jailbroken.',
  },
  
  themeConfig: {
  	selectLanguageName: "English",
  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
    
    discordNoticeText: "For support in English, ask for help on the r/Jailbreak [Discord Server](https://discord.gg/jb).",
    repoLabel: '<i class="fab fa-github"></i>',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
    chart: require('./chart'),
  }
};