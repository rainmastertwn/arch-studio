import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // rain save deploy to github pages
    // baseURL: process.env.NODE_ENV === 'production' ? '/arch-studio/' : '/',
    baseURL: '/',
    buildAssetsDir: '/static/'
  },
  runtimeConfig: {
    public: {
      youtubeApiKey: process.env.YOUTUBE_API_KEY,
      youtubeChannelID: process.env.YOUTUBE_CHANNEL_ID,
      rainsaveURL: 'https://rainsave.com.tw/',
      rainlineURL: 'https://rainline.com.tw/',
      coinnURL: 'https://www.coinn.com.tw/'
    }
  },
  experimental: {
    payloadExtraction: false
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth' // 開啟原生平滑滾動
    }
  },
  devtools: { enabled: true },
  // vite will generate entry point css and js files separately, will cause LCP delay
  features: {
    inlineStyles: true // Forces all component styles to be inlined when using Vite
  },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@element-plus/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-vitalizer'
  ],
  css: ['~/assets/css/tailwind.css'],
  elementPlus: {
    /** Options setting */
    importStyle: 'scss'
  },
  googleFonts: {
    families: {
      // Roboto: [400, 700],
      'Noto Sans TC': [300, 400, 500, 700]
    },
    display: 'swap', // font-display: swap
    download: true, // 下載到本地（避免外部請求）
    inject: true,
    preload: true
  },
  site: {
    url: 'https://coinn.com.tw/',
    name: 'Coinn 雨水管理大師'
  },
  // vitalizer setting
  vitalizer: {
    disableStylesheets: 'entry'
  }
})
