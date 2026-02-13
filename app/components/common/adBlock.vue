<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: string
    adText?: string
    text?: string
    rounded?: string
    href?: string
    imgSrc?: string
  }>(),
  {
    size: '1200x200',
    text: 'Ad',
    rounded: '2xl',
    href: '#',
    imgSrc: '',
    adText: ''
  }
)
</script>

<template>
  <section>
    <NuxtLink :href="props.href" target="_blank">
      <div
        class="relative h-[150px] overflow-hidden border lg:h-auto"
        :class="{ 'rounded-2xl': rounded === '2xl', 'rounded-[36px]': rounded === '36px' }"
      >
        <span
          class="text-blue-set bg-white-set border-blue-set absolute right-0 bottom-0 border-t border-l p-1 text-sm font-light lg:p-2"
          v-if="props.adText"
          :class="{
            'rounded-tl-2xl': rounded === '2xl',
            'rounded-tl-[36px]': rounded === '36px'
          }"
        >
          AD 贊助
        </span>
        <img
          class="h-full w-full object-cover"
          alt="占位圖"
          :src="
            props.imgSrc || `https://placehold.co/${props.size}/2c3847/ffffff/?text=${props.text}`
          "
        />
      </div>
    </NuxtLink>
    <div class="flex items-center justify-end">
      <span class="pr-2 text-sm font-light">{{ props.adText }}</span>
    </div>
  </section>
</template>
