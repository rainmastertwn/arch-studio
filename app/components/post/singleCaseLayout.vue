<script lang="ts" setup>
import CADIcon from '~/assets/images/icons/cad-icon.webp'
import PDFIcon from '~/assets/images/icons/pdf-icon.webp'
import XLSIcon from '~/assets/images/icons/xls-icon.webp'
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'
import type { SingleCase } from '~/mock/posts'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const props = defineProps<{
  segmentContent: SingleCase
}>()
</script>
<template>
  <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
    <div class="col-span-1 lg:col-span-4">
      <img class="mb-2 w-full" :src="segmentContent?.imgSrc" />
      <p class="text-center">{{ segmentContent?.imgDescription }}</p>
    </div>
    <div class="content col-span-1 lg:col-span-3" v-html="segmentContent?.content"></div>
    <div class="col-span-1 grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-5">
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
