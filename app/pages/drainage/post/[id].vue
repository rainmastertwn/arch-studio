<script lang="ts" setup>
import KnowledgeIcon from '~/assets/images/icons/knowledge.webp'
import CADIcon from '~/assets/images/icons/cad-icon.webp'
import PDFIcon from '~/assets/images/icons/pdf-icon.webp'
import XLSIcon from '~/assets/images/icons/xls-icon.webp'
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'
import type { Cases } from '~/mock/posts'
import { postList } from '~/mock/posts'
const pageId = useRoute().params.id
const postData = postList.find((post) => post.id === Number(pageId))

if (!postData) {
  navigateTo('/404')
}

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

// count postData cases
const postDataCount = postData?.cases.length || 0
const isSegmentShow = ref<boolean>(false)
const segmentValue = ref<string>('')
let segmentOptions: object[] = []
if (postDataCount > 1) {
  isSegmentShow.value = true
  segmentValue.value = postData?.cases[0]?.label || ''
  segmentOptions = postData?.cases || []
}

const segmentContent = ref<Cases[0] | null>(postData?.cases[0] || null)
const segmentChange = (value: string): void => {
  if (!postData) return

  const selected = postData?.cases.find((item) => item.value === value)

  segmentContent.value = selected ? selected : postData?.cases[0] || null
}
</script>

<template>
  <section>
    <div class="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
      <div class="col-span-1 lg:col-span-8">
        <div class="mb-3 overflow-hidden rounded-2xl">
          <img class="h-full w-full" alt="post image" :src="postData?.imgSrc" srcset="" />
        </div>

        <h4 class="mb-4 text-[22px] font-medium">{{ postData?.title }}</h4>
        <p class="text-justify text-lg">{{ postData?.content }}</p>
      </div>
      <div class="col-span-1 lg:col-span-4">
        <div class="border-blue-set mb-3 overflow-hidden rounded-2xl border">
          <img class="w-full" :src="postData?.ad.imgSrc" />
        </div>
        <h4 class="mb-4 flex items-center text-[22px]">
          <img class="mr-2" alt="Knowledge Icon" :src="KnowledgeIcon" width="29" height="29" />
          更多滲透排水知識
        </h4>
        <ul>
          <li
            class="border-light-gray mb-3 border-b pb-3 text-lg"
            v-for="(item, index) in postData?.readMore || []"
            :key="index"
          >
            <NuxtLink class="font-light hover:font-normal" :to="item.link">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="custom-segmented-wrapper mb-3 w-fit"
      :class="{
        hovered: wrapperHover
      }"
    >
      <ElSegmented @change="segmentChange" v-model="segmentValue" :options="segmentOptions" />
    </div>
    <div class="bg-medium-gray mb-8 overflow-hidden rounded-[36px] p-5">
      <div
        class="blue-border mb-5 flex flex-col items-center justify-center rounded-2xl border-8 border-transparent p-2"
        :class="{
          hovered: wrapperHover
        }"
      >
        <h3 class="mb-2">
          {{ segmentContent?.title }}
        </h3>
        <p>{{ segmentContent?.subTitle }}</p>
      </div>
      <h4 class="border-light-gray mb-2 border-b p-1 text-[22px]">
        {{ segmentContent?.imgTitle }}
      </h4>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div class="col-span-1 lg:col-span-4">
          <img class="w-full" :src="segmentContent?.imgSrc" />
        </div>
        <div class="content col-span-1 lg:col-span-3" v-html="segmentContent?.content"></div>
        <div class="col-span-1 grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-5">
          <div
            class="blue-border self-start rounded-2xl border-2 border-transparent p-4"
            :class="{
              hovered: wrapperHover
            }"
          >
            <h4 class="mb-2 text-[22px]">建議使用材料:</h4>
            <ul>
              <li class="mb-1" v-for="item in segmentContent?.suggestions" :key="item.label">
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
          <div
            class="blue-border self-start rounded-2xl border-2 border-transparent p-4"
            :class="{
              hovered: wrapperHover
            }"
          >
            <h4 class="mb-2 text-[22px]">設計師 下載專區:</h4>
            <ul>
              <li
                class="mb-1 flex"
                v-for="(item, idx) in segmentContent?.download"
                :key="item.title"
              >
                <NuxtLink
                  class="flex items-center font-light hover:font-normal"
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
  </section>
</template>

<style lang="scss" scoped>
.content ::v-deep(article) {
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 8px;
  }
}
</style>
