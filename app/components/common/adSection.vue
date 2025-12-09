<script lang="ts" setup>
// define props with default values
const props = withDefaults(
  defineProps<{
    maxWidth?: string
    imgSrc?: string
  }>(),
  {
    maxWidth: '650px',
    imgSrc: 'https://placehold.co/1440x500?text=AD'
  }
)
</script>

<template>
  <div class="w-full">
    <div class="overflow-hidden rounded-lg mx-auto" :style="{ maxWidth: props.maxWidth }">
      <img class="w-full" alt="AD 廣告圖" :src="props.imgSrc" />
    </div>
  </div>
</template>
