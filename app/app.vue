<script lang="ts" setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'

onMounted(() => {
  AOS.init({
    once: true
  })
})

// TODO
useHead({
  title: 'ARCH STUDIO',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover'
    },
    {
      name: 'description',
      content: 'ARCH STUDIO'
    },
    {
      name: 'author',
      content: 'Rain Master'
    },
    {
      name: 'thumbnail',
      content: '/shareImage.avif'
    },
    {
      property: 'og:image',
      content: '/shareImage.avif'
    },
    {
      property: 'og:url',
      content: 'https://arch-studio.com.tw/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'ARCH STUDIO'
    },
    {
      property: 'og:image',
      content: '/shareImage.avif'
    },
    {
      property: 'og:description',
      content: 'ARCH STUDIO'
    }
  ],
  // google fonts setting
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap'
    }
  ]
  // lottie js
  // script: [
  //   {
  //     src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js',
  //     integrity:
  //       'sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==',
  //     crossorigin: 'anonymous',
  //     referrerpolicy: 'no-referrer',
  //     defer: true
  //   }
  // ]
})
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss">
@use '~/assets/css/main';

html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: 'Noto Sans TC', sans-serif;
  color: #555;
  background-color: var(--color-white-set);
  letter-spacing: 0.05rem;
}

// set mobile/pad can not swipe to left / right
body {
  overflow: hidden scroll;
  width: 100% !important; // fixed mobile dialog toggle bug
}
</style>
