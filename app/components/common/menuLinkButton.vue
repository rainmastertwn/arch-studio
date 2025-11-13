<script lang="ts" setup>
// define props image src as string , button name as string, link as string
const props = defineProps<{
  hover?: boolean
  active?: boolean
  imgSrc: string
  buttonName: string
  link?: string
}>()
</script>

<template>
  <div>
    <NuxtLink
      class="menu-link flex flex-col justify-center bg-white-set rounded-3xl py-4 lg:py-6 m-2 lg:m-4"
      :class="{ hover: props.hover, active: props.active }"
      :to="props.link"
    >
      <img class="w-full max-w-[100px] lg:max-w-40 mx-auto mb-1 lg:mb-2" :src="props.imgSrc" />
      <h4 class="text-base text-center">{{ props.buttonName }}</h4>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.menu-link {
  border: 1px solid var(--color-gray-set);
  transition: all 0.3s ease;

  img,
  h4 {
    transition: all 0.3s ease;
  }

  &.active {
    img {
      transform: translateY(20px) scale(1.25);
    }

    h4 {
      opacity: 0;
    }
  }

  &:hover {
    border-color: transparent;
    box-shadow: 0 4px 15px rgb(0, 0, 0, 0.1);

    img {
      transform: translateY(20px) scale(1.25);
    }

    h4 {
      opacity: 0;
    }
  }
}
</style>
