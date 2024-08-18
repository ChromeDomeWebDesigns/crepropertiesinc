import { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN } from "./lib/constants";

// eslint-disable-next-line nuxt/no-cjs-in-config
const contentful = require("contentful");

const client = contentful.createClient({
 space: CONTENTFUL_SPACE,
 accessToken: CONTENTFUL_ACCESS_TOKEN
});

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Family First Real Estate Investing | CRE Properties',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Family First Real Estate Investing and Property Management located in St. Louis Missouri' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', name: 'og:image', content: 'https://crepropertiesinc.com/images/Logo.jpg' },
      { hid: 'og:title', name: 'og:title', content: 'Family First Real Estate Investing | CRE Properties' },
      { hid: 'og:url', name: 'og:url', content: 'https://crepropertiesinc.com' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Family First Real Estate Investing | CRE Properties' },
      { hid: 'og:description', name: 'og:description', content: 'Family First Real Estate Investing and Property Management located in St. Louis Missouri' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://crepropertiesinc.com/images/Logo.jpg' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Family First Real Estate Investing | CRE Properties' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://crepropertiesinc.com' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Family First Real Estate Investing and Property Management located in St. Louis Missouri' }
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
    { src: '@/plugins/vue-lightbox', mode: 'client' },
    { src: '@/plugins/contentful' },
    { src: '@/plugins/content' }
  ],

  vue: {
    config: {
      ignoredElements: ['bdt'],
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/markdownit", '@nuxtjs/robots', '@nuxtjs/sitemap'],

  markdownit: {
    injected: true
  },

  sitemap: {
    hostname: 'https://crepropertiesinc.com',
    gzip: true
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://crepropertiesinc.com/sitemap.xml'
  },

  generate: {
    routes() {
      return client.getEntries({
        content_type: "blogPostCRE"
      }).then(blogEntries => {
        return blogEntries.items.map(entry => `/blog/${entry.fields.slug}`)
      })
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
