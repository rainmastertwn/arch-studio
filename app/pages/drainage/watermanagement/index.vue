<script lang="ts" setup>
import iconType7 from '~/assets/images/icons/icon-type-7.webp'
import iconType8 from '~/assets/images/icons/icon-type-8.webp'
import iconType9 from '~/assets/images/icons/icon-type-9.webp'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

import { watermanagementData } from '~/mock/watermanagementData'
// category: 雨水排水 SD、儲存雨水 RS、滲透雨水 RI
// filter category SD Data with name length 5, 6, 7
const categories = ['SD', 'RS', 'RI'] as const

const categorizedData = useState('categorizedData', () => {
  return categories.reduce(
    (acc, cat) => {
      // 先過濾出該分類的資料
      const filtered = watermanagementData.filter((item) => item.category.includes(cat))

      acc[cat] = {
        lengthLess5: filtered.filter((item) => item.value.length <= 5),
        length6: filtered.filter((item) => item.value.length === 6),
        lengthOver7: filtered.filter((item) => item.value.length >= 7)
      }
      return acc
    },
    {} as Record<string, any>
  )
})
</script>

<template>
  <section class="mb-10">
    <!-- 雨水排水 -->
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 col-start-1 mb-3 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <div class="flex scroll-mt-6 items-center" id="rainwater-drainage">
          <div
            class="icon-border mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-transparent p-3"
            :class="{
              hovered: wrapperHover
            }"
          >
            <img alt="雨水排水 icon" :src="iconType7" width="82" />
          </div>
          <h4>雨水排水</h4>
        </div>
      </div>
      <div
        class="col-span-12 col-start-1 grid grid-flow-row grid-cols-2 grid-rows-none gap-5 lg:col-span-10 lg:col-start-2 lg:grid-flow-col lg:grid-cols-5 lg:grid-rows-5"
      >
        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.SD.lengthLess5"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>

        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>

        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.SD.length6"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>

        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>
        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>
        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>

        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.SD.lengthOver7"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>
      </div>
      <!-- border bottom -->
      <div
        class="border-light-gray dark:border-white-fixed col-span-12 col-start-1 mt-5 mb-5 flex flex-wrap items-center border-b lg:col-span-10 lg:col-start-2"
      ></div>
    </div>

    <!-- 儲存雨水 -->
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 col-start-1 mb-3 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <div class="flex scroll-mt-6 items-center" id="rainwater-storage">
          <div
            class="icon-border mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-transparent p-3"
            :class="{
              hovered: wrapperHover
            }"
          >
            <img alt="儲存雨水 icon" :src="iconType8" width="82" />
          </div>
          <h4>儲存雨水</h4>
        </div>
      </div>
      <div
        class="col-span-12 col-start-1 grid grid-flow-row grid-cols-2 grid-rows-none gap-5 lg:col-span-10 lg:col-start-2 lg:grid-flow-col lg:grid-cols-5 lg:grid-rows-5"
      >
        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.RS.lengthLess5"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>

        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.RS.length6"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>

        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>

        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.RS.lengthOver7"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>
      </div>
      <!-- border bottom -->
      <div
        class="border-light-gray dark:border-white-fixed col-span-12 col-start-1 mt-5 mb-5 flex flex-wrap items-center border-b lg:col-span-10 lg:col-start-2"
      ></div>
    </div>

    <!-- 滲透雨水 -->
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 col-start-1 mb-3 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <div class="flex scroll-mt-6 items-center" id="rainwater-infiltration">
          <div
            class="icon-border mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-transparent p-3"
            :class="{
              hovered: wrapperHover
            }"
          >
            <img alt="滲透雨水 icon" :src="iconType9" width="82" />
          </div>
          <h4>滲透雨水</h4>
        </div>
      </div>
      <div
        class="col-span-12 col-start-1 grid grid-flow-row grid-cols-2 grid-rows-none gap-5 lg:col-span-10 lg:col-start-2 lg:grid-flow-col lg:grid-cols-5 lg:grid-rows-5"
      >
        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.RI.lengthLess5"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>

        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>
        <!-- 位置遞補，幽靈元素 -->
        <div class="hidden opacity-0 lg:block"></div>

        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.RI.length6"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>

        <NuxtLink
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
          v-for="item in categorizedData.RI.lengthOver7"
          :key="item.value"
          :href="`/drainage/watermanagement/${item.value}`"
        >
          {{ item.value }}
        </NuxtLink>
      </div>
      <!-- border bottom -->
      <div
        class="border-light-gray dark:border-white-fixed col-span-12 col-start-1 mt-5 mb-5 flex flex-wrap items-center border-b lg:col-span-10 lg:col-start-2"
      ></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.application-wrap {
  padding: 8px 12px;
  font-weight: 300;
  border-radius: 40px;
  transition:
    border-color 0.3s ease,
    text-shadow 0.3s ease;

  &:hover {
    border-color: var(--color-green);
    text-shadow:
      0.3px 0 0 currentcolor,
      -0.3px 0 0 currentcolor;
  }
}

.icon-border {
  transition: border-color 0.4s ease;

  &.hovered {
    border-color: #8ad8ff;
  }

  @media (width < 64rem) {
    border-color: #8ad8ff;
  }
}
</style>
