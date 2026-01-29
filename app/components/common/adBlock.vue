<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: string
    text?: string
    rounded?: string
  }>(),
  {
    size: '1200x200',
    text: 'Ad',
    rounded: '2xl'
  }
)
</script>

<template>
  <section class="">
    <div
      class="overflow-hidden border"
      :class="{ 'rounded-2xl': rounded === '2xl', 'rounded-[36px]': rounded === '36px' }"
    >
      <img
        class="w-full"
        alt="占位圖"
        :src="`https://placehold.co/${props.size}/2c3847/ffffff/?text=${props.text}`"
      />
    </div>
  </section>
</template>
