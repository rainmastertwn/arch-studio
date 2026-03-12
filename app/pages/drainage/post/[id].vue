<script lang="ts" setup>
import KnowledgeIcon from '~/assets/images/icons/knowledge.webp'
import SingleCaseLayout from '~/components/post/singleCaseLayout.vue'
import MultipleCaseLayout from '~/components/post/multipleCaseLayout.vue'
import type { Post, SingleCase, MultipleCase } from '~/mock/posts'
import { postList } from '~/mock/posts'
const pageId = useRoute().params.id
const postData = postList.find((post) => post.id === Number(pageId))

if (!postData) {
  navigateTo('/404')

  throw new Error('Post not found')
}

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

// count postData cases
const postDataCount = postData?.cases.length || null
const isSegmentShow = ref<boolean>(false)
const segmentValue = ref<string>('')
let segmentOptions: object[] = []
if (postDataCount > 1) {
  isSegmentShow.value = true
  segmentValue.value = postData?.cases[0]?.label || null
  segmentOptions = postData?.cases || []
}

const segmentContent = ref<SingleCase | MultipleCase>(postData?.cases[0] || null)
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
            <NuxtLink class="text-hover" :to="item.link">
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
        <h2 class="mb-2">
          {{ segmentContent?.title }}
        </h2>
        <p class="text-center" v-html="segmentContent?.subTitle"></p>
      </div>
      <h4 class="border-light-gray mb-5 border-b pb-2 text-[22px]">
        {{ segmentContent?.imgTitle }}
      </h4>
      <SingleCaseLayout v-if="!segmentContent?.caseContent" :segmentContent="segmentContent" />
      <MultipleCaseLayout v-else />
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
