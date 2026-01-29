<script lang="ts" setup>
import DonateIcon from '@/assets/images/icons/donate.svg'
const wrapperHover = inject<Ref<boolean>>('wrapperHover')
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer
    class="bg-blue-fixed text-white-fixed dark:border-white-fixed rounded-[52px] border-2 border-transparent p-5 lg:p-9"
  >
    <div class="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
      <div class="border-white-fixed self-start rounded-[14px] border-2 p-4">
        <h5 class="mb-3">相關查詢</h5>
        <ul class="">
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">1968 路況網</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">國土測繪服務雲</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">交通部中央氣象局</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">台灣水庫即時水情</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">今日電力資訊</NuxtLink>
          </li>
          <li class="font-light">
            <NuxtLink class="link-hover-white" href="#">公開資訊觀測站</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="border-white-fixed self-start rounded-[14px] border-2 p-4">
        <h5 class="mb-3">出差專區</h5>
        <ul class="">
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">agoda</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">booking.com</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">易遊網</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">立榮航空</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">台灣高鐵</NuxtLink>
          </li>
          <li class="font-light">
            <NuxtLink class="link-hover-white" href="#">台灣鐵路</NuxtLink>
          </li>
        </ul>
      </div>
      <div
        class="ngo self-start rounded-[14px] border-4 border-transparent p-4"
        :class="{ hovered: wrapperHover }"
      >
        <h5 class="mb-3">友善環境(NGO)</h5>
        <ul class="">
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">世界自然基金會</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">國際自然保護聯盟</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">綠色十字會</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">ASOC南大洋聯盟</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">海洋保護基金會</NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">海洋基金會</NuxtLink>
          </li>
          <li class="font-light">
            <NuxtLink class="link-hover-white" href="#">海洋清潔行動組織</NuxtLink>
          </li>

          <p class="mt-8 flex items-center justify-end text-sm lg:mt-12">贊助</p>
        </ul>
      </div>
      <div
        class="mfr self-start rounded-[14px] border-4 border-transparent p-4"
        :class="{ hovered: wrapperHover }"
      >
        <h5 class="mb-3">優質廠商</h5>
        <ul class="">
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">
              <span class="inline-block min-w-[55px] text-center">COINN</span>
              意動創新
            </NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">
              <span class="inline-block min-w-[55px] text-center">COINN</span>
              雨水管理大師
            </NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink>
              <span class="mr-0.5 inline-block min-w-[55px] text-center">VG</span>
              正在旺企業
            </NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">
              <span class="mr-0.5 inline-block min-w-[55px] text-center">RL</span>
              預鑄截水溝
            </NuxtLink>
          </li>
          <li class="mb-1 font-light">
            <NuxtLink class="link-hover-white" href="#">
              <span class="mr-0.5 inline-block min-w-[55px] text-center">RL</span>
              雨水積磚
            </NuxtLink>
          </li>

          <p class="mt-8 flex items-center justify-end text-sm lg:mt-12">贊助</p>
        </ul>
      </div>
      <div
        class="sp border-white-fixed flex flex-col items-center justify-center rounded-[14px] border-8 p-4"
      >
        <span class="mb-1 text-sm">Arch studio ads</span>
        <img class="mb-1" alt="donate icon" :src="DonateIcon" />
        <p>我想了解廣告贊助</p>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center">
      <div class="mb-2 flex flex-col items-center justify-center gap-4 lg:flex-row">
        <NuxtLink class="link-hover-white text-sm" href="https://www.pcc.gov.tw/" target="_blank">
          行政院公共工程委員會
        </NuxtLink>
        <NuxtLink class="link-hover-white text-sm" href="https://maps.nlsc.gov.tw/" target="_blank">
          國土測繪圖資服務雲
        </NuxtLink>
        <NuxtLink class="link-hover-white text-sm" href="https://www.abri.gov.tw/" target="_blank">
          內政部建築研究所
        </NuxtLink>
        <NuxtLink class="link-hover-white text-sm" href="https://www.tabc.org.tw/" target="_blank">
          財團法人台灣建築中心
        </NuxtLink>
      </div>
      <p class="text-sm">Copyright © {{ currentYear }} Vigor Bonanza Inc. 保留一切權利。</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .ngo,
  .mfr,
  .sp {
    transition: all 0.4s ease;
  }

  .ngo.hovered {
    border-color: var(--color-light-blue);
  }

  .mfr.hovered {
    border-color: var(--color-green);
  }
}
</style>
