<script lang="ts" setup>
import PostImg1 from '@/assets/images/index/post-1.webp'
import PostImg2 from '@/assets/images/index/post-2.webp'
import PostImg3 from '@/assets/images/index/post-3.webp'
import PostImg4 from '@/assets/images/index/post-4.webp'
import Q5_1 from '@/assets/images/index/Q5-1.webp'
import PostVertical from '@/components/common/postVertical.vue'
const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <section class="grid grid-cols-12 gap-5">
    <div class="col-span-6">
      <PostVertical
        class="mb-5"
        title="社區中庭排水不良，花台溢水，且經常發生積水問題的改善方法"
        :maxLines="2"
        :imgSrc="PostImg1"
        content="最近有位新店的吳大哥告訴我們他們的社區每逢大雨必定淹水，中庭淹水，花台漫水，雨水甚至漫流至管理中心。漫流後的中庭清理困難，住戶有心想解決，可是卻苦無方法。"
      />
      <div class="grid grid-cols-2 gap-5">
        <PostVertical
          title="社區中庭排水不良，花台溢水，且經常發生積水問題的改善方法"
          :imgSrc="PostImg2"
        />
        <PostVertical
          title="社區中庭排水不良，花台溢水，且經常發生積水問題的改善方法"
          :imgSrc="PostImg2"
        />
      </div>
    </div>
    <div class="col-span-3">
      <PostVertical
        class="mb-5"
        title="收集斜屋頂雨水的地上型儲水雨撲滿。"
        :imgSrc="PostImg3"
        content="截水溝（又叫排水溝、集水溝）在建築、景觀、道路排水工程中扮演關鍵角色。選擇 塑膠截水溝 vs. RC（鋼筋混凝土）截水溝，會影響施工方式、成本、耐久性與維修便利性。"
        :maxLines="3"
      />
      <PostVertical
        title="結合排水滯洪與生態保育的永續發展設計"
        :imgSrc="PostImg4"
        content="截水溝（又叫排水溝、集水溝）在建築、景觀、道路排水工程中扮演關鍵角色。選擇 塑膠截水溝 vs. RC（鋼筋混凝土）截水溝，會影響施工方式、成本、耐久性與維修便利性。"
        :maxLines="3"
      />
    </div>
    <div class="col-span-3">
      <NuxtLink
        class="bg-medium-gray transition-border mb-5 flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 p-5 duration-400"
        href="#"
        :class="{
          'border-light-blue': wrapperHover,
          'border-transparent': !wrapperHover
        }"
      >
        <h4 class="mb-2">基地保水計算機</h4>
        <div class="overflow-hidden rounded-xl">
          <img
            alt="Q5-1 Image"
            :class="{
              grayscale: !wrapperHover
            }"
            :src="Q5_1"
          />
        </div>
      </NuxtLink>
      <NuxtLink
        class="bg-medium-gray transition-border flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 p-5 duration-400"
        href="#"
        :class="{
          'border-light-blue': wrapperHover,
          'border-transparent': !wrapperHover
        }"
      >
        <h4 class="mb-2">面積換算集水量</h4>
        <div class="overflow-hidden rounded-xl">
          <img
            alt="Q5-1 Image"
            :class="{
              grayscale: !wrapperHover
            }"
            :src="Q5_1"
          />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
