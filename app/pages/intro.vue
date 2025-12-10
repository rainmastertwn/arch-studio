<script lang="ts" setup>
import JPGicon from '~/assets/images/icon/jpg-icon.webp'
import PDFicon from '~/assets/images/icon/pdf-icon.webp'
import DWGicon from '~/assets/images/icon/dwg-icon.webp'
import XLSicon from '~/assets/images/icon/xls-icon.webp'
import Zoomicon from '~/assets/images/icon/zoom-icon.webp'
import Downloadicon from '~/assets/images/icon/download-icon.webp'
import AdSection from '~/components/common/adSection.vue'
import CardArticle from '~/components/common/cardArticle/index.vue'
import ImageZoom from '~/components/common/imageZoom.vue'

const imgPreview = ref<boolean>(false)
const openZoomPreview = () => {
  imgPreview.value = true
}
const closeImagePreview = () => {
  imgPreview.value = false
}
</script>

<template>
  <section class="container">
    <!-- 標題 -->
    <div class="my-12 lg:my-24">
      <div class="mx-auto w-full max-w-[900px]">
        <h2 class="font-bold text-center tracking-widest mb-6">
          地下儲水：儲集框架的加分要點總整理
        </h2>
        <div class="cross-line mb-6"></div>
        <p class="text-center text-sm tracking-widest">
          在基地保水評估中，儲集框架是提升整體系統效能的重要環節。良好的設計不僅有助於暫存雨水，還能兼顧維護性與結構安全性<br /><br />
          Q5項目評分標準著重於儲集空間的設置方式、材質選擇與功能配置，設計得宜即可取得額外加分<br /><br />
          掌握各項設計細節與規範要求，有助於在規劃階段提前強化保水表現
        </p>
      </div>
    </div>
    <!-- 圖片顯示區塊 -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 mb-6">
      <!-- left  -->
      <div class="col-span-1 lg:col-span-7">
        <div class="relative overflow-hidden rounded-lg mb-6 lg:mb-10">
          <img class="w-full" src="https://picsum.photos/525/350" />

          <div class="zoomout-icon" @click="openZoomPreview">
            <img :src="Zoomicon" />
          </div>
        </div>

        <ImageZoom
          src="https://picsum.photos/525/350"
          :imgPreview="imgPreview"
          @closePreview="closeImagePreview"
        />
      </div>
      <!-- right -->
      <div class="col-span-1 lg:col-span-5">
        <h4 class="side-effect tracking-widest font-bold mb-4">相關資材</h4>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <NuxtLink class="text-up-effect">
            <img class="w-full" src="https://picsum.photos/160/160" />
            <div class="cover"></div>
            <h4 class="z-1 text-white font-bold">高平頭落水頭</h4>
          </NuxtLink>
          <NuxtLink class="text-up-effect">
            <img class="w-full" src="https://picsum.photos/160/160" />
            <div class="cover"></div>
            <h4 class="z-1 text-white font-bold">高平頭落水頭</h4>
          </NuxtLink>
          <NuxtLink class="text-up-effect">
            <img class="w-full" src="https://picsum.photos/160/160" />
            <div class="cover"></div>
            <h4 class="z-1 text-white font-bold">高平頭落水頭</h4>
          </NuxtLink>
          <NuxtLink class="text-up-effect">
            <img class="w-full" src="https://picsum.photos/160/160" />
            <div class="cover"></div>
            <h4 class="z-1 text-white font-bold">高平頭落水頭</h4>
          </NuxtLink>
          <NuxtLink class="text-up-effect">
            <img class="w-full" src="https://picsum.photos/160/160" />
            <div class="cover"></div>
            <h4 class="z-1 text-white font-bold">高平頭落水頭</h4>
          </NuxtLink>
        </div>

        <div class="cross-line mb-6"></div>

        <h4 class="side-effect tracking-widest font-bold mb-4 flex items-center">
          <img class="mr-4" :src="Downloadicon" />
          檔案下載
        </h4>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <a class="source-btn" href="#" target="_blank">
            <img class="mr-4" :src="JPGicon" />
            JPG
          </a>
          <a class="source-btn" href="#" target="_blank">
            <img class="mr-4" :src="PDFicon" />
            PDF
          </a>
          <a class="source-btn" href="#" target="_blank">
            <img class="mr-4" :src="DWGicon" />
            DWG
          </a>
          <a class="source-btn" href="#" target="_blank">
            <img class="mr-4" :src="XLSicon" />
            XLS
          </a>
        </div>
      </div>
    </div>

    <!-- 文字與廣告區塊 -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 mb-10 lg:mb-15">
      <div class="col-span-1 lg:col-span-7">
        <p class="tracking-widest">
          ．花台的排水方法歸納於人工地盤的排水方式，此排水方式主要的目的是將土壤與混凝土隔絕開來進而保護建築結構。<br />
          ．花台底部應鋪設蓄水排水板或雙面排水板創造出一個排水透氣層。<br />
          ．花台壁緣部分應鋪設防根防潮板阻止植物根部酸蝕花台，也可避免長期潮濕導致牆面白華發霉產生壁癌。<br />
          ．花台的表面可採用PP集水陰井或微型陰井並搭配鑄鋁蓋、攔葉器、落水頭，可解決表面積水問題也可防止排水系統堵塞。<br />
          ．如為深層花台(深度>40cm)可於適當距離埋設HDPE透水通氣管使花台土壤潤而不濕。<br />
        </p>
      </div>
      <div class="col-span-1 lg:col-span-5">
        <div class="flex items-center justify-end">
          <AdSection class="max-w-[300px]" imgSrc="https://placehold.co/300x250?text=AD" />
        </div>
      </div>
    </div>

    <!-- 了解更多公共空間排水 -->
    <div>
      <h4 class="side-effect tracking-widest mb-6">了解更多公共空間排水</h4>
      <div class="grid grid-cols-5 gap-6">
        <NuxtLink class="filter-item--side-filter" to="#"> 生態水道 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 樹穴排水 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 草溝排水 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 球場綠地排水 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 球場綠地排水2 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 學校操場 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 高爾夫球場 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 田徑場 </NuxtLink>
        <NuxtLink class="filter-item--side-filter" to="#"> 浸潤式跑馬場 </NuxtLink>
      </div>
    </div>

    <div class="cross-line my-10 lg:my-24"></div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9 max-w-[1200px] mx-auto mb-24">
      <div><AdSection imgSrc="https://placehold.co/600x300?text=AD" /></div>
      <div><AdSection imgSrc="https://placehold.co/600x300?text=AD" /></div>
    </div>

    <!-- 更多內容 -->
    <div class="mb-24">
      <h4 class="side-effect tracking-widest mb-6 lg:mb-10">更多內容</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-9">
        <CardArticle
          title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
          url="#"
        />
        <CardArticle
          title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
          url="#"
        />
        <CardArticle
          title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
          url="#"
        />
        <CardArticle
          title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
          url="#"
        />
      </div>
    </div>
  </section>
</template>
