import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Hectar Dashboard',
    title: 'Hectar Dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { content: 'yes', name: 'apple-mobile-web-app-capable' },
      { content: 'yes', name: 'mobile-web-app-capable' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "dns-prefetch",
        href: "//fonts.googleapis.com"
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/typo.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    'nuxt-webfontloader',
    '@nuxtjs/svg'
  ],
  pwa: {
    manifest: {
      lang: 'fr'
    },
    options: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0',
      ogSiteName: 'Hectar Dashboard',
      ogTitle: 'Hectar Dashboard',
      ogDescription: 'Hectar dashboard',
      ogUrl: 'https://hectar-dashboard.herokuapp.com/',
      nativeUI: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/api',
  },
  dayjs: {
    locales: ['fr'],
    defaultLocale: 'fr',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
      'customParseFormat',
      'relativeTime',
      'localizedFormat'
    ] // Your Day.js plugin
  },
  webfontloader: {
    google: {
      families: [
        'Poppins:wght@100;300;400;500;900&display=swap'
      ]
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  serverMiddleware: {"/api": "~/api/"},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
