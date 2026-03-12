<script lang="ts" setup>
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'
import type { LIDData } from '~/mock/lidData'
import { lidDataList } from '~/mock/lidData'

import InfoNotice from '~/components/common/infoNotice.vue'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const segmentValue = ref<string>('')
let segmentOptions: object[] = []
segmentValue.value = lidDataList[0]?.value || ''
segmentOptions = lidDataList.map((item: LIDData) => {
  return { label: item.label, value: item.value }
})

const postData = ref<LIDData | null>(lidDataList[0] || null)

const segmentChange = (value: string): void => {
  segmentValue.value = value
  const selected = lidDataList.find((item) => item.value === value)
  postData.value = selected ? selected : null
}
</script>

<template>
  <section>
    <h3 class="mb-8 text-center leading-8">在地滯留 在地滲透 在地淨化<br />從此 我們雨水共生</h3>
    <div
      class="custom-segmented-wrapper mb-2 w-fit"
      :class="{
        hovered: wrapperHover
      }"
    >
      <ElSegmented @change="segmentChange" v-model="segmentValue" :options="segmentOptions" />
    </div>

    <div class="bg-medium-gray relative overflow-hidden rounded-[36px] p-5">
      <div
        class="blue-border mb-5 flex flex-col items-center justify-center rounded-2xl border-8 border-transparent p-2"
        :class="{
          hovered: wrapperHover
        }"
      >
        <h3 class="mb-2">
          {{ postData?.title }}
        </h3>
        <p>{{ postData?.subTitle }}</p>
      </div>
      <!-- info content -->
      <div class="mx-auto max-w-[920px]">
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div class="col-span-1 lg:col-span-9">
            <h4 class="border-light-gray mb-2 border-b pb-2">
              {{ postData?.infoTitle }}
            </h4>
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <!-- info img only loop [0], [1] -->
              <div>
                <div
                  class="mb-5 flex flex-col items-center justify-center"
                  v-for="(item, index) in postData?.infoImg?.slice(0, 2) || []"
                  :key="index"
                >
                  <div class="mb-1 overflow-hidden rounded-2xl">
                    <img class="mx-auto h-full w-full" :src="item.imgSrc" />
                  </div>
                  <p class="text-lg">{{ item.label }}</p>
                </div>
              </div>
              <!-- info text -->
              <div class="flex flex-col">
                <div
                  class="order-2 lg:order-1"
                  v-for="(infoItem, infoIndex) in postData?.info || []"
                  :key="infoIndex"
                >
                  <h4 class="border-light-gray mb-1 border-b pb-1 text-lg" v-if="infoItem.title">
                    {{ infoItem.title }}
                  </h4>
                  <ul>
                    <li
                      class="mb-2 flex text-lg"
                      v-for="(item, index) in infoItem.items"
                      :key="index"
                    >
                      <span class="block min-w-[120px] text-base">{{ item.label }}</span>
                      <span class="ml-2 font-light" v-html="item.content"></span>
                    </li>
                  </ul>
                </div>
                <div
                  class="order-1 mt-0 mb-5 flex flex-col items-center justify-center lg:order-2 lg:mt-20 lg:mb-0"
                  v-if="postData?.infoImg && postData.infoImg.length > 2"
                >
                  <div class="overflow-hidden rounded-2xl">
                    <img class="mx-auto mb-1 h-full w-full" :src="postData?.infoImg[2]?.imgSrc" />
                  </div>
                  <p class="text-lg">{{ postData?.infoImg[2]?.label }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 lg:col-span-3">
            <h4 class="border-light-gray mb-2 border-b pb-2">
              {{ postData?.commonLabel }}
            </h4>
            <div class="mb-5">
              <ul>
                <li
                  class="mb-2 flex font-light"
                  v-for="(item, index) in postData?.commonContent || []"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <div
              class="blue-border flex flex-col rounded-2xl border-2 border-transparent p-4"
              :class="{
                hovered: wrapperHover
              }"
            >
              <h4 class="border-light-gray mb-2 border-b pb-2">建議使用材料</h4>
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
          </div>
        </div>
      </div>

      <!-- info icon -->
      <InfoNotice class="right-0 bottom-0 lg:absolute lg:right-5 lg:bottom-5">
        <p class="mb-2">
          以上資料整理自《內政部國土屬水環境低衝擊開發設施手冊》<br />
          主要目的是讓更多人了解開發土地的必要之惡與環境保護的重要性，以此取得平衡我們才配得開發的權力進而取得永續的未來。
        </p>
        <a
          class="mb-1 flex items-center self-start underline"
          href="https://www.nlma.gov.tw/ch/publication/publications/55"
          target="_blank"
          rel="noopener noreferrer"
        >
          *我想更進一步了解關於水環境低衝擊開發設施手冊
          <img class="ml-2" alt="external link icon" :src="ExternalIcon" width="15" height="15" />
        </a>
      </InfoNotice>
    </div>
  </section>
</template>
