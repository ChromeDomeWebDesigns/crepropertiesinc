export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'St. Louis Real Estate Investor | CRE Properties',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'St. Louis Based Real Estate Investor and Property Manager' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', name: 'og:image', content: 'https://crepropertiesinc.com/images/Logo.jpg' },
      { hid: 'og:title', name: 'og:title', content: 'St. Louis Real Estate Investor | CRE Properties' },
      { hid: 'og:url', name: 'og:url', content: 'https://crepropertiesinc.com' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'St. Louis Real Estate Investor | CRE Properties' },
      { hid: 'og:description', name: 'og:description', content: 'St. Louis Based Real Estate Investor and Property Manager' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://crepropertiesinc.com/images/Logo.jpg' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'St. Louis Real Estate Investor | CRE Properties' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://crepropertiesinc.com' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'St. Louis Based Real Estate Investor and Property Manager' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/1107c06a2b.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/styles/app.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
