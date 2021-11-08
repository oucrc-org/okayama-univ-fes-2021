import webpack from 'webpack'

export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '笑顔満祭岡大祭 〜心機一転しちゃいな祭〜',
    titleTemplate: '%s | 岡山大学祭2021 特設サイト',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '岡山大学祭2021の特設サイトです！今年は「笑顔満祭岡大祭 〜心機一転しちゃいな祭〜」をテーマに、11/7（日）〜11/17（水）の期間中開催されます。岡山大学生が準備したコンテンツをふんだんに披露していきますので、是非この1週間お楽しみください！'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'Theme-Color',
        content: '#FFFFFF'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '岡山大学祭2021 | 笑顔満祭岡大祭 〜心機一転しちゃいな祭〜'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://oufes2021.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '岡山大学祭2021'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '岡山大学祭2021の特設サイトです！今年は「笑顔満祭岡大祭 〜心機一転しちゃいな祭〜」をテーマに、11/7（日）〜11/17（水）の期間中開催されます。岡山大学生が準備したコンテンツをふんだんに披露していきますので、是非この1週間お楽しみください！'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/oucrc-org/okayama-univ-fes-2021/main/assets/ogp.jpg'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'google-site-verification',
        content: 'iAmtfPOn9JU9DVeq1uSrxvnwpZkcOOvk62oRAEsvV78'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: '/js/waveCanvas.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/axios',
      ssr: false
    },
    {
      src: '@/plugins/vue-awesome-swiper',
      ssr: false
    },
    {
      src: '@/plugins/vue-light-timeline',
      ssr: false
    },
    {
      src: '@/plugins/vue-slick',
      ssr: false
    },
    {
      src: '@/plugins/vue-scrollmagic',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-SNX8TT1GKD',
        debug: false
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },

  // @nuxtjs/pwa Configuration: https://github.com/nuxt-community/pwa-module
  // manifest: {
  //   name: '岡山大学祭2021',
  //   lang: 'ja',
  //   short_name: '岡大祭2021',
  //   title: '岡山大学祭2021',
  //   description: '【校友会主催】岡山大学祭2021の公式HPです',
  //   theme_color: '#0071C5',
  //   background_color: '#FFFFFF'
  // },

  env: {
    API_KEY: process.env.API_KEY,
    BACKEND_API_URL: process.env.BACKEND_API_URL,
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN
  },

  // Google Font
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900', 'Noto+Sans+JP:100,300,400,500,700,900', 'Hina Mincho:100,300,400,500,700,900', 'Noto+Serif+JP:200,300,400,500,600,700,900']
    }
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/callback',
      home: '/mypage'
    },
    localStorage: false,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        domain: process.env.NODE_ENV === 'production' ? process.env.DOMAIN : '',
        maxAge: 60 * 30
      }
    },
    strategies: {
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID
      }
    }
  }
}
