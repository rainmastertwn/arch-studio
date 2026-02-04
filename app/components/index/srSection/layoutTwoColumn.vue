<script lang="ts" setup>
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'

import type { SRData } from '~/mock/srData'

const props = defineProps<{
  postData: SRData | null
}>()

const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <div class="flex flex-col justify-center gap-5 lg:flex-row">
    <div class="basis-1/1 lg:basis-2/4">
      <!-- info 0 data -->
      <h4 class="border-light-gray mb-3 border-b pb-2">
        {{ postData?.info[0]?.title }}
      </h4>
      <ul class="mb-3">
        <li
          class="mb-2 flex text-lg"
          v-for="(item, index) in postData?.info[0]?.items"
          :key="index"
        >
          <span class="block min-w-[65px] text-base" v-if="item.label">{{ item.label }}</span>
          <span
            class="font-light"
            v-html="item.content"
            :class="{
              'ml-2': item.label !== ''
            }"
          ></span>
        </li>
      </ul>
      <div class="overflow-hidden rounded-2xl">
        <img class="mx-auto h-full w-full" :src="postData?.infoImg[0]?.imgSrc" />
      </div>
    </div>

    <div class="basis-1/1 lg:basis-2/4">
      <!-- info 1 data -->
      <h4 class="border-light-gray mb-3 border-b pb-2">
        {{ postData?.info[1]?.title }}
      </h4>
      <ul class="mb-3">
        <li
          class="mb-2 flex text-lg"
          v-for="(item, index) in postData?.info[1]?.items"
          :key="index"
        >
          <span class="block min-w-[35px] text-base" v-if="item.label">{{ item.label }}</span>
          <span
            class="font-light"
            v-html="item.content"
            :class="{
              'ml-2': item.label !== ''
            }"
          ></span>
        </li>
      </ul>
      <!-- info 2 data -->
      <h4 class="border-light-gray mb-3 border-b pb-2">
        {{ postData?.info[2]?.title }}
      </h4>
      <ul class="mb-5">
        <li
          class="mb-2 flex text-lg"
          v-for="(item, index) in postData?.info[2]?.items"
          :key="index"
        >
          <span class="block min-w-[35px] text-base" v-if="item.label">{{ item.label }}</span>
          <span
            class="font-light"
            v-html="item.content"
            :class="{
              'ml-2': item.label !== ''
            }"
          ></span>
        </li>
      </ul>

      <!-- suggestions -->
      <!-- justify-self-start -->
      <div
        class="blue-border border-white-fixed mb-5 flex flex-col justify-self-start rounded-2xl border-2 p-4"
        v-if="postData?.suggestions && postData.suggestions.length > 0"
        :class="{
          hovered: wrapperHover
        }"
      >
        <h4 class="mb-2">建議使用材料</h4>
        <ul>
          <li class="mb-1" v-for="item in postData?.suggestions" :key="item.label">
            <NuxtLink
              class="flex items-center font-light hover:font-normal"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.label }}
              <img
                class="ml-2 block dark:hidden"
                alt="external link icon"
                :src="ExternalIcon"
                width="15"
                height="15"
              />
              <img
                class="ml-2 hidden dark:block"
                alt="external link icon"
                :src="ExternalWhiteIcon"
                width="15"
                height="15"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- comment -->
      <div class="flex flex-col justify-center">
        <NuxtLink
          class="mb-1 text-base font-light hover:font-normal"
          v-for="item in postData?.comment"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          :key="item.label"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
