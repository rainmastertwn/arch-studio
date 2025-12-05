<script lang="ts" setup>
import ProductImg from '~/assets/images/product/product-1.webp'
import RainIcon from '~/assets/images/icon/rain-icon.webp'
import WaterIcon from '~/assets/images/icon/water-icon.webp'
import WarningIcon from '~/assets/images/icon/warning-icon.webp'
import DownIcon from '~/assets/images/icon/down-icon.webp'
import GlobalIcon from '~/assets/images/icon/global-icon.webp'
</script>

<template>
  <section class="container">
    <div class="my-12 lg:my-24">
      <h2 class="font-bold mb-6">基地保水Q5：儲集框架的加分要點總整理</h2>
      <p class="text-sm leading-6">
        在基地保水評估中，儲集框架是提升整體系統效能的重要環節。良好的設計不僅有助於暫存雨水，還能兼顧維護性與結構安全性。Q5項目評分標準著重於儲集空間的設置方式、材質選擇與功能配置，設計得宜即可取得額外加分。掌握各項設計細節與規範要求，有助於在規劃階段提前強化保水表現。
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-9 mb-10 lg:mb-15">
      <div class="col-span-1 lg:col-span-6 overflow-hidden rounded-[20px]">
        <img class="w-full h-full object-cover" alt="Product Image" :src="ProductImg" />
      </div>
      <div class="col-span-1 lg:col-span-4">
        <h4 class="font-bold tracking-[4px] mb-6">基地保水是什麼</h4>
        <p class="text-sm leading-6 mb-8">
          基地的保水性能係指建築基地內自然土層及人工土層涵養水分及貯留雨水的能力。基地的保水性能愈佳，基地涵養雨水的能力愈好，有益於土壤內微生物的活動，進而改善土壤之有機品質並滋養植物，維護建築基地內之自然生態環境平衡。其優點包括：
        </p>
        <div class="grid grid-cols-2 gap-6 lg:gap-9 mb-10">
          <div class="flex items-center">
            <div
              class="border-2 border-black-set rounded-full w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] min-w-[50px] min-h-[50px] lg:min-w-[65px] lg:min-h-[65px] flex items-center justify-center bg-white p-2 mr-2 lg:mr-4"
            >
              <img alt="rain icon" :src="RainIcon" srcset="" />
            </div>
            <p class="text-base">減少都市排水系統負擔</p>
          </div>
          <div class="flex items-center">
            <div
              class="border-2 border-black-set rounded-full w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] min-w-[50px] min-h-[50px] lg:min-w-[65px] lg:min-h-[65px] flex items-center justify-center bg-white p-2 mr-2 lg:mr-4"
            >
              <img alt="water icon" :src="WaterIcon" srcset="" />
            </div>
            <p class="text-base">協助補充地下水</p>
          </div>

          <div class="flex items-center">
            <div
              class="border-2 border-black-set rounded-full w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] min-w-[50px] min-h-[50px] lg:min-w-[65px] lg:min-h-[65px] flex items-center justify-center bg-white p-2 mr-2 lg:mr-4"
            >
              <img alt="warning icon" :src="WarningIcon" srcset="" />
            </div>
            <p class="text-base">降低淹水風險</p>
          </div>

          <div class="flex items-center">
            <div
              class="border-2 border-black-set rounded-full w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] min-w-[50px] min-h-[50px] lg:min-w-[65px] lg:min-h-[65px] flex items-center justify-center bg-white p-2 mr-2 lg:mr-4"
            >
              <img alt="down icon" :src="DownIcon" srcset="" />
            </div>
            <p class="text-base">緩解熱島效應</p>
          </div>

          <div class="flex items-center">
            <div
              class="border-2 border-black-set rounded-full w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] min-w-[50px] min-h-[50px] lg:min-w-[65px] lg:min-h-[65px] flex items-center justify-center bg-white p-2 mr-2 lg:mr-4"
            >
              <img alt="global icon" :src="GlobalIcon" srcset="" />
            </div>
            <p class="text-base">提升基地氣候調適能力</p>
          </div>
        </div>
        <div class="flex flex-wrap items-center">
          <p class="text-lg font-medium mr-4 mb-4">更多：</p>
          <div class="product-more-tag mr-4 mb-4">Q6:滲透排水管</div>
          <div class="product-more-tag mb-4">Q7:滲透排水管</div>
        </div>
      </div>
    </div>

    <div class="mb-10 lg:mb-15">
      <h4>埋設儲水槽的加分要點整理</h4>
    </div>

    <div class="h-[1000px] w-full"></div>
  </section>
</template>
