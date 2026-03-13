<script lang="ts" setup>
import CADIcon from '~/assets/images/icons/cad-icon.webp'
import PDFIcon from '~/assets/images/icons/pdf-icon.webp'
import XLSIcon from '~/assets/images/icons/xls-icon.webp'
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'
import type { MultipleCase } from '~/mock/posts'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const props = defineProps<{
  segmentContent: MultipleCase
}>()
</script>

<template>
  <div class="grid grid-cols-12">
    <div
      class="col-span-12 mb-5 grid grid-cols-1 gap-5 lg:grid-cols-3"
      v-for="(items, idx) in segmentContent.caseContent"
      :key="idx"
    >
      <div>
        <img :alt="`post data img ${idx}`" :src="items.imgSrc" srcset="" />
      </div>

      <div v-for="(item, idx) in items.content" :key="idx">
        <h5 class="border-light-gray mb-2 border-b pb-1">{{ item.title }}</h5>
        <p v-html="item.content"></p>
      </div>
    </div>
    <!-- note -->
    <div class="col-span-12 mb-5 grid grid-cols-1 text-right">
      <p class="text-sm">{{ segmentContent.note }}</p>
    </div>
    <div class="col-span-12 col-start-1 grid grid-cols-1 gap-5 lg:col-start-7 lg:grid-cols-2">
      <div
        class="blue-border self-start rounded-2xl border-2 border-transparent p-4"
        :class="{
          hovered: wrapperHover
        }"
      >
        <h4 class="border-light-gray mb-2 border-b pb-2 text-[22px]">建議使用材料</h4>
        <ul>
          <li class="mb-1" v-for="item in segmentContent?.suggestions" :key="item.label">
            <NuxtLink
              class="text-hover flex items-center"
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
      <div
        class="blue-border self-start rounded-2xl border-2 border-transparent p-4"
        :class="{
          hovered: wrapperHover
        }"
      >
        <h4 class="border-light-gray mb-2 border-b pb-2 text-[22px]">設計師 下載專區</h4>
        <ul>
          <li class="mb-1 flex" v-for="(item, idx) in segmentContent?.download" :key="item.title">
            <NuxtLink
              class="text-hover flex items-center"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="mr-2"
                :src="
                  item.type === 'PDF'
                    ? PDFIcon
                    : item.type === 'XLS'
                      ? XLSIcon
                      : item.type === 'CAD'
                        ? CADIcon
                        : ''
                "
                :alt="item.type + ' icon'"
                width="30"
                height="30"
              />
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
