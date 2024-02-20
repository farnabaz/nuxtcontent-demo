// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    // '/accueil': { redirect: '/' },
},
  components: {
    global: true,
    dirs: ['node_modules/@baraka/baraka/dist/components','~/components']
  },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts' ,
    locales: ['en', 'fr'], // used in URL path prefix
    defaultLocale: 'fr', // default for Nuxt pages and routings
    strategy: 'prefix',
  },
  // force module initialization on dev env
  studio: {
    enabled: true
  },
  content: {
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      anchorLinks: false
    }
  },
  
  //Global css
  css: [
    "@/assets/css/_styles.scss",
    "@baraka/baraka/dist/tokens/decisions-jel-variables.css",
  ],
  build: {
    transpile: ["@baraka/baraka"],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      title: "Baraka",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/graphik?styles=44652,44664",
        },
      ],
    },
  },
  hooks: {
    "vite:extendConfig": (config, { isClient }) => {
      if (isClient) {
        //config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
      }
    },
  },
  telemetry: false,
})
