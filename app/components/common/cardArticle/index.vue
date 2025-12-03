<script lang="ts" setup>
import cardVertical from './cardVertical.vue'
import cardHorizontal from './cardHorizontal.vue'
import cardFilter from './cardFilter.vue'

const props = withDefaults(
  defineProps<{
    type?: 'main'
    layout?: 'vertical' | 'horizontal' | 'filter'
    imgSrc?: string
    title?: string
    content?: string
    url?: string
    tags?: string[]
    columns?: [number, number]
  }>(),
  {
    layout: 'vertical',
    url: '#'
  }
)

const map = {
  vertical: cardVertical,
  horizontal: cardHorizontal,
  filter: cardFilter
}

const computedComponent = computed(() => map[props.layout] || null)
</script>

<template>
  <component :is="computedComponent" v-bind="props" />
</template>
