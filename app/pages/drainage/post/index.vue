<script lang="ts" setup>
import waterIssue from '~/components/post/waterIssue.vue'
import howToChoose from '~/components/post/howToChoose.vue'
import type { Post } from '~/mock/posts'
import { postList } from '~/mock/posts'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

// category: waterIssue 各種積水問題, howToChoose 我該如何選擇
const categories = ['waterIssue', 'howToChoose'] as const
// filter postlist with category waterIssue and howToChoose
const categorizedData = useState('categorizedPosts', () => {
  const data = categories.reduce(
    (acc, cat) => {
      acc[cat] = postList.filter((post) => post.category?.includes(cat))
      return acc
    },
    {} as Record<string, Post[]>
  )
  return {
    waterIssue: data.waterIssue ?? [],
    howToChoose: data.howToChoose ?? []
  }
})
</script>

<template>
  <section class="mb-10">
    <!-- 各種積水問題 -->
    <waterIssue :postData="categorizedData.waterIssue" />
    <!-- 我該如何選擇 -->
    <howToChoose :postData="categorizedData.howToChoose" />
  </section>
</template>

<style lang="scss" scoped>
.icon-border {
  transition: border-color 0.4s ease;

  &.hovered {
    border-color: var(--color-light-blue);
  }

  @media (width < 64rem) {
    border-color: var(--color-light-blue);
  }
}
</style>
