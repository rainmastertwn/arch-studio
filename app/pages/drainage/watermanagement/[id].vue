<script lang="ts" setup>
import CADIcon from '~/assets/images/icons/cad-icon.webp'
import PDFIcon from '~/assets/images/icons/pdf-icon.webp'
import XLSIcon from '~/assets/images/icons/xls-icon.webp'
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'

import { watermanagementData } from '~/mock/watermanagementData'

const router = useRouter()
const pageId = useRoute().params.id
const postData = Object.values(watermanagementData).find((item) => item.value === pageId)

if (!postData) {
  navigateTo('/404')
}

const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <section>
    <div class="mx-auto max-w-[920px]">
      <div class="bg-medium-gray mb-8 overflow-hidden rounded-[36px] p-5">
        <div
          class="sky-blue-border mb-5 flex flex-col items-center justify-center rounded-2xl border-8 border-transparent p-2"
          :class="{
            hovered: wrapperHover
          }"
        >
          <h2>
            {{ postData?.title }}
          </h2>
        </div>

        <h4 class="border-light-gray mb-5 border-b pb-2 text-[22px]">
          {{ postData?.subTitle }}
        </h4>

        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-12 lg:col-span-8">
            <div class="overflow-hidden rounded-2xl">
              <img class="w-full" alt="info image" :src="postData?.infoImg.imgSrc" />
            </div>
          </div>
          <div class="col-span-12 lg:col-span-4">
            <div
              class="sky-blue-border mb-5 flex flex-col rounded-2xl border-2 border-transparent p-4"
              :class="{
                hovered: wrapperHover
              }"
            >
              <h4 class="border-light-gray mb-2 border-b p-1">建議使用材料</h4>
              <ul>
                <li class="mb-1" v-for="item in postData?.suggestions" :key="item.label">
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
              class="sky-blue-border self-start rounded-2xl border-2 border-transparent p-4"
              :class="{
                hovered: wrapperHover
              }"
            >
              <h4 class="border-light-gray mb-2 border-b pb-2">下載專區</h4>
              <ul>
                <li class="mb-1 flex" v-for="(item, idx) in postData?.download" :key="item.title">
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
      </div>
    </div>
  </section>
</template>
