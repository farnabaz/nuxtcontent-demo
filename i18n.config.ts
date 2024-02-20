export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
      en: {
        hero:{
          descr: "A NuxtContent.v2 Experiment",
          btn: "Play",
        },
        offres: {
          titre: "Entertainment offers"
        }
      },
      fr: {
        hero: {
          descr: "Une expérience NuxtContent.v2",
          btn: "Jouer",
        },
        offres: {
          titre: "Offres de divertissement"
        }

        
      }
    }
  }))