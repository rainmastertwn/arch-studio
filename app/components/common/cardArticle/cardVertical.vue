<script lang="ts" setup>
const { type, imgSrc, title, content, url } = defineProps<{
  type?: 'main'
  imgSrc?: string
  title?: string
  content?: string
  url?: string
}>()
</script>

<template>
  <NuxtLink class="card-box" :to="url">
    <div
      class="card-img overflow-hidden r mb-6 lg:mb-8"
      :class="type === 'main' ? 'rounded-3xl' : 'rounded-lg'"
    >
      <img class="w-full" :src="imgSrc" />
    </div>
    <div class="card-content">
      <h3 class="mb-6 max-text-two-lines leading-8">{{ title }}</h3>
      <p class="text-sm text-gray-888888 text-justify max-text-two-lines leading-6">
        {{ content }}
      </p>
    </div>
  </NuxtLink>
</template>
