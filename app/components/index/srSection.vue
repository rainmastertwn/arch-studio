<script lang="ts" setup>
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
    <h3 class="mb-5 text-center leading-8">延續土地的滲透保水能力<br />即刻 我們開始行動</h3>
    <div
      class="custom-segmented-wrapper mb-5 w-fit"
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
      <InfoNotice />
    </div>
  </section>
</template>
