<script lang="ts" setup>
import iconType7 from '~/assets/images/icons/icon-type-7.webp'
import iconType8 from '~/assets/images/icons/icon-type-8.webp'
import iconType9 from '~/assets/images/icons/icon-type-9.webp'
</script>

<template>
  <section class="mb-10">
    <!-- 雨水排水 -->
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 col-start-1 mb-3 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <div class="flex items-center">
          <div
            class="mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-[#8AD8FF] p-3"
          >
            <img alt="雨水排水 icon" :src="iconType7" width="82" />
          </div>
          <h4>雨水排水</h4>
        </div>
      </div>
      <div
        class="col-span-12 col-start-1 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <button
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
        >
          test 123
        </button>

        <button
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
        >
          <span>test 123</span>
        </button>
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
        <div class="flex items-center">
          <div
            class="mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-[#8AD8FF] p-3"
          >
            <img alt="儲存雨水 icon" :src="iconType8" width="82" />
          </div>
          <h4>儲存雨水</h4>
        </div>
      </div>
      <div
        class="col-span-12 col-start-1 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <button
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
        >
          test 123
        </button>

        <button
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
        >
          <span>test 123</span>
        </button>
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
        <div class="flex items-center">
          <div
            class="mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-[#8AD8FF] p-3"
          >
            <img alt="滲透雨水 icon" :src="iconType9" width="82" />
          </div>
          <h4>滲透雨水</h4>
        </div>
      </div>
      <div
        class="col-span-12 col-start-1 flex flex-wrap items-center lg:col-span-10 lg:col-start-2"
      >
        <button
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
        >
          test 123
        </button>

        <button
          class="application-wrap bg-gray-dedede dark:bg-blue-fixed dark:border-white-fixed flex cursor-pointer items-center justify-center border-4 border-transparent text-center text-lg"
        >
          <span>test 123</span>
        </button>
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
  margin-right: 12px;
  margin-bottom: 12px;
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
</style>
