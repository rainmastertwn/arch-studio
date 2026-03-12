<script lang="ts" setup>
import Q5_1 from '~/assets/images/index/Q5-1.png'
import PostVertical from '~/components/common/postVertical.vue'

const wrapperHover = inject<Ref<boolean>>('wrapperHover')

import type { Post } from '~/mock/posts'
import { postList } from '~/mock/posts'

const mainPost = ref<Post[]>([])
const secondPosts = ref<Post[]>([])
const thirdPosts = ref<Post[]>([])
mainPost.value = postList.slice(0, 1)
secondPosts.value = postList.slice(1, 3)
thirdPosts.value = postList.slice(3, 4)
</script>

<template>
  <section class="grid grid-cols-1 gap-5 lg:grid-cols-12">
    <div class="col-span-1 lg:col-span-6">
      <PostVertical
        class="mb-5"
        :title="mainPost[0]?.title || ''"
        :maxLines="2"
        :imgSrc="mainPost[0]?.imgSrc || ''"
        :content="mainPost[0]?.content || ''"
        :href="`drainage/post/${mainPost[0]?.id}`"
      />
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <PostVertical
          :title="thirdPosts[0]?.title || ''"
          :maxLines="2"
          :imgSrc="thirdPosts[0]?.imgSrc || ''"
          :content="thirdPosts[0]?.content || ''"
          :href="`drainage/post/${thirdPosts[0]?.id}`"
        />
        <!-- <PostVertical :title="thirdPosts[1]?.title" :imgSrc="PostImg4" /> -->
      </div>
    </div>
    <div class="col-span-1 lg:col-span-3">
      <PostVertical
        class="mb-5"
        :title="post?.title || ''"
        v-for="(post, index) in secondPosts"
        :key="post.id"
        :imgSrc="post.imgSrc || ''"
        :content="post.content || ''"
        :maxLines="3"
        :href="`drainage/post/${post?.id}`"
      />
    </div>
    <div class="col-span-1 lg:col-span-3">
      <NuxtLink
        class="bg-medium-gray transition-border mb-5 flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 p-5 duration-300"
        href="/drainage/sr-calc"
        :class="{
          'border-light-blue': wrapperHover,
          'border-transparent': !wrapperHover
        }"
      >
        <h4 class="mb-2">基地保水</h4>
        <div class="overflow-hidden rounded-xl">
          <img alt="Q5-1 Image" :src="Q5_1" />
        </div>
      </NuxtLink>
      <!-- <NuxtLink
        class="bg-medium-gray transition-border flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 p-5 duration-300"
        href="#"
        :class="{
          'border-light-blue': wrapperHover,
          'border-transparent': !wrapperHover
        }"
      >
        <h4 class="mb-2">面積換算集水量</h4>
        <div class="overflow-hidden rounded-xl">
          <img alt="Q5-1 Image" :src="Q5_1" />
        </div>
      </NuxtLink> -->
    </div>
  </section>
</template>
