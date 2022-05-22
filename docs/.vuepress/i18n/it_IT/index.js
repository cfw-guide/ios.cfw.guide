module.exports = {
  search: 'Cerca',
  locales: {
    lang: 'it_IT',
    title: 'Guida per iOS',
    description: 'Una guida completa per il modding di iOS, da stock a jailbroken.'
  },
  themeConfig: {
    selectLanguageName: 'Italiano',
    backToHome: 'Torna all’inizio',
    contributorsText: 'Collaboratori',
    editLinkText: 'Modifica questa pagina',
    lastUpdatedText: 'Ultimo aggiornamento',
    openInNewWindow: 'Apri in una nuova finestra',
    selectLanguageAriaLabel: 'Seleziona lingua',
    toggleDarkMode: 'Attiva tema scuro',
    toggleSidebar: 'Attiva/Disattiva barra laterale',
    discordNoticeText: 'Per supporto in inglese, chiedi aiuto sul r/Jailbreak [Discord Server](https://discord.gg/jb).',
    repoLabel: '<i class="fab fa-github"></i>',
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
    chart: require('./chart')
  }
};