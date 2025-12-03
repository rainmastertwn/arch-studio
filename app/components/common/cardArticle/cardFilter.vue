<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    imgSrc?: string
    title?: string
    content?: string
    url?: string
    columns?: number[]
    tags?: string[]
  }>(),
  {
    columns: () => [5, 5]
  }
)
</script>

<template>
  <NuxtLink class="card-box" :to="props.url">
    <div
      class="grid grid-cols-1 gap-4"
      :class="{
        'lg:grid-cols-[5fr_5fr]': props.columns[0] === 5 && props.columns[1] === 5,
        'lg:grid-cols-[3fr_7fr]': props.columns[0] === 3 && props.columns[1] === 7
      }"
    >
      <div>
        <div class="card-img overflow-hidden rounded-lg">
          <img class="w-full h-full object-cover" :src="props.imgSrc" />
        </div>
      </div>
      <div class="card-content flex flex-col justify-end mb-4 lg:mb-6">
        <p class="text-base text-justify max-text-two-lines leading-6 mb-4">
          {{ props.content }}
        </p>

        <div class="max-text-one-lines">
          <span
            class="text-sm text-gray-888888 text-justify leading-6"
            v-for="tag in props.tags"
            :key="tag"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
