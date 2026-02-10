<script lang="ts" setup>
import iconType10 from '~/assets/images/icons/icon-type-10.webp'
import iconType11 from '~/assets/images/icons/icon-type-11.webp'
import type { Post } from '~/mock/posts'
import { postList } from '~/mock/posts'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

// category: waterIssue 各種積水問題, howToChoose 我該如何選擇
const categories = ['waterIssue', 'howToChoose'] as const
// filter postlist with category waterIssue and howToChoose
const categorizedData = useState('categorizedPosts', () => {
  return categories.reduce(
    (acc, cat) => {
      acc[cat] = postList.filter((post) => post.category?.includes(cat))
      return acc
    },
    {} as Record<string, Post[]>
  )
})
</script>

<template>
  <section class="mb-10">
    <!-- 各種積水問題 -->
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 col-start-1 mb-3 flex scroll-mt-6 flex-wrap items-center lg:col-span-10 lg:col-start-2"
        id="waterIssue"
      >
        <div
          class="icon-border mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-transparent p-3"
          :class="{
            hovered: wrapperHover
          }"
        >
          <img alt="各種積水問題 icon" :src="iconType10" />
        </div>
        <h4>各種積水問題</h4>
      </div>

      <div
        class="grid-flow-rows col-span-12 col-start-1 mb-3 grid grid-cols-1 grid-rows-none gap-5 lg:col-span-10 lg:col-start-2 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5"
      >
        <NuxtLink
          class="border-light-gray border-b pb-3"
          v-for="post in categorizedData.waterIssue"
          :key="post.id"
          :href="`/drainage/post/${post.id}`"
        >
          <p class="text-hover max-text-two-lines">
            {{ post.title }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <!-- 我該如何選擇 -->
    <div class="grid grid-cols-12">
      <div
        class="col-span-12 col-start-1 mb-3 flex scroll-mt-6 flex-wrap items-center lg:col-span-10 lg:col-start-2"
        id="howToChoose"
      >
        <div
          class="icon-border mr-5 flex h-[106px] w-[106px] items-center justify-center rounded-full border-6 border-transparent p-3"
          :class="{
            hovered: wrapperHover
          }"
        >
          <img alt="我該如何選擇 icon" :src="iconType11" />
        </div>
        <h4>我該如何選擇</h4>
      </div>

      <div
        class="grid-flow-rows col-span-12 col-start-1 mb-3 grid grid-cols-1 grid-rows-none gap-5 lg:col-span-10 lg:col-start-2 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5"
      >
        <NuxtLink
          class="border-light-gray border-b pb-3"
          v-for="post in categorizedData.howToChoose"
          :key="post.id"
          :href="`/drainage/post/${post.id}`"
        >
          <p class="text-hover max-text-two-lines">
            {{ post.title }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.icon-border {
  transition: border-color 0.4s ease;

  &.hovered {
    // border-color: #1ab0fc;
    border-color: var(--color-light-blue);
  }

  @media (width < 64rem) {
    // border-color: #1ab0fc;
    border-color: var(--color-light-blue);
  }
}
</style>
