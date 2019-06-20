/**
 * web-party/nuxt.config.js
 * Configure nuxt to build a single page app
 */

const META = {
  title: 'Summer Flock Party by System76',
  description: "Summer's back and hotter than ever! All the more reason to stay indoors and party with your favorite Linux people.",
  color: '#0199da',
  image: '/social.jpg'
}

export default {
  mode: 'spa',

  modern: true,

  head: {
    title: META.title,

    htmlAttrs: {
      lang: 'en',
      itemscope: true
    },

    link: [
      { rel: 'icon', sizes: '196x196', href: '/icon.png' }
    ],

    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { itemprop: 'url', content: 'https://system76.party/' },
      { itemprop: 'logo', content: '/icon.png' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://system76.com/' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@system76' },
      { name: 'twitter:creator', content: '@system76' },

      { itemprop: 'name', content: META.title },
      { name: 'twitter:title', content: META.title },
      { property: 'og:title', content: META.title },

      { name: 'description', content: META.description },
      { itemprop: 'description', content: META.description },
      { property: 'og:title', content: META.title },

      { itemprop: 'image', content: META.image },
      { name: 'twitter:image:src', content: META.image },
      { property: 'og:image', content: META.image },

      { name: 'theme-color', content: META.color }
    ]
  },

  build: {
    babel: {
      sourceType: 'unambiguous'
    }
  },

  css: [
    '@system76/design/dist/index.esm.css'
  ],

  modules: [
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-196052-5'
  }
}
