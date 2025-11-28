<script lang="ts" setup>
const { imgSrc, title, content, url, columns } = withDefaults(
  defineProps<{
    imgSrc?: string
    title?: string
    content?: string
    url?: string
    columns?: number[]
  }>(),
  {
    columns: [5, 5]
  }
)
</script>

<template>
  <NuxtLink class="card-box" :to="url">
    <div
      class="grid grid-cols-1 gap-4 md:gap-6 lg:gap-9"
      :class="`lg:grid-cols-[${columns[0]}fr_${columns[1]}fr]`"
    >
      <div>
        <div class="card-img overflow-hidden rounded-lg">
          <img class="w-full" :src="imgSrc" />
        </div>
      </div>
      <div class="card-content flex flex-col">
        <h4 class="mb-6 max-text-two-lines leading-8">
          {{ title }}
        </h4>

        <p class="text-sm text-gray-888888 text-justify max-text-three-lines leading-6">
          {{ content }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
