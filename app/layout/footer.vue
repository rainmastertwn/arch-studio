<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="px-[16px] py-[32px] text-white lg:px-0 lg:pt-[50px] lg:pb-[32px] relative">
    <div class="container mb-8 lg:mb-14">
      <div class="container grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div class="cols-span-1 lg:col-span-2 order-4 lg:order-1">
          <img class="mb-10" src="~/assets/images/archstudio-logo-white.png" alt="" srcset="" />
          <p class="text-sm leading-10">
            相關排水問題及照片歡迎來信詢問， <br />
            您的問題可能會成為網頁裡的一則內容喔！<br />
            <a href="mailto:astu@archstudio.com.tw">astu@archstudio.com.tw</a>
          </p>
        </div>
        <div class="col-span-1 flex flex-col order-1 lg:order-2 mb-2 lg:mb-0">
          <h4 class="text-xl font-bold mb-4 tracking-[8px]">雨水共存</h4>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#">雨水排水</NuxtLink>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#">雨水儲存</NuxtLink>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#">雨水滲透</NuxtLink>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#"
            >LID低衝擊開發</NuxtLink
          >
          <NuxtLink class="text-sm font-light text-gray-bababa" href="#">各種積水問題</NuxtLink>
        </div>
        <div class="col-span-1 flex flex-col order-2 lg:order-3 mb-2 lg:mb-0">
          <h4 class="text-xl font-bold mb-4 tracking-[8px]">實驗室</h4>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#">SGS 實驗室</NuxtLink>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#">UL 實驗室</NuxtLink>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#"
            >TGS 標準實驗</NuxtLink
          >
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#"
            >TAF 全國認證基金會</NuxtLink
          >
        </div>
        <div class="col-span-1 flex flex-col order-3 lg:order-4 mb-2 lg:mb-0">
          <h4 class="text-xl font-bold mb-4 tracking-[8px]">長期贊助商</h4>
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#"
            >意動創新有限公司</NuxtLink
          >
          <NuxtLink class="text-sm font-light text-gray-bababa mb-4" href="#"
            >正在旺企業有限公司</NuxtLink
          >
        </div>
      </div>

      <!-- cross line -->
      <div class="h-[1px] bg-gray-bababa w-full my-6 lg:my-10"></div>

      <!-- copyright -->
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="flex items-center mb-4 lg:mb-0">
          <img class="mr-4" src="~/assets/images/donate-icon.png" alt="" srcset="" />
          <p class="text-sm text-gray-bababa">
            您的支持是我們進步的力量，請協助我們，讓我們擁有足夠資源呈現出更好的內容
          </p>
        </div>
        <div>
          <span class="flex justify-center text-sm text-gray-bababa">
            Copyright © {{ currentYear }} ARCH STUDIO. 保留一切權利。
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$header-margin: 32px;
$footer-img-path: '~/assets/images/footer.png';

footer {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url($footer-img-path);
}
</style>
