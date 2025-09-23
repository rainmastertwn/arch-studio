import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // rain save deploy to github pages
    baseURL: process.env.NODE_ENV === 'production' ? '/arch-studio/' : '/',
    // baseURL: '/',
    buildAssetsDir: '/static/'
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      youtubeApiKey: process.env.YOUTUBE_API_KEY,
      youtubeChannelID: process.env.YOUTUBE_CHANNEL_ID
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ['@element-plus/nuxt'],
  css: ['~/assets/css/tailwind.css'],
  elementPlus: {
    /** Options setting */
    importStyle: 'scss'
  }
})
