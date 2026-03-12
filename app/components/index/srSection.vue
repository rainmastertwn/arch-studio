<script lang="ts" setup>
import ExternalIcon from '~/assets/images/icons/external-link.webp'
import layoutTwoColumn from '~/components/index/srSection/layoutTwoColumn.vue'
import layoutThreeColumn from '~/components/index/srSection/layoutThreeColumn.vue'
import type { SRData } from '~/mock/srData'
import { srDataList } from '~/mock/srData'

import InfoNotice from '~/components/common/infoNotice.vue'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

const segmentValue = ref<string>('')
let segmentOptions: object[] = []
segmentValue.value = srDataList[0]?.value || ''
segmentOptions = srDataList.map((item: SRData) => {
  return { label: item.label, value: item.value }
})

const postData = ref<SRData | null>(srDataList[0] || null)

const segmentChange = (value: string): void => {
  segmentValue.value = value
  const selected = srDataList.find((item) => item.value === value)
  postData.value = selected ? selected : null
}

const TWO_COLUMN_ARRAY = [0, 1, 2, 7]
const currentLayout = computed(() => {
  if (!postData.value) return null
  const index = srDataList.findIndex((item) => item.value === postData.value?.value)
  if (TWO_COLUMN_ARRAY.includes(index)) {
    return layoutTwoColumn
  } else {
    return layoutThreeColumn
  }
})
</script>

<template>
  <section>
    <h3 class="mb-8 text-center leading-8">延續土地的滲透保水能力<br />即刻 我們開始行動</h3>
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
        <component :is="currentLayout" :post-data="postData" />
      </div>

      <!-- info icon -->
      <InfoNotice class="right-0 bottom-0 lg:absolute lg:right-5 lg:bottom-5">
        <p class="mb-2">
          以上資料整理自《內政部建研所綠建築評估手冊》<br />
          主要目的是讓更多人得知我們的國家有一群人很努力地在研究、探索並用各種方式推動我們的永續未來。
        </p>
        <a
          class="mb-1 flex items-center self-start underline"
          href="https://www.abri.gov.tw/News.aspx?n=20916&sms=9512"
          target="_blank"
          rel="noopener noreferrer"
        >
          *我想更進一步了解關於綠建築評估手冊
          <img class="ml-2" alt="external link icon" :src="ExternalIcon" width="15" height="15" />
        </a>
      </InfoNotice>
    </div>
  </section>
</template>
