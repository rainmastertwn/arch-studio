<script lang="ts" setup>
import TitleSection from '~/components/class/titleSection.vue'
import CardArticle from '~/components/common/cardArticle/index.vue'
import AdSection from '~/components/common/adSection.vue'
</script>

<template>
  <section class="container">
    <TitleSection
      title="LID 低衝擊開發"
      buttonImgSrc="lid"
      buttonName="LID 低衝擊開發"
      description="LID低衝擊開發是一種創新的開發模式，它的核心理念是讓城市開發對水文環境的衝擊降到最低。LID透過一系列分散式的、小規模的設施，例如綠屋頂、雨水花園、透水鋪面和生物滯留池等，來管理雨水。這些設施就像海綿一樣，能有效滯留、滲透和淨化雨水，從源頭減少逕流，讓城市在開發的同時也能保有自然的水循環能力。"
    />

    <div class="cross-line my-10 lg:my-24"></div>

    <h3 class="side-effect tracking-widest mb-10 font-bold">最新上架</h3>

    <div class="grid grid-cols-1 lg:grid-cols-9 gap-4 md:gap-6 lg:gap-9 mb-20">
      <div class="col-span-6">
        <CardArticle
          class="mb-6"
          type="main"
          title="綠地排水：可快速收集地表逕流水並快速導入地下轉為滲透水的雙重排水方式"
          layout="vertical"
          imgSrc="https://picsum.photos/525/350"
          content="介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文介紹內文"
          url="#"
        />

        <div class="cross-line my-6 lg:my-10"></div>

        <CardArticle
          class="mb-6"
          title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
          layout="horizontal"
          imgSrc="https://picsum.photos/240/160"
          content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
          url="#"
          :columns="[3, 7]"
        />
        <CardArticle
          class="mb-6"
          title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
          layout="horizontal"
          imgSrc="https://picsum.photos/240/160"
          content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
          url="#"
          :columns="[3, 7]"
        />
        <CardArticle
          class="mb-6"
          title="滲透排水管有分成不透水、2/3透水、全周透水，我該怎麼選"
          layout="horizontal"
          imgSrc="https://picsum.photos/240/160"
          content="滲透排水管的開孔程度會直接影響排水效率、地下水控制、以及周圍土壤的穩定性。該選哪一種，取決於排水目的、土壤條件、地下水位、施工位置等因素"
          url="#"
          :columns="[3, 7]"
        />

        <AdSection imgSrc="https://placehold.co/728x90?text=AD" />
      </div>
      <div class="col-span-3">
        <div class="side-effect mb-10">
          <h4 class="tracking-widest mb-6 font-bold">常見問題</h4>
          <ul class="dot-list">
            <li>
              <NuxtLink href="#">儲集框架的加分要點總整理</NuxtLink>
            </li>
            <li>
              <NuxtLink href="#">滲透排水管管徑與滲透係數及米數的加分關係</NuxtLink>
            </li>
            <li>
              <NuxtLink href="#">滲透陰井大小及個數與計分的相應關係</NuxtLink>
            </li>
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
        </div>

        <AdSection maxWidth="300px" imgSrc="https://placehold.co/300x1050?text=AD" />
      </div>
    </div>
  </section>
</template>
