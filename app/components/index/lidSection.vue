<script lang="ts" setup>
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import ExternalWhiteIcon from '~/assets/images/icons/external-link-white.webp'
import type { LIDData } from '~/mock/lidData'
import { lidDataList } from '~/mock/lidData'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const lidValue = ref<string>('')
let lidOptions: object[] = []
lidValue.value = lidDataList[0]?.value || ''
lidOptions = lidDataList.map((item: LIDData) => {
  return { label: item.label, value: item.value }
})

const postData = ref<LIDData | null>(lidDataList[0] || null)

const segmentChange = (value: string): void => {
  lidValue.value = value
  const selected = lidDataList.find((item) => item.value === value)
  postData.value = selected ? selected : null
}
</script>

<template>
  <section>
    <h3 class="mb-5 text-center leading-8">在地滯留 在地滲透 在地淨化<br />從此 我們雨水共生</h3>
    <div
      class="custom-segmented-wrapper mb-5 w-fit"
      :class="{
        hovered: wrapperHover
      }"
    >
      <ElSegmented @change="segmentChange" v-model="lidValue" :options="lidOptions" />
    </div>

    <div class="bg-medium-gray overflow-hidden rounded-[36px] p-5">
      <div
        class="blue-border border-white-fixed mb-5 flex flex-col items-center justify-center rounded-2xl border-8 p-2"
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
        <div class="grid grid-cols-12 gap-5">
          <div class="col-span-9">
            <h4 class="border-light-gray mb-5 border-b pb-2 text-lg">
              {{ postData?.infoTitle }}
            </h4>
            <div class="grid grid-cols-2 gap-5">
              <!-- info img -->
              <div>
                <div
                  class="mb-5 flex flex-col items-center justify-center"
                  v-for="(item, index) in postData?.infoImg || []"
                  :key="index"
                >
                  <div class="mb-1 overflow-hidden rounded-2xl">
                    <img class="mx-auto h-full w-full" :src="item.imgSrc" />
                  </div>
                  <p class="text-lg">{{ item.label }}</p>
                </div>
              </div>
              <!-- info text -->
              <div>
                <div
                  class="mb-5"
                  v-for="(infoItem, infoIndex) in postData?.info || []"
                  :key="infoIndex"
                >
                  <h4 class="border-light-gray mb-1 border-b pb-1 text-lg">{{ infoItem.title }}</h4>
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
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <h4 class="border-light-gray mb-5 border-b pb-2 text-lg">
              {{ postData?.commonLabel }}
            </h4>
            <div class="mb-5">
              <ul>
                <li
                  class="mb-2 flex"
                  v-for="(item, index) in postData?.commonContent || []"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <div
              class="blue-border border-white-fixed flex flex-col items-start justify-center rounded-2xl border-2 p-4"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
