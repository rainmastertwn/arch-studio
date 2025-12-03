<script lang="ts" setup>
import cardVertical from './cardVertical.vue'
import cardHorizontal from './cardHorizontal.vue'

const props = withDefaults(
  defineProps<{
    type?: 'main'
    layout?: 'vertical' | 'horizontal'
    imgSrc?: string
    title?: string
    content?: string
    url?: string
  }>(),
  {
    layout: 'vertical',
    url: '#'
  }
)
</script>

<template>
  <component :is="layout === 'vertical' ? cardVertical : cardHorizontal" v-bind="props" />
</template>
