<script lang="ts" setup>
import AdSection from '~/components/common/adSection.vue'
import ProductImg from '~/assets/images/product/product-1.webp'
import ProductDesignImg from '~/assets/images/product/product-design.webp'
import RainIcon from '~/assets/images/icon/rain-icon.webp'
import WaterIcon from '~/assets/images/icon/water-icon.webp'
import WarningIcon from '~/assets/images/icon/warning-icon.webp'
import DownIcon from '~/assets/images/icon/down-icon.webp'
import GlobalIcon from '~/assets/images/icon/global-icon.webp'
import CoinnIcon from '~/assets/images/icon/coinn-icon.webp'
import RainsaveIcon from '~/assets/images/icon/rainsave-icon.webp'
import CardArticle from '~/components/common/cardArticle/index.vue'

const extraTableData = ref([
  {
    extra: '儲水容量符合當地標準',
    description: '須達到單位基地面積每平方公尺儲留一定公升（如：15～25公升/m²，依各縣市規定）。'
  },
  {
    extra: '使用高效滲透型材料或塑膠模組儲水槽',
    description:
      '像是 PP 模組型儲水槽（Rainwater Harvesting Module）可快速拼裝、具有高儲水效率與滲透性，設計者加分。'
  },
  {
    extra: '結合滲透設計（如底部不鋪設防水層）',
    description: '如果結構允許，底部可允許滲透至地下，提高「保水滯洪能力」，增加保水指標得分。'
  },
  {
    extra: '儲水容量符合當地標準',
    description: '須達到單位基地面積每平方公尺儲留一定公升（如：15～25公升/m²，依各縣市規定）。'
  },
  {
    extra: '使用高效滲透型材料或塑膠模組儲水槽',
    description:
      '像是 PP 模組型儲水槽（Rainwater Harvesting Module）可快速拼裝、具有高儲水效率與滲透性，設計者加分。'
  },
  {
    extra: '結合滲透設計（如底部不鋪設防水層）',
    description: '如果結構允許，底部可允許滲透至地下，提高「保水滯洪能力」，增加保水指標得分。'
  },
  {
    extra: '儲水容量符合當地標準',
    description: '須達到單位基地面積每平方公尺儲留一定公升（如：15～25公升/m²，依各縣市規定）。'
  },
  {
    extra: '使用高效滲透型材料或塑膠模組儲水槽',
    description:
      '像是 PP 模組型儲水槽（Rainwater Harvesting Module）可快速拼裝、具有高儲水效率與滲透性，設計者加分。'
  }
])

const suggestionTableData = ref([
  {
    extra: '儲水容量符合當地標準',
    description: '須達到單位基地面積每平方公尺儲留一定公升（如：15～25公升/m²，依各縣市規定）。'
  },
  {
    extra: '使用高效滲透型材料或塑膠模組儲水槽',
    description:
      '像是 PP 模組型儲水槽（Rainwater Harvesting Module）可快速拼裝、具有高儲水效率與滲透性，設計者加分。'
  },
  {
    extra: '結合滲透設計（如底部不鋪設防水層）',
    description: '如果結構允許，底部可允許滲透至地下，提高「保水滯洪能力」，增加保水指標得分。'
  },
  {
    extra: '儲水容量符合當地標準',
    description: '須達到單位基地面積每平方公尺儲留一定公升（如：15～25公升/m²，依各縣市規定）。'
  }
])
</script>

