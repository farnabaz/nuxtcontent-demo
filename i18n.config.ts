export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
      en: {
        welcome: 'Hello world!'
      },
      fr: {
        welcome: 'Bonjour le monde!'
      }
    }
  }))