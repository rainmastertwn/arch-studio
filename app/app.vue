<script lang="ts" setup>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'

const isWrapperHovering = ref<boolean>(false)
const wrapperHover = (isHovering: boolean): void => {
  isWrapperHovering.value = isHovering
}

provide('wrapperHover', readonly(isWrapperHovering))

useHead({
  title: 'ARCH STUDIO',
  htmlAttrs: {
    lang: 'zh-Hant'
  },
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
      content: '/shareImage.png'
    },
    {
      property: 'og:image',
      content: '/shareImage.png'
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
      content: '/shareImage.png'
    },
    {
      property: 'og:description',
      content: 'ARCH STUDIO'
    }
  ],
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-11422925387',
      async: true
    },
    {
      textContent: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11422925387');
      `,
      type: 'text/javascript'
    },
    {
      textContent: `
        (function() {
          const darkMode = localStorage.getItem('archStudio-dark-mode');
          const isDark = darkMode !== null ? darkMode === 'true' : false;

          if (isDark) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
      type: 'text/javascript',
      tagPosition: 'head'
    }
  ]
})
</script>

<template>
  <!-- wrapper circle hover function-->
  <main class="p-2 lg:p-5">
    <div
      class="wrapper-circle container overflow-hidden rounded-[72px] p-0 lg:rounded-[92px] lg:p-5"
      :class="{ hovered: isWrapperHovering }"
    >
      <div
        class="wrapper bg-white-set h-full w-full rounded-[72px] p-5"
        @mouseenter="wrapperHover(true)"
        @mouseleave="wrapperHover(false)"
      >
        <Header />
        <NuxtPage />
        <Footer />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use '~/assets/css/main';

html,
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: 'Noto Sans TC', sans-serif;
  color: var(--color-blue-set);
  background-color: #fff;
  letter-spacing: 0.1rem;
}

html.dark {
  body {
    color: var(--color-blue-set);
    background-color: var(--color-white-set);
  }
}

// set mobile/pad can not swipe to left / right
body {
  overflow: hidden scroll;
  width: 100% !important; // fixed mobile dialog toggle bug
}

.wrapper-circle {
  width: calc(100% - 40px);
  min-height: calc(100vh - 40px);
  border: 3px solid transparent;
  transition: all 0.4s ease;

  @media (width < 64rem) {
    width: calc(100% - 16px);
    border: 3px solid var(--color-green);
  }

  &.hovered {
    border: 3px solid var(--color-green);
  }
}
</style>
