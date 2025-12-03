<script lang="ts" setup>
import AdSection from '~/components/common/adSection.vue'
import CardArticle from '~/components/common/cardArticle/index.vue'
</script>

<template>
  <section class="container mb-10 lg:mb-15">
    <div class="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-9">
      <!-- content place -->
      <div class="col-span-1 md:col-span-5 lg:col-span-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9 mb-6">
          <!-- left content -->
          <div>
            <h3 class="mb-4 lg:mb-6 font-bold">基地保水Q5、Q6、Q7</h3>
            <ul class="dot-list mb-6">
              <li>
                <NuxtLink href="#">儲集框架的加分要點總整理</NuxtLink>
              </li>
              <li>
                <NuxtLink href="#">滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink>
              </li>
              <li>
                <NuxtLink href="#">滲透陰井大小及個數與計分的相應關係</NuxtLink>
              </li>
            </ul>

            <CardArticle
              class="mb-6 lg:mb-0"
              title="塑膠製儲集框架與RC儲水池差別之處"
              layout="vertical"
              imgSrc="https://picsum.photos/525/350"
              content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
              url="#"
            />

            <div class="cross-line my-6 lg:my-10 hidden lg:block"></div>

            <CardArticle
              class="mb-6"
              title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
              layout="horizontal"
              imgSrc="https://picsum.photos/240/160"
              content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
              url="#"
            />
          </div>
          <!-- center content -->
          <div>
            <CardArticle
              class="mb-6 lg:mb-0"
              title="塑膠製儲集框架與RC儲水池差別之處"
              layout="vertical"
              imgSrc="https://picsum.photos/525/350"
              content="塑膠製儲集框架就像樂高積木，輕巧、組裝快、儲水空間大，適合需要快速施工或空間利用最大化的工程；而RC儲水池就像傳統的水泥建築，雖然堅固，但施工費時，儲水效率也相對較低。"
              url="#"
            />

            <div class="cross-line my-6 lg:my-10 hidden lg:block"></div>

            <CardArticle
              class="mb-6"
              title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
              layout="horizontal"
              imgSrc="https://picsum.photos/240/160"
              content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
              url="#"
            />

            <CardArticle
              class="mb-6"
              title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
              layout="horizontal"
              imgSrc="https://picsum.photos/240/160"
              content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
              url="#"
            />
          </div>
        </div>

        <AdSection maxWidth="650px" imgSrc="https://placehold.co/1440x500?text=AD" />
      </div>
      <!-- right list place -->
      <div class="col-span-1 md:col-span-3 lg:col-span-2">
        <h4 class="mb-4 lg:mb-6 font-bold">雨水再利用</h4>
        <ul class="dot-list">
          <li>
            <NuxtLink href="#">
              地下儲水： <br />
              <span class="max-text-one-lines">儲集框架的加分要點總整理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              地上型水撲滿： <br />
              <span class="max-text-one-lines">收集屋面雨水的流程供您參考</span>
            </NuxtLink>
          </li>
        </ul>

        <div class="cross-line my-6 lg:my-10 hidden lg:block"></div>

        <h4 class="mb-4 lg:mb-6 font-bold">景觀排水</h4>
        <ul class="dot-list mb-6 lg:mb-0">
          <li>
            <NuxtLink href="#">
              雜草太多： <br />
              <span class="max-text-one-lines">優雅大方、極具質感的先進抑草蓆</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              表面分隔材： <br />
              <span class="max-text-one-lines">新款式的草皮分隔板幫助您分隔表面</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              ≤30cm淺型花台排水： <br />
              <span class="max-text-one-lines">小型花卉、草本植物的淺型花台排水</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              ≥30cm中型及深型花台： <br />
              <span class="max-text-one-lines">灌木、喬木等木本植物的植栽槽排水</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              薄層綠屋頂：<br />
              <span class="max-text-one-lines">淺層綠屋頂的排水設計要點</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              架高地板：<br />
              <span class="max-text-one-lines">兼具隔熱、排水的美觀新選擇</span>
            </NuxtLink>
          </li>
        </ul>

        <div class="cross-line my-6 lg:my-10 hidden lg:block"></div>

        <h4 class="mb-4 lg:mb-6 font-bold">城市建築排水</h4>
        <ul class="dot-list">
          <li>
            <NuxtLink href="#">
              建築周圍： <br />
              <span class="max-text-one-lines">建築周圍的排水與防潮濕觀念彙整</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              車道異音： <br />
              <span class="max-text-one-lines">擾人的車道異音解決方案</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">
              屋頂： <br />
              <span class="max-text-one-lines">從點狀排水進階為線型排水</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
