// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt'
  ],
  ssr: false,
  css: [
    '~/assets/style/main.scss'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favCat.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Hind:wght400;500;700&display=swap'
        }
      ]
    }
  },
  components: {
    "dirs": [
      { "path": "~/components/", "global": true, pathPrefix: false, },
    ],
  },
  vite: {
    build: {
      minify: 'esbuild',
      sourcemap: false,
    },

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
