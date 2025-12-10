<script lang="ts" setup>
import { menuItems } from './menu'
import HeaderMenu from './headerMenu.vue'

const mobileMenuStatus = ref<boolean>(false)
const toggleMenu = (): void => {
  mobileMenuStatus.value = !mobileMenuStatus.value
}
</script>

<template>
  <header class="bg-white-set sticky top-0 z-1000">
    <div class="container flex items-center justify-between py-2.5">
      <div class="flex items-center">
        <NuxtLink href="/">
          <img class="w-[200px] lg:w-full" src="~/assets/images/archstudio-logo-color.webp" />
        </NuxtLink>
      </div>
      <HeaderMenu :mobileMenuStatus="mobileMenuStatus" @toggleBurger="toggleMenu" />
    </div>
  </header>
  <!-- mobile content -->
  <div class="mobile-content block lg:hidden" :class="{ 'menu-open': mobileMenuStatus }">
    <div class="container">
      <ul class="mx-2 mt-[60px] flex flex-col">
        <li v-for="item in menuItems" :key="item.label">
          <NuxtLink class="text-xl" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  box-shadow: 0 1px 8px rgb(0, 0, 0, 0.5);
}

$menu-item: 6;

.mobile-content {
  position: fixed;
  top: 82px;
  left: 0;
  z-index: 999;
  overflow: hidden;
  width: 100%;
  height: 0;
  color: #fff;
  background: rgba(#bababa, 1);
  transition:
    all 0.4s ease-out,
    background 0.8s ease-out;
  transition-delay: 0.2s;

  ul li {
    padding-bottom: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    opacity: 0;
    transition:
      transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      opacity 0.6s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    border-bottom: 1px solid #fff;
    transform: scale(1.15) translateY(-30px);

    @for $i from 1 through $menu-item {
      &:nth-child(#{$i}) {
        transition-delay: #{0.56 - ($i * 0.07)}s;
      }
    }
  }

  &.menu-open {
    height: calc(100vh - 82px);

    ul li {
      transform: scale(1) translateY(0);
      opacity: 1;

      @for $i from 1 through $menu-item {
        &:nth-child(#{$i}) {
          transition-delay: #{0.07 * $i + 0.2}s;
        }
      }
    }
  }
}
</style>