<template>
  <section class="container">
    <!-- 標題 -->
    <div class="my-6 lg:my-24">
      <h2 class="tracking-widest font-bold mb-6">基地保水Q5：儲集框架的加分要點總整理</h2>
      <p class="text-sm leading-6">
        在基地保水評估中，儲集框架是提升整體系統效能的重要環節。良好的設計不僅有助於暫存雨水，還能兼顧維護性與結構安全性。Q5項目評分標準著重於儲集空間的設置方式、材質選擇與功能配置，設計得宜即可取得額外加分。掌握各項設計細節與規範要求，有助於在規劃階段提前強化保水表現。
      </p>
    </div>

    <!-- 概覽 -->
    <div class="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-9 mb-10 lg:mb-15">
      <div class="col-span-1 lg:col-span-6">
        <div class="overflow-hidden rounded-[20px]">
          <img class="w-full h-full object-cover" alt="Product Image" :src="ProductImg" />
        </div>
      </div>
      <div class="col-span-1 lg:col-span-4">
        <h4 class="font-bold tracking-widest mb-6">基地保水是什麼</h4>
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

    <!-- 加分要點整理 -->
    <div class="mb-10 lg:mb-15">
      <h4 class="tracking-widest mb-6 lg:mb-10">埋設儲水槽的加分要點整理</h4>
      <el-table class="custom-table w-full" border :data="extraTableData">
        <el-table-column prop="extra" label="加分重點" width="325" />
        <el-table-column prop="description" label="說明" width="auto" />
      </el-table>
    </div>

    <!-- 設計情境 -->
    <div class="mb-10 lg:mb-15">
      <h4 class="tracking-widest mb-6 lg:mb-10">範例：加分設計情境（以一般住宅基地為例）</h4>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9">
        <div class="col-span-1 lg:col-span-9">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-9">
            <div class="overflow-hidden">
              <img class="w-full" alt="product design image" :src="ProductDesignImg" />
            </div>
            <div class="flex flex-col justify-center items-center">
              <div>
                <p class="mb-4">假設基地面積為 300m²，當地要求保水容量為 20L/m²：</p>
                <ul class="dot-list mb-4">
                  <li>所需儲水容量 = 300 × 20 = 6000公升</li>
                  <li>若你安裝 2 組 3000L 的 PP 模組型儲水槽</li>
                  <li>加上濾水設施 + 雨水澆灌管線 + 滲透式底層結構</li>
                </ul>
                <p>✅ 這樣幾乎能一次獲得所有可用加分！</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 lg:col-span-3">
          <AdSection imgSrc="https://placehold.co/300x300?text=AD" />
        </div>
      </div>
    </div>

    <!-- 設計與文件溝通 -->
    <div class="mb-10 lg:mb-15">
      <h4 class="tracking-widest mb-6 lg:mb-10">設計建議與文件準備</h4>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9">
        <div class="col-span-1 lg:col-span-9">
          <el-table class="custom-table w-full" border :data="suggestionTableData">
            <el-table-column prop="extra" label="加分重點" width="325" />
            <el-table-column prop="description" label="說明" width="auto" />
          </el-table>
        </div>
        <div class="col-span-1 lg:col-span-3">
          <div class="side-effect">
            <h4 class="tracking-widest mb-6 font-bold">你可能感興趣</h4>
            <ul class="dot-list">
              <li>
                <NuxtLink class="max-text-one-lines" href="#"
                  >線形排水：由點而至線，由線連成面的積極排水對策</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="max-text-one-lines" href="#"
                  >線形排水：由點而至線，由線連成面的積極排水對策</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="max-text-one-lines" href="#"
                  >線形排水：由點而至線，由線連成面的積極排水對策</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="max-text-one-lines" href="#"
                  >線形排水：由點而至線，由線連成面的積極排水對策</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 相關連結 -->
    <div class="mb-10 lg:mb-15">
      <h4 class="side-effect tracking-widest mb-6 lg:mb-10">相關連結</h4>
      <div class="flex flex-wrap items-center">
        <NuxtLink class="mr-8 link-btn flex items-center lg:mb-0 mb-4">
          <img class="mr-4" alt="Coinn Icon" :src="CoinnIcon" />
          <div class="flex flex-col">
            <h4 class="mb-2 tracking-widest">儲集框架</h4>
            <p>意動創新有限公司</p>
          </div>
        </NuxtLink>
        <NuxtLink class="link-btn flex items-center">
          <img class="mr-4" alt="Rainsave Icon" :src="RainsaveIcon" />
          <div class="flex flex-col">
            <h4 class="mb-2 tracking-widest">RainSAVE 儲集框架</h4>
            <p>正在旺企業有限公司</p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="cross-line my-10 lg:my-24"></div>

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
