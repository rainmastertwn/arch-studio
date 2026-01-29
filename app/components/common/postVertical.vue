<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    href?: string
    maxLines?: number
    title: string
    imgSrc: string
    content?: string
  }>(),
  {
    maxLines: 2,
    href: '#',
    title: '',
    imgSrc: '',
    content: ''
  }
)
const wrapperHover = inject<Ref<boolean>>('wrapperHover')
</script>

<template>
  <NuxtLink class="flex flex-col" :href="props.href">
    <div class="mb-3 overflow-hidden rounded-2xl">
      <img
        alt="Post Image"
        :class="{
          grayscale: !wrapperHover
        }"
        :src="props.imgSrc"
      />
    </div>
    <h4
      class="max-text-two-lines text-[22px]"
      :class="{
        'mb-3': props.content !== ''
      }"
    >
      {{ props.title }}
    </h4>
    <p
      class="text-sm"
      :class="{
        'max-text-two-lines': props.maxLines === 2,
        'max-text-three-lines': props.maxLines === 3
      }"
      v-if="props.content"
    >
      {{ props.content }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
a.flex {
  img {
    transition: all 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
