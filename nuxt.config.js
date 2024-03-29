export default {
  ssr: true, //universal or spa

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cony-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "robots", name: "robots", content: "noindex" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/variables.css'
  ],
  
  styleResources: {
    scss: [
      '@/assets/scss/_mixin.scss'
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 下記追加
    '~/plugins/vee-validate'
  ],

  build: {
    transpile: [
      "vee-validate/dist/rules"
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    'nuxt-basic-auth-module',
    '@nuxtjs/style-resources',
  ],

  basic: {
    name: 'admin',
    pass: 'admin',
    enabled: true,
  },

  // router
  router: {
    base: '/',
    routes: [
      {
        name: 'confirmation',
        path: '/confirmation',
        component: '@/pages/contact/Confirmation.vue'
      }
    ]
  },

  generate: {
    dir: 'docs'
  },

  // Storybook
  storybook: {
    // 追加のアドオン
    // デフォルトではstorybook/addon-essentialsが含まれてます、含まれてるaddonは下記リンクを参照
    // https://storybook.js.org/docs/react/essentials/introduction
    addons: [],
    // storybookのポート指定
    port: 4000,
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'light', // light or dark
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true,
      },
      // 表示位置
      // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
      layout: 'centered', 
    },
  },

  googleFonts: {
    families: {
      'Noto+Sans+JP': true,
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }

}
