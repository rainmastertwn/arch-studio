<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    imgSrc?: string
    title?: string
    content?: string
    url?: string
    columns?: number[]
  }>(),
  {
    columns: () => [5, 5]
  }
)
</script>

<template>
  <NuxtLink class="card-box" :to="props.url">
    <div
      class="grid grid-cols-1 gap-4 md:gap-6 lg:gap-9"
      :class="{
        'lg:grid-cols-[5fr_5fr]': props.columns[0] === 5 && props.columns[1] === 5,
        'lg:grid-cols-[3fr_7fr]': props.columns[0] === 3 && props.columns[1] === 7
      }"
    >
      <div>
        <div class="card-img overflow-hidden rounded-lg">
          <img class="w-full" :src="props.imgSrc" />
        </div>
      </div>
      <div class="card-content flex flex-col">
        <h4 class="mb-6 max-text-two-lines leading-8">
          {{ props.title }}
        </h4>

        <p class="text-sm text-gray-888888 text-justify max-text-three-lines leading-6">
          {{ props.content }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
