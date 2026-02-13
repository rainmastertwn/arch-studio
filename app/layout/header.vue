<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import LogoWhite from '~/assets/images/logo/logo-white.webp'
import LogoColor from '~/assets/images/logo/logo-color.webp'
import LogoWhiteWithWhiteFont from '~/assets/images/logo/logo-white@white.webp'
import LogoColorWithWhiteFont from '~/assets/images/logo/logo-color@white.webp'
import LogoGradient from '~/assets/images/logo/logo-gradient.webp'
import iconType1 from '~/assets/images/icons/icon-type-1.webp'
import iconType2 from '~/assets/images/icons/icon-type-2.webp'
import iconType3 from '~/assets/images/icons/icon-type-3.webp'
import iconType4 from '~/assets/images/icons/icon-type-4.webp'
import iconType5 from '~/assets/images/icons/icon-type-5.webp'
import iconType6 from '~/assets/images/icons/icon-type-6.webp'
import AdBlock from '~/components/common/adBlock.vue'
import { useDarkMode } from '~/composables/useDarkMode'

import footballAD from '~/assets/images/ad/足球廣告.png'

import { watermanagementData } from '~/mock/watermanagementData'

const { setDarkMode } = useDarkMode()

const router = useRouter()

const isPageWaterManagement = computed(() => {
  return router.currentRoute.value.path === '/watermanagement'
})

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const setDarkModeHandler = (isDark: boolean): void => {
  setDarkMode(isDark)
}

const isLogoHovering = ref<boolean>(false)
const logoHover = (isHovering: boolean): void => {
  isLogoHovering.value = isHovering
}

const headerPostData = useState('headerPostData', () =>
  watermanagementData.sort(() => 0.5 - Math.random()).slice(0, 5)
)
</script>

<template>
  <header class="mb-5 flex flex-col items-center justify-center gap-5 px-0 lg:flex-row lg:px-8">
    <NuxtLink
      class="relative block"
      href="/"
      @mouseenter="logoHover(true)"
      @mouseleave="logoHover(false)"
    >
      <img
        class="block dark:hidden"
        alt="ARCH STUDIO"
        v-if="wrapperHover && !isLogoHovering"
        :src="LogoColor"
        width="166"
        height="38"
      />
      <img
        class="block dark:hidden"
        alt="ARCH STUDIO"
        v-else-if="isLogoHovering"
        :src="LogoGradient"
        width="166"
        height="38"
      />
      <img
        class="block dark:hidden"
        alt="ARCH STUDIO"
        v-else
        :src="LogoWhite"
        width="166"
        height="38"
      />
      <img
        class="hidden dark:block"
        alt="ARCH STUDIO"
        :src="LogoColorWithWhiteFont"
        width="166"
        height="38"
        v-if="wrapperHover && !isLogoHovering"
      />
      <img
        class="hidden dark:block"
        alt="ARCH STUDIO"
        v-else-if="isLogoHovering"
        :src="LogoGradient"
        width="166"
        height="38"
      />
      <img
        class="hidden dark:block"
        alt="ARCH STUDIO"
        :src="LogoWhiteWithWhiteFont"
        width="166"
        height="38"
        v-else
      />
    </NuxtLink>
    <div class="grid w-full grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-5">
      <NuxtLink
        class="icon-box dark:border-white-fixed bg-medium-gray flex flex-row items-center justify-center rounded-2xl border border-transparent px-0 pb-0 lg:flex-col lg:px-4 lg:pb-2"
        href="/drainage/watermanagement#rainwater-drainage"
      >
        <img class="w-[54px] lg:w-[108px]" alt="Icon Type 1" :src="iconType1" />
        <h6>雨水排水</h6>
      </NuxtLink>
      <NuxtLink
        class="icon-box dark:border-white-fixed bg-medium-gray flex flex-row items-center justify-center rounded-2xl border border-transparent px-0 pb-0 lg:flex-col lg:px-4 lg:pb-2"
        href="/drainage/watermanagement#rainwater-storage"
      >
        <img class="w-[54px] lg:w-[108px]" alt="Icon Type 2" :src="iconType2" />
        <h6>雨水儲存</h6>
      </NuxtLink>
      <NuxtLink
        class="icon-box dark:border-white-fixed bg-medium-gray flex flex-row items-center justify-center rounded-2xl border border-transparent px-0 pb-0 lg:flex-col lg:px-4 lg:pb-2"
        href="/drainage/watermanagement#rainwater-infiltration"
      >
        <img class="w-[54px] lg:w-[108px]" alt="Icon Type 3" :src="iconType3" />
        <h6>滲透雨水</h6>
      </NuxtLink>
      <NuxtLink
        class="icon-box dark:border-white-fixed bg-medium-gray flex flex-row items-center justify-center rounded-2xl border border-transparent px-0 pb-0 lg:flex-col lg:px-4 lg:pb-2"
        href="/drainage/post#waterIssue"
      >
        <img class="w-[54px] lg:w-[108px]" alt="Icon Type 4" :src="iconType4" />
        <h6>各種積水問題</h6>
      </NuxtLink>
      <NuxtLink
        class="icon-box dark:border-white-fixed bg-medium-gray flex flex-row items-center justify-center rounded-2xl border border-transparent px-0 pb-0 lg:flex-col lg:px-4 lg:pb-2"
        href="/drainage/post#howToChoose"
      >
        <img class="w-[54px] lg:w-[108px]" alt="Icon Type 5" :src="iconType5" />
        <h6>我該如何選擇</h6>
      </NuxtLink>
      <NuxtLink
        class="icon-box dark:border-white-fixed bg-medium-gray flex flex-row items-center justify-center rounded-2xl border border-transparent px-0 pb-0 lg:flex-col lg:px-4 lg:pb-2"
        href="#"
      >
        <img class="w-[54px] lg:w-[108px]" alt="Icon Type 6" :src="iconType6" />
        <h6>來信贊助合作</h6>
      </NuxtLink>
    </div>
  </header>

  <AdBlock
    class="mb-5"
    href="https://www.facebook.com/share/14NoPaYcqY9/?mibextid=wwXIfr"
    :imgSrc="footballAD"
    adText="藝術家足球俱樂部 熱烈招生中"
  />

  <div class="my-5 flex flex-wrap items-center justify-center gap-5">
    <div class="flex w-full items-center justify-center lg:w-auto">
      <div
        class="dark-mode-icon text-blue-set dark:hover:text-white-set mr-5 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full p-1 transition-all duration-300 hover:bg-gray-200 lg:-top-8"
        :class="{
          show: wrapperHover
        }"
      >
        <el-icon :size="26">
          <Sunny class="block dark:hidden" @click="setDarkModeHandler(true)" />
          <Moon class="hidden dark:block" @click="setDarkModeHandler(false)" />
        </el-icon>
      </div>
    </div>
    <h6 class="font-medium">大家都在看</h6>
    <NuxtLink
      class="link-hover"
      :href="`/drainage/watermanagement/${item.value}`"
      v-for="item in headerPostData"
      :key="item.value"
    >
      {{ item.value }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
header {
  .icon-box {
    img {
      transition: transform 0.4s ease;
    }

    h6 {
      transition: opacity 0.4s ease;
    }

    &:hover {
      img {
        transform: translateY(20px) scale(1.25);

        @media (width < 64rem) {
          transform: none;
        }
      }

      h6 {
        opacity: 0;

        @media (width < 64rem) {
          opacity: 1;
        }
      }
    }
  }
}

.dark-mode-icon {
  opacity: 0;

  &.show {
    opacity: 1;
  }
}
</style>
